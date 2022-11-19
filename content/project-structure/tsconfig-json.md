---
title: tsconfig.json
---

Projects using TypeScript use the `tsconfig.json` to control the TypeScript compilation. Our templates ship with curated default values, however if you need to, you can fine-tune the [compiler options](https://www.typescriptlang.org/docs/handbook/compiler-options.html).

For more information see the official [TypeScript documentation](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html).

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
      "~/*": ["src/*"],
      "@/*": ["src/*"]
    }
  },
  "include": ["src/**/*", "activity.android.ts", "application.android.ts"],
  "files": ["./references.d.ts"],
  "exclude": ["node_modules", "platforms"]
}

```