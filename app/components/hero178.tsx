import { AspectRatio } from "~/components/ui/aspect-ratio";

const Hero178 = () => {
  return (
    <section className="border-muted bg-background relative border-b pt-10 overflow-hidden">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-2 md:gap-4 lg:grid-cols-2">
          <div className="flex w-full max-w-[31.25rem] flex-col gap-9 lg:max-w-[37.5rem] lg:py-[20%] xl:py-[26%]">
            <p className="text-muted-foreground font-mono text-[clamp(0.875rem,0.875vw,1rem)]">
              Warwick, Rhode Island
            </p>
            <h1 className="font-bebas_neue text-foreground text-[clamp(3.5rem,calc(6.5vw+2.3rem),9.5rem)] leading-[0.85] tracking-[-0.03em]">
              Music
              <br />
              Magick
            </h1>
            <p className="text-muted-foreground text-[clamp(1.125rem,1.125vw,1.4rem)] leading-normal">
              The ultimate Multi-Media store in Rhode Island. Discover over 50,000 CDs, 
              30,000 DVDs, Blu-rays, and games. Most items priced at just $2!
            </p>
          </div>
          <div>
            <div className="relative ml-0 md:ml-8 aspect-square w-full max-w-[56.25rem] overflow-hidden lg:absolute lg:bottom-0 lg:right-0 lg:w-1/2">
              <div className="absolute bottom-0 right-0 w-[85%] overflow-hidden rounded-lg">
                <AspectRatio ratio={0.918918919 / 1}>
                  <img
                    src="/images/storeentrance.webp"
                    alt="Music Magick store entrance showing the welcoming entrance to our media store"
                    className="object-top-left block size-full object-cover"
                  />
                </AspectRatio>
              </div>
              <div className="absolute bottom-0 left-[0%] w-[70%] overflow-hidden rounded-tl-lg">
                <AspectRatio ratio={1.9 / 1}>
                  <img
                    src="/images/storefloor1.webp"
                    alt="Music Magick store floor showing our extensive CD and DVD collection"
                    className="block h-full w-full object-cover object-center"
                  />
                </AspectRatio>
              </div>
              <div className="absolute bottom-0 right-[5%] w-[40%] overflow-hidden rounded-tl-lg rounded-tr-lg shadow-md">
                <AspectRatio ratio={0.776119403 / 1}>
                  <img
                    src="/images/storeshelves1.webp"
                    alt="Music Magick store shelves displaying organized media collections"
                    className="block h-full w-full object-cover object-top"
                  />
                </AspectRatio>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Hero178 };
