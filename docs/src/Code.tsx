import { JSX, children } from "solid-js";
import { html_beautify } from "js-beautify";

export default function Code(props: { children: JSX.Element }) {
  const html = escapeHtml(props.children);

  return (
    <pre>
      <code>{html}</code>
    </pre>
  );
}

export function escapeHtml(html: JSX.Element, indentLevel = 0) {
  const resolved = children(() => html);
  return resolved
    .toArray()
    .map((c) => {
      console.log("toArray", c);
      return c;
    })
    .filter((c) => c instanceof HTMLElement)
    .map((c) => {
      console.log("filter", c);
      return c;
    })
    .map((c) => c as HTMLElement)
    .map((c) => c.outerHTML)
    .map((html) =>
      html_beautify(html, {
        indent_size: 2,
        inline: [],
        wrap_line_length: 80,
        indent_level: indentLevel,
      })
    )
    .join("\n");
}
