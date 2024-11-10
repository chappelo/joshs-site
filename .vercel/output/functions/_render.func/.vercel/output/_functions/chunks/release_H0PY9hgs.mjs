import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_DrEvYt-1.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>COMING SOON</p>";

				const frontmatter = {"title":"release","date":"2024-01-01","blurb":"Coming soon","tags":["study","other"]};
				const file = "/root/code/jchapps/astro-website/src/content/posts/release.md";
				const url = undefined;
				function rawContent() {
					return "\nCOMING SOON\n";
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
