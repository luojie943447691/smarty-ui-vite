import { App ,h} from "vue";

import { SButton } from "./button/Button";
import "uno.css";

export { SButton };

export default {
  install(app: App) {
    app.component(SButton.name, SButton);
  },
};
