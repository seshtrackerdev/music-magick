import type { Route } from "./+types/catalog.vinyl";
import { CatalogLayout } from "../components/catalog-layout";
import { CatalogPageTemplate, type CatalogPageData } from "../components/catalog-page-template";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Vinyl Records - Music Magick | Warwick, RI" },
    { name: "description", content: "Browse our collection of vinyl records at Music Magick in Warwick, RI. From classic albums to modern releases, experience music the way it was meant to be heard." },
  ];
}

export function loader({ context }: Route.LoaderArgs) {
  // In a real app, this would fetch data from your database/API
  const catalogData: CatalogPageData = {
    category: "Vinyl Records",
    categoryDescription: "Experience music the way it was meant to be heard with our extensive vinyl record collection. From classic albums to modern releases, discover the warm, rich sound that only vinyl can provide.",
    heroImage: "/images/storefloor5.webp",
    totalItems: 0,
    highlights: [
      "Extensive vinyl record collection spanning every genre and decade",
      "Classic albums from the golden age of vinyl in pristine condition",
      "Modern vinyl releases and reissues for contemporary music lovers",
      "Rare and collectible records from legendary artists and bands",
      "Complete discographies and box sets for serious collectors",
      "Most vinyl records priced at just $2.00 - incredible value for analog sound"
    ],
    genres: [
      "Rock", "Pop", "Jazz", "Country", "Hip-Hop", "R&B", "Classical", 
      "Alternative", "Metal", "Folk", "Blues", "Reggae", "Electronic", 
      "Punk", "Indie", "World Music", "Soundtracks", "Comedy", "Soul",
      "Funk", "Disco", "Progressive Rock", "Classic Rock"
    ],
    storeInfo: {
      hours: "Open Everyday: 10am-6pm",
      location: "1454 Main St. (Unit 20) West Warwick, RI",
      phone: "401-320-8200"
    }
  };

  return { catalogData };
}

export default function CatalogVinyl({ loaderData }: Route.ComponentProps) {
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
