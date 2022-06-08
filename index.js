
import Circle from "ol/style/Circle.js"
import Fill from "ol/style/Fill.js"
import Icon from "ol/style/Icon.js"
import Image from "ol/style/Image.js"
import IconImage from "ol/style/IconImage.js"
import RegularShape from "ol/style/RegularShape.js"
import Stroke from "ol/style/Stroke.js"
import Style from "ol/style/Style.js"
import Text from "ol/style/Text.js"

const classes = { Circle, Fill, Icon, Image, IconImage, RegularShape, Stroke, Style, Text };

export function loadStyle(json) {
    if (!json || typeof json !== "object") {
        return json;
    }
    const result = {};
    for (const key of Object.keys(json)) {
        const className = classes[key];
        if (className) {
            return new className(loadStyle(json[key]));
        } else {
            result[key] = loadStyle(json[key]);
        }
    }
    return result;
}
