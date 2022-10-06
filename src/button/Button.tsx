import { defineComponent, PropType } from "vue";

export type ISize = "small" | "medium" | "large";
export type IColor =
  | "black"
  | "gray"
  | "red"
  | "yellow"
  | "green"
  | "blue"
  | "indigo"
  | "purple"
  | "pink";

export const SButton = defineComponent({
  name: "SButton",
  props: {
    color: {
      type: String as PropType<IColor>,
      default: "blue",
    },
    size: {
      type: String as PropType<ISize>,
      default: "medium",
    },
    icon: {
      type: String as PropType<string>,
      default: "search",
    },
  },
  setup(props, { slots }) {
    return () => {
      const { color, size } = props;
      const _size = {
        small: {
          x: "2",
          y: "1",
          text: "sm",
        },
        medium: {
          x: "3",
          y: "1.5",
          text: "base",
        },
        large: {
          x: "4",
          y: "2",
          text: "lg",
        },
      };
      // un-text-var(--text-black)
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
      return (
        <>
          {/* <IconCarbonApps   /> */}
          <button class={classMergedVariety} style="--text-black:#00ff00;">
            {icon
              ? icon()
              : // <i class={`un-i-ic-baseline-${props.icon} un-p-3 `}></i>
                // <i class={`un-i-ic-round-send-and-archive un-p-3 `}></i>
                ""}
            {slots.default ? slots.default() : null}
          </button>
        </>
      );
    };
  },
});
