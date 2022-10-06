import { describe, test, expect } from "vitest";
import { shallowMount } from "@vue/test-utils";
import { SButton } from "../Button";
describe("Button", () => {
  test("mount @vue/test-utils", () => {
    const wrapper = shallowMount(SButton, {
      slots: {
        default: "我的按钮",
      },
    });
    expect(wrapper.text()).toBe("我的按钮");
  });

  test("color is red", () => {
    const wrapper = shallowMount(SButton, {
      slots: {
        default: "我的按钮",
      },
      props: {
        color: "red",
      },
    });
    expect(wrapper.text()).toBe("我的按钮");
    expect(wrapper.props("color")).toBe("red");
  });
});
