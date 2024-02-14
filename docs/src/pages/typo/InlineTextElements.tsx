import Code from "../../Code";

export default function InlineTextElements() {
  return (
    <section>
      <h2>Inline text elements</h2>
      <dl>
        <dt>Strong</dt>
        <dd>
          <Code>
            <b>Strong</b>
          </Code>
        </dd>
        <dd>
          This text is <b>strongly emphasized</b> for importance.
        </dd>

        <dt>Italic</dt>
        <dd>
          <Code>
            <i>Italic</i>
          </Code>
        </dd>
        <dd>
          Using italics can provide <i>a subtle emphasis</i>.
        </dd>

        <dt>Emphasis</dt>
        <dd>
          <Code>
            <em>Emphasis</em>
          </Code>
        </dd>
        <dd>
          Adding <em>emphasis</em> often changes the tone of a sentence.
        </dd>

        <dt>Underline</dt>
        <dd>
          <Code>
            <u>Underline</u>
          </Code>
        </dd>
        <dd>
          Underlining text can <u>signify its importance</u>.
        </dd>

        <dt>Strikethrough</dt>
        <dd>
          <Code>
            <s>Strikethrough</s>
          </Code>
        </dd>
        <dd>
          <s>Strikethrough</s> is used to show that something is removed or
          incorrect.
        </dd>

        <dt>Highlight</dt>
        <dd>
          <Code>
            <mark>Highlight</mark>
          </Code>
        </dd>
        <dd>
          Words can be <mark>highlighted</mark> to draw attention.
        </dd>

        <dt>Small</dt>
        <dd>
          <Code>
            <small>Small</small>
          </Code>
        </dd>
        <dd>
          Using <small>small text</small> can indicate less importance or size.
        </dd>

        <dt>Subscript</dt>
        <dd>
          <Code>
            <sub>Subscript</sub>
          </Code>
        </dd>
        <dd>
          Chemical formulas use <sub>subscript</sub> for representing elements.
        </dd>

        <dt>Superscript</dt>
        <dd>
          <Code>
            <sup>Superscript</sup>
          </Code>
        </dd>
        <dd>
          Mathematical equations often have <sup>superscript</sup> numbers.
        </dd>

        <dt>Keyboard</dt>
        <dd>
          <Code>
            <kbd>Keyboard</kbd>
          </Code>
        </dd>
        <dd>
          Keyboard input is often represented in <kbd>a unique way</kbd>.
        </dd>

        <dt>Citation</dt>
        <dd>
          <Code>
            <cite>Citation</cite>
          </Code>
        </dd>
        <dd>
          Citations are crucial in <cite>academic writing</cite>.
        </dd>

        <dt>Deleted</dt>
        <dd>
          <Code>
            <del>Deleted</del>
          </Code>
        </dd>
        <dd>
          <del>Deleted text</del> shows what has been removed.
        </dd>

        <dt>Inserted</dt>
        <dd>
          <Code>
            <ins>Inserted</ins>
          </Code>
        </dd>
        <dd>
          <ins>Inserted text</ins> highlights additions to a document.
        </dd>

        <dt>Definition</dt>
        <dd>
          <Code>
            <dfn>Definition</dfn>
          </Code>
        </dd>
        <dd>
          A <dfn>definition</dfn> explains the meaning of a term.
        </dd>
      </dl>
    </section>
  );
}
