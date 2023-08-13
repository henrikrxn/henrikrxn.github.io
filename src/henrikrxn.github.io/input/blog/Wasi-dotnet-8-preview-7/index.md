---
Title: ".NET 8 Preview 7: WASI \u2B62 .NET 9"
Published: "2023-08-13"
---
After .NET 8 Preview 7 was released this is an update on my post on WASI support
in .NET 8 Preview 4.

**TL;TD**: WASI has been postponed to .NET 9, see the WASI tracking [issue](https://github.com/dotnet/runtime/issues/65895) on Github.
Otherwise not much has changed on the surface since .NET Preview 4.

This blog post is only about minor updates of the software used: .NET SDK, workload and tools (wasmtime).

<!-- excerpt -->

## Rebuild example WASI module

The [code](https://github.com/henrikrxn/webassembly-experiments/tree/main/wasiconsole-hello-world)
needed no updates. If you used it before just remove `bin` and `obj` folders and
do `dotnet build` followed by `dotnet run`.

## "Stack": Status

Updated:

- Visual Studio 2022 Preview 17.8.0 Preview 1 (contained .NET 8 Preview 7)
- Installed `wasi-experimental` workload for .NET 8 Preview 7
- [bytecodealliance/wasmtime 11.0.1](https://github.com/bytecodealliance/wasmtime/releases/tag/v11.0.1)

Unchanged:

- [WebAssembly/WASI_SDK 20.0.0](https://github.com/WebAssembly/wasi-sdk/releases/tag/wasi-sdk-20)

## Update on WASI support in .NET

The main tracking [issue](https://github.com/dotnet/runtime/issues/65895) looks the same, but has 
been moved to .NET 9 on July 12th 2023, which was just after .NET 8 Preview 6 was released.

Given the updated Bytecode Alliance [roadmap](https://bytecodealliance.org/articles/webassembly-the-updated-roadmap-for-developers)
for WASI this makes perfect sense as the WASI preview 2 and 3 will likely introduce major changes anyway.
