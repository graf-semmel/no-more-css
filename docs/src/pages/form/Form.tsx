import { JSX } from "solid-js";
import Tabs from "./Tabs";
import Code from "../../components/Code";

export default function Form() {
  return (
    <div class="container blog">
      <hgroup>
        <h1>Forms</h1>
        <p>Collection of common form elements.</p>
      </hgroup>
      <section>
        <h2>Example</h2>
        <ElementPreview
          html={
            <form>
              <label for="name">Name</label>
              <input id="name" type="text" placeholder="Name" />
              <label for="email">Email</label>
              <input id="email" type="email" placeholder="your@email.com" />
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
                <label for="name">Name</label>
                <input id="name" type="text" placeholder="Name" />
                <label for="email">Email</label>
                <input id="email" type="email" placeholder="your@email.com" />
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
              <input type="date" placeholder="date" />
              <input type="time" placeholder="time" />
              <input type="text" placeholder="disabled" disabled />
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
            <form>
              <fieldset>
                <legend>Checkboxes</legend>
                <row>
                  <label for="checkbox 1">Checkbox 1</label>
                  <input id="checkbox 1" type="checkbox" value="value 1" />
                  <p>ads</p>
                </row>
                <label for="checkbox 2">Checkbox 2</label>
                <input
                  id="checkbox 2"
                  type="checkbox"
                  value="value 2"
                  checked
                />
              </fieldset>
              <fieldset>
                <legend>Reversed</legend>
                <input
                  id="checkbox 3"
                  type="checkbox"
                  value="value 3"
                  checked
                />
                <label for="checkbox 3">Checkbox 3</label>
                <input id="checkbox 4" type="checkbox" value="value 4" />
                <label for="checkbox 4">Checkbox 4</label>
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
            <form>
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
      <section>
        <h2>Textarea</h2>
        <p>
          The <code>textarea</code> element is used to create a multiline text
          input.
        </p>
        <ElementPreview
          html={
            <form>
              <textarea placeholder="textarea"></textarea>
            </form>
          }
        />
      </section>
      <section>
        <h2>Select</h2>
        <p>
          The <code>select</code> element is used to create a dropdown list.
        </p>
        <ElementPreview
          html={
            <form>
              <select>
                <option value="option 1">Option 1</option>
                <option value="option 2">Option 2</option>
                <option value="option 3">Option 3</option>
              </select>
            </form>
          }
        />
      </section>
      <section>
        <h2>File</h2>
        <p>
          The <code>file</code> input type is used to create a file select
          input.
        </p>
        <ElementPreview
          html={
            <form>
              <input type="file" />
            </form>
          }
        />
      </section>
      <section>
        <h2>Switch</h2>
        <p>
          The <code>checkbox</code> input type is used to create a switch
          control.
        </p>
        <ElementPreview
          html={
            <form>
              <label for="switch">
                <input type="checkbox" role="switch" id="switch" />I am a switch
              </label>
              <label for="switch-disabled">
                <input
                  type="checkbox"
                  role="switch"
                  id="switch-disabled"
                  disabled
                />
                I am a disabled switch
              </label>
            </form>
          }
        />
      </section>
      <section>
        <h2>Range</h2>
        <p>
          The <code>range</code> input type is used to create a slider control.
        </p>
        <ElementPreview
          html={
            <form>
              <label for="range">Range slider</label>
              <input
                type="range"
                min="0"
                max="100"
                value="50"
                id="range"
                name="range"
              />
            </form>
          }
        />
      </section>
      <section>
        <h2>Color</h2>
        <p>
          The <code>color</code> input type is used to create a color picker.
        </p>
        <ElementPreview
          html={
            <form>
              <label for="color">Color picker</label>
              <input type="color" id="color" name="color" />
            </form>
          }
        />
      </section>
      <section>
        <h2>Submit and Reset</h2>
        <p>
          The <code>submit</code> input type is used to create a submit button
          and submit the form data to the server. The <code>reset</code> input
          type is used to create a reset button and reset the form data to its
          initial state.
        </p>
        <ElementPreview
          html={
            <form>
              <row class="justify-stretch">
                <input type="reset" value="Reset" class="grow" />
                <input type="submit" value="Submit" class="grow" />
              </row>
            </form>
          }
        />
      </section>
      <section>
        <h2>Validation</h2>
        <p>
          The <code>:user-valid</code> CSS pseudo-class represents any validated
          form element whose value validates correctly based on its validation
          constraints. However, unlike <code>:valid</code> it only matches once
          the user has interacted with it. This pseudo-class is applied if the
          form control is valid and any of the following has occurred:
        </p>
        <ul>
          <li>
            The user made a change to the form control and committed the change
            such as by moving focus elsewhere.
          </li>
          <li>
            The user has attempted to submit the form, even if no change was
            made to the control.
          </li>
          <li>
            The value was invalid when it gained focus, and the user made a
            change making it valid, even if focus is still in the control.
          </li>
        </ul>
        <ElementPreview
          html={
            <form>
              <label for="no-validation">No validation</label>
              <input
                id="no-validation"
                type="text"
                placeholder="This field won't be validated"
              />
              <label for="required">Required</label>
              <input
                id="required"
                type="text"
                placeholder="will automatically add *"
                required
              />
              <label for="type">Type</label>
              <input
                id="type"
                placeholder="native validation based on type attribute"
                type="email"
              />
              <label for="pattern">Pattern</label>
              <input
                id="pattern"
                type="text"
                placeholder="Only digits allowed"
                pattern="\\d"
              />
              <label for="aria">Aria attributes</label>
              <input
                id="aria"
                type="text"
                placeholder="mark fields usign aria attributes"
                aria-invalid="true"
                aria-required="true"
              />
              <input type="submit" value="Submit" />
            </form>
          }
        />
        <h2>Display errors</h2>
        <ElementPreview
          html={
            <form>
              <label for="aria">Required</label>
              <input
                id="aria"
                type="text"
                placeholder="mark fields usign aria attributes"
                aria-invalid="true"
                aria-required="true"
              />
              <label for="aria" aria-errormessage="aria">
                This field is required
              </label>
              <input type="submit" value="Submit" />
            </form>
          }
        />
      </section>
    </div>
  );
}

function ElementPreview(props: { html: JSX.Element; css?: string }) {
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
