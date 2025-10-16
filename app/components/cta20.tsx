import { Button } from "~/components/ui/button";
import { Separator } from "~/components/ui/separator";

const Cta20 = () => {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Stay Updated on New Arrivals
          </h2>
          <p className="text-gray-600 mb-8">
            Get notified when we add new CDs, DVDs, Blu-rays, vinyl, and games to our collection.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              aria-label="Email address for mailing list"
            />
            <Button size="lg" className="whitespace-nowrap">
              Subscribe
            </Button>
          </div>
          
          <p className="text-xs text-gray-500 mt-4">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  );
};

export { Cta20 };
