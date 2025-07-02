# Developer Plugins

This directory contains plugins designed for developers building on the Zopio platform. These plugins enhance the development experience, provide additional tooling, and extend core functionality.

## Plugin Types

- Development tools and utilities
- Code generators
- CLI extensions
- Testing frameworks
- Debugging tools
- Performance optimization tools

## Naming Convention

All developer plugins should follow the naming convention:

```text
@repo/plugin-dev-{name}
```

## Peer Dependencies

Developer plugins should declare the following as peer dependencies:

```json
"peerDependencies": {
  "@repo/typescript-config": "workspace:*",
  "@repo/design-system": "workspace:*"
}
```

## Example Usage

```typescript
import { someUtility } from '@repo/plugin-dev-name';

// Use the plugin
someUtility();
```
