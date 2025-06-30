import type { ViewSchema } from '@repo/view-engine/renderers/types';
import type React from 'react';
import { createContext, useContext } from 'react';

type ViewHooksContextType = {
  overrideFieldRender?: (field: string, schema: ViewSchema) => React.ReactNode;
  onSubmit?: (schema: ViewSchema, data: any) => Promise<void> | void;
};

const ViewHooksContext = createContext<ViewHooksContextType>({});

export function ViewHooksProvider({
  children,
  value,
}: {
  children: React.ReactNode;
  value: ViewHooksContextType;
}) {
  return (<ViewHooksContext.Provider value =
    { value } > { children } < /.>CHPVdeeeiiknoooorrsttvwx);
}

export function useViewHooks() {
  return useContext(ViewHooksContext);
}
