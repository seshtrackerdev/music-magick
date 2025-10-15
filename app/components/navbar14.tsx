"use client";

import {
  ChevronRight,
  Menu,
  X,
  Music,
  Disc3,
  Film,
  Gamepad2,
  MapPin,
  Clock,
  Phone,
  Mail,
} from "lucide-react";
import { useState } from "react";

import { cn } from "~/lib/utils";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "~/components/ui/accordion";
import { Button } from "~/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "~/components/ui/navigation-menu";
import { Separator } from "~/components/ui/separator";

const products = [
  {
    title: "CDs & Music",
    description: "Over 50,000 CDs of all genres",
    icon: Music,
  },
  {
    title: "DVDs & Movies",
    description: "30,000+ DVDs including horror, drama, action",
    icon: Film,
  },
  {
    title: "Blu-ray Collection",
    description: "High-quality Blu-ray with enhanced sound",
    icon: Disc3,
  },
  {
    title: "Video Games",
    description: "Games for all platforms and generations",
    icon: Gamepad2,
  },
];

const storeInfo = [
  {
    title: "Store Hours",
    description: "Open Everyday: 10am-6pm",
    icon: Clock,
  },
  {
    title: "Location",
    description: "1454 Main St. (Unit 20) West Warwick, RI",
    icon: MapPin,
  },
  {
    title: "Contact Us",
    description: "401-320-8200",
    icon: Phone,
  },
  {
    title: "Email",
    description: "MusicMagickShop@gmail.com",
    icon: Mail,
  },
];

const Navbar14 = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section
      className={cn(
        "border-border border-b lg:border-b relative z-50",
        isOpen && "border-b-0",
      )}
    >
      <div className="container px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between py-4">
          <div className="flex items-center gap-9">
            <a href="#" className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary text-primary-foreground">
                <Music className="h-5 w-5" />
              </div>
              <span className="text-lg font-semibold">Music Magick</span>
            </a>
            <div className="hidden items-center gap-1.5 lg:flex">
              <NavigationMenu delayDuration={0}>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger>Products</NavigationMenuTrigger>
                    <NavigationMenuContent className="p-0 z-50">
                      <div className="flex">
                        <div className="p-4">
                          <p className="text-muted-foreground mb-3 text-[10px] uppercase">
                            MEDIA COLLECTION
                          </p>
                          {products.map((product) => (
                            <NavigationMenuLink
                              key={product.title}
                              className="group flex cursor-pointer flex-row gap-3"
                            >
                              <span className="border-border bg-background flex size-10 shrink-0 items-center justify-center rounded-md border">
                                <product.icon className="size-5!" />
                              </span>
                              <div className="flex flex-col">
                                <span className="flex items-center gap-0.5 whitespace-nowrap text-sm font-medium">
                                  {product.title}
                                  <ChevronRight className="text-primary! size-4 opacity-0 transition-all duration-200 group-hover:translate-x-0.5 group-hover:opacity-100" />
                                </span>
                                <p className="text-muted-foreground whitespace-nowrap text-xs">
                                  {product.description}
                                </p>
                              </div>
                            </NavigationMenuLink>
                          ))}
                        </div>
                        <Separator
                          orientation="vertical"
                          className="data-[orientation=vertical]:h-auto"
                        />
                        <div className="p-4">
                          <p className="text-muted-foreground mb-3 text-[10px] uppercase">
                            STORE INFO
                          </p>
                          <div>
                            <NavigationMenuLink className="flex cursor-pointer flex-row items-center gap-3">
                              <Clock className="size-4!" />
                              <span className="whitespace-nowrap text-sm font-medium">
                                Store Hours
                              </span>
                            </NavigationMenuLink>
                            <NavigationMenuLink className="flex cursor-pointer flex-row items-center gap-3">
                              <MapPin className="size-4!" />
                              <span className="whitespace-nowrap text-sm font-medium">
                                Visit Our Store
                              </span>
                            </NavigationMenuLink>
                          </div>
                          <p className="text-muted-foreground mb-3 mt-5 text-[10px] uppercase">
                            FEATURED
                          </p>
                          <NavigationMenuLink className="cursor-pointer">
                            <div className="bg-primary rounded-lg p-3">
                              <img
                                src="/images/storeentrance.webp"
                                alt="Music Magick store entrance"
                                className="aspect-video min-w-52 rounded-md object-cover"
                              />
                            </div>
                            <div className="mt-3.5 flex flex-col gap-2 px-1">
                              <p className="text-xs font-medium">
                                Visit Our Store
                              </p>
                              <p className="text-muted-foreground text-xs">
                                Discover over 50,000 CDs and 30,000 DVDs at great prices.
                              </p>
                            </div>
                          </NavigationMenuLink>
                        </div>
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger>Store Info</NavigationMenuTrigger>
                    <NavigationMenuContent className="p-0 z-50">
                      <div className="flex">
                        <div className="p-4">
                          <p className="text-muted-foreground mb-3 text-[10px] uppercase">
                            CONTACT INFO
                          </p>
                          {storeInfo.map((info) => (
                            <NavigationMenuLink
                              key={info.title}
                              className="group flex cursor-pointer flex-row gap-3"
                            >
                              <span className="border-border bg-background flex size-10 shrink-0 items-center justify-center rounded-md border">
                                <info.icon className="size-5!" />
                              </span>
                              <div className="flex flex-col">
                                <span className="flex items-center gap-0.5 whitespace-nowrap text-sm font-medium">
                                  {info.title}
                                  <ChevronRight className="text-primary! size-4 opacity-0 transition-all duration-200 group-hover:translate-x-0.5 group-hover:opacity-100" />
                                </span>
                                <p className="text-muted-foreground whitespace-nowrap text-xs">
                                  {info.description}
                                </p>
                              </div>
                            </NavigationMenuLink>
                          ))}
                        </div>
                        <Separator
                          orientation="vertical"
                          className="data-[orientation=vertical]:h-auto"
                        />
                        <div className="p-4">
                          <p className="text-muted-foreground mb-3 text-[10px] uppercase">
                            WE BUY MEDIA
                          </p>
                          <div>
                            <NavigationMenuLink className="flex cursor-pointer flex-row items-center gap-3">
                              <Music className="size-4!" />
                              <span className="whitespace-nowrap text-sm font-medium">
                                Sell Your Collection
                              </span>
                            </NavigationMenuLink>
                            <NavigationMenuLink className="flex cursor-pointer flex-row items-center gap-3">
                              <Disc3 className="size-4!" />
                              <span className="whitespace-nowrap text-sm font-medium">
                                What We Buy
                              </span>
                            </NavigationMenuLink>
                          </div>
                        </div>
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <NavigationMenuLink
                      asChild
                      className={navigationMenuTriggerStyle()}
                    >
                      <a href="#about">About</a>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </div>
          </div>


          <Button
            variant="outline"
            size="icon"
            className="lg:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
            <span className="sr-only">Toggle menu</span>
          </Button>
        </nav>
      </div>

      {isOpen && (
        <div className="bg-background border-t lg:hidden">
          <div className="container px-4 sm:px-6 lg:px-8 py-4">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="products">
                <AccordionTrigger className="pr-2.5 text-base font-medium hover:no-underline">
                  Products
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-5">
                    <div>
                      <p className="text-muted-foreground mb-3 text-[10px] uppercase">
                        MEDIA COLLECTION
                      </p>
                      <div className="space-y-5">
                        {products.map((product) => (
                          <a
                            key={product.title}
                            href="#"
                            className="group flex cursor-pointer flex-row gap-3 rounded-md transition-colors"
                            onClick={() => setIsOpen(false)}
                          >
                            <span className="border-border bg-background flex size-8 shrink-0 items-center justify-center rounded-md border">
                              <product.icon className="size-4" />
                            </span>
                            <div className="flex min-w-0 flex-col">
                              <span className="text-sm font-medium leading-tight">
                                {product.title}
                              </span>
                              <p className="text-muted-foreground text-xs leading-tight">
                                {product.description}
                              </p>
                            </div>
                          </a>
                        ))}
                      </div>
                    </div>
                    <Separator />
                    <div>
                      <p className="text-muted-foreground mb-3 text-[10px] uppercase">
                        STORE INFO
                      </p>
                      <div className="space-y-5">
                        <a
                          href="#"
                          className="flex cursor-pointer flex-row items-center gap-3 rounded-md transition-colors"
                          onClick={() => setIsOpen(false)}
                        >
                          <Clock className="size-4" />
                          <span className="text-sm font-medium">
                            Store Hours
                          </span>
                        </a>
                        <a
                          href="#"
                          className="flex cursor-pointer flex-row items-center gap-3 rounded-md transition-colors"
                          onClick={() => setIsOpen(false)}
                        >
                          <MapPin className="size-4" />
                          <span className="text-sm font-medium">
                            Visit Our Store
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="store-info" className="last:border-b">
                <AccordionTrigger className="pr-2.5 text-base font-medium hover:no-underline">
                  Store Info
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-4">
                    <div>
                      <p className="text-muted-foreground mb-3 text-[10px] uppercase">
                        CONTACT INFO
                      </p>
                      <div className="space-y-5">
                        {storeInfo.map((info) => (
                          <a
                            key={info.title}
                            href="#"
                            className="group flex cursor-pointer flex-row gap-3 rounded-md transition-colors"
                            onClick={() => setIsOpen(false)}
                          >
                            <span className="border-border bg-background flex size-8 shrink-0 items-center justify-center rounded-md border">
                              <info.icon className="size-4" />
                            </span>
                            <div className="flex min-w-0 flex-col">
                              <span className="text-sm font-medium leading-tight">
                                {info.title}
                              </span>
                              <p className="text-muted-foreground text-xs leading-tight">
                                {info.description}
                              </p>
                            </div>
                          </a>
                        ))}
                      </div>
                    </div>
                    <Separator />
                    <div>
                      <p className="text-muted-foreground mb-3 text-[10px] uppercase">
                        WE BUY MEDIA
                      </p>
                      <div className="space-y-5">
                        <a
                          href="#"
                          className="flex cursor-pointer flex-row items-center gap-3 rounded-md transition-colors"
                          onClick={() => setIsOpen(false)}
                        >
                          <Music className="size-4" />
                          <span className="text-sm font-medium">
                            Sell Your Collection
                          </span>
                        </a>
                        <a
                          href="#"
                          className="flex cursor-pointer flex-row items-center gap-3 rounded-md transition-colors"
                          onClick={() => setIsOpen(false)}
                        >
                          <Disc3 className="size-4" />
                          <span className="text-sm font-medium">
                            What We Buy
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            <div className="space-y-2">
              <a
                href="#about"
                className="border-border block border-b py-4 pr-3 text-base font-medium transition-colors"
                onClick={() => setIsOpen(false)}
              >
                About
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export { Navbar14 };

