import { JSX } from "solid-js";

type Props = {
  items: Array<{ label: string; content: JSX.Element }>;
};

export default function Tabs(props: Props) {
  const randomId = Math.random().toString(36).substring(7);

  return (
    <tabs>
      {props.items.map((tab, index) => {
        const { label, content } = tab;
        return (
          <>
            <label role="tab" aria-controls={`content${index + 1}`}>
              {label}
              <input
                type="radio"
                name={`tabs-${randomId}`}
                aria-checked={index == 0}
                checked={index == 0}
              />
            </label>
            <section id={`content${index + 1}`} role="tabpanel">
              {content}
            </section>
          </>
        );
      })}
      {/* <label role="tab" aria-controls="content1">
          Tab 1
          <input type="radio" name="tabs" aria-checked="true" checked />
        </label>
        <section id="content1" aria-labelledby="tab1" role="tabpanel">
          <h3>Content for Tab 1</h3>
          <p>Hello World from Tab 1!</p>
          <button>Click me</button>
        </section>

        <label role="tab" aria-controls="content2">
          Tab 2
          <input type="radio" name="tabs" />
        </label>
        <section id="content2" aria-labelledby="tab2" role="tabpanel">
          <h3>Content for Tab 2</h3>
          <p>Hello World from Tab 2!</p>
        </section>

        <label role="tab" aria-controls="content3">
          Tab 3
          <input type="radio" name="tabs" />
        </label>
        <section id="content3" aria-labelledby="tab3" role="tabpanel">
          <h3>Content for Tab 3</h3>
          <p>Hello World from Tab 3!</p>
        </section> */}
    </tabs>
  );
}
