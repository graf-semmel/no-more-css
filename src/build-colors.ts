import { ColorMaker } from "uico";
import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "url";

// Polyfill __dirname for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const build = async () => {
  await writeColors();
};

const writeColors = async () => {
  const colorMaker = new ColorMaker();
  colorMaker.chromas = [0.04, 0.06, 0.11, 0.16, 0.2, 0.23, 0.21, 0.19, 0.17, 0.15, 0.13];

  const colorsDir = path.resolve(__dirname, "colors");

  await fs.mkdir(colorsDir, { recursive: true });

  const promises: Promise<void>[] = [];
  const colorNames: string[] = ["grey"];

  for (const [color, css] of Object.entries(colorMaker.css)) {
    colorNames.push(color);
    promises.push(fs.writeFile(path.join(colorsDir, `${color}.css`), css));
  }

  // Write colors.css that imports all generated color files
  const importLines = colorNames
    .map((name) => `@import './colors/${name}.css';`)
    .join("\n");
  promises.push(fs.writeFile(path.join(__dirname, "colors.css"), importLines));

  await Promise.all(promises);
};

build();
