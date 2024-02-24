import Code from "../../Code";

export default function Tabs() {
  return (
    <section>
      <h2>Tabs</h2>
      <p>
        Tabs are used to organize content into different sections. Each tab
        represents a different section.
      </p>
      <tabs>
        <tab>
          <label for="preview">
            Preview
            <input type="radio" id="preview" name="tabs" checked />
          </label>
          <content>
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
              <fieldset>
                <legend>Terms & Conditions</legend>
                <label for="terms">
                  I agree to the terms and conditions*
                  <input type="checkbox" id="terms" />
                </label>
                <label for="privacy">
                  I agree to the privacy policy*
                  <input type="checkbox" id="privacy" />
                </label>
              </fieldset>
              <button type="submit">Submit</button>
            </form>
          </content>
        </tab>
        <tab>
          <label for="html">
            HTML
            <input type="radio" id="html" name="tabs" />
          </label>
          <content>
            <Code>
              <form>
                <fieldset>
                  <legend>Sign up</legend>
                  <label for="name">
                    Name
                    <input id="name" type="text" placeholder="Name" />
                  </label>
                  <label for="email">
                    Email
                    <input
                      id="email"
                      type="email"
                      placeholder="your@email.com"
                    />
                  </label>
                </fieldset>
                <fieldset>
                  <legend>Terms & Conditions</legend>
                  <label for="terms">
                    I agree to the terms and conditions*
                    <input type="checkbox" id="terms" />
                  </label>
                  <label for="privacy">
                    I agree to the privacy policy*
                    <input type="checkbox" id="privacy" />
                  </label>
                </fieldset>
                <button type="submit">Submit</button>
              </form>
            </Code>
          </content>
        </tab>
        <tab>
          <label for="css">
            CSS
            <input type="radio" id="css" name="tabs" />
          </label>
          <content>
            <pre>
              <code>{".tabs{background:white;}"}</code>
            </pre>
          </content>
        </tab>
      </tabs>
    </section>
  );
}
