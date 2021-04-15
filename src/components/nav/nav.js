import HTMLBuilder from "../../libs/html_builder";
import MainNavItems from "./nav_items";

import "./nav.scss";
import MainNavMenu from "./nav_menu";

const data = [
    {
        header: "Projects",
        items: [
            {
                text: "Kindle Manga Reader",
                link: "https://mohamed28.github.io/manga-web-reader/"
            }
        ]
    },
    {
        header: "Tests & Examples",
        items: [
            {
                text: "Kindle Manga Reader",
                link: "https://mohamed28.github.io/manga-web-reader/"
            }
        ]
    }
]

export default class Nav extends HTMLBuilder {
    constructor() {
        super("nav", "", { class: "nav", id: "nav" }, [new MainNavMenu(data)])
    }
}