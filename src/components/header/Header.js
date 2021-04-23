import Component from "../../libs/component"
import "./Header.scss"
export default class Header {
    constructor() {
        return this.render()
    }

    render() {
        return Component.build("header", "", { class: "header" },
            // ["img", "", { src: "./assets/images/gifs/run-gray.gif", alt: "Logo" }],
            ["video", "", { width: "128", height: "128", controls: "false"  , loop: "loop", autoplay: "autoplay" }, ["source", "", { src: "./assets/images/gifs/run-gray.gif", type: "video/gif" }]],
            ["h1", "Welcome to the Mohamed28's DOME!"]
        )
    }
}