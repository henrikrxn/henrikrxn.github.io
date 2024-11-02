---
Title: "WASI and .NET 9: What's going on?"
Published: "2024-11-03"
---
It has not been easy to follow progress on WASI support in .NET 9.

Since Rich Lander's [blog post](https://devblogs.microsoft.com/dotnet/extending-web-assembly-to-the-cloud/),
shortly after the .NET 8 release, there has been no news about WASI from Microsoft.

Tracking the progress on Github is not easy either as there are many issues
related to Wasm and WASI with these two seeming like the most important:

* [WASI support tracking](https://github.com/dotnet/runtime/issues/65895)
* [WASI Developer Experience Goals](https://github.com/dotnet/runtime/issues/96419).

Early in the year it looked like WASI support would see some progress in
.NET 9 with the above issues having 9.0.0 as Milestone.

One thing that indicated progress was the ability to build WASI as a library,
see this [issue](https://github.com/dotnet/runtime/issues/96869) and matching
[PR](https://github.com/dotnet/runtime/pull/102806).

But then from early July the Milestones started changing to 10.0.0 on the
issues concerning WASI support.

And by the time .NET Preview 7 was released it looked like .NET 9 would only
support WASI Preview 2 and WASI Preview 1 support would be dropped because the
team lacked the resources to maintain both, which seems fair. See this Github
[issue](https://github.com/dotnet/runtime/issues/65895#issuecomment-2359352783)
for context.

The latest change seems to be that there will be no support for `wasi-experimental`
in .NET 9 if this [PR](https://github.com/dotnet/runtime/pull/108877) is any
indication. But it also looks like `wasi-experimental` will be back in .NET 10.

So to use .NET + WASI Preview 1 you'll have to stay on .NET 8.

But if you would like some WASI (Preview 2) in .NET 9 things might not be all bad.

The BytecodeAlliance has released a Nuget package `componentize-dotnet`, see their
[blog post](https://bytecodealliance.org/articles/simplifying-components-for-dotnet-developers-with-componentize-dotnet).
This enables WASI Preview 2 and WASI components in .NET 9.
The blog post uses .NET Preview 7, but I also got the samples working with
.NET 9 RC 2. What works after .NET 9 RTM remains to be seen.
