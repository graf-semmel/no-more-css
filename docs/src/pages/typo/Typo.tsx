import Code from "../../Code";
import InlineTextElements from "./InlineTextElements";
import Lists from "./Lists";

function Typo() {
  return (
    <article class="container blog">
      <hgroup>
        <h1>Typography</h1>
        <p>Collection of text elements and styles.</p>
      </hgroup>
      <section>
        <h2>Headings</h2>
        <div class="row gap-2">
          <div class="canvas grow">
            <h1>Heading 1</h1>
            <h2>Heading 2</h2>
            <h3>Heading 3</h3>
            <h4>Heading 4</h4>
            <h5>Heading 5</h5>
            <h6>Heading 6</h6>
          </div>
          <Code>
            <h1>Heading 1</h1>
            <h2>Heading 2</h2>
            <h3>Heading 3</h3>
            <h4>Heading 4</h4>
            <h5>Heading 5</h5>
            <h6>Heading 6</h6>
          </Code>
        </div>
      </section>
      <section>
        <h2>Header groups</h2>
        <p>
          The hgroup element represents a heading and related content. The
          element may be used to group an h1–h6 element with one or more p
          elements containing content representing a subheading, alternative
          title, or tagline.
        </p>
        <div class="row gap-2">
          <div class="canvas grow">
            <hgroup>
              <h1>Heading</h1>
              <p>Some meaningful description.</p>
            </hgroup>
          </div>
          <Code>
            <hgroup>
              <h1>Heading</h1>
              <p>Some meaningful description.</p>
            </hgroup>
          </Code>
        </div>
      </section>
      <Lists />
      <section>
        <h2>Code blocks</h2>
        <div class="row gap-2">
          <div class="canvas grow">
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
          </div>
          <Code>
            <button>Default</button>
          </Code>
        </div>
      </section>
      <InlineTextElements />
      <section>
        <h2>Block quotes</h2>
        <div class="row gap-2">
          <div class="canvas grow">
            <blockquote cite="https://www.huxley.net/bnw/four.html">
              <p>
                It is a good thing for an uneducated man to read books of
                quotations.
              </p>
              <cite>Winston S. Churchill, Brave New World</cite>
            </blockquote>
          </div>
          <Code>
            <blockquote cite="https://www.huxley.net/bnw/four.html">
              <p>
                It is a good thing for an uneducated man to read books of
                quotations.
              </p>
              <cite>Winston S. Churchill, Brave New World</cite>
            </blockquote>
          </Code>
        </div>
      </section>
    </article>
  );
}

export default Typo;
