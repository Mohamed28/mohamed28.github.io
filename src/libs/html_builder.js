"use strict"

export default class HTMLBuilder {

    constructor(tag, content, options = {}, children = []) {
        this._rootElement = document.createElement(tag)

        return this.render(tag, content, options, children, true)
    }

    render(tag, content, options, children, isRoot = false) {
        this._element = isRoot ? this.rootElement : document.createElement(tag)
        this.content(content)
        this.options(options)
        this.children(children)

        if (isRoot) {
           return this.rootElement
        }

        return this.element
    }

    hasRootElement() {
        return this.rootElement !== "undefined"
    }

    content(content) {
        if (content === "") return

        this.element.append(document.createTextNode(content))
    }

    options(options = {}) {
        if (Object.keys(options).length < 1) return

        Object.keys(options).forEach(key => this.element.setAttribute(key, options[key]))
    }

    children(children = []) {
        if (children.length < 1) return;

        children.forEach(child => {
            if (Array.isArray(child)) child = this.render(...child);

            this.rootElement.append(child)
        })
    }


    get rootElement() {
        return this._rootElement
    }


    get element() {
        return this._element
    }

    // get content() {
    //     return this._content
    // }

    // get options() {
    //     return this._options
    // }

    // get children() {
    //     return this._children
    // }

}