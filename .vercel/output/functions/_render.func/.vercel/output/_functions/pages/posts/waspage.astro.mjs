/* empty css                                    */
import { c as createComponent, r as renderTemplate, b as createAstro } from '../../chunks/astro/server_DrEvYt-1.mjs';
import 'kleur/colors';
import 'clsx';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
const $$Waspage = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Waspage;
  return renderTemplate`<!-- ---
// import { Tags } from "@/content/config";
import Layout from "@/layouts/Layout.astro";
import { getCollection } from "astro:content";

export async function getStaticPaths() {
  return [
    { params: { tag: "WPM" } },
    { params: { tag: "javascript" } },
    { params: { tag: "other" } },
  ];
}

const { tag } = Astro.params;

const blogs = await getCollection("posts");
const taggedBlogs = blogs.filter((b) => b.data.tags.includes(tag));
---

<Layout title="Blogs">
  <div class="flex gap-3 mx-2 mb-4"> --><!-- {
      Tags.map((t) => (
        <a
          href={\`/blogs/\${t}\`}
          class={\` bg-secondary rounded-lg cursor-pointer p-2 min-w-20 text-center text-white \${t === tag ? "bg-primary" : ""}\`}
        >
          {t}
        </a>
      ))
    } --><!-- </div>
  {
    taggedBlogs.map(({ data }) => (
      <div class="shadow rounded-md p-6 space-y-2 mx-2 hover:shadow-lg transition">
        {/* <Link href={\`blog/\${slug}\`} text={data.title} /> */}
        <p class="text-sm">{data.date}</p>
        <p class="text-2xl">{data.blurb}</p>
      </div>
    ))
  }
</Layout> -->`;
}, "/root/code/jchapps/astro-website/src/pages/posts/waspage.astro", void 0);

const $$file = "/root/code/jchapps/astro-website/src/pages/posts/waspage.astro";
const $$url = "/posts/waspage";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Waspage,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
