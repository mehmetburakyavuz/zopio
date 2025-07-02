import type { Metadata } from "next";
import type React from "react";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@repo/design-system/components/ui/card";
import { Badge } from "@repo/design-system/components/ui/badge";
import { Button } from "@repo/design-system/components/ui/button";
import { Download, Star, TrendingUp } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@repo/design-system/components/ui/tabs";

export const metadata: Metadata = {
  title: "Trending Plugins",
  description: "Discover trending and popular plugins in the Zopio Marketplace",
};

// Mock data for trending plugins
const trendingPlugins = [
  {
    id: "form-builder",
    title: "Form Builder",
    description: "Drag and drop form builder with validation and submission handling.",
    author: "FormCraft",
    category: "UI Components",
    rating: 4.9,
    downloads: 2100,
    trend: "+45%",
  },
  {
    id: "authentication",
    title: "Authentication Provider",
    description: "Add social login, MFA, and advanced authentication features to your app.",
    author: "SecureAuth",
    category: "Security",
    rating: 4.7,
    downloads: 1850,
    trend: "+38%",
  },
  {
    id: "analytics-dashboard",
    title: "Analytics Dashboard",
    description: "Comprehensive analytics dashboard for monitoring your Zopio application performance.",
    author: "Zopio Team",
    category: "Analytics",
    rating: 4.8,
    downloads: 1250,
    trend: "+32%",
  },
  {
    id: "image-editor",
    title: "Image Editor",
    description: "Edit and manipulate images directly in your Zopio application.",
    author: "ImageWorks",
    category: "Media",
    rating: 4.6,
    downloads: 1100,
    trend: "+28%",
  },
  {
    id: "data-connector",
    title: "Data Connector",
    description: "Connect to various data sources and integrate them with your Zopio applications.",
    author: "DataSync",
    category: "Integration",
    rating: 4.6,
    downloads: 980,
    trend: "+25%",
  },
  {
    id: "payment-gateway",
    title: "Payment Gateway",
    description: "Process payments securely with multiple payment providers.",
    author: "PaymentPro",
    category: "Fintech",
    rating: 4.5,
    downloads: 950,
    trend: "+22%",
  },
];

// Mock data for new plugins
const newPlugins = [
  {
    id: "ai-assistant",
    title: "AI Assistant",
    description: "Integrate AI-powered assistance into your Zopio applications.",
    author: "AILabs",
    category: "AI & ML",
    rating: 4.7,
    downloads: 450,
    releaseDate: "2 days ago",
  },
  {
    id: "video-conferencing",
    title: "Video Conferencing",
    description: "Add video conferencing capabilities to your Zopio applications.",
    author: "MeetConnect",
    category: "Communication",
    rating: 4.5,
    downloads: 320,
    releaseDate: "5 days ago",
  },
  {
    id: "document-scanner",
    title: "Document Scanner",
    description: "Scan and process documents with OCR capabilities.",
    author: "DocScan",
    category: "Utilities",
    rating: 4.6,
    downloads: 280,
    releaseDate: "1 week ago",
  },
  {
    id: "calendar-integration",
    title: "Calendar Integration",
    description: "Integrate with popular calendar services like Google Calendar and Outlook.",
    author: "CalSync",
    category: "Integration",
    rating: 4.4,
    downloads: 210,
    releaseDate: "1 week ago",
  },
];

// Mock data for most downloaded plugins
const mostDownloadedPlugins = [
  {
    id: "form-builder",
    title: "Form Builder",
    description: "Drag and drop form builder with validation and submission handling.",
    author: "FormCraft",
    category: "UI Components",
    rating: 4.9,
    downloads: 2100,
  },
  {
    id: "authentication",
    title: "Authentication Provider",
    description: "Add social login, MFA, and advanced authentication features to your app.",
    author: "SecureAuth",
    category: "Security",
    rating: 4.7,
    downloads: 1850,
  },
  {
    id: "analytics-dashboard",
    title: "Analytics Dashboard",
    description: "Comprehensive analytics dashboard for monitoring your Zopio application performance.",
    author: "Zopio Team",
    category: "Analytics",
    rating: 4.8,
    downloads: 1250,
  },
  {
    id: "image-editor",
    title: "Image Editor",
    description: "Edit and manipulate images directly in your Zopio application.",
    author: "ImageWorks",
    category: "Media",
    rating: 4.6,
    downloads: 1100,
  },
];

export default function TrendingPage(): React.ReactNode {
  return (
    <div className="container py-10">
      <div className="mb-6">
        <h1 className="font-bold text-3xl">Trending Plugins</h1>
        <p className="mt-2 text-muted-foreground">
          Discover what's popular in the Zopio community
        </p>
      </div>
      
      <Tabs defaultValue="trending" className="mb-8">
        <TabsList className="mb-4">
          <TabsTrigger value="trending">Trending</TabsTrigger>
          <TabsTrigger value="new">New Releases</TabsTrigger>
          <TabsTrigger value="popular">Most Downloaded</TabsTrigger>
        </TabsList>
        
        <TabsContent value="trending">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {trendingPlugins.map((plugin) => (
              <Card key={plugin.id} className="overflow-hidden">
                <div className="aspect-video relative bg-muted">
                  <div className="flex h-full items-center justify-center bg-secondary text-4xl font-bold">
                    {plugin.title.charAt(0)}
                  </div>
                  <Badge className="absolute right-2 top-2 flex items-center gap-1 bg-green-500 text-white hover:bg-green-600">
                    <TrendingUp className="h-3 w-3" />
                    {plugin.trend}
                  </Badge>
                </div>
                <CardHeader className="p-4">
                  <div className="flex items-start justify-between">
                    <CardTitle className="line-clamp-1 text-lg">{plugin.title}</CardTitle>
                    <Badge variant="outline">{plugin.category}</Badge>
                  </div>
                  <CardDescription className="line-clamp-2 text-xs">
                    {plugin.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-4 pt-0">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <span>By {plugin.author}</span>
                    <span className="mx-2">•</span>
                    <div className="flex items-center">
                      <Star className="mr-1 h-3 w-3 fill-primary text-primary" />
                      <span>{plugin.rating}</span>
                    </div>
                    <span className="mx-2">•</span>
                    <div className="flex items-center">
                      <Download className="mr-1 h-3 w-3" />
                      <span>{plugin.downloads}</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="p-4 pt-0">
                  <Button asChild className="w-full">
                    <Link href={`/plugins/${plugin.id}`}>View Details</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="new">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {newPlugins.map((plugin) => (
              <Card key={plugin.id} className="overflow-hidden">
                <div className="aspect-video relative bg-muted">
                  <div className="flex h-full items-center justify-center bg-secondary text-4xl font-bold">
                    {plugin.title.charAt(0)}
                  </div>
                  <Badge className="absolute right-2 top-2 bg-blue-500 text-white hover:bg-blue-600">
                    New
                  </Badge>
                </div>
                <CardHeader className="p-4">
                  <div className="flex items-start justify-between">
                    <CardTitle className="line-clamp-1 text-lg">{plugin.title}</CardTitle>
                    <Badge variant="outline">{plugin.category}</Badge>
                  </div>
                  <CardDescription className="line-clamp-2 text-xs">
                    {plugin.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-4 pt-0">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <span>By {plugin.author}</span>
                    <span className="mx-2">•</span>
                    <div className="flex items-center">
                      <Star className="mr-1 h-3 w-3 fill-primary text-primary" />
                      <span>{plugin.rating}</span>
                    </div>
                    <span className="mx-2">•</span>
                    <span>Released {plugin.releaseDate}</span>
                  </div>
                </CardContent>
                <CardFooter className="p-4 pt-0">
                  <Button asChild className="w-full">
                    <Link href={`/plugins/${plugin.id}`}>View Details</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="popular">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {mostDownloadedPlugins.map((plugin) => (
              <Card key={plugin.id} className="overflow-hidden">
                <div className="aspect-video relative bg-muted">
                  <div className="flex h-full items-center justify-center bg-secondary text-4xl font-bold">
                    {plugin.title.charAt(0)}
                  </div>
                </div>
                <CardHeader className="p-4">
                  <div className="flex items-start justify-between">
                    <CardTitle className="line-clamp-1 text-lg">{plugin.title}</CardTitle>
                    <Badge variant="outline">{plugin.category}</Badge>
                  </div>
                  <CardDescription className="line-clamp-2 text-xs">
                    {plugin.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-4 pt-0">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <span>By {plugin.author}</span>
                    <span className="mx-2">•</span>
                    <div className="flex items-center">
                      <Star className="mr-1 h-3 w-3 fill-primary text-primary" />
                      <span>{plugin.rating}</span>
                    </div>
                    <span className="mx-2">•</span>
                    <div className="flex items-center">
                      <Download className="mr-1 h-3 w-3" />
                      <span>{plugin.downloads}</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="p-4 pt-0">
                  <Button asChild className="w-full">
                    <Link href={`/plugins/${plugin.id}`}>View Details</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
      
      <div className="mt-12 rounded-lg border bg-card p-6 text-card-foreground shadow-sm">
        <h2 className="mb-4 text-xl font-semibold">Want to see your plugin trending?</h2>
        <p className="mb-6 text-muted-foreground">
          Submit your plugin to the Zopio Marketplace and get featured in our trending section.
        </p>
        <Button asChild>
          <Link href="/submit-plugin">Submit Your Plugin</Link>
        </Button>
      </div>
    </div>
  );
}
