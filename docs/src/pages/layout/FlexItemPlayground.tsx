import { createSignal, createEffect, Accessor, Setter } from "solid-js";
import Code from "../../components/Code";

// Define the type for a single flex item's properties
interface FlexItemProps {
  flexGrow: number;
  flexShrink: number;
  flexBasis: number;
  alignSelf: string;
  order: number;
}

// Define props for the FlexItemControls component
interface FlexItemControlsProps {
  item: Accessor<FlexItemProps>;
  setItem: Setter<FlexItemProps>;
  itemName: string;
  itemNumber: number; // To ensure unique radio button names
}

// New FlexItemControls component
function FlexItemControls(props: FlexItemControlsProps) {
  const { item, setItem, itemName, itemNumber } = props;

  return (
    <fieldset>
      <legend>{itemName}</legend>
      <label>
        flex-grow: {item().flexGrow}
        <input
          type="range"
          min={0}
          max={5}
          step={1}
          value={item().flexGrow}
          onInput={(e) =>
            setItem({ ...item(), flexGrow: Number(e.currentTarget.value) })
          }
        />
      </label>
      <label>
        flex-shrink: {item().flexShrink}
        <input
          type="range"
          min={0}
          max={5}
          step={1}
          value={item().flexShrink}
          onInput={(e) =>
            setItem({ ...item(), flexShrink: Number(e.currentTarget.value) })
          }
        />
      </label>
      <label>
        flex-basis: {item().flexBasis}px
        <input
          type="range"
          min={0}
          max={500}
          step={50}
          value={item().flexBasis}
          onInput={(e) =>
            setItem({ ...item(), flexBasis: Number(e.currentTarget.value) })
          }
        />
      </label>
      <label>
        order: {item().order}
        <input
          type="range"
          min={-2}
          max={2}
          step={1}
          value={item().order}
          onInput={(e) =>
            setItem({ ...item(), order: Number(e.currentTarget.value) })
          }
        />
      </label>
      <div>
        align-self:
        {[
          "auto",
          "flex-start",
          "center",
          "flex-end",
          "baseline",
          "stretch",
        ].map((option) => (
          <label>
            <input
              type="radio"
              name={`item${itemNumber}AlignSelf`} // Use itemNumber for unique name
              value={option}
              checked={item().alignSelf === option}
              onInput={(e) =>
                setItem({ ...item(), alignSelf: e.currentTarget.value })
              }
            />
            {option}
          </label>
        ))}
      </div>
    </fieldset>
  );
}

export function FlexItemPlayground() {
  // State objects for each item
  const [item1, setItem1] = createSignal<FlexItemProps>({
    // Added type
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 50,
    alignSelf: "auto",
    order: 0,
  });

  const [item2, setItem2] = createSignal<FlexItemProps>({
    // Added type
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 50,
    alignSelf: "auto",
    order: 0,
  });

  const [item3, setItem3] = createSignal<FlexItemProps>({
    // Added type
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 50,
    alignSelf: "auto",
    order: 0,
  });

  const [cssText, setCssText] = createSignal("");

  // Update cssText whenever any flex item attribute changes
  createEffect(() => {
    setCssText(
      `.flex-item-1 {\n` +
        `  flex-grow: ${item1().flexGrow};\n` +
        `  flex-shrink: ${item1().flexShrink};\n` +
        `  flex-basis: ${item1().flexBasis}px;\n` +
        `  align-self: ${item1().alignSelf};\n` +
        `  order: ${item1().order};\n` +
        `}\n\n` +
        `.flex-item-2 {\n` +
        `  flex-grow: ${item2().flexGrow};\n` +
        `  flex-shrink: ${item2().flexShrink};\n` +
        `  flex-basis: ${item2().flexBasis}px;\n` +
        `  align-self: ${item2().alignSelf};\n` +
        `  order: ${item2().order};\n` +
        `}\n\n` +
        `.flex-item-3 {\n` +
        `  flex-grow: ${item3().flexGrow};\n` +
        `  flex-shrink: ${item3().flexShrink};\n` +
        `  flex-basis: ${item3().flexBasis}px;\n` +
        `  align-self: ${item3().alignSelf};\n` +
        `  order: ${item3().order};\n` +
        `}`
    );
  });

  const getItemStyle = (itemNumber: number) => {
    const baseStyle = {
      background: "#f5f5f5",
      border: "1px solid #ccc",
      padding: "8px",
      "border-radius": "4px",
    };

    switch (itemNumber) {
      case 1:
        return {
          ...baseStyle,
          "flex-grow": item1().flexGrow,
          "flex-shrink": item1().flexShrink,
          "flex-basis": `${item1().flexBasis}px`,
          "align-self": item1().alignSelf as any,
          order: item1().order,
          "font-size": "0.9rem",
        };
      case 2:
        return {
          ...baseStyle,
          "flex-grow": item2().flexGrow,
          "flex-shrink": item2().flexShrink,
          "flex-basis": `${item2().flexBasis}px`,
          "align-self": item2().alignSelf as any,
          order: item2().order,
          "font-size": "1.2rem",
        };
      case 3:
        return {
          ...baseStyle,
          "flex-grow": item3().flexGrow,
          "flex-shrink": item3().flexShrink,
          "flex-basis": `${item3().flexBasis}px`,
          "align-self": item3().alignSelf as any,
          order: item3().order,
          "font-size": "1.5rem",
        };
      default:
        return baseStyle;
    }
  };

  return (
    <section class="row items-grow wrap gap-4">
      <h3 class="w-full">Try out Flex Item Properties</h3>

      <FlexItemControls
        item={item1}
        setItem={setItem1}
        itemName="Item 1"
        itemNumber={1}
      />
      <FlexItemControls
        item={item2}
        setItem={setItem2}
        itemName="Item 2"
        itemNumber={2}
      />
      <FlexItemControls
        item={item3}
        setItem={setItem3}
        itemName="Item 3"
        itemNumber={3}
      />

      <div
        class="w-full gap-4"
        style={{ display: "grid", "grid-template-columns": "1fr 250px" }}
      >
        <div
          class="flex-container-base"
          style={{
            display: "flex",
            height: "200px",
            border: "1px dashed #999",
            padding: "10px",
            gap: "10px", // Fixed gap for item playground visualization
            "min-width": "0",
          }}
        >
          <div style={getItemStyle(1)}>Item 1</div>
          <div style={getItemStyle(2)}>Item 2</div>
          <div style={getItemStyle(3)}>Item 3</div>
        </div>
        
        <fieldset style={{ flex: "0 0 250px" }}>
          <Code language="css">{cssText()}</Code>
        </fieldset>
      </div>
    </section>
  );
}
