import type { Route } from "./+types/home";
import { Navbar14 } from "../components/navbar14";
import { Hero178 } from "../components/hero178";
import { About10 } from "../components/about10";
import { Catalog15 } from "../components/services15";
import { BuyingCTA } from "../components/buying-cta";
import { Footer12 } from "../components/footer12";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Music Magick - Warwick, RI | Multi-Media Store" },
    { name: "description", content: "The ultimate Multi-Media store in Warwick, RI. Over 50,000 CDs, 30,000 DVDs, Blu-rays, and games. Most items just $2!" },
  ];
}

export function loader({ context }: Route.LoaderArgs) {
  return { message: context.cloudflare.env.VALUE_FROM_CLOUDFLARE };
}

export default function Home({ loaderData }: Route.ComponentProps) {
  return (
    <div className="min-h-screen">
      <Navbar14 />
      <Hero178 />
      <About10 />
      <Catalog15 />
      <BuyingCTA />
      <Footer12 />
    </div>
  );
}
