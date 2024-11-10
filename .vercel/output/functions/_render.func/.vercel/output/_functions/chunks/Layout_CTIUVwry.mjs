import { c as createComponent, r as renderTemplate, d as addAttribute, b as createAstro, a as renderComponent, h as renderHead, i as renderSlot } from './astro/server_DrEvYt-1.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                         */
import { $ as $$Image } from './_astro_assets_BsYhZTa6.mjs';

const $$Astro$1 = createAstro();
const $$ViewTransitions = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ViewTransitions;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>`;
}, "/root/code/jchapps/astro-website/node_modules/astro/components/ViewTransitions.astro", void 0);

const Pattern = new Proxy({"src":"/_astro/pattern.Qnu3ysXg.svg","width":1067,"height":1067,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/root/code/jchapps/astro-website/public/pattern.svg";
							}
							
							return target[name];
						}
					});

const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en" class="text-black font-kabelMD"> <head><meta charset="UTF-8"><meta name="description" content="Astro description"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}>${renderComponent($$result, "ViewTransitions", $$ViewTransitions, {})}<title>${title}</title>${renderHead()}</head> <body class="bg-white dark:text-white dark:bg-primary min-w"> <div class="bg-main w-full h-full top-0 left-0 block fixed animate-noise"> ${renderComponent($$result, "Image", $$Image, { "loading": "eager", "src": Pattern, "class": "w-full h-full", "alt": "Line Pattern" })} </div> <main class="h-screen overflow-auto relative"> <div class="flex justify-center items-center h-full"> ${renderSlot($$result, $$slots["default"])} </div> </main> </body></html>`;
}, "/root/code/jchapps/astro-website/src/layouts/Layout.astro", void 0);

export { $$Layout as $ };
