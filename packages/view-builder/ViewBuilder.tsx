import { AIPromptPanel } from './ai/AIPromptPanel';
import { DragDropCanvas } from './canvas/DragDropCanvas';
import { SchemaProvider } from './hooks/useSchemaState';
import { JSONEditor } from './json-editor/JSONEditor';
import { Toolbox } from './toolbox/Toolbox';

export function ViewBuilder() {
  return (
    <SchemaProvider>
      <div className="grid h-full grid-cols-5 gap-4 p-4">
        <div className="col-span-1 space-y-4">
          <Toolbox />
          <AIPromptPanel />
        </div>
        <div className="col-span-3">
          <DragDropCanvas />
        </div>
        <div className="col-span-1">
          <JSONEditor />
        </div>
      </div>
    </SchemaProvider>
  );
}
