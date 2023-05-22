/* eslint-disable eqeqeq */
/* eslint-disable guard-for-in */
/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
var camelToDash = function (name) {
    return name.replace(/\W+/g, '-')
        .replace(/([a-z\d])([A-Z])/g, '$1-$2').toLowerCase();
};
export function getPropertyString(vueRoot, key) {
    var _a;
    var el = (_a = vueRoot === null || vueRoot === void 0 ? void 0 : vueRoot.$el) === null || _a === void 0 ? void 0 : _a.parentElement, prop = el ? el.getAttribute("data-".concat(camelToDash(key))) : null;
    if (prop)
        return decodeURIComponent(prop);
    else
        return "";
}
export function getPropertyInteger(vueRoot, key) {
    var propStringValue = getPropertyString(vueRoot, key);
    try {
        return parseInt(propStringValue);
    }
    catch (e) {
        return 0;
    }
}
export function getPropertyFloat(vueRoot, key) {
    var propStringValue = getPropertyString(vueRoot, key);
    try {
        return parseFloat(propStringValue);
    }
    catch (e) {
        return 0;
    }
}
export function getPropertyObject(vueRoot, key) {
    var propValue = getPropertyString(vueRoot, key);
    if (propValue)
        return JSON.parse(propValue);
}
export function getPropertyBoolean(vueRoot, key) {
    var propValue = getPropertyString(vueRoot, key);
    return (propValue == "true");
}
export function getInstanceId(vueRoot) {
    return getPropertyString(vueRoot, "instanceId");
}
export function getVueDOMElementHTML(appID, properties, instanceId) {
    if (instanceId === void 0) { instanceId = ""; }
    var props = [], propAttributes = "";
    for (var k in properties) {
        var prop = properties[k];
        if (typeof (prop) == "string")
            props.push({
                key: k,
                value: prop
            });
        else if (typeof (prop) == "number")
            props.push({
                key: k,
                value: prop.toString()
            });
        else if (typeof (prop) == "boolean")
            props.push({
                key: k,
                value: prop ? "true" : "false"
            });
        else if (typeof (prop) == "object")
            props.push({
                key: k,
                value: JSON.stringify(prop)
            });
    }
    props.forEach(function (prop) {
        propAttributes += "data-".concat(camelToDash(prop.key), "=\"").concat(encodeURIComponent(prop.value), "\"");
    });
    return "<div id=\"".concat(appID, "\" data-instance-id=\"").concat(instanceId, "\" ").concat(propAttributes, "></div>");
}
//# sourceMappingURL=WebpartProperties.js.map