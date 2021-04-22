import config from "../config.json"
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import Component from "./libs/component";

document.body.append(
    Component.build("div", "", { id: "app", class: "app" },
        new Header(),
        new Nav(config.navigation)
    )
)