(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const u of l)if(u.type==="childList")for(const d of u.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&s(d)}).observe(document,{childList:!0,subtree:!0});function n(l){const u={};return l.integrity&&(u.integrity=l.integrity),l.referrerPolicy&&(u.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?u.credentials="include":l.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function s(l){if(l.ep)return;l.ep=!0;const u=n(l);fetch(l.href,u)}})();function Av(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}var Pu={exports:{}},es={},Au={exports:{}},X={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ip;function Ov(){if(ip)return X;ip=1;var i=Symbol.for("react.element"),e=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),u=Symbol.for("react.provider"),d=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),E=Symbol.for("react.lazy"),w=Symbol.iterator;function T(S){return S===null||typeof S!="object"?null:(S=w&&S[w]||S["@@iterator"],typeof S=="function"?S:null)}var D={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},F=Object.assign,V={};function G(S,N,Y){this.props=S,this.context=N,this.refs=V,this.updater=Y||D}G.prototype.isReactComponent={},G.prototype.setState=function(S,N){if(typeof S!="object"&&typeof S!="function"&&S!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,S,N,"setState")},G.prototype.forceUpdate=function(S){this.updater.enqueueForceUpdate(this,S,"forceUpdate")};function Pe(){}Pe.prototype=G.prototype;function Me(S,N,Y){this.props=S,this.context=N,this.refs=V,this.updater=Y||D}var Ae=Me.prototype=new Pe;Ae.constructor=Me,F(Ae,G.prototype),Ae.isPureReactComponent=!0;var Te=Array.isArray,et=Object.prototype.hasOwnProperty,Oe={current:null},Ve={key:!0,ref:!0,__self:!0,__source:!0};function tt(S,N,Y){var Z,re={},ie=null,de=null;if(N!=null)for(Z in N.ref!==void 0&&(de=N.ref),N.key!==void 0&&(ie=""+N.key),N)et.call(N,Z)&&!Ve.hasOwnProperty(Z)&&(re[Z]=N[Z]);var le=arguments.length-2;if(le===1)re.children=Y;else if(1<le){for(var _e=Array(le),ht=0;ht<le;ht++)_e[ht]=arguments[ht+2];re.children=_e}if(S&&S.defaultProps)for(Z in le=S.defaultProps,le)re[Z]===void 0&&(re[Z]=le[Z]);return{$$typeof:i,type:S,key:ie,ref:de,props:re,_owner:Oe.current}}function wt(S,N){return{$$typeof:i,type:S.type,key:N,ref:S.ref,props:S.props,_owner:S._owner}}function Rt(S){return typeof S=="object"&&S!==null&&S.$$typeof===i}function Qn(S){var N={"=":"=0",":":"=2"};return"$"+S.replace(/[=:]/g,function(Y){return N[Y]})}var jt=/\/+/g;function ft(S,N){return typeof S=="object"&&S!==null&&S.key!=null?Qn(""+S.key):N.toString(36)}function Nt(S,N,Y,Z,re){var ie=typeof S;(ie==="undefined"||ie==="boolean")&&(S=null);var de=!1;if(S===null)de=!0;else switch(ie){case"string":case"number":de=!0;break;case"object":switch(S.$$typeof){case i:case e:de=!0}}if(de)return de=S,re=re(de),S=Z===""?"."+ft(de,0):Z,Te(re)?(Y="",S!=null&&(Y=S.replace(jt,"$&/")+"/"),Nt(re,N,Y,"",function(ht){return ht})):re!=null&&(Rt(re)&&(re=wt(re,Y+(!re.key||de&&de.key===re.key?"":(""+re.key).replace(jt,"$&/")+"/")+S)),N.push(re)),1;if(de=0,Z=Z===""?".":Z+":",Te(S))for(var le=0;le<S.length;le++){ie=S[le];var _e=Z+ft(ie,le);de+=Nt(ie,N,Y,_e,re)}else if(_e=T(S),typeof _e=="function")for(S=_e.call(S),le=0;!(ie=S.next()).done;)ie=ie.value,_e=Z+ft(ie,le++),de+=Nt(ie,N,Y,_e,re);else if(ie==="object")throw N=String(S),Error("Objects are not valid as a React child (found: "+(N==="[object Object]"?"object with keys {"+Object.keys(S).join(", ")+"}":N)+"). If you meant to render a collection of children, use an array instead.");return de}function Vt(S,N,Y){if(S==null)return S;var Z=[],re=0;return Nt(S,Z,"","",function(ie){return N.call(Y,ie,re++)}),Z}function nt(S){if(S._status===-1){var N=S._result;N=N(),N.then(function(Y){(S._status===0||S._status===-1)&&(S._status=1,S._result=Y)},function(Y){(S._status===0||S._status===-1)&&(S._status=2,S._result=Y)}),S._status===-1&&(S._status=0,S._result=N)}if(S._status===1)return S._result.default;throw S._result}var Se={current:null},L={transition:null},$={ReactCurrentDispatcher:Se,ReactCurrentBatchConfig:L,ReactCurrentOwner:Oe};function U(){throw Error("act(...) is not supported in production builds of React.")}return X.Children={map:Vt,forEach:function(S,N,Y){Vt(S,function(){N.apply(this,arguments)},Y)},count:function(S){var N=0;return Vt(S,function(){N++}),N},toArray:function(S){return Vt(S,function(N){return N})||[]},only:function(S){if(!Rt(S))throw Error("React.Children.only expected to receive a single React element child.");return S}},X.Component=G,X.Fragment=n,X.Profiler=l,X.PureComponent=Me,X.StrictMode=s,X.Suspense=m,X.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=$,X.act=U,X.cloneElement=function(S,N,Y){if(S==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+S+".");var Z=F({},S.props),re=S.key,ie=S.ref,de=S._owner;if(N!=null){if(N.ref!==void 0&&(ie=N.ref,de=Oe.current),N.key!==void 0&&(re=""+N.key),S.type&&S.type.defaultProps)var le=S.type.defaultProps;for(_e in N)et.call(N,_e)&&!Ve.hasOwnProperty(_e)&&(Z[_e]=N[_e]===void 0&&le!==void 0?le[_e]:N[_e])}var _e=arguments.length-2;if(_e===1)Z.children=Y;else if(1<_e){le=Array(_e);for(var ht=0;ht<_e;ht++)le[ht]=arguments[ht+2];Z.children=le}return{$$typeof:i,type:S.type,key:re,ref:ie,props:Z,_owner:de}},X.createContext=function(S){return S={$$typeof:d,_currentValue:S,_currentValue2:S,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},S.Provider={$$typeof:u,_context:S},S.Consumer=S},X.createElement=tt,X.createFactory=function(S){var N=tt.bind(null,S);return N.type=S,N},X.createRef=function(){return{current:null}},X.forwardRef=function(S){return{$$typeof:h,render:S}},X.isValidElement=Rt,X.lazy=function(S){return{$$typeof:E,_payload:{_status:-1,_result:S},_init:nt}},X.memo=function(S,N){return{$$typeof:g,type:S,compare:N===void 0?null:N}},X.startTransition=function(S){var N=L.transition;L.transition={};try{S()}finally{L.transition=N}},X.unstable_act=U,X.useCallback=function(S,N){return Se.current.useCallback(S,N)},X.useContext=function(S){return Se.current.useContext(S)},X.useDebugValue=function(){},X.useDeferredValue=function(S){return Se.current.useDeferredValue(S)},X.useEffect=function(S,N){return Se.current.useEffect(S,N)},X.useId=function(){return Se.current.useId()},X.useImperativeHandle=function(S,N,Y){return Se.current.useImperativeHandle(S,N,Y)},X.useInsertionEffect=function(S,N){return Se.current.useInsertionEffect(S,N)},X.useLayoutEffect=function(S,N){return Se.current.useLayoutEffect(S,N)},X.useMemo=function(S,N){return Se.current.useMemo(S,N)},X.useReducer=function(S,N,Y){return Se.current.useReducer(S,N,Y)},X.useRef=function(S){return Se.current.useRef(S)},X.useState=function(S){return Se.current.useState(S)},X.useSyncExternalStore=function(S,N,Y){return Se.current.useSyncExternalStore(S,N,Y)},X.useTransition=function(){return Se.current.useTransition()},X.version="18.3.1",X}var sp;function gc(){return sp||(sp=1,Au.exports=Ov()),Au.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var op;function xv(){if(op)return es;op=1;var i=gc(),e=Symbol.for("react.element"),n=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,l=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u={key:!0,ref:!0,__self:!0,__source:!0};function d(h,m,g){var E,w={},T=null,D=null;g!==void 0&&(T=""+g),m.key!==void 0&&(T=""+m.key),m.ref!==void 0&&(D=m.ref);for(E in m)s.call(m,E)&&!u.hasOwnProperty(E)&&(w[E]=m[E]);if(h&&h.defaultProps)for(E in m=h.defaultProps,m)w[E]===void 0&&(w[E]=m[E]);return{$$typeof:e,type:h,key:T,ref:D,props:w,_owner:l.current}}return es.Fragment=n,es.jsx=d,es.jsxs=d,es}var lp;function Dv(){return lp||(lp=1,Pu.exports=xv()),Pu.exports}var ve=Dv(),ls=gc();const $o=Av(ls);var Go={},Ou={exports:{}},at={},xu={exports:{}},Du={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ap;function Lv(){return ap||(ap=1,function(i){function e(L,$){var U=L.length;L.push($);e:for(;0<U;){var S=U-1>>>1,N=L[S];if(0<l(N,$))L[S]=$,L[U]=N,U=S;else break e}}function n(L){return L.length===0?null:L[0]}function s(L){if(L.length===0)return null;var $=L[0],U=L.pop();if(U!==$){L[0]=U;e:for(var S=0,N=L.length,Y=N>>>1;S<Y;){var Z=2*(S+1)-1,re=L[Z],ie=Z+1,de=L[ie];if(0>l(re,U))ie<N&&0>l(de,re)?(L[S]=de,L[ie]=U,S=ie):(L[S]=re,L[Z]=U,S=Z);else if(ie<N&&0>l(de,U))L[S]=de,L[ie]=U,S=ie;else break e}}return $}function l(L,$){var U=L.sortIndex-$.sortIndex;return U!==0?U:L.id-$.id}if(typeof performance=="object"&&typeof performance.now=="function"){var u=performance;i.unstable_now=function(){return u.now()}}else{var d=Date,h=d.now();i.unstable_now=function(){return d.now()-h}}var m=[],g=[],E=1,w=null,T=3,D=!1,F=!1,V=!1,G=typeof setTimeout=="function"?setTimeout:null,Pe=typeof clearTimeout=="function"?clearTimeout:null,Me=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function Ae(L){for(var $=n(g);$!==null;){if($.callback===null)s(g);else if($.startTime<=L)s(g),$.sortIndex=$.expirationTime,e(m,$);else break;$=n(g)}}function Te(L){if(V=!1,Ae(L),!F)if(n(m)!==null)F=!0,nt(et);else{var $=n(g);$!==null&&Se(Te,$.startTime-L)}}function et(L,$){F=!1,V&&(V=!1,Pe(tt),tt=-1),D=!0;var U=T;try{for(Ae($),w=n(m);w!==null&&(!(w.expirationTime>$)||L&&!Qn());){var S=w.callback;if(typeof S=="function"){w.callback=null,T=w.priorityLevel;var N=S(w.expirationTime<=$);$=i.unstable_now(),typeof N=="function"?w.callback=N:w===n(m)&&s(m),Ae($)}else s(m);w=n(m)}if(w!==null)var Y=!0;else{var Z=n(g);Z!==null&&Se(Te,Z.startTime-$),Y=!1}return Y}finally{w=null,T=U,D=!1}}var Oe=!1,Ve=null,tt=-1,wt=5,Rt=-1;function Qn(){return!(i.unstable_now()-Rt<wt)}function jt(){if(Ve!==null){var L=i.unstable_now();Rt=L;var $=!0;try{$=Ve(!0,L)}finally{$?ft():(Oe=!1,Ve=null)}}else Oe=!1}var ft;if(typeof Me=="function")ft=function(){Me(jt)};else if(typeof MessageChannel<"u"){var Nt=new MessageChannel,Vt=Nt.port2;Nt.port1.onmessage=jt,ft=function(){Vt.postMessage(null)}}else ft=function(){G(jt,0)};function nt(L){Ve=L,Oe||(Oe=!0,ft())}function Se(L,$){tt=G(function(){L(i.unstable_now())},$)}i.unstable_IdlePriority=5,i.unstable_ImmediatePriority=1,i.unstable_LowPriority=4,i.unstable_NormalPriority=3,i.unstable_Profiling=null,i.unstable_UserBlockingPriority=2,i.unstable_cancelCallback=function(L){L.callback=null},i.unstable_continueExecution=function(){F||D||(F=!0,nt(et))},i.unstable_forceFrameRate=function(L){0>L||125<L?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):wt=0<L?Math.floor(1e3/L):5},i.unstable_getCurrentPriorityLevel=function(){return T},i.unstable_getFirstCallbackNode=function(){return n(m)},i.unstable_next=function(L){switch(T){case 1:case 2:case 3:var $=3;break;default:$=T}var U=T;T=$;try{return L()}finally{T=U}},i.unstable_pauseExecution=function(){},i.unstable_requestPaint=function(){},i.unstable_runWithPriority=function(L,$){switch(L){case 1:case 2:case 3:case 4:case 5:break;default:L=3}var U=T;T=L;try{return $()}finally{T=U}},i.unstable_scheduleCallback=function(L,$,U){var S=i.unstable_now();switch(typeof U=="object"&&U!==null?(U=U.delay,U=typeof U=="number"&&0<U?S+U:S):U=S,L){case 1:var N=-1;break;case 2:N=250;break;case 5:N=1073741823;break;case 4:N=1e4;break;default:N=5e3}return N=U+N,L={id:E++,callback:$,priorityLevel:L,startTime:U,expirationTime:N,sortIndex:-1},U>S?(L.sortIndex=U,e(g,L),n(m)===null&&L===n(g)&&(V?(Pe(tt),tt=-1):V=!0,Se(Te,U-S))):(L.sortIndex=N,e(m,L),F||D||(F=!0,nt(et))),L},i.unstable_shouldYield=Qn,i.unstable_wrapCallback=function(L){var $=T;return function(){var U=T;T=$;try{return L.apply(this,arguments)}finally{T=U}}}}(Du)),Du}var up;function Mv(){return up||(up=1,xu.exports=Lv()),xu.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var cp;function Fv(){if(cp)return at;cp=1;var i=gc(),e=Mv();function n(t){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+t,o=1;o<arguments.length;o++)r+="&args[]="+encodeURIComponent(arguments[o]);return"Minified React error #"+t+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var s=new Set,l={};function u(t,r){d(t,r),d(t+"Capture",r)}function d(t,r){for(l[t]=r,t=0;t<r.length;t++)s.add(r[t])}var h=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),m=Object.prototype.hasOwnProperty,g=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,E={},w={};function T(t){return m.call(w,t)?!0:m.call(E,t)?!1:g.test(t)?w[t]=!0:(E[t]=!0,!1)}function D(t,r,o,a){if(o!==null&&o.type===0)return!1;switch(typeof r){case"function":case"symbol":return!0;case"boolean":return a?!1:o!==null?!o.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function F(t,r,o,a){if(r===null||typeof r>"u"||D(t,r,o,a))return!0;if(a)return!1;if(o!==null)switch(o.type){case 3:return!r;case 4:return r===!1;case 5:return isNaN(r);case 6:return isNaN(r)||1>r}return!1}function V(t,r,o,a,c,f,p){this.acceptsBooleans=r===2||r===3||r===4,this.attributeName=a,this.attributeNamespace=c,this.mustUseProperty=o,this.propertyName=t,this.type=r,this.sanitizeURL=f,this.removeEmptyString=p}var G={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){G[t]=new V(t,0,!1,t,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var r=t[0];G[r]=new V(r,1,!1,t[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(t){G[t]=new V(t,2,!1,t.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){G[t]=new V(t,2,!1,t,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){G[t]=new V(t,3,!1,t.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(t){G[t]=new V(t,3,!0,t,null,!1,!1)}),["capture","download"].forEach(function(t){G[t]=new V(t,4,!1,t,null,!1,!1)}),["cols","rows","size","span"].forEach(function(t){G[t]=new V(t,6,!1,t,null,!1,!1)}),["rowSpan","start"].forEach(function(t){G[t]=new V(t,5,!1,t.toLowerCase(),null,!1,!1)});var Pe=/[\-:]([a-z])/g;function Me(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var r=t.replace(Pe,Me);G[r]=new V(r,1,!1,t,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var r=t.replace(Pe,Me);G[r]=new V(r,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(t){var r=t.replace(Pe,Me);G[r]=new V(r,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(t){G[t]=new V(t,1,!1,t.toLowerCase(),null,!1,!1)}),G.xlinkHref=new V("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(t){G[t]=new V(t,1,!1,t.toLowerCase(),null,!0,!0)});function Ae(t,r,o,a){var c=G.hasOwnProperty(r)?G[r]:null;(c!==null?c.type!==0:a||!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(F(r,o,c,a)&&(o=null),a||c===null?T(r)&&(o===null?t.removeAttribute(r):t.setAttribute(r,""+o)):c.mustUseProperty?t[c.propertyName]=o===null?c.type===3?!1:"":o:(r=c.attributeName,a=c.attributeNamespace,o===null?t.removeAttribute(r):(c=c.type,o=c===3||c===4&&o===!0?"":""+o,a?t.setAttributeNS(a,r,o):t.setAttribute(r,o))))}var Te=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,et=Symbol.for("react.element"),Oe=Symbol.for("react.portal"),Ve=Symbol.for("react.fragment"),tt=Symbol.for("react.strict_mode"),wt=Symbol.for("react.profiler"),Rt=Symbol.for("react.provider"),Qn=Symbol.for("react.context"),jt=Symbol.for("react.forward_ref"),ft=Symbol.for("react.suspense"),Nt=Symbol.for("react.suspense_list"),Vt=Symbol.for("react.memo"),nt=Symbol.for("react.lazy"),Se=Symbol.for("react.offscreen"),L=Symbol.iterator;function $(t){return t===null||typeof t!="object"?null:(t=L&&t[L]||t["@@iterator"],typeof t=="function"?t:null)}var U=Object.assign,S;function N(t){if(S===void 0)try{throw Error()}catch(o){var r=o.stack.trim().match(/\n( *(at )?)/);S=r&&r[1]||""}return`
`+S+t}var Y=!1;function Z(t,r){if(!t||Y)return"";Y=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(r)if(r=function(){throw Error()},Object.defineProperty(r.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(r,[])}catch(k){var a=k}Reflect.construct(t,[],r)}else{try{r.call()}catch(k){a=k}t.call(r.prototype)}else{try{throw Error()}catch(k){a=k}t()}}catch(k){if(k&&a&&typeof k.stack=="string"){for(var c=k.stack.split(`
`),f=a.stack.split(`
`),p=c.length-1,_=f.length-1;1<=p&&0<=_&&c[p]!==f[_];)_--;for(;1<=p&&0<=_;p--,_--)if(c[p]!==f[_]){if(p!==1||_!==1)do if(p--,_--,0>_||c[p]!==f[_]){var y=`
`+c[p].replace(" at new "," at ");return t.displayName&&y.includes("<anonymous>")&&(y=y.replace("<anonymous>",t.displayName)),y}while(1<=p&&0<=_);break}}}finally{Y=!1,Error.prepareStackTrace=o}return(t=t?t.displayName||t.name:"")?N(t):""}function re(t){switch(t.tag){case 5:return N(t.type);case 16:return N("Lazy");case 13:return N("Suspense");case 19:return N("SuspenseList");case 0:case 2:case 15:return t=Z(t.type,!1),t;case 11:return t=Z(t.type.render,!1),t;case 1:return t=Z(t.type,!0),t;default:return""}}function ie(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Ve:return"Fragment";case Oe:return"Portal";case wt:return"Profiler";case tt:return"StrictMode";case ft:return"Suspense";case Nt:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Qn:return(t.displayName||"Context")+".Consumer";case Rt:return(t._context.displayName||"Context")+".Provider";case jt:var r=t.render;return t=t.displayName,t||(t=r.displayName||r.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Vt:return r=t.displayName||null,r!==null?r:ie(t.type)||"Memo";case nt:r=t._payload,t=t._init;try{return ie(t(r))}catch{}}return null}function de(t){var r=t.type;switch(t.tag){case 24:return"Cache";case 9:return(r.displayName||"Context")+".Consumer";case 10:return(r._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=r.render,t=t.displayName||t.name||"",r.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return r;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ie(r);case 8:return r===tt?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r}return null}function le(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function _e(t){var r=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function ht(t){var r=_e(t)?"checked":"value",o=Object.getOwnPropertyDescriptor(t.constructor.prototype,r),a=""+t[r];if(!t.hasOwnProperty(r)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var c=o.get,f=o.set;return Object.defineProperty(t,r,{configurable:!0,get:function(){return c.call(this)},set:function(p){a=""+p,f.call(this,p)}}),Object.defineProperty(t,r,{enumerable:o.enumerable}),{getValue:function(){return a},setValue:function(p){a=""+p},stopTracking:function(){t._valueTracker=null,delete t[r]}}}}function Ls(t){t._valueTracker||(t._valueTracker=ht(t))}function ud(t){if(!t)return!1;var r=t._valueTracker;if(!r)return!0;var o=r.getValue(),a="";return t&&(a=_e(t)?t.checked?"true":"false":t.value),t=a,t!==o?(r.setValue(t),!0):!1}function Ms(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Fl(t,r){var o=r.checked;return U({},r,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:o??t._wrapperState.initialChecked})}function cd(t,r){var o=r.defaultValue==null?"":r.defaultValue,a=r.checked!=null?r.checked:r.defaultChecked;o=le(r.value!=null?r.value:o),t._wrapperState={initialChecked:a,initialValue:o,controlled:r.type==="checkbox"||r.type==="radio"?r.checked!=null:r.value!=null}}function dd(t,r){r=r.checked,r!=null&&Ae(t,"checked",r,!1)}function bl(t,r){dd(t,r);var o=le(r.value),a=r.type;if(o!=null)a==="number"?(o===0&&t.value===""||t.value!=o)&&(t.value=""+o):t.value!==""+o&&(t.value=""+o);else if(a==="submit"||a==="reset"){t.removeAttribute("value");return}r.hasOwnProperty("value")?Ul(t,r.type,o):r.hasOwnProperty("defaultValue")&&Ul(t,r.type,le(r.defaultValue)),r.checked==null&&r.defaultChecked!=null&&(t.defaultChecked=!!r.defaultChecked)}function fd(t,r,o){if(r.hasOwnProperty("value")||r.hasOwnProperty("defaultValue")){var a=r.type;if(!(a!=="submit"&&a!=="reset"||r.value!==void 0&&r.value!==null))return;r=""+t._wrapperState.initialValue,o||r===t.value||(t.value=r),t.defaultValue=r}o=t.name,o!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,o!==""&&(t.name=o)}function Ul(t,r,o){(r!=="number"||Ms(t.ownerDocument)!==t)&&(o==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+o&&(t.defaultValue=""+o))}var mi=Array.isArray;function Er(t,r,o,a){if(t=t.options,r){r={};for(var c=0;c<o.length;c++)r["$"+o[c]]=!0;for(o=0;o<t.length;o++)c=r.hasOwnProperty("$"+t[o].value),t[o].selected!==c&&(t[o].selected=c),c&&a&&(t[o].defaultSelected=!0)}else{for(o=""+le(o),r=null,c=0;c<t.length;c++){if(t[c].value===o){t[c].selected=!0,a&&(t[c].defaultSelected=!0);return}r!==null||t[c].disabled||(r=t[c])}r!==null&&(r.selected=!0)}}function zl(t,r){if(r.dangerouslySetInnerHTML!=null)throw Error(n(91));return U({},r,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function hd(t,r){var o=r.value;if(o==null){if(o=r.children,r=r.defaultValue,o!=null){if(r!=null)throw Error(n(92));if(mi(o)){if(1<o.length)throw Error(n(93));o=o[0]}r=o}r==null&&(r=""),o=r}t._wrapperState={initialValue:le(o)}}function pd(t,r){var o=le(r.value),a=le(r.defaultValue);o!=null&&(o=""+o,o!==t.value&&(t.value=o),r.defaultValue==null&&t.defaultValue!==o&&(t.defaultValue=o)),a!=null&&(t.defaultValue=""+a)}function md(t){var r=t.textContent;r===t._wrapperState.initialValue&&r!==""&&r!==null&&(t.value=r)}function gd(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Wl(t,r){return t==null||t==="http://www.w3.org/1999/xhtml"?gd(r):t==="http://www.w3.org/2000/svg"&&r==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Fs,_d=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(r,o,a,c){MSApp.execUnsafeLocalFunction(function(){return t(r,o,a,c)})}:t}(function(t,r){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=r;else{for(Fs=Fs||document.createElement("div"),Fs.innerHTML="<svg>"+r.valueOf().toString()+"</svg>",r=Fs.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;r.firstChild;)t.appendChild(r.firstChild)}});function gi(t,r){if(r){var o=t.firstChild;if(o&&o===t.lastChild&&o.nodeType===3){o.nodeValue=r;return}}t.textContent=r}var _i={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},L_=["Webkit","ms","Moz","O"];Object.keys(_i).forEach(function(t){L_.forEach(function(r){r=r+t.charAt(0).toUpperCase()+t.substring(1),_i[r]=_i[t]})});function yd(t,r,o){return r==null||typeof r=="boolean"||r===""?"":o||typeof r!="number"||r===0||_i.hasOwnProperty(t)&&_i[t]?(""+r).trim():r+"px"}function vd(t,r){t=t.style;for(var o in r)if(r.hasOwnProperty(o)){var a=o.indexOf("--")===0,c=yd(o,r[o],a);o==="float"&&(o="cssFloat"),a?t.setProperty(o,c):t[o]=c}}var M_=U({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function jl(t,r){if(r){if(M_[t]&&(r.children!=null||r.dangerouslySetInnerHTML!=null))throw Error(n(137,t));if(r.dangerouslySetInnerHTML!=null){if(r.children!=null)throw Error(n(60));if(typeof r.dangerouslySetInnerHTML!="object"||!("__html"in r.dangerouslySetInnerHTML))throw Error(n(61))}if(r.style!=null&&typeof r.style!="object")throw Error(n(62))}}function Vl(t,r){if(t.indexOf("-")===-1)return typeof r.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Bl=null;function Hl(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var $l=null,Sr=null,Cr=null;function wd(t){if(t=zi(t)){if(typeof $l!="function")throw Error(n(280));var r=t.stateNode;r&&(r=so(r),$l(t.stateNode,t.type,r))}}function Ed(t){Sr?Cr?Cr.push(t):Cr=[t]:Sr=t}function Sd(){if(Sr){var t=Sr,r=Cr;if(Cr=Sr=null,wd(t),r)for(t=0;t<r.length;t++)wd(r[t])}}function Cd(t,r){return t(r)}function Id(){}var Gl=!1;function Td(t,r,o){if(Gl)return t(r,o);Gl=!0;try{return Cd(t,r,o)}finally{Gl=!1,(Sr!==null||Cr!==null)&&(Id(),Sd())}}function yi(t,r){var o=t.stateNode;if(o===null)return null;var a=so(o);if(a===null)return null;o=a[r];e:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(t=t.type,a=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!a;break e;default:t=!1}if(t)return null;if(o&&typeof o!="function")throw Error(n(231,r,typeof o));return o}var Kl=!1;if(h)try{var vi={};Object.defineProperty(vi,"passive",{get:function(){Kl=!0}}),window.addEventListener("test",vi,vi),window.removeEventListener("test",vi,vi)}catch{Kl=!1}function F_(t,r,o,a,c,f,p,_,y){var k=Array.prototype.slice.call(arguments,3);try{r.apply(o,k)}catch(P){this.onError(P)}}var wi=!1,bs=null,Us=!1,ql=null,b_={onError:function(t){wi=!0,bs=t}};function U_(t,r,o,a,c,f,p,_,y){wi=!1,bs=null,F_.apply(b_,arguments)}function z_(t,r,o,a,c,f,p,_,y){if(U_.apply(this,arguments),wi){if(wi){var k=bs;wi=!1,bs=null}else throw Error(n(198));Us||(Us=!0,ql=k)}}function Yn(t){var r=t,o=t;if(t.alternate)for(;r.return;)r=r.return;else{t=r;do r=t,r.flags&4098&&(o=r.return),t=r.return;while(t)}return r.tag===3?o:null}function kd(t){if(t.tag===13){var r=t.memoizedState;if(r===null&&(t=t.alternate,t!==null&&(r=t.memoizedState)),r!==null)return r.dehydrated}return null}function Rd(t){if(Yn(t)!==t)throw Error(n(188))}function W_(t){var r=t.alternate;if(!r){if(r=Yn(t),r===null)throw Error(n(188));return r!==t?null:t}for(var o=t,a=r;;){var c=o.return;if(c===null)break;var f=c.alternate;if(f===null){if(a=c.return,a!==null){o=a;continue}break}if(c.child===f.child){for(f=c.child;f;){if(f===o)return Rd(c),t;if(f===a)return Rd(c),r;f=f.sibling}throw Error(n(188))}if(o.return!==a.return)o=c,a=f;else{for(var p=!1,_=c.child;_;){if(_===o){p=!0,o=c,a=f;break}if(_===a){p=!0,a=c,o=f;break}_=_.sibling}if(!p){for(_=f.child;_;){if(_===o){p=!0,o=f,a=c;break}if(_===a){p=!0,a=f,o=c;break}_=_.sibling}if(!p)throw Error(n(189))}}if(o.alternate!==a)throw Error(n(190))}if(o.tag!==3)throw Error(n(188));return o.stateNode.current===o?t:r}function Nd(t){return t=W_(t),t!==null?Pd(t):null}function Pd(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var r=Pd(t);if(r!==null)return r;t=t.sibling}return null}var Ad=e.unstable_scheduleCallback,Od=e.unstable_cancelCallback,j_=e.unstable_shouldYield,V_=e.unstable_requestPaint,ke=e.unstable_now,B_=e.unstable_getCurrentPriorityLevel,Ql=e.unstable_ImmediatePriority,xd=e.unstable_UserBlockingPriority,zs=e.unstable_NormalPriority,H_=e.unstable_LowPriority,Dd=e.unstable_IdlePriority,Ws=null,Bt=null;function $_(t){if(Bt&&typeof Bt.onCommitFiberRoot=="function")try{Bt.onCommitFiberRoot(Ws,t,void 0,(t.current.flags&128)===128)}catch{}}var Pt=Math.clz32?Math.clz32:q_,G_=Math.log,K_=Math.LN2;function q_(t){return t>>>=0,t===0?32:31-(G_(t)/K_|0)|0}var js=64,Vs=4194304;function Ei(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Bs(t,r){var o=t.pendingLanes;if(o===0)return 0;var a=0,c=t.suspendedLanes,f=t.pingedLanes,p=o&268435455;if(p!==0){var _=p&~c;_!==0?a=Ei(_):(f&=p,f!==0&&(a=Ei(f)))}else p=o&~c,p!==0?a=Ei(p):f!==0&&(a=Ei(f));if(a===0)return 0;if(r!==0&&r!==a&&!(r&c)&&(c=a&-a,f=r&-r,c>=f||c===16&&(f&4194240)!==0))return r;if(a&4&&(a|=o&16),r=t.entangledLanes,r!==0)for(t=t.entanglements,r&=a;0<r;)o=31-Pt(r),c=1<<o,a|=t[o],r&=~c;return a}function Q_(t,r){switch(t){case 1:case 2:case 4:return r+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Y_(t,r){for(var o=t.suspendedLanes,a=t.pingedLanes,c=t.expirationTimes,f=t.pendingLanes;0<f;){var p=31-Pt(f),_=1<<p,y=c[p];y===-1?(!(_&o)||_&a)&&(c[p]=Q_(_,r)):y<=r&&(t.expiredLanes|=_),f&=~_}}function Yl(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Ld(){var t=js;return js<<=1,!(js&4194240)&&(js=64),t}function Xl(t){for(var r=[],o=0;31>o;o++)r.push(t);return r}function Si(t,r,o){t.pendingLanes|=r,r!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,r=31-Pt(r),t[r]=o}function X_(t,r){var o=t.pendingLanes&~r;t.pendingLanes=r,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=r,t.mutableReadLanes&=r,t.entangledLanes&=r,r=t.entanglements;var a=t.eventTimes;for(t=t.expirationTimes;0<o;){var c=31-Pt(o),f=1<<c;r[c]=0,a[c]=-1,t[c]=-1,o&=~f}}function Jl(t,r){var o=t.entangledLanes|=r;for(t=t.entanglements;o;){var a=31-Pt(o),c=1<<a;c&r|t[a]&r&&(t[a]|=r),o&=~c}}var ae=0;function Md(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Fd,Zl,bd,Ud,zd,ea=!1,Hs=[],mn=null,gn=null,_n=null,Ci=new Map,Ii=new Map,yn=[],J_="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Wd(t,r){switch(t){case"focusin":case"focusout":mn=null;break;case"dragenter":case"dragleave":gn=null;break;case"mouseover":case"mouseout":_n=null;break;case"pointerover":case"pointerout":Ci.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ii.delete(r.pointerId)}}function Ti(t,r,o,a,c,f){return t===null||t.nativeEvent!==f?(t={blockedOn:r,domEventName:o,eventSystemFlags:a,nativeEvent:f,targetContainers:[c]},r!==null&&(r=zi(r),r!==null&&Zl(r)),t):(t.eventSystemFlags|=a,r=t.targetContainers,c!==null&&r.indexOf(c)===-1&&r.push(c),t)}function Z_(t,r,o,a,c){switch(r){case"focusin":return mn=Ti(mn,t,r,o,a,c),!0;case"dragenter":return gn=Ti(gn,t,r,o,a,c),!0;case"mouseover":return _n=Ti(_n,t,r,o,a,c),!0;case"pointerover":var f=c.pointerId;return Ci.set(f,Ti(Ci.get(f)||null,t,r,o,a,c)),!0;case"gotpointercapture":return f=c.pointerId,Ii.set(f,Ti(Ii.get(f)||null,t,r,o,a,c)),!0}return!1}function jd(t){var r=Xn(t.target);if(r!==null){var o=Yn(r);if(o!==null){if(r=o.tag,r===13){if(r=kd(o),r!==null){t.blockedOn=r,zd(t.priority,function(){bd(o)});return}}else if(r===3&&o.stateNode.current.memoizedState.isDehydrated){t.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}t.blockedOn=null}function $s(t){if(t.blockedOn!==null)return!1;for(var r=t.targetContainers;0<r.length;){var o=na(t.domEventName,t.eventSystemFlags,r[0],t.nativeEvent);if(o===null){o=t.nativeEvent;var a=new o.constructor(o.type,o);Bl=a,o.target.dispatchEvent(a),Bl=null}else return r=zi(o),r!==null&&Zl(r),t.blockedOn=o,!1;r.shift()}return!0}function Vd(t,r,o){$s(t)&&o.delete(r)}function ey(){ea=!1,mn!==null&&$s(mn)&&(mn=null),gn!==null&&$s(gn)&&(gn=null),_n!==null&&$s(_n)&&(_n=null),Ci.forEach(Vd),Ii.forEach(Vd)}function ki(t,r){t.blockedOn===r&&(t.blockedOn=null,ea||(ea=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,ey)))}function Ri(t){function r(c){return ki(c,t)}if(0<Hs.length){ki(Hs[0],t);for(var o=1;o<Hs.length;o++){var a=Hs[o];a.blockedOn===t&&(a.blockedOn=null)}}for(mn!==null&&ki(mn,t),gn!==null&&ki(gn,t),_n!==null&&ki(_n,t),Ci.forEach(r),Ii.forEach(r),o=0;o<yn.length;o++)a=yn[o],a.blockedOn===t&&(a.blockedOn=null);for(;0<yn.length&&(o=yn[0],o.blockedOn===null);)jd(o),o.blockedOn===null&&yn.shift()}var Ir=Te.ReactCurrentBatchConfig,Gs=!0;function ty(t,r,o,a){var c=ae,f=Ir.transition;Ir.transition=null;try{ae=1,ta(t,r,o,a)}finally{ae=c,Ir.transition=f}}function ny(t,r,o,a){var c=ae,f=Ir.transition;Ir.transition=null;try{ae=4,ta(t,r,o,a)}finally{ae=c,Ir.transition=f}}function ta(t,r,o,a){if(Gs){var c=na(t,r,o,a);if(c===null)va(t,r,a,Ks,o),Wd(t,a);else if(Z_(c,t,r,o,a))a.stopPropagation();else if(Wd(t,a),r&4&&-1<J_.indexOf(t)){for(;c!==null;){var f=zi(c);if(f!==null&&Fd(f),f=na(t,r,o,a),f===null&&va(t,r,a,Ks,o),f===c)break;c=f}c!==null&&a.stopPropagation()}else va(t,r,a,null,o)}}var Ks=null;function na(t,r,o,a){if(Ks=null,t=Hl(a),t=Xn(t),t!==null)if(r=Yn(t),r===null)t=null;else if(o=r.tag,o===13){if(t=kd(r),t!==null)return t;t=null}else if(o===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;t=null}else r!==t&&(t=null);return Ks=t,null}function Bd(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(B_()){case Ql:return 1;case xd:return 4;case zs:case H_:return 16;case Dd:return 536870912;default:return 16}default:return 16}}var vn=null,ra=null,qs=null;function Hd(){if(qs)return qs;var t,r=ra,o=r.length,a,c="value"in vn?vn.value:vn.textContent,f=c.length;for(t=0;t<o&&r[t]===c[t];t++);var p=o-t;for(a=1;a<=p&&r[o-a]===c[f-a];a++);return qs=c.slice(t,1<a?1-a:void 0)}function Qs(t){var r=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&r===13&&(t=13)):t=r,t===10&&(t=13),32<=t||t===13?t:0}function Ys(){return!0}function $d(){return!1}function pt(t){function r(o,a,c,f,p){this._reactName=o,this._targetInst=c,this.type=a,this.nativeEvent=f,this.target=p,this.currentTarget=null;for(var _ in t)t.hasOwnProperty(_)&&(o=t[_],this[_]=o?o(f):f[_]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?Ys:$d,this.isPropagationStopped=$d,this}return U(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=Ys)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=Ys)},persist:function(){},isPersistent:Ys}),r}var Tr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ia=pt(Tr),Ni=U({},Tr,{view:0,detail:0}),ry=pt(Ni),sa,oa,Pi,Xs=U({},Ni,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:aa,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Pi&&(Pi&&t.type==="mousemove"?(sa=t.screenX-Pi.screenX,oa=t.screenY-Pi.screenY):oa=sa=0,Pi=t),sa)},movementY:function(t){return"movementY"in t?t.movementY:oa}}),Gd=pt(Xs),iy=U({},Xs,{dataTransfer:0}),sy=pt(iy),oy=U({},Ni,{relatedTarget:0}),la=pt(oy),ly=U({},Tr,{animationName:0,elapsedTime:0,pseudoElement:0}),ay=pt(ly),uy=U({},Tr,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),cy=pt(uy),dy=U({},Tr,{data:0}),Kd=pt(dy),fy={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},hy={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},py={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function my(t){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(t):(t=py[t])?!!r[t]:!1}function aa(){return my}var gy=U({},Ni,{key:function(t){if(t.key){var r=fy[t.key]||t.key;if(r!=="Unidentified")return r}return t.type==="keypress"?(t=Qs(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?hy[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:aa,charCode:function(t){return t.type==="keypress"?Qs(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Qs(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),_y=pt(gy),yy=U({},Xs,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),qd=pt(yy),vy=U({},Ni,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:aa}),wy=pt(vy),Ey=U({},Tr,{propertyName:0,elapsedTime:0,pseudoElement:0}),Sy=pt(Ey),Cy=U({},Xs,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Iy=pt(Cy),Ty=[9,13,27,32],ua=h&&"CompositionEvent"in window,Ai=null;h&&"documentMode"in document&&(Ai=document.documentMode);var ky=h&&"TextEvent"in window&&!Ai,Qd=h&&(!ua||Ai&&8<Ai&&11>=Ai),Yd=" ",Xd=!1;function Jd(t,r){switch(t){case"keyup":return Ty.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Zd(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var kr=!1;function Ry(t,r){switch(t){case"compositionend":return Zd(r);case"keypress":return r.which!==32?null:(Xd=!0,Yd);case"textInput":return t=r.data,t===Yd&&Xd?null:t;default:return null}}function Ny(t,r){if(kr)return t==="compositionend"||!ua&&Jd(t,r)?(t=Hd(),qs=ra=vn=null,kr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return Qd&&r.locale!=="ko"?null:r.data;default:return null}}var Py={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ef(t){var r=t&&t.nodeName&&t.nodeName.toLowerCase();return r==="input"?!!Py[t.type]:r==="textarea"}function tf(t,r,o,a){Ed(a),r=no(r,"onChange"),0<r.length&&(o=new ia("onChange","change",null,o,a),t.push({event:o,listeners:r}))}var Oi=null,xi=null;function Ay(t){wf(t,0)}function Js(t){var r=Or(t);if(ud(r))return t}function Oy(t,r){if(t==="change")return r}var nf=!1;if(h){var ca;if(h){var da="oninput"in document;if(!da){var rf=document.createElement("div");rf.setAttribute("oninput","return;"),da=typeof rf.oninput=="function"}ca=da}else ca=!1;nf=ca&&(!document.documentMode||9<document.documentMode)}function sf(){Oi&&(Oi.detachEvent("onpropertychange",of),xi=Oi=null)}function of(t){if(t.propertyName==="value"&&Js(xi)){var r=[];tf(r,xi,t,Hl(t)),Td(Ay,r)}}function xy(t,r,o){t==="focusin"?(sf(),Oi=r,xi=o,Oi.attachEvent("onpropertychange",of)):t==="focusout"&&sf()}function Dy(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Js(xi)}function Ly(t,r){if(t==="click")return Js(r)}function My(t,r){if(t==="input"||t==="change")return Js(r)}function Fy(t,r){return t===r&&(t!==0||1/t===1/r)||t!==t&&r!==r}var At=typeof Object.is=="function"?Object.is:Fy;function Di(t,r){if(At(t,r))return!0;if(typeof t!="object"||t===null||typeof r!="object"||r===null)return!1;var o=Object.keys(t),a=Object.keys(r);if(o.length!==a.length)return!1;for(a=0;a<o.length;a++){var c=o[a];if(!m.call(r,c)||!At(t[c],r[c]))return!1}return!0}function lf(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function af(t,r){var o=lf(t);t=0;for(var a;o;){if(o.nodeType===3){if(a=t+o.textContent.length,t<=r&&a>=r)return{node:o,offset:r-t};t=a}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=lf(o)}}function uf(t,r){return t&&r?t===r?!0:t&&t.nodeType===3?!1:r&&r.nodeType===3?uf(t,r.parentNode):"contains"in t?t.contains(r):t.compareDocumentPosition?!!(t.compareDocumentPosition(r)&16):!1:!1}function cf(){for(var t=window,r=Ms();r instanceof t.HTMLIFrameElement;){try{var o=typeof r.contentWindow.location.href=="string"}catch{o=!1}if(o)t=r.contentWindow;else break;r=Ms(t.document)}return r}function fa(t){var r=t&&t.nodeName&&t.nodeName.toLowerCase();return r&&(r==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||r==="textarea"||t.contentEditable==="true")}function by(t){var r=cf(),o=t.focusedElem,a=t.selectionRange;if(r!==o&&o&&o.ownerDocument&&uf(o.ownerDocument.documentElement,o)){if(a!==null&&fa(o)){if(r=a.start,t=a.end,t===void 0&&(t=r),"selectionStart"in o)o.selectionStart=r,o.selectionEnd=Math.min(t,o.value.length);else if(t=(r=o.ownerDocument||document)&&r.defaultView||window,t.getSelection){t=t.getSelection();var c=o.textContent.length,f=Math.min(a.start,c);a=a.end===void 0?f:Math.min(a.end,c),!t.extend&&f>a&&(c=a,a=f,f=c),c=af(o,f);var p=af(o,a);c&&p&&(t.rangeCount!==1||t.anchorNode!==c.node||t.anchorOffset!==c.offset||t.focusNode!==p.node||t.focusOffset!==p.offset)&&(r=r.createRange(),r.setStart(c.node,c.offset),t.removeAllRanges(),f>a?(t.addRange(r),t.extend(p.node,p.offset)):(r.setEnd(p.node,p.offset),t.addRange(r)))}}for(r=[],t=o;t=t.parentNode;)t.nodeType===1&&r.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<r.length;o++)t=r[o],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var Uy=h&&"documentMode"in document&&11>=document.documentMode,Rr=null,ha=null,Li=null,pa=!1;function df(t,r,o){var a=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;pa||Rr==null||Rr!==Ms(a)||(a=Rr,"selectionStart"in a&&fa(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),Li&&Di(Li,a)||(Li=a,a=no(ha,"onSelect"),0<a.length&&(r=new ia("onSelect","select",null,r,o),t.push({event:r,listeners:a}),r.target=Rr)))}function Zs(t,r){var o={};return o[t.toLowerCase()]=r.toLowerCase(),o["Webkit"+t]="webkit"+r,o["Moz"+t]="moz"+r,o}var Nr={animationend:Zs("Animation","AnimationEnd"),animationiteration:Zs("Animation","AnimationIteration"),animationstart:Zs("Animation","AnimationStart"),transitionend:Zs("Transition","TransitionEnd")},ma={},ff={};h&&(ff=document.createElement("div").style,"AnimationEvent"in window||(delete Nr.animationend.animation,delete Nr.animationiteration.animation,delete Nr.animationstart.animation),"TransitionEvent"in window||delete Nr.transitionend.transition);function eo(t){if(ma[t])return ma[t];if(!Nr[t])return t;var r=Nr[t],o;for(o in r)if(r.hasOwnProperty(o)&&o in ff)return ma[t]=r[o];return t}var hf=eo("animationend"),pf=eo("animationiteration"),mf=eo("animationstart"),gf=eo("transitionend"),_f=new Map,yf="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function wn(t,r){_f.set(t,r),u(r,[t])}for(var ga=0;ga<yf.length;ga++){var _a=yf[ga],zy=_a.toLowerCase(),Wy=_a[0].toUpperCase()+_a.slice(1);wn(zy,"on"+Wy)}wn(hf,"onAnimationEnd"),wn(pf,"onAnimationIteration"),wn(mf,"onAnimationStart"),wn("dblclick","onDoubleClick"),wn("focusin","onFocus"),wn("focusout","onBlur"),wn(gf,"onTransitionEnd"),d("onMouseEnter",["mouseout","mouseover"]),d("onMouseLeave",["mouseout","mouseover"]),d("onPointerEnter",["pointerout","pointerover"]),d("onPointerLeave",["pointerout","pointerover"]),u("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),u("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),u("onBeforeInput",["compositionend","keypress","textInput","paste"]),u("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Mi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),jy=new Set("cancel close invalid load scroll toggle".split(" ").concat(Mi));function vf(t,r,o){var a=t.type||"unknown-event";t.currentTarget=o,z_(a,r,void 0,t),t.currentTarget=null}function wf(t,r){r=(r&4)!==0;for(var o=0;o<t.length;o++){var a=t[o],c=a.event;a=a.listeners;e:{var f=void 0;if(r)for(var p=a.length-1;0<=p;p--){var _=a[p],y=_.instance,k=_.currentTarget;if(_=_.listener,y!==f&&c.isPropagationStopped())break e;vf(c,_,k),f=y}else for(p=0;p<a.length;p++){if(_=a[p],y=_.instance,k=_.currentTarget,_=_.listener,y!==f&&c.isPropagationStopped())break e;vf(c,_,k),f=y}}}if(Us)throw t=ql,Us=!1,ql=null,t}function pe(t,r){var o=r[Ta];o===void 0&&(o=r[Ta]=new Set);var a=t+"__bubble";o.has(a)||(Ef(r,t,2,!1),o.add(a))}function ya(t,r,o){var a=0;r&&(a|=4),Ef(o,t,a,r)}var to="_reactListening"+Math.random().toString(36).slice(2);function Fi(t){if(!t[to]){t[to]=!0,s.forEach(function(o){o!=="selectionchange"&&(jy.has(o)||ya(o,!1,t),ya(o,!0,t))});var r=t.nodeType===9?t:t.ownerDocument;r===null||r[to]||(r[to]=!0,ya("selectionchange",!1,r))}}function Ef(t,r,o,a){switch(Bd(r)){case 1:var c=ty;break;case 4:c=ny;break;default:c=ta}o=c.bind(null,r,o,t),c=void 0,!Kl||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(c=!0),a?c!==void 0?t.addEventListener(r,o,{capture:!0,passive:c}):t.addEventListener(r,o,!0):c!==void 0?t.addEventListener(r,o,{passive:c}):t.addEventListener(r,o,!1)}function va(t,r,o,a,c){var f=a;if(!(r&1)&&!(r&2)&&a!==null)e:for(;;){if(a===null)return;var p=a.tag;if(p===3||p===4){var _=a.stateNode.containerInfo;if(_===c||_.nodeType===8&&_.parentNode===c)break;if(p===4)for(p=a.return;p!==null;){var y=p.tag;if((y===3||y===4)&&(y=p.stateNode.containerInfo,y===c||y.nodeType===8&&y.parentNode===c))return;p=p.return}for(;_!==null;){if(p=Xn(_),p===null)return;if(y=p.tag,y===5||y===6){a=f=p;continue e}_=_.parentNode}}a=a.return}Td(function(){var k=f,P=Hl(o),A=[];e:{var R=_f.get(t);if(R!==void 0){var M=ia,z=t;switch(t){case"keypress":if(Qs(o)===0)break e;case"keydown":case"keyup":M=_y;break;case"focusin":z="focus",M=la;break;case"focusout":z="blur",M=la;break;case"beforeblur":case"afterblur":M=la;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":M=Gd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":M=sy;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":M=wy;break;case hf:case pf:case mf:M=ay;break;case gf:M=Sy;break;case"scroll":M=ry;break;case"wheel":M=Iy;break;case"copy":case"cut":case"paste":M=cy;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":M=qd}var W=(r&4)!==0,Re=!W&&t==="scroll",C=W?R!==null?R+"Capture":null:R;W=[];for(var v=k,I;v!==null;){I=v;var O=I.stateNode;if(I.tag===5&&O!==null&&(I=O,C!==null&&(O=yi(v,C),O!=null&&W.push(bi(v,O,I)))),Re)break;v=v.return}0<W.length&&(R=new M(R,z,null,o,P),A.push({event:R,listeners:W}))}}if(!(r&7)){e:{if(R=t==="mouseover"||t==="pointerover",M=t==="mouseout"||t==="pointerout",R&&o!==Bl&&(z=o.relatedTarget||o.fromElement)&&(Xn(z)||z[Yt]))break e;if((M||R)&&(R=P.window===P?P:(R=P.ownerDocument)?R.defaultView||R.parentWindow:window,M?(z=o.relatedTarget||o.toElement,M=k,z=z?Xn(z):null,z!==null&&(Re=Yn(z),z!==Re||z.tag!==5&&z.tag!==6)&&(z=null)):(M=null,z=k),M!==z)){if(W=Gd,O="onMouseLeave",C="onMouseEnter",v="mouse",(t==="pointerout"||t==="pointerover")&&(W=qd,O="onPointerLeave",C="onPointerEnter",v="pointer"),Re=M==null?R:Or(M),I=z==null?R:Or(z),R=new W(O,v+"leave",M,o,P),R.target=Re,R.relatedTarget=I,O=null,Xn(P)===k&&(W=new W(C,v+"enter",z,o,P),W.target=I,W.relatedTarget=Re,O=W),Re=O,M&&z)t:{for(W=M,C=z,v=0,I=W;I;I=Pr(I))v++;for(I=0,O=C;O;O=Pr(O))I++;for(;0<v-I;)W=Pr(W),v--;for(;0<I-v;)C=Pr(C),I--;for(;v--;){if(W===C||C!==null&&W===C.alternate)break t;W=Pr(W),C=Pr(C)}W=null}else W=null;M!==null&&Sf(A,R,M,W,!1),z!==null&&Re!==null&&Sf(A,Re,z,W,!0)}}e:{if(R=k?Or(k):window,M=R.nodeName&&R.nodeName.toLowerCase(),M==="select"||M==="input"&&R.type==="file")var j=Oy;else if(ef(R))if(nf)j=My;else{j=Dy;var B=xy}else(M=R.nodeName)&&M.toLowerCase()==="input"&&(R.type==="checkbox"||R.type==="radio")&&(j=Ly);if(j&&(j=j(t,k))){tf(A,j,o,P);break e}B&&B(t,R,k),t==="focusout"&&(B=R._wrapperState)&&B.controlled&&R.type==="number"&&Ul(R,"number",R.value)}switch(B=k?Or(k):window,t){case"focusin":(ef(B)||B.contentEditable==="true")&&(Rr=B,ha=k,Li=null);break;case"focusout":Li=ha=Rr=null;break;case"mousedown":pa=!0;break;case"contextmenu":case"mouseup":case"dragend":pa=!1,df(A,o,P);break;case"selectionchange":if(Uy)break;case"keydown":case"keyup":df(A,o,P)}var H;if(ua)e:{switch(t){case"compositionstart":var Q="onCompositionStart";break e;case"compositionend":Q="onCompositionEnd";break e;case"compositionupdate":Q="onCompositionUpdate";break e}Q=void 0}else kr?Jd(t,o)&&(Q="onCompositionEnd"):t==="keydown"&&o.keyCode===229&&(Q="onCompositionStart");Q&&(Qd&&o.locale!=="ko"&&(kr||Q!=="onCompositionStart"?Q==="onCompositionEnd"&&kr&&(H=Hd()):(vn=P,ra="value"in vn?vn.value:vn.textContent,kr=!0)),B=no(k,Q),0<B.length&&(Q=new Kd(Q,t,null,o,P),A.push({event:Q,listeners:B}),H?Q.data=H:(H=Zd(o),H!==null&&(Q.data=H)))),(H=ky?Ry(t,o):Ny(t,o))&&(k=no(k,"onBeforeInput"),0<k.length&&(P=new Kd("onBeforeInput","beforeinput",null,o,P),A.push({event:P,listeners:k}),P.data=H))}wf(A,r)})}function bi(t,r,o){return{instance:t,listener:r,currentTarget:o}}function no(t,r){for(var o=r+"Capture",a=[];t!==null;){var c=t,f=c.stateNode;c.tag===5&&f!==null&&(c=f,f=yi(t,o),f!=null&&a.unshift(bi(t,f,c)),f=yi(t,r),f!=null&&a.push(bi(t,f,c))),t=t.return}return a}function Pr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Sf(t,r,o,a,c){for(var f=r._reactName,p=[];o!==null&&o!==a;){var _=o,y=_.alternate,k=_.stateNode;if(y!==null&&y===a)break;_.tag===5&&k!==null&&(_=k,c?(y=yi(o,f),y!=null&&p.unshift(bi(o,y,_))):c||(y=yi(o,f),y!=null&&p.push(bi(o,y,_)))),o=o.return}p.length!==0&&t.push({event:r,listeners:p})}var Vy=/\r\n?/g,By=/\u0000|\uFFFD/g;function Cf(t){return(typeof t=="string"?t:""+t).replace(Vy,`
`).replace(By,"")}function ro(t,r,o){if(r=Cf(r),Cf(t)!==r&&o)throw Error(n(425))}function io(){}var wa=null,Ea=null;function Sa(t,r){return t==="textarea"||t==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var Ca=typeof setTimeout=="function"?setTimeout:void 0,Hy=typeof clearTimeout=="function"?clearTimeout:void 0,If=typeof Promise=="function"?Promise:void 0,$y=typeof queueMicrotask=="function"?queueMicrotask:typeof If<"u"?function(t){return If.resolve(null).then(t).catch(Gy)}:Ca;function Gy(t){setTimeout(function(){throw t})}function Ia(t,r){var o=r,a=0;do{var c=o.nextSibling;if(t.removeChild(o),c&&c.nodeType===8)if(o=c.data,o==="/$"){if(a===0){t.removeChild(c),Ri(r);return}a--}else o!=="$"&&o!=="$?"&&o!=="$!"||a++;o=c}while(o);Ri(r)}function En(t){for(;t!=null;t=t.nextSibling){var r=t.nodeType;if(r===1||r===3)break;if(r===8){if(r=t.data,r==="$"||r==="$!"||r==="$?")break;if(r==="/$")return null}}return t}function Tf(t){t=t.previousSibling;for(var r=0;t;){if(t.nodeType===8){var o=t.data;if(o==="$"||o==="$!"||o==="$?"){if(r===0)return t;r--}else o==="/$"&&r++}t=t.previousSibling}return null}var Ar=Math.random().toString(36).slice(2),Ht="__reactFiber$"+Ar,Ui="__reactProps$"+Ar,Yt="__reactContainer$"+Ar,Ta="__reactEvents$"+Ar,Ky="__reactListeners$"+Ar,qy="__reactHandles$"+Ar;function Xn(t){var r=t[Ht];if(r)return r;for(var o=t.parentNode;o;){if(r=o[Yt]||o[Ht]){if(o=r.alternate,r.child!==null||o!==null&&o.child!==null)for(t=Tf(t);t!==null;){if(o=t[Ht])return o;t=Tf(t)}return r}t=o,o=t.parentNode}return null}function zi(t){return t=t[Ht]||t[Yt],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Or(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(n(33))}function so(t){return t[Ui]||null}var ka=[],xr=-1;function Sn(t){return{current:t}}function me(t){0>xr||(t.current=ka[xr],ka[xr]=null,xr--)}function fe(t,r){xr++,ka[xr]=t.current,t.current=r}var Cn={},$e=Sn(Cn),rt=Sn(!1),Jn=Cn;function Dr(t,r){var o=t.type.contextTypes;if(!o)return Cn;var a=t.stateNode;if(a&&a.__reactInternalMemoizedUnmaskedChildContext===r)return a.__reactInternalMemoizedMaskedChildContext;var c={},f;for(f in o)c[f]=r[f];return a&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=c),c}function it(t){return t=t.childContextTypes,t!=null}function oo(){me(rt),me($e)}function kf(t,r,o){if($e.current!==Cn)throw Error(n(168));fe($e,r),fe(rt,o)}function Rf(t,r,o){var a=t.stateNode;if(r=r.childContextTypes,typeof a.getChildContext!="function")return o;a=a.getChildContext();for(var c in a)if(!(c in r))throw Error(n(108,de(t)||"Unknown",c));return U({},o,a)}function lo(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Cn,Jn=$e.current,fe($e,t),fe(rt,rt.current),!0}function Nf(t,r,o){var a=t.stateNode;if(!a)throw Error(n(169));o?(t=Rf(t,r,Jn),a.__reactInternalMemoizedMergedChildContext=t,me(rt),me($e),fe($e,t)):me(rt),fe(rt,o)}var Xt=null,ao=!1,Ra=!1;function Pf(t){Xt===null?Xt=[t]:Xt.push(t)}function Qy(t){ao=!0,Pf(t)}function In(){if(!Ra&&Xt!==null){Ra=!0;var t=0,r=ae;try{var o=Xt;for(ae=1;t<o.length;t++){var a=o[t];do a=a(!0);while(a!==null)}Xt=null,ao=!1}catch(c){throw Xt!==null&&(Xt=Xt.slice(t+1)),Ad(Ql,In),c}finally{ae=r,Ra=!1}}return null}var Lr=[],Mr=0,uo=null,co=0,Et=[],St=0,Zn=null,Jt=1,Zt="";function er(t,r){Lr[Mr++]=co,Lr[Mr++]=uo,uo=t,co=r}function Af(t,r,o){Et[St++]=Jt,Et[St++]=Zt,Et[St++]=Zn,Zn=t;var a=Jt;t=Zt;var c=32-Pt(a)-1;a&=~(1<<c),o+=1;var f=32-Pt(r)+c;if(30<f){var p=c-c%5;f=(a&(1<<p)-1).toString(32),a>>=p,c-=p,Jt=1<<32-Pt(r)+c|o<<c|a,Zt=f+t}else Jt=1<<f|o<<c|a,Zt=t}function Na(t){t.return!==null&&(er(t,1),Af(t,1,0))}function Pa(t){for(;t===uo;)uo=Lr[--Mr],Lr[Mr]=null,co=Lr[--Mr],Lr[Mr]=null;for(;t===Zn;)Zn=Et[--St],Et[St]=null,Zt=Et[--St],Et[St]=null,Jt=Et[--St],Et[St]=null}var mt=null,gt=null,ye=!1,Ot=null;function Of(t,r){var o=kt(5,null,null,0);o.elementType="DELETED",o.stateNode=r,o.return=t,r=t.deletions,r===null?(t.deletions=[o],t.flags|=16):r.push(o)}function xf(t,r){switch(t.tag){case 5:var o=t.type;return r=r.nodeType!==1||o.toLowerCase()!==r.nodeName.toLowerCase()?null:r,r!==null?(t.stateNode=r,mt=t,gt=En(r.firstChild),!0):!1;case 6:return r=t.pendingProps===""||r.nodeType!==3?null:r,r!==null?(t.stateNode=r,mt=t,gt=null,!0):!1;case 13:return r=r.nodeType!==8?null:r,r!==null?(o=Zn!==null?{id:Jt,overflow:Zt}:null,t.memoizedState={dehydrated:r,treeContext:o,retryLane:1073741824},o=kt(18,null,null,0),o.stateNode=r,o.return=t,t.child=o,mt=t,gt=null,!0):!1;default:return!1}}function Aa(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Oa(t){if(ye){var r=gt;if(r){var o=r;if(!xf(t,r)){if(Aa(t))throw Error(n(418));r=En(o.nextSibling);var a=mt;r&&xf(t,r)?Of(a,o):(t.flags=t.flags&-4097|2,ye=!1,mt=t)}}else{if(Aa(t))throw Error(n(418));t.flags=t.flags&-4097|2,ye=!1,mt=t}}}function Df(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;mt=t}function fo(t){if(t!==mt)return!1;if(!ye)return Df(t),ye=!0,!1;var r;if((r=t.tag!==3)&&!(r=t.tag!==5)&&(r=t.type,r=r!=="head"&&r!=="body"&&!Sa(t.type,t.memoizedProps)),r&&(r=gt)){if(Aa(t))throw Lf(),Error(n(418));for(;r;)Of(t,r),r=En(r.nextSibling)}if(Df(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(n(317));e:{for(t=t.nextSibling,r=0;t;){if(t.nodeType===8){var o=t.data;if(o==="/$"){if(r===0){gt=En(t.nextSibling);break e}r--}else o!=="$"&&o!=="$!"&&o!=="$?"||r++}t=t.nextSibling}gt=null}}else gt=mt?En(t.stateNode.nextSibling):null;return!0}function Lf(){for(var t=gt;t;)t=En(t.nextSibling)}function Fr(){gt=mt=null,ye=!1}function xa(t){Ot===null?Ot=[t]:Ot.push(t)}var Yy=Te.ReactCurrentBatchConfig;function Wi(t,r,o){if(t=o.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(o._owner){if(o=o._owner,o){if(o.tag!==1)throw Error(n(309));var a=o.stateNode}if(!a)throw Error(n(147,t));var c=a,f=""+t;return r!==null&&r.ref!==null&&typeof r.ref=="function"&&r.ref._stringRef===f?r.ref:(r=function(p){var _=c.refs;p===null?delete _[f]:_[f]=p},r._stringRef=f,r)}if(typeof t!="string")throw Error(n(284));if(!o._owner)throw Error(n(290,t))}return t}function ho(t,r){throw t=Object.prototype.toString.call(r),Error(n(31,t==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":t))}function Mf(t){var r=t._init;return r(t._payload)}function Ff(t){function r(C,v){if(t){var I=C.deletions;I===null?(C.deletions=[v],C.flags|=16):I.push(v)}}function o(C,v){if(!t)return null;for(;v!==null;)r(C,v),v=v.sibling;return null}function a(C,v){for(C=new Map;v!==null;)v.key!==null?C.set(v.key,v):C.set(v.index,v),v=v.sibling;return C}function c(C,v){return C=xn(C,v),C.index=0,C.sibling=null,C}function f(C,v,I){return C.index=I,t?(I=C.alternate,I!==null?(I=I.index,I<v?(C.flags|=2,v):I):(C.flags|=2,v)):(C.flags|=1048576,v)}function p(C){return t&&C.alternate===null&&(C.flags|=2),C}function _(C,v,I,O){return v===null||v.tag!==6?(v=Cu(I,C.mode,O),v.return=C,v):(v=c(v,I),v.return=C,v)}function y(C,v,I,O){var j=I.type;return j===Ve?P(C,v,I.props.children,O,I.key):v!==null&&(v.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===nt&&Mf(j)===v.type)?(O=c(v,I.props),O.ref=Wi(C,v,I),O.return=C,O):(O=bo(I.type,I.key,I.props,null,C.mode,O),O.ref=Wi(C,v,I),O.return=C,O)}function k(C,v,I,O){return v===null||v.tag!==4||v.stateNode.containerInfo!==I.containerInfo||v.stateNode.implementation!==I.implementation?(v=Iu(I,C.mode,O),v.return=C,v):(v=c(v,I.children||[]),v.return=C,v)}function P(C,v,I,O,j){return v===null||v.tag!==7?(v=ar(I,C.mode,O,j),v.return=C,v):(v=c(v,I),v.return=C,v)}function A(C,v,I){if(typeof v=="string"&&v!==""||typeof v=="number")return v=Cu(""+v,C.mode,I),v.return=C,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case et:return I=bo(v.type,v.key,v.props,null,C.mode,I),I.ref=Wi(C,null,v),I.return=C,I;case Oe:return v=Iu(v,C.mode,I),v.return=C,v;case nt:var O=v._init;return A(C,O(v._payload),I)}if(mi(v)||$(v))return v=ar(v,C.mode,I,null),v.return=C,v;ho(C,v)}return null}function R(C,v,I,O){var j=v!==null?v.key:null;if(typeof I=="string"&&I!==""||typeof I=="number")return j!==null?null:_(C,v,""+I,O);if(typeof I=="object"&&I!==null){switch(I.$$typeof){case et:return I.key===j?y(C,v,I,O):null;case Oe:return I.key===j?k(C,v,I,O):null;case nt:return j=I._init,R(C,v,j(I._payload),O)}if(mi(I)||$(I))return j!==null?null:P(C,v,I,O,null);ho(C,I)}return null}function M(C,v,I,O,j){if(typeof O=="string"&&O!==""||typeof O=="number")return C=C.get(I)||null,_(v,C,""+O,j);if(typeof O=="object"&&O!==null){switch(O.$$typeof){case et:return C=C.get(O.key===null?I:O.key)||null,y(v,C,O,j);case Oe:return C=C.get(O.key===null?I:O.key)||null,k(v,C,O,j);case nt:var B=O._init;return M(C,v,I,B(O._payload),j)}if(mi(O)||$(O))return C=C.get(I)||null,P(v,C,O,j,null);ho(v,O)}return null}function z(C,v,I,O){for(var j=null,B=null,H=v,Q=v=0,Ue=null;H!==null&&Q<I.length;Q++){H.index>Q?(Ue=H,H=null):Ue=H.sibling;var se=R(C,H,I[Q],O);if(se===null){H===null&&(H=Ue);break}t&&H&&se.alternate===null&&r(C,H),v=f(se,v,Q),B===null?j=se:B.sibling=se,B=se,H=Ue}if(Q===I.length)return o(C,H),ye&&er(C,Q),j;if(H===null){for(;Q<I.length;Q++)H=A(C,I[Q],O),H!==null&&(v=f(H,v,Q),B===null?j=H:B.sibling=H,B=H);return ye&&er(C,Q),j}for(H=a(C,H);Q<I.length;Q++)Ue=M(H,C,Q,I[Q],O),Ue!==null&&(t&&Ue.alternate!==null&&H.delete(Ue.key===null?Q:Ue.key),v=f(Ue,v,Q),B===null?j=Ue:B.sibling=Ue,B=Ue);return t&&H.forEach(function(Dn){return r(C,Dn)}),ye&&er(C,Q),j}function W(C,v,I,O){var j=$(I);if(typeof j!="function")throw Error(n(150));if(I=j.call(I),I==null)throw Error(n(151));for(var B=j=null,H=v,Q=v=0,Ue=null,se=I.next();H!==null&&!se.done;Q++,se=I.next()){H.index>Q?(Ue=H,H=null):Ue=H.sibling;var Dn=R(C,H,se.value,O);if(Dn===null){H===null&&(H=Ue);break}t&&H&&Dn.alternate===null&&r(C,H),v=f(Dn,v,Q),B===null?j=Dn:B.sibling=Dn,B=Dn,H=Ue}if(se.done)return o(C,H),ye&&er(C,Q),j;if(H===null){for(;!se.done;Q++,se=I.next())se=A(C,se.value,O),se!==null&&(v=f(se,v,Q),B===null?j=se:B.sibling=se,B=se);return ye&&er(C,Q),j}for(H=a(C,H);!se.done;Q++,se=I.next())se=M(H,C,Q,se.value,O),se!==null&&(t&&se.alternate!==null&&H.delete(se.key===null?Q:se.key),v=f(se,v,Q),B===null?j=se:B.sibling=se,B=se);return t&&H.forEach(function(Pv){return r(C,Pv)}),ye&&er(C,Q),j}function Re(C,v,I,O){if(typeof I=="object"&&I!==null&&I.type===Ve&&I.key===null&&(I=I.props.children),typeof I=="object"&&I!==null){switch(I.$$typeof){case et:e:{for(var j=I.key,B=v;B!==null;){if(B.key===j){if(j=I.type,j===Ve){if(B.tag===7){o(C,B.sibling),v=c(B,I.props.children),v.return=C,C=v;break e}}else if(B.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===nt&&Mf(j)===B.type){o(C,B.sibling),v=c(B,I.props),v.ref=Wi(C,B,I),v.return=C,C=v;break e}o(C,B);break}else r(C,B);B=B.sibling}I.type===Ve?(v=ar(I.props.children,C.mode,O,I.key),v.return=C,C=v):(O=bo(I.type,I.key,I.props,null,C.mode,O),O.ref=Wi(C,v,I),O.return=C,C=O)}return p(C);case Oe:e:{for(B=I.key;v!==null;){if(v.key===B)if(v.tag===4&&v.stateNode.containerInfo===I.containerInfo&&v.stateNode.implementation===I.implementation){o(C,v.sibling),v=c(v,I.children||[]),v.return=C,C=v;break e}else{o(C,v);break}else r(C,v);v=v.sibling}v=Iu(I,C.mode,O),v.return=C,C=v}return p(C);case nt:return B=I._init,Re(C,v,B(I._payload),O)}if(mi(I))return z(C,v,I,O);if($(I))return W(C,v,I,O);ho(C,I)}return typeof I=="string"&&I!==""||typeof I=="number"?(I=""+I,v!==null&&v.tag===6?(o(C,v.sibling),v=c(v,I),v.return=C,C=v):(o(C,v),v=Cu(I,C.mode,O),v.return=C,C=v),p(C)):o(C,v)}return Re}var br=Ff(!0),bf=Ff(!1),po=Sn(null),mo=null,Ur=null,Da=null;function La(){Da=Ur=mo=null}function Ma(t){var r=po.current;me(po),t._currentValue=r}function Fa(t,r,o){for(;t!==null;){var a=t.alternate;if((t.childLanes&r)!==r?(t.childLanes|=r,a!==null&&(a.childLanes|=r)):a!==null&&(a.childLanes&r)!==r&&(a.childLanes|=r),t===o)break;t=t.return}}function zr(t,r){mo=t,Da=Ur=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&r&&(st=!0),t.firstContext=null)}function Ct(t){var r=t._currentValue;if(Da!==t)if(t={context:t,memoizedValue:r,next:null},Ur===null){if(mo===null)throw Error(n(308));Ur=t,mo.dependencies={lanes:0,firstContext:t}}else Ur=Ur.next=t;return r}var tr=null;function ba(t){tr===null?tr=[t]:tr.push(t)}function Uf(t,r,o,a){var c=r.interleaved;return c===null?(o.next=o,ba(r)):(o.next=c.next,c.next=o),r.interleaved=o,en(t,a)}function en(t,r){t.lanes|=r;var o=t.alternate;for(o!==null&&(o.lanes|=r),o=t,t=t.return;t!==null;)t.childLanes|=r,o=t.alternate,o!==null&&(o.childLanes|=r),o=t,t=t.return;return o.tag===3?o.stateNode:null}var Tn=!1;function Ua(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function zf(t,r){t=t.updateQueue,r.updateQueue===t&&(r.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function tn(t,r){return{eventTime:t,lane:r,tag:0,payload:null,callback:null,next:null}}function kn(t,r,o){var a=t.updateQueue;if(a===null)return null;if(a=a.shared,ne&2){var c=a.pending;return c===null?r.next=r:(r.next=c.next,c.next=r),a.pending=r,en(t,o)}return c=a.interleaved,c===null?(r.next=r,ba(a)):(r.next=c.next,c.next=r),a.interleaved=r,en(t,o)}function go(t,r,o){if(r=r.updateQueue,r!==null&&(r=r.shared,(o&4194240)!==0)){var a=r.lanes;a&=t.pendingLanes,o|=a,r.lanes=o,Jl(t,o)}}function Wf(t,r){var o=t.updateQueue,a=t.alternate;if(a!==null&&(a=a.updateQueue,o===a)){var c=null,f=null;if(o=o.firstBaseUpdate,o!==null){do{var p={eventTime:o.eventTime,lane:o.lane,tag:o.tag,payload:o.payload,callback:o.callback,next:null};f===null?c=f=p:f=f.next=p,o=o.next}while(o!==null);f===null?c=f=r:f=f.next=r}else c=f=r;o={baseState:a.baseState,firstBaseUpdate:c,lastBaseUpdate:f,shared:a.shared,effects:a.effects},t.updateQueue=o;return}t=o.lastBaseUpdate,t===null?o.firstBaseUpdate=r:t.next=r,o.lastBaseUpdate=r}function _o(t,r,o,a){var c=t.updateQueue;Tn=!1;var f=c.firstBaseUpdate,p=c.lastBaseUpdate,_=c.shared.pending;if(_!==null){c.shared.pending=null;var y=_,k=y.next;y.next=null,p===null?f=k:p.next=k,p=y;var P=t.alternate;P!==null&&(P=P.updateQueue,_=P.lastBaseUpdate,_!==p&&(_===null?P.firstBaseUpdate=k:_.next=k,P.lastBaseUpdate=y))}if(f!==null){var A=c.baseState;p=0,P=k=y=null,_=f;do{var R=_.lane,M=_.eventTime;if((a&R)===R){P!==null&&(P=P.next={eventTime:M,lane:0,tag:_.tag,payload:_.payload,callback:_.callback,next:null});e:{var z=t,W=_;switch(R=r,M=o,W.tag){case 1:if(z=W.payload,typeof z=="function"){A=z.call(M,A,R);break e}A=z;break e;case 3:z.flags=z.flags&-65537|128;case 0:if(z=W.payload,R=typeof z=="function"?z.call(M,A,R):z,R==null)break e;A=U({},A,R);break e;case 2:Tn=!0}}_.callback!==null&&_.lane!==0&&(t.flags|=64,R=c.effects,R===null?c.effects=[_]:R.push(_))}else M={eventTime:M,lane:R,tag:_.tag,payload:_.payload,callback:_.callback,next:null},P===null?(k=P=M,y=A):P=P.next=M,p|=R;if(_=_.next,_===null){if(_=c.shared.pending,_===null)break;R=_,_=R.next,R.next=null,c.lastBaseUpdate=R,c.shared.pending=null}}while(!0);if(P===null&&(y=A),c.baseState=y,c.firstBaseUpdate=k,c.lastBaseUpdate=P,r=c.shared.interleaved,r!==null){c=r;do p|=c.lane,c=c.next;while(c!==r)}else f===null&&(c.shared.lanes=0);ir|=p,t.lanes=p,t.memoizedState=A}}function jf(t,r,o){if(t=r.effects,r.effects=null,t!==null)for(r=0;r<t.length;r++){var a=t[r],c=a.callback;if(c!==null){if(a.callback=null,a=o,typeof c!="function")throw Error(n(191,c));c.call(a)}}}var ji={},$t=Sn(ji),Vi=Sn(ji),Bi=Sn(ji);function nr(t){if(t===ji)throw Error(n(174));return t}function za(t,r){switch(fe(Bi,r),fe(Vi,t),fe($t,ji),t=r.nodeType,t){case 9:case 11:r=(r=r.documentElement)?r.namespaceURI:Wl(null,"");break;default:t=t===8?r.parentNode:r,r=t.namespaceURI||null,t=t.tagName,r=Wl(r,t)}me($t),fe($t,r)}function Wr(){me($t),me(Vi),me(Bi)}function Vf(t){nr(Bi.current);var r=nr($t.current),o=Wl(r,t.type);r!==o&&(fe(Vi,t),fe($t,o))}function Wa(t){Vi.current===t&&(me($t),me(Vi))}var we=Sn(0);function yo(t){for(var r=t;r!==null;){if(r.tag===13){var o=r.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||o.data==="$?"||o.data==="$!"))return r}else if(r.tag===19&&r.memoizedProps.revealOrder!==void 0){if(r.flags&128)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}var ja=[];function Va(){for(var t=0;t<ja.length;t++)ja[t]._workInProgressVersionPrimary=null;ja.length=0}var vo=Te.ReactCurrentDispatcher,Ba=Te.ReactCurrentBatchConfig,rr=0,Ee=null,xe=null,Fe=null,wo=!1,Hi=!1,$i=0,Xy=0;function Ge(){throw Error(n(321))}function Ha(t,r){if(r===null)return!1;for(var o=0;o<r.length&&o<t.length;o++)if(!At(t[o],r[o]))return!1;return!0}function $a(t,r,o,a,c,f){if(rr=f,Ee=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,vo.current=t===null||t.memoizedState===null?tv:nv,t=o(a,c),Hi){f=0;do{if(Hi=!1,$i=0,25<=f)throw Error(n(301));f+=1,Fe=xe=null,r.updateQueue=null,vo.current=rv,t=o(a,c)}while(Hi)}if(vo.current=Co,r=xe!==null&&xe.next!==null,rr=0,Fe=xe=Ee=null,wo=!1,r)throw Error(n(300));return t}function Ga(){var t=$i!==0;return $i=0,t}function Gt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Fe===null?Ee.memoizedState=Fe=t:Fe=Fe.next=t,Fe}function It(){if(xe===null){var t=Ee.alternate;t=t!==null?t.memoizedState:null}else t=xe.next;var r=Fe===null?Ee.memoizedState:Fe.next;if(r!==null)Fe=r,xe=t;else{if(t===null)throw Error(n(310));xe=t,t={memoizedState:xe.memoizedState,baseState:xe.baseState,baseQueue:xe.baseQueue,queue:xe.queue,next:null},Fe===null?Ee.memoizedState=Fe=t:Fe=Fe.next=t}return Fe}function Gi(t,r){return typeof r=="function"?r(t):r}function Ka(t){var r=It(),o=r.queue;if(o===null)throw Error(n(311));o.lastRenderedReducer=t;var a=xe,c=a.baseQueue,f=o.pending;if(f!==null){if(c!==null){var p=c.next;c.next=f.next,f.next=p}a.baseQueue=c=f,o.pending=null}if(c!==null){f=c.next,a=a.baseState;var _=p=null,y=null,k=f;do{var P=k.lane;if((rr&P)===P)y!==null&&(y=y.next={lane:0,action:k.action,hasEagerState:k.hasEagerState,eagerState:k.eagerState,next:null}),a=k.hasEagerState?k.eagerState:t(a,k.action);else{var A={lane:P,action:k.action,hasEagerState:k.hasEagerState,eagerState:k.eagerState,next:null};y===null?(_=y=A,p=a):y=y.next=A,Ee.lanes|=P,ir|=P}k=k.next}while(k!==null&&k!==f);y===null?p=a:y.next=_,At(a,r.memoizedState)||(st=!0),r.memoizedState=a,r.baseState=p,r.baseQueue=y,o.lastRenderedState=a}if(t=o.interleaved,t!==null){c=t;do f=c.lane,Ee.lanes|=f,ir|=f,c=c.next;while(c!==t)}else c===null&&(o.lanes=0);return[r.memoizedState,o.dispatch]}function qa(t){var r=It(),o=r.queue;if(o===null)throw Error(n(311));o.lastRenderedReducer=t;var a=o.dispatch,c=o.pending,f=r.memoizedState;if(c!==null){o.pending=null;var p=c=c.next;do f=t(f,p.action),p=p.next;while(p!==c);At(f,r.memoizedState)||(st=!0),r.memoizedState=f,r.baseQueue===null&&(r.baseState=f),o.lastRenderedState=f}return[f,a]}function Bf(){}function Hf(t,r){var o=Ee,a=It(),c=r(),f=!At(a.memoizedState,c);if(f&&(a.memoizedState=c,st=!0),a=a.queue,Qa(Kf.bind(null,o,a,t),[t]),a.getSnapshot!==r||f||Fe!==null&&Fe.memoizedState.tag&1){if(o.flags|=2048,Ki(9,Gf.bind(null,o,a,c,r),void 0,null),be===null)throw Error(n(349));rr&30||$f(o,r,c)}return c}function $f(t,r,o){t.flags|=16384,t={getSnapshot:r,value:o},r=Ee.updateQueue,r===null?(r={lastEffect:null,stores:null},Ee.updateQueue=r,r.stores=[t]):(o=r.stores,o===null?r.stores=[t]:o.push(t))}function Gf(t,r,o,a){r.value=o,r.getSnapshot=a,qf(r)&&Qf(t)}function Kf(t,r,o){return o(function(){qf(r)&&Qf(t)})}function qf(t){var r=t.getSnapshot;t=t.value;try{var o=r();return!At(t,o)}catch{return!0}}function Qf(t){var r=en(t,1);r!==null&&Mt(r,t,1,-1)}function Yf(t){var r=Gt();return typeof t=="function"&&(t=t()),r.memoizedState=r.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Gi,lastRenderedState:t},r.queue=t,t=t.dispatch=ev.bind(null,Ee,t),[r.memoizedState,t]}function Ki(t,r,o,a){return t={tag:t,create:r,destroy:o,deps:a,next:null},r=Ee.updateQueue,r===null?(r={lastEffect:null,stores:null},Ee.updateQueue=r,r.lastEffect=t.next=t):(o=r.lastEffect,o===null?r.lastEffect=t.next=t:(a=o.next,o.next=t,t.next=a,r.lastEffect=t)),t}function Xf(){return It().memoizedState}function Eo(t,r,o,a){var c=Gt();Ee.flags|=t,c.memoizedState=Ki(1|r,o,void 0,a===void 0?null:a)}function So(t,r,o,a){var c=It();a=a===void 0?null:a;var f=void 0;if(xe!==null){var p=xe.memoizedState;if(f=p.destroy,a!==null&&Ha(a,p.deps)){c.memoizedState=Ki(r,o,f,a);return}}Ee.flags|=t,c.memoizedState=Ki(1|r,o,f,a)}function Jf(t,r){return Eo(8390656,8,t,r)}function Qa(t,r){return So(2048,8,t,r)}function Zf(t,r){return So(4,2,t,r)}function eh(t,r){return So(4,4,t,r)}function th(t,r){if(typeof r=="function")return t=t(),r(t),function(){r(null)};if(r!=null)return t=t(),r.current=t,function(){r.current=null}}function nh(t,r,o){return o=o!=null?o.concat([t]):null,So(4,4,th.bind(null,r,t),o)}function Ya(){}function rh(t,r){var o=It();r=r===void 0?null:r;var a=o.memoizedState;return a!==null&&r!==null&&Ha(r,a[1])?a[0]:(o.memoizedState=[t,r],t)}function ih(t,r){var o=It();r=r===void 0?null:r;var a=o.memoizedState;return a!==null&&r!==null&&Ha(r,a[1])?a[0]:(t=t(),o.memoizedState=[t,r],t)}function sh(t,r,o){return rr&21?(At(o,r)||(o=Ld(),Ee.lanes|=o,ir|=o,t.baseState=!0),r):(t.baseState&&(t.baseState=!1,st=!0),t.memoizedState=o)}function Jy(t,r){var o=ae;ae=o!==0&&4>o?o:4,t(!0);var a=Ba.transition;Ba.transition={};try{t(!1),r()}finally{ae=o,Ba.transition=a}}function oh(){return It().memoizedState}function Zy(t,r,o){var a=An(t);if(o={lane:a,action:o,hasEagerState:!1,eagerState:null,next:null},lh(t))ah(r,o);else if(o=Uf(t,r,o,a),o!==null){var c=Je();Mt(o,t,a,c),uh(o,r,a)}}function ev(t,r,o){var a=An(t),c={lane:a,action:o,hasEagerState:!1,eagerState:null,next:null};if(lh(t))ah(r,c);else{var f=t.alternate;if(t.lanes===0&&(f===null||f.lanes===0)&&(f=r.lastRenderedReducer,f!==null))try{var p=r.lastRenderedState,_=f(p,o);if(c.hasEagerState=!0,c.eagerState=_,At(_,p)){var y=r.interleaved;y===null?(c.next=c,ba(r)):(c.next=y.next,y.next=c),r.interleaved=c;return}}catch{}finally{}o=Uf(t,r,c,a),o!==null&&(c=Je(),Mt(o,t,a,c),uh(o,r,a))}}function lh(t){var r=t.alternate;return t===Ee||r!==null&&r===Ee}function ah(t,r){Hi=wo=!0;var o=t.pending;o===null?r.next=r:(r.next=o.next,o.next=r),t.pending=r}function uh(t,r,o){if(o&4194240){var a=r.lanes;a&=t.pendingLanes,o|=a,r.lanes=o,Jl(t,o)}}var Co={readContext:Ct,useCallback:Ge,useContext:Ge,useEffect:Ge,useImperativeHandle:Ge,useInsertionEffect:Ge,useLayoutEffect:Ge,useMemo:Ge,useReducer:Ge,useRef:Ge,useState:Ge,useDebugValue:Ge,useDeferredValue:Ge,useTransition:Ge,useMutableSource:Ge,useSyncExternalStore:Ge,useId:Ge,unstable_isNewReconciler:!1},tv={readContext:Ct,useCallback:function(t,r){return Gt().memoizedState=[t,r===void 0?null:r],t},useContext:Ct,useEffect:Jf,useImperativeHandle:function(t,r,o){return o=o!=null?o.concat([t]):null,Eo(4194308,4,th.bind(null,r,t),o)},useLayoutEffect:function(t,r){return Eo(4194308,4,t,r)},useInsertionEffect:function(t,r){return Eo(4,2,t,r)},useMemo:function(t,r){var o=Gt();return r=r===void 0?null:r,t=t(),o.memoizedState=[t,r],t},useReducer:function(t,r,o){var a=Gt();return r=o!==void 0?o(r):r,a.memoizedState=a.baseState=r,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:r},a.queue=t,t=t.dispatch=Zy.bind(null,Ee,t),[a.memoizedState,t]},useRef:function(t){var r=Gt();return t={current:t},r.memoizedState=t},useState:Yf,useDebugValue:Ya,useDeferredValue:function(t){return Gt().memoizedState=t},useTransition:function(){var t=Yf(!1),r=t[0];return t=Jy.bind(null,t[1]),Gt().memoizedState=t,[r,t]},useMutableSource:function(){},useSyncExternalStore:function(t,r,o){var a=Ee,c=Gt();if(ye){if(o===void 0)throw Error(n(407));o=o()}else{if(o=r(),be===null)throw Error(n(349));rr&30||$f(a,r,o)}c.memoizedState=o;var f={value:o,getSnapshot:r};return c.queue=f,Jf(Kf.bind(null,a,f,t),[t]),a.flags|=2048,Ki(9,Gf.bind(null,a,f,o,r),void 0,null),o},useId:function(){var t=Gt(),r=be.identifierPrefix;if(ye){var o=Zt,a=Jt;o=(a&~(1<<32-Pt(a)-1)).toString(32)+o,r=":"+r+"R"+o,o=$i++,0<o&&(r+="H"+o.toString(32)),r+=":"}else o=Xy++,r=":"+r+"r"+o.toString(32)+":";return t.memoizedState=r},unstable_isNewReconciler:!1},nv={readContext:Ct,useCallback:rh,useContext:Ct,useEffect:Qa,useImperativeHandle:nh,useInsertionEffect:Zf,useLayoutEffect:eh,useMemo:ih,useReducer:Ka,useRef:Xf,useState:function(){return Ka(Gi)},useDebugValue:Ya,useDeferredValue:function(t){var r=It();return sh(r,xe.memoizedState,t)},useTransition:function(){var t=Ka(Gi)[0],r=It().memoizedState;return[t,r]},useMutableSource:Bf,useSyncExternalStore:Hf,useId:oh,unstable_isNewReconciler:!1},rv={readContext:Ct,useCallback:rh,useContext:Ct,useEffect:Qa,useImperativeHandle:nh,useInsertionEffect:Zf,useLayoutEffect:eh,useMemo:ih,useReducer:qa,useRef:Xf,useState:function(){return qa(Gi)},useDebugValue:Ya,useDeferredValue:function(t){var r=It();return xe===null?r.memoizedState=t:sh(r,xe.memoizedState,t)},useTransition:function(){var t=qa(Gi)[0],r=It().memoizedState;return[t,r]},useMutableSource:Bf,useSyncExternalStore:Hf,useId:oh,unstable_isNewReconciler:!1};function xt(t,r){if(t&&t.defaultProps){r=U({},r),t=t.defaultProps;for(var o in t)r[o]===void 0&&(r[o]=t[o]);return r}return r}function Xa(t,r,o,a){r=t.memoizedState,o=o(a,r),o=o==null?r:U({},r,o),t.memoizedState=o,t.lanes===0&&(t.updateQueue.baseState=o)}var Io={isMounted:function(t){return(t=t._reactInternals)?Yn(t)===t:!1},enqueueSetState:function(t,r,o){t=t._reactInternals;var a=Je(),c=An(t),f=tn(a,c);f.payload=r,o!=null&&(f.callback=o),r=kn(t,f,c),r!==null&&(Mt(r,t,c,a),go(r,t,c))},enqueueReplaceState:function(t,r,o){t=t._reactInternals;var a=Je(),c=An(t),f=tn(a,c);f.tag=1,f.payload=r,o!=null&&(f.callback=o),r=kn(t,f,c),r!==null&&(Mt(r,t,c,a),go(r,t,c))},enqueueForceUpdate:function(t,r){t=t._reactInternals;var o=Je(),a=An(t),c=tn(o,a);c.tag=2,r!=null&&(c.callback=r),r=kn(t,c,a),r!==null&&(Mt(r,t,a,o),go(r,t,a))}};function ch(t,r,o,a,c,f,p){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(a,f,p):r.prototype&&r.prototype.isPureReactComponent?!Di(o,a)||!Di(c,f):!0}function dh(t,r,o){var a=!1,c=Cn,f=r.contextType;return typeof f=="object"&&f!==null?f=Ct(f):(c=it(r)?Jn:$e.current,a=r.contextTypes,f=(a=a!=null)?Dr(t,c):Cn),r=new r(o,f),t.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=Io,t.stateNode=r,r._reactInternals=t,a&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=c,t.__reactInternalMemoizedMaskedChildContext=f),r}function fh(t,r,o,a){t=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(o,a),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(o,a),r.state!==t&&Io.enqueueReplaceState(r,r.state,null)}function Ja(t,r,o,a){var c=t.stateNode;c.props=o,c.state=t.memoizedState,c.refs={},Ua(t);var f=r.contextType;typeof f=="object"&&f!==null?c.context=Ct(f):(f=it(r)?Jn:$e.current,c.context=Dr(t,f)),c.state=t.memoizedState,f=r.getDerivedStateFromProps,typeof f=="function"&&(Xa(t,r,f,o),c.state=t.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof c.getSnapshotBeforeUpdate=="function"||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(r=c.state,typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount(),r!==c.state&&Io.enqueueReplaceState(c,c.state,null),_o(t,o,c,a),c.state=t.memoizedState),typeof c.componentDidMount=="function"&&(t.flags|=4194308)}function jr(t,r){try{var o="",a=r;do o+=re(a),a=a.return;while(a);var c=o}catch(f){c=`
Error generating stack: `+f.message+`
`+f.stack}return{value:t,source:r,stack:c,digest:null}}function Za(t,r,o){return{value:t,source:null,stack:o??null,digest:r??null}}function eu(t,r){try{console.error(r.value)}catch(o){setTimeout(function(){throw o})}}var iv=typeof WeakMap=="function"?WeakMap:Map;function hh(t,r,o){o=tn(-1,o),o.tag=3,o.payload={element:null};var a=r.value;return o.callback=function(){Oo||(Oo=!0,mu=a),eu(t,r)},o}function ph(t,r,o){o=tn(-1,o),o.tag=3;var a=t.type.getDerivedStateFromError;if(typeof a=="function"){var c=r.value;o.payload=function(){return a(c)},o.callback=function(){eu(t,r)}}var f=t.stateNode;return f!==null&&typeof f.componentDidCatch=="function"&&(o.callback=function(){eu(t,r),typeof a!="function"&&(Nn===null?Nn=new Set([this]):Nn.add(this));var p=r.stack;this.componentDidCatch(r.value,{componentStack:p!==null?p:""})}),o}function mh(t,r,o){var a=t.pingCache;if(a===null){a=t.pingCache=new iv;var c=new Set;a.set(r,c)}else c=a.get(r),c===void 0&&(c=new Set,a.set(r,c));c.has(o)||(c.add(o),t=yv.bind(null,t,r,o),r.then(t,t))}function gh(t){do{var r;if((r=t.tag===13)&&(r=t.memoizedState,r=r!==null?r.dehydrated!==null:!0),r)return t;t=t.return}while(t!==null);return null}function _h(t,r,o,a,c){return t.mode&1?(t.flags|=65536,t.lanes=c,t):(t===r?t.flags|=65536:(t.flags|=128,o.flags|=131072,o.flags&=-52805,o.tag===1&&(o.alternate===null?o.tag=17:(r=tn(-1,1),r.tag=2,kn(o,r,1))),o.lanes|=1),t)}var sv=Te.ReactCurrentOwner,st=!1;function Xe(t,r,o,a){r.child=t===null?bf(r,null,o,a):br(r,t.child,o,a)}function yh(t,r,o,a,c){o=o.render;var f=r.ref;return zr(r,c),a=$a(t,r,o,a,f,c),o=Ga(),t!==null&&!st?(r.updateQueue=t.updateQueue,r.flags&=-2053,t.lanes&=~c,nn(t,r,c)):(ye&&o&&Na(r),r.flags|=1,Xe(t,r,a,c),r.child)}function vh(t,r,o,a,c){if(t===null){var f=o.type;return typeof f=="function"&&!Su(f)&&f.defaultProps===void 0&&o.compare===null&&o.defaultProps===void 0?(r.tag=15,r.type=f,wh(t,r,f,a,c)):(t=bo(o.type,null,a,r,r.mode,c),t.ref=r.ref,t.return=r,r.child=t)}if(f=t.child,!(t.lanes&c)){var p=f.memoizedProps;if(o=o.compare,o=o!==null?o:Di,o(p,a)&&t.ref===r.ref)return nn(t,r,c)}return r.flags|=1,t=xn(f,a),t.ref=r.ref,t.return=r,r.child=t}function wh(t,r,o,a,c){if(t!==null){var f=t.memoizedProps;if(Di(f,a)&&t.ref===r.ref)if(st=!1,r.pendingProps=a=f,(t.lanes&c)!==0)t.flags&131072&&(st=!0);else return r.lanes=t.lanes,nn(t,r,c)}return tu(t,r,o,a,c)}function Eh(t,r,o){var a=r.pendingProps,c=a.children,f=t!==null?t.memoizedState:null;if(a.mode==="hidden")if(!(r.mode&1))r.memoizedState={baseLanes:0,cachePool:null,transitions:null},fe(Br,_t),_t|=o;else{if(!(o&1073741824))return t=f!==null?f.baseLanes|o:o,r.lanes=r.childLanes=1073741824,r.memoizedState={baseLanes:t,cachePool:null,transitions:null},r.updateQueue=null,fe(Br,_t),_t|=t,null;r.memoizedState={baseLanes:0,cachePool:null,transitions:null},a=f!==null?f.baseLanes:o,fe(Br,_t),_t|=a}else f!==null?(a=f.baseLanes|o,r.memoizedState=null):a=o,fe(Br,_t),_t|=a;return Xe(t,r,c,o),r.child}function Sh(t,r){var o=r.ref;(t===null&&o!==null||t!==null&&t.ref!==o)&&(r.flags|=512,r.flags|=2097152)}function tu(t,r,o,a,c){var f=it(o)?Jn:$e.current;return f=Dr(r,f),zr(r,c),o=$a(t,r,o,a,f,c),a=Ga(),t!==null&&!st?(r.updateQueue=t.updateQueue,r.flags&=-2053,t.lanes&=~c,nn(t,r,c)):(ye&&a&&Na(r),r.flags|=1,Xe(t,r,o,c),r.child)}function Ch(t,r,o,a,c){if(it(o)){var f=!0;lo(r)}else f=!1;if(zr(r,c),r.stateNode===null)ko(t,r),dh(r,o,a),Ja(r,o,a,c),a=!0;else if(t===null){var p=r.stateNode,_=r.memoizedProps;p.props=_;var y=p.context,k=o.contextType;typeof k=="object"&&k!==null?k=Ct(k):(k=it(o)?Jn:$e.current,k=Dr(r,k));var P=o.getDerivedStateFromProps,A=typeof P=="function"||typeof p.getSnapshotBeforeUpdate=="function";A||typeof p.UNSAFE_componentWillReceiveProps!="function"&&typeof p.componentWillReceiveProps!="function"||(_!==a||y!==k)&&fh(r,p,a,k),Tn=!1;var R=r.memoizedState;p.state=R,_o(r,a,p,c),y=r.memoizedState,_!==a||R!==y||rt.current||Tn?(typeof P=="function"&&(Xa(r,o,P,a),y=r.memoizedState),(_=Tn||ch(r,o,_,a,R,y,k))?(A||typeof p.UNSAFE_componentWillMount!="function"&&typeof p.componentWillMount!="function"||(typeof p.componentWillMount=="function"&&p.componentWillMount(),typeof p.UNSAFE_componentWillMount=="function"&&p.UNSAFE_componentWillMount()),typeof p.componentDidMount=="function"&&(r.flags|=4194308)):(typeof p.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=a,r.memoizedState=y),p.props=a,p.state=y,p.context=k,a=_):(typeof p.componentDidMount=="function"&&(r.flags|=4194308),a=!1)}else{p=r.stateNode,zf(t,r),_=r.memoizedProps,k=r.type===r.elementType?_:xt(r.type,_),p.props=k,A=r.pendingProps,R=p.context,y=o.contextType,typeof y=="object"&&y!==null?y=Ct(y):(y=it(o)?Jn:$e.current,y=Dr(r,y));var M=o.getDerivedStateFromProps;(P=typeof M=="function"||typeof p.getSnapshotBeforeUpdate=="function")||typeof p.UNSAFE_componentWillReceiveProps!="function"&&typeof p.componentWillReceiveProps!="function"||(_!==A||R!==y)&&fh(r,p,a,y),Tn=!1,R=r.memoizedState,p.state=R,_o(r,a,p,c);var z=r.memoizedState;_!==A||R!==z||rt.current||Tn?(typeof M=="function"&&(Xa(r,o,M,a),z=r.memoizedState),(k=Tn||ch(r,o,k,a,R,z,y)||!1)?(P||typeof p.UNSAFE_componentWillUpdate!="function"&&typeof p.componentWillUpdate!="function"||(typeof p.componentWillUpdate=="function"&&p.componentWillUpdate(a,z,y),typeof p.UNSAFE_componentWillUpdate=="function"&&p.UNSAFE_componentWillUpdate(a,z,y)),typeof p.componentDidUpdate=="function"&&(r.flags|=4),typeof p.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof p.componentDidUpdate!="function"||_===t.memoizedProps&&R===t.memoizedState||(r.flags|=4),typeof p.getSnapshotBeforeUpdate!="function"||_===t.memoizedProps&&R===t.memoizedState||(r.flags|=1024),r.memoizedProps=a,r.memoizedState=z),p.props=a,p.state=z,p.context=y,a=k):(typeof p.componentDidUpdate!="function"||_===t.memoizedProps&&R===t.memoizedState||(r.flags|=4),typeof p.getSnapshotBeforeUpdate!="function"||_===t.memoizedProps&&R===t.memoizedState||(r.flags|=1024),a=!1)}return nu(t,r,o,a,f,c)}function nu(t,r,o,a,c,f){Sh(t,r);var p=(r.flags&128)!==0;if(!a&&!p)return c&&Nf(r,o,!1),nn(t,r,f);a=r.stateNode,sv.current=r;var _=p&&typeof o.getDerivedStateFromError!="function"?null:a.render();return r.flags|=1,t!==null&&p?(r.child=br(r,t.child,null,f),r.child=br(r,null,_,f)):Xe(t,r,_,f),r.memoizedState=a.state,c&&Nf(r,o,!0),r.child}function Ih(t){var r=t.stateNode;r.pendingContext?kf(t,r.pendingContext,r.pendingContext!==r.context):r.context&&kf(t,r.context,!1),za(t,r.containerInfo)}function Th(t,r,o,a,c){return Fr(),xa(c),r.flags|=256,Xe(t,r,o,a),r.child}var ru={dehydrated:null,treeContext:null,retryLane:0};function iu(t){return{baseLanes:t,cachePool:null,transitions:null}}function kh(t,r,o){var a=r.pendingProps,c=we.current,f=!1,p=(r.flags&128)!==0,_;if((_=p)||(_=t!==null&&t.memoizedState===null?!1:(c&2)!==0),_?(f=!0,r.flags&=-129):(t===null||t.memoizedState!==null)&&(c|=1),fe(we,c&1),t===null)return Oa(r),t=r.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(r.mode&1?t.data==="$!"?r.lanes=8:r.lanes=1073741824:r.lanes=1,null):(p=a.children,t=a.fallback,f?(a=r.mode,f=r.child,p={mode:"hidden",children:p},!(a&1)&&f!==null?(f.childLanes=0,f.pendingProps=p):f=Uo(p,a,0,null),t=ar(t,a,o,null),f.return=r,t.return=r,f.sibling=t,r.child=f,r.child.memoizedState=iu(o),r.memoizedState=ru,t):su(r,p));if(c=t.memoizedState,c!==null&&(_=c.dehydrated,_!==null))return ov(t,r,p,a,_,c,o);if(f){f=a.fallback,p=r.mode,c=t.child,_=c.sibling;var y={mode:"hidden",children:a.children};return!(p&1)&&r.child!==c?(a=r.child,a.childLanes=0,a.pendingProps=y,r.deletions=null):(a=xn(c,y),a.subtreeFlags=c.subtreeFlags&14680064),_!==null?f=xn(_,f):(f=ar(f,p,o,null),f.flags|=2),f.return=r,a.return=r,a.sibling=f,r.child=a,a=f,f=r.child,p=t.child.memoizedState,p=p===null?iu(o):{baseLanes:p.baseLanes|o,cachePool:null,transitions:p.transitions},f.memoizedState=p,f.childLanes=t.childLanes&~o,r.memoizedState=ru,a}return f=t.child,t=f.sibling,a=xn(f,{mode:"visible",children:a.children}),!(r.mode&1)&&(a.lanes=o),a.return=r,a.sibling=null,t!==null&&(o=r.deletions,o===null?(r.deletions=[t],r.flags|=16):o.push(t)),r.child=a,r.memoizedState=null,a}function su(t,r){return r=Uo({mode:"visible",children:r},t.mode,0,null),r.return=t,t.child=r}function To(t,r,o,a){return a!==null&&xa(a),br(r,t.child,null,o),t=su(r,r.pendingProps.children),t.flags|=2,r.memoizedState=null,t}function ov(t,r,o,a,c,f,p){if(o)return r.flags&256?(r.flags&=-257,a=Za(Error(n(422))),To(t,r,p,a)):r.memoizedState!==null?(r.child=t.child,r.flags|=128,null):(f=a.fallback,c=r.mode,a=Uo({mode:"visible",children:a.children},c,0,null),f=ar(f,c,p,null),f.flags|=2,a.return=r,f.return=r,a.sibling=f,r.child=a,r.mode&1&&br(r,t.child,null,p),r.child.memoizedState=iu(p),r.memoizedState=ru,f);if(!(r.mode&1))return To(t,r,p,null);if(c.data==="$!"){if(a=c.nextSibling&&c.nextSibling.dataset,a)var _=a.dgst;return a=_,f=Error(n(419)),a=Za(f,a,void 0),To(t,r,p,a)}if(_=(p&t.childLanes)!==0,st||_){if(a=be,a!==null){switch(p&-p){case 4:c=2;break;case 16:c=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:c=32;break;case 536870912:c=268435456;break;default:c=0}c=c&(a.suspendedLanes|p)?0:c,c!==0&&c!==f.retryLane&&(f.retryLane=c,en(t,c),Mt(a,t,c,-1))}return Eu(),a=Za(Error(n(421))),To(t,r,p,a)}return c.data==="$?"?(r.flags|=128,r.child=t.child,r=vv.bind(null,t),c._reactRetry=r,null):(t=f.treeContext,gt=En(c.nextSibling),mt=r,ye=!0,Ot=null,t!==null&&(Et[St++]=Jt,Et[St++]=Zt,Et[St++]=Zn,Jt=t.id,Zt=t.overflow,Zn=r),r=su(r,a.children),r.flags|=4096,r)}function Rh(t,r,o){t.lanes|=r;var a=t.alternate;a!==null&&(a.lanes|=r),Fa(t.return,r,o)}function ou(t,r,o,a,c){var f=t.memoizedState;f===null?t.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:a,tail:o,tailMode:c}:(f.isBackwards=r,f.rendering=null,f.renderingStartTime=0,f.last=a,f.tail=o,f.tailMode=c)}function Nh(t,r,o){var a=r.pendingProps,c=a.revealOrder,f=a.tail;if(Xe(t,r,a.children,o),a=we.current,a&2)a=a&1|2,r.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=r.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Rh(t,o,r);else if(t.tag===19)Rh(t,o,r);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===r)break e;for(;t.sibling===null;){if(t.return===null||t.return===r)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}a&=1}if(fe(we,a),!(r.mode&1))r.memoizedState=null;else switch(c){case"forwards":for(o=r.child,c=null;o!==null;)t=o.alternate,t!==null&&yo(t)===null&&(c=o),o=o.sibling;o=c,o===null?(c=r.child,r.child=null):(c=o.sibling,o.sibling=null),ou(r,!1,c,o,f);break;case"backwards":for(o=null,c=r.child,r.child=null;c!==null;){if(t=c.alternate,t!==null&&yo(t)===null){r.child=c;break}t=c.sibling,c.sibling=o,o=c,c=t}ou(r,!0,o,null,f);break;case"together":ou(r,!1,null,null,void 0);break;default:r.memoizedState=null}return r.child}function ko(t,r){!(r.mode&1)&&t!==null&&(t.alternate=null,r.alternate=null,r.flags|=2)}function nn(t,r,o){if(t!==null&&(r.dependencies=t.dependencies),ir|=r.lanes,!(o&r.childLanes))return null;if(t!==null&&r.child!==t.child)throw Error(n(153));if(r.child!==null){for(t=r.child,o=xn(t,t.pendingProps),r.child=o,o.return=r;t.sibling!==null;)t=t.sibling,o=o.sibling=xn(t,t.pendingProps),o.return=r;o.sibling=null}return r.child}function lv(t,r,o){switch(r.tag){case 3:Ih(r),Fr();break;case 5:Vf(r);break;case 1:it(r.type)&&lo(r);break;case 4:za(r,r.stateNode.containerInfo);break;case 10:var a=r.type._context,c=r.memoizedProps.value;fe(po,a._currentValue),a._currentValue=c;break;case 13:if(a=r.memoizedState,a!==null)return a.dehydrated!==null?(fe(we,we.current&1),r.flags|=128,null):o&r.child.childLanes?kh(t,r,o):(fe(we,we.current&1),t=nn(t,r,o),t!==null?t.sibling:null);fe(we,we.current&1);break;case 19:if(a=(o&r.childLanes)!==0,t.flags&128){if(a)return Nh(t,r,o);r.flags|=128}if(c=r.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),fe(we,we.current),a)break;return null;case 22:case 23:return r.lanes=0,Eh(t,r,o)}return nn(t,r,o)}var Ph,lu,Ah,Oh;Ph=function(t,r){for(var o=r.child;o!==null;){if(o.tag===5||o.tag===6)t.appendChild(o.stateNode);else if(o.tag!==4&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===r)break;for(;o.sibling===null;){if(o.return===null||o.return===r)return;o=o.return}o.sibling.return=o.return,o=o.sibling}},lu=function(){},Ah=function(t,r,o,a){var c=t.memoizedProps;if(c!==a){t=r.stateNode,nr($t.current);var f=null;switch(o){case"input":c=Fl(t,c),a=Fl(t,a),f=[];break;case"select":c=U({},c,{value:void 0}),a=U({},a,{value:void 0}),f=[];break;case"textarea":c=zl(t,c),a=zl(t,a),f=[];break;default:typeof c.onClick!="function"&&typeof a.onClick=="function"&&(t.onclick=io)}jl(o,a);var p;o=null;for(k in c)if(!a.hasOwnProperty(k)&&c.hasOwnProperty(k)&&c[k]!=null)if(k==="style"){var _=c[k];for(p in _)_.hasOwnProperty(p)&&(o||(o={}),o[p]="")}else k!=="dangerouslySetInnerHTML"&&k!=="children"&&k!=="suppressContentEditableWarning"&&k!=="suppressHydrationWarning"&&k!=="autoFocus"&&(l.hasOwnProperty(k)?f||(f=[]):(f=f||[]).push(k,null));for(k in a){var y=a[k];if(_=c!=null?c[k]:void 0,a.hasOwnProperty(k)&&y!==_&&(y!=null||_!=null))if(k==="style")if(_){for(p in _)!_.hasOwnProperty(p)||y&&y.hasOwnProperty(p)||(o||(o={}),o[p]="");for(p in y)y.hasOwnProperty(p)&&_[p]!==y[p]&&(o||(o={}),o[p]=y[p])}else o||(f||(f=[]),f.push(k,o)),o=y;else k==="dangerouslySetInnerHTML"?(y=y?y.__html:void 0,_=_?_.__html:void 0,y!=null&&_!==y&&(f=f||[]).push(k,y)):k==="children"?typeof y!="string"&&typeof y!="number"||(f=f||[]).push(k,""+y):k!=="suppressContentEditableWarning"&&k!=="suppressHydrationWarning"&&(l.hasOwnProperty(k)?(y!=null&&k==="onScroll"&&pe("scroll",t),f||_===y||(f=[])):(f=f||[]).push(k,y))}o&&(f=f||[]).push("style",o);var k=f;(r.updateQueue=k)&&(r.flags|=4)}},Oh=function(t,r,o,a){o!==a&&(r.flags|=4)};function qi(t,r){if(!ye)switch(t.tailMode){case"hidden":r=t.tail;for(var o=null;r!==null;)r.alternate!==null&&(o=r),r=r.sibling;o===null?t.tail=null:o.sibling=null;break;case"collapsed":o=t.tail;for(var a=null;o!==null;)o.alternate!==null&&(a=o),o=o.sibling;a===null?r||t.tail===null?t.tail=null:t.tail.sibling=null:a.sibling=null}}function Ke(t){var r=t.alternate!==null&&t.alternate.child===t.child,o=0,a=0;if(r)for(var c=t.child;c!==null;)o|=c.lanes|c.childLanes,a|=c.subtreeFlags&14680064,a|=c.flags&14680064,c.return=t,c=c.sibling;else for(c=t.child;c!==null;)o|=c.lanes|c.childLanes,a|=c.subtreeFlags,a|=c.flags,c.return=t,c=c.sibling;return t.subtreeFlags|=a,t.childLanes=o,r}function av(t,r,o){var a=r.pendingProps;switch(Pa(r),r.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ke(r),null;case 1:return it(r.type)&&oo(),Ke(r),null;case 3:return a=r.stateNode,Wr(),me(rt),me($e),Va(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(fo(r)?r.flags|=4:t===null||t.memoizedState.isDehydrated&&!(r.flags&256)||(r.flags|=1024,Ot!==null&&(yu(Ot),Ot=null))),lu(t,r),Ke(r),null;case 5:Wa(r);var c=nr(Bi.current);if(o=r.type,t!==null&&r.stateNode!=null)Ah(t,r,o,a,c),t.ref!==r.ref&&(r.flags|=512,r.flags|=2097152);else{if(!a){if(r.stateNode===null)throw Error(n(166));return Ke(r),null}if(t=nr($t.current),fo(r)){a=r.stateNode,o=r.type;var f=r.memoizedProps;switch(a[Ht]=r,a[Ui]=f,t=(r.mode&1)!==0,o){case"dialog":pe("cancel",a),pe("close",a);break;case"iframe":case"object":case"embed":pe("load",a);break;case"video":case"audio":for(c=0;c<Mi.length;c++)pe(Mi[c],a);break;case"source":pe("error",a);break;case"img":case"image":case"link":pe("error",a),pe("load",a);break;case"details":pe("toggle",a);break;case"input":cd(a,f),pe("invalid",a);break;case"select":a._wrapperState={wasMultiple:!!f.multiple},pe("invalid",a);break;case"textarea":hd(a,f),pe("invalid",a)}jl(o,f),c=null;for(var p in f)if(f.hasOwnProperty(p)){var _=f[p];p==="children"?typeof _=="string"?a.textContent!==_&&(f.suppressHydrationWarning!==!0&&ro(a.textContent,_,t),c=["children",_]):typeof _=="number"&&a.textContent!==""+_&&(f.suppressHydrationWarning!==!0&&ro(a.textContent,_,t),c=["children",""+_]):l.hasOwnProperty(p)&&_!=null&&p==="onScroll"&&pe("scroll",a)}switch(o){case"input":Ls(a),fd(a,f,!0);break;case"textarea":Ls(a),md(a);break;case"select":case"option":break;default:typeof f.onClick=="function"&&(a.onclick=io)}a=c,r.updateQueue=a,a!==null&&(r.flags|=4)}else{p=c.nodeType===9?c:c.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=gd(o)),t==="http://www.w3.org/1999/xhtml"?o==="script"?(t=p.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof a.is=="string"?t=p.createElement(o,{is:a.is}):(t=p.createElement(o),o==="select"&&(p=t,a.multiple?p.multiple=!0:a.size&&(p.size=a.size))):t=p.createElementNS(t,o),t[Ht]=r,t[Ui]=a,Ph(t,r,!1,!1),r.stateNode=t;e:{switch(p=Vl(o,a),o){case"dialog":pe("cancel",t),pe("close",t),c=a;break;case"iframe":case"object":case"embed":pe("load",t),c=a;break;case"video":case"audio":for(c=0;c<Mi.length;c++)pe(Mi[c],t);c=a;break;case"source":pe("error",t),c=a;break;case"img":case"image":case"link":pe("error",t),pe("load",t),c=a;break;case"details":pe("toggle",t),c=a;break;case"input":cd(t,a),c=Fl(t,a),pe("invalid",t);break;case"option":c=a;break;case"select":t._wrapperState={wasMultiple:!!a.multiple},c=U({},a,{value:void 0}),pe("invalid",t);break;case"textarea":hd(t,a),c=zl(t,a),pe("invalid",t);break;default:c=a}jl(o,c),_=c;for(f in _)if(_.hasOwnProperty(f)){var y=_[f];f==="style"?vd(t,y):f==="dangerouslySetInnerHTML"?(y=y?y.__html:void 0,y!=null&&_d(t,y)):f==="children"?typeof y=="string"?(o!=="textarea"||y!=="")&&gi(t,y):typeof y=="number"&&gi(t,""+y):f!=="suppressContentEditableWarning"&&f!=="suppressHydrationWarning"&&f!=="autoFocus"&&(l.hasOwnProperty(f)?y!=null&&f==="onScroll"&&pe("scroll",t):y!=null&&Ae(t,f,y,p))}switch(o){case"input":Ls(t),fd(t,a,!1);break;case"textarea":Ls(t),md(t);break;case"option":a.value!=null&&t.setAttribute("value",""+le(a.value));break;case"select":t.multiple=!!a.multiple,f=a.value,f!=null?Er(t,!!a.multiple,f,!1):a.defaultValue!=null&&Er(t,!!a.multiple,a.defaultValue,!0);break;default:typeof c.onClick=="function"&&(t.onclick=io)}switch(o){case"button":case"input":case"select":case"textarea":a=!!a.autoFocus;break e;case"img":a=!0;break e;default:a=!1}}a&&(r.flags|=4)}r.ref!==null&&(r.flags|=512,r.flags|=2097152)}return Ke(r),null;case 6:if(t&&r.stateNode!=null)Oh(t,r,t.memoizedProps,a);else{if(typeof a!="string"&&r.stateNode===null)throw Error(n(166));if(o=nr(Bi.current),nr($t.current),fo(r)){if(a=r.stateNode,o=r.memoizedProps,a[Ht]=r,(f=a.nodeValue!==o)&&(t=mt,t!==null))switch(t.tag){case 3:ro(a.nodeValue,o,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&ro(a.nodeValue,o,(t.mode&1)!==0)}f&&(r.flags|=4)}else a=(o.nodeType===9?o:o.ownerDocument).createTextNode(a),a[Ht]=r,r.stateNode=a}return Ke(r),null;case 13:if(me(we),a=r.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(ye&&gt!==null&&r.mode&1&&!(r.flags&128))Lf(),Fr(),r.flags|=98560,f=!1;else if(f=fo(r),a!==null&&a.dehydrated!==null){if(t===null){if(!f)throw Error(n(318));if(f=r.memoizedState,f=f!==null?f.dehydrated:null,!f)throw Error(n(317));f[Ht]=r}else Fr(),!(r.flags&128)&&(r.memoizedState=null),r.flags|=4;Ke(r),f=!1}else Ot!==null&&(yu(Ot),Ot=null),f=!0;if(!f)return r.flags&65536?r:null}return r.flags&128?(r.lanes=o,r):(a=a!==null,a!==(t!==null&&t.memoizedState!==null)&&a&&(r.child.flags|=8192,r.mode&1&&(t===null||we.current&1?De===0&&(De=3):Eu())),r.updateQueue!==null&&(r.flags|=4),Ke(r),null);case 4:return Wr(),lu(t,r),t===null&&Fi(r.stateNode.containerInfo),Ke(r),null;case 10:return Ma(r.type._context),Ke(r),null;case 17:return it(r.type)&&oo(),Ke(r),null;case 19:if(me(we),f=r.memoizedState,f===null)return Ke(r),null;if(a=(r.flags&128)!==0,p=f.rendering,p===null)if(a)qi(f,!1);else{if(De!==0||t!==null&&t.flags&128)for(t=r.child;t!==null;){if(p=yo(t),p!==null){for(r.flags|=128,qi(f,!1),a=p.updateQueue,a!==null&&(r.updateQueue=a,r.flags|=4),r.subtreeFlags=0,a=o,o=r.child;o!==null;)f=o,t=a,f.flags&=14680066,p=f.alternate,p===null?(f.childLanes=0,f.lanes=t,f.child=null,f.subtreeFlags=0,f.memoizedProps=null,f.memoizedState=null,f.updateQueue=null,f.dependencies=null,f.stateNode=null):(f.childLanes=p.childLanes,f.lanes=p.lanes,f.child=p.child,f.subtreeFlags=0,f.deletions=null,f.memoizedProps=p.memoizedProps,f.memoizedState=p.memoizedState,f.updateQueue=p.updateQueue,f.type=p.type,t=p.dependencies,f.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),o=o.sibling;return fe(we,we.current&1|2),r.child}t=t.sibling}f.tail!==null&&ke()>Hr&&(r.flags|=128,a=!0,qi(f,!1),r.lanes=4194304)}else{if(!a)if(t=yo(p),t!==null){if(r.flags|=128,a=!0,o=t.updateQueue,o!==null&&(r.updateQueue=o,r.flags|=4),qi(f,!0),f.tail===null&&f.tailMode==="hidden"&&!p.alternate&&!ye)return Ke(r),null}else 2*ke()-f.renderingStartTime>Hr&&o!==1073741824&&(r.flags|=128,a=!0,qi(f,!1),r.lanes=4194304);f.isBackwards?(p.sibling=r.child,r.child=p):(o=f.last,o!==null?o.sibling=p:r.child=p,f.last=p)}return f.tail!==null?(r=f.tail,f.rendering=r,f.tail=r.sibling,f.renderingStartTime=ke(),r.sibling=null,o=we.current,fe(we,a?o&1|2:o&1),r):(Ke(r),null);case 22:case 23:return wu(),a=r.memoizedState!==null,t!==null&&t.memoizedState!==null!==a&&(r.flags|=8192),a&&r.mode&1?_t&1073741824&&(Ke(r),r.subtreeFlags&6&&(r.flags|=8192)):Ke(r),null;case 24:return null;case 25:return null}throw Error(n(156,r.tag))}function uv(t,r){switch(Pa(r),r.tag){case 1:return it(r.type)&&oo(),t=r.flags,t&65536?(r.flags=t&-65537|128,r):null;case 3:return Wr(),me(rt),me($e),Va(),t=r.flags,t&65536&&!(t&128)?(r.flags=t&-65537|128,r):null;case 5:return Wa(r),null;case 13:if(me(we),t=r.memoizedState,t!==null&&t.dehydrated!==null){if(r.alternate===null)throw Error(n(340));Fr()}return t=r.flags,t&65536?(r.flags=t&-65537|128,r):null;case 19:return me(we),null;case 4:return Wr(),null;case 10:return Ma(r.type._context),null;case 22:case 23:return wu(),null;case 24:return null;default:return null}}var Ro=!1,qe=!1,cv=typeof WeakSet=="function"?WeakSet:Set,b=null;function Vr(t,r){var o=t.ref;if(o!==null)if(typeof o=="function")try{o(null)}catch(a){Ce(t,r,a)}else o.current=null}function au(t,r,o){try{o()}catch(a){Ce(t,r,a)}}var xh=!1;function dv(t,r){if(wa=Gs,t=cf(),fa(t)){if("selectionStart"in t)var o={start:t.selectionStart,end:t.selectionEnd};else e:{o=(o=t.ownerDocument)&&o.defaultView||window;var a=o.getSelection&&o.getSelection();if(a&&a.rangeCount!==0){o=a.anchorNode;var c=a.anchorOffset,f=a.focusNode;a=a.focusOffset;try{o.nodeType,f.nodeType}catch{o=null;break e}var p=0,_=-1,y=-1,k=0,P=0,A=t,R=null;t:for(;;){for(var M;A!==o||c!==0&&A.nodeType!==3||(_=p+c),A!==f||a!==0&&A.nodeType!==3||(y=p+a),A.nodeType===3&&(p+=A.nodeValue.length),(M=A.firstChild)!==null;)R=A,A=M;for(;;){if(A===t)break t;if(R===o&&++k===c&&(_=p),R===f&&++P===a&&(y=p),(M=A.nextSibling)!==null)break;A=R,R=A.parentNode}A=M}o=_===-1||y===-1?null:{start:_,end:y}}else o=null}o=o||{start:0,end:0}}else o=null;for(Ea={focusedElem:t,selectionRange:o},Gs=!1,b=r;b!==null;)if(r=b,t=r.child,(r.subtreeFlags&1028)!==0&&t!==null)t.return=r,b=t;else for(;b!==null;){r=b;try{var z=r.alternate;if(r.flags&1024)switch(r.tag){case 0:case 11:case 15:break;case 1:if(z!==null){var W=z.memoizedProps,Re=z.memoizedState,C=r.stateNode,v=C.getSnapshotBeforeUpdate(r.elementType===r.type?W:xt(r.type,W),Re);C.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var I=r.stateNode.containerInfo;I.nodeType===1?I.textContent="":I.nodeType===9&&I.documentElement&&I.removeChild(I.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(n(163))}}catch(O){Ce(r,r.return,O)}if(t=r.sibling,t!==null){t.return=r.return,b=t;break}b=r.return}return z=xh,xh=!1,z}function Qi(t,r,o){var a=r.updateQueue;if(a=a!==null?a.lastEffect:null,a!==null){var c=a=a.next;do{if((c.tag&t)===t){var f=c.destroy;c.destroy=void 0,f!==void 0&&au(r,o,f)}c=c.next}while(c!==a)}}function No(t,r){if(r=r.updateQueue,r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&t)===t){var a=o.create;o.destroy=a()}o=o.next}while(o!==r)}}function uu(t){var r=t.ref;if(r!==null){var o=t.stateNode;switch(t.tag){case 5:t=o;break;default:t=o}typeof r=="function"?r(t):r.current=t}}function Dh(t){var r=t.alternate;r!==null&&(t.alternate=null,Dh(r)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(r=t.stateNode,r!==null&&(delete r[Ht],delete r[Ui],delete r[Ta],delete r[Ky],delete r[qy])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Lh(t){return t.tag===5||t.tag===3||t.tag===4}function Mh(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Lh(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function cu(t,r,o){var a=t.tag;if(a===5||a===6)t=t.stateNode,r?o.nodeType===8?o.parentNode.insertBefore(t,r):o.insertBefore(t,r):(o.nodeType===8?(r=o.parentNode,r.insertBefore(t,o)):(r=o,r.appendChild(t)),o=o._reactRootContainer,o!=null||r.onclick!==null||(r.onclick=io));else if(a!==4&&(t=t.child,t!==null))for(cu(t,r,o),t=t.sibling;t!==null;)cu(t,r,o),t=t.sibling}function du(t,r,o){var a=t.tag;if(a===5||a===6)t=t.stateNode,r?o.insertBefore(t,r):o.appendChild(t);else if(a!==4&&(t=t.child,t!==null))for(du(t,r,o),t=t.sibling;t!==null;)du(t,r,o),t=t.sibling}var Be=null,Dt=!1;function Rn(t,r,o){for(o=o.child;o!==null;)Fh(t,r,o),o=o.sibling}function Fh(t,r,o){if(Bt&&typeof Bt.onCommitFiberUnmount=="function")try{Bt.onCommitFiberUnmount(Ws,o)}catch{}switch(o.tag){case 5:qe||Vr(o,r);case 6:var a=Be,c=Dt;Be=null,Rn(t,r,o),Be=a,Dt=c,Be!==null&&(Dt?(t=Be,o=o.stateNode,t.nodeType===8?t.parentNode.removeChild(o):t.removeChild(o)):Be.removeChild(o.stateNode));break;case 18:Be!==null&&(Dt?(t=Be,o=o.stateNode,t.nodeType===8?Ia(t.parentNode,o):t.nodeType===1&&Ia(t,o),Ri(t)):Ia(Be,o.stateNode));break;case 4:a=Be,c=Dt,Be=o.stateNode.containerInfo,Dt=!0,Rn(t,r,o),Be=a,Dt=c;break;case 0:case 11:case 14:case 15:if(!qe&&(a=o.updateQueue,a!==null&&(a=a.lastEffect,a!==null))){c=a=a.next;do{var f=c,p=f.destroy;f=f.tag,p!==void 0&&(f&2||f&4)&&au(o,r,p),c=c.next}while(c!==a)}Rn(t,r,o);break;case 1:if(!qe&&(Vr(o,r),a=o.stateNode,typeof a.componentWillUnmount=="function"))try{a.props=o.memoizedProps,a.state=o.memoizedState,a.componentWillUnmount()}catch(_){Ce(o,r,_)}Rn(t,r,o);break;case 21:Rn(t,r,o);break;case 22:o.mode&1?(qe=(a=qe)||o.memoizedState!==null,Rn(t,r,o),qe=a):Rn(t,r,o);break;default:Rn(t,r,o)}}function bh(t){var r=t.updateQueue;if(r!==null){t.updateQueue=null;var o=t.stateNode;o===null&&(o=t.stateNode=new cv),r.forEach(function(a){var c=wv.bind(null,t,a);o.has(a)||(o.add(a),a.then(c,c))})}}function Lt(t,r){var o=r.deletions;if(o!==null)for(var a=0;a<o.length;a++){var c=o[a];try{var f=t,p=r,_=p;e:for(;_!==null;){switch(_.tag){case 5:Be=_.stateNode,Dt=!1;break e;case 3:Be=_.stateNode.containerInfo,Dt=!0;break e;case 4:Be=_.stateNode.containerInfo,Dt=!0;break e}_=_.return}if(Be===null)throw Error(n(160));Fh(f,p,c),Be=null,Dt=!1;var y=c.alternate;y!==null&&(y.return=null),c.return=null}catch(k){Ce(c,r,k)}}if(r.subtreeFlags&12854)for(r=r.child;r!==null;)Uh(r,t),r=r.sibling}function Uh(t,r){var o=t.alternate,a=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Lt(r,t),Kt(t),a&4){try{Qi(3,t,t.return),No(3,t)}catch(W){Ce(t,t.return,W)}try{Qi(5,t,t.return)}catch(W){Ce(t,t.return,W)}}break;case 1:Lt(r,t),Kt(t),a&512&&o!==null&&Vr(o,o.return);break;case 5:if(Lt(r,t),Kt(t),a&512&&o!==null&&Vr(o,o.return),t.flags&32){var c=t.stateNode;try{gi(c,"")}catch(W){Ce(t,t.return,W)}}if(a&4&&(c=t.stateNode,c!=null)){var f=t.memoizedProps,p=o!==null?o.memoizedProps:f,_=t.type,y=t.updateQueue;if(t.updateQueue=null,y!==null)try{_==="input"&&f.type==="radio"&&f.name!=null&&dd(c,f),Vl(_,p);var k=Vl(_,f);for(p=0;p<y.length;p+=2){var P=y[p],A=y[p+1];P==="style"?vd(c,A):P==="dangerouslySetInnerHTML"?_d(c,A):P==="children"?gi(c,A):Ae(c,P,A,k)}switch(_){case"input":bl(c,f);break;case"textarea":pd(c,f);break;case"select":var R=c._wrapperState.wasMultiple;c._wrapperState.wasMultiple=!!f.multiple;var M=f.value;M!=null?Er(c,!!f.multiple,M,!1):R!==!!f.multiple&&(f.defaultValue!=null?Er(c,!!f.multiple,f.defaultValue,!0):Er(c,!!f.multiple,f.multiple?[]:"",!1))}c[Ui]=f}catch(W){Ce(t,t.return,W)}}break;case 6:if(Lt(r,t),Kt(t),a&4){if(t.stateNode===null)throw Error(n(162));c=t.stateNode,f=t.memoizedProps;try{c.nodeValue=f}catch(W){Ce(t,t.return,W)}}break;case 3:if(Lt(r,t),Kt(t),a&4&&o!==null&&o.memoizedState.isDehydrated)try{Ri(r.containerInfo)}catch(W){Ce(t,t.return,W)}break;case 4:Lt(r,t),Kt(t);break;case 13:Lt(r,t),Kt(t),c=t.child,c.flags&8192&&(f=c.memoizedState!==null,c.stateNode.isHidden=f,!f||c.alternate!==null&&c.alternate.memoizedState!==null||(pu=ke())),a&4&&bh(t);break;case 22:if(P=o!==null&&o.memoizedState!==null,t.mode&1?(qe=(k=qe)||P,Lt(r,t),qe=k):Lt(r,t),Kt(t),a&8192){if(k=t.memoizedState!==null,(t.stateNode.isHidden=k)&&!P&&t.mode&1)for(b=t,P=t.child;P!==null;){for(A=b=P;b!==null;){switch(R=b,M=R.child,R.tag){case 0:case 11:case 14:case 15:Qi(4,R,R.return);break;case 1:Vr(R,R.return);var z=R.stateNode;if(typeof z.componentWillUnmount=="function"){a=R,o=R.return;try{r=a,z.props=r.memoizedProps,z.state=r.memoizedState,z.componentWillUnmount()}catch(W){Ce(a,o,W)}}break;case 5:Vr(R,R.return);break;case 22:if(R.memoizedState!==null){jh(A);continue}}M!==null?(M.return=R,b=M):jh(A)}P=P.sibling}e:for(P=null,A=t;;){if(A.tag===5){if(P===null){P=A;try{c=A.stateNode,k?(f=c.style,typeof f.setProperty=="function"?f.setProperty("display","none","important"):f.display="none"):(_=A.stateNode,y=A.memoizedProps.style,p=y!=null&&y.hasOwnProperty("display")?y.display:null,_.style.display=yd("display",p))}catch(W){Ce(t,t.return,W)}}}else if(A.tag===6){if(P===null)try{A.stateNode.nodeValue=k?"":A.memoizedProps}catch(W){Ce(t,t.return,W)}}else if((A.tag!==22&&A.tag!==23||A.memoizedState===null||A===t)&&A.child!==null){A.child.return=A,A=A.child;continue}if(A===t)break e;for(;A.sibling===null;){if(A.return===null||A.return===t)break e;P===A&&(P=null),A=A.return}P===A&&(P=null),A.sibling.return=A.return,A=A.sibling}}break;case 19:Lt(r,t),Kt(t),a&4&&bh(t);break;case 21:break;default:Lt(r,t),Kt(t)}}function Kt(t){var r=t.flags;if(r&2){try{e:{for(var o=t.return;o!==null;){if(Lh(o)){var a=o;break e}o=o.return}throw Error(n(160))}switch(a.tag){case 5:var c=a.stateNode;a.flags&32&&(gi(c,""),a.flags&=-33);var f=Mh(t);du(t,f,c);break;case 3:case 4:var p=a.stateNode.containerInfo,_=Mh(t);cu(t,_,p);break;default:throw Error(n(161))}}catch(y){Ce(t,t.return,y)}t.flags&=-3}r&4096&&(t.flags&=-4097)}function fv(t,r,o){b=t,zh(t)}function zh(t,r,o){for(var a=(t.mode&1)!==0;b!==null;){var c=b,f=c.child;if(c.tag===22&&a){var p=c.memoizedState!==null||Ro;if(!p){var _=c.alternate,y=_!==null&&_.memoizedState!==null||qe;_=Ro;var k=qe;if(Ro=p,(qe=y)&&!k)for(b=c;b!==null;)p=b,y=p.child,p.tag===22&&p.memoizedState!==null?Vh(c):y!==null?(y.return=p,b=y):Vh(c);for(;f!==null;)b=f,zh(f),f=f.sibling;b=c,Ro=_,qe=k}Wh(t)}else c.subtreeFlags&8772&&f!==null?(f.return=c,b=f):Wh(t)}}function Wh(t){for(;b!==null;){var r=b;if(r.flags&8772){var o=r.alternate;try{if(r.flags&8772)switch(r.tag){case 0:case 11:case 15:qe||No(5,r);break;case 1:var a=r.stateNode;if(r.flags&4&&!qe)if(o===null)a.componentDidMount();else{var c=r.elementType===r.type?o.memoizedProps:xt(r.type,o.memoizedProps);a.componentDidUpdate(c,o.memoizedState,a.__reactInternalSnapshotBeforeUpdate)}var f=r.updateQueue;f!==null&&jf(r,f,a);break;case 3:var p=r.updateQueue;if(p!==null){if(o=null,r.child!==null)switch(r.child.tag){case 5:o=r.child.stateNode;break;case 1:o=r.child.stateNode}jf(r,p,o)}break;case 5:var _=r.stateNode;if(o===null&&r.flags&4){o=_;var y=r.memoizedProps;switch(r.type){case"button":case"input":case"select":case"textarea":y.autoFocus&&o.focus();break;case"img":y.src&&(o.src=y.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(r.memoizedState===null){var k=r.alternate;if(k!==null){var P=k.memoizedState;if(P!==null){var A=P.dehydrated;A!==null&&Ri(A)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(n(163))}qe||r.flags&512&&uu(r)}catch(R){Ce(r,r.return,R)}}if(r===t){b=null;break}if(o=r.sibling,o!==null){o.return=r.return,b=o;break}b=r.return}}function jh(t){for(;b!==null;){var r=b;if(r===t){b=null;break}var o=r.sibling;if(o!==null){o.return=r.return,b=o;break}b=r.return}}function Vh(t){for(;b!==null;){var r=b;try{switch(r.tag){case 0:case 11:case 15:var o=r.return;try{No(4,r)}catch(y){Ce(r,o,y)}break;case 1:var a=r.stateNode;if(typeof a.componentDidMount=="function"){var c=r.return;try{a.componentDidMount()}catch(y){Ce(r,c,y)}}var f=r.return;try{uu(r)}catch(y){Ce(r,f,y)}break;case 5:var p=r.return;try{uu(r)}catch(y){Ce(r,p,y)}}}catch(y){Ce(r,r.return,y)}if(r===t){b=null;break}var _=r.sibling;if(_!==null){_.return=r.return,b=_;break}b=r.return}}var hv=Math.ceil,Po=Te.ReactCurrentDispatcher,fu=Te.ReactCurrentOwner,Tt=Te.ReactCurrentBatchConfig,ne=0,be=null,Ne=null,He=0,_t=0,Br=Sn(0),De=0,Yi=null,ir=0,Ao=0,hu=0,Xi=null,ot=null,pu=0,Hr=1/0,rn=null,Oo=!1,mu=null,Nn=null,xo=!1,Pn=null,Do=0,Ji=0,gu=null,Lo=-1,Mo=0;function Je(){return ne&6?ke():Lo!==-1?Lo:Lo=ke()}function An(t){return t.mode&1?ne&2&&He!==0?He&-He:Yy.transition!==null?(Mo===0&&(Mo=Ld()),Mo):(t=ae,t!==0||(t=window.event,t=t===void 0?16:Bd(t.type)),t):1}function Mt(t,r,o,a){if(50<Ji)throw Ji=0,gu=null,Error(n(185));Si(t,o,a),(!(ne&2)||t!==be)&&(t===be&&(!(ne&2)&&(Ao|=o),De===4&&On(t,He)),lt(t,a),o===1&&ne===0&&!(r.mode&1)&&(Hr=ke()+500,ao&&In()))}function lt(t,r){var o=t.callbackNode;Y_(t,r);var a=Bs(t,t===be?He:0);if(a===0)o!==null&&Od(o),t.callbackNode=null,t.callbackPriority=0;else if(r=a&-a,t.callbackPriority!==r){if(o!=null&&Od(o),r===1)t.tag===0?Qy(Hh.bind(null,t)):Pf(Hh.bind(null,t)),$y(function(){!(ne&6)&&In()}),o=null;else{switch(Md(a)){case 1:o=Ql;break;case 4:o=xd;break;case 16:o=zs;break;case 536870912:o=Dd;break;default:o=zs}o=Jh(o,Bh.bind(null,t))}t.callbackPriority=r,t.callbackNode=o}}function Bh(t,r){if(Lo=-1,Mo=0,ne&6)throw Error(n(327));var o=t.callbackNode;if($r()&&t.callbackNode!==o)return null;var a=Bs(t,t===be?He:0);if(a===0)return null;if(a&30||a&t.expiredLanes||r)r=Fo(t,a);else{r=a;var c=ne;ne|=2;var f=Gh();(be!==t||He!==r)&&(rn=null,Hr=ke()+500,or(t,r));do try{gv();break}catch(_){$h(t,_)}while(!0);La(),Po.current=f,ne=c,Ne!==null?r=0:(be=null,He=0,r=De)}if(r!==0){if(r===2&&(c=Yl(t),c!==0&&(a=c,r=_u(t,c))),r===1)throw o=Yi,or(t,0),On(t,a),lt(t,ke()),o;if(r===6)On(t,a);else{if(c=t.current.alternate,!(a&30)&&!pv(c)&&(r=Fo(t,a),r===2&&(f=Yl(t),f!==0&&(a=f,r=_u(t,f))),r===1))throw o=Yi,or(t,0),On(t,a),lt(t,ke()),o;switch(t.finishedWork=c,t.finishedLanes=a,r){case 0:case 1:throw Error(n(345));case 2:lr(t,ot,rn);break;case 3:if(On(t,a),(a&130023424)===a&&(r=pu+500-ke(),10<r)){if(Bs(t,0)!==0)break;if(c=t.suspendedLanes,(c&a)!==a){Je(),t.pingedLanes|=t.suspendedLanes&c;break}t.timeoutHandle=Ca(lr.bind(null,t,ot,rn),r);break}lr(t,ot,rn);break;case 4:if(On(t,a),(a&4194240)===a)break;for(r=t.eventTimes,c=-1;0<a;){var p=31-Pt(a);f=1<<p,p=r[p],p>c&&(c=p),a&=~f}if(a=c,a=ke()-a,a=(120>a?120:480>a?480:1080>a?1080:1920>a?1920:3e3>a?3e3:4320>a?4320:1960*hv(a/1960))-a,10<a){t.timeoutHandle=Ca(lr.bind(null,t,ot,rn),a);break}lr(t,ot,rn);break;case 5:lr(t,ot,rn);break;default:throw Error(n(329))}}}return lt(t,ke()),t.callbackNode===o?Bh.bind(null,t):null}function _u(t,r){var o=Xi;return t.current.memoizedState.isDehydrated&&(or(t,r).flags|=256),t=Fo(t,r),t!==2&&(r=ot,ot=o,r!==null&&yu(r)),t}function yu(t){ot===null?ot=t:ot.push.apply(ot,t)}function pv(t){for(var r=t;;){if(r.flags&16384){var o=r.updateQueue;if(o!==null&&(o=o.stores,o!==null))for(var a=0;a<o.length;a++){var c=o[a],f=c.getSnapshot;c=c.value;try{if(!At(f(),c))return!1}catch{return!1}}}if(o=r.child,r.subtreeFlags&16384&&o!==null)o.return=r,r=o;else{if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function On(t,r){for(r&=~hu,r&=~Ao,t.suspendedLanes|=r,t.pingedLanes&=~r,t=t.expirationTimes;0<r;){var o=31-Pt(r),a=1<<o;t[o]=-1,r&=~a}}function Hh(t){if(ne&6)throw Error(n(327));$r();var r=Bs(t,0);if(!(r&1))return lt(t,ke()),null;var o=Fo(t,r);if(t.tag!==0&&o===2){var a=Yl(t);a!==0&&(r=a,o=_u(t,a))}if(o===1)throw o=Yi,or(t,0),On(t,r),lt(t,ke()),o;if(o===6)throw Error(n(345));return t.finishedWork=t.current.alternate,t.finishedLanes=r,lr(t,ot,rn),lt(t,ke()),null}function vu(t,r){var o=ne;ne|=1;try{return t(r)}finally{ne=o,ne===0&&(Hr=ke()+500,ao&&In())}}function sr(t){Pn!==null&&Pn.tag===0&&!(ne&6)&&$r();var r=ne;ne|=1;var o=Tt.transition,a=ae;try{if(Tt.transition=null,ae=1,t)return t()}finally{ae=a,Tt.transition=o,ne=r,!(ne&6)&&In()}}function wu(){_t=Br.current,me(Br)}function or(t,r){t.finishedWork=null,t.finishedLanes=0;var o=t.timeoutHandle;if(o!==-1&&(t.timeoutHandle=-1,Hy(o)),Ne!==null)for(o=Ne.return;o!==null;){var a=o;switch(Pa(a),a.tag){case 1:a=a.type.childContextTypes,a!=null&&oo();break;case 3:Wr(),me(rt),me($e),Va();break;case 5:Wa(a);break;case 4:Wr();break;case 13:me(we);break;case 19:me(we);break;case 10:Ma(a.type._context);break;case 22:case 23:wu()}o=o.return}if(be=t,Ne=t=xn(t.current,null),He=_t=r,De=0,Yi=null,hu=Ao=ir=0,ot=Xi=null,tr!==null){for(r=0;r<tr.length;r++)if(o=tr[r],a=o.interleaved,a!==null){o.interleaved=null;var c=a.next,f=o.pending;if(f!==null){var p=f.next;f.next=c,a.next=p}o.pending=a}tr=null}return t}function $h(t,r){do{var o=Ne;try{if(La(),vo.current=Co,wo){for(var a=Ee.memoizedState;a!==null;){var c=a.queue;c!==null&&(c.pending=null),a=a.next}wo=!1}if(rr=0,Fe=xe=Ee=null,Hi=!1,$i=0,fu.current=null,o===null||o.return===null){De=1,Yi=r,Ne=null;break}e:{var f=t,p=o.return,_=o,y=r;if(r=He,_.flags|=32768,y!==null&&typeof y=="object"&&typeof y.then=="function"){var k=y,P=_,A=P.tag;if(!(P.mode&1)&&(A===0||A===11||A===15)){var R=P.alternate;R?(P.updateQueue=R.updateQueue,P.memoizedState=R.memoizedState,P.lanes=R.lanes):(P.updateQueue=null,P.memoizedState=null)}var M=gh(p);if(M!==null){M.flags&=-257,_h(M,p,_,f,r),M.mode&1&&mh(f,k,r),r=M,y=k;var z=r.updateQueue;if(z===null){var W=new Set;W.add(y),r.updateQueue=W}else z.add(y);break e}else{if(!(r&1)){mh(f,k,r),Eu();break e}y=Error(n(426))}}else if(ye&&_.mode&1){var Re=gh(p);if(Re!==null){!(Re.flags&65536)&&(Re.flags|=256),_h(Re,p,_,f,r),xa(jr(y,_));break e}}f=y=jr(y,_),De!==4&&(De=2),Xi===null?Xi=[f]:Xi.push(f),f=p;do{switch(f.tag){case 3:f.flags|=65536,r&=-r,f.lanes|=r;var C=hh(f,y,r);Wf(f,C);break e;case 1:_=y;var v=f.type,I=f.stateNode;if(!(f.flags&128)&&(typeof v.getDerivedStateFromError=="function"||I!==null&&typeof I.componentDidCatch=="function"&&(Nn===null||!Nn.has(I)))){f.flags|=65536,r&=-r,f.lanes|=r;var O=ph(f,_,r);Wf(f,O);break e}}f=f.return}while(f!==null)}qh(o)}catch(j){r=j,Ne===o&&o!==null&&(Ne=o=o.return);continue}break}while(!0)}function Gh(){var t=Po.current;return Po.current=Co,t===null?Co:t}function Eu(){(De===0||De===3||De===2)&&(De=4),be===null||!(ir&268435455)&&!(Ao&268435455)||On(be,He)}function Fo(t,r){var o=ne;ne|=2;var a=Gh();(be!==t||He!==r)&&(rn=null,or(t,r));do try{mv();break}catch(c){$h(t,c)}while(!0);if(La(),ne=o,Po.current=a,Ne!==null)throw Error(n(261));return be=null,He=0,De}function mv(){for(;Ne!==null;)Kh(Ne)}function gv(){for(;Ne!==null&&!j_();)Kh(Ne)}function Kh(t){var r=Xh(t.alternate,t,_t);t.memoizedProps=t.pendingProps,r===null?qh(t):Ne=r,fu.current=null}function qh(t){var r=t;do{var o=r.alternate;if(t=r.return,r.flags&32768){if(o=uv(o,r),o!==null){o.flags&=32767,Ne=o;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{De=6,Ne=null;return}}else if(o=av(o,r,_t),o!==null){Ne=o;return}if(r=r.sibling,r!==null){Ne=r;return}Ne=r=t}while(r!==null);De===0&&(De=5)}function lr(t,r,o){var a=ae,c=Tt.transition;try{Tt.transition=null,ae=1,_v(t,r,o,a)}finally{Tt.transition=c,ae=a}return null}function _v(t,r,o,a){do $r();while(Pn!==null);if(ne&6)throw Error(n(327));o=t.finishedWork;var c=t.finishedLanes;if(o===null)return null;if(t.finishedWork=null,t.finishedLanes=0,o===t.current)throw Error(n(177));t.callbackNode=null,t.callbackPriority=0;var f=o.lanes|o.childLanes;if(X_(t,f),t===be&&(Ne=be=null,He=0),!(o.subtreeFlags&2064)&&!(o.flags&2064)||xo||(xo=!0,Jh(zs,function(){return $r(),null})),f=(o.flags&15990)!==0,o.subtreeFlags&15990||f){f=Tt.transition,Tt.transition=null;var p=ae;ae=1;var _=ne;ne|=4,fu.current=null,dv(t,o),Uh(o,t),by(Ea),Gs=!!wa,Ea=wa=null,t.current=o,fv(o),V_(),ne=_,ae=p,Tt.transition=f}else t.current=o;if(xo&&(xo=!1,Pn=t,Do=c),f=t.pendingLanes,f===0&&(Nn=null),$_(o.stateNode),lt(t,ke()),r!==null)for(a=t.onRecoverableError,o=0;o<r.length;o++)c=r[o],a(c.value,{componentStack:c.stack,digest:c.digest});if(Oo)throw Oo=!1,t=mu,mu=null,t;return Do&1&&t.tag!==0&&$r(),f=t.pendingLanes,f&1?t===gu?Ji++:(Ji=0,gu=t):Ji=0,In(),null}function $r(){if(Pn!==null){var t=Md(Do),r=Tt.transition,o=ae;try{if(Tt.transition=null,ae=16>t?16:t,Pn===null)var a=!1;else{if(t=Pn,Pn=null,Do=0,ne&6)throw Error(n(331));var c=ne;for(ne|=4,b=t.current;b!==null;){var f=b,p=f.child;if(b.flags&16){var _=f.deletions;if(_!==null){for(var y=0;y<_.length;y++){var k=_[y];for(b=k;b!==null;){var P=b;switch(P.tag){case 0:case 11:case 15:Qi(8,P,f)}var A=P.child;if(A!==null)A.return=P,b=A;else for(;b!==null;){P=b;var R=P.sibling,M=P.return;if(Dh(P),P===k){b=null;break}if(R!==null){R.return=M,b=R;break}b=M}}}var z=f.alternate;if(z!==null){var W=z.child;if(W!==null){z.child=null;do{var Re=W.sibling;W.sibling=null,W=Re}while(W!==null)}}b=f}}if(f.subtreeFlags&2064&&p!==null)p.return=f,b=p;else e:for(;b!==null;){if(f=b,f.flags&2048)switch(f.tag){case 0:case 11:case 15:Qi(9,f,f.return)}var C=f.sibling;if(C!==null){C.return=f.return,b=C;break e}b=f.return}}var v=t.current;for(b=v;b!==null;){p=b;var I=p.child;if(p.subtreeFlags&2064&&I!==null)I.return=p,b=I;else e:for(p=v;b!==null;){if(_=b,_.flags&2048)try{switch(_.tag){case 0:case 11:case 15:No(9,_)}}catch(j){Ce(_,_.return,j)}if(_===p){b=null;break e}var O=_.sibling;if(O!==null){O.return=_.return,b=O;break e}b=_.return}}if(ne=c,In(),Bt&&typeof Bt.onPostCommitFiberRoot=="function")try{Bt.onPostCommitFiberRoot(Ws,t)}catch{}a=!0}return a}finally{ae=o,Tt.transition=r}}return!1}function Qh(t,r,o){r=jr(o,r),r=hh(t,r,1),t=kn(t,r,1),r=Je(),t!==null&&(Si(t,1,r),lt(t,r))}function Ce(t,r,o){if(t.tag===3)Qh(t,t,o);else for(;r!==null;){if(r.tag===3){Qh(r,t,o);break}else if(r.tag===1){var a=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(Nn===null||!Nn.has(a))){t=jr(o,t),t=ph(r,t,1),r=kn(r,t,1),t=Je(),r!==null&&(Si(r,1,t),lt(r,t));break}}r=r.return}}function yv(t,r,o){var a=t.pingCache;a!==null&&a.delete(r),r=Je(),t.pingedLanes|=t.suspendedLanes&o,be===t&&(He&o)===o&&(De===4||De===3&&(He&130023424)===He&&500>ke()-pu?or(t,0):hu|=o),lt(t,r)}function Yh(t,r){r===0&&(t.mode&1?(r=Vs,Vs<<=1,!(Vs&130023424)&&(Vs=4194304)):r=1);var o=Je();t=en(t,r),t!==null&&(Si(t,r,o),lt(t,o))}function vv(t){var r=t.memoizedState,o=0;r!==null&&(o=r.retryLane),Yh(t,o)}function wv(t,r){var o=0;switch(t.tag){case 13:var a=t.stateNode,c=t.memoizedState;c!==null&&(o=c.retryLane);break;case 19:a=t.stateNode;break;default:throw Error(n(314))}a!==null&&a.delete(r),Yh(t,o)}var Xh;Xh=function(t,r,o){if(t!==null)if(t.memoizedProps!==r.pendingProps||rt.current)st=!0;else{if(!(t.lanes&o)&&!(r.flags&128))return st=!1,lv(t,r,o);st=!!(t.flags&131072)}else st=!1,ye&&r.flags&1048576&&Af(r,co,r.index);switch(r.lanes=0,r.tag){case 2:var a=r.type;ko(t,r),t=r.pendingProps;var c=Dr(r,$e.current);zr(r,o),c=$a(null,r,a,t,c,o);var f=Ga();return r.flags|=1,typeof c=="object"&&c!==null&&typeof c.render=="function"&&c.$$typeof===void 0?(r.tag=1,r.memoizedState=null,r.updateQueue=null,it(a)?(f=!0,lo(r)):f=!1,r.memoizedState=c.state!==null&&c.state!==void 0?c.state:null,Ua(r),c.updater=Io,r.stateNode=c,c._reactInternals=r,Ja(r,a,t,o),r=nu(null,r,a,!0,f,o)):(r.tag=0,ye&&f&&Na(r),Xe(null,r,c,o),r=r.child),r;case 16:a=r.elementType;e:{switch(ko(t,r),t=r.pendingProps,c=a._init,a=c(a._payload),r.type=a,c=r.tag=Sv(a),t=xt(a,t),c){case 0:r=tu(null,r,a,t,o);break e;case 1:r=Ch(null,r,a,t,o);break e;case 11:r=yh(null,r,a,t,o);break e;case 14:r=vh(null,r,a,xt(a.type,t),o);break e}throw Error(n(306,a,""))}return r;case 0:return a=r.type,c=r.pendingProps,c=r.elementType===a?c:xt(a,c),tu(t,r,a,c,o);case 1:return a=r.type,c=r.pendingProps,c=r.elementType===a?c:xt(a,c),Ch(t,r,a,c,o);case 3:e:{if(Ih(r),t===null)throw Error(n(387));a=r.pendingProps,f=r.memoizedState,c=f.element,zf(t,r),_o(r,a,null,o);var p=r.memoizedState;if(a=p.element,f.isDehydrated)if(f={element:a,isDehydrated:!1,cache:p.cache,pendingSuspenseBoundaries:p.pendingSuspenseBoundaries,transitions:p.transitions},r.updateQueue.baseState=f,r.memoizedState=f,r.flags&256){c=jr(Error(n(423)),r),r=Th(t,r,a,o,c);break e}else if(a!==c){c=jr(Error(n(424)),r),r=Th(t,r,a,o,c);break e}else for(gt=En(r.stateNode.containerInfo.firstChild),mt=r,ye=!0,Ot=null,o=bf(r,null,a,o),r.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling;else{if(Fr(),a===c){r=nn(t,r,o);break e}Xe(t,r,a,o)}r=r.child}return r;case 5:return Vf(r),t===null&&Oa(r),a=r.type,c=r.pendingProps,f=t!==null?t.memoizedProps:null,p=c.children,Sa(a,c)?p=null:f!==null&&Sa(a,f)&&(r.flags|=32),Sh(t,r),Xe(t,r,p,o),r.child;case 6:return t===null&&Oa(r),null;case 13:return kh(t,r,o);case 4:return za(r,r.stateNode.containerInfo),a=r.pendingProps,t===null?r.child=br(r,null,a,o):Xe(t,r,a,o),r.child;case 11:return a=r.type,c=r.pendingProps,c=r.elementType===a?c:xt(a,c),yh(t,r,a,c,o);case 7:return Xe(t,r,r.pendingProps,o),r.child;case 8:return Xe(t,r,r.pendingProps.children,o),r.child;case 12:return Xe(t,r,r.pendingProps.children,o),r.child;case 10:e:{if(a=r.type._context,c=r.pendingProps,f=r.memoizedProps,p=c.value,fe(po,a._currentValue),a._currentValue=p,f!==null)if(At(f.value,p)){if(f.children===c.children&&!rt.current){r=nn(t,r,o);break e}}else for(f=r.child,f!==null&&(f.return=r);f!==null;){var _=f.dependencies;if(_!==null){p=f.child;for(var y=_.firstContext;y!==null;){if(y.context===a){if(f.tag===1){y=tn(-1,o&-o),y.tag=2;var k=f.updateQueue;if(k!==null){k=k.shared;var P=k.pending;P===null?y.next=y:(y.next=P.next,P.next=y),k.pending=y}}f.lanes|=o,y=f.alternate,y!==null&&(y.lanes|=o),Fa(f.return,o,r),_.lanes|=o;break}y=y.next}}else if(f.tag===10)p=f.type===r.type?null:f.child;else if(f.tag===18){if(p=f.return,p===null)throw Error(n(341));p.lanes|=o,_=p.alternate,_!==null&&(_.lanes|=o),Fa(p,o,r),p=f.sibling}else p=f.child;if(p!==null)p.return=f;else for(p=f;p!==null;){if(p===r){p=null;break}if(f=p.sibling,f!==null){f.return=p.return,p=f;break}p=p.return}f=p}Xe(t,r,c.children,o),r=r.child}return r;case 9:return c=r.type,a=r.pendingProps.children,zr(r,o),c=Ct(c),a=a(c),r.flags|=1,Xe(t,r,a,o),r.child;case 14:return a=r.type,c=xt(a,r.pendingProps),c=xt(a.type,c),vh(t,r,a,c,o);case 15:return wh(t,r,r.type,r.pendingProps,o);case 17:return a=r.type,c=r.pendingProps,c=r.elementType===a?c:xt(a,c),ko(t,r),r.tag=1,it(a)?(t=!0,lo(r)):t=!1,zr(r,o),dh(r,a,c),Ja(r,a,c,o),nu(null,r,a,!0,t,o);case 19:return Nh(t,r,o);case 22:return Eh(t,r,o)}throw Error(n(156,r.tag))};function Jh(t,r){return Ad(t,r)}function Ev(t,r,o,a){this.tag=t,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function kt(t,r,o,a){return new Ev(t,r,o,a)}function Su(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Sv(t){if(typeof t=="function")return Su(t)?1:0;if(t!=null){if(t=t.$$typeof,t===jt)return 11;if(t===Vt)return 14}return 2}function xn(t,r){var o=t.alternate;return o===null?(o=kt(t.tag,r,t.key,t.mode),o.elementType=t.elementType,o.type=t.type,o.stateNode=t.stateNode,o.alternate=t,t.alternate=o):(o.pendingProps=r,o.type=t.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=t.flags&14680064,o.childLanes=t.childLanes,o.lanes=t.lanes,o.child=t.child,o.memoizedProps=t.memoizedProps,o.memoizedState=t.memoizedState,o.updateQueue=t.updateQueue,r=t.dependencies,o.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},o.sibling=t.sibling,o.index=t.index,o.ref=t.ref,o}function bo(t,r,o,a,c,f){var p=2;if(a=t,typeof t=="function")Su(t)&&(p=1);else if(typeof t=="string")p=5;else e:switch(t){case Ve:return ar(o.children,c,f,r);case tt:p=8,c|=8;break;case wt:return t=kt(12,o,r,c|2),t.elementType=wt,t.lanes=f,t;case ft:return t=kt(13,o,r,c),t.elementType=ft,t.lanes=f,t;case Nt:return t=kt(19,o,r,c),t.elementType=Nt,t.lanes=f,t;case Se:return Uo(o,c,f,r);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Rt:p=10;break e;case Qn:p=9;break e;case jt:p=11;break e;case Vt:p=14;break e;case nt:p=16,a=null;break e}throw Error(n(130,t==null?t:typeof t,""))}return r=kt(p,o,r,c),r.elementType=t,r.type=a,r.lanes=f,r}function ar(t,r,o,a){return t=kt(7,t,a,r),t.lanes=o,t}function Uo(t,r,o,a){return t=kt(22,t,a,r),t.elementType=Se,t.lanes=o,t.stateNode={isHidden:!1},t}function Cu(t,r,o){return t=kt(6,t,null,r),t.lanes=o,t}function Iu(t,r,o){return r=kt(4,t.children!==null?t.children:[],t.key,r),r.lanes=o,r.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},r}function Cv(t,r,o,a,c){this.tag=r,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Xl(0),this.expirationTimes=Xl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Xl(0),this.identifierPrefix=a,this.onRecoverableError=c,this.mutableSourceEagerHydrationData=null}function Tu(t,r,o,a,c,f,p,_,y){return t=new Cv(t,r,o,_,y),r===1?(r=1,f===!0&&(r|=8)):r=0,f=kt(3,null,null,r),t.current=f,f.stateNode=t,f.memoizedState={element:a,isDehydrated:o,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ua(f),t}function Iv(t,r,o){var a=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Oe,key:a==null?null:""+a,children:t,containerInfo:r,implementation:o}}function Zh(t){if(!t)return Cn;t=t._reactInternals;e:{if(Yn(t)!==t||t.tag!==1)throw Error(n(170));var r=t;do{switch(r.tag){case 3:r=r.stateNode.context;break e;case 1:if(it(r.type)){r=r.stateNode.__reactInternalMemoizedMergedChildContext;break e}}r=r.return}while(r!==null);throw Error(n(171))}if(t.tag===1){var o=t.type;if(it(o))return Rf(t,o,r)}return r}function ep(t,r,o,a,c,f,p,_,y){return t=Tu(o,a,!0,t,c,f,p,_,y),t.context=Zh(null),o=t.current,a=Je(),c=An(o),f=tn(a,c),f.callback=r??null,kn(o,f,c),t.current.lanes=c,Si(t,c,a),lt(t,a),t}function zo(t,r,o,a){var c=r.current,f=Je(),p=An(c);return o=Zh(o),r.context===null?r.context=o:r.pendingContext=o,r=tn(f,p),r.payload={element:t},a=a===void 0?null:a,a!==null&&(r.callback=a),t=kn(c,r,p),t!==null&&(Mt(t,c,p,f),go(t,c,p)),p}function Wo(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function tp(t,r){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var o=t.retryLane;t.retryLane=o!==0&&o<r?o:r}}function ku(t,r){tp(t,r),(t=t.alternate)&&tp(t,r)}function Tv(){return null}var np=typeof reportError=="function"?reportError:function(t){console.error(t)};function Ru(t){this._internalRoot=t}jo.prototype.render=Ru.prototype.render=function(t){var r=this._internalRoot;if(r===null)throw Error(n(409));zo(t,r,null,null)},jo.prototype.unmount=Ru.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var r=t.containerInfo;sr(function(){zo(null,t,null,null)}),r[Yt]=null}};function jo(t){this._internalRoot=t}jo.prototype.unstable_scheduleHydration=function(t){if(t){var r=Ud();t={blockedOn:null,target:t,priority:r};for(var o=0;o<yn.length&&r!==0&&r<yn[o].priority;o++);yn.splice(o,0,t),o===0&&jd(t)}};function Nu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Vo(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function rp(){}function kv(t,r,o,a,c){if(c){if(typeof a=="function"){var f=a;a=function(){var k=Wo(p);f.call(k)}}var p=ep(r,a,t,0,null,!1,!1,"",rp);return t._reactRootContainer=p,t[Yt]=p.current,Fi(t.nodeType===8?t.parentNode:t),sr(),p}for(;c=t.lastChild;)t.removeChild(c);if(typeof a=="function"){var _=a;a=function(){var k=Wo(y);_.call(k)}}var y=Tu(t,0,!1,null,null,!1,!1,"",rp);return t._reactRootContainer=y,t[Yt]=y.current,Fi(t.nodeType===8?t.parentNode:t),sr(function(){zo(r,y,o,a)}),y}function Bo(t,r,o,a,c){var f=o._reactRootContainer;if(f){var p=f;if(typeof c=="function"){var _=c;c=function(){var y=Wo(p);_.call(y)}}zo(r,p,t,c)}else p=kv(o,r,t,c,a);return Wo(p)}Fd=function(t){switch(t.tag){case 3:var r=t.stateNode;if(r.current.memoizedState.isDehydrated){var o=Ei(r.pendingLanes);o!==0&&(Jl(r,o|1),lt(r,ke()),!(ne&6)&&(Hr=ke()+500,In()))}break;case 13:sr(function(){var a=en(t,1);if(a!==null){var c=Je();Mt(a,t,1,c)}}),ku(t,1)}},Zl=function(t){if(t.tag===13){var r=en(t,134217728);if(r!==null){var o=Je();Mt(r,t,134217728,o)}ku(t,134217728)}},bd=function(t){if(t.tag===13){var r=An(t),o=en(t,r);if(o!==null){var a=Je();Mt(o,t,r,a)}ku(t,r)}},Ud=function(){return ae},zd=function(t,r){var o=ae;try{return ae=t,r()}finally{ae=o}},$l=function(t,r,o){switch(r){case"input":if(bl(t,o),r=o.name,o.type==="radio"&&r!=null){for(o=t;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll("input[name="+JSON.stringify(""+r)+'][type="radio"]'),r=0;r<o.length;r++){var a=o[r];if(a!==t&&a.form===t.form){var c=so(a);if(!c)throw Error(n(90));ud(a),bl(a,c)}}}break;case"textarea":pd(t,o);break;case"select":r=o.value,r!=null&&Er(t,!!o.multiple,r,!1)}},Cd=vu,Id=sr;var Rv={usingClientEntryPoint:!1,Events:[zi,Or,so,Ed,Sd,vu]},Zi={findFiberByHostInstance:Xn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Nv={bundleType:Zi.bundleType,version:Zi.version,rendererPackageName:Zi.rendererPackageName,rendererConfig:Zi.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Te.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Nd(t),t===null?null:t.stateNode},findFiberByHostInstance:Zi.findFiberByHostInstance||Tv,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ho=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ho.isDisabled&&Ho.supportsFiber)try{Ws=Ho.inject(Nv),Bt=Ho}catch{}}return at.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Rv,at.createPortal=function(t,r){var o=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Nu(r))throw Error(n(200));return Iv(t,r,null,o)},at.createRoot=function(t,r){if(!Nu(t))throw Error(n(299));var o=!1,a="",c=np;return r!=null&&(r.unstable_strictMode===!0&&(o=!0),r.identifierPrefix!==void 0&&(a=r.identifierPrefix),r.onRecoverableError!==void 0&&(c=r.onRecoverableError)),r=Tu(t,1,!1,null,null,o,!1,a,c),t[Yt]=r.current,Fi(t.nodeType===8?t.parentNode:t),new Ru(r)},at.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var r=t._reactInternals;if(r===void 0)throw typeof t.render=="function"?Error(n(188)):(t=Object.keys(t).join(","),Error(n(268,t)));return t=Nd(r),t=t===null?null:t.stateNode,t},at.flushSync=function(t){return sr(t)},at.hydrate=function(t,r,o){if(!Vo(r))throw Error(n(200));return Bo(null,t,r,!0,o)},at.hydrateRoot=function(t,r,o){if(!Nu(t))throw Error(n(405));var a=o!=null&&o.hydratedSources||null,c=!1,f="",p=np;if(o!=null&&(o.unstable_strictMode===!0&&(c=!0),o.identifierPrefix!==void 0&&(f=o.identifierPrefix),o.onRecoverableError!==void 0&&(p=o.onRecoverableError)),r=ep(r,null,t,1,o??null,c,!1,f,p),t[Yt]=r.current,Fi(t),a)for(t=0;t<a.length;t++)o=a[t],c=o._getVersion,c=c(o._source),r.mutableSourceEagerHydrationData==null?r.mutableSourceEagerHydrationData=[o,c]:r.mutableSourceEagerHydrationData.push(o,c);return new jo(r)},at.render=function(t,r,o){if(!Vo(r))throw Error(n(200));return Bo(null,t,r,!1,o)},at.unmountComponentAtNode=function(t){if(!Vo(t))throw Error(n(40));return t._reactRootContainer?(sr(function(){Bo(null,null,t,!1,function(){t._reactRootContainer=null,t[Yt]=null})}),!0):!1},at.unstable_batchedUpdates=vu,at.unstable_renderSubtreeIntoContainer=function(t,r,o,a){if(!Vo(o))throw Error(n(200));if(t==null||t._reactInternals===void 0)throw Error(n(38));return Bo(t,r,o,!1,a)},at.version="18.3.1-next-f1338f8080-20240426",at}var dp;function bv(){if(dp)return Ou.exports;dp=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(e){console.error(e)}}return i(),Ou.exports=Fv(),Ou.exports}var fp;function Uv(){if(fp)return Go;fp=1;var i=bv();return Go.createRoot=i.createRoot,Go.hydrateRoot=i.hydrateRoot,Go}var zv=Uv(),hp={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Im={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const x=function(i,e){if(!i)throw ai(e)},ai=function(i){return new Error("Firebase Database ("+Im.SDK_VERSION+") INTERNAL ASSERT FAILED: "+i)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tm=function(i){const e=[];let n=0;for(let s=0;s<i.length;s++){let l=i.charCodeAt(s);l<128?e[n++]=l:l<2048?(e[n++]=l>>6|192,e[n++]=l&63|128):(l&64512)===55296&&s+1<i.length&&(i.charCodeAt(s+1)&64512)===56320?(l=65536+((l&1023)<<10)+(i.charCodeAt(++s)&1023),e[n++]=l>>18|240,e[n++]=l>>12&63|128,e[n++]=l>>6&63|128,e[n++]=l&63|128):(e[n++]=l>>12|224,e[n++]=l>>6&63|128,e[n++]=l&63|128)}return e},Wv=function(i){const e=[];let n=0,s=0;for(;n<i.length;){const l=i[n++];if(l<128)e[s++]=String.fromCharCode(l);else if(l>191&&l<224){const u=i[n++];e[s++]=String.fromCharCode((l&31)<<6|u&63)}else if(l>239&&l<365){const u=i[n++],d=i[n++],h=i[n++],m=((l&7)<<18|(u&63)<<12|(d&63)<<6|h&63)-65536;e[s++]=String.fromCharCode(55296+(m>>10)),e[s++]=String.fromCharCode(56320+(m&1023))}else{const u=i[n++],d=i[n++];e[s++]=String.fromCharCode((l&15)<<12|(u&63)<<6|d&63)}}return e.join("")},_c={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(i,e){if(!Array.isArray(i))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let l=0;l<i.length;l+=3){const u=i[l],d=l+1<i.length,h=d?i[l+1]:0,m=l+2<i.length,g=m?i[l+2]:0,E=u>>2,w=(u&3)<<4|h>>4;let T=(h&15)<<2|g>>6,D=g&63;m||(D=64,d||(T=64)),s.push(n[E],n[w],n[T],n[D])}return s.join("")},encodeString(i,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(i):this.encodeByteArray(Tm(i),e)},decodeString(i,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(i):Wv(this.decodeStringToByteArray(i,e))},decodeStringToByteArray(i,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let l=0;l<i.length;){const u=n[i.charAt(l++)],h=l<i.length?n[i.charAt(l)]:0;++l;const g=l<i.length?n[i.charAt(l)]:64;++l;const w=l<i.length?n[i.charAt(l)]:64;if(++l,u==null||h==null||g==null||w==null)throw new jv;const T=u<<2|h>>4;if(s.push(T),g!==64){const D=h<<4&240|g>>2;if(s.push(D),w!==64){const F=g<<6&192|w;s.push(F)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let i=0;i<this.ENCODED_VALS.length;i++)this.byteToCharMap_[i]=this.ENCODED_VALS.charAt(i),this.charToByteMap_[this.byteToCharMap_[i]]=i,this.byteToCharMapWebSafe_[i]=this.ENCODED_VALS_WEBSAFE.charAt(i),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[i]]=i,i>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(i)]=i,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(i)]=i)}}};class jv extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const km=function(i){const e=Tm(i);return _c.encodeByteArray(e,!0)},tl=function(i){return km(i).replace(/\./g,"")},nl=function(i){try{return _c.decodeString(i,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vv(i){return Rm(void 0,i)}function Rm(i,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:i===void 0&&(i={});break;case Array:i=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!Bv(n)||(i[n]=Rm(i[n],e[n]));return i}function Bv(i){return i!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hv(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $v=()=>Hv().__FIREBASE_DEFAULTS__,Gv=()=>{if(typeof process>"u"||typeof hp>"u")return;const i=hp.__FIREBASE_DEFAULTS__;if(i)return JSON.parse(i)},Kv=()=>{if(typeof document>"u")return;let i;try{i=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=i&&nl(i[1]);return e&&JSON.parse(e)},yc=()=>{try{return $v()||Gv()||Kv()}catch(i){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${i}`);return}},Nm=i=>{var e,n;return(n=(e=yc())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[i]},qv=i=>{const e=Nm(i);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},Pm=()=>{var i;return(i=yc())===null||i===void 0?void 0:i.config},Am=i=>{var e;return(e=yc())===null||e===void 0?void 0:e[`_${i}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vc{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qv(i,e){if(i.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",l=i.iat||0,u=i.sub||i.user_id;if(!u)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const d=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:l,exp:l+3600,auth_time:l,sub:u,user_id:u,firebase:{sign_in_provider:"custom",identities:{}}},i);return[tl(JSON.stringify(n)),tl(JSON.stringify(d)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ze(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function wc(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ze())}function Yv(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Xv(){const i=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof i=="object"&&i.id!==void 0}function Om(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Jv(){const i=Ze();return i.indexOf("MSIE ")>=0||i.indexOf("Trident/")>=0}function Zv(){return Im.NODE_ADMIN===!0}function ew(){try{return typeof indexedDB=="object"}catch{return!1}}function tw(){return new Promise((i,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",l=self.indexedDB.open(s);l.onsuccess=()=>{l.result.close(),n||self.indexedDB.deleteDatabase(s),i(!0)},l.onupgradeneeded=()=>{n=!1},l.onerror=()=>{var u;e(((u=l.error)===null||u===void 0?void 0:u.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nw="FirebaseError";class Gn extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=nw,Object.setPrototypeOf(this,Gn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Is.prototype.create)}}class Is{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},l=`${this.service}/${e}`,u=this.errors[e],d=u?rw(u,s):"Error",h=`${this.serviceName}: ${d} (${l}).`;return new Gn(l,h,s)}}function rw(i,e){return i.replace(iw,(n,s)=>{const l=e[s];return l!=null?String(l):`<${s}?>`})}const iw=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ps(i){return JSON.parse(i)}function je(i){return JSON.stringify(i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xm=function(i){let e={},n={},s={},l="";try{const u=i.split(".");e=ps(nl(u[0])||""),n=ps(nl(u[1])||""),l=u[2],s=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:s,signature:l}},sw=function(i){const e=xm(i),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},ow=function(i){const e=xm(i).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pn(i,e){return Object.prototype.hasOwnProperty.call(i,e)}function ni(i,e){if(Object.prototype.hasOwnProperty.call(i,e))return i[e]}function qu(i){for(const e in i)if(Object.prototype.hasOwnProperty.call(i,e))return!1;return!0}function rl(i,e,n){const s={};for(const l in i)Object.prototype.hasOwnProperty.call(i,l)&&(s[l]=e.call(n,i[l],l,i));return s}function il(i,e){if(i===e)return!0;const n=Object.keys(i),s=Object.keys(e);for(const l of n){if(!s.includes(l))return!1;const u=i[l],d=e[l];if(pp(u)&&pp(d)){if(!il(u,d))return!1}else if(u!==d)return!1}for(const l of s)if(!n.includes(l))return!1;return!0}function pp(i){return i!==null&&typeof i=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ui(i){const e=[];for(const[n,s]of Object.entries(i))Array.isArray(s)?s.forEach(l=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(l))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function ss(i){const e={};return i.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[l,u]=s.split("=");e[decodeURIComponent(l)]=decodeURIComponent(u)}}),e}function os(i){const e=i.indexOf("?");if(!e)return"";const n=i.indexOf("#",e);return i.substring(e,n>0?n:void 0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lw{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const s=this.W_;if(typeof e=="string")for(let w=0;w<16;w++)s[w]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let w=0;w<16;w++)s[w]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let w=16;w<80;w++){const T=s[w-3]^s[w-8]^s[w-14]^s[w-16];s[w]=(T<<1|T>>>31)&4294967295}let l=this.chain_[0],u=this.chain_[1],d=this.chain_[2],h=this.chain_[3],m=this.chain_[4],g,E;for(let w=0;w<80;w++){w<40?w<20?(g=h^u&(d^h),E=1518500249):(g=u^d^h,E=1859775393):w<60?(g=u&d|h&(u|d),E=2400959708):(g=u^d^h,E=3395469782);const T=(l<<5|l>>>27)+g+m+E+s[w]&4294967295;m=h,h=d,d=(u<<30|u>>>2)&4294967295,u=l,l=T}this.chain_[0]=this.chain_[0]+l&4294967295,this.chain_[1]=this.chain_[1]+u&4294967295,this.chain_[2]=this.chain_[2]+d&4294967295,this.chain_[3]=this.chain_[3]+h&4294967295,this.chain_[4]=this.chain_[4]+m&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const s=n-this.blockSize;let l=0;const u=this.buf_;let d=this.inbuf_;for(;l<n;){if(d===0)for(;l<=s;)this.compress_(e,l),l+=this.blockSize;if(typeof e=="string"){for(;l<n;)if(u[d]=e.charCodeAt(l),++d,++l,d===this.blockSize){this.compress_(u),d=0;break}}else for(;l<n;)if(u[d]=e[l],++d,++l,d===this.blockSize){this.compress_(u),d=0;break}}this.inbuf_=d,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let l=this.blockSize-1;l>=56;l--)this.buf_[l]=n&255,n/=256;this.compress_(this.buf_);let s=0;for(let l=0;l<5;l++)for(let u=24;u>=0;u-=8)e[s]=this.chain_[l]>>u&255,++s;return e}}function aw(i,e){const n=new uw(i,e);return n.subscribe.bind(n)}class uw{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let l;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");cw(e,["next","error","complete"])?l=e:l={next:e,error:n,complete:s},l.next===void 0&&(l.next=Lu),l.error===void 0&&(l.error=Lu),l.complete===void 0&&(l.complete=Lu);const u=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?l.error(this.finalError):l.complete()}catch{}}),this.observers.push(l),u}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function cw(i,e){if(typeof i!="object"||i===null)return!1;for(const n of e)if(n in i&&typeof i[n]=="function")return!0;return!1}function Lu(){}function Dm(i,e){return`${i} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dw=function(i){const e=[];let n=0;for(let s=0;s<i.length;s++){let l=i.charCodeAt(s);if(l>=55296&&l<=56319){const u=l-55296;s++,x(s<i.length,"Surrogate pair missing trail surrogate.");const d=i.charCodeAt(s)-56320;l=65536+(u<<10)+d}l<128?e[n++]=l:l<2048?(e[n++]=l>>6|192,e[n++]=l&63|128):l<65536?(e[n++]=l>>12|224,e[n++]=l>>6&63|128,e[n++]=l&63|128):(e[n++]=l>>18|240,e[n++]=l>>12&63|128,e[n++]=l>>6&63|128,e[n++]=l&63|128)}return e},Il=function(i){let e=0;for(let n=0;n<i.length;n++){const s=i.charCodeAt(n);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,n++):e+=3}return e};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vt(i){return i&&i._delegate?i._delegate:i}class fr{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ur="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fw{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new vc;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const l=this.getOrInitializeService({instanceIdentifier:n});l&&s.resolve(l)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),l=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(u){if(l)return null;throw u}else{if(l)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(pw(e))try{this.getOrInitializeService({instanceIdentifier:ur})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(n);try{const u=this.getOrInitializeService({instanceIdentifier:l});s.resolve(u)}catch{}}}}clearInstance(e=ur){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ur){return this.instances.has(e)}getOptions(e=ur){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const l=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[u,d]of this.instancesDeferred.entries()){const h=this.normalizeInstanceIdentifier(u);s===h&&d.resolve(l)}return l}onInit(e,n){var s;const l=this.normalizeInstanceIdentifier(n),u=(s=this.onInitCallbacks.get(l))!==null&&s!==void 0?s:new Set;u.add(e),this.onInitCallbacks.set(l,u);const d=this.instances.get(l);return d&&e(d,l),()=>{u.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const l of s)try{l(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:hw(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=ur){return this.component?this.component.multipleInstances?e:ur:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function hw(i){return i===ur?void 0:i}function pw(i){return i.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mw{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new fw(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ue;(function(i){i[i.DEBUG=0]="DEBUG",i[i.VERBOSE=1]="VERBOSE",i[i.INFO=2]="INFO",i[i.WARN=3]="WARN",i[i.ERROR=4]="ERROR",i[i.SILENT=5]="SILENT"})(ue||(ue={}));const gw={debug:ue.DEBUG,verbose:ue.VERBOSE,info:ue.INFO,warn:ue.WARN,error:ue.ERROR,silent:ue.SILENT},_w=ue.INFO,yw={[ue.DEBUG]:"log",[ue.VERBOSE]:"log",[ue.INFO]:"info",[ue.WARN]:"warn",[ue.ERROR]:"error"},vw=(i,e,...n)=>{if(e<i.logLevel)return;const s=new Date().toISOString(),l=yw[e];if(l)console[l](`[${s}]  ${i.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Ec{constructor(e){this.name=e,this._logLevel=_w,this._logHandler=vw,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ue))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?gw[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ue.DEBUG,...e),this._logHandler(this,ue.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ue.VERBOSE,...e),this._logHandler(this,ue.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ue.INFO,...e),this._logHandler(this,ue.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ue.WARN,...e),this._logHandler(this,ue.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ue.ERROR,...e),this._logHandler(this,ue.ERROR,...e)}}const ww=(i,e)=>e.some(n=>i instanceof n);let mp,gp;function Ew(){return mp||(mp=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Sw(){return gp||(gp=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Lm=new WeakMap,Qu=new WeakMap,Mm=new WeakMap,Mu=new WeakMap,Sc=new WeakMap;function Cw(i){const e=new Promise((n,s)=>{const l=()=>{i.removeEventListener("success",u),i.removeEventListener("error",d)},u=()=>{n(zn(i.result)),l()},d=()=>{s(i.error),l()};i.addEventListener("success",u),i.addEventListener("error",d)});return e.then(n=>{n instanceof IDBCursor&&Lm.set(n,i)}).catch(()=>{}),Sc.set(e,i),e}function Iw(i){if(Qu.has(i))return;const e=new Promise((n,s)=>{const l=()=>{i.removeEventListener("complete",u),i.removeEventListener("error",d),i.removeEventListener("abort",d)},u=()=>{n(),l()},d=()=>{s(i.error||new DOMException("AbortError","AbortError")),l()};i.addEventListener("complete",u),i.addEventListener("error",d),i.addEventListener("abort",d)});Qu.set(i,e)}let Yu={get(i,e,n){if(i instanceof IDBTransaction){if(e==="done")return Qu.get(i);if(e==="objectStoreNames")return i.objectStoreNames||Mm.get(i);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return zn(i[e])},set(i,e,n){return i[e]=n,!0},has(i,e){return i instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in i}};function Tw(i){Yu=i(Yu)}function kw(i){return i===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=i.call(Fu(this),e,...n);return Mm.set(s,e.sort?e.sort():[e]),zn(s)}:Sw().includes(i)?function(...e){return i.apply(Fu(this),e),zn(Lm.get(this))}:function(...e){return zn(i.apply(Fu(this),e))}}function Rw(i){return typeof i=="function"?kw(i):(i instanceof IDBTransaction&&Iw(i),ww(i,Ew())?new Proxy(i,Yu):i)}function zn(i){if(i instanceof IDBRequest)return Cw(i);if(Mu.has(i))return Mu.get(i);const e=Rw(i);return e!==i&&(Mu.set(i,e),Sc.set(e,i)),e}const Fu=i=>Sc.get(i);function Nw(i,e,{blocked:n,upgrade:s,blocking:l,terminated:u}={}){const d=indexedDB.open(i,e),h=zn(d);return s&&d.addEventListener("upgradeneeded",m=>{s(zn(d.result),m.oldVersion,m.newVersion,zn(d.transaction),m)}),n&&d.addEventListener("blocked",m=>n(m.oldVersion,m.newVersion,m)),h.then(m=>{u&&m.addEventListener("close",()=>u()),l&&m.addEventListener("versionchange",g=>l(g.oldVersion,g.newVersion,g))}).catch(()=>{}),h}const Pw=["get","getKey","getAll","getAllKeys","count"],Aw=["put","add","delete","clear"],bu=new Map;function _p(i,e){if(!(i instanceof IDBDatabase&&!(e in i)&&typeof e=="string"))return;if(bu.get(e))return bu.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,l=Aw.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(l||Pw.includes(n)))return;const u=async function(d,...h){const m=this.transaction(d,l?"readwrite":"readonly");let g=m.store;return s&&(g=g.index(h.shift())),(await Promise.all([g[n](...h),l&&m.done]))[0]};return bu.set(e,u),u}Tw(i=>({...i,get:(e,n,s)=>_p(e,n)||i.get(e,n,s),has:(e,n)=>!!_p(e,n)||i.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ow{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(xw(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function xw(i){const e=i.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Xu="@firebase/app",yp="0.10.18";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dn=new Ec("@firebase/app"),Dw="@firebase/app-compat",Lw="@firebase/analytics-compat",Mw="@firebase/analytics",Fw="@firebase/app-check-compat",bw="@firebase/app-check",Uw="@firebase/auth",zw="@firebase/auth-compat",Ww="@firebase/database",jw="@firebase/data-connect",Vw="@firebase/database-compat",Bw="@firebase/functions",Hw="@firebase/functions-compat",$w="@firebase/installations",Gw="@firebase/installations-compat",Kw="@firebase/messaging",qw="@firebase/messaging-compat",Qw="@firebase/performance",Yw="@firebase/performance-compat",Xw="@firebase/remote-config",Jw="@firebase/remote-config-compat",Zw="@firebase/storage",eE="@firebase/storage-compat",tE="@firebase/firestore",nE="@firebase/vertexai",rE="@firebase/firestore-compat",iE="firebase",sE="11.2.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ju="[DEFAULT]",oE={[Xu]:"fire-core",[Dw]:"fire-core-compat",[Mw]:"fire-analytics",[Lw]:"fire-analytics-compat",[bw]:"fire-app-check",[Fw]:"fire-app-check-compat",[Uw]:"fire-auth",[zw]:"fire-auth-compat",[Ww]:"fire-rtdb",[jw]:"fire-data-connect",[Vw]:"fire-rtdb-compat",[Bw]:"fire-fn",[Hw]:"fire-fn-compat",[$w]:"fire-iid",[Gw]:"fire-iid-compat",[Kw]:"fire-fcm",[qw]:"fire-fcm-compat",[Qw]:"fire-perf",[Yw]:"fire-perf-compat",[Xw]:"fire-rc",[Jw]:"fire-rc-compat",[Zw]:"fire-gcs",[eE]:"fire-gcs-compat",[tE]:"fire-fst",[rE]:"fire-fst-compat",[nE]:"fire-vertex","fire-js":"fire-js",[iE]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sl=new Map,lE=new Map,Zu=new Map;function vp(i,e){try{i.container.addComponent(e)}catch(n){dn.debug(`Component ${e.name} failed to register with FirebaseApp ${i.name}`,n)}}function ri(i){const e=i.name;if(Zu.has(e))return dn.debug(`There were multiple attempts to register component ${e}.`),!1;Zu.set(e,i);for(const n of sl.values())vp(n,i);for(const n of lE.values())vp(n,i);return!0}function Cc(i,e){const n=i.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),i.container.getProvider(e)}function sn(i){return i.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aE={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Wn=new Is("app","Firebase",aE);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uE{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new fr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Wn.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ci=sE;function Ic(i,e={}){let n=i;typeof e!="object"&&(e={name:e});const s=Object.assign({name:Ju,automaticDataCollectionEnabled:!1},e),l=s.name;if(typeof l!="string"||!l)throw Wn.create("bad-app-name",{appName:String(l)});if(n||(n=Pm()),!n)throw Wn.create("no-options");const u=sl.get(l);if(u){if(il(n,u.options)&&il(s,u.config))return u;throw Wn.create("duplicate-app",{appName:l})}const d=new mw(l);for(const m of Zu.values())d.addComponent(m);const h=new uE(n,s,d);return sl.set(l,h),h}function Fm(i=Ju){const e=sl.get(i);if(!e&&i===Ju&&Pm())return Ic();if(!e)throw Wn.create("no-app",{appName:i});return e}function jn(i,e,n){var s;let l=(s=oE[i])!==null&&s!==void 0?s:i;n&&(l+=`-${n}`);const u=l.match(/\s|\//),d=e.match(/\s|\//);if(u||d){const h=[`Unable to register library "${l}" with version "${e}":`];u&&h.push(`library name "${l}" contains illegal characters (whitespace or "/")`),u&&d&&h.push("and"),d&&h.push(`version name "${e}" contains illegal characters (whitespace or "/")`),dn.warn(h.join(" "));return}ri(new fr(`${l}-version`,()=>({library:l,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cE="firebase-heartbeat-database",dE=1,ms="firebase-heartbeat-store";let Uu=null;function bm(){return Uu||(Uu=Nw(cE,dE,{upgrade:(i,e)=>{switch(e){case 0:try{i.createObjectStore(ms)}catch(n){console.warn(n)}}}}).catch(i=>{throw Wn.create("idb-open",{originalErrorMessage:i.message})})),Uu}async function fE(i){try{const n=(await bm()).transaction(ms),s=await n.objectStore(ms).get(Um(i));return await n.done,s}catch(e){if(e instanceof Gn)dn.warn(e.message);else{const n=Wn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});dn.warn(n.message)}}}async function wp(i,e){try{const s=(await bm()).transaction(ms,"readwrite");await s.objectStore(ms).put(e,Um(i)),await s.done}catch(n){if(n instanceof Gn)dn.warn(n.message);else{const s=Wn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});dn.warn(s.message)}}}function Um(i){return`${i.name}!${i.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hE=1024,pE=30*24*60*60*1e3;class mE{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new _E(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,n;try{const l=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),u=Ep();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===u||this._heartbeatsCache.heartbeats.some(d=>d.date===u)?void 0:(this._heartbeatsCache.heartbeats.push({date:u,agent:l}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(d=>{const h=new Date(d.date).valueOf();return Date.now()-h<=pE}),this._storage.overwrite(this._heartbeatsCache))}catch(s){dn.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Ep(),{heartbeatsToSend:s,unsentEntries:l}=gE(this._heartbeatsCache.heartbeats),u=tl(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=n,l.length>0?(this._heartbeatsCache.heartbeats=l,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),u}catch(n){return dn.warn(n),""}}}function Ep(){return new Date().toISOString().substring(0,10)}function gE(i,e=hE){const n=[];let s=i.slice();for(const l of i){const u=n.find(d=>d.agent===l.agent);if(u){if(u.dates.push(l.date),Sp(n)>e){u.dates.pop();break}}else if(n.push({agent:l.agent,dates:[l.date]}),Sp(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class _E{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return ew()?tw().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await fE(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const l=await this.read();return wp(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:l.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const l=await this.read();return wp(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:l.lastSentHeartbeatDate,heartbeats:[...l.heartbeats,...e.heartbeats]})}else return}}function Sp(i){return tl(JSON.stringify({version:2,heartbeats:i})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yE(i){ri(new fr("platform-logger",e=>new Ow(e),"PRIVATE")),ri(new fr("heartbeat",e=>new mE(e),"PRIVATE")),jn(Xu,yp,i),jn(Xu,yp,"esm2017"),jn("fire-js","")}yE("");var vE="firebase",wE="11.2.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */jn(vE,wE,"app");var Cp={};const Ip="@firebase/database",Tp="1.0.11";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let zm="";function EE(i){zm=i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SE{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),je(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:ps(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CE{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return pn(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wm=function(i){try{if(typeof window<"u"&&typeof window[i]<"u"){const e=window[i];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new SE(e)}}catch{}return new CE},dr=Wm("localStorage"),IE=Wm("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yr=new Ec("@firebase/database"),TE=function(){let i=1;return function(){return i++}}(),jm=function(i){const e=dw(i),n=new lw;n.update(e);const s=n.digest();return _c.encodeByteArray(s)},Ts=function(...i){let e="";for(let n=0;n<i.length;n++){const s=i[n];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=Ts.apply(null,s):typeof s=="object"?e+=je(s):e+=s,e+=" "}return e};let as=null,kp=!0;const kE=function(i,e){x(!0,"Can't turn on custom loggers persistently."),Yr.logLevel=ue.VERBOSE,as=Yr.log.bind(Yr)},Qe=function(...i){if(kp===!0&&(kp=!1,as===null&&IE.get("logging_enabled")===!0&&kE()),as){const e=Ts.apply(null,i);as(e)}},ks=function(i){return function(...e){Qe(i,...e)}},ec=function(...i){const e="FIREBASE INTERNAL ERROR: "+Ts(...i);Yr.error(e)},fn=function(...i){const e=`FIREBASE FATAL ERROR: ${Ts(...i)}`;throw Yr.error(e),new Error(e)},yt=function(...i){const e="FIREBASE WARNING: "+Ts(...i);Yr.warn(e)},RE=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&yt("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Vm=function(i){return typeof i=="number"&&(i!==i||i===Number.POSITIVE_INFINITY||i===Number.NEGATIVE_INFINITY)},NE=function(i){if(document.readyState==="complete")i();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,i())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},ii="[MIN_NAME]",hr="[MAX_NAME]",di=function(i,e){if(i===e)return 0;if(i===ii||e===hr)return-1;if(e===ii||i===hr)return 1;{const n=Rp(i),s=Rp(e);return n!==null?s!==null?n-s===0?i.length-e.length:n-s:-1:s!==null?1:i<e?-1:1}},PE=function(i,e){return i===e?0:i<e?-1:1},ts=function(i,e){if(e&&i in e)return e[i];throw new Error("Missing required key ("+i+") in object: "+je(e))},Tc=function(i){if(typeof i!="object"||i===null)return je(i);const e=[];for(const s in i)e.push(s);e.sort();let n="{";for(let s=0;s<e.length;s++)s!==0&&(n+=","),n+=je(e[s]),n+=":",n+=Tc(i[e[s]]);return n+="}",n},Bm=function(i,e){const n=i.length;if(n<=e)return[i];const s=[];for(let l=0;l<n;l+=e)l+e>n?s.push(i.substring(l,n)):s.push(i.substring(l,l+e));return s};function dt(i,e){for(const n in i)i.hasOwnProperty(n)&&e(n,i[n])}const Hm=function(i){x(!Vm(i),"Invalid JSON number");const e=11,n=52,s=(1<<e-1)-1;let l,u,d,h,m;i===0?(u=0,d=0,l=1/i===-1/0?1:0):(l=i<0,i=Math.abs(i),i>=Math.pow(2,1-s)?(h=Math.min(Math.floor(Math.log(i)/Math.LN2),s),u=h+s,d=Math.round(i*Math.pow(2,n-h)-Math.pow(2,n))):(u=0,d=Math.round(i/Math.pow(2,1-s-n))));const g=[];for(m=n;m;m-=1)g.push(d%2?1:0),d=Math.floor(d/2);for(m=e;m;m-=1)g.push(u%2?1:0),u=Math.floor(u/2);g.push(l?1:0),g.reverse();const E=g.join("");let w="";for(m=0;m<64;m+=8){let T=parseInt(E.substr(m,8),2).toString(16);T.length===1&&(T="0"+T),w=w+T}return w.toLowerCase()},AE=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},OE=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function xE(i,e){let n="Unknown Error";i==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":i==="permission_denied"?n="Client doesn't have permission to access the desired data.":i==="unavailable"&&(n="The service is unavailable");const s=new Error(i+" at "+e._path.toString()+": "+n);return s.code=i.toUpperCase(),s}const DE=new RegExp("^-?(0*)\\d{1,10}$"),LE=-2147483648,ME=2147483647,Rp=function(i){if(DE.test(i)){const e=Number(i);if(e>=LE&&e<=ME)return e}return null},Rs=function(i){try{i()}catch(e){setTimeout(()=>{const n=e.stack||"";throw yt("Exception was thrown by user callback.",n),e},Math.floor(0))}},FE=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},us=function(i,e){const n=setTimeout(i,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bE{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(s=>this.appCheck=s)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){yt(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UE{constructor(e,n,s){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(l=>this.auth_=l)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(Qe("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',yt(e)}}class Yo{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Yo.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kc="5",$m="v",Gm="s",Km="r",qm="f",Qm=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Ym="ls",Xm="p",tc="ac",Jm="websocket",Zm="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eg{constructor(e,n,s,l,u=!1,d="",h=!1,m=!1){this.secure=n,this.namespace=s,this.webSocketOnly=l,this.nodeAdmin=u,this.persistenceKey=d,this.includeNamespaceInQueryParams=h,this.isUsingEmulator=m,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=dr.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&dr.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function zE(i){return i.host!==i.internalHost||i.isCustomHost()||i.includeNamespaceInQueryParams}function tg(i,e,n){x(typeof e=="string","typeof type must == string"),x(typeof n=="object","typeof params must == object");let s;if(e===Jm)s=(i.secure?"wss://":"ws://")+i.internalHost+"/.ws?";else if(e===Zm)s=(i.secure?"https://":"http://")+i.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);zE(i)&&(n.ns=i.namespace);const l=[];return dt(n,(u,d)=>{l.push(u+"="+d)}),s+l.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WE{constructor(){this.counters_={}}incrementCounter(e,n=1){pn(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return Vv(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zu={},Wu={};function Rc(i){const e=i.toString();return zu[e]||(zu[e]=new WE),zu[e]}function jE(i,e){const n=i.toString();return Wu[n]||(Wu[n]=e()),Wu[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VE{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let l=0;l<s.length;++l)s[l]&&Rs(()=>{this.onMessage_(s[l])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Np="start",BE="close",HE="pLPCommand",$E="pRTLPCB",ng="id",rg="pw",ig="ser",GE="cb",KE="seg",qE="ts",QE="d",YE="dframe",sg=1870,og=30,XE=sg-og,JE=25e3,ZE=3e4;class Kr{constructor(e,n,s,l,u,d,h){this.connId=e,this.repoInfo=n,this.applicationId=s,this.appCheckToken=l,this.authToken=u,this.transportSessionId=d,this.lastSessionId=h,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=ks(e),this.stats_=Rc(n),this.urlFn=m=>(this.appCheckToken&&(m[tc]=this.appCheckToken),tg(n,Zm,m))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new VE(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(ZE)),NE(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Nc((...u)=>{const[d,h,m,g,E]=u;if(this.incrementIncomingBytes_(u),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,d===Np)this.id=h,this.password=m;else if(d===BE)h?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(h,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+d)},(...u)=>{const[d,h]=u;this.incrementIncomingBytes_(u),this.myPacketOrderer.handleResponse(d,h)},()=>{this.onClosed_()},this.urlFn);const s={};s[Np]="t",s[ig]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[GE]=this.scriptTagHolder.uniqueCallbackIdentifier),s[$m]=kc,this.transportSessionId&&(s[Gm]=this.transportSessionId),this.lastSessionId&&(s[Ym]=this.lastSessionId),this.applicationId&&(s[Xm]=this.applicationId),this.appCheckToken&&(s[tc]=this.appCheckToken),typeof location<"u"&&location.hostname&&Qm.test(location.hostname)&&(s[Km]=qm);const l=this.urlFn(s);this.log_("Connecting via long-poll to "+l),this.scriptTagHolder.addTag(l,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Kr.forceAllow_=!0}static forceDisallow(){Kr.forceDisallow_=!0}static isAvailable(){return Kr.forceAllow_?!0:!Kr.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!AE()&&!OE()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=je(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=km(n),l=Bm(s,XE);for(let u=0;u<l.length;u++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,l.length,l[u]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const s={};s[YE]="t",s[ng]=e,s[rg]=n,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=je(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class Nc{constructor(e,n,s,l){this.onDisconnect=s,this.urlFn=l,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=TE(),window[HE+this.uniqueCallbackIdentifier]=e,window[$E+this.uniqueCallbackIdentifier]=n,this.myIFrame=Nc.createIFrame_();let u="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(u='<script>document.domain="'+document.domain+'";<\/script>');const d="<html><body>"+u+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(d),this.myIFrame.doc.close()}catch(h){Qe("frame writing exception"),h.stack&&Qe(h.stack),Qe(h)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Qe("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[ng]=this.myID,e[rg]=this.myPW,e[ig]=this.currentSerial;let n=this.urlFn(e),s="",l=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+og+s.length<=sg;){const d=this.pendingSegs.shift();s=s+"&"+KE+l+"="+d.seg+"&"+qE+l+"="+d.ts+"&"+QE+l+"="+d.d,l++}return n=n+s,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,s){this.pendingSegs.push({seg:e,ts:n,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const s=()=>{this.outstandingRequests.delete(n),this.newRequest_()},l=setTimeout(s,Math.floor(JE)),u=()=>{clearTimeout(l),s()};this.addTag(e,u)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const l=s.readyState;(!l||l==="loaded"||l==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),n())},s.onerror=()=>{Qe("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eS=16384,tS=45e3;let ol=null;typeof MozWebSocket<"u"?ol=MozWebSocket:typeof WebSocket<"u"&&(ol=WebSocket);class Ft{constructor(e,n,s,l,u,d,h){this.connId=e,this.applicationId=s,this.appCheckToken=l,this.authToken=u,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=ks(this.connId),this.stats_=Rc(n),this.connURL=Ft.connectionURL_(n,d,h,l,s),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,s,l,u){const d={};return d[$m]=kc,typeof location<"u"&&location.hostname&&Qm.test(location.hostname)&&(d[Km]=qm),n&&(d[Gm]=n),s&&(d[Ym]=s),l&&(d[tc]=l),u&&(d[Xm]=u),tg(e,Jm,d)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,dr.set("previous_websocket_failure",!0);try{let s;Zv(),this.mySock=new ol(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const l=s.message||s.data;l&&this.log_(l),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const l=s.message||s.data;l&&this.log_(l),this.onClosed_()}}start(){}static forceDisallow(){Ft.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(n);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&ol!==null&&!Ft.forceDisallow_}static previouslyFailed(){return dr.isInMemoryStorage||dr.get("previous_websocket_failure")===!0}markConnectionHealthy(){dr.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const s=ps(n);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(x(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const s=this.extractFrameCount_(n);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const n=je(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=Bm(n,eS);s.length>1&&this.sendString_(String(s.length));for(let l=0;l<s.length;l++)this.sendString_(s[l])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(tS))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Ft.responsesRequiredToBeHealthy=2;Ft.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gs{static get ALL_TRANSPORTS(){return[Kr,Ft]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const n=Ft&&Ft.isAvailable();let s=n&&!Ft.previouslyFailed();if(e.webSocketOnly&&(n||yt("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[Ft];else{const l=this.transports_=[];for(const u of gs.ALL_TRANSPORTS)u&&u.isAvailable()&&l.push(u);gs.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}gs.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nS=6e4,rS=5e3,iS=10*1024,sS=100*1024,ju="t",Pp="d",oS="s",Ap="r",lS="e",Op="o",xp="a",Dp="n",Lp="p",aS="h";class uS{constructor(e,n,s,l,u,d,h,m,g,E){this.id=e,this.repoInfo_=n,this.applicationId_=s,this.appCheckToken_=l,this.authToken_=u,this.onMessage_=d,this.onReady_=h,this.onDisconnect_=m,this.onKill_=g,this.lastSessionId=E,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=ks("c:"+this.id+":"),this.transportManager_=new gs(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,s)},Math.floor(0));const l=e.healthyTimeout||0;l>0&&(this.healthyTimeout_=us(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>sS?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>iS?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(l)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(ju in e){const n=e[ju];n===xp?this.upgradeIfSecondaryHealthy_():n===Ap?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===Op&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=ts("t",e),s=ts("d",e);if(n==="c")this.onSecondaryControl_(s);else if(n==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Lp,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:xp,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Dp,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=ts("t",e),s=ts("d",e);n==="c"?this.onControl_(s):n==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=ts(ju,e);if(Pp in e){const s=e[Pp];if(n===aS){const l=Object.assign({},s);this.repoInfo_.isUsingEmulator&&(l.h=this.repoInfo_.host),this.onHandshake_(l)}else if(n===Dp){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let l=0;l<this.pendingDataMessages.length;++l)this.onDataMessage_(this.pendingDataMessages[l]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===oS?this.onConnectionShutdown_(s):n===Ap?this.onReset_(s):n===lS?ec("Server Error: "+s):n===Op?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):ec("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,s=e.v,l=e.h;this.sessionId=e.s,this.repoInfo_.host=l,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),kc!==s&&yt("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,s),us(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(nS))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):us(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(rS))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Lp,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(dr.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lg{put(e,n,s,l){}merge(e,n,s,l){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,s){}onDisconnectMerge(e,n,s){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ag{constructor(e){this.allowedEvents_=e,this.listeners_={},x(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let l=0;l<s.length;l++)s[l].callback.apply(s[l].context,n)}}on(e,n,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:s});const l=this.getInitialEvent(e);l&&n.apply(s,l)}off(e,n,s){this.validateEventType_(e);const l=this.listeners_[e]||[];for(let u=0;u<l.length;u++)if(l[u].callback===n&&(!s||s===l[u].context)){l.splice(u,1);return}}validateEventType_(e){x(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ll extends ag{static getInstance(){return new ll}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!wc()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return x(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mp=32,Fp=768;class ce{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let s=0;for(let l=0;l<this.pieces_.length;l++)this.pieces_[l].length>0&&(this.pieces_[s]=this.pieces_[l],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function oe(){return new ce("")}function ee(i){return i.pieceNum_>=i.pieces_.length?null:i.pieces_[i.pieceNum_]}function Hn(i){return i.pieces_.length-i.pieceNum_}function he(i){let e=i.pieceNum_;return e<i.pieces_.length&&e++,new ce(i.pieces_,e)}function ug(i){return i.pieceNum_<i.pieces_.length?i.pieces_[i.pieces_.length-1]:null}function cS(i){let e="";for(let n=i.pieceNum_;n<i.pieces_.length;n++)i.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(i.pieces_[n])));return e||"/"}function cg(i,e=0){return i.pieces_.slice(i.pieceNum_+e)}function dg(i){if(i.pieceNum_>=i.pieces_.length)return null;const e=[];for(let n=i.pieceNum_;n<i.pieces_.length-1;n++)e.push(i.pieces_[n]);return new ce(e,0)}function Le(i,e){const n=[];for(let s=i.pieceNum_;s<i.pieces_.length;s++)n.push(i.pieces_[s]);if(e instanceof ce)for(let s=e.pieceNum_;s<e.pieces_.length;s++)n.push(e.pieces_[s]);else{const s=e.split("/");for(let l=0;l<s.length;l++)s[l].length>0&&n.push(s[l])}return new ce(n,0)}function te(i){return i.pieceNum_>=i.pieces_.length}function ut(i,e){const n=ee(i),s=ee(e);if(n===null)return e;if(n===s)return ut(he(i),he(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+i+")")}function Pc(i,e){if(Hn(i)!==Hn(e))return!1;for(let n=i.pieceNum_,s=e.pieceNum_;n<=i.pieces_.length;n++,s++)if(i.pieces_[n]!==e.pieces_[s])return!1;return!0}function bt(i,e){let n=i.pieceNum_,s=e.pieceNum_;if(Hn(i)>Hn(e))return!1;for(;n<i.pieces_.length;){if(i.pieces_[n]!==e.pieces_[s])return!1;++n,++s}return!0}class dS{constructor(e,n){this.errorPrefix_=n,this.parts_=cg(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=Il(this.parts_[s]);fg(this)}}function fS(i,e){i.parts_.length>0&&(i.byteLength_+=1),i.parts_.push(e),i.byteLength_+=Il(e),fg(i)}function hS(i){const e=i.parts_.pop();i.byteLength_-=Il(e),i.parts_.length>0&&(i.byteLength_-=1)}function fg(i){if(i.byteLength_>Fp)throw new Error(i.errorPrefix_+"has a key path longer than "+Fp+" bytes ("+i.byteLength_+").");if(i.parts_.length>Mp)throw new Error(i.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Mp+") or object contains a cycle "+cr(i))}function cr(i){return i.parts_.length===0?"":"in property '"+i.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ac extends ag{static getInstance(){return new Ac}constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}getInitialEvent(e){return x(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ns=1e3,pS=60*5*1e3,bp=30*1e3,mS=1.3,gS=3e4,_S="server_kill",Up=3;class cn extends lg{constructor(e,n,s,l,u,d,h,m){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=s,this.onConnectStatus_=l,this.onServerInfoUpdate_=u,this.authTokenProvider_=d,this.appCheckTokenProvider_=h,this.authOverride_=m,this.id=cn.nextPersistentConnectionId_++,this.log_=ks("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=ns,this.maxReconnectDelay_=pS,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,m)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Ac.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&ll.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,s){const l=++this.requestNumber_,u={r:l,a:e,b:n};this.log_(je(u)),x(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(u),s&&(this.requestCBHash_[l]=s)}get(e){this.initConnection_();const n=new vc,l={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:d=>{const h=d.d;d.s==="ok"?n.resolve(h):n.reject(h)}};this.outstandingGets_.push(l),this.outstandingGetCount_++;const u=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(u),n.promise}listen(e,n,s,l){this.initConnection_();const u=e._queryIdentifier,d=e._path.toString();this.log_("Listen called for "+d+" "+u),this.listens.has(d)||this.listens.set(d,new Map),x(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),x(!this.listens.get(d).has(u),"listen() called twice for same path/queryId.");const h={onComplete:l,hashFn:n,query:e,tag:s};this.listens.get(d).set(u,h),this.connected_&&this.sendListen_(h)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(s)})}sendListen_(e){const n=e.query,s=n._path.toString(),l=n._queryIdentifier;this.log_("Listen on "+s+" for "+l);const u={p:s},d="q";e.tag&&(u.q=n._queryObject,u.t=e.tag),u.h=e.hashFn(),this.sendRequest(d,u,h=>{const m=h.d,g=h.s;cn.warnOnListenWarnings_(m,n),(this.listens.get(s)&&this.listens.get(s).get(l))===e&&(this.log_("listen response",h),g!=="ok"&&this.removeListen_(s,l),e.onComplete&&e.onComplete(g,m))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&pn(e,"w")){const s=ni(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const l='".indexOn": "'+n._queryParams.getIndex().toString()+'"',u=n._path.toString();yt(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${l} at ${u} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||ow(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=bp)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=sw(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(n,s,l=>{const u=l.s,d=l.d||"error";this.authToken_===e&&(u==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(u,d))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,s=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,s)})}unlisten(e,n){const s=e._path.toString(),l=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+l),x(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,l)&&this.connected_&&this.sendUnlisten_(s,l,e._queryObject,n)}sendUnlisten_(e,n,s,l){this.log_("Unlisten on "+e+" for "+n);const u={p:e},d="n";l&&(u.q=s,u.t=l),this.sendRequest(d,u)}onDisconnectPut(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:s})}onDisconnectMerge(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:s})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,s,l){const u={p:n,d:s};this.log_("onDisconnect "+e,u),this.sendRequest(e,u,d=>{l&&setTimeout(()=>{l(d.s,d.d)},Math.floor(0))})}put(e,n,s,l){this.putInternal("p",e,n,s,l)}merge(e,n,s,l){this.putInternal("m",e,n,s,l)}putInternal(e,n,s,l,u){this.initConnection_();const d={p:n,d:s};u!==void 0&&(d.h=u),this.outstandingPuts_.push({action:e,request:d,onComplete:l}),this.outstandingPutCount_++;const h=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(h):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,l=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,s,u=>{this.log_(n+" response",u),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),l&&l(u.s,u.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,s=>{if(s.s!=="ok"){const u=s.d;this.log_("reportStats","Error sending stats: "+u)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+je(e));const n=e.r,s=this.requestCBHash_[n];s&&(delete this.requestCBHash_[n],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):ec("Unrecognized action received from server: "+je(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){x(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=ns,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=ns,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>gS&&(this.reconnectDelay_=ns),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*mS)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),l=this.id+":"+cn.nextConnectionId_++,u=this.lastSessionId;let d=!1,h=null;const m=function(){h?h.close():(d=!0,s())},g=function(w){x(h,"sendRequest call when we're not connected not allowed."),h.sendRequest(w)};this.realtime_={close:m,sendRequest:g};const E=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[w,T]=await Promise.all([this.authTokenProvider_.getToken(E),this.appCheckTokenProvider_.getToken(E)]);d?Qe("getToken() completed but was canceled"):(Qe("getToken() completed. Creating connection."),this.authToken_=w&&w.accessToken,this.appCheckToken_=T&&T.token,h=new uS(l,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,s,D=>{yt(D+" ("+this.repoInfo_.toString()+")"),this.interrupt(_S)},u))}catch(w){this.log_("Failed to get token: "+w),d||(this.repoInfo_.nodeAdmin&&yt(w),m())}}}interrupt(e){Qe("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Qe("Resuming connection for reason: "+e),delete this.interruptReasons_[e],qu(this.interruptReasons_)&&(this.reconnectDelay_=ns,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let s;n?s=n.map(u=>Tc(u)).join("$"):s="default";const l=this.removeListen_(e,s);l&&l.onComplete&&l.onComplete("permission_denied")}removeListen_(e,n){const s=new ce(e).toString();let l;if(this.listens.has(s)){const u=this.listens.get(s);l=u.get(n),u.delete(n),u.size===0&&this.listens.delete(s)}else l=void 0;return l}onAuthRevoked_(e,n){Qe("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Up&&(this.reconnectDelay_=bp,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){Qe("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Up&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+zm.replace(/\./g,"-")]=1,wc()?e["framework.cordova"]=1:Om()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=ll.getInstance().currentlyOnline();return qu(this.interruptReasons_)&&e}}cn.nextPersistentConnectionId_=0;cn.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new J(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tl{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const s=new J(ii,e),l=new J(ii,n);return this.compare(s,l)!==0}minPost(){return J.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ko;class hg extends Tl{static get __EMPTY_NODE(){return Ko}static set __EMPTY_NODE(e){Ko=e}compare(e,n){return di(e.name,n.name)}isDefinedOn(e){throw ai("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return J.MIN}maxPost(){return new J(hr,Ko)}makePost(e,n){return x(typeof e=="string","KeyIndex indexValue must always be a string."),new J(e,Ko)}toString(){return".key"}}const Xr=new hg;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qo{constructor(e,n,s,l,u=null){this.isReverse_=l,this.resultGenerator_=u,this.nodeStack_=[];let d=1;for(;!e.isEmpty();)if(e=e,d=n?s(e.key,n):1,l&&(d*=-1),d<0)this.isReverse_?e=e.left:e=e.right;else if(d===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class We{constructor(e,n,s,l,u){this.key=e,this.value=n,this.color=s??We.RED,this.left=l??ct.EMPTY_NODE,this.right=u??ct.EMPTY_NODE}copy(e,n,s,l,u){return new We(e??this.key,n??this.value,s??this.color,l??this.left,u??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let l=this;const u=s(e,l.key);return u<0?l=l.copy(null,null,null,l.left.insert(e,n,s),null):u===0?l=l.copy(null,n,null,null,null):l=l.copy(null,null,null,null,l.right.insert(e,n,s)),l.fixUp_()}removeMin_(){if(this.left.isEmpty())return ct.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let s,l;if(s=this,n(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),n(e,s.key)===0){if(s.right.isEmpty())return ct.EMPTY_NODE;l=s.right.min_(),s=s.copy(l.key,l.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,We.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,We.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}We.RED=!0;We.BLACK=!1;class yS{copy(e,n,s,l,u){return this}insert(e,n,s){return new We(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class ct{constructor(e,n=ct.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new ct(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,We.BLACK,null,null))}remove(e){return new ct(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,We.BLACK,null,null))}get(e){let n,s=this.root_;for(;!s.isEmpty();){if(n=this.comparator_(e,s.key),n===0)return s.value;n<0?s=s.left:n>0&&(s=s.right)}return null}getPredecessorKey(e){let n,s=this.root_,l=null;for(;!s.isEmpty();)if(n=this.comparator_(e,s.key),n===0){if(s.left.isEmpty())return l?l.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else n<0?s=s.left:n>0&&(l=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new qo(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new qo(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new qo(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new qo(this.root_,null,this.comparator_,!0,e)}}ct.EMPTY_NODE=new yS;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vS(i,e){return di(i.name,e.name)}function Oc(i,e){return di(i,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let nc;function wS(i){nc=i}const pg=function(i){return typeof i=="number"?"number:"+Hm(i):"string:"+i},mg=function(i){if(i.isLeafNode()){const e=i.val();x(typeof e=="string"||typeof e=="number"||typeof e=="object"&&pn(e,".sv"),"Priority must be a string or number.")}else x(i===nc||i.isEmpty(),"priority of unexpected type.");x(i===nc||i.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let zp;class ze{static set __childrenNodeConstructor(e){zp=e}static get __childrenNodeConstructor(){return zp}constructor(e,n=ze.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,x(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),mg(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new ze(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:ze.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return te(e)?this:ee(e)===".priority"?this.priorityNode_:ze.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:ze.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const s=ee(e);return s===null?n:n.isEmpty()&&s!==".priority"?this:(x(s!==".priority"||Hn(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,ze.__childrenNodeConstructor.EMPTY_NODE.updateChild(he(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+pg(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=Hm(this.value_):e+=this.value_,this.lazyHash_=jm(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===ze.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof ze.__childrenNodeConstructor?-1:(x(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,s=typeof this.value_,l=ze.VALUE_TYPE_ORDER.indexOf(n),u=ze.VALUE_TYPE_ORDER.indexOf(s);return x(l>=0,"Unknown leaf type: "+n),x(u>=0,"Unknown leaf type: "+s),l===u?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:u-l}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}ze.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let gg,_g;function ES(i){gg=i}function SS(i){_g=i}class CS extends Tl{compare(e,n){const s=e.node.getPriority(),l=n.node.getPriority(),u=s.compareTo(l);return u===0?di(e.name,n.name):u}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return J.MIN}maxPost(){return new J(hr,new ze("[PRIORITY-POST]",_g))}makePost(e,n){const s=gg(e);return new J(n,new ze("[PRIORITY-POST]",s))}toString(){return".priority"}}const Ie=new CS;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IS=Math.log(2);class TS{constructor(e){const n=u=>parseInt(Math.log(u)/IS,10),s=u=>parseInt(Array(u+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const l=s(this.count);this.bits_=e+1&l}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const al=function(i,e,n,s){i.sort(e);const l=function(m,g){const E=g-m;let w,T;if(E===0)return null;if(E===1)return w=i[m],T=n?n(w):w,new We(T,w.node,We.BLACK,null,null);{const D=parseInt(E/2,10)+m,F=l(m,D),V=l(D+1,g);return w=i[D],T=n?n(w):w,new We(T,w.node,We.BLACK,F,V)}},u=function(m){let g=null,E=null,w=i.length;const T=function(F,V){const G=w-F,Pe=w;w-=F;const Me=l(G+1,Pe),Ae=i[G],Te=n?n(Ae):Ae;D(new We(Te,Ae.node,V,null,Me))},D=function(F){g?(g.left=F,g=F):(E=F,g=F)};for(let F=0;F<m.count;++F){const V=m.nextBitIsOne(),G=Math.pow(2,m.count-(F+1));V?T(G,We.BLACK):(T(G,We.BLACK),T(G,We.RED))}return E},d=new TS(i.length),h=u(d);return new ct(s||e,h)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Vu;const Gr={};class on{static get Default(){return x(Gr&&Ie,"ChildrenNode.ts has not been loaded"),Vu=Vu||new on({".priority":Gr},{".priority":Ie}),Vu}constructor(e,n){this.indexes_=e,this.indexSet_=n}get(e){const n=ni(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof ct?n:null}hasIndex(e){return pn(this.indexSet_,e.toString())}addIndex(e,n){x(e!==Xr,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let l=!1;const u=n.getIterator(J.Wrap);let d=u.getNext();for(;d;)l=l||e.isDefinedOn(d.node),s.push(d),d=u.getNext();let h;l?h=al(s,e.getCompare()):h=Gr;const m=e.toString(),g=Object.assign({},this.indexSet_);g[m]=e;const E=Object.assign({},this.indexes_);return E[m]=h,new on(E,g)}addToIndexes(e,n){const s=rl(this.indexes_,(l,u)=>{const d=ni(this.indexSet_,u);if(x(d,"Missing index implementation for "+u),l===Gr)if(d.isDefinedOn(e.node)){const h=[],m=n.getIterator(J.Wrap);let g=m.getNext();for(;g;)g.name!==e.name&&h.push(g),g=m.getNext();return h.push(e),al(h,d.getCompare())}else return Gr;else{const h=n.get(e.name);let m=l;return h&&(m=m.remove(new J(e.name,h))),m.insert(e,e.node)}});return new on(s,this.indexSet_)}removeFromIndexes(e,n){const s=rl(this.indexes_,l=>{if(l===Gr)return l;{const u=n.get(e.name);return u?l.remove(new J(e.name,u)):l}});return new on(s,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let rs;class q{static get EMPTY_NODE(){return rs||(rs=new q(new ct(Oc),null,on.Default))}constructor(e,n,s){this.children_=e,this.priorityNode_=n,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&mg(this.priorityNode_),this.children_.isEmpty()&&x(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||rs}updatePriority(e){return this.children_.isEmpty()?this:new q(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?rs:n}}getChild(e){const n=ee(e);return n===null?this:this.getImmediateChild(n).getChild(he(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(x(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const s=new J(e,n);let l,u;n.isEmpty()?(l=this.children_.remove(e),u=this.indexMap_.removeFromIndexes(s,this.children_)):(l=this.children_.insert(e,n),u=this.indexMap_.addToIndexes(s,this.children_));const d=l.isEmpty()?rs:this.priorityNode_;return new q(l,d,u)}}updateChild(e,n){const s=ee(e);if(s===null)return n;{x(ee(e)!==".priority"||Hn(e)===1,".priority must be the last token in a path");const l=this.getImmediateChild(s).updateChild(he(e),n);return this.updateImmediateChild(s,l)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let s=0,l=0,u=!0;if(this.forEachChild(Ie,(d,h)=>{n[d]=h.val(e),s++,u&&q.INTEGER_REGEXP_.test(d)?l=Math.max(l,Number(d)):u=!1}),!e&&u&&l<2*s){const d=[];for(const h in n)d[h]=n[h];return d}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+pg(this.getPriority().val())+":"),this.forEachChild(Ie,(n,s)=>{const l=s.hash();l!==""&&(e+=":"+n+":"+l)}),this.lazyHash_=e===""?"":jm(e)}return this.lazyHash_}getPredecessorChildName(e,n,s){const l=this.resolveIndex_(s);if(l){const u=l.getPredecessorKey(new J(e,n));return u?u.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new J(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new J(n,this.children_.get(n)):null}forEachChild(e,n){const s=this.resolveIndex_(e);return s?s.inorderTraversal(l=>n(l.name,l.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getIteratorFrom(e,l=>l);{const l=this.children_.getIteratorFrom(e.name,J.Wrap);let u=l.peek();for(;u!=null&&n.compare(u,e)<0;)l.getNext(),u=l.peek();return l}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getReverseIteratorFrom(e,l=>l);{const l=this.children_.getReverseIteratorFrom(e.name,J.Wrap);let u=l.peek();for(;u!=null&&n.compare(u,e)>0;)l.getNext(),u=l.peek();return l}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Ns?-1:0}withIndex(e){if(e===Xr||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new q(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===Xr||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const s=this.getIterator(Ie),l=n.getIterator(Ie);let u=s.getNext(),d=l.getNext();for(;u&&d;){if(u.name!==d.name||!u.node.equals(d.node))return!1;u=s.getNext(),d=l.getNext()}return u===null&&d===null}else return!1;else return!1}}resolveIndex_(e){return e===Xr?null:this.indexMap_.get(e.toString())}}q.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class kS extends q{constructor(){super(new ct(Oc),q.EMPTY_NODE,on.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return q.EMPTY_NODE}isEmpty(){return!1}}const Ns=new kS;Object.defineProperties(J,{MIN:{value:new J(ii,q.EMPTY_NODE)},MAX:{value:new J(hr,Ns)}});hg.__EMPTY_NODE=q.EMPTY_NODE;ze.__childrenNodeConstructor=q;wS(Ns);SS(Ns);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RS=!0;function Ye(i,e=null){if(i===null)return q.EMPTY_NODE;if(typeof i=="object"&&".priority"in i&&(e=i[".priority"]),x(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof i=="object"&&".value"in i&&i[".value"]!==null&&(i=i[".value"]),typeof i!="object"||".sv"in i){const n=i;return new ze(n,Ye(e))}if(!(i instanceof Array)&&RS){const n=[];let s=!1;if(dt(i,(d,h)=>{if(d.substring(0,1)!=="."){const m=Ye(h);m.isEmpty()||(s=s||!m.getPriority().isEmpty(),n.push(new J(d,m)))}}),n.length===0)return q.EMPTY_NODE;const u=al(n,vS,d=>d.name,Oc);if(s){const d=al(n,Ie.getCompare());return new q(u,Ye(e),new on({".priority":d},{".priority":Ie}))}else return new q(u,Ye(e),on.Default)}else{let n=q.EMPTY_NODE;return dt(i,(s,l)=>{if(pn(i,s)&&s.substring(0,1)!=="."){const u=Ye(l);(u.isLeafNode()||!u.isEmpty())&&(n=n.updateImmediateChild(s,u))}}),n.updatePriority(Ye(e))}}ES(Ye);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NS extends Tl{constructor(e){super(),this.indexPath_=e,x(!te(e)&&ee(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const s=this.extractChild(e.node),l=this.extractChild(n.node),u=s.compareTo(l);return u===0?di(e.name,n.name):u}makePost(e,n){const s=Ye(e),l=q.EMPTY_NODE.updateChild(this.indexPath_,s);return new J(n,l)}maxPost(){const e=q.EMPTY_NODE.updateChild(this.indexPath_,Ns);return new J(hr,e)}toString(){return cg(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PS extends Tl{compare(e,n){const s=e.node.compareTo(n.node);return s===0?di(e.name,n.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return J.MIN}maxPost(){return J.MAX}makePost(e,n){const s=Ye(e);return new J(n,s)}toString(){return".value"}}const AS=new PS;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yg(i){return{type:"value",snapshotNode:i}}function si(i,e){return{type:"child_added",snapshotNode:e,childName:i}}function _s(i,e){return{type:"child_removed",snapshotNode:e,childName:i}}function ys(i,e,n){return{type:"child_changed",snapshotNode:e,childName:i,oldSnap:n}}function OS(i,e){return{type:"child_moved",snapshotNode:e,childName:i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xc{constructor(e){this.index_=e}updateChild(e,n,s,l,u,d){x(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const h=e.getImmediateChild(n);return h.getChild(l).equals(s.getChild(l))&&h.isEmpty()===s.isEmpty()||(d!=null&&(s.isEmpty()?e.hasChild(n)?d.trackChildChange(_s(n,h)):x(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):h.isEmpty()?d.trackChildChange(si(n,s)):d.trackChildChange(ys(n,s,h))),e.isLeafNode()&&s.isEmpty())?e:e.updateImmediateChild(n,s).withIndex(this.index_)}updateFullNode(e,n,s){return s!=null&&(e.isLeafNode()||e.forEachChild(Ie,(l,u)=>{n.hasChild(l)||s.trackChildChange(_s(l,u))}),n.isLeafNode()||n.forEachChild(Ie,(l,u)=>{if(e.hasChild(l)){const d=e.getImmediateChild(l);d.equals(u)||s.trackChildChange(ys(l,u,d))}else s.trackChildChange(si(l,u))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?q.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vs{constructor(e){this.indexedFilter_=new xc(e.getIndex()),this.index_=e.getIndex(),this.startPost_=vs.getStartPost_(e),this.endPost_=vs.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,s=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&s}updateChild(e,n,s,l,u,d){return this.matches(new J(n,s))||(s=q.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,s,l,u,d)}updateFullNode(e,n,s){n.isLeafNode()&&(n=q.EMPTY_NODE);let l=n.withIndex(this.index_);l=l.updatePriority(q.EMPTY_NODE);const u=this;return n.forEachChild(Ie,(d,h)=>{u.matches(new J(d,h))||(l=l.updateImmediateChild(d,q.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,l,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xS{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const s=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?s<=0:s<0},this.withinEndPost=n=>{const s=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?s<=0:s<0},this.rangedFilter_=new vs(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,s,l,u,d){return this.rangedFilter_.matches(new J(n,s))||(s=q.EMPTY_NODE),e.getImmediateChild(n).equals(s)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,s,l,u,d):this.fullLimitUpdateChild_(e,n,s,u,d)}updateFullNode(e,n,s){let l;if(n.isLeafNode()||n.isEmpty())l=q.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){l=q.EMPTY_NODE.withIndex(this.index_);let u;this.reverse_?u=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):u=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let d=0;for(;u.hasNext()&&d<this.limit_;){const h=u.getNext();if(this.withinDirectionalStart(h))if(this.withinDirectionalEnd(h))l=l.updateImmediateChild(h.name,h.node),d++;else break;else continue}}else{l=n.withIndex(this.index_),l=l.updatePriority(q.EMPTY_NODE);let u;this.reverse_?u=l.getReverseIterator(this.index_):u=l.getIterator(this.index_);let d=0;for(;u.hasNext();){const h=u.getNext();d<this.limit_&&this.withinDirectionalStart(h)&&this.withinDirectionalEnd(h)?d++:l=l.updateImmediateChild(h.name,q.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,l,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,s,l,u){let d;if(this.reverse_){const w=this.index_.getCompare();d=(T,D)=>w(D,T)}else d=this.index_.getCompare();const h=e;x(h.numChildren()===this.limit_,"");const m=new J(n,s),g=this.reverse_?h.getFirstChild(this.index_):h.getLastChild(this.index_),E=this.rangedFilter_.matches(m);if(h.hasChild(n)){const w=h.getImmediateChild(n);let T=l.getChildAfterChild(this.index_,g,this.reverse_);for(;T!=null&&(T.name===n||h.hasChild(T.name));)T=l.getChildAfterChild(this.index_,T,this.reverse_);const D=T==null?1:d(T,m);if(E&&!s.isEmpty()&&D>=0)return u!=null&&u.trackChildChange(ys(n,s,w)),h.updateImmediateChild(n,s);{u!=null&&u.trackChildChange(_s(n,w));const V=h.updateImmediateChild(n,q.EMPTY_NODE);return T!=null&&this.rangedFilter_.matches(T)?(u!=null&&u.trackChildChange(si(T.name,T.node)),V.updateImmediateChild(T.name,T.node)):V}}else return s.isEmpty()?e:E&&d(g,m)>=0?(u!=null&&(u.trackChildChange(_s(g.name,g.node)),u.trackChildChange(si(n,s))),h.updateImmediateChild(n,s).updateImmediateChild(g.name,q.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dc{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Ie}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return x(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return x(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:ii}hasEnd(){return this.endSet_}getIndexEndValue(){return x(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return x(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:hr}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return x(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Ie}copy(){const e=new Dc;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function DS(i){return i.loadsAllData()?new xc(i.getIndex()):i.hasLimit()?new xS(i):new vs(i)}function Wp(i){const e={};if(i.isDefault())return e;let n;if(i.index_===Ie?n="$priority":i.index_===AS?n="$value":i.index_===Xr?n="$key":(x(i.index_ instanceof NS,"Unrecognized index type!"),n=i.index_.toString()),e.orderBy=je(n),i.startSet_){const s=i.startAfterSet_?"startAfter":"startAt";e[s]=je(i.indexStartValue_),i.startNameSet_&&(e[s]+=","+je(i.indexStartName_))}if(i.endSet_){const s=i.endBeforeSet_?"endBefore":"endAt";e[s]=je(i.indexEndValue_),i.endNameSet_&&(e[s]+=","+je(i.indexEndName_))}return i.limitSet_&&(i.isViewFromLeft()?e.limitToFirst=i.limit_:e.limitToLast=i.limit_),e}function jp(i){const e={};if(i.startSet_&&(e.sp=i.indexStartValue_,i.startNameSet_&&(e.sn=i.indexStartName_),e.sin=!i.startAfterSet_),i.endSet_&&(e.ep=i.indexEndValue_,i.endNameSet_&&(e.en=i.indexEndName_),e.ein=!i.endBeforeSet_),i.limitSet_){e.l=i.limit_;let n=i.viewFrom_;n===""&&(i.isViewFromLeft()?n="l":n="r"),e.vf=n}return i.index_!==Ie&&(e.i=i.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ul extends lg{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(x(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,n,s,l){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=s,this.appCheckTokenProvider_=l,this.log_=ks("p:rest:"),this.listens_={}}listen(e,n,s,l){const u=e._path.toString();this.log_("Listen called for "+u+" "+e._queryIdentifier);const d=ul.getListenId_(e,s),h={};this.listens_[d]=h;const m=Wp(e._queryParams);this.restRequest_(u+".json",m,(g,E)=>{let w=E;if(g===404&&(w=null,g=null),g===null&&this.onDataUpdate_(u,w,!1,s),ni(this.listens_,d)===h){let T;g?g===401?T="permission_denied":T="rest_error:"+g:T="ok",l(T,null)}})}unlisten(e,n){const s=ul.getListenId_(e,n);delete this.listens_[s]}get(e){const n=Wp(e._queryParams),s=e._path.toString(),l=new vc;return this.restRequest_(s+".json",n,(u,d)=>{let h=d;u===404&&(h=null,u=null),u===null?(this.onDataUpdate_(s,h,!1,null),l.resolve(h)):l.reject(new Error(h))}),l.promise}refreshAuthToken(e){}restRequest_(e,n={},s){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([l,u])=>{l&&l.accessToken&&(n.auth=l.accessToken),u&&u.token&&(n.ac=u.token);const d=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+ui(n);this.log_("Sending REST request for "+d);const h=new XMLHttpRequest;h.onreadystatechange=()=>{if(s&&h.readyState===4){this.log_("REST Response for "+d+" received. status:",h.status,"response:",h.responseText);let m=null;if(h.status>=200&&h.status<300){try{m=ps(h.responseText)}catch{yt("Failed to parse JSON response for "+d+": "+h.responseText)}s(null,m)}else h.status!==401&&h.status!==404&&yt("Got unsuccessful REST response for "+d+" Status: "+h.status),s(h.status);s=null}},h.open("GET",d,!0),h.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LS{constructor(){this.rootNode_=q.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cl(){return{value:null,children:new Map}}function vg(i,e,n){if(te(e))i.value=n,i.children.clear();else if(i.value!==null)i.value=i.value.updateChild(e,n);else{const s=ee(e);i.children.has(s)||i.children.set(s,cl());const l=i.children.get(s);e=he(e),vg(l,e,n)}}function rc(i,e,n){i.value!==null?n(e,i.value):MS(i,(s,l)=>{const u=new ce(e.toString()+"/"+s);rc(l,u,n)})}function MS(i,e){i.children.forEach((n,s)=>{e(s,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FS{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&dt(this.last_,(s,l)=>{n[s]=n[s]-l}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vp=10*1e3,bS=30*1e3,US=5*60*1e3;class zS{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new FS(e);const s=Vp+(bS-Vp)*Math.random();us(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),n={};let s=!1;dt(e,(l,u)=>{u>0&&pn(this.statsToReport_,l)&&(n[l]=u,s=!0)}),s&&this.server_.reportStats(n),us(this.reportStats_.bind(this),Math.floor(Math.random()*2*US))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ut;(function(i){i[i.OVERWRITE=0]="OVERWRITE",i[i.MERGE=1]="MERGE",i[i.ACK_USER_WRITE=2]="ACK_USER_WRITE",i[i.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Ut||(Ut={}));function wg(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Lc(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Mc(i){return{fromUser:!1,fromServer:!0,queryId:i,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dl{constructor(e,n,s){this.path=e,this.affectedTree=n,this.revert=s,this.type=Ut.ACK_USER_WRITE,this.source=wg()}operationForChild(e){if(te(this.path)){if(this.affectedTree.value!=null)return x(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new ce(e));return new dl(oe(),n,this.revert)}}else return x(ee(this.path)===e,"operationForChild called for unrelated child."),new dl(he(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ws{constructor(e,n){this.source=e,this.path=n,this.type=Ut.LISTEN_COMPLETE}operationForChild(e){return te(this.path)?new ws(this.source,oe()):new ws(this.source,he(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pr{constructor(e,n,s){this.source=e,this.path=n,this.snap=s,this.type=Ut.OVERWRITE}operationForChild(e){return te(this.path)?new pr(this.source,oe(),this.snap.getImmediateChild(e)):new pr(this.source,he(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Es{constructor(e,n,s){this.source=e,this.path=n,this.children=s,this.type=Ut.MERGE}operationForChild(e){if(te(this.path)){const n=this.children.subtree(new ce(e));return n.isEmpty()?null:n.value?new pr(this.source,oe(),n.value):new Es(this.source,oe(),n)}else return x(ee(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Es(this.source,he(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mr{constructor(e,n,s){this.node_=e,this.fullyInitialized_=n,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(te(e))return this.isFullyInitialized()&&!this.filtered_;const n=ee(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WS{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function jS(i,e,n,s){const l=[],u=[];return e.forEach(d=>{d.type==="child_changed"&&i.index_.indexedValueChanged(d.oldSnap,d.snapshotNode)&&u.push(OS(d.childName,d.snapshotNode))}),is(i,l,"child_removed",e,s,n),is(i,l,"child_added",e,s,n),is(i,l,"child_moved",u,s,n),is(i,l,"child_changed",e,s,n),is(i,l,"value",e,s,n),l}function is(i,e,n,s,l,u){const d=s.filter(h=>h.type===n);d.sort((h,m)=>BS(i,h,m)),d.forEach(h=>{const m=VS(i,h,u);l.forEach(g=>{g.respondsTo(h.type)&&e.push(g.createEvent(m,i.query_))})})}function VS(i,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,i.index_)),e}function BS(i,e,n){if(e.childName==null||n.childName==null)throw ai("Should only compare child_ events.");const s=new J(e.childName,e.snapshotNode),l=new J(n.childName,n.snapshotNode);return i.index_.compare(s,l)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kl(i,e){return{eventCache:i,serverCache:e}}function cs(i,e,n,s){return kl(new mr(e,n,s),i.serverCache)}function Eg(i,e,n,s){return kl(i.eventCache,new mr(e,n,s))}function ic(i){return i.eventCache.isFullyInitialized()?i.eventCache.getNode():null}function gr(i){return i.serverCache.isFullyInitialized()?i.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Bu;const HS=()=>(Bu||(Bu=new ct(PE)),Bu);class ge{static fromObject(e){let n=new ge(null);return dt(e,(s,l)=>{n=n.set(new ce(s),l)}),n}constructor(e,n=HS()){this.value=e,this.children=n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:oe(),value:this.value};if(te(e))return null;{const s=ee(e),l=this.children.get(s);if(l!==null){const u=l.findRootMostMatchingPathAndValue(he(e),n);return u!=null?{path:Le(new ce(s),u.path),value:u.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(te(e))return this;{const n=ee(e),s=this.children.get(n);return s!==null?s.subtree(he(e)):new ge(null)}}set(e,n){if(te(e))return new ge(n,this.children);{const s=ee(e),u=(this.children.get(s)||new ge(null)).set(he(e),n),d=this.children.insert(s,u);return new ge(this.value,d)}}remove(e){if(te(e))return this.children.isEmpty()?new ge(null):new ge(null,this.children);{const n=ee(e),s=this.children.get(n);if(s){const l=s.remove(he(e));let u;return l.isEmpty()?u=this.children.remove(n):u=this.children.insert(n,l),this.value===null&&u.isEmpty()?new ge(null):new ge(this.value,u)}else return this}}get(e){if(te(e))return this.value;{const n=ee(e),s=this.children.get(n);return s?s.get(he(e)):null}}setTree(e,n){if(te(e))return n;{const s=ee(e),u=(this.children.get(s)||new ge(null)).setTree(he(e),n);let d;return u.isEmpty()?d=this.children.remove(s):d=this.children.insert(s,u),new ge(this.value,d)}}fold(e){return this.fold_(oe(),e)}fold_(e,n){const s={};return this.children.inorderTraversal((l,u)=>{s[l]=u.fold_(Le(e,l),n)}),n(e,this.value,s)}findOnPath(e,n){return this.findOnPath_(e,oe(),n)}findOnPath_(e,n,s){const l=this.value?s(n,this.value):!1;if(l)return l;if(te(e))return null;{const u=ee(e),d=this.children.get(u);return d?d.findOnPath_(he(e),Le(n,u),s):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,oe(),n)}foreachOnPath_(e,n,s){if(te(e))return this;{this.value&&s(n,this.value);const l=ee(e),u=this.children.get(l);return u?u.foreachOnPath_(he(e),Le(n,l),s):new ge(null)}}foreach(e){this.foreach_(oe(),e)}foreach_(e,n){this.children.inorderTraversal((s,l)=>{l.foreach_(Le(e,s),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,s)=>{s.value&&e(n,s.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zt{constructor(e){this.writeTree_=e}static empty(){return new zt(new ge(null))}}function ds(i,e,n){if(te(e))return new zt(new ge(n));{const s=i.writeTree_.findRootMostValueAndPath(e);if(s!=null){const l=s.path;let u=s.value;const d=ut(l,e);return u=u.updateChild(d,n),new zt(i.writeTree_.set(l,u))}else{const l=new ge(n),u=i.writeTree_.setTree(e,l);return new zt(u)}}}function Bp(i,e,n){let s=i;return dt(n,(l,u)=>{s=ds(s,Le(e,l),u)}),s}function Hp(i,e){if(te(e))return zt.empty();{const n=i.writeTree_.setTree(e,new ge(null));return new zt(n)}}function sc(i,e){return yr(i,e)!=null}function yr(i,e){const n=i.writeTree_.findRootMostValueAndPath(e);return n!=null?i.writeTree_.get(n.path).getChild(ut(n.path,e)):null}function $p(i){const e=[],n=i.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(Ie,(s,l)=>{e.push(new J(s,l))}):i.writeTree_.children.inorderTraversal((s,l)=>{l.value!=null&&e.push(new J(s,l.value))}),e}function Vn(i,e){if(te(e))return i;{const n=yr(i,e);return n!=null?new zt(new ge(n)):new zt(i.writeTree_.subtree(e))}}function oc(i){return i.writeTree_.isEmpty()}function oi(i,e){return Sg(oe(),i.writeTree_,e)}function Sg(i,e,n){if(e.value!=null)return n.updateChild(i,e.value);{let s=null;return e.children.inorderTraversal((l,u)=>{l===".priority"?(x(u.value!==null,"Priority writes must always be leaf nodes"),s=u.value):n=Sg(Le(i,l),u,n)}),!n.getChild(i).isEmpty()&&s!==null&&(n=n.updateChild(Le(i,".priority"),s)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fc(i,e){return kg(e,i)}function $S(i,e,n,s,l){x(s>i.lastWriteId,"Stacking an older write on top of newer ones"),l===void 0&&(l=!0),i.allWrites.push({path:e,snap:n,writeId:s,visible:l}),l&&(i.visibleWrites=ds(i.visibleWrites,e,n)),i.lastWriteId=s}function GS(i,e){for(let n=0;n<i.allWrites.length;n++){const s=i.allWrites[n];if(s.writeId===e)return s}return null}function KS(i,e){const n=i.allWrites.findIndex(h=>h.writeId===e);x(n>=0,"removeWrite called with nonexistent writeId.");const s=i.allWrites[n];i.allWrites.splice(n,1);let l=s.visible,u=!1,d=i.allWrites.length-1;for(;l&&d>=0;){const h=i.allWrites[d];h.visible&&(d>=n&&qS(h,s.path)?l=!1:bt(s.path,h.path)&&(u=!0)),d--}if(l){if(u)return QS(i),!0;if(s.snap)i.visibleWrites=Hp(i.visibleWrites,s.path);else{const h=s.children;dt(h,m=>{i.visibleWrites=Hp(i.visibleWrites,Le(s.path,m))})}return!0}else return!1}function qS(i,e){if(i.snap)return bt(i.path,e);for(const n in i.children)if(i.children.hasOwnProperty(n)&&bt(Le(i.path,n),e))return!0;return!1}function QS(i){i.visibleWrites=Cg(i.allWrites,YS,oe()),i.allWrites.length>0?i.lastWriteId=i.allWrites[i.allWrites.length-1].writeId:i.lastWriteId=-1}function YS(i){return i.visible}function Cg(i,e,n){let s=zt.empty();for(let l=0;l<i.length;++l){const u=i[l];if(e(u)){const d=u.path;let h;if(u.snap)bt(n,d)?(h=ut(n,d),s=ds(s,h,u.snap)):bt(d,n)&&(h=ut(d,n),s=ds(s,oe(),u.snap.getChild(h)));else if(u.children){if(bt(n,d))h=ut(n,d),s=Bp(s,h,u.children);else if(bt(d,n))if(h=ut(d,n),te(h))s=Bp(s,oe(),u.children);else{const m=ni(u.children,ee(h));if(m){const g=m.getChild(he(h));s=ds(s,oe(),g)}}}else throw ai("WriteRecord should have .snap or .children")}}return s}function Ig(i,e,n,s,l){if(!s&&!l){const u=yr(i.visibleWrites,e);if(u!=null)return u;{const d=Vn(i.visibleWrites,e);if(oc(d))return n;if(n==null&&!sc(d,oe()))return null;{const h=n||q.EMPTY_NODE;return oi(d,h)}}}else{const u=Vn(i.visibleWrites,e);if(!l&&oc(u))return n;if(!l&&n==null&&!sc(u,oe()))return null;{const d=function(g){return(g.visible||l)&&(!s||!~s.indexOf(g.writeId))&&(bt(g.path,e)||bt(e,g.path))},h=Cg(i.allWrites,d,e),m=n||q.EMPTY_NODE;return oi(h,m)}}}function XS(i,e,n){let s=q.EMPTY_NODE;const l=yr(i.visibleWrites,e);if(l)return l.isLeafNode()||l.forEachChild(Ie,(u,d)=>{s=s.updateImmediateChild(u,d)}),s;if(n){const u=Vn(i.visibleWrites,e);return n.forEachChild(Ie,(d,h)=>{const m=oi(Vn(u,new ce(d)),h);s=s.updateImmediateChild(d,m)}),$p(u).forEach(d=>{s=s.updateImmediateChild(d.name,d.node)}),s}else{const u=Vn(i.visibleWrites,e);return $p(u).forEach(d=>{s=s.updateImmediateChild(d.name,d.node)}),s}}function JS(i,e,n,s,l){x(s||l,"Either existingEventSnap or existingServerSnap must exist");const u=Le(e,n);if(sc(i.visibleWrites,u))return null;{const d=Vn(i.visibleWrites,u);return oc(d)?l.getChild(n):oi(d,l.getChild(n))}}function ZS(i,e,n,s){const l=Le(e,n),u=yr(i.visibleWrites,l);if(u!=null)return u;if(s.isCompleteForChild(n)){const d=Vn(i.visibleWrites,l);return oi(d,s.getNode().getImmediateChild(n))}else return null}function eC(i,e){return yr(i.visibleWrites,e)}function tC(i,e,n,s,l,u,d){let h;const m=Vn(i.visibleWrites,e),g=yr(m,oe());if(g!=null)h=g;else if(n!=null)h=oi(m,n);else return[];if(h=h.withIndex(d),!h.isEmpty()&&!h.isLeafNode()){const E=[],w=d.getCompare(),T=u?h.getReverseIteratorFrom(s,d):h.getIteratorFrom(s,d);let D=T.getNext();for(;D&&E.length<l;)w(D,s)!==0&&E.push(D),D=T.getNext();return E}else return[]}function nC(){return{visibleWrites:zt.empty(),allWrites:[],lastWriteId:-1}}function fl(i,e,n,s){return Ig(i.writeTree,i.treePath,e,n,s)}function bc(i,e){return XS(i.writeTree,i.treePath,e)}function Gp(i,e,n,s){return JS(i.writeTree,i.treePath,e,n,s)}function hl(i,e){return eC(i.writeTree,Le(i.treePath,e))}function rC(i,e,n,s,l,u){return tC(i.writeTree,i.treePath,e,n,s,l,u)}function Uc(i,e,n){return ZS(i.writeTree,i.treePath,e,n)}function Tg(i,e){return kg(Le(i.treePath,e),i.writeTree)}function kg(i,e){return{treePath:i,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iC{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,s=e.childName;x(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),x(s!==".priority","Only non-priority child changes can be tracked.");const l=this.changeMap.get(s);if(l){const u=l.type;if(n==="child_added"&&u==="child_removed")this.changeMap.set(s,ys(s,e.snapshotNode,l.snapshotNode));else if(n==="child_removed"&&u==="child_added")this.changeMap.delete(s);else if(n==="child_removed"&&u==="child_changed")this.changeMap.set(s,_s(s,l.oldSnap));else if(n==="child_changed"&&u==="child_added")this.changeMap.set(s,si(s,e.snapshotNode));else if(n==="child_changed"&&u==="child_changed")this.changeMap.set(s,ys(s,e.snapshotNode,l.oldSnap));else throw ai("Illegal combination of changes: "+e+" occurred after "+l)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sC{getCompleteChild(e){return null}getChildAfterChild(e,n,s){return null}}const Rg=new sC;class zc{constructor(e,n,s=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=s}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new mr(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Uc(this.writes_,e,s)}}getChildAfterChild(e,n,s){const l=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:gr(this.viewCache_),u=rC(this.writes_,l,n,1,s,e);return u.length===0?null:u[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oC(i){return{filter:i}}function lC(i,e){x(e.eventCache.getNode().isIndexed(i.filter.getIndex()),"Event snap not indexed"),x(e.serverCache.getNode().isIndexed(i.filter.getIndex()),"Server snap not indexed")}function aC(i,e,n,s,l){const u=new iC;let d,h;if(n.type===Ut.OVERWRITE){const g=n;g.source.fromUser?d=lc(i,e,g.path,g.snap,s,l,u):(x(g.source.fromServer,"Unknown source."),h=g.source.tagged||e.serverCache.isFiltered()&&!te(g.path),d=pl(i,e,g.path,g.snap,s,l,h,u))}else if(n.type===Ut.MERGE){const g=n;g.source.fromUser?d=cC(i,e,g.path,g.children,s,l,u):(x(g.source.fromServer,"Unknown source."),h=g.source.tagged||e.serverCache.isFiltered(),d=ac(i,e,g.path,g.children,s,l,h,u))}else if(n.type===Ut.ACK_USER_WRITE){const g=n;g.revert?d=hC(i,e,g.path,s,l,u):d=dC(i,e,g.path,g.affectedTree,s,l,u)}else if(n.type===Ut.LISTEN_COMPLETE)d=fC(i,e,n.path,s,u);else throw ai("Unknown operation type: "+n.type);const m=u.getChanges();return uC(e,d,m),{viewCache:d,changes:m}}function uC(i,e,n){const s=e.eventCache;if(s.isFullyInitialized()){const l=s.getNode().isLeafNode()||s.getNode().isEmpty(),u=ic(i);(n.length>0||!i.eventCache.isFullyInitialized()||l&&!s.getNode().equals(u)||!s.getNode().getPriority().equals(u.getPriority()))&&n.push(yg(ic(e)))}}function Ng(i,e,n,s,l,u){const d=e.eventCache;if(hl(s,n)!=null)return e;{let h,m;if(te(n))if(x(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const g=gr(e),E=g instanceof q?g:q.EMPTY_NODE,w=bc(s,E);h=i.filter.updateFullNode(e.eventCache.getNode(),w,u)}else{const g=fl(s,gr(e));h=i.filter.updateFullNode(e.eventCache.getNode(),g,u)}else{const g=ee(n);if(g===".priority"){x(Hn(n)===1,"Can't have a priority with additional path components");const E=d.getNode();m=e.serverCache.getNode();const w=Gp(s,n,E,m);w!=null?h=i.filter.updatePriority(E,w):h=d.getNode()}else{const E=he(n);let w;if(d.isCompleteForChild(g)){m=e.serverCache.getNode();const T=Gp(s,n,d.getNode(),m);T!=null?w=d.getNode().getImmediateChild(g).updateChild(E,T):w=d.getNode().getImmediateChild(g)}else w=Uc(s,g,e.serverCache);w!=null?h=i.filter.updateChild(d.getNode(),g,w,E,l,u):h=d.getNode()}}return cs(e,h,d.isFullyInitialized()||te(n),i.filter.filtersNodes())}}function pl(i,e,n,s,l,u,d,h){const m=e.serverCache;let g;const E=d?i.filter:i.filter.getIndexedFilter();if(te(n))g=E.updateFullNode(m.getNode(),s,null);else if(E.filtersNodes()&&!m.isFiltered()){const D=m.getNode().updateChild(n,s);g=E.updateFullNode(m.getNode(),D,null)}else{const D=ee(n);if(!m.isCompleteForPath(n)&&Hn(n)>1)return e;const F=he(n),G=m.getNode().getImmediateChild(D).updateChild(F,s);D===".priority"?g=E.updatePriority(m.getNode(),G):g=E.updateChild(m.getNode(),D,G,F,Rg,null)}const w=Eg(e,g,m.isFullyInitialized()||te(n),E.filtersNodes()),T=new zc(l,w,u);return Ng(i,w,n,l,T,h)}function lc(i,e,n,s,l,u,d){const h=e.eventCache;let m,g;const E=new zc(l,e,u);if(te(n))g=i.filter.updateFullNode(e.eventCache.getNode(),s,d),m=cs(e,g,!0,i.filter.filtersNodes());else{const w=ee(n);if(w===".priority")g=i.filter.updatePriority(e.eventCache.getNode(),s),m=cs(e,g,h.isFullyInitialized(),h.isFiltered());else{const T=he(n),D=h.getNode().getImmediateChild(w);let F;if(te(T))F=s;else{const V=E.getCompleteChild(w);V!=null?ug(T)===".priority"&&V.getChild(dg(T)).isEmpty()?F=V:F=V.updateChild(T,s):F=q.EMPTY_NODE}if(D.equals(F))m=e;else{const V=i.filter.updateChild(h.getNode(),w,F,T,E,d);m=cs(e,V,h.isFullyInitialized(),i.filter.filtersNodes())}}}return m}function Kp(i,e){return i.eventCache.isCompleteForChild(e)}function cC(i,e,n,s,l,u,d){let h=e;return s.foreach((m,g)=>{const E=Le(n,m);Kp(e,ee(E))&&(h=lc(i,h,E,g,l,u,d))}),s.foreach((m,g)=>{const E=Le(n,m);Kp(e,ee(E))||(h=lc(i,h,E,g,l,u,d))}),h}function qp(i,e,n){return n.foreach((s,l)=>{e=e.updateChild(s,l)}),e}function ac(i,e,n,s,l,u,d,h){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let m=e,g;te(n)?g=s:g=new ge(null).setTree(n,s);const E=e.serverCache.getNode();return g.children.inorderTraversal((w,T)=>{if(E.hasChild(w)){const D=e.serverCache.getNode().getImmediateChild(w),F=qp(i,D,T);m=pl(i,m,new ce(w),F,l,u,d,h)}}),g.children.inorderTraversal((w,T)=>{const D=!e.serverCache.isCompleteForChild(w)&&T.value===null;if(!E.hasChild(w)&&!D){const F=e.serverCache.getNode().getImmediateChild(w),V=qp(i,F,T);m=pl(i,m,new ce(w),V,l,u,d,h)}}),m}function dC(i,e,n,s,l,u,d){if(hl(l,n)!=null)return e;const h=e.serverCache.isFiltered(),m=e.serverCache;if(s.value!=null){if(te(n)&&m.isFullyInitialized()||m.isCompleteForPath(n))return pl(i,e,n,m.getNode().getChild(n),l,u,h,d);if(te(n)){let g=new ge(null);return m.getNode().forEachChild(Xr,(E,w)=>{g=g.set(new ce(E),w)}),ac(i,e,n,g,l,u,h,d)}else return e}else{let g=new ge(null);return s.foreach((E,w)=>{const T=Le(n,E);m.isCompleteForPath(T)&&(g=g.set(E,m.getNode().getChild(T)))}),ac(i,e,n,g,l,u,h,d)}}function fC(i,e,n,s,l){const u=e.serverCache,d=Eg(e,u.getNode(),u.isFullyInitialized()||te(n),u.isFiltered());return Ng(i,d,n,s,Rg,l)}function hC(i,e,n,s,l,u){let d;if(hl(s,n)!=null)return e;{const h=new zc(s,e,l),m=e.eventCache.getNode();let g;if(te(n)||ee(n)===".priority"){let E;if(e.serverCache.isFullyInitialized())E=fl(s,gr(e));else{const w=e.serverCache.getNode();x(w instanceof q,"serverChildren would be complete if leaf node"),E=bc(s,w)}E=E,g=i.filter.updateFullNode(m,E,u)}else{const E=ee(n);let w=Uc(s,E,e.serverCache);w==null&&e.serverCache.isCompleteForChild(E)&&(w=m.getImmediateChild(E)),w!=null?g=i.filter.updateChild(m,E,w,he(n),h,u):e.eventCache.getNode().hasChild(E)?g=i.filter.updateChild(m,E,q.EMPTY_NODE,he(n),h,u):g=m,g.isEmpty()&&e.serverCache.isFullyInitialized()&&(d=fl(s,gr(e)),d.isLeafNode()&&(g=i.filter.updateFullNode(g,d,u)))}return d=e.serverCache.isFullyInitialized()||hl(s,oe())!=null,cs(e,g,d,i.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pC{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const s=this.query_._queryParams,l=new xc(s.getIndex()),u=DS(s);this.processor_=oC(u);const d=n.serverCache,h=n.eventCache,m=l.updateFullNode(q.EMPTY_NODE,d.getNode(),null),g=u.updateFullNode(q.EMPTY_NODE,h.getNode(),null),E=new mr(m,d.isFullyInitialized(),l.filtersNodes()),w=new mr(g,h.isFullyInitialized(),u.filtersNodes());this.viewCache_=kl(w,E),this.eventGenerator_=new WS(this.query_)}get query(){return this.query_}}function mC(i){return i.viewCache_.serverCache.getNode()}function gC(i,e){const n=gr(i.viewCache_);return n&&(i.query._queryParams.loadsAllData()||!te(e)&&!n.getImmediateChild(ee(e)).isEmpty())?n.getChild(e):null}function Qp(i){return i.eventRegistrations_.length===0}function _C(i,e){i.eventRegistrations_.push(e)}function Yp(i,e,n){const s=[];if(n){x(e==null,"A cancel should cancel all event registrations.");const l=i.query._path;i.eventRegistrations_.forEach(u=>{const d=u.createCancelEvent(n,l);d&&s.push(d)})}if(e){let l=[];for(let u=0;u<i.eventRegistrations_.length;++u){const d=i.eventRegistrations_[u];if(!d.matches(e))l.push(d);else if(e.hasAnyCallback()){l=l.concat(i.eventRegistrations_.slice(u+1));break}}i.eventRegistrations_=l}else i.eventRegistrations_=[];return s}function Xp(i,e,n,s){e.type===Ut.MERGE&&e.source.queryId!==null&&(x(gr(i.viewCache_),"We should always have a full cache before handling merges"),x(ic(i.viewCache_),"Missing event cache, even though we have a server cache"));const l=i.viewCache_,u=aC(i.processor_,l,e,n,s);return lC(i.processor_,u.viewCache),x(u.viewCache.serverCache.isFullyInitialized()||!l.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),i.viewCache_=u.viewCache,Pg(i,u.changes,u.viewCache.eventCache.getNode(),null)}function yC(i,e){const n=i.viewCache_.eventCache,s=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(Ie,(u,d)=>{s.push(si(u,d))}),n.isFullyInitialized()&&s.push(yg(n.getNode())),Pg(i,s,n.getNode(),e)}function Pg(i,e,n,s){const l=s?[s]:i.eventRegistrations_;return jS(i.eventGenerator_,e,n,l)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ml;class vC{constructor(){this.views=new Map}}function wC(i){x(!ml,"__referenceConstructor has already been defined"),ml=i}function EC(){return x(ml,"Reference.ts has not been loaded"),ml}function SC(i){return i.views.size===0}function Wc(i,e,n,s){const l=e.source.queryId;if(l!==null){const u=i.views.get(l);return x(u!=null,"SyncTree gave us an op for an invalid query."),Xp(u,e,n,s)}else{let u=[];for(const d of i.views.values())u=u.concat(Xp(d,e,n,s));return u}}function CC(i,e,n,s,l){const u=e._queryIdentifier,d=i.views.get(u);if(!d){let h=fl(n,l?s:null),m=!1;h?m=!0:s instanceof q?(h=bc(n,s),m=!1):(h=q.EMPTY_NODE,m=!1);const g=kl(new mr(h,m,!1),new mr(s,l,!1));return new pC(e,g)}return d}function IC(i,e,n,s,l,u){const d=CC(i,e,s,l,u);return i.views.has(e._queryIdentifier)||i.views.set(e._queryIdentifier,d),_C(d,n),yC(d,n)}function TC(i,e,n,s){const l=e._queryIdentifier,u=[];let d=[];const h=$n(i);if(l==="default")for(const[m,g]of i.views.entries())d=d.concat(Yp(g,n,s)),Qp(g)&&(i.views.delete(m),g.query._queryParams.loadsAllData()||u.push(g.query));else{const m=i.views.get(l);m&&(d=d.concat(Yp(m,n,s)),Qp(m)&&(i.views.delete(l),m.query._queryParams.loadsAllData()||u.push(m.query)))}return h&&!$n(i)&&u.push(new(EC())(e._repo,e._path)),{removed:u,events:d}}function Ag(i){const e=[];for(const n of i.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function Jr(i,e){let n=null;for(const s of i.views.values())n=n||gC(s,e);return n}function Og(i,e){if(e._queryParams.loadsAllData())return Rl(i);{const s=e._queryIdentifier;return i.views.get(s)}}function xg(i,e){return Og(i,e)!=null}function $n(i){return Rl(i)!=null}function Rl(i){for(const e of i.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let gl;function kC(i){x(!gl,"__referenceConstructor has already been defined"),gl=i}function RC(){return x(gl,"Reference.ts has not been loaded"),gl}let NC=1;class Jp{constructor(e){this.listenProvider_=e,this.syncPointTree_=new ge(null),this.pendingWriteTree_=nC(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function PC(i,e,n,s,l){return $S(i.pendingWriteTree_,e,n,s,l),l?Ps(i,new pr(wg(),e,n)):[]}function qr(i,e,n=!1){const s=GS(i.pendingWriteTree_,e);if(KS(i.pendingWriteTree_,e)){let u=new ge(null);return s.snap!=null?u=u.set(oe(),!0):dt(s.children,d=>{u=u.set(new ce(d),!0)}),Ps(i,new dl(s.path,u,n))}else return[]}function Nl(i,e,n){return Ps(i,new pr(Lc(),e,n))}function AC(i,e,n){const s=ge.fromObject(n);return Ps(i,new Es(Lc(),e,s))}function OC(i,e){return Ps(i,new ws(Lc(),e))}function xC(i,e,n){const s=jc(i,n);if(s){const l=Vc(s),u=l.path,d=l.queryId,h=ut(u,e),m=new ws(Mc(d),h);return Bc(i,u,m)}else return[]}function uc(i,e,n,s,l=!1){const u=e._path,d=i.syncPointTree_.get(u);let h=[];if(d&&(e._queryIdentifier==="default"||xg(d,e))){const m=TC(d,e,n,s);SC(d)&&(i.syncPointTree_=i.syncPointTree_.remove(u));const g=m.removed;if(h=m.events,!l){const E=g.findIndex(T=>T._queryParams.loadsAllData())!==-1,w=i.syncPointTree_.findOnPath(u,(T,D)=>$n(D));if(E&&!w){const T=i.syncPointTree_.subtree(u);if(!T.isEmpty()){const D=MC(T);for(let F=0;F<D.length;++F){const V=D[F],G=V.query,Pe=Fg(i,V);i.listenProvider_.startListening(fs(G),_l(i,G),Pe.hashFn,Pe.onComplete)}}}!w&&g.length>0&&!s&&(E?i.listenProvider_.stopListening(fs(e),null):g.forEach(T=>{const D=i.queryToTagMap.get(Pl(T));i.listenProvider_.stopListening(fs(T),D)}))}FC(i,g)}return h}function DC(i,e,n,s){const l=jc(i,s);if(l!=null){const u=Vc(l),d=u.path,h=u.queryId,m=ut(d,e),g=new pr(Mc(h),m,n);return Bc(i,d,g)}else return[]}function LC(i,e,n,s){const l=jc(i,s);if(l){const u=Vc(l),d=u.path,h=u.queryId,m=ut(d,e),g=ge.fromObject(n),E=new Es(Mc(h),m,g);return Bc(i,d,E)}else return[]}function Zp(i,e,n,s=!1){const l=e._path;let u=null,d=!1;i.syncPointTree_.foreachOnPath(l,(T,D)=>{const F=ut(T,l);u=u||Jr(D,F),d=d||$n(D)});let h=i.syncPointTree_.get(l);h?(d=d||$n(h),u=u||Jr(h,oe())):(h=new vC,i.syncPointTree_=i.syncPointTree_.set(l,h));let m;u!=null?m=!0:(m=!1,u=q.EMPTY_NODE,i.syncPointTree_.subtree(l).foreachChild((D,F)=>{const V=Jr(F,oe());V&&(u=u.updateImmediateChild(D,V))}));const g=xg(h,e);if(!g&&!e._queryParams.loadsAllData()){const T=Pl(e);x(!i.queryToTagMap.has(T),"View does not exist, but we have a tag");const D=bC();i.queryToTagMap.set(T,D),i.tagToQueryMap.set(D,T)}const E=Fc(i.pendingWriteTree_,l);let w=IC(h,e,n,E,u,m);if(!g&&!d&&!s){const T=Og(h,e);w=w.concat(UC(i,e,T))}return w}function Dg(i,e,n){const l=i.pendingWriteTree_,u=i.syncPointTree_.findOnPath(e,(d,h)=>{const m=ut(d,e),g=Jr(h,m);if(g)return g});return Ig(l,e,u,n,!0)}function Ps(i,e){return Lg(e,i.syncPointTree_,null,Fc(i.pendingWriteTree_,oe()))}function Lg(i,e,n,s){if(te(i.path))return Mg(i,e,n,s);{const l=e.get(oe());n==null&&l!=null&&(n=Jr(l,oe()));let u=[];const d=ee(i.path),h=i.operationForChild(d),m=e.children.get(d);if(m&&h){const g=n?n.getImmediateChild(d):null,E=Tg(s,d);u=u.concat(Lg(h,m,g,E))}return l&&(u=u.concat(Wc(l,i,s,n))),u}}function Mg(i,e,n,s){const l=e.get(oe());n==null&&l!=null&&(n=Jr(l,oe()));let u=[];return e.children.inorderTraversal((d,h)=>{const m=n?n.getImmediateChild(d):null,g=Tg(s,d),E=i.operationForChild(d);E&&(u=u.concat(Mg(E,h,m,g)))}),l&&(u=u.concat(Wc(l,i,s,n))),u}function Fg(i,e){const n=e.query,s=_l(i,n);return{hashFn:()=>(mC(e)||q.EMPTY_NODE).hash(),onComplete:l=>{if(l==="ok")return s?xC(i,n._path,s):OC(i,n._path);{const u=xE(l,n);return uc(i,n,null,u)}}}}function _l(i,e){const n=Pl(e);return i.queryToTagMap.get(n)}function Pl(i){return i._path.toString()+"$"+i._queryIdentifier}function jc(i,e){return i.tagToQueryMap.get(e)}function Vc(i){const e=i.indexOf("$");return x(e!==-1&&e<i.length-1,"Bad queryKey."),{queryId:i.substr(e+1),path:new ce(i.substr(0,e))}}function Bc(i,e,n){const s=i.syncPointTree_.get(e);x(s,"Missing sync point for query tag that we're tracking");const l=Fc(i.pendingWriteTree_,e);return Wc(s,n,l,null)}function MC(i){return i.fold((e,n,s)=>{if(n&&$n(n))return[Rl(n)];{let l=[];return n&&(l=Ag(n)),dt(s,(u,d)=>{l=l.concat(d)}),l}})}function fs(i){return i._queryParams.loadsAllData()&&!i._queryParams.isDefault()?new(RC())(i._repo,i._path):i}function FC(i,e){for(let n=0;n<e.length;++n){const s=e[n];if(!s._queryParams.loadsAllData()){const l=Pl(s),u=i.queryToTagMap.get(l);i.queryToTagMap.delete(l),i.tagToQueryMap.delete(u)}}}function bC(){return NC++}function UC(i,e,n){const s=e._path,l=_l(i,e),u=Fg(i,n),d=i.listenProvider_.startListening(fs(e),l,u.hashFn,u.onComplete),h=i.syncPointTree_.subtree(s);if(l)x(!$n(h.value),"If we're adding a query, it shouldn't be shadowed");else{const m=h.fold((g,E,w)=>{if(!te(g)&&E&&$n(E))return[Rl(E).query];{let T=[];return E&&(T=T.concat(Ag(E).map(D=>D.query))),dt(w,(D,F)=>{T=T.concat(F)}),T}});for(let g=0;g<m.length;++g){const E=m[g];i.listenProvider_.stopListening(fs(E),_l(i,E))}}return d}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hc{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new Hc(n)}node(){return this.node_}}class $c{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=Le(this.path_,e);return new $c(this.syncTree_,n)}node(){return Dg(this.syncTree_,this.path_)}}const zC=function(i){return i=i||{},i.timestamp=i.timestamp||new Date().getTime(),i},em=function(i,e,n){if(!i||typeof i!="object")return i;if(x(".sv"in i,"Unexpected leaf node or priority contents"),typeof i[".sv"]=="string")return WC(i[".sv"],e,n);if(typeof i[".sv"]=="object")return jC(i[".sv"],e);x(!1,"Unexpected server value: "+JSON.stringify(i,null,2))},WC=function(i,e,n){switch(i){case"timestamp":return n.timestamp;default:x(!1,"Unexpected server value: "+i)}},jC=function(i,e,n){i.hasOwnProperty("increment")||x(!1,"Unexpected server value: "+JSON.stringify(i,null,2));const s=i.increment;typeof s!="number"&&x(!1,"Unexpected increment value: "+s);const l=e.node();if(x(l!==null&&typeof l<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!l.isLeafNode())return s;const d=l.getValue();return typeof d!="number"?s:d+s},VC=function(i,e,n,s){return Gc(e,new $c(n,i),s)},BC=function(i,e,n){return Gc(i,new Hc(e),n)};function Gc(i,e,n){const s=i.getPriority().val(),l=em(s,e.getImmediateChild(".priority"),n);let u;if(i.isLeafNode()){const d=i,h=em(d.getValue(),e,n);return h!==d.getValue()||l!==d.getPriority().val()?new ze(h,Ye(l)):i}else{const d=i;return u=d,l!==d.getPriority().val()&&(u=u.updatePriority(new ze(l))),d.forEachChild(Ie,(h,m)=>{const g=Gc(m,e.getImmediateChild(h),n);g!==m&&(u=u.updateImmediateChild(h,g))}),u}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kc{constructor(e="",n=null,s={children:{},childCount:0}){this.name=e,this.parent=n,this.node=s}}function qc(i,e){let n=e instanceof ce?e:new ce(e),s=i,l=ee(n);for(;l!==null;){const u=ni(s.node.children,l)||{children:{},childCount:0};s=new Kc(l,s,u),n=he(n),l=ee(n)}return s}function fi(i){return i.node.value}function bg(i,e){i.node.value=e,cc(i)}function Ug(i){return i.node.childCount>0}function HC(i){return fi(i)===void 0&&!Ug(i)}function Al(i,e){dt(i.node.children,(n,s)=>{e(new Kc(n,i,s))})}function zg(i,e,n,s){n&&e(i),Al(i,l=>{zg(l,e,!0)})}function $C(i,e,n){let s=i.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function As(i){return new ce(i.parent===null?i.name:As(i.parent)+"/"+i.name)}function cc(i){i.parent!==null&&GC(i.parent,i.name,i)}function GC(i,e,n){const s=HC(n),l=pn(i.node.children,e);s&&l?(delete i.node.children[e],i.node.childCount--,cc(i)):!s&&!l&&(i.node.children[e]=n.node,i.node.childCount++,cc(i))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KC=/[\[\].#$\/\u0000-\u001F\u007F]/,qC=/[\[\].#$\u0000-\u001F\u007F]/,Hu=10*1024*1024,Wg=function(i){return typeof i=="string"&&i.length!==0&&!KC.test(i)},jg=function(i){return typeof i=="string"&&i.length!==0&&!qC.test(i)},QC=function(i){return i&&(i=i.replace(/^\/*\.info(\/|$)/,"/")),jg(i)},Vg=function(i,e,n){const s=n instanceof ce?new dS(n,i):n;if(e===void 0)throw new Error(i+"contains undefined "+cr(s));if(typeof e=="function")throw new Error(i+"contains a function "+cr(s)+" with contents = "+e.toString());if(Vm(e))throw new Error(i+"contains "+e.toString()+" "+cr(s));if(typeof e=="string"&&e.length>Hu/3&&Il(e)>Hu)throw new Error(i+"contains a string greater than "+Hu+" utf8 bytes "+cr(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let l=!1,u=!1;if(dt(e,(d,h)=>{if(d===".value")l=!0;else if(d!==".priority"&&d!==".sv"&&(u=!0,!Wg(d)))throw new Error(i+" contains an invalid key ("+d+") "+cr(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);fS(s,d),Vg(i,h,s),hS(s)}),l&&u)throw new Error(i+' contains ".value" child '+cr(s)+" in addition to actual children.")}},Bg=function(i,e,n,s){if(!jg(n))throw new Error(Dm(i,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},YC=function(i,e,n,s){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),Bg(i,e,n)},XC=function(i,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Wg(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!QC(n))throw new Error(Dm(i,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JC{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Hg(i,e){let n=null;for(let s=0;s<e.length;s++){const l=e[s],u=l.getPath();n!==null&&!Pc(u,n.path)&&(i.eventLists_.push(n),n=null),n===null&&(n={events:[],path:u}),n.events.push(l)}n&&i.eventLists_.push(n)}function $g(i,e,n){Hg(i,n),Gg(i,s=>Pc(s,e))}function vr(i,e,n){Hg(i,n),Gg(i,s=>bt(s,e)||bt(e,s))}function Gg(i,e){i.recursionDepth_++;let n=!0;for(let s=0;s<i.eventLists_.length;s++){const l=i.eventLists_[s];if(l){const u=l.path;e(u)?(ZC(i.eventLists_[s]),i.eventLists_[s]=null):n=!1}}n&&(i.eventLists_=[]),i.recursionDepth_--}function ZC(i){for(let e=0;e<i.events.length;e++){const n=i.events[e];if(n!==null){i.events[e]=null;const s=n.getEventRunner();as&&Qe("event: "+n.toString()),Rs(s)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eI="repo_interrupt",tI=25;class nI{constructor(e,n,s,l){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=s,this.appCheckProvider_=l,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new JC,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=cl(),this.transactionQueueTree_=new Kc,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function rI(i,e,n){if(i.stats_=Rc(i.repoInfo_),i.forceRestClient_||FE())i.server_=new ul(i.repoInfo_,(s,l,u,d)=>{tm(i,s,l,u,d)},i.authTokenProvider_,i.appCheckProvider_),setTimeout(()=>nm(i,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{je(n)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}i.persistentConnection_=new cn(i.repoInfo_,e,(s,l,u,d)=>{tm(i,s,l,u,d)},s=>{nm(i,s)},s=>{sI(i,s)},i.authTokenProvider_,i.appCheckProvider_,n),i.server_=i.persistentConnection_}i.authTokenProvider_.addTokenChangeListener(s=>{i.server_.refreshAuthToken(s)}),i.appCheckProvider_.addTokenChangeListener(s=>{i.server_.refreshAppCheckToken(s.token)}),i.statsReporter_=jE(i.repoInfo_,()=>new zS(i.stats_,i.server_)),i.infoData_=new LS,i.infoSyncTree_=new Jp({startListening:(s,l,u,d)=>{let h=[];const m=i.infoData_.getNode(s._path);return m.isEmpty()||(h=Nl(i.infoSyncTree_,s._path,m),setTimeout(()=>{d("ok")},0)),h},stopListening:()=>{}}),Qc(i,"connected",!1),i.serverSyncTree_=new Jp({startListening:(s,l,u,d)=>(i.server_.listen(s,u,l,(h,m)=>{const g=d(h,m);vr(i.eventQueue_,s._path,g)}),[]),stopListening:(s,l)=>{i.server_.unlisten(s,l)}})}function iI(i){const n=i.infoData_.getNode(new ce(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function Kg(i){return zC({timestamp:iI(i)})}function tm(i,e,n,s,l){i.dataUpdateCount++;const u=new ce(e);n=i.interceptServerDataCallback_?i.interceptServerDataCallback_(e,n):n;let d=[];if(l)if(s){const m=rl(n,g=>Ye(g));d=LC(i.serverSyncTree_,u,m,l)}else{const m=Ye(n);d=DC(i.serverSyncTree_,u,m,l)}else if(s){const m=rl(n,g=>Ye(g));d=AC(i.serverSyncTree_,u,m)}else{const m=Ye(n);d=Nl(i.serverSyncTree_,u,m)}let h=u;d.length>0&&(h=Xc(i,u)),vr(i.eventQueue_,h,d)}function nm(i,e){Qc(i,"connected",e),e===!1&&lI(i)}function sI(i,e){dt(e,(n,s)=>{Qc(i,n,s)})}function Qc(i,e,n){const s=new ce("/.info/"+e),l=Ye(n);i.infoData_.updateSnapshot(s,l);const u=Nl(i.infoSyncTree_,s,l);vr(i.eventQueue_,s,u)}function oI(i){return i.nextWriteId_++}function lI(i){qg(i,"onDisconnectEvents");const e=Kg(i),n=cl();rc(i.onDisconnect_,oe(),(l,u)=>{const d=VC(l,u,i.serverSyncTree_,e);vg(n,l,d)});let s=[];rc(n,oe(),(l,u)=>{s=s.concat(Nl(i.serverSyncTree_,l,u));const d=hI(i,l);Xc(i,d)}),i.onDisconnect_=cl(),vr(i.eventQueue_,oe(),s)}function aI(i,e,n){let s;ee(e._path)===".info"?s=Zp(i.infoSyncTree_,e,n):s=Zp(i.serverSyncTree_,e,n),$g(i.eventQueue_,e._path,s)}function uI(i,e,n){let s;ee(e._path)===".info"?s=uc(i.infoSyncTree_,e,n):s=uc(i.serverSyncTree_,e,n),$g(i.eventQueue_,e._path,s)}function cI(i){i.persistentConnection_&&i.persistentConnection_.interrupt(eI)}function qg(i,...e){let n="";i.persistentConnection_&&(n=i.persistentConnection_.id+":"),Qe(n,...e)}function Qg(i,e,n){return Dg(i.serverSyncTree_,e,n)||q.EMPTY_NODE}function Yc(i,e=i.transactionQueueTree_){if(e||Ol(i,e),fi(e)){const n=Xg(i,e);x(n.length>0,"Sending zero length transaction queue"),n.every(l=>l.status===0)&&dI(i,As(e),n)}else Ug(e)&&Al(e,n=>{Yc(i,n)})}function dI(i,e,n){const s=n.map(g=>g.currentWriteId),l=Qg(i,e,s);let u=l;const d=l.hash();for(let g=0;g<n.length;g++){const E=n[g];x(E.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),E.status=1,E.retryCount++;const w=ut(e,E.path);u=u.updateChild(w,E.currentOutputSnapshotRaw)}const h=u.val(!0),m=e;i.server_.put(m.toString(),h,g=>{qg(i,"transaction put response",{path:m.toString(),status:g});let E=[];if(g==="ok"){const w=[];for(let T=0;T<n.length;T++)n[T].status=2,E=E.concat(qr(i.serverSyncTree_,n[T].currentWriteId)),n[T].onComplete&&w.push(()=>n[T].onComplete(null,!0,n[T].currentOutputSnapshotResolved)),n[T].unwatcher();Ol(i,qc(i.transactionQueueTree_,e)),Yc(i,i.transactionQueueTree_),vr(i.eventQueue_,e,E);for(let T=0;T<w.length;T++)Rs(w[T])}else{if(g==="datastale")for(let w=0;w<n.length;w++)n[w].status===3?n[w].status=4:n[w].status=0;else{yt("transaction at "+m.toString()+" failed: "+g);for(let w=0;w<n.length;w++)n[w].status=4,n[w].abortReason=g}Xc(i,e)}},d)}function Xc(i,e){const n=Yg(i,e),s=As(n),l=Xg(i,n);return fI(i,l,s),s}function fI(i,e,n){if(e.length===0)return;const s=[];let l=[];const d=e.filter(h=>h.status===0).map(h=>h.currentWriteId);for(let h=0;h<e.length;h++){const m=e[h],g=ut(n,m.path);let E=!1,w;if(x(g!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),m.status===4)E=!0,w=m.abortReason,l=l.concat(qr(i.serverSyncTree_,m.currentWriteId,!0));else if(m.status===0)if(m.retryCount>=tI)E=!0,w="maxretry",l=l.concat(qr(i.serverSyncTree_,m.currentWriteId,!0));else{const T=Qg(i,m.path,d);m.currentInputSnapshot=T;const D=e[h].update(T.val());if(D!==void 0){Vg("transaction failed: Data returned ",D,m.path);let F=Ye(D);typeof D=="object"&&D!=null&&pn(D,".priority")||(F=F.updatePriority(T.getPriority()));const G=m.currentWriteId,Pe=Kg(i),Me=BC(F,T,Pe);m.currentOutputSnapshotRaw=F,m.currentOutputSnapshotResolved=Me,m.currentWriteId=oI(i),d.splice(d.indexOf(G),1),l=l.concat(PC(i.serverSyncTree_,m.path,Me,m.currentWriteId,m.applyLocally)),l=l.concat(qr(i.serverSyncTree_,G,!0))}else E=!0,w="nodata",l=l.concat(qr(i.serverSyncTree_,m.currentWriteId,!0))}vr(i.eventQueue_,n,l),l=[],E&&(e[h].status=2,function(T){setTimeout(T,Math.floor(0))}(e[h].unwatcher),e[h].onComplete&&(w==="nodata"?s.push(()=>e[h].onComplete(null,!1,e[h].currentInputSnapshot)):s.push(()=>e[h].onComplete(new Error(w),!1,null))))}Ol(i,i.transactionQueueTree_);for(let h=0;h<s.length;h++)Rs(s[h]);Yc(i,i.transactionQueueTree_)}function Yg(i,e){let n,s=i.transactionQueueTree_;for(n=ee(e);n!==null&&fi(s)===void 0;)s=qc(s,n),e=he(e),n=ee(e);return s}function Xg(i,e){const n=[];return Jg(i,e,n),n.sort((s,l)=>s.order-l.order),n}function Jg(i,e,n){const s=fi(e);if(s)for(let l=0;l<s.length;l++)n.push(s[l]);Al(e,l=>{Jg(i,l,n)})}function Ol(i,e){const n=fi(e);if(n){let s=0;for(let l=0;l<n.length;l++)n[l].status!==2&&(n[s]=n[l],s++);n.length=s,bg(e,n.length>0?n:void 0)}Al(e,s=>{Ol(i,s)})}function hI(i,e){const n=As(Yg(i,e)),s=qc(i.transactionQueueTree_,e);return $C(s,l=>{$u(i,l)}),$u(i,s),zg(s,l=>{$u(i,l)}),n}function $u(i,e){const n=fi(e);if(n){const s=[];let l=[],u=-1;for(let d=0;d<n.length;d++)n[d].status===3||(n[d].status===1?(x(u===d-1,"All SENT items should be at beginning of queue."),u=d,n[d].status=3,n[d].abortReason="set"):(x(n[d].status===0,"Unexpected transaction status in abort"),n[d].unwatcher(),l=l.concat(qr(i.serverSyncTree_,n[d].currentWriteId,!0)),n[d].onComplete&&s.push(n[d].onComplete.bind(null,new Error("set"),!1,null))));u===-1?bg(e,void 0):n.length=u+1,vr(i.eventQueue_,As(e),l);for(let d=0;d<s.length;d++)Rs(s[d])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pI(i){let e="";const n=i.split("/");for(let s=0;s<n.length;s++)if(n[s].length>0){let l=n[s];try{l=decodeURIComponent(l.replace(/\+/g," "))}catch{}e+="/"+l}return e}function mI(i){const e={};i.charAt(0)==="?"&&(i=i.substring(1));for(const n of i.split("&")){if(n.length===0)continue;const s=n.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):yt(`Invalid query segment '${n}' in query '${i}'`)}return e}const rm=function(i,e){const n=gI(i),s=n.namespace;n.domain==="firebase.com"&&fn(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&n.domain!=="localhost"&&fn("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||RE();const l=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new eg(n.host,n.secure,s,l,e,"",s!==n.subdomain),path:new ce(n.pathString)}},gI=function(i){let e="",n="",s="",l="",u="",d=!0,h="https",m=443;if(typeof i=="string"){let g=i.indexOf("//");g>=0&&(h=i.substring(0,g-1),i=i.substring(g+2));let E=i.indexOf("/");E===-1&&(E=i.length);let w=i.indexOf("?");w===-1&&(w=i.length),e=i.substring(0,Math.min(E,w)),E<w&&(l=pI(i.substring(E,w)));const T=mI(i.substring(Math.min(i.length,w)));g=e.indexOf(":"),g>=0?(d=h==="https"||h==="wss",m=parseInt(e.substring(g+1),10)):g=e.length;const D=e.slice(0,g);if(D.toLowerCase()==="localhost")n="localhost";else if(D.split(".").length<=2)n=D;else{const F=e.indexOf(".");s=e.substring(0,F).toLowerCase(),n=e.substring(F+1),u=s}"ns"in T&&(u=T.ns)}return{host:e,port:m,domain:n,subdomain:s,secure:d,scheme:h,pathString:l,namespace:u}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _I{constructor(e,n,s,l){this.eventType=e,this.eventRegistration=n,this.snapshot=s,this.prevName=l}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+je(this.snapshot.exportVal())}}class yI{constructor(e,n,s){this.eventRegistration=e,this.error=n,this.path=s}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vI{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return x(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jc{constructor(e,n,s,l){this._repo=e,this._path=n,this._queryParams=s,this._orderByCalled=l}get key(){return te(this._path)?null:ug(this._path)}get ref(){return new Kn(this._repo,this._path)}get _queryIdentifier(){const e=jp(this._queryParams),n=Tc(e);return n==="{}"?"default":n}get _queryObject(){return jp(this._queryParams)}isEqual(e){if(e=vt(e),!(e instanceof Jc))return!1;const n=this._repo===e._repo,s=Pc(this._path,e._path),l=this._queryIdentifier===e._queryIdentifier;return n&&s&&l}toJSON(){return this.toString()}toString(){return this._repo.toString()+cS(this._path)}}class Kn extends Jc{constructor(e,n){super(e,n,new Dc,!1)}get parent(){const e=dg(this._path);return e===null?null:new Kn(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class yl{constructor(e,n,s){this._node=e,this.ref=n,this._index=s}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new ce(e),s=dc(this.ref,e);return new yl(this._node.getChild(n),s,Ie)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(s,l)=>e(new yl(l,dc(this.ref,s),Ie)))}hasChild(e){const n=new ce(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function wI(i,e){return i=vt(i),i._checkNotDeleted("ref"),dc(i._root,e)}function dc(i,e){return i=vt(i),ee(i._path)===null?YC("child","path",e):Bg("child","path",e),new Kn(i._repo,Le(i._path,e))}class Zc{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const s=n._queryParams.getIndex();return new _I("value",this,new yl(e.snapshotNode,new Kn(n._repo,n._path),s))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new yI(this,e,n):null}matches(e){return e instanceof Zc?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function EI(i,e,n,s,l){const u=new vI(n,void 0),d=new Zc(u);return aI(i._repo,i,d),()=>uI(i._repo,i,d)}function SI(i,e,n,s){return EI(i,"value",e)}wC(Kn);kC(Kn);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CI="FIREBASE_DATABASE_EMULATOR_HOST",fc={};let II=!1;function TI(i,e,n,s){i.repoInfo_=new eg(`${e}:${n}`,!1,i.repoInfo_.namespace,i.repoInfo_.webSocketOnly,i.repoInfo_.nodeAdmin,i.repoInfo_.persistenceKey,i.repoInfo_.includeNamespaceInQueryParams,!0),s&&(i.authTokenProvider_=s)}function kI(i,e,n,s,l){let u=s||i.options.databaseURL;u===void 0&&(i.options.projectId||fn("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Qe("Using default host for project ",i.options.projectId),u=`${i.options.projectId}-default-rtdb.firebaseio.com`);let d=rm(u,l),h=d.repoInfo,m;typeof process<"u"&&Cp&&(m=Cp[CI]),m?(u=`http://${m}?ns=${h.namespace}`,d=rm(u,l),h=d.repoInfo):d.repoInfo.secure;const g=new UE(i.name,i.options,e);XC("Invalid Firebase Database URL",d),te(d.path)||fn("Database URL must point to the root of a Firebase Database (not including a child path).");const E=NI(h,i,g,new bE(i.name,n));return new PI(E,i)}function RI(i,e){const n=fc[e];(!n||n[i.key]!==i)&&fn(`Database ${e}(${i.repoInfo_}) has already been deleted.`),cI(i),delete n[i.key]}function NI(i,e,n,s){let l=fc[e.name];l||(l={},fc[e.name]=l);let u=l[i.toURLString()];return u&&fn("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),u=new nI(i,II,n,s),l[i.toURLString()]=u,u}class PI{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(rI(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Kn(this._repo,oe())),this._rootInternal}_delete(){return this._rootInternal!==null&&(RI(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&fn("Cannot call "+e+" on a deleted database.")}}function AI(i=Fm(),e){const n=Cc(i,"database").getImmediate({identifier:e});if(!n._instanceStarted){const s=qv("database");s&&OI(n,...s)}return n}function OI(i,e,n,s={}){i=vt(i),i._checkNotDeleted("useEmulator"),i._instanceStarted&&fn("Cannot call useEmulator() after instance has already been initialized.");const l=i._repoInternal;let u;if(l.repoInfo_.nodeAdmin)s.mockUserToken&&fn('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),u=new Yo(Yo.OWNER);else if(s.mockUserToken){const d=typeof s.mockUserToken=="string"?s.mockUserToken:Qv(s.mockUserToken,i.app.options.projectId);u=new Yo(d)}TI(l,e,n,u)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xI(i){EE(ci),ri(new fr("database",(e,{instanceIdentifier:n})=>{const s=e.getProvider("app").getImmediate(),l=e.getProvider("auth-internal"),u=e.getProvider("app-check-internal");return kI(s,l,u,n)},"PUBLIC").setMultipleInstances(!0)),jn(Ip,Tp,i),jn(Ip,Tp,"esm2017")}cn.prototype.simpleListen=function(i,e){this.sendRequest("q",{p:i},e)};cn.prototype.echo=function(i,e){this.sendRequest("echo",{d:i},e)};xI();const Zg={apiKey:"AIzaSyANsUhuv41SlnbpzW--kKzy-zuESdoIH3s",authDomain:"neworder-9b0fe.firebaseapp.com",databaseURL:"https://neworder-9b0fe-default-rtdb.asia-southeast1.firebasedatabase.app",projectId:"neworder-9b0fe",storageBucket:"neworder-9b0fe.firebasestorage.app",messagingSenderId:"471792595571",appId:"1:471792595571:web:7cbe0eb741dc70d1303006",measurementId:"G-TSM16T41H8"},DI=Ic(Zg),LI=AI(DI),MI=()=>{const[i,e]=ls.useState({}),[n,s]=ls.useState(JSON.parse(localStorage.getItem("completedOrders"))||[]);ls.useEffect(()=>{const u=wI(LI,"Orders");SI(u,d=>{d.exists()?e(d.val()):e({})})},[]);const l=u=>{const d=[...n,u];s(d),localStorage.setItem("completedOrders",JSON.stringify(d))};return ve.jsx("div",{className:"order-list",children:Object.entries(i).map(([u,d])=>ve.jsxs("div",{className:`order-card ${n.includes(u)?"completed":""}`,children:[ve.jsxs("h3",{children:["#",u," | ",d.type]}),ve.jsxs("div",{className:"order-tags",children:[ve.jsx("span",{className:d.isIced?"tag iced":"tag warm",children:d.isIced?"Iced":"Hot"}),d.isDecaf&&ve.jsx("span",{className:"tag",children:"Decaf"}),d.isExtraHot&&ve.jsx("span",{className:"tag",children:"Extra Hot"}),ve.jsx("span",{className:"tag",children:d.milk}),ve.jsxs("span",{className:"tag",children:["Strength: ",d.strength]}),ve.jsxs("span",{className:"tag",children:["Sugar: ",d.sugar]})]}),!n.includes(u)&&ve.jsx("button",{className:"complete-btn",onClick:()=>l(u),children:"Mark as Completed"})]},u))})};function ed(i,e){var n={};for(var s in i)Object.prototype.hasOwnProperty.call(i,s)&&e.indexOf(s)<0&&(n[s]=i[s]);if(i!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,s=Object.getOwnPropertySymbols(i);l<s.length;l++)e.indexOf(s[l])<0&&Object.prototype.propertyIsEnumerable.call(i,s[l])&&(n[s[l]]=i[s[l]]);return n}function e_(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const FI=e_,t_=new Is("auth","Firebase",e_());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vl=new Ec("@firebase/auth");function bI(i,...e){vl.logLevel<=ue.WARN&&vl.warn(`Auth (${ci}): ${i}`,...e)}function Xo(i,...e){vl.logLevel<=ue.ERROR&&vl.error(`Auth (${ci}): ${i}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wt(i,...e){throw td(i,...e)}function qt(i,...e){return td(i,...e)}function n_(i,e,n){const s=Object.assign(Object.assign({},FI()),{[e]:n});return new Is("auth","Firebase",s).create(e,{appName:i.name})}function Bn(i){return n_(i,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function td(i,...e){if(typeof i!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=i.name),i._errorFactory.create(n,...s)}return t_.create(i,...e)}function K(i,e,...n){if(!i)throw td(e,...n)}function ln(i){const e="INTERNAL ASSERTION FAILED: "+i;throw Xo(e),new Error(e)}function hn(i,e){i||ln(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hc(){var i;return typeof self<"u"&&((i=self.location)===null||i===void 0?void 0:i.href)||""}function UI(){return im()==="http:"||im()==="https:"}function im(){var i;return typeof self<"u"&&((i=self.location)===null||i===void 0?void 0:i.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zI(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(UI()||Xv()||"connection"in navigator)?navigator.onLine:!0}function WI(){if(typeof navigator>"u")return null;const i=navigator;return i.languages&&i.languages[0]||i.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Os{constructor(e,n){this.shortDelay=e,this.longDelay=n,hn(n>e,"Short delay should be less than long delay!"),this.isMobile=wc()||Om()}get(){return zI()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nd(i,e){hn(i.emulator,"Emulator should always be set here");const{url:n}=i.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r_{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;ln("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;ln("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;ln("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jI={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VI=new Os(3e4,6e4);function wr(i,e){return i.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:i.tenantId}):e}async function qn(i,e,n,s,l={}){return i_(i,l,async()=>{let u={},d={};s&&(e==="GET"?d=s:u={body:JSON.stringify(s)});const h=ui(Object.assign({key:i.config.apiKey},d)).slice(1),m=await i._getAdditionalHeaders();m["Content-Type"]="application/json",i.languageCode&&(m["X-Firebase-Locale"]=i.languageCode);const g=Object.assign({method:e,headers:m},u);return Yv()||(g.referrerPolicy="no-referrer"),r_.fetch()(s_(i,i.config.apiHost,n,h),g)})}async function i_(i,e,n){i._canInitEmulator=!1;const s=Object.assign(Object.assign({},jI),e);try{const l=new HI(i),u=await Promise.race([n(),l.promise]);l.clearNetworkTimeout();const d=await u.json();if("needConfirmation"in d)throw Qo(i,"account-exists-with-different-credential",d);if(u.ok&&!("errorMessage"in d))return d;{const h=u.ok?d.errorMessage:d.error.message,[m,g]=h.split(" : ");if(m==="FEDERATED_USER_ID_ALREADY_LINKED")throw Qo(i,"credential-already-in-use",d);if(m==="EMAIL_EXISTS")throw Qo(i,"email-already-in-use",d);if(m==="USER_DISABLED")throw Qo(i,"user-disabled",d);const E=s[m]||m.toLowerCase().replace(/[_\s]+/g,"-");if(g)throw n_(i,E,g);Wt(i,E)}}catch(l){if(l instanceof Gn)throw l;Wt(i,"network-request-failed",{message:String(l)})}}async function xl(i,e,n,s,l={}){const u=await qn(i,e,n,s,l);return"mfaPendingCredential"in u&&Wt(i,"multi-factor-auth-required",{_serverResponse:u}),u}function s_(i,e,n,s){const l=`${e}${n}?${s}`;return i.config.emulator?nd(i.config,l):`${i.config.apiScheme}://${l}`}function BI(i){switch(i){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class HI{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(qt(this.auth,"network-request-failed")),VI.get())})}}function Qo(i,e,n){const s={appName:i.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const l=qt(i,e,s);return l.customData._tokenResponse=n,l}function sm(i){return i!==void 0&&i.enterprise!==void 0}class $I{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return BI(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function GI(i,e){return qn(i,"GET","/v2/recaptchaConfig",wr(i,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function KI(i,e){return qn(i,"POST","/v1/accounts:delete",e)}async function o_(i,e){return qn(i,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hs(i){if(i)try{const e=new Date(Number(i));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function qI(i,e=!1){const n=vt(i),s=await n.getIdToken(e),l=rd(s);K(l&&l.exp&&l.auth_time&&l.iat,n.auth,"internal-error");const u=typeof l.firebase=="object"?l.firebase:void 0,d=u==null?void 0:u.sign_in_provider;return{claims:l,token:s,authTime:hs(Gu(l.auth_time)),issuedAtTime:hs(Gu(l.iat)),expirationTime:hs(Gu(l.exp)),signInProvider:d||null,signInSecondFactor:(u==null?void 0:u.sign_in_second_factor)||null}}function Gu(i){return Number(i)*1e3}function rd(i){const[e,n,s]=i.split(".");if(e===void 0||n===void 0||s===void 0)return Xo("JWT malformed, contained fewer than 3 sections"),null;try{const l=nl(n);return l?JSON.parse(l):(Xo("Failed to decode base64 JWT payload"),null)}catch(l){return Xo("Caught error parsing JWT payload as JSON",l==null?void 0:l.toString()),null}}function om(i){const e=rd(i);return K(e,"internal-error"),K(typeof e.exp<"u","internal-error"),K(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ss(i,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof Gn&&QI(s)&&i.auth.currentUser===i&&await i.auth.signOut(),s}}function QI({code:i}){return i==="auth/user-disabled"||i==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YI{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const l=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,l)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pc{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=hs(this.lastLoginAt),this.creationTime=hs(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wl(i){var e;const n=i.auth,s=await i.getIdToken(),l=await Ss(i,o_(n,{idToken:s}));K(l==null?void 0:l.users.length,n,"internal-error");const u=l.users[0];i._notifyReloadListener(u);const d=!((e=u.providerUserInfo)===null||e===void 0)&&e.length?l_(u.providerUserInfo):[],h=JI(i.providerData,d),m=i.isAnonymous,g=!(i.email&&u.passwordHash)&&!(h!=null&&h.length),E=m?g:!1,w={uid:u.localId,displayName:u.displayName||null,photoURL:u.photoUrl||null,email:u.email||null,emailVerified:u.emailVerified||!1,phoneNumber:u.phoneNumber||null,tenantId:u.tenantId||null,providerData:h,metadata:new pc(u.createdAt,u.lastLoginAt),isAnonymous:E};Object.assign(i,w)}async function XI(i){const e=vt(i);await wl(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function JI(i,e){return[...i.filter(s=>!e.some(l=>l.providerId===s.providerId)),...e]}function l_(i){return i.map(e=>{var{providerId:n}=e,s=ed(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ZI(i,e){const n=await i_(i,{},async()=>{const s=ui({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:l,apiKey:u}=i.config,d=s_(i,l,"/v1/token",`key=${u}`),h=await i._getAdditionalHeaders();return h["Content-Type"]="application/x-www-form-urlencoded",r_.fetch()(d,{method:"POST",headers:h,body:s})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function eT(i,e){return qn(i,"POST","/v2/accounts:revokeToken",wr(i,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){K(e.idToken,"internal-error"),K(typeof e.idToken<"u","internal-error"),K(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):om(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){K(e.length!==0,"internal-error");const n=om(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(K(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:l,expiresIn:u}=await ZI(e,n);this.updateTokensAndExpiration(s,l,Number(u))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:l,expirationTime:u}=n,d=new Zr;return s&&(K(typeof s=="string","internal-error",{appName:e}),d.refreshToken=s),l&&(K(typeof l=="string","internal-error",{appName:e}),d.accessToken=l),u&&(K(typeof u=="number","internal-error",{appName:e}),d.expirationTime=u),d}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Zr,this.toJSON())}_performRefresh(){return ln("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ln(i,e){K(typeof i=="string"||typeof i>"u","internal-error",{appName:e})}class an{constructor(e){var{uid:n,auth:s,stsTokenManager:l}=e,u=ed(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new YI(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=l,this.accessToken=l.accessToken,this.displayName=u.displayName||null,this.email=u.email||null,this.emailVerified=u.emailVerified||!1,this.phoneNumber=u.phoneNumber||null,this.photoURL=u.photoURL||null,this.isAnonymous=u.isAnonymous||!1,this.tenantId=u.tenantId||null,this.providerData=u.providerData?[...u.providerData]:[],this.metadata=new pc(u.createdAt||void 0,u.lastLoginAt||void 0)}async getIdToken(e){const n=await Ss(this,this.stsTokenManager.getToken(this.auth,e));return K(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return qI(this,e)}reload(){return XI(this)}_assign(e){this!==e&&(K(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new an(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){K(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await wl(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(sn(this.auth.app))return Promise.reject(Bn(this.auth));const e=await this.getIdToken();return await Ss(this,KI(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,l,u,d,h,m,g,E;const w=(s=n.displayName)!==null&&s!==void 0?s:void 0,T=(l=n.email)!==null&&l!==void 0?l:void 0,D=(u=n.phoneNumber)!==null&&u!==void 0?u:void 0,F=(d=n.photoURL)!==null&&d!==void 0?d:void 0,V=(h=n.tenantId)!==null&&h!==void 0?h:void 0,G=(m=n._redirectEventId)!==null&&m!==void 0?m:void 0,Pe=(g=n.createdAt)!==null&&g!==void 0?g:void 0,Me=(E=n.lastLoginAt)!==null&&E!==void 0?E:void 0,{uid:Ae,emailVerified:Te,isAnonymous:et,providerData:Oe,stsTokenManager:Ve}=n;K(Ae&&Ve,e,"internal-error");const tt=Zr.fromJSON(this.name,Ve);K(typeof Ae=="string",e,"internal-error"),Ln(w,e.name),Ln(T,e.name),K(typeof Te=="boolean",e,"internal-error"),K(typeof et=="boolean",e,"internal-error"),Ln(D,e.name),Ln(F,e.name),Ln(V,e.name),Ln(G,e.name),Ln(Pe,e.name),Ln(Me,e.name);const wt=new an({uid:Ae,auth:e,email:T,emailVerified:Te,displayName:w,isAnonymous:et,photoURL:F,phoneNumber:D,tenantId:V,stsTokenManager:tt,createdAt:Pe,lastLoginAt:Me});return Oe&&Array.isArray(Oe)&&(wt.providerData=Oe.map(Rt=>Object.assign({},Rt))),G&&(wt._redirectEventId=G),wt}static async _fromIdTokenResponse(e,n,s=!1){const l=new Zr;l.updateFromServerResponse(n);const u=new an({uid:n.localId,auth:e,stsTokenManager:l,isAnonymous:s});return await wl(u),u}static async _fromGetAccountInfoResponse(e,n,s){const l=n.users[0];K(l.localId!==void 0,"internal-error");const u=l.providerUserInfo!==void 0?l_(l.providerUserInfo):[],d=!(l.email&&l.passwordHash)&&!(u!=null&&u.length),h=new Zr;h.updateFromIdToken(s);const m=new an({uid:l.localId,auth:e,stsTokenManager:h,isAnonymous:d}),g={uid:l.localId,displayName:l.displayName||null,photoURL:l.photoUrl||null,email:l.email||null,emailVerified:l.emailVerified||!1,phoneNumber:l.phoneNumber||null,tenantId:l.tenantId||null,providerData:u,metadata:new pc(l.createdAt,l.lastLoginAt),isAnonymous:!(l.email&&l.passwordHash)&&!(u!=null&&u.length)};return Object.assign(m,g),m}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lm=new Map;function un(i){hn(i instanceof Function,"Expected a class definition");let e=lm.get(i);return e?(hn(e instanceof i,"Instance stored in cache mismatched with class"),e):(e=new i,lm.set(i,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a_{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}a_.type="NONE";const am=a_;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jo(i,e,n){return`firebase:${i}:${e}:${n}`}class ei{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:l,name:u}=this.auth;this.fullUserKey=Jo(this.userKey,l.apiKey,u),this.fullPersistenceKey=Jo("persistence",l.apiKey,u),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?an._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new ei(un(am),e,s);const l=(await Promise.all(n.map(async g=>{if(await g._isAvailable())return g}))).filter(g=>g);let u=l[0]||un(am);const d=Jo(s,e.config.apiKey,e.name);let h=null;for(const g of n)try{const E=await g._get(d);if(E){const w=an._fromJSON(e,E);g!==u&&(h=w),u=g;break}}catch{}const m=l.filter(g=>g._shouldAllowMigration);return!u._shouldAllowMigration||!m.length?new ei(u,e,s):(u=m[0],h&&await u._set(d,h.toJSON()),await Promise.all(n.map(async g=>{if(g!==u)try{await g._remove(d)}catch{}})),new ei(u,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function um(i){const e=i.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(f_(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(u_(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(p_(e))return"Blackberry";if(m_(e))return"Webos";if(c_(e))return"Safari";if((e.includes("chrome/")||d_(e))&&!e.includes("edge/"))return"Chrome";if(h_(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=i.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function u_(i=Ze()){return/firefox\//i.test(i)}function c_(i=Ze()){const e=i.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function d_(i=Ze()){return/crios\//i.test(i)}function f_(i=Ze()){return/iemobile/i.test(i)}function h_(i=Ze()){return/android/i.test(i)}function p_(i=Ze()){return/blackberry/i.test(i)}function m_(i=Ze()){return/webos/i.test(i)}function id(i=Ze()){return/iphone|ipad|ipod/i.test(i)||/macintosh/i.test(i)&&/mobile/i.test(i)}function tT(i=Ze()){var e;return id(i)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function nT(){return Jv()&&document.documentMode===10}function g_(i=Ze()){return id(i)||h_(i)||m_(i)||p_(i)||/windows phone/i.test(i)||f_(i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function __(i,e=[]){let n;switch(i){case"Browser":n=um(Ze());break;case"Worker":n=`${um(Ze())}-${i}`;break;default:n=i}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${ci}/${s}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rT{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=u=>new Promise((d,h)=>{try{const m=e(u);d(m)}catch(m){h(m)}});s.onAbort=n,this.queue.push(s);const l=this.queue.length-1;return()=>{this.queue[l]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const s of this.queue)await s(e),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const l of n)try{l()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function iT(i,e={}){return qn(i,"GET","/v2/passwordPolicy",wr(i,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sT=6;class oT{constructor(e){var n,s,l,u;const d=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=d.minPasswordLength)!==null&&n!==void 0?n:sT,d.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=d.maxPasswordLength),d.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=d.containsLowercaseCharacter),d.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=d.containsUppercaseCharacter),d.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=d.containsNumericCharacter),d.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=d.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(l=(s=e.allowedNonAlphanumericCharacters)===null||s===void 0?void 0:s.join(""))!==null&&l!==void 0?l:"",this.forceUpgradeOnSignin=(u=e.forceUpgradeOnSignin)!==null&&u!==void 0?u:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,s,l,u,d,h;const m={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,m),this.validatePasswordCharacterOptions(e,m),m.isValid&&(m.isValid=(n=m.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),m.isValid&&(m.isValid=(s=m.meetsMaxPasswordLength)!==null&&s!==void 0?s:!0),m.isValid&&(m.isValid=(l=m.containsLowercaseLetter)!==null&&l!==void 0?l:!0),m.isValid&&(m.isValid=(u=m.containsUppercaseLetter)!==null&&u!==void 0?u:!0),m.isValid&&(m.isValid=(d=m.containsNumericCharacter)!==null&&d!==void 0?d:!0),m.isValid&&(m.isValid=(h=m.containsNonAlphanumericCharacter)!==null&&h!==void 0?h:!0),m}validatePasswordLengthOptions(e,n){const s=this.customStrengthOptions.minPasswordLength,l=this.customStrengthOptions.maxPasswordLength;s&&(n.meetsMinPasswordLength=e.length>=s),l&&(n.meetsMaxPasswordLength=e.length<=l)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let s;for(let l=0;l<e.length;l++)s=e.charAt(l),this.updatePasswordCharacterOptionsStatuses(n,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,n,s,l,u){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=l)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=u))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lT{constructor(e,n,s,l){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=s,this.config=l,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new cm(this),this.idTokenSubscription=new cm(this),this.beforeStateQueue=new rT(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=t_,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=l.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=un(n)),this._initializationPromise=this.queue(async()=>{var s,l;if(!this._deleted&&(this.persistenceManager=await ei.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((l=this.currentUser)===null||l===void 0?void 0:l.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await o_(this,{idToken:e}),s=await an._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(s)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(sn(this.app)){const d=this.app.settings.authIdToken;return d?new Promise(h=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(d).then(h,h))}):this.directlySetCurrentUser(null)}const s=await this.assertedPersistence.getCurrentUser();let l=s,u=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const d=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,h=l==null?void 0:l._redirectEventId,m=await this.tryRedirectSignIn(e);(!d||d===h)&&(m!=null&&m.user)&&(l=m.user,u=!0)}if(!l)return this.directlySetCurrentUser(null);if(!l._redirectEventId){if(u)try{await this.beforeStateQueue.runMiddleware(l)}catch(d){l=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(d))}return l?this.reloadAndSetCurrentUserOrClear(l):this.directlySetCurrentUser(null)}return K(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===l._redirectEventId?this.directlySetCurrentUser(l):this.reloadAndSetCurrentUserOrClear(l)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await wl(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=WI()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(sn(this.app))return Promise.reject(Bn(this));const n=e?vt(e):null;return n&&K(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&K(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return sn(this.app)?Promise.reject(Bn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return sn(this.app)?Promise.reject(Bn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(un(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await iT(this),n=new oT(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Is("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(s.tenantId=this.tenantId),await eT(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&un(e)||this._popupRedirectResolver;K(n,this,"argument-error"),this.redirectPersistenceManager=await ei.create(this,[un(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,l){if(this._deleted)return()=>{};const u=typeof n=="function"?n:n.next.bind(n);let d=!1;const h=this._isInitialized?Promise.resolve():this._initializationPromise;if(K(h,this,"internal-error"),h.then(()=>{d||u(this.currentUser)}),typeof n=="function"){const m=e.addObserver(n,s,l);return()=>{d=!0,m()}}else{const m=e.addObserver(n);return()=>{d=!0,m()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return K(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=__(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());s&&(n["X-Firebase-Client"]=s);const l=await this._getAppCheckToken();return l&&(n["X-Firebase-AppCheck"]=l),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&bI(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function hi(i){return vt(i)}class cm{constructor(e){this.auth=e,this.observer=null,this.addObserver=aw(n=>this.observer=n)}get next(){return K(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Dl={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function aT(i){Dl=i}function y_(i){return Dl.loadJS(i)}function uT(){return Dl.recaptchaEnterpriseScript}function cT(){return Dl.gapiScript}function dT(i){return`__${i}${Math.floor(Math.random()*1e6)}`}class fT{constructor(){this.enterprise=new hT}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class hT{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const pT="recaptcha-enterprise",v_="NO_RECAPTCHA";class mT{constructor(e){this.type=pT,this.auth=hi(e)}async verify(e="verify",n=!1){async function s(u){if(!n){if(u.tenantId==null&&u._agentRecaptchaConfig!=null)return u._agentRecaptchaConfig.siteKey;if(u.tenantId!=null&&u._tenantRecaptchaConfigs[u.tenantId]!==void 0)return u._tenantRecaptchaConfigs[u.tenantId].siteKey}return new Promise(async(d,h)=>{GI(u,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(m=>{if(m.recaptchaKey===void 0)h(new Error("recaptcha Enterprise site key undefined"));else{const g=new $I(m);return u.tenantId==null?u._agentRecaptchaConfig=g:u._tenantRecaptchaConfigs[u.tenantId]=g,d(g.siteKey)}}).catch(m=>{h(m)})})}function l(u,d,h){const m=window.grecaptcha;sm(m)?m.enterprise.ready(()=>{m.enterprise.execute(u,{action:e}).then(g=>{d(g)}).catch(()=>{d(v_)})}):h(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new fT().execute("siteKey",{action:"verify"}):new Promise((u,d)=>{s(this.auth).then(h=>{if(!n&&sm(window.grecaptcha))l(h,u,d);else{if(typeof window>"u"){d(new Error("RecaptchaVerifier is only supported in browser"));return}let m=uT();m.length!==0&&(m+=h),y_(m).then(()=>{l(h,u,d)}).catch(g=>{d(g)})}}).catch(h=>{d(h)})})}}async function dm(i,e,n,s=!1,l=!1){const u=new mT(i);let d;if(l)d=v_;else try{d=await u.verify(n)}catch{d=await u.verify(n,!0)}const h=Object.assign({},e);if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in h){const m=h.phoneEnrollmentInfo.phoneNumber,g=h.phoneEnrollmentInfo.recaptchaToken;Object.assign(h,{phoneEnrollmentInfo:{phoneNumber:m,recaptchaToken:g,captchaResponse:d,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in h){const m=h.phoneSignInInfo.recaptchaToken;Object.assign(h,{phoneSignInInfo:{recaptchaToken:m,captchaResponse:d,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return h}return s?Object.assign(h,{captchaResp:d}):Object.assign(h,{captchaResponse:d}),Object.assign(h,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(h,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),h}async function fm(i,e,n,s,l){var u;if(!((u=i._getRecaptchaConfig())===null||u===void 0)&&u.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const d=await dm(i,e,n,n==="getOobCode");return s(i,d)}else return s(i,e).catch(async d=>{if(d.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const h=await dm(i,e,n,n==="getOobCode");return s(i,h)}else return Promise.reject(d)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gT(i,e){const n=Cc(i,"auth");if(n.isInitialized()){const l=n.getImmediate(),u=n.getOptions();if(il(u,e??{}))return l;Wt(l,"already-initialized")}return n.initialize({options:e})}function _T(i,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(un);e!=null&&e.errorMap&&i._updateErrorMap(e.errorMap),i._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function yT(i,e,n){const s=hi(i);K(s._canInitEmulator,s,"emulator-config-failed"),K(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const l=!1,u=w_(e),{host:d,port:h}=vT(e),m=h===null?"":`:${h}`;s.config.emulator={url:`${u}//${d}${m}/`},s.settings.appVerificationDisabledForTesting=!0,s.emulatorConfig=Object.freeze({host:d,port:h,protocol:u.replace(":",""),options:Object.freeze({disableWarnings:l})}),wT()}function w_(i){const e=i.indexOf(":");return e<0?"":i.substr(0,e+1)}function vT(i){const e=w_(i),n=/(\/\/)?([^?#/]+)/.exec(i.substr(e.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",l=/^(\[[^\]]+\])(:|$)/.exec(s);if(l){const u=l[1];return{host:u,port:hm(s.substr(u.length+1))}}else{const[u,d]=s.split(":");return{host:u,port:hm(d)}}}function hm(i){if(!i)return null;const e=Number(i);return isNaN(e)?null:e}function wT(){function i(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",i):i())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sd{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return ln("not implemented")}_getIdTokenResponse(e){return ln("not implemented")}_linkToIdToken(e,n){return ln("not implemented")}_getReauthenticationResolver(e){return ln("not implemented")}}async function ET(i,e){return qn(i,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ST(i,e){return xl(i,"POST","/v1/accounts:signInWithPassword",wr(i,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function CT(i,e){return xl(i,"POST","/v1/accounts:signInWithEmailLink",wr(i,e))}async function IT(i,e){return xl(i,"POST","/v1/accounts:signInWithEmailLink",wr(i,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cs extends sd{constructor(e,n,s,l=null){super("password",s),this._email=e,this._password=n,this._tenantId=l}static _fromEmailAndPassword(e,n){return new Cs(e,n,"password")}static _fromEmailAndCode(e,n,s=null){return new Cs(e,n,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return fm(e,n,"signInWithPassword",ST);case"emailLink":return CT(e,{email:this._email,oobCode:this._password});default:Wt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const s={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return fm(e,s,"signUpPassword",ET);case"emailLink":return IT(e,{idToken:n,email:this._email,oobCode:this._password});default:Wt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ti(i,e){return xl(i,"POST","/v1/accounts:signInWithIdp",wr(i,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TT="http://localhost";class _r extends sd{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new _r(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Wt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:l}=n,u=ed(n,["providerId","signInMethod"]);if(!s||!l)return null;const d=new _r(s,l);return d.idToken=u.idToken||void 0,d.accessToken=u.accessToken||void 0,d.secret=u.secret,d.nonce=u.nonce,d.pendingToken=u.pendingToken||null,d}_getIdTokenResponse(e){const n=this.buildRequest();return ti(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,ti(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,ti(e,n)}buildRequest(){const e={requestUri:TT,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=ui(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kT(i){switch(i){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function RT(i){const e=ss(os(i)).link,n=e?ss(os(e)).deep_link_id:null,s=ss(os(i)).deep_link_id;return(s?ss(os(s)).link:null)||s||n||e||i}class od{constructor(e){var n,s,l,u,d,h;const m=ss(os(e)),g=(n=m.apiKey)!==null&&n!==void 0?n:null,E=(s=m.oobCode)!==null&&s!==void 0?s:null,w=kT((l=m.mode)!==null&&l!==void 0?l:null);K(g&&E&&w,"argument-error"),this.apiKey=g,this.operation=w,this.code=E,this.continueUrl=(u=m.continueUrl)!==null&&u!==void 0?u:null,this.languageCode=(d=m.languageCode)!==null&&d!==void 0?d:null,this.tenantId=(h=m.tenantId)!==null&&h!==void 0?h:null}static parseLink(e){const n=RT(e);try{return new od(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pi{constructor(){this.providerId=pi.PROVIDER_ID}static credential(e,n){return Cs._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const s=od.parseLink(n);return K(s,"argument-error"),Cs._fromEmailAndCode(e,s.code,s.tenantId)}}pi.PROVIDER_ID="password";pi.EMAIL_PASSWORD_SIGN_IN_METHOD="password";pi.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E_{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xs extends E_{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mn extends xs{constructor(){super("facebook.com")}static credential(e){return _r._fromParams({providerId:Mn.PROVIDER_ID,signInMethod:Mn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Mn.credentialFromTaggedObject(e)}static credentialFromError(e){return Mn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Mn.credential(e.oauthAccessToken)}catch{return null}}}Mn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Mn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fn extends xs{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return _r._fromParams({providerId:Fn.PROVIDER_ID,signInMethod:Fn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Fn.credentialFromTaggedObject(e)}static credentialFromError(e){return Fn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return Fn.credential(n,s)}catch{return null}}}Fn.GOOGLE_SIGN_IN_METHOD="google.com";Fn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bn extends xs{constructor(){super("github.com")}static credential(e){return _r._fromParams({providerId:bn.PROVIDER_ID,signInMethod:bn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return bn.credentialFromTaggedObject(e)}static credentialFromError(e){return bn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return bn.credential(e.oauthAccessToken)}catch{return null}}}bn.GITHUB_SIGN_IN_METHOD="github.com";bn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Un extends xs{constructor(){super("twitter.com")}static credential(e,n){return _r._fromParams({providerId:Un.PROVIDER_ID,signInMethod:Un.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Un.credentialFromTaggedObject(e)}static credentialFromError(e){return Un.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return Un.credential(n,s)}catch{return null}}}Un.TWITTER_SIGN_IN_METHOD="twitter.com";Un.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class li{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,l=!1){const u=await an._fromIdTokenResponse(e,s,l),d=pm(s);return new li({user:u,providerId:d,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const l=pm(s);return new li({user:e,providerId:l,_tokenResponse:s,operationType:n})}}function pm(i){return i.providerId?i.providerId:"phoneNumber"in i?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class El extends Gn{constructor(e,n,s,l){var u;super(n.code,n.message),this.operationType=s,this.user=l,Object.setPrototypeOf(this,El.prototype),this.customData={appName:e.name,tenantId:(u=e.tenantId)!==null&&u!==void 0?u:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,l){return new El(e,n,s,l)}}function S_(i,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(i):n._getIdTokenResponse(i)).catch(u=>{throw u.code==="auth/multi-factor-auth-required"?El._fromErrorAndOperation(i,u,e,s):u})}async function NT(i,e,n=!1){const s=await Ss(i,e._linkToIdToken(i.auth,await i.getIdToken()),n);return li._forOperation(i,"link",s)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function PT(i,e,n=!1){const{auth:s}=i;if(sn(s.app))return Promise.reject(Bn(s));const l="reauthenticate";try{const u=await Ss(i,S_(s,l,e,i),n);K(u.idToken,s,"internal-error");const d=rd(u.idToken);K(d,s,"internal-error");const{sub:h}=d;return K(i.uid===h,s,"user-mismatch"),li._forOperation(i,l,u)}catch(u){throw(u==null?void 0:u.code)==="auth/user-not-found"&&Wt(s,"user-mismatch"),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function C_(i,e,n=!1){if(sn(i.app))return Promise.reject(Bn(i));const s="signIn",l=await S_(i,s,e),u=await li._fromIdTokenResponse(i,s,l);return n||await i._updateCurrentUser(u.user),u}async function AT(i,e){return C_(hi(i),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function OT(i){const e=hi(i);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}function xT(i,e,n){return sn(i.app)?Promise.reject(Bn(i)):AT(vt(i),pi.credential(e,n)).catch(async s=>{throw s.code==="auth/password-does-not-meet-requirements"&&OT(i),s})}function DT(i,e,n,s){return vt(i).onIdTokenChanged(e,n,s)}function LT(i,e,n){return vt(i).beforeAuthStateChanged(e,n)}function MT(i,e,n,s){return vt(i).onAuthStateChanged(e,n,s)}function FT(i){return vt(i).signOut()}const Sl="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I_{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Sl,"1"),this.storage.removeItem(Sl),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bT=1e3,UT=10;class T_ extends I_{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=g_(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),l=this.localCache[n];s!==l&&e(n,l,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((d,h,m)=>{this.notifyListeners(d,m)});return}const s=e.key;n?this.detachListener():this.stopPolling();const l=()=>{const d=this.storage.getItem(s);!n&&this.localCache[s]===d||this.notifyListeners(s,d)},u=this.storage.getItem(s);nT()&&u!==e.newValue&&e.newValue!==e.oldValue?setTimeout(l,UT):l()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const l of Array.from(s))l(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},bT)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}T_.type="LOCAL";const zT=T_;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k_ extends I_{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}k_.type="SESSION";const R_=k_;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function WT(i){return Promise.all(i.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ll{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(l=>l.isListeningto(e));if(n)return n;const s=new Ll(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:l,data:u}=n.data,d=this.handlersMap[l];if(!(d!=null&&d.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:l});const h=Array.from(d).map(async g=>g(n.origin,u)),m=await WT(h);n.ports[0].postMessage({status:"done",eventId:s,eventType:l,response:m})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ll.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ld(i="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return i+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jT{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const l=typeof MessageChannel<"u"?new MessageChannel:null;if(!l)throw new Error("connection_unavailable");let u,d;return new Promise((h,m)=>{const g=ld("",20);l.port1.start();const E=setTimeout(()=>{m(new Error("unsupported_event"))},s);d={messageChannel:l,onMessage(w){const T=w;if(T.data.eventId===g)switch(T.data.status){case"ack":clearTimeout(E),u=setTimeout(()=>{m(new Error("timeout"))},3e3);break;case"done":clearTimeout(u),h(T.data.response);break;default:clearTimeout(E),clearTimeout(u),m(new Error("invalid_response"));break}}},this.handlers.add(d),l.port1.addEventListener("message",d.onMessage),this.target.postMessage({eventType:e,eventId:g,data:n},[l.port2])}).finally(()=>{d&&this.removeMessageHandler(d)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qt(){return window}function VT(i){Qt().location.href=i}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function N_(){return typeof Qt().WorkerGlobalScope<"u"&&typeof Qt().importScripts=="function"}async function BT(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function HT(){var i;return((i=navigator==null?void 0:navigator.serviceWorker)===null||i===void 0?void 0:i.controller)||null}function $T(){return N_()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const P_="firebaseLocalStorageDb",GT=1,Cl="firebaseLocalStorage",A_="fbase_key";class Ds{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Ml(i,e){return i.transaction([Cl],e?"readwrite":"readonly").objectStore(Cl)}function KT(){const i=indexedDB.deleteDatabase(P_);return new Ds(i).toPromise()}function mc(){const i=indexedDB.open(P_,GT);return new Promise((e,n)=>{i.addEventListener("error",()=>{n(i.error)}),i.addEventListener("upgradeneeded",()=>{const s=i.result;try{s.createObjectStore(Cl,{keyPath:A_})}catch(l){n(l)}}),i.addEventListener("success",async()=>{const s=i.result;s.objectStoreNames.contains(Cl)?e(s):(s.close(),await KT(),e(await mc()))})})}async function mm(i,e,n){const s=Ml(i,!0).put({[A_]:e,value:n});return new Ds(s).toPromise()}async function qT(i,e){const n=Ml(i,!1).get(e),s=await new Ds(n).toPromise();return s===void 0?null:s.value}function gm(i,e){const n=Ml(i,!0).delete(e);return new Ds(n).toPromise()}const QT=800,YT=3;class O_{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await mc(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>YT)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return N_()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ll._getInstance($T()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await BT(),!this.activeServiceWorker)return;this.sender=new jT(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((n=s[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||HT()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await mc();return await mm(e,Sl,"1"),await gm(e,Sl),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>mm(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>qT(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>gm(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(l=>{const u=Ml(l,!1).getAll();return new Ds(u).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;if(e.length!==0)for(const{fbase_key:l,value:u}of e)s.add(l),JSON.stringify(this.localCache[l])!==JSON.stringify(u)&&(this.notifyListeners(l,u),n.push(l));for(const l of Object.keys(this.localCache))this.localCache[l]&&!s.has(l)&&(this.notifyListeners(l,null),n.push(l));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const l of Array.from(s))l(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),QT)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}O_.type="LOCAL";const XT=O_;new Os(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function JT(i,e){return e?un(e):(K(i._popupRedirectResolver,i,"argument-error"),i._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ad extends sd{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ti(e,this._buildIdpRequest())}_linkToIdToken(e,n){return ti(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return ti(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function ZT(i){return C_(i.auth,new ad(i),i.bypassAuthState)}function ek(i){const{auth:e,user:n}=i;return K(n,e,"internal-error"),PT(n,new ad(i),i.bypassAuthState)}async function tk(i){const{auth:e,user:n}=i;return K(n,e,"internal-error"),NT(n,new ad(i),i.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x_{constructor(e,n,s,l,u=!1){this.auth=e,this.resolver=s,this.user=l,this.bypassAuthState=u,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:l,tenantId:u,error:d,type:h}=e;if(d){this.reject(d);return}const m={auth:this.auth,requestUri:n,sessionId:s,tenantId:u||void 0,postBody:l||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(h)(m))}catch(g){this.reject(g)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return ZT;case"linkViaPopup":case"linkViaRedirect":return tk;case"reauthViaPopup":case"reauthViaRedirect":return ek;default:Wt(this.auth,"internal-error")}}resolve(e){hn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){hn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nk=new Os(2e3,1e4);class Qr extends x_{constructor(e,n,s,l,u){super(e,n,l,u),this.provider=s,this.authWindow=null,this.pollId=null,Qr.currentPopupAction&&Qr.currentPopupAction.cancel(),Qr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return K(e,this.auth,"internal-error"),e}async onExecution(){hn(this.filter.length===1,"Popup operations only handle one event");const e=ld();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(qt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(qt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Qr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if(!((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(qt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,nk.get())};e()}}Qr.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rk="pendingRedirect",Zo=new Map;class ik extends x_{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=Zo.get(this.auth._key());if(!e){try{const s=await sk(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}Zo.set(this.auth._key(),e)}return this.bypassAuthState||Zo.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function sk(i,e){const n=ak(e),s=lk(i);if(!await s._isAvailable())return!1;const l=await s._get(n)==="true";return await s._remove(n),l}function ok(i,e){Zo.set(i._key(),e)}function lk(i){return un(i._redirectPersistence)}function ak(i){return Jo(rk,i.config.apiKey,i.name)}async function uk(i,e,n=!1){if(sn(i.app))return Promise.reject(Bn(i));const s=hi(i),l=JT(s,e),d=await new ik(s,l,n).execute();return d&&!n&&(delete d.user._redirectEventId,await s._persistUserIfCurrent(d.user),await s._setRedirectUser(null,e)),d}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ck=10*60*1e3;class dk{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!fk(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!D_(e)){const l=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(qt(this.auth,l))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=ck&&this.cachedEventUids.clear(),this.cachedEventUids.has(_m(e))}saveEventToCache(e){this.cachedEventUids.add(_m(e)),this.lastProcessedEventTime=Date.now()}}function _m(i){return[i.type,i.eventId,i.sessionId,i.tenantId].filter(e=>e).join("-")}function D_({type:i,error:e}){return i==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function fk(i){switch(i.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return D_(i);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hk(i,e={}){return qn(i,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pk=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,mk=/^https?/;async function gk(i){if(i.config.emulator)return;const{authorizedDomains:e}=await hk(i);for(const n of e)try{if(_k(n))return}catch{}Wt(i,"unauthorized-domain")}function _k(i){const e=hc(),{protocol:n,hostname:s}=new URL(e);if(i.startsWith("chrome-extension://")){const d=new URL(i);return d.hostname===""&&s===""?n==="chrome-extension:"&&i.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&d.hostname===s}if(!mk.test(n))return!1;if(pk.test(i))return s===i;const l=i.replace(/\./g,"\\.");return new RegExp("^(.+\\."+l+"|"+l+")$","i").test(s)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yk=new Os(3e4,6e4);function ym(){const i=Qt().___jsl;if(i!=null&&i.H){for(const e of Object.keys(i.H))if(i.H[e].r=i.H[e].r||[],i.H[e].L=i.H[e].L||[],i.H[e].r=[...i.H[e].L],i.CP)for(let n=0;n<i.CP.length;n++)i.CP[n]=null}}function vk(i){return new Promise((e,n)=>{var s,l,u;function d(){ym(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{ym(),n(qt(i,"network-request-failed"))},timeout:yk.get()})}if(!((l=(s=Qt().gapi)===null||s===void 0?void 0:s.iframes)===null||l===void 0)&&l.Iframe)e(gapi.iframes.getContext());else if(!((u=Qt().gapi)===null||u===void 0)&&u.load)d();else{const h=dT("iframefcb");return Qt()[h]=()=>{gapi.load?d():n(qt(i,"network-request-failed"))},y_(`${cT()}?onload=${h}`).catch(m=>n(m))}}).catch(e=>{throw el=null,e})}let el=null;function wk(i){return el=el||vk(i),el}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ek=new Os(5e3,15e3),Sk="__/auth/iframe",Ck="emulator/auth/iframe",Ik={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Tk=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function kk(i){const e=i.config;K(e.authDomain,i,"auth-domain-config-required");const n=e.emulator?nd(e,Ck):`https://${i.config.authDomain}/${Sk}`,s={apiKey:e.apiKey,appName:i.name,v:ci},l=Tk.get(i.config.apiHost);l&&(s.eid=l);const u=i._getFrameworks();return u.length&&(s.fw=u.join(",")),`${n}?${ui(s).slice(1)}`}async function Rk(i){const e=await wk(i),n=Qt().gapi;return K(n,i,"internal-error"),e.open({where:document.body,url:kk(i),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Ik,dontclear:!0},s=>new Promise(async(l,u)=>{await s.restyle({setHideOnLeave:!1});const d=qt(i,"network-request-failed"),h=Qt().setTimeout(()=>{u(d)},Ek.get());function m(){Qt().clearTimeout(h),l(s)}s.ping(m).then(m,()=>{u(d)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nk={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Pk=500,Ak=600,Ok="_blank",xk="http://localhost";class vm{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Dk(i,e,n,s=Pk,l=Ak){const u=Math.max((window.screen.availHeight-l)/2,0).toString(),d=Math.max((window.screen.availWidth-s)/2,0).toString();let h="";const m=Object.assign(Object.assign({},Nk),{width:s.toString(),height:l.toString(),top:u,left:d}),g=Ze().toLowerCase();n&&(h=d_(g)?Ok:n),u_(g)&&(e=e||xk,m.scrollbars="yes");const E=Object.entries(m).reduce((T,[D,F])=>`${T}${D}=${F},`,"");if(tT(g)&&h!=="_self")return Lk(e||"",h),new vm(null);const w=window.open(e||"",h,E);K(w,i,"popup-blocked");try{w.focus()}catch{}return new vm(w)}function Lk(i,e){const n=document.createElement("a");n.href=i,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mk="__/auth/handler",Fk="emulator/auth/handler",bk=encodeURIComponent("fac");async function wm(i,e,n,s,l,u){K(i.config.authDomain,i,"auth-domain-config-required"),K(i.config.apiKey,i,"invalid-api-key");const d={apiKey:i.config.apiKey,appName:i.name,authType:n,redirectUrl:s,v:ci,eventId:l};if(e instanceof E_){e.setDefaultLanguage(i.languageCode),d.providerId=e.providerId||"",qu(e.getCustomParameters())||(d.customParameters=JSON.stringify(e.getCustomParameters()));for(const[E,w]of Object.entries({}))d[E]=w}if(e instanceof xs){const E=e.getScopes().filter(w=>w!=="");E.length>0&&(d.scopes=E.join(","))}i.tenantId&&(d.tid=i.tenantId);const h=d;for(const E of Object.keys(h))h[E]===void 0&&delete h[E];const m=await i._getAppCheckToken(),g=m?`#${bk}=${encodeURIComponent(m)}`:"";return`${Uk(i)}?${ui(h).slice(1)}${g}`}function Uk({config:i}){return i.emulator?nd(i,Fk):`https://${i.authDomain}/${Mk}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ku="webStorageSupport";class zk{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=R_,this._completeRedirectFn=uk,this._overrideRedirectResult=ok}async _openPopup(e,n,s,l){var u;hn((u=this.eventManagers[e._key()])===null||u===void 0?void 0:u.manager,"_initialize() not called before _openPopup()");const d=await wm(e,n,s,hc(),l);return Dk(e,d,ld())}async _openRedirect(e,n,s,l){await this._originValidation(e);const u=await wm(e,n,s,hc(),l);return VT(u),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:l,promise:u}=this.eventManagers[n];return l?Promise.resolve(l):(hn(u,"If manager is not set, promise should be"),u)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await Rk(e),s=new dk(e);return n.register("authEvent",l=>(K(l==null?void 0:l.authEvent,e,"invalid-auth-event"),{status:s.onEvent(l.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Ku,{type:Ku},l=>{var u;const d=(u=l==null?void 0:l[0])===null||u===void 0?void 0:u[Ku];d!==void 0&&n(!!d),Wt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=gk(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return g_()||c_()||id()}}const Wk=zk;var Em="@firebase/auth",Sm="1.8.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jk{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){K(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vk(i){switch(i){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Bk(i){ri(new fr("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),l=e.getProvider("heartbeat"),u=e.getProvider("app-check-internal"),{apiKey:d,authDomain:h}=s.options;K(d&&!d.includes(":"),"invalid-api-key",{appName:s.name});const m={apiKey:d,authDomain:h,clientPlatform:i,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:__(i)},g=new lT(s,l,u,m);return _T(g,n),g},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),ri(new fr("auth-internal",e=>{const n=hi(e.getProvider("auth").getImmediate());return(s=>new jk(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),jn(Em,Sm,Vk(i)),jn(Em,Sm,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hk=5*60,$k=Am("authIdTokenMaxAge")||Hk;let Cm=null;const Gk=i=>async e=>{const n=e&&await e.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>$k)return;const l=n==null?void 0:n.token;Cm!==l&&(Cm=l,await fetch(i,{method:l?"POST":"DELETE",headers:l?{Authorization:`Bearer ${l}`}:{}}))};function Kk(i=Fm()){const e=Cc(i,"auth");if(e.isInitialized())return e.getImmediate();const n=gT(i,{popupRedirectResolver:Wk,persistence:[XT,zT,R_]}),s=Am("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const u=new URL(s,location.origin);if(location.origin===u.origin){const d=Gk(u.toString());LT(n,d,()=>d(n.currentUser)),DT(n,h=>d(h))}}const l=Nm("auth");return l&&yT(n,`http://${l}`),n}function qk(){var i,e;return(e=(i=document.getElementsByTagName("head"))===null||i===void 0?void 0:i[0])!==null&&e!==void 0?e:document}aT({loadJS(i){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",i),s.onload=e,s.onerror=l=>{const u=qt("internal-error");u.customData=l,n(u)},s.type="text/javascript",s.charset="UTF-8",qk().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Bk("Browser");const Qk=()=>{const i=Ic(Zg),e=Kk(i),[n,s]=$o.useState(""),[l,u]=$o.useState(""),[d,h]=$o.useState(null);$o.useEffect(()=>{MT(e,g=>{h(g||null)})});const m=()=>{xT(e,n,l).then(g=>{const E=g.user;console.log(E)}).catch(g=>{g.code,g.message})};return ve.jsxs("div",{children:[!d&&ve.jsx("input",{type:"text",value:n,onChange:g=>s(g.target.value)}),!d&&ve.jsx("input",{type:"password",value:l,onChange:g=>u(g.target.value)}),!d&&ve.jsx("button",{onClick:m,children:"Login"}),d&&ve.jsxs("span",{children:["Welcome! ",d.email]}),d&&ve.jsx("button",{variant:"outlined",color:"primary",onClick:()=>FT(e),children:"Logout"})]})};function Yk(){return ve.jsxs(ve.Fragment,{children:[ve.jsx(Qk,{}),ve.jsx("h1",{children:"Orders"}),ve.jsx(MI,{})]})}zv.createRoot(document.getElementById("root")).render(ve.jsx(ls.StrictMode,{children:ve.jsx(Yk,{})}));
