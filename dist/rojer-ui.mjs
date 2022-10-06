import { defineComponent, createVNode, Fragment } from "vue";
const SButton = defineComponent({
  name: "SButton",
  props: {
    color: {
      type: String,
      default: "blue"
    },
    size: {
      type: String,
      default: "medium"
    },
    icon: {
      type: String,
      default: "search"
    }
  },
  setup(props, {
    slots
  }) {
    return () => {
      const {
        color,
        size
      } = props;
      const _size = {
        small: {
          x: "2",
          y: "1",
          text: "sm"
        },
        medium: {
          x: "3",
          y: "1.5",
          text: "base"
        },
        large: {
          x: "4",
          y: "2",
          text: "lg"
        }
      };
      const classMergedVariety = `
              un-py-${_size[size].y}
              un-px-${_size[size].x}
              un-font-semibold 
              un-rounded-lg 
              un-shadow-md 
              un-cursor-pointer
              un-text-${_size[size].text}
              un-text-#00ff00
              un-bg-${color}-500 
              un-hover:bg-${color}-700 
              un-border-none
              un-cursor-pointer
              `;
      const icon = slots.icon;
      return createVNode(Fragment, null, [createVNode("button", {
        "class": classMergedVariety,
        "style": "--text-black:#00ff00;"
      }, [icon ? icon() : "", slots.default ? slots.default() : null])]);
    };
  }
});
const __uno = "";
const entry = {
  install(app) {
    app.component(SButton.name, SButton);
  }
};
export {
  SButton,
  entry as default
};
//# sourceMappingURL=rojer-ui.mjs.map
