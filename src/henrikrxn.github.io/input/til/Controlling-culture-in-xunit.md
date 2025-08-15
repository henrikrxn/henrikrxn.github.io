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

## 2025-08-14 ASP.NET Core Configuration, Options pattern and Validation

Another re-learn, so documenting my learnings.

There are basically to ways to have custom validation by implementing one of
these interfaces:

* `IValidatableObject` from the `System.ComponentModel.DataAnnotations` namespace.
* `IValidateOptions<T>` from the `Microsoft.Extensions.Options` namespace.

Both have their pros and cons, but they have in common that I dislike the API
of their respective validation result classes.

It is primarily when writing unit tests for the custom validation I run into
things that annoy me.

`IValidatableObject` pros and cons:

Pros:

* Operates with three different types of validations:
  1. Data annotations on property level
  2. Data annotations on class level
  3. Custom validation logic

Cons:

* Fail fast is used for each type of validation. An example:
If there are data annotation errors then class level and custom validation
logic are not executed.
So if you have all three types of validation errors then you'll have to run you
application three times to see all errors.
Why not leave it up to the caller, what the behavior for this should be?
* `IEnumerable<ValidationResult> Validate(ValidationContext validationContext)`
to run the validation you always have to provide a `ValidationContext` even if
you do not use it. Why not just `Validate()` ?

`IValidateOptions<T>` pros and cons:

Pros:

* `ValidateOptionsResult` has concept of Succeeded, Failed and Skipped, which
is a nice way to quickly discern the result of the validation.

Cons:

* `ValidateOptionsResult Validate(string? name, TOptions options)` is a little strange.
Why is `name` there? And why do I have to pass in the object?
Why not just a method `Validate()` on the object?
* `ValidateOptionsResult` has to failure properties `FailureMessage`
(`string?`) and `Failures` (`IEnumerable<string>?`).
But you can only set one or the other. Not both.
Why is there a limitation that *only* limits flexibility
and brings *no* discernable value?

TODO What about validation by using service provider. How is that to use?

## 2025-08-15 Watch out when using arrays in appsettings.json

TODO How does IConfiguration deal with this internally?

TODO Why is this a source of potential problems, especially when it comes to testing?
