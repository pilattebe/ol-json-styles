# ol-json-styles

This package can use json instead of classes to make OpenLayers style easily shareable.

```js
import { loadStyle } from "ol-json-style";

const json = {
    Style: {
        fill: {
            Fill: {
                color: "red",
            },
        },
        stroke: {
            Stroke: {
                color: "blue",
            },
        },
    },
};

const myStyle = loadStyle(json);

const layer = new VectorLayer({
    source: source,
    style: myStyle,
});
```
