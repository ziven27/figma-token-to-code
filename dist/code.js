!function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=25)}({1:function(t,e,n){"use strict";var r=n(4),o={name:"default",ignoreClassName:"",token:{}},a={currentIndex:0,isJSX:!1,projects:[o]},i={key:"SACSS",store:a,changeCurrent:function(t){var e=i.getAll();e.currentIndex=t,figma.clientStorage.setAsync(i.key,e)},changeJSX:function(t){var e=i.getAll();e.isJSX=t,figma.clientStorage.setAsync(i.key,e)},remove:function(t){var e=i.getAll();e.currentIndex=0,e.projects.splice(t,1),e.projects.length||e.projects.push(o),figma.clientStorage.setAsync(i.key,e)},addNewProject:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.name,n=void 0===e?"":e,r=t.token,o=void 0===r?{}:r,a=i.getAll();a.projects.push({name:n,ignoreClassName:"",token:o}),a.currentIndex=a.projects.length-1,figma.clientStorage.setAsync(i.key,a)},editByIndex:function(t){var e=t.data,n=t.index,r=i.getAll(),o=r.projects[n];r.projects[n]={name:e.name,ignoreClassName:e.ignoreClassName,token:e.token?e.token:o.token},figma.clientStorage.setAsync(i.key,r),figma.ui.postMessage({alertMsg:"".concat(e.name," save success")})},replaceByIndex:function(t){var e=t.data,n=t.index,r=i.getAll();r.projects[n]=e||{},figma.clientStorage.setAsync(i.key,r),figma.ui.postMessage({alertMsg:"".concat(e.name," replace success")})},appendToken:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=i.getCurrent(),n=e.token,r=void 0===n?{}:n;e.token=Object.assign(Object.assign({},r),t),figma.clientStorage.setAsync(i.key,i.store),figma.ui.postMessage({alertMsg:"".concat(e.name," save success")})},isJSX:function(){return!!i.store.isJSX},getAll:function(){return i.store},init:function(){return new Promise((function(t,e){figma.clientStorage.getAsync(i.key).then((function(e){e&&e.projects&&e.projects.length?i.store=e:(figma.clientStorage.setAsync(i.key,a),i.store=a),t(i.getToken())})).catch(e)}))},getCurrent:function(){var t=i.store.currentIndex;return i.store.projects[t]},getToken:function(){var t=(i.getCurrent()||{}).token,e=void 0===t?null:t;return e?JSON.parse(JSON.stringify(e)):null},getInfoById:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";if(!t)return null;var e=i.getToken()||{};return e[t]},getSelectionTokens:function(t){var e=i.getCurrent()||{},n=e.name,o=void 0===n?"":n,a=e.token,c=void 0===a?{}:a;if(t){var l={};if(r.a.isComponent(t)){var u=r.a.getMainComponent(t),s=u.id,f=u.name,g=u.type,d=c[s]||{};l[s]=Object.assign(Object.assign({},d),{name:f,type:g})}[t.fillStyleId,t.textStyleId,t.strokeStyleId,t.effectStyleId,t.gridStyleId].forEach((function(t,e){if(!t)return"";var n=figma.getStyleById(t)||{},r=n.id,o=n.name,a=n.type;if(!r)return"";l[r]=Object.assign(Object.assign({},c[r]),{name:o,type:a})})),figma.ui.postMessage({getSelectionInfo:{name:o,token:l}})}else figma.ui.postMessage({getSelectionInfo:{name:o}})},getAllTokens:function(){var t=figma.root.name,e=figma.root.findAll((function(t){return"COMPONENT_SET"===t.type||"COMPONENT"===t.type&&"COMPONENT_SET"!==t.parent.type})),n={},r=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];t.forEach((function(t){n[t.id]={name:t.name,type:t.type}}))};r(e),r(figma.getLocalPaintStyles()),r(figma.getLocalTextStyles()),r(figma.getLocalEffectStyles()),r(figma.getLocalGridStyles()),figma.ui.postMessage({gotAllTokens:{name:t,ignoreClassName:"",token:n}})}};e.a=i},25:function(t,e,n){"use strict";n.r(e);var r=n(4),o={getRgbaByFill:function(t){var e=t.color,n=t.opacity;return t.visible&&0!==n?[parseInt(String(255*e.r)),parseInt(String(255*e.g)),parseInt(String(255*e.b)),String(n).indexOf(".")>-1?n.toFixed(1):n]:null}},a=n(1),i={data:{},init:function(){i.data={}},nameMap:{fs:"font-size",lh:"line-height",ls:"letter-space",ff:"font-family",pt:"padding-top",pr:"padding-right",pb:"padding-bottom",pl:"padding-left",mt:"margin-top",mr:"margin-right",mb:"margin-bottom",ml:"margin-left",h:"height",w:"width",btlr:"border-top-left-radius",btrr:"border-top-right-radius",bbrr:"border-bottom-right-radius",bblr:"border-bottom-left-radius",br:"border-radius"},getClassSelectorByName:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return t.indexOf(".")>-1&&(t=t.replace(/\./g,"\\.")),t.indexOf(":")>-1&&(t=t.replace(/\:/g,"\\:")),t.indexOf("%")>-1&&(t=t.replace(/\%/g,"\\%")),t},getString:function(){var t=i.data;return Object.keys(t).sort().map((function(e){return".".concat(i.getClassSelectorByName(e),"{").concat(t[e],";}")})).join("\n")},add:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1?arguments[1]:void 0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"px";if(!t||!e)return"";var r=i.nameMap[t];if(!r)return"";var o=Number(e)?parseFloat(Number(e).toFixed(2)):e,a="px"===n?"":n,c="".concat(t).concat(o).concat(a);return i.data[c]="".concat(r,":").concat(o).concat(n),c},addFontFamily:function(t){if(!t)return"";var e=t.replace(/[\W]/g,"").toLowerCase(),n="ff:".concat(e);return i.data[n]='font-family:"'.concat(t,'"'),n},addColor:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];if(!t&&t.length)return"";var e="c:".concat(t.join(""));return i.data[e]="color:rgba(".concat(t.join(","),")"),e},addBgColor:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];if(!t&&t.length)return"";var e="bc:".concat(t.join(""));return i.data[e]="background-color:rgba(".concat(t.join(","),")"),e}},c=i;function l(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(t)))return;var n=[],r=!0,o=!1,a=void 0;try{for(var i,c=t[Symbol.iterator]();!(r=(i=c.next()).done)&&(n.push(i.value),!e||n.length!==e);r=!0);}catch(t){o=!0,a=t}finally{try{r||null==c.return||c.return()}finally{if(o)throw a}}return n}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return u(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return u(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var s=function(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(t);o<r.length;o++)e.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(t,r[o])&&(n[r[o]]=t[r[o]])}return n},f={getFill:function(t){var e=l(t.fills||[],1)[0],n=void 0===e?null:e;if(!n||"SOLID"!==n.type)return null;var r=o.getRgbaByFill(n);return r?{className:"TEXT"===t.type?c.addColor(r):c.addBgColor(r)}:null},getInfo:function(t){var e=a.a.getInfoById(t.fillStyleId)||{},n=e.textClassName,r=void 0===n?"":n,o=e.className,i=void 0===o?"":o,c=s(e,["textClassName","className"]),l="TEXT"===t.type?r:i;return l?Object.assign({className:l},c):f.getFill(t)}},g=f;function d(t){return(d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var m={unitMap:{PERCENT:"%"},getFontNameClass:function(t){var e=t.fontName.style;if("string"!=typeof e)return"";var n={ULTRALIGHT:"fw100",THIN:"fw200",LIGHT:"fw300",REGULAR:"",MEDIUM:"fw500",SEMIBOLD:"fw600",BOLD:"fw700",BLACK:"fw900",ITALIC:"fsi",OBLIQUE:"fsi"};return e.split(" ").map((function(t){return n[t.toUpperCase()]||""})).filter((function(t){return t})).join(" ")},getACSSSInfo:function(t){var e,n,r,o=[];if(["string","number"].indexOf(d(t.fontSize))>-1&&o.push(c.add("fs",t.fontSize)),null===(e=t.lineHeight)||void 0===e?void 0:e.value){var a=t.lineHeight,i=a.value,l=a.unit;o.push(c.add("lh",i,m.unitMap[l]))}if(null===(n=t.letterSpacing)||void 0===n?void 0:n.value){var u=t.letterSpacing,s=u.value,f=u.unit;o.push(c.add("ls",s,m.unitMap[f]))}var g=m.getFontNameClass(t);g&&o.push(g),(null===(r=t.fontName)||void 0===r?void 0:r.family)&&o.push(c.addFontFamily(t.fontName.family));var p={LEFT:"",CENTER:"tac",RIGHT:"tar",JUSTIFIED:"taj"}[t.textAlignHorizontal];p&&o.push(p);var y={TOP:"",CENTER:"vam",BOTTOM:"vab"}[t.textAlignVertical];y&&o.push(y);var v={ORIGINAL:"",UPPER:"ttu",LOWER:"ttl",TITLE:"ttc"}[t.textCase];v&&o.push(v);var h={NONE:"",UNDERLINE:"tdu",STRIKETHROUGH:"tdl"}[t.textDecoration];h&&o.push(h);var b=o.join(" "),S=["fw500","fw600","fw700","fw800","fw900"].findIndex((function(t){return b.indexOf(t)>-1}))>-1;return{className:b,tagName:S?"strong":"span"}},getTextChildren:function(t){var e=t.characters,n=void 0===e?"":e,r=n.split("\n").filter((function(t){return t.trim()}));if(r.length>1){var o=t.paragraphSpacing>0?c.add("mb",t.paragraphSpacing):"";return r.map((function(t,e){return{tagName:"p",className:e===r.length-1?"":o,children:[t]}}))}return[n]},getInfo:function(t){if("TEXT"!==t.type)return null;var e=a.a.getInfoById(t.textStyleId)||{},n=m.getACSSSInfo(t);return{className:e.className||n.className||"",tagName:e.tagName||n.tagName||"",ignoreClassName:e.ignoreClassName||""}}},p=m,y={getInfo:function(t){return a.a.getInfoById(t.strokeStyleId)}},v={getInfo:function(t){return a.a.getInfoById(t.gridStyleId)}},h={isFlex:function(t){return!(["TEXT"].indexOf(t.type)>-1)&&"NONE"!==(null==t?void 0:t.layoutMode)},getThisInfo:function(t){if(!h.isFlex(t))return null;var e=t.layoutMode,n=t.primaryAxisAlignItems,r=t.counterAxisAlignItems,o=t.children;if(!(void 0===o?[]:o).length)return null;var a=[];return"VERTICAL"===e?a.push({CENTER:"tac",MAX:"tar"}[r]):(a.push({CENTER:"jcc",MAX:"jcfe",SPACE_BETWEEN:"jcsb"}[n]||""),a.push({CENTER:"aic",MAX:"aife"}[r]||""),a.push("df")),{className:a.join(" ")}},getInfoFromParent:function(t){var e=t.parent;if(!e||!h.isFlex(e))return null;var n=e.layoutMode,r=e.primaryAxisAlignItems,o=e.itemSpacing;if("SPACE_BETWEEN"===r)return null;var a=[],i=[],l=(e.children.filter((function(t){return t.visible})).pop()||{}).id,u=(void 0===l?"":l)===t.id;if(o>0&&!u){a.push(c.add({VERTICAL:"mb",HORIZONTAL:"mr"}[n],o))}return 1===t.layoutGrow&&(a.push("f1"),i.push("w".concat(t.width))),{className:a.join(" "),ignoreClassName:i.join(" ")}},getInfo:function(t){var e=h.getThisInfo(t)||{},n=e.className,r=void 0===n?"":n,o=e.ignoreClassName,a=void 0===o?"":o,i=h.getInfoFromParent(t)||{},c=i.className,l=void 0===c?"":c,u=i.ignoreClassName,s=void 0===u?"":u;return{className:"".concat(r," ").concat(l),ignoreClassName:"".concat(a," ").concat(s)}}},b=h,S={isBlock:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=["div","h1","h2","h3","h4","h5","h6","p"];return e.indexOf(t)>-1},isSelfTag:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=["img","link","meta","br","br","hr","input","col","frame","area","param","object","embed","keygen","source"];return e.indexOf(t)>-1},clearClassName:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";if(!t)return"";var n=t.split(" "),r=[];return n.forEach((function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";t&&"null"!==t&&-1===r.indexOf(t)&&-1===e.indexOf(t)&&r.push(t)})),r.join(" ")}},I={getInfo:function(t){return a.a.getInfoById(t.effectStyleId)}};function N(t){return function(t){if(Array.isArray(t))return O(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"==typeof t)return O(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return O(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function O(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var C={gerBorderRadiusClassName:function(t){var e=t.topLeftRadius||0,n=t.topRightRadius||0,r=t.bottomRightRadius||0,o=t.bottomLeftRadius||0;if(e+n+r+o===0)return[];if(e===n&&e===r&&e===o)return[c.add("br",e)];var a=[];return e&&a.push(c.add("btlr",e)),n&&a.push(c.add("btrr",n)),r&&a.push(c.add("bbrr",r)),o&&a.push(c.add("bblr",o)),a},getPaddingClassName:function(t){return[t.paddingTop>1?c.add("pt",t.paddingTop):"",t.paddingRight>1?c.add("pr",t.paddingRight):"",t.paddingBottom>1?c.add("pb",t.paddingBottom):"",t.paddingLeft>1?c.add("pl",t.paddingLeft):""]},getInfo:function(t){var e=C.getPaddingClassName(t),n=C.gerBorderRadiusClassName(t);return{className:[].concat(N(e),N(n)).join(" ")}}},j=C;function A(t){return function(t){if(Array.isArray(t))return T(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"==typeof t)return T(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return T(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function T(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var x=function(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(t);o<r.length;o++)e.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(t,r[o])&&(n[r[o]]=t[r[o]])}return n},E={extendInfo:function(t,e){if(!e)return t;var n=t.className,r=void 0===n?"":n,o=t.ignoreClassName,a=void 0===o?"":o,i=t.props,c=void 0===i?{}:i,l=x(t,["className","ignoreClassName","props"]),u=e.className,s=void 0===u?"":u,f=e.ignoreClassName,g=void 0===f?"":f,d=e.props,m=void 0===d?{}:d,p=(e.children,x(e,["className","ignoreClassName","props","children"]));return Object.assign(Object.assign({props:Object.assign(Object.assign({},c),m),className:"".concat(r," ").concat(s),ignoreClassName:"".concat(a," ").concat(g)},l),p)},isStructNode:function(t){if(t.name.startsWith("#"))return!0;var e=["RECTANGLE","VECTOR","STAR","LINE","POLYGON","ELLIPSE","SLICE"];if(e.indexOf(t.type)>-1)return!0;if("TEXT"===t.type)return!1;var n=t.children,r=void 0===n?[]:n;return!r.length||!r.find((function(t){return t.visible&&-1===e.indexOf(t.type)}))},isRenderChildren:function(t){return"INSTANCE"!==t.type&&"COMPONENT"!==t.type||t.children.length,!1},getNodeInfo:function(t){if(!t.visible||t.name.startsWith("_"))return null;if(E.isRenderChildren(t))return E.getNodeInfo(t.children[0]);var e=E.isStructNode(t),n={ignoreClassName:"",className:"",children:[]};e&&(n.tagName="i");var o=r.a.getInfo(t),i=g.getInfo(t),l=p.getInfo(t),u=y.getInfo(t),s=v.getInfo(t),f=I.getInfo(t),d=j.getInfo(t),m=b.getInfo(t);n=E.extendInfo(n,i),n=E.extendInfo(n,l),n=E.extendInfo(n,u),n=E.extendInfo(n,s),n=E.extendInfo(n,f),n=E.extendInfo(n,o),n=E.extendInfo(n,m),n=E.extendInfo(n,d),(e||"1"===String(null==n?void 0:n.renderWidth))&&(n.className+=" "+c.add("w",parseInt(String(t.width)))),(e||"1"===String(null==n?void 0:n.renderHeight))&&(n.className+=" "+c.add("h",parseInt(String(t.height)))),n.children=function(){if("TEXT"===t.type)return p.getTextChildren(t);var n=(o||{}).renderChildren,r=void 0===n?1:n;return e||"0"===String(r)?[]:"2"===String(r)?t.findAll((function(t){return"TEXT"===t.type})).map((function(t){return t.characters})):E.getNodesInfo(t.children)}();var h=(a.a.getCurrent()||{}).ignoreClassName,N=void 0===h?"":h;if(n.className=S.clearClassName(n.className,"".concat(n.ignoreClassName," ").concat(N)),delete n.ignoreClassName,1===n.children.length){var O=n.children[0];if(O.tagName===n.tagName&&!n.componentName&&!O.componentName)return O.className=S.clearClassName("".concat(O.className," ").concat(n.className)),O}return console.log(t),n},sort:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return A(t).sort((function(t,e){return t.y===e.y?t.x-e.x:t.y-e.y}))},getNodesInfo:function(){for(var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=[],n=E.sort(t),r=0,o=n.length;r<o;r++){var a=E.getNodeInfo(n[r]);a&&(a instanceof Array?e=[].concat(A(e),A(a)):e.push(a))}return e}},w=E;function M(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(t)))return;var n=[],r=!0,o=!1,a=void 0;try{for(var i,c=t[Symbol.iterator]();!(r=(i=c.next()).done)&&(n.push(i.value),!e||n.length!==e);r=!0);}catch(t){o=!0,a=t}finally{try{r||null==c.return||c.return()}finally{if(o)throw a}}return n}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return P(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return P(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function P(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var k=function(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(t);o<r.length;o++)e.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(t,r[o])&&(n[r[o]]=t[r[o]])}return n},B=["class","type","name","role","disabled","id","title","lang","dir","tabindex","accesskey","src","href","style","aria-hidden","target","rel"],R={getPropsString:function(){for(var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.className,n=void 0===e?"":e,r=k(t,["className"]),o=[],a=n.split(" "),i=0,c=Object.entries(r);i<c.length;i++){var l=M(c[i],2),u=l[0],s=l[1],f=String(s);""!==f&&"false"!==f&&(u.startsWith("data-")||B.indexOf(u)>-1?o.push("".concat(u,'="').concat(f,'"')):"true"!==f||a.push("_".concat(u)))}return a.length&&o.push('class="'.concat(a.join(" "),'"')),o.join(" ")},getItemDom:function(t){if(!t)return"";if("string"==typeof t)return t;var e=t.children,n=void 0===e?[]:e,r=t.props,o=void 0===r?{}:r,a=t.className,i=void 0===a?"":a,c=t.tagName||"div",l=R.getPropsString(Object.assign(Object.assign({},o),{className:i})),u="".concat(c).concat(l?" ".concat(l):"");return S.isSelfTag(c)?"<".concat(u,"/>"):n.length?"<".concat(u,">").concat(R.getDomByArray(n),"</").concat(c,">"):"<".concat(u,"></").concat(c,">")},getDomByArray:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return t.map((function(t){return R.getItemDom(t)})).join("")}},L=R;function F(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(t)))return;var n=[],r=!0,o=!1,a=void 0;try{for(var i,c=t[Symbol.iterator]();!(r=(i=c.next()).done)&&(n.push(i.value),!e||n.length!==e);r=!0);}catch(t){o=!0,a=t}finally{try{r||null==c.return||c.return()}finally{if(o)throw a}}return n}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return H(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return H(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function H(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var U={getPropsString:function(){for(var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=[],n=0,r=Object.entries(t);n<r.length;n++){var o=F(r[n],2),a=o[0],i=o[1],c=function(t,e){var n=String(e);return""===n||"false"===e?"":"".concat(t,'="').concat(n,'"')}(a,i);c&&e.push(c)}return e.join(" ")},getItemDom:function(t){if(!t)return"";if("string"==typeof t)return t;var e=t.children,n=void 0===e?[]:e,r=t.props,o=void 0===r?{}:r,a=t.className,i=void 0===a?"":a,c=t.componentName||t.tagName||"div",l=U.getPropsString(Object.assign(Object.assign({},o),{className:i})),u="".concat(c).concat(l?" ".concat(l):"");return S.isSelfTag(c)?"<".concat(u,"/>"):n.length?"<".concat(u,">").concat(U.getDomByArray(n),"</").concat(c,">"):t.componentName?"<".concat(u,"/>"):"<".concat(u,"></").concat(c,">")},getDomByArray:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return t.map((function(t){return U.getItemDom(t)})).join("")}},X=U,D={render:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=arguments.length>1?arguments[1]:void 0;return e?X.getDomByArray(t):L.getDomByArray(t)}};function _(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(t)))return;var n=[],r=!0,o=!1,a=void 0;try{for(var i,c=t[Symbol.iterator]();!(r=(i=c.next()).done)&&(n.push(i.value),!e||n.length!==e);r=!0);}catch(t){o=!0,a=t}finally{try{r||null==c.return||c.return()}finally{if(o)throw a}}return n}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return G(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return G(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function G(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var J={tabIndex:0,getSelection:function(){var t=figma.currentPage.selection;return t.length?t:(figma.ui.postMessage({noSelection:!0}),null)},onTabChange:function(t){var e=J.tabIndex;if(J.tabIndex=t,0!==e&&1!==e||0!==t&&1!==t){var n=["runHome","runHome","runToken","runConfig"][t];n&&J[n]()}},onSelectionChange:function(){var t=["runHome","runHome","runToken",""][J.tabIndex];t&&J[t]()},runHome:function(){var t=J.getSelection();if(t){c.init();var e=w.getNodesInfo(t),n=a.a.isJSX();figma.ui.postMessage({getHTML:D.render(e,n),getCSS:c.getString(),isJSX:n,noSelection:!1})}},runConfig:function(){figma.ui.postMessage({getConfig:a.a.getAll()})},runToken:function(){var t=_(J.getSelection()||[],1)[0];a.a.getSelectionTokens(t)},onmessage:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.type,n=void 0===e?null:e,r=t.value,o=void 0===r?null:r;if(null!==n){var i=n.split("."),c=_(i,2),l=c[0],u=c[1];"API"===l&&u in J?J[u](o):"CONFIG"===l&&u in a.a&&(a.a[u](o),"changeJSX"===u?J.runHome():"appendToken"===u?J.runToken():J.runConfig())}}};a.a.init().then((function(){figma.showUI(__html__,{width:400,height:600}),J.runHome(),figma.on("selectionchange",(function(){J.onSelectionChange()})),figma.ui.onmessage=J.onmessage}))},4:function(t,e,n){"use strict";var r=n(1);function o(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(t)))return;var n=[],r=!0,o=!1,a=void 0;try{for(var i,c=t[Symbol.iterator]();!(r=(i=c.next()).done)&&(n.push(i.value),!e||n.length!==e);r=!0);}catch(t){o=!0,a=t}finally{try{r||null==c.return||c.return()}finally{if(o)throw a}}return n}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return a(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return a(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var i={isVariant:function(t){var e,n;return"COMPONENT_SET"===(null===(n=null===(e=t.mainComponent)||void 0===e?void 0:e.parent)||void 0===n?void 0:n.type)},isComponent:function(t){return"INSTANCE"===t.type||"COMPONENT"===t.type},getMainComponent:function(t){return"COMPONENT"===t.type?t:i.isVariant(t)?t.mainComponent.parent:t.mainComponent},getComponentId:function(t){var e=(i.getMainComponent(t)||{}).id;return void 0===e?"":e},stringToComponentName:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=t.trim();if(!e)return"";var n=e.replace(/[\W]/g,""),r=n.charAt(0).toUpperCase();return 1===n.length?r:r+n.slice(1)},getComponentName:function(t){var e=i.getMainComponent(t).name,n=void 0===e?"":e;return n?i.stringToComponentName(n):""},getComponentPropsByString:function(t){var e={};t&&"string"==typeof t&&t.replace(/\"/g,"").replace(/\'/g,"").split(",").forEach((function(t){var n=o(t.split("="),2),r=n[0],a=n[1],i=String(a).trim();"false"!==i&&(e[String(r).trim()]=a?i:"true")}));return e},getComponentProps:function(t){if(!i.isVariant(t))return{};var e=t.mainComponent.name;return i.getComponentPropsByString(e)},getInfo:function(t){var e=i.getComponentId(t),n=r.a.getInfoById(e);return n?(n.props=Object.assign(Object.assign({},i.getComponentProps(t)),i.getComponentPropsByString(n.props||"")),"renderChildren"in n||(n.renderChildren="1"),"renderWidth"in n||(n.renderWidth="0"),"renderHeight"in n||(n.renderHeight="0"),n):null}};e.a=i}});