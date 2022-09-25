import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration
} from "/build/_shared/chunk-5YA4JZ4X.js";
import {
  __toESM,
  require_jsx_dev_runtime
} from "/build/_shared/chunk-IE366Y5W.js";

// app/styles/app.css
var app_default = "/build/_assets/app-ERQGQR4T.css";

// app/root.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
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
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Meta, {}, void 0, false, {
            fileName: "app/root.tsx",
            lineNumber: 26,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Links, {}, void 0, false, {
            fileName: "app/root.tsx",
            lineNumber: 27,
            columnNumber: 9
          }, this)
        ]
      }, void 0, true, {
        fileName: "app/root.tsx",
        lineNumber: 25,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("body", {
        className: "h-full bg-black text-white font-mono",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Outlet, {}, void 0, false, {
            fileName: "app/root.tsx",
            lineNumber: 30,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ScrollRestoration, {}, void 0, false, {
            fileName: "app/root.tsx",
            lineNumber: 31,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Scripts, {}, void 0, false, {
            fileName: "app/root.tsx",
            lineNumber: 32,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(LiveReload, {}, void 0, false, {
            fileName: "app/root.tsx",
            lineNumber: 33,
            columnNumber: 9
          }, this)
        ]
      }, void 0, true, {
        fileName: "app/root.tsx",
        lineNumber: 29,
        columnNumber: 7
      }, this)
    ]
  }, void 0, true, {
    fileName: "app/root.tsx",
    lineNumber: 24,
    columnNumber: 5
  }, this);
}
export {
  App as default,
  links,
  meta
};
//# sourceMappingURL=/build/root-BDNTADHK.js.map
