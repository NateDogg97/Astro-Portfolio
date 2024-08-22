import 'cookie';
import 'kleur/colors';
import './chunks/astro-designed-error-pages_9---wHCw.mjs';
import { e as decodeKey } from './chunks/astro/server_B8loHF3v.mjs';
import 'clsx';
import { compile } from 'path-to-regexp';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getRouteGenerator(segments, addTrailingSlash) {
  const template = segments.map((segment) => {
    return "/" + segment.map((part) => {
      if (part.spread) {
        return `:${part.content.slice(3)}(.*)?`;
      } else if (part.dynamic) {
        return `:${part.content}`;
      } else {
        return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
    }).join("");
  }).join("");
  let trailing = "";
  if (addTrailingSlash === "always" && segments.length) {
    trailing = "/";
  }
  const toPath = compile(template + trailing);
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    const path = toPath(sanitizedParams);
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware(_, next) {
      return next();
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///Users/nathaniel/Documents/CodingChallenges/Astro-Portfolio/","adapterName":"@astrojs/vercel/serverless","routes":[{"file":"bundleBuilder/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/bundlebuilder","isIndex":false,"type":"page","pattern":"^\\/bundleBuilder\\/?$","segments":[[{"content":"bundleBuilder","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/bundleBuilder.astro","pathname":"/bundleBuilder","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"golfAutoBooker/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/golfautobooker","isIndex":false,"type":"page","pattern":"^\\/golfAutoBooker\\/?$","segments":[[{"content":"golfAutoBooker","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/golfAutoBooker.astro","pathname":"/golfAutoBooker","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"instagramPlugin/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/instagramplugin","isIndex":false,"type":"page","pattern":"^\\/instagramPlugin\\/?$","segments":[[{"content":"instagramPlugin","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/instagramPlugin.astro","pathname":"/instagramPlugin","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"latestTemplate/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/latesttemplate","isIndex":false,"type":"page","pattern":"^\\/latestTemplate\\/?$","segments":[[{"content":"latestTemplate","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/latestTemplate.astro","pathname":"/latestTemplate","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"relatedItems/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/relateditems","isIndex":false,"type":"page","pattern":"^\\/relatedItems\\/?$","segments":[[{"content":"relatedItems","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/relatedItems.astro","pathname":"/relatedItems","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/sendemail","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/sendEmail\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"sendEmail","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/sendEmail.ts","pathname":"/api/sendEmail","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/Users/nathaniel/Documents/CodingChallenges/Astro-Portfolio/src/pages/bundleBuilder.astro",{"propagation":"none","containsHead":true}],["/Users/nathaniel/Documents/CodingChallenges/Astro-Portfolio/src/pages/golfAutoBooker.astro",{"propagation":"none","containsHead":true}],["/Users/nathaniel/Documents/CodingChallenges/Astro-Portfolio/src/pages/instagramPlugin.astro",{"propagation":"none","containsHead":true}],["/Users/nathaniel/Documents/CodingChallenges/Astro-Portfolio/src/pages/latestTemplate.astro",{"propagation":"none","containsHead":true}],["/Users/nathaniel/Documents/CodingChallenges/Astro-Portfolio/src/pages/relatedItems.astro",{"propagation":"none","containsHead":true}],["/Users/nathaniel/Documents/CodingChallenges/Astro-Portfolio/src/pages/index.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var i=t=>{let e=async()=>{await(await t())()};\"requestIdleCallback\"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000noop-middleware":"_noop-middleware.mjs","\u0000@astro-page:src/pages/api/sendEmail@_@ts":"pages/api/sendemail.astro.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astro-page:src/pages/bundleBuilder@_@astro":"pages/bundlebuilder.astro.mjs","\u0000@astro-page:src/pages/golfAutoBooker@_@astro":"pages/golfautobooker.astro.mjs","\u0000@astro-page:src/pages/instagramPlugin@_@astro":"pages/instagramplugin.astro.mjs","\u0000@astro-page:src/pages/latestTemplate@_@astro":"pages/latesttemplate.astro.mjs","\u0000@astro-page:src/pages/relatedItems@_@astro":"pages/relateditems.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","/Users/nathaniel/Documents/CodingChallenges/Astro-Portfolio/node_modules/astro/dist/env/setup.js":"chunks/astro/env-setup_Cr6XTFvb.mjs","\u0000@astrojs-manifest":"manifest_DjQc3KA_.mjs","/Users/nathaniel/Documents/CodingChallenges/Astro-Portfolio/src/components/sections/Contact.svelte":"_astro/Contact.CtnkCpSX.js","@astrojs/svelte/client.js":"_astro/client.Cx1FBVJX.js","/Users/nathaniel/Documents/CodingChallenges/Astro-Portfolio/src/components/ui/TooltipButton.svelte":"_astro/TooltipButton.CJHA7SWa.js","/Users/nathaniel/Documents/CodingChallenges/Astro-Portfolio/src/components/sections/Hero.svelte":"_astro/Hero.Cd3RoiBy.js","/Users/nathaniel/Documents/CodingChallenges/Astro-Portfolio/src/components/ui/Navbar.svelte":"_astro/Navbar.s2sB_1OK.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/autobooker4.DJp0S2hS.webp","/_astro/autobooker1.ATnkl2uI.webp","/_astro/autobooker3.DSxwnn8P.webp","/_astro/autobooker2.BvEBirg7.webp","/_astro/instagram1.Da4Q1NsQ.webp","/_astro/instagram3.BaeCXlfU.webp","/_astro/instagram4.BtFh87S_.webp","/_astro/instagram2.CtkiPUis.webp","/_astro/relateditems1.Ds6V3F0i.webp","/_astro/relateditems4.BhH0EWqR.webp","/_astro/relateditems2.BB79zL5d.webp","/_astro/relateditems3.CdeXrO6L.webp","/_astro/luxurytemplate2.DWpZWJwA.webp","/_astro/luxurytemplate4.B71MPsJE.webp","/_astro/bundlebuilder1.Dvd84r-D.webp","/_astro/bundlebuilder3.CFrVG9ul.webp","/_astro/bundlebuilder2.DtT_uklf.webp","/_astro/luxurytemplate3.DgRglOG8.webp","/_astro/luxurytemplate1.B5X6wpLl.webp","/_astro/bundlebuilder4.DNszW0cO.webp","/_astro/about_me_desktop.T2OoRRDX.webp","/_astro/about_me_mobile.CUiWatkd.webp","/_astro/bundleBuilder.CNQldI6U.css","/_astro/bundleBuilder.C3ND4WIu.css","/about_me_desktop.webp","/about_me_mobile.webp","/autobooker1.webp","/autobooker2.webp","/autobooker3.webp","/autobooker4.webp","/bundlebuilder1.webp","/bundlebuilder2.webp","/bundlebuilder3.webp","/bundlebuilder4.webp","/favicon.svg","/global.css","/instagram1.webp","/instagram2.webp","/instagram3.webp","/instagram4.webp","/luxurytemplate1.webp","/luxurytemplate2.webp","/luxurytemplate3.webp","/luxurytemplate4.webp","/material-arrows-more-up.svg","/nathaniel-mays-resume.pdf","/relateditems1.webp","/relateditems2.webp","/relateditems3.webp","/relateditems4.webp","/stars-bg.svg","/stars-copy.svg","/_astro/Contact.CtnkCpSX.js","/_astro/Hero.Cd3RoiBy.js","/_astro/Navbar.s2sB_1OK.js","/_astro/TooltipButton.CJHA7SWa.js","/_astro/bundleBuilder.Bqiqdr2h.css","/_astro/bundleBuilder.CCra9y1l.css","/_astro/client.Cx1FBVJX.js","/_astro/index.D25B0294.css","/_astro/index.kCl_MdRb.js","/bundleBuilder/index.html","/golfAutoBooker/index.html","/instagramPlugin/index.html","/latestTemplate/index.html","/relatedItems/index.html","/index.html"],"buildFormat":"directory","checkOrigin":false,"serverIslandNameMap":[],"key":"ipO3TgdKkFMxHgRk073SDtXq/YFXxM2m/5ucJLRwaQY=","experimentalEnvGetSecretEnabled":false});

export { manifest };
