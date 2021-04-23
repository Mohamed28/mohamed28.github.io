import config from "../config.json"
import App from "./app";

window.app = new App(config);
window.app.index()