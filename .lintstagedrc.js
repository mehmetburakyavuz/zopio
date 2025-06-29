export default {
  // For JavaScript/TypeScript files
  "*.{js,jsx,ts,tsx}": (files) => {
    const filePaths = files.join(' ');
    return [
      // Format files first
      `pnpm format ${filePaths}`,
      // Then lint only the staged files
      `pnpm ultracite lint ${filePaths}`
    ];
  },
  // For JSON files
  "*.json": (files) => {
    const filePaths = files.join(' ');
    return [
      `pnpm format ${filePaths}`
    ];
  },
};
