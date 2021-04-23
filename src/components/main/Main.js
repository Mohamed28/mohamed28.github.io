import App from "../../app"
import Component from "../../libs/component"

export default class Main {
    constructor(props) {
        this.props = props

        return this.render()
    }

    render() {
        return Component.build("main", "", { id: "main", class: "main" },
            ["a", "Teste", { "event": ["click", "show", "main"], id: "some", class: "any" }]
        )
    }
}