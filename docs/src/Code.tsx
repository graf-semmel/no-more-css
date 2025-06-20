import {
  ChildrenReturn,
  JSX,
  children,
  createEffect,
  createSignal,
} from "solid-js";
import { html_beautify } from "js-beautify";
import hljs from "highlight.js";

export default function Code(props: {
  children: string | JSX.Element;
  language?: string;
  noHighlight?: boolean;
  renderKey?: () => any;
}) {
  const [codeString, setCodeString] = createSignal("");

  createEffect(() => {
    if (props.renderKey) {
      props.renderKey();
    }

    const asString =
      typeof props.children === "string"
        ? props.children
        : escapeHtml(children(() => props.children));

    if (props.noHighlight) {
      return setCodeString(asString);
    }

    const syntaxHighlight = hljs.highlight(asString, {
      language: props.language || "html",
    });
    setCodeString(syntaxHighlight.value);
  });

  return (
    <>
      <pre>
        <code
          class={props.noHighlight ? "" : "hljs"}
          innerHTML={codeString()}
        />
      </pre>
    </>
  );
}

export function escapeHtml(html: ChildrenReturn, indentLevel = 0): string {
  return html
    .toArray()
    .filter((c) => c instanceof HTMLElement)
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
