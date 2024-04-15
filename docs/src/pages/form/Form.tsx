import { JSX } from "solid-js";
import Tabs from "./Tabs";
import Code from "../../Code";

export default function Form() {
  return (
    <container>
      <hgroup>
        <h1>Forms</h1>
        <p>Collection of common form elements.</p>
      </hgroup>
      <section>
        <h2>Example</h2>
        <ElementPreview
          html={
            <form>
              <label for="name">
                Name
                <input id="name" type="text" placeholder="Name" />
              </label>
              <label for="email">
                Email
                <input id="email" type="email" placeholder="your@email.com" />
              </label>
              <button type="submit">Submit</button>
            </form>
          }
          css={`
            h2 {
              color: red;
            }
          `}
        />
      </section>
      <section>
        <h2>Fieldset</h2>
        <p>
          The <code>fieldset</code> element is used to group related elements in
          a form. The <code>legend</code> element is used to provide a caption
          for the
          <code>fieldset</code> element.
        </p>
        <ElementPreview
          html={
            <form>
              <fieldset>
                <legend>Sign up</legend>
                <label for="name">
                  Name
                  <input id="name" type="text" placeholder="Name" />
                </label>
                <label for="email">
                  Email
                  <input id="email" type="email" placeholder="your@email.com" />
                </label>
              </fieldset>
              <button type="submit">Submit</button>
            </form>
          }
          css={`
            h2 {
              color: red;
            }
          `}
        />
      </section>
      <section>
        <h2>Input</h2>
        <p>
          The <code>input</code> element is used to create form controls. The
          type attribute specifies the type of input element to display.
        </p>
        <ElementPreview
          html={
            <form>
              <input type="text" placeholder="text" />
              <input type="password" placeholder="password" />
              <input type="email" placeholder="email" />
              <input type="number" placeholder="number" />
              <input type="tel" placeholder="tel" />
              <input type="url" placeholder="url" />
              <input type="search" placeholder="search" />
            </form>
          }
        />
      </section>
      <section>
        <h2>Search</h2>
        <p>
          The <code>search</code> input type is used to create a text field for
          entering a search string.
        </p>
        <ElementPreview
          html={
            <form>
              <input type="search" placeholder="search" />
            </form>
          }
        />
      </section>
      <section>
        <h2>Checkbox</h2>
        <p>
          The <code>checkbox</code> input type is used to create a checkbox
          control.
        </p>
        <ElementPreview
          html={
            <form>
              <label for="checkbox">
                Checkbox 1
                <input id="checkbox 1" type="checkbox" />
              </label>
              <label for="checkbox">
                Checkbox 2
                <input id="checkbox 2" type="checkbox" />
              </label>
            </form>
          }
        />
      </section>
      <Tabs
        items={[
          { label: "Tab 1", content: <p>Hello World from Tab 1!</p> },
          { label: "Tab 2", content: <p>Hello World from Tab 2!</p> },
          { label: "Tab 3", content: <p>Hello World from Tab 3!</p> },
        ]}
      />
    </container>
  );
}

function ElementPreview(props: { html: JSX.Element; css: string }) {
  return (
    <Tabs
      items={[
        { label: "Preview", content: props.html },
        { label: "HTML", content: <Code>{props.html}</Code> },
        {
          label: "CSS",
          content: (
            <pre>
              <code>{props.css}</code>
            </pre>
          ),
        },
      ]}
    />
  );
}
