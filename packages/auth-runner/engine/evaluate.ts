import { logAccessAttempt } from '@zopio/auth-log';
import { evaluateAccess as baseEvaluate } from '@zopio/auth-rbac/engine/evaluate';
import type { UserContext } from '@zopio/auth-rbac/types';
import { combinedRules } from '../rules/combinedRules';

export function evaluateAccess(ctx: {
  context: UserContext;
  resource: string;
  action: string;
  record?: Record<string, unknown>;
  field?: string;
}) {
  const result = baseEvaluate({
    rules: combinedRules,
    ...ctx,
  });

  logAccessAttempt({
    ...ctx,
    timestamp: new Date().toISOString(),
    can: result.can,
    reason: result.reason,
  });

  return result;
}
