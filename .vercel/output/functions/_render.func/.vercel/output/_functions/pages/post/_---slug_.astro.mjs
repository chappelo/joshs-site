/* empty css                                    */
import { c as createComponent, r as renderTemplate, a as renderComponent, b as createAstro, m as maybeRenderHead } from '../../chunks/astro/server_DrEvYt-1.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../../chunks/Layout_CTIUVwry.mjs';
import { g as getEntry } from '../../chunks/_astro_content_M3fDYcl0.mjs';
/* empty css                                     */
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const { slug } = Astro2.params;
  if (slug == void 0) {
    throw new Error("No slug found.");
  }
  const entry = await getEntry("posts", slug);
  if (entry == void 0) {
    return Astro2.redirect("/404");
  }
  const { Content } = await entry.render();
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "JOSHUA" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="flex flex-col px-8 w-full md:w-3/4 xl:w-1/2 py-16 h-full"> <h1 class="text-5xl uppercase animate-leftslide opacity-0"> ${entry.data.title} </h1> <div class="animate-rightslide opacity-0 [&>p]:my-7 [&>p]:leading-relaxed [&>p]:xl:text-lg [&>p]:md:text-base [&>p]:text-sm"> ${renderComponent($$result2, "Content", Content, {})} </div> </div> ` })} `;
}, "/root/code/jchapps/astro-website/src/pages/post/[...slug].astro", void 0);

const $$file = "/root/code/jchapps/astro-website/src/pages/post/[...slug].astro";
const $$url = "/post/[...slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
