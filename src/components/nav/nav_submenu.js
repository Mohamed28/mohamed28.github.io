import HTMLBuilder from "../../libs/html_builder"
import MainNavItem from "./nav_item"


export default class MainNavSubmenu extends HTMLBuilder {
    constructor(items) {
        super("div", "", { class: "nav__submenu" }, items.map(item => new MainNavItem(item)))
    }
}