"use client";

import type { ReactNode } from "react";
import { DesignSystemProvider } from "@repo/design-system";

export function Providers({ children }: { children: ReactNode }) {
  return (
    <DesignSystemProvider attribute="class" defaultTheme="system" enableSystem>
      {children}
    </DesignSystemProvider>
  );
}
