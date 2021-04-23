import Header from "./components/header/Header";
import Main from "./components/main/Main";
import Nav from "./components/nav/Nav";
import Component from "./libs/component"

export default class App {
    constructor(props) {
        this.props = props
        this.root = Component.build("div", "", { id: "app", class: "app" })

        document.body.append(this.root)
    }

    render(...components) {
        components.forEach(component => this.root.append(component))
    }

    index() {
        window.app.innerHTML = this.render(
            new Header(),
            new Nav(this.props.navigation),
            new Main()
        )
    }

    show() {
        window.app.innerHTML = this.render(
            new Header(),
            new Nav(this.props.navigation),
            Component.build("main", "", {}, ["h1", "Piroca"])
        )
    }
}