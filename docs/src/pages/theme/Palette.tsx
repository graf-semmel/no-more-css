import "./palette-grid.css";

const colorFamilies = [
  "red",
  "orange",
  "yellow",
  "green",
  "cyan",
  "blue",
  "purple",
  "pink",
  "grey",
];
const steps = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900];

export default function Palette() {
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
              return (
                <div class="color" style={{ background: `var(${varName})` }} />
              );
              {
                /* TODO tooltip */
                /* <code class="palette-var">{varName}</code> */
              }
            }),
          ])}
        </div>
      </section>
    </article>
  );
}
