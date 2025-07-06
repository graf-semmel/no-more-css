import Code from "../../components/Code";
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
        <p>
          Headings structure your content, making it easy to scan and understand
          the hierarchy of information. Use <code>h1</code> for the main title,
          and <code>h2</code>–<code>h6</code> for sub-sections. Common CSS
          properties for styling headings include <code>font-size</code>,
          <code>font-weight</code>, <code>margin</code>,{" "}
          <code>line-height</code>, and <code>letter-spacing</code> to control
          their appearance and spacing.
        </p>
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
          The <code>hgroup</code> element groups a heading (e.g.,{" "}
          <code>h1</code>) with its associated content, like a subheading or
          tagline, which is often in a <code>p</code> tag. This semantically
          links the heading and its description as a single unit.
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
            <Code>
              <button>Default</button>
            </Code>
          </div>
          <Code>
            {`<pre>
  <code>
    <button>Default</button>
  </code>
</pre>`}
          </Code>
        </div>
      </section>
      <InlineTextElements />
      <section>
        <h2>Block quotes</h2>
        <blockquote cite="https://www.huxley.net/bnw/four.html">
          <p>
            It is a good thing for an uneducated man to read books of
            quotations.
          </p>
          <cite>Winston S. Churchill, Brave New World</cite>
        </blockquote>
        <Code>
          <blockquote cite="https://www.huxley.net/bnw/four.html">
            <p>
              It is a good thing for an uneducated man to read books of
              quotations.
            </p>
            <cite>Winston S. Churchill, Brave New World</cite>
          </blockquote>
        </Code>
      </section>
    </article>
  );
}

export default Typo;
