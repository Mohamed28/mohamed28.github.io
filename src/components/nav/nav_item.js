import HTMLBuilder from "../../libs/html_builder"


export default class MainNavItem extends HTMLBuilder {
    constructor(item) {
        super("a", item.text, { class: "nav__item", href: item.link })
    }
}