// This script is used to skip husky installation in CI environments
// It's called from the prepare script in package.json

if (process.env.CI === 'true') {
  // Skip husky installation in CI environment
  process.exit(0);
}
