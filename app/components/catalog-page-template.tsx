"use client";

// import { motion } from "framer-motion";
import { ArrowLeft, ArrowUpRight, Star, MapPin, Clock, Phone } from "lucide-react";
import { Link } from "react-router";

import { Button } from "~/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import { Separator } from "~/components/ui/separator";

export interface CatalogPageData {
  category: string;
  categoryDescription: string;
  heroImage: string;
  totalItems: number;
  highlights: string[];
  genres?: string[];
  storeInfo: {
    hours: string;
    location: string;
    phone: string;
  };
}

interface CatalogPageTemplateProps {
  data: CatalogPageData;
  showBackButton?: boolean;
  backButtonHref?: string;
}

const CatalogPageTemplate = ({ 
  data, 
  showBackButton = true,
  backButtonHref = "/"
}: CatalogPageTemplateProps) => {

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-96 overflow-hidden">
        <img
          src={data.heroImage}
          alt={`${data.category} collection at Music Magick`}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        
        <div className="relative z-10 flex h-full items-end">
          <div className="container mx-auto px-4 pb-12">
            {showBackButton && (
              <Link to={backButtonHref}>
                <Button variant="outline" size="sm" className="mb-6 bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Catalog
                </Button>
              </Link>
            )}
            
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg">
                {data.category}
              </h1>
              <p className="text-lg md:text-xl text-white/90 mb-6 drop-shadow-md">
                {data.categoryDescription}
              </p>
              <div className="flex items-center gap-6 text-white/80">
                {data.totalItems > 0 && (
                  <div className="flex items-center gap-2">
                    <Star className="h-5 w-5" />
                    <span className="font-medium">{data.totalItems.toLocaleString()} items available</span>
                  </div>
                )}
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
              <span className="font-medium">{data.storeInfo.hours}</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-muted-foreground" />
              <span>{data.storeInfo.location}</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-muted-foreground" />
              <span>{data.storeInfo.phone}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Collection Highlights */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-4">Collection Highlights</h2>
            <p className="text-muted-foreground">What makes our {data.category.toLowerCase()} collection special</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.highlights.map((highlight, index) => (
              <div
                key={index}
                className="animate-in fade-in slide-in-from-bottom-4 duration-500"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <Card className="h-full">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                        <Star className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-sm leading-relaxed">{highlight}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Genres/Categories */}
      {data.genres && data.genres.length > 0 && (
        <section className="py-16 px-4 bg-muted/30">
          <div className="container mx-auto max-w-7xl">
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-4">Genres & Categories</h2>
              <p className="text-muted-foreground">Explore the variety in our collection</p>
            </div>
            
            <div className="flex flex-wrap gap-3 justify-center">
              {data.genres.map((genre, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-background border rounded-full text-sm font-medium"
                >
                  {genre}
                </span>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Call to Action */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-4">Visit Our Store</h2>
          <p className="text-muted-foreground mb-8 text-lg">
            Ready to explore our {data.category.toLowerCase()} collection? Visit our Warwick location to browse 
            our complete inventory{data.totalItems > 0 ? ` of ${data.totalItems.toLocaleString()} items` : ''} at unbeatable prices!
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
  );
};

export { CatalogPageTemplate };
