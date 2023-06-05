---
Title: "Git: Working dir determines Git user"
Published: "2017-05-22"
Updated: "2022-02-20"
RedirectFrom:
- Git-using-different-Github-accounts-based-on-folder/index.html
Canonical: https://henrikrxn.github.io/Git-using-different-Github-accounts-based-on-folder/index.html
---
This post describes how to configure Git so that `user.name` and `user.email`
change depending on the working directory.
<!-- excerpt -->
The latest Git at the time of writing was 2.13.0 on Windows.
I expect some of the issues will go away in future Git versions.

I use Github at work and have decided to have two profiles to keep things
 compartmentalized. One for work and one for my spare time.

Using multiple SSH keys has been a known workaround for quite some time. It has
 been described in many blogs and articles. I used this
  [blog post](https://ricardianambivalence.com/2013/09/22/github-for-work-and-play-multiple-accounts/)
  and [this blog](https://code.tutsplus.com/tutorials/quick-tip-how-to-work-with-github-and-multiple-accounts--net-22574)
  for information about the initial set-up.

But there is still the matter of the user name and e-mail associated with git.

It has been a minor annoyance and I have accidentally used my private account to
 push to my work repositories once or twice.

However Git 2.13 contains a new feature,
 [Conditinal Include](https://git-scm.com/docs/git-config#_includes),
  which can help you have multiple user names and e-mails. There are however a
   few caveats I encountered along the way.


First a short sample of what worked for me. Start by adding conditional includes
 to your .gitconfig.

<?# Gist Id="2b72e323ffd6003749074d8206723d64" Username="henrikrxn" /?>

Then you can have a .work.gitconfig

<?# Gist Id="cded8d9d4df8119ba8a2a958f4663bc5" Username="henrikrxn" /?>

and a .sparetime.gitconfig

<?# Gist Id="aa17c56be689c4292ee2e9323e26264f" Username="henrikrxn" /?>

There are a couple of things to take note of when adding conditional includes:

- **If you also have `user.name` and `user.email` in your `.gitconfig` file.**
 If you decide to configure default values for these then remember to do so 
 _before_ the conditional includes. Otherwise your defaults will overwrite anything
 from the conditional includes.

- **The path to the included files is relative to your .gitconfig**. When I was
 having problems getting it to work I tried ~ as shorthand for my home directory,
  but could not get that to work
- **Also \*nix style full paths do not work on Windows**. You must use paths
 like, e.g. `D:/Work/`

And a last tip for easy debugging of which configurations are loaded and from
 which file they were loaded:

```git config --show-origin --list```
