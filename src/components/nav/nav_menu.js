import HTMLBuilder from "../../libs/html_builder"
import MainNavItems from "./nav_items"


export default class MainNavMenu extends HTMLBuilder {
    constructor(data) {
        super("ul", "", { class: "nav__menu" }, data.map(content => new MainNavItems(content)))
    }
}