---
Title: ".NET 8 Preview 5: No news on WASI"
Published: "2023-06-21"
---
After .NET 8 Preview 5 was released this is an update on my previous [post](blog/Webassembly-dotnet-8-hello-world/)
on WASI support in .NET 8.

**TL;TD**: Not much has changed on the surface since .NET Preview 4.
This is just an update of the software used: .NET SDK, workload and tools (wasmtime).

<!-- excerpt -->

The [code](https://github.com/henrikrxn/webassembly-experiments/tree/main/wasiconsole-hello-world)
needed no updates. If you used it before just remove `bin` and `obj` folders and
do `dotnet build` followed by `dotnet run`.

## "Stuck" at updating Hello World

To me the next logical experiment would be to create a WASI compliant wasm file
exporting a function, e.g. `add(a, b) -> a + b`, and calling that using wasmtime.

But this functionality is still in the works and being busy at work I haven't
had the time to dive deep into the `dotnet/runtime` codebase.

## "Stack": Status

Updated:

- [.NET 8 Preview 5](https://github.com/dotnet/core/blob/main/release-notes/8.0/preview/8.0.0-preview.5.md)
- Installed `wasi-experimental` workload from Preview 5
- [bytecodealliance/wasmtime 10.0.0](https://github.com/bytecodealliance/wasmtime/releases/tag/v10.0.0)
- Visual Studio 2022 Preview 17.7.0 Preview 2

Unchanged:

- [WebAssembly/WASI_SDK 20.0.0](https://github.com/WebAssembly/wasi-sdk/releases/tag/wasi-sdk-20)

## Update on WASI support in .NET

The [Youtube video](https://www.youtube.com/watch?v=gKX-cdqnb8I&ab_channel=stevensandersonuk)
by Steve Sanderson is still the best source of information.

The Github [issue](https://github.com/dotnet/runtime/issues/65895)
in `dotnet/runtime` repository is still the place for tracking WASI support
in the .NET runtime.

The initial prototype was [SteveSandersonMS/dotnet-wasi-sdk](https://github.com/SteveSandersonMS/dotnet-wasi-sdk/)
and this comment by [Steve Sanderson](https://github.com/SteveSandersonMS/dotnet-wasi-sdk/issues/11#issuecomment-1576276533)
confirms that everything has moved to [dotnet/runtime](https://github.com/dotnet/runtime/).

No updates have been made to the other [dotnet/dotnet-wasi-sdk](https://github.com/dotnet/dotnet-wasi-sdk/)
so I still believe that this repository also has been abandoned.

## Summary and observations

Nothing new under the sun. Everything written in the [Preview 4 post](../Webassembly-dotnet-8-hello-world/)
still applies.
