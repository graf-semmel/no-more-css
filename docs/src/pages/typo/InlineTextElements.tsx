export default function InlineTextElements() {
  return (
    <section>
      <h2>Inline text elements</h2>
      <div class="row gap-4 items-grow">
        <dl>
          {/* Semantic/importance */}
          <dt>
            <code>{"<b>strong</b>"}</code> &rarr; <b>strong</b>
          </dt>
          <dd>Indicate important text.</dd>
          <dt>
            <code>{"<mark>highlight</mark>"}</code> &rarr;{" "}
            <mark>highlight</mark>
          </dt>
          <dd>Draw attention to text.</dd>
          <dt>
            <code>{"<small>small</small>"}</code> &rarr; <small>small</small>
          </dt>
          <dd>Less important or fine print.</dd>
          <dt>
            <code>{"<i>italic</i>"}</code> &rarr; <i>italic</i>
          </dt>
          <dd>Alternate voice or subtle emphasis.</dd>
          <dt>
            <code>{"<em>emphasis</em>"}</code> &rarr; <em>emphasis</em>
          </dt>
          <dd>Stress a word or phrase.</dd>

          {/* Text decoration */}
          <dt>
            <code>{"<u>underline</u>"}</code> &rarr; <u>underline</u>
          </dt>
          <dd>Signify importance or highlight.</dd>
          <dt>
            <code>{"<s>strikethrough</s>"}</code> &rarr; <s>strikethrough</s>
          </dt>
          <dd>Show something is removed or incorrect.</dd>
          <dt>
            <code>{"<del>deleted</del>"}</code> &rarr; <del>deleted</del>
          </dt>
          <dd>Show what has been removed.</dd>
          <dt>
            <code>{"<ins>inserted</ins>"}</code> &rarr; <ins>inserted</ins>
          </dt>
          <dd>Highlight additions to a document.</dd>
        </dl>
        <dl>
          {/* Code/technical */}
          <dt>
            <code>{"<code>code</code>"}</code> &rarr; <code>code</code>
          </dt>
          <dd>Inline code fragment.</dd>
          <dt>
            <code>{"<kbd>cmd+f</kbd>"}</code> &rarr; <kbd>cmd+f</kbd>
          </dt>
          <dd>Keyboard input or shortcuts.</dd>
          <dt>
            <code>{"<samp>output</samp>"}</code> &rarr; <samp>output</samp>
          </dt>
          <dd>Sample output from a program or computer.</dd>
          <dt>
            <code>{"<var>x</var>"}</code> &rarr; <var>x</var>
          </dt>
          <dd>Variable in a mathematical expression or programming context.</dd>
          {/* Reference/definition */}
          <dt>
            <code>{"<dfn>definition</dfn>"}</code> &rarr; <dfn>definition</dfn>
          </dt>
          <dd>Explain the meaning of a term.</dd>
          <dt>
            <code>{"<cite>citation</cite>"}</code> &rarr; <cite>citation</cite>
          </dt>
          <dd>Reference a creative work or source.</dd>
          <dt>
            <code>{"<q>quote</q>"}</code> &rarr; <q>quote</q>
          </dt>
          <dd>Short inline quotation.</dd>
          {/* Subscript/Superscript */}
          <dt>
            <code>{"<sub>subscript</sub>"}</code> &rarr; <sub>subscript</sub>
          </dt>
          <dd>Chemical formulas or math.</dd>
          <dt>
            <code>{"<sup>superscript</sup>"}</code> &rarr;{" "}
            <sup>superscript</sup>
          </dt>
          <dd>Exponents or footnotes.</dd>
        </dl>
      </div>
      <dl>
        <dt>
          <code>{'<abbr title="HyperText Markup Language">html</abbr>'}</code>{" "}
          &rarr; <abbr title="HyperText Markup Language">html</abbr>
        </dt>
        <dd>Abbreviation or acronym, with an optional description.</dd>
        <dt>
          <code>{'<time datetime="2025-06-22">June 22, 2025</time>'}</code>{" "}
          &rarr; <time dateTime="2025-06-22">June 22, 2025</time>
        </dt>
        <dd>Represents a specific period in time.</dd>
      </dl>
    </section>
  );
}
