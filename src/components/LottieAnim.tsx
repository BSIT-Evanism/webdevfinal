import { component$, useStore } from "@builder.io/qwik";
import { QwikLottie } from "qwik-lottie";

export const LottieAnim = component$(() => {
  const store = useStore({
    options: {
      path: "https://assets8.lottiefiles.com/packages/lf20_r13nskBJNo.json",
    },
  });
  return (
    <div class="absolute right-20 top-0">
      <QwikLottie options={store.options} />
    </div>
  );
});
