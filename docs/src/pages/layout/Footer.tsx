import Code from "../../Code";

export default function Footer() {
  return (
    <section>
      <h2>Footer</h2>
      <p>
        The <code>footer</code> element defines a footer for a document or
        section. A footer typically contains information about the author of the
        section, copyright data, links to terms of use, contact information, and
        so on.
      </p>
      <p>
        To avoid conflicts with the main content structure, use <code>h6</code>{" "}
        for the section titles.
      </p>
      <h3>As page footer</h3>
      <footer id="footer" class="gap-8">
        <section>
          <h6 class="footer-title">Services</h6>
          <nav>
            <a class="link link-hover">Branding</a>
            <a class="link link-hover">Design</a>
            <a class="link link-hover">Marketing</a>
          </nav>
        </section>
        <section>
          <h6 class="footer-title">Company</h6>
          <nav>
            <a class="link link-hover">About us</a>
            <a class="link link-hover">Contact</a>
            <a class="link link-hover">Jobs</a>
          </nav>
        </section>
        <section>
          <h6 class="footer-title">Legal</h6>
          <nav>
            <a class="link link-hover">Terms of use</a>
            <a class="link link-hover">Privacy policy</a>
          </nav>
        </section>
      </footer>
      <pre>
        <code>
          &lt;body&gt;
          <br />
          ...
          <br />
          <Code>
            <footer class="gap-8">
              <section>
                <h6 class="footer-title">Services</h6>
                <nav>
                  <a class="link link-hover">Branding</a>
                  <a class="link link-hover">Design</a>
                  <a class="link link-hover">Marketing</a>
                </nav>
              </section>
              <section>
                <h6 class="footer-title">Company</h6>
                <nav>
                  <a class="link link-hover">About us</a>
                  <a class="link link-hover">Contact</a>
                  <a class="link link-hover">Jobs</a>
                </nav>
              </section>
              <section>
                <h6 class="footer-title">Legal</h6>
                <nav>
                  <a class="link link-hover">Terms of use</a>
                  <a class="link link-hover">Privacy policy</a>
                </nav>
              </section>
            </footer>
            ,
          </Code>
          <br />
          &lt;/body&gt;
        </code>
      </pre>
    </section>
  );
}
