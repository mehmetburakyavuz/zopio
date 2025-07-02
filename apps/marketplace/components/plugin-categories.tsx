"use client";

import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@repo/design-system/components/ui/card";
import { 
  BarChart3, 
  Database, 
  FileText, 
  Globe, 
  Layout, 
  Lock, 
  MessageSquare, 
  Rocket 
} from "lucide-react";

// Mock data for plugin categories
const categories = [
  {
    id: "analytics",
    title: "Analytics",
    description: "Track and visualize your application data",
    icon: BarChart3,
    count: 24,
  },
  {
    id: "data",
    title: "Data & Storage",
    description: "Connect and manage your data sources",
    icon: Database,
    count: 18,
  },
  {
    id: "ui-components",
    title: "UI Components",
    description: "Enhance your user interface",
    icon: Layout,
    count: 32,
  },
  {
    id: "content",
    title: "Content Management",
    description: "Manage and organize your content",
    icon: FileText,
    count: 15,
  },
  {
    id: "integration",
    title: "Integrations",
    description: "Connect with third-party services",
    icon: Globe,
    count: 27,
  },
  {
    id: "security",
    title: "Security",
    description: "Protect your application and data",
    icon: Lock,
    count: 12,
  },
  {
    id: "communication",
    title: "Communication",
    description: "Chat, messaging, and notifications",
    icon: MessageSquare,
    count: 9,
  },
  {
    id: "developer-tools",
    title: "Developer Tools",
    description: "Improve your development workflow",
    icon: Rocket,
    count: 21,
  },
];

export function PluginCategories() {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {categories.map((category) => {
        const Icon = category.icon;
        return (
          <Link key={category.id} href={`/categories/${category.id}`}>
            <Card className="h-full transition-colors hover:bg-muted/50">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-lg font-medium">{category.title}</CardTitle>
                <Icon className="h-5 w-5 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <CardDescription>{category.description}</CardDescription>
                <p className="mt-4 text-sm text-muted-foreground">
                  {category.count} plugins
                </p>
              </CardContent>
            </Card>
          </Link>
        );
      })}
    </div>
  );
}
