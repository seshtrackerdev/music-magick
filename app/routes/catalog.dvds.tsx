import type { Route } from "./+types/catalog.dvds";
import { CatalogLayout } from "../components/catalog-layout";
import { CatalogPageTemplate, type CatalogPageData } from "../components/catalog-page-template";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "DVDs & Movies - Music Magick | Warwick, RI" },
    { name: "description", content: "Browse our collection of over 30,000 DVDs and movies at Music Magick in Warwick, RI. From classic films to recent releases, find your favorite movies at great prices." },
  ];
}

export function loader({ context }: Route.LoaderArgs) {
  // In a real app, this would fetch data from your database/API
  const catalogData: CatalogPageData = {
    category: "DVDs & Movies",
    categoryDescription: "Explore our extensive collection of over 30,000 DVDs and movies. From Hollywood blockbusters to indie films, horror classics to family favorites, we have movies for every taste and mood.",
    heroImage: "/images/storefloor2.webp",
    totalItems: 30000,
    highlights: [
      "Over 30,000 DVDs spanning every genre and decade",
      "Complete collections of major film franchises and series",
      "Classic Hollywood films from the Golden Age of cinema",
      "Independent and foreign films from around the world",
      "Horror, sci-fi, and cult classics for genre enthusiasts",
      "Family-friendly movies and animated features for all ages"
    ],
    genres: [
      "Action", "Comedy", "Drama", "Horror", "Sci-Fi", "Thriller", "Romance",
      "Crime", "Fantasy", "Adventure", "Mystery", "Documentary", "Animation",
      "Family", "Western", "Musical", "War", "Biography", "Foreign"
    ],
    storeInfo: {
      hours: "Open Everyday: 10am-6pm",
      location: "1454 Main St. (Unit 20) West Warwick, RI",
      phone: "401-320-8200"
    }
  };

  return { catalogData };
}

export default function CatalogDVDs({ loaderData }: Route.ComponentProps) {
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
