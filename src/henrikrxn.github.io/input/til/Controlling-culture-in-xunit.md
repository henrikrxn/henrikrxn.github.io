---
Title: Today I Learned (TIL)
ShowInNavbar: true
NavbarTitle: Today I Learned
---
# Today I Learned
This page is for recording things that are not interesting enough for a blog post or has been
covered by somebody else but I still want to keep track of.

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
