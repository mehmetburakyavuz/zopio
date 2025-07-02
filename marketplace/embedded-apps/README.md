# Embedded Apps

This directory contains embeddable applications and widgets for the Zopio platform. These apps can be embedded into other applications or websites to extend functionality.

## App Types

- Embeddable widgets
- Micro frontends
- Interactive components
- Data visualization tools
- Embedded forms
- Customer-facing tools

## Naming Convention

All embedded apps should follow the naming convention:

```
@repo/app-embedded-{name}
```

## Peer Dependencies

Embedded apps should declare the following as peer dependencies:

```json
"peerDependencies": {
  "@repo/design-system": "workspace:*",
  "react": "^19.1.0",
  "react-dom": "^19.1.0"
}
```

## Example Usage

```typescript
import { EmbeddedWidget } from '@repo/app-embedded-name';

// Use the embedded app
<EmbeddedWidget 
  config={{ 
    theme: 'light',
    data: sourceData 
  }} 
/>
```
