import "./Theme.css";
import { createSignal } from "solid-js";

export default function Theme() {
  return (
    <article class="container blog">
      <hgroup>
        <h1>Theme</h1>
        <p>Collection of design tokens for the theme.</p>
      </hgroup>
      <SemanticColors />
      <Palette />
    </article>
  );
}

function SemanticColors() {
  // List of semantic color tokens and their variants
  const semanticColors = [
    {
      name: "primary",
      label: "Primary",
      variants: [
        "primary",
        "primary-accent",
        "primary-muted",
        "primary-content",
      ],
    },
    {
      name: "secondary",
      label: "Secondary",
      variants: [
        "secondary",
        "secondary-accent",
        "secondary-muted",
        "secondary-content",
      ],
    },
    {
      name: "success",
      label: "Success",
      variants: [
        "success",
        "success-accent",
        "success-muted",
        "success-content",
      ],
    },
    {
      name: "danger",
      label: "danger",
      variants: ["danger", "danger-accent", "danger-muted", "danger-content"],
    },
    {
      name: "warning",
      label: "Warning",
      variants: [
        "warning",
        "warning-accent",
        "warning-muted",
        "warning-content",
      ],
    },
    {
      name: "info",
      label: "Info",
      variants: ["info", "info-accent", "info-muted", "info-content"],
    },
    {
      name: "surface",
      label: "Surface",
      variants: [
        "surface",
        "surface-accent",
        "surface-muted",
        "surface-content",
      ],
    },
    {
      name: "disabled",
      label: "Disabled",
      variants: ["disabled", "disabled-content"],
    },
    {
      name: "fg",
      label: "Foreground",
      variants: ["fg", "fg-muted"],
    },
    {
      name: "bg",
      label: "Background",
      variants: ["bg"],
    },
  ];

  // Interactive state for base color and deltas
  const [accentDelta, setAccentDelta] = createSignal(0.1);
  const [mutedDelta, setMutedDelta] = createSignal(-0.1);

  // Handler to update CSS variables for deltas
  function updateDelta(varName: string, value: number) {
    document.documentElement.style.setProperty(varName, value.toString());
  }

  return (
    <section>
      <h2>Semantic Colors</h2>
      <div>
        <div class="row gap-4">
          <label style={{ display: "block", "margin-top": "1rem" }}>
            Accent delta:
            <input
              type="range"
              min={0}
              max={0.3}
              step={0.01}
              value={accentDelta()}
              onInput={(e) => {
                setAccentDelta(Number(e.currentTarget.value));
                updateDelta("--accent-delta", Number(e.currentTarget.value));
              }}
            />
            <span>{accentDelta()}</span>
          </label>
          <label style={{ display: "block", "margin-top": "1rem" }}>
            Muted delta:
            <input
              type="range"
              min={-0.3}
              max={0}
              step={0.01}
              value={mutedDelta()}
              onInput={(e) => {
                setMutedDelta(Number(e.currentTarget.value));
                updateDelta("--muted-delta", Number(e.currentTarget.value));
              }}
            />
            <span>{mutedDelta()}</span>
          </label>
        </div>
        <ul class="no-marker p-0 m-0 row wrap gap-4 items-grow">
          {semanticColors.map((color) => (
            <li>
              {/* {color.label} */}
              <ul class="no-marker p-0 m-0">
                {color.variants.map((variant) => (
                  <li class="row gap-1 text-xs items-center mb-1">
                    <div
                      class="p-3 radius border"
                      style={{
                        background: `var(--${variant})`,
                      }}
                      title={`var(--${variant})`}
                    />
                    {`--${variant}`}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
      <p style={{ "margin-top": "2rem" }}>
        <b>Tip:</b> Select a base color to highlight it. Adjust the accent/muted
        delta sliders to see all variants update live.
      </p>
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
