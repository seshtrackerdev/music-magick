import { ArrowUpRight } from "lucide-react";

const profile = {
  title: "Music Magick",
  subtitle: "Warwick's premier multi-media destination",
  bio: `For over two decades, Music Magick has been Warwick's go-to destination for music, movies, and entertainment. We house an incredible collection of over 50,000 CDs, 30,000 DVDs, Blu-rays, and games, with most items priced at just $2. Our passion for media and commitment to our community makes us more than just a store – we're your entertainment hub.`,
  vision: `We believe that great entertainment should be accessible to everyone. Our mission is to provide quality media at unbeatable prices while fostering a community where music and movie lovers can discover new favorites and revisit classics.`,
  outro: `Whether you're hunting for rare vinyl, the latest blockbuster, or that classic album you've been searching for, Music Magick is your treasure trove. Visit us in Warwick and discover why we're Rhode Island's favorite multi-media store.`,
  offerings: [
    { id: "01", item: "50,000+ CDs", type: "From classic rock to modern hits" },
    { id: "02", item: "30,000+ DVDs & Blu-rays", type: "Movies, TV shows, documentaries" },
    { id: "03", item: "Video Games", type: "Console games for all systems" },
    { id: "04", item: "Vinyl Records", type: "Classic albums and rare finds" },
    { id: "05", item: "Most Items $2", type: "Unbeatable prices every day" },
    { id: "06", item: "Expert Knowledge", type: "Staff who love what they do" },
  ],
};

const About10 = () => {
  return (
    <section className="py-16 px-4 md:py-32 md:px-6">
      <div className="container mx-auto max-w-7xl px-4 md:px-6">
        <div className="flex flex-col-reverse gap-5 md:flex-row md:gap-12">
          <div className="w-full md:w-1/3 md:pr-4">
            <div className="sticky top-20 md:p-6">
              <div className="mb-8">
                <div className="mb-6 flex items-center gap-4">
                  <img
                    src="/images/logo.png"
                    alt="Music Magick"
                    className="h-16 w-auto"
                  />
                  <div>
                    <h3 className="font-semibold">{profile.title}</h3>
                    <p className="text-muted-foreground text-sm">
                      {profile.subtitle}
                    </p>
                  </div>
                </div>
              </div>

              <nav>
                <div className="py-4">
                  <div className="group flex p-0 text-start text-xl font-medium hover:bg-transparent sm:text-2xl">
                    <span className="border-border border-b-2 pb-0.5 transition-colors">
                      Contact Us
                    </span>
                    <ArrowUpRight className="ml-1 h-6 w-5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </div>
                </div>
              </nav>
            </div>
          </div>

          <div className="w-full md:w-2/3 md:p-6">
            <div className="max-w-4xl">
              <h1 className="mb-12 text-7xl font-semibold">About Us</h1>

              <div className="space-y-12">
                <p className="w-full text-2xl font-medium leading-[36px] md:max-w-2xl">
                  {profile.bio}
                </p>

                <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
                  <h2 className="text-2xl font-medium">Core Philosophy</h2>
                  <p className="leading-relaxed">{profile.vision}</p>
                </div>

                <div className="my-12">
                  <img
                    src="/images/storefloor1.webp"
                    alt="Music Magick store interior with CDs and DVDs"
                    className="rounded-2xl object-cover"
                  />
                </div>

                <div>
                  <h2 className="mb-8 text-2xl font-medium">What We Offer</h2>
                  <div className="space-y-6">
                    {profile.offerings.map(({ id, item, type }) => (
                      <div
                        key={id}
                        className="flex items-center justify-between border-b py-4"
                      >
                        <div className="flex items-center gap-4">
                          <span className="text-muted-foreground font-mono text-sm">
                            {id}
                          </span>
                          <span className="text-base font-medium">{item}</span>
                        </div>
                        <span className="text-muted-foreground text-sm">
                          {type}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-16">
                  <p className="leading-relaxed">{profile.outro}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { About10 };
