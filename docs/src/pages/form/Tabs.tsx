import { createSignal, JSX } from "solid-js";

type Props = {
  items: Array<{ label: string; content: JSX.Element }>;
};

export default function Tabs(props: Props) {
  const [checkedIndex, setCheckedIndex] = createSignal(0);
  const tablistId = `tablist-${Math.random().toString(36).substring(7)}`;

  return (
    <div role="tablist">
      {props.items.map((tab, index) => {
        const { label, content } = tab;
        const tabId = `${tablistId}-tab-${index + 1}`;
        const contentId = `${tablistId}-content-${index + 1}`;
        return (
          <>
            <label id={tabId} role="tab" aria-controls={contentId} aria-selected={index == checkedIndex()}>
              {label}
              <input
                type="radio"
                name={`tabs-${tablistId}`}
                aria-checked={index == checkedIndex()}
                onChange={() => setCheckedIndex(index)}
                checked={index == checkedIndex()}
                value={index}
              />
            </label>
            <section id={contentId} role="tabpanel" aria-labelledby={tabId}>
              {content}
            </section>
          </>
        );
      })}
    </div>
  );
}
