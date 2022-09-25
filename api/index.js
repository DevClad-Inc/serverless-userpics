var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
}, __copyProps = (to, from, except, desc) => {
  if (from && typeof from == "object" || typeof from == "function")
    for (let key of __getOwnPropNames(from))
      !__hasOwnProp.call(to, key) && key !== except && __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: !0 }), mod);

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  assetsBuildDirectory: () => assetsBuildDirectory,
  entry: () => entry,
  publicPath: () => publicPath,
  routes: () => routes
});
module.exports = __toCommonJS(stdin_exports);

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
var import_react = require("@remix-run/react"), import_server = require("react-dom/server"), import_jsx_dev_runtime = require("react/jsx-dev-runtime");
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  let markup = (0, import_server.renderToString)(
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react.RemixServer, {
      context: remixContext,
      url: request.url
    }, void 0, !1, {
      fileName: "app/entry.server.tsx",
      lineNumber: 12,
      columnNumber: 5
    }, this)
  );
  return responseHeaders.set("Content-Type", "text/html"), new Response("<!DOCTYPE html>" + markup, {
    status: responseStatusCode,
    headers: responseHeaders
  });
}

// app/root.tsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  links: () => links,
  meta: () => meta
});

// app/styles/app.css
var app_default = "/build/_assets/app-WQE2PS24.css";

// app/root.tsx
var import_react2 = require("@remix-run/react"), import_jsx_dev_runtime = require("react/jsx-dev-runtime");
function links() {
  return [{ rel: "stylesheet", href: app_default }];
}
var meta = () => ({
  charset: "utf-8",
  title: "New Remix App",
  viewport: "width=device-width,initial-scale=1"
});
function App() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("html", {
    lang: "en",
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("head", {
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react2.Meta, {}, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 26,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react2.Links, {}, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 27,
            columnNumber: 9
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/root.tsx",
        lineNumber: 25,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("body", {
        className: "h-full bg-black text-white",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react2.Outlet, {}, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 30,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react2.ScrollRestoration, {}, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 31,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react2.Scripts, {}, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 32,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react2.LiveReload, {}, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 33,
            columnNumber: 9
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/root.tsx",
        lineNumber: 29,
        columnNumber: 7
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 24,
    columnNumber: 5
  }, this);
}

// app/routes/index.tsx
var routes_exports = {};
__export(routes_exports, {
  default: () => Index
});
var import_jsx_dev_runtime = require("react/jsx-dev-runtime");
function Index() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    className: "justify-center mt-10",
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "flex justify-center",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
          className: "text-3xl font-extrabold",
          children: "Serverless Userpics"
        }, void 0, !1, {
          fileName: "app/routes/index.tsx",
          lineNumber: 5,
          columnNumber: 5
        }, this)
      }, void 0, !1, {
        fileName: "app/routes/index.tsx",
        lineNumber: 4,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "justify-center flex py-10 font-mono",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
          className: "block text-amber-300",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
              className: "flex",
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
                  className: "text-blue-300",
                  href: "https://github.com/arthtyagi/serverless-userpics",
                  children: "View on GitHub"
                }, void 0, !1, {
                  fileName: "app/routes/index.tsx",
                  lineNumber: 11,
                  columnNumber: 9
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", {
                  className: "w-5 h-5 ml-2 text-white",
                  "aria-hidden": "true",
                  fill: "currentColor",
                  viewBox: "0 0 20 20",
                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
                    fillRule: "evenodd",
                    d: "M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z",
                    clipRule: "evenodd"
                  }, void 0, !1, {
                    fileName: "app/routes/index.tsx",
                    lineNumber: 14,
                    columnNumber: 13
                  }, this)
                }, void 0, !1, {
                  fileName: "app/routes/index.tsx",
                  lineNumber: 13,
                  columnNumber: 9
                }, this)
              ]
            }, void 0, !0, {
              fileName: "app/routes/index.tsx",
              lineNumber: 10,
              columnNumber: 7
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
              className: "block",
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
                href: "/api/getpic",
                children: " Get a random userpic (Fetch)"
              }, void 0, !1, {
                fileName: "app/routes/index.tsx",
                lineNumber: 21,
                columnNumber: 31
              }, this)
            }, void 0, !1, {
              fileName: "app/routes/index.tsx",
              lineNumber: 21,
              columnNumber: 7
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
              className: "block",
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
                href: "/api/avatar?stream=true",
                children: " Get an avatar (Fetch)"
              }, void 0, !1, {
                fileName: "app/routes/index.tsx",
                lineNumber: 22,
                columnNumber: 31
              }, this)
            }, void 0, !1, {
              fileName: "app/routes/index.tsx",
              lineNumber: 22,
              columnNumber: 7
            }, this)
          ]
        }, void 0, !0, {
          fileName: "app/routes/index.tsx",
          lineNumber: 9,
          columnNumber: 5
        }, this)
      }, void 0, !1, {
        fileName: "app/routes/index.tsx",
        lineNumber: 7,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
        className: "justify-center flex text-2xl font-extrabold",
        children: "Instructions"
      }, void 0, !1, {
        fileName: "app/routes/index.tsx",
        lineNumber: 27,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "justify-center flex py-5",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
          className: "block",
          children: [
            "Please check out the",
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
              className: "text-amber-300 text-xl m-2 uppercase font-extrabold",
              href: "https://github.com/arthtyagi/serverless-userpics/blob/main/README.md",
              children: "readme"
            }, void 0, !1, {
              fileName: "app/routes/index.tsx",
              lineNumber: 31,
              columnNumber: 9
            }, this),
            "on GitHub for instructions on how to use this. (It's easy!)"
          ]
        }, void 0, !0, {
          fileName: "app/routes/index.tsx",
          lineNumber: 29,
          columnNumber: 7
        }, this)
      }, void 0, !1, {
        fileName: "app/routes/index.tsx",
        lineNumber: 28,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "justify-center flex",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
          className: "block",
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
            href: "https://www.arthtyagi.xyz/",
            rel: "noopener noreferrer",
            target: "_blank",
            className: "text-blue-300",
            children: "Created by @arthtyagi"
          }, void 0, !1, {
            fileName: "app/routes/index.tsx",
            lineNumber: 43,
            columnNumber: 7
          }, this)
        }, void 0, !1, {
          fileName: "app/routes/index.tsx",
          lineNumber: 42,
          columnNumber: 3
        }, this)
      }, void 0, !1, {
        fileName: "app/routes/index.tsx",
        lineNumber: 41,
        columnNumber: 3
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/routes/index.tsx",
    lineNumber: 3,
    columnNumber: 5
  }, this);
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { version: "dc4fbc30", entry: { module: "/build/entry.client-2LT2FSQG.js", imports: ["/build/_shared/chunk-5YA4JZ4X.js", "/build/_shared/chunk-IE366Y5W.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-KVUK7BDH.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/index": { id: "routes/index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/index-COF7MYRI.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, url: "/build/manifest-DC4FBC30.js" };

// server-entry-module:@remix-run/dev/server-build
var assetsBuildDirectory = "public/build", publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: routes_exports
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  assetsBuildDirectory,
  entry,
  publicPath,
  routes
});
//# sourceMappingURL=index.js.map
