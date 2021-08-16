using System;
using System.Threading.Tasks;
using Devlead.Statiq.Themes;
using Statiq.App;
using Statiq.Common;
using Statiq.Web;

namespace Website
{
    public class Program
    {
        public static async Task<int> Main(string[] args) =>
          await Bootstrapper
            .Factory
            .CreateDefault(args)
            .AddThemeFromUri(new Uri("https://github.com/henrikrxn/CleanBlog/archive/e940b05c8830f893896f804f4feac41dbaa4c93e.zip"))
            .DeployToGitHubPagesBranch(
                owner: "henrikrxn",
                name: "henrikrxn.github.io",
                Config.FromSetting<string>("GITHUB_TOKEN"),
                branch: "gh-pages")
            .AddWeb()
            .RunAsync();
    }
}
