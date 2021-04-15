import { HTMLBuilder } from "../../libs/html_builder";
import { navItems } from "./nav_items";

import "./nav.scss";

const contents = [
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



export const Nav = () => {
    return HTMLBuilder.build("nav", "", { class: "nav", id: "nav" },
        ["ul", "", { class: "nav__menu" },
            contents.map(content => navItems(content))
        ]
    );
}