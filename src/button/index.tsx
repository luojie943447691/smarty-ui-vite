import { defineComponent } from "vue";
import { SButton } from "./Button";

export const Button = defineComponent({
  setup() {
    return () => (
      <>
        <div class="un-flex un-items-center ">
          <SButton
            v-slots={{
              icon: () => (
                <i class={`un-i-ic-round-send-and-archive un-p-3 `}></i>
              ),
            }}
          >
            蓝色
          </SButton>
          <SButton color="red">红色按钮</SButton>
          <SButton color="gray">灰色按钮</SButton>
        </div>
        <div class="un-flex un-items-center ">
          <SButton size="small">小</SButton>
          <SButton size="medium">正常</SButton>
          <SButton size="large">大</SButton>
        </div>
      </>
    );
  },
});
