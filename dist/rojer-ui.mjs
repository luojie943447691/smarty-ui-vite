import { defineComponent, createVNode, createTextVNode, resolveComponent, openBlock, createElementBlock, Fragment, createElementVNode } from "vue";
const TSXButton = defineComponent({
  name: "TSXButton",
  setup() {
    return () => createVNode("button", null, [createTextVNode("tsxButton")]);
  }
});
const _sfc_main = {
  name: "SFCButton"
};
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _hoisted_1 = /* @__PURE__ */ createElementVNode("button", null, "123", -1);
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_IconCarbonApps = resolveComponent("IconCarbonApps");
  return openBlock(), createElementBlock(Fragment, null, [
    _hoisted_1,
    createVNode(_component_IconCarbonApps)
  ], 64);
}
const SFCButton = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
const Button = defineComponent({
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
    app.component(TSXButton.name, TSXButton);
    app.component(SFCButton.name, SFCButton);
    app.component(Button.name, Button);
  }
};
export {
  Button,
  SFCButton,
  TSXButton,
  entry as default
};
