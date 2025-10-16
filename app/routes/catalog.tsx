import type { Route } from "./+types/catalog";
// import { CatalogLayout } from "../components/catalog-layout";
import { Navbar14 } from "../components/navbar14";
import { Footer12 } from "../components/footer12";
import { Link } from "react-router";
// import { motion } from "framer-motion";
import { ArrowUpRight, Music, Disc3, Film, Gamepad2, MapPin, Clock, Phone } from "lucide-react";

import { Button } from "~/components/ui/button";
import { Card, CardContent } from "~/components/ui/card";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Browse All Categories - Music Magick | Warwick, RI" },
    { name: "description", content: "Explore all our media categories at Music Magick in Warwick, RI. Browse CDs, DVDs, Blu-rays, video games, vinyl records, and TV shows." },
  ];
}

export function loader({ context }: Route.LoaderArgs) {
  const categories = [
    {
      title: "CDs & Music",
      description: "Over 50,000 CDs spanning all genres and decades",
      image: "/images/storeshelves1.webp",
      url: "/catalog/cds",
      iconName: "Music",
      height: "tall"
    },
    {
      title: "DVDs & Movies", 
      description: "30,000+ DVDs including Hollywood blockbusters and indie films",
      image: "/images/storefloor2.webp",
      url: "/catalog/dvds",
      iconName: "Film",
      height: "medium"
    },
    {
      title: "Blu-rays",
      description: "High-definition movies with enhanced picture and sound",
      image: "/images/storefloor3.webp", 
      url: "/catalog/blu-rays",
      iconName: "Disc3",
      height: "short"
    },
    {
      title: "Video Games",
      description: "Games for all platforms and generations",
      image: "/images/storefloor4.webp",
      url: "/catalog/games", 
      iconName: "Gamepad2",
      height: "tall"
    },
    {
      title: "Vinyl Records",
      description: "Vinyl records for the ultimate analog experience",
      image: "/images/storefloor5.webp",
      url: "/catalog/vinyl",
      iconName: "Music",
      height: "tall"
    },
    {
      title: "TV Shows & Series",
      description: "Complete series and season box sets",
      image: "/images/storefloor6.webp",
      url: "/catalog/tv-shows",
      iconName: "Film",
      height: "medium"
    }
  ];

  return { categories };
}

export default function Catalog({ loaderData }: Route.ComponentProps) {
  const getHeightClass = (height: string) => {
    switch (height) {
      case "tall":
        return "h-96";
      case "medium":
        return "h-72";
      case "short":
        return "h-56";
      default:
        return "h-56";
    }
  };

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Music":
        return <Music className="h-4 w-4" />;
      case "Film":
        return <Film className="h-4 w-4" />;
      case "Disc3":
        return <Disc3 className="h-4 w-4" />;
      case "Gamepad2":
        return <Gamepad2 className="h-4 w-4" />;
      default:
        return <Music className="h-4 w-4" />;
    }
  };

  return (
    <div className="min-h-screen">
      <Navbar14 />
      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative h-96 overflow-hidden">
          <img
            src="/images/storeentrance.webp"
            alt="Music Magick store entrance"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
          
          <div className="relative z-10 flex h-full items-end">
            <div className="container mx-auto px-4 pb-12">
              <Link to="/">
                <Button variant="outline" size="sm" className="mb-6 bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20">
                  <ArrowUpRight className="mr-2 h-4 w-4 rotate-180" />
                  Back to Homepage
                </Button>
              </Link>
              <div className="max-w-3xl">
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg">
                  Browse All Categories
                </h1>
                <p className="text-lg md:text-xl text-white/90 mb-6 drop-shadow-md">
                  Explore our vast collection of media items across all categories. 
                  From music to movies, games to vinyl, discover something amazing at Music Magick.
                </p>
                <div className="flex items-center gap-6 text-white/80">
                  <div className="flex items-center gap-2">
                    <Music className="h-5 w-5" />
                    <span className="font-medium">80,000+ items available</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-5 w-5" />
                    <span>Warwick, RI</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Store Info Bar */}
        <section className="bg-muted/50 border-b">
          <div className="container mx-auto px-4 py-4">
            <div className="flex flex-wrap items-center justify-between gap-4 text-sm">
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-muted-foreground" />
                <span className="font-medium">Open Everyday: 10am-6pm</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-muted-foreground" />
                <span>1454 Main St. (Unit 20) West Warwick, RI</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-muted-foreground" />
                <span>401-320-8200</span>
              </div>
            </div>
          </div>
        </section>

        {/* Categories Grid */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-7xl">
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-4">All Categories</h2>
              <p className="text-muted-foreground">
                Click on any category below to learn more about our collection and what makes it special
              </p>
            </div>

            {/* Masonry Layout using CSS Columns */}
            <div className="columns-1 gap-6 sm:columns-2 lg:columns-3">
              {loaderData.categories.map((category, idx) => (
                <div
                  key={idx}
                  className="group mb-6 block break-inside-avoid overflow-hidden rounded-xl hover:-translate-y-1 transition-transform duration-200"
                >
                  <Link to={category.url}>
                    <Card className={`relative ${getHeightClass(category.height)} overflow-hidden p-0`}>
                      <img
                        src={category.image}
                        alt={category.title}
                        className="absolute inset-0 h-full w-full object-cover"
                      />
                      {/* Dark overlay for better text readability */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                      <CardContent className="absolute inset-0 flex flex-col justify-end p-6">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                            {getIcon(category.iconName)}
                          </div>
                        </div>
                        <div className="font-bold text-white text-lg drop-shadow-lg mb-2">
                          {category.title}
                        </div>
                        <p className="text-white/90 text-sm drop-shadow-md">
                          {category.description}
                        </p>
                      </CardContent>
                      <ArrowUpRight className="absolute right-6 top-6 h-6 w-6 text-white drop-shadow-lg transition-all duration-300 group-hover:rotate-45" />
                    </Card>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold mb-4">Visit Our Store</h2>
            <p className="text-muted-foreground mb-8 text-lg">
              Ready to explore our complete collection? Visit our Warwick location to browse 
              over 80,000 items across all categories at unbeatable prices!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg">
                Get Directions
                <MapPin className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" size="lg">
                Call Store
                <Phone className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>
      </div>
      <Footer12 />
    </div>
  );
}
