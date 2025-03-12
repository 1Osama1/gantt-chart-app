(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Ka(e){const t=Object.create(null);for(const n of e.split(","))t[n]=1;return n=>n in t}const bt={},gr=[],ke=()=>{},fm=()=>!1,Hi=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),za=e=>e.startsWith("onUpdate:"),ce=Object.assign,Wa=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},dm=Object.prototype.hasOwnProperty,wt=(e,t)=>dm.call(e,t),it=Array.isArray,_r=e=>Rs(e)==="[object Map]",Ki=e=>Rs(e)==="[object Set]",Mc=e=>Rs(e)==="[object Date]",ct=e=>typeof e=="function",kt=e=>typeof e=="string",Ue=e=>typeof e=="symbol",Ct=e=>e!==null&&typeof e=="object",Ch=e=>(Ct(e)||ct(e))&&ct(e.then)&&ct(e.catch),Ph=Object.prototype.toString,Rs=e=>Ph.call(e),pm=e=>Rs(e).slice(8,-1),Vh=e=>Rs(e)==="[object Object]",Ga=e=>kt(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,ss=Ka(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),zi=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},mm=/-(\w)/g,Tn=zi(e=>e.replace(mm,(t,n)=>n?n.toUpperCase():"")),gm=/\B([A-Z])/g,Cn=zi(e=>e.replace(gm,"-$1").toLowerCase()),Dh=zi(e=>e.charAt(0).toUpperCase()+e.slice(1)),$o=zi(e=>e?`on${Dh(e)}`:""),pn=(e,t)=>!Object.is(e,t),li=(e,...t)=>{for(let n=0;n<e.length;n++)e[n](...t)},xh=(e,t,n,r=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:r,value:n})},vi=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let Lc;const Wi=()=>Lc||(Lc=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Gi(e){if(it(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],s=kt(r)?Tm(r):Gi(r);if(s)for(const i in s)t[i]=s[i]}return t}else if(kt(e)||Ct(e))return e}const _m=/;(?![^(]*\))/g,ym=/:([^]+)/,vm=/\/\*[^]*?\*\//g;function Tm(e){const t={};return e.replace(vm,"").split(_m).forEach(n=>{if(n){const r=n.split(ym);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t}function Qa(e){let t="";if(kt(e))t=e;else if(it(e))for(let n=0;n<e.length;n++){const r=Qa(e[n]);r&&(t+=r+" ")}else if(Ct(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const Em="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",wm=Ka(Em);function Nh(e){return!!e||e===""}function Im(e,t){if(e.length!==t.length)return!1;let n=!0;for(let r=0;n&&r<e.length;r++)n=Qi(e[r],t[r]);return n}function Qi(e,t){if(e===t)return!0;let n=Mc(e),r=Mc(t);if(n||r)return n&&r?e.getTime()===t.getTime():!1;if(n=Ue(e),r=Ue(t),n||r)return e===t;if(n=it(e),r=it(t),n||r)return n&&r?Im(e,t):!1;if(n=Ct(e),r=Ct(t),n||r){if(!n||!r)return!1;const s=Object.keys(e).length,i=Object.keys(t).length;if(s!==i)return!1;for(const a in e){const l=e.hasOwnProperty(a),u=t.hasOwnProperty(a);if(l&&!u||!l&&u||!Qi(e[a],t[a]))return!1}}return String(e)===String(t)}function Am(e,t){return e.findIndex(n=>Qi(n,t))}const kh=e=>!!(e&&e.__v_isRef===!0),pe=e=>kt(e)?e:e==null?"":it(e)||Ct(e)&&(e.toString===Ph||!ct(e.toString))?kh(e)?pe(e.value):JSON.stringify(e,Oh,2):String(e),Oh=(e,t)=>kh(t)?Oh(e,t.value):_r(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[r,s],i)=>(n[jo(r,i)+" =>"]=s,n),{})}:Ki(t)?{[`Set(${t.size})`]:[...t.values()].map(n=>jo(n))}:Ue(t)?jo(t):Ct(t)&&!it(t)&&!Vh(t)?String(t):t,jo=(e,t="")=>{var n;return Ue(e)?`Symbol(${(n=e.description)!=null?n:t})`:e};/**
* @vue/reactivity v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let ge;class bm{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=ge,!t&&ge&&(this.index=(ge.scopes||(ge.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let t,n;if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].pause();for(t=0,n=this.effects.length;t<n;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let t,n;if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].resume();for(t=0,n=this.effects.length;t<n;t++)this.effects[t].resume()}}run(t){if(this._active){const n=ge;try{return ge=this,t()}finally{ge=n}}}on(){ge=this}off(){ge=this.parent}stop(t){if(this._active){this._active=!1;let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(this.effects.length=0,n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!t){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function Rm(){return ge}let Rt;const qo=new WeakSet;class Mh{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,ge&&ge.active&&ge.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,qo.has(this)&&(qo.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Fh(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Fc(this),Uh(this);const t=Rt,n=Ce;Rt=this,Ce=!0;try{return this.fn()}finally{Bh(this),Rt=t,Ce=n,this.flags&=-3}}stop(){if(this.flags&1){for(let t=this.deps;t;t=t.nextDep)Ja(t);this.deps=this.depsTail=void 0,Fc(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?qo.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){fa(this)&&this.run()}get dirty(){return fa(this)}}let Lh=0,is,os;function Fh(e,t=!1){if(e.flags|=8,t){e.next=os,os=e;return}e.next=is,is=e}function Xa(){Lh++}function Ya(){if(--Lh>0)return;if(os){let t=os;for(os=void 0;t;){const n=t.next;t.next=void 0,t.flags&=-9,t=n}}let e;for(;is;){let t=is;for(is=void 0;t;){const n=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(r){e||(e=r)}t=n}}if(e)throw e}function Uh(e){for(let t=e.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function Bh(e){let t,n=e.depsTail,r=n;for(;r;){const s=r.prevDep;r.version===-1?(r===n&&(n=s),Ja(r),Sm(r)):t=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=s}e.deps=t,e.depsTail=n}function fa(e){for(let t=e.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&($h(t.dep.computed)||t.dep.version!==t.version))return!0;return!!e._dirty}function $h(e){if(e.flags&4&&!(e.flags&16)||(e.flags&=-17,e.globalVersion===ms))return;e.globalVersion=ms;const t=e.dep;if(e.flags|=2,t.version>0&&!e.isSSR&&e.deps&&!fa(e)){e.flags&=-3;return}const n=Rt,r=Ce;Rt=e,Ce=!0;try{Uh(e);const s=e.fn(e._value);(t.version===0||pn(s,e._value))&&(e._value=s,t.version++)}catch(s){throw t.version++,s}finally{Rt=n,Ce=r,Bh(e),e.flags&=-3}}function Ja(e,t=!1){const{dep:n,prevSub:r,nextSub:s}=e;if(r&&(r.nextSub=s,e.prevSub=void 0),s&&(s.prevSub=r,e.nextSub=void 0),n.subs===e&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)Ja(i,!0)}!t&&!--n.sc&&n.map&&n.map.delete(n.key)}function Sm(e){const{prevDep:t,nextDep:n}=e;t&&(t.nextDep=n,e.prevDep=void 0),n&&(n.prevDep=t,e.nextDep=void 0)}let Ce=!0;const jh=[];function Pn(){jh.push(Ce),Ce=!1}function Vn(){const e=jh.pop();Ce=e===void 0?!0:e}function Fc(e){const{cleanup:t}=e;if(e.cleanup=void 0,t){const n=Rt;Rt=void 0;try{t()}finally{Rt=n}}}let ms=0;class Cm{constructor(t,n){this.sub=t,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Za{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(t){if(!Rt||!Ce||Rt===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==Rt)n=this.activeLink=new Cm(Rt,this),Rt.deps?(n.prevDep=Rt.depsTail,Rt.depsTail.nextDep=n,Rt.depsTail=n):Rt.deps=Rt.depsTail=n,qh(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const r=n.nextDep;r.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=r),n.prevDep=Rt.depsTail,n.nextDep=void 0,Rt.depsTail.nextDep=n,Rt.depsTail=n,Rt.deps===n&&(Rt.deps=r)}return n}trigger(t){this.version++,ms++,this.notify(t)}notify(t){Xa();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{Ya()}}}function qh(e){if(e.dep.sc++,e.sub.flags&4){const t=e.dep.computed;if(t&&!e.dep.subs){t.flags|=20;for(let r=t.deps;r;r=r.nextDep)qh(r)}const n=e.dep.subs;n!==e&&(e.prevSub=n,n&&(n.nextSub=e)),e.dep.subs=e}}const da=new WeakMap,Xn=Symbol(""),pa=Symbol(""),gs=Symbol("");function ee(e,t,n){if(Ce&&Rt){let r=da.get(e);r||da.set(e,r=new Map);let s=r.get(n);s||(r.set(n,s=new Za),s.map=r,s.key=n),s.track()}}function Ye(e,t,n,r,s,i){const a=da.get(e);if(!a){ms++;return}const l=u=>{u&&u.trigger()};if(Xa(),t==="clear")a.forEach(l);else{const u=it(e),f=u&&Ga(n);if(u&&n==="length"){const d=Number(r);a.forEach((m,T)=>{(T==="length"||T===gs||!Ue(T)&&T>=d)&&l(m)})}else switch((n!==void 0||a.has(void 0))&&l(a.get(n)),f&&l(a.get(gs)),t){case"add":u?f&&l(a.get("length")):(l(a.get(Xn)),_r(e)&&l(a.get(pa)));break;case"delete":u||(l(a.get(Xn)),_r(e)&&l(a.get(pa)));break;case"set":_r(e)&&l(a.get(Xn));break}}Ya()}function ur(e){const t=Et(e);return t===e?t:(ee(t,"iterate",gs),Re(e)?t:t.map(ne))}function Xi(e){return ee(e=Et(e),"iterate",gs),e}const Pm={__proto__:null,[Symbol.iterator](){return Ho(this,Symbol.iterator,ne)},concat(...e){return ur(this).concat(...e.map(t=>it(t)?ur(t):t))},entries(){return Ho(this,"entries",e=>(e[1]=ne(e[1]),e))},every(e,t){return Ge(this,"every",e,t,void 0,arguments)},filter(e,t){return Ge(this,"filter",e,t,n=>n.map(ne),arguments)},find(e,t){return Ge(this,"find",e,t,ne,arguments)},findIndex(e,t){return Ge(this,"findIndex",e,t,void 0,arguments)},findLast(e,t){return Ge(this,"findLast",e,t,ne,arguments)},findLastIndex(e,t){return Ge(this,"findLastIndex",e,t,void 0,arguments)},forEach(e,t){return Ge(this,"forEach",e,t,void 0,arguments)},includes(...e){return Ko(this,"includes",e)},indexOf(...e){return Ko(this,"indexOf",e)},join(e){return ur(this).join(e)},lastIndexOf(...e){return Ko(this,"lastIndexOf",e)},map(e,t){return Ge(this,"map",e,t,void 0,arguments)},pop(){return Jr(this,"pop")},push(...e){return Jr(this,"push",e)},reduce(e,...t){return Uc(this,"reduce",e,t)},reduceRight(e,...t){return Uc(this,"reduceRight",e,t)},shift(){return Jr(this,"shift")},some(e,t){return Ge(this,"some",e,t,void 0,arguments)},splice(...e){return Jr(this,"splice",e)},toReversed(){return ur(this).toReversed()},toSorted(e){return ur(this).toSorted(e)},toSpliced(...e){return ur(this).toSpliced(...e)},unshift(...e){return Jr(this,"unshift",e)},values(){return Ho(this,"values",ne)}};function Ho(e,t,n){const r=Xi(e),s=r[t]();return r!==e&&!Re(e)&&(s._next=s.next,s.next=()=>{const i=s._next();return i.value&&(i.value=n(i.value)),i}),s}const Vm=Array.prototype;function Ge(e,t,n,r,s,i){const a=Xi(e),l=a!==e&&!Re(e),u=a[t];if(u!==Vm[t]){const m=u.apply(e,i);return l?ne(m):m}let f=n;a!==e&&(l?f=function(m,T){return n.call(this,ne(m),T,e)}:n.length>2&&(f=function(m,T){return n.call(this,m,T,e)}));const d=u.call(a,f,r);return l&&s?s(d):d}function Uc(e,t,n,r){const s=Xi(e);let i=n;return s!==e&&(Re(e)?n.length>3&&(i=function(a,l,u){return n.call(this,a,l,u,e)}):i=function(a,l,u){return n.call(this,a,ne(l),u,e)}),s[t](i,...r)}function Ko(e,t,n){const r=Et(e);ee(r,"iterate",gs);const s=r[t](...n);return(s===-1||s===!1)&&rl(n[0])?(n[0]=Et(n[0]),r[t](...n)):s}function Jr(e,t,n=[]){Pn(),Xa();const r=Et(e)[t].apply(e,n);return Ya(),Vn(),r}const Dm=Ka("__proto__,__v_isRef,__isVue"),Hh=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(Ue));function xm(e){Ue(e)||(e=String(e));const t=Et(this);return ee(t,"has",e),t.hasOwnProperty(e)}class Kh{constructor(t=!1,n=!1){this._isReadonly=t,this._isShallow=n}get(t,n,r){if(n==="__v_skip")return t.__v_skip;const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?jm:Qh:i?Gh:Wh).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(r)?t:void 0;const a=it(t);if(!s){let u;if(a&&(u=Pm[n]))return u;if(n==="hasOwnProperty")return xm}const l=Reflect.get(t,n,se(t)?t:r);return(Ue(n)?Hh.has(n):Dm(n))||(s||ee(t,"get",n),i)?l:se(l)?a&&Ga(n)?l:l.value:Ct(l)?s?Xh(l):el(l):l}}class zh extends Kh{constructor(t=!1){super(!1,t)}set(t,n,r,s){let i=t[n];if(!this._isShallow){const u=Yn(i);if(!Re(r)&&!Yn(r)&&(i=Et(i),r=Et(r)),!it(t)&&se(i)&&!se(r))return u?!1:(i.value=r,!0)}const a=it(t)&&Ga(n)?Number(n)<t.length:wt(t,n),l=Reflect.set(t,n,r,se(t)?t:s);return t===Et(s)&&(a?pn(r,i)&&Ye(t,"set",n,r):Ye(t,"add",n,r)),l}deleteProperty(t,n){const r=wt(t,n);t[n];const s=Reflect.deleteProperty(t,n);return s&&r&&Ye(t,"delete",n,void 0),s}has(t,n){const r=Reflect.has(t,n);return(!Ue(n)||!Hh.has(n))&&ee(t,"has",n),r}ownKeys(t){return ee(t,"iterate",it(t)?"length":Xn),Reflect.ownKeys(t)}}class Nm extends Kh{constructor(t=!1){super(!0,t)}set(t,n){return!0}deleteProperty(t,n){return!0}}const km=new zh,Om=new Nm,Mm=new zh(!0);const ma=e=>e,Js=e=>Reflect.getPrototypeOf(e);function Lm(e,t,n){return function(...r){const s=this.__v_raw,i=Et(s),a=_r(i),l=e==="entries"||e===Symbol.iterator&&a,u=e==="keys"&&a,f=s[e](...r),d=n?ma:t?ga:ne;return!t&&ee(i,"iterate",u?pa:Xn),{next(){const{value:m,done:T}=f.next();return T?{value:m,done:T}:{value:l?[d(m[0]),d(m[1])]:d(m),done:T}},[Symbol.iterator](){return this}}}}function Zs(e){return function(...t){return e==="delete"?!1:e==="clear"?void 0:this}}function Fm(e,t){const n={get(s){const i=this.__v_raw,a=Et(i),l=Et(s);e||(pn(s,l)&&ee(a,"get",s),ee(a,"get",l));const{has:u}=Js(a),f=t?ma:e?ga:ne;if(u.call(a,s))return f(i.get(s));if(u.call(a,l))return f(i.get(l));i!==a&&i.get(s)},get size(){const s=this.__v_raw;return!e&&ee(Et(s),"iterate",Xn),Reflect.get(s,"size",s)},has(s){const i=this.__v_raw,a=Et(i),l=Et(s);return e||(pn(s,l)&&ee(a,"has",s),ee(a,"has",l)),s===l?i.has(s):i.has(s)||i.has(l)},forEach(s,i){const a=this,l=a.__v_raw,u=Et(l),f=t?ma:e?ga:ne;return!e&&ee(u,"iterate",Xn),l.forEach((d,m)=>s.call(i,f(d),f(m),a))}};return ce(n,e?{add:Zs("add"),set:Zs("set"),delete:Zs("delete"),clear:Zs("clear")}:{add(s){!t&&!Re(s)&&!Yn(s)&&(s=Et(s));const i=Et(this);return Js(i).has.call(i,s)||(i.add(s),Ye(i,"add",s,s)),this},set(s,i){!t&&!Re(i)&&!Yn(i)&&(i=Et(i));const a=Et(this),{has:l,get:u}=Js(a);let f=l.call(a,s);f||(s=Et(s),f=l.call(a,s));const d=u.call(a,s);return a.set(s,i),f?pn(i,d)&&Ye(a,"set",s,i):Ye(a,"add",s,i),this},delete(s){const i=Et(this),{has:a,get:l}=Js(i);let u=a.call(i,s);u||(s=Et(s),u=a.call(i,s)),l&&l.call(i,s);const f=i.delete(s);return u&&Ye(i,"delete",s,void 0),f},clear(){const s=Et(this),i=s.size!==0,a=s.clear();return i&&Ye(s,"clear",void 0,void 0),a}}),["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=Lm(s,e,t)}),n}function tl(e,t){const n=Fm(e,t);return(r,s,i)=>s==="__v_isReactive"?!e:s==="__v_isReadonly"?e:s==="__v_raw"?r:Reflect.get(wt(n,s)&&s in r?n:r,s,i)}const Um={get:tl(!1,!1)},Bm={get:tl(!1,!0)},$m={get:tl(!0,!1)};const Wh=new WeakMap,Gh=new WeakMap,Qh=new WeakMap,jm=new WeakMap;function qm(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Hm(e){return e.__v_skip||!Object.isExtensible(e)?0:qm(pm(e))}function el(e){return Yn(e)?e:nl(e,!1,km,Um,Wh)}function Km(e){return nl(e,!1,Mm,Bm,Gh)}function Xh(e){return nl(e,!0,Om,$m,Qh)}function nl(e,t,n,r,s){if(!Ct(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const i=s.get(e);if(i)return i;const a=Hm(e);if(a===0)return e;const l=new Proxy(e,a===2?r:n);return s.set(e,l),l}function yr(e){return Yn(e)?yr(e.__v_raw):!!(e&&e.__v_isReactive)}function Yn(e){return!!(e&&e.__v_isReadonly)}function Re(e){return!!(e&&e.__v_isShallow)}function rl(e){return e?!!e.__v_raw:!1}function Et(e){const t=e&&e.__v_raw;return t?Et(t):e}function zm(e){return!wt(e,"__v_skip")&&Object.isExtensible(e)&&xh(e,"__v_skip",!0),e}const ne=e=>Ct(e)?el(e):e,ga=e=>Ct(e)?Xh(e):e;function se(e){return e?e.__v_isRef===!0:!1}function Qe(e){return Wm(e,!1)}function Wm(e,t){return se(e)?e:new Gm(e,t)}class Gm{constructor(t,n){this.dep=new Za,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?t:Et(t),this._value=n?t:ne(t),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(t){const n=this._rawValue,r=this.__v_isShallow||Re(t)||Yn(t);t=r?t:Et(t),pn(t,n)&&(this._rawValue=t,this._value=r?t:ne(t),this.dep.trigger())}}function Qm(e){return se(e)?e.value:e}const Xm={get:(e,t,n)=>t==="__v_raw"?e:Qm(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const s=e[t];return se(s)&&!se(n)?(s.value=n,!0):Reflect.set(e,t,n,r)}};function Yh(e){return yr(e)?e:new Proxy(e,Xm)}class Ym{constructor(t,n,r){this.fn=t,this.setter=n,this._value=void 0,this.dep=new Za(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=ms-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&Rt!==this)return Fh(this,!0),!0}get value(){const t=this.dep.track();return $h(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}}function Jm(e,t,n=!1){let r,s;return ct(e)?r=e:(r=e.get,s=e.set),new Ym(r,s,n)}const ti={},Ti=new WeakMap;let Kn;function Zm(e,t=!1,n=Kn){if(n){let r=Ti.get(n);r||Ti.set(n,r=[]),r.push(e)}}function tg(e,t,n=bt){const{immediate:r,deep:s,once:i,scheduler:a,augmentJob:l,call:u}=n,f=z=>s?z:Re(z)||s===!1||s===0?Je(z,1):Je(z);let d,m,T,R,D=!1,k=!1;if(se(e)?(m=()=>e.value,D=Re(e)):yr(e)?(m=()=>f(e),D=!0):it(e)?(k=!0,D=e.some(z=>yr(z)||Re(z)),m=()=>e.map(z=>{if(se(z))return z.value;if(yr(z))return f(z);if(ct(z))return u?u(z,2):z()})):ct(e)?t?m=u?()=>u(e,2):e:m=()=>{if(T){Pn();try{T()}finally{Vn()}}const z=Kn;Kn=d;try{return u?u(e,3,[R]):e(R)}finally{Kn=z}}:m=ke,t&&s){const z=m,dt=s===!0?1/0:s;m=()=>Je(z(),dt)}const F=Rm(),W=()=>{d.stop(),F&&F.active&&Wa(F.effects,d)};if(i&&t){const z=t;t=(...dt)=>{z(...dt),W()}}let G=k?new Array(e.length).fill(ti):ti;const J=z=>{if(!(!(d.flags&1)||!d.dirty&&!z))if(t){const dt=d.run();if(s||D||(k?dt.some((vt,I)=>pn(vt,G[I])):pn(dt,G))){T&&T();const vt=Kn;Kn=d;try{const I=[dt,G===ti?void 0:k&&G[0]===ti?[]:G,R];u?u(t,3,I):t(...I),G=dt}finally{Kn=vt}}}else d.run()};return l&&l(J),d=new Mh(m),d.scheduler=a?()=>a(J,!1):J,R=z=>Zm(z,!1,d),T=d.onStop=()=>{const z=Ti.get(d);if(z){if(u)u(z,4);else for(const dt of z)dt();Ti.delete(d)}},t?r?J(!0):G=d.run():a?a(J.bind(null,!0),!0):d.run(),W.pause=d.pause.bind(d),W.resume=d.resume.bind(d),W.stop=W,W}function Je(e,t=1/0,n){if(t<=0||!Ct(e)||e.__v_skip||(n=n||new Set,n.has(e)))return e;if(n.add(e),t--,se(e))Je(e.value,t,n);else if(it(e))for(let r=0;r<e.length;r++)Je(e[r],t,n);else if(Ki(e)||_r(e))e.forEach(r=>{Je(r,t,n)});else if(Vh(e)){for(const r in e)Je(e[r],t,n);for(const r of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,r)&&Je(e[r],t,n)}return e}/**
* @vue/runtime-core v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Ss(e,t,n,r){try{return r?e(...r):e()}catch(s){Yi(s,t,n)}}function Be(e,t,n,r){if(ct(e)){const s=Ss(e,t,n,r);return s&&Ch(s)&&s.catch(i=>{Yi(i,t,n)}),s}if(it(e)){const s=[];for(let i=0;i<e.length;i++)s.push(Be(e[i],t,n,r));return s}}function Yi(e,t,n,r=!0){const s=t?t.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:a}=t&&t.appContext.config||bt;if(t){let l=t.parent;const u=t.proxy,f=`https://vuejs.org/error-reference/#runtime-${n}`;for(;l;){const d=l.ec;if(d){for(let m=0;m<d.length;m++)if(d[m](e,u,f)===!1)return}l=l.parent}if(i){Pn(),Ss(i,null,10,[e,u,f]),Vn();return}}eg(e,n,s,r,a)}function eg(e,t,n,r=!0,s=!1){if(s)throw e;console.error(e)}const ae=[];let De=-1;const vr=[];let hn=null,hr=0;const Jh=Promise.resolve();let Ei=null;function Zh(e){const t=Ei||Jh;return e?t.then(this?e.bind(this):e):t}function ng(e){let t=De+1,n=ae.length;for(;t<n;){const r=t+n>>>1,s=ae[r],i=_s(s);i<e||i===e&&s.flags&2?t=r+1:n=r}return t}function sl(e){if(!(e.flags&1)){const t=_s(e),n=ae[ae.length-1];!n||!(e.flags&2)&&t>=_s(n)?ae.push(e):ae.splice(ng(t),0,e),e.flags|=1,tf()}}function tf(){Ei||(Ei=Jh.then(nf))}function rg(e){it(e)?vr.push(...e):hn&&e.id===-1?hn.splice(hr+1,0,e):e.flags&1||(vr.push(e),e.flags|=1),tf()}function Bc(e,t,n=De+1){for(;n<ae.length;n++){const r=ae[n];if(r&&r.flags&2){if(e&&r.id!==e.uid)continue;ae.splice(n,1),n--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function ef(e){if(vr.length){const t=[...new Set(vr)].sort((n,r)=>_s(n)-_s(r));if(vr.length=0,hn){hn.push(...t);return}for(hn=t,hr=0;hr<hn.length;hr++){const n=hn[hr];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}hn=null,hr=0}}const _s=e=>e.id==null?e.flags&2?-1:1/0:e.id;function nf(e){try{for(De=0;De<ae.length;De++){const t=ae[De];t&&!(t.flags&8)&&(t.flags&4&&(t.flags&=-2),Ss(t,t.i,t.i?15:14),t.flags&4||(t.flags&=-2))}}finally{for(;De<ae.length;De++){const t=ae[De];t&&(t.flags&=-2)}De=-1,ae.length=0,ef(),Ei=null,(ae.length||vr.length)&&nf()}}let be=null,rf=null;function wi(e){const t=be;return be=e,rf=e&&e.type.__scopeId||null,t}function sg(e,t=be,n){if(!t||e._n)return e;const r=(...s)=>{r._d&&Qc(-1);const i=wi(t);let a;try{a=e(...s)}finally{wi(i),r._d&&Qc(1)}return a};return r._n=!0,r._c=!0,r._d=!0,r}function un(e,t){if(be===null)return e;const n=eo(be),r=e.dirs||(e.dirs=[]);for(let s=0;s<t.length;s++){let[i,a,l,u=bt]=t[s];i&&(ct(i)&&(i={mounted:i,updated:i}),i.deep&&Je(a),r.push({dir:i,instance:n,value:a,oldValue:void 0,arg:l,modifiers:u}))}return e}function $n(e,t,n,r){const s=e.dirs,i=t&&t.dirs;for(let a=0;a<s.length;a++){const l=s[a];i&&(l.oldValue=i[a].value);let u=l.dir[r];u&&(Pn(),Be(u,n,8,[e.el,l,e,t]),Vn())}}const ig=Symbol("_vte"),og=e=>e.__isTeleport;function il(e,t){e.shapeFlag&6&&e.component?(e.transition=t,il(e.component.subTree,t)):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function sf(e){e.ids=[e.ids[0]+e.ids[2]+++"-",0,0]}function Ii(e,t,n,r,s=!1){if(it(e)){e.forEach((D,k)=>Ii(D,t&&(it(t)?t[k]:t),n,r,s));return}if(as(r)&&!s){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&Ii(e,t,n,r.component.subTree);return}const i=r.shapeFlag&4?eo(r.component):r.el,a=s?null:i,{i:l,r:u}=e,f=t&&t.r,d=l.refs===bt?l.refs={}:l.refs,m=l.setupState,T=Et(m),R=m===bt?()=>!1:D=>wt(T,D);if(f!=null&&f!==u&&(kt(f)?(d[f]=null,R(f)&&(m[f]=null)):se(f)&&(f.value=null)),ct(u))Ss(u,l,12,[a,d]);else{const D=kt(u),k=se(u);if(D||k){const F=()=>{if(e.f){const W=D?R(u)?m[u]:d[u]:u.value;s?it(W)&&Wa(W,i):it(W)?W.includes(i)||W.push(i):D?(d[u]=[i],R(u)&&(m[u]=d[u])):(u.value=[i],e.k&&(d[e.k]=u.value))}else D?(d[u]=a,R(u)&&(m[u]=a)):k&&(u.value=a,e.k&&(d[e.k]=a))};a?(F.id=-1,me(F,n)):F()}}}Wi().requestIdleCallback;Wi().cancelIdleCallback;const as=e=>!!e.type.__asyncLoader,of=e=>e.type.__isKeepAlive;function ag(e,t){af(e,"a",t)}function lg(e,t){af(e,"da",t)}function af(e,t,n=le){const r=e.__wdc||(e.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return e()});if(Ji(t,r,n),n){let s=n.parent;for(;s&&s.parent;)of(s.parent.vnode)&&cg(r,t,n,s),s=s.parent}}function cg(e,t,n,r){const s=Ji(t,e,r,!0);cf(()=>{Wa(r[t],s)},n)}function Ji(e,t,n=le,r=!1){if(n){const s=n[e]||(n[e]=[]),i=t.__weh||(t.__weh=(...a)=>{Pn();const l=Cs(n),u=Be(t,n,e,a);return l(),Vn(),u});return r?s.unshift(i):s.push(i),i}}const sn=e=>(t,n=le)=>{(!vs||e==="sp")&&Ji(e,(...r)=>t(...r),n)},ug=sn("bm"),lf=sn("m"),hg=sn("bu"),fg=sn("u"),dg=sn("bum"),cf=sn("um"),pg=sn("sp"),mg=sn("rtg"),gg=sn("rtc");function _g(e,t=le){Ji("ec",e,t)}const yg=Symbol.for("v-ndc");function ei(e,t,n,r){let s;const i=n,a=it(e);if(a||kt(e)){const l=a&&yr(e);let u=!1;l&&(u=!Re(e),e=Xi(e)),s=new Array(e.length);for(let f=0,d=e.length;f<d;f++)s[f]=t(u?ne(e[f]):e[f],f,void 0,i)}else if(typeof e=="number"){s=new Array(e);for(let l=0;l<e;l++)s[l]=t(l+1,l,void 0,i)}else if(Ct(e))if(e[Symbol.iterator])s=Array.from(e,(l,u)=>t(l,u,void 0,i));else{const l=Object.keys(e);s=new Array(l.length);for(let u=0,f=l.length;u<f;u++){const d=l[u];s[u]=t(e[d],d,u,i)}}else s=[];return s}const _a=e=>e?Df(e)?eo(e):_a(e.parent):null,ls=ce(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>_a(e.parent),$root:e=>_a(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>hf(e),$forceUpdate:e=>e.f||(e.f=()=>{sl(e.update)}),$nextTick:e=>e.n||(e.n=Zh.bind(e.proxy)),$watch:e=>Bg.bind(e)}),zo=(e,t)=>e!==bt&&!e.__isScriptSetup&&wt(e,t),vg={get({_:e},t){if(t==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:i,accessCache:a,type:l,appContext:u}=e;let f;if(t[0]!=="$"){const R=a[t];if(R!==void 0)switch(R){case 1:return r[t];case 2:return s[t];case 4:return n[t];case 3:return i[t]}else{if(zo(r,t))return a[t]=1,r[t];if(s!==bt&&wt(s,t))return a[t]=2,s[t];if((f=e.propsOptions[0])&&wt(f,t))return a[t]=3,i[t];if(n!==bt&&wt(n,t))return a[t]=4,n[t];ya&&(a[t]=0)}}const d=ls[t];let m,T;if(d)return t==="$attrs"&&ee(e.attrs,"get",""),d(e);if((m=l.__cssModules)&&(m=m[t]))return m;if(n!==bt&&wt(n,t))return a[t]=4,n[t];if(T=u.config.globalProperties,wt(T,t))return T[t]},set({_:e},t,n){const{data:r,setupState:s,ctx:i}=e;return zo(s,t)?(s[t]=n,!0):r!==bt&&wt(r,t)?(r[t]=n,!0):wt(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(i[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:s,propsOptions:i}},a){let l;return!!n[a]||e!==bt&&wt(e,a)||zo(t,a)||(l=i[0])&&wt(l,a)||wt(r,a)||wt(ls,a)||wt(s.config.globalProperties,a)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:wt(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function $c(e){return it(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}let ya=!0;function Tg(e){const t=hf(e),n=e.proxy,r=e.ctx;ya=!1,t.beforeCreate&&jc(t.beforeCreate,e,"bc");const{data:s,computed:i,methods:a,watch:l,provide:u,inject:f,created:d,beforeMount:m,mounted:T,beforeUpdate:R,updated:D,activated:k,deactivated:F,beforeDestroy:W,beforeUnmount:G,destroyed:J,unmounted:z,render:dt,renderTracked:vt,renderTriggered:I,errorCaptured:_,serverPrefetch:v,expose:w,inheritAttrs:A,components:S,directives:g,filters:j}=t;if(f&&Eg(f,r,null),a)for(const nt in a){const ht=a[nt];ct(ht)&&(r[nt]=ht.bind(n))}if(s){const nt=s.call(n,n);Ct(nt)&&(e.data=el(nt))}if(ya=!0,i)for(const nt in i){const ht=i[nt],we=ct(ht)?ht.bind(n,n):ct(ht.get)?ht.get.bind(n,n):ke,kn=!ct(ht)&&ct(ht.set)?ht.set.bind(n):ke,He=hi({get:we,set:kn});Object.defineProperty(r,nt,{enumerable:!0,configurable:!0,get:()=>He.value,set:Ot=>He.value=Ot})}if(l)for(const nt in l)uf(l[nt],r,n,nt);if(u){const nt=ct(u)?u.call(n):u;Reflect.ownKeys(nt).forEach(ht=>{Sg(ht,nt[ht])})}d&&jc(d,e,"c");function ut(nt,ht){it(ht)?ht.forEach(we=>nt(we.bind(n))):ht&&nt(ht.bind(n))}if(ut(ug,m),ut(lf,T),ut(hg,R),ut(fg,D),ut(ag,k),ut(lg,F),ut(_g,_),ut(gg,vt),ut(mg,I),ut(dg,G),ut(cf,z),ut(pg,v),it(w))if(w.length){const nt=e.exposed||(e.exposed={});w.forEach(ht=>{Object.defineProperty(nt,ht,{get:()=>n[ht],set:we=>n[ht]=we})})}else e.exposed||(e.exposed={});dt&&e.render===ke&&(e.render=dt),A!=null&&(e.inheritAttrs=A),S&&(e.components=S),g&&(e.directives=g),v&&sf(e)}function Eg(e,t,n=ke){it(e)&&(e=va(e));for(const r in e){const s=e[r];let i;Ct(s)?"default"in s?i=ci(s.from||r,s.default,!0):i=ci(s.from||r):i=ci(s),se(i)?Object.defineProperty(t,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:a=>i.value=a}):t[r]=i}}function jc(e,t,n){Be(it(e)?e.map(r=>r.bind(t.proxy)):e.bind(t.proxy),t,n)}function uf(e,t,n,r){let s=r.includes(".")?bf(n,r):()=>n[r];if(kt(e)){const i=t[e];ct(i)&&Go(s,i)}else if(ct(e))Go(s,e.bind(n));else if(Ct(e))if(it(e))e.forEach(i=>uf(i,t,n,r));else{const i=ct(e.handler)?e.handler.bind(n):t[e.handler];ct(i)&&Go(s,i,e)}}function hf(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:s,optionsCache:i,config:{optionMergeStrategies:a}}=e.appContext,l=i.get(t);let u;return l?u=l:!s.length&&!n&&!r?u=t:(u={},s.length&&s.forEach(f=>Ai(u,f,a,!0)),Ai(u,t,a)),Ct(t)&&i.set(t,u),u}function Ai(e,t,n,r=!1){const{mixins:s,extends:i}=t;i&&Ai(e,i,n,!0),s&&s.forEach(a=>Ai(e,a,n,!0));for(const a in t)if(!(r&&a==="expose")){const l=wg[a]||n&&n[a];e[a]=l?l(e[a],t[a]):t[a]}return e}const wg={data:qc,props:Hc,emits:Hc,methods:ts,computed:ts,beforeCreate:oe,created:oe,beforeMount:oe,mounted:oe,beforeUpdate:oe,updated:oe,beforeDestroy:oe,beforeUnmount:oe,destroyed:oe,unmounted:oe,activated:oe,deactivated:oe,errorCaptured:oe,serverPrefetch:oe,components:ts,directives:ts,watch:Ag,provide:qc,inject:Ig};function qc(e,t){return t?e?function(){return ce(ct(e)?e.call(this,this):e,ct(t)?t.call(this,this):t)}:t:e}function Ig(e,t){return ts(va(e),va(t))}function va(e){if(it(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function oe(e,t){return e?[...new Set([].concat(e,t))]:t}function ts(e,t){return e?ce(Object.create(null),e,t):t}function Hc(e,t){return e?it(e)&&it(t)?[...new Set([...e,...t])]:ce(Object.create(null),$c(e),$c(t??{})):t}function Ag(e,t){if(!e)return t;if(!t)return e;const n=ce(Object.create(null),e);for(const r in t)n[r]=oe(e[r],t[r]);return n}function ff(){return{app:null,config:{isNativeTag:fm,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let bg=0;function Rg(e,t){return function(r,s=null){ct(r)||(r=ce({},r)),s!=null&&!Ct(s)&&(s=null);const i=ff(),a=new WeakSet,l=[];let u=!1;const f=i.app={_uid:bg++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:l_,get config(){return i.config},set config(d){},use(d,...m){return a.has(d)||(d&&ct(d.install)?(a.add(d),d.install(f,...m)):ct(d)&&(a.add(d),d(f,...m))),f},mixin(d){return i.mixins.includes(d)||i.mixins.push(d),f},component(d,m){return m?(i.components[d]=m,f):i.components[d]},directive(d,m){return m?(i.directives[d]=m,f):i.directives[d]},mount(d,m,T){if(!u){const R=f._ceVNode||Ze(r,s);return R.appContext=i,T===!0?T="svg":T===!1&&(T=void 0),e(R,d,T),u=!0,f._container=d,d.__vue_app__=f,eo(R.component)}},onUnmount(d){l.push(d)},unmount(){u&&(Be(l,f._instance,16),e(null,f._container),delete f._container.__vue_app__)},provide(d,m){return i.provides[d]=m,f},runWithContext(d){const m=Tr;Tr=f;try{return d()}finally{Tr=m}}};return f}}let Tr=null;function Sg(e,t){if(le){let n=le.provides;const r=le.parent&&le.parent.provides;r===n&&(n=le.provides=Object.create(r)),n[e]=t}}function ci(e,t,n=!1){const r=le||be;if(r||Tr){const s=Tr?Tr._context.provides:r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&e in s)return s[e];if(arguments.length>1)return n&&ct(t)?t.call(r&&r.proxy):t}}const df={},pf=()=>Object.create(df),mf=e=>Object.getPrototypeOf(e)===df;function Cg(e,t,n,r=!1){const s={},i=pf();e.propsDefaults=Object.create(null),gf(e,t,s,i);for(const a in e.propsOptions[0])a in s||(s[a]=void 0);n?e.props=r?s:Km(s):e.type.props?e.props=s:e.props=i,e.attrs=i}function Pg(e,t,n,r){const{props:s,attrs:i,vnode:{patchFlag:a}}=e,l=Et(s),[u]=e.propsOptions;let f=!1;if((r||a>0)&&!(a&16)){if(a&8){const d=e.vnode.dynamicProps;for(let m=0;m<d.length;m++){let T=d[m];if(Zi(e.emitsOptions,T))continue;const R=t[T];if(u)if(wt(i,T))R!==i[T]&&(i[T]=R,f=!0);else{const D=Tn(T);s[D]=Ta(u,l,D,R,e,!1)}else R!==i[T]&&(i[T]=R,f=!0)}}}else{gf(e,t,s,i)&&(f=!0);let d;for(const m in l)(!t||!wt(t,m)&&((d=Cn(m))===m||!wt(t,d)))&&(u?n&&(n[m]!==void 0||n[d]!==void 0)&&(s[m]=Ta(u,l,m,void 0,e,!0)):delete s[m]);if(i!==l)for(const m in i)(!t||!wt(t,m))&&(delete i[m],f=!0)}f&&Ye(e.attrs,"set","")}function gf(e,t,n,r){const[s,i]=e.propsOptions;let a=!1,l;if(t)for(let u in t){if(ss(u))continue;const f=t[u];let d;s&&wt(s,d=Tn(u))?!i||!i.includes(d)?n[d]=f:(l||(l={}))[d]=f:Zi(e.emitsOptions,u)||(!(u in r)||f!==r[u])&&(r[u]=f,a=!0)}if(i){const u=Et(n),f=l||bt;for(let d=0;d<i.length;d++){const m=i[d];n[m]=Ta(s,u,m,f[m],e,!wt(f,m))}}return a}function Ta(e,t,n,r,s,i){const a=e[n];if(a!=null){const l=wt(a,"default");if(l&&r===void 0){const u=a.default;if(a.type!==Function&&!a.skipFactory&&ct(u)){const{propsDefaults:f}=s;if(n in f)r=f[n];else{const d=Cs(s);r=f[n]=u.call(null,t),d()}}else r=u;s.ce&&s.ce._setProp(n,r)}a[0]&&(i&&!l?r=!1:a[1]&&(r===""||r===Cn(n))&&(r=!0))}return r}const Vg=new WeakMap;function _f(e,t,n=!1){const r=n?Vg:t.propsCache,s=r.get(e);if(s)return s;const i=e.props,a={},l=[];let u=!1;if(!ct(e)){const d=m=>{u=!0;const[T,R]=_f(m,t,!0);ce(a,T),R&&l.push(...R)};!n&&t.mixins.length&&t.mixins.forEach(d),e.extends&&d(e.extends),e.mixins&&e.mixins.forEach(d)}if(!i&&!u)return Ct(e)&&r.set(e,gr),gr;if(it(i))for(let d=0;d<i.length;d++){const m=Tn(i[d]);Kc(m)&&(a[m]=bt)}else if(i)for(const d in i){const m=Tn(d);if(Kc(m)){const T=i[d],R=a[m]=it(T)||ct(T)?{type:T}:ce({},T),D=R.type;let k=!1,F=!0;if(it(D))for(let W=0;W<D.length;++W){const G=D[W],J=ct(G)&&G.name;if(J==="Boolean"){k=!0;break}else J==="String"&&(F=!1)}else k=ct(D)&&D.name==="Boolean";R[0]=k,R[1]=F,(k||wt(R,"default"))&&l.push(m)}}const f=[a,l];return Ct(e)&&r.set(e,f),f}function Kc(e){return e[0]!=="$"&&!ss(e)}const yf=e=>e[0]==="_"||e==="$stable",ol=e=>it(e)?e.map(Ne):[Ne(e)],Dg=(e,t,n)=>{if(t._n)return t;const r=sg((...s)=>ol(t(...s)),n);return r._c=!1,r},vf=(e,t,n)=>{const r=e._ctx;for(const s in e){if(yf(s))continue;const i=e[s];if(ct(i))t[s]=Dg(s,i,r);else if(i!=null){const a=ol(i);t[s]=()=>a}}},Tf=(e,t)=>{const n=ol(t);e.slots.default=()=>n},Ef=(e,t,n)=>{for(const r in t)(n||r!=="_")&&(e[r]=t[r])},xg=(e,t,n)=>{const r=e.slots=pf();if(e.vnode.shapeFlag&32){const s=t._;s?(Ef(r,t,n),n&&xh(r,"_",s,!0)):vf(t,r)}else t&&Tf(e,t)},Ng=(e,t,n)=>{const{vnode:r,slots:s}=e;let i=!0,a=bt;if(r.shapeFlag&32){const l=t._;l?n&&l===1?i=!1:Ef(s,t,n):(i=!t.$stable,vf(t,s)),a=t}else t&&(Tf(e,t),a={default:1});if(i)for(const l in s)!yf(l)&&a[l]==null&&delete s[l]},me=Wg;function kg(e){return Og(e)}function Og(e,t){const n=Wi();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:a,createText:l,createComment:u,setText:f,setElementText:d,parentNode:m,nextSibling:T,setScopeId:R=ke,insertStaticContent:D}=e,k=(y,E,P,O=null,x=null,M=null,q=void 0,B=null,U=!!E.dynamicChildren)=>{if(y===E)return;y&&!Zr(y,E)&&(O=Ke(y),Ot(y,x,M,!0),y=null),E.patchFlag===-2&&(U=!1,E.dynamicChildren=null);const{type:L,ref:tt,shapeFlag:H}=E;switch(L){case to:F(y,E,P,O);break;case Jn:W(y,E,P,O);break;case Qo:y==null&&G(E,P,O,q);break;case _e:S(y,E,P,O,x,M,q,B,U);break;default:H&1?dt(y,E,P,O,x,M,q,B,U):H&6?g(y,E,P,O,x,M,q,B,U):(H&64||H&128)&&L.process(y,E,P,O,x,M,q,B,U,Pe)}tt!=null&&x&&Ii(tt,y&&y.ref,M,E||y,!E)},F=(y,E,P,O)=>{if(y==null)r(E.el=l(E.children),P,O);else{const x=E.el=y.el;E.children!==y.children&&f(x,E.children)}},W=(y,E,P,O)=>{y==null?r(E.el=u(E.children||""),P,O):E.el=y.el},G=(y,E,P,O)=>{[y.el,y.anchor]=D(y.children,E,P,O,y.el,y.anchor)},J=({el:y,anchor:E},P,O)=>{let x;for(;y&&y!==E;)x=T(y),r(y,P,O),y=x;r(E,P,O)},z=({el:y,anchor:E})=>{let P;for(;y&&y!==E;)P=T(y),s(y),y=P;s(E)},dt=(y,E,P,O,x,M,q,B,U)=>{E.type==="svg"?q="svg":E.type==="math"&&(q="mathml"),y==null?vt(E,P,O,x,M,q,B,U):v(y,E,x,M,q,B,U)},vt=(y,E,P,O,x,M,q,B)=>{let U,L;const{props:tt,shapeFlag:H,transition:X,dirs:rt}=y;if(U=y.el=a(y.type,M,tt&&tt.is,tt),H&8?d(U,y.children):H&16&&_(y.children,U,null,O,x,Wo(y,M),q,B),rt&&$n(y,null,O,"created"),I(U,y,y.scopeId,q,O),tt){for(const lt in tt)lt!=="value"&&!ss(lt)&&i(U,lt,null,tt[lt],M,O);"value"in tt&&i(U,"value",null,tt.value,M),(L=tt.onVnodeBeforeMount)&&Ve(L,O,y)}rt&&$n(y,null,O,"beforeMount");const et=Mg(x,X);et&&X.beforeEnter(U),r(U,E,P),((L=tt&&tt.onVnodeMounted)||et||rt)&&me(()=>{L&&Ve(L,O,y),et&&X.enter(U),rt&&$n(y,null,O,"mounted")},x)},I=(y,E,P,O,x)=>{if(P&&R(y,P),O)for(let M=0;M<O.length;M++)R(y,O[M]);if(x){let M=x.subTree;if(E===M||Sf(M.type)&&(M.ssContent===E||M.ssFallback===E)){const q=x.vnode;I(y,q,q.scopeId,q.slotScopeIds,x.parent)}}},_=(y,E,P,O,x,M,q,B,U=0)=>{for(let L=U;L<y.length;L++){const tt=y[L]=B?fn(y[L]):Ne(y[L]);k(null,tt,E,P,O,x,M,q,B)}},v=(y,E,P,O,x,M,q)=>{const B=E.el=y.el;let{patchFlag:U,dynamicChildren:L,dirs:tt}=E;U|=y.patchFlag&16;const H=y.props||bt,X=E.props||bt;let rt;if(P&&jn(P,!1),(rt=X.onVnodeBeforeUpdate)&&Ve(rt,P,E,y),tt&&$n(E,y,P,"beforeUpdate"),P&&jn(P,!0),(H.innerHTML&&X.innerHTML==null||H.textContent&&X.textContent==null)&&d(B,""),L?w(y.dynamicChildren,L,B,P,O,Wo(E,x),M):q||ht(y,E,B,null,P,O,Wo(E,x),M,!1),U>0){if(U&16)A(B,H,X,P,x);else if(U&2&&H.class!==X.class&&i(B,"class",null,X.class,x),U&4&&i(B,"style",H.style,X.style,x),U&8){const et=E.dynamicProps;for(let lt=0;lt<et.length;lt++){const mt=et[lt],Qt=H[mt],jt=X[mt];(jt!==Qt||mt==="value")&&i(B,mt,Qt,jt,x,P)}}U&1&&y.children!==E.children&&d(B,E.children)}else!q&&L==null&&A(B,H,X,P,x);((rt=X.onVnodeUpdated)||tt)&&me(()=>{rt&&Ve(rt,P,E,y),tt&&$n(E,y,P,"updated")},O)},w=(y,E,P,O,x,M,q)=>{for(let B=0;B<E.length;B++){const U=y[B],L=E[B],tt=U.el&&(U.type===_e||!Zr(U,L)||U.shapeFlag&70)?m(U.el):P;k(U,L,tt,null,O,x,M,q,!0)}},A=(y,E,P,O,x)=>{if(E!==P){if(E!==bt)for(const M in E)!ss(M)&&!(M in P)&&i(y,M,E[M],null,x,O);for(const M in P){if(ss(M))continue;const q=P[M],B=E[M];q!==B&&M!=="value"&&i(y,M,B,q,x,O)}"value"in P&&i(y,"value",E.value,P.value,x)}},S=(y,E,P,O,x,M,q,B,U)=>{const L=E.el=y?y.el:l(""),tt=E.anchor=y?y.anchor:l("");let{patchFlag:H,dynamicChildren:X,slotScopeIds:rt}=E;rt&&(B=B?B.concat(rt):rt),y==null?(r(L,P,O),r(tt,P,O),_(E.children||[],P,tt,x,M,q,B,U)):H>0&&H&64&&X&&y.dynamicChildren?(w(y.dynamicChildren,X,P,x,M,q,B),(E.key!=null||x&&E===x.subTree)&&wf(y,E,!0)):ht(y,E,P,tt,x,M,q,B,U)},g=(y,E,P,O,x,M,q,B,U)=>{E.slotScopeIds=B,y==null?E.shapeFlag&512?x.ctx.activate(E,P,O,q,U):j(E,P,O,x,M,q,U):Q(y,E,U)},j=(y,E,P,O,x,M,q)=>{const B=y.component=n_(y,O,x);if(of(y)&&(B.ctx.renderer=Pe),r_(B,!1,q),B.asyncDep){if(x&&x.registerDep(B,ut,q),!y.el){const U=B.subTree=Ze(Jn);W(null,U,E,P)}}else ut(B,y,E,P,x,M,q)},Q=(y,E,P)=>{const O=E.component=y.component;if(Kg(y,E,P))if(O.asyncDep&&!O.asyncResolved){nt(O,E,P);return}else O.next=E,O.update();else E.el=y.el,O.vnode=E},ut=(y,E,P,O,x,M,q)=>{const B=()=>{if(y.isMounted){let{next:H,bu:X,u:rt,parent:et,vnode:lt}=y;{const Xt=If(y);if(Xt){H&&(H.el=lt.el,nt(y,H,q)),Xt.asyncDep.then(()=>{y.isUnmounted||B()});return}}let mt=H,Qt;jn(y,!1),H?(H.el=lt.el,nt(y,H,q)):H=lt,X&&li(X),(Qt=H.props&&H.props.onVnodeBeforeUpdate)&&Ve(Qt,et,H,lt),jn(y,!0);const jt=Wc(y),Ie=y.subTree;y.subTree=jt,k(Ie,jt,m(Ie.el),Ke(Ie),y,x,M),H.el=jt.el,mt===null&&zg(y,jt.el),rt&&me(rt,x),(Qt=H.props&&H.props.onVnodeUpdated)&&me(()=>Ve(Qt,et,H,lt),x)}else{let H;const{el:X,props:rt}=E,{bm:et,m:lt,parent:mt,root:Qt,type:jt}=y,Ie=as(E);jn(y,!1),et&&li(et),!Ie&&(H=rt&&rt.onVnodeBeforeMount)&&Ve(H,mt,E),jn(y,!0);{Qt.ce&&Qt.ce._injectChildStyle(jt);const Xt=y.subTree=Wc(y);k(null,Xt,P,O,y,x,M),E.el=Xt.el}if(lt&&me(lt,x),!Ie&&(H=rt&&rt.onVnodeMounted)){const Xt=E;me(()=>Ve(H,mt,Xt),x)}(E.shapeFlag&256||mt&&as(mt.vnode)&&mt.vnode.shapeFlag&256)&&y.a&&me(y.a,x),y.isMounted=!0,E=P=O=null}};y.scope.on();const U=y.effect=new Mh(B);y.scope.off();const L=y.update=U.run.bind(U),tt=y.job=U.runIfDirty.bind(U);tt.i=y,tt.id=y.uid,U.scheduler=()=>sl(tt),jn(y,!0),L()},nt=(y,E,P)=>{E.component=y;const O=y.vnode.props;y.vnode=E,y.next=null,Pg(y,E.props,O,P),Ng(y,E.children,P),Pn(),Bc(y),Vn()},ht=(y,E,P,O,x,M,q,B,U=!1)=>{const L=y&&y.children,tt=y?y.shapeFlag:0,H=E.children,{patchFlag:X,shapeFlag:rt}=E;if(X>0){if(X&128){kn(L,H,P,O,x,M,q,B,U);return}else if(X&256){we(L,H,P,O,x,M,q,B,U);return}}rt&8?(tt&16&&Mn(L,x,M),H!==L&&d(P,H)):tt&16?rt&16?kn(L,H,P,O,x,M,q,B,U):Mn(L,x,M,!0):(tt&8&&d(P,""),rt&16&&_(H,P,O,x,M,q,B,U))},we=(y,E,P,O,x,M,q,B,U)=>{y=y||gr,E=E||gr;const L=y.length,tt=E.length,H=Math.min(L,tt);let X;for(X=0;X<H;X++){const rt=E[X]=U?fn(E[X]):Ne(E[X]);k(y[X],rt,P,null,x,M,q,B,U)}L>tt?Mn(y,x,M,!0,!1,H):_(E,P,O,x,M,q,B,U,H)},kn=(y,E,P,O,x,M,q,B,U)=>{let L=0;const tt=E.length;let H=y.length-1,X=tt-1;for(;L<=H&&L<=X;){const rt=y[L],et=E[L]=U?fn(E[L]):Ne(E[L]);if(Zr(rt,et))k(rt,et,P,null,x,M,q,B,U);else break;L++}for(;L<=H&&L<=X;){const rt=y[H],et=E[X]=U?fn(E[X]):Ne(E[X]);if(Zr(rt,et))k(rt,et,P,null,x,M,q,B,U);else break;H--,X--}if(L>H){if(L<=X){const rt=X+1,et=rt<tt?E[rt].el:O;for(;L<=X;)k(null,E[L]=U?fn(E[L]):Ne(E[L]),P,et,x,M,q,B,U),L++}}else if(L>X)for(;L<=H;)Ot(y[L],x,M,!0),L++;else{const rt=L,et=L,lt=new Map;for(L=et;L<=X;L++){const qt=E[L]=U?fn(E[L]):Ne(E[L]);qt.key!=null&&lt.set(qt.key,L)}let mt,Qt=0;const jt=X-et+1;let Ie=!1,Xt=0;const on=new Array(jt);for(L=0;L<jt;L++)on[L]=0;for(L=rt;L<=H;L++){const qt=y[L];if(Qt>=jt){Ot(qt,x,M,!0);continue}let Ae;if(qt.key!=null)Ae=lt.get(qt.key);else for(mt=et;mt<=X;mt++)if(on[mt-et]===0&&Zr(qt,E[mt])){Ae=mt;break}Ae===void 0?Ot(qt,x,M,!0):(on[Ae-et]=L+1,Ae>=Xt?Xt=Ae:Ie=!0,k(qt,E[Ae],P,null,x,M,q,B,U),Qt++)}const Ur=Ie?Lg(on):gr;for(mt=Ur.length-1,L=jt-1;L>=0;L--){const qt=et+L,Ae=E[qt],Ms=qt+1<tt?E[qt+1].el:O;on[L]===0?k(null,Ae,P,Ms,x,M,q,B,U):Ie&&(mt<0||L!==Ur[mt]?He(Ae,P,Ms,2):mt--)}}},He=(y,E,P,O,x=null)=>{const{el:M,type:q,transition:B,children:U,shapeFlag:L}=y;if(L&6){He(y.component.subTree,E,P,O);return}if(L&128){y.suspense.move(E,P,O);return}if(L&64){q.move(y,E,P,Pe);return}if(q===_e){r(M,E,P);for(let H=0;H<U.length;H++)He(U[H],E,P,O);r(y.anchor,E,P);return}if(q===Qo){J(y,E,P);return}if(O!==2&&L&1&&B)if(O===0)B.beforeEnter(M),r(M,E,P),me(()=>B.enter(M),x);else{const{leave:H,delayLeave:X,afterLeave:rt}=B,et=()=>r(M,E,P),lt=()=>{H(M,()=>{et(),rt&&rt()})};X?X(M,et,lt):lt()}else r(M,E,P)},Ot=(y,E,P,O=!1,x=!1)=>{const{type:M,props:q,ref:B,children:U,dynamicChildren:L,shapeFlag:tt,patchFlag:H,dirs:X,cacheIndex:rt}=y;if(H===-2&&(x=!1),B!=null&&Ii(B,null,P,y,!0),rt!=null&&(E.renderCache[rt]=void 0),tt&256){E.ctx.deactivate(y);return}const et=tt&1&&X,lt=!as(y);let mt;if(lt&&(mt=q&&q.onVnodeBeforeUnmount)&&Ve(mt,E,y),tt&6)On(y.component,P,O);else{if(tt&128){y.suspense.unmount(P,O);return}et&&$n(y,null,E,"beforeUnmount"),tt&64?y.type.remove(y,E,P,Pe,O):L&&!L.hasOnce&&(M!==_e||H>0&&H&64)?Mn(L,E,P,!1,!0):(M===_e&&H&384||!x&&tt&16)&&Mn(U,E,P),O&&Mt(y)}(lt&&(mt=q&&q.onVnodeUnmounted)||et)&&me(()=>{mt&&Ve(mt,E,y),et&&$n(y,null,E,"unmounted")},P)},Mt=y=>{const{type:E,el:P,anchor:O,transition:x}=y;if(E===_e){bo(P,O);return}if(E===Qo){z(y);return}const M=()=>{s(P),x&&!x.persisted&&x.afterLeave&&x.afterLeave()};if(y.shapeFlag&1&&x&&!x.persisted){const{leave:q,delayLeave:B}=x,U=()=>q(P,M);B?B(y.el,M,U):U()}else M()},bo=(y,E)=>{let P;for(;y!==E;)P=T(y),s(y),y=P;s(E)},On=(y,E,P)=>{const{bum:O,scope:x,job:M,subTree:q,um:B,m:U,a:L}=y;zc(U),zc(L),O&&li(O),x.stop(),M&&(M.flags|=8,Ot(q,y,E,P)),B&&me(B,E),me(()=>{y.isUnmounted=!0},E),E&&E.pendingBranch&&!E.isUnmounted&&y.asyncDep&&!y.asyncResolved&&y.suspenseId===E.pendingId&&(E.deps--,E.deps===0&&E.resolve())},Mn=(y,E,P,O=!1,x=!1,M=0)=>{for(let q=M;q<y.length;q++)Ot(y[q],E,P,O,x)},Ke=y=>{if(y.shapeFlag&6)return Ke(y.component.subTree);if(y.shapeFlag&128)return y.suspense.next();const E=T(y.anchor||y.el),P=E&&E[ig];return P?T(P):E};let Lr=!1;const Os=(y,E,P)=>{y==null?E._vnode&&Ot(E._vnode,null,null,!0):k(E._vnode||null,y,E,null,null,null,P),E._vnode=y,Lr||(Lr=!0,Bc(),ef(),Lr=!1)},Pe={p:k,um:Ot,m:He,r:Mt,mt:j,mc:_,pc:ht,pbc:w,n:Ke,o:e};return{render:Os,hydrate:void 0,createApp:Rg(Os)}}function Wo({type:e,props:t},n){return n==="svg"&&e==="foreignObject"||n==="mathml"&&e==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:n}function jn({effect:e,job:t},n){n?(e.flags|=32,t.flags|=4):(e.flags&=-33,t.flags&=-5)}function Mg(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function wf(e,t,n=!1){const r=e.children,s=t.children;if(it(r)&&it(s))for(let i=0;i<r.length;i++){const a=r[i];let l=s[i];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=s[i]=fn(s[i]),l.el=a.el),!n&&l.patchFlag!==-2&&wf(a,l)),l.type===to&&(l.el=a.el)}}function Lg(e){const t=e.slice(),n=[0];let r,s,i,a,l;const u=e.length;for(r=0;r<u;r++){const f=e[r];if(f!==0){if(s=n[n.length-1],e[s]<f){t[r]=s,n.push(r);continue}for(i=0,a=n.length-1;i<a;)l=i+a>>1,e[n[l]]<f?i=l+1:a=l;f<e[n[i]]&&(i>0&&(t[r]=n[i-1]),n[i]=r)}}for(i=n.length,a=n[i-1];i-- >0;)n[i]=a,a=t[a];return n}function If(e){const t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:If(t)}function zc(e){if(e)for(let t=0;t<e.length;t++)e[t].flags|=8}const Fg=Symbol.for("v-scx"),Ug=()=>ci(Fg);function Go(e,t,n){return Af(e,t,n)}function Af(e,t,n=bt){const{immediate:r,deep:s,flush:i,once:a}=n,l=ce({},n),u=t&&r||!t&&i!=="post";let f;if(vs){if(i==="sync"){const R=Ug();f=R.__watcherHandles||(R.__watcherHandles=[])}else if(!u){const R=()=>{};return R.stop=ke,R.resume=ke,R.pause=ke,R}}const d=le;l.call=(R,D,k)=>Be(R,d,D,k);let m=!1;i==="post"?l.scheduler=R=>{me(R,d&&d.suspense)}:i!=="sync"&&(m=!0,l.scheduler=(R,D)=>{D?R():sl(R)}),l.augmentJob=R=>{t&&(R.flags|=4),m&&(R.flags|=2,d&&(R.id=d.uid,R.i=d))};const T=tg(e,t,l);return vs&&(f?f.push(T):u&&T()),T}function Bg(e,t,n){const r=this.proxy,s=kt(e)?e.includes(".")?bf(r,e):()=>r[e]:e.bind(r,r);let i;ct(t)?i=t:(i=t.handler,n=t);const a=Cs(this),l=Af(s,i.bind(r),n);return a(),l}function bf(e,t){const n=t.split(".");return()=>{let r=e;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}const $g=(e,t)=>t==="modelValue"||t==="model-value"?e.modelModifiers:e[`${t}Modifiers`]||e[`${Tn(t)}Modifiers`]||e[`${Cn(t)}Modifiers`];function jg(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||bt;let s=n;const i=t.startsWith("update:"),a=i&&$g(r,t.slice(7));a&&(a.trim&&(s=n.map(d=>kt(d)?d.trim():d)),a.number&&(s=n.map(vi)));let l,u=r[l=$o(t)]||r[l=$o(Tn(t))];!u&&i&&(u=r[l=$o(Cn(t))]),u&&Be(u,e,6,s);const f=r[l+"Once"];if(f){if(!e.emitted)e.emitted={};else if(e.emitted[l])return;e.emitted[l]=!0,Be(f,e,6,s)}}function Rf(e,t,n=!1){const r=t.emitsCache,s=r.get(e);if(s!==void 0)return s;const i=e.emits;let a={},l=!1;if(!ct(e)){const u=f=>{const d=Rf(f,t,!0);d&&(l=!0,ce(a,d))};!n&&t.mixins.length&&t.mixins.forEach(u),e.extends&&u(e.extends),e.mixins&&e.mixins.forEach(u)}return!i&&!l?(Ct(e)&&r.set(e,null),null):(it(i)?i.forEach(u=>a[u]=null):ce(a,i),Ct(e)&&r.set(e,a),a)}function Zi(e,t){return!e||!Hi(t)?!1:(t=t.slice(2).replace(/Once$/,""),wt(e,t[0].toLowerCase()+t.slice(1))||wt(e,Cn(t))||wt(e,t))}function Wc(e){const{type:t,vnode:n,proxy:r,withProxy:s,propsOptions:[i],slots:a,attrs:l,emit:u,render:f,renderCache:d,props:m,data:T,setupState:R,ctx:D,inheritAttrs:k}=e,F=wi(e);let W,G;try{if(n.shapeFlag&4){const z=s||r,dt=z;W=Ne(f.call(dt,z,d,m,R,T,D)),G=l}else{const z=t;W=Ne(z.length>1?z(m,{attrs:l,slots:a,emit:u}):z(m,null)),G=t.props?l:qg(l)}}catch(z){cs.length=0,Yi(z,e,1),W=Ze(Jn)}let J=W;if(G&&k!==!1){const z=Object.keys(G),{shapeFlag:dt}=J;z.length&&dt&7&&(i&&z.some(za)&&(G=Hg(G,i)),J=Ir(J,G,!1,!0))}return n.dirs&&(J=Ir(J,null,!1,!0),J.dirs=J.dirs?J.dirs.concat(n.dirs):n.dirs),n.transition&&il(J,n.transition),W=J,wi(F),W}const qg=e=>{let t;for(const n in e)(n==="class"||n==="style"||Hi(n))&&((t||(t={}))[n]=e[n]);return t},Hg=(e,t)=>{const n={};for(const r in e)(!za(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function Kg(e,t,n){const{props:r,children:s,component:i}=e,{props:a,children:l,patchFlag:u}=t,f=i.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&u>=0){if(u&1024)return!0;if(u&16)return r?Gc(r,a,f):!!a;if(u&8){const d=t.dynamicProps;for(let m=0;m<d.length;m++){const T=d[m];if(a[T]!==r[T]&&!Zi(f,T))return!0}}}else return(s||l)&&(!l||!l.$stable)?!0:r===a?!1:r?a?Gc(r,a,f):!0:!!a;return!1}function Gc(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(t[i]!==e[i]&&!Zi(n,i))return!0}return!1}function zg({vnode:e,parent:t},n){for(;t;){const r=t.subTree;if(r.suspense&&r.suspense.activeBranch===e&&(r.el=e.el),r===e)(e=t.vnode).el=n,t=t.parent;else break}}const Sf=e=>e.__isSuspense;function Wg(e,t){t&&t.pendingBranch?it(e)?t.effects.push(...e):t.effects.push(e):rg(e)}const _e=Symbol.for("v-fgt"),to=Symbol.for("v-txt"),Jn=Symbol.for("v-cmt"),Qo=Symbol.for("v-stc"),cs=[];let ye=null;function Bt(e=!1){cs.push(ye=e?null:[])}function Gg(){cs.pop(),ye=cs[cs.length-1]||null}let ys=1;function Qc(e,t=!1){ys+=e,e<0&&ye&&t&&(ye.hasOnce=!0)}function Cf(e){return e.dynamicChildren=ys>0?ye||gr:null,Gg(),ys>0&&ye&&ye.push(e),e}function Kt(e,t,n,r,s,i){return Cf(_t(e,t,n,r,s,i,!0))}function Qg(e,t,n,r,s){return Cf(Ze(e,t,n,r,s,!0))}function Pf(e){return e?e.__v_isVNode===!0:!1}function Zr(e,t){return e.type===t.type&&e.key===t.key}const Vf=({key:e})=>e??null,ui=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?kt(e)||se(e)||ct(e)?{i:be,r:e,k:t,f:!!n}:e:null);function _t(e,t=null,n=null,r=0,s=null,i=e===_e?0:1,a=!1,l=!1){const u={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Vf(t),ref:t&&ui(t),scopeId:rf,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:be};return l?(al(u,n),i&128&&e.normalize(u)):n&&(u.shapeFlag|=kt(n)?8:16),ys>0&&!a&&ye&&(u.patchFlag>0||i&6)&&u.patchFlag!==32&&ye.push(u),u}const Ze=Xg;function Xg(e,t=null,n=null,r=0,s=null,i=!1){if((!e||e===yg)&&(e=Jn),Pf(e)){const l=Ir(e,t,!0);return n&&al(l,n),ys>0&&!i&&ye&&(l.shapeFlag&6?ye[ye.indexOf(e)]=l:ye.push(l)),l.patchFlag=-2,l}if(a_(e)&&(e=e.__vccOpts),t){t=Yg(t);let{class:l,style:u}=t;l&&!kt(l)&&(t.class=Qa(l)),Ct(u)&&(rl(u)&&!it(u)&&(u=ce({},u)),t.style=Gi(u))}const a=kt(e)?1:Sf(e)?128:og(e)?64:Ct(e)?4:ct(e)?2:0;return _t(e,t,n,r,s,a,i,!0)}function Yg(e){return e?rl(e)||mf(e)?ce({},e):e:null}function Ir(e,t,n=!1,r=!1){const{props:s,ref:i,patchFlag:a,children:l,transition:u}=e,f=t?Zg(s||{},t):s,d={__v_isVNode:!0,__v_skip:!0,type:e.type,props:f,key:f&&Vf(f),ref:t&&t.ref?n&&i?it(i)?i.concat(ui(t)):[i,ui(t)]:ui(t):i,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:l,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==_e?a===-1?16:a|16:a,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:u,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Ir(e.ssContent),ssFallback:e.ssFallback&&Ir(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return u&&r&&il(d,u.clone(d)),d}function Jg(e=" ",t=0){return Ze(to,null,e,t)}function qn(e="",t=!1){return t?(Bt(),Qg(Jn,null,e)):Ze(Jn,null,e)}function Ne(e){return e==null||typeof e=="boolean"?Ze(Jn):it(e)?Ze(_e,null,e.slice()):Pf(e)?fn(e):Ze(to,null,String(e))}function fn(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:Ir(e)}function al(e,t){let n=0;const{shapeFlag:r}=e;if(t==null)t=null;else if(it(t))n=16;else if(typeof t=="object")if(r&65){const s=t.default;s&&(s._c&&(s._d=!1),al(e,s()),s._c&&(s._d=!0));return}else{n=32;const s=t._;!s&&!mf(t)?t._ctx=be:s===3&&be&&(be.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else ct(t)?(t={default:t,_ctx:be},n=32):(t=String(t),r&64?(n=16,t=[Jg(t)]):n=8);e.children=t,e.shapeFlag|=n}function Zg(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const s in r)if(s==="class")t.class!==r.class&&(t.class=Qa([t.class,r.class]));else if(s==="style")t.style=Gi([t.style,r.style]);else if(Hi(s)){const i=t[s],a=r[s];a&&i!==a&&!(it(i)&&i.includes(a))&&(t[s]=i?[].concat(i,a):a)}else s!==""&&(t[s]=r[s])}return t}function Ve(e,t,n,r=null){Be(e,t,7,[n,r])}const t_=ff();let e_=0;function n_(e,t,n){const r=e.type,s=(t?t.appContext:e.appContext)||t_,i={uid:e_++,vnode:e,type:r,parent:t,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new bm(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(s.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:_f(r,s),emitsOptions:Rf(r,s),emit:null,emitted:null,propsDefaults:bt,inheritAttrs:r.inheritAttrs,ctx:bt,data:bt,props:bt,attrs:bt,slots:bt,refs:bt,setupState:bt,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=t?t.root:i,i.emit=jg.bind(null,i),e.ce&&e.ce(i),i}let le=null,bi,Ea;{const e=Wi(),t=(n,r)=>{let s;return(s=e[n])||(s=e[n]=[]),s.push(r),i=>{s.length>1?s.forEach(a=>a(i)):s[0](i)}};bi=t("__VUE_INSTANCE_SETTERS__",n=>le=n),Ea=t("__VUE_SSR_SETTERS__",n=>vs=n)}const Cs=e=>{const t=le;return bi(e),e.scope.on(),()=>{e.scope.off(),bi(t)}},Xc=()=>{le&&le.scope.off(),bi(null)};function Df(e){return e.vnode.shapeFlag&4}let vs=!1;function r_(e,t=!1,n=!1){t&&Ea(t);const{props:r,children:s}=e.vnode,i=Df(e);Cg(e,r,i,t),xg(e,s,n);const a=i?s_(e,t):void 0;return t&&Ea(!1),a}function s_(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,vg);const{setup:r}=n;if(r){Pn();const s=e.setupContext=r.length>1?o_(e):null,i=Cs(e),a=Ss(r,e,0,[e.props,s]),l=Ch(a);if(Vn(),i(),(l||e.sp)&&!as(e)&&sf(e),l){if(a.then(Xc,Xc),t)return a.then(u=>{Yc(e,u)}).catch(u=>{Yi(u,e,0)});e.asyncDep=a}else Yc(e,a)}else xf(e)}function Yc(e,t,n){ct(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:Ct(t)&&(e.setupState=Yh(t)),xf(e)}function xf(e,t,n){const r=e.type;e.render||(e.render=r.render||ke);{const s=Cs(e);Pn();try{Tg(e)}finally{Vn(),s()}}}const i_={get(e,t){return ee(e,"get",""),e[t]}};function o_(e){const t=n=>{e.exposed=n||{}};return{attrs:new Proxy(e.attrs,i_),slots:e.slots,emit:e.emit,expose:t}}function eo(e){return e.exposed?e.exposeProxy||(e.exposeProxy=new Proxy(Yh(zm(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in ls)return ls[n](e)},has(t,n){return n in t||n in ls}})):e.proxy}function a_(e){return ct(e)&&"__vccOpts"in e}const hi=(e,t)=>Jm(e,t,vs),l_="3.5.13";/**
* @vue/runtime-dom v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let wa;const Jc=typeof window<"u"&&window.trustedTypes;if(Jc)try{wa=Jc.createPolicy("vue",{createHTML:e=>e})}catch{}const Nf=wa?e=>wa.createHTML(e):e=>e,c_="http://www.w3.org/2000/svg",u_="http://www.w3.org/1998/Math/MathML",Xe=typeof document<"u"?document:null,Zc=Xe&&Xe.createElement("template"),h_={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const s=t==="svg"?Xe.createElementNS(c_,e):t==="mathml"?Xe.createElementNS(u_,e):n?Xe.createElement(e,{is:n}):Xe.createElement(e);return e==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:e=>Xe.createTextNode(e),createComment:e=>Xe.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>Xe.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,r,s,i){const a=n?n.previousSibling:t.lastChild;if(s&&(s===i||s.nextSibling))for(;t.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{Zc.innerHTML=Nf(r==="svg"?`<svg>${e}</svg>`:r==="mathml"?`<math>${e}</math>`:e);const l=Zc.content;if(r==="svg"||r==="mathml"){const u=l.firstChild;for(;u.firstChild;)l.appendChild(u.firstChild);l.removeChild(u)}t.insertBefore(l,n)}return[a?a.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},f_=Symbol("_vtc");function d_(e,t,n){const r=e[f_];r&&(t=(t?[t,...r]:[...r]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}const tu=Symbol("_vod"),p_=Symbol("_vsh"),m_=Symbol(""),g_=/(^|;)\s*display\s*:/;function __(e,t,n){const r=e.style,s=kt(n);let i=!1;if(n&&!s){if(t)if(kt(t))for(const a of t.split(";")){const l=a.slice(0,a.indexOf(":")).trim();n[l]==null&&fi(r,l,"")}else for(const a in t)n[a]==null&&fi(r,a,"");for(const a in n)a==="display"&&(i=!0),fi(r,a,n[a])}else if(s){if(t!==n){const a=r[m_];a&&(n+=";"+a),r.cssText=n,i=g_.test(n)}}else t&&e.removeAttribute("style");tu in e&&(e[tu]=i?r.display:"",e[p_]&&(r.display="none"))}const eu=/\s*!important$/;function fi(e,t,n){if(it(n))n.forEach(r=>fi(e,t,r));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const r=y_(e,t);eu.test(n)?e.setProperty(Cn(r),n.replace(eu,""),"important"):e[r]=n}}const nu=["Webkit","Moz","ms"],Xo={};function y_(e,t){const n=Xo[t];if(n)return n;let r=Tn(t);if(r!=="filter"&&r in e)return Xo[t]=r;r=Dh(r);for(let s=0;s<nu.length;s++){const i=nu[s]+r;if(i in e)return Xo[t]=i}return t}const ru="http://www.w3.org/1999/xlink";function su(e,t,n,r,s,i=wm(t)){r&&t.startsWith("xlink:")?n==null?e.removeAttributeNS(ru,t.slice(6,t.length)):e.setAttributeNS(ru,t,n):n==null||i&&!Nh(n)?e.removeAttribute(t):e.setAttribute(t,i?"":Ue(n)?String(n):n)}function iu(e,t,n,r,s){if(t==="innerHTML"||t==="textContent"){n!=null&&(e[t]=t==="innerHTML"?Nf(n):n);return}const i=e.tagName;if(t==="value"&&i!=="PROGRESS"&&!i.includes("-")){const l=i==="OPTION"?e.getAttribute("value")||"":e.value,u=n==null?e.type==="checkbox"?"on":"":String(n);(l!==u||!("_value"in e))&&(e.value=u),n==null&&e.removeAttribute(t),e._value=n;return}let a=!1;if(n===""||n==null){const l=typeof e[t];l==="boolean"?n=Nh(n):n==null&&l==="string"?(n="",a=!0):l==="number"&&(n=0,a=!0)}try{e[t]=n}catch{}a&&e.removeAttribute(s||t)}function Wn(e,t,n,r){e.addEventListener(t,n,r)}function v_(e,t,n,r){e.removeEventListener(t,n,r)}const ou=Symbol("_vei");function T_(e,t,n,r,s=null){const i=e[ou]||(e[ou]={}),a=i[t];if(r&&a)a.value=r;else{const[l,u]=E_(t);if(r){const f=i[t]=A_(r,s);Wn(e,l,f,u)}else a&&(v_(e,l,a,u),i[t]=void 0)}}const au=/(?:Once|Passive|Capture)$/;function E_(e){let t;if(au.test(e)){t={};let r;for(;r=e.match(au);)e=e.slice(0,e.length-r[0].length),t[r[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):Cn(e.slice(2)),t]}let Yo=0;const w_=Promise.resolve(),I_=()=>Yo||(w_.then(()=>Yo=0),Yo=Date.now());function A_(e,t){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Be(b_(r,n.value),t,5,[r])};return n.value=e,n.attached=I_(),n}function b_(e,t){if(it(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(r=>s=>!s._stopped&&r&&r(s))}else return t}const lu=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,R_=(e,t,n,r,s,i)=>{const a=s==="svg";t==="class"?d_(e,r,a):t==="style"?__(e,n,r):Hi(t)?za(t)||T_(e,t,n,r,i):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):S_(e,t,r,a))?(iu(e,t,r),!e.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&su(e,t,r,a,i,t!=="value")):e._isVueCE&&(/[A-Z]/.test(t)||!kt(r))?iu(e,Tn(t),r,i,t):(t==="true-value"?e._trueValue=r:t==="false-value"&&(e._falseValue=r),su(e,t,r,a))};function S_(e,t,n,r){if(r)return!!(t==="innerHTML"||t==="textContent"||t in e&&lu(t)&&ct(n));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const s=e.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return lu(t)&&kt(n)?!1:t in e}const Ri=e=>{const t=e.props["onUpdate:modelValue"]||!1;return it(t)?n=>li(t,n):t};function C_(e){e.target.composing=!0}function cu(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const Er=Symbol("_assign"),Hn={created(e,{modifiers:{lazy:t,trim:n,number:r}},s){e[Er]=Ri(s);const i=r||s.props&&s.props.type==="number";Wn(e,t?"change":"input",a=>{if(a.target.composing)return;let l=e.value;n&&(l=l.trim()),i&&(l=vi(l)),e[Er](l)}),n&&Wn(e,"change",()=>{e.value=e.value.trim()}),t||(Wn(e,"compositionstart",C_),Wn(e,"compositionend",cu),Wn(e,"change",cu))},mounted(e,{value:t}){e.value=t??""},beforeUpdate(e,{value:t,oldValue:n,modifiers:{lazy:r,trim:s,number:i}},a){if(e[Er]=Ri(a),e.composing)return;const l=(i||e.type==="number")&&!/^0\d/.test(e.value)?vi(e.value):e.value,u=t??"";l!==u&&(document.activeElement===e&&e.type!=="range"&&(r&&t===n||s&&e.value.trim()===u)||(e.value=u))}},P_={deep:!0,created(e,{value:t,modifiers:{number:n}},r){const s=Ki(t);Wn(e,"change",()=>{const i=Array.prototype.filter.call(e.options,a=>a.selected).map(a=>n?vi(Si(a)):Si(a));e[Er](e.multiple?s?new Set(i):i:i[0]),e._assigning=!0,Zh(()=>{e._assigning=!1})}),e[Er]=Ri(r)},mounted(e,{value:t}){uu(e,t)},beforeUpdate(e,t,n){e[Er]=Ri(n)},updated(e,{value:t}){e._assigning||uu(e,t)}};function uu(e,t){const n=e.multiple,r=it(t);if(!(n&&!r&&!Ki(t))){for(let s=0,i=e.options.length;s<i;s++){const a=e.options[s],l=Si(a);if(n)if(r){const u=typeof l;u==="string"||u==="number"?a.selected=t.some(f=>String(f)===String(l)):a.selected=Am(t,l)>-1}else a.selected=t.has(l);else if(Qi(Si(a),t)){e.selectedIndex!==s&&(e.selectedIndex=s);return}}!n&&e.selectedIndex!==-1&&(e.selectedIndex=-1)}}function Si(e){return"_value"in e?e._value:e.value}const V_={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},D_=(e,t)=>{const n=e._withKeys||(e._withKeys={}),r=t.join(".");return n[r]||(n[r]=s=>{if(!("key"in s))return;const i=Cn(s.key);if(t.some(a=>a===i||V_[a]===i))return e(s)})},x_=ce({patchProp:R_},h_);let hu;function N_(){return hu||(hu=kg(x_))}const k_=(...e)=>{const t=N_().createApp(...e),{mount:n}=t;return t.mount=r=>{const s=M_(r);if(!s)return;const i=t._component;!ct(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const a=n(s,!1,O_(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),a},t};function O_(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function M_(e){return kt(e)?document.querySelector(e):e}const L_=()=>{};var fu={};/**
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
 */const kf=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let s=e.charCodeAt(r);s<128?t[n++]=s:s<2048?(t[n++]=s>>6|192,t[n++]=s&63|128):(s&64512)===55296&&r+1<e.length&&(e.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(e.charCodeAt(++r)&1023),t[n++]=s>>18|240,t[n++]=s>>12&63|128,t[n++]=s>>6&63|128,t[n++]=s&63|128):(t[n++]=s>>12|224,t[n++]=s>>6&63|128,t[n++]=s&63|128)}return t},F_=function(e){const t=[];let n=0,r=0;for(;n<e.length;){const s=e[n++];if(s<128)t[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=e[n++];t[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=e[n++],a=e[n++],l=e[n++],u=((s&7)<<18|(i&63)<<12|(a&63)<<6|l&63)-65536;t[r++]=String.fromCharCode(55296+(u>>10)),t[r++]=String.fromCharCode(56320+(u&1023))}else{const i=e[n++],a=e[n++];t[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|a&63)}}return t.join("")},Of={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<e.length;s+=3){const i=e[s],a=s+1<e.length,l=a?e[s+1]:0,u=s+2<e.length,f=u?e[s+2]:0,d=i>>2,m=(i&3)<<4|l>>4;let T=(l&15)<<2|f>>6,R=f&63;u||(R=64,a||(T=64)),r.push(n[d],n[m],n[T],n[R])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(kf(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):F_(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<e.length;){const i=n[e.charAt(s++)],l=s<e.length?n[e.charAt(s)]:0;++s;const f=s<e.length?n[e.charAt(s)]:64;++s;const m=s<e.length?n[e.charAt(s)]:64;if(++s,i==null||l==null||f==null||m==null)throw new U_;const T=i<<2|l>>4;if(r.push(T),f!==64){const R=l<<4&240|f>>2;if(r.push(R),m!==64){const D=f<<6&192|m;r.push(D)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class U_ extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const B_=function(e){const t=kf(e);return Of.encodeByteArray(t,!0)},Ci=function(e){return B_(e).replace(/\./g,"")},$_=function(e){try{return Of.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */function j_(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const q_=()=>j_().__FIREBASE_DEFAULTS__,H_=()=>{if(typeof process>"u"||typeof fu>"u")return;const e=fu.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},K_=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&$_(e[1]);return t&&JSON.parse(t)},ll=()=>{try{return L_()||q_()||H_()||K_()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},z_=e=>{var t,n;return(n=(t=ll())===null||t===void 0?void 0:t.emulatorHosts)===null||n===void 0?void 0:n[e]},W_=e=>{const t=z_(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(n+1),10);return t[0]==="["?[t.substring(1,n-1),r]:[t.substring(0,n),r]},Mf=()=>{var e;return(e=ll())===null||e===void 0?void 0:e.config};/**
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
 */class G_{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,r))}}}/**
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
 */function Q_(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=t||"demo-project",s=e.iat||0,i=e.sub||e.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},e);return[Ci(JSON.stringify(n)),Ci(JSON.stringify(a)),""].join(".")}/**
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
 */function X_(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Y_(){var e;const t=(e=ll())===null||e===void 0?void 0:e.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function J_(){const e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}function Z_(){return!Y_()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Lf(){try{return typeof indexedDB=="object"}catch{return!1}}function Ff(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;t(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){t(n)}})}function ty(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const ey="FirebaseError";class Dn extends Error{constructor(t,n,r){super(n),this.code=t,this.customData=r,this.name=ey,Object.setPrototypeOf(this,Dn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,no.prototype.create)}}class no{constructor(t,n,r){this.service=t,this.serviceName=n,this.errors=r}create(t,...n){const r=n[0]||{},s=`${this.service}/${t}`,i=this.errors[t],a=i?ny(i,r):"Error",l=`${this.serviceName}: ${a} (${s}).`;return new Dn(s,l,r)}}function ny(e,t){return e.replace(ry,(n,r)=>{const s=t[r];return s!=null?String(s):`<${r}?>`})}const ry=/\{\$([^}]+)}/g;function Ar(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const s of n){if(!r.includes(s))return!1;const i=e[s],a=t[s];if(du(i)&&du(a)){if(!Ar(i,a))return!1}else if(i!==a)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function du(e){return e!==null&&typeof e=="object"}/**
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
 */const sy=1e3,iy=2,oy=4*60*60*1e3,ay=.5;function pu(e,t=sy,n=iy){const r=t*Math.pow(n,e),s=Math.round(ay*r*(Math.random()-.5)*2);return Math.min(oy,r+s)}/**
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
 */function $e(e){return e&&e._delegate?e._delegate:e}class tn{constructor(t,n,r){this.name=t,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */const zn="[DEFAULT]";/**
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
 */class ly{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const r=new G_;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),s=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(uy(t))try{this.getOrInitializeService({instanceIdentifier:zn})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(t=zn){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=zn){return this.instances.has(t)}getOptions(t=zn){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,a]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(i);r===l&&a.resolve(s)}return s}onInit(t,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(t),this.onInitCallbacks.set(s,i);const a=this.instances.get(s);return a&&t(a,s),()=>{i.delete(t)}}invokeOnInitCallbacks(t,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:cy(t),options:n}),this.instances.set(t,r),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=zn){return this.component?this.component.multipleInstances?t:zn:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function cy(e){return e===zn?void 0:e}function uy(e){return e.instantiationMode==="EAGER"}/**
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
 */class hy{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new ly(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var yt;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(yt||(yt={}));const fy={debug:yt.DEBUG,verbose:yt.VERBOSE,info:yt.INFO,warn:yt.WARN,error:yt.ERROR,silent:yt.SILENT},dy=yt.INFO,py={[yt.DEBUG]:"log",[yt.VERBOSE]:"log",[yt.INFO]:"info",[yt.WARN]:"warn",[yt.ERROR]:"error"},my=(e,t,...n)=>{if(t<e.logLevel)return;const r=new Date().toISOString(),s=py[t];if(s)console[s](`[${r}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class cl{constructor(t){this.name=t,this._logLevel=dy,this._logHandler=my,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in yt))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?fy[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,yt.DEBUG,...t),this._logHandler(this,yt.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,yt.VERBOSE,...t),this._logHandler(this,yt.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,yt.INFO,...t),this._logHandler(this,yt.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,yt.WARN,...t),this._logHandler(this,yt.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,yt.ERROR,...t),this._logHandler(this,yt.ERROR,...t)}}const gy=(e,t)=>t.some(n=>e instanceof n);let mu,gu;function _y(){return mu||(mu=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function yy(){return gu||(gu=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Uf=new WeakMap,Ia=new WeakMap,Bf=new WeakMap,Jo=new WeakMap,ul=new WeakMap;function vy(e){const t=new Promise((n,r)=>{const s=()=>{e.removeEventListener("success",i),e.removeEventListener("error",a)},i=()=>{n(mn(e.result)),s()},a=()=>{r(e.error),s()};e.addEventListener("success",i),e.addEventListener("error",a)});return t.then(n=>{n instanceof IDBCursor&&Uf.set(n,e)}).catch(()=>{}),ul.set(t,e),t}function Ty(e){if(Ia.has(e))return;const t=new Promise((n,r)=>{const s=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",a),e.removeEventListener("abort",a)},i=()=>{n(),s()},a=()=>{r(e.error||new DOMException("AbortError","AbortError")),s()};e.addEventListener("complete",i),e.addEventListener("error",a),e.addEventListener("abort",a)});Ia.set(e,t)}let Aa={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return Ia.get(e);if(t==="objectStoreNames")return e.objectStoreNames||Bf.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return mn(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function Ey(e){Aa=e(Aa)}function wy(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(Zo(this),t,...n);return Bf.set(r,t.sort?t.sort():[t]),mn(r)}:yy().includes(e)?function(...t){return e.apply(Zo(this),t),mn(Uf.get(this))}:function(...t){return mn(e.apply(Zo(this),t))}}function Iy(e){return typeof e=="function"?wy(e):(e instanceof IDBTransaction&&Ty(e),gy(e,_y())?new Proxy(e,Aa):e)}function mn(e){if(e instanceof IDBRequest)return vy(e);if(Jo.has(e))return Jo.get(e);const t=Iy(e);return t!==e&&(Jo.set(e,t),ul.set(t,e)),t}const Zo=e=>ul.get(e);function $f(e,t,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const a=indexedDB.open(e,t),l=mn(a);return r&&a.addEventListener("upgradeneeded",u=>{r(mn(a.result),u.oldVersion,u.newVersion,mn(a.transaction),u)}),n&&a.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),l.then(u=>{i&&u.addEventListener("close",()=>i()),s&&u.addEventListener("versionchange",f=>s(f.oldVersion,f.newVersion,f))}).catch(()=>{}),l}const Ay=["get","getKey","getAll","getAllKeys","count"],by=["put","add","delete","clear"],ta=new Map;function _u(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(ta.get(t))return ta.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,s=by.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||Ay.includes(n)))return;const i=async function(a,...l){const u=this.transaction(a,s?"readwrite":"readonly");let f=u.store;return r&&(f=f.index(l.shift())),(await Promise.all([f[n](...l),s&&u.done]))[0]};return ta.set(t,i),i}Ey(e=>({...e,get:(t,n,r)=>_u(t,n)||e.get(t,n,r),has:(t,n)=>!!_u(t,n)||e.has(t,n)}));/**
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
 */class Ry{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Sy(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Sy(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const ba="@firebase/app",yu="0.11.2";/**
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
 */const en=new cl("@firebase/app"),Cy="@firebase/app-compat",Py="@firebase/analytics-compat",Vy="@firebase/analytics",Dy="@firebase/app-check-compat",xy="@firebase/app-check",Ny="@firebase/auth",ky="@firebase/auth-compat",Oy="@firebase/database",My="@firebase/data-connect",Ly="@firebase/database-compat",Fy="@firebase/functions",Uy="@firebase/functions-compat",By="@firebase/installations",$y="@firebase/installations-compat",jy="@firebase/messaging",qy="@firebase/messaging-compat",Hy="@firebase/performance",Ky="@firebase/performance-compat",zy="@firebase/remote-config",Wy="@firebase/remote-config-compat",Gy="@firebase/storage",Qy="@firebase/storage-compat",Xy="@firebase/firestore",Yy="@firebase/vertexai",Jy="@firebase/firestore-compat",Zy="firebase",tv="11.4.0";/**
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
 */const Ra="[DEFAULT]",ev={[ba]:"fire-core",[Cy]:"fire-core-compat",[Vy]:"fire-analytics",[Py]:"fire-analytics-compat",[xy]:"fire-app-check",[Dy]:"fire-app-check-compat",[Ny]:"fire-auth",[ky]:"fire-auth-compat",[Oy]:"fire-rtdb",[My]:"fire-data-connect",[Ly]:"fire-rtdb-compat",[Fy]:"fire-fn",[Uy]:"fire-fn-compat",[By]:"fire-iid",[$y]:"fire-iid-compat",[jy]:"fire-fcm",[qy]:"fire-fcm-compat",[Hy]:"fire-perf",[Ky]:"fire-perf-compat",[zy]:"fire-rc",[Wy]:"fire-rc-compat",[Gy]:"fire-gcs",[Qy]:"fire-gcs-compat",[Xy]:"fire-fst",[Jy]:"fire-fst-compat",[Yy]:"fire-vertex","fire-js":"fire-js",[Zy]:"fire-js-all"};/**
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
 */const Pi=new Map,nv=new Map,Sa=new Map;function vu(e,t){try{e.container.addComponent(t)}catch(n){en.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function En(e){const t=e.name;if(Sa.has(t))return en.debug(`There were multiple attempts to register component ${t}.`),!1;Sa.set(t,e);for(const n of Pi.values())vu(n,e);for(const n of nv.values())vu(n,e);return!0}function Ps(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}function rv(e){return e==null?!1:e.settings!==void 0}/**
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
 */const sv={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},gn=new no("app","Firebase",sv);/**
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
 */class iv{constructor(t,n,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new tn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw gn.create("app-deleted",{appName:this._name})}}/**
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
 */const ov=tv;function jf(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const r=Object.assign({name:Ra,automaticDataCollectionEnabled:!1},t),s=r.name;if(typeof s!="string"||!s)throw gn.create("bad-app-name",{appName:String(s)});if(n||(n=Mf()),!n)throw gn.create("no-options");const i=Pi.get(s);if(i){if(Ar(n,i.options)&&Ar(r,i.config))return i;throw gn.create("duplicate-app",{appName:s})}const a=new hy(s);for(const u of Sa.values())a.addComponent(u);const l=new iv(n,r,a);return Pi.set(s,l),l}function qf(e=Ra){const t=Pi.get(e);if(!t&&e===Ra&&Mf())return jf();if(!t)throw gn.create("no-app",{appName:e});return t}function Oe(e,t,n){var r;let s=(r=ev[e])!==null&&r!==void 0?r:e;n&&(s+=`-${n}`);const i=s.match(/\s|\//),a=t.match(/\s|\//);if(i||a){const l=[`Unable to register library "${s}" with version "${t}":`];i&&l.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&a&&l.push("and"),a&&l.push(`version name "${t}" contains illegal characters (whitespace or "/")`),en.warn(l.join(" "));return}En(new tn(`${s}-version`,()=>({library:s,version:t}),"VERSION"))}/**
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
 */const av="firebase-heartbeat-database",lv=1,Ts="firebase-heartbeat-store";let ea=null;function Hf(){return ea||(ea=$f(av,lv,{upgrade:(e,t)=>{switch(t){case 0:try{e.createObjectStore(Ts)}catch(n){console.warn(n)}}}}).catch(e=>{throw gn.create("idb-open",{originalErrorMessage:e.message})})),ea}async function cv(e){try{const n=(await Hf()).transaction(Ts),r=await n.objectStore(Ts).get(Kf(e));return await n.done,r}catch(t){if(t instanceof Dn)en.warn(t.message);else{const n=gn.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});en.warn(n.message)}}}async function Tu(e,t){try{const r=(await Hf()).transaction(Ts,"readwrite");await r.objectStore(Ts).put(t,Kf(e)),await r.done}catch(n){if(n instanceof Dn)en.warn(n.message);else{const r=gn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});en.warn(r.message)}}}function Kf(e){return`${e.name}!${e.options.appId}`}/**
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
 */const uv=1024,hv=30;class fv{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new pv(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var t,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Eu();if(((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(a=>a.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats.length>hv){const a=mv(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(a,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){en.warn(r)}}async getHeartbeatsHeader(){var t;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Eu(),{heartbeatsToSend:r,unsentEntries:s}=dv(this._heartbeatsCache.heartbeats),i=Ci(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return en.warn(n),""}}}function Eu(){return new Date().toISOString().substring(0,10)}function dv(e,t=uv){const n=[];let r=e.slice();for(const s of e){const i=n.find(a=>a.agent===s.agent);if(i){if(i.dates.push(s.date),wu(n)>t){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),wu(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class pv{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Lf()?Ff().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await cv(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Tu(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Tu(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...t.heartbeats]})}else return}}function wu(e){return Ci(JSON.stringify({version:2,heartbeats:e})).length}function mv(e){if(e.length===0)return-1;let t=0,n=e[0].date;for(let r=1;r<e.length;r++)e[r].date<n&&(n=e[r].date,t=r);return t}/**
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
 */function gv(e){En(new tn("platform-logger",t=>new Ry(t),"PRIVATE")),En(new tn("heartbeat",t=>new fv(t),"PRIVATE")),Oe(ba,yu,e),Oe(ba,yu,"esm2017"),Oe("fire-js","")}gv("");var Iu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var _n,zf;(function(){var e;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(I,_){function v(){}v.prototype=_.prototype,I.D=_.prototype,I.prototype=new v,I.prototype.constructor=I,I.C=function(w,A,S){for(var g=Array(arguments.length-2),j=2;j<arguments.length;j++)g[j-2]=arguments[j];return _.prototype[A].apply(w,g)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}t(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(I,_,v){v||(v=0);var w=Array(16);if(typeof _=="string")for(var A=0;16>A;++A)w[A]=_.charCodeAt(v++)|_.charCodeAt(v++)<<8|_.charCodeAt(v++)<<16|_.charCodeAt(v++)<<24;else for(A=0;16>A;++A)w[A]=_[v++]|_[v++]<<8|_[v++]<<16|_[v++]<<24;_=I.g[0],v=I.g[1],A=I.g[2];var S=I.g[3],g=_+(S^v&(A^S))+w[0]+3614090360&4294967295;_=v+(g<<7&4294967295|g>>>25),g=S+(A^_&(v^A))+w[1]+3905402710&4294967295,S=_+(g<<12&4294967295|g>>>20),g=A+(v^S&(_^v))+w[2]+606105819&4294967295,A=S+(g<<17&4294967295|g>>>15),g=v+(_^A&(S^_))+w[3]+3250441966&4294967295,v=A+(g<<22&4294967295|g>>>10),g=_+(S^v&(A^S))+w[4]+4118548399&4294967295,_=v+(g<<7&4294967295|g>>>25),g=S+(A^_&(v^A))+w[5]+1200080426&4294967295,S=_+(g<<12&4294967295|g>>>20),g=A+(v^S&(_^v))+w[6]+2821735955&4294967295,A=S+(g<<17&4294967295|g>>>15),g=v+(_^A&(S^_))+w[7]+4249261313&4294967295,v=A+(g<<22&4294967295|g>>>10),g=_+(S^v&(A^S))+w[8]+1770035416&4294967295,_=v+(g<<7&4294967295|g>>>25),g=S+(A^_&(v^A))+w[9]+2336552879&4294967295,S=_+(g<<12&4294967295|g>>>20),g=A+(v^S&(_^v))+w[10]+4294925233&4294967295,A=S+(g<<17&4294967295|g>>>15),g=v+(_^A&(S^_))+w[11]+2304563134&4294967295,v=A+(g<<22&4294967295|g>>>10),g=_+(S^v&(A^S))+w[12]+1804603682&4294967295,_=v+(g<<7&4294967295|g>>>25),g=S+(A^_&(v^A))+w[13]+4254626195&4294967295,S=_+(g<<12&4294967295|g>>>20),g=A+(v^S&(_^v))+w[14]+2792965006&4294967295,A=S+(g<<17&4294967295|g>>>15),g=v+(_^A&(S^_))+w[15]+1236535329&4294967295,v=A+(g<<22&4294967295|g>>>10),g=_+(A^S&(v^A))+w[1]+4129170786&4294967295,_=v+(g<<5&4294967295|g>>>27),g=S+(v^A&(_^v))+w[6]+3225465664&4294967295,S=_+(g<<9&4294967295|g>>>23),g=A+(_^v&(S^_))+w[11]+643717713&4294967295,A=S+(g<<14&4294967295|g>>>18),g=v+(S^_&(A^S))+w[0]+3921069994&4294967295,v=A+(g<<20&4294967295|g>>>12),g=_+(A^S&(v^A))+w[5]+3593408605&4294967295,_=v+(g<<5&4294967295|g>>>27),g=S+(v^A&(_^v))+w[10]+38016083&4294967295,S=_+(g<<9&4294967295|g>>>23),g=A+(_^v&(S^_))+w[15]+3634488961&4294967295,A=S+(g<<14&4294967295|g>>>18),g=v+(S^_&(A^S))+w[4]+3889429448&4294967295,v=A+(g<<20&4294967295|g>>>12),g=_+(A^S&(v^A))+w[9]+568446438&4294967295,_=v+(g<<5&4294967295|g>>>27),g=S+(v^A&(_^v))+w[14]+3275163606&4294967295,S=_+(g<<9&4294967295|g>>>23),g=A+(_^v&(S^_))+w[3]+4107603335&4294967295,A=S+(g<<14&4294967295|g>>>18),g=v+(S^_&(A^S))+w[8]+1163531501&4294967295,v=A+(g<<20&4294967295|g>>>12),g=_+(A^S&(v^A))+w[13]+2850285829&4294967295,_=v+(g<<5&4294967295|g>>>27),g=S+(v^A&(_^v))+w[2]+4243563512&4294967295,S=_+(g<<9&4294967295|g>>>23),g=A+(_^v&(S^_))+w[7]+1735328473&4294967295,A=S+(g<<14&4294967295|g>>>18),g=v+(S^_&(A^S))+w[12]+2368359562&4294967295,v=A+(g<<20&4294967295|g>>>12),g=_+(v^A^S)+w[5]+4294588738&4294967295,_=v+(g<<4&4294967295|g>>>28),g=S+(_^v^A)+w[8]+2272392833&4294967295,S=_+(g<<11&4294967295|g>>>21),g=A+(S^_^v)+w[11]+1839030562&4294967295,A=S+(g<<16&4294967295|g>>>16),g=v+(A^S^_)+w[14]+4259657740&4294967295,v=A+(g<<23&4294967295|g>>>9),g=_+(v^A^S)+w[1]+2763975236&4294967295,_=v+(g<<4&4294967295|g>>>28),g=S+(_^v^A)+w[4]+1272893353&4294967295,S=_+(g<<11&4294967295|g>>>21),g=A+(S^_^v)+w[7]+4139469664&4294967295,A=S+(g<<16&4294967295|g>>>16),g=v+(A^S^_)+w[10]+3200236656&4294967295,v=A+(g<<23&4294967295|g>>>9),g=_+(v^A^S)+w[13]+681279174&4294967295,_=v+(g<<4&4294967295|g>>>28),g=S+(_^v^A)+w[0]+3936430074&4294967295,S=_+(g<<11&4294967295|g>>>21),g=A+(S^_^v)+w[3]+3572445317&4294967295,A=S+(g<<16&4294967295|g>>>16),g=v+(A^S^_)+w[6]+76029189&4294967295,v=A+(g<<23&4294967295|g>>>9),g=_+(v^A^S)+w[9]+3654602809&4294967295,_=v+(g<<4&4294967295|g>>>28),g=S+(_^v^A)+w[12]+3873151461&4294967295,S=_+(g<<11&4294967295|g>>>21),g=A+(S^_^v)+w[15]+530742520&4294967295,A=S+(g<<16&4294967295|g>>>16),g=v+(A^S^_)+w[2]+3299628645&4294967295,v=A+(g<<23&4294967295|g>>>9),g=_+(A^(v|~S))+w[0]+4096336452&4294967295,_=v+(g<<6&4294967295|g>>>26),g=S+(v^(_|~A))+w[7]+1126891415&4294967295,S=_+(g<<10&4294967295|g>>>22),g=A+(_^(S|~v))+w[14]+2878612391&4294967295,A=S+(g<<15&4294967295|g>>>17),g=v+(S^(A|~_))+w[5]+4237533241&4294967295,v=A+(g<<21&4294967295|g>>>11),g=_+(A^(v|~S))+w[12]+1700485571&4294967295,_=v+(g<<6&4294967295|g>>>26),g=S+(v^(_|~A))+w[3]+2399980690&4294967295,S=_+(g<<10&4294967295|g>>>22),g=A+(_^(S|~v))+w[10]+4293915773&4294967295,A=S+(g<<15&4294967295|g>>>17),g=v+(S^(A|~_))+w[1]+2240044497&4294967295,v=A+(g<<21&4294967295|g>>>11),g=_+(A^(v|~S))+w[8]+1873313359&4294967295,_=v+(g<<6&4294967295|g>>>26),g=S+(v^(_|~A))+w[15]+4264355552&4294967295,S=_+(g<<10&4294967295|g>>>22),g=A+(_^(S|~v))+w[6]+2734768916&4294967295,A=S+(g<<15&4294967295|g>>>17),g=v+(S^(A|~_))+w[13]+1309151649&4294967295,v=A+(g<<21&4294967295|g>>>11),g=_+(A^(v|~S))+w[4]+4149444226&4294967295,_=v+(g<<6&4294967295|g>>>26),g=S+(v^(_|~A))+w[11]+3174756917&4294967295,S=_+(g<<10&4294967295|g>>>22),g=A+(_^(S|~v))+w[2]+718787259&4294967295,A=S+(g<<15&4294967295|g>>>17),g=v+(S^(A|~_))+w[9]+3951481745&4294967295,I.g[0]=I.g[0]+_&4294967295,I.g[1]=I.g[1]+(A+(g<<21&4294967295|g>>>11))&4294967295,I.g[2]=I.g[2]+A&4294967295,I.g[3]=I.g[3]+S&4294967295}r.prototype.u=function(I,_){_===void 0&&(_=I.length);for(var v=_-this.blockSize,w=this.B,A=this.h,S=0;S<_;){if(A==0)for(;S<=v;)s(this,I,S),S+=this.blockSize;if(typeof I=="string"){for(;S<_;)if(w[A++]=I.charCodeAt(S++),A==this.blockSize){s(this,w),A=0;break}}else for(;S<_;)if(w[A++]=I[S++],A==this.blockSize){s(this,w),A=0;break}}this.h=A,this.o+=_},r.prototype.v=function(){var I=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);I[0]=128;for(var _=1;_<I.length-8;++_)I[_]=0;var v=8*this.o;for(_=I.length-8;_<I.length;++_)I[_]=v&255,v/=256;for(this.u(I),I=Array(16),_=v=0;4>_;++_)for(var w=0;32>w;w+=8)I[v++]=this.g[_]>>>w&255;return I};function i(I,_){var v=l;return Object.prototype.hasOwnProperty.call(v,I)?v[I]:v[I]=_(I)}function a(I,_){this.h=_;for(var v=[],w=!0,A=I.length-1;0<=A;A--){var S=I[A]|0;w&&S==_||(v[A]=S,w=!1)}this.g=v}var l={};function u(I){return-128<=I&&128>I?i(I,function(_){return new a([_|0],0>_?-1:0)}):new a([I|0],0>I?-1:0)}function f(I){if(isNaN(I)||!isFinite(I))return m;if(0>I)return F(f(-I));for(var _=[],v=1,w=0;I>=v;w++)_[w]=I/v|0,v*=4294967296;return new a(_,0)}function d(I,_){if(I.length==0)throw Error("number format error: empty string");if(_=_||10,2>_||36<_)throw Error("radix out of range: "+_);if(I.charAt(0)=="-")return F(d(I.substring(1),_));if(0<=I.indexOf("-"))throw Error('number format error: interior "-" character');for(var v=f(Math.pow(_,8)),w=m,A=0;A<I.length;A+=8){var S=Math.min(8,I.length-A),g=parseInt(I.substring(A,A+S),_);8>S?(S=f(Math.pow(_,S)),w=w.j(S).add(f(g))):(w=w.j(v),w=w.add(f(g)))}return w}var m=u(0),T=u(1),R=u(16777216);e=a.prototype,e.m=function(){if(k(this))return-F(this).m();for(var I=0,_=1,v=0;v<this.g.length;v++){var w=this.i(v);I+=(0<=w?w:4294967296+w)*_,_*=4294967296}return I},e.toString=function(I){if(I=I||10,2>I||36<I)throw Error("radix out of range: "+I);if(D(this))return"0";if(k(this))return"-"+F(this).toString(I);for(var _=f(Math.pow(I,6)),v=this,w="";;){var A=z(v,_).g;v=W(v,A.j(_));var S=((0<v.g.length?v.g[0]:v.h)>>>0).toString(I);if(v=A,D(v))return S+w;for(;6>S.length;)S="0"+S;w=S+w}},e.i=function(I){return 0>I?0:I<this.g.length?this.g[I]:this.h};function D(I){if(I.h!=0)return!1;for(var _=0;_<I.g.length;_++)if(I.g[_]!=0)return!1;return!0}function k(I){return I.h==-1}e.l=function(I){return I=W(this,I),k(I)?-1:D(I)?0:1};function F(I){for(var _=I.g.length,v=[],w=0;w<_;w++)v[w]=~I.g[w];return new a(v,~I.h).add(T)}e.abs=function(){return k(this)?F(this):this},e.add=function(I){for(var _=Math.max(this.g.length,I.g.length),v=[],w=0,A=0;A<=_;A++){var S=w+(this.i(A)&65535)+(I.i(A)&65535),g=(S>>>16)+(this.i(A)>>>16)+(I.i(A)>>>16);w=g>>>16,S&=65535,g&=65535,v[A]=g<<16|S}return new a(v,v[v.length-1]&-2147483648?-1:0)};function W(I,_){return I.add(F(_))}e.j=function(I){if(D(this)||D(I))return m;if(k(this))return k(I)?F(this).j(F(I)):F(F(this).j(I));if(k(I))return F(this.j(F(I)));if(0>this.l(R)&&0>I.l(R))return f(this.m()*I.m());for(var _=this.g.length+I.g.length,v=[],w=0;w<2*_;w++)v[w]=0;for(w=0;w<this.g.length;w++)for(var A=0;A<I.g.length;A++){var S=this.i(w)>>>16,g=this.i(w)&65535,j=I.i(A)>>>16,Q=I.i(A)&65535;v[2*w+2*A]+=g*Q,G(v,2*w+2*A),v[2*w+2*A+1]+=S*Q,G(v,2*w+2*A+1),v[2*w+2*A+1]+=g*j,G(v,2*w+2*A+1),v[2*w+2*A+2]+=S*j,G(v,2*w+2*A+2)}for(w=0;w<_;w++)v[w]=v[2*w+1]<<16|v[2*w];for(w=_;w<2*_;w++)v[w]=0;return new a(v,0)};function G(I,_){for(;(I[_]&65535)!=I[_];)I[_+1]+=I[_]>>>16,I[_]&=65535,_++}function J(I,_){this.g=I,this.h=_}function z(I,_){if(D(_))throw Error("division by zero");if(D(I))return new J(m,m);if(k(I))return _=z(F(I),_),new J(F(_.g),F(_.h));if(k(_))return _=z(I,F(_)),new J(F(_.g),_.h);if(30<I.g.length){if(k(I)||k(_))throw Error("slowDivide_ only works with positive integers.");for(var v=T,w=_;0>=w.l(I);)v=dt(v),w=dt(w);var A=vt(v,1),S=vt(w,1);for(w=vt(w,2),v=vt(v,2);!D(w);){var g=S.add(w);0>=g.l(I)&&(A=A.add(v),S=g),w=vt(w,1),v=vt(v,1)}return _=W(I,A.j(_)),new J(A,_)}for(A=m;0<=I.l(_);){for(v=Math.max(1,Math.floor(I.m()/_.m())),w=Math.ceil(Math.log(v)/Math.LN2),w=48>=w?1:Math.pow(2,w-48),S=f(v),g=S.j(_);k(g)||0<g.l(I);)v-=w,S=f(v),g=S.j(_);D(S)&&(S=T),A=A.add(S),I=W(I,g)}return new J(A,I)}e.A=function(I){return z(this,I).h},e.and=function(I){for(var _=Math.max(this.g.length,I.g.length),v=[],w=0;w<_;w++)v[w]=this.i(w)&I.i(w);return new a(v,this.h&I.h)},e.or=function(I){for(var _=Math.max(this.g.length,I.g.length),v=[],w=0;w<_;w++)v[w]=this.i(w)|I.i(w);return new a(v,this.h|I.h)},e.xor=function(I){for(var _=Math.max(this.g.length,I.g.length),v=[],w=0;w<_;w++)v[w]=this.i(w)^I.i(w);return new a(v,this.h^I.h)};function dt(I){for(var _=I.g.length+1,v=[],w=0;w<_;w++)v[w]=I.i(w)<<1|I.i(w-1)>>>31;return new a(v,I.h)}function vt(I,_){var v=_>>5;_%=32;for(var w=I.g.length-v,A=[],S=0;S<w;S++)A[S]=0<_?I.i(S+v)>>>_|I.i(S+v+1)<<32-_:I.i(S+v);return new a(A,I.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,zf=r,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=f,a.fromString=d,_n=a}).apply(typeof Iu<"u"?Iu:typeof self<"u"?self:typeof window<"u"?window:{});var ni=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Wf,es,Gf,di,Ca,Qf,Xf,Yf;(function(){var e,t=typeof Object.defineProperties=="function"?Object.defineProperty:function(o,c,h){return o==Array.prototype||o==Object.prototype||(o[c]=h.value),o};function n(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof ni=="object"&&ni];for(var c=0;c<o.length;++c){var h=o[c];if(h&&h.Math==Math)return h}throw Error("Cannot find global object")}var r=n(this);function s(o,c){if(c)t:{var h=r;o=o.split(".");for(var p=0;p<o.length-1;p++){var b=o[p];if(!(b in h))break t;h=h[b]}o=o[o.length-1],p=h[o],c=c(p),c!=p&&c!=null&&t(h,o,{configurable:!0,writable:!0,value:c})}}function i(o,c){o instanceof String&&(o+="");var h=0,p=!1,b={next:function(){if(!p&&h<o.length){var C=h++;return{value:c(C,o[C]),done:!1}}return p=!0,{done:!0,value:void 0}}};return b[Symbol.iterator]=function(){return b},b}s("Array.prototype.values",function(o){return o||function(){return i(this,function(c,h){return h})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},l=this||self;function u(o){var c=typeof o;return c=c!="object"?c:o?Array.isArray(o)?"array":c:"null",c=="array"||c=="object"&&typeof o.length=="number"}function f(o){var c=typeof o;return c=="object"&&o!=null||c=="function"}function d(o,c,h){return o.call.apply(o.bind,arguments)}function m(o,c,h){if(!o)throw Error();if(2<arguments.length){var p=Array.prototype.slice.call(arguments,2);return function(){var b=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(b,p),o.apply(c,b)}}return function(){return o.apply(c,arguments)}}function T(o,c,h){return T=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?d:m,T.apply(null,arguments)}function R(o,c){var h=Array.prototype.slice.call(arguments,1);return function(){var p=h.slice();return p.push.apply(p,arguments),o.apply(this,p)}}function D(o,c){function h(){}h.prototype=c.prototype,o.aa=c.prototype,o.prototype=new h,o.prototype.constructor=o,o.Qb=function(p,b,C){for(var $=Array(arguments.length-2),At=2;At<arguments.length;At++)$[At-2]=arguments[At];return c.prototype[b].apply(p,$)}}function k(o){const c=o.length;if(0<c){const h=Array(c);for(let p=0;p<c;p++)h[p]=o[p];return h}return[]}function F(o,c){for(let h=1;h<arguments.length;h++){const p=arguments[h];if(u(p)){const b=o.length||0,C=p.length||0;o.length=b+C;for(let $=0;$<C;$++)o[b+$]=p[$]}else o.push(p)}}class W{constructor(c,h){this.i=c,this.j=h,this.h=0,this.g=null}get(){let c;return 0<this.h?(this.h--,c=this.g,this.g=c.next,c.next=null):c=this.i(),c}}function G(o){return/^[\s\xa0]*$/.test(o)}function J(){var o=l.navigator;return o&&(o=o.userAgent)?o:""}function z(o){return z[" "](o),o}z[" "]=function(){};var dt=J().indexOf("Gecko")!=-1&&!(J().toLowerCase().indexOf("webkit")!=-1&&J().indexOf("Edge")==-1)&&!(J().indexOf("Trident")!=-1||J().indexOf("MSIE")!=-1)&&J().indexOf("Edge")==-1;function vt(o,c,h){for(const p in o)c.call(h,o[p],p,o)}function I(o,c){for(const h in o)c.call(void 0,o[h],h,o)}function _(o){const c={};for(const h in o)c[h]=o[h];return c}const v="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function w(o,c){let h,p;for(let b=1;b<arguments.length;b++){p=arguments[b];for(h in p)o[h]=p[h];for(let C=0;C<v.length;C++)h=v[C],Object.prototype.hasOwnProperty.call(p,h)&&(o[h]=p[h])}}function A(o){var c=1;o=o.split(":");const h=[];for(;0<c&&o.length;)h.push(o.shift()),c--;return o.length&&h.push(o.join(":")),h}function S(o){l.setTimeout(()=>{throw o},0)}function g(){var o=we;let c=null;return o.g&&(c=o.g,o.g=o.g.next,o.g||(o.h=null),c.next=null),c}class j{constructor(){this.h=this.g=null}add(c,h){const p=Q.get();p.set(c,h),this.h?this.h.next=p:this.g=p,this.h=p}}var Q=new W(()=>new ut,o=>o.reset());class ut{constructor(){this.next=this.g=this.h=null}set(c,h){this.h=c,this.g=h,this.next=null}reset(){this.next=this.g=this.h=null}}let nt,ht=!1,we=new j,kn=()=>{const o=l.Promise.resolve(void 0);nt=()=>{o.then(He)}};var He=()=>{for(var o;o=g();){try{o.h.call(o.g)}catch(h){S(h)}var c=Q;c.j(o),100>c.h&&(c.h++,o.next=c.g,c.g=o)}ht=!1};function Ot(){this.s=this.s,this.C=this.C}Ot.prototype.s=!1,Ot.prototype.ma=function(){this.s||(this.s=!0,this.N())},Ot.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Mt(o,c){this.type=o,this.g=this.target=c,this.defaultPrevented=!1}Mt.prototype.h=function(){this.defaultPrevented=!0};var bo=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var o=!1,c=Object.defineProperty({},"passive",{get:function(){o=!0}});try{const h=()=>{};l.addEventListener("test",h,c),l.removeEventListener("test",h,c)}catch{}return o}();function On(o,c){if(Mt.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o){var h=this.type=o.type,p=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;if(this.target=o.target||o.srcElement,this.g=c,c=o.relatedTarget){if(dt){t:{try{z(c.nodeName);var b=!0;break t}catch{}b=!1}b||(c=null)}}else h=="mouseover"?c=o.fromElement:h=="mouseout"&&(c=o.toElement);this.relatedTarget=c,p?(this.clientX=p.clientX!==void 0?p.clientX:p.pageX,this.clientY=p.clientY!==void 0?p.clientY:p.pageY,this.screenX=p.screenX||0,this.screenY=p.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=typeof o.pointerType=="string"?o.pointerType:Mn[o.pointerType]||"",this.state=o.state,this.i=o,o.defaultPrevented&&On.aa.h.call(this)}}D(On,Mt);var Mn={2:"touch",3:"pen",4:"mouse"};On.prototype.h=function(){On.aa.h.call(this);var o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var Ke="closure_listenable_"+(1e6*Math.random()|0),Lr=0;function Os(o,c,h,p,b){this.listener=o,this.proxy=null,this.src=c,this.type=h,this.capture=!!p,this.ha=b,this.key=++Lr,this.da=this.fa=!1}function Pe(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function Fr(o){this.src=o,this.g={},this.h=0}Fr.prototype.add=function(o,c,h,p,b){var C=o.toString();o=this.g[C],o||(o=this.g[C]=[],this.h++);var $=E(o,c,p,b);return-1<$?(c=o[$],h||(c.fa=!1)):(c=new Os(c,this.src,C,!!p,b),c.fa=h,o.push(c)),c};function y(o,c){var h=c.type;if(h in o.g){var p=o.g[h],b=Array.prototype.indexOf.call(p,c,void 0),C;(C=0<=b)&&Array.prototype.splice.call(p,b,1),C&&(Pe(c),o.g[h].length==0&&(delete o.g[h],o.h--))}}function E(o,c,h,p){for(var b=0;b<o.length;++b){var C=o[b];if(!C.da&&C.listener==c&&C.capture==!!h&&C.ha==p)return b}return-1}var P="closure_lm_"+(1e6*Math.random()|0),O={};function x(o,c,h,p,b){if(Array.isArray(c)){for(var C=0;C<c.length;C++)x(o,c[C],h,p,b);return null}return h=rt(h),o&&o[Ke]?o.K(c,h,f(p)?!!p.capture:!1,b):M(o,c,h,!1,p,b)}function M(o,c,h,p,b,C){if(!c)throw Error("Invalid event type");var $=f(b)?!!b.capture:!!b,At=H(o);if(At||(o[P]=At=new Fr(o)),h=At.add(c,h,p,$,C),h.proxy)return h;if(p=q(),h.proxy=p,p.src=o,p.listener=h,o.addEventListener)bo||(b=$),b===void 0&&(b=!1),o.addEventListener(c.toString(),p,b);else if(o.attachEvent)o.attachEvent(L(c.toString()),p);else if(o.addListener&&o.removeListener)o.addListener(p);else throw Error("addEventListener and attachEvent are unavailable.");return h}function q(){function o(h){return c.call(o.src,o.listener,h)}const c=tt;return o}function B(o,c,h,p,b){if(Array.isArray(c))for(var C=0;C<c.length;C++)B(o,c[C],h,p,b);else p=f(p)?!!p.capture:!!p,h=rt(h),o&&o[Ke]?(o=o.i,c=String(c).toString(),c in o.g&&(C=o.g[c],h=E(C,h,p,b),-1<h&&(Pe(C[h]),Array.prototype.splice.call(C,h,1),C.length==0&&(delete o.g[c],o.h--)))):o&&(o=H(o))&&(c=o.g[c.toString()],o=-1,c&&(o=E(c,h,p,b)),(h=-1<o?c[o]:null)&&U(h))}function U(o){if(typeof o!="number"&&o&&!o.da){var c=o.src;if(c&&c[Ke])y(c.i,o);else{var h=o.type,p=o.proxy;c.removeEventListener?c.removeEventListener(h,p,o.capture):c.detachEvent?c.detachEvent(L(h),p):c.addListener&&c.removeListener&&c.removeListener(p),(h=H(c))?(y(h,o),h.h==0&&(h.src=null,c[P]=null)):Pe(o)}}}function L(o){return o in O?O[o]:O[o]="on"+o}function tt(o,c){if(o.da)o=!0;else{c=new On(c,this);var h=o.listener,p=o.ha||o.src;o.fa&&U(o),o=h.call(p,c)}return o}function H(o){return o=o[P],o instanceof Fr?o:null}var X="__closure_events_fn_"+(1e9*Math.random()>>>0);function rt(o){return typeof o=="function"?o:(o[X]||(o[X]=function(c){return o.handleEvent(c)}),o[X])}function et(){Ot.call(this),this.i=new Fr(this),this.M=this,this.F=null}D(et,Ot),et.prototype[Ke]=!0,et.prototype.removeEventListener=function(o,c,h,p){B(this,o,c,h,p)};function lt(o,c){var h,p=o.F;if(p)for(h=[];p;p=p.F)h.push(p);if(o=o.M,p=c.type||c,typeof c=="string")c=new Mt(c,o);else if(c instanceof Mt)c.target=c.target||o;else{var b=c;c=new Mt(p,o),w(c,b)}if(b=!0,h)for(var C=h.length-1;0<=C;C--){var $=c.g=h[C];b=mt($,p,!0,c)&&b}if($=c.g=o,b=mt($,p,!0,c)&&b,b=mt($,p,!1,c)&&b,h)for(C=0;C<h.length;C++)$=c.g=h[C],b=mt($,p,!1,c)&&b}et.prototype.N=function(){if(et.aa.N.call(this),this.i){var o=this.i,c;for(c in o.g){for(var h=o.g[c],p=0;p<h.length;p++)Pe(h[p]);delete o.g[c],o.h--}}this.F=null},et.prototype.K=function(o,c,h,p){return this.i.add(String(o),c,!1,h,p)},et.prototype.L=function(o,c,h,p){return this.i.add(String(o),c,!0,h,p)};function mt(o,c,h,p){if(c=o.i.g[String(c)],!c)return!0;c=c.concat();for(var b=!0,C=0;C<c.length;++C){var $=c[C];if($&&!$.da&&$.capture==h){var At=$.listener,Ht=$.ha||$.src;$.fa&&y(o.i,$),b=At.call(Ht,p)!==!1&&b}}return b&&!p.defaultPrevented}function Qt(o,c,h){if(typeof o=="function")h&&(o=T(o,h));else if(o&&typeof o.handleEvent=="function")o=T(o.handleEvent,o);else throw Error("Invalid listener argument");return 2147483647<Number(c)?-1:l.setTimeout(o,c||0)}function jt(o){o.g=Qt(()=>{o.g=null,o.i&&(o.i=!1,jt(o))},o.l);const c=o.h;o.h=null,o.m.apply(null,c)}class Ie extends Ot{constructor(c,h){super(),this.m=c,this.l=h,this.h=null,this.i=!1,this.g=null}j(c){this.h=arguments,this.g?this.i=!0:jt(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Xt(o){Ot.call(this),this.h=o,this.g={}}D(Xt,Ot);var on=[];function Ur(o){vt(o.g,function(c,h){this.g.hasOwnProperty(h)&&U(c)},o),o.g={}}Xt.prototype.N=function(){Xt.aa.N.call(this),Ur(this)},Xt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var qt=l.JSON.stringify,Ae=l.JSON.parse,Ms=class{stringify(o){return l.JSON.stringify(o,void 0)}parse(o){return l.JSON.parse(o,void 0)}};function Ro(){}Ro.prototype.h=null;function Kl(o){return o.h||(o.h=o.i())}function zl(){}var Br={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function So(){Mt.call(this,"d")}D(So,Mt);function Co(){Mt.call(this,"c")}D(Co,Mt);var Ln={},Wl=null;function Ls(){return Wl=Wl||new et}Ln.La="serverreachability";function Gl(o){Mt.call(this,Ln.La,o)}D(Gl,Mt);function $r(o){const c=Ls();lt(c,new Gl(c))}Ln.STAT_EVENT="statevent";function Ql(o,c){Mt.call(this,Ln.STAT_EVENT,o),this.stat=c}D(Ql,Mt);function ie(o){const c=Ls();lt(c,new Ql(c,o))}Ln.Ma="timingevent";function Xl(o,c){Mt.call(this,Ln.Ma,o),this.size=c}D(Xl,Mt);function jr(o,c){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){o()},c)}function qr(){this.g=!0}qr.prototype.xa=function(){this.g=!1};function qp(o,c,h,p,b,C){o.info(function(){if(o.g)if(C)for(var $="",At=C.split("&"),Ht=0;Ht<At.length;Ht++){var Tt=At[Ht].split("=");if(1<Tt.length){var Yt=Tt[0];Tt=Tt[1];var Jt=Yt.split("_");$=2<=Jt.length&&Jt[1]=="type"?$+(Yt+"="+Tt+"&"):$+(Yt+"=redacted&")}}else $=null;else $=C;return"XMLHTTP REQ ("+p+") [attempt "+b+"]: "+c+`
`+h+`
`+$})}function Hp(o,c,h,p,b,C,$){o.info(function(){return"XMLHTTP RESP ("+p+") [ attempt "+b+"]: "+c+`
`+h+`
`+C+" "+$})}function or(o,c,h,p){o.info(function(){return"XMLHTTP TEXT ("+c+"): "+zp(o,h)+(p?" "+p:"")})}function Kp(o,c){o.info(function(){return"TIMEOUT: "+c})}qr.prototype.info=function(){};function zp(o,c){if(!o.g)return c;if(!c)return null;try{var h=JSON.parse(c);if(h){for(o=0;o<h.length;o++)if(Array.isArray(h[o])){var p=h[o];if(!(2>p.length)){var b=p[1];if(Array.isArray(b)&&!(1>b.length)){var C=b[0];if(C!="noop"&&C!="stop"&&C!="close")for(var $=1;$<b.length;$++)b[$]=""}}}}return qt(h)}catch{return c}}var Fs={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Yl={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Po;function Us(){}D(Us,Ro),Us.prototype.g=function(){return new XMLHttpRequest},Us.prototype.i=function(){return{}},Po=new Us;function an(o,c,h,p){this.j=o,this.i=c,this.l=h,this.R=p||1,this.U=new Xt(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Jl}function Jl(){this.i=null,this.g="",this.h=!1}var Zl={},Vo={};function Do(o,c,h){o.L=1,o.v=qs(ze(c)),o.m=h,o.P=!0,tc(o,null)}function tc(o,c){o.F=Date.now(),Bs(o),o.A=ze(o.v);var h=o.A,p=o.R;Array.isArray(p)||(p=[String(p)]),pc(h.i,"t",p),o.C=0,h=o.j.J,o.h=new Jl,o.g=xc(o.j,h?c:null,!o.m),0<o.O&&(o.M=new Ie(T(o.Y,o,o.g),o.O)),c=o.U,h=o.g,p=o.ca;var b="readystatechange";Array.isArray(b)||(b&&(on[0]=b.toString()),b=on);for(var C=0;C<b.length;C++){var $=x(h,b[C],p||c.handleEvent,!1,c.h||c);if(!$)break;c.g[$.key]=$}c=o.H?_(o.H):{},o.m?(o.u||(o.u="POST"),c["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.A,o.u,o.m,c)):(o.u="GET",o.g.ea(o.A,o.u,null,c)),$r(),qp(o.i,o.u,o.A,o.l,o.R,o.m)}an.prototype.ca=function(o){o=o.target;const c=this.M;c&&We(o)==3?c.j():this.Y(o)},an.prototype.Y=function(o){try{if(o==this.g)t:{const Jt=We(this.g);var c=this.g.Ba();const cr=this.g.Z();if(!(3>Jt)&&(Jt!=3||this.g&&(this.h.h||this.g.oa()||Ec(this.g)))){this.J||Jt!=4||c==7||(c==8||0>=cr?$r(3):$r(2)),xo(this);var h=this.g.Z();this.X=h;e:if(ec(this)){var p=Ec(this.g);o="";var b=p.length,C=We(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Fn(this),Hr(this);var $="";break e}this.h.i=new l.TextDecoder}for(c=0;c<b;c++)this.h.h=!0,o+=this.h.i.decode(p[c],{stream:!(C&&c==b-1)});p.length=0,this.h.g+=o,this.C=0,$=this.h.g}else $=this.g.oa();if(this.o=h==200,Hp(this.i,this.u,this.A,this.l,this.R,Jt,h),this.o){if(this.T&&!this.K){e:{if(this.g){var At,Ht=this.g;if((At=Ht.g?Ht.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!G(At)){var Tt=At;break e}}Tt=null}if(h=Tt)or(this.i,this.l,h,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,No(this,h);else{this.o=!1,this.s=3,ie(12),Fn(this),Hr(this);break t}}if(this.P){h=!0;let Se;for(;!this.J&&this.C<$.length;)if(Se=Wp(this,$),Se==Vo){Jt==4&&(this.s=4,ie(14),h=!1),or(this.i,this.l,null,"[Incomplete Response]");break}else if(Se==Zl){this.s=4,ie(15),or(this.i,this.l,$,"[Invalid Chunk]"),h=!1;break}else or(this.i,this.l,Se,null),No(this,Se);if(ec(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Jt!=4||$.length!=0||this.h.h||(this.s=1,ie(16),h=!1),this.o=this.o&&h,!h)or(this.i,this.l,$,"[Invalid Chunked Response]"),Fn(this),Hr(this);else if(0<$.length&&!this.W){this.W=!0;var Yt=this.j;Yt.g==this&&Yt.ba&&!Yt.M&&(Yt.j.info("Great, no buffering proxy detected. Bytes received: "+$.length),Uo(Yt),Yt.M=!0,ie(11))}}else or(this.i,this.l,$,null),No(this,$);Jt==4&&Fn(this),this.o&&!this.J&&(Jt==4?Cc(this.j,this):(this.o=!1,Bs(this)))}else um(this.g),h==400&&0<$.indexOf("Unknown SID")?(this.s=3,ie(12)):(this.s=0,ie(13)),Fn(this),Hr(this)}}}catch{}finally{}};function ec(o){return o.g?o.u=="GET"&&o.L!=2&&o.j.Ca:!1}function Wp(o,c){var h=o.C,p=c.indexOf(`
`,h);return p==-1?Vo:(h=Number(c.substring(h,p)),isNaN(h)?Zl:(p+=1,p+h>c.length?Vo:(c=c.slice(p,p+h),o.C=p+h,c)))}an.prototype.cancel=function(){this.J=!0,Fn(this)};function Bs(o){o.S=Date.now()+o.I,nc(o,o.I)}function nc(o,c){if(o.B!=null)throw Error("WatchDog timer not null");o.B=jr(T(o.ba,o),c)}function xo(o){o.B&&(l.clearTimeout(o.B),o.B=null)}an.prototype.ba=function(){this.B=null;const o=Date.now();0<=o-this.S?(Kp(this.i,this.A),this.L!=2&&($r(),ie(17)),Fn(this),this.s=2,Hr(this)):nc(this,this.S-o)};function Hr(o){o.j.G==0||o.J||Cc(o.j,o)}function Fn(o){xo(o);var c=o.M;c&&typeof c.ma=="function"&&c.ma(),o.M=null,Ur(o.U),o.g&&(c=o.g,o.g=null,c.abort(),c.ma())}function No(o,c){try{var h=o.j;if(h.G!=0&&(h.g==o||ko(h.h,o))){if(!o.K&&ko(h.h,o)&&h.G==3){try{var p=h.Da.g.parse(c)}catch{p=null}if(Array.isArray(p)&&p.length==3){var b=p;if(b[0]==0){t:if(!h.u){if(h.g)if(h.g.F+3e3<o.F)Qs(h),Ws(h);else break t;Fo(h),ie(18)}}else h.za=b[1],0<h.za-h.T&&37500>b[2]&&h.F&&h.v==0&&!h.C&&(h.C=jr(T(h.Za,h),6e3));if(1>=ic(h.h)&&h.ca){try{h.ca()}catch{}h.ca=void 0}}else Bn(h,11)}else if((o.K||h.g==o)&&Qs(h),!G(c))for(b=h.Da.g.parse(c),c=0;c<b.length;c++){let Tt=b[c];if(h.T=Tt[0],Tt=Tt[1],h.G==2)if(Tt[0]=="c"){h.K=Tt[1],h.ia=Tt[2];const Yt=Tt[3];Yt!=null&&(h.la=Yt,h.j.info("VER="+h.la));const Jt=Tt[4];Jt!=null&&(h.Aa=Jt,h.j.info("SVER="+h.Aa));const cr=Tt[5];cr!=null&&typeof cr=="number"&&0<cr&&(p=1.5*cr,h.L=p,h.j.info("backChannelRequestTimeoutMs_="+p)),p=h;const Se=o.g;if(Se){const Ys=Se.g?Se.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Ys){var C=p.h;C.g||Ys.indexOf("spdy")==-1&&Ys.indexOf("quic")==-1&&Ys.indexOf("h2")==-1||(C.j=C.l,C.g=new Set,C.h&&(Oo(C,C.h),C.h=null))}if(p.D){const Bo=Se.g?Se.g.getResponseHeader("X-HTTP-Session-Id"):null;Bo&&(p.ya=Bo,St(p.I,p.D,Bo))}}h.G=3,h.l&&h.l.ua(),h.ba&&(h.R=Date.now()-o.F,h.j.info("Handshake RTT: "+h.R+"ms")),p=h;var $=o;if(p.qa=Dc(p,p.J?p.ia:null,p.W),$.K){oc(p.h,$);var At=$,Ht=p.L;Ht&&(At.I=Ht),At.B&&(xo(At),Bs(At)),p.g=$}else Rc(p);0<h.i.length&&Gs(h)}else Tt[0]!="stop"&&Tt[0]!="close"||Bn(h,7);else h.G==3&&(Tt[0]=="stop"||Tt[0]=="close"?Tt[0]=="stop"?Bn(h,7):Lo(h):Tt[0]!="noop"&&h.l&&h.l.ta(Tt),h.v=0)}}$r(4)}catch{}}var Gp=class{constructor(o,c){this.g=o,this.map=c}};function rc(o){this.l=o||10,l.PerformanceNavigationTiming?(o=l.performance.getEntriesByType("navigation"),o=0<o.length&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function sc(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function ic(o){return o.h?1:o.g?o.g.size:0}function ko(o,c){return o.h?o.h==c:o.g?o.g.has(c):!1}function Oo(o,c){o.g?o.g.add(c):o.h=c}function oc(o,c){o.h&&o.h==c?o.h=null:o.g&&o.g.has(c)&&o.g.delete(c)}rc.prototype.cancel=function(){if(this.i=ac(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const o of this.g.values())o.cancel();this.g.clear()}};function ac(o){if(o.h!=null)return o.i.concat(o.h.D);if(o.g!=null&&o.g.size!==0){let c=o.i;for(const h of o.g.values())c=c.concat(h.D);return c}return k(o.i)}function Qp(o){if(o.V&&typeof o.V=="function")return o.V();if(typeof Map<"u"&&o instanceof Map||typeof Set<"u"&&o instanceof Set)return Array.from(o.values());if(typeof o=="string")return o.split("");if(u(o)){for(var c=[],h=o.length,p=0;p<h;p++)c.push(o[p]);return c}c=[],h=0;for(p in o)c[h++]=o[p];return c}function Xp(o){if(o.na&&typeof o.na=="function")return o.na();if(!o.V||typeof o.V!="function"){if(typeof Map<"u"&&o instanceof Map)return Array.from(o.keys());if(!(typeof Set<"u"&&o instanceof Set)){if(u(o)||typeof o=="string"){var c=[];o=o.length;for(var h=0;h<o;h++)c.push(h);return c}c=[],h=0;for(const p in o)c[h++]=p;return c}}}function lc(o,c){if(o.forEach&&typeof o.forEach=="function")o.forEach(c,void 0);else if(u(o)||typeof o=="string")Array.prototype.forEach.call(o,c,void 0);else for(var h=Xp(o),p=Qp(o),b=p.length,C=0;C<b;C++)c.call(void 0,p[C],h&&h[C],o)}var cc=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Yp(o,c){if(o){o=o.split("&");for(var h=0;h<o.length;h++){var p=o[h].indexOf("="),b=null;if(0<=p){var C=o[h].substring(0,p);b=o[h].substring(p+1)}else C=o[h];c(C,b?decodeURIComponent(b.replace(/\+/g," ")):"")}}}function Un(o){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,o instanceof Un){this.h=o.h,$s(this,o.j),this.o=o.o,this.g=o.g,js(this,o.s),this.l=o.l;var c=o.i,h=new Wr;h.i=c.i,c.g&&(h.g=new Map(c.g),h.h=c.h),uc(this,h),this.m=o.m}else o&&(c=String(o).match(cc))?(this.h=!1,$s(this,c[1]||"",!0),this.o=Kr(c[2]||""),this.g=Kr(c[3]||"",!0),js(this,c[4]),this.l=Kr(c[5]||"",!0),uc(this,c[6]||"",!0),this.m=Kr(c[7]||"")):(this.h=!1,this.i=new Wr(null,this.h))}Un.prototype.toString=function(){var o=[],c=this.j;c&&o.push(zr(c,hc,!0),":");var h=this.g;return(h||c=="file")&&(o.push("//"),(c=this.o)&&o.push(zr(c,hc,!0),"@"),o.push(encodeURIComponent(String(h)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),h=this.s,h!=null&&o.push(":",String(h))),(h=this.l)&&(this.g&&h.charAt(0)!="/"&&o.push("/"),o.push(zr(h,h.charAt(0)=="/"?tm:Zp,!0))),(h=this.i.toString())&&o.push("?",h),(h=this.m)&&o.push("#",zr(h,nm)),o.join("")};function ze(o){return new Un(o)}function $s(o,c,h){o.j=h?Kr(c,!0):c,o.j&&(o.j=o.j.replace(/:$/,""))}function js(o,c){if(c){if(c=Number(c),isNaN(c)||0>c)throw Error("Bad port number "+c);o.s=c}else o.s=null}function uc(o,c,h){c instanceof Wr?(o.i=c,rm(o.i,o.h)):(h||(c=zr(c,em)),o.i=new Wr(c,o.h))}function St(o,c,h){o.i.set(c,h)}function qs(o){return St(o,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),o}function Kr(o,c){return o?c?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function zr(o,c,h){return typeof o=="string"?(o=encodeURI(o).replace(c,Jp),h&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function Jp(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var hc=/[#\/\?@]/g,Zp=/[#\?:]/g,tm=/[#\?]/g,em=/[#\?@]/g,nm=/#/g;function Wr(o,c){this.h=this.g=null,this.i=o||null,this.j=!!c}function ln(o){o.g||(o.g=new Map,o.h=0,o.i&&Yp(o.i,function(c,h){o.add(decodeURIComponent(c.replace(/\+/g," ")),h)}))}e=Wr.prototype,e.add=function(o,c){ln(this),this.i=null,o=ar(this,o);var h=this.g.get(o);return h||this.g.set(o,h=[]),h.push(c),this.h+=1,this};function fc(o,c){ln(o),c=ar(o,c),o.g.has(c)&&(o.i=null,o.h-=o.g.get(c).length,o.g.delete(c))}function dc(o,c){return ln(o),c=ar(o,c),o.g.has(c)}e.forEach=function(o,c){ln(this),this.g.forEach(function(h,p){h.forEach(function(b){o.call(c,b,p,this)},this)},this)},e.na=function(){ln(this);const o=Array.from(this.g.values()),c=Array.from(this.g.keys()),h=[];for(let p=0;p<c.length;p++){const b=o[p];for(let C=0;C<b.length;C++)h.push(c[p])}return h},e.V=function(o){ln(this);let c=[];if(typeof o=="string")dc(this,o)&&(c=c.concat(this.g.get(ar(this,o))));else{o=Array.from(this.g.values());for(let h=0;h<o.length;h++)c=c.concat(o[h])}return c},e.set=function(o,c){return ln(this),this.i=null,o=ar(this,o),dc(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[c]),this.h+=1,this},e.get=function(o,c){return o?(o=this.V(o),0<o.length?String(o[0]):c):c};function pc(o,c,h){fc(o,c),0<h.length&&(o.i=null,o.g.set(ar(o,c),k(h)),o.h+=h.length)}e.toString=function(){if(this.i)return this.i;if(!this.g)return"";const o=[],c=Array.from(this.g.keys());for(var h=0;h<c.length;h++){var p=c[h];const C=encodeURIComponent(String(p)),$=this.V(p);for(p=0;p<$.length;p++){var b=C;$[p]!==""&&(b+="="+encodeURIComponent(String($[p]))),o.push(b)}}return this.i=o.join("&")};function ar(o,c){return c=String(c),o.j&&(c=c.toLowerCase()),c}function rm(o,c){c&&!o.j&&(ln(o),o.i=null,o.g.forEach(function(h,p){var b=p.toLowerCase();p!=b&&(fc(this,p),pc(this,b,h))},o)),o.j=c}function sm(o,c){const h=new qr;if(l.Image){const p=new Image;p.onload=R(cn,h,"TestLoadImage: loaded",!0,c,p),p.onerror=R(cn,h,"TestLoadImage: error",!1,c,p),p.onabort=R(cn,h,"TestLoadImage: abort",!1,c,p),p.ontimeout=R(cn,h,"TestLoadImage: timeout",!1,c,p),l.setTimeout(function(){p.ontimeout&&p.ontimeout()},1e4),p.src=o}else c(!1)}function im(o,c){const h=new qr,p=new AbortController,b=setTimeout(()=>{p.abort(),cn(h,"TestPingServer: timeout",!1,c)},1e4);fetch(o,{signal:p.signal}).then(C=>{clearTimeout(b),C.ok?cn(h,"TestPingServer: ok",!0,c):cn(h,"TestPingServer: server error",!1,c)}).catch(()=>{clearTimeout(b),cn(h,"TestPingServer: error",!1,c)})}function cn(o,c,h,p,b){try{b&&(b.onload=null,b.onerror=null,b.onabort=null,b.ontimeout=null),p(h)}catch{}}function om(){this.g=new Ms}function am(o,c,h){const p=h||"";try{lc(o,function(b,C){let $=b;f(b)&&($=qt(b)),c.push(p+C+"="+encodeURIComponent($))})}catch(b){throw c.push(p+"type="+encodeURIComponent("_badmap")),b}}function Hs(o){this.l=o.Ub||null,this.j=o.eb||!1}D(Hs,Ro),Hs.prototype.g=function(){return new Ks(this.l,this.j)},Hs.prototype.i=function(o){return function(){return o}}({});function Ks(o,c){et.call(this),this.D=o,this.o=c,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}D(Ks,et),e=Ks.prototype,e.open=function(o,c){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=o,this.A=c,this.readyState=1,Qr(this)},e.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const c={headers:this.u,method:this.B,credentials:this.m,cache:void 0};o&&(c.body=o),(this.D||l).fetch(new Request(this.A,c)).then(this.Sa.bind(this),this.ga.bind(this))},e.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Gr(this)),this.readyState=0},e.Sa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,Qr(this)),this.g&&(this.readyState=3,Qr(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;mc(this)}else o.text().then(this.Ra.bind(this),this.ga.bind(this))};function mc(o){o.j.read().then(o.Pa.bind(o)).catch(o.ga.bind(o))}e.Pa=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var c=o.value?o.value:new Uint8Array(0);(c=this.v.decode(c,{stream:!o.done}))&&(this.response=this.responseText+=c)}o.done?Gr(this):Qr(this),this.readyState==3&&mc(this)}},e.Ra=function(o){this.g&&(this.response=this.responseText=o,Gr(this))},e.Qa=function(o){this.g&&(this.response=o,Gr(this))},e.ga=function(){this.g&&Gr(this)};function Gr(o){o.readyState=4,o.l=null,o.j=null,o.v=null,Qr(o)}e.setRequestHeader=function(o,c){this.u.append(o,c)},e.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},e.getAllResponseHeaders=function(){if(!this.h)return"";const o=[],c=this.h.entries();for(var h=c.next();!h.done;)h=h.value,o.push(h[0]+": "+h[1]),h=c.next();return o.join(`\r
`)};function Qr(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(Ks.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function gc(o){let c="";return vt(o,function(h,p){c+=p,c+=":",c+=h,c+=`\r
`}),c}function Mo(o,c,h){t:{for(p in h){var p=!1;break t}p=!0}p||(h=gc(h),typeof o=="string"?h!=null&&encodeURIComponent(String(h)):St(o,c,h))}function Dt(o){et.call(this),this.headers=new Map,this.o=o||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}D(Dt,et);var lm=/^https?$/i,cm=["POST","PUT"];e=Dt.prototype,e.Ha=function(o){this.J=o},e.ea=function(o,c,h,p){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);c=c?c.toUpperCase():"GET",this.D=o,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Po.g(),this.v=this.o?Kl(this.o):Kl(Po),this.g.onreadystatechange=T(this.Ea,this);try{this.B=!0,this.g.open(c,String(o),!0),this.B=!1}catch(C){_c(this,C);return}if(o=h||"",h=new Map(this.headers),p)if(Object.getPrototypeOf(p)===Object.prototype)for(var b in p)h.set(b,p[b]);else if(typeof p.keys=="function"&&typeof p.get=="function")for(const C of p.keys())h.set(C,p.get(C));else throw Error("Unknown input type for opt_headers: "+String(p));p=Array.from(h.keys()).find(C=>C.toLowerCase()=="content-type"),b=l.FormData&&o instanceof l.FormData,!(0<=Array.prototype.indexOf.call(cm,c,void 0))||p||b||h.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[C,$]of h)this.g.setRequestHeader(C,$);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Tc(this),this.u=!0,this.g.send(o),this.u=!1}catch(C){_c(this,C)}};function _c(o,c){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=c,o.m=5,yc(o),zs(o)}function yc(o){o.A||(o.A=!0,lt(o,"complete"),lt(o,"error"))}e.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=o||7,lt(this,"complete"),lt(this,"abort"),zs(this))},e.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),zs(this,!0)),Dt.aa.N.call(this)},e.Ea=function(){this.s||(this.B||this.u||this.j?vc(this):this.bb())},e.bb=function(){vc(this)};function vc(o){if(o.h&&typeof a<"u"&&(!o.v[1]||We(o)!=4||o.Z()!=2)){if(o.u&&We(o)==4)Qt(o.Ea,0,o);else if(lt(o,"readystatechange"),We(o)==4){o.h=!1;try{const $=o.Z();t:switch($){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break t;default:c=!1}var h;if(!(h=c)){var p;if(p=$===0){var b=String(o.D).match(cc)[1]||null;!b&&l.self&&l.self.location&&(b=l.self.location.protocol.slice(0,-1)),p=!lm.test(b?b.toLowerCase():"")}h=p}if(h)lt(o,"complete"),lt(o,"success");else{o.m=6;try{var C=2<We(o)?o.g.statusText:""}catch{C=""}o.l=C+" ["+o.Z()+"]",yc(o)}}finally{zs(o)}}}}function zs(o,c){if(o.g){Tc(o);const h=o.g,p=o.v[0]?()=>{}:null;o.g=null,o.v=null,c||lt(o,"ready");try{h.onreadystatechange=p}catch{}}}function Tc(o){o.I&&(l.clearTimeout(o.I),o.I=null)}e.isActive=function(){return!!this.g};function We(o){return o.g?o.g.readyState:0}e.Z=function(){try{return 2<We(this)?this.g.status:-1}catch{return-1}},e.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},e.Oa=function(o){if(this.g){var c=this.g.responseText;return o&&c.indexOf(o)==0&&(c=c.substring(o.length)),Ae(c)}};function Ec(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.H){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function um(o){const c={};o=(o.g&&2<=We(o)&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let p=0;p<o.length;p++){if(G(o[p]))continue;var h=A(o[p]);const b=h[0];if(h=h[1],typeof h!="string")continue;h=h.trim();const C=c[b]||[];c[b]=C,C.push(h)}I(c,function(p){return p.join(", ")})}e.Ba=function(){return this.m},e.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Xr(o,c,h){return h&&h.internalChannelParams&&h.internalChannelParams[o]||c}function wc(o){this.Aa=0,this.i=[],this.j=new qr,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Xr("failFast",!1,o),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Xr("baseRetryDelayMs",5e3,o),this.cb=Xr("retryDelaySeedMs",1e4,o),this.Wa=Xr("forwardChannelMaxRetries",2,o),this.wa=Xr("forwardChannelRequestTimeoutMs",2e4,o),this.pa=o&&o.xmlHttpFactory||void 0,this.Xa=o&&o.Tb||void 0,this.Ca=o&&o.useFetchStreams||!1,this.L=void 0,this.J=o&&o.supportsCrossDomainXhr||!1,this.K="",this.h=new rc(o&&o.concurrentRequestLimit),this.Da=new om,this.P=o&&o.fastHandshake||!1,this.O=o&&o.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=o&&o.Rb||!1,o&&o.xa&&this.j.xa(),o&&o.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&o&&o.detectBufferingProxy||!1,this.ja=void 0,o&&o.longPollingTimeout&&0<o.longPollingTimeout&&(this.ja=o.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}e=wc.prototype,e.la=8,e.G=1,e.connect=function(o,c,h,p){ie(0),this.W=o,this.H=c||{},h&&p!==void 0&&(this.H.OSID=h,this.H.OAID=p),this.F=this.X,this.I=Dc(this,null,this.W),Gs(this)};function Lo(o){if(Ic(o),o.G==3){var c=o.U++,h=ze(o.I);if(St(h,"SID",o.K),St(h,"RID",c),St(h,"TYPE","terminate"),Yr(o,h),c=new an(o,o.j,c),c.L=2,c.v=qs(ze(h)),h=!1,l.navigator&&l.navigator.sendBeacon)try{h=l.navigator.sendBeacon(c.v.toString(),"")}catch{}!h&&l.Image&&(new Image().src=c.v,h=!0),h||(c.g=xc(c.j,null),c.g.ea(c.v)),c.F=Date.now(),Bs(c)}Vc(o)}function Ws(o){o.g&&(Uo(o),o.g.cancel(),o.g=null)}function Ic(o){Ws(o),o.u&&(l.clearTimeout(o.u),o.u=null),Qs(o),o.h.cancel(),o.s&&(typeof o.s=="number"&&l.clearTimeout(o.s),o.s=null)}function Gs(o){if(!sc(o.h)&&!o.s){o.s=!0;var c=o.Ga;nt||kn(),ht||(nt(),ht=!0),we.add(c,o),o.B=0}}function hm(o,c){return ic(o.h)>=o.h.j-(o.s?1:0)?!1:o.s?(o.i=c.D.concat(o.i),!0):o.G==1||o.G==2||o.B>=(o.Va?0:o.Wa)?!1:(o.s=jr(T(o.Ga,o,c),Pc(o,o.B)),o.B++,!0)}e.Ga=function(o){if(this.s)if(this.s=null,this.G==1){if(!o){this.U=Math.floor(1e5*Math.random()),o=this.U++;const b=new an(this,this.j,o);let C=this.o;if(this.S&&(C?(C=_(C),w(C,this.S)):C=this.S),this.m!==null||this.O||(b.H=C,C=null),this.P)t:{for(var c=0,h=0;h<this.i.length;h++){e:{var p=this.i[h];if("__data__"in p.map&&(p=p.map.__data__,typeof p=="string")){p=p.length;break e}p=void 0}if(p===void 0)break;if(c+=p,4096<c){c=h;break t}if(c===4096||h===this.i.length-1){c=h+1;break t}}c=1e3}else c=1e3;c=bc(this,b,c),h=ze(this.I),St(h,"RID",o),St(h,"CVER",22),this.D&&St(h,"X-HTTP-Session-Id",this.D),Yr(this,h),C&&(this.O?c="headers="+encodeURIComponent(String(gc(C)))+"&"+c:this.m&&Mo(h,this.m,C)),Oo(this.h,b),this.Ua&&St(h,"TYPE","init"),this.P?(St(h,"$req",c),St(h,"SID","null"),b.T=!0,Do(b,h,null)):Do(b,h,c),this.G=2}}else this.G==3&&(o?Ac(this,o):this.i.length==0||sc(this.h)||Ac(this))};function Ac(o,c){var h;c?h=c.l:h=o.U++;const p=ze(o.I);St(p,"SID",o.K),St(p,"RID",h),St(p,"AID",o.T),Yr(o,p),o.m&&o.o&&Mo(p,o.m,o.o),h=new an(o,o.j,h,o.B+1),o.m===null&&(h.H=o.o),c&&(o.i=c.D.concat(o.i)),c=bc(o,h,1e3),h.I=Math.round(.5*o.wa)+Math.round(.5*o.wa*Math.random()),Oo(o.h,h),Do(h,p,c)}function Yr(o,c){o.H&&vt(o.H,function(h,p){St(c,p,h)}),o.l&&lc({},function(h,p){St(c,p,h)})}function bc(o,c,h){h=Math.min(o.i.length,h);var p=o.l?T(o.l.Na,o.l,o):null;t:{var b=o.i;let C=-1;for(;;){const $=["count="+h];C==-1?0<h?(C=b[0].g,$.push("ofs="+C)):C=0:$.push("ofs="+C);let At=!0;for(let Ht=0;Ht<h;Ht++){let Tt=b[Ht].g;const Yt=b[Ht].map;if(Tt-=C,0>Tt)C=Math.max(0,b[Ht].g-100),At=!1;else try{am(Yt,$,"req"+Tt+"_")}catch{p&&p(Yt)}}if(At){p=$.join("&");break t}}}return o=o.i.splice(0,h),c.D=o,p}function Rc(o){if(!o.g&&!o.u){o.Y=1;var c=o.Fa;nt||kn(),ht||(nt(),ht=!0),we.add(c,o),o.v=0}}function Fo(o){return o.g||o.u||3<=o.v?!1:(o.Y++,o.u=jr(T(o.Fa,o),Pc(o,o.v)),o.v++,!0)}e.Fa=function(){if(this.u=null,Sc(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var o=2*this.R;this.j.info("BP detection timer enabled: "+o),this.A=jr(T(this.ab,this),o)}},e.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,ie(10),Ws(this),Sc(this))};function Uo(o){o.A!=null&&(l.clearTimeout(o.A),o.A=null)}function Sc(o){o.g=new an(o,o.j,"rpc",o.Y),o.m===null&&(o.g.H=o.o),o.g.O=0;var c=ze(o.qa);St(c,"RID","rpc"),St(c,"SID",o.K),St(c,"AID",o.T),St(c,"CI",o.F?"0":"1"),!o.F&&o.ja&&St(c,"TO",o.ja),St(c,"TYPE","xmlhttp"),Yr(o,c),o.m&&o.o&&Mo(c,o.m,o.o),o.L&&(o.g.I=o.L);var h=o.g;o=o.ia,h.L=1,h.v=qs(ze(c)),h.m=null,h.P=!0,tc(h,o)}e.Za=function(){this.C!=null&&(this.C=null,Ws(this),Fo(this),ie(19))};function Qs(o){o.C!=null&&(l.clearTimeout(o.C),o.C=null)}function Cc(o,c){var h=null;if(o.g==c){Qs(o),Uo(o),o.g=null;var p=2}else if(ko(o.h,c))h=c.D,oc(o.h,c),p=1;else return;if(o.G!=0){if(c.o)if(p==1){h=c.m?c.m.length:0,c=Date.now()-c.F;var b=o.B;p=Ls(),lt(p,new Xl(p,h)),Gs(o)}else Rc(o);else if(b=c.s,b==3||b==0&&0<c.X||!(p==1&&hm(o,c)||p==2&&Fo(o)))switch(h&&0<h.length&&(c=o.h,c.i=c.i.concat(h)),b){case 1:Bn(o,5);break;case 4:Bn(o,10);break;case 3:Bn(o,6);break;default:Bn(o,2)}}}function Pc(o,c){let h=o.Ta+Math.floor(Math.random()*o.cb);return o.isActive()||(h*=2),h*c}function Bn(o,c){if(o.j.info("Error code "+c),c==2){var h=T(o.fb,o),p=o.Xa;const b=!p;p=new Un(p||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||$s(p,"https"),qs(p),b?sm(p.toString(),h):im(p.toString(),h)}else ie(2);o.G=0,o.l&&o.l.sa(c),Vc(o),Ic(o)}e.fb=function(o){o?(this.j.info("Successfully pinged google.com"),ie(2)):(this.j.info("Failed to ping google.com"),ie(1))};function Vc(o){if(o.G=0,o.ka=[],o.l){const c=ac(o.h);(c.length!=0||o.i.length!=0)&&(F(o.ka,c),F(o.ka,o.i),o.h.i.length=0,k(o.i),o.i.length=0),o.l.ra()}}function Dc(o,c,h){var p=h instanceof Un?ze(h):new Un(h);if(p.g!="")c&&(p.g=c+"."+p.g),js(p,p.s);else{var b=l.location;p=b.protocol,c=c?c+"."+b.hostname:b.hostname,b=+b.port;var C=new Un(null);p&&$s(C,p),c&&(C.g=c),b&&js(C,b),h&&(C.l=h),p=C}return h=o.D,c=o.ya,h&&c&&St(p,h,c),St(p,"VER",o.la),Yr(o,p),p}function xc(o,c,h){if(c&&!o.J)throw Error("Can't create secondary domain capable XhrIo object.");return c=o.Ca&&!o.pa?new Dt(new Hs({eb:h})):new Dt(o.pa),c.Ha(o.J),c}e.isActive=function(){return!!this.l&&this.l.isActive(this)};function Nc(){}e=Nc.prototype,e.ua=function(){},e.ta=function(){},e.sa=function(){},e.ra=function(){},e.isActive=function(){return!0},e.Na=function(){};function Xs(){}Xs.prototype.g=function(o,c){return new de(o,c)};function de(o,c){et.call(this),this.g=new wc(c),this.l=o,this.h=c&&c.messageUrlParams||null,o=c&&c.messageHeaders||null,c&&c.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=c&&c.initMessageHeaders||null,c&&c.messageContentType&&(o?o["X-WebChannel-Content-Type"]=c.messageContentType:o={"X-WebChannel-Content-Type":c.messageContentType}),c&&c.va&&(o?o["X-WebChannel-Client-Profile"]=c.va:o={"X-WebChannel-Client-Profile":c.va}),this.g.S=o,(o=c&&c.Sb)&&!G(o)&&(this.g.m=o),this.v=c&&c.supportsCrossDomainXhr||!1,this.u=c&&c.sendRawJson||!1,(c=c&&c.httpSessionIdParam)&&!G(c)&&(this.g.D=c,o=this.h,o!==null&&c in o&&(o=this.h,c in o&&delete o[c])),this.j=new lr(this)}D(de,et),de.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},de.prototype.close=function(){Lo(this.g)},de.prototype.o=function(o){var c=this.g;if(typeof o=="string"){var h={};h.__data__=o,o=h}else this.u&&(h={},h.__data__=qt(o),o=h);c.i.push(new Gp(c.Ya++,o)),c.G==3&&Gs(c)},de.prototype.N=function(){this.g.l=null,delete this.j,Lo(this.g),delete this.g,de.aa.N.call(this)};function kc(o){So.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var c=o.__sm__;if(c){t:{for(const h in c){o=h;break t}o=void 0}(this.i=o)&&(o=this.i,c=c!==null&&o in c?c[o]:void 0),this.data=c}else this.data=o}D(kc,So);function Oc(){Co.call(this),this.status=1}D(Oc,Co);function lr(o){this.g=o}D(lr,Nc),lr.prototype.ua=function(){lt(this.g,"a")},lr.prototype.ta=function(o){lt(this.g,new kc(o))},lr.prototype.sa=function(o){lt(this.g,new Oc)},lr.prototype.ra=function(){lt(this.g,"b")},Xs.prototype.createWebChannel=Xs.prototype.g,de.prototype.send=de.prototype.o,de.prototype.open=de.prototype.m,de.prototype.close=de.prototype.close,Yf=function(){return new Xs},Xf=function(){return Ls()},Qf=Ln,Ca={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Fs.NO_ERROR=0,Fs.TIMEOUT=8,Fs.HTTP_ERROR=6,di=Fs,Yl.COMPLETE="complete",Gf=Yl,zl.EventType=Br,Br.OPEN="a",Br.CLOSE="b",Br.ERROR="c",Br.MESSAGE="d",et.prototype.listen=et.prototype.K,es=zl,Dt.prototype.listenOnce=Dt.prototype.L,Dt.prototype.getLastError=Dt.prototype.Ka,Dt.prototype.getLastErrorCode=Dt.prototype.Ba,Dt.prototype.getStatus=Dt.prototype.Z,Dt.prototype.getResponseJson=Dt.prototype.Oa,Dt.prototype.getResponseText=Dt.prototype.oa,Dt.prototype.send=Dt.prototype.ea,Dt.prototype.setWithCredentials=Dt.prototype.Ha,Wf=Dt}).apply(typeof ni<"u"?ni:typeof self<"u"?self:typeof window<"u"?window:{});const Au="@firebase/firestore",bu="4.7.9";/**
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
 */class te{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}te.UNAUTHENTICATED=new te(null),te.GOOGLE_CREDENTIALS=new te("google-credentials-uid"),te.FIRST_PARTY=new te("first-party-uid"),te.MOCK_USER=new te("mock-user");/**
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
 */let Nr="11.4.0";/**
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
 */const Zn=new cl("@firebase/firestore");function fr(){return Zn.logLevel}function K(e,...t){if(Zn.logLevel<=yt.DEBUG){const n=t.map(hl);Zn.debug(`Firestore (${Nr}): ${e}`,...n)}}function nn(e,...t){if(Zn.logLevel<=yt.ERROR){const n=t.map(hl);Zn.error(`Firestore (${Nr}): ${e}`,...n)}}function br(e,...t){if(Zn.logLevel<=yt.WARN){const n=t.map(hl);Zn.warn(`Firestore (${Nr}): ${e}`,...n)}}function hl(e){if(typeof e=="string")return e;try{/**
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
*/return function(n){return JSON.stringify(n)}(e)}catch{return e}}/**
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
 */function st(e="Unexpected state"){const t=`FIRESTORE (${Nr}) INTERNAL ASSERTION FAILED: `+e;throw nn(t),new Error(t)}function It(e,t){e||st()}function at(e,t){return e}/**
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
 */const N={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Y extends Dn{constructor(t,n){super(t,n),this.code=t,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class yn{constructor(){this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}}/**
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
 */class Jf{constructor(t,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class _v{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,n){t.enqueueRetryable(()=>n(te.UNAUTHENTICATED))}shutdown(){}}class yv{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,n){this.changeListener=n,t.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class vv{constructor(t){this.t=t,this.currentUser=te.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,n){It(this.o===void 0);let r=this.i;const s=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let i=new yn;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new yn,t.enqueueRetryable(()=>s(this.currentUser))};const a=()=>{const u=i;t.enqueueRetryable(async()=>{await u.promise,await s(this.currentUser)})},l=u=>{K("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(u=>l(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?l(u):(K("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new yn)}},0),a()}getToken(){const t=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==t?(K("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(It(typeof r.accessToken=="string"),new Jf(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return It(t===null||typeof t=="string"),new te(t)}}class Tv{constructor(t,n,r){this.l=t,this.h=n,this.P=r,this.type="FirstParty",this.user=te.FIRST_PARTY,this.T=new Map}I(){return this.P?this.P():null}get headers(){this.T.set("X-Goog-AuthUser",this.l);const t=this.I();return t&&this.T.set("Authorization",t),this.h&&this.T.set("X-Goog-Iam-Authorization-Token",this.h),this.T}}class Ev{constructor(t,n,r){this.l=t,this.h=n,this.P=r}getToken(){return Promise.resolve(new Tv(this.l,this.h,this.P))}start(t,n){t.enqueueRetryable(()=>n(te.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Ru{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class wv{constructor(t,n){this.A=n,this.forceRefresh=!1,this.appCheck=null,this.R=null,this.V=null,rv(t)&&t.settings.appCheckToken&&(this.V=t.settings.appCheckToken)}start(t,n){It(this.o===void 0);const r=i=>{i.error!=null&&K("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const a=i.token!==this.R;return this.R=i.token,K("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?n(i.token):Promise.resolve()};this.o=i=>{t.enqueueRetryable(()=>r(i))};const s=i=>{K("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):K("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.V)return Promise.resolve(new Ru(this.V));const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(n=>n?(It(typeof n.token=="string"),this.R=n.token,new Ru(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function Iv(e){const t=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(n);else for(let r=0;r<e;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class Zf{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=Iv(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=t.charAt(s[i]%62))}return r}}function pt(e,t){return e<t?-1:e>t?1:0}function Rr(e,t,n){return e.length===t.length&&e.every((r,s)=>n(r,t[s]))}/**
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
 */const Su=-62135596800,Cu=1e6;class Ft{static now(){return Ft.fromMillis(Date.now())}static fromDate(t){return Ft.fromMillis(t.getTime())}static fromMillis(t){const n=Math.floor(t/1e3),r=Math.floor((t-1e3*n)*Cu);return new Ft(n,r)}constructor(t,n){if(this.seconds=t,this.nanoseconds=n,n<0)throw new Y(N.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new Y(N.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(t<Su)throw new Y(N.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new Y(N.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Cu}_compareTo(t){return this.seconds===t.seconds?pt(this.nanoseconds,t.nanoseconds):pt(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds-Su;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class ot{static fromTimestamp(t){return new ot(t)}static min(){return new ot(new Ft(0,0))}static max(){return new ot(new Ft(253402300799,999999999))}constructor(t){this.timestamp=t}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const Pu="__name__";class xe{constructor(t,n,r){n===void 0?n=0:n>t.length&&st(),r===void 0?r=t.length-n:r>t.length-n&&st(),this.segments=t,this.offset=n,this.len=r}get length(){return this.len}isEqual(t){return xe.comparator(this,t)===0}child(t){const n=this.segments.slice(this.offset,this.limit());return t instanceof xe?t.forEach(r=>{n.push(r)}):n.push(t),this.construct(n)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}forEach(t){for(let n=this.offset,r=this.limit();n<r;n++)t(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,n){const r=Math.min(t.length,n.length);for(let s=0;s<r;s++){const i=xe.compareSegments(t.get(s),n.get(s));if(i!==0)return i}return Math.sign(t.length-n.length)}static compareSegments(t,n){const r=xe.isNumericId(t),s=xe.isNumericId(n);return r&&!s?-1:!r&&s?1:r&&s?xe.extractNumericId(t).compare(xe.extractNumericId(n)):t<n?-1:t>n?1:0}static isNumericId(t){return t.startsWith("__id")&&t.endsWith("__")}static extractNumericId(t){return _n.fromString(t.substring(4,t.length-2))}}class Pt extends xe{construct(t,n,r){return new Pt(t,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const n=[];for(const r of t){if(r.indexOf("//")>=0)throw new Y(N.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new Pt(n)}static emptyPath(){return new Pt([])}}const Av=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Wt extends xe{construct(t,n,r){return new Wt(t,n,r)}static isValidIdentifier(t){return Av.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Wt.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Pu}static keyField(){return new Wt([Pu])}static fromServerFormat(t){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new Y(N.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let a=!1;for(;s<t.length;){const l=t[s];if(l==="\\"){if(s+1===t.length)throw new Y(N.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const u=t[s+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new Y(N.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);r+=u,s+=2}else l==="`"?(a=!a,s++):l!=="."||a?(r+=l,s++):(i(),s++)}if(i(),a)throw new Y(N.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new Wt(n)}static emptyPath(){return new Wt([])}}/**
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
 */class Z{constructor(t){this.path=t}static fromPath(t){return new Z(Pt.fromString(t))}static fromName(t){return new Z(Pt.fromString(t).popFirst(5))}static empty(){return new Z(Pt.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&Pt.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,n){return Pt.comparator(t.path,n.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new Z(new Pt(t.slice()))}}/**
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
 */const Es=-1;function bv(e,t){const n=e.toTimestamp().seconds,r=e.toTimestamp().nanoseconds+1,s=ot.fromTimestamp(r===1e9?new Ft(n+1,0):new Ft(n,r));return new wn(s,Z.empty(),t)}function Rv(e){return new wn(e.readTime,e.key,Es)}class wn{constructor(t,n,r){this.readTime=t,this.documentKey=n,this.largestBatchId=r}static min(){return new wn(ot.min(),Z.empty(),Es)}static max(){return new wn(ot.max(),Z.empty(),Es)}}function Sv(e,t){let n=e.readTime.compareTo(t.readTime);return n!==0?n:(n=Z.comparator(e.documentKey,t.documentKey),n!==0?n:pt(e.largestBatchId,t.largestBatchId))}/**
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
 */const Cv="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Pv{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
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
 */async function kr(e){if(e.code!==N.FAILED_PRECONDITION||e.message!==Cv)throw e;K("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class V{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(t){return this.next(void 0,t)}next(t,n){return this.callbackAttached&&st(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(t,this.result):new V((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(t,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((t,n)=>{this.next(t,n)})}wrapUserFunction(t){try{const n=t();return n instanceof V?n:V.resolve(n)}catch(n){return V.reject(n)}}wrapSuccess(t,n){return t?this.wrapUserFunction(()=>t(n)):V.resolve(n)}wrapFailure(t,n){return t?this.wrapUserFunction(()=>t(n)):V.reject(n)}static resolve(t){return new V((n,r)=>{n(t)})}static reject(t){return new V((n,r)=>{r(t)})}static waitFor(t){return new V((n,r)=>{let s=0,i=0,a=!1;t.forEach(l=>{++s,l.next(()=>{++i,a&&i===s&&n()},u=>r(u))}),a=!0,i===s&&n()})}static or(t){let n=V.resolve(!1);for(const r of t)n=n.next(s=>s?V.resolve(s):r());return n}static forEach(t,n){const r=[];return t.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(t,n){return new V((r,s)=>{const i=t.length,a=new Array(i);let l=0;for(let u=0;u<i;u++){const f=u;n(t[f]).next(d=>{a[f]=d,++l,l===i&&r(a)},d=>s(d))}})}static doWhile(t,n){return new V((r,s)=>{const i=()=>{t()===!0?n().next(()=>{i()},s):r()};i()})}}function Vv(e){const t=e.match(/Android ([\d.]+)/i),n=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Or(e){return e.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
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
 */class ro{constructor(t,n){this.previousValue=t,n&&(n.sequenceNumberHandler=r=>this.oe(r),this._e=r=>n.writeSequenceNumber(r))}oe(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this._e&&this._e(t),t}}ro.ae=-1;/**
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
 */const fl=-1;function so(e){return e==null}function Vi(e){return e===0&&1/e==-1/0}function Dv(e){return typeof e=="number"&&Number.isInteger(e)&&!Vi(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}/**
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
 */const td="";function xv(e){let t="";for(let n=0;n<e.length;n++)t.length>0&&(t=Vu(t)),t=Nv(e.get(n),t);return Vu(t)}function Nv(e,t){let n=t;const r=e.length;for(let s=0;s<r;s++){const i=e.charAt(s);switch(i){case"\0":n+="";break;case td:n+="";break;default:n+=i}}return n}function Vu(e){return e+td+""}/**
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
 */function Du(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function xn(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function ed(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}/**
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
 */class Vt{constructor(t,n){this.comparator=t,this.root=n||zt.EMPTY}insert(t,n){return new Vt(this.comparator,this.root.insert(t,n,this.comparator).copy(null,null,zt.BLACK,null,null))}remove(t){return new Vt(this.comparator,this.root.remove(t,this.comparator).copy(null,null,zt.BLACK,null,null))}get(t){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(t,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(t){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(t,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((n,r)=>(t(n,r),!1))}toString(){const t=[];return this.inorderTraversal((n,r)=>(t.push(`${n}:${r}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new ri(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new ri(this.root,t,this.comparator,!1)}getReverseIterator(){return new ri(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new ri(this.root,t,this.comparator,!0)}}class ri{constructor(t,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!t.isEmpty();)if(i=n?r(t.key,n):1,n&&s&&(i*=-1),i<0)t=this.isReverse?t.left:t.right;else{if(i===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const n={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class zt{constructor(t,n,r,s,i){this.key=t,this.value=n,this.color=r??zt.RED,this.left=s??zt.EMPTY,this.right=i??zt.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,n,r,s,i){return new zt(t??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,n,r){let s=this;const i=r(t,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(t,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(t,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return zt.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,n){let r,s=this;if(n(t,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(t,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(t,s.key)===0){if(s.right.isEmpty())return zt.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(t,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,zt.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,zt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,n)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw st();const t=this.left.check();if(t!==this.right.check())throw st();return t+(this.isRed()?0:1)}}zt.EMPTY=null,zt.RED=!0,zt.BLACK=!1;zt.EMPTY=new class{constructor(){this.size=0}get key(){throw st()}get value(){throw st()}get color(){throw st()}get left(){throw st()}get right(){throw st()}copy(t,n,r,s,i){return this}insert(t,n,r){return new zt(t,n)}remove(t,n){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Ut{constructor(t){this.comparator=t,this.data=new Vt(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((n,r)=>(t(n),!1))}forEachInRange(t,n){const r=this.data.getIteratorFrom(t[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,t[1])>=0)return;n(s.key)}}forEachWhile(t,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!t(r.getNext().key))return}firstAfterOrEqual(t){const n=this.data.getIteratorFrom(t);return n.hasNext()?n.getNext().key:null}getIterator(){return new xu(this.data.getIterator())}getIteratorFrom(t){return new xu(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let n=this;return n.size<t.size&&(n=t,t=this),t.forEach(r=>{n=n.add(r)}),n}isEqual(t){if(!(t instanceof Ut)||this.size!==t.size)return!1;const n=this.data.getIterator(),r=t.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(n=>{t.push(n)}),t}toString(){const t=[];return this.forEach(n=>t.push(n)),"SortedSet("+t.toString()+")"}copy(t){const n=new Ut(this.comparator);return n.data=t,n}}class xu{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class ve{constructor(t){this.fields=t,t.sort(Wt.comparator)}static empty(){return new ve([])}unionWith(t){let n=new Ut(Wt.comparator);for(const r of this.fields)n=n.add(r);for(const r of t)n=n.add(r);return new ve(n.toArray())}covers(t){for(const n of this.fields)if(n.isPrefixOf(t))return!0;return!1}isEqual(t){return Rr(this.fields,t.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class nd extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Gt{constructor(t){this.binaryString=t}static fromBase64String(t){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new nd("Invalid base64 string: "+i):i}}(t);return new Gt(n)}static fromUint8Array(t){const n=function(s){let i="";for(let a=0;a<s.length;++a)i+=String.fromCharCode(s[a]);return i}(t);return new Gt(n)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return pt(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}Gt.EMPTY_BYTE_STRING=new Gt("");const kv=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function In(e){if(It(!!e),typeof e=="string"){let t=0;const n=kv.exec(e);if(It(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),t=Number(s)}const r=new Date(e);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:xt(e.seconds),nanos:xt(e.nanos)}}function xt(e){return typeof e=="number"?e:typeof e=="string"?Number(e):0}function An(e){return typeof e=="string"?Gt.fromBase64String(e):Gt.fromUint8Array(e)}/**
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
 */const rd="server_timestamp",sd="__type__",id="__previous_value__",od="__local_write_time__";function dl(e){var t,n;return((n=(((t=e==null?void 0:e.mapValue)===null||t===void 0?void 0:t.fields)||{})[sd])===null||n===void 0?void 0:n.stringValue)===rd}function io(e){const t=e.mapValue.fields[id];return dl(t)?io(t):t}function ws(e){const t=In(e.mapValue.fields[od].timestampValue);return new Ft(t.seconds,t.nanos)}/**
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
 */class Ov{constructor(t,n,r,s,i,a,l,u,f){this.databaseId=t,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=a,this.autoDetectLongPolling=l,this.longPollingOptions=u,this.useFetchStreams=f}}const Di="(default)";class Is{constructor(t,n){this.projectId=t,this.database=n||Di}static empty(){return new Is("","")}get isDefaultDatabase(){return this.database===Di}isEqual(t){return t instanceof Is&&t.projectId===this.projectId&&t.database===this.database}}/**
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
 */const ad="__type__",Mv="__max__",si={mapValue:{}},ld="__vector__",xi="value";function bn(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?dl(e)?4:Fv(e)?9007199254740991:Lv(e)?10:11:st()}function je(e,t){if(e===t)return!0;const n=bn(e);if(n!==bn(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return ws(e).isEqual(ws(t));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const a=In(s.timestampValue),l=In(i.timestampValue);return a.seconds===l.seconds&&a.nanos===l.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return function(s,i){return An(s.bytesValue).isEqual(An(i.bytesValue))}(e,t);case 7:return e.referenceValue===t.referenceValue;case 8:return function(s,i){return xt(s.geoPointValue.latitude)===xt(i.geoPointValue.latitude)&&xt(s.geoPointValue.longitude)===xt(i.geoPointValue.longitude)}(e,t);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return xt(s.integerValue)===xt(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const a=xt(s.doubleValue),l=xt(i.doubleValue);return a===l?Vi(a)===Vi(l):isNaN(a)&&isNaN(l)}return!1}(e,t);case 9:return Rr(e.arrayValue.values||[],t.arrayValue.values||[],je);case 10:case 11:return function(s,i){const a=s.mapValue.fields||{},l=i.mapValue.fields||{};if(Du(a)!==Du(l))return!1;for(const u in a)if(a.hasOwnProperty(u)&&(l[u]===void 0||!je(a[u],l[u])))return!1;return!0}(e,t);default:return st()}}function As(e,t){return(e.values||[]).find(n=>je(n,t))!==void 0}function Sr(e,t){if(e===t)return 0;const n=bn(e),r=bn(t);if(n!==r)return pt(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return pt(e.booleanValue,t.booleanValue);case 2:return function(i,a){const l=xt(i.integerValue||i.doubleValue),u=xt(a.integerValue||a.doubleValue);return l<u?-1:l>u?1:l===u?0:isNaN(l)?isNaN(u)?0:-1:1}(e,t);case 3:return Nu(e.timestampValue,t.timestampValue);case 4:return Nu(ws(e),ws(t));case 5:return pt(e.stringValue,t.stringValue);case 6:return function(i,a){const l=An(i),u=An(a);return l.compareTo(u)}(e.bytesValue,t.bytesValue);case 7:return function(i,a){const l=i.split("/"),u=a.split("/");for(let f=0;f<l.length&&f<u.length;f++){const d=pt(l[f],u[f]);if(d!==0)return d}return pt(l.length,u.length)}(e.referenceValue,t.referenceValue);case 8:return function(i,a){const l=pt(xt(i.latitude),xt(a.latitude));return l!==0?l:pt(xt(i.longitude),xt(a.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return ku(e.arrayValue,t.arrayValue);case 10:return function(i,a){var l,u,f,d;const m=i.fields||{},T=a.fields||{},R=(l=m[xi])===null||l===void 0?void 0:l.arrayValue,D=(u=T[xi])===null||u===void 0?void 0:u.arrayValue,k=pt(((f=R==null?void 0:R.values)===null||f===void 0?void 0:f.length)||0,((d=D==null?void 0:D.values)===null||d===void 0?void 0:d.length)||0);return k!==0?k:ku(R,D)}(e.mapValue,t.mapValue);case 11:return function(i,a){if(i===si.mapValue&&a===si.mapValue)return 0;if(i===si.mapValue)return 1;if(a===si.mapValue)return-1;const l=i.fields||{},u=Object.keys(l),f=a.fields||{},d=Object.keys(f);u.sort(),d.sort();for(let m=0;m<u.length&&m<d.length;++m){const T=pt(u[m],d[m]);if(T!==0)return T;const R=Sr(l[u[m]],f[d[m]]);if(R!==0)return R}return pt(u.length,d.length)}(e.mapValue,t.mapValue);default:throw st()}}function Nu(e,t){if(typeof e=="string"&&typeof t=="string"&&e.length===t.length)return pt(e,t);const n=In(e),r=In(t),s=pt(n.seconds,r.seconds);return s!==0?s:pt(n.nanos,r.nanos)}function ku(e,t){const n=e.values||[],r=t.values||[];for(let s=0;s<n.length&&s<r.length;++s){const i=Sr(n[s],r[s]);if(i)return i}return pt(n.length,r.length)}function Cr(e){return Pa(e)}function Pa(e){return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(n){const r=In(n);return`time(${r.seconds},${r.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?function(n){return An(n).toBase64()}(e.bytesValue):"referenceValue"in e?function(n){return Z.fromName(n).toString()}(e.referenceValue):"geoPointValue"in e?function(n){return`geo(${n.latitude},${n.longitude})`}(e.geoPointValue):"arrayValue"in e?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=Pa(i);return r+"]"}(e.arrayValue):"mapValue"in e?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const a of r)i?i=!1:s+=",",s+=`${a}:${Pa(n.fields[a])}`;return s+"}"}(e.mapValue):st()}function pi(e){switch(bn(e)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const t=io(e);return t?16+pi(t):16;case 5:return 2*e.stringValue.length;case 6:return An(e.bytesValue).approximateByteSize();case 7:return e.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((s,i)=>s+pi(i),0)}(e.arrayValue);case 10:case 11:return function(r){let s=0;return xn(r.fields,(i,a)=>{s+=i.length+pi(a)}),s}(e.mapValue);default:throw st()}}function Va(e){return!!e&&"integerValue"in e}function pl(e){return!!e&&"arrayValue"in e}function Ou(e){return!!e&&"nullValue"in e}function Mu(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function mi(e){return!!e&&"mapValue"in e}function Lv(e){var t,n;return((n=(((t=e==null?void 0:e.mapValue)===null||t===void 0?void 0:t.fields)||{})[ad])===null||n===void 0?void 0:n.stringValue)===ld}function us(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&typeof e.timestampValue=="object")return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){const t={mapValue:{fields:{}}};return xn(e.mapValue.fields,(n,r)=>t.mapValue.fields[n]=us(r)),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=us(e.arrayValue.values[n]);return t}return Object.assign({},e)}function Fv(e){return(((e.mapValue||{}).fields||{}).__type__||{}).stringValue===Mv}/**
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
 */class he{constructor(t){this.value=t}static empty(){return new he({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let n=this.value;for(let r=0;r<t.length-1;++r)if(n=(n.mapValue.fields||{})[t.get(r)],!mi(n))return null;return n=(n.mapValue.fields||{})[t.lastSegment()],n||null}}set(t,n){this.getFieldsMap(t.popLast())[t.lastSegment()]=us(n)}setAll(t){let n=Wt.emptyPath(),r={},s=[];t.forEach((a,l)=>{if(!n.isImmediateParentOf(l)){const u=this.getFieldsMap(n);this.applyChanges(u,r,s),r={},s=[],n=l.popLast()}a?r[l.lastSegment()]=us(a):s.push(l.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(t){const n=this.field(t.popLast());mi(n)&&n.mapValue.fields&&delete n.mapValue.fields[t.lastSegment()]}isEqual(t){return je(this.value,t.value)}getFieldsMap(t){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<t.length;++r){let s=n.mapValue.fields[t.get(r)];mi(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[t.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(t,n,r){xn(n,(s,i)=>t[s]=i);for(const s of r)delete t[s]}clone(){return new he(us(this.value))}}function cd(e){const t=[];return xn(e.fields,(n,r)=>{const s=new Wt([n]);if(mi(r)){const i=cd(r.mapValue).fields;if(i.length===0)t.push(s);else for(const a of i)t.push(s.child(a))}else t.push(s)}),new ve(t)}/**
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
 */class re{constructor(t,n,r,s,i,a,l){this.key=t,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=a,this.documentState=l}static newInvalidDocument(t){return new re(t,0,ot.min(),ot.min(),ot.min(),he.empty(),0)}static newFoundDocument(t,n,r,s){return new re(t,1,n,ot.min(),r,s,0)}static newNoDocument(t,n){return new re(t,2,n,ot.min(),ot.min(),he.empty(),0)}static newUnknownDocument(t,n){return new re(t,3,n,ot.min(),ot.min(),he.empty(),2)}convertToFoundDocument(t,n){return!this.createTime.isEqual(ot.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=he.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=he.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ot.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof re&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new re(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Ni{constructor(t,n){this.position=t,this.inclusive=n}}function Lu(e,t,n){let r=0;for(let s=0;s<e.position.length;s++){const i=t[s],a=e.position[s];if(i.field.isKeyField()?r=Z.comparator(Z.fromName(a.referenceValue),n.key):r=Sr(a,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function Fu(e,t){if(e===null)return t===null;if(t===null||e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!je(e.position[n],t.position[n]))return!1;return!0}/**
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
 */class ki{constructor(t,n="asc"){this.field=t,this.dir=n}}function Uv(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}/**
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
 */class ud{}class Lt extends ud{constructor(t,n,r){super(),this.field=t,this.op=n,this.value=r}static create(t,n,r){return t.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(t,n,r):new $v(t,n,r):n==="array-contains"?new Hv(t,r):n==="in"?new Kv(t,r):n==="not-in"?new zv(t,r):n==="array-contains-any"?new Wv(t,r):new Lt(t,n,r)}static createKeyFieldInFilter(t,n,r){return n==="in"?new jv(t,r):new qv(t,r)}matches(t){const n=t.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Sr(n,this.value)):n!==null&&bn(this.value)===bn(n)&&this.matchesComparison(Sr(n,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return st()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class qe extends ud{constructor(t,n){super(),this.filters=t,this.op=n,this.ce=null}static create(t,n){return new qe(t,n)}matches(t){return hd(this)?this.filters.find(n=>!n.matches(t))===void 0:this.filters.find(n=>n.matches(t))!==void 0}getFlattenedFilters(){return this.ce!==null||(this.ce=this.filters.reduce((t,n)=>t.concat(n.getFlattenedFilters()),[])),this.ce}getFilters(){return Object.assign([],this.filters)}}function hd(e){return e.op==="and"}function fd(e){return Bv(e)&&hd(e)}function Bv(e){for(const t of e.filters)if(t instanceof qe)return!1;return!0}function Da(e){if(e instanceof Lt)return e.field.canonicalString()+e.op.toString()+Cr(e.value);if(fd(e))return e.filters.map(t=>Da(t)).join(",");{const t=e.filters.map(n=>Da(n)).join(",");return`${e.op}(${t})`}}function dd(e,t){return e instanceof Lt?function(r,s){return s instanceof Lt&&r.op===s.op&&r.field.isEqual(s.field)&&je(r.value,s.value)}(e,t):e instanceof qe?function(r,s){return s instanceof qe&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,a,l)=>i&&dd(a,s.filters[l]),!0):!1}(e,t):void st()}function pd(e){return e instanceof Lt?function(n){return`${n.field.canonicalString()} ${n.op} ${Cr(n.value)}`}(e):e instanceof qe?function(n){return n.op.toString()+" {"+n.getFilters().map(pd).join(" ,")+"}"}(e):"Filter"}class $v extends Lt{constructor(t,n,r){super(t,n,r),this.key=Z.fromName(r.referenceValue)}matches(t){const n=Z.comparator(t.key,this.key);return this.matchesComparison(n)}}class jv extends Lt{constructor(t,n){super(t,"in",n),this.keys=md("in",n)}matches(t){return this.keys.some(n=>n.isEqual(t.key))}}class qv extends Lt{constructor(t,n){super(t,"not-in",n),this.keys=md("not-in",n)}matches(t){return!this.keys.some(n=>n.isEqual(t.key))}}function md(e,t){var n;return(((n=t.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>Z.fromName(r.referenceValue))}class Hv extends Lt{constructor(t,n){super(t,"array-contains",n)}matches(t){const n=t.data.field(this.field);return pl(n)&&As(n.arrayValue,this.value)}}class Kv extends Lt{constructor(t,n){super(t,"in",n)}matches(t){const n=t.data.field(this.field);return n!==null&&As(this.value.arrayValue,n)}}class zv extends Lt{constructor(t,n){super(t,"not-in",n)}matches(t){if(As(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=t.data.field(this.field);return n!==null&&!As(this.value.arrayValue,n)}}class Wv extends Lt{constructor(t,n){super(t,"array-contains-any",n)}matches(t){const n=t.data.field(this.field);return!(!pl(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>As(this.value.arrayValue,r))}}/**
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
 */class Gv{constructor(t,n=null,r=[],s=[],i=null,a=null,l=null){this.path=t,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=a,this.endAt=l,this.le=null}}function Uu(e,t=null,n=[],r=[],s=null,i=null,a=null){return new Gv(e,t,n,r,s,i,a)}function ml(e){const t=at(e);if(t.le===null){let n=t.path.canonicalString();t.collectionGroup!==null&&(n+="|cg:"+t.collectionGroup),n+="|f:",n+=t.filters.map(r=>Da(r)).join(","),n+="|ob:",n+=t.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),so(t.limit)||(n+="|l:",n+=t.limit),t.startAt&&(n+="|lb:",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map(r=>Cr(r)).join(",")),t.endAt&&(n+="|ub:",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map(r=>Cr(r)).join(",")),t.le=n}return t.le}function gl(e,t){if(e.limit!==t.limit||e.orderBy.length!==t.orderBy.length)return!1;for(let n=0;n<e.orderBy.length;n++)if(!Uv(e.orderBy[n],t.orderBy[n]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let n=0;n<e.filters.length;n++)if(!dd(e.filters[n],t.filters[n]))return!1;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!Fu(e.startAt,t.startAt)&&Fu(e.endAt,t.endAt)}function xa(e){return Z.isDocumentKey(e.path)&&e.collectionGroup===null&&e.filters.length===0}/**
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
 */class oo{constructor(t,n=null,r=[],s=[],i=null,a="F",l=null,u=null){this.path=t,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=a,this.startAt=l,this.endAt=u,this.he=null,this.Pe=null,this.Te=null,this.startAt,this.endAt}}function Qv(e,t,n,r,s,i,a,l){return new oo(e,t,n,r,s,i,a,l)}function gd(e){return new oo(e)}function Bu(e){return e.filters.length===0&&e.limit===null&&e.startAt==null&&e.endAt==null&&(e.explicitOrderBy.length===0||e.explicitOrderBy.length===1&&e.explicitOrderBy[0].field.isKeyField())}function Xv(e){return e.collectionGroup!==null}function hs(e){const t=at(e);if(t.he===null){t.he=[];const n=new Set;for(const i of t.explicitOrderBy)t.he.push(i),n.add(i.field.canonicalString());const r=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(a){let l=new Ut(Wt.comparator);return a.filters.forEach(u=>{u.getFlattenedFilters().forEach(f=>{f.isInequality()&&(l=l.add(f.field))})}),l})(t).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||t.he.push(new ki(i,r))}),n.has(Wt.keyField().canonicalString())||t.he.push(new ki(Wt.keyField(),r))}return t.he}function Me(e){const t=at(e);return t.Pe||(t.Pe=Yv(t,hs(e))),t.Pe}function Yv(e,t){if(e.limitType==="F")return Uu(e.path,e.collectionGroup,t,e.filters,e.limit,e.startAt,e.endAt);{t=t.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new ki(s.field,i)});const n=e.endAt?new Ni(e.endAt.position,e.endAt.inclusive):null,r=e.startAt?new Ni(e.startAt.position,e.startAt.inclusive):null;return Uu(e.path,e.collectionGroup,t,e.filters,e.limit,n,r)}}function Na(e,t,n){return new oo(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function ao(e,t){return gl(Me(e),Me(t))&&e.limitType===t.limitType}function _d(e){return`${ml(Me(e))}|lt:${e.limitType}`}function dr(e){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>pd(s)).join(", ")}]`),so(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>Cr(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>Cr(s)).join(",")),`Target(${r})`}(Me(e))}; limitType=${e.limitType})`}function lo(e,t){return t.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):Z.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(e,t)&&function(r,s){for(const i of hs(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(e,t)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(e,t)&&function(r,s){return!(r.startAt&&!function(a,l,u){const f=Lu(a,l,u);return a.inclusive?f<=0:f<0}(r.startAt,hs(r),s)||r.endAt&&!function(a,l,u){const f=Lu(a,l,u);return a.inclusive?f>=0:f>0}(r.endAt,hs(r),s))}(e,t)}function Jv(e){return e.collectionGroup||(e.path.length%2==1?e.path.lastSegment():e.path.get(e.path.length-2))}function yd(e){return(t,n)=>{let r=!1;for(const s of hs(e)){const i=Zv(s,t,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function Zv(e,t,n){const r=e.field.isKeyField()?Z.comparator(t.key,n.key):function(i,a,l){const u=a.data.field(i),f=l.data.field(i);return u!==null&&f!==null?Sr(u,f):st()}(e.field,t,n);switch(e.dir){case"asc":return r;case"desc":return-1*r;default:return st()}}/**
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
 */class sr{constructor(t,n){this.mapKeyFn=t,this.equalsFn=n,this.inner={},this.innerSize=0}get(t){const n=this.mapKeyFn(t),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,t))return i}}has(t){return this.get(t)!==void 0}set(t,n){const r=this.mapKeyFn(t),s=this.inner[r];if(s===void 0)return this.inner[r]=[[t,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],t))return void(s[i]=[t,n]);s.push([t,n]),this.innerSize++}delete(t){const n=this.mapKeyFn(t),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],t))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(t){xn(this.inner,(n,r)=>{for(const[s,i]of r)t(s,i)})}isEmpty(){return ed(this.inner)}size(){return this.innerSize}}/**
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
 */const tT=new Vt(Z.comparator);function rn(){return tT}const vd=new Vt(Z.comparator);function ns(...e){let t=vd;for(const n of e)t=t.insert(n.key,n);return t}function Td(e){let t=vd;return e.forEach((n,r)=>t=t.insert(n,r.overlayedDocument)),t}function Gn(){return fs()}function Ed(){return fs()}function fs(){return new sr(e=>e.toString(),(e,t)=>e.isEqual(t))}const eT=new Vt(Z.comparator),nT=new Ut(Z.comparator);function ft(...e){let t=nT;for(const n of e)t=t.add(n);return t}const rT=new Ut(pt);function sT(){return rT}/**
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
 */function _l(e,t){if(e.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Vi(t)?"-0":t}}function wd(e){return{integerValue:""+e}}function iT(e,t){return Dv(t)?wd(t):_l(e,t)}/**
 * @license
 * Copyright 2018 Google LLC
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
 */class co{constructor(){this._=void 0}}function oT(e,t,n){return e instanceof Oi?function(s,i){const a={fields:{[sd]:{stringValue:rd},[od]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&dl(i)&&(i=io(i)),i&&(a.fields[id]=i),{mapValue:a}}(n,t):e instanceof Pr?Ad(e,t):e instanceof bs?bd(e,t):function(s,i){const a=Id(s,i),l=$u(a)+$u(s.Ie);return Va(a)&&Va(s.Ie)?wd(l):_l(s.serializer,l)}(e,t)}function aT(e,t,n){return e instanceof Pr?Ad(e,t):e instanceof bs?bd(e,t):n}function Id(e,t){return e instanceof Mi?function(r){return Va(r)||function(i){return!!i&&"doubleValue"in i}(r)}(t)?t:{integerValue:0}:null}class Oi extends co{}class Pr extends co{constructor(t){super(),this.elements=t}}function Ad(e,t){const n=Rd(t);for(const r of e.elements)n.some(s=>je(s,r))||n.push(r);return{arrayValue:{values:n}}}class bs extends co{constructor(t){super(),this.elements=t}}function bd(e,t){let n=Rd(t);for(const r of e.elements)n=n.filter(s=>!je(s,r));return{arrayValue:{values:n}}}class Mi extends co{constructor(t,n){super(),this.serializer=t,this.Ie=n}}function $u(e){return xt(e.integerValue||e.doubleValue)}function Rd(e){return pl(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}/**
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
 */class lT{constructor(t,n){this.field=t,this.transform=n}}function cT(e,t){return e.field.isEqual(t.field)&&function(r,s){return r instanceof Pr&&s instanceof Pr||r instanceof bs&&s instanceof bs?Rr(r.elements,s.elements,je):r instanceof Mi&&s instanceof Mi?je(r.Ie,s.Ie):r instanceof Oi&&s instanceof Oi}(e.transform,t.transform)}class uT{constructor(t,n){this.version=t,this.transformResults=n}}class Le{constructor(t,n){this.updateTime=t,this.exists=n}static none(){return new Le}static exists(t){return new Le(void 0,t)}static updateTime(t){return new Le(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function gi(e,t){return e.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(e.updateTime):e.exists===void 0||e.exists===t.isFoundDocument()}class uo{}function Sd(e,t){if(!e.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return e.isNoDocument()?new Pd(e.key,Le.none()):new Vs(e.key,e.data,Le.none());{const n=e.data,r=he.empty();let s=new Ut(Wt.comparator);for(let i of t.fields)if(!s.has(i)){let a=n.field(i);a===null&&i.length>1&&(i=i.popLast(),a=n.field(i)),a===null?r.delete(i):r.set(i,a),s=s.add(i)}return new Nn(e.key,r,new ve(s.toArray()),Le.none())}}function hT(e,t,n){e instanceof Vs?function(s,i,a){const l=s.value.clone(),u=qu(s.fieldTransforms,i,a.transformResults);l.setAll(u),i.convertToFoundDocument(a.version,l).setHasCommittedMutations()}(e,t,n):e instanceof Nn?function(s,i,a){if(!gi(s.precondition,i))return void i.convertToUnknownDocument(a.version);const l=qu(s.fieldTransforms,i,a.transformResults),u=i.data;u.setAll(Cd(s)),u.setAll(l),i.convertToFoundDocument(a.version,u).setHasCommittedMutations()}(e,t,n):function(s,i,a){i.convertToNoDocument(a.version).setHasCommittedMutations()}(0,t,n)}function ds(e,t,n,r){return e instanceof Vs?function(i,a,l,u){if(!gi(i.precondition,a))return l;const f=i.value.clone(),d=Hu(i.fieldTransforms,u,a);return f.setAll(d),a.convertToFoundDocument(a.version,f).setHasLocalMutations(),null}(e,t,n,r):e instanceof Nn?function(i,a,l,u){if(!gi(i.precondition,a))return l;const f=Hu(i.fieldTransforms,u,a),d=a.data;return d.setAll(Cd(i)),d.setAll(f),a.convertToFoundDocument(a.version,d).setHasLocalMutations(),l===null?null:l.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(m=>m.field))}(e,t,n,r):function(i,a,l){return gi(i.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):l}(e,t,n)}function fT(e,t){let n=null;for(const r of e.fieldTransforms){const s=t.data.field(r.field),i=Id(r.transform,s||null);i!=null&&(n===null&&(n=he.empty()),n.set(r.field,i))}return n||null}function ju(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&Rr(r,s,(i,a)=>cT(i,a))}(e.fieldTransforms,t.fieldTransforms)&&(e.type===0?e.value.isEqual(t.value):e.type!==1||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}class Vs extends uo{constructor(t,n,r,s=[]){super(),this.key=t,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Nn extends uo{constructor(t,n,r,s,i=[]){super(),this.key=t,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Cd(e){const t=new Map;return e.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=e.data.field(n);t.set(n,r)}}),t}function qu(e,t,n){const r=new Map;It(e.length===n.length);for(let s=0;s<n.length;s++){const i=e[s],a=i.transform,l=t.data.field(i.field);r.set(i.field,aT(a,l,n[s]))}return r}function Hu(e,t,n){const r=new Map;for(const s of e){const i=s.transform,a=n.data.field(s.field);r.set(s.field,oT(i,a,t))}return r}class Pd extends uo{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class dT extends uo{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class pT{constructor(t,n,r,s){this.batchId=t,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(t,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(t.key)&&hT(i,t,r[s])}}applyToLocalView(t,n){for(const r of this.baseMutations)r.key.isEqual(t.key)&&(n=ds(r,t,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(t.key)&&(n=ds(r,t,n,this.localWriteTime));return n}applyToLocalDocumentSet(t,n){const r=Ed();return this.mutations.forEach(s=>{const i=t.get(s.key),a=i.overlayedDocument;let l=this.applyToLocalView(a,i.mutatedFields);l=n.has(s.key)?null:l;const u=Sd(a,l);u!==null&&r.set(s.key,u),a.isValidDocument()||a.convertToNoDocument(ot.min())}),r}keys(){return this.mutations.reduce((t,n)=>t.add(n.key),ft())}isEqual(t){return this.batchId===t.batchId&&Rr(this.mutations,t.mutations,(n,r)=>ju(n,r))&&Rr(this.baseMutations,t.baseMutations,(n,r)=>ju(n,r))}}class yl{constructor(t,n,r,s){this.batch=t,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(t,n,r){It(t.mutations.length===r.length);let s=function(){return eT}();const i=t.mutations;for(let a=0;a<i.length;a++)s=s.insert(i[a].key,r[a].version);return new yl(t,n,r,s)}}/**
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
 */class mT{constructor(t,n){this.largestBatchId=t,this.mutation=n}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
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
 */class gT{constructor(t,n){this.count=t,this.unchangedNames=n}}/**
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
 */var Nt,gt;function _T(e){switch(e){case N.OK:return st();case N.CANCELLED:case N.UNKNOWN:case N.DEADLINE_EXCEEDED:case N.RESOURCE_EXHAUSTED:case N.INTERNAL:case N.UNAVAILABLE:case N.UNAUTHENTICATED:return!1;case N.INVALID_ARGUMENT:case N.NOT_FOUND:case N.ALREADY_EXISTS:case N.PERMISSION_DENIED:case N.FAILED_PRECONDITION:case N.ABORTED:case N.OUT_OF_RANGE:case N.UNIMPLEMENTED:case N.DATA_LOSS:return!0;default:return st()}}function Vd(e){if(e===void 0)return nn("GRPC error has no .code"),N.UNKNOWN;switch(e){case Nt.OK:return N.OK;case Nt.CANCELLED:return N.CANCELLED;case Nt.UNKNOWN:return N.UNKNOWN;case Nt.DEADLINE_EXCEEDED:return N.DEADLINE_EXCEEDED;case Nt.RESOURCE_EXHAUSTED:return N.RESOURCE_EXHAUSTED;case Nt.INTERNAL:return N.INTERNAL;case Nt.UNAVAILABLE:return N.UNAVAILABLE;case Nt.UNAUTHENTICATED:return N.UNAUTHENTICATED;case Nt.INVALID_ARGUMENT:return N.INVALID_ARGUMENT;case Nt.NOT_FOUND:return N.NOT_FOUND;case Nt.ALREADY_EXISTS:return N.ALREADY_EXISTS;case Nt.PERMISSION_DENIED:return N.PERMISSION_DENIED;case Nt.FAILED_PRECONDITION:return N.FAILED_PRECONDITION;case Nt.ABORTED:return N.ABORTED;case Nt.OUT_OF_RANGE:return N.OUT_OF_RANGE;case Nt.UNIMPLEMENTED:return N.UNIMPLEMENTED;case Nt.DATA_LOSS:return N.DATA_LOSS;default:return st()}}(gt=Nt||(Nt={}))[gt.OK=0]="OK",gt[gt.CANCELLED=1]="CANCELLED",gt[gt.UNKNOWN=2]="UNKNOWN",gt[gt.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",gt[gt.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",gt[gt.NOT_FOUND=5]="NOT_FOUND",gt[gt.ALREADY_EXISTS=6]="ALREADY_EXISTS",gt[gt.PERMISSION_DENIED=7]="PERMISSION_DENIED",gt[gt.UNAUTHENTICATED=16]="UNAUTHENTICATED",gt[gt.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",gt[gt.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",gt[gt.ABORTED=10]="ABORTED",gt[gt.OUT_OF_RANGE=11]="OUT_OF_RANGE",gt[gt.UNIMPLEMENTED=12]="UNIMPLEMENTED",gt[gt.INTERNAL=13]="INTERNAL",gt[gt.UNAVAILABLE=14]="UNAVAILABLE",gt[gt.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function yT(){return new TextEncoder}/**
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
 */const vT=new _n([4294967295,4294967295],0);function Ku(e){const t=yT().encode(e),n=new zf;return n.update(t),new Uint8Array(n.digest())}function zu(e){const t=new DataView(e.buffer),n=t.getUint32(0,!0),r=t.getUint32(4,!0),s=t.getUint32(8,!0),i=t.getUint32(12,!0);return[new _n([n,r],0),new _n([s,i],0)]}class vl{constructor(t,n,r){if(this.bitmap=t,this.padding=n,this.hashCount=r,n<0||n>=8)throw new rs(`Invalid padding: ${n}`);if(r<0)throw new rs(`Invalid hash count: ${r}`);if(t.length>0&&this.hashCount===0)throw new rs(`Invalid hash count: ${r}`);if(t.length===0&&n!==0)throw new rs(`Invalid padding when bitmap length is 0: ${n}`);this.Ee=8*t.length-n,this.de=_n.fromNumber(this.Ee)}Ae(t,n,r){let s=t.add(n.multiply(_n.fromNumber(r)));return s.compare(vT)===1&&(s=new _n([s.getBits(0),s.getBits(1)],0)),s.modulo(this.de).toNumber()}Re(t){return!!(this.bitmap[Math.floor(t/8)]&1<<t%8)}mightContain(t){if(this.Ee===0)return!1;const n=Ku(t),[r,s]=zu(n);for(let i=0;i<this.hashCount;i++){const a=this.Ae(r,s,i);if(!this.Re(a))return!1}return!0}static create(t,n,r){const s=t%8==0?0:8-t%8,i=new Uint8Array(Math.ceil(t/8)),a=new vl(i,s,n);return r.forEach(l=>a.insert(l)),a}insert(t){if(this.Ee===0)return;const n=Ku(t),[r,s]=zu(n);for(let i=0;i<this.hashCount;i++){const a=this.Ae(r,s,i);this.Ve(a)}}Ve(t){const n=Math.floor(t/8),r=t%8;this.bitmap[n]|=1<<r}}class rs extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class ho{constructor(t,n,r,s,i){this.snapshotVersion=t,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(t,n,r){const s=new Map;return s.set(t,Ds.createSynthesizedTargetChangeForCurrentChange(t,n,r)),new ho(ot.min(),s,new Vt(pt),rn(),ft())}}class Ds{constructor(t,n,r,s,i){this.resumeToken=t,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(t,n,r){return new Ds(r,n,ft(),ft(),ft())}}/**
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
 */class _i{constructor(t,n,r,s){this.me=t,this.removedTargetIds=n,this.key=r,this.fe=s}}class Dd{constructor(t,n){this.targetId=t,this.ge=n}}class xd{constructor(t,n,r=Gt.EMPTY_BYTE_STRING,s=null){this.state=t,this.targetIds=n,this.resumeToken=r,this.cause=s}}class Wu{constructor(){this.pe=0,this.ye=Gu(),this.we=Gt.EMPTY_BYTE_STRING,this.be=!1,this.Se=!0}get current(){return this.be}get resumeToken(){return this.we}get De(){return this.pe!==0}get ve(){return this.Se}Ce(t){t.approximateByteSize()>0&&(this.Se=!0,this.we=t)}Fe(){let t=ft(),n=ft(),r=ft();return this.ye.forEach((s,i)=>{switch(i){case 0:t=t.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:st()}}),new Ds(this.we,this.be,t,n,r)}Me(){this.Se=!1,this.ye=Gu()}xe(t,n){this.Se=!0,this.ye=this.ye.insert(t,n)}Oe(t){this.Se=!0,this.ye=this.ye.remove(t)}Ne(){this.pe+=1}Be(){this.pe-=1,It(this.pe>=0)}Le(){this.Se=!0,this.be=!0}}class TT{constructor(t){this.ke=t,this.qe=new Map,this.Qe=rn(),this.$e=ii(),this.Ke=ii(),this.Ue=new Vt(pt)}We(t){for(const n of t.me)t.fe&&t.fe.isFoundDocument()?this.Ge(n,t.fe):this.ze(n,t.key,t.fe);for(const n of t.removedTargetIds)this.ze(n,t.key,t.fe)}je(t){this.forEachTarget(t,n=>{const r=this.He(n);switch(t.state){case 0:this.Je(n)&&r.Ce(t.resumeToken);break;case 1:r.Be(),r.De||r.Me(),r.Ce(t.resumeToken);break;case 2:r.Be(),r.De||this.removeTarget(n);break;case 3:this.Je(n)&&(r.Le(),r.Ce(t.resumeToken));break;case 4:this.Je(n)&&(this.Ye(n),r.Ce(t.resumeToken));break;default:st()}})}forEachTarget(t,n){t.targetIds.length>0?t.targetIds.forEach(n):this.qe.forEach((r,s)=>{this.Je(s)&&n(s)})}Ze(t){const n=t.targetId,r=t.ge.count,s=this.Xe(n);if(s){const i=s.target;if(xa(i))if(r===0){const a=new Z(i.path);this.ze(n,a,re.newNoDocument(a,ot.min()))}else It(r===1);else{const a=this.et(n);if(a!==r){const l=this.tt(t),u=l?this.nt(l,t,a):1;if(u!==0){this.Ye(n);const f=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ue=this.Ue.insert(n,f)}}}}}tt(t){const n=t.ge.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let a,l;try{a=An(r).toUint8Array()}catch(u){if(u instanceof nd)return br("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{l=new vl(a,s,i)}catch(u){return br(u instanceof rs?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return l.Ee===0?null:l}nt(t,n,r){return n.ge.count===r-this.st(t,n.targetId)?0:2}st(t,n){const r=this.ke.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const a=this.ke.it(),l=`projects/${a.projectId}/databases/${a.database}/documents/${i.path.canonicalString()}`;t.mightContain(l)||(this.ze(n,i,null),s++)}),s}ot(t){const n=new Map;this.qe.forEach((i,a)=>{const l=this.Xe(a);if(l){if(i.current&&xa(l.target)){const u=new Z(l.target.path);this._t(u).has(a)||this.ut(a,u)||this.ze(a,u,re.newNoDocument(u,t))}i.ve&&(n.set(a,i.Fe()),i.Me())}});let r=ft();this.Ke.forEach((i,a)=>{let l=!0;a.forEachWhile(u=>{const f=this.Xe(u);return!f||f.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(i))}),this.Qe.forEach((i,a)=>a.setReadTime(t));const s=new ho(t,n,this.Ue,this.Qe,r);return this.Qe=rn(),this.$e=ii(),this.Ke=ii(),this.Ue=new Vt(pt),s}Ge(t,n){if(!this.Je(t))return;const r=this.ut(t,n.key)?2:0;this.He(t).xe(n.key,r),this.Qe=this.Qe.insert(n.key,n),this.$e=this.$e.insert(n.key,this._t(n.key).add(t)),this.Ke=this.Ke.insert(n.key,this.ct(n.key).add(t))}ze(t,n,r){if(!this.Je(t))return;const s=this.He(t);this.ut(t,n)?s.xe(n,1):s.Oe(n),this.Ke=this.Ke.insert(n,this.ct(n).delete(t)),this.Ke=this.Ke.insert(n,this.ct(n).add(t)),r&&(this.Qe=this.Qe.insert(n,r))}removeTarget(t){this.qe.delete(t)}et(t){const n=this.He(t).Fe();return this.ke.getRemoteKeysForTarget(t).size+n.addedDocuments.size-n.removedDocuments.size}Ne(t){this.He(t).Ne()}He(t){let n=this.qe.get(t);return n||(n=new Wu,this.qe.set(t,n)),n}ct(t){let n=this.Ke.get(t);return n||(n=new Ut(pt),this.Ke=this.Ke.insert(t,n)),n}_t(t){let n=this.$e.get(t);return n||(n=new Ut(pt),this.$e=this.$e.insert(t,n)),n}Je(t){const n=this.Xe(t)!==null;return n||K("WatchChangeAggregator","Detected inactive target",t),n}Xe(t){const n=this.qe.get(t);return n&&n.De?null:this.ke.lt(t)}Ye(t){this.qe.set(t,new Wu),this.ke.getRemoteKeysForTarget(t).forEach(n=>{this.ze(t,n,null)})}ut(t,n){return this.ke.getRemoteKeysForTarget(t).has(n)}}function ii(){return new Vt(Z.comparator)}function Gu(){return new Vt(Z.comparator)}const ET={asc:"ASCENDING",desc:"DESCENDING"},wT={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},IT={and:"AND",or:"OR"};class AT{constructor(t,n){this.databaseId=t,this.useProto3Json=n}}function ka(e,t){return e.useProto3Json||so(t)?t:{value:t}}function Li(e,t){return e.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function Nd(e,t){return e.useProto3Json?t.toBase64():t.toUint8Array()}function bT(e,t){return Li(e,t.toTimestamp())}function Fe(e){return It(!!e),ot.fromTimestamp(function(n){const r=In(n);return new Ft(r.seconds,r.nanos)}(e))}function Tl(e,t){return Oa(e,t).canonicalString()}function Oa(e,t){const n=function(s){return new Pt(["projects",s.projectId,"databases",s.database])}(e).child("documents");return t===void 0?n:n.child(t)}function kd(e){const t=Pt.fromString(e);return It(Ud(t)),t}function Ma(e,t){return Tl(e.databaseId,t.path)}function na(e,t){const n=kd(t);if(n.get(1)!==e.databaseId.projectId)throw new Y(N.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new Y(N.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new Z(Md(n))}function Od(e,t){return Tl(e.databaseId,t)}function RT(e){const t=kd(e);return t.length===4?Pt.emptyPath():Md(t)}function La(e){return new Pt(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function Md(e){return It(e.length>4&&e.get(4)==="documents"),e.popFirst(5)}function Qu(e,t,n){return{name:Ma(e,t),fields:n.value.mapValue.fields}}function ST(e,t){let n;if("targetChange"in t){t.targetChange;const r=function(f){return f==="NO_CHANGE"?0:f==="ADD"?1:f==="REMOVE"?2:f==="CURRENT"?3:f==="RESET"?4:st()}(t.targetChange.targetChangeType||"NO_CHANGE"),s=t.targetChange.targetIds||[],i=function(f,d){return f.useProto3Json?(It(d===void 0||typeof d=="string"),Gt.fromBase64String(d||"")):(It(d===void 0||d instanceof Buffer||d instanceof Uint8Array),Gt.fromUint8Array(d||new Uint8Array))}(e,t.targetChange.resumeToken),a=t.targetChange.cause,l=a&&function(f){const d=f.code===void 0?N.UNKNOWN:Vd(f.code);return new Y(d,f.message||"")}(a);n=new xd(r,s,i,l||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const s=na(e,r.document.name),i=Fe(r.document.updateTime),a=r.document.createTime?Fe(r.document.createTime):ot.min(),l=new he({mapValue:{fields:r.document.fields}}),u=re.newFoundDocument(s,i,a,l),f=r.targetIds||[],d=r.removedTargetIds||[];n=new _i(f,d,u.key,u)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const s=na(e,r.document),i=r.readTime?Fe(r.readTime):ot.min(),a=re.newNoDocument(s,i),l=r.removedTargetIds||[];n=new _i([],l,a.key,a)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const s=na(e,r.document),i=r.removedTargetIds||[];n=new _i([],i,s,null)}else{if(!("filter"in t))return st();{t.filter;const r=t.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,a=new gT(s,i),l=r.targetId;n=new Dd(l,a)}}return n}function CT(e,t){let n;if(t instanceof Vs)n={update:Qu(e,t.key,t.value)};else if(t instanceof Pd)n={delete:Ma(e,t.key)};else if(t instanceof Nn)n={update:Qu(e,t.key,t.data),updateMask:LT(t.fieldMask)};else{if(!(t instanceof dT))return st();n={verify:Ma(e,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map(r=>function(i,a){const l=a.transform;if(l instanceof Oi)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof Pr)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof bs)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof Mi)return{fieldPath:a.field.canonicalString(),increment:l.Ie};throw st()}(0,r))),t.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:bT(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:st()}(e,t.precondition)),n}function PT(e,t){return e&&e.length>0?(It(t!==void 0),e.map(n=>function(s,i){let a=s.updateTime?Fe(s.updateTime):Fe(i);return a.isEqual(ot.min())&&(a=Fe(i)),new uT(a,s.transformResults||[])}(n,t))):[]}function VT(e,t){return{documents:[Od(e,t.path)]}}function DT(e,t){const n={structuredQuery:{}},r=t.path;let s;t.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=Od(e,s);const i=function(f){if(f.length!==0)return Fd(qe.create(f,"and"))}(t.filters);i&&(n.structuredQuery.where=i);const a=function(f){if(f.length!==0)return f.map(d=>function(T){return{field:pr(T.field),direction:kT(T.dir)}}(d))}(t.orderBy);a&&(n.structuredQuery.orderBy=a);const l=ka(e,t.limit);return l!==null&&(n.structuredQuery.limit=l),t.startAt&&(n.structuredQuery.startAt=function(f){return{before:f.inclusive,values:f.position}}(t.startAt)),t.endAt&&(n.structuredQuery.endAt=function(f){return{before:!f.inclusive,values:f.position}}(t.endAt)),{ht:n,parent:s}}function xT(e){let t=RT(e.parent);const n=e.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){It(r===1);const d=n.from[0];d.allDescendants?s=d.collectionId:t=t.child(d.collectionId)}let i=[];n.where&&(i=function(m){const T=Ld(m);return T instanceof qe&&fd(T)?T.getFilters():[T]}(n.where));let a=[];n.orderBy&&(a=function(m){return m.map(T=>function(D){return new ki(mr(D.field),function(F){switch(F){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(D.direction))}(T))}(n.orderBy));let l=null;n.limit&&(l=function(m){let T;return T=typeof m=="object"?m.value:m,so(T)?null:T}(n.limit));let u=null;n.startAt&&(u=function(m){const T=!!m.before,R=m.values||[];return new Ni(R,T)}(n.startAt));let f=null;return n.endAt&&(f=function(m){const T=!m.before,R=m.values||[];return new Ni(R,T)}(n.endAt)),Qv(t,s,a,i,l,"F",u,f)}function NT(e,t){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return st()}}(t.purpose);return n==null?null:{"goog-listen-tags":n}}function Ld(e){return e.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=mr(n.unaryFilter.field);return Lt.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=mr(n.unaryFilter.field);return Lt.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=mr(n.unaryFilter.field);return Lt.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=mr(n.unaryFilter.field);return Lt.create(a,"!=",{nullValue:"NULL_VALUE"});default:return st()}}(e):e.fieldFilter!==void 0?function(n){return Lt.create(mr(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return st()}}(n.fieldFilter.op),n.fieldFilter.value)}(e):e.compositeFilter!==void 0?function(n){return qe.create(n.compositeFilter.filters.map(r=>Ld(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return st()}}(n.compositeFilter.op))}(e):st()}function kT(e){return ET[e]}function OT(e){return wT[e]}function MT(e){return IT[e]}function pr(e){return{fieldPath:e.canonicalString()}}function mr(e){return Wt.fromServerFormat(e.fieldPath)}function Fd(e){return e instanceof Lt?function(n){if(n.op==="=="){if(Mu(n.value))return{unaryFilter:{field:pr(n.field),op:"IS_NAN"}};if(Ou(n.value))return{unaryFilter:{field:pr(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Mu(n.value))return{unaryFilter:{field:pr(n.field),op:"IS_NOT_NAN"}};if(Ou(n.value))return{unaryFilter:{field:pr(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:pr(n.field),op:OT(n.op),value:n.value}}}(e):e instanceof qe?function(n){const r=n.getFilters().map(s=>Fd(s));return r.length===1?r[0]:{compositeFilter:{op:MT(n.op),filters:r}}}(e):st()}function LT(e){const t=[];return e.fields.forEach(n=>t.push(n.canonicalString())),{fieldPaths:t}}function Ud(e){return e.length>=4&&e.get(0)==="projects"&&e.get(2)==="databases"}/**
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
 */class dn{constructor(t,n,r,s,i=ot.min(),a=ot.min(),l=Gt.EMPTY_BYTE_STRING,u=null){this.target=t,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=l,this.expectedCount=u}withSequenceNumber(t){return new dn(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,n){return new dn(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new dn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new dn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
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
 */class FT{constructor(t){this.Tt=t}}function UT(e){const t=xT({parent:e.parent,structuredQuery:e.structuredQuery});return e.limitType==="LAST"?Na(t,t.limit,"L"):t}/**
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
 */class BT{constructor(){this.Tn=new $T}addToCollectionParentIndex(t,n){return this.Tn.add(n),V.resolve()}getCollectionParents(t,n){return V.resolve(this.Tn.getEntries(n))}addFieldIndex(t,n){return V.resolve()}deleteFieldIndex(t,n){return V.resolve()}deleteAllFieldIndexes(t){return V.resolve()}createTargetIndexes(t,n){return V.resolve()}getDocumentsMatchingTarget(t,n){return V.resolve(null)}getIndexType(t,n){return V.resolve(0)}getFieldIndexes(t,n){return V.resolve([])}getNextCollectionGroupToUpdate(t){return V.resolve(null)}getMinOffset(t,n){return V.resolve(wn.min())}getMinOffsetFromCollectionGroup(t,n){return V.resolve(wn.min())}updateCollectionGroup(t,n,r){return V.resolve()}updateIndexEntries(t,n){return V.resolve()}}class $T{constructor(){this.index={}}add(t){const n=t.lastSegment(),r=t.popLast(),s=this.index[n]||new Ut(Pt.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(t){const n=t.lastSegment(),r=t.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(t){return(this.index[t]||new Ut(Pt.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
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
 */const Xu={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Bd=41943040;class ue{static withCacheSize(t){return new ue(t,ue.DEFAULT_COLLECTION_PERCENTILE,ue.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(t,n,r){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
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
 */ue.DEFAULT_COLLECTION_PERCENTILE=10,ue.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,ue.DEFAULT=new ue(Bd,ue.DEFAULT_COLLECTION_PERCENTILE,ue.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),ue.DISABLED=new ue(-1,0,0);/**
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
 */class Vr{constructor(t){this.$n=t}next(){return this.$n+=2,this.$n}static Kn(){return new Vr(0)}static Un(){return new Vr(-1)}}/**
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
 */const Yu="LruGarbageCollector",jT=1048576;function Ju([e,t],[n,r]){const s=pt(e,n);return s===0?pt(t,r):s}class qT{constructor(t){this.Hn=t,this.buffer=new Ut(Ju),this.Jn=0}Yn(){return++this.Jn}Zn(t){const n=[t,this.Yn()];if(this.buffer.size<this.Hn)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();Ju(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class HT{constructor(t,n,r){this.garbageCollector=t,this.asyncQueue=n,this.localStore=r,this.Xn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.er(6e4)}stop(){this.Xn&&(this.Xn.cancel(),this.Xn=null)}get started(){return this.Xn!==null}er(t){K(Yu,`Garbage collection scheduled in ${t}ms`),this.Xn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",t,async()=>{this.Xn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){Or(n)?K(Yu,"Ignoring IndexedDB error during garbage collection: ",n):await kr(n)}await this.er(3e5)})}}class KT{constructor(t,n){this.tr=t,this.params=n}calculateTargetCount(t,n){return this.tr.nr(t).next(r=>Math.floor(n/100*r))}nthSequenceNumber(t,n){if(n===0)return V.resolve(ro.ae);const r=new qT(n);return this.tr.forEachTarget(t,s=>r.Zn(s.sequenceNumber)).next(()=>this.tr.rr(t,s=>r.Zn(s))).next(()=>r.maxValue)}removeTargets(t,n,r){return this.tr.removeTargets(t,n,r)}removeOrphanedDocuments(t,n){return this.tr.removeOrphanedDocuments(t,n)}collect(t,n){return this.params.cacheSizeCollectionThreshold===-1?(K("LruGarbageCollector","Garbage collection skipped; disabled"),V.resolve(Xu)):this.getCacheSize(t).next(r=>r<this.params.cacheSizeCollectionThreshold?(K("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Xu):this.ir(t,n))}getCacheSize(t){return this.tr.getCacheSize(t)}ir(t,n){let r,s,i,a,l,u,f;const d=Date.now();return this.calculateTargetCount(t,this.params.percentileToCollect).next(m=>(m>this.params.maximumSequenceNumbersToCollect?(K("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${m}`),s=this.params.maximumSequenceNumbersToCollect):s=m,a=Date.now(),this.nthSequenceNumber(t,s))).next(m=>(r=m,l=Date.now(),this.removeTargets(t,r,n))).next(m=>(i=m,u=Date.now(),this.removeOrphanedDocuments(t,r))).next(m=>(f=Date.now(),fr()<=yt.DEBUG&&K("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${a-d}ms
	Determined least recently used ${s} in `+(l-a)+`ms
	Removed ${i} targets in `+(u-l)+`ms
	Removed ${m} documents in `+(f-u)+`ms
Total Duration: ${f-d}ms`),V.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:m})))}}function zT(e,t){return new KT(e,t)}/**
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
 */class WT{constructor(){this.changes=new sr(t=>t.toString(),(t,n)=>t.isEqual(n)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,n){this.assertNotApplied(),this.changes.set(t,re.newInvalidDocument(t).setReadTime(n))}getEntry(t,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?V.resolve(r):this.getFromCache(t,n)}getEntries(t,n){return this.getAllFromCache(t,n)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
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
 *//**
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
 */class GT{constructor(t,n){this.overlayedDocument=t,this.mutatedFields=n}}/**
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
 */class QT{constructor(t,n,r,s){this.remoteDocumentCache=t,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(t,n){let r=null;return this.documentOverlayCache.getOverlay(t,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(t,n))).next(s=>(r!==null&&ds(r.mutation,s,ve.empty(),Ft.now()),s))}getDocuments(t,n){return this.remoteDocumentCache.getEntries(t,n).next(r=>this.getLocalViewOfDocuments(t,r,ft()).next(()=>r))}getLocalViewOfDocuments(t,n,r=ft()){const s=Gn();return this.populateOverlays(t,s,n).next(()=>this.computeViews(t,n,s,r).next(i=>{let a=ns();return i.forEach((l,u)=>{a=a.insert(l,u.overlayedDocument)}),a}))}getOverlayedDocuments(t,n){const r=Gn();return this.populateOverlays(t,r,n).next(()=>this.computeViews(t,n,r,ft()))}populateOverlays(t,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(t,s).next(i=>{i.forEach((a,l)=>{n.set(a,l)})})}computeViews(t,n,r,s){let i=rn();const a=fs(),l=function(){return fs()}();return n.forEach((u,f)=>{const d=r.get(f.key);s.has(f.key)&&(d===void 0||d.mutation instanceof Nn)?i=i.insert(f.key,f):d!==void 0?(a.set(f.key,d.mutation.getFieldMask()),ds(d.mutation,f,d.mutation.getFieldMask(),Ft.now())):a.set(f.key,ve.empty())}),this.recalculateAndSaveOverlays(t,i).next(u=>(u.forEach((f,d)=>a.set(f,d)),n.forEach((f,d)=>{var m;return l.set(f,new GT(d,(m=a.get(f))!==null&&m!==void 0?m:null))}),l))}recalculateAndSaveOverlays(t,n){const r=fs();let s=new Vt((a,l)=>a-l),i=ft();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,n).next(a=>{for(const l of a)l.keys().forEach(u=>{const f=n.get(u);if(f===null)return;let d=r.get(u)||ve.empty();d=l.applyToLocalView(f,d),r.set(u,d);const m=(s.get(l.batchId)||ft()).add(u);s=s.insert(l.batchId,m)})}).next(()=>{const a=[],l=s.getReverseIterator();for(;l.hasNext();){const u=l.getNext(),f=u.key,d=u.value,m=Ed();d.forEach(T=>{if(!i.has(T)){const R=Sd(n.get(T),r.get(T));R!==null&&m.set(T,R),i=i.add(T)}}),a.push(this.documentOverlayCache.saveOverlays(t,f,m))}return V.waitFor(a)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(t,n){return this.remoteDocumentCache.getEntries(t,n).next(r=>this.recalculateAndSaveOverlays(t,r))}getDocumentsMatchingQuery(t,n,r,s){return function(a){return Z.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(t,n.path):Xv(n)?this.getDocumentsMatchingCollectionGroupQuery(t,n,r,s):this.getDocumentsMatchingCollectionQuery(t,n,r,s)}getNextDocuments(t,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(t,n,r,s).next(i=>{const a=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,n,r.largestBatchId,s-i.size):V.resolve(Gn());let l=Es,u=i;return a.next(f=>V.forEach(f,(d,m)=>(l<m.largestBatchId&&(l=m.largestBatchId),i.get(d)?V.resolve():this.remoteDocumentCache.getEntry(t,d).next(T=>{u=u.insert(d,T)}))).next(()=>this.populateOverlays(t,f,i)).next(()=>this.computeViews(t,u,f,ft())).next(d=>({batchId:l,changes:Td(d)})))})}getDocumentsMatchingDocumentQuery(t,n){return this.getDocument(t,new Z(n)).next(r=>{let s=ns();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(t,n,r,s){const i=n.collectionGroup;let a=ns();return this.indexManager.getCollectionParents(t,i).next(l=>V.forEach(l,u=>{const f=function(m,T){return new oo(T,null,m.explicitOrderBy.slice(),m.filters.slice(),m.limit,m.limitType,m.startAt,m.endAt)}(n,u.child(i));return this.getDocumentsMatchingCollectionQuery(t,f,r,s).next(d=>{d.forEach((m,T)=>{a=a.insert(m,T)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(t,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(t,n.path,r.largestBatchId).next(a=>(i=a,this.remoteDocumentCache.getDocumentsMatchingQuery(t,n,r,i,s))).next(a=>{i.forEach((u,f)=>{const d=f.getKey();a.get(d)===null&&(a=a.insert(d,re.newInvalidDocument(d)))});let l=ns();return a.forEach((u,f)=>{const d=i.get(u);d!==void 0&&ds(d.mutation,f,ve.empty(),Ft.now()),lo(n,f)&&(l=l.insert(u,f))}),l})}}/**
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
 */class XT{constructor(t){this.serializer=t,this.dr=new Map,this.Ar=new Map}getBundleMetadata(t,n){return V.resolve(this.dr.get(n))}saveBundleMetadata(t,n){return this.dr.set(n.id,function(s){return{id:s.id,version:s.version,createTime:Fe(s.createTime)}}(n)),V.resolve()}getNamedQuery(t,n){return V.resolve(this.Ar.get(n))}saveNamedQuery(t,n){return this.Ar.set(n.name,function(s){return{name:s.name,query:UT(s.bundledQuery),readTime:Fe(s.readTime)}}(n)),V.resolve()}}/**
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
 */class YT{constructor(){this.overlays=new Vt(Z.comparator),this.Rr=new Map}getOverlay(t,n){return V.resolve(this.overlays.get(n))}getOverlays(t,n){const r=Gn();return V.forEach(n,s=>this.getOverlay(t,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(t,n,r){return r.forEach((s,i)=>{this.Et(t,n,i)}),V.resolve()}removeOverlaysForBatchId(t,n,r){const s=this.Rr.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Rr.delete(r)),V.resolve()}getOverlaysForCollection(t,n,r){const s=Gn(),i=n.length+1,a=new Z(n.child("")),l=this.overlays.getIteratorFrom(a);for(;l.hasNext();){const u=l.getNext().value,f=u.getKey();if(!n.isPrefixOf(f.path))break;f.path.length===i&&u.largestBatchId>r&&s.set(u.getKey(),u)}return V.resolve(s)}getOverlaysForCollectionGroup(t,n,r,s){let i=new Vt((f,d)=>f-d);const a=this.overlays.getIterator();for(;a.hasNext();){const f=a.getNext().value;if(f.getKey().getCollectionGroup()===n&&f.largestBatchId>r){let d=i.get(f.largestBatchId);d===null&&(d=Gn(),i=i.insert(f.largestBatchId,d)),d.set(f.getKey(),f)}}const l=Gn(),u=i.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((f,d)=>l.set(f,d)),!(l.size()>=s)););return V.resolve(l)}Et(t,n,r){const s=this.overlays.get(r.key);if(s!==null){const a=this.Rr.get(s.largestBatchId).delete(r.key);this.Rr.set(s.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new mT(n,r));let i=this.Rr.get(n);i===void 0&&(i=ft(),this.Rr.set(n,i)),this.Rr.set(n,i.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
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
 */class JT{constructor(){this.sessionToken=Gt.EMPTY_BYTE_STRING}getSessionToken(t){return V.resolve(this.sessionToken)}setSessionToken(t,n){return this.sessionToken=n,V.resolve()}}/**
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
 */class El{constructor(){this.Vr=new Ut($t.mr),this.gr=new Ut($t.pr)}isEmpty(){return this.Vr.isEmpty()}addReference(t,n){const r=new $t(t,n);this.Vr=this.Vr.add(r),this.gr=this.gr.add(r)}yr(t,n){t.forEach(r=>this.addReference(r,n))}removeReference(t,n){this.wr(new $t(t,n))}br(t,n){t.forEach(r=>this.removeReference(r,n))}Sr(t){const n=new Z(new Pt([])),r=new $t(n,t),s=new $t(n,t+1),i=[];return this.gr.forEachInRange([r,s],a=>{this.wr(a),i.push(a.key)}),i}Dr(){this.Vr.forEach(t=>this.wr(t))}wr(t){this.Vr=this.Vr.delete(t),this.gr=this.gr.delete(t)}vr(t){const n=new Z(new Pt([])),r=new $t(n,t),s=new $t(n,t+1);let i=ft();return this.gr.forEachInRange([r,s],a=>{i=i.add(a.key)}),i}containsKey(t){const n=new $t(t,0),r=this.Vr.firstAfterOrEqual(n);return r!==null&&t.isEqual(r.key)}}class $t{constructor(t,n){this.key=t,this.Cr=n}static mr(t,n){return Z.comparator(t.key,n.key)||pt(t.Cr,n.Cr)}static pr(t,n){return pt(t.Cr,n.Cr)||Z.comparator(t.key,n.key)}}/**
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
 */class ZT{constructor(t,n){this.indexManager=t,this.referenceDelegate=n,this.mutationQueue=[],this.Fr=1,this.Mr=new Ut($t.mr)}checkEmpty(t){return V.resolve(this.mutationQueue.length===0)}addMutationBatch(t,n,r,s){const i=this.Fr;this.Fr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new pT(i,n,r,s);this.mutationQueue.push(a);for(const l of s)this.Mr=this.Mr.add(new $t(l.key,i)),this.indexManager.addToCollectionParentIndex(t,l.key.path.popLast());return V.resolve(a)}lookupMutationBatch(t,n){return V.resolve(this.Or(n))}getNextMutationBatchAfterBatchId(t,n){const r=n+1,s=this.Nr(r),i=s<0?0:s;return V.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return V.resolve(this.mutationQueue.length===0?fl:this.Fr-1)}getAllMutationBatches(t){return V.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,n){const r=new $t(n,0),s=new $t(n,Number.POSITIVE_INFINITY),i=[];return this.Mr.forEachInRange([r,s],a=>{const l=this.Or(a.Cr);i.push(l)}),V.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(t,n){let r=new Ut(pt);return n.forEach(s=>{const i=new $t(s,0),a=new $t(s,Number.POSITIVE_INFINITY);this.Mr.forEachInRange([i,a],l=>{r=r.add(l.Cr)})}),V.resolve(this.Br(r))}getAllMutationBatchesAffectingQuery(t,n){const r=n.path,s=r.length+1;let i=r;Z.isDocumentKey(i)||(i=i.child(""));const a=new $t(new Z(i),0);let l=new Ut(pt);return this.Mr.forEachWhile(u=>{const f=u.key.path;return!!r.isPrefixOf(f)&&(f.length===s&&(l=l.add(u.Cr)),!0)},a),V.resolve(this.Br(l))}Br(t){const n=[];return t.forEach(r=>{const s=this.Or(r);s!==null&&n.push(s)}),n}removeMutationBatch(t,n){It(this.Lr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.Mr;return V.forEach(n.mutations,s=>{const i=new $t(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(t,s.key)}).next(()=>{this.Mr=r})}qn(t){}containsKey(t,n){const r=new $t(n,0),s=this.Mr.firstAfterOrEqual(r);return V.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(t){return this.mutationQueue.length,V.resolve()}Lr(t,n){return this.Nr(t)}Nr(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Or(t){const n=this.Nr(t);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class tE{constructor(t){this.kr=t,this.docs=function(){return new Vt(Z.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,a=this.kr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:a}),this.size+=a-i,this.indexManager.addToCollectionParentIndex(t,r.path.popLast())}removeEntry(t){const n=this.docs.get(t);n&&(this.docs=this.docs.remove(t),this.size-=n.size)}getEntry(t,n){const r=this.docs.get(n);return V.resolve(r?r.document.mutableCopy():re.newInvalidDocument(n))}getEntries(t,n){let r=rn();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():re.newInvalidDocument(s))}),V.resolve(r)}getDocumentsMatchingQuery(t,n,r,s){let i=rn();const a=n.path,l=new Z(a.child("__id-9223372036854775808__")),u=this.docs.getIteratorFrom(l);for(;u.hasNext();){const{key:f,value:{document:d}}=u.getNext();if(!a.isPrefixOf(f.path))break;f.path.length>a.length+1||Sv(Rv(d),r)<=0||(s.has(d.key)||lo(n,d))&&(i=i.insert(d.key,d.mutableCopy()))}return V.resolve(i)}getAllFromCollectionGroup(t,n,r,s){st()}qr(t,n){return V.forEach(this.docs,r=>n(r))}newChangeBuffer(t){return new eE(this)}getSize(t){return V.resolve(this.size)}}class eE extends WT{constructor(t){super(),this.Ir=t}applyChanges(t){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.Ir.addEntry(t,s)):this.Ir.removeEntry(r)}),V.waitFor(n)}getFromCache(t,n){return this.Ir.getEntry(t,n)}getAllFromCache(t,n){return this.Ir.getEntries(t,n)}}/**
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
 */class nE{constructor(t){this.persistence=t,this.Qr=new sr(n=>ml(n),gl),this.lastRemoteSnapshotVersion=ot.min(),this.highestTargetId=0,this.$r=0,this.Kr=new El,this.targetCount=0,this.Ur=Vr.Kn()}forEachTarget(t,n){return this.Qr.forEach((r,s)=>n(s)),V.resolve()}getLastRemoteSnapshotVersion(t){return V.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return V.resolve(this.$r)}allocateTargetId(t){return this.highestTargetId=this.Ur.next(),V.resolve(this.highestTargetId)}setTargetsMetadata(t,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.$r&&(this.$r=n),V.resolve()}zn(t){this.Qr.set(t.target,t);const n=t.targetId;n>this.highestTargetId&&(this.Ur=new Vr(n),this.highestTargetId=n),t.sequenceNumber>this.$r&&(this.$r=t.sequenceNumber)}addTargetData(t,n){return this.zn(n),this.targetCount+=1,V.resolve()}updateTargetData(t,n){return this.zn(n),V.resolve()}removeTargetData(t,n){return this.Qr.delete(n.target),this.Kr.Sr(n.targetId),this.targetCount-=1,V.resolve()}removeTargets(t,n,r){let s=0;const i=[];return this.Qr.forEach((a,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.Qr.delete(a),i.push(this.removeMatchingKeysForTargetId(t,l.targetId)),s++)}),V.waitFor(i).next(()=>s)}getTargetCount(t){return V.resolve(this.targetCount)}getTargetData(t,n){const r=this.Qr.get(n)||null;return V.resolve(r)}addMatchingKeys(t,n,r){return this.Kr.yr(n,r),V.resolve()}removeMatchingKeys(t,n,r){this.Kr.br(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(a=>{i.push(s.markPotentiallyOrphaned(t,a))}),V.waitFor(i)}removeMatchingKeysForTargetId(t,n){return this.Kr.Sr(n),V.resolve()}getMatchingKeysForTargetId(t,n){const r=this.Kr.vr(n);return V.resolve(r)}containsKey(t,n){return V.resolve(this.Kr.containsKey(n))}}/**
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
 */class $d{constructor(t,n){this.Wr={},this.overlays={},this.Gr=new ro(0),this.zr=!1,this.zr=!0,this.jr=new JT,this.referenceDelegate=t(this),this.Hr=new nE(this),this.indexManager=new BT,this.remoteDocumentCache=function(s){return new tE(s)}(r=>this.referenceDelegate.Jr(r)),this.serializer=new FT(n),this.Yr=new XT(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.zr=!1,Promise.resolve()}get started(){return this.zr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let n=this.overlays[t.toKey()];return n||(n=new YT,this.overlays[t.toKey()]=n),n}getMutationQueue(t,n){let r=this.Wr[t.toKey()];return r||(r=new ZT(n,this.referenceDelegate),this.Wr[t.toKey()]=r),r}getGlobalsCache(){return this.jr}getTargetCache(){return this.Hr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Yr}runTransaction(t,n,r){K("MemoryPersistence","Starting transaction:",t);const s=new rE(this.Gr.next());return this.referenceDelegate.Zr(),r(s).next(i=>this.referenceDelegate.Xr(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}ei(t,n){return V.or(Object.values(this.Wr).map(r=>()=>r.containsKey(t,n)))}}class rE extends Pv{constructor(t){super(),this.currentSequenceNumber=t}}class wl{constructor(t){this.persistence=t,this.ti=new El,this.ni=null}static ri(t){return new wl(t)}get ii(){if(this.ni)return this.ni;throw st()}addReference(t,n,r){return this.ti.addReference(r,n),this.ii.delete(r.toString()),V.resolve()}removeReference(t,n,r){return this.ti.removeReference(r,n),this.ii.add(r.toString()),V.resolve()}markPotentiallyOrphaned(t,n){return this.ii.add(n.toString()),V.resolve()}removeTarget(t,n){this.ti.Sr(n.targetId).forEach(s=>this.ii.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(t,n.targetId).next(s=>{s.forEach(i=>this.ii.add(i.toString()))}).next(()=>r.removeTargetData(t,n))}Zr(){this.ni=new Set}Xr(t){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return V.forEach(this.ii,r=>{const s=Z.fromPath(r);return this.si(t,s).next(i=>{i||n.removeEntry(s,ot.min())})}).next(()=>(this.ni=null,n.apply(t)))}updateLimboDocument(t,n){return this.si(t,n).next(r=>{r?this.ii.delete(n.toString()):this.ii.add(n.toString())})}Jr(t){return 0}si(t,n){return V.or([()=>V.resolve(this.ti.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(t,n),()=>this.persistence.ei(t,n)])}}class Fi{constructor(t,n){this.persistence=t,this.oi=new sr(r=>xv(r.path),(r,s)=>r.isEqual(s)),this.garbageCollector=zT(this,n)}static ri(t,n){return new Fi(t,n)}Zr(){}Xr(t){return V.resolve()}forEachTarget(t,n){return this.persistence.getTargetCache().forEachTarget(t,n)}nr(t){const n=this.sr(t);return this.persistence.getTargetCache().getTargetCount(t).next(r=>n.next(s=>r+s))}sr(t){let n=0;return this.rr(t,r=>{n++}).next(()=>n)}rr(t,n){return V.forEach(this.oi,(r,s)=>this.ar(t,r,s).next(i=>i?V.resolve():n(s)))}removeTargets(t,n,r){return this.persistence.getTargetCache().removeTargets(t,n,r)}removeOrphanedDocuments(t,n){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.qr(t,a=>this.ar(t,a,n).next(l=>{l||(r++,i.removeEntry(a,ot.min()))})).next(()=>i.apply(t)).next(()=>r)}markPotentiallyOrphaned(t,n){return this.oi.set(n,t.currentSequenceNumber),V.resolve()}removeTarget(t,n){const r=n.withSequenceNumber(t.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(t,r)}addReference(t,n,r){return this.oi.set(r,t.currentSequenceNumber),V.resolve()}removeReference(t,n,r){return this.oi.set(r,t.currentSequenceNumber),V.resolve()}updateLimboDocument(t,n){return this.oi.set(n,t.currentSequenceNumber),V.resolve()}Jr(t){let n=t.key.toString().length;return t.isFoundDocument()&&(n+=pi(t.data.value)),n}ar(t,n,r){return V.or([()=>this.persistence.ei(t,n),()=>this.persistence.getTargetCache().containsKey(t,n),()=>{const s=this.oi.get(n);return V.resolve(s!==void 0&&s>r)}])}getCacheSize(t){return this.persistence.getRemoteDocumentCache().getSize(t)}}/**
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
 */class Il{constructor(t,n,r,s){this.targetId=t,this.fromCache=n,this.Hi=r,this.Ji=s}static Yi(t,n){let r=ft(),s=ft();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new Il(t,n.fromCache,r,s)}}/**
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
 */class sE{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
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
 */class iE{constructor(){this.Zi=!1,this.Xi=!1,this.es=100,this.ts=function(){return Z_()?8:Vv(X_())>0?6:4}()}initialize(t,n){this.ns=t,this.indexManager=n,this.Zi=!0}getDocumentsMatchingQuery(t,n,r,s){const i={result:null};return this.rs(t,n).next(a=>{i.result=a}).next(()=>{if(!i.result)return this.ss(t,n,s,r).next(a=>{i.result=a})}).next(()=>{if(i.result)return;const a=new sE;return this._s(t,n,a).next(l=>{if(i.result=l,this.Xi)return this.us(t,n,a,l.size)})}).next(()=>i.result)}us(t,n,r,s){return r.documentReadCount<this.es?(fr()<=yt.DEBUG&&K("QueryEngine","SDK will not create cache indexes for query:",dr(n),"since it only creates cache indexes for collection contains","more than or equal to",this.es,"documents"),V.resolve()):(fr()<=yt.DEBUG&&K("QueryEngine","Query:",dr(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.ts*s?(fr()<=yt.DEBUG&&K("QueryEngine","The SDK decides to create cache indexes for query:",dr(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,Me(n))):V.resolve())}rs(t,n){if(Bu(n))return V.resolve(null);let r=Me(n);return this.indexManager.getIndexType(t,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=Na(n,null,"F"),r=Me(n)),this.indexManager.getDocumentsMatchingTarget(t,r).next(i=>{const a=ft(...i);return this.ns.getDocuments(t,a).next(l=>this.indexManager.getMinOffset(t,r).next(u=>{const f=this.cs(n,l);return this.ls(n,f,a,u.readTime)?this.rs(t,Na(n,null,"F")):this.hs(t,f,n,u)}))})))}ss(t,n,r,s){return Bu(n)||s.isEqual(ot.min())?V.resolve(null):this.ns.getDocuments(t,r).next(i=>{const a=this.cs(n,i);return this.ls(n,a,r,s)?V.resolve(null):(fr()<=yt.DEBUG&&K("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),dr(n)),this.hs(t,a,n,bv(s,Es)).next(l=>l))})}cs(t,n){let r=new Ut(yd(t));return n.forEach((s,i)=>{lo(t,i)&&(r=r.add(i))}),r}ls(t,n,r,s){if(t.limit===null)return!1;if(r.size!==n.size)return!0;const i=t.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}_s(t,n,r){return fr()<=yt.DEBUG&&K("QueryEngine","Using full collection scan to execute query:",dr(n)),this.ns.getDocumentsMatchingQuery(t,n,wn.min(),r)}hs(t,n,r,s){return this.ns.getDocumentsMatchingQuery(t,r,s).next(i=>(n.forEach(a=>{i=i.insert(a.key,a)}),i))}}/**
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
 */const Al="LocalStore",oE=3e8;class aE{constructor(t,n,r,s){this.persistence=t,this.Ps=n,this.serializer=s,this.Ts=new Vt(pt),this.Is=new sr(i=>ml(i),gl),this.Es=new Map,this.ds=t.getRemoteDocumentCache(),this.Hr=t.getTargetCache(),this.Yr=t.getBundleCache(),this.As(r)}As(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new QT(this.ds,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ds.setIndexManager(this.indexManager),this.Ps.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>t.collect(n,this.Ts))}}function lE(e,t,n,r){return new aE(e,t,n,r)}async function jd(e,t){const n=at(e);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.As(t),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const a=[],l=[];let u=ft();for(const f of s){a.push(f.batchId);for(const d of f.mutations)u=u.add(d.key)}for(const f of i){l.push(f.batchId);for(const d of f.mutations)u=u.add(d.key)}return n.localDocuments.getDocuments(r,u).next(f=>({Rs:f,removedBatchIds:a,addedBatchIds:l}))})})}function cE(e,t){const n=at(e);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=t.batch.keys(),i=n.ds.newChangeBuffer({trackRemovals:!0});return function(l,u,f,d){const m=f.batch,T=m.keys();let R=V.resolve();return T.forEach(D=>{R=R.next(()=>d.getEntry(u,D)).next(k=>{const F=f.docVersions.get(D);It(F!==null),k.version.compareTo(F)<0&&(m.applyToRemoteDocument(k,f),k.isValidDocument()&&(k.setReadTime(f.commitVersion),d.addEntry(k)))})}),R.next(()=>l.mutationQueue.removeMutationBatch(u,m))}(n,r,t,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,t.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let u=ft();for(let f=0;f<l.mutationResults.length;++f)l.mutationResults[f].transformResults.length>0&&(u=u.add(l.batch.mutations[f].key));return u}(t))).next(()=>n.localDocuments.getDocuments(r,s))})}function qd(e){const t=at(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",n=>t.Hr.getLastRemoteSnapshotVersion(n))}function uE(e,t){const n=at(e),r=t.snapshotVersion;let s=n.Ts;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const a=n.ds.newChangeBuffer({trackRemovals:!0});s=n.Ts;const l=[];t.targetChanges.forEach((d,m)=>{const T=s.get(m);if(!T)return;l.push(n.Hr.removeMatchingKeys(i,d.removedDocuments,m).next(()=>n.Hr.addMatchingKeys(i,d.addedDocuments,m)));let R=T.withSequenceNumber(i.currentSequenceNumber);t.targetMismatches.get(m)!==null?R=R.withResumeToken(Gt.EMPTY_BYTE_STRING,ot.min()).withLastLimboFreeSnapshotVersion(ot.min()):d.resumeToken.approximateByteSize()>0&&(R=R.withResumeToken(d.resumeToken,r)),s=s.insert(m,R),function(k,F,W){return k.resumeToken.approximateByteSize()===0||F.snapshotVersion.toMicroseconds()-k.snapshotVersion.toMicroseconds()>=oE?!0:W.addedDocuments.size+W.modifiedDocuments.size+W.removedDocuments.size>0}(T,R,d)&&l.push(n.Hr.updateTargetData(i,R))});let u=rn(),f=ft();if(t.documentUpdates.forEach(d=>{t.resolvedLimboDocuments.has(d)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(i,d))}),l.push(hE(i,a,t.documentUpdates).next(d=>{u=d.Vs,f=d.fs})),!r.isEqual(ot.min())){const d=n.Hr.getLastRemoteSnapshotVersion(i).next(m=>n.Hr.setTargetsMetadata(i,i.currentSequenceNumber,r));l.push(d)}return V.waitFor(l).next(()=>a.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,u,f)).next(()=>u)}).then(i=>(n.Ts=s,i))}function hE(e,t,n){let r=ft(),s=ft();return n.forEach(i=>r=r.add(i)),t.getEntries(e,r).next(i=>{let a=rn();return n.forEach((l,u)=>{const f=i.get(l);u.isFoundDocument()!==f.isFoundDocument()&&(s=s.add(l)),u.isNoDocument()&&u.version.isEqual(ot.min())?(t.removeEntry(l,u.readTime),a=a.insert(l,u)):!f.isValidDocument()||u.version.compareTo(f.version)>0||u.version.compareTo(f.version)===0&&f.hasPendingWrites?(t.addEntry(u),a=a.insert(l,u)):K(Al,"Ignoring outdated watch update for ",l,". Current version:",f.version," Watch version:",u.version)}),{Vs:a,fs:s}})}function fE(e,t){const n=at(e);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(t===void 0&&(t=fl),n.mutationQueue.getNextMutationBatchAfterBatchId(r,t)))}function dE(e,t){const n=at(e);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.Hr.getTargetData(r,t).next(i=>i?(s=i,V.resolve(s)):n.Hr.allocateTargetId(r).next(a=>(s=new dn(t,a,"TargetPurposeListen",r.currentSequenceNumber),n.Hr.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.Ts.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.Ts=n.Ts.insert(r.targetId,r),n.Is.set(t,r.targetId)),r})}async function Fa(e,t,n){const r=at(e),s=r.Ts.get(t),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,a=>r.persistence.referenceDelegate.removeTarget(a,s))}catch(a){if(!Or(a))throw a;K(Al,`Failed to update sequence numbers for target ${t}: ${a}`)}r.Ts=r.Ts.remove(t),r.Is.delete(s.target)}function Zu(e,t,n){const r=at(e);let s=ot.min(),i=ft();return r.persistence.runTransaction("Execute query","readwrite",a=>function(u,f,d){const m=at(u),T=m.Is.get(d);return T!==void 0?V.resolve(m.Ts.get(T)):m.Hr.getTargetData(f,d)}(r,a,Me(t)).next(l=>{if(l)return s=l.lastLimboFreeSnapshotVersion,r.Hr.getMatchingKeysForTargetId(a,l.targetId).next(u=>{i=u})}).next(()=>r.Ps.getDocumentsMatchingQuery(a,t,n?s:ot.min(),n?i:ft())).next(l=>(pE(r,Jv(t),l),{documents:l,gs:i})))}function pE(e,t,n){let r=e.Es.get(t)||ot.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),e.Es.set(t,r)}class th{constructor(){this.activeTargetIds=sT()}Ds(t){this.activeTargetIds=this.activeTargetIds.add(t)}vs(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Ss(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class mE{constructor(){this.ho=new th,this.Po={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,n,r){}addLocalQueryTarget(t,n=!0){return n&&this.ho.Ds(t),this.Po[t]||"not-current"}updateQueryState(t,n,r){this.Po[t]=n}removeLocalQueryTarget(t){this.ho.vs(t)}isLocalQueryTarget(t){return this.ho.activeTargetIds.has(t)}clearQueryState(t){delete this.Po[t]}getAllActiveQueryTargets(){return this.ho.activeTargetIds}isActiveQueryTarget(t){return this.ho.activeTargetIds.has(t)}start(){return this.ho=new th,Promise.resolve()}handleUserChange(t,n,r){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
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
 */class gE{To(t){}shutdown(){}}/**
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
 */const eh="ConnectivityMonitor";class nh{constructor(){this.Io=()=>this.Eo(),this.Ao=()=>this.Ro(),this.Vo=[],this.mo()}To(t){this.Vo.push(t)}shutdown(){window.removeEventListener("online",this.Io),window.removeEventListener("offline",this.Ao)}mo(){window.addEventListener("online",this.Io),window.addEventListener("offline",this.Ao)}Eo(){K(eh,"Network connectivity changed: AVAILABLE");for(const t of this.Vo)t(0)}Ro(){K(eh,"Network connectivity changed: UNAVAILABLE");for(const t of this.Vo)t(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let oi=null;function Ua(){return oi===null?oi=function(){return 268435456+Math.round(2147483648*Math.random())}():oi++,"0x"+oi.toString(16)}/**
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
 */const ra="RestConnection",_E={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class yE{get fo(){return!1}constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const n=t.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.po=n+"://"+t.host,this.yo=`projects/${r}/databases/${s}`,this.wo=this.databaseId.database===Di?`project_id=${r}`:`project_id=${r}&database_id=${s}`}bo(t,n,r,s,i){const a=Ua(),l=this.So(t,n.toUriEncodedString());K(ra,`Sending RPC '${t}' ${a}:`,l,r);const u={"google-cloud-resource-prefix":this.yo,"x-goog-request-params":this.wo};return this.Do(u,s,i),this.vo(t,l,u,r).then(f=>(K(ra,`Received RPC '${t}' ${a}: `,f),f),f=>{throw br(ra,`RPC '${t}' ${a} failed with error: `,f,"url: ",l,"request:",r),f})}Co(t,n,r,s,i,a){return this.bo(t,n,r,s,i)}Do(t,n,r){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Nr}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((s,i)=>t[i]=s),r&&r.headers.forEach((s,i)=>t[i]=s)}So(t,n){const r=_E[t];return`${this.po}/v1/${n}:${r}`}terminate(){}}/**
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
 */class vE{constructor(t){this.Fo=t.Fo,this.Mo=t.Mo}xo(t){this.Oo=t}No(t){this.Bo=t}Lo(t){this.ko=t}onMessage(t){this.qo=t}close(){this.Mo()}send(t){this.Fo(t)}Qo(){this.Oo()}$o(){this.Bo()}Ko(t){this.ko(t)}Uo(t){this.qo(t)}}/**
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
 */const Zt="WebChannelConnection";class TE extends yE{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}vo(t,n,r,s){const i=Ua();return new Promise((a,l)=>{const u=new Wf;u.setWithCredentials(!0),u.listenOnce(Gf.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case di.NO_ERROR:const d=u.getResponseJson();K(Zt,`XHR for RPC '${t}' ${i} received:`,JSON.stringify(d)),a(d);break;case di.TIMEOUT:K(Zt,`RPC '${t}' ${i} timed out`),l(new Y(N.DEADLINE_EXCEEDED,"Request time out"));break;case di.HTTP_ERROR:const m=u.getStatus();if(K(Zt,`RPC '${t}' ${i} failed with status:`,m,"response text:",u.getResponseText()),m>0){let T=u.getResponseJson();Array.isArray(T)&&(T=T[0]);const R=T==null?void 0:T.error;if(R&&R.status&&R.message){const D=function(F){const W=F.toLowerCase().replace(/_/g,"-");return Object.values(N).indexOf(W)>=0?W:N.UNKNOWN}(R.status);l(new Y(D,R.message))}else l(new Y(N.UNKNOWN,"Server responded with status "+u.getStatus()))}else l(new Y(N.UNAVAILABLE,"Connection failed."));break;default:st()}}finally{K(Zt,`RPC '${t}' ${i} completed.`)}});const f=JSON.stringify(s);K(Zt,`RPC '${t}' ${i} sending request:`,s),u.send(n,"POST",f,r,15)})}Wo(t,n,r){const s=Ua(),i=[this.po,"/","google.firestore.v1.Firestore","/",t,"/channel"],a=Yf(),l=Xf(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},f=this.longPollingOptions.timeoutSeconds;f!==void 0&&(u.longPollingTimeout=Math.round(1e3*f)),this.useFetchStreams&&(u.useFetchStreams=!0),this.Do(u.initMessageHeaders,n,r),u.encodeInitMessageHeaders=!0;const d=i.join("");K(Zt,`Creating RPC '${t}' stream ${s}: ${d}`,u);const m=a.createWebChannel(d,u);let T=!1,R=!1;const D=new vE({Fo:F=>{R?K(Zt,`Not sending because RPC '${t}' stream ${s} is closed:`,F):(T||(K(Zt,`Opening RPC '${t}' stream ${s} transport.`),m.open(),T=!0),K(Zt,`RPC '${t}' stream ${s} sending:`,F),m.send(F))},Mo:()=>m.close()}),k=(F,W,G)=>{F.listen(W,J=>{try{G(J)}catch(z){setTimeout(()=>{throw z},0)}})};return k(m,es.EventType.OPEN,()=>{R||(K(Zt,`RPC '${t}' stream ${s} transport opened.`),D.Qo())}),k(m,es.EventType.CLOSE,()=>{R||(R=!0,K(Zt,`RPC '${t}' stream ${s} transport closed`),D.Ko())}),k(m,es.EventType.ERROR,F=>{R||(R=!0,br(Zt,`RPC '${t}' stream ${s} transport errored:`,F),D.Ko(new Y(N.UNAVAILABLE,"The operation could not be completed")))}),k(m,es.EventType.MESSAGE,F=>{var W;if(!R){const G=F.data[0];It(!!G);const J=G,z=(J==null?void 0:J.error)||((W=J[0])===null||W===void 0?void 0:W.error);if(z){K(Zt,`RPC '${t}' stream ${s} received error:`,z);const dt=z.status;let vt=function(v){const w=Nt[v];if(w!==void 0)return Vd(w)}(dt),I=z.message;vt===void 0&&(vt=N.INTERNAL,I="Unknown error status: "+dt+" with message "+z.message),R=!0,D.Ko(new Y(vt,I)),m.close()}else K(Zt,`RPC '${t}' stream ${s} received:`,G),D.Uo(G)}}),k(l,Qf.STAT_EVENT,F=>{F.stat===Ca.PROXY?K(Zt,`RPC '${t}' stream ${s} detected buffering proxy`):F.stat===Ca.NOPROXY&&K(Zt,`RPC '${t}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{D.$o()},0),D}}function sa(){return typeof document<"u"?document:null}/**
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
 */function fo(e){return new AT(e,!0)}/**
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
 */class Hd{constructor(t,n,r=1e3,s=1.5,i=6e4){this.Ti=t,this.timerId=n,this.Go=r,this.zo=s,this.jo=i,this.Ho=0,this.Jo=null,this.Yo=Date.now(),this.reset()}reset(){this.Ho=0}Zo(){this.Ho=this.jo}Xo(t){this.cancel();const n=Math.floor(this.Ho+this.e_()),r=Math.max(0,Date.now()-this.Yo),s=Math.max(0,n-r);s>0&&K("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Ho} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Jo=this.Ti.enqueueAfterDelay(this.timerId,s,()=>(this.Yo=Date.now(),t())),this.Ho*=this.zo,this.Ho<this.Go&&(this.Ho=this.Go),this.Ho>this.jo&&(this.Ho=this.jo)}t_(){this.Jo!==null&&(this.Jo.skipDelay(),this.Jo=null)}cancel(){this.Jo!==null&&(this.Jo.cancel(),this.Jo=null)}e_(){return(Math.random()-.5)*this.Ho}}/**
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
 */const rh="PersistentStream";class Kd{constructor(t,n,r,s,i,a,l,u){this.Ti=t,this.n_=r,this.r_=s,this.connection=i,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=l,this.listener=u,this.state=0,this.i_=0,this.s_=null,this.o_=null,this.stream=null,this.__=0,this.a_=new Hd(t,n)}u_(){return this.state===1||this.state===5||this.c_()}c_(){return this.state===2||this.state===3}start(){this.__=0,this.state!==4?this.auth():this.l_()}async stop(){this.u_()&&await this.close(0)}h_(){this.state=0,this.a_.reset()}P_(){this.c_()&&this.s_===null&&(this.s_=this.Ti.enqueueAfterDelay(this.n_,6e4,()=>this.T_()))}I_(t){this.E_(),this.stream.send(t)}async T_(){if(this.c_())return this.close(0)}E_(){this.s_&&(this.s_.cancel(),this.s_=null)}d_(){this.o_&&(this.o_.cancel(),this.o_=null)}async close(t,n){this.E_(),this.d_(),this.a_.cancel(),this.i_++,t!==4?this.a_.reset():n&&n.code===N.RESOURCE_EXHAUSTED?(nn(n.toString()),nn("Using maximum backoff delay to prevent overloading the backend."),this.a_.Zo()):n&&n.code===N.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.A_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.Lo(n)}A_(){}auth(){this.state=1;const t=this.R_(this.i_),n=this.i_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.i_===n&&this.V_(r,s)},r=>{t(()=>{const s=new Y(N.UNKNOWN,"Fetching auth token failed: "+r.message);return this.m_(s)})})}V_(t,n){const r=this.R_(this.i_);this.stream=this.f_(t,n),this.stream.xo(()=>{r(()=>this.listener.xo())}),this.stream.No(()=>{r(()=>(this.state=2,this.o_=this.Ti.enqueueAfterDelay(this.r_,1e4,()=>(this.c_()&&(this.state=3),Promise.resolve())),this.listener.No()))}),this.stream.Lo(s=>{r(()=>this.m_(s))}),this.stream.onMessage(s=>{r(()=>++this.__==1?this.g_(s):this.onNext(s))})}l_(){this.state=5,this.a_.Xo(async()=>{this.state=0,this.start()})}m_(t){return K(rh,`close with error: ${t}`),this.stream=null,this.close(4,t)}R_(t){return n=>{this.Ti.enqueueAndForget(()=>this.i_===t?n():(K(rh,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class EE extends Kd{constructor(t,n,r,s,i,a){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,a),this.serializer=i}f_(t,n){return this.connection.Wo("Listen",t,n)}g_(t){return this.onNext(t)}onNext(t){this.a_.reset();const n=ST(this.serializer,t),r=function(i){if(!("targetChange"in i))return ot.min();const a=i.targetChange;return a.targetIds&&a.targetIds.length?ot.min():a.readTime?Fe(a.readTime):ot.min()}(t);return this.listener.p_(n,r)}y_(t){const n={};n.database=La(this.serializer),n.addTarget=function(i,a){let l;const u=a.target;if(l=xa(u)?{documents:VT(i,u)}:{query:DT(i,u).ht},l.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){l.resumeToken=Nd(i,a.resumeToken);const f=ka(i,a.expectedCount);f!==null&&(l.expectedCount=f)}else if(a.snapshotVersion.compareTo(ot.min())>0){l.readTime=Li(i,a.snapshotVersion.toTimestamp());const f=ka(i,a.expectedCount);f!==null&&(l.expectedCount=f)}return l}(this.serializer,t);const r=NT(this.serializer,t);r&&(n.labels=r),this.I_(n)}w_(t){const n={};n.database=La(this.serializer),n.removeTarget=t,this.I_(n)}}class wE extends Kd{constructor(t,n,r,s,i,a){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,a),this.serializer=i}get b_(){return this.__>0}start(){this.lastStreamToken=void 0,super.start()}A_(){this.b_&&this.S_([])}f_(t,n){return this.connection.Wo("Write",t,n)}g_(t){return It(!!t.streamToken),this.lastStreamToken=t.streamToken,It(!t.writeResults||t.writeResults.length===0),this.listener.D_()}onNext(t){It(!!t.streamToken),this.lastStreamToken=t.streamToken,this.a_.reset();const n=PT(t.writeResults,t.commitTime),r=Fe(t.commitTime);return this.listener.v_(r,n)}C_(){const t={};t.database=La(this.serializer),this.I_(t)}S_(t){const n={streamToken:this.lastStreamToken,writes:t.map(r=>CT(this.serializer,r))};this.I_(n)}}/**
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
 */class IE{}class AE extends IE{constructor(t,n,r,s){super(),this.authCredentials=t,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.F_=!1}M_(){if(this.F_)throw new Y(N.FAILED_PRECONDITION,"The client has already been terminated.")}bo(t,n,r,s){return this.M_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,a])=>this.connection.bo(t,Oa(n,r),s,i,a)).catch(i=>{throw i.name==="FirebaseError"?(i.code===N.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new Y(N.UNKNOWN,i.toString())})}Co(t,n,r,s,i){return this.M_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,l])=>this.connection.Co(t,Oa(n,r),s,a,l,i)).catch(a=>{throw a.name==="FirebaseError"?(a.code===N.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new Y(N.UNKNOWN,a.toString())})}terminate(){this.F_=!0,this.connection.terminate()}}class bE{constructor(t,n){this.asyncQueue=t,this.onlineStateHandler=n,this.state="Unknown",this.x_=0,this.O_=null,this.N_=!0}B_(){this.x_===0&&(this.L_("Unknown"),this.O_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.O_=null,this.k_("Backend didn't respond within 10 seconds."),this.L_("Offline"),Promise.resolve())))}q_(t){this.state==="Online"?this.L_("Unknown"):(this.x_++,this.x_>=1&&(this.Q_(),this.k_(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.L_("Offline")))}set(t){this.Q_(),this.x_=0,t==="Online"&&(this.N_=!1),this.L_(t)}L_(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}k_(t){const n=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.N_?(nn(n),this.N_=!1):K("OnlineStateTracker",n)}Q_(){this.O_!==null&&(this.O_.cancel(),this.O_=null)}}/**
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
 */const tr="RemoteStore";class RE{constructor(t,n,r,s,i){this.localStore=t,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.K_=[],this.U_=new Map,this.W_=new Set,this.G_=[],this.z_=i,this.z_.To(a=>{r.enqueueAndForget(async()=>{ir(this)&&(K(tr,"Restarting streams for network reachability change."),await async function(u){const f=at(u);f.W_.add(4),await xs(f),f.j_.set("Unknown"),f.W_.delete(4),await po(f)}(this))})}),this.j_=new bE(r,s)}}async function po(e){if(ir(e))for(const t of e.G_)await t(!0)}async function xs(e){for(const t of e.G_)await t(!1)}function zd(e,t){const n=at(e);n.U_.has(t.targetId)||(n.U_.set(t.targetId,t),Cl(n)?Sl(n):Mr(n).c_()&&Rl(n,t))}function bl(e,t){const n=at(e),r=Mr(n);n.U_.delete(t),r.c_()&&Wd(n,t),n.U_.size===0&&(r.c_()?r.P_():ir(n)&&n.j_.set("Unknown"))}function Rl(e,t){if(e.H_.Ne(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(ot.min())>0){const n=e.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(n)}Mr(e).y_(t)}function Wd(e,t){e.H_.Ne(t),Mr(e).w_(t)}function Sl(e){e.H_=new TT({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),lt:t=>e.U_.get(t)||null,it:()=>e.datastore.serializer.databaseId}),Mr(e).start(),e.j_.B_()}function Cl(e){return ir(e)&&!Mr(e).u_()&&e.U_.size>0}function ir(e){return at(e).W_.size===0}function Gd(e){e.H_=void 0}async function SE(e){e.j_.set("Online")}async function CE(e){e.U_.forEach((t,n)=>{Rl(e,t)})}async function PE(e,t){Gd(e),Cl(e)?(e.j_.q_(t),Sl(e)):e.j_.set("Unknown")}async function VE(e,t,n){if(e.j_.set("Online"),t instanceof xd&&t.state===2&&t.cause)try{await async function(s,i){const a=i.cause;for(const l of i.targetIds)s.U_.has(l)&&(await s.remoteSyncer.rejectListen(l,a),s.U_.delete(l),s.H_.removeTarget(l))}(e,t)}catch(r){K(tr,"Failed to remove targets %s: %s ",t.targetIds.join(","),r),await Ui(e,r)}else if(t instanceof _i?e.H_.We(t):t instanceof Dd?e.H_.Ze(t):e.H_.je(t),!n.isEqual(ot.min()))try{const r=await qd(e.localStore);n.compareTo(r)>=0&&await function(i,a){const l=i.H_.ot(a);return l.targetChanges.forEach((u,f)=>{if(u.resumeToken.approximateByteSize()>0){const d=i.U_.get(f);d&&i.U_.set(f,d.withResumeToken(u.resumeToken,a))}}),l.targetMismatches.forEach((u,f)=>{const d=i.U_.get(u);if(!d)return;i.U_.set(u,d.withResumeToken(Gt.EMPTY_BYTE_STRING,d.snapshotVersion)),Wd(i,u);const m=new dn(d.target,u,f,d.sequenceNumber);Rl(i,m)}),i.remoteSyncer.applyRemoteEvent(l)}(e,n)}catch(r){K(tr,"Failed to raise snapshot:",r),await Ui(e,r)}}async function Ui(e,t,n){if(!Or(t))throw t;e.W_.add(1),await xs(e),e.j_.set("Offline"),n||(n=()=>qd(e.localStore)),e.asyncQueue.enqueueRetryable(async()=>{K(tr,"Retrying IndexedDB access"),await n(),e.W_.delete(1),await po(e)})}function Qd(e,t){return t().catch(n=>Ui(e,n,t))}async function mo(e){const t=at(e),n=Rn(t);let r=t.K_.length>0?t.K_[t.K_.length-1].batchId:fl;for(;DE(t);)try{const s=await fE(t.localStore,r);if(s===null){t.K_.length===0&&n.P_();break}r=s.batchId,xE(t,s)}catch(s){await Ui(t,s)}Xd(t)&&Yd(t)}function DE(e){return ir(e)&&e.K_.length<10}function xE(e,t){e.K_.push(t);const n=Rn(e);n.c_()&&n.b_&&n.S_(t.mutations)}function Xd(e){return ir(e)&&!Rn(e).u_()&&e.K_.length>0}function Yd(e){Rn(e).start()}async function NE(e){Rn(e).C_()}async function kE(e){const t=Rn(e);for(const n of e.K_)t.S_(n.mutations)}async function OE(e,t,n){const r=e.K_.shift(),s=yl.from(r,t,n);await Qd(e,()=>e.remoteSyncer.applySuccessfulWrite(s)),await mo(e)}async function ME(e,t){t&&Rn(e).b_&&await async function(r,s){if(function(a){return _T(a)&&a!==N.ABORTED}(s.code)){const i=r.K_.shift();Rn(r).h_(),await Qd(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await mo(r)}}(e,t),Xd(e)&&Yd(e)}async function sh(e,t){const n=at(e);n.asyncQueue.verifyOperationInProgress(),K(tr,"RemoteStore received new credentials");const r=ir(n);n.W_.add(3),await xs(n),r&&n.j_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n.W_.delete(3),await po(n)}async function LE(e,t){const n=at(e);t?(n.W_.delete(2),await po(n)):t||(n.W_.add(2),await xs(n),n.j_.set("Unknown"))}function Mr(e){return e.J_||(e.J_=function(n,r,s){const i=at(n);return i.M_(),new EE(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(e.datastore,e.asyncQueue,{xo:SE.bind(null,e),No:CE.bind(null,e),Lo:PE.bind(null,e),p_:VE.bind(null,e)}),e.G_.push(async t=>{t?(e.J_.h_(),Cl(e)?Sl(e):e.j_.set("Unknown")):(await e.J_.stop(),Gd(e))})),e.J_}function Rn(e){return e.Y_||(e.Y_=function(n,r,s){const i=at(n);return i.M_(),new wE(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(e.datastore,e.asyncQueue,{xo:()=>Promise.resolve(),No:NE.bind(null,e),Lo:ME.bind(null,e),D_:kE.bind(null,e),v_:OE.bind(null,e)}),e.G_.push(async t=>{t?(e.Y_.h_(),await mo(e)):(await e.Y_.stop(),e.K_.length>0&&(K(tr,`Stopping write stream with ${e.K_.length} pending writes`),e.K_=[]))})),e.Y_}/**
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
 */class Pl{constructor(t,n,r,s,i){this.asyncQueue=t,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new yn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,n,r,s,i){const a=Date.now()+r,l=new Pl(t,n,a,s,i);return l.start(r),l}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new Y(N.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Vl(e,t){if(nn("AsyncQueue",`${t}: ${e}`),Or(e))return new Y(N.UNAVAILABLE,`${t}: ${e}`);throw e}/**
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
 */class wr{static emptySet(t){return new wr(t.comparator)}constructor(t){this.comparator=t?(n,r)=>t(n,r)||Z.comparator(n.key,r.key):(n,r)=>Z.comparator(n.key,r.key),this.keyedMap=ns(),this.sortedSet=new Vt(this.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const n=this.keyedMap.get(t);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((n,r)=>(t(n),!1))}add(t){const n=this.delete(t.key);return n.copy(n.keyedMap.insert(t.key,t),n.sortedSet.insert(t,null))}delete(t){const n=this.get(t);return n?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(n)):this}isEqual(t){if(!(t instanceof wr)||this.size!==t.size)return!1;const n=this.sortedSet.getIterator(),r=t.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const t=[];return this.forEach(n=>{t.push(n.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,n){const r=new wr;return r.comparator=this.comparator,r.keyedMap=t,r.sortedSet=n,r}}/**
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
 */class ih{constructor(){this.Z_=new Vt(Z.comparator)}track(t){const n=t.doc.key,r=this.Z_.get(n);r?t.type!==0&&r.type===3?this.Z_=this.Z_.insert(n,t):t.type===3&&r.type!==1?this.Z_=this.Z_.insert(n,{type:r.type,doc:t.doc}):t.type===2&&r.type===2?this.Z_=this.Z_.insert(n,{type:2,doc:t.doc}):t.type===2&&r.type===0?this.Z_=this.Z_.insert(n,{type:0,doc:t.doc}):t.type===1&&r.type===0?this.Z_=this.Z_.remove(n):t.type===1&&r.type===2?this.Z_=this.Z_.insert(n,{type:1,doc:r.doc}):t.type===0&&r.type===1?this.Z_=this.Z_.insert(n,{type:2,doc:t.doc}):st():this.Z_=this.Z_.insert(n,t)}X_(){const t=[];return this.Z_.inorderTraversal((n,r)=>{t.push(r)}),t}}class Dr{constructor(t,n,r,s,i,a,l,u,f){this.query=t,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=a,this.syncStateChanged=l,this.excludesMetadataChanges=u,this.hasCachedResults=f}static fromInitialDocuments(t,n,r,s,i){const a=[];return n.forEach(l=>{a.push({type:0,doc:l})}),new Dr(t,n,wr.emptySet(n),a,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&ao(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const n=this.docChanges,r=t.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
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
 */class FE{constructor(){this.ea=void 0,this.ta=[]}na(){return this.ta.some(t=>t.ra())}}class UE{constructor(){this.queries=oh(),this.onlineState="Unknown",this.ia=new Set}terminate(){(function(n,r){const s=at(n),i=s.queries;s.queries=oh(),i.forEach((a,l)=>{for(const u of l.ta)u.onError(r)})})(this,new Y(N.ABORTED,"Firestore shutting down"))}}function oh(){return new sr(e=>_d(e),ao)}async function BE(e,t){const n=at(e);let r=3;const s=t.query;let i=n.queries.get(s);i?!i.na()&&t.ra()&&(r=2):(i=new FE,r=t.ra()?0:1);try{switch(r){case 0:i.ea=await n.onListen(s,!0);break;case 1:i.ea=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(a){const l=Vl(a,`Initialization of query '${dr(t.query)}' failed`);return void t.onError(l)}n.queries.set(s,i),i.ta.push(t),t.sa(n.onlineState),i.ea&&t.oa(i.ea)&&Dl(n)}async function $E(e,t){const n=at(e),r=t.query;let s=3;const i=n.queries.get(r);if(i){const a=i.ta.indexOf(t);a>=0&&(i.ta.splice(a,1),i.ta.length===0?s=t.ra()?0:1:!i.na()&&t.ra()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function jE(e,t){const n=at(e);let r=!1;for(const s of t){const i=s.query,a=n.queries.get(i);if(a){for(const l of a.ta)l.oa(s)&&(r=!0);a.ea=s}}r&&Dl(n)}function qE(e,t,n){const r=at(e),s=r.queries.get(t);if(s)for(const i of s.ta)i.onError(n);r.queries.delete(t)}function Dl(e){e.ia.forEach(t=>{t.next()})}var Ba,ah;(ah=Ba||(Ba={}))._a="default",ah.Cache="cache";class HE{constructor(t,n,r){this.query=t,this.aa=n,this.ua=!1,this.ca=null,this.onlineState="Unknown",this.options=r||{}}oa(t){if(!this.options.includeMetadataChanges){const r=[];for(const s of t.docChanges)s.type!==3&&r.push(s);t=new Dr(t.query,t.docs,t.oldDocs,r,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let n=!1;return this.ua?this.la(t)&&(this.aa.next(t),n=!0):this.ha(t,this.onlineState)&&(this.Pa(t),n=!0),this.ca=t,n}onError(t){this.aa.error(t)}sa(t){this.onlineState=t;let n=!1;return this.ca&&!this.ua&&this.ha(this.ca,t)&&(this.Pa(this.ca),n=!0),n}ha(t,n){if(!t.fromCache||!this.ra())return!0;const r=n!=="Offline";return(!this.options.Ta||!r)&&(!t.docs.isEmpty()||t.hasCachedResults||n==="Offline")}la(t){if(t.docChanges.length>0)return!0;const n=this.ca&&this.ca.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Pa(t){t=Dr.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.ua=!0,this.aa.next(t)}ra(){return this.options.source!==Ba.Cache}}/**
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
 */class Jd{constructor(t){this.key=t}}class Zd{constructor(t){this.key=t}}class KE{constructor(t,n){this.query=t,this.fa=n,this.ga=null,this.hasCachedResults=!1,this.current=!1,this.pa=ft(),this.mutatedKeys=ft(),this.ya=yd(t),this.wa=new wr(this.ya)}get ba(){return this.fa}Sa(t,n){const r=n?n.Da:new ih,s=n?n.wa:this.wa;let i=n?n.mutatedKeys:this.mutatedKeys,a=s,l=!1;const u=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,f=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(t.inorderTraversal((d,m)=>{const T=s.get(d),R=lo(this.query,m)?m:null,D=!!T&&this.mutatedKeys.has(T.key),k=!!R&&(R.hasLocalMutations||this.mutatedKeys.has(R.key)&&R.hasCommittedMutations);let F=!1;T&&R?T.data.isEqual(R.data)?D!==k&&(r.track({type:3,doc:R}),F=!0):this.va(T,R)||(r.track({type:2,doc:R}),F=!0,(u&&this.ya(R,u)>0||f&&this.ya(R,f)<0)&&(l=!0)):!T&&R?(r.track({type:0,doc:R}),F=!0):T&&!R&&(r.track({type:1,doc:T}),F=!0,(u||f)&&(l=!0)),F&&(R?(a=a.add(R),i=k?i.add(d):i.delete(d)):(a=a.delete(d),i=i.delete(d)))}),this.query.limit!==null)for(;a.size>this.query.limit;){const d=this.query.limitType==="F"?a.last():a.first();a=a.delete(d.key),i=i.delete(d.key),r.track({type:1,doc:d})}return{wa:a,Da:r,ls:l,mutatedKeys:i}}va(t,n){return t.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(t,n,r,s){const i=this.wa;this.wa=t.wa,this.mutatedKeys=t.mutatedKeys;const a=t.Da.X_();a.sort((d,m)=>function(R,D){const k=F=>{switch(F){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return st()}};return k(R)-k(D)}(d.type,m.type)||this.ya(d.doc,m.doc)),this.Ca(r),s=s!=null&&s;const l=n&&!s?this.Fa():[],u=this.pa.size===0&&this.current&&!s?1:0,f=u!==this.ga;return this.ga=u,a.length!==0||f?{snapshot:new Dr(this.query,t.wa,i,a,t.mutatedKeys,u===0,f,!1,!!r&&r.resumeToken.approximateByteSize()>0),Ma:l}:{Ma:l}}sa(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({wa:this.wa,Da:new ih,mutatedKeys:this.mutatedKeys,ls:!1},!1)):{Ma:[]}}xa(t){return!this.fa.has(t)&&!!this.wa.has(t)&&!this.wa.get(t).hasLocalMutations}Ca(t){t&&(t.addedDocuments.forEach(n=>this.fa=this.fa.add(n)),t.modifiedDocuments.forEach(n=>{}),t.removedDocuments.forEach(n=>this.fa=this.fa.delete(n)),this.current=t.current)}Fa(){if(!this.current)return[];const t=this.pa;this.pa=ft(),this.wa.forEach(r=>{this.xa(r.key)&&(this.pa=this.pa.add(r.key))});const n=[];return t.forEach(r=>{this.pa.has(r)||n.push(new Zd(r))}),this.pa.forEach(r=>{t.has(r)||n.push(new Jd(r))}),n}Oa(t){this.fa=t.gs,this.pa=ft();const n=this.Sa(t.documents);return this.applyChanges(n,!0)}Na(){return Dr.fromInitialDocuments(this.query,this.wa,this.mutatedKeys,this.ga===0,this.hasCachedResults)}}const xl="SyncEngine";class zE{constructor(t,n,r){this.query=t,this.targetId=n,this.view=r}}class WE{constructor(t){this.key=t,this.Ba=!1}}class GE{constructor(t,n,r,s,i,a){this.localStore=t,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=a,this.La={},this.ka=new sr(l=>_d(l),ao),this.qa=new Map,this.Qa=new Set,this.$a=new Vt(Z.comparator),this.Ka=new Map,this.Ua=new El,this.Wa={},this.Ga=new Map,this.za=Vr.Un(),this.onlineState="Unknown",this.ja=void 0}get isPrimaryClient(){return this.ja===!0}}async function QE(e,t,n=!0){const r=ip(e);let s;const i=r.ka.get(t);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.Na()):s=await tp(r,t,n,!0),s}async function XE(e,t){const n=ip(e);await tp(n,t,!0,!1)}async function tp(e,t,n,r){const s=await dE(e.localStore,Me(t)),i=s.targetId,a=e.sharedClientState.addLocalQueryTarget(i,n);let l;return r&&(l=await YE(e,t,i,a==="current",s.resumeToken)),e.isPrimaryClient&&n&&zd(e.remoteStore,s),l}async function YE(e,t,n,r,s){e.Ha=(m,T,R)=>async function(k,F,W,G){let J=F.view.Sa(W);J.ls&&(J=await Zu(k.localStore,F.query,!1).then(({documents:I})=>F.view.Sa(I,J)));const z=G&&G.targetChanges.get(F.targetId),dt=G&&G.targetMismatches.get(F.targetId)!=null,vt=F.view.applyChanges(J,k.isPrimaryClient,z,dt);return ch(k,F.targetId,vt.Ma),vt.snapshot}(e,m,T,R);const i=await Zu(e.localStore,t,!0),a=new KE(t,i.gs),l=a.Sa(i.documents),u=Ds.createSynthesizedTargetChangeForCurrentChange(n,r&&e.onlineState!=="Offline",s),f=a.applyChanges(l,e.isPrimaryClient,u);ch(e,n,f.Ma);const d=new zE(t,n,a);return e.ka.set(t,d),e.qa.has(n)?e.qa.get(n).push(t):e.qa.set(n,[t]),f.snapshot}async function JE(e,t,n){const r=at(e),s=r.ka.get(t),i=r.qa.get(s.targetId);if(i.length>1)return r.qa.set(s.targetId,i.filter(a=>!ao(a,t))),void r.ka.delete(t);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await Fa(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),n&&bl(r.remoteStore,s.targetId),$a(r,s.targetId)}).catch(kr)):($a(r,s.targetId),await Fa(r.localStore,s.targetId,!0))}async function ZE(e,t){const n=at(e),r=n.ka.get(t),s=n.qa.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),bl(n.remoteStore,r.targetId))}async function tw(e,t,n){const r=aw(e);try{const s=await function(a,l){const u=at(a),f=Ft.now(),d=l.reduce((R,D)=>R.add(D.key),ft());let m,T;return u.persistence.runTransaction("Locally write mutations","readwrite",R=>{let D=rn(),k=ft();return u.ds.getEntries(R,d).next(F=>{D=F,D.forEach((W,G)=>{G.isValidDocument()||(k=k.add(W))})}).next(()=>u.localDocuments.getOverlayedDocuments(R,D)).next(F=>{m=F;const W=[];for(const G of l){const J=fT(G,m.get(G.key).overlayedDocument);J!=null&&W.push(new Nn(G.key,J,cd(J.value.mapValue),Le.exists(!0)))}return u.mutationQueue.addMutationBatch(R,f,W,l)}).next(F=>{T=F;const W=F.applyToLocalDocumentSet(m,k);return u.documentOverlayCache.saveOverlays(R,F.batchId,W)})}).then(()=>({batchId:T.batchId,changes:Td(m)}))}(r.localStore,t);r.sharedClientState.addPendingMutation(s.batchId),function(a,l,u){let f=a.Wa[a.currentUser.toKey()];f||(f=new Vt(pt)),f=f.insert(l,u),a.Wa[a.currentUser.toKey()]=f}(r,s.batchId,n),await Ns(r,s.changes),await mo(r.remoteStore)}catch(s){const i=Vl(s,"Failed to persist write");n.reject(i)}}async function ep(e,t){const n=at(e);try{const r=await uE(n.localStore,t);t.targetChanges.forEach((s,i)=>{const a=n.Ka.get(i);a&&(It(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?a.Ba=!0:s.modifiedDocuments.size>0?It(a.Ba):s.removedDocuments.size>0&&(It(a.Ba),a.Ba=!1))}),await Ns(n,r,t)}catch(r){await kr(r)}}function lh(e,t,n){const r=at(e);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.ka.forEach((i,a)=>{const l=a.view.sa(t);l.snapshot&&s.push(l.snapshot)}),function(a,l){const u=at(a);u.onlineState=l;let f=!1;u.queries.forEach((d,m)=>{for(const T of m.ta)T.sa(l)&&(f=!0)}),f&&Dl(u)}(r.eventManager,t),s.length&&r.La.p_(s),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function ew(e,t,n){const r=at(e);r.sharedClientState.updateQueryState(t,"rejected",n);const s=r.Ka.get(t),i=s&&s.key;if(i){let a=new Vt(Z.comparator);a=a.insert(i,re.newNoDocument(i,ot.min()));const l=ft().add(i),u=new ho(ot.min(),new Map,new Vt(pt),a,l);await ep(r,u),r.$a=r.$a.remove(i),r.Ka.delete(t),Nl(r)}else await Fa(r.localStore,t,!1).then(()=>$a(r,t,n)).catch(kr)}async function nw(e,t){const n=at(e),r=t.batch.batchId;try{const s=await cE(n.localStore,t);rp(n,r,null),np(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Ns(n,s)}catch(s){await kr(s)}}async function rw(e,t,n){const r=at(e);try{const s=await function(a,l){const u=at(a);return u.persistence.runTransaction("Reject batch","readwrite-primary",f=>{let d;return u.mutationQueue.lookupMutationBatch(f,l).next(m=>(It(m!==null),d=m.keys(),u.mutationQueue.removeMutationBatch(f,m))).next(()=>u.mutationQueue.performConsistencyCheck(f)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(f,d,l)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(f,d)).next(()=>u.localDocuments.getDocuments(f,d))})}(r.localStore,t);rp(r,t,n),np(r,t),r.sharedClientState.updateMutationState(t,"rejected",n),await Ns(r,s)}catch(s){await kr(s)}}function np(e,t){(e.Ga.get(t)||[]).forEach(n=>{n.resolve()}),e.Ga.delete(t)}function rp(e,t,n){const r=at(e);let s=r.Wa[r.currentUser.toKey()];if(s){const i=s.get(t);i&&(n?i.reject(n):i.resolve(),s=s.remove(t)),r.Wa[r.currentUser.toKey()]=s}}function $a(e,t,n=null){e.sharedClientState.removeLocalQueryTarget(t);for(const r of e.qa.get(t))e.ka.delete(r),n&&e.La.Ja(r,n);e.qa.delete(t),e.isPrimaryClient&&e.Ua.Sr(t).forEach(r=>{e.Ua.containsKey(r)||sp(e,r)})}function sp(e,t){e.Qa.delete(t.path.canonicalString());const n=e.$a.get(t);n!==null&&(bl(e.remoteStore,n),e.$a=e.$a.remove(t),e.Ka.delete(n),Nl(e))}function ch(e,t,n){for(const r of n)r instanceof Jd?(e.Ua.addReference(r.key,t),sw(e,r)):r instanceof Zd?(K(xl,"Document no longer in limbo: "+r.key),e.Ua.removeReference(r.key,t),e.Ua.containsKey(r.key)||sp(e,r.key)):st()}function sw(e,t){const n=t.key,r=n.path.canonicalString();e.$a.get(n)||e.Qa.has(r)||(K(xl,"New document in limbo: "+n),e.Qa.add(r),Nl(e))}function Nl(e){for(;e.Qa.size>0&&e.$a.size<e.maxConcurrentLimboResolutions;){const t=e.Qa.values().next().value;e.Qa.delete(t);const n=new Z(Pt.fromString(t)),r=e.za.next();e.Ka.set(r,new WE(n)),e.$a=e.$a.insert(n,r),zd(e.remoteStore,new dn(Me(gd(n.path)),r,"TargetPurposeLimboResolution",ro.ae))}}async function Ns(e,t,n){const r=at(e),s=[],i=[],a=[];r.ka.isEmpty()||(r.ka.forEach((l,u)=>{a.push(r.Ha(u,t,n).then(f=>{var d;if((f||n)&&r.isPrimaryClient){const m=f?!f.fromCache:(d=n==null?void 0:n.targetChanges.get(u.targetId))===null||d===void 0?void 0:d.current;r.sharedClientState.updateQueryState(u.targetId,m?"current":"not-current")}if(f){s.push(f);const m=Il.Yi(u.targetId,f);i.push(m)}}))}),await Promise.all(a),r.La.p_(s),await async function(u,f){const d=at(u);try{await d.persistence.runTransaction("notifyLocalViewChanges","readwrite",m=>V.forEach(f,T=>V.forEach(T.Hi,R=>d.persistence.referenceDelegate.addReference(m,T.targetId,R)).next(()=>V.forEach(T.Ji,R=>d.persistence.referenceDelegate.removeReference(m,T.targetId,R)))))}catch(m){if(!Or(m))throw m;K(Al,"Failed to update sequence numbers: "+m)}for(const m of f){const T=m.targetId;if(!m.fromCache){const R=d.Ts.get(T),D=R.snapshotVersion,k=R.withLastLimboFreeSnapshotVersion(D);d.Ts=d.Ts.insert(T,k)}}}(r.localStore,i))}async function iw(e,t){const n=at(e);if(!n.currentUser.isEqual(t)){K(xl,"User change. New user:",t.toKey());const r=await jd(n.localStore,t);n.currentUser=t,function(i,a){i.Ga.forEach(l=>{l.forEach(u=>{u.reject(new Y(N.CANCELLED,a))})}),i.Ga.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(t,r.removedBatchIds,r.addedBatchIds),await Ns(n,r.Rs)}}function ow(e,t){const n=at(e),r=n.Ka.get(t);if(r&&r.Ba)return ft().add(r.key);{let s=ft();const i=n.qa.get(t);if(!i)return s;for(const a of i){const l=n.ka.get(a);s=s.unionWith(l.view.ba)}return s}}function ip(e){const t=at(e);return t.remoteStore.remoteSyncer.applyRemoteEvent=ep.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=ow.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=ew.bind(null,t),t.La.p_=jE.bind(null,t.eventManager),t.La.Ja=qE.bind(null,t.eventManager),t}function aw(e){const t=at(e);return t.remoteStore.remoteSyncer.applySuccessfulWrite=nw.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=rw.bind(null,t),t}class Bi{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(t){this.serializer=fo(t.databaseInfo.databaseId),this.sharedClientState=this.Za(t),this.persistence=this.Xa(t),await this.persistence.start(),this.localStore=this.eu(t),this.gcScheduler=this.tu(t,this.localStore),this.indexBackfillerScheduler=this.nu(t,this.localStore)}tu(t,n){return null}nu(t,n){return null}eu(t){return lE(this.persistence,new iE,t.initialUser,this.serializer)}Xa(t){return new $d(wl.ri,this.serializer)}Za(t){return new mE}async terminate(){var t,n;(t=this.gcScheduler)===null||t===void 0||t.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Bi.provider={build:()=>new Bi};class lw extends Bi{constructor(t){super(),this.cacheSizeBytes=t}tu(t,n){It(this.persistence.referenceDelegate instanceof Fi);const r=this.persistence.referenceDelegate.garbageCollector;return new HT(r,t.asyncQueue,n)}Xa(t){const n=this.cacheSizeBytes!==void 0?ue.withCacheSize(this.cacheSizeBytes):ue.DEFAULT;return new $d(r=>Fi.ri(r,n),this.serializer)}}class ja{async initialize(t,n){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>lh(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=iw.bind(null,this.syncEngine),await LE(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new UE}()}createDatastore(t){const n=fo(t.databaseInfo.databaseId),r=function(i){return new TE(i)}(t.databaseInfo);return function(i,a,l,u){return new AE(i,a,l,u)}(t.authCredentials,t.appCheckCredentials,r,n)}createRemoteStore(t){return function(r,s,i,a,l){return new RE(r,s,i,a,l)}(this.localStore,this.datastore,t.asyncQueue,n=>lh(this.syncEngine,n,0),function(){return nh.D()?new nh:new gE}())}createSyncEngine(t,n){return function(s,i,a,l,u,f,d){const m=new GE(s,i,a,l,u,f);return d&&(m.ja=!0),m}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,n)}async terminate(){var t,n;await async function(s){const i=at(s);K(tr,"RemoteStore shutting down."),i.W_.add(5),await xs(i),i.z_.shutdown(),i.j_.set("Unknown")}(this.remoteStore),(t=this.datastore)===null||t===void 0||t.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}ja.provider={build:()=>new ja};/**
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
 *//**
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
 */class cw{constructor(t){this.observer=t,this.muted=!1}next(t){this.muted||this.observer.next&&this.iu(this.observer.next,t)}error(t){this.muted||(this.observer.error?this.iu(this.observer.error,t):nn("Uncaught Error in snapshot listener:",t.toString()))}su(){this.muted=!0}iu(t,n){setTimeout(()=>{this.muted||t(n)},0)}}/**
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
 */const Sn="FirestoreClient";class uw{constructor(t,n,r,s,i){this.authCredentials=t,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=te.UNAUTHENTICATED,this.clientId=Zf.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async a=>{K(Sn,"Received user=",a.uid),await this.authCredentialListener(a),this.user=a}),this.appCheckCredentials.start(r,a=>(K(Sn,"Received new app check token=",a),this.appCheckCredentialListener(a,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}terminate(){this.asyncQueue.enterRestrictedMode();const t=new yn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(n){const r=Vl(n,"Failed to shutdown persistence");t.reject(r)}}),t.promise}}async function ia(e,t){e.asyncQueue.verifyOperationInProgress(),K(Sn,"Initializing OfflineComponentProvider");const n=e.configuration;await t.initialize(n);let r=n.initialUser;e.setCredentialChangeListener(async s=>{r.isEqual(s)||(await jd(t.localStore,s),r=s)}),t.persistence.setDatabaseDeletedListener(()=>e.terminate()),e._offlineComponents=t}async function uh(e,t){e.asyncQueue.verifyOperationInProgress();const n=await hw(e);K(Sn,"Initializing OnlineComponentProvider"),await t.initialize(n,e.configuration),e.setCredentialChangeListener(r=>sh(t.remoteStore,r)),e.setAppCheckTokenChangeListener((r,s)=>sh(t.remoteStore,s)),e._onlineComponents=t}async function hw(e){if(!e._offlineComponents)if(e._uninitializedComponentsProvider){K(Sn,"Using user provided OfflineComponentProvider");try{await ia(e,e._uninitializedComponentsProvider._offline)}catch(t){const n=t;if(!function(s){return s.name==="FirebaseError"?s.code===N.FAILED_PRECONDITION||s.code===N.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(n))throw n;br("Error using user provided cache. Falling back to memory cache: "+n),await ia(e,new Bi)}}else K(Sn,"Using default OfflineComponentProvider"),await ia(e,new lw(void 0));return e._offlineComponents}async function op(e){return e._onlineComponents||(e._uninitializedComponentsProvider?(K(Sn,"Using user provided OnlineComponentProvider"),await uh(e,e._uninitializedComponentsProvider._online)):(K(Sn,"Using default OnlineComponentProvider"),await uh(e,new ja))),e._onlineComponents}function fw(e){return op(e).then(t=>t.syncEngine)}async function dw(e){const t=await op(e),n=t.eventManager;return n.onListen=QE.bind(null,t.syncEngine),n.onUnlisten=JE.bind(null,t.syncEngine),n.onFirstRemoteStoreListen=XE.bind(null,t.syncEngine),n.onLastRemoteStoreUnlisten=ZE.bind(null,t.syncEngine),n}function pw(e,t,n={}){const r=new yn;return e.asyncQueue.enqueueAndForget(async()=>function(i,a,l,u,f){const d=new cw({next:T=>{d.su(),a.enqueueAndForget(()=>$E(i,m)),T.fromCache&&u.source==="server"?f.reject(new Y(N.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):f.resolve(T)},error:T=>f.reject(T)}),m=new HE(l,d,{includeMetadataChanges:!0,Ta:!0});return BE(i,m)}(await dw(e),e.asyncQueue,t,n,r)),r.promise}/**
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
 */function ap(e){const t={};return e.timeoutSeconds!==void 0&&(t.timeoutSeconds=e.timeoutSeconds),t}/**
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
 */const hh=new Map;/**
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
 */function lp(e,t,n){if(!n)throw new Y(N.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function mw(e,t,n,r){if(t===!0&&r===!0)throw new Y(N.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}function fh(e){if(!Z.isDocumentKey(e))throw new Y(N.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function dh(e){if(Z.isDocumentKey(e))throw new Y(N.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function kl(e){if(e===void 0)return"undefined";if(e===null)return"null";if(typeof e=="string")return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if(typeof e=="number"||typeof e=="boolean")return""+e;if(typeof e=="object"){if(e instanceof Array)return"an array";{const t=function(r){return r.constructor?r.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return typeof e=="function"?"a function":st()}function er(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new Y(N.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=kl(e);throw new Y(N.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}/**
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
 */const cp="firestore.googleapis.com",ph=!0;class mh{constructor(t){var n,r;if(t.host===void 0){if(t.ssl!==void 0)throw new Y(N.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=cp,this.ssl=ph}else this.host=t.host,this.ssl=(n=t.ssl)!==null&&n!==void 0?n:ph;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=Bd;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<jT)throw new Y(N.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}mw("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=ap((r=t.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new Y(N.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new Y(N.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new Y(N.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class go{constructor(t,n,r,s){this._authCredentials=t,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new mh({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new Y(N.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(t){if(this._settingsFrozen)throw new Y(N.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new mh(t),this._emulatorOptions=t.emulatorOptions||{},t.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new _v;switch(r.type){case"firstParty":return new Ev(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new Y(N.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=hh.get(n);r&&(K("ComponentProvider","Removing Datastore"),hh.delete(n),r.terminate())}(this),Promise.resolve()}}function gw(e,t,n,r={}){var s;const i=(e=er(e,go))._getSettings(),a=Object.assign(Object.assign({},i),{emulatorOptions:e._getEmulatorOptions()}),l=`${t}:${n}`;i.host!==cp&&i.host!==l&&br("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const u=Object.assign(Object.assign({},i),{host:l,ssl:!1,emulatorOptions:r});if(!Ar(u,a)&&(e._setSettings(u),r.mockUserToken)){let f,d;if(typeof r.mockUserToken=="string")f=r.mockUserToken,d=te.MOCK_USER;else{f=Q_(r.mockUserToken,(s=e._app)===null||s===void 0?void 0:s.options.projectId);const m=r.mockUserToken.sub||r.mockUserToken.user_id;if(!m)throw new Y(N.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");d=new te(m)}e._authCredentials=new yv(new Jf(f,d))}}/**
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
 */class _o{constructor(t,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=t}withConverter(t){return new _o(this.firestore,t,this._query)}}class Te{constructor(t,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new vn(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new Te(this.firestore,t,this._key)}}class vn extends _o{constructor(t,n,r){super(t,n,gd(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new Te(this.firestore,null,new Z(t))}withConverter(t){return new vn(this.firestore,t,this._path)}}function _w(e,t,...n){if(e=$e(e),lp("collection","path",t),e instanceof go){const r=Pt.fromString(t,...n);return dh(r),new vn(e,null,r)}{if(!(e instanceof Te||e instanceof vn))throw new Y(N.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(Pt.fromString(t,...n));return dh(r),new vn(e.firestore,null,r)}}function gh(e,t,...n){if(e=$e(e),arguments.length===1&&(t=Zf.newId()),lp("doc","path",t),e instanceof go){const r=Pt.fromString(t,...n);return fh(r),new Te(e,null,new Z(r))}{if(!(e instanceof Te||e instanceof vn))throw new Y(N.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(Pt.fromString(t,...n));return fh(r),new Te(e.firestore,e instanceof vn?e.converter:null,new Z(r))}}/**
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
 */const _h="AsyncQueue";class yh{constructor(t=Promise.resolve()){this.Vu=[],this.mu=!1,this.fu=[],this.gu=null,this.pu=!1,this.yu=!1,this.wu=[],this.a_=new Hd(this,"async_queue_retry"),this.bu=()=>{const r=sa();r&&K(_h,"Visibility state changed to "+r.visibilityState),this.a_.t_()},this.Su=t;const n=sa();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.bu)}get isShuttingDown(){return this.mu}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.Du(),this.vu(t)}enterRestrictedMode(t){if(!this.mu){this.mu=!0,this.yu=t||!1;const n=sa();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.bu)}}enqueue(t){if(this.Du(),this.mu)return new Promise(()=>{});const n=new yn;return this.vu(()=>this.mu&&this.yu?Promise.resolve():(t().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Vu.push(t),this.Cu()))}async Cu(){if(this.Vu.length!==0){try{await this.Vu[0](),this.Vu.shift(),this.a_.reset()}catch(t){if(!Or(t))throw t;K(_h,"Operation failed with retryable error: "+t)}this.Vu.length>0&&this.a_.Xo(()=>this.Cu())}}vu(t){const n=this.Su.then(()=>(this.pu=!0,t().catch(r=>{this.gu=r,this.pu=!1;const s=function(a){let l=a.message||"";return a.stack&&(l=a.stack.includes(a.message)?a.stack:a.message+`
`+a.stack),l}(r);throw nn("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.pu=!1,r))));return this.Su=n,n}enqueueAfterDelay(t,n,r){this.Du(),this.wu.indexOf(t)>-1&&(n=0);const s=Pl.createAndSchedule(this,t,n,r,i=>this.Fu(i));return this.fu.push(s),s}Du(){this.gu&&st()}verifyOperationInProgress(){}async Mu(){let t;do t=this.Su,await t;while(t!==this.Su)}xu(t){for(const n of this.fu)if(n.timerId===t)return!0;return!1}Ou(t){return this.Mu().then(()=>{this.fu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.fu)if(n.skipDelay(),t!=="all"&&n.timerId===t)break;return this.Mu()})}Nu(t){this.wu.push(t)}Fu(t){const n=this.fu.indexOf(t);this.fu.splice(n,1)}}class yo extends go{constructor(t,n,r,s){super(t,n,r,s),this.type="firestore",this._queue=new yh,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new yh(t),this._firestoreClient=void 0,await t}}}function yw(e,t){const n=typeof e=="object"?e:qf(),r=typeof e=="string"?e:Di,s=Ps(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=W_("firestore");i&&gw(s,...i)}return s}function up(e){if(e._terminated)throw new Y(N.FAILED_PRECONDITION,"The client has already been terminated.");return e._firestoreClient||vw(e),e._firestoreClient}function vw(e){var t,n,r;const s=e._freezeSettings(),i=function(l,u,f,d){return new Ov(l,u,f,d.host,d.ssl,d.experimentalForceLongPolling,d.experimentalAutoDetectLongPolling,ap(d.experimentalLongPollingOptions),d.useFetchStreams)}(e._databaseId,((t=e._app)===null||t===void 0?void 0:t.options.appId)||"",e._persistenceKey,s);e._componentsProvider||!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(e._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),e._firestoreClient=new uw(e._authCredentials,e._appCheckCredentials,e._queue,i,e._componentsProvider&&function(l){const u=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(u),_online:u}}(e._componentsProvider))}/**
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
 */class xr{constructor(t){this._byteString=t}static fromBase64String(t){try{return new xr(Gt.fromBase64String(t))}catch(n){throw new Y(N.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(t){return new xr(Gt.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
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
 */class vo{constructor(...t){for(let n=0;n<t.length;++n)if(t[n].length===0)throw new Y(N.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Wt(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
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
 */class To{constructor(t){this._methodName=t}}/**
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
 */class Ol{constructor(t,n){if(!isFinite(t)||t<-90||t>90)throw new Y(N.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(n)||n<-180||n>180)throw new Y(N.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=t,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return pt(this._lat,t._lat)||pt(this._long,t._long)}}/**
 * @license
 * Copyright 2024 Google LLC
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
 */class Ml{constructor(t){this._values=(t||[]).map(n=>n)}toArray(){return this._values.map(t=>t)}isEqual(t){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,t._values)}}/**
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
 */const Tw=/^__.*__$/;class Ew{constructor(t,n,r){this.data=t,this.fieldMask=n,this.fieldTransforms=r}toMutation(t,n){return this.fieldMask!==null?new Nn(t,this.data,this.fieldMask,n,this.fieldTransforms):new Vs(t,this.data,n,this.fieldTransforms)}}class hp{constructor(t,n,r){this.data=t,this.fieldMask=n,this.fieldTransforms=r}toMutation(t,n){return new Nn(t,this.data,this.fieldMask,n,this.fieldTransforms)}}function fp(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw st()}}class Eo{constructor(t,n,r,s,i,a){this.settings=t,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.Bu(),this.fieldTransforms=i||[],this.fieldMask=a||[]}get path(){return this.settings.path}get Lu(){return this.settings.Lu}ku(t){return new Eo(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}qu(t){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(t),s=this.ku({path:r,Qu:!1});return s.$u(t),s}Ku(t){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(t),s=this.ku({path:r,Qu:!1});return s.Bu(),s}Uu(t){return this.ku({path:void 0,Qu:!0})}Wu(t){return $i(t,this.settings.methodName,this.settings.Gu||!1,this.path,this.settings.zu)}contains(t){return this.fieldMask.find(n=>t.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>t.isPrefixOf(n.field))!==void 0}Bu(){if(this.path)for(let t=0;t<this.path.length;t++)this.$u(this.path.get(t))}$u(t){if(t.length===0)throw this.Wu("Document fields must not be empty");if(fp(this.Lu)&&Tw.test(t))throw this.Wu('Document fields cannot begin and end with "__"')}}class ww{constructor(t,n,r){this.databaseId=t,this.ignoreUndefinedProperties=n,this.serializer=r||fo(t)}ju(t,n,r,s=!1){return new Eo({Lu:t,methodName:n,zu:r,path:Wt.emptyPath(),Qu:!1,Gu:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function dp(e){const t=e._freezeSettings(),n=fo(e._databaseId);return new ww(e._databaseId,!!t.ignoreUndefinedProperties,n)}function Iw(e,t,n,r,s,i={}){const a=e.ju(i.merge||i.mergeFields?2:0,t,n,s);Fl("Data must be an object, but it was:",a,r);const l=pp(r,a);let u,f;if(i.merge)u=new ve(a.fieldMask),f=a.fieldTransforms;else if(i.mergeFields){const d=[];for(const m of i.mergeFields){const T=qa(t,m,n);if(!a.contains(T))throw new Y(N.INVALID_ARGUMENT,`Field '${T}' is specified in your field mask but missing from your input data.`);gp(d,T)||d.push(T)}u=new ve(d),f=a.fieldTransforms.filter(m=>u.covers(m.field))}else u=null,f=a.fieldTransforms;return new Ew(new he(l),u,f)}class wo extends To{_toFieldTransform(t){if(t.Lu!==2)throw t.Lu===1?t.Wu(`${this._methodName}() can only appear at the top level of your update data`):t.Wu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof wo}}function Aw(e,t,n){return new Eo({Lu:3,zu:t.settings.zu,methodName:e._methodName,Qu:n},t.databaseId,t.serializer,t.ignoreUndefinedProperties)}class Ll extends To{constructor(t,n){super(t),this.Hu=n}_toFieldTransform(t){const n=Aw(this,t,!0),r=this.Hu.map(i=>ks(i,n)),s=new Pr(r);return new lT(t.path,s)}isEqual(t){return t instanceof Ll&&Ar(this.Hu,t.Hu)}}function bw(e,t,n,r){const s=e.ju(1,t,n);Fl("Data must be an object, but it was:",s,r);const i=[],a=he.empty();xn(r,(u,f)=>{const d=Ul(t,u,n);f=$e(f);const m=s.Ku(d);if(f instanceof wo)i.push(d);else{const T=ks(f,m);T!=null&&(i.push(d),a.set(d,T))}});const l=new ve(i);return new hp(a,l,s.fieldTransforms)}function Rw(e,t,n,r,s,i){const a=e.ju(1,t,n),l=[qa(t,r,n)],u=[s];if(i.length%2!=0)throw new Y(N.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let T=0;T<i.length;T+=2)l.push(qa(t,i[T])),u.push(i[T+1]);const f=[],d=he.empty();for(let T=l.length-1;T>=0;--T)if(!gp(f,l[T])){const R=l[T];let D=u[T];D=$e(D);const k=a.Ku(R);if(D instanceof wo)f.push(R);else{const F=ks(D,k);F!=null&&(f.push(R),d.set(R,F))}}const m=new ve(f);return new hp(d,m,a.fieldTransforms)}function ks(e,t){if(mp(e=$e(e)))return Fl("Unsupported field value:",t,e),pp(e,t);if(e instanceof To)return function(r,s){if(!fp(s.Lu))throw s.Wu(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Wu(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(e,t),null;if(e===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.Qu&&t.Lu!==4)throw t.Wu("Nested arrays are not supported");return function(r,s){const i=[];let a=0;for(const l of r){let u=ks(l,s.Uu(a));u==null&&(u={nullValue:"NULL_VALUE"}),i.push(u),a++}return{arrayValue:{values:i}}}(e,t)}return function(r,s){if((r=$e(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return iT(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=Ft.fromDate(r);return{timestampValue:Li(s.serializer,i)}}if(r instanceof Ft){const i=new Ft(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Li(s.serializer,i)}}if(r instanceof Ol)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof xr)return{bytesValue:Nd(s.serializer,r._byteString)};if(r instanceof Te){const i=s.databaseId,a=r.firestore._databaseId;if(!a.isEqual(i))throw s.Wu(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Tl(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof Ml)return function(a,l){return{mapValue:{fields:{[ad]:{stringValue:ld},[xi]:{arrayValue:{values:a.toArray().map(f=>{if(typeof f!="number")throw l.Wu("VectorValues must only contain numeric values.");return _l(l.serializer,f)})}}}}}}(r,s);throw s.Wu(`Unsupported field value: ${kl(r)}`)}(e,t)}function pp(e,t){const n={};return ed(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):xn(e,(r,s)=>{const i=ks(s,t.qu(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function mp(e){return!(typeof e!="object"||e===null||e instanceof Array||e instanceof Date||e instanceof Ft||e instanceof Ol||e instanceof xr||e instanceof Te||e instanceof To||e instanceof Ml)}function Fl(e,t,n){if(!mp(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const r=kl(n);throw r==="an object"?t.Wu(e+" a custom object"):t.Wu(e+" "+r)}}function qa(e,t,n){if((t=$e(t))instanceof vo)return t._internalPath;if(typeof t=="string")return Ul(e,t);throw $i("Field path arguments must be of type string or ",e,!1,void 0,n)}const Sw=new RegExp("[~\\*/\\[\\]]");function Ul(e,t,n){if(t.search(Sw)>=0)throw $i(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new vo(...t.split("."))._internalPath}catch{throw $i(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function $i(e,t,n,r,s){const i=r&&!r.isEmpty(),a=s!==void 0;let l=`Function ${t}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let u="";return(i||a)&&(u+=" (found",i&&(u+=` in field ${r}`),a&&(u+=` in document ${s}`),u+=")"),new Y(N.INVALID_ARGUMENT,l+e+u)}function gp(e,t){return e.some(n=>n.isEqual(t))}/**
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
 */class _p{constructor(t,n,r,s,i){this._firestore=t,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Te(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new Cw(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const n=this._document.data.field(yp("DocumentSnapshot.get",t));if(n!==null)return this._userDataWriter.convertValue(n)}}}class Cw extends _p{data(){return super.data()}}function yp(e,t){return typeof t=="string"?Ul(e,t):t instanceof vo?t._internalPath:t._delegate._internalPath}/**
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
 */function Pw(e){if(e.limitType==="L"&&e.explicitOrderBy.length===0)throw new Y(N.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Vw{convertValue(t,n="none"){switch(bn(t)){case 0:return null;case 1:return t.booleanValue;case 2:return xt(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,n);case 5:return t.stringValue;case 6:return this.convertBytes(An(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,n);case 11:return this.convertObject(t.mapValue,n);case 10:return this.convertVectorValue(t.mapValue);default:throw st()}}convertObject(t,n){return this.convertObjectMap(t.fields,n)}convertObjectMap(t,n="none"){const r={};return xn(t,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertVectorValue(t){var n,r,s;const i=(s=(r=(n=t.fields)===null||n===void 0?void 0:n[xi].arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map(a=>xt(a.doubleValue));return new Ml(i)}convertGeoPoint(t){return new Ol(xt(t.latitude),xt(t.longitude))}convertArray(t,n){return(t.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(t,n){switch(n){case"previous":const r=io(t);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(ws(t));default:return null}}convertTimestamp(t){const n=In(t);return new Ft(n.seconds,n.nanos)}convertDocumentKey(t,n){const r=Pt.fromString(t);It(Ud(r));const s=new Is(r.get(1),r.get(3)),i=new Z(r.popFirst(5));return s.isEqual(n)||nn(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
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
 */function Dw(e,t,n){let r;return r=e?e.toFirestore(t):t,r}/**
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
 */class ai{constructor(t,n){this.hasPendingWrites=t,this.fromCache=n}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class xw extends _p{constructor(t,n,r,s,i,a){super(t,n,r,s,a),this._firestore=t,this._firestoreImpl=t,this.metadata=i}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const n=new yi(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,n={}){if(this._document){const r=this._document.data.field(yp("DocumentSnapshot.get",t));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class yi extends xw{data(t={}){return super.data(t)}}class Nw{constructor(t,n,r,s){this._firestore=t,this._userDataWriter=n,this._snapshot=s,this.metadata=new ai(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const t=[];return this.forEach(n=>t.push(n)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,n){this._snapshot.docs.forEach(r=>{t.call(n,new yi(this._firestore,this._userDataWriter,r.key,r,new ai(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const n=!!t.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new Y(N.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let a=0;return s._snapshot.docChanges.map(l=>{const u=new yi(s._firestore,s._userDataWriter,l.doc.key,l.doc,new ai(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);return l.doc,{type:"added",doc:u,oldIndex:-1,newIndex:a++}})}{let a=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(l=>i||l.type!==3).map(l=>{const u=new yi(s._firestore,s._userDataWriter,l.doc.key,l.doc,new ai(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);let f=-1,d=-1;return l.type!==0&&(f=a.indexOf(l.doc.key),a=a.delete(l.doc.key)),l.type!==1&&(a=a.add(l.doc),d=a.indexOf(l.doc.key)),{type:kw(l.type),doc:u,oldIndex:f,newIndex:d}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function kw(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return st()}}class Ow extends Vw{constructor(t){super(),this.firestore=t}convertBytes(t){return new xr(t)}convertReference(t){const n=this.convertDocumentKey(t,this.firestore._databaseId);return new Te(this.firestore,null,n)}}function Mw(e){e=er(e,_o);const t=er(e.firestore,yo),n=up(t),r=new Ow(t);return Pw(e._query),pw(n,e._query).then(s=>new Nw(t,r,e,s))}function Lw(e,t,n){e=er(e,Te);const r=er(e.firestore,yo),s=Dw(e.converter,t);return vp(r,[Iw(dp(r),"setDoc",e._key,s,e.converter!==null,n).toMutation(e._key,Le.none())])}function Fw(e,t,n,...r){e=er(e,Te);const s=er(e.firestore,yo),i=dp(s);let a;return a=typeof(t=$e(t))=="string"||t instanceof vo?Rw(i,"updateDoc",e._key,t,n,r):bw(i,"updateDoc",e._key,t),vp(s,[a.toMutation(e._key,Le.exists(!0))])}function vp(e,t){return function(r,s){const i=new yn;return r.asyncQueue.enqueueAndForget(async()=>tw(await fw(r),s,i)),i.promise}(up(e),t)}function Uw(...e){return new Ll("arrayUnion",e)}(function(t,n=!0){(function(s){Nr=s})(ov),En(new tn("firestore",(r,{instanceIdentifier:s,options:i})=>{const a=r.getProvider("app").getImmediate(),l=new yo(new vv(r.getProvider("auth-internal")),new wv(a,r.getProvider("app-check-internal")),function(f,d){if(!Object.prototype.hasOwnProperty.apply(f.options,["projectId"]))throw new Y(N.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Is(f.options.projectId,d)}(a,s),a);return i=Object.assign({useFetchStreams:n},i),l._setSettings(i),l},"PUBLIC").setMultipleInstances(!0)),Oe(Au,bu,t),Oe(Au,bu,"esm2017")})();var Bw="firebase",$w="11.4.0";/**
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
 */Oe(Bw,$w,"app");const Tp="@firebase/installations",Bl="0.6.13";/**
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
 */const Ep=1e4,wp=`w:${Bl}`,Ip="FIS_v2",jw="https://firebaseinstallations.googleapis.com/v1",qw=60*60*1e3,Hw="installations",Kw="Installations";/**
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
 */const zw={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},nr=new no(Hw,Kw,zw);function Ap(e){return e instanceof Dn&&e.code.includes("request-failed")}/**
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
 */function bp({projectId:e}){return`${jw}/projects/${e}/installations`}function Rp(e){return{token:e.token,requestStatus:2,expiresIn:Gw(e.expiresIn),creationTime:Date.now()}}async function Sp(e,t){const r=(await t.json()).error;return nr.create("request-failed",{requestName:e,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function Cp({apiKey:e}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}function Ww(e,{refreshToken:t}){const n=Cp(e);return n.append("Authorization",Qw(t)),n}async function Pp(e){const t=await e();return t.status>=500&&t.status<600?e():t}function Gw(e){return Number(e.replace("s","000"))}function Qw(e){return`${Ip} ${e}`}/**
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
 */async function Xw({appConfig:e,heartbeatServiceProvider:t},{fid:n}){const r=bp(e),s=Cp(e),i=t.getImmediate({optional:!0});if(i){const f=await i.getHeartbeatsHeader();f&&s.append("x-firebase-client",f)}const a={fid:n,authVersion:Ip,appId:e.appId,sdkVersion:wp},l={method:"POST",headers:s,body:JSON.stringify(a)},u=await Pp(()=>fetch(r,l));if(u.ok){const f=await u.json();return{fid:f.fid||n,registrationStatus:2,refreshToken:f.refreshToken,authToken:Rp(f.authToken)}}else throw await Sp("Create Installation",u)}/**
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
 */function Vp(e){return new Promise(t=>{setTimeout(t,e)})}/**
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
 */function Yw(e){return btoa(String.fromCharCode(...e)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const Jw=/^[cdef][\w-]{21}$/,Ha="";function Zw(){try{const e=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(e),e[0]=112+e[0]%16;const n=tI(e);return Jw.test(n)?n:Ha}catch{return Ha}}function tI(e){return Yw(e).substr(0,22)}/**
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
 */function Io(e){return`${e.appName}!${e.appId}`}/**
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
 */const Dp=new Map;function xp(e,t){const n=Io(e);Np(n,t),eI(n,t)}function Np(e,t){const n=Dp.get(e);if(n)for(const r of n)r(t)}function eI(e,t){const n=nI();n&&n.postMessage({key:e,fid:t}),rI()}let Qn=null;function nI(){return!Qn&&"BroadcastChannel"in self&&(Qn=new BroadcastChannel("[Firebase] FID Change"),Qn.onmessage=e=>{Np(e.data.key,e.data.fid)}),Qn}function rI(){Dp.size===0&&Qn&&(Qn.close(),Qn=null)}/**
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
 */const sI="firebase-installations-database",iI=1,rr="firebase-installations-store";let oa=null;function $l(){return oa||(oa=$f(sI,iI,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(rr)}}})),oa}async function ji(e,t){const n=Io(e),s=(await $l()).transaction(rr,"readwrite"),i=s.objectStore(rr),a=await i.get(n);return await i.put(t,n),await s.done,(!a||a.fid!==t.fid)&&xp(e,t.fid),t}async function kp(e){const t=Io(e),r=(await $l()).transaction(rr,"readwrite");await r.objectStore(rr).delete(t),await r.done}async function Ao(e,t){const n=Io(e),s=(await $l()).transaction(rr,"readwrite"),i=s.objectStore(rr),a=await i.get(n),l=t(a);return l===void 0?await i.delete(n):await i.put(l,n),await s.done,l&&(!a||a.fid!==l.fid)&&xp(e,l.fid),l}/**
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
 */async function jl(e){let t;const n=await Ao(e.appConfig,r=>{const s=oI(r),i=aI(e,s);return t=i.registrationPromise,i.installationEntry});return n.fid===Ha?{installationEntry:await t}:{installationEntry:n,registrationPromise:t}}function oI(e){const t=e||{fid:Zw(),registrationStatus:0};return Op(t)}function aI(e,t){if(t.registrationStatus===0){if(!navigator.onLine){const s=Promise.reject(nr.create("app-offline"));return{installationEntry:t,registrationPromise:s}}const n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},r=lI(e,n);return{installationEntry:n,registrationPromise:r}}else return t.registrationStatus===1?{installationEntry:t,registrationPromise:cI(e)}:{installationEntry:t}}async function lI(e,t){try{const n=await Xw(e,t);return ji(e.appConfig,n)}catch(n){throw Ap(n)&&n.customData.serverCode===409?await kp(e.appConfig):await ji(e.appConfig,{fid:t.fid,registrationStatus:0}),n}}async function cI(e){let t=await vh(e.appConfig);for(;t.registrationStatus===1;)await Vp(100),t=await vh(e.appConfig);if(t.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await jl(e);return r||n}return t}function vh(e){return Ao(e,t=>{if(!t)throw nr.create("installation-not-found");return Op(t)})}function Op(e){return uI(e)?{fid:e.fid,registrationStatus:0}:e}function uI(e){return e.registrationStatus===1&&e.registrationTime+Ep<Date.now()}/**
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
 */async function hI({appConfig:e,heartbeatServiceProvider:t},n){const r=fI(e,n),s=Ww(e,n),i=t.getImmediate({optional:!0});if(i){const f=await i.getHeartbeatsHeader();f&&s.append("x-firebase-client",f)}const a={installation:{sdkVersion:wp,appId:e.appId}},l={method:"POST",headers:s,body:JSON.stringify(a)},u=await Pp(()=>fetch(r,l));if(u.ok){const f=await u.json();return Rp(f)}else throw await Sp("Generate Auth Token",u)}function fI(e,{fid:t}){return`${bp(e)}/${t}/authTokens:generate`}/**
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
 */async function ql(e,t=!1){let n;const r=await Ao(e.appConfig,i=>{if(!Mp(i))throw nr.create("not-registered");const a=i.authToken;if(!t&&mI(a))return i;if(a.requestStatus===1)return n=dI(e,t),i;{if(!navigator.onLine)throw nr.create("app-offline");const l=_I(i);return n=pI(e,l),l}});return n?await n:r.authToken}async function dI(e,t){let n=await Th(e.appConfig);for(;n.authToken.requestStatus===1;)await Vp(100),n=await Th(e.appConfig);const r=n.authToken;return r.requestStatus===0?ql(e,t):r}function Th(e){return Ao(e,t=>{if(!Mp(t))throw nr.create("not-registered");const n=t.authToken;return yI(n)?Object.assign(Object.assign({},t),{authToken:{requestStatus:0}}):t})}async function pI(e,t){try{const n=await hI(e,t),r=Object.assign(Object.assign({},t),{authToken:n});return await ji(e.appConfig,r),n}catch(n){if(Ap(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await kp(e.appConfig);else{const r=Object.assign(Object.assign({},t),{authToken:{requestStatus:0}});await ji(e.appConfig,r)}throw n}}function Mp(e){return e!==void 0&&e.registrationStatus===2}function mI(e){return e.requestStatus===2&&!gI(e)}function gI(e){const t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+qw}function _I(e){const t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},e),{authToken:t})}function yI(e){return e.requestStatus===1&&e.requestTime+Ep<Date.now()}/**
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
 */async function vI(e){const t=e,{installationEntry:n,registrationPromise:r}=await jl(t);return r?r.catch(console.error):ql(t).catch(console.error),n.fid}/**
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
 */async function TI(e,t=!1){const n=e;return await EI(n),(await ql(n,t)).token}async function EI(e){const{registrationPromise:t}=await jl(e);t&&await t}/**
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
 */function wI(e){if(!e||!e.options)throw aa("App Configuration");if(!e.name)throw aa("App Name");const t=["projectId","apiKey","appId"];for(const n of t)if(!e.options[n])throw aa(n);return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}function aa(e){return nr.create("missing-app-config-values",{valueName:e})}/**
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
 */const Lp="installations",II="installations-internal",AI=e=>{const t=e.getProvider("app").getImmediate(),n=wI(t),r=Ps(t,"heartbeat");return{app:t,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},bI=e=>{const t=e.getProvider("app").getImmediate(),n=Ps(t,Lp).getImmediate();return{getId:()=>vI(n),getToken:s=>TI(n,s)}};function RI(){En(new tn(Lp,AI,"PUBLIC")),En(new tn(II,bI,"PRIVATE"))}RI();Oe(Tp,Bl);Oe(Tp,Bl,"esm2017");/**
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
 */const qi="analytics",SI="firebase_id",CI="origin",PI=60*1e3,VI="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Hl="https://www.googletagmanager.com/gtag/js";/**
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
 */const fe=new cl("@firebase/analytics");/**
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
 */const DI={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},Ee=new no("analytics","Analytics",DI);/**
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
 */function xI(e){if(!e.startsWith(Hl)){const t=Ee.create("invalid-gtag-resource",{gtagURL:e});return fe.warn(t.message),""}return e}function Fp(e){return Promise.all(e.map(t=>t.catch(n=>n)))}function NI(e,t){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(e,t)),n}function kI(e,t){const n=NI("firebase-js-sdk-policy",{createScriptURL:xI}),r=document.createElement("script"),s=`${Hl}?l=${e}&id=${t}`;r.src=n?n==null?void 0:n.createScriptURL(s):s,r.async=!0,document.head.appendChild(r)}function OI(e){let t=[];return Array.isArray(window[e])?t=window[e]:window[e]=t,t}async function MI(e,t,n,r,s,i){const a=r[s];try{if(a)await t[a];else{const u=(await Fp(n)).find(f=>f.measurementId===s);u&&await t[u.appId]}}catch(l){fe.error(l)}e("config",s,i)}async function LI(e,t,n,r,s){try{let i=[];if(s&&s.send_to){let a=s.send_to;Array.isArray(a)||(a=[a]);const l=await Fp(n);for(const u of a){const f=l.find(m=>m.measurementId===u),d=f&&t[f.appId];if(d)i.push(d);else{i=[];break}}}i.length===0&&(i=Object.values(t)),await Promise.all(i),e("event",r,s||{})}catch(i){fe.error(i)}}function FI(e,t,n,r){async function s(i,...a){try{if(i==="event"){const[l,u]=a;await LI(e,t,n,l,u)}else if(i==="config"){const[l,u]=a;await MI(e,t,n,r,l,u)}else if(i==="consent"){const[l,u]=a;e("consent",l,u)}else if(i==="get"){const[l,u,f]=a;e("get",l,u,f)}else if(i==="set"){const[l]=a;e("set",l)}else e(i,...a)}catch(l){fe.error(l)}}return s}function UI(e,t,n,r,s){let i=function(...a){window[r].push(arguments)};return window[s]&&typeof window[s]=="function"&&(i=window[s]),window[s]=FI(i,e,t,n),{gtagCore:i,wrappedGtag:window[s]}}function BI(e){const t=window.document.getElementsByTagName("script");for(const n of Object.values(t))if(n.src&&n.src.includes(Hl)&&n.src.includes(e))return n;return null}/**
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
 */const $I=30,jI=1e3;class qI{constructor(t={},n=jI){this.throttleMetadata=t,this.intervalMillis=n}getThrottleMetadata(t){return this.throttleMetadata[t]}setThrottleMetadata(t,n){this.throttleMetadata[t]=n}deleteThrottleMetadata(t){delete this.throttleMetadata[t]}}const Up=new qI;function HI(e){return new Headers({Accept:"application/json","x-goog-api-key":e})}async function KI(e){var t;const{appId:n,apiKey:r}=e,s={method:"GET",headers:HI(r)},i=VI.replace("{app-id}",n),a=await fetch(i,s);if(a.status!==200&&a.status!==304){let l="";try{const u=await a.json();!((t=u.error)===null||t===void 0)&&t.message&&(l=u.error.message)}catch{}throw Ee.create("config-fetch-failed",{httpStatus:a.status,responseMessage:l})}return a.json()}async function zI(e,t=Up,n){const{appId:r,apiKey:s,measurementId:i}=e.options;if(!r)throw Ee.create("no-app-id");if(!s){if(i)return{measurementId:i,appId:r};throw Ee.create("no-api-key")}const a=t.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},l=new QI;return setTimeout(async()=>{l.abort()},PI),Bp({appId:r,apiKey:s,measurementId:i},a,l,t)}async function Bp(e,{throttleEndTimeMillis:t,backoffCount:n},r,s=Up){var i;const{appId:a,measurementId:l}=e;try{await WI(r,t)}catch(u){if(l)return fe.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${l} provided in the "measurementId" field in the local Firebase config. [${u==null?void 0:u.message}]`),{appId:a,measurementId:l};throw u}try{const u=await KI(e);return s.deleteThrottleMetadata(a),u}catch(u){const f=u;if(!GI(f)){if(s.deleteThrottleMetadata(a),l)return fe.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${l} provided in the "measurementId" field in the local Firebase config. [${f==null?void 0:f.message}]`),{appId:a,measurementId:l};throw u}const d=Number((i=f==null?void 0:f.customData)===null||i===void 0?void 0:i.httpStatus)===503?pu(n,s.intervalMillis,$I):pu(n,s.intervalMillis),m={throttleEndTimeMillis:Date.now()+d,backoffCount:n+1};return s.setThrottleMetadata(a,m),fe.debug(`Calling attemptFetch again in ${d} millis`),Bp(e,m,r,s)}}function WI(e,t){return new Promise((n,r)=>{const s=Math.max(t-Date.now(),0),i=setTimeout(n,s);e.addEventListener(()=>{clearTimeout(i),r(Ee.create("fetch-throttle",{throttleEndTimeMillis:t}))})})}function GI(e){if(!(e instanceof Dn)||!e.customData)return!1;const t=Number(e.customData.httpStatus);return t===429||t===500||t===503||t===504}class QI{constructor(){this.listeners=[]}addEventListener(t){this.listeners.push(t)}abort(){this.listeners.forEach(t=>t())}}async function XI(e,t,n,r,s){if(s&&s.global){e("event",n,r);return}else{const i=await t,a=Object.assign(Object.assign({},r),{send_to:i});e("event",n,a)}}/**
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
 */async function YI(){if(Lf())try{await Ff()}catch(e){return fe.warn(Ee.create("indexeddb-unavailable",{errorInfo:e==null?void 0:e.toString()}).message),!1}else return fe.warn(Ee.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function JI(e,t,n,r,s,i,a){var l;const u=zI(e);u.then(R=>{n[R.measurementId]=R.appId,e.options.measurementId&&R.measurementId!==e.options.measurementId&&fe.warn(`The measurement ID in the local Firebase config (${e.options.measurementId}) does not match the measurement ID fetched from the server (${R.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(R=>fe.error(R)),t.push(u);const f=YI().then(R=>{if(R)return r.getId()}),[d,m]=await Promise.all([u,f]);BI(i)||kI(i,d.measurementId),s("js",new Date);const T=(l=a==null?void 0:a.config)!==null&&l!==void 0?l:{};return T[CI]="firebase",T.update=!0,m!=null&&(T[SI]=m),s("config",d.measurementId,T),d.measurementId}/**
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
 */class ZI{constructor(t){this.app=t}_delete(){return delete ps[this.app.options.appId],Promise.resolve()}}let ps={},Eh=[];const wh={};let la="dataLayer",tA="gtag",Ih,$p,Ah=!1;function eA(){const e=[];if(J_()&&e.push("This is a browser extension environment."),ty()||e.push("Cookies are not available."),e.length>0){const t=e.map((r,s)=>`(${s+1}) ${r}`).join(" "),n=Ee.create("invalid-analytics-context",{errorInfo:t});fe.warn(n.message)}}function nA(e,t,n){eA();const r=e.options.appId;if(!r)throw Ee.create("no-app-id");if(!e.options.apiKey)if(e.options.measurementId)fe.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${e.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Ee.create("no-api-key");if(ps[r]!=null)throw Ee.create("already-exists",{id:r});if(!Ah){OI(la);const{wrappedGtag:i,gtagCore:a}=UI(ps,Eh,wh,la,tA);$p=i,Ih=a,Ah=!0}return ps[r]=JI(e,Eh,wh,t,Ih,la,n),new ZI(e)}function rA(e=qf()){e=$e(e);const t=Ps(e,qi);return t.isInitialized()?t.getImmediate():sA(e)}function sA(e,t={}){const n=Ps(e,qi);if(n.isInitialized()){const s=n.getImmediate();if(Ar(t,n.getOptions()))return s;throw Ee.create("already-initialized")}return n.initialize({options:t})}function iA(e,t,n,r){e=$e(e),XI($p,ps[e.app.options.appId],t,n,r).catch(s=>fe.error(s))}const bh="@firebase/analytics",Rh="0.10.12";function oA(){En(new tn(qi,(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),s=t.getProvider("installations-internal").getImmediate();return nA(r,s,n)},"PUBLIC")),En(new tn("analytics-internal",e,"PRIVATE")),Oe(bh,Rh),Oe(bh,Rh,"esm2017");function e(t){try{const n=t.getProvider(qi).getImmediate();return{logEvent:(r,s,i)=>iA(n,r,s,i)}}catch(n){throw Ee.create("interop-component-reg-failed",{reason:n})}}}oA();const aA={apiKey:"AIzaSyCSq22B0EGii-MJaol2OB312bk61KKzzU8",authDomain:"gantt-chart-68458.firebaseapp.com",projectId:"gantt-chart-68458",storageBucket:"gantt-chart-68458.firebasestorage.app",messagingSenderId:"29991334340",appId:"1:29991334340:web:69af9bb3196ef28d9b3491",measurementId:"G-XECTYYL0Z3"},jp=jf(aA);rA(jp);const ca=yw(jp),lA={class:"gantt-container"},cA=["height"],uA=["x1","x2","y2"],hA=["x"],fA=["y"],dA=["y1","y2"],pA=["x","y","width","fill","onMouseenter"],mA=["x","y","fill"],gA={key:0,class:"password-form"},_A={key:0,class:"error"},yA={key:1,class:"task-form"},vA=["value"],TA={key:2,class:"team-member-form"},EA={key:0,class:"error"},wA={key:0},IA="940",ua=1200,Sh=60,ha=35,AA={__name:"App",setup(e){const t=Qe([]),n=async()=>{const g=await Mw(_w(ca,"tasks"));t.value=g.docs.map(j=>({name:j.data().name,tasks:j.data().tasks||[]}))},r=async()=>{for(const g of t.value)await Fw(gh(ca,"tasks",g.name),{tasks:Uw(...g.tasks)})},s=Qe(""),i=Qe(!1),a=Qe(""),l=Qe(""),u=Qe(""),f=async()=>{if(!l.value.trim()){u.value="Member name cannot be empty";return}const g=l.value.trim(),j=gh(ca,"tasks",g);try{await Lw(j,{name:g,tasks:[]}),t.value.push({name:g,tasks:[]}),console.log(`Added team member: ${g}`),l.value="",u.value=""}catch(Q){console.error("Error adding team member:",Q),u.value="Failed to add member. Try again."}},d=()=>{s.value===IA?(i.value=!0,a.value=""):a.value="Incorrect password. Try again."},m=Qe({member:"",name:"",startDate:"",endDate:"",priority:1,notes:""}),T=async()=>{const g=t.value.find(j=>j.name===m.value.member);g?(g.tasks.push({id:R(),name:m.value.name,startDate:m.value.startDate,endDate:m.value.endDate,priority:m.value.priority,notes:m.value.notes}),await r(),console.log("Updated teamMembers:",t.value),m.value={member:"",name:"",startDate:"",endDate:"",priority:1,notes:""}):console.error("Selected team member not found")};function R(){const g=Date.now(),j=Math.floor(Math.random()*1e3);return`${g}-${j}`}const D=hi(()=>{let g=100;return t.value.forEach(j=>{g+=j.tasks.length>0?j.tasks.length*ha:Sh}),g}),k=Qe(null),F=Qe({left:"0px",top:"0px"}),W=hi(()=>{const g=t.value.flatMap(nt=>nt.tasks.flatMap(ht=>[ht.startDate,ht.endDate])),j=new Date(Math.min(...g.map(nt=>new Date(nt)))),Q=new Date(Math.max(...g.map(nt=>new Date(nt)))),ut=new Date(Q);return ut.setDate(ut.getDate()+1),w(j,ut)}),G=hi(()=>{const g=W.value;return{start:g[0],end:g[g.length-1]}}),J=g=>`hsl(${(10-g)*12}, 100%, 50%)`,z=(g,j)=>{const Q=g.replace(/[^\d,]/g,"").split(",");return(parseInt(Q[0])*299+parseInt(Q[1])*587+parseInt(Q[2])*114)/1e3>125||j<=6?"black":"white"},dt=g=>{const j=(G.value.end-G.value.start)/864e5;return(new Date(g)-G.value.start)/(1e3*3600*24)/j*(ua-200)+200},vt=(g,j=0)=>{let Q=50;for(let ut=0;ut<g;ut++){const nt=t.value[ut];Q+=nt.tasks.length>0?nt.tasks.length*ha+10:Sh}return Q+=j*ha,Q},I=g=>{const j=new Date(g.startDate);return(new Date(g.endDate)-j)/(1e3*3600*24)/((G.value.end-G.value.start)/(1e3*3600*24))*(ua-200)},_=g=>[...g].sort((j,Q)=>new Date(j.startDate)-new Date(Q.startDate)),v=g=>new Date(g).toLocaleDateString("en-US",{weekday:"short",month:"short",day:"numeric"}),w=(g,j)=>{const Q=[];let ut=new Date(g);for(;ut<=j;)Q.push(new Date(ut)),ut.setDate(ut.getDate()+1);return Q},A=g=>{k.value=g},S=()=>{k.value=null};return lf(n),(g,j)=>(Bt(),Kt("div",lA,[(Bt(),Kt("svg",{width:ua,height:D.value},[j[8]||(j[8]=_t("defs",null,[_t("filter",{id:"task-shadow",x:"-20%",y:"-20%",width:"140%",height:"140%"},[_t("feDropShadow",{dx:"2",dy:"2",stdDeviation:"2","flood-color":"rgba(0, 0, 0, 0.1)"})])],-1)),(Bt(!0),Kt(_e,null,ei(W.value,(Q,ut)=>(Bt(),Kt("g",{key:Q.getTime()},[_t("line",{x1:dt(Q),y1:"30",x2:dt(Q),y2:D.value,stroke:"#eee"},null,8,uA),_t("text",{x:dt(Q),y:"20",class:"axis-label"},pe(v(Q)),9,hA)]))),128)),(Bt(!0),Kt(_e,null,ei(t.value,(Q,ut)=>(Bt(),Kt("g",{key:Q.name},[_t("text",{x:"10",y:vt(ut)+20,class:"member-name"},pe(Q.name),9,fA),_t("line",{x1:"0",y1:vt(ut)-5,x2:"100%",y2:vt(ut)-5,stroke:"#ddd","stroke-width":"1"},null,8,dA),(Bt(!0),Kt(_e,null,ei(_(Q.tasks),(nt,ht)=>(Bt(),Kt("g",{key:nt.id},[_t("rect",{x:dt(nt.startDate),y:vt(ut,ht),width:I(nt),height:"30",fill:J(nt.priority),rx:"4",class:"task-bar",filter:"url(#task-shadow)",stroke:"#808080","stroke-width":"1",onMouseenter:we=>A(nt),onMouseleave:S},null,40,pA),_t("text",{x:dt(nt.startDate)+5,y:vt(ut,ht)+20,class:"task-label",fill:z(J(nt.priority),nt.priority)},pe(nt.name)+" (P"+pe(nt.priority)+") ",9,mA)]))),128))]))),128))],8,cA)),i.value?qn("",!0):(Bt(),Kt("div",gA,[un(_t("input",{type:"password","onUpdate:modelValue":j[0]||(j[0]=Q=>s.value=Q),placeholder:"Enter password to add tasks",onKeyup:D_(d,["enter"])},null,544),[[Hn,s.value]]),_t("button",{onClick:d},"Submit"),a.value?(Bt(),Kt("p",_A,pe(a.value),1)):qn("",!0)])),i.value?(Bt(),Kt("div",yA,[j[9]||(j[9]=_t("h3",null,"Add New Task",-1)),j[10]||(j[10]=_t("label",{for:"member"},"Team Member:",-1)),un(_t("select",{"onUpdate:modelValue":j[1]||(j[1]=Q=>m.value.member=Q),id:"member"},[(Bt(!0),Kt(_e,null,ei(t.value,Q=>(Bt(),Kt("option",{key:Q.name,value:Q.name},pe(Q.name),9,vA))),128))],512),[[P_,m.value.member]]),j[11]||(j[11]=_t("label",{for:"taskName"},"Task Name:",-1)),un(_t("input",{"onUpdate:modelValue":j[2]||(j[2]=Q=>m.value.name=Q),id:"taskName",placeholder:"Task Name"},null,512),[[Hn,m.value.name]]),j[12]||(j[12]=_t("label",{for:"startDate"},"Start Date:",-1)),un(_t("input",{"onUpdate:modelValue":j[3]||(j[3]=Q=>m.value.startDate=Q),type:"date",id:"startDate"},null,512),[[Hn,m.value.startDate]]),j[13]||(j[13]=_t("label",{for:"endDate"},"End Date:",-1)),un(_t("input",{"onUpdate:modelValue":j[4]||(j[4]=Q=>m.value.endDate=Q),type:"date",id:"endDate"},null,512),[[Hn,m.value.endDate]]),j[14]||(j[14]=_t("label",{for:"priority"},"Priority (1-10):",-1)),un(_t("input",{"onUpdate:modelValue":j[5]||(j[5]=Q=>m.value.priority=Q),type:"number",min:"1",max:"10",id:"priority"},null,512),[[Hn,m.value.priority]]),j[15]||(j[15]=_t("label",{for:"notes"},"Notes:",-1)),un(_t("textarea",{"onUpdate:modelValue":j[6]||(j[6]=Q=>m.value.notes=Q),id:"notes",placeholder:"Additional notes"},null,512),[[Hn,m.value.notes]]),_t("button",{onClick:T},"Add Task")])):qn("",!0),i.value?(Bt(),Kt("div",TA,[j[16]||(j[16]=_t("h3",null,"Add New Team Member",-1)),un(_t("input",{"onUpdate:modelValue":j[7]||(j[7]=Q=>l.value=Q),placeholder:"Enter member name"},null,512),[[Hn,l.value]]),_t("button",{onClick:f},"Add Member"),u.value?(Bt(),Kt("p",EA,pe(u.value),1)):qn("",!0)])):qn("",!0),k.value?(Bt(),Kt("div",{key:3,class:"tooltip",style:Gi(F.value)},[_t("h3",null,pe(k.value.name),1),_t("p",null,"Priority: "+pe(k.value.priority),1),_t("p",null,"Start: "+pe(v(k.value.startDate)),1),_t("p",null,"End: "+pe(v(k.value.endDate)),1),k.value.notes?(Bt(),Kt("p",wA,"Notes: "+pe(k.value.notes),1)):qn("",!0)],4)):qn("",!0)]))}};k_(AA).mount("#app");
