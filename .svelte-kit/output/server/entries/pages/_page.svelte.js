import { c as create_ssr_component, v as validate_component } from "../../chunks/index.js";
import { S as ScreenText } from "../../chunks/ScreenText.js";
import "firebase/auth";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `<!-- HEAD_svelte-1bvzmup_START -->${$$result.title = `<title>ScreenText</title>`, ""}<meta name="${"description"}" content="${"Screen Text"}"><!-- HEAD_svelte-1bvzmup_END -->`, ""}

<main class="${"bg-zinc-900 w-screen h-screen"}"><div class="${"static h-screen"}">${validate_component(ScreenText, "ScreenText").$$render($$result, { message: "hello" }, {}, {})}</div>
</main>`;
});
export {
  Page as default
};
