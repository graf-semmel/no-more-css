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
            <form class="gap-4">
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
              <fieldset class="gap-4">
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
          control. The <code>label</code> element is used to provide a caption.
        </p>
        <ElementPreview
          html={
            <form class="gap-4">
              <fieldset>
                <legend>Checkboxes</legend>
                <label for="checkbox 1">
                  <input id="checkbox 1" type="checkbox" value="value 1" />
                  Checkbox 1
                </label>
                <label for="checkbox 2">
                  <input
                    id="checkbox 2"
                    type="checkbox"
                    value="value 2"
                    checked
                  />
                  Checkbox 2
                </label>
              </fieldset>
              <fieldset>
                <legend>Reversed</legend>
                <label for="checkbox 3">
                  Checkbox 3
                  <input
                    id="checkbox 3"
                    type="checkbox"
                    value="value 3"
                    checked
                  />
                </label>
                <label for="checkbox 4">
                  Checkbox 4
                  <input id="checkbox 4" type="checkbox" value="value 4" />
                </label>
              </fieldset>
            </form>
          }
        />
      </section>
      <section>
        <h2>Radio buttons</h2>
        <p>
          The <code>radio</code> input type is used to create a radio button
          control. The <code>label</code> element is used to provide a caption.
        </p>
        <ElementPreview
          html={
            <form class="gap-4">
              <fieldset>
                <legend>Radio buttons</legend>
                <label for="radio 1">
                  <input
                    id="radio 1"
                    type="radio"
                    name="radio 1"
                    value="value 1"
                  />
                  Radio 1
                </label>
                <label for="radio 2">
                  <input
                    id="radio 2"
                    type="radio"
                    name="radio 1"
                    value="value 2"
                    checked
                  />
                  Radio 2
                </label>
              </fieldset>
              <fieldset>
                <legend>Reversed</legend>
                <label for="radio 3">
                  Radio 3
                  <input
                    id="radio 3"
                    type="radio"
                    name="radio 2"
                    value="value 3"
                    checked
                  />
                </label>
                <label for="radio 4">
                  Radio 4
                  <input
                    id="radio 4"
                    type="radio"
                    name="radio 2"
                    value="value 4"
                  />
                </label>
              </fieldset>
            </form>
          }
        />
      </section>
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
