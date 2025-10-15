import type { Route } from "./+types/catalog.games";
import { CatalogLayout } from "../components/catalog-layout";
import { CatalogPageTemplate, type CatalogPageData } from "../components/catalog-page-template";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Video Games - Music Magick | Warwick, RI" },
    { name: "description", content: "Browse our collection of video games for all platforms at Music Magick in Warwick, RI. From classic retro games to modern releases across all gaming generations." },
  ];
}

export function loader({ context }: Route.LoaderArgs) {
  // In a real app, this would fetch data from your database/API
  const catalogData: CatalogPageData = {
    category: "Video Games",
    categoryDescription: "Discover our extensive collection of video games spanning all platforms and generations. From classic retro games to modern releases, we have titles for every type of gamer and gaming system.",
    heroImage: "/images/storefloor4.webp",
    totalItems: 0,
    highlights: [
      "Extensive video game collection across all platforms and generations",
      "Classic retro games for Nintendo, Sega, PlayStation, and Xbox systems",
      "Modern releases for current-generation consoles and PC",
      "Rare and collectible games from gaming's golden eras",
      "Complete game series and franchise collections",
      "Most games priced at just $2.00 - incredible value for gaming entertainment"
    ],
    genres: [
      "Action", "Adventure", "RPG", "Shooter", "Racing", "Sports", "Fighting",
      "Platformer", "Puzzle", "Strategy", "Simulation", "Horror", "Racing",
      "Retro", "Classic", "Indie", "Multiplayer", "Single Player", "Nintendo",
      "PlayStation", "Xbox", "Sega", "PC"
    ],
    storeInfo: {
      hours: "Open Everyday: 10am-6pm",
      location: "1454 Main St. (Unit 20) West Warwick, RI",
      phone: "401-320-8200"
    }
  };

  return { catalogData };
}

export default function CatalogGames({ loaderData }: Route.ComponentProps) {
  return (
    <CatalogLayout>
      <CatalogPageTemplate 
        data={loaderData.catalogData}
        showBackButton={true}
        backButtonHref="/catalog"
      />
    </CatalogLayout>
  );
}
