# Insurtech Plugins

This directory contains insurance technology plugins for the Zopio platform. These plugins provide integrations with insurance services, risk assessment tools, and insurance data processing.

## Plugin Types

- Insurance policy management
- Claims processing
- Risk assessment tools
- Underwriting automation
- Insurance data analytics
- Compliance tools

## Naming Convention

All insurtech plugins should follow the naming convention:

```
@repo/plugin-insurtech-{name}
```

## Peer Dependencies

Insurtech plugins should declare the following as peer dependencies:

```json
"peerDependencies": {
  "@repo/database": "workspace:*",
  "@repo/security": "workspace:*",
  "@repo/analytics": "workspace:*"
}
```

## Example Usage

```typescript
import { policyManager } from '@repo/plugin-insurtech-name';

// Use the plugin
const policy = await policyManager.createPolicy({
  type: 'auto',
  customer: customerId
});
```
