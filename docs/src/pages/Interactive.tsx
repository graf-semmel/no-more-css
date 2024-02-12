import Code from "../Code";

function Interactive() {
  return (
    <container>
      <hgroup>
        <h1>Interactive elements</h1>
        <p>Collection of interactive elements like buttons and links.</p>
      </hgroup>
      <section>
        <h2>Links</h2>
        <card>
          <main>
            <a href="">A normal link</a>
          </main>
          <pre>
            <Code>
              <a>A normal link</a>
            </Code>
          </pre>
        </card>
      </section>
      <section>
        <h2>Buttons</h2>
        <p>
          Buttons are used to trigger an action, like submitting a form or
          opening a modal.
        </p>
        <card>
          <main>
            <row class="gap-2">
              <button>primary</button>
              <button class="secondary">secondary</button>
              <button class="success">success</button>
              <button class="error">error</button>
              <button class="base">base</button>
            </row>
          </main>
          <pre>
            <Code>
              <button>primary</button>
              <button class="secondary">secondary</button>
              <button class="success">success</button>
              <button class="error">error</button>
              <button class="base">base</button>
            </Code>
          </pre>
          <main>
            <row class="gap-2">
              <button class="XS">extra small</button>
              <button class="S">small</button>
              <button>normal</button>
              <button class="L">large</button>
              <button class="XL">extra large</button>
            </row>
          </main>
          <pre>
            <Code>
              <button class="XS">extra small</button>
              <button class="S">small</button>
              <button>normal</button>
              <button class="L">large</button>
              <button class="XL">extra large</button>
            </Code>
          </pre>
          <main>
            <row class="gap-2">
              <button class="outline">primary</button>
              <button class="secondary outline">secondary</button>
              <button class="success outline">success</button>
              <button class="error outline">error</button>
              <button class="base outline">base</button>
            </row>
          </main>
          <pre>
            <Code>
              <button class="outline">primary</button>
              <button class="secondary outline">secondary</button>
              <button class="success outline">success</button>
              <button class="error outline">error</button>
              <button class="base outline">base</button>
            </Code>
          </pre>
        </card>
      </section>
    </container>
  );
}

export default Interactive;
