import "./Theme.css";

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

export default function Palette() {

  function copyToClipboard(event: MouseEvent) {
    const target = event.currentTarget as HTMLElement;
    const variable = target.dataset.variable;
    if (variable) {
      navigator.clipboard.writeText(variable).then(() => {
        // Optionally, you can show a notification or change the icon to indicate success
        console.log(`Copied ${variable} to clipboard`);
      }).catch((err) => {
        console.error(`Failed to copy ${variable} to clipboard:`, err);
      });
    }
  }

  return (
    <article class="container blog">
      <hgroup>
        <h1>Theme</h1>
        <p>Collection of design tokens for the theme.</p>
      </hgroup>
      <section>
        <h2>Color Palette</h2>
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
                  class={`color ${
                    isLight ? "light" : "dark"
                  }`}
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
                    <rect
                      width="14"
                      height="14"
                      x="8"
                      y="8"
                      rx="2"
                      ry="2"
                    ></rect>
                    <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path>
                  </svg>
                </div>
              );
            }),
          ])}
        </div>
      </section>
    </article>
  );
}
