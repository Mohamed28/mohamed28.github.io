import Component from "../../libs/component"
import "./Header.scss"

export default class Header {
    constructor() {
        return this.render()
    }

    render() {
        return Component.build("header", "", { class: "header" },
            ["img", "", { src: "https://mohamed28.github.io/src/assets/images/icons/head/home-tab.png", alt: "Logo" }],
            ["h1", "Welcome to the Mohamed28's DOME!"]
        )
    }
}

