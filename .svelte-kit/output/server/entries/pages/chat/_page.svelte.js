import { c as create_ssr_component, v as validate_component } from "../../../chunks/index.js";
import { S as ScreenText } from "../../../chunks/ScreenText.js";
import "firebase/auth";
const TextBox = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<main><div class="${"absolute bottom-0 p-3 rounded-t-lg bg-zinc-800 w-full h-auto"}">${`<div class="${""}"><button class="${"h-auto w-full p-3 text-center rounded bg-zinc-500"}">LOGIN
				</button></div>`}</div>
</main>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `<!-- HEAD_svelte-lwyanr_START -->${$$result.title = `<title>Chat</title>`, ""}<meta name="${"description"}" content="${"Chat Dashboard"}"><!-- HEAD_svelte-lwyanr_END -->`, ""}

<main><div class="${"bg-zinc-900 w-screen h-screen"}">${validate_component(ScreenText, "ScreenText").$$render($$result, { message: "hello" }, {}, {})}
		${validate_component(TextBox, "TextBox").$$render($$result, {}, {}, {})}</div>
</main>`;
});
export {
  Page as default
};
