# No More CSS Documentation Website

This is the documentation website for the No More CSS framework. It is built with SolidJS and Vite, and serves as both a showcase and a reference for using the framework.

## Purpose

- **Showcase the Framework:** Demonstrates real-world usage and best practices for No More CSS, including semantic HTML and minimal class usage.
- **Interactive Documentation:** Provides guides, examples, and live demos for all features and components of the framework.
- **Uses the Actual CSS:** The site imports the CSS framework directly from the main `src` folder, ensuring all examples use the real library styles.

## Project Structure

- **src/** — SolidJS source code for the documentation site.
- **src/pages/** — Individual documentation pages (e.g., Layout, Form, Typography, Theme).
- **public/** — Static assets (logo, icons, images).
- **vite.config.ts** — Vite configuration, including alias for the CSS framework.

## Development

To run the documentation site locally:

```bash
cd docs
npm install
npm run dev
```

The site will be available at [http://localhost:3000](http://localhost:3000) by default.

## Build

To build the documentation site for production:

```bash
npm run build
```

## Philosophy

- **Real Usage:** The documentation site is a real SolidJS app that uses the No More CSS framework directly, so all examples are accurate and up-to-date.
- **Semantic HTML:** Examples focus on using semantic HTML as the foundation, with utility classes used only for adjustments.

## License

This project is licensed under the [MIT License](../LICENSE).
