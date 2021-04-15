import { HTMLBuilder } from "../../libs/html_builder";

const tests = {
    content: [
        { element: "h1", content: "Pipi" },
        { element: "h2", content: "Pepeca" }
    ]
}

export const Test = () => {
    return HTMLBuilder.build("div", "", { id: "test" }, )
}