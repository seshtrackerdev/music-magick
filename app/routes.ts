import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("about", "routes/about.tsx"),
  route("privacy", "routes/privacy.tsx"),
  route("catalog", "routes/catalog.tsx"),
  route("catalog/cds", "routes/catalog.cds.tsx"),
  route("catalog/dvds", "routes/catalog.dvds.tsx"),
  route("catalog/blu-rays", "routes/catalog.blu-rays.tsx"),
  route("catalog/games", "routes/catalog.games.tsx"),
  route("catalog/vinyl", "routes/catalog.vinyl.tsx"),
  route("catalog/tv-shows", "routes/catalog.tv-shows.tsx"),
  route("*", "routes/404.tsx"),
] satisfies RouteConfig;
