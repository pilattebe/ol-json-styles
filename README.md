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

// // You can then use it in a layer
// const layer = new VectorLayer({
//     source: mySource,
//     style: myStyle,
// });
```

A useful case is to use loadStyle to load a style from a remote source:

**https://example.com/style.json**:

```json
{
    "Style": {
        "image": {
            "Circle": {
                "radius": 10,
                "fill": {
                    "Fill": {
                        "color": "#ff000050"
                    }
                },
                "stroke": {
                    "Stroke": {
                        "color": "#ff0000ff"
                    }
                }
            }
        },
        "text": {
            "Text": {
                "text": "LOL",
                "textAlign": null,
                "textBaseline": null,
                "font": null,
                "fill": {
                    "Fill": {
                        "color": "#ff0000ff"
                    }
                },
                "stroke": {
                    "Stroke": {
                        "color": "#ffffff",
                        "width": 2
                    }
                },
                "offsetX": 0,
                "offsetY": 0,
                "placement": "Point",
                "maxAngle": 0.7853981633974483,
                "overflow": null,
                "rotation": 0,
                "scale": 1.5
            }
        }
    }
}
```

```js
import { loadStyle } from "ol-json-style";

// Top level await is ES8 only (use promises or async function if ES8 is unavailable)
const jsonContent = await (await fetch("https://example.com/style.json")).json();

const myStyle = loadStyle(jsonContent);
```
