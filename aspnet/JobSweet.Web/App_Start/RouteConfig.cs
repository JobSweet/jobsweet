using System;
using System.Collections.Concurrent;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Hosting;
using System.Web.Mvc;
using System.Web.Routing;

namespace JobSweet.Web {
    public class RouteConfig {
        public static void RegisterRoutes(RouteCollection routes) {
            routes.IgnoreRoute("{resource}.axd/{*pathInfo}");
            routes.Add("client", new Route("client/{*pathInfo}", new StaticFileRouteHandler("../..")));
            routes.MapRoute(
                name: "Default",
                url: "{controller}/{action}/{id}",
                defaults: new { controller = "Home", action = "Index", id = UrlParameter.Optional }
            );
        }
    }
    public class StaticFileRouteHandler : IRouteHandler {
        private readonly string _path;

        private static ConcurrentDictionary<string, StaticFileHandler> _handlers =
            new ConcurrentDictionary<string, StaticFileHandler>();

        public StaticFileRouteHandler(string path) { _path = path; }

        public IHttpHandler GetHttpHandler(RequestContext requestContext) {
            return _handlers.GetOrAdd(_path, p => new StaticFileHandler(p));
        }       
    }

    public class StaticFileHandler : IHttpHandler {
        private readonly string _clientPhysicalRelPath;

        public StaticFileHandler(string path) { _clientPhysicalRelPath = path; }

        public void ProcessRequest(HttpContext context) {
            var urlRelPath = context.Request.CurrentExecutionFilePath == "/" ? "/index.html" : context.Request.CurrentExecutionFilePath;
            var path = HostingEnvironment.ApplicationPhysicalPath + _clientPhysicalRelPath + urlRelPath;

            if (!System.IO.File.Exists(path)) {
                throw new HttpException(404, "File_does_not_exist");
            }

            using (var fs = System.IO.File.OpenRead(path)) {
                var buffer = new byte[4096];
                int count;

                var response = context.Response;
                response.ContentType = MimeMapping.GetMimeMapping(path);
                while ((count = fs.Read(buffer, 0, buffer.Length)) > 0) {
                    response.OutputStream.Write(buffer, 0, count);
                    response.Flush();
                }
            }
        }

        public bool IsReusable { get; } = false;
    }
}
