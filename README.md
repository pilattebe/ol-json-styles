# ol-json-styles

This package can use json instead of classes to make OpenLayers style easily shareable.

```js
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
const style = loadStyle(json);
```
