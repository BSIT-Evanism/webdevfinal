import { component$, useSignal, useVisibleTask$ } from "@builder.io/qwik";
import Image from "../../images/webdev.png?jsx";
import { Link } from "@builder.io/qwik-city";
import { LogoAnimator } from "~/integrations/react/LogoAnimator";

export default component$(() => {
  const url = "shop";

  return (
    <div class="relative p-4">
      <Link href="/">
        <LogoAnimator url={url}>
          <Image />
        </LogoAnimator>
      </Link>
    </div>
  );
});
