import type { Route } from "./+types/privacy";
import { Navbar14 } from "../components/navbar14";
import { Footer12 } from "../components/footer12";
import { Link } from "react-router";
import { ArrowUpRight, Shield, Eye, Lock, FileText } from "lucide-react";
import { Button } from "~/components/ui/button";
import { Card, CardContent } from "~/components/ui/card";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Privacy Policy - Music Magick | Warwick, RI" },
    { name: "description", content: "Privacy policy for Music Magick in Warwick, RI. Learn how we handle information on our website." },
  ];
}

export default function Privacy() {
  return (
    <div className="min-h-screen">
      <Navbar14 />
      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative h-64 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-muted/20" />
          
          <div className="relative z-10 flex h-full items-center">
            <div className="container mx-auto px-4">
              <Link to="/">
                <Button variant="outline" size="sm" className="mb-6">
                  <ArrowUpRight className="mr-2 h-4 w-4 rotate-180" />
                  Back to Homepage
                </Button>
              </Link>
              <div className="max-w-3xl">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                  Privacy Policy
                </h1>
                <p className="text-lg text-muted-foreground">
                  Your privacy is important to us at Music Magick. 
                  This page outlines our basic privacy practices.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <div className="prose prose-gray max-w-none">
              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <Shield className="h-6 w-6 text-primary" />
                  Information We Collect
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  We may collect basic information when you visit our website, such as your IP address, 
                  browser type, and pages visited. This information helps us understand how our website is used 
                  and improve your experience.
                </p>
              </div>

              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <Eye className="h-6 w-6 text-primary" />
                  How We Use Information
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Any information we collect is used to improve our website, provide better customer service, 
                  and enhance your browsing experience. We do not sell or share your personal information 
                  with third parties.
                </p>
              </div>

              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <Lock className="h-6 w-6 text-primary" />
                  Data Security
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  We take reasonable steps to protect any information you provide to us. However, 
                  no method of transmission over the internet is 100% secure, and we cannot guarantee 
                  absolute security.
                </p>
              </div>

              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <FileText className="h-6 w-6 text-primary" />
                  Contact Information
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  If you have any questions about this privacy policy, please contact us at:
                </p>
                <div className="mt-4 p-4 bg-muted/50 rounded-lg">
                  <p className="font-medium">Music Magick</p>
                  <p>1454 Main St. (Unit 20) West Warwick, RI 02893</p>
                  <p>Phone: 401-320-8200</p>
                  <p>Email: MusicMagickShop@gmail.com</p>
                </div>
              </div>

              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-4">Policy Updates</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We may update this privacy policy from time to time. Any changes will be posted on this page 
                  with an updated revision date. We encourage you to review this policy periodically.
                </p>
                <p className="text-sm text-muted-foreground mt-4">
                  Last updated: {new Date().toLocaleDateString()}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold mb-4">Questions About Privacy?</h2>
            <p className="text-muted-foreground mb-8 text-lg">
              We're here to help. Visit our store in Warwick, RI, or give us a call 
              if you have any questions about our privacy practices.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link to="/about">
                  Visit Our Store
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="tel:401-320-8200">
                  Call Us: 401-320-8200
                </a>
              </Button>
            </div>
          </div>
        </section>
      </div>
      <Footer12 />
    </div>
  );
}
