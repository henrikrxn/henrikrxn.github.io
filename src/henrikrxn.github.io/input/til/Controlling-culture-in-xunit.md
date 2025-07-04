---
Title: Today I Learned (TIL)
ShowInNavbar: true
NavbarTitle: Today I Learned
---
# Today I Learned

This page is for recording things that are not interesting enough for a blog
post or has been covered by somebody else but I still want to keep track of.

For now it is just a page, but should become a dynamically
built page like "Posts" is, but that requires a little work first.  

## 2025-06-04 Controlling culture in Automated tests

See video here https://www.youtube.com/watch?v=I4sjGttgSUE&ab_channel=GuiFerreira

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

* A role assignment should have a unique name otherwise Azure assumes that the
role assignment already exists and refuses to create another, different,
instance of the same role assignment.
* If you create a role assignment manually before doing it in Bicep then the id
shown is not the object id, which is what you need, but the other id.
