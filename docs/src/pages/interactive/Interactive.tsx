import Code from "../../Code";

function Interactive() {
  return (
    <container class="blog">
      <hgroup>
        <h1>Interactive elements</h1>
        <p>Collection of interactive elements like buttons and links.</p>
      </hgroup>
      <article>
        <h2>Links</h2>
        <p>
          {["default", "hover", "active", "visited", "focus"].map(
            (state, idx, arr) => (
              <>
                <a
                  href="#"
                  class={state === "default" ? "" : state}
                  style={{
                    "pointer-events": "none",
                    cursor: "none",
                  }}
                >
                  {state === "default" ? state : `:${state}`}
                </a>
                {idx < arr.length - 1 && " / "}
              </>
            )
          )}
        </p>
        <a href="https://github.com/graf-semmel/no-more-css">A normal link</a>
        <Code>
          <a href="https://github.com/graf-semmel/no-more-css">A normal link</a>
        </Code>
      </article>
      <section>
        <h2>Buttons</h2>
        <p>
          Buttons are used to trigger an action, like submitting a form or
          opening a modal.
        </p>
        <column class="gap-4">
          <row class="gap-2">
            <button>default</button>
            <button class="primary">primary</button>
            <button class="secondary">secondary</button>
            <button class="success">success</button>
            <button class="error">error</button>
            <button class="base">base</button>
          </row>

          <Code>
            <button>default</button>
            <button class="primary">primary</button>
            <button class="secondary">secondary</button>
            <button class="success">success</button>
            <button class="error">error</button>
            <button class="base">base</button>
          </Code>
          <row class="gap-2 items-baseline">
            <button class="XS">extra small</button>
            <button class="S">small</button>
            <button>normal</button>
            <button class="L">large</button>
            <button class="XL">extra large</button>
          </row>
          <Code>
            <button class="XS">extra small</button>
            <button class="S">small</button>
            <button>normal</button>
            <button class="L">large</button>
            <button class="XL">extra large</button>
          </Code>
          <row class="gap-2">
            <button class="outline">default</button>
            <button class="outline primary">primary</button>
            <button class="outline secondary">secondary</button>
            <button class="outline success">success</button>
            <button class="outline error">error</button>
          </row>
          <Code>
            <button class="outline">default</button>
            <button class="outline primary">primary</button>
            <button class="outline secondary">secondary</button>
            <button class="outline success">success</button>
            <button class="outline error">error</button>
          </Code>
          <row class="gap-2">
            <button disabled>disabled</button>
            <button class="primary" disabled>
              primary disabled
            </button>
            <button class="outline" disabled>
              outline disabled
            </button>
          </row>
          <Code>
            <button disabled>disabled</button>
            <button class="primary" disabled>
              primary disabled
            </button>
            <button class="outline" disabled>
              outline disabled
            </button>
          </Code>
        </column>
      </section>
    </container>
  );
}

export default Interactive;
