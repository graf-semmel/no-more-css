export default function Layout(props: any) {
  return (
    <>
      <header>
        <container>
          <nav>
            <ul>
              <li>
                <a href="/">A-CSS</a>
              </li>
            </ul>
            <ul>
              <li>
                <a href="/interactive">Interactive</a>
              </li>
              <li>
                <a href="/typo">Typography</a>
              </li>
            </ul>
          </nav>
        </container>
      </header>
      <hr />
      <main>{props.children}</main>
      <footer></footer>
    </>
  );
}
