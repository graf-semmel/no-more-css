import Code from "../../Code";

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
            <a href="#">default</a>
            <br />
            <a class="hover" href="#">
              hover
            </a>
            <br />
            <a class="active" href="#">
              active
            </a>
            <br />
            <a class="visited" href="#">
              visited
            </a>
            <br />
            <a class="focus" href="#">
              focus
            </a>
            <br />
          </main>
          <Code>
            <a href="#">A normal link</a>
          </Code>
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
              <button>default</button>
              <button class="primary">primary</button>
              <button class="secondary">secondary</button>
              <button class="success">success</button>
              <button class="error">error</button>
              <button class="base">base</button>
            </row>
          </main>
          <Code>
            <button>default</button>
            <button class="primary">primary</button>
            <button class="secondary">secondary</button>
            <button class="success">success</button>
            <button class="error">error</button>
            <button class="base">base</button>
          </Code>
          <main>
            <row class="gap-2">
              <button class="XS">extra small</button>
              <button class="S">small</button>
              <button>normal</button>
              <button class="L">large</button>
              <button class="XL">extra large</button>
            </row>
          </main>
          <Code>
            <button class="XS">extra small</button>
            <button class="S">small</button>
            <button>normal</button>
            <button class="L">large</button>
            <button class="XL">extra large</button>
          </Code>
          <main>
            <row class="gap-2">
              <button class="outline">default</button>
              <button class="outline primary">primary</button>
              <button class="outline secondary">secondary</button>
              <button class="outline success">success</button>
              <button class="outline error">error</button>
            </row>
          </main>
          <Code>
            <button class="outline">default</button>
            <button class="outline primary">primary</button>
            <button class="outline secondary">secondary</button>
            <button class="outline success">success</button>
            <button class="outline error">error</button>
          </Code>
          <main>
            <row class="gap-2">
              <button disabled>disabled</button>
              <button class="primary" disabled>
                primary disabled
              </button>
              <button class="outline" disabled>
                outline disabled
              </button>
            </row>
          </main>
        </card>
      </section>
    </container>
  );
}

export default Interactive;
