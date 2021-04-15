import HTMLBuilder from "./libs/html_builder";
import MainHeader from "./components/header/header";
import Nav from "./components/nav/nav";

const app = new HTMLBuilder("div", "", { id: "app", class: "app" }, [
    new MainHeader(), new Nav()
])

document.body.append(app)