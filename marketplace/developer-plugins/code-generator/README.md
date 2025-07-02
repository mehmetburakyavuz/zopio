# Code Generator Plugin

A developer tool for generating boilerplate code in the Zopio ecosystem.

## Features

- Generate components, hooks, services, and more
- Create test files automatically
- Generate Storybook stories for components
- React UI for easy code generation

## Installation

```bash
pnpm add @repo/plugin-code-generator
```

## Usage

### Using the UI Component

```tsx
import { CodeGeneratorForm, GeneratedFilesList } from '@repo/plugin-code-generator';
import { useState } from 'react';

export default function CodeGeneratorPage() {
  const [generatedFiles, setGeneratedFiles] = useState<string[]>([]);
  
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Code Generator</h1>
      
      <CodeGeneratorForm 
        defaultOutputPath="./src/components"
        onGenerate={(files) => setGeneratedFiles(files)}
        onError={(error) => console.error(error)}
      />
      
      <GeneratedFilesList files={generatedFiles} />
    </div>
  );
}
```

### Using the API Directly

```ts
import { generateCode } from '@repo/plugin-code-generator';

async function generateComponent() {
  try {
    const files = await generateCode({
      name: 'Button',
      description: 'A reusable button component',
      type: 'component',
      outputPath: './src/components',
      createTestFile: true,
      createStoryFile: true
    });
    
    console.log('Generated files:', files);
  } catch (error) {
    console.error('Error generating code:', error);
  }
}
```

## Available Templates

- `component` - React component
- `hook` - React hook
- `service` - Service class
- `util` - Utility functions
- `context` - React context
- `provider` - Provider component

## Configuration

The plugin uses the following peer dependencies:

```json
"peerDependencies": {
  "@repo/typescript-config": "workspace:*",
  "@repo/design-system": "workspace:*",
  "react": "^19.1.0",
  "react-dom": "^19.1.0"
}
```

## Contributing

1. Clone the repository
2. Install dependencies with `pnpm install`
3. Make your changes
4. Run tests with `pnpm test`
5. Submit a pull request
