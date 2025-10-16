"use client";

import { Navbar14 } from "./navbar14";
import { Footer12 } from "./footer12";

interface CatalogLayoutProps {
  children: React.ReactNode;
}

export function CatalogLayout({ children }: CatalogLayoutProps) {
  return (
    <div className="min-h-screen">
      <Navbar14 />
      {children}
      <Footer12 />
    </div>
  );
}
