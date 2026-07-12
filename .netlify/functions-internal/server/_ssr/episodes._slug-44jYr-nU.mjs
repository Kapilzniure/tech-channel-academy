import { j as notFound, m as createFileRoute, p as lazyRouteComponent } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as episodes } from "./episodes-CwYI_L2B.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/episodes._slug-44jYr-nU.js
var $$splitComponentImporter = () => import("./episodes._slug-D8ZLLhoW.mjs");
var $$splitNotFoundComponentImporter = () => import("./episodes._slug-1FJm9L2v.mjs");
var Route = createFileRoute("/episodes/$slug")({
	loader: ({ params }) => {
		const episode = episodes.find((e) => e.slug === params.slug);
		if (!episode) throw notFound();
		const txIndex = episodes.findIndex((e) => e.slug === params.slug);
		return {
			episode,
			txNum: `TX-${String(episodes.length - txIndex).padStart(3, "0")}`,
			txIndex
		};
	},
	head: ({ loaderData }) => {
		if (!loaderData) return { meta: [{ title: "Transmission not found" }, {
			name: "robots",
			content: "noindex"
		}] };
		const { episode } = loaderData;
		return { meta: [
			{ title: `${episode.title} — The Transmission` },
			{
				name: "description",
				content: episode.excerpt
			},
			{
				property: "og:title",
				content: episode.title
			},
			{
				property: "og:description",
				content: episode.excerpt
			},
			{
				property: "og:type",
				content: "article"
			}
		] };
	},
	notFoundComponent: lazyRouteComponent($$splitNotFoundComponentImporter, "notFoundComponent"),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
