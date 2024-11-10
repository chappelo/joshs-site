import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_DrEvYt-1.mjs';
import 'kleur/colors';
import 'clsx';

const html = "";

				const frontmatter = {"title":"javascript","date":"2023-12-05","blurb":"Reflections on things I read about run time JS","tags":["javascript","study"]};
				const file = "/root/code/jchapps/astro-website/src/content/posts/javascript.md";
				const url = undefined;
				function rawContent() {
					return "";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
