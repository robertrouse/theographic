(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{136:function(e,t,r){"use strict";r.r(t),r.d(t,"pageQuery",function(){return E});var n=r(7),a=r.n(n),o=(r(156),r(157),r(161),r(82),r(81),r(56),r(162),r(164),r(167),r(35),r(169),r(50),r(55),r(0)),i=r.n(o),c=r(150),u=(r(170),function(e,t){return e.reduce(function(e,r){return(e[r[t]]=e[r[t]]||[]).push(r),e},{})});function s(e){var t=e.eventGroup,r=e.year,n=t.map(function(e){return i.a.createElement("li",{key:e.data.Event_Name},i.a.createElement("a",{href:"/event/"+e.data.Event_Name},e.data.Event_Name))});return i.a.createElement("div",null,i.a.createElement("div",{className:"year-label"},r," A.D."),i.a.createElement("ol",null,n))}function l(e){var t=(e.events||[]).map(function(e){return Object.assign({year:e.data.Start_Year[0].data.Year},e)}).sort(function(e,t){return Number.parseInt(e.year)-Number.parseInt(t.year)}),r=u(t,"year");return Object.keys(r).map(function(e){return i.a.createElement(s,{key:e,year:e,eventGroup:r[e]})})}function f(e){return(e.people||[]).map(function(e,t){return i.a.createElement(i.a.Fragment,{key:t},t>0&&", ",i.a.createElement("a",{href:"/person/"+e.data.Person_Lookup+"/"},e.data.Name))})}function p(e){return(e.places||[]).map(function(e,t){return i.a.createElement(i.a.Fragment,{key:t},t>0&&", ",i.a.createElement("a",{href:"/place/"+e.data.Place_Lookup+"/"},e.data.ESV_name))})}function m(e){if(!e.verses)return i.a.createElement("div",null);var t=e.verses.map(function(e){return{book:e.data.Book[0].data.Osis_Name,bookCannonicalOrder:e.data.Book[0].data.Canonical_Order,chapter:e.data.Chapter[0].data.Chapter_Lookup.split(".")[1],verse:e.data.Verse_Num}}),r=u(t,"book");return Object.keys(r).sort(function(e,t){return e.bookCannonicalOrder-t.bookCannonicalOrder}).map(function(e){return i.a.createElement("div",{key:e},e,i.a.createElement(v,{verses:r[e]}))})}function v(e){var t=[],r=null,n=0,a=!0,o=e.verses,c=Array.isArray(o),u=0;for(o=c?o:o[Symbol.iterator]();;){var s;if(c){if(u>=o.length)break;s=o[u++]}else{if((u=o.next()).done)break;s=u.value}var l=s;if(r)if(l.chapter===r.chapter&&Number.parseInt(r.verse)+n+1===Number.parseInt(l.verse))n++;else{var f=(a?" ":", ")+r.chapter+":"+r.verse;n?(t.push(i.a.createElement("a",{key:f,href:"/verse/"+r.Osis_Ref},(a?" ":", ")+l.chapter+":"+r.verse+"-"+(Number.parseInt(r.verse)+n))),n=0):t.push(i.a.createElement("a",{key:f,href:"/verse/"+r.Osis_Ref},f)),r=l,a=!1}else r=l}var p=(a?" ":", ")+r.chapter+":"+r.verse;return n?t.push(i.a.createElement("a",{key:p,href:"/verse/"+r.Osis_Ref},(a?" ":", ")+r.chapter+":"+r.verse+"-"+(Number.parseInt(r.verse)+n))):t.push(i.a.createElement("a",{key:p,href:"/verse/"+r.Osis_Ref},p)),t}function h(e){return e.aliases?i.a.createElement("div",{className:"container"},i.a.createElement("strong",null,"Also called: "),e.aliases):i.a.createElement("div",null)}function y(e){return e.father?i.a.createElement("div",{id:"w-node-70773c1d322e-749a0e41"},i.a.createElement("strong",null,"Father:")," ",i.a.createElement("a",{href:"/person/"+e.father[0].data.Person_Lookup+"/"},e.father[0].data.Name)):i.a.createElement("div",null)}var d=function(e){function t(){return e.apply(this,arguments)||this}return a()(t,e),t.prototype.render=function(){var e=this.props.data;return i.a.createElement(i.a.Fragment,null,i.a.createElement(c.Helmet,null,i.a.createElement("meta",{charSet:"utf-8"}),i.a.createElement("title",null,"People"),i.a.createElement("meta",{content:"People",property:"og:title"}),i.a.createElement("meta",{content:"width=device-width, initial-scale=1",name:"viewport"}),i.a.createElement("meta",{content:"Webflow",name:"generator"}),i.a.createElement("link",{href:"https://daks2k3a4ib2z.cloudfront.net/img/favicon.ico",rel:"shortcut icon",type:"image/x-icon"}),i.a.createElement("link",{href:"https://daks2k3a4ib2z.cloudfront.net/img/webclip.png",rel:"apple-touch-icon"})),i.a.createElement("div",{className:"container"},i.a.createElement("h1",{className:"heading"},e.airtable.data.Person_Lookup),i.a.createElement("p",{className:"container",dangerouslySetInnerHTML:{__html:e.airtable.data.Dictionary_Text}}),i.a.createElement("div",{className:"text-block"},"M.G. Easton M.A., D.D., Illustrated Bible Dictionary, Third Edition"),i.a.createElement("div",{className:"div-block"}),i.a.createElement(h,{aliases:e.airtable.data.Aliases}),i.a.createElement(y,{father:e.airtable.data.Father}),i.a.createElement("h3",{className:"heading-3"},"Related People"),i.a.createElement("p",null,i.a.createElement(f,{people:e.airtable.data.Personal_network})),i.a.createElement("h3",null,"Related Events"),i.a.createElement(l,{events:e.airtable.data.Events}),i.a.createElement("h3",{className:"heading-3"},"Related Places"),i.a.createElement("p",null,i.a.createElement(p,{places:e.airtable.data.Has_Been_to})),i.a.createElement("h3",null,"Verses"),i.a.createElement(m,{verses:e.airtable.data.Verses}),i.a.createElement("div",{className:"footer"}),i.a.createElement("script",{src:"https://code.jquery.com/jquery-3.3.1.min.js",type:"text/javascript",integrity:"sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8=",crossOrigin:"anonymous"}),i.a.createElement("script",{src:"js/webflow.js",type:"text/javascript"})))},t}(i.a.Component);t.default=d;var E="712683423"},144:function(e,t,r){var n=r(80),a=r(54).concat("length","prototype");t.f=Object.getOwnPropertyNames||function(e){return n(e,a)}},145:function(e,t,r){var n=r(76),a=r(48),o=r(34),i=r(75),c=r(26),u=r(79),s=Object.getOwnPropertyDescriptor;t.f=r(17)?s:function(e,t){if(e=o(e),t=i(t,!0),u)try{return s(e,t)}catch(e){}if(c(e,t))return a(!n.f.call(e,t),e[t])}},146:function(e,t,r){var n=r(5),a=r(19),o=r(37),i=r(147),c=r(25).f;e.exports=function(e){var t=a.Symbol||(a.Symbol=o?{}:n.Symbol||{});"_"==e.charAt(0)||e in t||c(t,e,{value:i.f(e)})}},147:function(e,t,r){t.f=r(3)},148:function(e,t,r){var n=r(6),a=r(28),o=r(16),i=r(149),c="["+i+"]",u=RegExp("^"+c+c+"*"),s=RegExp(c+c+"*$"),l=function(e,t,r){var a={},c=o(function(){return!!i[e]()||"​"!="​"[e]()}),u=a[e]=c?t(f):i[e];r&&(a[r]=u),n(n.P+n.F*c,"String",a)},f=l.trim=function(e,t){return e=String(a(e)),1&t&&(e=e.replace(u,"")),2&t&&(e=e.replace(s,"")),e};e.exports=l},149:function(e,t){e.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},156:function(e,t,r){r(146)("asyncIterator")},157:function(e,t,r){"use strict";var n=r(5),a=r(26),o=r(17),i=r(6),c=r(18),u=r(158).KEY,s=r(16),l=r(53),f=r(40),p=r(36),m=r(3),v=r(147),h=r(146),y=r(159),d=r(78),E=r(11),b=r(10),g=r(34),N=r(75),_=r(48),O=r(49),k=r(160),S=r(145),w=r(25),I=r(33),j=S.f,P=w.f,x=k.f,F=n.Symbol,A=n.JSON,C=A&&A.stringify,R=m("_hidden"),T=m("toPrimitive"),M={}.propertyIsEnumerable,L=l("symbol-registry"),D=l("symbols"),V=l("op-symbols"),G=Object.prototype,J="function"==typeof F,Y=n.QObject,B=!Y||!Y.prototype||!Y.prototype.findChild,K=o&&s(function(){return 7!=O(P({},"a",{get:function(){return P(this,"a",{value:7}).a}})).a})?function(e,t,r){var n=j(G,t);n&&delete G[t],P(e,t,r),n&&e!==G&&P(G,t,n)}:P,Q=function(e){var t=D[e]=O(F.prototype);return t._k=e,t},W=J&&"symbol"==typeof F.iterator?function(e){return"symbol"==typeof e}:function(e){return e instanceof F},z=function(e,t,r){return e===G&&z(V,t,r),E(e),t=N(t,!0),E(r),a(D,t)?(r.enumerable?(a(e,R)&&e[R][t]&&(e[R][t]=!1),r=O(r,{enumerable:_(0,!1)})):(a(e,R)||P(e,R,_(1,{})),e[R][t]=!0),K(e,t,r)):P(e,t,r)},H=function(e,t){E(e);for(var r,n=y(t=g(t)),a=0,o=n.length;o>a;)z(e,r=n[a++],t[r]);return e},X=function(e){var t=M.call(this,e=N(e,!0));return!(this===G&&a(D,e)&&!a(V,e))&&(!(t||!a(this,e)||!a(D,e)||a(this,R)&&this[R][e])||t)},q=function(e,t){if(e=g(e),t=N(t,!0),e!==G||!a(D,t)||a(V,t)){var r=j(e,t);return!r||!a(D,t)||a(e,R)&&e[R][t]||(r.enumerable=!0),r}},U=function(e){for(var t,r=x(g(e)),n=[],o=0;r.length>o;)a(D,t=r[o++])||t==R||t==u||n.push(t);return n},Z=function(e){for(var t,r=e===G,n=x(r?V:g(e)),o=[],i=0;n.length>i;)!a(D,t=n[i++])||r&&!a(G,t)||o.push(D[t]);return o};J||(c((F=function(){if(this instanceof F)throw TypeError("Symbol is not a constructor!");var e=p(arguments.length>0?arguments[0]:void 0),t=function(r){this===G&&t.call(V,r),a(this,R)&&a(this[R],e)&&(this[R][e]=!1),K(this,e,_(1,r))};return o&&B&&K(G,e,{configurable:!0,set:t}),Q(e)}).prototype,"toString",function(){return this._k}),S.f=q,w.f=z,r(144).f=k.f=U,r(76).f=X,r(77).f=Z,o&&!r(37)&&c(G,"propertyIsEnumerable",X,!0),v.f=function(e){return Q(m(e))}),i(i.G+i.W+i.F*!J,{Symbol:F});for(var $="hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),ee=0;$.length>ee;)m($[ee++]);for(var te=I(m.store),re=0;te.length>re;)h(te[re++]);i(i.S+i.F*!J,"Symbol",{for:function(e){return a(L,e+="")?L[e]:L[e]=F(e)},keyFor:function(e){if(!W(e))throw TypeError(e+" is not a symbol!");for(var t in L)if(L[t]===e)return t},useSetter:function(){B=!0},useSimple:function(){B=!1}}),i(i.S+i.F*!J,"Object",{create:function(e,t){return void 0===t?O(e):H(O(e),t)},defineProperty:z,defineProperties:H,getOwnPropertyDescriptor:q,getOwnPropertyNames:U,getOwnPropertySymbols:Z}),A&&i(i.S+i.F*(!J||s(function(){var e=F();return"[null]"!=C([e])||"{}"!=C({a:e})||"{}"!=C(Object(e))})),"JSON",{stringify:function(e){for(var t,r,n=[e],a=1;arguments.length>a;)n.push(arguments[a++]);if(r=t=n[1],(b(t)||void 0!==e)&&!W(e))return d(t)||(t=function(e,t){if("function"==typeof r&&(t=r.call(this,e,t)),!W(t))return t}),n[1]=t,C.apply(A,n)}}),F.prototype[T]||r(12)(F.prototype,T,F.prototype.valueOf),f(F,"Symbol"),f(Math,"Math",!0),f(n.JSON,"JSON",!0)},158:function(e,t,r){var n=r(36)("meta"),a=r(10),o=r(26),i=r(25).f,c=0,u=Object.isExtensible||function(){return!0},s=!r(16)(function(){return u(Object.preventExtensions({}))}),l=function(e){i(e,n,{value:{i:"O"+ ++c,w:{}}})},f=e.exports={KEY:n,NEED:!1,fastKey:function(e,t){if(!a(e))return"symbol"==typeof e?e:("string"==typeof e?"S":"P")+e;if(!o(e,n)){if(!u(e))return"F";if(!t)return"E";l(e)}return e[n].i},getWeak:function(e,t){if(!o(e,n)){if(!u(e))return!0;if(!t)return!1;l(e)}return e[n].w},onFreeze:function(e){return s&&f.NEED&&u(e)&&!o(e,n)&&l(e),e}}},159:function(e,t,r){var n=r(33),a=r(77),o=r(76);e.exports=function(e){var t=n(e),r=a.f;if(r)for(var i,c=r(e),u=o.f,s=0;c.length>s;)u.call(e,i=c[s++])&&t.push(i);return t}},160:function(e,t,r){var n=r(34),a=r(144).f,o={}.toString,i="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[];e.exports.f=function(e){return i&&"[object Window]"==o.call(e)?function(e){try{return a(e)}catch(e){return i.slice()}}(e):a(n(e))}},161:function(e,t,r){var n=r(6);n(n.S,"Array",{isArray:r(78)})},162:function(e,t,r){var n=r(27),a=r(33);r(163)("keys",function(){return function(e){return a(n(e))}})},163:function(e,t,r){var n=r(6),a=r(19),o=r(16);e.exports=function(e,t){var r=(a.Object||{})[e]||Object[e],i={};i[e]=t(r),n(n.S+n.F*o(function(){r(1)}),"Object",i)}},164:function(e,t,r){"use strict";var n=r(5),a=r(26),o=r(13),i=r(165),c=r(75),u=r(16),s=r(144).f,l=r(145).f,f=r(25).f,p=r(148).trim,m=n.Number,v=m,h=m.prototype,y="Number"==o(r(49)(h)),d="trim"in String.prototype,E=function(e){var t=c(e,!1);if("string"==typeof t&&t.length>2){var r,n,a,o=(t=d?t.trim():p(t,3)).charCodeAt(0);if(43===o||45===o){if(88===(r=t.charCodeAt(2))||120===r)return NaN}else if(48===o){switch(t.charCodeAt(1)){case 66:case 98:n=2,a=49;break;case 79:case 111:n=8,a=55;break;default:return+t}for(var i,u=t.slice(2),s=0,l=u.length;s<l;s++)if((i=u.charCodeAt(s))<48||i>a)return NaN;return parseInt(u,n)}}return+t};if(!m(" 0o1")||!m("0b1")||m("+0x1")){m=function(e){var t=arguments.length<1?0:e,r=this;return r instanceof m&&(y?u(function(){h.valueOf.call(r)}):"Number"!=o(r))?i(new v(E(t)),r,m):E(t)};for(var b,g=r(17)?s(v):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),N=0;g.length>N;N++)a(v,b=g[N])&&!a(m,b)&&f(m,b,l(v,b));m.prototype=h,h.constructor=m,r(18)(n,"Number",m)}},165:function(e,t,r){var n=r(10),a=r(166).set;e.exports=function(e,t,r){var o,i=t.constructor;return i!==r&&"function"==typeof i&&(o=i.prototype)!==r.prototype&&n(o)&&a&&a(e,o),e}},166:function(e,t,r){var n=r(10),a=r(11),o=function(e,t){if(a(e),!n(t)&&null!==t)throw TypeError(t+": can't set as prototype!")};e.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(e,t,n){try{(n=r(20)(Function.call,r(145).f(Object.prototype,"__proto__").set,2))(e,[]),t=!(e instanceof Array)}catch(e){t=!0}return function(e,r){return o(e,r),t?e.__proto__=r:n(e,r),e}}({},!1):void 0),check:o}},167:function(e,t,r){var n=r(6),a=r(168);n(n.S+n.F*(Number.parseInt!=a),"Number",{parseInt:a})},168:function(e,t,r){var n=r(5).parseInt,a=r(148).trim,o=r(149),i=/^[-+]?0[xX]/;e.exports=8!==n(o+"08")||22!==n(o+"0x16")?function(e,t){var r=a(String(e),3);return n(r,t>>>0||(i.test(r)?16:10))}:n},169:function(e,t,r){"use strict";var n=r(6),a=r(21),o=r(27),i=r(16),c=[].sort,u=[1,2,3];n(n.P+n.F*(i(function(){u.sort(void 0)})||!i(function(){u.sort(null)})||!r(14)(c)),"Array",{sort:function(e){return void 0===e?c.call(o(this)):c.call(o(this),a(e))}})},170:function(e,t,r){}}]);
//# sourceMappingURL=component---src-templates-person-template-js-c84bb5b299da479b5ae6.js.map