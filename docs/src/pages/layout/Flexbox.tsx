import { createSignal } from "solid-js";

export default function Footer() {
  const [flexDirection, setFlexDirection] = createSignal("row");
  const [justifyContent, setJustifyContent] = createSignal("flex-start");
  const [alignItems, setAlignItems] = createSignal("flex-start");
  const [flexWrap, setFlexWrap] = createSignal("nowrap");
  const [gap, setGap] = createSignal(8);

  return (
    <section>
      <h2>Flexbox</h2>
      <p>
        Flexbox is a one-dimensional layout method for arranging items in rows or
        columns. Items flex (expand) to fill additional space or shrink to fit into
        smaller spaces.
      </p>
      <div class="row items-grow gap-4">
      <fieldset>
        <legend>flex-direction</legend>
        {['row', 'row-reverse', 'column', 'column-reverse'].map(option => (
          <label>
            <input
              type="radio"
              name="flexDirection"
              value={option}
              checked={flexDirection() === option}
              onInput={e => setFlexDirection(e.currentTarget.value)}
            />
            {option}
          </label>
        ))}
      </fieldset>
      <fieldset>
        <legend>justify-content</legend>
        {['flex-start', 'center', 'flex-end', 'space-between', 'space-around', 'space-evenly'].map(option => (
          <label>
            <input
              type="radio"
              name="justifyContent"
              value={option}
              checked={justifyContent() === option}
              onInput={e => setJustifyContent(e.currentTarget.value)}
            />
            {option}
          </label>
        ))}
      </fieldset>
      <fieldset>
        <legend>align-items</legend>
        {['flex-start', 'center', 'flex-end', 'baseline', 'stretch'].map(option => (
          <label>
            <input
              type="radio"
              name="alignItems"
              value={option}
              checked={alignItems() === option}
              onInput={e => setAlignItems(e.currentTarget.value)}
            />
            {option}
          </label>
        ))}
      </fieldset>
      <fieldset>
        <legend>flex-wrap</legend>
        {['nowrap', 'wrap', 'wrap-reverse'].map(option => (
          <label>
            <input
              type="radio"
              name="flexWrap"
              value={option}
              checked={flexWrap() === option}
              onInput={e => setFlexWrap(e.currentTarget.value)}
            />
            {option}
          </label>
        ))}
      </fieldset>
      </div>
      <fieldset>
        <legend>gap</legend>
        <label>
          <input
            type="range"
            min={0}
            max={64}
            step={4}
            value={gap()}
            onInput={e => setGap(Number(e.currentTarget.value))}
          />
          <span>{gap()}px</span>
        </label>
      </fieldset>
      
      <div class="flexbox-playground" style={{
        display: "flex",
        "flex-direction": flexDirection() as any,
        "justify-content": justifyContent() as any,
        "align-items": alignItems() as any,
        "flex-wrap": flexWrap() as any,
        gap: `${gap()}px`,
      }}>
        <div style={{"font-size":"1rem"}}>No</div>
        <div style={{"font-size":"1.5rem"}}>More</div>
        <div style={{"font-size":"2rem"}}>CSS</div>
        <div style={{"font-size":"1.3rem"}}>!</div>
      </div>
    </section>
  );
}
