import Code from "../../Code";

export default function Lists() {
  return (
    <section>
      <h2>Lists</h2>
      <p>
        Lists are used to organize information into a structured format. They
        can be used to create a hierarchy of information, to provide a sequence
        of steps, or to group related items together. Lists can be ordered or
        unordered, and they can contain a mix of text, images, and other
        elements.
      </p>

      <h3>Unordered</h3>
      <div class="row gap-2">
        <div class="canvas grow">
          <ul>
            <li>Coffee</li>
            <li>Milk</li>
            <li>
              Tea
              <ul>
                <li>Black tea</li>
                <li>Green tea</li>
              </ul>
            </li>
          </ul>
        </div>
        <Code>
          <ul>
            <li>Coffee</li>
            <li>Milk</li>
            <li>
              Tea
              <ul>
                <li>Black tea</li>
                <li>Green tea</li>
              </ul>
            </li>
          </ul>
        </Code>
      </div>

      <h3>Ordered Lists</h3>
      <div class="row gap-2">
        <div class="canvas grow">
          <ol>
            <li>Coffee</li>
            <li>Milk</li>
            <li>
              Tea
              <ol>
                <li>Black tea</li>
                <li>Green tea</li>
                <li>
                  Tea
                  <ol>
                    <li>Black tea</li>
                    <li>Green tea</li>
                  </ol>
                </li>
              </ol>
            </li>
          </ol>
        </div>
        <Code>
          <ol>
            <li>Coffee</li>
            <li>Milk</li>
            <li>
              Tea
              <ol>
                <li>Black tea</li>
                <li>Green tea</li>
              </ol>
            </li>
          </ol>
        </Code>
      </div>

      <h3>Definition Lists</h3>
      <div class="row gap-2">
        <div class="canvas grow">
          <dl>
            <dt>Coffee</dt>
            <dd>Black hot drink</dd>
            <dt>Milk</dt>
            <dd>White cold drink</dd>
            <dt>Tea</dt>
            <dd>Green hot drink</dd>
          </dl>
        </div>
        <Code>
          <dl>
            <dt>Coffee</dt>
            <dd>Black hot drink</dd>
            <dt>Milk</dt>
            <dd>White cold drink</dd>
            <dt>Tea</dt>
            <dd>Green hot drink</dd>
          </dl>
        </Code>
      </div>
    </section>
  );
}
