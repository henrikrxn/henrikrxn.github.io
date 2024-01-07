---
Title: ".NET 8 RC1: As expected no news"
Published: "2023-09-19"
---
Now that .NET 8 RC1 has been released it is pretty clear what the level of WASI support
in .NET 8 is going to be and also looking a little into the generated WASM file.

<!-- excerpt -->

## Rebuild example WASI module

The [code](https://github.com/henrikrxn/webassembly-experiments/tree/main/wasiconsole-hello-world)
needed no updates. If you used it before just remove `bin` and `obj` folders and
do `dotnet build` followed by `dotnet run`.

## "Stack": Status

Updated:

- Used .NET RC1 SDK `8.0.100-rc.2.23502.2`.
  The version installed with Visual Studio 17.8.0 Preview 4
- Installed `wasi-experimental` workload for .NET 8 RC2 8.0.100-rc.2.23502.2
- [bytecodealliance/wasmtime 12.0.2](https://github.com/bytecodealliance/wasmtime/releases/tag/v14.0.0)

Unchanged:

- [WebAssembly/WASI_SDK 20.0.0](https://github.com/WebAssembly/wasi-sdk/releases/tag/wasi-sdk-20)

## Looking at the imports and exports

After generating a single WASM file using `<WasmSingleFileBundle>true</WasmSingleFileBundle>`
and `<PublishTrimmed>true</PublishTrimmed>` the generated `wasiconsole-hello-world.wasm`
I inspected the file using `wasm-objdump` version 1.33 from the [WebAssembly Binary Toolkit](https://github.com/WebAssembly/wabt)
to reveal the exports and imports.

```powershell
PS> wasm-objdump --details --section=export .\bin\Debug\net8.0\wasi-wasm\AppBundle\wasiconsole-hello-world.wasm
```

and

```powershell
PS> wasm-objdump --details --section=import .\bin\Debug\net8.0\wasi-wasm\AppBundle\wasiconsole-hello-world.wasm
```
