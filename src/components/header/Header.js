import Component from "../../libs/component"
import "./Header.scss"
export default class Header {
    constructor() {
        return this.render()
    }

    render() {
        return Component.build("header", "", { class: "header" },
            ["img", "", { src: "https://github.com/Mohamed28/mohamed28.github.io/blob/feature/new-layout/src/assets/images/gifs/run.gif?raw=true", alt: "Logo" }],
            ["h1", "Welcome to the Mohamed28's DOME!"]
        )
    }
}