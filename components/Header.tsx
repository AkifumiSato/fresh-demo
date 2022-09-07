/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";

export function Header({ children, ...props }: h.JSX.HTMLAttributes<HTMLHeadElement>) {
  return (
    <header {...props}>
      <div class={tw`flex justify-between	`}>
        <div>header</div>
        <div>{children}</div>
      </div>
    </header>
  );
}
