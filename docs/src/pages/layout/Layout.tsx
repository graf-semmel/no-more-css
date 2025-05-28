import Code, { escapeHtml } from "../../Code";
import Footer from "./Footer";

export default function Layout() {
  return (
    <container>
      <section>
        <hgroup>
          <h1>Layout</h1>
          <p>Layouts are the foundation of your website.</p>
        </hgroup>
      </section>
      <section>
        <h2>Section</h2>
        <p>
          The <code>section</code> element defines a section in a document.
          According to W3C's HTML documentation: "A section is a thematic
          grouping of content, typically with a heading."
        </p>
        <Code>
          <section>
            <h2>Section</h2>
            <p>
              The <code>section</code> element defines a section in a document.
              According to W3C's HTML documentation: "A section is a thematic
              grouping of content, typically with a heading."
            </p>
          </section>
        </Code>
      </section>
      <section>
        <h2>Article</h2>
        <p>
          The <code>article</code> element specifies independent, self-contained
          content. An article should make sense on its own, and it should be
          possible to distribute it independently from the rest of the web site.
        </p>
        <Code>
          <article>
            <h2>Article</h2>
            <p>
              The <code>article</code> element specifies independent,
              self-contained content. An article should make sense on its own,
              and it should be possible to distribute it independently from the
              rest of the web site.
            </p>
          </article>
        </Code>
      </section>
      <section>
        <h2>Header</h2>
        <p>
          The <code>header</code> element represents a container for
          introductory content or a set of navigational links.
        </p>
        <h3>As page header</h3>
        <pre>
          <code>
            &lt;body&gt;
            <br />
            {escapeHtml(
              <header>
                <nav>
                  <a href="/">NO-MORE-CSS</a>
                  <a href="/layout">Layout</a>
                </nav>
              </header>,
              1
            )}
            <br />
            ...
            <br />
            &lt;/body&gt;
          </code>
        </pre>
      </section>
      <Footer />
      <section>
        <h2>Row</h2>
        <p>
          The <code>row</code> element represents a row in a grid system. It is
          using flexbox to layout its children.
        </p>
        <Code>
          <row>
            <p>Row</p>
            <p>Row</p>
          </row>
        </Code>
      </section>
      <section>
        <h2>Column</h2>
        <p>
          The <code>column</code> element represents a column in a grid system.
          It is using flexbox to layout its children.
        </p>
        <Code>
          <column>
            <p>Column</p>
            <p>Column</p>
          </column>
        </Code>
      </section>
    </container>
  );
}
