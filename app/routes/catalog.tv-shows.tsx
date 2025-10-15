import type { Route } from "./+types/catalog.tv-shows";
import { CatalogLayout } from "../components/catalog-layout";
import { CatalogPageTemplate, type CatalogPageData } from "../components/catalog-page-template";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "TV Shows & Series - Music Magick | Warwick, RI" },
    { name: "description", content: "Browse our collection of TV shows and series on DVD and Blu-ray at Music Magick in Warwick, RI. Complete seasons and box sets of your favorite shows." },
  ];
}

export function loader({ context }: Route.LoaderArgs) {
  // In a real app, this would fetch data from your database/API
  const catalogData: CatalogPageData = {
    category: "TV Shows & Series",
    categoryDescription: "Binge-watch your favorite shows with our extensive collection of TV series and complete seasons. From classic sitcoms to modern dramas, find complete box sets and individual seasons of the shows you love.",
    heroImage: "/images/storefloor6.webp",
    totalItems: 0,
    highlights: [
      "Extensive TV show and complete series collections",
      "Complete season box sets for binge-watching your favorite shows",
      "Classic sitcoms, dramas, and series from television's golden age",
      "Modern hit shows and critically acclaimed series",
      "Documentary series and educational programming",
      "Most TV shows priced at just $2.00 - incredible value for entertainment"
    ],
    genres: [
      "Comedy", "Drama", "Action", "Thriller", "Horror", "Sci-Fi", "Fantasy",
      "Crime", "Mystery", "Romance", "Documentary", "Reality", "Animation",
      "Sitcom", "Procedural", "Anthology", "Miniseries", "Classic TV",
      "Modern TV", "British TV", "International", "Educational"
    ],
    storeInfo: {
      hours: "Open Everyday: 10am-6pm",
      location: "1454 Main St. (Unit 20) West Warwick, RI",
      phone: "401-320-8200"
    }
  };

  return { catalogData };
}

export default function CatalogTVShows({ loaderData }: Route.ComponentProps) {
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
