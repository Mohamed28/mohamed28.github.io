import { HTMLBuilder } from "../../libs/html_builder";

export const navItem = (text, link) => {
    return HTMLBuilder.build("li", "", { class: "nav__item" }, [
        ["a", text, { href: link }]
    ]);
}