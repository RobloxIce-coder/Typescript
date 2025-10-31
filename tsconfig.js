var typeScriptVersion = "4.0.3";

SystemJS.config({
  transpiler : 'ts',
  typescriptOptions : {
    module : 'system',
    moduleResolution : 'node',
    target : 'esnext',
    esModuleInterop : true,
    lib : ['dom', 'es2015'],
    rootDir : './src',
    strict : true,
    forceConsistentCasingInFileNames : true,
    allowSyntheticDefaultImports : true,
    emitDecoratorMetadata : true,
    experimentalDecorators : true,
    noImplicitAny : true
  },
  packages : {
    "." : {
      main : './main.ts',
      defaultExtension : 'ts'
    }
  },
  meta : {
    "typescript" : {"exports" : "ts"}
  },
  paths : {
    "npm:" : "https://unpkg.com/"
  },
  map : {
    "ts" : "npm:plugin-typescript@8.0.0/lib/plugin.js",
    "typescript" : "npm:typescript@" + typeScriptVersion + "/lib/typescript.js"
  }
});

SystemJS.import("./src/main")
 .catch(err => {
     console.error(err);
 });
