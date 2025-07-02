# Integrations

This directory contains third-party service integrations for the Zopio platform. These integrations connect Zopio with external services and platforms.

## Integration Types

- API connectors
- Data synchronization
- Authentication providers
- Cloud service integrations
- Marketing platform connectors
- Communication tools

## Naming Convention

All integrations should follow the naming convention:

```bash
@repo/integration-{service-name}
```

## Peer Dependencies

Integrations should declare the following as peer dependencies:

```json
"peerDependencies": {
  "@repo/webhooks": "workspace:*",
  "@repo/auth": "workspace:*",
  "@repo/database": "workspace:*"
}
```

## Example Usage

```typescript
import { serviceConnector } from '@repo/integration-service-name';

// Use the integration
const data = await serviceConnector.fetchData({
  endpoint: '/users',
  params: { limit: 10 }
});
```
