import { HTMLBuilder } from "./libs/html_builder";
import { Header } from "./components/header/header";
import { Nav } from "./components/nav/nav";


const App = document.getElementById("app")
App.append(Header())
App.append(Nav())

// const App = HTMLBuilder.build("div", "", { class: "app" })