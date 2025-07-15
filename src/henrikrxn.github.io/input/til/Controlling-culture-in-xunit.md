---
Title: Today I (re)learned (TIL)
ShowInNavbar: true
NavbarTitle: Today I (re)learned
---
# Today I (re)learned

This page is for recording things that are not interesting enough for a blog
post or has been covered by somebody else but I still want to keep track of.

For now it is just a page, but should become a dynamically
built page like "Posts" is, but that requires a little work first.

A lot of the entries are lessons I re-learned and after a while had the
"Oh, now it is coming back to me. Been here before."

I do not expect I'll consult this page much, but my hope is that by writing
stuff down I'll remember a bit more next time I encounter them.

## 2025-06-04 Controlling culture in Automated tests

See [video](https://www.youtube.com/watch?v=I4sjGttgSUE&ab_channel=GuiFerreira)
by Gui Ferreira.

Describes four way in which you can control the current culture when running tests.

I prefer the 4th option that uses the ```xunit.runner.json``` file, e.g.

```json
{
    "$schema": "https://xunit.net/schema/current/xunit-runner-schema-json",
    "culture": "da-DK"
}
```

## 2025-06-17 Make sure Aspire uses Podman

You can set an environment variable if you want to ensure that Aspire uses Podman.

An example using Powershell

```powershell
[System.Environment]::SetEnvironmentVariable("ASPIRE_CONTAINER_RUNTIME", "podman", "User")
```

## 2025-07-04 Bicep and Azure Role Assignment gotchas

Was hit by two problems I encountered before but had forgotten about

* A role assignment should have a fixed unique name otherwise Azure will
generate a different name each time the Bicep is deployed and therefore
assumes that the role assignment already exists and refuses to create another,
different, instance of the same role assignment.
* If you create a role assignment manually before doing it in Bicep then the id
shown is not the object id, which is what you need, but the other id.

## 2025-07-14 Azure Pipelines build dotnet like s***

Almost regardless of what you do Azure Pipelines (dotnet) tasks insist on
building all projects in a solution into the same folder instead of following
the traditional `obj` and `bin` folders.

After having fought this for the second time in a 5 years my conclusion was the
same:

If you use Azure Pipelines you should really consider a build script.
Doesn't matter if it is Cake, Nuke, Powershell or whatever you fancy;
anything is better than using Azure Pipelines built-in tasks.

Since dotnet came out and made it a lot easier to do stuff with .NET, my opinion
is that "Nah, do not need custom build scripts anymore for most projects."

But Azure Pipelines reminds me of how bad design can limit developer
flexibility immensely.

Azure Pipelines basic design decision that divides the build workspace into:

* `s` (source)
* `b` (binary)
* `a` (publish)

folders is as bad as any other decision I've seen in 20 years of ~~battling~~
using build servers.

An example of why this is a bad idea:

When you install / restore a local dotnet
tool you have no control over where it is placed and dotnet tool expects it to
be in a specific place. And because Azure Pipelines are quite insistent on
putting your C# projects `bin` folders in the "publish" section while keeping
the `obj` folders along side the "source" section it makes it quite difficult
and annoying to use `dotnet tool` on you build output. So you have to jump
through a lot of setting up output folders and doing manual configuration, just
because somebody made a terrible design decision.

That is why I always answer 0 when asked "On a scale from 0 to 10 how likely
are you to recommend Azure Pipelines?".
