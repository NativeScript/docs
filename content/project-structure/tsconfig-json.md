---
title: tsconfig.json
---

The `tsconfig.json` file is present only in TypeScript projects. It contains the options for the `tsc` CLI. You can fine-tune the transpilation process by configuring the various [compiler options](https://www.typescriptlang.org/docs/handbook/compiler-options.html). For more information about tsconfig.json, see the official [TypeScript documentation](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html).

```json
{
  "compilerOptions": {
    "module": "esnext",
    "target": "es2017",
    "moduleResolution": "node",
    "experimentalDecorators": true,
    "emitDecoratorMetadata": true,
    "noEmitHelpers": true,
    "noEmitOnError": true,
    "skipLibCheck": true,
    "lib": ["es2017", "dom"],
    "baseUrl": ".",
    "paths": {
      "~/*": ["app/*"],
      "@/*": ["app/*"]
    }
  },
  "include": ["app/**/*", "activity.android.ts", "application.android.ts", "application.android.ts", "activity.android.ts"],
  "files": ["./references.d.ts"],
  "exclude": ["node_modules", "platforms"]
}

```