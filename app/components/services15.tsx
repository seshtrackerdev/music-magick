"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router";

import { Button } from "~/components/ui/button";
import { Card, CardContent } from "~/components/ui/card";

type ServiceProps = {
  title: string;
  image: string;
  url: string;
  height: "tall" | "medium" | "short";
};

const catalog: ServiceProps[] = [
  {
    title: "CDs & Music",
    image: "/images/storeshelves1.webp",
    url: "/catalog/cds",
    height: "tall",
  },
  {
    title: "DVDs & Movies",
    image: "/images/storefloor2.webp",
    url: "/catalog/dvds",
    height: "medium",
  },
  {
    title: "Blu-rays",
    image: "/images/storefloor3.webp",
    url: "/catalog/blu-rays",
    height: "short",
  },
  {
    title: "Video Games",
    image: "/images/storefloor4.webp",
    url: "/catalog/games",
    height: "tall",
  },
  {
    title: "Vinyl Records",
    image: "/images/storefloor5.webp",
    url: "/catalog/vinyl",
    height: "tall",
  },
  {
    title: "TV Shows & Series",
    image: "/images/storefloor6.webp",
    url: "/catalog/tv-shows",
    height: "medium",
  },
];

const Services15 = () => {
  const getHeightClass = (height: ServiceProps["height"]) => {
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

  return (
    <section className="py-16 px-4 md:py-32 md:px-6">
      <div className="container mx-auto max-w-7xl px-4 md:px-6">
        <div className="mb-16 max-w-2xl">
          <h2 className="text-foreground mb-4 text-4xl font-medium md:text-6xl">
            Our Catalog
          </h2>
          <p className="text-muted-foreground text-base tracking-tight">
            Explore our vast collection of entertainment media. From classic albums to the latest blockbusters, 
            discover thousands of titles across all your favorite formats at unbeatable prices.
          </p>
        </div>

        {/* Masonry Layout using CSS Columns */}
        <div className="columns-1 gap-6 sm:columns-2 lg:columns-3">
          {catalog.map((item, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -4 }}
              className="group mb-6 block break-inside-avoid overflow-hidden rounded-xl"
            >
              <Link to={item.url}>
              <Card
                className={`relative ${getHeightClass(item.height)} overflow-hidden p-0`}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="absolute inset-0 h-full w-full object-cover"
                />
                {/* Dark overlay for better text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <CardContent className="absolute inset-0 flex flex-col justify-end p-6">
                  <div className="font-bold text-white text-lg drop-shadow-lg">
                    {item.title}
                  </div>
                </CardContent>
                <ArrowUpRight className="absolute right-6 top-6 h-6 w-6 text-white drop-shadow-lg transition-all duration-300 group-hover:rotate-45" />
              </Card>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link to="/catalog">
            <Button variant="outline" className="mx-auto">
              Browse all categories <ArrowUpRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export { Services15 as Catalog15 };
