---
Title: ".NET 8 Preview 6: WASI as before"
Published: "2023-07-11"
Updated: "2023-07-12"
---
After .NET 8 Preview 6 was released this is an update on my post on WASI support
in .NET 8 Preview 4.

**TL;TD**: Not much has changed on the surface since .NET Preview 4.
This is just another update of the software used: .NET SDK, workload and tools (wasmtime).

<!-- excerpt -->

The [code](https://github.com/henrikrxn/webassembly-experiments/tree/main/wasiconsole-hello-world)
needed no updates. If you used it before just remove `bin` and `obj` folders and
do `dotnet build` followed by `dotnet run`.

## "Stack": Status

Updated:

- Visual Studio 2022 Preview 17.7.0 Preview 3 (contained .NET 8 Preview 6)
- Installed `wasi-experimental` workload for .NET 8 Preview 6
- [bytecodealliance/wasmtime 10.0.1](https://github.com/bytecodealliance/wasmtime/releases/tag/v10.0.1)

Unchanged:

- [WebAssembly/WASI_SDK 20.0.0](https://github.com/WebAssembly/wasi-sdk/releases/tag/wasi-sdk-20)

## Update on WASI support in .NET

No news worth reporting in the issues mentioned in the [post about Preview 4](../Webassembly-dotnet-8-hello-world/)
