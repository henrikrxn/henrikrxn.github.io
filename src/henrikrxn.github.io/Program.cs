using System;
using System.Threading.Tasks;
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
            .AddThemeFromUri(new Uri("https://github.com/henrikrxn/CleanBlog/archive/de74dd28971e0634dd28b6437e327462991cc824.zip"))
            .DeployToGitHubPagesBranch(
                owner: "henrikrxn",
                name: "henrikrxn.github.io",
                Config.FromSetting<string>("GITHUB_TOKEN"),
                branch: "gh-pages")
            .AddWeb()
            .RunAsync();
    }
}
