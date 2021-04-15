import HTMLBuilder from "../../libs/html_builder"
import MainNavSubmenu from "./nav_submenu"


export default class MainNavItems extends HTMLBuilder {
    constructor(content) {
        super("li", "", { class: "nav__items" }, [["details", "", {}, [
            ["summary", content.header],
            ["div", "", {}, [new MainNavSubmenu(content.items)]]
        ]]])
    }
}