---
Title: "Investigating WASM and WASI in Go"
Published: "2023-07-31"
---
In order to get a feel for the state of WASM and WASI support in different
languages I tried so stuff in Go.

Just as in .NET there are issue with the implementation of WASM and WASI in Go,
specifically in the two main compilers `go` and `tinygo`.

<!-- excerpt -->

My first experiment is to create a WASM calculator implementing `add` and `subtract`.
I have a "reference" implementation in WAT and I compare the WASM modules
produced by the different compilers against that using various tools.

<!-- TODO Describe what I compare and how -->


<!-- TODO Generel Web app, som invoker de to funktioner -->

TinyGo 0.28.1: 
Everything is WASI and all WASM modules need fd_write.

Go 1.20:
WASI is in release candidate, but currently cannot export functions.
