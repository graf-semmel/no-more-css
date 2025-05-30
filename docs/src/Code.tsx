import { JSX, children } from "solid-js";
import { html_beautify } from "js-beautify";
import hljs from "highlight.js";

export default function Code(props: {
  children: string | JSX.Element;
  language?: string;
  noHighlight?: boolean;
  
}) {
  const code = () => {
    const asString =
      typeof props.children === "string"
        ? props.children
        : escapeHtml(props.children);
    if (props.noHighlight) {
      return asString;
    }
    const t = hljs.highlight(asString, { language: props.language || "html" });
    return t.value;
  };

  return (
    <pre>
      <code class={props.noHighlight ? "" : "hljs"} innerHTML={code()}></code>
    </pre>
  );
}

export function escapeHtml(html: JSX.Element, indentLevel = 0): string {
  console.log("escapeHtml", html, indentLevel);
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
