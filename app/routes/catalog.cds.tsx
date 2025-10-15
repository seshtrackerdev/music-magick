import type { Route } from "./+types/catalog.cds";
import { CatalogLayout } from "../components/catalog-layout";
import { CatalogPageTemplate, type CatalogPageData } from "../components/catalog-page-template";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "CDs & Music - Music Magick | Warwick, RI" },
    { name: "description", content: "Browse our collection of over 50,000 CDs and music albums at Music Magick in Warwick, RI. From classic rock to modern pop, find your favorite artists at unbeatable prices." },
  ];
}

export function loader({ context }: Route.LoaderArgs) {
  // In a real app, this would fetch data from your database/API
  const catalogData: CatalogPageData = {
    category: "CDs & Music",
    categoryDescription: "Discover our vast collection of over 50,000 CDs spanning all genres and decades. From classic rock to modern pop, jazz to country, we have something for every music lover.",
    heroImage: "/images/storeshelves1.webp",
    totalItems: 50000,
    highlights: [
      "Over 50,000 CDs covering every genre from the 1950s to today",
      "Extensive collection of classic rock, pop, jazz, country, and more",
      "Rare and hard-to-find albums from independent artists and labels",
      "Complete discographies of major artists and bands",
      "Imported and international releases from around the world",
      "Most CDs priced at just $2.00 - incredible value for music lovers"
    ],
    genres: [
      "Rock", "Pop", "Jazz", "Country", "Hip-Hop", "R&B", "Classical", 
      "Alternative", "Metal", "Folk", "Blues", "Reggae", "Electronic", 
      "Punk", "Indie", "World Music", "Soundtracks", "Comedy"
    ],
    storeInfo: {
      hours: "Open Everyday: 10am-6pm",
      location: "1454 Main St. (Unit 20) West Warwick, RI",
      phone: "401-320-8200"
    }
  };

  return { catalogData };
}

export default function CatalogCDs({ loaderData }: Route.ComponentProps) {
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
