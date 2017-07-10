/*

Modernizr 3.5.0
Source: https://github.com/modernizr/modernizr

Copyright 2017
License: http://opensource.org/licenses/MIT

Build: https://modernizr.com/download/?-csstransforms3d-csstransitions-notification-touchevents-prefixed

*/

!function(e,t,n){function r(e,t){return typeof e===t}function i(){var e,t,n,i,o,s,a;for(var u in g)if(g.hasOwnProperty(u)){if(e=[],t=g[u],t.name&&(e.push(t.name.toLowerCase()),t.options&&t.options.aliases&&t.options.aliases.length))for(n=0;n<t.options.aliases.length;n++)e.push(t.options.aliases[n].toLowerCase());for(i=r(t.fn,"function")?t.fn():t.fn,o=0;o<e.length;o++)s=e[o],a=s.split("."),1===a.length?Modernizr[a[0]]=i:(!Modernizr[a[0]]||Modernizr[a[0]]instanceof Boolean||(Modernizr[a[0]]=new Boolean(Modernizr[a[0]])),Modernizr[a[0]][a[1]]=i),S.push((i?"":"no-")+a.join("-"))}}function o(e){return e.replace(/([a-z])-([a-z])/g,function(e,t,n){return t+n.toUpperCase()}).replace(/^-/,"")}function s(e,t){return!!~(""+e).indexOf(t)}function a(e,t){return function(){return e.apply(t,arguments)}}function u(e,t,n){var i;for(var o in e)if(e[o]in t)return n===!1?e[o]:(i=t[e[o]],r(i,"function")?a(i,n||t):i);return!1}function f(){return"function"!=typeof t.createElement?t.createElement(arguments[0]):N?t.createElementNS.call(t,"http://www.w3.org/2000/svg",arguments[0]):t.createElement.apply(t,arguments)}function l(){var e=t.body;return e||(e=f(N?"svg":"body"),e.fake=!0),e}function p(e,n,r,i){var o,s,a,u,p="modernizr",d=f("div"),c=l();if(parseInt(r,10))for(;r--;)a=f("div"),a.id=i?i[r]:p+(r+1),d.appendChild(a);return o=f("style"),o.type="text/css",o.id="s"+p,(c.fake?c:d).appendChild(o),c.appendChild(d),o.styleSheet?o.styleSheet.cssText=e:o.appendChild(t.createTextNode(e)),d.id=p,c.fake&&(c.style.background="",c.style.overflow="hidden",u=x.style.overflow,x.style.overflow="hidden",x.appendChild(c)),s=n(d,e),c.fake?(c.parentNode.removeChild(c),x.style.overflow=u,x.offsetHeight):d.parentNode.removeChild(d),!!s}function d(e){return e.replace(/([A-Z])/g,function(e,t){return"-"+t.toLowerCase()}).replace(/^ms-/,"-ms-")}function c(t,n,r){var i;if("getComputedStyle"in e){i=getComputedStyle.call(e,t,n);var o=e.console;if(null!==i)r&&(i=i.getPropertyValue(r));else if(o){var s=o.error?"error":"log";o[s].call(o,"getComputedStyle returning null, its possible modernizr test results are inaccurate")}}else i=!n&&t.currentStyle&&t.currentStyle[r];return i}function m(t,r){var i=t.length;if("CSS"in e&&"supports"in e.CSS){for(;i--;)if(e.CSS.supports(d(t[i]),r))return!0;return!1}if("CSSSupportsRule"in e){for(var o=[];i--;)o.push("("+d(t[i])+":"+r+")");return o=o.join(" or "),p("@supports ("+o+") { #modernizr { position: absolute; } }",function(e){return"absolute"==c(e,null,"position")})}return n}function h(e,t,i,a){function u(){p&&(delete L.style,delete L.modElem)}if(a=r(a,"undefined")?!1:a,!r(i,"undefined")){var l=m(e,i);if(!r(l,"undefined"))return l}for(var p,d,c,h,v,y=["modernizr","tspan","samp"];!L.style&&y.length;)p=!0,L.modElem=f(y.shift()),L.style=L.modElem.style;for(c=e.length,d=0;c>d;d++)if(h=e[d],v=L.style[h],s(h,"-")&&(h=o(h)),L.style[h]!==n){if(a||r(i,"undefined"))return u(),"pfx"==t?h:!0;try{L.style[h]=i}catch(g){}if(L.style[h]!=v)return u(),"pfx"==t?h:!0}return u(),!1}function v(e,t,n,i,o){var s=e.charAt(0).toUpperCase()+e.slice(1),a=(e+" "+z.join(s+" ")+s).split(" ");return r(t,"string")||r(t,"undefined")?h(a,t,i,o):(a=(e+" "+E.join(s+" ")+s).split(" "),u(a,t,n))}function y(e,t,r){return v(e,n,n,t,r)}var g=[],C={_version:"3.5.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,t){var n=this;setTimeout(function(){t(n[e])},0)},addTest:function(e,t,n){g.push({name:e,fn:t,options:n})},addAsyncTest:function(e){g.push({name:null,fn:e})}},Modernizr=function(){};Modernizr.prototype=C,Modernizr=new Modernizr,Modernizr.addTest("notification",function(){if(!e.Notification||!e.Notification.requestPermission)return!1;if("granted"===e.Notification.permission)return!0;try{new e.Notification("")}catch(t){if("TypeError"===t.name)return!1}return!0});var S=[],w=C._config.usePrefixes?" -webkit- -moz- -o- -ms- ".split(" "):["",""];C._prefixes=w;var x=t.documentElement,_="CSS"in e&&"supports"in e.CSS,T="supportsCSS"in e;Modernizr.addTest("supports",_||T);var b="Moz O ms Webkit",z=C._config.usePrefixes?b.split(" "):[];C._cssomPrefixes=z;var P=function(t){var r,i=w.length,o=e.CSSRule;if("undefined"==typeof o)return n;if(!t)return!1;if(t=t.replace(/^@/,""),r=t.replace(/-/g,"_").toUpperCase()+"_RULE",r in o)return"@"+t;for(var s=0;i>s;s++){var a=w[s],u=a.toUpperCase()+"_"+r;if(u in o)return"@-"+a.toLowerCase()+"-"+t}return!1};C.atRule=P;var E=C._config.usePrefixes?b.toLowerCase().split(" "):[];C._domPrefixes=E;var N="svg"===x.nodeName.toLowerCase(),k={elem:f("modernizr")};Modernizr._q.push(function(){delete k.elem});var L={style:k.elem.style};Modernizr._q.unshift(function(){delete L.style});var j=C.testStyles=p;Modernizr.addTest("touchevents",function(){var n;if("ontouchstart"in e||e.DocumentTouch&&t instanceof DocumentTouch)n=!0;else{var r=["@media (",w.join("touch-enabled),("),"heartz",")","{#modernizr{top:9px;position:absolute}}"].join("");j(r,function(e){n=9===e.offsetTop})}return n}),C.testAllProps=v;C.prefixed=function(e,t,n){return 0===e.indexOf("@")?P(e):(-1!=e.indexOf("-")&&(e=o(e)),t?v(e,t,n):v(e,"pfx"))};C.testAllProps=y,Modernizr.addTest("csstransforms3d",function(){var e=!!y("perspective","1px",!0),t=Modernizr._config.usePrefixes;if(e&&(!t||"webkitPerspective"in x.style)){var n,r="#modernizr{width:0;height:0}";Modernizr.supports?n="@supports (perspective: 1px)":(n="@media (transform-3d)",t&&(n+=",(-webkit-transform-3d)")),n+="{#modernizr{width:7px;height:18px;margin:0;padding:0;border:0}}",j(r+n,function(t){e=7===t.offsetWidth&&18===t.offsetHeight})}return e}),Modernizr.addTest("csstransitions",y("transition","all",!0)),i(),delete C.addTest,delete C.addAsyncTest;for(var q=0;q<Modernizr._q.length;q++)Modernizr._q[q]();e.Modernizr=Modernizr}(window,document);