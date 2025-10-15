import type { Route } from "./+types/about";
import { Navbar14 } from "../components/navbar14";
import { Link } from "react-router";
import { ArrowUpRight, MapPin, Clock, Phone, Mail, Music, Users, Heart, Award } from "lucide-react";
import { Button } from "~/components/ui/button";
import { Card, CardContent } from "~/components/ui/card";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "About Music Magick - Warwick, RI | Your Local Media Store" },
    { name: "description", content: "Learn about Music Magick's story in Warwick, RI. For over 20 years, we've been your go-to destination for affordable CDs, DVDs, games, and vinyl records." },
  ];
}

export function loader({ context }: Route.LoaderArgs) {
  return { message: context.cloudflare.env.VALUE_FROM_CLOUDFLARE };
}

export default function About({ loaderData }: Route.ComponentProps) {
  return (
    <div className="min-h-screen">
      <Navbar14 />
      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative h-96 overflow-hidden">
          <img
            src="/images/storeentrance.webp"
            alt="Music Magick store entrance in Warwick, RI"
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
                  About Music Magick
                </h1>
                <p className="text-lg md:text-xl text-white/90 mb-6 drop-shadow-md">
                  Warwick's premier multi-media destination. 
                  Discover our story and what makes us Rhode Island's favorite media store.
                </p>
                <div className="flex items-center gap-6 text-white/80">
                  <div className="flex items-center gap-2">
                    <Users className="h-5 w-5" />
                    <span className="font-medium">Serving Warwick, RI</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-5 w-5" />
                    <span>1454 Main St. West Warwick, RI</span>
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

        {/* Our Story Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Story</h2>
                <div className="space-y-6 text-lg leading-relaxed">
                  <p>
                    Marc Ciora's passion for music and film runs deep. Over years of collecting, he's amassed a stockpile of CDs and DVDs, 
                    and with the opening of Music Magick, he's eager to share his collection with the community.
                  </p>
                  <p>
                    Ciora opened his first music store around 30 years ago in North Providence, where he stayed in business for some 15 years. 
                    After the original Music Magick closed, he continued selling at flea markets and co-ops while adding to his collection. 
                    When the storage facility where he kept everything closed down, he decided it was time to open a store again.
                  </p>
                  <p>
                    Originally from West Warwick — he graduated from the high school in 1982 — Ciora is excited to have opened the doors 
                    to the new Music Magick in his hometown. "I'm happy that I'm here," said Ciora. "I like this town."
                  </p>
                </div>
              </div>
              <div className="relative">
                <img
                  src="/images/storefloor1.webp"
                  alt="Music Magick store interior showing our extensive collection"
                  className="rounded-2xl object-cover w-full h-96"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl" />
              </div>
            </div>
          </div>
        </section>

        {/* What We Offer Section */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">What We Offer</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Our vast collection spans all your favorite entertainment formats, with simple and affordable pricing
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="p-6">
                <CardContent className="p-0">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                      <Music className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">50,000+ CDs</h3>
                      <p className="text-muted-foreground text-sm">From classic rock to modern hits</p>
                    </div>
                  </div>
                  <p className="text-sm leading-relaxed">
                    Our CD collection spans every genre and decade, from timeless classics to the latest releases.
                  </p>
                </CardContent>
              </Card>

              <Card className="p-6">
                <CardContent className="p-0">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                      <Music className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">30,000+ DVDs & Blu-rays</h3>
                      <p className="text-muted-foreground text-sm">Movies, TV shows, documentaries</p>
                    </div>
                  </div>
                  <p className="text-sm leading-relaxed">
                    Hollywood blockbusters, indie films, complete TV series, and everything in between.
                  </p>
                </CardContent>
              </Card>

              <Card className="p-6">
                <CardContent className="p-0">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                      <Music className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Video Games</h3>
                      <p className="text-muted-foreground text-sm">Console games for all systems</p>
                    </div>
                  </div>
                  <p className="text-sm leading-relaxed">
                    Games for all platforms and generations, from retro classics to modern releases.
                  </p>
                </CardContent>
              </Card>

              <Card className="p-6">
                <CardContent className="p-0">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                      <Music className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Vinyl Records</h3>
                      <p className="text-muted-foreground text-sm">Classic albums and rare finds</p>
                    </div>
                  </div>
                  <p className="text-sm leading-relaxed">
                    Experience the warmth of analog sound with our curated selection of vinyl records.
                  </p>
                </CardContent>
              </Card>

              <Card className="p-6">
                <CardContent className="p-0">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                      <Award className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Simple Pricing</h3>
                      <p className="text-muted-foreground text-sm">$3 each, 2 for $5, or 5 for $10</p>
                    </div>
                  </div>
                  <p className="text-sm leading-relaxed">
                    Quality entertainment doesn't have to break the bank. Mix and match any items with our simple pricing structure.
                  </p>
                </CardContent>
              </Card>

              <Card className="p-6">
                <CardContent className="p-0">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                      <Heart className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Expert Knowledge</h3>
                      <p className="text-muted-foreground text-sm">Staff who love what they do</p>
                    </div>
                  </div>
                  <p className="text-sm leading-relaxed">
                    Our passionate team is here to help you find exactly what you're looking for.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Video Section */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="container mx-auto max-w-4xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Marc & Tour the Store</h2>
              <p className="text-lg text-muted-foreground">
                Watch this interview and store tour to get to know Marc Ciora and see what makes Music Magick special
              </p>
            </div>
            
            <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
              <iframe
                className="absolute top-0 left-0 w-full h-full rounded-lg"
                src="https://www.youtube.com/embed/bAxhMwfD3EA?si=mVlF3zk5_BtJdllM"
                title="Music Magick Store Tour and Interview with Marc Ciora"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
          </div>
        </section>

        {/* Community Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Part of the Warwick Community</h2>
            <p className="text-lg text-muted-foreground mb-12 leading-relaxed">
              From Christian music to rhythm and blues, classical to classic rock, our CD inventory runs the gamut. 
              "We've got Dean Martin, Sinatra," says Ciora, "then we have Nine Inch Nails, and Stone Temple Pilots, 
              and Red Hot Chili Peppers, and the Doors, James Taylor — it's all over the place."
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg">
                Visit Our Store
                <MapPin className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" size="lg">
                Call Us
                <Phone className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="container mx-auto max-w-4xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Visit Us Today</h2>
              <p className="text-lg text-muted-foreground">
                Ready to discover your next favorite album, movie, or game? We're here to help you find it.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="p-6">
                <CardContent className="p-0">
                  <h3 className="font-semibold text-lg mb-4">Store Information</h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <MapPin className="h-5 w-5 text-muted-foreground" />
                      <div>
                        <div className="font-medium">Address</div>
                        <div className="text-sm text-muted-foreground">1454 Main St. (Unit 20) West Warwick, RI</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Clock className="h-5 w-5 text-muted-foreground" />
                      <div>
                        <div className="font-medium">Hours</div>
                        <div className="text-sm text-muted-foreground">Open Everyday: 10am-6pm</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone className="h-5 w-5 text-muted-foreground" />
                      <div>
                        <div className="font-medium">Phone</div>
                        <div className="text-sm text-muted-foreground">401-320-8200</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Mail className="h-5 w-5 text-muted-foreground" />
                      <div>
                        <div className="font-medium">Email</div>
                        <div className="text-sm text-muted-foreground">MusicMagickShop@gmail.com</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="p-6">
                <CardContent className="p-0">
                  <h3 className="font-semibold text-lg mb-4">We Buy Media Too!</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Have CDs, DVDs, games, or vinyl you no longer need? We buy collections of all sizes and offer fair prices for quality items. 
                    Everything is guaranteed, so if a disk skips or has some other problem, we're happy to take it back.
                  </p>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <Music className="h-4 w-4" />
                      <span>CDs, DVDs, Blu-rays</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Music className="h-4 w-4" />
                      <span>Video games for all systems</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Music className="h-4 w-4" />
                      <span>Vinyl records</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Music className="h-4 w-4" />
                      <span>Complete collections welcome</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
