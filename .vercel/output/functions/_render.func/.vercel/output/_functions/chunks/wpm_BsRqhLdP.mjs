import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_DrEvYt-1.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>Words per minute. I first came across this concept back in the days of Heroes of Newerth and StarCraft 2, thanks to APM (actions per minute). Even after all the time I’d spent at a keyboard—gaming, studying, working—I’d never really thought about typing speed or efficiency. I just typed however felt natural.</p>\n<p>Then, things changed. After I bought a new keyboard (thanks to a YouTube algorithm that decided I needed all the keyboard content), I started feeling the urge to break the iconic 100 WPM mark.</p>\n<p><img src=\"/public/images/100.png\" alt=\"100WPM\"></p>\n<p>I gave the “10-finger” typing method a go, but it was a struggle. My productivity plummeted, and typing felt awkward and slow. Eventually, I found that my hands were happier with a “9-ish” finger method—left hand index finger resting on J, right hand index resting on D. After about a month, I was comfortably hitting 100 WPM.</p>\n<p>Was it worth it? Overall, yes. It’s a nice productivity boost, and the bragging rights don’t hurt. But it’s not for the faint-hearted—breaking old typing habits is no joke.</p>";

				const frontmatter = {"title":"wpm","date":"2023-08-15","blurb":"wpm","tags":["other"]};
				const file = "/root/code/jchapps/astro-website/src/content/posts/wpm.md";
				const url = undefined;
				function rawContent() {
					return "\nWords per minute. I first came across this concept back in the days of Heroes of Newerth and StarCraft 2, thanks to APM (actions per minute). Even after all the time I’d spent at a keyboard—gaming, studying, working—I’d never really thought about typing speed or efficiency. I just typed however felt natural.\n\nThen, things changed. After I bought a new keyboard (thanks to a YouTube algorithm that decided I needed all the keyboard content), I started feeling the urge to break the iconic 100 WPM mark.\n\n![100WPM](/public/images/100.png)\n\nI gave the “10-finger” typing method a go, but it was a struggle. My productivity plummeted, and typing felt awkward and slow. Eventually, I found that my hands were happier with a “9-ish” finger method—left hand index finger resting on J, right hand index resting on D. After about a month, I was comfortably hitting 100 WPM.\n\nWas it worth it? Overall, yes. It’s a nice productivity boost, and the bragging rights don’t hurt. But it’s not for the faint-hearted—breaking old typing habits is no joke.\n";
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
