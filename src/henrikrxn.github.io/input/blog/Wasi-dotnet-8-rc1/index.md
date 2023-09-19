---
Title: ".NET 8 RC1: As expected no news"
Published: "2023-09-19"
---
Now that .NET 8 RC1 has been released, which is supposed to be feature complete,
the level of WASI support is unlikely to change.

<!-- excerpt -->

## Rebuild example WASI module

The [code](https://github.com/henrikrxn/webassembly-experiments/tree/main/wasiconsole-hello-world)
needed no updates. If you used it before just remove `bin` and `obj` folders and
do `dotnet build` followed by `dotnet run`.

## "Stack": Status

Updated:

- Used .NET 8 RC1 SDK `8.0.100-rc.1.23463.5`.
  The version installed with Visual Studio 17.8.0 Preview 2 is `8.0.100-rc.1.23455.8`.
  The reason for the difference is problems with the signing of a MAUI package
  therefore a new SDK build was released.
- Installed `wasi-experimental` workload for .NET 8 RC1 8.0.100-rc.1.23463.5
- [bytecodealliance/wasmtime 12.0.2](https://github.com/bytecodealliance/wasmtime/releases/tag/v12.0.2)

Unchanged:

- [WebAssembly/WASI_SDK 20.0.0](https://github.com/WebAssembly/wasi-sdk/releases/tag/wasi-sdk-20)
