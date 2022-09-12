"use strict";(self.webpackChunkgatsby_blog=self.webpackChunkgatsby_blog||[]).push([[203],{4811:function(e){var t=function(e,t){if("string"!=typeof e&&!Array.isArray(e))throw new TypeError("Expected the input to be `string | string[]`");t=Object.assign({pascalCase:!1},t);var n;return e=Array.isArray(e)?e.map((function(e){return e.trim()})).filter((function(e){return e.length})).join("-"):e.trim(),0===e.length?"":1===e.length?t.pascalCase?e.toUpperCase():e.toLowerCase():(e!==e.toLowerCase()&&(e=function(e){for(var t=!1,n=!1,r=!1,a=0;a<e.length;a++){var o=e[a];t&&/[a-zA-Z]/.test(o)&&o.toUpperCase()===o?(e=e.slice(0,a)+"-"+e.slice(a),t=!1,r=n,n=!0,a++):n&&r&&/[a-zA-Z]/.test(o)&&o.toLowerCase()===o?(e=e.slice(0,a-1)+"-"+e.slice(a-1),r=n,n=!1,t=!0):(t=o.toLowerCase()===o&&o.toUpperCase()!==o,r=n,n=o.toUpperCase()===o&&o.toLowerCase()!==o)}return e}(e)),e=e.replace(/^[_.\- ]+/,"").toLowerCase().replace(/[_.\- ]+(\w|$)/g,(function(e,t){return t.toUpperCase()})).replace(/\d+(\w|$)/g,(function(e){return e.toUpperCase()})),n=e,t.pascalCase?n.charAt(0).toUpperCase()+n.slice(1):n)};e.exports=t,e.exports.default=t},6296:function(e,t,n){n.d(t,{G:function(){return O},L:function(){return p},M:function(){return E},P:function(){return k},S:function(){return M},_:function(){return l},a:function(){return i},b:function(){return d},c:function(){return c},g:function(){return u},h:function(){return s}});var r=n(7294),a=(n(4811),n(5697)),o=n.n(a);function i(){return i=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i.apply(this,arguments)}function l(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t.indexOf(n=o[r])>=0||(a[n]=e[n]);return a}var s=function(){return"undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype};var c=function(e){var t;return function(e){var t,n;return Boolean(null==e||null==(t=e.images)||null==(n=t.fallback)?void 0:n.src)}(e)?e:function(e){return Boolean(null==e?void 0:e.gatsbyImageData)}(e)?e.gatsbyImageData:function(e){return Boolean(null==e?void 0:e.gatsbyImage)}(e)?e.gatsbyImage:null==e||null==(t=e.childImageSharp)?void 0:t.gatsbyImageData};function d(e,t,n,r,a){return void 0===a&&(a={}),i({},n,{loading:r,shouldLoad:e,"data-main-image":"",style:i({},a,{opacity:t?1:0})})}function u(e,t,n,r,a,o,l,s){var c={};o&&(c.backgroundColor=o,"fixed"===n?(c.width=r,c.height=a,c.backgroundColor=o,c.position="relative"):("constrained"===n||"fullWidth"===n)&&(c.position="absolute",c.top=0,c.left=0,c.bottom=0,c.right=0)),l&&(c.objectFit=l),s&&(c.objectPosition=s);var d=i({},e,{"aria-hidden":!0,"data-placeholder-image":"",style:i({opacity:t?0:1,transition:"opacity 500ms linear"},c)});return d}var m,g=["children"],f=function(e){var t=e.layout,n=e.width,a=e.height;return"fullWidth"===t?r.createElement("div",{"aria-hidden":!0,style:{paddingTop:a/n*100+"%"}}):"constrained"===t?r.createElement("div",{style:{maxWidth:n,display:"block"}},r.createElement("img",{alt:"",role:"presentation","aria-hidden":"true",src:"data:image/svg+xml;charset=utf-8,%3Csvg height='"+a+"' width='"+n+"' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E",style:{maxWidth:"100%",display:"block",position:"static"}})):null},p=function(e){var t=e.children,n=l(e,g);return r.createElement(r.Fragment,null,r.createElement(f,i({},n)),t,null)},h=["src","srcSet","loading","alt","shouldLoad"],y=["fallback","sources","shouldLoad"],v=function(e){var t=e.src,n=e.srcSet,a=e.loading,o=e.alt,s=void 0===o?"":o,c=e.shouldLoad,d=l(e,h);return r.createElement("img",i({},d,{decoding:"async",loading:a,src:c?t:void 0,"data-src":c?void 0:t,srcSet:c?n:void 0,"data-srcset":c?void 0:n,alt:s}))},b=function(e){var t=e.fallback,n=e.sources,a=void 0===n?[]:n,o=e.shouldLoad,s=void 0===o||o,c=l(e,y),d=c.sizes||(null==t?void 0:t.sizes),u=r.createElement(v,i({},c,t,{sizes:d,shouldLoad:s}));return a.length?r.createElement("picture",null,a.map((function(e){var t=e.media,n=e.srcSet,a=e.type;return r.createElement("source",{key:t+"-"+a+"-"+n,type:a,media:t,srcSet:s?n:void 0,"data-srcset":s?void 0:n,sizes:d})})),u):u};v.propTypes={src:a.string.isRequired,alt:a.string.isRequired,sizes:a.string,srcSet:a.string,shouldLoad:a.bool},b.displayName="Picture",b.propTypes={alt:a.string.isRequired,shouldLoad:a.bool,fallback:a.exact({src:a.string.isRequired,srcSet:a.string,sizes:a.string}),sources:a.arrayOf(a.oneOfType([a.exact({media:a.string.isRequired,type:a.string,sizes:a.string,srcSet:a.string.isRequired}),a.exact({media:a.string,type:a.string.isRequired,sizes:a.string,srcSet:a.string.isRequired})]))};var w=["fallback"],k=function(e){var t=e.fallback,n=l(e,w);return t?r.createElement(b,i({},n,{fallback:{src:t},"aria-hidden":!0,alt:""})):r.createElement("div",i({},n))};k.displayName="Placeholder",k.propTypes={fallback:a.string,sources:null==(m=b.propTypes)?void 0:m.sources,alt:function(e,t,n){return e[t]?new Error("Invalid prop `"+t+"` supplied to `"+n+"`. Validation failed."):null}};var E=function(e){return r.createElement(r.Fragment,null,r.createElement(b,i({},e)),r.createElement("noscript",null,r.createElement(b,i({},e,{shouldLoad:!0}))))};E.displayName="MainImage",E.propTypes=b.propTypes;var C,x,I=function(e,t,n){for(var r=arguments.length,a=new Array(r>3?r-3:0),i=3;i<r;i++)a[i-3]=arguments[i];return e.alt||""===e.alt?o().string.apply(o(),[e,t,n].concat(a)):new Error('The "alt" prop is required in '+n+'. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html')},_={image:o().object.isRequired,alt:I},L=["as","image","style","backgroundColor","className","class","onStartLoad","onLoad","onError"],S=["style","className"],N=new Set,T=function(e){var t=e.as,a=void 0===t?"div":t,o=e.image,c=e.style,d=e.backgroundColor,u=e.className,m=e.class,g=e.onStartLoad,f=e.onLoad,p=e.onError,h=l(e,L),y=o.width,v=o.height,b=o.layout,w=function(e,t,n){var r={},a="gatsby-image-wrapper";return"fixed"===n?(r.width=e,r.height=t):"constrained"===n&&(a="gatsby-image-wrapper gatsby-image-wrapper-constrained"),{className:a,"data-gatsby-image-wrapper":"",style:r}}(y,v,b),k=w.style,E=w.className,I=l(w,S),_=(0,r.useRef)(),T=(0,r.useMemo)((function(){return JSON.stringify(o.images)}),[o.images]);m&&(u=m);var O=function(e,t,n){var r="";return"fullWidth"===e&&(r='<div aria-hidden="true" style="padding-top: '+n/t*100+'%;"></div>'),"constrained"===e&&(r='<div style="max-width: '+t+'px; display: block;"><img alt="" role="presentation" aria-hidden="true" src="data:image/svg+xml;charset=utf-8,%3Csvg height=\''+n+"' width='"+t+"' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E\" style=\"max-width: 100%; display: block; position: static;\"></div>"),r}(b,y,v);return(0,r.useEffect)((function(){C||(C=Promise.all([n.e(774),n.e(989)]).then(n.bind(n,5989)).then((function(e){var t=e.renderImageToString,n=e.swapPlaceholderImage;return x=t,{renderImageToString:t,swapPlaceholderImage:n}})));var e,t,r=_.current.querySelector("[data-gatsby-image-ssr]");return r&&s()?(r.complete?(null==g||g({wasCached:!0}),null==f||f({wasCached:!0}),setTimeout((function(){r.removeAttribute("data-gatsby-image-ssr")}),0)):document.addEventListener("load",(function e(){document.removeEventListener("load",e),null==g||g({wasCached:!0}),null==f||f({wasCached:!0}),setTimeout((function(){r.removeAttribute("data-gatsby-image-ssr")}),0)})),void N.add(T)):x&&N.has(T)?void 0:(C.then((function(n){var r=n.renderImageToString,a=n.swapPlaceholderImage;_.current&&(_.current.innerHTML=r(i({isLoading:!0,isLoaded:N.has(T),image:o},h)),N.has(T)||(e=requestAnimationFrame((function(){_.current&&(t=a(_.current,T,N,c,g,f,p))}))))})),function(){e&&cancelAnimationFrame(e),t&&t()})}),[o]),(0,r.useLayoutEffect)((function(){N.has(T)&&x&&(_.current.innerHTML=x(i({isLoading:N.has(T),isLoaded:N.has(T),image:o},h)),null==g||g({wasCached:!0}),null==f||f({wasCached:!0}))}),[o]),(0,r.createElement)(a,i({},I,{style:i({},k,c,{backgroundColor:d}),className:E+(u?" "+u:""),ref:_,dangerouslySetInnerHTML:{__html:O},suppressHydrationWarning:!0}))},O=(0,r.memo)((function(e){return e.image?(0,r.createElement)(T,e):null}));O.propTypes=_,O.displayName="GatsbyImage";var z,q=["src","__imageData","__error","width","height","aspectRatio","tracedSVGOptions","placeholder","formats","quality","transformOptions","jpgOptions","pngOptions","webpOptions","avifOptions","blurredOptions","breakpoints","outputPixelDensities"],R=function(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),a=2;a<n;a++)r[a-2]=arguments[a];return"fullWidth"!==e.layout||"width"!==t&&"height"!==t||!e[t]?o().number.apply(o(),[e,t].concat(r)):new Error('"'+t+'" '+e[t]+" may not be passed when layout is fullWidth.")},A=new Set(["fixed","fullWidth","constrained"]),W={src:o().string.isRequired,alt:I,width:R,height:R,sizes:o().string,layout:function(e){if(void 0!==e.layout&&!A.has(e.layout))return new Error("Invalid value "+e.layout+'" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".')}},M=(z=O,function(e){var t=e.src,n=e.__imageData,a=e.__error,o=l(e,q);return a&&console.warn(a),n?r.createElement(z,i({image:n},o)):(console.warn("Image not loaded",t),null)});M.displayName="StaticImage",M.propTypes=W},3287:function(e,t,n){n.d(t,{Z:function(){return x}});var r=n(7294),a=n(3494),o=n(1597),i=n(9499),l=a.default.h1.withConfig({displayName:"header__SiteTitle",componentId:"sc-1wuh3t8-0"})(["font-size:2rem;color:gray;font-weight:700;margin:1rem auto 1rem 0;display:flex;align-items:center;justify-content:space-between;"]),s=(0,a.default)(o.rU).withConfig({displayName:"header__SiteTitleLink",componentId:"sc-1wuh3t8-1"})(["text-decoration:none;color:gray;font-family:var(--main-font);"]),c=(0,a.default)(o.rU).withConfig({displayName:"header__SiteLogo",componentId:"sc-1wuh3t8-2"})(["display:flex;flex-direction:column;padding-right:7px;"]),d=a.default.ul.withConfig({displayName:"header__NavLinks",componentId:"sc-1wuh3t8-3"})(["display:flex;list-style:none;padding-left:0;"]),u=a.default.li.withConfig({displayName:"header__NavItem",componentId:"sc-1wuh3t8-4"})(["margin:0 2rem 0 0;&:first-child{padding-left:0;}&::after{content:'|';margin:0 0 0 2rem;white-space:pre;color:var(--font-color);pointer-events:none;}"]),m=(0,a.default)(o.rU).withConfig({displayName:"header__NavLink",componentId:"sc-1wuh3t8-5"})(["color:",";font-family:var(--main-font);text-decoration:none;"],(function(e){return e.path===e.to?"var(--font-color)":"var(--primary-color)"})),g=a.default.div.withConfig({displayName:"header__HeaderElement",componentId:"sc-1wuh3t8-6"})(["border-bottom:1px solid var(--border-color);position:sticky;width:100%;top:0;z-index:2;"]),f=a.default.header.withConfig({displayName:"header__HeaderLinks",componentId:"sc-1wuh3t8-7"})(["margin:auto;max-width:1000px;margin-top:1rem;display:flex;align-content:center;flex-direction:row;background-color:var(--background-color);z-index:1;align-items:baseline;"]),p=a.default.div.withConfig({displayName:"header__ToggleColorTheme",componentId:"sc-1wuh3t8-8"})(["font-family:var(--main-font);width:2em;cursor:pointer;"]),h=function(){var e=(0,r.useState)("dark"),t=e[0],n=e[1];(0,r.useEffect)((function(){n(localStorage.getItem("mode")||"dark"),document.body.className=(localStorage.getItem("mode")||"light")+"-mode"}),[t]);var a=(0,o.K2)("2710306603");return r.createElement(g,null,r.createElement(f,null,r.createElement(l,null,r.createElement(c,{to:"/"},r.createElement("img",{src:"/lotus.png",alt:"icon",width:40})),r.createElement(s,{to:"/"},a.site.siteMetadata.title)),r.createElement("nav",null,r.createElement(d,null,a.site.siteMetadata.navigation.map((function(e,t){return r.createElement(u,{key:t},r.createElement(m,{to:e.url,path:i.globalHistory.location.pathname},e.name))})))),r.createElement(p,{onClick:function(){var e=localStorage.getItem("mode")||"light";"light"===e?(localStorage.setItem("mode","dark"),n("dark"),document.body.className="dark-mode"):"dark"===e&&(localStorage.setItem("mode","light"),n("light"),document.body.className="light-mode")}},"dark"===t?"Dark":"Light")))},y={fonts:{main:"Noto Sans KR, Noto Sans CJK KR, arial, 돋움, Dotum, Tahoma, Geneva, sans-serif",code:"Source Code Pro, monospace"},colors:{light:{text:"black",content:"#555555",link:"#a143e1",background:"#f0f0f0",border:"black",primary:"gray",heading:"black",button:"white"},dark:{text:"white",content:"#bbbbbb",link:"#9f64b5",background:"#222222",border:"#eeeeee",primary:"gray",heading:"white",button:"#444444"}}},v=a.default.div.withConfig({displayName:"theme__Style",componentId:"sc-1i0ezi1-0"})(["margin:0;color:var(--font-color);background:var(--background-color);"]),b=(0,a.createGlobalStyle)([":root{--main-font:",";--code-font:",";}.light-mode{--font-color:",";--content-color:",";--link-color:",";--background-color:",";--border-color:",";--primary-color:",";--heading-color:",";--button-color:",";}.dark-mode{--font-color:",";--content-color:",";--link-color:",";--background-color:",";--border-color:",";--primary-color:",";--heading-color:",";--button-color:",";}body{margin:0;background-color:var(--background-color);}html{}"],(function(e){return e.fonts.main}),(function(e){return e.fonts.code}),(function(e){return e.colors.light.text}),(function(e){return e.colors.light.content}),(function(e){return e.colors.light.link}),(function(e){return e.colors.light.background}),(function(e){return e.colors.light.border}),(function(e){return e.colors.light.primary}),(function(e){return e.colors.light.heading}),(function(e){return e.colors.light.button}),(function(e){return e.colors.dark.text}),(function(e){return e.colors.dark.content}),(function(e){return e.colors.dark.link}),(function(e){return e.colors.dark.background}),(function(e){return e.colors.dark.border}),(function(e){return e.colors.dark.primary}),(function(e){return e.colors.dark.heading}),(function(e){return e.colors.dark.button})),w=function(e){var t=e.theme,n=e.children,a=localStorage.getItem("mode")||"light";return document.body.className=a+"-mode",r.createElement(v,t,r.createElement(b,t),n)},k=a.default.div.withConfig({displayName:"layout__Container",componentId:"sc-gg84aa-0"})(["margin:auto;min-height:100vh;"]),E=a.default.h1.withConfig({displayName:"layout__Heading",componentId:"sc-gg84aa-1"})(["color:var(--font-color);font-family:var(--main-font);"]),C=a.default.main.withConfig({displayName:"layout__Main",componentId:"sc-gg84aa-2"})(["max-width:","px;margin:auto;font-family:var(--main-font);"],(function(e){var t;return null!==(t=e.maxWidth)&&void 0!==t?t:"1000"})),x=function(e){var t=e.pageTitle,n=e.maxWidth,a=e.aside,o=e.children;return r.createElement(w,{theme:y},r.createElement(k,null,r.createElement(h,null),r.createElement(C,{maxWidth:n},r.createElement(E,null,t),o),a&&r.createElement(a.node,a.props)))}},4001:function(e,t,n){var r=n(7294),a=n(1597);t.Z=function(e){var t=e.title,n=(0,a.K2)("3159585216");return r.createElement("title",null,t," - ",n.site.siteMetadata.title)}}}]);
//# sourceMappingURL=20c5a0a1ffd575fe44e1b3ae79827f2f56ec630c-be0ab341c3f4af1a16b3.js.map