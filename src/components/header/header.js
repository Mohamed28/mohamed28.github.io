import HTMLBuilder from "../../libs/html_builder";
import "./header.scss"

export default class MainHeader extends HTMLBuilder {
    constructor() {
        super("header", "", { class: "header" }, [
            ["img", "", { src: "https://mohamed28.github.io/src/assets/images/icons/head/home-tab.png", alt: "Logo" }],
            ["h1", "Welcome to the Mohamed28's DOME!"]
        ])
    }
}

