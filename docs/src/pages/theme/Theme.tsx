import "./Theme.css";

export default function Theme() {
  return (
    <article class="container blog">
      <hgroup>
        <h1>Theme</h1>
        <p>Collection of design tokens for the theme.</p>
      </hgroup>
      <Colors />
      <Palette />
    </article>
  );
}

function Colors() {
  // List of primary semantic color tokens, their explanations, and class names (without leading dot)
  const tokens = [
    {
      name: "--primary",
      desc: "Primary brand/action color",
    },
    {
      name: "--primary-content",
      desc: "Content color on primary backgrounds",
    },
    {
      name: "--secondary",
      desc: "Secondary/accent color",
    },
    {
      name: "--secondary-content",
      desc: "Content color on secondary backgrounds",
    },
    {
      name: "--success",
      desc: "Success/confirmation color",
    },
    {
      name: "--success-content",
      desc: "Content color on success backgrounds",
    },
    { name: "--danger", desc: "Danger/error color" },
    {
      name: "--danger-content",
      desc: "Content color on danger backgrounds",
    },
    { name: "--warning", desc: "Warning/alert color" },
    {
      name: "--warning-content",
      desc: "Content color on warning backgrounds",
    },
    { name: "--info", desc: "Info/notification color" },
    {
      name: "--info-content",
      desc: "Content color on info backgrounds",
    },
    {
      name: "--canvas",
      desc: "Main app background (canvas)",
    },
    {
      name: "--canvas-content",
      desc: "Content color on canvas background",
    },
    {
      name: "--surface",
      desc: "Surface color for cards, panels, etc.",
    },
    {
      name: "--surface-content",
      desc: "Content color on surface backgrounds",
    },
    {
      name: "--disabled",
      desc: "Disabled element background",
    },
    {
      name: "--disabled-content",
      desc: "Content color for disabled elements",
    },
  ];

  return (
    <section>
      <h2>Colors</h2>
      <p>
        Here are the main color tokens used in the theme. Each one has a specific job—like backgrounds, text, or alerts—so you can keep your colors consistent and easy to update.
      </p>
      <table>
        <thead>
          <tr>
            <th>Preview</th>
            <th>CSS variable</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {tokens.map((token) => (
            <tr>
              <td>
                <div class="p-3" style={{ background: `var(${token.name})` }} />
              </td>
              <td>
                <code>{token.name}</code>
              </td>
              <td>{token.desc}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}

function Palette() {
  // Sorted color families: greyscale, then spectrum (red to violet), then accent colors
  const colorFamilies = [
    "red",
    "orange",
    "yellow",
    "lime",
    "green",
    "emerald",
    "teal",
    "cyan",
    "sky",
    "blue",
    "indigo",
    "violet",
    "purple",
    "fuchsia",
    "pink",
    "rose",
    "amber",
    "grey",
  ];
  const steps = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950];

  function copyToClipboard(event: MouseEvent) {
    const target = event.currentTarget as HTMLElement;
    const variable = target.dataset.variable;
    if (variable) {
      navigator.clipboard
        .writeText(variable)
        .then(() => {
          // Optionally, you can show a notification or change the icon to indicate success
          console.log(`Copied ${variable} to clipboard`);
        })
        .catch((err) => {
          console.error(`Failed to copy ${variable} to clipboard:`, err);
        });
    }
  }

  return (
    <section>
      <h2>Color Palette</h2>
      <p>
        Each color in the palette is defined as a CSS variable using the format{" "}
        <code>--color-step</code>. For example, the cell in the <b>blue</b> row and{" "}
        <b>500</b> column uses <code>--blue-500</code>. You can use these variables directly in your styles for consistent color usage.
      </p>
      <div id="palette">
        <div></div>
        {steps.map((step) => (
          <div class="header">{step}</div>
        ))}
        {colorFamilies.map((family) => [
          <div class="header justify-self-start">{family}</div>,
          ...steps.map((step) => {
            const varName = `--${family}-${step}`;
            const isLight = steps.indexOf(step) < 6;
            return (
              <div
                class={`color ${isLight ? "light" : "dark"}`}
                style={{ background: `var(${varName})` }}
                data-variable={varName}
                onClick={copyToClipboard}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-copy"
                >
                  <rect width="14" height="14" x="8" y="8" rx="2" ry="2"></rect>
                  <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path>
                </svg>
              </div>
            );
          }),
        ])}
      </div>
    </section>
  );
}
