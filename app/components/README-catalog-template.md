# Catalog Page Template

This document explains how to use the standardized catalog page template for creating informational pages about various catalog categories at Music Magick.

## Overview

The catalog page template provides a consistent, professional layout for displaying information about catalog categories with the following features:

- **Hero Section**: Large image with category title and description
- **Store Info Bar**: Hours, location, and contact information
- **Collection Highlights**: Key features and benefits of the category
- **Genres & Categories**: Informational display of available genres
- **Call to Action**: Store visit encouragement section

## Components

### 1. CatalogPageTemplate

The main template component located at `app/components/catalog-page-template.tsx`.

**Props:**
- `data: CatalogPageData` - The catalog data object
- `showBackButton?: boolean` - Whether to show back button (default: true)
- `backButtonHref?: string` - Back button destination (default: "/")

### 2. CatalogLayout

Layout wrapper component at `app/components/catalog-layout.tsx` that includes the navbar.

## Data Structure

### CatalogPageData Interface

```typescript
interface CatalogPageData {
  category: string;                    // Category name (e.g., "CDs & Music")
  categoryDescription: string;         // Description of the category
  heroImage: string;                   // Hero section background image
  totalItems: number;                  // Total number of items in category
  highlights: string[];                // Array of collection highlights
  genres?: string[];                   // Optional array of available genres
  storeInfo: {                         // Store information
    hours: string;
    location: string;
    phone: string;
  };
}
```

## Creating a New Catalog Page

### Step 1: Create the Route File

Create a new file in `app/routes/` following the pattern `catalog.[category].tsx`:

```typescript
import type { Route } from "./+types/catalog.[category]";
import { CatalogLayout } from "../components/catalog-layout";
import { CatalogPageTemplate, type CatalogPageData } from "../components/catalog-page-template";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "[Category] - Music Magick | Warwick, RI" },
    { name: "description", content: "Browse our collection of [category] at Music Magick in Warwick, RI." },
  ];
}

export function loader({ context }: Route.LoaderArgs) {
  const catalogData: CatalogPageData = {
    category: "Your Category",
    categoryDescription: "Description of your category...",
    heroImage: "/images/your-hero-image.webp",
    totalItems: 1000,
    highlights: [
      "Highlight 1 about your collection",
      "Highlight 2 about your collection",
      "Highlight 3 about your collection"
    ],
    genres: [
      "Genre 1", "Genre 2", "Genre 3"
    ],
    storeInfo: {
      hours: "Open Everyday: 10am-6pm",
      location: "1454 Main St. (Unit 20) West Warwick, RI",
      phone: "401-320-8200"
    }
  };

  return { catalogData };
}

export default function CatalogCategory({ loaderData }: Route.ComponentProps) {
  return (
    <CatalogLayout>
      <CatalogPageTemplate 
        data={loaderData.catalogData}
        showBackButton={true}
        backButtonHref="/"
      />
    </CatalogLayout>
  );
}
```

### Step 2: Add Route Configuration

Update `app/routes.ts` to include your new route:

```typescript
import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("catalog/cds", "routes/catalog.cds.tsx"),
  route("catalog/dvds", "routes/catalog.dvds.tsx"),
  route("catalog/your-category", "routes/catalog.your-category.tsx"), // Add this line
] satisfies RouteConfig;
```

### Step 3: Update Home Page Links

Update the catalog array in `app/components/services15.tsx` to include your new category:

```typescript
const catalog: ServiceProps[] = [
  // ... existing items
  {
    title: "Your Category",
    image: "/images/your-category-image.webp",
    url: "/catalog/your-category",
    height: "medium",
  },
];
```

## Examples

### CDs & Music Page
- Route: `/catalog/cds`
- File: `app/routes/catalog.cds.tsx`
- Features music genres, collection highlights, and basic information

### DVDs & Movies Page
- Route: `/catalog/dvds`
- File: `app/routes/catalog.dvds.tsx`
- Features movie genres, collection highlights, and basic information

## Customization

### Styling
The template uses Tailwind CSS classes and follows the existing design system. Key styling features:

- **Responsive Grid**: Automatically adjusts from 1 column on mobile to 3 columns on desktop
- **Hover Effects**: Smooth animations and hover states for interactive elements
- **Image Handling**: Proper aspect ratios and object-fit for consistent display
- **Typography**: Clear hierarchy with proper spacing and contrast

### Adding New Sections
To add new sections to the template:

1. Update the `CatalogPageData` interface in `catalog-page-template.tsx`
2. Add the new field to your data objects
3. Update the template to display the new section

### Customizing Content
The template is designed to be informational and educational about each category:

- **Highlights**: Focus on what makes your collection special and unique
- **Genres**: List the types of content available in your collection
- **Description**: Provide a clear overview of what visitors can expect to find

## Best Practices

1. **Images**: Use WebP format for better performance
2. **Content**: Keep descriptions engaging and informative about the collection
3. **Highlights**: Focus on what makes your collection unique and valuable
4. **SEO**: Include relevant keywords in meta descriptions
5. **Accessibility**: Ensure all images have descriptive alt text
6. **Call to Action**: Encourage visitors to visit the physical store

## Future Enhancements

Potential improvements to consider:

- **Store Locator**: Integrate with maps for directions
- **Social Proof**: Add customer testimonials or reviews
- **Newsletter Signup**: Allow visitors to get updates about new arrivals
- **Store Events**: Highlight special events or sales
- **Inventory Updates**: Show recent additions to the collection
