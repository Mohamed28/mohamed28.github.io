import { HTMLBuilder } from "../../libs/html_builder";
import { navItem } from "./nav_item";

export const navItems = (content) => {
    return HTMLBuilder.build("li", "", { class: "nav__items" },
        ["details", "", {},
            [
                ["summary", content.header],
                ["div", "", {},
                    ["ul", "", {}, content.items.map(item => navItem(item.text, item.link))]
                ]
            ]
        ]
    );
}