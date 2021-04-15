import { HTMLBuilder } from "../../libs/html_builder";
import "./header.scss"

export const Header = () => {
    return HTMLBuilder.build("header", "", { class: "header" }, [
        ["img", "", { src: "https://mohamed28.github.io/app/assets/images/icons/head/home-tab.png", alt: "Logo" }],
        ["h1", "Welcome to the Mohamed28's DOME!"]
    ]);
}

