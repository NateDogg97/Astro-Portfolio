import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_D5GZteBz.mjs';
import { manifest } from './manifest_C9umBJAB.mjs';
import { onRequest } from './_noop-middleware.mjs';

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/api/sendemail.astro.mjs');
const _page2 = () => import('./pages/bundlebuilder.astro.mjs');
const _page3 = () => import('./pages/golfautobooker.astro.mjs');
const _page4 = () => import('./pages/instagramplugin.astro.mjs');
const _page5 = () => import('./pages/latesttemplate.astro.mjs');
const _page6 = () => import('./pages/relateditems.astro.mjs');
const _page7 = () => import('./pages/index.astro.mjs');

const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/api/sendEmail.ts", _page1],
    ["src/pages/bundleBuilder.astro", _page2],
    ["src/pages/golfAutoBooker.astro", _page3],
    ["src/pages/instagramPlugin.astro", _page4],
    ["src/pages/latestTemplate.astro", _page5],
    ["src/pages/relatedItems.astro", _page6],
    ["src/pages/index.astro", _page7]
]);
const serverIslandMap = new Map();

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: onRequest
});
const _args = {
    "middlewareSecret": "0ad40af3-3314-44dc-a329-a846506cd218",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
