import Code from "../../Code";
import Tabs from "./Tabs";

export default function Form() {
  return (
    <container>
      <hgroup>
        <h1>Forms</h1>
        <p>Collection of common form elements.</p>
      </hgroup>
      <section>
        <h2>Example</h2>
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
      </section>
      <section>
        <h2>Fieldset</h2>
        <p>
          The <code>fieldset</code> element is used to group related elements in
          a form. The <code>legend</code> element is used to provide a caption
          for the
          <code>fieldset</code> element.
        </p>
      </section>
      <Tabs />
    </container>
  );
}
