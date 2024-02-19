export default function Layout(props: any) {
  return (
    <>
      <header>
        <nav>
          <a href="/">A-CSS</a>
        </nav>
        <nav>
          <a href="/layout">Layout</a>
          <a href="/interactive">Interactive</a>
          <a href="/typo">Typography</a>
        </nav>
      </header>
      <hr />
      <main>{props.children}</main>
      <footer>
        <row class="gap-8">
          <section>
            <img id="footer-logo" src="/a-css/img/logo.png" />
            <p>
              <b>a CSS</b> by <a href="">@graf-semmel</a>
            </p>
          </section>
          <section>
            <h4>Services</h4>
            <nav>
              <a class="link link-hover">Branding</a>
              <a class="link link-hover">Design</a>
              <a class="link link-hover">Marketing</a>
              <a class="link link-hover">Advertisement</a>
            </nav>
          </section>
          <section>
            <h4>Company</h4>
            <nav>
              <a class="link link-hover">About us</a>
              <a class="link link-hover">Contact</a>
              <a class="link link-hover">Jobs</a>2024-02-17-15-44-54.png
              <a class="link link-hover">Press kit</a>
            </nav>
          </section>
          <section>
            <h4>Legal</h4>
            <nav>
              <a class="link link-hover">Terms of use</a>
              <a class="link link-hover">Privacy policy</a>
              <a class="link link-hover">Cookie policy</a>
            </nav>
          </section>
        </row>
      </footer>
    </>
  );
}
