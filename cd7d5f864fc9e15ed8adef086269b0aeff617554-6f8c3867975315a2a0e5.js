(self.webpackChunkgatsby_starter_blog=self.webpackChunkgatsby_starter_blog||[]).push([[84],{4811:function(e){"use strict";var t=function(e,t){if("string"!=typeof e&&!Array.isArray(e))throw new TypeError("Expected the input to be `string | string[]`");t=Object.assign({pascalCase:!1},t);var r;return e=Array.isArray(e)?e.map((function(e){return e.trim()})).filter((function(e){return e.length})).join("-"):e.trim(),0===e.length?"":1===e.length?t.pascalCase?e.toUpperCase():e.toLowerCase():(e!==e.toLowerCase()&&(e=function(e){for(var t=!1,r=!1,a=!1,i=0;i<e.length;i++){var n=e[i];t&&/[a-zA-Z]/.test(n)&&n.toUpperCase()===n?(e=e.slice(0,i)+"-"+e.slice(i),t=!1,a=r,r=!0,i++):r&&a&&/[a-zA-Z]/.test(n)&&n.toLowerCase()===n?(e=e.slice(0,i-1)+"-"+e.slice(i-1),a=r,r=!1,t=!0):(t=n.toLowerCase()===n&&n.toUpperCase()!==n,a=r,r=n.toUpperCase()===n&&n.toLowerCase()!==n)}return e}(e)),e=e.replace(/^[_.\- ]+/,"").toLowerCase().replace(/[_.\- ]+(\w|$)/g,(function(e,t){return t.toUpperCase()})).replace(/\d+(\w|$)/g,(function(e){return e.toUpperCase()})),r=e,t.pascalCase?r.charAt(0).toUpperCase()+r.slice(1):r)};e.exports=t,e.exports.default=t},9230:function(e,t,r){"use strict";r.d(t,{L:function(){return g},M:function(){return E},P:function(){return w},S:function(){return A},_:function(){return s},a:function(){return o},b:function(){return c},g:function(){return d},h:function(){return l}});var a=r(7294),i=(r(4811),r(3384)),n=r.n(i);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},o.apply(this,arguments)}function s(e,t){if(null==e)return{};var r,a,i={},n=Object.keys(e);for(a=0;a<n.length;a++)t.indexOf(r=n[a])>=0||(i[r]=e[r]);return i}var l=function(){return"undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype};function c(e,t,r,a,i){return void 0===i&&(i={}),o({},r,{loading:a,shouldLoad:e,"data-main-image":"",style:o({},i,{opacity:t?1:0})})}function d(e,t,r,a,i,n,s,l){var c={};n&&(c.backgroundColor=n,"fixed"===r?(c.width=a,c.height=i,c.backgroundColor=n,c.position="relative"):("constrained"===r||"fullWidth"===r)&&(c.position="absolute",c.top=0,c.left=0,c.bottom=0,c.right=0)),s&&(c.objectFit=s),l&&(c.objectPosition=l);var d=o({},e,{"aria-hidden":!0,"data-placeholder-image":"",style:o({opacity:t?0:1,transition:"opacity 500ms linear"},c)});return d}var u,p=["children"],f=function(e){var t=e.layout,r=e.width,i=e.height;return"fullWidth"===t?a.createElement("div",{"aria-hidden":!0,style:{paddingTop:i/r*100+"%"}}):"constrained"===t?a.createElement("div",{style:{maxWidth:r,display:"block"}},a.createElement("img",{alt:"",role:"presentation","aria-hidden":"true",src:"data:image/svg+xml;charset=utf-8,%3Csvg height='"+i+"' width='"+r+"' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E",style:{maxWidth:"100%",display:"block",position:"static"}})):null},g=function(e){var t=e.children,r=s(e,p);return a.createElement(a.Fragment,null,a.createElement(f,o({},r)),t,null)},m=["src","srcSet","loading","alt","shouldLoad"],h=["fallback","sources","shouldLoad"],y=function(e){var t=e.src,r=e.srcSet,i=e.loading,n=e.alt,l=void 0===n?"":n,c=e.shouldLoad,d=s(e,m);return a.createElement("img",o({},d,{decoding:"async",loading:i,src:c?t:void 0,"data-src":c?void 0:t,srcSet:c?r:void 0,"data-srcset":c?void 0:r,alt:l}))},v=function(e){var t=e.fallback,r=e.sources,i=void 0===r?[]:r,n=e.shouldLoad,l=void 0===n||n,c=s(e,h),d=c.sizes||(null==t?void 0:t.sizes),u=a.createElement(y,o({},c,t,{sizes:d,shouldLoad:l}));return i.length?a.createElement("picture",null,i.map((function(e){var t=e.media,r=e.srcSet,i=e.type;return a.createElement("source",{key:t+"-"+i+"-"+r,type:i,media:t,srcSet:l?r:void 0,"data-srcset":l?void 0:r,sizes:d})})),u):u};y.propTypes={src:i.string.isRequired,alt:i.string.isRequired,sizes:i.string,srcSet:i.string,shouldLoad:i.bool},v.displayName="Picture",v.propTypes={alt:i.string.isRequired,shouldLoad:i.bool,fallback:i.exact({src:i.string.isRequired,srcSet:i.string,sizes:i.string}),sources:i.arrayOf(i.oneOfType([i.exact({media:i.string.isRequired,type:i.string,sizes:i.string,srcSet:i.string.isRequired}),i.exact({media:i.string,type:i.string.isRequired,sizes:i.string,srcSet:i.string.isRequired})]))};var b=["fallback"],w=function(e){var t=e.fallback,r=s(e,b);return t?a.createElement(v,o({},r,{fallback:{src:t},"aria-hidden":!0,alt:""})):a.createElement("div",o({},r))};w.displayName="Placeholder",w.propTypes={fallback:i.string,sources:null==(u=v.propTypes)?void 0:u.sources,alt:function(e,t,r){return e[t]?new Error("Invalid prop `"+t+"` supplied to `"+r+"`. Validation failed."):null}};var E=function(e){return a.createElement(a.Fragment,null,a.createElement(v,o({},e)),a.createElement("noscript",null,a.createElement(v,o({},e,{shouldLoad:!0}))))};E.displayName="MainImage",E.propTypes=v.propTypes;var C,L,T=function(e,t,r){for(var a=arguments.length,i=new Array(a>3?a-3:0),o=3;o<a;o++)i[o-3]=arguments[o];return e.alt||""===e.alt?n().string.apply(n(),[e,t,r].concat(i)):new Error('The "alt" prop is required in '+r+'. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html')},S={image:n().object.isRequired,alt:T},x=["as","image","style","backgroundColor","className","class","onStartLoad","onLoad","onError"],k=["style","className"],_=new Set,O=function(e){var t=e.as,i=void 0===t?"div":t,n=e.image,c=e.style,d=e.backgroundColor,u=e.className,p=e.class,f=e.onStartLoad,g=e.onLoad,m=e.onError,h=s(e,x),y=n.width,v=n.height,b=n.layout,w=function(e,t,r){var a={},i="gatsby-image-wrapper";return"fixed"===r?(a.width=e,a.height=t):"constrained"===r&&(i="gatsby-image-wrapper gatsby-image-wrapper-constrained"),{className:i,"data-gatsby-image-wrapper":"",style:a}}(y,v,b),E=w.style,T=w.className,S=s(w,k),O=(0,a.useRef)(),I=(0,a.useMemo)((function(){return JSON.stringify(n.images)}),[n.images]);p&&(u=p);var R=function(e,t,r){var a="";return"fullWidth"===e&&(a='<div aria-hidden="true" style="padding-top: '+r/t*100+'%;"></div>'),"constrained"===e&&(a='<div style="max-width: '+t+'px; display: block;"><img alt="" role="presentation" aria-hidden="true" src="data:image/svg+xml;charset=utf-8,%3Csvg height=\''+r+"' width='"+t+"' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E\" style=\"max-width: 100%; display: block; position: static;\"></div>"),a}(b,y,v);return(0,a.useEffect)((function(){C||(C=Promise.all([r.e(774),r.e(36)]).then(r.bind(r,9036)).then((function(e){var t=e.renderImageToString,r=e.swapPlaceholderImage;return L=t,{renderImageToString:t,swapPlaceholderImage:r}})));var e,t,a=O.current.querySelector("[data-gatsby-image-ssr]");return a&&l()?(a.complete?(null==f||f({wasCached:!0}),null==g||g({wasCached:!0}),setTimeout((function(){a.removeAttribute("data-gatsby-image-ssr")}),0)):document.addEventListener("load",(function e(){document.removeEventListener("load",e),null==f||f({wasCached:!0}),null==g||g({wasCached:!0}),setTimeout((function(){a.removeAttribute("data-gatsby-image-ssr")}),0)})),void _.add(I)):L&&_.has(I)?void 0:(C.then((function(r){var a=r.renderImageToString,i=r.swapPlaceholderImage;O.current.innerHTML=a(o({isLoading:!0,isLoaded:_.has(I),image:n},h)),_.has(I)||(e=requestAnimationFrame((function(){O.current&&(t=i(O.current,I,_,c,f,g,m))})))})),function(){e&&cancelAnimationFrame(e),t&&t()})}),[n]),(0,a.useLayoutEffect)((function(){_.has(I)&&L&&(O.current.innerHTML=L(o({isLoading:_.has(I),isLoaded:_.has(I),image:n},h)),null==f||f({wasCached:!0}),null==g||g({wasCached:!0}))}),[n]),(0,a.createElement)(i,o({},S,{style:o({},E,c,{backgroundColor:d}),className:T+(u?" "+u:""),ref:O,dangerouslySetInnerHTML:{__html:R},suppressHydrationWarning:!0}))},I=(0,a.memo)((function(e){return e.image?(0,a.createElement)(O,e):null}));I.propTypes=S,I.displayName="GatsbyImage";var R,q=["src","__imageData","__error","width","height","aspectRatio","tracedSVGOptions","placeholder","formats","quality","transformOptions","jpgOptions","pngOptions","webpOptions","avifOptions","blurredOptions"],N=function(e,t){for(var r=arguments.length,a=new Array(r>2?r-2:0),i=2;i<r;i++)a[i-2]=arguments[i];return"fullWidth"!==e.layout||"width"!==t&&"height"!==t||!e[t]?n().number.apply(n(),[e,t].concat(a)):new Error('"'+t+'" '+e[t]+" may not be passed when layout is fullWidth.")},P=new Set(["fixed","fullWidth","constrained"]),z={src:n().string.isRequired,alt:T,width:N,height:N,sizes:n().string,layout:function(e){if(void 0!==e.layout&&!P.has(e.layout))return new Error("Invalid value "+e.layout+'" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".')}},A=(R=I,function(e){var t=e.src,r=e.__imageData,i=e.__error,n=s(e,q);return i&&console.warn(i),r?a.createElement(R,o({image:r},n)):(console.warn("Image not loaded",t),null)});A.displayName="StaticImage",A.propTypes=z},4199:function(e,t,r){"use strict";var a=r(7029);function i(){}function n(){}n.resetWarningCache=i,e.exports=function(){function e(e,t,r,i,n,o){if(o!==a){var s=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}function t(){return e}e.isRequired=e;var r={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:n,resetWarningCache:i};return r.PropTypes=r,r}},3384:function(e,t,r){e.exports=r(4199)()},7029:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},8771:function(e,t,r){"use strict";var a=r(7294),i=r(1597),n=r(9230);t.Z=function(){var e,t,o=(0,i.useStaticQuery)("3257411868"),s=null===(e=o.site.siteMetadata)||void 0===e?void 0:e.author,l=null===(t=o.site.siteMetadata)||void 0===t?void 0:t.social;return a.createElement("div",{className:"bio"},a.createElement(n.S,{className:"bio-avatar",layout:"fixed",formats:["auto","webp","avif"],src:"../images/profile-pic.png",width:50,height:50,quality:95,alt:"Profile picture",__imageData:r(1550)}),(null==s?void 0:s.name)&&a.createElement("p",null,"Written by ",a.createElement("strong",null,s.name)," ",(null==s?void 0:s.summary)||null," ",a.createElement("a",{href:"https://twitter.com/"+((null==l?void 0:l.twitter)||"")},"You should follow them on Twitter")))}},1550:function(e){"use strict";e.exports=JSON.parse('{"layout":"fixed","backgroundColor":"#f8f8f8","images":{"fallback":{"src":"/dob-preview-2/static/6dacf7b2c4db85249eda1745ffb570ed/e5610/profile-pic.png","srcSet":"/dob-preview-2/static/6dacf7b2c4db85249eda1745ffb570ed/e5610/profile-pic.png 50w,\\n/dob-preview-2/static/6dacf7b2c4db85249eda1745ffb570ed/e9b55/profile-pic.png 100w","sizes":"50px"},"sources":[{"srcSet":"/dob-preview-2/static/6dacf7b2c4db85249eda1745ffb570ed/d4bf4/profile-pic.avif 50w,\\n/dob-preview-2/static/6dacf7b2c4db85249eda1745ffb570ed/ee81f/profile-pic.avif 100w","type":"image/avif","sizes":"50px"},{"srcSet":"/dob-preview-2/static/6dacf7b2c4db85249eda1745ffb570ed/3faea/profile-pic.webp 50w,\\n/dob-preview-2/static/6dacf7b2c4db85249eda1745ffb570ed/6a679/profile-pic.webp 100w","type":"image/webp","sizes":"50px"}]},"width":50,"height":50}')}}]);
//# sourceMappingURL=cd7d5f864fc9e15ed8adef086269b0aeff617554-6f8c3867975315a2a0e5.js.map