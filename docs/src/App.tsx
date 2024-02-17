import Code from "./Code";

function App() {
  return (
    <container>
      <section style="background: #eee">
        <h2>Button</h2>
        <Code>
          <button>Default</button>
        </Code>
        <button>Default</button>
      </section>
      <section style="background: #eee">
        <h2>Typography</h2>
      </section>
      <section style="background: #eee">
        <h2>Figure</h2>
      </section>
      <section style="background: #eee">
        <h2>Code</h2>
        <Code>
          <button>Default</button>
        </Code>
      </section>
      <section style="background: #eee">
        <h2>Cards</h2>
        <card>
          <header>
            <h1>Home</h1>
          </header>
          <main>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              voluptatum, quibusdam, voluptate, quia quod quos voluptas
              voluptatem quas quidem doloribus quae. Quisquam voluptatum,
              quibusdam, voluptate, quia quod quos voluptas voluptatem quas
              quidem doloribus quae.
            </p>
          </main>
          <footer>
            <button>Click me</button>
          </footer>
        </card>
      </section>
    </container>
  );
}

export default App;
