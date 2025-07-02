import { withConfig } from "@repo/next-config";

export default withConfig({
  reactStrictMode: true,
  transpilePackages: ["@repo/design-system"],
  experimental: {
    serverActions: {
      allowedOrigins: ["localhost:3003"],
    },
  },
});
