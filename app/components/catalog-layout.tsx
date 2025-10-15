"use client";

import { Navbar14 } from "./navbar14";

interface CatalogLayoutProps {
  children: React.ReactNode;
}

export function CatalogLayout({ children }: CatalogLayoutProps) {
  return (
    <div className="min-h-screen">
      <Navbar14 />
      {children}
    </div>
  );
}
