import * as classes from "ol/style.js"

export function loadStyle(json) {
    if (!json || typeof json !== "object") {
        return json;
    }
    if (Array.isArray(json)) {
        return json.map(item => loadStyle(item))
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
