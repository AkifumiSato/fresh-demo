/** @jsx h */
import { h } from "preact";
import { IS_BROWSER } from "$fresh/runtime.ts";
import { tw } from "@twind";

export function Header({ children, ...props }: h.JSX.HTMLAttributes<HTMLButtonElement>) {
  return (
    <header {...props}>
      <div class={tw`flex justify-between	`}>
        <div>header</div>
        <div>{children}</div>
      </div>
    </header>
  );
}
