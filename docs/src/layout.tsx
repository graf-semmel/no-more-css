export default function Layout(props: any) {
  return (
    <>
      <header>
        <container>
          <nav>
            <ul>
              <li>
                <a href="/a-css/a-css">A-CSS</a>
              </li>
            </ul>
            <ul>
              <li>
                <a href="/a-css/typo">Typography</a>
              </li>
              <li>
                <a href="/">Link 2</a>
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
