(self.webpackChunkgatsby_starter_blog=self.webpackChunkgatsby_starter_blog||[]).push([[84],{4811:function(e){"use strict";var t=function(e,t){if("string"!=typeof e&&!Array.isArray(e))throw new TypeError("Expected the input to be `string | string[]`");t=Object.assign({pascalCase:!1},t);var a;return e=Array.isArray(e)?e.map((function(e){return e.trim()})).filter((function(e){return e.length})).join("-"):e.trim(),0===e.length?"":1===e.length?t.pascalCase?e.toUpperCase():e.toLowerCase():(e!==e.toLowerCase()&&(e=function(e){for(var t=!1,a=!1,r=!1,i=0;i<e.length;i++){var n=e[i];t&&/[a-zA-Z]/.test(n)&&n.toUpperCase()===n?(e=e.slice(0,i)+"-"+e.slice(i),t=!1,r=a,a=!0,i++):a&&r&&/[a-zA-Z]/.test(n)&&n.toLowerCase()===n?(e=e.slice(0,i-1)+"-"+e.slice(i-1),r=a,a=!1,t=!0):(t=n.toLowerCase()===n&&n.toUpperCase()!==n,r=a,a=n.toUpperCase()===n&&n.toLowerCase()!==n)}return e}(e)),e=e.replace(/^[_.\- ]+/,"").toLowerCase().replace(/[_.\- ]+(\w|$)/g,(function(e,t){return t.toUpperCase()})).replace(/\d+(\w|$)/g,(function(e){return e.toUpperCase()})),a=e,t.pascalCase?a.charAt(0).toUpperCase()+a.slice(1):a)};e.exports=t,e.exports.default=t},9230:function(e,t,a){"use strict";a.d(t,{L:function(){return g},M:function(){return E},P:function(){return w},S:function(){return A},_:function(){return s},a:function(){return o},b:function(){return c},g:function(){return d},h:function(){return l}});var r=a(7294),i=(a(4811),a(3384)),n=a.n(i);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},o.apply(this,arguments)}function s(e,t){if(null==e)return{};var a,r,i={},n=Object.keys(e);for(r=0;r<n.length;r++)t.indexOf(a=n[r])>=0||(i[a]=e[a]);return i}var l=function(){return"undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype};function c(e,t,a,r,i){return void 0===i&&(i={}),o({},a,{loading:r,shouldLoad:e,"data-main-image":"",style:o({},i,{opacity:t?1:0})})}function d(e,t,a,r,i,n,s,l){var c={};n&&(c.backgroundColor=n,"fixed"===a?(c.width=r,c.height=i,c.backgroundColor=n,c.position="relative"):("constrained"===a||"fullWidth"===a)&&(c.position="absolute",c.top=0,c.left=0,c.bottom=0,c.right=0)),s&&(c.objectFit=s),l&&(c.objectPosition=l);var d=o({},e,{"aria-hidden":!0,"data-placeholder-image":"",style:o({opacity:t?0:1,transition:"opacity 500ms linear"},c)});return d}var u,p=["children"],f=function(e){var t=e.layout,a=e.width,i=e.height;return"fullWidth"===t?r.createElement("div",{"aria-hidden":!0,style:{paddingTop:i/a*100+"%"}}):"constrained"===t?r.createElement("div",{style:{maxWidth:a,display:"block"}},r.createElement("img",{alt:"",role:"presentation","aria-hidden":"true",src:"data:image/svg+xml;charset=utf-8,%3Csvg height='"+i+"' width='"+a+"' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E",style:{maxWidth:"100%",display:"block",position:"static"}})):null},g=function(e){var t=e.children,a=s(e,p);return r.createElement(r.Fragment,null,r.createElement(f,o({},a)),t,null)},m=["src","srcSet","loading","alt","shouldLoad"],h=["fallback","sources","shouldLoad"],y=function(e){var t=e.src,a=e.srcSet,i=e.loading,n=e.alt,l=void 0===n?"":n,c=e.shouldLoad,d=s(e,m);return r.createElement("img",o({},d,{decoding:"async",loading:i,src:c?t:void 0,"data-src":c?void 0:t,srcSet:c?a:void 0,"data-srcset":c?void 0:a,alt:l}))},v=function(e){var t=e.fallback,a=e.sources,i=void 0===a?[]:a,n=e.shouldLoad,l=void 0===n||n,c=s(e,h),d=c.sizes||(null==t?void 0:t.sizes),u=r.createElement(y,o({},c,t,{sizes:d,shouldLoad:l}));return i.length?r.createElement("picture",null,i.map((function(e){var t=e.media,a=e.srcSet,i=e.type;return r.createElement("source",{key:t+"-"+i+"-"+a,type:i,media:t,srcSet:l?a:void 0,"data-srcset":l?void 0:a,sizes:d})})),u):u};y.propTypes={src:i.string.isRequired,alt:i.string.isRequired,sizes:i.string,srcSet:i.string,shouldLoad:i.bool},v.displayName="Picture",v.propTypes={alt:i.string.isRequired,shouldLoad:i.bool,fallback:i.exact({src:i.string.isRequired,srcSet:i.string,sizes:i.string}),sources:i.arrayOf(i.oneOfType([i.exact({media:i.string.isRequired,type:i.string,sizes:i.string,srcSet:i.string.isRequired}),i.exact({media:i.string,type:i.string.isRequired,sizes:i.string,srcSet:i.string.isRequired})]))};var b=["fallback"],w=function(e){var t=e.fallback,a=s(e,b);return t?r.createElement(v,o({},a,{fallback:{src:t},"aria-hidden":!0,alt:""})):r.createElement("div",o({},a))};w.displayName="Placeholder",w.propTypes={fallback:i.string,sources:null==(u=v.propTypes)?void 0:u.sources,alt:function(e,t,a){return e[t]?new Error("Invalid prop `"+t+"` supplied to `"+a+"`. Validation failed."):null}};var E=function(e){return r.createElement(r.Fragment,null,r.createElement(v,o({},e)),r.createElement("noscript",null,r.createElement(v,o({},e,{shouldLoad:!0}))))};E.displayName="MainImage",E.propTypes=v.propTypes;var C,L,T=function(e,t,a){for(var r=arguments.length,i=new Array(r>3?r-3:0),o=3;o<r;o++)i[o-3]=arguments[o];return e.alt||""===e.alt?n().string.apply(n(),[e,t,a].concat(i)):new Error('The "alt" prop is required in '+a+'. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html')},S={image:n().object.isRequired,alt:T},x=["as","image","style","backgroundColor","className","class","onStartLoad","onLoad","onError"],k=["style","className"],_=new Set,O=function(e){var t=e.as,i=void 0===t?"div":t,n=e.image,c=e.style,d=e.backgroundColor,u=e.className,p=e.class,f=e.onStartLoad,g=e.onLoad,m=e.onError,h=s(e,x),y=n.width,v=n.height,b=n.layout,w=function(e,t,a){var r={},i="gatsby-image-wrapper";return"fixed"===a?(r.width=e,r.height=t):"constrained"===a&&(i="gatsby-image-wrapper gatsby-image-wrapper-constrained"),{className:i,"data-gatsby-image-wrapper":"",style:r}}(y,v,b),E=w.style,T=w.className,S=s(w,k),O=(0,r.useRef)(),I=(0,r.useMemo)((function(){return JSON.stringify(n.images)}),[n.images]);p&&(u=p);var R=function(e,t,a){var r="";return"fullWidth"===e&&(r='<div aria-hidden="true" style="padding-top: '+a/t*100+'%;"></div>'),"constrained"===e&&(r='<div style="max-width: '+t+'px; display: block;"><img alt="" role="presentation" aria-hidden="true" src="data:image/svg+xml;charset=utf-8,%3Csvg height=\''+a+"' width='"+t+"' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E\" style=\"max-width: 100%; display: block; position: static;\"></div>"),r}(b,y,v);return(0,r.useEffect)((function(){C||(C=Promise.all([a.e(774),a.e(36)]).then(a.bind(a,9036)).then((function(e){var t=e.renderImageToString,a=e.swapPlaceholderImage;return L=t,{renderImageToString:t,swapPlaceholderImage:a}})));var e,t,r=O.current.querySelector("[data-gatsby-image-ssr]");return r&&l()?(r.complete?(null==f||f({wasCached:!0}),null==g||g({wasCached:!0}),setTimeout((function(){r.removeAttribute("data-gatsby-image-ssr")}),0)):document.addEventListener("load",(function e(){document.removeEventListener("load",e),null==f||f({wasCached:!0}),null==g||g({wasCached:!0}),setTimeout((function(){r.removeAttribute("data-gatsby-image-ssr")}),0)})),void _.add(I)):L&&_.has(I)?void 0:(C.then((function(a){var r=a.renderImageToString,i=a.swapPlaceholderImage;O.current.innerHTML=r(o({isLoading:!0,isLoaded:_.has(I),image:n},h)),_.has(I)||(e=requestAnimationFrame((function(){O.current&&(t=i(O.current,I,_,c,f,g,m))})))})),function(){e&&cancelAnimationFrame(e),t&&t()})}),[n]),(0,r.useLayoutEffect)((function(){_.has(I)&&L&&(O.current.innerHTML=L(o({isLoading:_.has(I),isLoaded:_.has(I),image:n},h)),null==f||f({wasCached:!0}),null==g||g({wasCached:!0}))}),[n]),(0,r.createElement)(i,o({},S,{style:o({},E,c,{backgroundColor:d}),className:T+(u?" "+u:""),ref:O,dangerouslySetInnerHTML:{__html:R},suppressHydrationWarning:!0}))},I=(0,r.memo)((function(e){return e.image?(0,r.createElement)(O,e):null}));I.propTypes=S,I.displayName="GatsbyImage";var R,q=["src","__imageData","__error","width","height","aspectRatio","tracedSVGOptions","placeholder","formats","quality","transformOptions","jpgOptions","pngOptions","webpOptions","avifOptions","blurredOptions"],N=function(e,t){for(var a=arguments.length,r=new Array(a>2?a-2:0),i=2;i<a;i++)r[i-2]=arguments[i];return"fullWidth"!==e.layout||"width"!==t&&"height"!==t||!e[t]?n().number.apply(n(),[e,t].concat(r)):new Error('"'+t+'" '+e[t]+" may not be passed when layout is fullWidth.")},P=new Set(["fixed","fullWidth","constrained"]),z={src:n().string.isRequired,alt:T,width:N,height:N,sizes:n().string,layout:function(e){if(void 0!==e.layout&&!P.has(e.layout))return new Error("Invalid value "+e.layout+'" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".')}},A=(R=I,function(e){var t=e.src,a=e.__imageData,i=e.__error,n=s(e,q);return i&&console.warn(i),a?r.createElement(R,o({image:a},n)):(console.warn("Image not loaded",t),null)});A.displayName="StaticImage",A.propTypes=z},4199:function(e,t,a){"use strict";var r=a(7029);function i(){}function n(){}n.resetWarningCache=i,e.exports=function(){function e(e,t,a,i,n,o){if(o!==r){var s=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}function t(){return e}e.isRequired=e;var a={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:n,resetWarningCache:i};return a.PropTypes=a,a}},3384:function(e,t,a){e.exports=a(4199)()},7029:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},8771:function(e,t,a){"use strict";var r=a(7294),i=a(1597),n=a(9230);t.Z=function(){var e,t,o=(0,i.useStaticQuery)("3257411868"),s=null===(e=o.site.siteMetadata)||void 0===e?void 0:e.author,l=null===(t=o.site.siteMetadata)||void 0===t?void 0:t.social;return r.createElement("div",{className:"bio"},r.createElement(n.S,{className:"bio-avatar",layout:"fixed",formats:["auto","webp","avif"],src:"../images/profile-pic.png",width:50,height:50,quality:95,alt:"Profile picture",__imageData:a(1550)}),(null==s?void 0:s.name)&&r.createElement("p",null,"Written by ",r.createElement("strong",null,s.name)," ",(null==s?void 0:s.summary)||null," ",r.createElement("a",{href:"https://twitter.com/"+((null==l?void 0:l.twitter)||"")},"You should follow them on Twitter")))}},1550:function(e){"use strict";e.exports=JSON.parse('{"layout":"fixed","backgroundColor":"#080818","images":{"fallback":{"src":"/dob-preview/static/7a76dacd9bf3489e5d336350c6dfeda0/e5610/profile-pic.png","srcSet":"/dob-preview/static/7a76dacd9bf3489e5d336350c6dfeda0/e5610/profile-pic.png 50w,\\n/dob-preview/static/7a76dacd9bf3489e5d336350c6dfeda0/e9b55/profile-pic.png 100w","sizes":"50px"},"sources":[{"srcSet":"/dob-preview/static/7a76dacd9bf3489e5d336350c6dfeda0/d4bf4/profile-pic.avif 50w,\\n/dob-preview/static/7a76dacd9bf3489e5d336350c6dfeda0/ee81f/profile-pic.avif 100w","type":"image/avif","sizes":"50px"},{"srcSet":"/dob-preview/static/7a76dacd9bf3489e5d336350c6dfeda0/3faea/profile-pic.webp 50w,\\n/dob-preview/static/7a76dacd9bf3489e5d336350c6dfeda0/6a679/profile-pic.webp 100w","type":"image/webp","sizes":"50px"}]},"width":50,"height":50}')}}]);
//# sourceMappingURL=cd7d5f864fc9e15ed8adef086269b0aeff617554-cf3b5cf0b48106bb0ae7.js.map