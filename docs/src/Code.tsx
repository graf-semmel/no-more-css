import { JSX, children } from "solid-js";
import { html_beautify } from "js-beautify";

function Code(props: { children: JSX.Element }) {
  const resolved = children(() => props.children);

  const html = resolved
    .toArray()
    .filter((c) => c instanceof HTMLElement)
    .map((c) => c as HTMLElement)
    .map((c) => c.outerHTML)
    .map((html) =>
      html_beautify(html, {
        indent_size: 2,
        inline: [],
        wrap_line_length: 80,
      })
    )
    .join("\n");

  return <code>{html}</code>;
}

export default Code;
