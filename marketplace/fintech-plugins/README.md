# Fintech Plugins

This directory contains financial technology plugins for the Zopio platform. These plugins provide integrations with financial services, payment processing, and financial data analysis.

## Plugin Types

- Payment gateways
- Banking integrations
- Cryptocurrency tools
- Financial reporting
- Investment analysis
- Billing and invoicing

## Naming Convention

All fintech plugins should follow the naming convention:

```bash
@repo/plugin-fintech-{name}
```

## Peer Dependencies

Fintech plugins should declare the following as peer dependencies:

```json
"peerDependencies": {
  "@repo/payments": "workspace:*",
  "@repo/security": "workspace:*",
  "@repo/database": "workspace:*"
}
```

## Example Usage

```typescript
import { paymentProcessor } from '@repo/plugin-fintech-name';

// Use the plugin
const transaction = await paymentProcessor.processPayment({
  amount: 100,
  currency: 'USD'
});
```
