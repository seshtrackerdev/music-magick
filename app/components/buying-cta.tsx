import { ArrowUpRight, Phone, Mail, Music, Disc3, Film } from "lucide-react";
import { Button } from "~/components/ui/button";

const BuyingCTA = () => {
  return (
    <section className="py-16 px-4 md:py-32 md:px-6">
      <div className="container mx-auto max-w-7xl px-4 md:px-6">
        <div className="mb-16 max-w-2xl">
          <h2 className="text-foreground mb-4 text-4xl font-medium md:text-6xl">
            We're Always Buying
          </h2>
          <p className="text-muted-foreground text-base tracking-tight">
            We are constantly buying both large and small media collections. CD's, Blu-Rays, and DVD's. 
            Contact us today and give us some information about the collection you have.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 mb-16">
          <div>
            <h3 className="text-2xl font-medium mb-6">What We're Looking For</h3>
            <div className="space-y-6">
              <div className="flex items-center justify-between border-b py-4">
                <div className="flex items-center gap-4">
                  <span className="text-muted-foreground font-mono text-sm">01</span>
                  <span className="text-base font-medium">Large and Small Collections</span>
                </div>
                <span className="text-muted-foreground text-sm">CDs, DVDs, Blu-rays</span>
              </div>
              <div className="flex items-center justify-between border-b py-4">
                <div className="flex items-center gap-4">
                  <span className="text-muted-foreground font-mono text-sm">02</span>
                  <span className="text-base font-medium">All Music Genres</span>
                </div>
                <span className="text-muted-foreground text-sm">From classic to contemporary</span>
              </div>
              <div className="flex items-center justify-between border-b py-4">
                <div className="flex items-center gap-4">
                  <span className="text-muted-foreground font-mono text-sm">03</span>
                  <span className="text-base font-medium">Movies & TV Shows</span>
                </div>
                <span className="text-muted-foreground text-sm">All genres welcome</span>
              </div>
              <div className="flex items-center justify-between border-b py-4">
                <div className="flex items-center gap-4">
                  <span className="text-muted-foreground font-mono text-sm">04</span>
                  <span className="text-base font-medium">Complete Series</span>
                </div>
                <span className="text-muted-foreground text-sm">TV shows and box sets</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-medium mb-6">Ready to Sell?</h3>
            <p className="leading-relaxed mb-8">
              We offer fair prices for quality items. Contact us today to discuss your collection.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg">
                <Phone className="mr-2 h-4 w-4" />
                Call: 401-320-8200
              </Button>
              <Button variant="outline" size="lg">
                <Mail className="mr-2 h-4 w-4" />
                Email Us
                <ArrowUpRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { BuyingCTA };
