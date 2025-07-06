# No More CSS

No More CSS is a lightweight and modern CSS framework that focuses on simplicity and developer experience. It encourages you to use semantic HTML as the foundation of your web pages, using utility classes only when necessary to adjust or enhance your design. The framework is built on modern CSS features and is designed to be extensible and easy to use.

## Features

*   **Lightweight:** A minimal footprint for faster loading times.
*   **Modern CSS:** Utilizes modern CSS features like CSS variables and CSS layers for powerful and flexible styling.
*   **Utility-First (But Minimal):** Provides a set of utility classes that work like functions to build any design directly in your markup, but encourages using them sparingly.
*   **Leverage Semantic HTML:** Promotes the use of semantic HTML elements as the primary way to structure and style content, with classes used only for adjustments.
*   **Standards-Based:** Adheres to CSS standards for better browser compatibility.
*   **Sensible Defaults:** Comes with a set of reasonable defaults for common HTML elements.
*   **Semantic HTML:** Encourages the use of semantic HTML for better accessibility and SEO.
*   **Component-Based:** Includes a set of standard components to get you started.
*   **Extensible:** Easily extend and customize the framework to fit your needs.
*   **Learn CSS, Don't Abstract It:** Encourages learning and understanding CSS fundamentals, rather than hiding them behind heavy abstractions.

## Project Structure

- **src/** — Contains the core CSS framework files (utility classes, components, variables, etc.).
- **docs/** — Contains the documentation website, built with SolidJS, which demonstrates and documents the framework using the styles from `src`.

## Installation

### Package Managers

You can install No More CSS using your favorite package manager:

```bash
npm install no-more-css
# or
pnpm install no-more-css
# or
yarn add no-more-css
```

### CDN

You can also use No More CSS directly from a CDN:

```html
<link rel="stylesheet" href="https://unpkg.com/no-more-css/dist/style.css">
```

## Usage

To get started, simply include the `no-more-css` stylesheet in your HTML file and start using the utility classes.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>No More CSS Example</title>
    <link rel="stylesheet" href="path/to/your/no-more-css.css">
</head>
<body>
    <div class="container p-4">
        <h1 class="text-2xl font-bold">Hello, World!</h1>
        <p class="mt-2">This is a simple example of using No More CSS.</p>
        <button class="btn btn-primary mt-4">Click me</button>
    </div>
</body>
</html>
```

## Documentation

For more detailed information and examples, please visit our [documentation website](docs/index.html).

## Contributing

Contribution guidelines will be added soon.

## License

This project is licensed under the [MIT License](LICENSE).
