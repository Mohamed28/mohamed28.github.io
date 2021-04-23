import Component from "../../libs/component"
import "./Header.scss"
export default class Header {
    constructor() {
        return this.render()
    }

    render() {
        return Component.build("header", "", { class: "header" },
            ["img", "", { src: "https://github.com/Mohamed28/mohamed28.github.io/blob/feature/new-layout/src/assets/images/gifs/run.gif?raw=true", alt: "Logo" }],
            // ["video", "", { width: "128", height: "128", controls: "false"  , loop: "loop", autoplay: "autoplay" }, ["source", "", { src: "https://github.com/Mohamed28/mohamed28.github.io/blob/feature/new-layout/src/assets/video/run.mp4?raw=true", type: "video/mp4" }]],
            ["h1", "Welcome to the Mohamed28's DOME!"]
        )
    }
}