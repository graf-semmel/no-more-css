import Code from "./Code";

function Typo() {
  return (
    <container>
      <hgroup>
        <h1>Typography</h1>
        <p>Collection of text elements and styles.</p>
      </hgroup>
      <section>
        <h2>Headings</h2>
        <card>
          <main>
            <h1>Heading 1</h1>
            <h2>Heading 2</h2>
            <h3>Heading 3</h3>
            <h4>Heading 4</h4>
            <h5>Heading 5</h5>
            <h6>Heading 6</h6>
          </main>
          <pre>
            <Code>
              <h1>Heading 1</h1>
              <h2>Heading 2</h2>
              <h3>Heading 3</h3>
              <h4>Heading 4</h4>
              <h5>Heading 5</h5>
              <h6>Heading 6</h6>
            </Code>
          </pre>
        </card>
      </section>
      <section>
        <h2>Code blocks</h2>
        <card>
          <main>
            <p>position the Code inline to avoid additional padding</p>
            <pre>
              <Code>
                <pre>
                  <Code>
                    <button>Default</button>
                  </Code>
                </pre>
              </Code>
            </pre>
          </main>
          <pre>
            <Code>
              <button>Default</button>
            </Code>
          </pre>
        </card>
      </section>
      <section>
        <h2>Inline text elements</h2>
        <card>
          <main>
            <dl>
              <dt>
                <b>Strong</b> |{" "}
                <Code>
                  <b>Strong</b>
                </Code>
              </dt>
              <dd>This text is strongly emphasized for importance.</dd>

              <dt>
                <i>Italic</i> |{" "}
                <Code>
                  <i>Italic</i>
                </Code>
              </dt>
              <dd>Using italics can provide a subtle emphasis.</dd>

              <dt>
                <em>Emphasis</em> |{" "}
                <Code>
                  <em>Emphasis</em>
                </Code>
              </dt>
              <dd>Adding emphasis often changes the tone of a sentence.</dd>

              <dt>
                <u>Underline</u> |{" "}
                <Code>
                  <u>Underline</u>
                </Code>
              </dt>
              <dd>Underlining text can signify its importance.</dd>

              <dt>
                <s>Strikethrough</s> |{" "}
                <Code>
                  <s>Strikethrough</s>
                </Code>
              </dt>
              <dd>
                Strikethrough is used to show that something is removed or
                incorrect.
              </dd>

              <dt>
                <mark>Highlight</mark> |{" "}
                <Code>
                  <mark>Highlight</mark>
                </Code>
              </dt>
              <dd>Words can be highlighted to draw attention.</dd>

              <dt>
                <small>Small</small> |{" "}
                <Code>
                  <small>Small</small>
                </Code>
              </dt>
              <dd>Using small text can indicate less importance or size.</dd>

              <dt>
                <sub>Subscript</sub> |{" "}
                <Code>
                  <sub>Subscript</sub>
                </Code>
              </dt>
              <dd>
                Chemical formulas use subscript for representing elements.
              </dd>

              <dt>
                <sup>Superscript</sup> |{" "}
                <Code>
                  <sup>Superscript</sup>
                </Code>
              </dt>
              <dd>Mathematical equations often have superscript numbers.</dd>

              <dt>
                <kbd>Keyboard</kbd> |{" "}
                <Code>
                  <kbd>Keyboard</kbd>
                </Code>
              </dt>
              <dd>Keyboard input is often represented in a unique way.</dd>

              <dt>
                <cite>Citation</cite> |{" "}
                <Code>
                  <cite>Citation</cite>
                </Code>
              </dt>
              <dd>Citations are crucial in academic writing.</dd>

              <dt>
                <del>Deleted</del> |{" "}
                <Code>
                  <del>Deleted</del>
                </Code>
              </dt>
              <dd>Deleted text shows what has been removed.</dd>

              <dt>
                <ins>Inserted</ins> |{" "}
                <Code>
                  <ins>Inserted</ins>
                </Code>
              </dt>
              <dd>Inserted text highlights additions to a document.</dd>

              <dt>
                <dfn>Definition</dfn> |{" "}
                <Code>
                  <dfn>Definition</dfn>
                </Code>
              </dt>
              <dd>A definition explains the meaning of a term.</dd>
            </dl>
          </main>
        </card>
      </section>
      <section>
        <h2>Block quotes</h2>
        <card>
          <main>
            <blockquote cite="https://www.huxley.net/bnw/four.html">
              <p>
                It is a good thing for an uneducated man to read books of
                quotations.
              </p>
              <cite>Winston S. Churchill, Brave New World</cite>
            </blockquote>
          </main>
          <pre>
            <Code>
              <blockquote cite="https://www.huxley.net/bnw/four.html">
                <p>
                  It is a good thing for an uneducated man to read books of
                  quotations.
                </p>
                <cite>Winston S. Churchill, Brave New World</cite>
              </blockquote>
            </Code>
          </pre>
        </card>
      </section>
    </container>
  );
}

export default Typo;
