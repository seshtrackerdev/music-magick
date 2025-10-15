import type { Route } from "./+types/catalog.blu-rays";
import { CatalogLayout } from "../components/catalog-layout";
import { CatalogPageTemplate, type CatalogPageData } from "../components/catalog-page-template";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Blu-rays - Music Magick | Warwick, RI" },
    { name: "description", content: "Browse our collection of Blu-ray movies and shows at Music Magick in Warwick, RI. High-definition entertainment with enhanced picture and sound quality." },
  ];
}

export function loader({ context }: Route.LoaderArgs) {
  // In a real app, this would fetch data from your database/API
  const catalogData: CatalogPageData = {
    category: "Blu-rays",
    categoryDescription: "Experience movies and shows in stunning high definition with our extensive Blu-ray collection. Enhanced picture quality, superior sound, and bonus features make Blu-ray the ultimate home entertainment format.",
    heroImage: "/images/storefloor3.webp",
    totalItems: 0,
    highlights: [
      "Extensive Blu-ray collection with crystal-clear high-definition picture quality",
      "Enhanced audio with Dolby TrueHD and DTS-HD Master Audio",
      "Exclusive bonus features including director's commentaries and behind-the-scenes content",
      "Complete movie franchises and TV series collections",
      "4K Ultra HD Blu-rays for the ultimate viewing experience",
      "Most Blu-rays priced at just $2.00 - incredible value for premium quality"
    ],
    genres: [
      "Action", "Comedy", "Drama", "Horror", "Sci-Fi", "Thriller", "Romance",
      "Crime", "Fantasy", "Adventure", "Mystery", "Documentary", "Animation",
      "Family", "Western", "Musical", "War", "Biography", "Foreign", "4K Ultra HD"
    ],
    storeInfo: {
      hours: "Open Everyday: 10am-6pm",
      location: "1454 Main St. (Unit 20) West Warwick, RI",
      phone: "401-320-8200"
    }
  };

  return { catalogData };
}

export default function CatalogBluRays({ loaderData }: Route.ComponentProps) {
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
