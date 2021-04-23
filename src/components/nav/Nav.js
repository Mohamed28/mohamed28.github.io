import Component from "../../libs/component";
import "./Nav.scss";

export default class Nav {
    constructor(props) {
        this.props = props

        return this.render()
    }
    render() {
        return Component.build("nav", "", { id: "nav", class: "nav" },
            ["ul", "", {},
                ...this.props.collections.map(collection => this.collection(collection)),
                ...this.props.links.map(link => this.item(link))
            ]
        )
    }

    collection(collection) {
        return ["li", "", {},
            ["details", "", {},
                ["summary", "", {},
                    ["div", collection.header]
                ],
                ["div", "", {},
                    ["ul", "", {},
                        ...collection.items.map(item => this.item(item))]
                ]
            ]
        ]
    }

    item(item) {
        return ["li", "", {}, ["a", item.name, { href: item.url, target: "_blank" }]]
    }

}