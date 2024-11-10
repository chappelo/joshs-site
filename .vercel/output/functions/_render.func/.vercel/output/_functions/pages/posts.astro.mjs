/* empty css                                 */
import { c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead, d as addAttribute } from '../chunks/astro/server_DrEvYt-1.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_CTIUVwry.mjs';
import { a as getCollection } from '../chunks/_astro_content_M3fDYcl0.mjs';
export { renderers } from '../renderers.mjs';

const $$Posts = createComponent(async ($$result, $$props, $$slots) => {
  const posts = await getCollection("posts");
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "JOSHUA" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="flex flex-col px-4"> <h1 class="text-5xl md:text-6xl xl:text-8xl font-kabelB animate-leftslide opacity-0 py-4 xl:py-6">
POSTS
</h1> ${posts.map(({ data }) => renderTemplate`<a${addAttribute(`/post/${data.title}`, "href")} class="font-kabelB text-2xl md:text-3xl xl:text-4xl inline-block group relative w-max leading-relaxed md:leading-relaxed xl:leading-relaxed animate-rightslide opacity-0 uppercase py-4"> ${data.title} <p class="text-sm text-primary">${data.date}</p> <span class="absolute -bottom-0.5 left-0 w-0 transition-all duration-300 h-1 bg-black group-hover:w-full rounded-md"></span> </a>`)} </div> ` })}`;
}, "/root/code/jchapps/astro-website/src/pages/posts.astro", void 0);

const $$file = "/root/code/jchapps/astro-website/src/pages/posts.astro";
const $$url = "/posts";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Posts,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
