# Business Plugins

This directory contains plugins designed for business operations and workflows in the Zopio platform. These plugins provide business-specific functionality, analytics, and integrations with business tools.

## Plugin Types

- CRM integrations
- ERP connectors
- Business analytics
- Reporting tools
- Workflow automation
- Document management

## Naming Convention

All business plugins should follow the naming convention:

```
@repo/plugin-business-{name}
```

## Peer Dependencies

Business plugins should declare the following as peer dependencies:

```json
"peerDependencies": {
  "@repo/database": "workspace:*",
  "@repo/auth": "workspace:*",
  "@repo/analytics": "workspace:*"
}
```

## Example Usage

```typescript
import { businessConnector } from '@repo/plugin-business-name';

// Use the plugin
const data = await businessConnector.getData();
```
