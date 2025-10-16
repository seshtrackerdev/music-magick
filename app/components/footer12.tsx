import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router";

const Footer12 = () => {
  const navigation = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Browse All", href: "/catalog" },
    { name: "CDs", href: "/catalog/cds" },
    { name: "DVDs", href: "/catalog/dvds" },
    { name: "Games", href: "/catalog/games" },
  ];

  const social = [
    { name: "Facebook", href: "https://www.facebook.com/musicmagickshop/" },
    { name: "Instagram", href: "https://www.instagram.com/musicmagickshop/" },
  ];

  const legal = [{ name: "Privacy Policy", href: "/privacy" }];

  return (
    <section className="flex flex-col items-center gap-14 py-32">
      <nav className="container flex flex-col items-center gap-4">
        <ul className="flex flex-wrap items-center justify-center gap-6">
          {navigation.map((item) => (
            <li key={item.name}>
              <Link
                to={item.href}
                className="font-medium transition-opacity hover:opacity-75"
              >
                {item.name}
              </Link>
            </li>
          ))}
          {social.map((item) => (
            <li key={item.name}>
              <a
                href={item.href}
                className="flex items-center gap-0.5 font-medium transition-opacity hover:opacity-75"
              >
                {item.name} <ArrowUpRight className="size-4" />
              </a>
            </li>
          ))}
        </ul>
        <ul className="flex flex-wrap items-center justify-center gap-6">
          {legal.map((item) => (
            <li key={item.name}>
              <Link
                to={item.href}
                className="text-muted-foreground text-sm transition-opacity hover:opacity-75"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className="mt-10 md:mt-14 lg:mt-20 text-center">
        <div className="flex justify-center mb-6">
          <img
            src="/images/logo.png"
            alt="Music Magick"
            className="h-16 w-auto md:h-20 lg:h-24 opacity-20"
          />
        </div>
        <p className="text-muted-foreground text-sm">
          Designed by <a href="https://websites-by-tim.com" className="hover:text-foreground transition-colors">Websites by Tim</a>
        </p>
      </div>
    </section>
  );
};

export { Footer12 };
