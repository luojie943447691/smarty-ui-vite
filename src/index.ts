import { createApp } from "vue";

import App from "./App";
import SmartyUI from './entry'
import "uno.css";
const app = createApp(App);

app.use(SmartyUI).mount("#app");
