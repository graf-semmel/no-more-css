import { createEffect, createSignal } from "solid-js";
import Code from "../../components/Code";
import { FlexItemPlayground } from "./FlexItemPlayground"; // Added import
import Tabs from "../form/Tabs";

export default function Flexbox() {
  return (
    <article>
      <h2>Flexbox</h2>
      <p>
        Flexbox is a one-dimensional layout method for arranging items in rows
        or columns. Items flex (expand) to fill additional space or shrink to
        fit into smaller spaces.
      </p>
      <ContainerPropertiesSection />
      <FlexContainerPlayGround />
      <ItemPropertiesSection />
      <FlexItemPlayground />
    </article>
  );
}

export function FlexContainerPlayGround() {
  const [flexDirection, setFlexDirection] = createSignal("row");
  const [justifyContent, setJustifyContent] = createSignal("flex-start");
  const [alignItems, setAlignItems] = createSignal("flex-start");
  const [flexWrap, setFlexWrap] = createSignal("nowrap");
  const [gap, setGap] = createSignal(8);
  const [cssText, setCssText] = createSignal("");
  let ref!: HTMLDivElement;

  // Update cssText whenever any flexbox attribute changes
  createEffect(() => {
    setCssText(
      `.flexbox-playground {\n` +
        `  display: flex;\n` +
        `  flex-direction: ${flexDirection()};\n` +
        `  justify-content: ${justifyContent()};\n` +
        `  align-items: ${alignItems()};\n` +
        `  flex-wrap: ${flexWrap()};\n` +
        `  gap: ${gap()}px;\n` +
        `}`
    );
  });

  return (
    <section class="row items-grow wrap gap-4">
      <h3 class="w-full">Try it out</h3>
      <fieldset>
        <legend>flex-direction</legend>
        {["row", "row-reverse", "column", "column-reverse"].map((option) => (
          <label>
            <input
              type="radio"
              name="flexDirection"
              value={option}
              checked={flexDirection() === option}
              onInput={(e) => setFlexDirection(e.currentTarget.value)}
            />
            {option}
          </label>
        ))}
      </fieldset>
      <fieldset>
        <legend>justify-content</legend>
        {[
          "flex-start",
          "center",
          "flex-end",
          "space-between",
          "space-around",
          "space-evenly",
        ].map((option) => (
          <label>
            <input
              type="radio"
              name="justifyContent"
              value={option}
              checked={justifyContent() === option}
              onInput={(e) => setJustifyContent(e.currentTarget.value)}
            />
            {option}
          </label>
        ))}
      </fieldset>
      <fieldset>
        <legend>align-items</legend>
        {["flex-start", "center", "flex-end", "baseline", "stretch"].map(
          (option) => (
            <label>
              <input
                type="radio"
                name="alignItems"
                value={option}
                checked={alignItems() === option}
                onInput={(e) => setAlignItems(e.currentTarget.value)}
              />
              {option}
            </label>
          )
        )}
      </fieldset>
      <fieldset>
        <legend>flex-wrap</legend>
        {["nowrap", "wrap", "wrap-reverse"].map((option) => (
          <label>
            <input
              type="radio"
              name="flexWrap"
              value={option}
              checked={flexWrap() === option}
              onInput={(e) => setFlexWrap(e.currentTarget.value)}
            />
            {option}
          </label>
        ))}
      </fieldset>
      <fieldset>
        <legend>gap</legend>
        <label>
          <input
            type="range"
            min={0}
            max={128}
            step={8}
            value={gap()}
            onInput={(e) => setGap(Number(e.currentTarget.value))}
          />
          <span>{gap()}px</span>
        </label>
      </fieldset>
      <fieldset
        style={{
          flex: "1 0 300px",
        }}
      >
        <legend>CSS</legend>
        <Code language="css">{cssText()}</Code>
      </fieldset>

      <section id="flexbox-playground">
        <div
          ref={ref}
          style={{
            display: "flex",
            "flex-direction": flexDirection() as any,
            "justify-content": justifyContent(),
            "align-items": alignItems(),
            "flex-wrap": flexWrap() as any,
            gap: `${gap()}px`,
            width: "400px",
          }}
        >
          <div style={{ "font-size": "1rem" }}>No</div>
          <div style={{ "font-size": "1.5rem" }}>More</div>
          <div style={{ "font-size": "2rem" }}>CSS</div>
          <div style={{ "font-size": "1.3rem" }}>!</div>
        </div>
      </section>
    </section>
  );
}

export function ContainerPropertiesSection() {
  return (
    <section>
      <h3>Container Properties</h3>
      <p>
        Flexbox container properties control how the flex container behaves and
        how its children are laid out. These properties let you define the main
        axis, wrapping behavior, alignment, and spacing between items, giving
        you powerful tools to create flexible and responsive layouts.
      </p>
      <h4>display</h4>
      <p>
        <code>flex</code> or <code>inline-flex</code> turns an element into a
        flex container, unlocking a whole new world of layout possibilities for
        its children. Use <code>flex</code> when you want the flex container to
        behave like a block element and take up the full width. Use{" "}
        <code>inline-flex</code> when you want the flex container to behave like
        an inline element and only take up the space it needs.
      </p>
      <FlexDisplayExample />
      <h4>flex-direction</h4>
      <p>
        Choose <code>row</code> or <code>row-reverse</code> to lay items out
        horizontally (left-to-right or right-to-left), or <code>column</code>{" "}
        and <code>column-reverse</code> to stack them vertically. It’s like
        flipping the axis of your layout with a single property.
      </p>
      <h4>justify-content</h4>
      <p>
        This property is all about how your items spread out along the main
        axis. Use <code>flex-start</code> to pack them at the beginning,{" "}
        <code>center</code> to bring them together in the middle, or{" "}
        <code>flex-end</code> to push them to the far edge. For more creative
        spacing, try <code>space-between</code>, <code>space-around</code>, or{" "}
        <code>space-evenly</code>—these add equal gaps between or around your
        items, making layouts feel balanced and intentional.
      </p>
      <h4>align-items</h4>
      <p>
        Here’s where you control how items line up on the cross axis
        (perpendicular to your main direction). <code>flex-start</code>,{" "}
        <code>center</code>, and <code>flex-end</code> let you nudge items to
        the top, middle, or bottom (or left, center, right for columns).{" "}
        <code>baseline</code> is perfect for lining up text, while{" "}
        <code>stretch</code> makes items fill the available space for a tidy,
        unified look.
      </p>
      <h4>align-content</h4>
      <p>
        When you have multiple lines of flex items, <code>align-content</code>{" "}
        helps you decide how those lines are spaced out in the container.
        Whether you want them packed at the start, spread evenly, or stretched
        to fill the space, this property gives you the control.
      </p>
      <h4>flex-wrap</h4>
      <p>
        By default, flex items try to fit on one line (<code>nowrap</code>), but
        with <code>wrap</code> you can let them flow onto new lines, and{" "}
        <code>wrap-reverse</code> flips the direction of the wrap. Super handy
        for responsive layouts!
      </p>
      <h4>gap</h4>
      <p>
        No more fiddling with margins—just use <code>gap</code> to add
        consistent spacing between your flex items. It’s simple, clean, and
        makes your layouts breathe.
      </p>
    </section>
  );
}

export function ItemPropertiesSection() {
  return (
    <section>
      <h3>Item Properties</h3>
      <p>
        Flexbox item properties let you control how each individual flex item
        behaves inside the container. With these properties, you can adjust how
        items grow, shrink, align, and even change their order—giving you
        fine-grained control over your layout and making it easy to create
        flexible, responsive designs.
      </p>
      <h4>align-self</h4>
      <p>
        Want to break the rules for just one item? <code>align-self</code> lets
        a single flex item override the container’s <code>align-items</code>{" "}
        value, so you can make it stand out or tuck it away as needed.
      </p>
      <h4>flex</h4>
      <p>
        The <code>flex</code> shorthand lets you set how an item grows, shrinks,
        and its base size all at once. Try values like <code>1</code>,{" "}
        <code>auto</code>, <code>none</code>, <code>0 1 auto</code>, or{" "}
        <code>1 1 0%</code> to see how items flex and adapt.
      </p>
      <h4>flex-grow</h4>
      <p>
        This controls how much a flex item will grow relative to its siblings.
        Give one item a higher number and watch it take up more space.
      </p>
      <h4>flex-shrink</h4>
      <p>
        When space gets tight, <code>flex-shrink</code> decides how much an item
        will shrink compared to the others.
      </p>
      <h4>flex-basis</h4>
      <p>
        Set the initial size of a flex item before the remaining space is
        distributed. It’s like giving your item a head start in the sizing race.
      </p>
      <h4>order</h4>
      <p>
        Change the visual order of your flex items without touching the HTML.
        Lower numbers appear first, higher numbers later—simple as that.
      </p>
    </section>
  );
}

const mapToClass = (type: string) =>
  type === "flex" ? "row" : type === "inline-flex" ? "inline-row" : type;

function FlexDisplayExample() {
  return (
    <section>
      <Tabs
        items={["block", "flex", "inline-flex"].map((type) => {
          const mappedType = mapToClass(type);
          return {
            label: type,
            content: (
              <div class="row gap-4 mt-1 wrap">
                <div class="grow canvas" style={{ "flex-basis": "400px" }}>
                  Lorem ipsum dolor
                  <div class={`${mappedType} gap-2`}>
                    <div class="item">Item 1</div>
                    <div class="item">Item 2</div>
                    <div class="item">Item 3</div>
                  </div>
                </div>
                <div
                  class="column content-center"
                  style={{
                    "min-width": "270px",
                  }}
                >
                  <Code language="html">
                    <div>
                      Lorem ipsum dolor \n
                      <div class={mappedType}>
                        <div>Item 1</div>
                        <div>Item 2</div>
                        <div>Item 3</div>
                      </div>
                    </div>
                  </Code>
                  <Code language="css">
                    {`.${mappedType} {\n` + `  display: ${type};\n` + `}`}
                  </Code>
                </div>
              </div>
            ),
          };
        })}
      />
    </section>
  );
}