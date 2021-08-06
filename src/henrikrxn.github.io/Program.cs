using System;
using System.Threading.Tasks;
using Devlead.Statiq.Themes;
using Statiq.App;
using Statiq.Web;

namespace Website
{
    public class Program
    {
        public static async Task<int> Main(string[] args) =>
          await Bootstrapper
            .Factory
            .CreateDefault(args)
            .AddThemeFromUri(new Uri("https://github.com/statiqdev/CleanBlog/archive/ceb5055f3d0f7a330708494ed21eb469cde62ce2.zip"))
            .AddWeb()
            .RunAsync();
    }
}
