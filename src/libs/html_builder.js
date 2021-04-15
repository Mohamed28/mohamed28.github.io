"use strict"

export const HTMLBuilder = {

    build(tag, content, options = {}, children = []) {
        let element = document.createElement(tag)
        let keys = Object.keys(options)

        if (content !== "") element.append(document.createTextNode(content))

        if (keys.length > 1) {
            keys.forEach(key => element.setAttribute(key, options[key]))
        }

        if (children.length > 1) children.forEach(child => element.append(this.build(...child)))

        return element
    }
}