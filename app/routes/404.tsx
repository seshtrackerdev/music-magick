import type { Route } from "./+types/404";
import { Navbar14 } from "../components/navbar14";
import { Footer12 } from "../components/footer12";
import { Link } from "react-router";
import { ArrowUpRight, Home, Search, MapPin, Phone, Music, Disc3, Film, Gamepad2 } from "lucide-react";
import { Button } from "~/components/ui/button";
import { Card, CardContent } from "~/components/ui/card";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Page Not Found - Music Magick | Warwick, RI" },
    { name: "description", content: "The page you're looking for doesn't exist. Browse our collection of CDs, DVDs, games, and more at Music Magick in Warwick, RI." },
  ];
}

export default function NotFound() {
  const quickLinks = [
    {
      title: "Browse All Categories",
      description: "Explore our complete collection",
      href: "/catalog",
      icon: Search,
    },
    {
      title: "CDs & Music",
      description: "Over 50,000 CDs available",
      href: "/catalog/cds",
      icon: Music,
    },
    {
      title: "DVDs & Movies",
      description: "30,000+ movies and shows",
      href: "/catalog/dvds",
      icon: Film,
    },
    {
      title: "Video Games",
      description: "Games for all platforms",
      href: "/catalog/games",
      icon: Gamepad2,
    },
  ];

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
          
          <div className="relative z-10 flex h-full items-center justify-center">
            <div className="container mx-auto px-4 text-center">
              <div className="max-w-4xl mx-auto">
                <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 drop-shadow-lg">
                  404
                </h1>
                <h2 className="text-2xl md:text-4xl font-bold text-white mb-4 drop-shadow-lg">
                  Page Not Found
                </h2>
                <p className="text-lg md:text-xl text-white/90 mb-8 drop-shadow-md max-w-2xl mx-auto">
                  Looks like this page got lost in our collection! Don't worry - 
                  we have plenty of amazing music, movies, and games waiting for you.
                </p>
                <Link to="/">
                  <Button size="lg" className="bg-primary hover:bg-primary/90">
                    <Home className="mr-2 h-5 w-5" />
                    Back to Homepage
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Store Info Bar */}
        <section className="bg-muted/50 border-b">
          <div className="container mx-auto px-4 py-4">
            <div className="flex flex-wrap items-center justify-between gap-4 text-sm">
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

        {/* Quick Links Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Find What You're Looking For</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                While you're here, explore our vast collection of media items. 
                We have something for everyone at unbeatable prices!
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {quickLinks.map((link, index) => (
                <Link key={index} to={link.href}>
                  <Card className="h-full hover:shadow-lg transition-all duration-200 hover:-translate-y-1">
                    <CardContent className="p-6 text-center">
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-primary-foreground mx-auto mb-4">
                        <link.icon className="h-6 w-6" />
                      </div>
                      <h3 className="font-semibold text-lg mb-2">{link.title}</h3>
                      <p className="text-muted-foreground text-sm mb-4">{link.description}</p>
                      <div className="flex items-center justify-center gap-1 text-primary text-sm font-medium">
                        Explore <ArrowUpRight className="h-4 w-4" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Help Section */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold mb-4">Need Help Finding Something?</h2>
            <p className="text-muted-foreground mb-8 text-lg">
              Can't find what you're looking for? Visit our store in Warwick, RI, 
              or give us a call. Our knowledgeable staff is here to help!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link to="/about">
                  <MapPin className="mr-2 h-4 w-4" />
                  Visit Our Store
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="tel:401-320-8200">
                  <Phone className="mr-2 h-4 w-4" />
                  Call Us: 401-320-8200
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* Fun Facts Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold mb-8">Did You Know?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">50,000+</div>
                <div className="text-muted-foreground">CDs in our collection</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">30,000+</div>
                <div className="text-muted-foreground">DVDs and Blu-rays</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">$2</div>
                <div className="text-muted-foreground">Most items priced at just $2!</div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer12 />
    </div>
  );
}
