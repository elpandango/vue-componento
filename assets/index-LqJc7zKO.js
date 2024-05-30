const __vite__fileDeps=["assets/InputsView-CMPqr9pa.js","assets/useDecodeHtml-C0ehvwlq.js","assets/usePrismInitialization-CsiD3u4h.js","assets/usePrismInitialization-BN2d0cMN.css","assets/InputsView-DoREVgrf.css","assets/AccordionsView-xNRPf7-_.js","assets/ColorPaletteView-PMUtwOzx.js","assets/ColorPaletteView-DDTPiXK8.css","assets/SkeletonsView-KafI9Bdc.js","assets/SkeletonsView-167WOT-g.css"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();/**
* @vue/shared v3.4.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Uc(t,e){const n=new Set(t.split(","));return r=>n.has(r)}const we={},_r=[],yt=()=>{},o_=()=>!1,Eo=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),Bc=t=>t.startsWith("onUpdate:"),Me=Object.assign,$c=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},a_=Object.prototype.hasOwnProperty,se=(t,e)=>a_.call(t,e),G=Array.isArray,yr=t=>Io(t)==="[object Map]",qd=t=>Io(t)==="[object Set]",Y=t=>typeof t=="function",Le=t=>typeof t=="string",tr=t=>typeof t=="symbol",Re=t=>t!==null&&typeof t=="object",Hd=t=>(Re(t)||Y(t))&&Y(t.then)&&Y(t.catch),zd=Object.prototype.toString,Io=t=>zd.call(t),c_=t=>Io(t).slice(8,-1),Kd=t=>Io(t)==="[object Object]",jc=t=>Le(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,gs=Uc(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),wo=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},l_=/-(\w)/g,Ut=wo(t=>t.replace(l_,(e,n)=>n?n.toUpperCase():"")),u_=/\B([A-Z])/g,Gr=wo(t=>t.replace(u_,"-$1").toLowerCase()),To=wo(t=>t.charAt(0).toUpperCase()+t.slice(1)),ha=wo(t=>t?`on${To(t)}`:""),Rn=(t,e)=>!Object.is(t,e),da=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},Gd=(t,e,n,r=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:r,value:n})},h_=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Iu;const Wd=()=>Iu||(Iu=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Nr(t){if(G(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=Le(r)?g_(r):Nr(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(Le(t)||Re(t))return t}const d_=/;(?![^(]*\))/g,f_=/:([^]+)/,p_=/\/\*[^]*?\*\//g;function g_(t){const e={};return t.replace(p_,"").split(d_).forEach(n=>{if(n){const r=n.split(f_);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function Cs(t){let e="";if(Le(t))e=t;else if(G(t))for(let n=0;n<t.length;n++){const r=Cs(t[n]);r&&(e+=r+" ")}else if(Re(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const m_="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",__=Uc(m_);function Qd(t){return!!t||t===""}const wC=t=>Le(t)?t:t==null?"":G(t)||Re(t)&&(t.toString===zd||!Y(t.toString))?JSON.stringify(t,Jd,2):String(t),Jd=(t,e)=>e&&e.__v_isRef?Jd(t,e.value):yr(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s],i)=>(n[fa(r,i)+" =>"]=s,n),{})}:qd(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>fa(n))}:tr(e)?fa(e):Re(e)&&!G(e)&&!Kd(e)?String(e):e,fa=(t,e="")=>{var n;return tr(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.4.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let ht;class Yd{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=ht,!e&&ht&&(this.index=(ht.scopes||(ht.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=ht;try{return ht=this,e()}finally{ht=n}}}on(){ht=this}off(){ht=this.parent}stop(e){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function Xd(t){return new Yd(t)}function y_(t,e=ht){e&&e.active&&e.effects.push(t)}function Zd(){return ht}function v_(t){ht&&ht.cleanups.push(t)}let qn;class qc{constructor(e,n,r,s){this.fn=e,this.trigger=n,this.scheduler=r,this.active=!0,this.deps=[],this._dirtyLevel=4,this._trackId=0,this._runnings=0,this._shouldSchedule=!1,this._depsLength=0,y_(this,s)}get dirty(){if(this._dirtyLevel===2||this._dirtyLevel===3){this._dirtyLevel=1,kn();for(let e=0;e<this._depsLength;e++){const n=this.deps[e];if(n.computed&&(E_(n.computed),this._dirtyLevel>=4))break}this._dirtyLevel===1&&(this._dirtyLevel=0),On()}return this._dirtyLevel>=4}set dirty(e){this._dirtyLevel=e?4:0}run(){if(this._dirtyLevel=0,!this.active)return this.fn();let e=En,n=qn;try{return En=!0,qn=this,this._runnings++,wu(this),this.fn()}finally{Tu(this),this._runnings--,qn=n,En=e}}stop(){this.active&&(wu(this),Tu(this),this.onStop&&this.onStop(),this.active=!1)}}function E_(t){return t.value}function wu(t){t._trackId++,t._depsLength=0}function Tu(t){if(t.deps.length>t._depsLength){for(let e=t._depsLength;e<t.deps.length;e++)ef(t.deps[e],t);t.deps.length=t._depsLength}}function ef(t,e){const n=t.get(e);n!==void 0&&e._trackId!==n&&(t.delete(e),t.size===0&&t.cleanup())}let En=!0,ja=0;const tf=[];function kn(){tf.push(En),En=!1}function On(){const t=tf.pop();En=t===void 0?!0:t}function Hc(){ja++}function zc(){for(ja--;!ja&&qa.length;)qa.shift()()}function nf(t,e,n){if(e.get(t)!==t._trackId){e.set(t,t._trackId);const r=t.deps[t._depsLength];r!==e?(r&&ef(r,t),t.deps[t._depsLength++]=e):t._depsLength++}}const qa=[];function rf(t,e,n){Hc();for(const r of t.keys()){let s;r._dirtyLevel<e&&(s??(s=t.get(r)===r._trackId))&&(r._shouldSchedule||(r._shouldSchedule=r._dirtyLevel===0),r._dirtyLevel=e),r._shouldSchedule&&(s??(s=t.get(r)===r._trackId))&&(r.trigger(),(!r._runnings||r.allowRecurse)&&r._dirtyLevel!==2&&(r._shouldSchedule=!1,r.scheduler&&qa.push(r.scheduler)))}zc()}const sf=(t,e)=>{const n=new Map;return n.cleanup=t,n.computed=e,n},Qi=new WeakMap,Hn=Symbol(""),Ha=Symbol("");function at(t,e,n){if(En&&qn){let r=Qi.get(t);r||Qi.set(t,r=new Map);let s=r.get(n);s||r.set(n,s=sf(()=>r.delete(n))),nf(qn,s)}}function Jt(t,e,n,r,s,i){const o=Qi.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&G(t)){const c=Number(r);o.forEach((l,u)=>{(u==="length"||!tr(u)&&u>=c)&&a.push(l)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":G(t)?jc(n)&&a.push(o.get("length")):(a.push(o.get(Hn)),yr(t)&&a.push(o.get(Ha)));break;case"delete":G(t)||(a.push(o.get(Hn)),yr(t)&&a.push(o.get(Ha)));break;case"set":yr(t)&&a.push(o.get(Hn));break}Hc();for(const c of a)c&&rf(c,4);zc()}function I_(t,e){const n=Qi.get(t);return n&&n.get(e)}const w_=Uc("__proto__,__v_isRef,__isVue"),of=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(tr)),Au=T_();function T_(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const r=ce(this);for(let i=0,o=this.length;i<o;i++)at(r,"get",i+"");const s=r[e](...n);return s===-1||s===!1?r[e](...n.map(ce)):s}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){kn(),Hc();const r=ce(this)[e].apply(this,n);return zc(),On(),r}}),t}function A_(t){tr(t)||(t=String(t));const e=ce(this);return at(e,"has",t),e.hasOwnProperty(t)}class af{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,r){const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?L_:hf:i?uf:lf).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const o=G(e);if(!s){if(o&&se(Au,n))return Reflect.get(Au,n,r);if(n==="hasOwnProperty")return A_}const a=Reflect.get(e,n,r);return(tr(n)?of.has(n):w_(n))||(s||at(e,"get",n),i)?a:Ne(a)?o&&jc(n)?a:a.value:Re(a)?s?ff(a):Zs(a):a}}class cf extends af{constructor(e=!1){super(!1,e)}set(e,n,r,s){let i=e[n];if(!this._isShallow){const c=bs(i);if(!Ji(r)&&!bs(r)&&(i=ce(i),r=ce(r)),!G(e)&&Ne(i)&&!Ne(r))return c?!1:(i.value=r,!0)}const o=G(e)&&jc(n)?Number(n)<e.length:se(e,n),a=Reflect.set(e,n,r,s);return e===ce(s)&&(o?Rn(r,i)&&Jt(e,"set",n,r):Jt(e,"add",n,r)),a}deleteProperty(e,n){const r=se(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&r&&Jt(e,"delete",n,void 0),s}has(e,n){const r=Reflect.has(e,n);return(!tr(n)||!of.has(n))&&at(e,"has",n),r}ownKeys(e){return at(e,"iterate",G(e)?"length":Hn),Reflect.ownKeys(e)}}class R_ extends af{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const S_=new cf,P_=new R_,C_=new cf(!0);const Kc=t=>t,Ao=t=>Reflect.getPrototypeOf(t);function Ii(t,e,n=!1,r=!1){t=t.__v_raw;const s=ce(t),i=ce(e);n||(Rn(e,i)&&at(s,"get",e),at(s,"get",i));const{has:o}=Ao(s),a=r?Kc:n?Jc:ks;if(o.call(s,e))return a(t.get(e));if(o.call(s,i))return a(t.get(i));t!==s&&t.get(e)}function wi(t,e=!1){const n=this.__v_raw,r=ce(n),s=ce(t);return e||(Rn(t,s)&&at(r,"has",t),at(r,"has",s)),t===s?n.has(t):n.has(t)||n.has(s)}function Ti(t,e=!1){return t=t.__v_raw,!e&&at(ce(t),"iterate",Hn),Reflect.get(t,"size",t)}function Ru(t){t=ce(t);const e=ce(this);return Ao(e).has.call(e,t)||(e.add(t),Jt(e,"add",t,t)),this}function Su(t,e){e=ce(e);const n=ce(this),{has:r,get:s}=Ao(n);let i=r.call(n,t);i||(t=ce(t),i=r.call(n,t));const o=s.call(n,t);return n.set(t,e),i?Rn(e,o)&&Jt(n,"set",t,e):Jt(n,"add",t,e),this}function Pu(t){const e=ce(this),{has:n,get:r}=Ao(e);let s=n.call(e,t);s||(t=ce(t),s=n.call(e,t)),r&&r.call(e,t);const i=e.delete(t);return s&&Jt(e,"delete",t,void 0),i}function Cu(){const t=ce(this),e=t.size!==0,n=t.clear();return e&&Jt(t,"clear",void 0,void 0),n}function Ai(t,e){return function(r,s){const i=this,o=i.__v_raw,a=ce(o),c=e?Kc:t?Jc:ks;return!t&&at(a,"iterate",Hn),o.forEach((l,u)=>r.call(s,c(l),c(u),i))}}function Ri(t,e,n){return function(...r){const s=this.__v_raw,i=ce(s),o=yr(i),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,l=s[t](...r),u=n?Kc:e?Jc:ks;return!e&&at(i,"iterate",c?Ha:Hn),{next(){const{value:h,done:d}=l.next();return d?{value:h,done:d}:{value:a?[u(h[0]),u(h[1])]:u(h),done:d}},[Symbol.iterator](){return this}}}}function sn(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function b_(){const t={get(i){return Ii(this,i)},get size(){return Ti(this)},has:wi,add:Ru,set:Su,delete:Pu,clear:Cu,forEach:Ai(!1,!1)},e={get(i){return Ii(this,i,!1,!0)},get size(){return Ti(this)},has:wi,add:Ru,set:Su,delete:Pu,clear:Cu,forEach:Ai(!1,!0)},n={get(i){return Ii(this,i,!0)},get size(){return Ti(this,!0)},has(i){return wi.call(this,i,!0)},add:sn("add"),set:sn("set"),delete:sn("delete"),clear:sn("clear"),forEach:Ai(!0,!1)},r={get(i){return Ii(this,i,!0,!0)},get size(){return Ti(this,!0)},has(i){return wi.call(this,i,!0)},add:sn("add"),set:sn("set"),delete:sn("delete"),clear:sn("clear"),forEach:Ai(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=Ri(i,!1,!1),n[i]=Ri(i,!0,!1),e[i]=Ri(i,!1,!0),r[i]=Ri(i,!0,!0)}),[t,n,e,r]}const[k_,O_,N_,D_]=b_();function Gc(t,e){const n=e?t?D_:N_:t?O_:k_;return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(se(n,s)&&s in r?n:r,s,i)}const V_={get:Gc(!1,!1)},x_={get:Gc(!1,!0)},M_={get:Gc(!0,!1)};const lf=new WeakMap,uf=new WeakMap,hf=new WeakMap,L_=new WeakMap;function F_(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function U_(t){return t.__v_skip||!Object.isExtensible(t)?0:F_(c_(t))}function Zs(t){return bs(t)?t:Wc(t,!1,S_,V_,lf)}function df(t){return Wc(t,!1,C_,x_,uf)}function ff(t){return Wc(t,!0,P_,M_,hf)}function Wc(t,e,n,r,s){if(!Re(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=s.get(t);if(i)return i;const o=U_(t);if(o===0)return t;const a=new Proxy(t,o===2?r:n);return s.set(t,a),a}function zn(t){return bs(t)?zn(t.__v_raw):!!(t&&t.__v_isReactive)}function bs(t){return!!(t&&t.__v_isReadonly)}function Ji(t){return!!(t&&t.__v_isShallow)}function pf(t){return t?!!t.__v_raw:!1}function ce(t){const e=t&&t.__v_raw;return e?ce(e):t}function Qc(t){return Object.isExtensible(t)&&Gd(t,"__v_skip",!0),t}const ks=t=>Re(t)?Zs(t):t,Jc=t=>Re(t)?ff(t):t;class gf{constructor(e,n,r,s){this.getter=e,this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this.effect=new qc(()=>e(this._value),()=>Mi(this,this.effect._dirtyLevel===2?2:3)),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=r}get value(){const e=ce(this);return(!e._cacheable||e.effect.dirty)&&Rn(e._value,e._value=e.effect.run())&&Mi(e,4),mf(e),e.effect._dirtyLevel>=2&&Mi(e,2),e._value}set value(e){this._setter(e)}get _dirty(){return this.effect.dirty}set _dirty(e){this.effect.dirty=e}}function B_(t,e,n=!1){let r,s;const i=Y(t);return i?(r=t,s=yt):(r=t.get,s=t.set),new gf(r,s,i||!s,n)}function mf(t){var e;En&&qn&&(t=ce(t),nf(qn,(e=t.dep)!=null?e:t.dep=sf(()=>t.dep=void 0,t instanceof gf?t:void 0)))}function Mi(t,e=4,n){t=ce(t);const r=t.dep;r&&rf(r,e)}function Ne(t){return!!(t&&t.__v_isRef===!0)}function Dr(t){return _f(t,!1)}function $_(t){return _f(t,!0)}function _f(t,e){return Ne(t)?t:new j_(t,e)}class j_{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:ce(e),this._value=n?e:ks(e)}get value(){return mf(this),this._value}set value(e){const n=this.__v_isShallow||Ji(e)||bs(e);e=n?e:ce(e),Rn(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:ks(e),Mi(this,4))}}function vr(t){return Ne(t)?t.value:t}const q_={get:(t,e,n)=>vr(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return Ne(s)&&!Ne(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function yf(t){return zn(t)?t:new Proxy(t,q_)}function H_(t){const e=G(t)?new Array(t.length):{};for(const n in t)e[n]=K_(t,n);return e}class z_{constructor(e,n,r){this._object=e,this._key=n,this._defaultValue=r,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return I_(ce(this._object),this._key)}}function K_(t,e,n){const r=t[e];return Ne(r)?r:new z_(t,e,n)}/**
* @vue/runtime-core v3.4.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function In(t,e,n,r){try{return r?t(...r):t()}catch(s){Ro(s,e,n)}}function It(t,e,n,r){if(Y(t)){const s=In(t,e,n,r);return s&&Hd(s)&&s.catch(i=>{Ro(i,e,n)}),s}if(G(t)){const s=[];for(let i=0;i<t.length;i++)s.push(It(t[i],e,n,r));return s}}function Ro(t,e,n,r=!0){const s=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,a=`https://vuejs.org/error-reference/#runtime-${n}`;for(;i;){const l=i.ec;if(l){for(let u=0;u<l.length;u++)if(l[u](t,o,a)===!1)return}i=i.parent}const c=e.appContext.config.errorHandler;if(c){kn(),In(c,null,10,[t,o,a]),On();return}}G_(t,n,s,r)}function G_(t,e,n,r=!0){console.error(t)}let Os=!1,za=!1;const Ye=[];let kt=0;const Er=[];let ln=null,Fn=0;const vf=Promise.resolve();let Yc=null;function Xc(t){const e=Yc||vf;return t?e.then(this?t.bind(this):t):e}function W_(t){let e=kt+1,n=Ye.length;for(;e<n;){const r=e+n>>>1,s=Ye[r],i=Ns(s);i<t||i===t&&s.pre?e=r+1:n=r}return e}function Zc(t){(!Ye.length||!Ye.includes(t,Os&&t.allowRecurse?kt+1:kt))&&(t.id==null?Ye.push(t):Ye.splice(W_(t.id),0,t),Ef())}function Ef(){!Os&&!za&&(za=!0,Yc=vf.then(wf))}function Q_(t){const e=Ye.indexOf(t);e>kt&&Ye.splice(e,1)}function J_(t){G(t)?Er.push(...t):(!ln||!ln.includes(t,t.allowRecurse?Fn+1:Fn))&&Er.push(t),Ef()}function bu(t,e,n=Os?kt+1:0){for(;n<Ye.length;n++){const r=Ye[n];if(r&&r.pre){if(t&&r.id!==t.uid)continue;Ye.splice(n,1),n--,r()}}}function If(t){if(Er.length){const e=[...new Set(Er)].sort((n,r)=>Ns(n)-Ns(r));if(Er.length=0,ln){ln.push(...e);return}for(ln=e,Fn=0;Fn<ln.length;Fn++)ln[Fn]();ln=null,Fn=0}}const Ns=t=>t.id==null?1/0:t.id,Y_=(t,e)=>{const n=Ns(t)-Ns(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function wf(t){za=!1,Os=!0,Ye.sort(Y_);try{for(kt=0;kt<Ye.length;kt++){const e=Ye[kt];e&&e.active!==!1&&In(e,null,14)}}finally{kt=0,Ye.length=0,If(),Os=!1,Yc=null,(Ye.length||Er.length)&&wf()}}function X_(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||we;let s=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in r){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:d}=r[u]||we;d&&(s=n.map(g=>Le(g)?g.trim():g)),h&&(s=n.map(h_))}let a,c=r[a=ha(e)]||r[a=ha(Ut(e))];!c&&i&&(c=r[a=ha(Gr(e))]),c&&It(c,t,6,s);const l=r[a+"Once"];if(l){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,It(l,t,6,s)}}function Tf(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},a=!1;if(!Y(t)){const c=l=>{const u=Tf(l,e,!0);u&&(a=!0,Me(o,u))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!a?(Re(t)&&r.set(t,null),null):(G(i)?i.forEach(c=>o[c]=null):Me(o,i),Re(t)&&r.set(t,o),o)}function So(t,e){return!t||!Eo(e)?!1:(e=e.slice(2).replace(/Once$/,""),se(t,e[0].toLowerCase()+e.slice(1))||se(t,Gr(e))||se(t,e))}let Ze=null,Po=null;function Yi(t){const e=Ze;return Ze=t,Po=t&&t.type.__scopeId||null,e}function Z_(t){Po=t}function ey(){Po=null}function zt(t,e=Ze,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&Bu(-1);const i=Yi(e);let o;try{o=t(...s)}finally{Yi(i),r._d&&Bu(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function pa(t){const{type:e,vnode:n,proxy:r,withProxy:s,propsOptions:[i],slots:o,attrs:a,emit:c,render:l,renderCache:u,props:h,data:d,setupState:g,ctx:E,inheritAttrs:T}=t,P=Yi(t);let b,D;try{if(n.shapeFlag&4){const z=s||r,Z=z;b=bt(l.call(Z,z,u,h,g,d,E)),D=a}else{const z=e;b=bt(z.length>1?z(h,{attrs:a,slots:o,emit:c}):z(h,null)),D=e.props?a:ty(a)}}catch(z){ys.length=0,Ro(z,t,1),b=ve(Sn)}let F=b;if(D&&T!==!1){const z=Object.keys(D),{shapeFlag:Z}=F;z.length&&Z&7&&(i&&z.some(Bc)&&(D=ny(D,i)),F=Vr(F,D,!1,!0))}return n.dirs&&(F=Vr(F,null,!1,!0),F.dirs=F.dirs?F.dirs.concat(n.dirs):n.dirs),n.transition&&(F.transition=n.transition),b=F,Yi(P),b}const ty=t=>{let e;for(const n in t)(n==="class"||n==="style"||Eo(n))&&((e||(e={}))[n]=t[n]);return e},ny=(t,e)=>{const n={};for(const r in t)(!Bc(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function ry(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:a,patchFlag:c}=e,l=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?ku(r,o,l):!!o;if(c&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const d=u[h];if(o[d]!==r[d]&&!So(l,d))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?ku(r,o,l):!0:!!o;return!1}function ku(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!So(n,i))return!0}return!1}function sy({vnode:t,parent:e},n){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.el=t.el),r===t)(t=e.vnode).el=n,e=e.parent;else break}}const Af="components";function Ds(t,e){return oy(Af,t,!0,e)||t}const iy=Symbol.for("v-ndc");function oy(t,e,n=!0,r=!1){const s=Ze||je;if(s){const i=s.type;if(t===Af){const a=ev(i,!1);if(a&&(a===e||a===Ut(e)||a===To(Ut(e))))return i}const o=Ou(s[t]||i[t],e)||Ou(s.appContext[t],e);return!o&&r?i:o}}function Ou(t,e){return t&&(t[e]||t[Ut(e)]||t[To(Ut(e))])}const ay=t=>t.__isSuspense;function cy(t,e){e&&e.pendingBranch?G(t)?e.effects.push(...t):e.effects.push(t):J_(t)}const ly=Symbol.for("v-scx"),uy=()=>xt(ly),Si={};function Ir(t,e,n){return Rf(t,e,n)}function Rf(t,e,{immediate:n,deep:r,flush:s,once:i,onTrack:o,onTrigger:a}=we){if(e&&i){const $=e;e=(...de)=>{$(...de),Z()}}const c=je,l=$=>r===!0?$:pr($,r===!1?1:void 0);let u,h=!1,d=!1;if(Ne(t)?(u=()=>t.value,h=Ji(t)):zn(t)?(u=()=>l(t),h=!0):G(t)?(d=!0,h=t.some($=>zn($)||Ji($)),u=()=>t.map($=>{if(Ne($))return $.value;if(zn($))return l($);if(Y($))return In($,c,2)})):Y(t)?e?u=()=>In(t,c,2):u=()=>(g&&g(),It(t,c,3,[E])):u=yt,e&&r){const $=u;u=()=>pr($())}let g,E=$=>{g=F.onStop=()=>{In($,c,4),g=F.onStop=void 0}},T;if(No)if(E=yt,e?n&&It(e,c,3,[u(),d?[]:void 0,E]):u(),s==="sync"){const $=uy();T=$.__watcherHandles||($.__watcherHandles=[])}else return yt;let P=d?new Array(t.length).fill(Si):Si;const b=()=>{if(!(!F.active||!F.dirty))if(e){const $=F.run();(r||h||(d?$.some((de,ee)=>Rn(de,P[ee])):Rn($,P)))&&(g&&g(),It(e,c,3,[$,P===Si?void 0:d&&P[0]===Si?[]:P,E]),P=$)}else F.run()};b.allowRecurse=!!e;let D;s==="sync"?D=b:s==="post"?D=()=>ot(b,c&&c.suspense):(b.pre=!0,c&&(b.id=c.uid),D=()=>Zc(b));const F=new qc(u,yt,D),z=Zd(),Z=()=>{F.stop(),z&&$c(z.effects,F)};return e?n?b():P=F.run():s==="post"?ot(F.run.bind(F),c&&c.suspense):F.run(),T&&T.push(Z),Z}function hy(t,e,n){const r=this.proxy,s=Le(t)?t.includes(".")?Sf(r,t):()=>r[t]:t.bind(r,r);let i;Y(e)?i=e:(i=e.handler,n=e);const o=ei(this),a=Rf(s,i.bind(r),n);return o(),a}function Sf(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}function pr(t,e=1/0,n){if(e<=0||!Re(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,Ne(t))pr(t.value,e,n);else if(G(t))for(let r=0;r<t.length;r++)pr(t[r],e,n);else if(qd(t)||yr(t))t.forEach(r=>{pr(r,e,n)});else if(Kd(t))for(const r in t)pr(t[r],e,n);return t}function xn(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];i&&(a.oldValue=i[o].value);let c=a.dir[r];c&&(kn(),It(c,n,8,[t.el,a,t,e]),On())}}/*! #__NO_SIDE_EFFECTS__ */function Co(t,e){return Y(t)?Me({name:t.name},e,{setup:t}):t}const ms=t=>!!t.type.__asyncLoader,Pf=t=>t.type.__isKeepAlive;function dy(t,e){Cf(t,"a",e)}function fy(t,e){Cf(t,"da",e)}function Cf(t,e,n=je){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(bo(e,r,n),n){let s=n.parent;for(;s&&s.parent;)Pf(s.parent.vnode)&&py(r,e,n,s),s=s.parent}}function py(t,e,n,r){const s=bo(e,t,r,!0);bf(()=>{$c(r[e],s)},n)}function bo(t,e,n=je,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;kn();const a=ei(n),c=It(e,n,t,o);return a(),On(),c});return r?s.unshift(i):s.push(i),i}}const tn=t=>(e,n=je)=>(!No||t==="sp")&&bo(t,(...r)=>e(...r),n),gy=tn("bm"),el=tn("m"),my=tn("bu"),_y=tn("u"),yy=tn("bum"),bf=tn("um"),vy=tn("sp"),Ey=tn("rtg"),Iy=tn("rtc");function wy(t,e=je){bo("ec",t,e)}function Vs(t,e,n={},r,s){if(Ze.isCE||Ze.parent&&ms(Ze.parent)&&Ze.parent.isCE)return e!=="default"&&(n.name=e),ve("slot",n,r&&r());let i=t[e];i&&i._c&&(i._d=!1),ct();const o=i&&kf(i(n)),a=Oo(mt,{key:n.key||o&&o.key||`_${e}`},o||(r?r():[]),o&&t._===1?64:-2);return a.scopeId&&(a.slotScopeIds=[a.scopeId+"-s"]),i&&i._c&&(i._d=!0),a}function kf(t){return t.some(e=>Zi(e)?!(e.type===Sn||e.type===mt&&!kf(e.children)):!0)?t:null}const Ka=t=>t?Kf(t)?sl(t)||t.proxy:Ka(t.parent):null,_s=Me(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Ka(t.parent),$root:t=>Ka(t.root),$emit:t=>t.emit,$options:t=>tl(t),$forceUpdate:t=>t.f||(t.f=()=>{t.effect.dirty=!0,Zc(t.update)}),$nextTick:t=>t.n||(t.n=Xc.bind(t.proxy)),$watch:t=>hy.bind(t)}),ga=(t,e)=>t!==we&&!t.__isScriptSetup&&se(t,e),Ty={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:a,appContext:c}=t;let l;if(e[0]!=="$"){const g=o[e];if(g!==void 0)switch(g){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(ga(r,e))return o[e]=1,r[e];if(s!==we&&se(s,e))return o[e]=2,s[e];if((l=t.propsOptions[0])&&se(l,e))return o[e]=3,i[e];if(n!==we&&se(n,e))return o[e]=4,n[e];Ga&&(o[e]=0)}}const u=_s[e];let h,d;if(u)return e==="$attrs"&&at(t.attrs,"get",""),u(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==we&&se(n,e))return o[e]=4,n[e];if(d=c.config.globalProperties,se(d,e))return d[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return ga(s,e)?(s[e]=n,!0):r!==we&&se(r,e)?(r[e]=n,!0):se(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let a;return!!n[o]||t!==we&&se(t,o)||ga(e,o)||(a=i[0])&&se(a,o)||se(r,o)||se(_s,o)||se(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:se(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Nu(t){return G(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Ga=!0;function Ay(t){const e=tl(t),n=t.proxy,r=t.ctx;Ga=!1,e.beforeCreate&&Du(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:a,provide:c,inject:l,created:u,beforeMount:h,mounted:d,beforeUpdate:g,updated:E,activated:T,deactivated:P,beforeDestroy:b,beforeUnmount:D,destroyed:F,unmounted:z,render:Z,renderTracked:$,renderTriggered:de,errorCaptured:ee,serverPrefetch:X,expose:ye,inheritAttrs:Ke,components:lt,directives:pt,filters:Vn}=e;if(l&&Ry(l,r,null),o)for(const me in o){const ue=o[me];Y(ue)&&(r[me]=ue.bind(n))}if(s){const me=s.call(n,n);Re(me)&&(t.data=Zs(me))}if(Ga=!0,i)for(const me in i){const ue=i[me],qt=Y(ue)?ue.bind(n,n):Y(ue.get)?ue.get.bind(n,n):yt,rn=!Y(ue)&&Y(ue.set)?ue.set.bind(n):yt,St=dt({get:qt,set:rn});Object.defineProperty(r,me,{enumerable:!0,configurable:!0,get:()=>St.value,set:it=>St.value=it})}if(a)for(const me in a)Of(a[me],r,n,me);if(c){const me=Y(c)?c.call(n):c;Reflect.ownKeys(me).forEach(ue=>{Li(ue,me[ue])})}u&&Du(u,t,"c");function le(me,ue){G(ue)?ue.forEach(qt=>me(qt.bind(n))):ue&&me(ue.bind(n))}if(le(gy,h),le(el,d),le(my,g),le(_y,E),le(dy,T),le(fy,P),le(wy,ee),le(Iy,$),le(Ey,de),le(yy,D),le(bf,z),le(vy,X),G(ye))if(ye.length){const me=t.exposed||(t.exposed={});ye.forEach(ue=>{Object.defineProperty(me,ue,{get:()=>n[ue],set:qt=>n[ue]=qt})})}else t.exposed||(t.exposed={});Z&&t.render===yt&&(t.render=Z),Ke!=null&&(t.inheritAttrs=Ke),lt&&(t.components=lt),pt&&(t.directives=pt)}function Ry(t,e,n=yt){G(t)&&(t=Wa(t));for(const r in t){const s=t[r];let i;Re(s)?"default"in s?i=xt(s.from||r,s.default,!0):i=xt(s.from||r):i=xt(s),Ne(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function Du(t,e,n){It(G(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function Of(t,e,n,r){const s=r.includes(".")?Sf(n,r):()=>n[r];if(Le(t)){const i=e[t];Y(i)&&Ir(s,i)}else if(Y(t))Ir(s,t.bind(n));else if(Re(t))if(G(t))t.forEach(i=>Of(i,e,n,r));else{const i=Y(t.handler)?t.handler.bind(n):e[t.handler];Y(i)&&Ir(s,i,t)}}function tl(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let c;return a?c=a:!s.length&&!n&&!r?c=e:(c={},s.length&&s.forEach(l=>Xi(c,l,o,!0)),Xi(c,e,o)),Re(e)&&i.set(e,c),c}function Xi(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&Xi(t,i,n,!0),s&&s.forEach(o=>Xi(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const a=Sy[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const Sy={data:Vu,props:xu,emits:xu,methods:ls,computed:ls,beforeCreate:rt,created:rt,beforeMount:rt,mounted:rt,beforeUpdate:rt,updated:rt,beforeDestroy:rt,beforeUnmount:rt,destroyed:rt,unmounted:rt,activated:rt,deactivated:rt,errorCaptured:rt,serverPrefetch:rt,components:ls,directives:ls,watch:Cy,provide:Vu,inject:Py};function Vu(t,e){return e?t?function(){return Me(Y(t)?t.call(this,this):t,Y(e)?e.call(this,this):e)}:e:t}function Py(t,e){return ls(Wa(t),Wa(e))}function Wa(t){if(G(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function rt(t,e){return t?[...new Set([].concat(t,e))]:e}function ls(t,e){return t?Me(Object.create(null),t,e):e}function xu(t,e){return t?G(t)&&G(e)?[...new Set([...t,...e])]:Me(Object.create(null),Nu(t),Nu(e??{})):e}function Cy(t,e){if(!t)return e;if(!e)return t;const n=Me(Object.create(null),t);for(const r in e)n[r]=rt(t[r],e[r]);return n}function Nf(){return{app:null,config:{isNativeTag:o_,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let by=0;function ky(t,e){return function(r,s=null){Y(r)||(r=Me({},r)),s!=null&&!Re(s)&&(s=null);const i=Nf(),o=new WeakSet;let a=!1;const c=i.app={_uid:by++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:nv,get config(){return i.config},set config(l){},use(l,...u){return o.has(l)||(l&&Y(l.install)?(o.add(l),l.install(c,...u)):Y(l)&&(o.add(l),l(c,...u))),c},mixin(l){return i.mixins.includes(l)||i.mixins.push(l),c},component(l,u){return u?(i.components[l]=u,c):i.components[l]},directive(l,u){return u?(i.directives[l]=u,c):i.directives[l]},mount(l,u,h){if(!a){const d=ve(r,s);return d.appContext=i,h===!0?h="svg":h===!1&&(h=void 0),u&&e?e(d,l):t(d,l,h),a=!0,c._container=l,l.__vue_app__=c,sl(d.component)||d.component.proxy}},unmount(){a&&(t(null,c._container),delete c._container.__vue_app__)},provide(l,u){return i.provides[l]=u,c},runWithContext(l){const u=wr;wr=c;try{return l()}finally{wr=u}}};return c}}let wr=null;function Li(t,e){if(je){let n=je.provides;const r=je.parent&&je.parent.provides;r===n&&(n=je.provides=Object.create(r)),n[t]=e}}function xt(t,e,n=!1){const r=je||Ze;if(r||wr){const s=r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:wr._context.provides;if(s&&t in s)return s[t];if(arguments.length>1)return n&&Y(e)?e.call(r&&r.proxy):e}}function Oy(){return!!(je||Ze||wr)}const Df={},Vf=()=>Object.create(Df),xf=t=>Object.getPrototypeOf(t)===Df;function Ny(t,e,n,r=!1){const s={},i=Vf();t.propsDefaults=Object.create(null),Mf(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:df(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function Dy(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,a=ce(s),[c]=t.propsOptions;let l=!1;if((r||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let d=u[h];if(So(t.emitsOptions,d))continue;const g=e[d];if(c)if(se(i,d))g!==i[d]&&(i[d]=g,l=!0);else{const E=Ut(d);s[E]=Qa(c,a,E,g,t,!1)}else g!==i[d]&&(i[d]=g,l=!0)}}}else{Mf(t,e,s,i)&&(l=!0);let u;for(const h in a)(!e||!se(e,h)&&((u=Gr(h))===h||!se(e,u)))&&(c?n&&(n[h]!==void 0||n[u]!==void 0)&&(s[h]=Qa(c,a,h,void 0,t,!0)):delete s[h]);if(i!==a)for(const h in i)(!e||!se(e,h))&&(delete i[h],l=!0)}l&&Jt(t.attrs,"set","")}function Mf(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(gs(c))continue;const l=e[c];let u;s&&se(s,u=Ut(c))?!i||!i.includes(u)?n[u]=l:(a||(a={}))[u]=l:So(t.emitsOptions,c)||(!(c in r)||l!==r[c])&&(r[c]=l,o=!0)}if(i){const c=ce(n),l=a||we;for(let u=0;u<i.length;u++){const h=i[u];n[h]=Qa(s,c,h,l[h],t,!se(l,h))}}return o}function Qa(t,e,n,r,s,i){const o=t[n];if(o!=null){const a=se(o,"default");if(a&&r===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&Y(c)){const{propsDefaults:l}=s;if(n in l)r=l[n];else{const u=ei(s);r=l[n]=c.call(null,e),u()}}else r=c}o[0]&&(i&&!a?r=!1:o[1]&&(r===""||r===Gr(n))&&(r=!0))}return r}function Lf(t,e,n=!1){const r=e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},a=[];let c=!1;if(!Y(t)){const u=h=>{c=!0;const[d,g]=Lf(h,e,!0);Me(o,d),g&&a.push(...g)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!i&&!c)return Re(t)&&r.set(t,_r),_r;if(G(i))for(let u=0;u<i.length;u++){const h=Ut(i[u]);Mu(h)&&(o[h]=we)}else if(i)for(const u in i){const h=Ut(u);if(Mu(h)){const d=i[u],g=o[h]=G(d)||Y(d)?{type:d}:Me({},d);if(g){const E=Uu(Boolean,g.type),T=Uu(String,g.type);g[0]=E>-1,g[1]=T<0||E<T,(E>-1||se(g,"default"))&&a.push(h)}}}const l=[o,a];return Re(t)&&r.set(t,l),l}function Mu(t){return t[0]!=="$"&&!gs(t)}function Lu(t){return t===null?"null":typeof t=="function"?t.name||"":typeof t=="object"&&t.constructor&&t.constructor.name||""}function Fu(t,e){return Lu(t)===Lu(e)}function Uu(t,e){return G(e)?e.findIndex(n=>Fu(n,t)):Y(e)&&Fu(e,t)?0:-1}const Ff=t=>t[0]==="_"||t==="$stable",nl=t=>G(t)?t.map(bt):[bt(t)],Vy=(t,e,n)=>{if(e._n)return e;const r=zt((...s)=>nl(e(...s)),n);return r._c=!1,r},Uf=(t,e,n)=>{const r=t._ctx;for(const s in t){if(Ff(s))continue;const i=t[s];if(Y(i))e[s]=Vy(s,i,r);else if(i!=null){const o=nl(i);e[s]=()=>o}}},Bf=(t,e)=>{const n=nl(e);t.slots.default=()=>n},xy=(t,e)=>{const n=t.slots=Vf();if(t.vnode.shapeFlag&32){const r=e._;r?(Me(n,e),Gd(n,"_",r,!0)):Uf(e,n)}else e&&Bf(t,e)},My=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=we;if(r.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:(Me(s,e),!n&&a===1&&delete s._):(i=!e.$stable,Uf(e,s)),o=e}else e&&(Bf(t,e),o={default:1});if(i)for(const a in s)!Ff(a)&&o[a]==null&&delete s[a]};function Ja(t,e,n,r,s=!1){if(G(t)){t.forEach((d,g)=>Ja(d,e&&(G(e)?e[g]:e),n,r,s));return}if(ms(r)&&!s)return;const i=r.shapeFlag&4?sl(r.component)||r.component.proxy:r.el,o=s?null:i,{i:a,r:c}=t,l=e&&e.r,u=a.refs===we?a.refs={}:a.refs,h=a.setupState;if(l!=null&&l!==c&&(Le(l)?(u[l]=null,se(h,l)&&(h[l]=null)):Ne(l)&&(l.value=null)),Y(c))In(c,a,12,[o,u]);else{const d=Le(c),g=Ne(c);if(d||g){const E=()=>{if(t.f){const T=d?se(h,c)?h[c]:u[c]:c.value;s?G(T)&&$c(T,i):G(T)?T.includes(i)||T.push(i):d?(u[c]=[i],se(h,c)&&(h[c]=u[c])):(c.value=[i],t.k&&(u[t.k]=c.value))}else d?(u[c]=o,se(h,c)&&(h[c]=o)):g&&(c.value=o,t.k&&(u[t.k]=o))};o?(E.id=-1,ot(E,n)):E()}}}const ot=cy;function Ly(t){return Fy(t)}function Fy(t,e){const n=Wd();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:a,createComment:c,setText:l,setElementText:u,parentNode:h,nextSibling:d,setScopeId:g=yt,insertStaticContent:E}=t,T=(f,p,m,v=null,_=null,S=null,N=void 0,A=null,C=!!p.dynamicChildren)=>{if(f===p)return;f&&!rs(f,p)&&(v=y(f),it(f,_,S,!0),f=null),p.patchFlag===-2&&(C=!1,p.dynamicChildren=null);const{type:w,ref:x,shapeFlag:j}=p;switch(w){case ko:P(f,p,m,v);break;case Sn:b(f,p,m,v);break;case Fi:f==null&&D(p,m,v,N);break;case mt:lt(f,p,m,v,_,S,N,A,C);break;default:j&1?Z(f,p,m,v,_,S,N,A,C):j&6?pt(f,p,m,v,_,S,N,A,C):(j&64||j&128)&&w.process(f,p,m,v,_,S,N,A,C,U)}x!=null&&_&&Ja(x,f&&f.ref,S,p||f,!p)},P=(f,p,m,v)=>{if(f==null)r(p.el=a(p.children),m,v);else{const _=p.el=f.el;p.children!==f.children&&l(_,p.children)}},b=(f,p,m,v)=>{f==null?r(p.el=c(p.children||""),m,v):p.el=f.el},D=(f,p,m,v)=>{[f.el,f.anchor]=E(f.children,p,m,v,f.el,f.anchor)},F=({el:f,anchor:p},m,v)=>{let _;for(;f&&f!==p;)_=d(f),r(f,m,v),f=_;r(p,m,v)},z=({el:f,anchor:p})=>{let m;for(;f&&f!==p;)m=d(f),s(f),f=m;s(p)},Z=(f,p,m,v,_,S,N,A,C)=>{p.type==="svg"?N="svg":p.type==="math"&&(N="mathml"),f==null?$(p,m,v,_,S,N,A,C):X(f,p,_,S,N,A,C)},$=(f,p,m,v,_,S,N,A)=>{let C,w;const{props:x,shapeFlag:j,transition:B,dirs:W}=f;if(C=f.el=o(f.type,S,x&&x.is,x),j&8?u(C,f.children):j&16&&ee(f.children,C,null,v,_,ma(f,S),N,A),W&&xn(f,null,v,"created"),de(C,f,f.scopeId,N,v),x){for(const _e in x)_e!=="value"&&!gs(_e)&&i(C,_e,null,x[_e],S,f.children,v,_,Ge);"value"in x&&i(C,"value",null,x.value,S),(w=x.onVnodeBeforeMount)&&Ct(w,v,f)}W&&xn(f,null,v,"beforeMount");const te=Uy(_,B);te&&B.beforeEnter(C),r(C,p,m),((w=x&&x.onVnodeMounted)||te||W)&&ot(()=>{w&&Ct(w,v,f),te&&B.enter(C),W&&xn(f,null,v,"mounted")},_)},de=(f,p,m,v,_)=>{if(m&&g(f,m),v)for(let S=0;S<v.length;S++)g(f,v[S]);if(_){let S=_.subTree;if(p===S){const N=_.vnode;de(f,N,N.scopeId,N.slotScopeIds,_.parent)}}},ee=(f,p,m,v,_,S,N,A,C=0)=>{for(let w=C;w<f.length;w++){const x=f[w]=A?un(f[w]):bt(f[w]);T(null,x,p,m,v,_,S,N,A)}},X=(f,p,m,v,_,S,N)=>{const A=p.el=f.el;let{patchFlag:C,dynamicChildren:w,dirs:x}=p;C|=f.patchFlag&16;const j=f.props||we,B=p.props||we;let W;if(m&&Mn(m,!1),(W=B.onVnodeBeforeUpdate)&&Ct(W,m,p,f),x&&xn(p,f,m,"beforeUpdate"),m&&Mn(m,!0),w?ye(f.dynamicChildren,w,A,m,v,ma(p,_),S):N||ue(f,p,A,null,m,v,ma(p,_),S,!1),C>0){if(C&16)Ke(A,p,j,B,m,v,_);else if(C&2&&j.class!==B.class&&i(A,"class",null,B.class,_),C&4&&i(A,"style",j.style,B.style,_),C&8){const te=p.dynamicProps;for(let _e=0;_e<te.length;_e++){const Ie=te[_e],De=j[Ie],vt=B[Ie];(vt!==De||Ie==="value")&&i(A,Ie,De,vt,_,f.children,m,v,Ge)}}C&1&&f.children!==p.children&&u(A,p.children)}else!N&&w==null&&Ke(A,p,j,B,m,v,_);((W=B.onVnodeUpdated)||x)&&ot(()=>{W&&Ct(W,m,p,f),x&&xn(p,f,m,"updated")},v)},ye=(f,p,m,v,_,S,N)=>{for(let A=0;A<p.length;A++){const C=f[A],w=p[A],x=C.el&&(C.type===mt||!rs(C,w)||C.shapeFlag&70)?h(C.el):m;T(C,w,x,null,v,_,S,N,!0)}},Ke=(f,p,m,v,_,S,N)=>{if(m!==v){if(m!==we)for(const A in m)!gs(A)&&!(A in v)&&i(f,A,m[A],null,N,p.children,_,S,Ge);for(const A in v){if(gs(A))continue;const C=v[A],w=m[A];C!==w&&A!=="value"&&i(f,A,w,C,N,p.children,_,S,Ge)}"value"in v&&i(f,"value",m.value,v.value,N)}},lt=(f,p,m,v,_,S,N,A,C)=>{const w=p.el=f?f.el:a(""),x=p.anchor=f?f.anchor:a("");let{patchFlag:j,dynamicChildren:B,slotScopeIds:W}=p;W&&(A=A?A.concat(W):W),f==null?(r(w,m,v),r(x,m,v),ee(p.children||[],m,x,_,S,N,A,C)):j>0&&j&64&&B&&f.dynamicChildren?(ye(f.dynamicChildren,B,m,_,S,N,A),(p.key!=null||_&&p===_.subTree)&&$f(f,p,!0)):ue(f,p,m,x,_,S,N,A,C)},pt=(f,p,m,v,_,S,N,A,C)=>{p.slotScopeIds=A,f==null?p.shapeFlag&512?_.ctx.activate(p,m,v,N,C):Vn(p,m,v,_,S,N,C):gt(f,p,C)},Vn=(f,p,m,v,_,S,N)=>{const A=f.component=Qy(f,v,_);if(Pf(f)&&(A.ctx.renderer=U),Jy(A),A.asyncDep){if(_&&_.registerDep(A,le),!f.el){const C=A.subTree=ve(Sn);b(null,C,p,m)}}else le(A,f,p,m,_,S,N)},gt=(f,p,m)=>{const v=p.component=f.component;if(ry(f,p,m))if(v.asyncDep&&!v.asyncResolved){me(v,p,m);return}else v.next=p,Q_(v.update),v.effect.dirty=!0,v.update();else p.el=f.el,v.vnode=p},le=(f,p,m,v,_,S,N)=>{const A=()=>{if(f.isMounted){let{next:x,bu:j,u:B,parent:W,vnode:te}=f;{const ar=jf(f);if(ar){x&&(x.el=te.el,me(f,x,N)),ar.asyncDep.then(()=>{f.isUnmounted||A()});return}}let _e=x,Ie;Mn(f,!1),x?(x.el=te.el,me(f,x,N)):x=te,j&&da(j),(Ie=x.props&&x.props.onVnodeBeforeUpdate)&&Ct(Ie,W,x,te),Mn(f,!0);const De=pa(f),vt=f.subTree;f.subTree=De,T(vt,De,h(vt.el),y(vt),f,_,S),x.el=De.el,_e===null&&sy(f,De.el),B&&ot(B,_),(Ie=x.props&&x.props.onVnodeUpdated)&&ot(()=>Ct(Ie,W,x,te),_)}else{let x;const{el:j,props:B}=p,{bm:W,m:te,parent:_e}=f,Ie=ms(p);if(Mn(f,!1),W&&da(W),!Ie&&(x=B&&B.onVnodeBeforeMount)&&Ct(x,_e,p),Mn(f,!0),j&&Te){const De=()=>{f.subTree=pa(f),Te(j,f.subTree,f,_,null)};Ie?p.type.__asyncLoader().then(()=>!f.isUnmounted&&De()):De()}else{const De=f.subTree=pa(f);T(null,De,m,v,f,_,S),p.el=De.el}if(te&&ot(te,_),!Ie&&(x=B&&B.onVnodeMounted)){const De=p;ot(()=>Ct(x,_e,De),_)}(p.shapeFlag&256||_e&&ms(_e.vnode)&&_e.vnode.shapeFlag&256)&&f.a&&ot(f.a,_),f.isMounted=!0,p=m=v=null}},C=f.effect=new qc(A,yt,()=>Zc(w),f.scope),w=f.update=()=>{C.dirty&&C.run()};w.id=f.uid,Mn(f,!0),w()},me=(f,p,m)=>{p.component=f;const v=f.vnode.props;f.vnode=p,f.next=null,Dy(f,p.props,v,m),My(f,p.children,m),kn(),bu(f),On()},ue=(f,p,m,v,_,S,N,A,C=!1)=>{const w=f&&f.children,x=f?f.shapeFlag:0,j=p.children,{patchFlag:B,shapeFlag:W}=p;if(B>0){if(B&128){rn(w,j,m,v,_,S,N,A,C);return}else if(B&256){qt(w,j,m,v,_,S,N,A,C);return}}W&8?(x&16&&Ge(w,_,S),j!==w&&u(m,j)):x&16?W&16?rn(w,j,m,v,_,S,N,A,C):Ge(w,_,S,!0):(x&8&&u(m,""),W&16&&ee(j,m,v,_,S,N,A,C))},qt=(f,p,m,v,_,S,N,A,C)=>{f=f||_r,p=p||_r;const w=f.length,x=p.length,j=Math.min(w,x);let B;for(B=0;B<j;B++){const W=p[B]=C?un(p[B]):bt(p[B]);T(f[B],W,m,null,_,S,N,A,C)}w>x?Ge(f,_,S,!0,!1,j):ee(p,m,v,_,S,N,A,C,j)},rn=(f,p,m,v,_,S,N,A,C)=>{let w=0;const x=p.length;let j=f.length-1,B=x-1;for(;w<=j&&w<=B;){const W=f[w],te=p[w]=C?un(p[w]):bt(p[w]);if(rs(W,te))T(W,te,m,null,_,S,N,A,C);else break;w++}for(;w<=j&&w<=B;){const W=f[j],te=p[B]=C?un(p[B]):bt(p[B]);if(rs(W,te))T(W,te,m,null,_,S,N,A,C);else break;j--,B--}if(w>j){if(w<=B){const W=B+1,te=W<x?p[W].el:v;for(;w<=B;)T(null,p[w]=C?un(p[w]):bt(p[w]),m,te,_,S,N,A,C),w++}}else if(w>B)for(;w<=j;)it(f[w],_,S,!0),w++;else{const W=w,te=w,_e=new Map;for(w=te;w<=B;w++){const ut=p[w]=C?un(p[w]):bt(p[w]);ut.key!=null&&_e.set(ut.key,w)}let Ie,De=0;const vt=B-te+1;let ar=!1,yu=0;const ns=new Array(vt);for(w=0;w<vt;w++)ns[w]=0;for(w=W;w<=j;w++){const ut=f[w];if(De>=vt){it(ut,_,S,!0);continue}let Pt;if(ut.key!=null)Pt=_e.get(ut.key);else for(Ie=te;Ie<=B;Ie++)if(ns[Ie-te]===0&&rs(ut,p[Ie])){Pt=Ie;break}Pt===void 0?it(ut,_,S,!0):(ns[Pt-te]=w+1,Pt>=yu?yu=Pt:ar=!0,T(ut,p[Pt],m,null,_,S,N,A,C),De++)}const vu=ar?By(ns):_r;for(Ie=vu.length-1,w=vt-1;w>=0;w--){const ut=te+w,Pt=p[ut],Eu=ut+1<x?p[ut+1].el:v;ns[w]===0?T(null,Pt,m,Eu,_,S,N,A,C):ar&&(Ie<0||w!==vu[Ie]?St(Pt,m,Eu,2):Ie--)}}},St=(f,p,m,v,_=null)=>{const{el:S,type:N,transition:A,children:C,shapeFlag:w}=f;if(w&6){St(f.component.subTree,p,m,v);return}if(w&128){f.suspense.move(p,m,v);return}if(w&64){N.move(f,p,m,U);return}if(N===mt){r(S,p,m);for(let j=0;j<C.length;j++)St(C[j],p,m,v);r(f.anchor,p,m);return}if(N===Fi){F(f,p,m);return}if(v!==2&&w&1&&A)if(v===0)A.beforeEnter(S),r(S,p,m),ot(()=>A.enter(S),_);else{const{leave:j,delayLeave:B,afterLeave:W}=A,te=()=>r(S,p,m),_e=()=>{j(S,()=>{te(),W&&W()})};B?B(S,te,_e):_e()}else r(S,p,m)},it=(f,p,m,v=!1,_=!1)=>{const{type:S,props:N,ref:A,children:C,dynamicChildren:w,shapeFlag:x,patchFlag:j,dirs:B}=f;if(A!=null&&Ja(A,null,m,f,!0),x&256){p.ctx.deactivate(f);return}const W=x&1&&B,te=!ms(f);let _e;if(te&&(_e=N&&N.onVnodeBeforeUnmount)&&Ct(_e,p,f),x&6)Ei(f.component,m,v);else{if(x&128){f.suspense.unmount(m,v);return}W&&xn(f,null,p,"beforeUnmount"),x&64?f.type.remove(f,p,m,_,U,v):w&&(S!==mt||j>0&&j&64)?Ge(w,p,m,!1,!0):(S===mt&&j&384||!_&&x&16)&&Ge(C,p,m),v&&ir(f)}(te&&(_e=N&&N.onVnodeUnmounted)||W)&&ot(()=>{_e&&Ct(_e,p,f),W&&xn(f,null,p,"unmounted")},m)},ir=f=>{const{type:p,el:m,anchor:v,transition:_}=f;if(p===mt){or(m,v);return}if(p===Fi){z(f);return}const S=()=>{s(m),_&&!_.persisted&&_.afterLeave&&_.afterLeave()};if(f.shapeFlag&1&&_&&!_.persisted){const{leave:N,delayLeave:A}=_,C=()=>N(m,S);A?A(f.el,S,C):C()}else S()},or=(f,p)=>{let m;for(;f!==p;)m=d(f),s(f),f=m;s(p)},Ei=(f,p,m)=>{const{bum:v,scope:_,update:S,subTree:N,um:A}=f;v&&da(v),_.stop(),S&&(S.active=!1,it(N,f,p,m)),A&&ot(A,p),ot(()=>{f.isUnmounted=!0},p),p&&p.pendingBranch&&!p.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===p.pendingId&&(p.deps--,p.deps===0&&p.resolve())},Ge=(f,p,m,v=!1,_=!1,S=0)=>{for(let N=S;N<f.length;N++)it(f[N],p,m,v,_)},y=f=>f.shapeFlag&6?y(f.component.subTree):f.shapeFlag&128?f.suspense.next():d(f.anchor||f.el);let V=!1;const O=(f,p,m)=>{f==null?p._vnode&&it(p._vnode,null,null,!0):T(p._vnode||null,f,p,null,null,null,m),V||(V=!0,bu(),If(),V=!1),p._vnode=f},U={p:T,um:it,m:St,r:ir,mt:Vn,mc:ee,pc:ue,pbc:ye,n:y,o:t};let fe,Te;return{render:O,hydrate:fe,createApp:ky(O,fe)}}function ma({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function Mn({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function Uy(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function $f(t,e,n=!1){const r=t.children,s=e.children;if(G(r)&&G(s))for(let i=0;i<r.length;i++){const o=r[i];let a=s[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[i]=un(s[i]),a.el=o.el),n||$f(o,a)),a.type===ko&&(a.el=o.el)}}function By(t){const e=t.slice(),n=[0];let r,s,i,o,a;const c=t.length;for(r=0;r<c;r++){const l=t[r];if(l!==0){if(s=n[n.length-1],t[s]<l){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<l?i=a+1:o=a;l<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}function jf(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:jf(e)}const $y=t=>t.__isTeleport,mt=Symbol.for("v-fgt"),ko=Symbol.for("v-txt"),Sn=Symbol.for("v-cmt"),Fi=Symbol.for("v-stc"),ys=[];let Et=null;function ct(t=!1){ys.push(Et=t?null:[])}function jy(){ys.pop(),Et=ys[ys.length-1]||null}let xs=1;function Bu(t){xs+=t}function qf(t){return t.dynamicChildren=xs>0?Et||_r:null,jy(),xs>0&&Et&&Et.push(t),t}function Bt(t,e,n,r,s,i){return qf(ie(t,e,n,r,s,i,!0))}function Oo(t,e,n,r,s){return qf(ve(t,e,n,r,s,!0))}function Zi(t){return t?t.__v_isVNode===!0:!1}function rs(t,e){return t.type===e.type&&t.key===e.key}const Hf=({key:t})=>t??null,Ui=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?Le(t)||Ne(t)||Y(t)?{i:Ze,r:t,k:e,f:!!n}:t:null);function ie(t,e=null,n=null,r=0,s=null,i=t===mt?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Hf(e),ref:e&&Ui(e),scopeId:Po,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Ze};return a?(rl(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=Le(n)?8:16),xs>0&&!o&&Et&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&Et.push(c),c}const ve=qy;function qy(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===iy)&&(t=Sn),Zi(t)){const a=Vr(t,e,!0);return n&&rl(a,n),xs>0&&!i&&Et&&(a.shapeFlag&6?Et[Et.indexOf(t)]=a:Et.push(a)),a.patchFlag|=-2,a}if(tv(t)&&(t=t.__vccOpts),e){e=Hy(e);let{class:a,style:c}=e;a&&!Le(a)&&(e.class=Cs(a)),Re(c)&&(pf(c)&&!G(c)&&(c=Me({},c)),e.style=Nr(c))}const o=Le(t)?1:ay(t)?128:$y(t)?64:Re(t)?4:Y(t)?2:0;return ie(t,e,n,r,s,o,i,!0)}function Hy(t){return t?pf(t)||xf(t)?Me({},t):t:null}function Vr(t,e,n=!1,r=!1){const{props:s,ref:i,patchFlag:o,children:a,transition:c}=t,l=e?Ky(s||{},e):s,u={__v_isVNode:!0,__v_skip:!0,type:t.type,props:l,key:l&&Hf(l),ref:e&&e.ref?n&&i?G(i)?i.concat(Ui(e)):[i,Ui(e)]:Ui(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:a,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==mt?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:c,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Vr(t.ssContent),ssFallback:t.ssFallback&&Vr(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return c&&r&&(u.transition=c.clone(u)),u}function Un(t=" ",e=0){return ve(ko,null,t,e)}function zy(t,e){const n=ve(Fi,null,t);return n.staticCount=e,n}function zf(t="",e=!1){return e?(ct(),Oo(Sn,null,t)):ve(Sn,null,t)}function bt(t){return t==null||typeof t=="boolean"?ve(Sn):G(t)?ve(mt,null,t.slice()):typeof t=="object"?un(t):ve(ko,null,String(t))}function un(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Vr(t)}function rl(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(G(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),rl(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!xf(e)?e._ctx=Ze:s===3&&Ze&&(Ze.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else Y(e)?(e={default:e,_ctx:Ze},n=32):(e=String(e),r&64?(n=16,e=[Un(e)]):n=8);t.children=e,t.shapeFlag|=n}function Ky(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=Cs([e.class,r.class]));else if(s==="style")e.style=Nr([e.style,r.style]);else if(Eo(s)){const i=e[s],o=r[s];o&&i!==o&&!(G(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function Ct(t,e,n,r=null){It(t,e,7,[n,r])}const Gy=Nf();let Wy=0;function Qy(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||Gy,i={uid:Wy++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new Yd(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Lf(r,s),emitsOptions:Tf(r,s),emit:null,emitted:null,propsDefaults:we,inheritAttrs:r.inheritAttrs,ctx:we,data:we,props:we,attrs:we,slots:we,refs:we,setupState:we,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=X_.bind(null,i),t.ce&&t.ce(i),i}let je=null,eo,Ya;{const t=Wd(),e=(n,r)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(r),i=>{s.length>1?s.forEach(o=>o(i)):s[0](i)}};eo=e("__VUE_INSTANCE_SETTERS__",n=>je=n),Ya=e("__VUE_SSR_SETTERS__",n=>No=n)}const ei=t=>{const e=je;return eo(t),t.scope.on(),()=>{t.scope.off(),eo(e)}},$u=()=>{je&&je.scope.off(),eo(null)};function Kf(t){return t.vnode.shapeFlag&4}let No=!1;function Jy(t,e=!1){e&&Ya(e);const{props:n,children:r}=t.vnode,s=Kf(t);Ny(t,n,s,e),xy(t,r);const i=s?Yy(t,e):void 0;return e&&Ya(!1),i}function Yy(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,Ty);const{setup:r}=n;if(r){const s=t.setupContext=r.length>1?Zy(t):null,i=ei(t);kn();const o=In(r,t,0,[t.props,s]);if(On(),i(),Hd(o)){if(o.then($u,$u),e)return o.then(a=>{ju(t,a,e)}).catch(a=>{Ro(a,t,0)});t.asyncDep=o}else ju(t,o,e)}else Gf(t,e)}function ju(t,e,n){Y(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Re(e)&&(t.setupState=yf(e)),Gf(t,n)}let qu;function Gf(t,e,n){const r=t.type;if(!t.render){if(!e&&qu&&!r.render){const s=r.template||tl(t).template;if(s){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:c}=r,l=Me(Me({isCustomElement:i,delimiters:a},o),c);r.render=qu(s,l)}}t.render=r.render||yt}{const s=ei(t);kn();try{Ay(t)}finally{On(),s()}}}const Xy={get(t,e){return at(t,"get",""),t[e]}};function Zy(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,Xy),slots:t.slots,emit:t.emit,expose:e}}function sl(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(yf(Qc(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in _s)return _s[n](t)},has(e,n){return n in e||n in _s}}))}function ev(t,e=!0){return Y(t)?t.displayName||t.name:t.name||e&&t.__name}function tv(t){return Y(t)&&"__vccOpts"in t}const dt=(t,e)=>B_(t,e,No);function Wf(t,e,n){const r=arguments.length;return r===2?Re(e)&&!G(e)?Zi(e)?ve(t,null,[e]):ve(t,e):ve(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Zi(n)&&(n=[n]),ve(t,e,n))}const nv="3.4.27";/**
* @vue/runtime-dom v3.4.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const rv="http://www.w3.org/2000/svg",sv="http://www.w3.org/1998/Math/MathML",hn=typeof document<"u"?document:null,Hu=hn&&hn.createElement("template"),iv={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e==="svg"?hn.createElementNS(rv,t):e==="mathml"?hn.createElementNS(sv,t):hn.createElement(t,n?{is:n}:void 0);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>hn.createTextNode(t),createComment:t=>hn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>hn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{Hu.innerHTML=r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t;const a=Hu.content;if(r==="svg"||r==="mathml"){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},ov=Symbol("_vtc");function av(t,e,n){const r=t[ov];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const zu=Symbol("_vod"),cv=Symbol("_vsh"),lv=Symbol(""),uv=/(^|;)\s*display\s*:/;function hv(t,e,n){const r=t.style,s=Le(n);let i=!1;if(n&&!s){if(e)if(Le(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();n[a]==null&&Bi(r,a,"")}else for(const o in e)n[o]==null&&Bi(r,o,"");for(const o in n)o==="display"&&(i=!0),Bi(r,o,n[o])}else if(s){if(e!==n){const o=r[lv];o&&(n+=";"+o),r.cssText=n,i=uv.test(n)}}else e&&t.removeAttribute("style");zu in t&&(t[zu]=i?r.display:"",t[cv]&&(r.display="none"))}const Ku=/\s*!important$/;function Bi(t,e,n){if(G(n))n.forEach(r=>Bi(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=dv(t,e);Ku.test(n)?t.setProperty(Gr(r),n.replace(Ku,""),"important"):t[r]=n}}const Gu=["Webkit","Moz","ms"],_a={};function dv(t,e){const n=_a[e];if(n)return n;let r=Ut(e);if(r!=="filter"&&r in t)return _a[e]=r;r=To(r);for(let s=0;s<Gu.length;s++){const i=Gu[s]+r;if(i in t)return _a[e]=i}return e}const Wu="http://www.w3.org/1999/xlink";function fv(t,e,n,r,s){if(r&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(Wu,e.slice(6,e.length)):t.setAttributeNS(Wu,e,n);else{const i=__(e);n==null||i&&!Qd(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function pv(t,e,n,r,s,i,o){if(e==="innerHTML"||e==="textContent"){r&&o(r,s,i),t[e]=n??"";return}const a=t.tagName;if(e==="value"&&a!=="PROGRESS"&&!a.includes("-")){const l=a==="OPTION"?t.getAttribute("value")||"":t.value,u=n??"";(l!==u||!("_value"in t))&&(t.value=u),n==null&&t.removeAttribute(e),t._value=n;return}let c=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=Qd(n):n==null&&l==="string"?(n="",c=!0):l==="number"&&(n=0,c=!0)}try{t[e]=n}catch{}c&&t.removeAttribute(e)}function gv(t,e,n,r){t.addEventListener(e,n,r)}function mv(t,e,n,r){t.removeEventListener(e,n,r)}const Qu=Symbol("_vei");function _v(t,e,n,r,s=null){const i=t[Qu]||(t[Qu]={}),o=i[e];if(r&&o)o.value=r;else{const[a,c]=yv(e);if(r){const l=i[e]=Iv(r,s);gv(t,a,l,c)}else o&&(mv(t,a,o,c),i[e]=void 0)}}const Ju=/(?:Once|Passive|Capture)$/;function yv(t){let e;if(Ju.test(t)){e={};let r;for(;r=t.match(Ju);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Gr(t.slice(2)),e]}let ya=0;const vv=Promise.resolve(),Ev=()=>ya||(vv.then(()=>ya=0),ya=Date.now());function Iv(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;It(wv(r,n.value),e,5,[r])};return n.value=t,n.attached=Ev(),n}function wv(t,e){if(G(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const Yu=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,Tv=(t,e,n,r,s,i,o,a,c)=>{const l=s==="svg";e==="class"?av(t,r,l):e==="style"?hv(t,n,r):Eo(e)?Bc(e)||_v(t,e,n,r,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Av(t,e,r,l))?pv(t,e,r,i,o,a,c):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),fv(t,e,r,l))};function Av(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&Yu(e)&&Y(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return Yu(e)&&Le(n)?!1:e in t}const Rv=Me({patchProp:Tv},iv);let Xu;function Sv(){return Xu||(Xu=Ly(Rv))}const Pv=(...t)=>{const e=Sv().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=bv(r);if(!s)return;const i=e._component;!Y(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.innerHTML="";const o=n(s,!1,Cv(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function Cv(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function bv(t){return Le(t)?document.querySelector(t):t}var kv=!1;/*!
 * pinia v2.1.7
 * (c) 2023 Eduardo San Martin Morote
 * @license MIT
 */let Qf;const Do=t=>Qf=t,Jf=Symbol();function Xa(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var vs;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(vs||(vs={}));function Ov(){const t=Xd(!0),e=t.run(()=>Dr({}));let n=[],r=[];const s=Qc({install(i){Do(s),s._a=i,i.provide(Jf,s),i.config.globalProperties.$pinia=s,r.forEach(o=>n.push(o)),r=[]},use(i){return!this._a&&!kv?r.push(i):n.push(i),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return s}const Yf=()=>{};function Zu(t,e,n,r=Yf){t.push(e);const s=()=>{const i=t.indexOf(e);i>-1&&(t.splice(i,1),r())};return!n&&Zd()&&v_(s),s}function cr(t,...e){t.slice().forEach(n=>{n(...e)})}const Nv=t=>t();function Za(t,e){t instanceof Map&&e instanceof Map&&e.forEach((n,r)=>t.set(r,n)),t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const r=e[n],s=t[n];Xa(s)&&Xa(r)&&t.hasOwnProperty(n)&&!Ne(r)&&!zn(r)?t[n]=Za(s,r):t[n]=r}return t}const Dv=Symbol();function Vv(t){return!Xa(t)||!t.hasOwnProperty(Dv)}const{assign:cn}=Object;function xv(t){return!!(Ne(t)&&t.effect)}function Mv(t,e,n,r){const{state:s,actions:i,getters:o}=e,a=n.state.value[t];let c;function l(){a||(n.state.value[t]=s?s():{});const u=H_(n.state.value[t]);return cn(u,i,Object.keys(o||{}).reduce((h,d)=>(h[d]=Qc(dt(()=>{Do(n);const g=n._s.get(t);return o[d].call(g,g)})),h),{}))}return c=Xf(t,l,e,n,r,!0),c}function Xf(t,e,n={},r,s,i){let o;const a=cn({actions:{}},n),c={deep:!0};let l,u,h=[],d=[],g;const E=r.state.value[t];!i&&!E&&(r.state.value[t]={}),Dr({});let T;function P(ee){let X;l=u=!1,typeof ee=="function"?(ee(r.state.value[t]),X={type:vs.patchFunction,storeId:t,events:g}):(Za(r.state.value[t],ee),X={type:vs.patchObject,payload:ee,storeId:t,events:g});const ye=T=Symbol();Xc().then(()=>{T===ye&&(l=!0)}),u=!0,cr(h,X,r.state.value[t])}const b=i?function(){const{state:X}=n,ye=X?X():{};this.$patch(Ke=>{cn(Ke,ye)})}:Yf;function D(){o.stop(),h=[],d=[],r._s.delete(t)}function F(ee,X){return function(){Do(r);const ye=Array.from(arguments),Ke=[],lt=[];function pt(le){Ke.push(le)}function Vn(le){lt.push(le)}cr(d,{args:ye,name:ee,store:Z,after:pt,onError:Vn});let gt;try{gt=X.apply(this&&this.$id===t?this:Z,ye)}catch(le){throw cr(lt,le),le}return gt instanceof Promise?gt.then(le=>(cr(Ke,le),le)).catch(le=>(cr(lt,le),Promise.reject(le))):(cr(Ke,gt),gt)}}const z={_p:r,$id:t,$onAction:Zu.bind(null,d),$patch:P,$reset:b,$subscribe(ee,X={}){const ye=Zu(h,ee,X.detached,()=>Ke()),Ke=o.run(()=>Ir(()=>r.state.value[t],lt=>{(X.flush==="sync"?u:l)&&ee({storeId:t,type:vs.direct,events:g},lt)},cn({},c,X)));return ye},$dispose:D},Z=Zs(z);r._s.set(t,Z);const de=(r._a&&r._a.runWithContext||Nv)(()=>r._e.run(()=>(o=Xd()).run(e)));for(const ee in de){const X=de[ee];if(Ne(X)&&!xv(X)||zn(X))i||(E&&Vv(X)&&(Ne(X)?X.value=E[ee]:Za(X,E[ee])),r.state.value[t][ee]=X);else if(typeof X=="function"){const ye=F(ee,X);de[ee]=ye,a.actions[ee]=X}}return cn(Z,de),cn(ce(Z),de),Object.defineProperty(Z,"$state",{get:()=>r.state.value[t],set:ee=>{P(X=>{cn(X,ee)})}}),r._p.forEach(ee=>{cn(Z,o.run(()=>ee({store:Z,app:r._a,pinia:r,options:a})))}),E&&i&&n.hydrate&&n.hydrate(Z.$state,E),l=!0,u=!0,Z}function Lv(t,e,n){let r,s;const i=typeof e=="function";r=t,s=i?n:e;function o(a,c){const l=Oy();return a=a||(l?xt(Jf,null):null),a&&Do(a),a=Qf,a._s.has(r)||(i?Xf(r,e,s,a):Mv(r,s,a)),a._s.get(r)}return o.$id=r,o}const nr=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},Fv={},Uv={class:"svg-sprite"},Bv=zy('<svg width="0" height="0" class="hidden"><symbol aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" id="angle-down-solid"><path fill="currentColor" d="M441.9 167.3l-19.8-19.8c-4.7-4.7-12.3-4.7-17 0L224 328.2 42.9 147.5c-4.7-4.7-12.3-4.7-17 0L6.1 167.3c-4.7 4.7-4.7 12.3 0 17l209.4 209.4c4.7 4.7 12.3 4.7 17 0l209.4-209.4c4.7-4.7 4.7-12.3 0-17z"></path></symbol><symbol aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512" id="angle-right-solid"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 6 10"><path fill="currentColor" fill-rule="nonzero" d="M.22.227a.703.703 0 0 1 1.034 0l4.003 4.35c.22.239.22.607 0 .846l-4.003 4.35a.703.703 0 0 1-1.035 0 .83.83 0 0 1 0-1.125L3.576 5 .219 1.352a.83.83 0 0 1 0-1.125Z"></path></svg></symbol></svg>',1),$v=[Bv];function jv(t,e){return ct(),Bt("div",Uv,$v)}const qv=nr(Fv,[["render",jv]]);var eh={};/**
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
 */const Zf=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},Hv=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],a=t[n++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},ep={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,a=o?t[s+1]:0,c=s+2<t.length,l=c?t[s+2]:0,u=i>>2,h=(i&3)<<4|a>>4;let d=(a&15)<<2|l>>6,g=l&63;c||(g=64,o||(d=64)),r.push(n[u],n[h],n[d],n[g])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Zf(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Hv(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const l=s<t.length?n[t.charAt(s)]:64;++s;const h=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||a==null||l==null||h==null)throw new zv;const d=i<<2|a>>4;if(r.push(d),l!==64){const g=a<<4&240|l>>2;if(r.push(g),h!==64){const E=l<<6&192|h;r.push(E)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class zv extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Kv=function(t){const e=Zf(t);return ep.encodeByteArray(e,!0)},to=function(t){return Kv(t).replace(/\./g,"")},tp=function(t){try{return ep.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Gv(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Wv=()=>Gv().__FIREBASE_DEFAULTS__,Qv=()=>{if(typeof process>"u"||typeof eh>"u")return;const t=eh.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Jv=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&tp(t[1]);return e&&JSON.parse(e)},Vo=()=>{try{return Wv()||Qv()||Jv()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},np=t=>{var e,n;return(n=(e=Vo())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Yv=t=>{const e=np(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},rp=()=>{var t;return(t=Vo())===null||t===void 0?void 0:t.config},sp=t=>{var e;return(e=Vo())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class Xv{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function Zv(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t);return[to(JSON.stringify(n)),to(JSON.stringify(o)),""].join(".")}/**
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
 */function ze(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function eE(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ze())}function tE(){var t;const e=(t=Vo())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function nE(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function rE(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function sE(){const t=ze();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function iE(){return!tE()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function oE(){try{return typeof indexedDB=="object"}catch{return!1}}function aE(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
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
 */const cE="FirebaseError";class nn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=cE,Object.setPrototypeOf(this,nn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ti.prototype.create)}}class ti{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?lE(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new nn(s,a,r)}}function lE(t,e){return t.replace(uE,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const uE=/\{\$([^}]+)}/g;function hE(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function no(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(th(i)&&th(o)){if(!no(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function th(t){return t!==null&&typeof t=="object"}/**
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
 */function ni(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function dE(t,e){const n=new fE(t,e);return n.subscribe.bind(n)}class fE{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");pE(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=va),s.error===void 0&&(s.error=va),s.complete===void 0&&(s.complete=va);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function pE(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function va(){}/**
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
 */function wt(t){return t&&t._delegate?t._delegate:t}class Qn{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Ln="[DEFAULT]";/**
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
 */class gE{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Xv;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(_E(e))try{this.getOrInitializeService({instanceIdentifier:Ln})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Ln){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ln){return this.instances.has(e)}getOptions(e=Ln){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:mE(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Ln){return this.component?this.component.multipleInstances?e:Ln:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function mE(t){return t===Ln?void 0:t}function _E(t){return t.instantiationMode==="EAGER"}/**
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
 */class yE{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new gE(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var ne;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ne||(ne={}));const vE={debug:ne.DEBUG,verbose:ne.VERBOSE,info:ne.INFO,warn:ne.WARN,error:ne.ERROR,silent:ne.SILENT},EE=ne.INFO,IE={[ne.DEBUG]:"log",[ne.VERBOSE]:"log",[ne.INFO]:"info",[ne.WARN]:"warn",[ne.ERROR]:"error"},wE=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=IE[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class il{constructor(e){this.name=e,this._logLevel=EE,this._logHandler=wE,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ne))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?vE[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ne.DEBUG,...e),this._logHandler(this,ne.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ne.VERBOSE,...e),this._logHandler(this,ne.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ne.INFO,...e),this._logHandler(this,ne.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ne.WARN,...e),this._logHandler(this,ne.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ne.ERROR,...e),this._logHandler(this,ne.ERROR,...e)}}const TE=(t,e)=>e.some(n=>t instanceof n);let nh,rh;function AE(){return nh||(nh=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function RE(){return rh||(rh=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const ip=new WeakMap,ec=new WeakMap,op=new WeakMap,Ea=new WeakMap,ol=new WeakMap;function SE(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(wn(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&ip.set(n,t)}).catch(()=>{}),ol.set(e,t),e}function PE(t){if(ec.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});ec.set(t,e)}let tc={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return ec.get(t);if(e==="objectStoreNames")return t.objectStoreNames||op.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return wn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function CE(t){tc=t(tc)}function bE(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Ia(this),e,...n);return op.set(r,e.sort?e.sort():[e]),wn(r)}:RE().includes(t)?function(...e){return t.apply(Ia(this),e),wn(ip.get(this))}:function(...e){return wn(t.apply(Ia(this),e))}}function kE(t){return typeof t=="function"?bE(t):(t instanceof IDBTransaction&&PE(t),TE(t,AE())?new Proxy(t,tc):t)}function wn(t){if(t instanceof IDBRequest)return SE(t);if(Ea.has(t))return Ea.get(t);const e=kE(t);return e!==t&&(Ea.set(t,e),ol.set(e,t)),e}const Ia=t=>ol.get(t);function OE(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),a=wn(o);return r&&o.addEventListener("upgradeneeded",c=>{r(wn(o.result),c.oldVersion,c.newVersion,wn(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),a.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",l=>s(l.oldVersion,l.newVersion,l))}).catch(()=>{}),a}const NE=["get","getKey","getAll","getAllKeys","count"],DE=["put","add","delete","clear"],wa=new Map;function sh(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(wa.get(e))return wa.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=DE.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||NE.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,s?"readwrite":"readonly");let l=c.store;return r&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),s&&c.done]))[0]};return wa.set(e,i),i}CE(t=>({...t,get:(e,n,r)=>sh(e,n)||t.get(e,n,r),has:(e,n)=>!!sh(e,n)||t.has(e,n)}));/**
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
 */class VE{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(xE(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function xE(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const nc="@firebase/app",ih="0.10.2";/**
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
 */const Jn=new il("@firebase/app"),ME="@firebase/app-compat",LE="@firebase/analytics-compat",FE="@firebase/analytics",UE="@firebase/app-check-compat",BE="@firebase/app-check",$E="@firebase/auth",jE="@firebase/auth-compat",qE="@firebase/database",HE="@firebase/database-compat",zE="@firebase/functions",KE="@firebase/functions-compat",GE="@firebase/installations",WE="@firebase/installations-compat",QE="@firebase/messaging",JE="@firebase/messaging-compat",YE="@firebase/performance",XE="@firebase/performance-compat",ZE="@firebase/remote-config",eI="@firebase/remote-config-compat",tI="@firebase/storage",nI="@firebase/storage-compat",rI="@firebase/firestore",sI="@firebase/firestore-compat",iI="firebase",oI="10.11.1";/**
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
 */const rc="[DEFAULT]",aI={[nc]:"fire-core",[ME]:"fire-core-compat",[FE]:"fire-analytics",[LE]:"fire-analytics-compat",[BE]:"fire-app-check",[UE]:"fire-app-check-compat",[$E]:"fire-auth",[jE]:"fire-auth-compat",[qE]:"fire-rtdb",[HE]:"fire-rtdb-compat",[zE]:"fire-fn",[KE]:"fire-fn-compat",[GE]:"fire-iid",[WE]:"fire-iid-compat",[QE]:"fire-fcm",[JE]:"fire-fcm-compat",[YE]:"fire-perf",[XE]:"fire-perf-compat",[ZE]:"fire-rc",[eI]:"fire-rc-compat",[tI]:"fire-gcs",[nI]:"fire-gcs-compat",[rI]:"fire-fst",[sI]:"fire-fst-compat","fire-js":"fire-js",[iI]:"fire-js-all"};/**
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
 */const ro=new Map,cI=new Map,sc=new Map;function oh(t,e){try{t.container.addComponent(e)}catch(n){Jn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function xr(t){const e=t.name;if(sc.has(e))return Jn.debug(`There were multiple attempts to register component ${e}.`),!1;sc.set(e,t);for(const n of ro.values())oh(n,t);for(const n of cI.values())oh(n,t);return!0}function al(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function _n(t){return t.settings!==void 0}/**
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
 */const lI={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Tn=new ti("app","Firebase",lI);/**
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
 */class uI{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Qn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Tn.create("app-deleted",{appName:this._name})}}/**
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
 */const Wr=oI;function ap(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:rc,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw Tn.create("bad-app-name",{appName:String(s)});if(n||(n=rp()),!n)throw Tn.create("no-options");const i=ro.get(s);if(i){if(no(n,i.options)&&no(r,i.config))return i;throw Tn.create("duplicate-app",{appName:s})}const o=new yE(s);for(const c of sc.values())o.addComponent(c);const a=new uI(n,r,o);return ro.set(s,a),a}function cp(t=rc){const e=ro.get(t);if(!e&&t===rc&&rp())return ap();if(!e)throw Tn.create("no-app",{appName:t});return e}function An(t,e,n){var r;let s=(r=aI[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${s}" with version "${e}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Jn.warn(a.join(" "));return}xr(new Qn(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const hI="firebase-heartbeat-database",dI=1,Ms="firebase-heartbeat-store";let Ta=null;function lp(){return Ta||(Ta=OE(hI,dI,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Ms)}catch(n){console.warn(n)}}}}).catch(t=>{throw Tn.create("idb-open",{originalErrorMessage:t.message})})),Ta}async function fI(t){try{const n=(await lp()).transaction(Ms),r=await n.objectStore(Ms).get(up(t));return await n.done,r}catch(e){if(e instanceof nn)Jn.warn(e.message);else{const n=Tn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Jn.warn(n.message)}}}async function ah(t,e){try{const r=(await lp()).transaction(Ms,"readwrite");await r.objectStore(Ms).put(e,up(t)),await r.done}catch(n){if(n instanceof nn)Jn.warn(n.message);else{const r=Tn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Jn.warn(r.message)}}}function up(t){return`${t.name}!${t.options.appId}`}/**
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
 */const pI=1024,gI=30*24*60*60*1e3;class mI{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new yI(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=ch();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i)))return this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=gI}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=ch(),{heartbeatsToSend:r,unsentEntries:s}=_I(this._heartbeatsCache.heartbeats),i=to(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function ch(){return new Date().toISOString().substring(0,10)}function _I(t,e=pI){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),lh(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),lh(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class yI{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return oE()?aE().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await fI(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return ah(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return ah(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function lh(t){return to(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function vI(t){xr(new Qn("platform-logger",e=>new VE(e),"PRIVATE")),xr(new Qn("heartbeat",e=>new mI(e),"PRIVATE")),An(nc,ih,t),An(nc,ih,"esm2017"),An("fire-js","")}vI("");var EI=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},k,cl=cl||{},K=EI||self;function xo(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function Mo(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function II(t){return Object.prototype.hasOwnProperty.call(t,Aa)&&t[Aa]||(t[Aa]=++wI)}var Aa="closure_uid_"+(1e9*Math.random()>>>0),wI=0;function TI(t,e,n){return t.call.apply(t.bind,arguments)}function AI(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var s=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(s,r),t.apply(e,s)}}return function(){return t.apply(e,arguments)}}function et(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?et=TI:et=AI,et.apply(null,arguments)}function Pi(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function Ue(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(r,s,i){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[s].apply(r,o)}}function Nn(){this.s=this.s,this.o=this.o}var RI=0;Nn.prototype.s=!1;Nn.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),RI!=0)&&II(this)};Nn.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const hp=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function ll(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function uh(t,e){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(xo(r)){const s=t.length||0,i=r.length||0;t.length=s+i;for(let o=0;o<i;o++)t[s+o]=r[o]}else t.push(r)}}function tt(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}tt.prototype.h=function(){this.defaultPrevented=!0};var SI=function(){if(!K.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{const n=()=>{};K.addEventListener("test",n,e),K.removeEventListener("test",n,e)}catch{}return t}();function Ls(t){return/^[\s\xa0]*$/.test(t)}function Lo(){var t=K.navigator;return t&&(t=t.userAgent)?t:""}function Ot(t){return Lo().indexOf(t)!=-1}function ul(t){return ul[" "](t),t}ul[" "]=function(){};function PI(t,e){var n=Ew;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)}var CI=Ot("Opera"),Mr=Ot("Trident")||Ot("MSIE"),dp=Ot("Edge"),ic=dp||Mr,fp=Ot("Gecko")&&!(Lo().toLowerCase().indexOf("webkit")!=-1&&!Ot("Edge"))&&!(Ot("Trident")||Ot("MSIE"))&&!Ot("Edge"),bI=Lo().toLowerCase().indexOf("webkit")!=-1&&!Ot("Edge");function pp(){var t=K.document;return t?t.documentMode:void 0}var oc;e:{var Ra="",Sa=function(){var t=Lo();if(fp)return/rv:([^\);]+)(\)|;)/.exec(t);if(dp)return/Edge\/([\d\.]+)/.exec(t);if(Mr)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(bI)return/WebKit\/(\S+)/.exec(t);if(CI)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Sa&&(Ra=Sa?Sa[1]:""),Mr){var Pa=pp();if(Pa!=null&&Pa>parseFloat(Ra)){oc=String(Pa);break e}}oc=Ra}var ac;if(K.document&&Mr){var hh=pp();ac=hh||parseInt(oc,10)||void 0}else ac=void 0;var kI=ac;function Fs(t,e){if(tt.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(fp){e:{try{ul(e.nodeName);var s=!0;break e}catch{}s=!1}s||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:OI[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Fs.$.h.call(this)}}Ue(Fs,tt);var OI={2:"touch",3:"pen",4:"mouse"};Fs.prototype.h=function(){Fs.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Fo="closure_listenable_"+(1e6*Math.random()|0),NI=0;function DI(t,e,n,r,s){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.la=s,this.key=++NI,this.fa=this.ia=!1}function Uo(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function hl(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function VI(t,e){for(const n in t)e.call(void 0,t[n],n,t)}function gp(t){const e={};for(const n in t)e[n]=t[n];return e}const dh="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function mp(t,e){let n,r;for(let s=1;s<arguments.length;s++){r=arguments[s];for(n in r)t[n]=r[n];for(let i=0;i<dh.length;i++)n=dh[i],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function Bo(t){this.src=t,this.g={},this.h=0}Bo.prototype.add=function(t,e,n,r,s){var i=t.toString();t=this.g[i],t||(t=this.g[i]=[],this.h++);var o=lc(t,e,r,s);return-1<o?(e=t[o],n||(e.ia=!1)):(e=new DI(e,this.src,i,!!r,s),e.ia=n,t.push(e)),e};function cc(t,e){var n=e.type;if(n in t.g){var r=t.g[n],s=hp(r,e),i;(i=0<=s)&&Array.prototype.splice.call(r,s,1),i&&(Uo(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function lc(t,e,n,r){for(var s=0;s<t.length;++s){var i=t[s];if(!i.fa&&i.listener==e&&i.capture==!!n&&i.la==r)return s}return-1}var dl="closure_lm_"+(1e6*Math.random()|0),Ca={};function _p(t,e,n,r,s){if(Array.isArray(e)){for(var i=0;i<e.length;i++)_p(t,e[i],n,r,s);return null}return n=Ep(n),t&&t[Fo]?t.O(e,n,Mo(r)?!!r.capture:!!r,s):xI(t,e,n,!1,r,s)}function xI(t,e,n,r,s,i){if(!e)throw Error("Invalid event type");var o=Mo(s)?!!s.capture:!!s,a=pl(t);if(a||(t[dl]=a=new Bo(t)),n=a.add(e,n,r,o,i),n.proxy)return n;if(r=MI(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)SI||(s=o),s===void 0&&(s=!1),t.addEventListener(e.toString(),r,s);else if(t.attachEvent)t.attachEvent(vp(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function MI(){function t(n){return e.call(t.src,t.listener,n)}const e=LI;return t}function yp(t,e,n,r,s){if(Array.isArray(e))for(var i=0;i<e.length;i++)yp(t,e[i],n,r,s);else r=Mo(r)?!!r.capture:!!r,n=Ep(n),t&&t[Fo]?(t=t.i,e=String(e).toString(),e in t.g&&(i=t.g[e],n=lc(i,n,r,s),-1<n&&(Uo(i[n]),Array.prototype.splice.call(i,n,1),i.length==0&&(delete t.g[e],t.h--)))):t&&(t=pl(t))&&(e=t.g[e.toString()],t=-1,e&&(t=lc(e,n,r,s)),(n=-1<t?e[t]:null)&&fl(n))}function fl(t){if(typeof t!="number"&&t&&!t.fa){var e=t.src;if(e&&e[Fo])cc(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(vp(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=pl(e))?(cc(n,t),n.h==0&&(n.src=null,e[dl]=null)):Uo(t)}}}function vp(t){return t in Ca?Ca[t]:Ca[t]="on"+t}function LI(t,e){if(t.fa)t=!0;else{e=new Fs(e,this);var n=t.listener,r=t.la||t.src;t.ia&&fl(t),t=n.call(r,e)}return t}function pl(t){return t=t[dl],t instanceof Bo?t:null}var ba="__closure_events_fn_"+(1e9*Math.random()>>>0);function Ep(t){return typeof t=="function"?t:(t[ba]||(t[ba]=function(e){return t.handleEvent(e)}),t[ba])}function Fe(){Nn.call(this),this.i=new Bo(this),this.S=this,this.J=null}Ue(Fe,Nn);Fe.prototype[Fo]=!0;Fe.prototype.removeEventListener=function(t,e,n,r){yp(this,t,e,n,r)};function qe(t,e){var n,r=t.J;if(r)for(n=[];r;r=r.J)n.push(r);if(t=t.S,r=e.type||e,typeof e=="string")e=new tt(e,t);else if(e instanceof tt)e.target=e.target||t;else{var s=e;e=new tt(r,t),mp(e,s)}if(s=!0,n)for(var i=n.length-1;0<=i;i--){var o=e.g=n[i];s=Ci(o,r,!0,e)&&s}if(o=e.g=t,s=Ci(o,r,!0,e)&&s,s=Ci(o,r,!1,e)&&s,n)for(i=0;i<n.length;i++)o=e.g=n[i],s=Ci(o,r,!1,e)&&s}Fe.prototype.N=function(){if(Fe.$.N.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)Uo(n[r]);delete t.g[e],t.h--}}this.J=null};Fe.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};Fe.prototype.P=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function Ci(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var s=!0,i=0;i<e.length;++i){var o=e[i];if(o&&!o.fa&&o.capture==n){var a=o.listener,c=o.la||o.src;o.ia&&cc(t.i,o),s=a.call(c,r)!==!1&&s}}return s&&!r.defaultPrevented}var gl=K.JSON.stringify;class FI{constructor(e,n){this.i=e,this.j=n,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function UI(){var t=ml;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class BI{constructor(){this.h=this.g=null}add(e,n){const r=Ip.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var Ip=new FI(()=>new $I,t=>t.reset());class $I{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function jI(t){var e=1;t=t.split(":");const n=[];for(;0<e&&t.length;)n.push(t.shift()),e--;return t.length&&n.push(t.join(":")),n}function qI(t){K.setTimeout(()=>{throw t},0)}let Us,Bs=!1,ml=new BI,wp=()=>{const t=K.Promise.resolve(void 0);Us=()=>{t.then(HI)}};var HI=()=>{for(var t;t=UI();){try{t.h.call(t.g)}catch(n){qI(n)}var e=Ip;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Bs=!1};function $o(t,e){Fe.call(this),this.h=t||1,this.g=e||K,this.j=et(this.qb,this),this.l=Date.now()}Ue($o,Fe);k=$o.prototype;k.ga=!1;k.T=null;k.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),qe(this,"tick"),this.ga&&(_l(this),this.start()))}};k.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function _l(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}k.N=function(){$o.$.N.call(this),_l(this),delete this.g};function yl(t,e,n){if(typeof t=="function")n&&(t=et(t,n));else if(t&&typeof t.handleEvent=="function")t=et(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:K.setTimeout(t,e||0)}function Tp(t){t.g=yl(()=>{t.g=null,t.i&&(t.i=!1,Tp(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class zI extends Nn{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:Tp(this)}N(){super.N(),this.g&&(K.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function $s(t){Nn.call(this),this.h=t,this.g={}}Ue($s,Nn);var fh=[];function Ap(t,e,n,r){Array.isArray(n)||(n&&(fh[0]=n.toString()),n=fh);for(var s=0;s<n.length;s++){var i=_p(e,n[s],r||t.handleEvent,!1,t.h||t);if(!i)break;t.g[i.key]=i}}function Rp(t){hl(t.g,function(e,n){this.g.hasOwnProperty(n)&&fl(e)},t),t.g={}}$s.prototype.N=function(){$s.$.N.call(this),Rp(this)};$s.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function jo(){this.g=!0}jo.prototype.Ea=function(){this.g=!1};function KI(t,e,n,r,s,i){t.info(function(){if(t.g)if(i)for(var o="",a=i.split("&"),c=0;c<a.length;c++){var l=a[c].split("=");if(1<l.length){var u=l[0];l=l[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+l+"&"):o+(u+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+r+") [attempt "+s+"]: "+e+`
`+n+`
`+o})}function GI(t,e,n,r,s,i,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+s+"]: "+e+`
`+n+`
`+i+" "+o})}function gr(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+QI(t,n)+(r?" "+r:"")})}function WI(t,e){t.info(function(){return"TIMEOUT: "+e})}jo.prototype.info=function(){};function QI(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var s=r[1];if(Array.isArray(s)&&!(1>s.length)){var i=s[0];if(i!="noop"&&i!="stop"&&i!="close")for(var o=1;o<s.length;o++)s[o]=""}}}}return gl(n)}catch{return e}}var rr={},ph=null;function qo(){return ph=ph||new Fe}rr.Ta="serverreachability";function Sp(t){tt.call(this,rr.Ta,t)}Ue(Sp,tt);function js(t){const e=qo();qe(e,new Sp(e))}rr.STAT_EVENT="statevent";function Pp(t,e){tt.call(this,rr.STAT_EVENT,t),this.stat=e}Ue(Pp,tt);function st(t){const e=qo();qe(e,new Pp(e,t))}rr.Ua="timingevent";function Cp(t,e){tt.call(this,rr.Ua,t),this.size=e}Ue(Cp,tt);function ri(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return K.setTimeout(function(){t()},e)}var Ho={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},bp={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function vl(){}vl.prototype.h=null;function gh(t){return t.h||(t.h=t.i())}function kp(){}var si={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function El(){tt.call(this,"d")}Ue(El,tt);function Il(){tt.call(this,"c")}Ue(Il,tt);var uc;function zo(){}Ue(zo,vl);zo.prototype.g=function(){return new XMLHttpRequest};zo.prototype.i=function(){return{}};uc=new zo;function ii(t,e,n,r){this.l=t,this.j=e,this.m=n,this.W=r||1,this.U=new $s(this),this.P=JI,t=ic?125:void 0,this.V=new $o(t),this.I=null,this.i=!1,this.u=this.B=this.A=this.L=this.G=this.Y=this.C=null,this.F=[],this.g=null,this.o=0,this.s=this.v=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new Op}function Op(){this.i=null,this.g="",this.h=!1}var JI=45e3,Np={},hc={};k=ii.prototype;k.setTimeout=function(t){this.P=t};function dc(t,e,n){t.L=1,t.A=Go(Yt(e)),t.u=n,t.S=!0,Dp(t,null)}function Dp(t,e){t.G=Date.now(),oi(t),t.B=Yt(t.A);var n=t.B,r=t.W;Array.isArray(r)||(r=[String(r)]),$p(n.i,"t",r),t.o=0,n=t.l.J,t.h=new Op,t.g=cg(t.l,n?e:null,!t.u),0<t.O&&(t.M=new zI(et(t.Pa,t,t.g),t.O)),Ap(t.U,t.g,"readystatechange",t.nb),e=t.I?gp(t.I):{},t.u?(t.v||(t.v="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.B,t.v,t.u,e)):(t.v="GET",t.g.ha(t.B,t.v,null,e)),js(),KI(t.j,t.v,t.B,t.m,t.W,t.u)}k.nb=function(t){t=t.target;const e=this.M;e&&Dt(t)==3?e.l():this.Pa(t)};k.Pa=function(t){try{if(t==this.g)e:{const u=Dt(this.g);var e=this.g.Ia();const h=this.g.da();if(!(3>u)&&(u!=3||ic||this.g&&(this.h.h||this.g.ja()||vh(this.g)))){this.J||u!=4||e==7||(e==8||0>=h?js(3):js(2)),Ko(this);var n=this.g.da();this.ca=n;t:if(Vp(this)){var r=vh(this.g);t="";var s=r.length,i=Dt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Bn(this),Es(this);var o="";break t}this.h.i=new K.TextDecoder}for(e=0;e<s;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:i&&e==s-1});r.length=0,this.h.g+=t,this.o=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,GI(this.j,this.v,this.B,this.m,this.W,u,n),this.i){if(this.aa&&!this.K){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Ls(a)){var l=a;break t}}l=null}if(n=l)gr(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,fc(this,n);else{this.i=!1,this.s=3,st(12),Bn(this),Es(this);break e}}this.S?(xp(this,u,o),ic&&this.i&&u==3&&(Ap(this.U,this.V,"tick",this.mb),this.V.start())):(gr(this.j,this.m,o,null),fc(this,o)),u==4&&Bn(this),this.i&&!this.J&&(u==4?sg(this.l,this):(this.i=!1,oi(this)))}else _w(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.s=3,st(12)):(this.s=0,st(13)),Bn(this),Es(this)}}}catch{}finally{}};function Vp(t){return t.g?t.v=="GET"&&t.L!=2&&t.l.Ha:!1}function xp(t,e,n){let r=!0,s;for(;!t.J&&t.o<n.length;)if(s=YI(t,n),s==hc){e==4&&(t.s=4,st(14),r=!1),gr(t.j,t.m,null,"[Incomplete Response]");break}else if(s==Np){t.s=4,st(15),gr(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else gr(t.j,t.m,s,null),fc(t,s);Vp(t)&&t.o!=0&&(t.h.g=t.h.g.slice(t.o),t.o=0),e!=4||n.length!=0||t.h.h||(t.s=1,st(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.ba&&(t.ba=!0,e=t.l,e.g==t&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),Pl(e),e.M=!0,st(11))):(gr(t.j,t.m,n,"[Invalid Chunked Response]"),Bn(t),Es(t))}k.mb=function(){if(this.g){var t=Dt(this.g),e=this.g.ja();this.o<e.length&&(Ko(this),xp(this,t,e),this.i&&t!=4&&oi(this))}};function YI(t,e){var n=t.o,r=e.indexOf(`
`,n);return r==-1?hc:(n=Number(e.substring(n,r)),isNaN(n)?Np:(r+=1,r+n>e.length?hc:(e=e.slice(r,r+n),t.o=r+n,e)))}k.cancel=function(){this.J=!0,Bn(this)};function oi(t){t.Y=Date.now()+t.P,Mp(t,t.P)}function Mp(t,e){if(t.C!=null)throw Error("WatchDog timer not null");t.C=ri(et(t.lb,t),e)}function Ko(t){t.C&&(K.clearTimeout(t.C),t.C=null)}k.lb=function(){this.C=null;const t=Date.now();0<=t-this.Y?(WI(this.j,this.B),this.L!=2&&(js(),st(17)),Bn(this),this.s=2,Es(this)):Mp(this,this.Y-t)};function Es(t){t.l.H==0||t.J||sg(t.l,t)}function Bn(t){Ko(t);var e=t.M;e&&typeof e.sa=="function"&&e.sa(),t.M=null,_l(t.V),Rp(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.sa())}function fc(t,e){try{var n=t.l;if(n.H!=0&&(n.g==t||pc(n.i,t))){if(!t.K&&pc(n.i,t)&&n.H==3){try{var r=n.Ja.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var s=r;if(s[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<t.G)oo(n),Jo(n);else break e;Sl(n),st(18)}}else n.Fa=s[1],0<n.Fa-n.V&&37500>s[2]&&n.G&&n.A==0&&!n.v&&(n.v=ri(et(n.ib,n),6e3));if(1>=Hp(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else $n(n,11)}else if((t.K||n.g==t)&&oo(n),!Ls(e))for(s=n.Ja.g.parse(e),e=0;e<s.length;e++){let l=s[e];if(n.V=l[0],l=l[1],n.H==2)if(l[0]=="c"){n.K=l[1],n.pa=l[2];const u=l[3];u!=null&&(n.ra=u,n.l.info("VER="+n.ra));const h=l[4];h!=null&&(n.Ga=h,n.l.info("SVER="+n.Ga));const d=l[5];d!=null&&typeof d=="number"&&0<d&&(r=1.5*d,n.L=r,n.l.info("backChannelRequestTimeoutMs_="+r)),r=n;const g=t.g;if(g){const E=g.g?g.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(E){var i=r.i;i.g||E.indexOf("spdy")==-1&&E.indexOf("quic")==-1&&E.indexOf("h2")==-1||(i.j=i.l,i.g=new Set,i.h&&(wl(i,i.h),i.h=null))}if(r.F){const T=g.g?g.g.getResponseHeader("X-HTTP-Session-Id"):null;T&&(r.Da=T,Ee(r.I,r.F,T))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-t.G,n.l.info("Handshake RTT: "+n.S+"ms")),r=n;var o=t;if(r.wa=ag(r,r.J?r.pa:null,r.Y),o.K){zp(r.i,o);var a=o,c=r.L;c&&a.setTimeout(c),a.C&&(Ko(a),oi(a)),r.g=o}else ng(r);0<n.j.length&&Yo(n)}else l[0]!="stop"&&l[0]!="close"||$n(n,7);else n.H==3&&(l[0]=="stop"||l[0]=="close"?l[0]=="stop"?$n(n,7):Rl(n):l[0]!="noop"&&n.h&&n.h.Aa(l),n.A=0)}}js(4)}catch{}}function XI(t){if(t.Z&&typeof t.Z=="function")return t.Z();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(xo(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function ZI(t){if(t.ta&&typeof t.ta=="function")return t.ta();if(!t.Z||typeof t.Z!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(xo(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}function Lp(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(xo(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=ZI(t),r=XI(t),s=r.length,i=0;i<s;i++)e.call(void 0,r[i],n&&n[i],t)}var Fp=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function ew(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),s=null;if(0<=r){var i=t[n].substring(0,r);s=t[n].substring(r+1)}else i=t[n];e(i,s?decodeURIComponent(s.replace(/\+/g," ")):"")}}}function Kn(t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof Kn){this.h=t.h,so(this,t.j),this.s=t.s,this.g=t.g,io(this,t.m),this.l=t.l;var e=t.i,n=new qs;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),mh(this,n),this.o=t.o}else t&&(e=String(t).match(Fp))?(this.h=!1,so(this,e[1]||"",!0),this.s=us(e[2]||""),this.g=us(e[3]||"",!0),io(this,e[4]),this.l=us(e[5]||"",!0),mh(this,e[6]||"",!0),this.o=us(e[7]||"")):(this.h=!1,this.i=new qs(null,this.h))}Kn.prototype.toString=function(){var t=[],e=this.j;e&&t.push(hs(e,_h,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(hs(e,_h,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(hs(n,n.charAt(0)=="/"?rw:nw,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",hs(n,iw)),t.join("")};function Yt(t){return new Kn(t)}function so(t,e,n){t.j=n?us(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function io(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function mh(t,e,n){e instanceof qs?(t.i=e,ow(t.i,t.h)):(n||(e=hs(e,sw)),t.i=new qs(e,t.h))}function Ee(t,e,n){t.i.set(e,n)}function Go(t){return Ee(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function us(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function hs(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,tw),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function tw(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var _h=/[#\/\?@]/g,nw=/[#\?:]/g,rw=/[#\?]/g,sw=/[#\?@]/g,iw=/#/g;function qs(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Dn(t){t.g||(t.g=new Map,t.h=0,t.i&&ew(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}k=qs.prototype;k.add=function(t,e){Dn(this),this.i=null,t=Qr(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function Up(t,e){Dn(t),e=Qr(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function Bp(t,e){return Dn(t),e=Qr(t,e),t.g.has(e)}k.forEach=function(t,e){Dn(this),this.g.forEach(function(n,r){n.forEach(function(s){t.call(e,s,r,this)},this)},this)};k.ta=function(){Dn(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const s=t[r];for(let i=0;i<s.length;i++)n.push(e[r])}return n};k.Z=function(t){Dn(this);let e=[];if(typeof t=="string")Bp(this,t)&&(e=e.concat(this.g.get(Qr(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};k.set=function(t,e){return Dn(this),this.i=null,t=Qr(this,t),Bp(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};k.get=function(t,e){return t?(t=this.Z(t),0<t.length?String(t[0]):e):e};function $p(t,e,n){Up(t,e),0<n.length&&(t.i=null,t.g.set(Qr(t,e),ll(n)),t.h+=n.length)}k.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const i=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var s=i;o[r]!==""&&(s+="="+encodeURIComponent(String(o[r]))),t.push(s)}}return this.i=t.join("&")};function Qr(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function ow(t,e){e&&!t.j&&(Dn(t),t.i=null,t.g.forEach(function(n,r){var s=r.toLowerCase();r!=s&&(Up(this,r),$p(this,s,n))},t)),t.j=e}var aw=class{constructor(t,e){this.g=t,this.map=e}};function jp(t){this.l=t||cw,K.PerformanceNavigationTiming?(t=K.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(K.g&&K.g.Ka&&K.g.Ka()&&K.g.Ka().dc),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var cw=10;function qp(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function Hp(t){return t.h?1:t.g?t.g.size:0}function pc(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function wl(t,e){t.g?t.g.add(e):t.h=e}function zp(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}jp.prototype.cancel=function(){if(this.i=Kp(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function Kp(t){if(t.h!=null)return t.i.concat(t.h.F);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return ll(t.i)}var lw=class{stringify(t){return K.JSON.stringify(t,void 0)}parse(t){return K.JSON.parse(t,void 0)}};function uw(){this.g=new lw}function hw(t,e,n){const r=n||"";try{Lp(t,function(s,i){let o=s;Mo(s)&&(o=gl(s)),e.push(r+i+"="+encodeURIComponent(o))})}catch(s){throw e.push(r+"type="+encodeURIComponent("_badmap")),s}}function dw(t,e){const n=new jo;if(K.Image){const r=new Image;r.onload=Pi(bi,n,r,"TestLoadImage: loaded",!0,e),r.onerror=Pi(bi,n,r,"TestLoadImage: error",!1,e),r.onabort=Pi(bi,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=Pi(bi,n,r,"TestLoadImage: timeout",!1,e),K.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function bi(t,e,n,r,s){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,s(r)}catch{}}function ai(t){this.l=t.ec||null,this.j=t.ob||!1}Ue(ai,vl);ai.prototype.g=function(){return new Wo(this.l,this.j)};ai.prototype.i=function(t){return function(){return t}}({});function Wo(t,e){Fe.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=Tl,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Ue(Wo,Fe);var Tl=0;k=Wo.prototype;k.open=function(t,e){if(this.readyState!=Tl)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Hs(this)};k.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||K).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};k.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,ci(this)),this.readyState=Tl};k.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Hs(this)),this.g&&(this.readyState=3,Hs(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof K.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Gp(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))};function Gp(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}k.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?ci(this):Hs(this),this.readyState==3&&Gp(this)}};k.Za=function(t){this.g&&(this.response=this.responseText=t,ci(this))};k.Ya=function(t){this.g&&(this.response=t,ci(this))};k.ka=function(){this.g&&ci(this)};function ci(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Hs(t)}k.setRequestHeader=function(t,e){this.v.append(t,e)};k.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};k.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function Hs(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Wo.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var fw=K.JSON.parse;function Se(t){Fe.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=Wp,this.L=this.M=!1}Ue(Se,Fe);var Wp="",pw=/^https?$/i,gw=["POST","PUT"];k=Se.prototype;k.Oa=function(t){this.M=t};k.ha=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():uc.g(),this.C=this.u?gh(this.u):gh(uc),this.g.onreadystatechange=et(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(i){yh(this,i);return}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var s in r)n.set(s,r[s]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const i of r.keys())n.set(i,r.get(i));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(i=>i.toLowerCase()=="content-type"),s=K.FormData&&t instanceof K.FormData,!(0<=hp(gw,e))||r||s||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[i,o]of n)this.g.setRequestHeader(i,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{Yp(this),0<this.B&&((this.L=mw(this.g))?(this.g.timeout=this.B,this.g.ontimeout=et(this.ua,this)):this.A=yl(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(i){yh(this,i)}};function mw(t){return Mr&&typeof t.timeout=="number"&&t.ontimeout!==void 0}k.ua=function(){typeof cl<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,qe(this,"timeout"),this.abort(8))};function yh(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,Qp(t),Qo(t)}function Qp(t){t.F||(t.F=!0,qe(t,"complete"),qe(t,"error"))}k.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,qe(this,"complete"),qe(this,"abort"),Qo(this))};k.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Qo(this,!0)),Se.$.N.call(this)};k.La=function(){this.s||(this.G||this.v||this.l?Jp(this):this.kb())};k.kb=function(){Jp(this)};function Jp(t){if(t.h&&typeof cl<"u"&&(!t.C[1]||Dt(t)!=4||t.da()!=2)){if(t.v&&Dt(t)==4)yl(t.La,0,t);else if(qe(t,"readystatechange"),Dt(t)==4){t.h=!1;try{const o=t.da();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=o===0){var s=String(t.I).match(Fp)[1]||null;!s&&K.self&&K.self.location&&(s=K.self.location.protocol.slice(0,-1)),r=!pw.test(s?s.toLowerCase():"")}n=r}if(n)qe(t,"complete"),qe(t,"success");else{t.m=6;try{var i=2<Dt(t)?t.g.statusText:""}catch{i=""}t.j=i+" ["+t.da()+"]",Qp(t)}}finally{Qo(t)}}}}function Qo(t,e){if(t.g){Yp(t);const n=t.g,r=t.C[0]?()=>{}:null;t.g=null,t.C=null,e||qe(t,"ready");try{n.onreadystatechange=r}catch{}}}function Yp(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(K.clearTimeout(t.A),t.A=null)}k.isActive=function(){return!!this.g};function Dt(t){return t.g?t.g.readyState:0}k.da=function(){try{return 2<Dt(this)?this.g.status:-1}catch{return-1}};k.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};k.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),fw(e)}};function vh(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case Wp:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}function _w(t){const e={};t=(t.g&&2<=Dt(t)&&t.g.getAllResponseHeaders()||"").split(`\r
`);for(let r=0;r<t.length;r++){if(Ls(t[r]))continue;var n=jI(t[r]);const s=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const i=e[s]||[];e[s]=i,i.push(n)}VI(e,function(r){return r.join(", ")})}k.Ia=function(){return this.m};k.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function Xp(t){let e="";return hl(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function Al(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=Xp(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):Ee(t,e,n))}function ss(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function Zp(t){this.Ga=0,this.j=[],this.l=new jo,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=ss("failFast",!1,t),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=ss("baseRetryDelayMs",5e3,t),this.hb=ss("retryDelaySeedMs",1e4,t),this.eb=ss("forwardChannelMaxRetries",2,t),this.xa=ss("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.useFetchStreams||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.i=new jp(t&&t.concurrentRequestLimit),this.Ja=new uw,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.l.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.qa=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.qa=t.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}k=Zp.prototype;k.ra=8;k.H=1;function Rl(t){if(eg(t),t.H==3){var e=t.W++,n=Yt(t.I);if(Ee(n,"SID",t.K),Ee(n,"RID",e),Ee(n,"TYPE","terminate"),li(t,n),e=new ii(t,t.l,e),e.L=2,e.A=Go(Yt(n)),n=!1,K.navigator&&K.navigator.sendBeacon)try{n=K.navigator.sendBeacon(e.A.toString(),"")}catch{}!n&&K.Image&&(new Image().src=e.A,n=!0),n||(e.g=cg(e.l,null),e.g.ha(e.A)),e.G=Date.now(),oi(e)}og(t)}function Jo(t){t.g&&(Pl(t),t.g.cancel(),t.g=null)}function eg(t){Jo(t),t.u&&(K.clearTimeout(t.u),t.u=null),oo(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&K.clearTimeout(t.m),t.m=null)}function Yo(t){if(!qp(t.i)&&!t.m){t.m=!0;var e=t.Na;Us||wp(),Bs||(Us(),Bs=!0),ml.add(e,t),t.C=0}}function yw(t,e){return Hp(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.j=e.F.concat(t.j),!0):t.H==1||t.H==2||t.C>=(t.cb?0:t.eb)?!1:(t.m=ri(et(t.Na,t,e),ig(t,t.C)),t.C++,!0)}k.Na=function(t){if(this.m)if(this.m=null,this.H==1){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const s=new ii(this,this.l,t);let i=this.s;if(this.U&&(i?(i=gp(i),mp(i,this.U)):i=this.U),this.o!==null||this.O||(s.I=i,i=null),this.P)e:{for(var e=0,n=0;n<this.j.length;n++){t:{var r=this.j[n];if("__data__"in r.map&&(r=r.map.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.j.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=tg(this,s,e),n=Yt(this.I),Ee(n,"RID",t),Ee(n,"CVER",22),this.F&&Ee(n,"X-HTTP-Session-Id",this.F),li(this,n),i&&(this.O?e="headers="+encodeURIComponent(String(Xp(i)))+"&"+e:this.o&&Al(n,this.o,i)),wl(this.i,s),this.bb&&Ee(n,"TYPE","init"),this.P?(Ee(n,"$req",e),Ee(n,"SID","null"),s.aa=!0,dc(s,n,null)):dc(s,n,e),this.H=2}}else this.H==3&&(t?Eh(this,t):this.j.length==0||qp(this.i)||Eh(this))};function Eh(t,e){var n;e?n=e.m:n=t.W++;const r=Yt(t.I);Ee(r,"SID",t.K),Ee(r,"RID",n),Ee(r,"AID",t.V),li(t,r),t.o&&t.s&&Al(r,t.o,t.s),n=new ii(t,t.l,n,t.C+1),t.o===null&&(n.I=t.s),e&&(t.j=e.F.concat(t.j)),e=tg(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),wl(t.i,n),dc(n,r,e)}function li(t,e){t.na&&hl(t.na,function(n,r){Ee(e,r,n)}),t.h&&Lp({},function(n,r){Ee(e,r,n)})}function tg(t,e,n){n=Math.min(t.j.length,n);var r=t.h?et(t.h.Va,t.h,t):null;e:{var s=t.j;let i=-1;for(;;){const o=["count="+n];i==-1?0<n?(i=s[0].g,o.push("ofs="+i)):i=0:o.push("ofs="+i);let a=!0;for(let c=0;c<n;c++){let l=s[c].g;const u=s[c].map;if(l-=i,0>l)i=Math.max(0,s[c].g-100),a=!1;else try{hw(u,o,"req"+l+"_")}catch{r&&r(u)}}if(a){r=o.join("&");break e}}}return t=t.j.splice(0,n),e.F=t,r}function ng(t){if(!t.g&&!t.u){t.ba=1;var e=t.Ma;Us||wp(),Bs||(Us(),Bs=!0),ml.add(e,t),t.A=0}}function Sl(t){return t.g||t.u||3<=t.A?!1:(t.ba++,t.u=ri(et(t.Ma,t),ig(t,t.A)),t.A++,!0)}k.Ma=function(){if(this.u=null,rg(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var t=2*this.S;this.l.info("BP detection timer enabled: "+t),this.B=ri(et(this.jb,this),t)}};k.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,st(10),Jo(this),rg(this))};function Pl(t){t.B!=null&&(K.clearTimeout(t.B),t.B=null)}function rg(t){t.g=new ii(t,t.l,"rpc",t.ba),t.o===null&&(t.g.I=t.s),t.g.O=0;var e=Yt(t.wa);Ee(e,"RID","rpc"),Ee(e,"SID",t.K),Ee(e,"AID",t.V),Ee(e,"CI",t.G?"0":"1"),!t.G&&t.qa&&Ee(e,"TO",t.qa),Ee(e,"TYPE","xmlhttp"),li(t,e),t.o&&t.s&&Al(e,t.o,t.s),t.L&&t.g.setTimeout(t.L);var n=t.g;t=t.pa,n.L=1,n.A=Go(Yt(e)),n.u=null,n.S=!0,Dp(n,t)}k.ib=function(){this.v!=null&&(this.v=null,Jo(this),Sl(this),st(19))};function oo(t){t.v!=null&&(K.clearTimeout(t.v),t.v=null)}function sg(t,e){var n=null;if(t.g==e){oo(t),Pl(t),t.g=null;var r=2}else if(pc(t.i,e))n=e.F,zp(t.i,e),r=1;else return;if(t.H!=0){if(e.i)if(r==1){n=e.u?e.u.length:0,e=Date.now()-e.G;var s=t.C;r=qo(),qe(r,new Cp(r,n)),Yo(t)}else ng(t);else if(s=e.s,s==3||s==0&&0<e.ca||!(r==1&&yw(t,e)||r==2&&Sl(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),s){case 1:$n(t,5);break;case 4:$n(t,10);break;case 3:$n(t,6);break;default:$n(t,2)}}}function ig(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.isActive()||(n*=2),n*e}function $n(t,e){if(t.l.info("Error code "+e),e==2){var n=null;t.h&&(n=null);var r=et(t.pb,t);n||(n=new Kn("//www.google.com/images/cleardot.gif"),K.location&&K.location.protocol=="http"||so(n,"https"),Go(n)),dw(n.toString(),r)}else st(2);t.H=0,t.h&&t.h.za(e),og(t),eg(t)}k.pb=function(t){t?(this.l.info("Successfully pinged google.com"),st(2)):(this.l.info("Failed to ping google.com"),st(1))};function og(t){if(t.H=0,t.ma=[],t.h){const e=Kp(t.i);(e.length!=0||t.j.length!=0)&&(uh(t.ma,e),uh(t.ma,t.j),t.i.i.length=0,ll(t.j),t.j.length=0),t.h.ya()}}function ag(t,e,n){var r=n instanceof Kn?Yt(n):new Kn(n);if(r.g!="")e&&(r.g=e+"."+r.g),io(r,r.m);else{var s=K.location;r=s.protocol,e=e?e+"."+s.hostname:s.hostname,s=+s.port;var i=new Kn(null);r&&so(i,r),e&&(i.g=e),s&&io(i,s),n&&(i.l=n),r=i}return n=t.F,e=t.Da,n&&e&&Ee(r,n,e),Ee(r,"VER",t.ra),li(t,r),r}function cg(t,e,n){if(e&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=t.Ha&&!t.va?new Se(new ai({ob:n})):new Se(t.va),e.Oa(t.J),e}k.isActive=function(){return!!this.h&&this.h.isActive(this)};function lg(){}k=lg.prototype;k.Ba=function(){};k.Aa=function(){};k.za=function(){};k.ya=function(){};k.isActive=function(){return!0};k.Va=function(){};function ao(){if(Mr&&!(10<=Number(kI)))throw Error("Environmental error: no available transport.")}ao.prototype.g=function(t,e){return new ft(t,e)};function ft(t,e){Fe.call(this),this.g=new Zp(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!Ls(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Ls(e)&&(this.g.F=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Jr(this)}Ue(ft,Fe);ft.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var t=this.g,e=this.l,n=this.h||void 0;st(0),t.Y=e,t.na=n||{},t.G=t.aa,t.I=ag(t,null,t.Y),Yo(t)};ft.prototype.close=function(){Rl(this.g)};ft.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=gl(t),t=n);e.j.push(new aw(e.fb++,t)),e.H==3&&Yo(e)};ft.prototype.N=function(){this.g.h=null,delete this.j,Rl(this.g),delete this.g,ft.$.N.call(this)};function ug(t){El.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}Ue(ug,El);function hg(){Il.call(this),this.status=1}Ue(hg,Il);function Jr(t){this.g=t}Ue(Jr,lg);Jr.prototype.Ba=function(){qe(this.g,"a")};Jr.prototype.Aa=function(t){qe(this.g,new ug(t))};Jr.prototype.za=function(t){qe(this.g,new hg)};Jr.prototype.ya=function(){qe(this.g,"b")};function vw(){this.blockSize=-1}function Tt(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}Ue(Tt,vw);Tt.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function ka(t,e,n){n||(n=0);var r=Array(16);if(typeof e=="string")for(var s=0;16>s;++s)r[s]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(s=0;16>s;++s)r[s]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],s=t.g[2];var i=t.g[3],o=e+(i^n&(s^i))+r[0]+3614090360&4294967295;e=n+(o<<7&4294967295|o>>>25),o=i+(s^e&(n^s))+r[1]+3905402710&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(n^i&(e^n))+r[2]+606105819&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(e^s&(i^e))+r[3]+3250441966&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(i^n&(s^i))+r[4]+4118548399&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(s^e&(n^s))+r[5]+1200080426&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(n^i&(e^n))+r[6]+2821735955&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(e^s&(i^e))+r[7]+4249261313&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(i^n&(s^i))+r[8]+1770035416&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(s^e&(n^s))+r[9]+2336552879&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(n^i&(e^n))+r[10]+4294925233&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(e^s&(i^e))+r[11]+2304563134&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(i^n&(s^i))+r[12]+1804603682&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(s^e&(n^s))+r[13]+4254626195&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(n^i&(e^n))+r[14]+2792965006&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(e^s&(i^e))+r[15]+1236535329&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(s^i&(n^s))+r[1]+4129170786&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(e^n))+r[6]+3225465664&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(i^e))+r[11]+643717713&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(s^i))+r[0]+3921069994&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(s^i&(n^s))+r[5]+3593408605&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(e^n))+r[10]+38016083&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(i^e))+r[15]+3634488961&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(s^i))+r[4]+3889429448&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(s^i&(n^s))+r[9]+568446438&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(e^n))+r[14]+3275163606&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(i^e))+r[3]+4107603335&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(s^i))+r[8]+1163531501&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(s^i&(n^s))+r[13]+2850285829&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(e^n))+r[2]+4243563512&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(i^e))+r[7]+1735328473&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(s^i))+r[12]+2368359562&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(n^s^i)+r[5]+4294588738&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^s)+r[8]+2272392833&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^n)+r[11]+1839030562&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^e)+r[14]+4259657740&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(n^s^i)+r[1]+2763975236&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^s)+r[4]+1272893353&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^n)+r[7]+4139469664&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^e)+r[10]+3200236656&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(n^s^i)+r[13]+681279174&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^s)+r[0]+3936430074&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^n)+r[3]+3572445317&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^e)+r[6]+76029189&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(n^s^i)+r[9]+3654602809&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^s)+r[12]+3873151461&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^n)+r[15]+530742520&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^e)+r[2]+3299628645&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(s^(n|~i))+r[0]+4096336452&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~s))+r[7]+1126891415&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~n))+r[14]+2878612391&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~e))+r[5]+4237533241&4294967295,n=s+(o<<21&4294967295|o>>>11),o=e+(s^(n|~i))+r[12]+1700485571&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~s))+r[3]+2399980690&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~n))+r[10]+4293915773&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~e))+r[1]+2240044497&4294967295,n=s+(o<<21&4294967295|o>>>11),o=e+(s^(n|~i))+r[8]+1873313359&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~s))+r[15]+4264355552&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~n))+r[6]+2734768916&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~e))+r[13]+1309151649&4294967295,n=s+(o<<21&4294967295|o>>>11),o=e+(s^(n|~i))+r[4]+4149444226&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~s))+r[11]+3174756917&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~n))+r[2]+718787259&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~e))+r[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(s+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+s&4294967295,t.g[3]=t.g[3]+i&4294967295}Tt.prototype.j=function(t,e){e===void 0&&(e=t.length);for(var n=e-this.blockSize,r=this.m,s=this.h,i=0;i<e;){if(s==0)for(;i<=n;)ka(this,t,i),i+=this.blockSize;if(typeof t=="string"){for(;i<e;)if(r[s++]=t.charCodeAt(i++),s==this.blockSize){ka(this,r),s=0;break}}else for(;i<e;)if(r[s++]=t[i++],s==this.blockSize){ka(this,r),s=0;break}}this.h=s,this.i+=e};Tt.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=n&255,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var r=0;32>r;r+=8)t[n++]=this.g[e]>>>r&255;return t};function ge(t,e){this.h=e;for(var n=[],r=!0,s=t.length-1;0<=s;s--){var i=t[s]|0;r&&i==e||(n[s]=i,r=!1)}this.g=n}var Ew={};function Cl(t){return-128<=t&&128>t?PI(t,function(e){return new ge([e|0],0>e?-1:0)}):new ge([t|0],0>t?-1:0)}function Vt(t){if(isNaN(t)||!isFinite(t))return Tr;if(0>t)return $e(Vt(-t));for(var e=[],n=1,r=0;t>=n;r++)e[r]=t/n|0,n*=gc;return new ge(e,0)}function dg(t,e){if(t.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(t.charAt(0)=="-")return $e(dg(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=Vt(Math.pow(e,8)),r=Tr,s=0;s<t.length;s+=8){var i=Math.min(8,t.length-s),o=parseInt(t.substring(s,s+i),e);8>i?(i=Vt(Math.pow(e,i)),r=r.R(i).add(Vt(o))):(r=r.R(n),r=r.add(Vt(o)))}return r}var gc=4294967296,Tr=Cl(0),mc=Cl(1),Ih=Cl(16777216);k=ge.prototype;k.ea=function(){if(_t(this))return-$e(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var r=this.D(n);t+=(0<=r?r:gc+r)*e,e*=gc}return t};k.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(Kt(this))return"0";if(_t(this))return"-"+$e(this).toString(t);for(var e=Vt(Math.pow(t,6)),n=this,r="";;){var s=lo(n,e).g;n=co(n,s.R(e));var i=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=s,Kt(n))return i+r;for(;6>i.length;)i="0"+i;r=i+r}};k.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h};function Kt(t){if(t.h!=0)return!1;for(var e=0;e<t.g.length;e++)if(t.g[e]!=0)return!1;return!0}function _t(t){return t.h==-1}k.X=function(t){return t=co(this,t),_t(t)?-1:Kt(t)?0:1};function $e(t){for(var e=t.g.length,n=[],r=0;r<e;r++)n[r]=~t.g[r];return new ge(n,~t.h).add(mc)}k.abs=function(){return _t(this)?$e(this):this};k.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0,s=0;s<=e;s++){var i=r+(this.D(s)&65535)+(t.D(s)&65535),o=(i>>>16)+(this.D(s)>>>16)+(t.D(s)>>>16);r=o>>>16,i&=65535,o&=65535,n[s]=o<<16|i}return new ge(n,n[n.length-1]&-2147483648?-1:0)};function co(t,e){return t.add($e(e))}k.R=function(t){if(Kt(this)||Kt(t))return Tr;if(_t(this))return _t(t)?$e(this).R($e(t)):$e($e(this).R(t));if(_t(t))return $e(this.R($e(t)));if(0>this.X(Ih)&&0>t.X(Ih))return Vt(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],r=0;r<2*e;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var s=0;s<t.g.length;s++){var i=this.D(r)>>>16,o=this.D(r)&65535,a=t.D(s)>>>16,c=t.D(s)&65535;n[2*r+2*s]+=o*c,ki(n,2*r+2*s),n[2*r+2*s+1]+=i*c,ki(n,2*r+2*s+1),n[2*r+2*s+1]+=o*a,ki(n,2*r+2*s+1),n[2*r+2*s+2]+=i*a,ki(n,2*r+2*s+2)}for(r=0;r<e;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=e;r<2*e;r++)n[r]=0;return new ge(n,0)};function ki(t,e){for(;(t[e]&65535)!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function is(t,e){this.g=t,this.h=e}function lo(t,e){if(Kt(e))throw Error("division by zero");if(Kt(t))return new is(Tr,Tr);if(_t(t))return e=lo($e(t),e),new is($e(e.g),$e(e.h));if(_t(e))return e=lo(t,$e(e)),new is($e(e.g),e.h);if(30<t.g.length){if(_t(t)||_t(e))throw Error("slowDivide_ only works with positive integers.");for(var n=mc,r=e;0>=r.X(t);)n=wh(n),r=wh(r);var s=lr(n,1),i=lr(r,1);for(r=lr(r,2),n=lr(n,2);!Kt(r);){var o=i.add(r);0>=o.X(t)&&(s=s.add(n),i=o),r=lr(r,1),n=lr(n,1)}return e=co(t,s.R(e)),new is(s,e)}for(s=Tr;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),i=Vt(n),o=i.R(e);_t(o)||0<o.X(t);)n-=r,i=Vt(n),o=i.R(e);Kt(i)&&(i=mc),s=s.add(i),t=co(t,o)}return new is(s,t)}k.gb=function(t){return lo(this,t).h};k.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)&t.D(r);return new ge(n,this.h&t.h)};k.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)|t.D(r);return new ge(n,this.h|t.h)};k.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)^t.D(r);return new ge(n,this.h^t.h)};function wh(t){for(var e=t.g.length+1,n=[],r=0;r<e;r++)n[r]=t.D(r)<<1|t.D(r-1)>>>31;return new ge(n,t.h)}function lr(t,e){var n=e>>5;e%=32;for(var r=t.g.length-n,s=[],i=0;i<r;i++)s[i]=0<e?t.D(i+n)>>>e|t.D(i+n+1)<<32-e:t.D(i+n);return new ge(s,t.h)}ao.prototype.createWebChannel=ao.prototype.g;ft.prototype.send=ft.prototype.u;ft.prototype.open=ft.prototype.m;ft.prototype.close=ft.prototype.close;Ho.NO_ERROR=0;Ho.TIMEOUT=8;Ho.HTTP_ERROR=6;bp.COMPLETE="complete";kp.EventType=si;si.OPEN="a";si.CLOSE="b";si.ERROR="c";si.MESSAGE="d";Fe.prototype.listen=Fe.prototype.O;Se.prototype.listenOnce=Se.prototype.P;Se.prototype.getLastError=Se.prototype.Sa;Se.prototype.getLastErrorCode=Se.prototype.Ia;Se.prototype.getStatus=Se.prototype.da;Se.prototype.getResponseJson=Se.prototype.Wa;Se.prototype.getResponseText=Se.prototype.ja;Se.prototype.send=Se.prototype.ha;Se.prototype.setWithCredentials=Se.prototype.Oa;Tt.prototype.digest=Tt.prototype.l;Tt.prototype.reset=Tt.prototype.reset;Tt.prototype.update=Tt.prototype.j;ge.prototype.add=ge.prototype.add;ge.prototype.multiply=ge.prototype.R;ge.prototype.modulo=ge.prototype.gb;ge.prototype.compare=ge.prototype.X;ge.prototype.toNumber=ge.prototype.ea;ge.prototype.toString=ge.prototype.toString;ge.prototype.getBits=ge.prototype.D;ge.fromNumber=Vt;ge.fromString=dg;var Iw=function(){return new ao},ww=function(){return qo()},Oa=Ho,Tw=bp,Aw=rr,Th={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},Rw=ai,Oi=kp,Sw=Se,Pw=Tt,Ar=ge;const Ah="@firebase/firestore";/**
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
 */class Qe{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Qe.UNAUTHENTICATED=new Qe(null),Qe.GOOGLE_CREDENTIALS=new Qe("google-credentials-uid"),Qe.FIRST_PARTY=new Qe("first-party-uid"),Qe.MOCK_USER=new Qe("mock-user");/**
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
 */let Yr="10.11.1";/**
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
 */const Yn=new il("@firebase/firestore");function os(){return Yn.logLevel}function M(t,...e){if(Yn.logLevel<=ne.DEBUG){const n=e.map(bl);Yn.debug(`Firestore (${Yr}): ${t}`,...n)}}function Xt(t,...e){if(Yn.logLevel<=ne.ERROR){const n=e.map(bl);Yn.error(`Firestore (${Yr}): ${t}`,...n)}}function Lr(t,...e){if(Yn.logLevel<=ne.WARN){const n=e.map(bl);Yn.warn(`Firestore (${Yr}): ${t}`,...n)}}function bl(t){if(typeof t=="string")return t;try{/**
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
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
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
 */function J(t="Unexpected state"){const e=`FIRESTORE (${Yr}) INTERNAL ASSERTION FAILED: `+t;throw Xt(e),new Error(e)}function Oe(t,e){t||J()}function ae(t,e){return t}/**
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
 */const R={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class L extends nn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Rr{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class fg{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Cw{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Qe.UNAUTHENTICATED))}shutdown(){}}class bw{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class kw{constructor(e){this.t=e,this.currentUser=Qe.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const s=c=>this.i!==r?(r=this.i,n(c)):Promise.resolve();let i=new Rr;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Rr,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await s(this.currentUser)})},a=c=>{M("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(M("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Rr)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(M("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Oe(typeof r.accessToken=="string"),new fg(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Oe(e===null||typeof e=="string"),new Qe(e)}}class Ow{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=Qe.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class Nw{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new Ow(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(Qe.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Dw{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Vw{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){const r=i=>{i.error!=null&&M("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.R;return this.R=i.token,M("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{M("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):M("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Oe(typeof n.token=="string"),this.R=n.token,new Dw(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function xw(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class Mw{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=xw(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%e.length))}return r}}function he(t,e){return t<e?-1:t>e?1:0}function Fr(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
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
 */class xe{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new L(R.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new L(R.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new L(R.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new L(R.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return xe.fromMillis(Date.now())}static fromDate(e){return xe.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new xe(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?he(this.nanoseconds,e.nanoseconds):he(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class Q{constructor(e){this.timestamp=e}static fromTimestamp(e){return new Q(e)}static min(){return new Q(new xe(0,0))}static max(){return new Q(new xe(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class zs{constructor(e,n,r){n===void 0?n=0:n>e.length&&J(),r===void 0?r=e.length-n:r>e.length-n&&J(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return zs.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof zs?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=e.get(s),o=n.get(s);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Ae extends zs{construct(e,n,r){return new Ae(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new L(R.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new Ae(n)}static emptyPath(){return new Ae([])}}const Lw=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Xe extends zs{construct(e,n,r){return new Xe(e,n,r)}static isValidIdentifier(e){return Lw.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Xe.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Xe(["__name__"])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new L(R.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const a=e[s];if(a==="\\"){if(s+1===e.length)throw new L(R.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[s+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new L(R.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,s+=2}else a==="`"?(o=!o,s++):a!=="."||o?(r+=a,s++):(i(),s++)}if(i(),o)throw new L(R.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Xe(n)}static emptyPath(){return new Xe([])}}/**
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
 */class q{constructor(e){this.path=e}static fromPath(e){return new q(Ae.fromString(e))}static fromName(e){return new q(Ae.fromString(e).popFirst(5))}static empty(){return new q(Ae.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ae.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Ae.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new q(new Ae(e.slice()))}}function Fw(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=Q.fromTimestamp(r===1e9?new xe(n+1,0):new xe(n,r));return new Pn(s,q.empty(),e)}function Uw(t){return new Pn(t.readTime,t.key,-1)}class Pn{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Pn(Q.min(),q.empty(),-1)}static max(){return new Pn(Q.max(),q.empty(),-1)}}function Bw(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=q.comparator(t.documentKey,e.documentKey),n!==0?n:he(t.largestBatchId,e.largestBatchId))}/**
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
 */const $w="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class jw{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function kl(t){if(t.code!==R.FAILED_PRECONDITION||t.message!==$w)throw t;M("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class I{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&J(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new I((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof I?n:I.resolve(n)}catch(n){return I.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):I.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):I.reject(n)}static resolve(e){return new I((n,r)=>{n(e)})}static reject(e){return new I((n,r)=>{r(e)})}static waitFor(e){return new I((n,r)=>{let s=0,i=0,o=!1;e.forEach(a=>{++s,a.next(()=>{++i,o&&i===s&&n()},c=>r(c))}),o=!0,i===s&&n()})}static or(e){let n=I.resolve(!1);for(const r of e)n=n.next(s=>s?I.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new I((r,s)=>{const i=e.length,o=new Array(i);let a=0;for(let c=0;c<i;c++){const l=c;n(e[l]).next(u=>{o[l]=u,++a,a===i&&r(o)},u=>s(u))}})}static doWhile(e,n){return new I((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}function qw(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function ui(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class Ol{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}Ol.oe=-1;function Xo(t){return t==null}function uo(t){return t===0&&1/t==-1/0}function Hw(t){return typeof t=="number"&&Number.isInteger(t)&&!uo(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */function Rh(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function hi(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function pg(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class Pe{constructor(e,n){this.comparator=e,this.root=n||Be.EMPTY}insert(e,n){return new Pe(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Be.BLACK,null,null))}remove(e){return new Pe(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Be.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Ni(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Ni(this.root,e,this.comparator,!1)}getReverseIterator(){return new Ni(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Ni(this.root,e,this.comparator,!0)}}class Ni{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Be{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??Be.RED,this.left=s??Be.EMPTY,this.right=i??Be.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new Be(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Be.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return Be.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Be.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Be.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw J();const e=this.left.check();if(e!==this.right.check())throw J();return e+(this.isRed()?0:1)}}Be.EMPTY=null,Be.RED=!0,Be.BLACK=!1;Be.EMPTY=new class{constructor(){this.size=0}get key(){throw J()}get value(){throw J()}get color(){throw J()}get left(){throw J()}get right(){throw J()}copy(e,n,r,s,i){return this}insert(e,n,r){return new Be(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class He{constructor(e){this.comparator=e,this.data=new Pe(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Sh(this.data.getIterator())}getIteratorFrom(e){return new Sh(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof He)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new He(this.comparator);return n.data=e,n}}class Sh{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class yn{constructor(e){this.fields=e,e.sort(Xe.comparator)}static empty(){return new yn([])}unionWith(e){let n=new He(Xe.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new yn(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Fr(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class gg extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class nt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new gg("Invalid base64 string: "+i):i}}(e);return new nt(n)}static fromUint8Array(e){const n=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new nt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return he(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}nt.EMPTY_BYTE_STRING=new nt("");const zw=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Cn(t){if(Oe(!!t),typeof t=="string"){let e=0;const n=zw.exec(t);if(Oe(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:be(t.seconds),nanos:be(t.nanos)}}function be(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Xn(t){return typeof t=="string"?nt.fromBase64String(t):nt.fromUint8Array(t)}/**
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
 */function Nl(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Dl(t){const e=t.mapValue.fields.__previous_value__;return Nl(e)?Dl(e):e}function Ks(t){const e=Cn(t.mapValue.fields.__local_write_time__.timestampValue);return new xe(e.seconds,e.nanos)}/**
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
 */class Kw{constructor(e,n,r,s,i,o,a,c,l){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=c,this.useFetchStreams=l}}class Gs{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Gs("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Gs&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const Di={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Zn(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Nl(t)?4:Gw(t)?9007199254740991:10:J()}function $t(t,e){if(t===e)return!0;const n=Zn(t);if(n!==Zn(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Ks(t).isEqual(Ks(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=Cn(s.timestampValue),a=Cn(i.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return Xn(s.bytesValue).isEqual(Xn(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return be(s.geoPointValue.latitude)===be(i.geoPointValue.latitude)&&be(s.geoPointValue.longitude)===be(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return be(s.integerValue)===be(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=be(s.doubleValue),a=be(i.doubleValue);return o===a?uo(o)===uo(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return Fr(t.arrayValue.values||[],e.arrayValue.values||[],$t);case 10:return function(s,i){const o=s.mapValue.fields||{},a=i.mapValue.fields||{};if(Rh(o)!==Rh(a))return!1;for(const c in o)if(o.hasOwnProperty(c)&&(a[c]===void 0||!$t(o[c],a[c])))return!1;return!0}(t,e);default:return J()}}function Ws(t,e){return(t.values||[]).find(n=>$t(n,e))!==void 0}function Ur(t,e){if(t===e)return 0;const n=Zn(t),r=Zn(e);if(n!==r)return he(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return he(t.booleanValue,e.booleanValue);case 2:return function(i,o){const a=be(i.integerValue||i.doubleValue),c=be(o.integerValue||o.doubleValue);return a<c?-1:a>c?1:a===c?0:isNaN(a)?isNaN(c)?0:-1:1}(t,e);case 3:return Ph(t.timestampValue,e.timestampValue);case 4:return Ph(Ks(t),Ks(e));case 5:return he(t.stringValue,e.stringValue);case 6:return function(i,o){const a=Xn(i),c=Xn(o);return a.compareTo(c)}(t.bytesValue,e.bytesValue);case 7:return function(i,o){const a=i.split("/"),c=o.split("/");for(let l=0;l<a.length&&l<c.length;l++){const u=he(a[l],c[l]);if(u!==0)return u}return he(a.length,c.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,o){const a=he(be(i.latitude),be(o.latitude));return a!==0?a:he(be(i.longitude),be(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(i,o){const a=i.values||[],c=o.values||[];for(let l=0;l<a.length&&l<c.length;++l){const u=Ur(a[l],c[l]);if(u)return u}return he(a.length,c.length)}(t.arrayValue,e.arrayValue);case 10:return function(i,o){if(i===Di.mapValue&&o===Di.mapValue)return 0;if(i===Di.mapValue)return 1;if(o===Di.mapValue)return-1;const a=i.fields||{},c=Object.keys(a),l=o.fields||{},u=Object.keys(l);c.sort(),u.sort();for(let h=0;h<c.length&&h<u.length;++h){const d=he(c[h],u[h]);if(d!==0)return d;const g=Ur(a[c[h]],l[u[h]]);if(g!==0)return g}return he(c.length,u.length)}(t.mapValue,e.mapValue);default:throw J()}}function Ph(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return he(t,e);const n=Cn(t),r=Cn(e),s=he(n.seconds,r.seconds);return s!==0?s:he(n.nanos,r.nanos)}function Br(t){return _c(t)}function _c(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Cn(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Xn(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return q.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=_c(i);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${_c(n.fields[o])}`;return s+"}"}(t.mapValue):J()}function Ch(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function yc(t){return!!t&&"integerValue"in t}function Vl(t){return!!t&&"arrayValue"in t}function bh(t){return!!t&&"nullValue"in t}function kh(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Na(t){return!!t&&"mapValue"in t}function Is(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return hi(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Is(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Is(t.arrayValue.values[n]);return e}return Object.assign({},t)}function Gw(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class Nt{constructor(e){this.value=e}static empty(){return new Nt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Na(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Is(n)}setAll(e){let n=Xe.emptyPath(),r={},s=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,r,s),r={},s=[],n=a.popLast()}o?r[a.lastSegment()]=Is(o):s.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());Na(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return $t(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];Na(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){hi(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new Nt(Is(this.value))}}/**
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
 */class Je{constructor(e,n,r,s,i,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=a}static newInvalidDocument(e){return new Je(e,0,Q.min(),Q.min(),Q.min(),Nt.empty(),0)}static newFoundDocument(e,n,r,s){return new Je(e,1,n,Q.min(),r,s,0)}static newNoDocument(e,n){return new Je(e,2,n,Q.min(),Q.min(),Nt.empty(),0)}static newUnknownDocument(e,n){return new Je(e,3,n,Q.min(),Q.min(),Nt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(Q.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Nt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Nt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Q.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Je&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Je(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class ho{constructor(e,n){this.position=e,this.inclusive=n}}function Oh(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=q.comparator(q.fromName(o.referenceValue),n.key):r=Ur(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function Nh(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!$t(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class Qs{constructor(e,n="asc"){this.field=e,this.dir=n}}function Ww(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class mg{}class ke extends mg{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new Jw(e,n,r):n==="array-contains"?new Zw(e,r):n==="in"?new eT(e,r):n==="not-in"?new tT(e,r):n==="array-contains-any"?new nT(e,r):new ke(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new Yw(e,r):new Xw(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Ur(n,this.value)):n!==null&&Zn(this.value)===Zn(n)&&this.matchesComparison(Ur(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return J()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class At extends mg{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new At(e,n)}matches(e){return _g(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function _g(t){return t.op==="and"}function yg(t){return Qw(t)&&_g(t)}function Qw(t){for(const e of t.filters)if(e instanceof At)return!1;return!0}function vc(t){if(t instanceof ke)return t.field.canonicalString()+t.op.toString()+Br(t.value);if(yg(t))return t.filters.map(e=>vc(e)).join(",");{const e=t.filters.map(n=>vc(n)).join(",");return`${t.op}(${e})`}}function vg(t,e){return t instanceof ke?function(r,s){return s instanceof ke&&r.op===s.op&&r.field.isEqual(s.field)&&$t(r.value,s.value)}(t,e):t instanceof At?function(r,s){return s instanceof At&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,a)=>i&&vg(o,s.filters[a]),!0):!1}(t,e):void J()}function Eg(t){return t instanceof ke?function(n){return`${n.field.canonicalString()} ${n.op} ${Br(n.value)}`}(t):t instanceof At?function(n){return n.op.toString()+" {"+n.getFilters().map(Eg).join(" ,")+"}"}(t):"Filter"}class Jw extends ke{constructor(e,n,r){super(e,n,r),this.key=q.fromName(r.referenceValue)}matches(e){const n=q.comparator(e.key,this.key);return this.matchesComparison(n)}}class Yw extends ke{constructor(e,n){super(e,"in",n),this.keys=Ig("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class Xw extends ke{constructor(e,n){super(e,"not-in",n),this.keys=Ig("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function Ig(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>q.fromName(r.referenceValue))}class Zw extends ke{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Vl(n)&&Ws(n.arrayValue,this.value)}}class eT extends ke{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Ws(this.value.arrayValue,n)}}class tT extends ke{constructor(e,n){super(e,"not-in",n)}matches(e){if(Ws(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Ws(this.value.arrayValue,n)}}class nT extends ke{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Vl(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Ws(this.value.arrayValue,r))}}/**
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
 */class rT{constructor(e,n=null,r=[],s=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=a,this.ue=null}}function Dh(t,e=null,n=[],r=[],s=null,i=null,o=null){return new rT(t,e,n,r,s,i,o)}function xl(t){const e=ae(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>vc(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),Xo(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Br(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Br(r)).join(",")),e.ue=n}return e.ue}function Ml(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!Ww(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!vg(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Nh(t.startAt,e.startAt)&&Nh(t.endAt,e.endAt)}function Ec(t){return q.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class Xr{constructor(e,n=null,r=[],s=[],i=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=c,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function sT(t,e,n,r,s,i,o,a){return new Xr(t,e,n,r,s,i,o,a)}function Ll(t){return new Xr(t)}function Vh(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function wg(t){return t.collectionGroup!==null}function ws(t){const e=ae(t);if(e.ce===null){e.ce=[];const n=new Set;for(const i of e.explicitOrderBy)e.ce.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new He(Xe.comparator);return o.filters.forEach(c=>{c.getFlattenedFilters().forEach(l=>{l.isInequality()&&(a=a.add(l.field))})}),a})(e).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||e.ce.push(new Qs(i,r))}),n.has(Xe.keyField().canonicalString())||e.ce.push(new Qs(Xe.keyField(),r))}return e.ce}function Mt(t){const e=ae(t);return e.le||(e.le=iT(e,ws(t))),e.le}function iT(t,e){if(t.limitType==="F")return Dh(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new Qs(s.field,i)});const n=t.endAt?new ho(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new ho(t.startAt.position,t.startAt.inclusive):null;return Dh(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Ic(t,e){const n=t.filters.concat([e]);return new Xr(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function wc(t,e,n){return new Xr(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Zo(t,e){return Ml(Mt(t),Mt(e))&&t.limitType===e.limitType}function Tg(t){return`${xl(Mt(t))}|lt:${t.limitType}`}function ur(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>Eg(s)).join(", ")}]`),Xo(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>Br(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>Br(s)).join(",")),`Target(${r})`}(Mt(t))}; limitType=${t.limitType})`}function ea(t,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):q.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(t,e)&&function(r,s){for(const i of ws(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(r,s){return!(r.startAt&&!function(o,a,c){const l=Oh(o,a,c);return o.inclusive?l<=0:l<0}(r.startAt,ws(r),s)||r.endAt&&!function(o,a,c){const l=Oh(o,a,c);return o.inclusive?l>=0:l>0}(r.endAt,ws(r),s))}(t,e)}function oT(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Ag(t){return(e,n)=>{let r=!1;for(const s of ws(t)){const i=aT(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function aT(t,e,n){const r=t.field.isKeyField()?q.comparator(e.key,n.key):function(i,o,a){const c=o.data.field(i),l=a.data.field(i);return c!==null&&l!==null?Ur(c,l):J()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return J()}}/**
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
 */class Zr{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){hi(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return pg(this.inner)}size(){return this.innerSize}}/**
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
 */const cT=new Pe(q.comparator);function bn(){return cT}const Rg=new Pe(q.comparator);function ds(...t){let e=Rg;for(const n of t)e=e.insert(n.key,n);return e}function lT(t){let e=Rg;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function jn(){return Ts()}function Sg(){return Ts()}function Ts(){return new Zr(t=>t.toString(),(t,e)=>t.isEqual(e))}const uT=new He(q.comparator);function oe(...t){let e=uT;for(const n of t)e=e.add(n);return e}const hT=new He(he);function dT(){return hT}/**
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
 */function Pg(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:uo(e)?"-0":e}}function Cg(t){return{integerValue:""+t}}function fT(t,e){return Hw(e)?Cg(e):Pg(t,e)}/**
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
 */class ta{constructor(){this._=void 0}}function pT(t,e,n){return t instanceof Tc?function(s,i){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&Nl(i)&&(i=Dl(i)),i&&(o.fields.__previous_value__=i),{mapValue:o}}(n,e):t instanceof fo?bg(t,e):t instanceof po?kg(t,e):function(s,i){const o=mT(s,i),a=xh(o)+xh(s.Pe);return yc(o)&&yc(s.Pe)?Cg(a):Pg(s.serializer,a)}(t,e)}function gT(t,e,n){return t instanceof fo?bg(t,e):t instanceof po?kg(t,e):n}function mT(t,e){return t instanceof Ac?function(r){return yc(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class Tc extends ta{}class fo extends ta{constructor(e){super(),this.elements=e}}function bg(t,e){const n=Og(e);for(const r of t.elements)n.some(s=>$t(s,r))||n.push(r);return{arrayValue:{values:n}}}class po extends ta{constructor(e){super(),this.elements=e}}function kg(t,e){let n=Og(e);for(const r of t.elements)n=n.filter(s=>!$t(s,r));return{arrayValue:{values:n}}}class Ac extends ta{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function xh(t){return be(t.integerValue||t.doubleValue)}function Og(t){return Vl(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function _T(t,e){return t.field.isEqual(e.field)&&function(r,s){return r instanceof fo&&s instanceof fo||r instanceof po&&s instanceof po?Fr(r.elements,s.elements,$t):r instanceof Ac&&s instanceof Ac?$t(r.Pe,s.Pe):r instanceof Tc&&s instanceof Tc}(t.transform,e.transform)}class Gn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Gn}static exists(e){return new Gn(void 0,e)}static updateTime(e){return new Gn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function $i(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Fl{}function Ng(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new vT(t.key,Gn.none()):new Ul(t.key,t.data,Gn.none());{const n=t.data,r=Nt.empty();let s=new He(Xe.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new na(t.key,r,new yn(s.toArray()),Gn.none())}}function yT(t,e,n){t instanceof Ul?function(s,i,o){const a=s.value.clone(),c=Lh(s.fieldTransforms,i,o.transformResults);a.setAll(c),i.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):t instanceof na?function(s,i,o){if(!$i(s.precondition,i))return void i.convertToUnknownDocument(o.version);const a=Lh(s.fieldTransforms,i,o.transformResults),c=i.data;c.setAll(Dg(s)),c.setAll(a),i.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(t,e,n):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function As(t,e,n,r){return t instanceof Ul?function(i,o,a,c){if(!$i(i.precondition,o))return a;const l=i.value.clone(),u=Fh(i.fieldTransforms,c,o);return l.setAll(u),o.convertToFoundDocument(o.version,l).setHasLocalMutations(),null}(t,e,n,r):t instanceof na?function(i,o,a,c){if(!$i(i.precondition,o))return a;const l=Fh(i.fieldTransforms,c,o),u=o.data;return u.setAll(Dg(i)),u.setAll(l),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),a===null?null:a.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(h=>h.field))}(t,e,n,r):function(i,o,a){return $i(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(t,e,n)}function Mh(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&Fr(r,s,(i,o)=>_T(i,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Ul extends Fl{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class na extends Fl{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Dg(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Lh(t,e,n){const r=new Map;Oe(t.length===n.length);for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,a=e.data.field(i.field);r.set(i.field,gT(o,a,n[s]))}return r}function Fh(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,pT(i,o,e))}return r}class vT extends Fl{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class ET{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&yT(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=As(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=As(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=Sg();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=n.has(s.key)?null:a;const c=Ng(o,a);c!==null&&r.set(s.key,c),o.isValidDocument()||o.convertToNoDocument(Q.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),oe())}isEqual(e){return this.batchId===e.batchId&&Fr(this.mutations,e.mutations,(n,r)=>Mh(n,r))&&Fr(this.baseMutations,e.baseMutations,(n,r)=>Mh(n,r))}}/**
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
 */class IT{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class wT{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var Ce,re;function Vg(t){if(t===void 0)return Xt("GRPC error has no .code"),R.UNKNOWN;switch(t){case Ce.OK:return R.OK;case Ce.CANCELLED:return R.CANCELLED;case Ce.UNKNOWN:return R.UNKNOWN;case Ce.DEADLINE_EXCEEDED:return R.DEADLINE_EXCEEDED;case Ce.RESOURCE_EXHAUSTED:return R.RESOURCE_EXHAUSTED;case Ce.INTERNAL:return R.INTERNAL;case Ce.UNAVAILABLE:return R.UNAVAILABLE;case Ce.UNAUTHENTICATED:return R.UNAUTHENTICATED;case Ce.INVALID_ARGUMENT:return R.INVALID_ARGUMENT;case Ce.NOT_FOUND:return R.NOT_FOUND;case Ce.ALREADY_EXISTS:return R.ALREADY_EXISTS;case Ce.PERMISSION_DENIED:return R.PERMISSION_DENIED;case Ce.FAILED_PRECONDITION:return R.FAILED_PRECONDITION;case Ce.ABORTED:return R.ABORTED;case Ce.OUT_OF_RANGE:return R.OUT_OF_RANGE;case Ce.UNIMPLEMENTED:return R.UNIMPLEMENTED;case Ce.DATA_LOSS:return R.DATA_LOSS;default:return J()}}(re=Ce||(Ce={}))[re.OK=0]="OK",re[re.CANCELLED=1]="CANCELLED",re[re.UNKNOWN=2]="UNKNOWN",re[re.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",re[re.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",re[re.NOT_FOUND=5]="NOT_FOUND",re[re.ALREADY_EXISTS=6]="ALREADY_EXISTS",re[re.PERMISSION_DENIED=7]="PERMISSION_DENIED",re[re.UNAUTHENTICATED=16]="UNAUTHENTICATED",re[re.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",re[re.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",re[re.ABORTED=10]="ABORTED",re[re.OUT_OF_RANGE=11]="OUT_OF_RANGE",re[re.UNIMPLEMENTED=12]="UNIMPLEMENTED",re[re.INTERNAL=13]="INTERNAL",re[re.UNAVAILABLE=14]="UNAVAILABLE",re[re.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function TT(){return new TextEncoder}/**
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
 */const AT=new Ar([4294967295,4294967295],0);function Uh(t){const e=TT().encode(t),n=new Pw;return n.update(e),new Uint8Array(n.digest())}function Bh(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new Ar([n,r],0),new Ar([s,i],0)]}class Bl{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new fs(`Invalid padding: ${n}`);if(r<0)throw new fs(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new fs(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new fs(`Invalid padding when bitmap length is 0: ${n}`);this.Ie=8*e.length-n,this.Te=Ar.fromNumber(this.Ie)}Ee(e,n,r){let s=e.add(n.multiply(Ar.fromNumber(r)));return s.compare(AT)===1&&(s=new Ar([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const n=Uh(e),[r,s]=Bh(n);for(let i=0;i<this.hashCount;i++){const o=this.Ee(r,s,i);if(!this.de(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new Bl(i,s,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.Ie===0)return;const n=Uh(e),[r,s]=Bh(n);for(let i=0;i<this.hashCount;i++){const o=this.Ee(r,s,i);this.Ae(o)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class fs extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class ra{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,di.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new ra(Q.min(),s,new Pe(he),bn(),oe())}}class di{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new di(r,n,oe(),oe(),oe())}}/**
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
 */class ji{constructor(e,n,r,s){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=s}}class xg{constructor(e,n){this.targetId=e,this.me=n}}class Mg{constructor(e,n,r=nt.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class $h{constructor(){this.fe=0,this.ge=qh(),this.pe=nt.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}Ce(){let e=oe(),n=oe(),r=oe();return this.ge.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:J()}}),new di(this.pe,this.ye,e,n,r)}ve(){this.we=!1,this.ge=qh()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,Oe(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class RT{constructor(e){this.Le=e,this.Be=new Map,this.ke=bn(),this.qe=jh(),this.Qe=new Pe(he)}Ke(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(n,e.Ve):this.Ue(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.Ue(n,e.key,e.Ve)}We(e){this.forEachTarget(e,n=>{const r=this.Ge(n);switch(e.state){case 0:this.ze(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.ve(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.ze(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(n)&&(this.je(n),r.De(e.resumeToken));break;default:J()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((r,s)=>{this.ze(s)&&n(s)})}He(e){const n=e.targetId,r=e.me.count,s=this.Je(n);if(s){const i=s.target;if(Ec(i))if(r===0){const o=new q(i.path);this.Ue(n,o,Je.newNoDocument(o,Q.min()))}else Oe(r===1);else{const o=this.Ye(n);if(o!==r){const a=this.Ze(e),c=a?this.Xe(a,e,o):1;if(c!==0){this.je(n);const l=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(n,l)}}}}}Ze(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,a;try{o=Xn(r).toUint8Array()}catch(c){if(c instanceof gg)return Lr("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{a=new Bl(o,s,i)}catch(c){return Lr(c instanceof fs?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return a.Ie===0?null:a}Xe(e,n,r){return n.me.count===r-this.nt(e,n.targetId)?0:2}nt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const o=this.Le.tt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(a)||(this.Ue(n,i,null),s++)}),s}rt(e){const n=new Map;this.Be.forEach((i,o)=>{const a=this.Je(o);if(a){if(i.current&&Ec(a.target)){const c=new q(a.target.path);this.ke.get(c)!==null||this.it(o,c)||this.Ue(o,c,Je.newNoDocument(c,e))}i.be&&(n.set(o,i.Ce()),i.ve())}});let r=oe();this.qe.forEach((i,o)=>{let a=!0;o.forEachWhile(c=>{const l=this.Je(c);return!l||l.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(i))}),this.ke.forEach((i,o)=>o.setReadTime(e));const s=new ra(e,n,this.Qe,this.ke,r);return this.ke=bn(),this.qe=jh(),this.Qe=new Pe(he),s}$e(e,n){if(!this.ze(e))return;const r=this.it(e,n.key)?2:0;this.Ge(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e))}Ue(e,n,r){if(!this.ze(e))return;const s=this.Ge(e);this.it(e,n)?s.Fe(n,1):s.Me(n),this.qe=this.qe.insert(n,this.st(n).delete(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const n=this.Ge(e).Ce();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let n=this.Be.get(e);return n||(n=new $h,this.Be.set(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new He(he),this.qe=this.qe.insert(e,n)),n}ze(e){const n=this.Je(e)!==null;return n||M("WatchChangeAggregator","Detected inactive target",e),n}Je(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new $h),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.Ue(e,n,null)})}it(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function jh(){return new Pe(q.comparator)}function qh(){return new Pe(q.comparator)}const ST={asc:"ASCENDING",desc:"DESCENDING"},PT={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},CT={and:"AND",or:"OR"};class bT{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Rc(t,e){return t.useProto3Json||Xo(e)?e:{value:e}}function Sc(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Lg(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function Sr(t){return Oe(!!t),Q.fromTimestamp(function(n){const r=Cn(n);return new xe(r.seconds,r.nanos)}(t))}function Fg(t,e){return Pc(t,e).canonicalString()}function Pc(t,e){const n=function(s){return new Ae(["projects",s.projectId,"databases",s.database])}(t).child("documents");return e===void 0?n:n.child(e)}function Ug(t){const e=Ae.fromString(t);return Oe(Hg(e)),e}function Da(t,e){const n=Ug(e);if(n.get(1)!==t.databaseId.projectId)throw new L(R.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new L(R.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new q($g(n))}function Bg(t,e){return Fg(t.databaseId,e)}function kT(t){const e=Ug(t);return e.length===4?Ae.emptyPath():$g(e)}function Hh(t){return new Ae(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function $g(t){return Oe(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function OT(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(l){return l==="NO_CHANGE"?0:l==="ADD"?1:l==="REMOVE"?2:l==="CURRENT"?3:l==="RESET"?4:J()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(l,u){return l.useProto3Json?(Oe(u===void 0||typeof u=="string"),nt.fromBase64String(u||"")):(Oe(u===void 0||u instanceof Buffer||u instanceof Uint8Array),nt.fromUint8Array(u||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(l){const u=l.code===void 0?R.UNKNOWN:Vg(l.code);return new L(u,l.message||"")}(o);n=new Mg(r,s,i,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=Da(t,r.document.name),i=Sr(r.document.updateTime),o=r.document.createTime?Sr(r.document.createTime):Q.min(),a=new Nt({mapValue:{fields:r.document.fields}}),c=Je.newFoundDocument(s,i,o,a),l=r.targetIds||[],u=r.removedTargetIds||[];n=new ji(l,u,c.key,c)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=Da(t,r.document),i=r.readTime?Sr(r.readTime):Q.min(),o=Je.newNoDocument(s,i),a=r.removedTargetIds||[];n=new ji([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=Da(t,r.document),i=r.removedTargetIds||[];n=new ji([],i,s,null)}else{if(!("filter"in e))return J();{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new wT(s,i),a=r.targetId;n=new xg(a,o)}}return n}function NT(t,e){return{documents:[Bg(t,e.path)]}}function DT(t,e){const n={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=Bg(t,s);const i=function(l){if(l.length!==0)return qg(At.create(l,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const o=function(l){if(l.length!==0)return l.map(u=>function(d){return{field:hr(d.field),direction:MT(d.dir)}}(u))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const a=Rc(t,e.limit);return a!==null&&(n.structuredQuery.limit=a),e.startAt&&(n.structuredQuery.startAt=function(l){return{before:l.inclusive,values:l.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(e.endAt)),{_t:n,parent:s}}function VT(t){let e=kT(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){Oe(r===1);const u=n.from[0];u.allDescendants?s=u.collectionId:e=e.child(u.collectionId)}let i=[];n.where&&(i=function(h){const d=jg(h);return d instanceof At&&yg(d)?d.getFilters():[d]}(n.where));let o=[];n.orderBy&&(o=function(h){return h.map(d=>function(E){return new Qs(dr(E.field),function(P){switch(P){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(E.direction))}(d))}(n.orderBy));let a=null;n.limit&&(a=function(h){let d;return d=typeof h=="object"?h.value:h,Xo(d)?null:d}(n.limit));let c=null;n.startAt&&(c=function(h){const d=!!h.before,g=h.values||[];return new ho(g,d)}(n.startAt));let l=null;return n.endAt&&(l=function(h){const d=!h.before,g=h.values||[];return new ho(g,d)}(n.endAt)),sT(e,s,o,i,a,"F",c,l)}function xT(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return J()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function jg(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=dr(n.unaryFilter.field);return ke.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=dr(n.unaryFilter.field);return ke.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=dr(n.unaryFilter.field);return ke.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=dr(n.unaryFilter.field);return ke.create(o,"!=",{nullValue:"NULL_VALUE"});default:return J()}}(t):t.fieldFilter!==void 0?function(n){return ke.create(dr(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return J()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return At.create(n.compositeFilter.filters.map(r=>jg(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return J()}}(n.compositeFilter.op))}(t):J()}function MT(t){return ST[t]}function LT(t){return PT[t]}function FT(t){return CT[t]}function hr(t){return{fieldPath:t.canonicalString()}}function dr(t){return Xe.fromServerFormat(t.fieldPath)}function qg(t){return t instanceof ke?function(n){if(n.op==="=="){if(kh(n.value))return{unaryFilter:{field:hr(n.field),op:"IS_NAN"}};if(bh(n.value))return{unaryFilter:{field:hr(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(kh(n.value))return{unaryFilter:{field:hr(n.field),op:"IS_NOT_NAN"}};if(bh(n.value))return{unaryFilter:{field:hr(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:hr(n.field),op:LT(n.op),value:n.value}}}(t):t instanceof At?function(n){const r=n.getFilters().map(s=>qg(s));return r.length===1?r[0]:{compositeFilter:{op:FT(n.op),filters:r}}}(t):J()}function Hg(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class vn{constructor(e,n,r,s,i=Q.min(),o=Q.min(),a=nt.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=c}withSequenceNumber(e){return new vn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new vn(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new vn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new vn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class UT{constructor(e){this.ut=e}}function BT(t){const e=VT({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?wc(e,e.limit,"L"):e}/**
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
 */class $T{constructor(){this.on=new jT}addToCollectionParentIndex(e,n){return this.on.add(n),I.resolve()}getCollectionParents(e,n){return I.resolve(this.on.getEntries(n))}addFieldIndex(e,n){return I.resolve()}deleteFieldIndex(e,n){return I.resolve()}deleteAllFieldIndexes(e){return I.resolve()}createTargetIndexes(e,n){return I.resolve()}getDocumentsMatchingTarget(e,n){return I.resolve(null)}getIndexType(e,n){return I.resolve(0)}getFieldIndexes(e,n){return I.resolve([])}getNextCollectionGroupToUpdate(e){return I.resolve(null)}getMinOffset(e,n){return I.resolve(Pn.min())}getMinOffsetFromCollectionGroup(e,n){return I.resolve(Pn.min())}updateCollectionGroup(e,n,r){return I.resolve()}updateIndexEntries(e,n){return I.resolve()}}class jT{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new He(Ae.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new He(Ae.comparator)).toArray()}}/**
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
 */class $r{constructor(e){this.xn=e}next(){return this.xn+=2,this.xn}static On(){return new $r(0)}static Nn(){return new $r(-1)}}/**
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
 */class qT{constructor(){this.changes=new Zr(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Je.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?I.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class HT{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class zT{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&As(r.mutation,s,yn.empty(),xe.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,oe()).next(()=>r))}getLocalViewOfDocuments(e,n,r=oe()){const s=jn();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let o=ds();return i.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=jn();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,oe()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,s){let i=bn();const o=Ts(),a=function(){return Ts()}();return n.forEach((c,l)=>{const u=r.get(l.key);s.has(l.key)&&(u===void 0||u.mutation instanceof na)?i=i.insert(l.key,l):u!==void 0?(o.set(l.key,u.mutation.getFieldMask()),As(u.mutation,l,u.mutation.getFieldMask(),xe.now())):o.set(l.key,yn.empty())}),this.recalculateAndSaveOverlays(e,i).next(c=>(c.forEach((l,u)=>o.set(l,u)),n.forEach((l,u)=>{var h;return a.set(l,new HT(u,(h=o.get(l))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const r=Ts();let s=new Pe((o,a)=>o-a),i=oe();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(c=>{const l=n.get(c);if(l===null)return;let u=r.get(c)||yn.empty();u=a.applyToLocalView(l,u),r.set(c,u);const h=(s.get(a.batchId)||oe()).add(c);s=s.insert(a.batchId,h)})}).next(()=>{const o=[],a=s.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),l=c.key,u=c.value,h=Sg();u.forEach(d=>{if(!i.has(d)){const g=Ng(n.get(d),r.get(d));g!==null&&h.set(d,g),i=i.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,l,h))}return I.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,s){return function(o){return q.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):wg(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):I.resolve(jn());let a=-1,c=i;return o.next(l=>I.forEach(l,(u,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),i.get(u)?I.resolve():this.remoteDocumentCache.getEntry(e,u).next(d=>{c=c.insert(u,d)}))).next(()=>this.populateOverlays(e,l,i)).next(()=>this.computeViews(e,c,l,oe())).next(u=>({batchId:a,changes:lT(u)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new q(n)).next(r=>{let s=ds();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let o=ds();return this.indexManager.getCollectionParents(e,i).next(a=>I.forEach(a,c=>{const l=function(h,d){return new Xr(d,null,h.explicitOrderBy.slice(),h.filters.slice(),h.limit,h.limitType,h.startAt,h.endAt)}(n,c.child(i));return this.getDocumentsMatchingCollectionQuery(e,l,r,s).next(u=>{u.forEach((h,d)=>{o=o.insert(h,d)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s))).next(o=>{i.forEach((c,l)=>{const u=l.getKey();o.get(u)===null&&(o=o.insert(u,Je.newInvalidDocument(u)))});let a=ds();return o.forEach((c,l)=>{const u=i.get(c);u!==void 0&&As(u.mutation,l,yn.empty(),xe.now()),ea(n,l)&&(a=a.insert(c,l))}),a})}}/**
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
 */class KT{constructor(e){this.serializer=e,this.ur=new Map,this.cr=new Map}getBundleMetadata(e,n){return I.resolve(this.ur.get(n))}saveBundleMetadata(e,n){return this.ur.set(n.id,function(s){return{id:s.id,version:s.version,createTime:Sr(s.createTime)}}(n)),I.resolve()}getNamedQuery(e,n){return I.resolve(this.cr.get(n))}saveNamedQuery(e,n){return this.cr.set(n.name,function(s){return{name:s.name,query:BT(s.bundledQuery),readTime:Sr(s.readTime)}}(n)),I.resolve()}}/**
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
 */class GT{constructor(){this.overlays=new Pe(q.comparator),this.lr=new Map}getOverlay(e,n){return I.resolve(this.overlays.get(n))}getOverlays(e,n){const r=jn();return I.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.lt(e,n,i)}),I.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.lr.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.lr.delete(r)),I.resolve()}getOverlaysForCollection(e,n,r){const s=jn(),i=n.length+1,o=new q(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,l=c.getKey();if(!n.isPrefixOf(l.path))break;l.path.length===i&&c.largestBatchId>r&&s.set(c.getKey(),c)}return I.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new Pe((l,u)=>l-u);const o=this.overlays.getIterator();for(;o.hasNext();){const l=o.getNext().value;if(l.getKey().getCollectionGroup()===n&&l.largestBatchId>r){let u=i.get(l.largestBatchId);u===null&&(u=jn(),i=i.insert(l.largestBatchId,u)),u.set(l.getKey(),l)}}const a=jn(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((l,u)=>a.set(l,u)),!(a.size()>=s)););return I.resolve(a)}lt(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.lr.get(s.largestBatchId).delete(r.key);this.lr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new IT(n,r));let i=this.lr.get(n);i===void 0&&(i=oe(),this.lr.set(n,i)),this.lr.set(n,i.add(r.key))}}/**
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
 */class $l{constructor(){this.hr=new He(Ve.Pr),this.Ir=new He(Ve.Tr)}isEmpty(){return this.hr.isEmpty()}addReference(e,n){const r=new Ve(e,n);this.hr=this.hr.add(r),this.Ir=this.Ir.add(r)}Er(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.dr(new Ve(e,n))}Ar(e,n){e.forEach(r=>this.removeReference(r,n))}Rr(e){const n=new q(new Ae([])),r=new Ve(n,e),s=new Ve(n,e+1),i=[];return this.Ir.forEachInRange([r,s],o=>{this.dr(o),i.push(o.key)}),i}Vr(){this.hr.forEach(e=>this.dr(e))}dr(e){this.hr=this.hr.delete(e),this.Ir=this.Ir.delete(e)}mr(e){const n=new q(new Ae([])),r=new Ve(n,e),s=new Ve(n,e+1);let i=oe();return this.Ir.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new Ve(e,0),r=this.hr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Ve{constructor(e,n){this.key=e,this.gr=n}static Pr(e,n){return q.comparator(e.key,n.key)||he(e.gr,n.gr)}static Tr(e,n){return he(e.gr,n.gr)||q.comparator(e.key,n.key)}}/**
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
 */class WT{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.pr=1,this.yr=new He(Ve.Pr)}checkEmpty(e){return I.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.pr;this.pr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new ET(i,n,r,s);this.mutationQueue.push(o);for(const a of s)this.yr=this.yr.add(new Ve(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return I.resolve(o)}lookupMutationBatch(e,n){return I.resolve(this.wr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.Sr(r),i=s<0?0:s;return I.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return I.resolve(this.mutationQueue.length===0?-1:this.pr-1)}getAllMutationBatches(e){return I.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Ve(n,0),s=new Ve(n,Number.POSITIVE_INFINITY),i=[];return this.yr.forEachInRange([r,s],o=>{const a=this.wr(o.gr);i.push(a)}),I.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new He(he);return n.forEach(s=>{const i=new Ve(s,0),o=new Ve(s,Number.POSITIVE_INFINITY);this.yr.forEachInRange([i,o],a=>{r=r.add(a.gr)})}),I.resolve(this.br(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;q.isDocumentKey(i)||(i=i.child(""));const o=new Ve(new q(i),0);let a=new He(he);return this.yr.forEachWhile(c=>{const l=c.key.path;return!!r.isPrefixOf(l)&&(l.length===s&&(a=a.add(c.gr)),!0)},o),I.resolve(this.br(a))}br(e){const n=[];return e.forEach(r=>{const s=this.wr(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){Oe(this.Dr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.yr;return I.forEach(n.mutations,s=>{const i=new Ve(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.yr=r})}Fn(e){}containsKey(e,n){const r=new Ve(n,0),s=this.yr.firstAfterOrEqual(r);return I.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,I.resolve()}Dr(e,n){return this.Sr(e)}Sr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}wr(e){const n=this.Sr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class QT{constructor(e){this.Cr=e,this.docs=function(){return new Pe(q.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.Cr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return I.resolve(r?r.document.mutableCopy():Je.newInvalidDocument(n))}getEntries(e,n){let r=bn();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():Je.newInvalidDocument(s))}),I.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=bn();const o=n.path,a=new q(o.child("")),c=this.docs.getIteratorFrom(a);for(;c.hasNext();){const{key:l,value:{document:u}}=c.getNext();if(!o.isPrefixOf(l.path))break;l.path.length>o.length+1||Bw(Uw(u),r)<=0||(s.has(u.key)||ea(n,u))&&(i=i.insert(u.key,u.mutableCopy()))}return I.resolve(i)}getAllFromCollectionGroup(e,n,r,s){J()}vr(e,n){return I.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new JT(this)}getSize(e){return I.resolve(this.size)}}class JT extends qT{constructor(e){super(),this._r=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this._r.addEntry(e,s)):this._r.removeEntry(r)}),I.waitFor(n)}getFromCache(e,n){return this._r.getEntry(e,n)}getAllFromCache(e,n){return this._r.getEntries(e,n)}}/**
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
 */class YT{constructor(e){this.persistence=e,this.Fr=new Zr(n=>xl(n),Ml),this.lastRemoteSnapshotVersion=Q.min(),this.highestTargetId=0,this.Mr=0,this.Or=new $l,this.targetCount=0,this.Nr=$r.On()}forEachTarget(e,n){return this.Fr.forEach((r,s)=>n(s)),I.resolve()}getLastRemoteSnapshotVersion(e){return I.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return I.resolve(this.Mr)}allocateTargetId(e){return this.highestTargetId=this.Nr.next(),I.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Mr&&(this.Mr=n),I.resolve()}kn(e){this.Fr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Nr=new $r(n),this.highestTargetId=n),e.sequenceNumber>this.Mr&&(this.Mr=e.sequenceNumber)}addTargetData(e,n){return this.kn(n),this.targetCount+=1,I.resolve()}updateTargetData(e,n){return this.kn(n),I.resolve()}removeTargetData(e,n){return this.Fr.delete(n.target),this.Or.Rr(n.targetId),this.targetCount-=1,I.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.Fr.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Fr.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),s++)}),I.waitFor(i).next(()=>s)}getTargetCount(e){return I.resolve(this.targetCount)}getTargetData(e,n){const r=this.Fr.get(n)||null;return I.resolve(r)}addMatchingKeys(e,n,r){return this.Or.Er(n,r),I.resolve()}removeMatchingKeys(e,n,r){this.Or.Ar(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),I.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.Or.Rr(n),I.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Or.mr(n);return I.resolve(r)}containsKey(e,n){return I.resolve(this.Or.containsKey(n))}}/**
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
 */class XT{constructor(e,n){this.Lr={},this.overlays={},this.Br=new Ol(0),this.kr=!1,this.kr=!0,this.referenceDelegate=e(this),this.qr=new YT(this),this.indexManager=new $T,this.remoteDocumentCache=function(s){return new QT(s)}(r=>this.referenceDelegate.Qr(r)),this.serializer=new UT(n),this.Kr=new KT(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.kr=!1,Promise.resolve()}get started(){return this.kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new GT,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Lr[e.toKey()];return r||(r=new WT(n,this.referenceDelegate),this.Lr[e.toKey()]=r),r}getTargetCache(){return this.qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Kr}runTransaction(e,n,r){M("MemoryPersistence","Starting transaction:",e);const s=new ZT(this.Br.next());return this.referenceDelegate.$r(),r(s).next(i=>this.referenceDelegate.Ur(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Wr(e,n){return I.or(Object.values(this.Lr).map(r=>()=>r.containsKey(e,n)))}}class ZT extends jw{constructor(e){super(),this.currentSequenceNumber=e}}class jl{constructor(e){this.persistence=e,this.Gr=new $l,this.zr=null}static jr(e){return new jl(e)}get Hr(){if(this.zr)return this.zr;throw J()}addReference(e,n,r){return this.Gr.addReference(r,n),this.Hr.delete(r.toString()),I.resolve()}removeReference(e,n,r){return this.Gr.removeReference(r,n),this.Hr.add(r.toString()),I.resolve()}markPotentiallyOrphaned(e,n){return this.Hr.add(n.toString()),I.resolve()}removeTarget(e,n){this.Gr.Rr(n.targetId).forEach(s=>this.Hr.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.Hr.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}$r(){this.zr=new Set}Ur(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return I.forEach(this.Hr,r=>{const s=q.fromPath(r);return this.Jr(e,s).next(i=>{i||n.removeEntry(s,Q.min())})}).next(()=>(this.zr=null,n.apply(e)))}updateLimboDocument(e,n){return this.Jr(e,n).next(r=>{r?this.Hr.delete(n.toString()):this.Hr.add(n.toString())})}Qr(e){return 0}Jr(e,n){return I.or([()=>I.resolve(this.Gr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Wr(e,n)])}}/**
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
 */class ql{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.ki=r,this.qi=s}static Qi(e,n){let r=oe(),s=oe();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new ql(e,n.fromCache,r,s)}}/**
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
 */class e0{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class t0{constructor(){this.Ki=!1,this.$i=!1,this.Ui=100,this.Wi=function(){return iE()?8:qw(ze())>0?6:4}()}initialize(e,n){this.Gi=e,this.indexManager=n,this.Ki=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.zi(e,n).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.ji(e,n,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new e0;return this.Hi(e,n,o).next(a=>{if(i.result=a,this.$i)return this.Ji(e,n,o,a.size)})}).next(()=>i.result)}Ji(e,n,r,s){return r.documentReadCount<this.Ui?(os()<=ne.DEBUG&&M("QueryEngine","SDK will not create cache indexes for query:",ur(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Ui,"documents"),I.resolve()):(os()<=ne.DEBUG&&M("QueryEngine","Query:",ur(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.Wi*s?(os()<=ne.DEBUG&&M("QueryEngine","The SDK decides to create cache indexes for query:",ur(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Mt(n))):I.resolve())}zi(e,n){if(Vh(n))return I.resolve(null);let r=Mt(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=wc(n,null,"F"),r=Mt(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=oe(...i);return this.Gi.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(c=>{const l=this.Yi(n,a);return this.Zi(n,l,o,c.readTime)?this.zi(e,wc(n,null,"F")):this.Xi(e,l,n,c)}))})))}ji(e,n,r,s){return Vh(n)||s.isEqual(Q.min())?I.resolve(null):this.Gi.getDocuments(e,r).next(i=>{const o=this.Yi(n,i);return this.Zi(n,o,r,s)?I.resolve(null):(os()<=ne.DEBUG&&M("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),ur(n)),this.Xi(e,o,n,Fw(s,-1)).next(a=>a))})}Yi(e,n){let r=new He(Ag(e));return n.forEach((s,i)=>{ea(e,i)&&(r=r.add(i))}),r}Zi(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Hi(e,n,r){return os()<=ne.DEBUG&&M("QueryEngine","Using full collection scan to execute query:",ur(n)),this.Gi.getDocumentsMatchingQuery(e,n,Pn.min(),r)}Xi(e,n,r,s){return this.Gi.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
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
 */class n0{constructor(e,n,r,s){this.persistence=e,this.es=n,this.serializer=s,this.ts=new Pe(he),this.ns=new Zr(i=>xl(i),Ml),this.rs=new Map,this.ss=e.getRemoteDocumentCache(),this.qr=e.getTargetCache(),this.Kr=e.getBundleCache(),this.os(r)}os(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new zT(this.ss,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ss.setIndexManager(this.indexManager),this.es.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.ts))}}function r0(t,e,n,r){return new n0(t,e,n,r)}async function zg(t,e){const n=ae(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.os(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],a=[];let c=oe();for(const l of s){o.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}for(const l of i){a.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}return n.localDocuments.getDocuments(r,c).next(l=>({_s:l,removedBatchIds:o,addedBatchIds:a}))})})}function Kg(t){const e=ae(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.qr.getLastRemoteSnapshotVersion(n))}function s0(t,e){const n=ae(t),r=e.snapshotVersion;let s=n.ts;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.ss.newChangeBuffer({trackRemovals:!0});s=n.ts;const a=[];e.targetChanges.forEach((u,h)=>{const d=s.get(h);if(!d)return;a.push(n.qr.removeMatchingKeys(i,u.removedDocuments,h).next(()=>n.qr.addMatchingKeys(i,u.addedDocuments,h)));let g=d.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(h)!==null?g=g.withResumeToken(nt.EMPTY_BYTE_STRING,Q.min()).withLastLimboFreeSnapshotVersion(Q.min()):u.resumeToken.approximateByteSize()>0&&(g=g.withResumeToken(u.resumeToken,r)),s=s.insert(h,g),function(T,P,b){return T.resumeToken.approximateByteSize()===0||P.snapshotVersion.toMicroseconds()-T.snapshotVersion.toMicroseconds()>=3e8?!0:b.addedDocuments.size+b.modifiedDocuments.size+b.removedDocuments.size>0}(d,g,u)&&a.push(n.qr.updateTargetData(i,g))});let c=bn(),l=oe();if(e.documentUpdates.forEach(u=>{e.resolvedLimboDocuments.has(u)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,u))}),a.push(i0(i,o,e.documentUpdates).next(u=>{c=u.us,l=u.cs})),!r.isEqual(Q.min())){const u=n.qr.getLastRemoteSnapshotVersion(i).next(h=>n.qr.setTargetsMetadata(i,i.currentSequenceNumber,r));a.push(u)}return I.waitFor(a).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,c,l)).next(()=>c)}).then(i=>(n.ts=s,i))}function i0(t,e,n){let r=oe(),s=oe();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let o=bn();return n.forEach((a,c)=>{const l=i.get(a);c.isFoundDocument()!==l.isFoundDocument()&&(s=s.add(a)),c.isNoDocument()&&c.version.isEqual(Q.min())?(e.removeEntry(a,c.readTime),o=o.insert(a,c)):!l.isValidDocument()||c.version.compareTo(l.version)>0||c.version.compareTo(l.version)===0&&l.hasPendingWrites?(e.addEntry(c),o=o.insert(a,c)):M("LocalStore","Ignoring outdated watch update for ",a,". Current version:",l.version," Watch version:",c.version)}),{us:o,cs:s}})}function o0(t,e){const n=ae(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.qr.getTargetData(r,e).next(i=>i?(s=i,I.resolve(s)):n.qr.allocateTargetId(r).next(o=>(s=new vn(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.qr.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.ts.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.ts=n.ts.insert(r.targetId,r),n.ns.set(e,r.targetId)),r})}async function Cc(t,e,n){const r=ae(t),s=r.ts.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!ui(o))throw o;M("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.ts=r.ts.remove(e),r.ns.delete(s.target)}function zh(t,e,n){const r=ae(t);let s=Q.min(),i=oe();return r.persistence.runTransaction("Execute query","readwrite",o=>function(c,l,u){const h=ae(c),d=h.ns.get(u);return d!==void 0?I.resolve(h.ts.get(d)):h.qr.getTargetData(l,u)}(r,o,Mt(e)).next(a=>{if(a)return s=a.lastLimboFreeSnapshotVersion,r.qr.getMatchingKeysForTargetId(o,a.targetId).next(c=>{i=c})}).next(()=>r.es.getDocumentsMatchingQuery(o,e,n?s:Q.min(),n?i:oe())).next(a=>(a0(r,oT(e),a),{documents:a,ls:i})))}function a0(t,e,n){let r=t.rs.get(e)||Q.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.rs.set(e,r)}class Kh{constructor(){this.activeTargetIds=dT()}ds(e){this.activeTargetIds=this.activeTargetIds.add(e)}As(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Es(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class c0{constructor(){this.eo=new Kh,this.no={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.eo.ds(e),this.no[e]||"not-current"}updateQueryState(e,n,r){this.no[e]=n}removeLocalQueryTarget(e){this.eo.As(e)}isLocalQueryTarget(e){return this.eo.activeTargetIds.has(e)}clearQueryState(e){delete this.no[e]}getAllActiveQueryTargets(){return this.eo.activeTargetIds}isActiveQueryTarget(e){return this.eo.activeTargetIds.has(e)}start(){return this.eo=new Kh,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class l0{ro(e){}shutdown(){}}/**
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
 */class Gh{constructor(){this.io=()=>this.so(),this.oo=()=>this._o(),this.ao=[],this.uo()}ro(e){this.ao.push(e)}shutdown(){window.removeEventListener("online",this.io),window.removeEventListener("offline",this.oo)}uo(){window.addEventListener("online",this.io),window.addEventListener("offline",this.oo)}so(){M("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ao)e(0)}_o(){M("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ao)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Vi=null;function Va(){return Vi===null?Vi=function(){return 268435456+Math.round(2147483648*Math.random())}():Vi++,"0x"+Vi.toString(16)}/**
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
 */const u0={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class h0{constructor(e){this.co=e.co,this.lo=e.lo}ho(e){this.Po=e}Io(e){this.To=e}Eo(e){this.Ao=e}onMessage(e){this.Ro=e}close(){this.lo()}send(e){this.co(e)}Vo(){this.Po()}mo(){this.To()}fo(e){this.Ao(e)}po(e){this.Ro(e)}}/**
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
 */const We="WebChannelConnection";class d0 extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.yo=r+"://"+n.host,this.wo=`projects/${s}/databases/${i}`,this.So=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${i}`}get bo(){return!1}Do(n,r,s,i,o){const a=Va(),c=this.Co(n,r.toUriEncodedString());M("RestConnection",`Sending RPC '${n}' ${a}:`,c,s);const l={"google-cloud-resource-prefix":this.wo,"x-goog-request-params":this.So};return this.vo(l,i,o),this.Fo(n,c,l,s).then(u=>(M("RestConnection",`Received RPC '${n}' ${a}: `,u),u),u=>{throw Lr("RestConnection",`RPC '${n}' ${a} failed with error: `,u,"url: ",c,"request:",s),u})}Mo(n,r,s,i,o,a){return this.Do(n,r,s,i,o)}vo(n,r,s){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Yr}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((i,o)=>n[o]=i),s&&s.headers.forEach((i,o)=>n[o]=i)}Co(n,r){const s=u0[n];return`${this.yo}/v1/${r}:${s}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Fo(e,n,r,s){const i=Va();return new Promise((o,a)=>{const c=new Sw;c.setWithCredentials(!0),c.listenOnce(Tw.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case Oa.NO_ERROR:const u=c.getResponseJson();M(We,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(u)),o(u);break;case Oa.TIMEOUT:M(We,`RPC '${e}' ${i} timed out`),a(new L(R.DEADLINE_EXCEEDED,"Request time out"));break;case Oa.HTTP_ERROR:const h=c.getStatus();if(M(We,`RPC '${e}' ${i} failed with status:`,h,"response text:",c.getResponseText()),h>0){let d=c.getResponseJson();Array.isArray(d)&&(d=d[0]);const g=d==null?void 0:d.error;if(g&&g.status&&g.message){const E=function(P){const b=P.toLowerCase().replace(/_/g,"-");return Object.values(R).indexOf(b)>=0?b:R.UNKNOWN}(g.status);a(new L(E,g.message))}else a(new L(R.UNKNOWN,"Server responded with status "+c.getStatus()))}else a(new L(R.UNAVAILABLE,"Connection failed."));break;default:J()}}finally{M(We,`RPC '${e}' ${i} completed.`)}});const l=JSON.stringify(s);M(We,`RPC '${e}' ${i} sending request:`,s),c.send(n,"POST",l,r,15)})}xo(e,n,r){const s=Va(),i=[this.yo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=Iw(),a=ww(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},l=this.longPollingOptions.timeoutSeconds;l!==void 0&&(c.longPollingTimeout=Math.round(1e3*l)),this.useFetchStreams&&(c.xmlHttpFactory=new Rw({})),this.vo(c.initMessageHeaders,n,r),c.encodeInitMessageHeaders=!0;const u=i.join("");M(We,`Creating RPC '${e}' stream ${s}: ${u}`,c);const h=o.createWebChannel(u,c);let d=!1,g=!1;const E=new h0({co:P=>{g?M(We,`Not sending because RPC '${e}' stream ${s} is closed:`,P):(d||(M(We,`Opening RPC '${e}' stream ${s} transport.`),h.open(),d=!0),M(We,`RPC '${e}' stream ${s} sending:`,P),h.send(P))},lo:()=>h.close()}),T=(P,b,D)=>{P.listen(b,F=>{try{D(F)}catch(z){setTimeout(()=>{throw z},0)}})};return T(h,Oi.EventType.OPEN,()=>{g||(M(We,`RPC '${e}' stream ${s} transport opened.`),E.Vo())}),T(h,Oi.EventType.CLOSE,()=>{g||(g=!0,M(We,`RPC '${e}' stream ${s} transport closed`),E.fo())}),T(h,Oi.EventType.ERROR,P=>{g||(g=!0,Lr(We,`RPC '${e}' stream ${s} transport errored:`,P),E.fo(new L(R.UNAVAILABLE,"The operation could not be completed")))}),T(h,Oi.EventType.MESSAGE,P=>{var b;if(!g){const D=P.data[0];Oe(!!D);const F=D,z=F.error||((b=F[0])===null||b===void 0?void 0:b.error);if(z){M(We,`RPC '${e}' stream ${s} received error:`,z);const Z=z.status;let $=function(X){const ye=Ce[X];if(ye!==void 0)return Vg(ye)}(Z),de=z.message;$===void 0&&($=R.INTERNAL,de="Unknown error status: "+Z+" with message "+z.message),g=!0,E.fo(new L($,de)),h.close()}else M(We,`RPC '${e}' stream ${s} received:`,D),E.po(D)}}),T(a,Aw.STAT_EVENT,P=>{P.stat===Th.PROXY?M(We,`RPC '${e}' stream ${s} detected buffering proxy`):P.stat===Th.NOPROXY&&M(We,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{E.mo()},0),E}}function xa(){return typeof document<"u"?document:null}/**
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
 */function sa(t){return new bT(t,!0)}/**
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
 */class Gg{constructor(e,n,r=1e3,s=1.5,i=6e4){this.si=e,this.timerId=n,this.Oo=r,this.No=s,this.Lo=i,this.Bo=0,this.ko=null,this.qo=Date.now(),this.reset()}reset(){this.Bo=0}Qo(){this.Bo=this.Lo}Ko(e){this.cancel();const n=Math.floor(this.Bo+this.$o()),r=Math.max(0,Date.now()-this.qo),s=Math.max(0,n-r);s>0&&M("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Bo} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.ko=this.si.enqueueAfterDelay(this.timerId,s,()=>(this.qo=Date.now(),e())),this.Bo*=this.No,this.Bo<this.Oo&&(this.Bo=this.Oo),this.Bo>this.Lo&&(this.Bo=this.Lo)}Uo(){this.ko!==null&&(this.ko.skipDelay(),this.ko=null)}cancel(){this.ko!==null&&(this.ko.cancel(),this.ko=null)}$o(){return(Math.random()-.5)*this.Bo}}/**
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
 */class f0{constructor(e,n,r,s,i,o,a,c){this.si=e,this.Wo=r,this.Go=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.zo=0,this.jo=null,this.Ho=null,this.stream=null,this.Jo=new Gg(e,n)}Yo(){return this.state===1||this.state===5||this.Zo()}Zo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Xo()}async stop(){this.Yo()&&await this.close(0)}e_(){this.state=0,this.Jo.reset()}t_(){this.Zo()&&this.jo===null&&(this.jo=this.si.enqueueAfterDelay(this.Wo,6e4,()=>this.n_()))}r_(e){this.i_(),this.stream.send(e)}async n_(){if(this.Zo())return this.close(0)}i_(){this.jo&&(this.jo.cancel(),this.jo=null)}s_(){this.Ho&&(this.Ho.cancel(),this.Ho=null)}async close(e,n){this.i_(),this.s_(),this.Jo.cancel(),this.zo++,e!==4?this.Jo.reset():n&&n.code===R.RESOURCE_EXHAUSTED?(Xt(n.toString()),Xt("Using maximum backoff delay to prevent overloading the backend."),this.Jo.Qo()):n&&n.code===R.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.o_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Eo(n)}o_(){}auth(){this.state=1;const e=this.__(this.zo),n=this.zo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.zo===n&&this.a_(r,s)},r=>{e(()=>{const s=new L(R.UNKNOWN,"Fetching auth token failed: "+r.message);return this.u_(s)})})}a_(e,n){const r=this.__(this.zo);this.stream=this.c_(e,n),this.stream.ho(()=>{r(()=>this.listener.ho())}),this.stream.Io(()=>{r(()=>(this.state=2,this.Ho=this.si.enqueueAfterDelay(this.Go,1e4,()=>(this.Zo()&&(this.state=3),Promise.resolve())),this.listener.Io()))}),this.stream.Eo(s=>{r(()=>this.u_(s))}),this.stream.onMessage(s=>{r(()=>this.onMessage(s))})}Xo(){this.state=5,this.Jo.Ko(async()=>{this.state=0,this.start()})}u_(e){return M("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}__(e){return n=>{this.si.enqueueAndForget(()=>this.zo===e?n():(M("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class p0 extends f0{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}c_(e,n){return this.connection.xo("Listen",e,n)}onMessage(e){this.Jo.reset();const n=OT(this.serializer,e),r=function(i){if(!("targetChange"in i))return Q.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?Q.min():o.readTime?Sr(o.readTime):Q.min()}(e);return this.listener.l_(n,r)}h_(e){const n={};n.database=Hh(this.serializer),n.addTarget=function(i,o){let a;const c=o.target;if(a=Ec(c)?{documents:NT(i,c)}:{query:DT(i,c)._t},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=Lg(i,o.resumeToken);const l=Rc(i,o.expectedCount);l!==null&&(a.expectedCount=l)}else if(o.snapshotVersion.compareTo(Q.min())>0){a.readTime=Sc(i,o.snapshotVersion.toTimestamp());const l=Rc(i,o.expectedCount);l!==null&&(a.expectedCount=l)}return a}(this.serializer,e);const r=xT(this.serializer,e);r&&(n.labels=r),this.r_(n)}P_(e){const n={};n.database=Hh(this.serializer),n.removeTarget=e,this.r_(n)}}/**
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
 */class g0 extends class{}{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.V_=!1}m_(){if(this.V_)throw new L(R.FAILED_PRECONDITION,"The client has already been terminated.")}Do(e,n,r,s){return this.m_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Do(e,Pc(n,r),s,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===R.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new L(R.UNKNOWN,i.toString())})}Mo(e,n,r,s,i){return this.m_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.Mo(e,Pc(n,r),s,o,a,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===R.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new L(R.UNKNOWN,o.toString())})}terminate(){this.V_=!0,this.connection.terminate()}}class m0{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.g_=0,this.p_=null,this.y_=!0}w_(){this.g_===0&&(this.S_("Unknown"),this.p_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.p_=null,this.b_("Backend didn't respond within 10 seconds."),this.S_("Offline"),Promise.resolve())))}D_(e){this.state==="Online"?this.S_("Unknown"):(this.g_++,this.g_>=1&&(this.C_(),this.b_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.S_("Offline")))}set(e){this.C_(),this.g_=0,e==="Online"&&(this.y_=!1),this.S_(e)}S_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}b_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.y_?(Xt(n),this.y_=!1):M("OnlineStateTracker",n)}C_(){this.p_!==null&&(this.p_.cancel(),this.p_=null)}}/**
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
 */class _0{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.v_=[],this.F_=new Map,this.M_=new Set,this.x_=[],this.O_=i,this.O_.ro(o=>{r.enqueueAndForget(async()=>{pi(this)&&(M("RemoteStore","Restarting streams for network reachability change."),await async function(c){const l=ae(c);l.M_.add(4),await fi(l),l.N_.set("Unknown"),l.M_.delete(4),await ia(l)}(this))})}),this.N_=new m0(r,s)}}async function ia(t){if(pi(t))for(const e of t.x_)await e(!0)}async function fi(t){for(const e of t.x_)await e(!1)}function Wg(t,e){const n=ae(t);n.F_.has(e.targetId)||(n.F_.set(e.targetId,e),Gl(n)?Kl(n):es(n).Zo()&&zl(n,e))}function Hl(t,e){const n=ae(t),r=es(n);n.F_.delete(e),r.Zo()&&Qg(n,e),n.F_.size===0&&(r.Zo()?r.t_():pi(n)&&n.N_.set("Unknown"))}function zl(t,e){if(t.L_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Q.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}es(t).h_(e)}function Qg(t,e){t.L_.xe(e),es(t).P_(e)}function Kl(t){t.L_=new RT({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>t.F_.get(e)||null,tt:()=>t.datastore.serializer.databaseId}),es(t).start(),t.N_.w_()}function Gl(t){return pi(t)&&!es(t).Yo()&&t.F_.size>0}function pi(t){return ae(t).M_.size===0}function Jg(t){t.L_=void 0}async function y0(t){t.N_.set("Online")}async function v0(t){t.F_.forEach((e,n)=>{zl(t,e)})}async function E0(t,e){Jg(t),Gl(t)?(t.N_.D_(e),Kl(t)):t.N_.set("Unknown")}async function I0(t,e,n){if(t.N_.set("Online"),e instanceof Mg&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const a of i.targetIds)s.F_.has(a)&&(await s.remoteSyncer.rejectListen(a,o),s.F_.delete(a),s.L_.removeTarget(a))}(t,e)}catch(r){M("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Wh(t,r)}else if(e instanceof ji?t.L_.Ke(e):e instanceof xg?t.L_.He(e):t.L_.We(e),!n.isEqual(Q.min()))try{const r=await Kg(t.localStore);n.compareTo(r)>=0&&await function(i,o){const a=i.L_.rt(o);return a.targetChanges.forEach((c,l)=>{if(c.resumeToken.approximateByteSize()>0){const u=i.F_.get(l);u&&i.F_.set(l,u.withResumeToken(c.resumeToken,o))}}),a.targetMismatches.forEach((c,l)=>{const u=i.F_.get(c);if(!u)return;i.F_.set(c,u.withResumeToken(nt.EMPTY_BYTE_STRING,u.snapshotVersion)),Qg(i,c);const h=new vn(u.target,c,l,u.sequenceNumber);zl(i,h)}),i.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(r){M("RemoteStore","Failed to raise snapshot:",r),await Wh(t,r)}}async function Wh(t,e,n){if(!ui(e))throw e;t.M_.add(1),await fi(t),t.N_.set("Offline"),n||(n=()=>Kg(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{M("RemoteStore","Retrying IndexedDB access"),await n(),t.M_.delete(1),await ia(t)})}async function Qh(t,e){const n=ae(t);n.asyncQueue.verifyOperationInProgress(),M("RemoteStore","RemoteStore received new credentials");const r=pi(n);n.M_.add(3),await fi(n),r&&n.N_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.M_.delete(3),await ia(n)}async function w0(t,e){const n=ae(t);e?(n.M_.delete(2),await ia(n)):e||(n.M_.add(2),await fi(n),n.N_.set("Unknown"))}function es(t){return t.B_||(t.B_=function(n,r,s){const i=ae(n);return i.m_(),new p0(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{ho:y0.bind(null,t),Io:v0.bind(null,t),Eo:E0.bind(null,t),l_:I0.bind(null,t)}),t.x_.push(async e=>{e?(t.B_.e_(),Gl(t)?Kl(t):t.N_.set("Unknown")):(await t.B_.stop(),Jg(t))})),t.B_}/**
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
 */class Wl{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new Rr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,a=new Wl(e,n,o,s,i);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new L(R.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Yg(t,e){if(Xt("AsyncQueue",`${e}: ${t}`),ui(t))return new L(R.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class Pr{constructor(e){this.comparator=e?(n,r)=>e(n,r)||q.comparator(n.key,r.key):(n,r)=>q.comparator(n.key,r.key),this.keyedMap=ds(),this.sortedSet=new Pe(this.comparator)}static emptySet(e){return new Pr(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Pr)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Pr;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class Jh{constructor(){this.q_=new Pe(q.comparator)}track(e){const n=e.doc.key,r=this.q_.get(n);r?e.type!==0&&r.type===3?this.q_=this.q_.insert(n,e):e.type===3&&r.type!==1?this.q_=this.q_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.q_=this.q_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.q_=this.q_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.q_=this.q_.remove(n):e.type===1&&r.type===2?this.q_=this.q_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.q_=this.q_.insert(n,{type:2,doc:e.doc}):J():this.q_=this.q_.insert(n,e)}Q_(){const e=[];return this.q_.inorderTraversal((n,r)=>{e.push(r)}),e}}class jr{constructor(e,n,r,s,i,o,a,c,l){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=l}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new jr(e,n,Pr.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Zo(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
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
 */class T0{constructor(){this.K_=void 0,this.U_=[]}W_(){return this.U_.some(e=>e.G_())}}class A0{constructor(){this.queries=new Zr(e=>Tg(e),Zo),this.onlineState="Unknown",this.z_=new Set}}async function R0(t,e){const n=ae(t);let r=3;const s=e.query;let i=n.queries.get(s);i?!i.W_()&&e.G_()&&(r=2):(i=new T0,r=e.G_()?0:1);try{switch(r){case 0:i.K_=await n.onListen(s,!0);break;case 1:i.K_=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(o){const a=Yg(o,`Initialization of query '${ur(e.query)}' failed`);return void e.onError(a)}n.queries.set(s,i),i.U_.push(e),e.j_(n.onlineState),i.K_&&e.H_(i.K_)&&Ql(n)}async function S0(t,e){const n=ae(t),r=e.query;let s=3;const i=n.queries.get(r);if(i){const o=i.U_.indexOf(e);o>=0&&(i.U_.splice(o,1),i.U_.length===0?s=e.G_()?0:1:!i.W_()&&e.G_()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function P0(t,e){const n=ae(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const a of o.U_)a.H_(s)&&(r=!0);o.K_=s}}r&&Ql(n)}function C0(t,e,n){const r=ae(t),s=r.queries.get(e);if(s)for(const i of s.U_)i.onError(n);r.queries.delete(e)}function Ql(t){t.z_.forEach(e=>{e.next()})}var bc,Yh;(Yh=bc||(bc={})).J_="default",Yh.Cache="cache";class b0{constructor(e,n,r){this.query=e,this.Y_=n,this.Z_=!1,this.X_=null,this.onlineState="Unknown",this.options=r||{}}H_(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new jr(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Z_?this.ea(e)&&(this.Y_.next(e),n=!0):this.ta(e,this.onlineState)&&(this.na(e),n=!0),this.X_=e,n}onError(e){this.Y_.error(e)}j_(e){this.onlineState=e;let n=!1;return this.X_&&!this.Z_&&this.ta(this.X_,e)&&(this.na(this.X_),n=!0),n}ta(e,n){if(!e.fromCache||!this.G_())return!0;const r=n!=="Offline";return(!this.options.ra||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}ea(e){if(e.docChanges.length>0)return!0;const n=this.X_&&this.X_.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}na(e){e=jr.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Z_=!0,this.Y_.next(e)}G_(){return this.options.source!==bc.Cache}}/**
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
 */class Xg{constructor(e){this.key=e}}class Zg{constructor(e){this.key=e}}class k0{constructor(e,n){this.query=e,this.la=n,this.ha=null,this.hasCachedResults=!1,this.current=!1,this.Pa=oe(),this.mutatedKeys=oe(),this.Ia=Ag(e),this.Ta=new Pr(this.Ia)}get Ea(){return this.la}da(e,n){const r=n?n.Aa:new Jh,s=n?n.Ta:this.Ta;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,a=!1;const c=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,l=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((u,h)=>{const d=s.get(u),g=ea(this.query,h)?h:null,E=!!d&&this.mutatedKeys.has(d.key),T=!!g&&(g.hasLocalMutations||this.mutatedKeys.has(g.key)&&g.hasCommittedMutations);let P=!1;d&&g?d.data.isEqual(g.data)?E!==T&&(r.track({type:3,doc:g}),P=!0):this.Ra(d,g)||(r.track({type:2,doc:g}),P=!0,(c&&this.Ia(g,c)>0||l&&this.Ia(g,l)<0)&&(a=!0)):!d&&g?(r.track({type:0,doc:g}),P=!0):d&&!g&&(r.track({type:1,doc:d}),P=!0,(c||l)&&(a=!0)),P&&(g?(o=o.add(g),i=T?i.add(u):i.delete(u)):(o=o.delete(u),i=i.delete(u)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const u=this.query.limitType==="F"?o.last():o.first();o=o.delete(u.key),i=i.delete(u.key),r.track({type:1,doc:u})}return{Ta:o,Aa:r,Zi:a,mutatedKeys:i}}Ra(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const i=this.Ta;this.Ta=e.Ta,this.mutatedKeys=e.mutatedKeys;const o=e.Aa.Q_();o.sort((u,h)=>function(g,E){const T=P=>{switch(P){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return J()}};return T(g)-T(E)}(u.type,h.type)||this.Ia(u.doc,h.doc)),this.Va(r),s=s!=null&&s;const a=n&&!s?this.ma():[],c=this.Pa.size===0&&this.current&&!s?1:0,l=c!==this.ha;return this.ha=c,o.length!==0||l?{snapshot:new jr(this.query,e.Ta,i,o,e.mutatedKeys,c===0,l,!1,!!r&&r.resumeToken.approximateByteSize()>0),fa:a}:{fa:a}}j_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ta:this.Ta,Aa:new Jh,mutatedKeys:this.mutatedKeys,Zi:!1},!1)):{fa:[]}}ga(e){return!this.la.has(e)&&!!this.Ta.has(e)&&!this.Ta.get(e).hasLocalMutations}Va(e){e&&(e.addedDocuments.forEach(n=>this.la=this.la.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.la=this.la.delete(n)),this.current=e.current)}ma(){if(!this.current)return[];const e=this.Pa;this.Pa=oe(),this.Ta.forEach(r=>{this.ga(r.key)&&(this.Pa=this.Pa.add(r.key))});const n=[];return e.forEach(r=>{this.Pa.has(r)||n.push(new Zg(r))}),this.Pa.forEach(r=>{e.has(r)||n.push(new Xg(r))}),n}pa(e){this.la=e.ls,this.Pa=oe();const n=this.da(e.documents);return this.applyChanges(n,!0)}ya(){return jr.fromInitialDocuments(this.query,this.Ta,this.mutatedKeys,this.ha===0,this.hasCachedResults)}}class O0{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class N0{constructor(e){this.key=e,this.wa=!1}}class D0{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Sa={},this.ba=new Zr(a=>Tg(a),Zo),this.Da=new Map,this.Ca=new Set,this.va=new Pe(q.comparator),this.Fa=new Map,this.Ma=new $l,this.xa={},this.Oa=new Map,this.Na=$r.Nn(),this.onlineState="Unknown",this.La=void 0}get isPrimaryClient(){return this.La===!0}}async function V0(t,e,n=!0){const r=sm(t);let s;const i=r.ba.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.ya()):s=await em(r,e,n,!0),s}async function x0(t,e){const n=sm(t);await em(n,e,!0,!1)}async function em(t,e,n,r){const s=await o0(t.localStore,Mt(e)),i=s.targetId,o=n?t.sharedClientState.addLocalQueryTarget(i):"not-current";let a;return r&&(a=await M0(t,e,i,o==="current",s.resumeToken)),t.isPrimaryClient&&n&&Wg(t.remoteStore,s),a}async function M0(t,e,n,r,s){t.Ba=(h,d,g)=>async function(T,P,b,D){let F=P.view.da(b);F.Zi&&(F=await zh(T.localStore,P.query,!1).then(({documents:de})=>P.view.da(de,F)));const z=D&&D.targetChanges.get(P.targetId),Z=D&&D.targetMismatches.get(P.targetId)!=null,$=P.view.applyChanges(F,T.isPrimaryClient,z,Z);return Zh(T,P.targetId,$.fa),$.snapshot}(t,h,d,g);const i=await zh(t.localStore,e,!0),o=new k0(e,i.ls),a=o.da(i.documents),c=di.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),l=o.applyChanges(a,t.isPrimaryClient,c);Zh(t,n,l.fa);const u=new O0(e,n,o);return t.ba.set(e,u),t.Da.has(n)?t.Da.get(n).push(e):t.Da.set(n,[e]),l.snapshot}async function L0(t,e,n){const r=ae(t),s=r.ba.get(e),i=r.Da.get(s.targetId);if(i.length>1)return r.Da.set(s.targetId,i.filter(o=>!Zo(o,e))),void r.ba.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await Cc(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),n&&Hl(r.remoteStore,s.targetId),kc(r,s.targetId)}).catch(kl)):(kc(r,s.targetId),await Cc(r.localStore,s.targetId,!0))}async function F0(t,e){const n=ae(t),r=n.ba.get(e),s=n.Da.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),Hl(n.remoteStore,r.targetId))}async function tm(t,e){const n=ae(t);try{const r=await s0(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.Fa.get(i);o&&(Oe(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.wa=!0:s.modifiedDocuments.size>0?Oe(o.wa):s.removedDocuments.size>0&&(Oe(o.wa),o.wa=!1))}),await rm(n,r,e)}catch(r){await kl(r)}}function Xh(t,e,n){const r=ae(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.ba.forEach((i,o)=>{const a=o.view.j_(e);a.snapshot&&s.push(a.snapshot)}),function(o,a){const c=ae(o);c.onlineState=a;let l=!1;c.queries.forEach((u,h)=>{for(const d of h.U_)d.j_(a)&&(l=!0)}),l&&Ql(c)}(r.eventManager,e),s.length&&r.Sa.l_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function U0(t,e,n){const r=ae(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Fa.get(e),i=s&&s.key;if(i){let o=new Pe(q.comparator);o=o.insert(i,Je.newNoDocument(i,Q.min()));const a=oe().add(i),c=new ra(Q.min(),new Map,new Pe(he),o,a);await tm(r,c),r.va=r.va.remove(i),r.Fa.delete(e),Jl(r)}else await Cc(r.localStore,e,!1).then(()=>kc(r,e,n)).catch(kl)}function kc(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Da.get(e))t.ba.delete(r),n&&t.Sa.ka(r,n);t.Da.delete(e),t.isPrimaryClient&&t.Ma.Rr(e).forEach(r=>{t.Ma.containsKey(r)||nm(t,r)})}function nm(t,e){t.Ca.delete(e.path.canonicalString());const n=t.va.get(e);n!==null&&(Hl(t.remoteStore,n),t.va=t.va.remove(e),t.Fa.delete(n),Jl(t))}function Zh(t,e,n){for(const r of n)r instanceof Xg?(t.Ma.addReference(r.key,e),B0(t,r)):r instanceof Zg?(M("SyncEngine","Document no longer in limbo: "+r.key),t.Ma.removeReference(r.key,e),t.Ma.containsKey(r.key)||nm(t,r.key)):J()}function B0(t,e){const n=e.key,r=n.path.canonicalString();t.va.get(n)||t.Ca.has(r)||(M("SyncEngine","New document in limbo: "+n),t.Ca.add(r),Jl(t))}function Jl(t){for(;t.Ca.size>0&&t.va.size<t.maxConcurrentLimboResolutions;){const e=t.Ca.values().next().value;t.Ca.delete(e);const n=new q(Ae.fromString(e)),r=t.Na.next();t.Fa.set(r,new N0(n)),t.va=t.va.insert(n,r),Wg(t.remoteStore,new vn(Mt(Ll(n.path)),r,"TargetPurposeLimboResolution",Ol.oe))}}async function rm(t,e,n){const r=ae(t),s=[],i=[],o=[];r.ba.isEmpty()||(r.ba.forEach((a,c)=>{o.push(r.Ba(c,e,n).then(l=>{if((l||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(c.targetId,l!=null&&l.fromCache?"not-current":"current"),l){s.push(l);const u=ql.Qi(c.targetId,l);i.push(u)}}))}),await Promise.all(o),r.Sa.l_(s),await async function(c,l){const u=ae(c);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",h=>I.forEach(l,d=>I.forEach(d.ki,g=>u.persistence.referenceDelegate.addReference(h,d.targetId,g)).next(()=>I.forEach(d.qi,g=>u.persistence.referenceDelegate.removeReference(h,d.targetId,g)))))}catch(h){if(!ui(h))throw h;M("LocalStore","Failed to update sequence numbers: "+h)}for(const h of l){const d=h.targetId;if(!h.fromCache){const g=u.ts.get(d),E=g.snapshotVersion,T=g.withLastLimboFreeSnapshotVersion(E);u.ts=u.ts.insert(d,T)}}}(r.localStore,i))}async function $0(t,e){const n=ae(t);if(!n.currentUser.isEqual(e)){M("SyncEngine","User change. New user:",e.toKey());const r=await zg(n.localStore,e);n.currentUser=e,function(i,o){i.Oa.forEach(a=>{a.forEach(c=>{c.reject(new L(R.CANCELLED,o))})}),i.Oa.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await rm(n,r._s)}}function j0(t,e){const n=ae(t),r=n.Fa.get(e);if(r&&r.wa)return oe().add(r.key);{let s=oe();const i=n.Da.get(e);if(!i)return s;for(const o of i){const a=n.ba.get(o);s=s.unionWith(a.view.Ea)}return s}}function sm(t){const e=ae(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=tm.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=j0.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=U0.bind(null,e),e.Sa.l_=P0.bind(null,e.eventManager),e.Sa.ka=C0.bind(null,e.eventManager),e}class ed{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=sa(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return r0(this.persistence,new t0,e.initialUser,this.serializer)}createPersistence(e){return new XT(jl.jr,this.serializer)}createSharedClientState(e){return new c0}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class q0{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Xh(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=$0.bind(null,this.syncEngine),await w0(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new A0}()}createDatastore(e){const n=sa(e.databaseInfo.databaseId),r=function(i){return new d0(i)}(e.databaseInfo);return function(i,o,a,c){return new g0(i,o,a,c)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,s,i,o,a){return new _0(r,s,i,o,a)}(this.localStore,this.datastore,e.asyncQueue,n=>Xh(this.syncEngine,n,0),function(){return Gh.D()?new Gh:new l0}())}createSyncEngine(e,n){return function(s,i,o,a,c,l,u){const h=new D0(s,i,o,a,c,l);return u&&(h.La=!0),h}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e;await async function(r){const s=ae(r);M("RemoteStore","RemoteStore shutting down."),s.M_.add(5),await fi(s),s.O_.shutdown(),s.N_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate()}}/**
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
 */class H0{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Ka(this.observer.next,e)}error(e){this.observer.error?this.Ka(this.observer.error,e):Xt("Uncaught Error in snapshot listener:",e.toString())}$a(){this.muted=!0}Ka(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class z0{constructor(e,n,r,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=Qe.UNAUTHENTICATED,this.clientId=Mw.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async i=>{M("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(r,i=>(M("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new L(R.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Rr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Yg(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Ma(t,e){t.asyncQueue.verifyOperationInProgress(),M("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await zg(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function td(t,e){t.asyncQueue.verifyOperationInProgress();const n=await G0(t);M("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>Qh(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,s)=>Qh(e.remoteStore,s)),t._onlineComponents=e}function K0(t){return t.name==="FirebaseError"?t.code===R.FAILED_PRECONDITION||t.code===R.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function G0(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){M("FirestoreClient","Using user provided OfflineComponentProvider");try{await Ma(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!K0(n))throw n;Lr("Error using user provided cache. Falling back to memory cache: "+n),await Ma(t,new ed)}}else M("FirestoreClient","Using default OfflineComponentProvider"),await Ma(t,new ed);return t._offlineComponents}async function W0(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(M("FirestoreClient","Using user provided OnlineComponentProvider"),await td(t,t._uninitializedComponentsProvider._online)):(M("FirestoreClient","Using default OnlineComponentProvider"),await td(t,new q0))),t._onlineComponents}async function nd(t){const e=await W0(t),n=e.eventManager;return n.onListen=V0.bind(null,e.syncEngine),n.onUnlisten=L0.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=x0.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=F0.bind(null,e.syncEngine),n}/**
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
 */function im(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const rd=new Map;function Q0(t,e,n,r){if(e===!0&&r===!0)throw new L(R.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function sd(t){if(q.isDocumentKey(t))throw new L(R.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function oa(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":J()}function qi(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new L(R.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=oa(t);throw new L(R.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */class id{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new L(R.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new L(R.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}Q0("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=im((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new L(R.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new L(R.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new L(R.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Yl{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new id({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new L(R.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new L(R.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new id(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new Cw;switch(r.type){case"firstParty":return new Nw(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new L(R.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=rd.get(n);r&&(M("ComponentProvider","Removing Datastore"),rd.delete(n),r.terminate())}(this),Promise.resolve()}}function J0(t,e,n,r={}){var s;const i=(t=qi(t,Yl))._getSettings(),o=`${e}:${n}`;if(i.host!=="firestore.googleapis.com"&&i.host!==o&&Lr("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},i),{host:o,ssl:!1})),r.mockUserToken){let a,c;if(typeof r.mockUserToken=="string")a=r.mockUserToken,c=Qe.MOCK_USER;else{a=Zv(r.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const l=r.mockUserToken.sub||r.mockUserToken.user_id;if(!l)throw new L(R.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");c=new Qe(l)}t._authCredentials=new bw(new fg(a,c))}}/**
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
 */class sr{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new sr(this.firestore,e,this._query)}}class jt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Cr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new jt(this.firestore,e,this._key)}}class Cr extends sr{constructor(e,n,r){super(e,n,Ll(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new jt(this.firestore,null,new q(e))}withConverter(e){return new Cr(this.firestore,e,this._path)}}function Y0(t,e,...n){if(t=wt(t),t instanceof Yl){const r=Ae.fromString(e,...n);return sd(r),new Cr(t,null,r)}{if(!(t instanceof jt||t instanceof Cr))throw new L(R.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ae.fromString(e,...n));return sd(r),new Cr(t.firestore,null,r)}}/**
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
 */class X0{constructor(){this.iu=Promise.resolve(),this.su=[],this.ou=!1,this._u=[],this.au=null,this.uu=!1,this.cu=!1,this.lu=[],this.Jo=new Gg(this,"async_queue_retry"),this.hu=()=>{const n=xa();n&&M("AsyncQueue","Visibility state changed to "+n.visibilityState),this.Jo.Uo()};const e=xa();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.hu)}get isShuttingDown(){return this.ou}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Pu(),this.Iu(e)}enterRestrictedMode(e){if(!this.ou){this.ou=!0,this.cu=e||!1;const n=xa();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.hu)}}enqueue(e){if(this.Pu(),this.ou)return new Promise(()=>{});const n=new Rr;return this.Iu(()=>this.ou&&this.cu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.su.push(e),this.Tu()))}async Tu(){if(this.su.length!==0){try{await this.su[0](),this.su.shift(),this.Jo.reset()}catch(e){if(!ui(e))throw e;M("AsyncQueue","Operation failed with retryable error: "+e)}this.su.length>0&&this.Jo.Ko(()=>this.Tu())}}Iu(e){const n=this.iu.then(()=>(this.uu=!0,e().catch(r=>{this.au=r,this.uu=!1;const s=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw Xt("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.uu=!1,r))));return this.iu=n,n}enqueueAfterDelay(e,n,r){this.Pu(),this.lu.indexOf(e)>-1&&(n=0);const s=Wl.createAndSchedule(this,e,n,r,i=>this.Eu(i));return this._u.push(s),s}Pu(){this.au&&J()}verifyOperationInProgress(){}async du(){let e;do e=this.iu,await e;while(e!==this.iu)}Au(e){for(const n of this._u)if(n.timerId===e)return!0;return!1}Ru(e){return this.du().then(()=>{this._u.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this._u)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.du()})}Vu(e){this.lu.push(e)}Eu(e){const n=this._u.indexOf(e);this._u.splice(n,1)}}function od(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const s=n;for(const i of r)if(i in s&&typeof s[i]=="function")return!0;return!1}(t,["next","error","complete"])}class Oc extends Yl{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=function(){return new X0}(),this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||om(this),this._firestoreClient.terminate()}}function Z0(t,e){const n=typeof t=="object"?t:cp(),r=typeof t=="string"?t:"(default)",s=al(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=Yv("firestore");i&&J0(s,...i)}return s}function eA(t){return t._firestoreClient||om(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function om(t){var e,n,r;const s=t._freezeSettings(),i=function(a,c,l,u){return new Kw(a,c,l,u.host,u.ssl,u.experimentalForceLongPolling,u.experimentalAutoDetectLongPolling,im(u.experimentalLongPollingOptions),u.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,s);t._firestoreClient=new z0(t._authCredentials,t._appCheckCredentials,t._queue,i),!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:s.localCache.kind,_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider})}/**
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
 */class qr{constructor(e){this._byteString=e}static fromBase64String(e){try{return new qr(nt.fromBase64String(e))}catch(n){throw new L(R.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new qr(nt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class am{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new L(R.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Xe(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class cm{constructor(e){this._methodName=e}}/**
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
 */class Xl{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new L(R.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new L(R.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return he(this._lat,e._lat)||he(this._long,e._long)}}/**
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
 */const tA=/^__.*__$/;function lm(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw J()}}class Zl{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.mu(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get fu(){return this.settings.fu}gu(e){return new Zl(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}pu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.gu({path:r,yu:!1});return s.wu(e),s}Su(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.gu({path:r,yu:!1});return s.mu(),s}bu(e){return this.gu({path:void 0,yu:!0})}Du(e){return Nc(e,this.settings.methodName,this.settings.Cu||!1,this.path,this.settings.vu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}mu(){if(this.path)for(let e=0;e<this.path.length;e++)this.wu(this.path.get(e))}wu(e){if(e.length===0)throw this.Du("Document fields must not be empty");if(lm(this.fu)&&tA.test(e))throw this.Du('Document fields cannot begin and end with "__"')}}class nA{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||sa(e)}Fu(e,n,r,s=!1){return new Zl({fu:e,methodName:n,vu:r,path:Xe.emptyPath(),yu:!1,Cu:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function rA(t){const e=t._freezeSettings(),n=sa(t._databaseId);return new nA(t._databaseId,!!e.ignoreUndefinedProperties,n)}function sA(t,e,n,r=!1){return eu(n,t.Fu(r?4:3,e))}function eu(t,e){if(um(t=wt(t)))return oA("Unsupported field value:",e,t),iA(t,e);if(t instanceof cm)return function(r,s){if(!lm(s.fu))throw s.Du(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Du(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.yu&&e.fu!==4)throw e.Du("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const a of r){let c=eu(a,s.bu(o));c==null&&(c={nullValue:"NULL_VALUE"}),i.push(c),o++}return{arrayValue:{values:i}}}(t,e)}return function(r,s){if((r=wt(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return fT(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=xe.fromDate(r);return{timestampValue:Sc(s.serializer,i)}}if(r instanceof xe){const i=new xe(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Sc(s.serializer,i)}}if(r instanceof Xl)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof qr)return{bytesValue:Lg(s.serializer,r._byteString)};if(r instanceof jt){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.Du(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Fg(r.firestore._databaseId||s.databaseId,r._key.path)}}throw s.Du(`Unsupported field value: ${oa(r)}`)}(t,e)}function iA(t,e){const n={};return pg(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):hi(t,(r,s)=>{const i=eu(s,e.pu(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function um(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof xe||t instanceof Xl||t instanceof qr||t instanceof jt||t instanceof cm)}function oA(t,e,n){if(!um(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const r=oa(n);throw r==="an object"?e.Du(t+" a custom object"):e.Du(t+" "+r)}}const aA=new RegExp("[~\\*/\\[\\]]");function cA(t,e,n){if(e.search(aA)>=0)throw Nc(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new am(...e.split("."))._internalPath}catch{throw Nc(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Nc(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${r}`),o&&(c+=` in document ${s}`),c+=")"),new L(R.INVALID_ARGUMENT,a+t+c)}/**
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
 */class hm{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new jt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new lA(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(tu("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class lA extends hm{data(){return super.data()}}function tu(t,e){return typeof e=="string"?cA(t,e):e instanceof am?e._internalPath:e._delegate._internalPath}/**
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
 */function uA(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new L(R.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class nu{}class dm extends nu{}function hA(t,e,...n){let r=[];e instanceof nu&&r.push(e),r=r.concat(n),function(i){const o=i.filter(c=>c instanceof su).length,a=i.filter(c=>c instanceof ru).length;if(o>1||o>0&&a>0)throw new L(R.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)t=s._apply(t);return t}class ru extends dm{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new ru(e,n,r)}_apply(e){const n=this._parse(e);return fm(e._query,n),new sr(e.firestore,e.converter,Ic(e._query,n))}_parse(e){const n=rA(e.firestore);return function(i,o,a,c,l,u,h){let d;if(l.isKeyField()){if(u==="array-contains"||u==="array-contains-any")throw new L(R.INVALID_ARGUMENT,`Invalid Query. You can't perform '${u}' queries on documentId().`);if(u==="in"||u==="not-in"){cd(h,u);const g=[];for(const E of h)g.push(ad(c,i,E));d={arrayValue:{values:g}}}else d=ad(c,i,h)}else u!=="in"&&u!=="not-in"&&u!=="array-contains-any"||cd(h,u),d=sA(a,o,h,u==="in"||u==="not-in");return ke.create(l,u,d)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}class su extends nu{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new su(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:At.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(s,i){let o=s;const a=i.getFlattenedFilters();for(const c of a)fm(o,c),o=Ic(o,c)}(e._query,n),new sr(e.firestore,e.converter,Ic(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class iu extends dm{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new iu(e,n)}_apply(e){const n=function(s,i,o){if(s.startAt!==null)throw new L(R.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new L(R.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Qs(i,o)}(e._query,this._field,this._direction);return new sr(e.firestore,e.converter,function(s,i){const o=s.explicitOrderBy.concat([i]);return new Xr(s.path,s.collectionGroup,o,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)}(e._query,n))}}function dA(t,e="asc"){const n=e,r=tu("orderBy",t);return iu._create(r,n)}function ad(t,e,n){if(typeof(n=wt(n))=="string"){if(n==="")throw new L(R.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!wg(e)&&n.indexOf("/")!==-1)throw new L(R.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(Ae.fromString(n));if(!q.isDocumentKey(r))throw new L(R.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Ch(t,new q(r))}if(n instanceof jt)return Ch(t,n._key);throw new L(R.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${oa(n)}.`)}function cd(t,e){if(!Array.isArray(t)||t.length===0)throw new L(R.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function fm(t,e){const n=function(s,i){for(const o of s)for(const a of o.getFlattenedFilters())if(i.indexOf(a.op)>=0)return a.op;return null}(t.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new L(R.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new L(R.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class fA{convertValue(e,n="none"){switch(Zn(e)){case 0:return null;case 1:return e.booleanValue;case 2:return be(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Xn(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw J()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return hi(e,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertGeoPoint(e){return new Xl(be(e.latitude),be(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Dl(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Ks(e));default:return null}}convertTimestamp(e){const n=Cn(e);return new xe(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Ae.fromString(e);Oe(Hg(r));const s=new Gs(r.get(1),r.get(3)),i=new q(r.popFirst(5));return s.isEqual(n)||Xt(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
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
 */class ps{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class pm extends hm{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Hi(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(tu("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Hi extends pm{data(e={}){return super.data(e)}}class pA{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new ps(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Hi(this._firestore,this._userDataWriter,r.key,r,new ps(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new L(R.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(a=>{const c=new Hi(s._firestore,s._userDataWriter,a.doc.key,a.doc,new ps(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);return a.doc,{type:"added",doc:c,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(a=>i||a.type!==3).map(a=>{const c=new Hi(s._firestore,s._userDataWriter,a.doc.key,a.doc,new ps(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);let l=-1,u=-1;return a.type!==0&&(l=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),u=o.indexOf(a.doc.key)),{type:gA(a.type),doc:c,oldIndex:l,newIndex:u}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function gA(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return J()}}class gm extends fA{constructor(e){super(),this.firestore=e}convertBytes(e){return new qr(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new jt(this.firestore,null,n)}}function mA(t,...e){var n,r,s;t=wt(t);let i={includeMetadataChanges:!1,source:"default"},o=0;typeof e[o]!="object"||od(e[o])||(i=e[o],o++);const a={includeMetadataChanges:i.includeMetadataChanges,source:i.source};if(od(e[o])){const h=e[o];e[o]=(n=h.next)===null||n===void 0?void 0:n.bind(h),e[o+1]=(r=h.error)===null||r===void 0?void 0:r.bind(h),e[o+2]=(s=h.complete)===null||s===void 0?void 0:s.bind(h)}let c,l,u;if(t instanceof jt)l=qi(t.firestore,Oc),u=Ll(t._key.path),c={next:h=>{e[o]&&e[o](_A(l,t,h))},error:e[o+1],complete:e[o+2]};else{const h=qi(t,sr);l=qi(h.firestore,Oc),u=h._query;const d=new gm(l);c={next:g=>{e[o]&&e[o](new pA(l,d,h,g))},error:e[o+1],complete:e[o+2]},uA(t._query)}return function(d,g,E,T){const P=new H0(T),b=new b0(g,P,E);return d.asyncQueue.enqueueAndForget(async()=>R0(await nd(d),b)),()=>{P.$a(),d.asyncQueue.enqueueAndForget(async()=>S0(await nd(d),b))}}(eA(l),u,a,c)}function _A(t,e,n){const r=n.docs.get(e._key),s=new gm(t);return new pm(t,s,e._key,r,new ps(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){(function(s){Yr=s})(Wr),xr(new Qn("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),a=new Oc(new kw(r.getProvider("auth-internal")),new Vw(r.getProvider("app-check-internal")),function(l,u){if(!Object.prototype.hasOwnProperty.apply(l.options,["projectId"]))throw new L(R.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Gs(l.options.projectId,u)}(o,s),o);return i=Object.assign({useFetchStreams:n},i),a._setSettings(i),a},"PUBLIC").setMultipleInstances(!0)),An(Ah,"4.6.1",e),An(Ah,"4.6.1","esm2017")})();var yA="firebase",vA="10.11.1";/**
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
 */An(yA,vA,"app");function ou(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function mm(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const EA=mm,_m=new ti("auth","Firebase",mm());/**
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
 */const go=new il("@firebase/auth");function IA(t,...e){go.logLevel<=ne.WARN&&go.warn(`Auth (${Wr}): ${t}`,...e)}function zi(t,...e){go.logLevel<=ne.ERROR&&go.error(`Auth (${Wr}): ${t}`,...e)}/**
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
 */function Zt(t,...e){throw au(t,...e)}function Lt(t,...e){return au(t,...e)}function ym(t,e,n){const r=Object.assign(Object.assign({},EA()),{[e]:n});return new ti("auth","Firebase",r).create(e,{appName:t.name})}function Wn(t){return ym(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function au(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return _m.create(t,...e)}function H(t,e,...n){if(!t)throw au(e,...n)}function Gt(t){const e="INTERNAL ASSERTION FAILED: "+t;throw zi(e),new Error(e)}function en(t,e){t||Gt(e)}/**
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
 */function Dc(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function wA(){return ld()==="http:"||ld()==="https:"}function ld(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function TA(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(wA()||nE()||"connection"in navigator)?navigator.onLine:!0}function AA(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class gi{constructor(e,n){this.shortDelay=e,this.longDelay=n,en(n>e,"Short delay should be less than long delay!"),this.isMobile=eE()||rE()}get(){return TA()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function cu(t,e){en(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class vm{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Gt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Gt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Gt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const RA={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const SA=new gi(3e4,6e4);function lu(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function ts(t,e,n,r,s={}){return Em(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const a=ni(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),vm.fetch()(Im(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},i))})}async function Em(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},RA),e);try{const s=new CA(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw xi(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw xi(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw xi(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw xi(t,"user-disabled",o);const u=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw ym(t,u,l);Zt(t,u)}}catch(s){if(s instanceof nn)throw s;Zt(t,"network-request-failed",{message:String(s)})}}async function PA(t,e,n,r,s={}){const i=await ts(t,e,n,r,s);return"mfaPendingCredential"in i&&Zt(t,"multi-factor-auth-required",{_serverResponse:i}),i}function Im(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?cu(t.config,s):`${t.config.apiScheme}://${s}`}class CA{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Lt(this.auth,"network-request-failed")),SA.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function xi(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=Lt(t,e,r);return s.customData._tokenResponse=n,s}/**
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
 */async function bA(t,e){return ts(t,"POST","/v1/accounts:delete",e)}async function wm(t,e){return ts(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Rs(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function kA(t,e=!1){const n=wt(t),r=await n.getIdToken(e),s=uu(r);H(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:Rs(La(s.auth_time)),issuedAtTime:Rs(La(s.iat)),expirationTime:Rs(La(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function La(t){return Number(t)*1e3}function uu(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return zi("JWT malformed, contained fewer than 3 sections"),null;try{const s=tp(n);return s?JSON.parse(s):(zi("Failed to decode base64 JWT payload"),null)}catch(s){return zi("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function ud(t){const e=uu(t);return H(e,"internal-error"),H(typeof e.exp<"u","internal-error"),H(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Js(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof nn&&OA(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function OA({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class NA{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Vc{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Rs(this.lastLoginAt),this.creationTime=Rs(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function mo(t){var e;const n=t.auth,r=await t.getIdToken(),s=await Js(t,wm(n,{idToken:r}));H(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?Tm(i.providerUserInfo):[],a=VA(t.providerData,o),c=t.isAnonymous,l=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),u=c?l:!1,h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new Vc(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function DA(t){const e=wt(t);await mo(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function VA(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function Tm(t){return t.map(e=>{var{providerId:n}=e,r=ou(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function xA(t,e){const n=await Em(t,{},async()=>{const r=ni({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=Im(t,s,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",vm.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function MA(t,e){return ts(t,"POST","/v2/accounts:revokeToken",lu(t,e))}/**
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
 */class br{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){H(e.idToken,"internal-error"),H(typeof e.idToken<"u","internal-error"),H(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):ud(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){H(e.length!==0,"internal-error");const n=ud(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(H(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await xA(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new br;return r&&(H(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(H(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(H(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new br,this.toJSON())}_performRefresh(){return Gt("not implemented")}}/**
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
 */function on(t,e){H(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Wt{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=ou(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new NA(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Vc(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await Js(this,this.stsTokenManager.getToken(this.auth,e));return H(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return kA(this,e)}reload(){return DA(this)}_assign(e){this!==e&&(H(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Wt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){H(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await mo(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(_n(this.auth.app))return Promise.reject(Wn(this.auth));const e=await this.getIdToken();return await Js(this,bA(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,a,c,l,u;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,d=(s=n.email)!==null&&s!==void 0?s:void 0,g=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,E=(o=n.photoURL)!==null&&o!==void 0?o:void 0,T=(a=n.tenantId)!==null&&a!==void 0?a:void 0,P=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,b=(l=n.createdAt)!==null&&l!==void 0?l:void 0,D=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:F,emailVerified:z,isAnonymous:Z,providerData:$,stsTokenManager:de}=n;H(F&&de,e,"internal-error");const ee=br.fromJSON(this.name,de);H(typeof F=="string",e,"internal-error"),on(h,e.name),on(d,e.name),H(typeof z=="boolean",e,"internal-error"),H(typeof Z=="boolean",e,"internal-error"),on(g,e.name),on(E,e.name),on(T,e.name),on(P,e.name),on(b,e.name),on(D,e.name);const X=new Wt({uid:F,auth:e,email:d,emailVerified:z,displayName:h,isAnonymous:Z,photoURL:E,phoneNumber:g,tenantId:T,stsTokenManager:ee,createdAt:b,lastLoginAt:D});return $&&Array.isArray($)&&(X.providerData=$.map(ye=>Object.assign({},ye))),P&&(X._redirectEventId=P),X}static async _fromIdTokenResponse(e,n,r=!1){const s=new br;s.updateFromServerResponse(n);const i=new Wt({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await mo(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];H(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?Tm(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),a=new br;a.updateFromIdToken(r);const c=new Wt({uid:s.localId,auth:e,stsTokenManager:a,isAnonymous:o}),l={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new Vc(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(c,l),c}}/**
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
 */const hd=new Map;function Qt(t){en(t instanceof Function,"Expected a class definition");let e=hd.get(t);return e?(en(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,hd.set(t,e),e)}/**
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
 */class Am{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Am.type="NONE";const dd=Am;/**
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
 */function Ki(t,e,n){return`firebase:${t}:${e}:${n}`}class kr{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=Ki(this.userKey,s.apiKey,i),this.fullPersistenceKey=Ki("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Wt._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new kr(Qt(dd),e,r);const s=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let i=s[0]||Qt(dd);const o=Ki(r,e.config.apiKey,e.name);let a=null;for(const l of n)try{const u=await l._get(o);if(u){const h=Wt._fromJSON(e,u);l!==i&&(a=h),i=l;break}}catch{}const c=s.filter(l=>l._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new kr(i,e,r):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async l=>{if(l!==i)try{await l._remove(o)}catch{}})),new kr(i,e,r))}}/**
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
 */function fd(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Pm(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Rm(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(bm(e))return"Blackberry";if(km(e))return"Webos";if(hu(e))return"Safari";if((e.includes("chrome/")||Sm(e))&&!e.includes("edge/"))return"Chrome";if(Cm(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Rm(t=ze()){return/firefox\//i.test(t)}function hu(t=ze()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Sm(t=ze()){return/crios\//i.test(t)}function Pm(t=ze()){return/iemobile/i.test(t)}function Cm(t=ze()){return/android/i.test(t)}function bm(t=ze()){return/blackberry/i.test(t)}function km(t=ze()){return/webos/i.test(t)}function aa(t=ze()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function LA(t=ze()){var e;return aa(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function FA(){return sE()&&document.documentMode===10}function Om(t=ze()){return aa(t)||Cm(t)||km(t)||bm(t)||/windows phone/i.test(t)||Pm(t)}function UA(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function Nm(t,e=[]){let n;switch(t){case"Browser":n=fd(ze());break;case"Worker":n=`${fd(ze())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Wr}/${r}`}/**
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
 */class BA{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,a)=>{try{const c=e(i);o(c)}catch(c){a(c)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function $A(t,e={}){return ts(t,"GET","/v2/passwordPolicy",lu(t,e))}/**
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
 */const jA=6;class qA{constructor(e){var n,r,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:jA,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,i,o,a;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(n=c.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),c.isValid&&(c.isValid=(r=c.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(s=c.containsLowercaseLetter)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(i=c.containsUppercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(o=c.containsNumericCharacter)!==null&&o!==void 0?o:!0),c.isValid&&(c.isValid=(a=c.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),c}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
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
 */class HA{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new pd(this),this.idTokenSubscription=new pd(this),this.beforeStateQueue=new BA(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=_m,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Qt(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await kr.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await wm(this,{idToken:e}),r=await Wt._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(_n(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=s==null?void 0:s._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c!=null&&c.user)&&(s=c.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return H(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await mo(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=AA()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(_n(this.app))return Promise.reject(Wn(this));const n=e?wt(e):null;return n&&H(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&H(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return _n(this.app)?Promise.reject(Wn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return _n(this.app)?Promise.reject(Wn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Qt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await $A(this),n=new qA(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new ti("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await MA(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Qt(e)||this._popupRedirectResolver;H(n,this,"argument-error"),this.redirectPersistenceManager=await kr.create(this,[Qt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(H(a,this,"internal-error"),a.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const c=e.addObserver(n,r,s);return()=>{o=!0,c()}}else{const c=e.addObserver(n);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return H(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Nm(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&IA(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function du(t){return wt(t)}class pd{constructor(e){this.auth=e,this.observer=null,this.addObserver=dE(n=>this.observer=n)}get next(){return H(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let fu={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function zA(t){fu=t}function KA(t){return fu.loadJS(t)}function GA(){return fu.gapiScript}function WA(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
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
 */function QA(t,e){const n=al(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(no(i,e??{}))return s;Zt(s,"already-initialized")}return n.initialize({options:e})}function JA(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Qt);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function YA(t,e,n){const r=du(t);H(r._canInitEmulator,r,"emulator-config-failed"),H(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=Dm(e),{host:o,port:a}=XA(e),c=a===null?"":`:${a}`;r.config.emulator={url:`${i}//${o}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),ZA()}function Dm(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function XA(t){const e=Dm(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:gd(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:gd(o)}}}function gd(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function ZA(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class Vm{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Gt("not implemented")}_getIdTokenResponse(e){return Gt("not implemented")}_linkToIdToken(e,n){return Gt("not implemented")}_getReauthenticationResolver(e){return Gt("not implemented")}}/**
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
 */async function Or(t,e){return PA(t,"POST","/v1/accounts:signInWithIdp",lu(t,e))}/**
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
 */const eR="http://localhost";class er extends Vm{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new er(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Zt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=ou(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new er(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Or(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Or(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Or(e,n)}buildRequest(){const e={requestUri:eR,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=ni(n)}return e}}/**
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
 */class xm{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class mi extends xm{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class fn extends mi{constructor(){super("facebook.com")}static credential(e){return er._fromParams({providerId:fn.PROVIDER_ID,signInMethod:fn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return fn.credentialFromTaggedObject(e)}static credentialFromError(e){return fn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return fn.credential(e.oauthAccessToken)}catch{return null}}}fn.FACEBOOK_SIGN_IN_METHOD="facebook.com";fn.PROVIDER_ID="facebook.com";/**
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
 */class pn extends mi{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return er._fromParams({providerId:pn.PROVIDER_ID,signInMethod:pn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return pn.credentialFromTaggedObject(e)}static credentialFromError(e){return pn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return pn.credential(n,r)}catch{return null}}}pn.GOOGLE_SIGN_IN_METHOD="google.com";pn.PROVIDER_ID="google.com";/**
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
 */class gn extends mi{constructor(){super("github.com")}static credential(e){return er._fromParams({providerId:gn.PROVIDER_ID,signInMethod:gn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return gn.credentialFromTaggedObject(e)}static credentialFromError(e){return gn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return gn.credential(e.oauthAccessToken)}catch{return null}}}gn.GITHUB_SIGN_IN_METHOD="github.com";gn.PROVIDER_ID="github.com";/**
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
 */class mn extends mi{constructor(){super("twitter.com")}static credential(e,n){return er._fromParams({providerId:mn.PROVIDER_ID,signInMethod:mn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return mn.credentialFromTaggedObject(e)}static credentialFromError(e){return mn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return mn.credential(n,r)}catch{return null}}}mn.TWITTER_SIGN_IN_METHOD="twitter.com";mn.PROVIDER_ID="twitter.com";/**
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
 */class Hr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await Wt._fromIdTokenResponse(e,r,s),o=md(r);return new Hr({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=md(r);return new Hr({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function md(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class _o extends nn{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,_o.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new _o(e,n,r,s)}}function Mm(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?_o._fromErrorAndOperation(t,i,e,r):i})}async function tR(t,e,n=!1){const r=await Js(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Hr._forOperation(t,"link",r)}/**
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
 */async function nR(t,e,n=!1){const{auth:r}=t;if(_n(r.app))return Promise.reject(Wn(r));const s="reauthenticate";try{const i=await Js(t,Mm(r,s,e,t),n);H(i.idToken,r,"internal-error");const o=uu(i.idToken);H(o,r,"internal-error");const{sub:a}=o;return H(t.uid===a,r,"user-mismatch"),Hr._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Zt(r,"user-mismatch"),i}}/**
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
 */async function rR(t,e,n=!1){if(_n(t.app))return Promise.reject(Wn(t));const r="signIn",s=await Mm(t,r,e),i=await Hr._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}function sR(t,e,n,r){return wt(t).onIdTokenChanged(e,n,r)}function iR(t,e,n){return wt(t).beforeAuthStateChanged(e,n)}const yo="__sak";/**
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
 */class Lm{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(yo,"1"),this.storage.removeItem(yo),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function oR(){const t=ze();return hu(t)||aa(t)}const aR=1e3,cR=10;class Fm extends Lm{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=oR()&&UA(),this.fallbackToPolling=Om(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);FA()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,cR):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},aR)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Fm.type="LOCAL";const lR=Fm;/**
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
 */class Um extends Lm{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Um.type="SESSION";const Bm=Um;/**
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
 */function uR(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class ca{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new ca(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const a=Array.from(o).map(async l=>l(n.origin,i)),c=await uR(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ca.receivers=[];/**
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
 */function pu(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class hR{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const l=pu("",20);s.port1.start();const u=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(h){const d=h;if(d.data.eventId===l)switch(d.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(d.data.response);break;default:clearTimeout(u),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function Ft(){return window}function dR(t){Ft().location.href=t}/**
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
 */function $m(){return typeof Ft().WorkerGlobalScope<"u"&&typeof Ft().importScripts=="function"}async function fR(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function pR(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function gR(){return $m()?self:null}/**
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
 */const jm="firebaseLocalStorageDb",mR=1,vo="firebaseLocalStorage",qm="fbase_key";class _i{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function la(t,e){return t.transaction([vo],e?"readwrite":"readonly").objectStore(vo)}function _R(){const t=indexedDB.deleteDatabase(jm);return new _i(t).toPromise()}function xc(){const t=indexedDB.open(jm,mR);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(vo,{keyPath:qm})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(vo)?e(r):(r.close(),await _R(),e(await xc()))})})}async function _d(t,e,n){const r=la(t,!0).put({[qm]:e,value:n});return new _i(r).toPromise()}async function yR(t,e){const n=la(t,!1).get(e),r=await new _i(n).toPromise();return r===void 0?null:r.value}function yd(t,e){const n=la(t,!0).delete(e);return new _i(n).toPromise()}const vR=800,ER=3;class Hm{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await xc(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>ER)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return $m()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ca._getInstance(gR()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await fR(),!this.activeServiceWorker)return;this.sender=new hR(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||pR()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await xc();return await _d(e,yo,"1"),await yd(e,yo),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>_d(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>yR(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>yd(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=la(s,!1).getAll();return new _i(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),vR)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Hm.type="LOCAL";const IR=Hm;new gi(3e4,6e4);/**
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
 */function wR(t,e){return e?Qt(e):(H(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class gu extends Vm{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Or(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Or(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Or(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function TR(t){return rR(t.auth,new gu(t),t.bypassAuthState)}function AR(t){const{auth:e,user:n}=t;return H(n,e,"internal-error"),nR(n,new gu(t),t.bypassAuthState)}async function RR(t){const{auth:e,user:n}=t;return H(n,e,"internal-error"),tR(n,new gu(t),t.bypassAuthState)}/**
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
 */class zm{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return TR;case"linkViaPopup":case"linkViaRedirect":return RR;case"reauthViaPopup":case"reauthViaRedirect":return AR;default:Zt(this.auth,"internal-error")}}resolve(e){en(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){en(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const SR=new gi(2e3,1e4);class mr extends zm{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,mr.currentPopupAction&&mr.currentPopupAction.cancel(),mr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return H(e,this.auth,"internal-error"),e}async onExecution(){en(this.filter.length===1,"Popup operations only handle one event");const e=pu();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Lt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Lt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,mr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Lt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,SR.get())};e()}}mr.currentPopupAction=null;/**
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
 */const PR="pendingRedirect",Gi=new Map;class CR extends zm{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Gi.get(this.auth._key());if(!e){try{const r=await bR(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Gi.set(this.auth._key(),e)}return this.bypassAuthState||Gi.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function bR(t,e){const n=NR(e),r=OR(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function kR(t,e){Gi.set(t._key(),e)}function OR(t){return Qt(t._redirectPersistence)}function NR(t){return Ki(PR,t.config.apiKey,t.name)}async function DR(t,e,n=!1){if(_n(t.app))return Promise.reject(Wn(t));const r=du(t),s=wR(r,e),o=await new CR(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const VR=10*60*1e3;class xR{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!MR(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Km(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Lt(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=VR&&this.cachedEventUids.clear(),this.cachedEventUids.has(vd(e))}saveEventToCache(e){this.cachedEventUids.add(vd(e)),this.lastProcessedEventTime=Date.now()}}function vd(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Km({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function MR(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Km(t);default:return!1}}/**
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
 */async function LR(t,e={}){return ts(t,"GET","/v1/projects",e)}/**
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
 */const FR=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,UR=/^https?/;async function BR(t){if(t.config.emulator)return;const{authorizedDomains:e}=await LR(t);for(const n of e)try{if($R(n))return}catch{}Zt(t,"unauthorized-domain")}function $R(t){const e=Dc(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!UR.test(n))return!1;if(FR.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const jR=new gi(3e4,6e4);function Ed(){const t=Ft().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function qR(t){return new Promise((e,n)=>{var r,s,i;function o(){Ed(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Ed(),n(Lt(t,"network-request-failed"))},timeout:jR.get()})}if(!((s=(r=Ft().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=Ft().gapi)===null||i===void 0)&&i.load)o();else{const a=WA("iframefcb");return Ft()[a]=()=>{gapi.load?o():n(Lt(t,"network-request-failed"))},KA(`${GA()}?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw Wi=null,e})}let Wi=null;function HR(t){return Wi=Wi||qR(t),Wi}/**
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
 */const zR=new gi(5e3,15e3),KR="__/auth/iframe",GR="emulator/auth/iframe",WR={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},QR=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function JR(t){const e=t.config;H(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?cu(e,GR):`https://${t.config.authDomain}/${KR}`,r={apiKey:e.apiKey,appName:t.name,v:Wr},s=QR.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${ni(r).slice(1)}`}async function YR(t){const e=await HR(t),n=Ft().gapi;return H(n,t,"internal-error"),e.open({where:document.body,url:JR(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:WR,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=Lt(t,"network-request-failed"),a=Ft().setTimeout(()=>{i(o)},zR.get());function c(){Ft().clearTimeout(a),s(r)}r.ping(c).then(c,()=>{i(o)})}))}/**
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
 */const XR={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},ZR=500,eS=600,tS="_blank",nS="http://localhost";class Id{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function rS(t,e,n,r=ZR,s=eS){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},XR),{width:r.toString(),height:s.toString(),top:i,left:o}),l=ze().toLowerCase();n&&(a=Sm(l)?tS:n),Rm(l)&&(e=e||nS,c.scrollbars="yes");const u=Object.entries(c).reduce((d,[g,E])=>`${d}${g}=${E},`,"");if(LA(l)&&a!=="_self")return sS(e||"",a),new Id(null);const h=window.open(e||"",a,u);H(h,t,"popup-blocked");try{h.focus()}catch{}return new Id(h)}function sS(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const iS="__/auth/handler",oS="emulator/auth/handler",aS=encodeURIComponent("fac");async function wd(t,e,n,r,s,i){H(t.config.authDomain,t,"auth-domain-config-required"),H(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Wr,eventId:s};if(e instanceof xm){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",hE(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,h]of Object.entries({}))o[u]=h}if(e instanceof mi){const u=e.getScopes().filter(h=>h!=="");u.length>0&&(o.scopes=u.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const c=await t._getAppCheckToken(),l=c?`#${aS}=${encodeURIComponent(c)}`:"";return`${cS(t)}?${ni(a).slice(1)}${l}`}function cS({config:t}){return t.emulator?cu(t,oS):`https://${t.authDomain}/${iS}`}/**
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
 */const Fa="webStorageSupport";class lS{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Bm,this._completeRedirectFn=DR,this._overrideRedirectResult=kR}async _openPopup(e,n,r,s){var i;en((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await wd(e,n,r,Dc(),s);return rS(e,o,pu())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await wd(e,n,r,Dc(),s);return dR(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(en(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await YR(e),r=new xR(e);return n.register("authEvent",s=>(H(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Fa,{type:Fa},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[Fa];o!==void 0&&n(!!o),Zt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=BR(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Om()||hu()||aa()}}const uS=lS;var Td="@firebase/auth",Ad="1.7.2";/**
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
 */class hS{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){H(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function dS(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function fS(t){xr(new Qn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;H(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Nm(t)},l=new HA(r,s,i,c);return JA(l,n),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),xr(new Qn("auth-internal",e=>{const n=du(e.getProvider("auth").getImmediate());return(r=>new hS(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),An(Td,Ad,dS(t)),An(Td,Ad,"esm2017")}/**
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
 */const pS=5*60,gS=sp("authIdTokenMaxAge")||pS;let Rd=null;const mS=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>gS)return;const s=n==null?void 0:n.token;Rd!==s&&(Rd=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function _S(t=cp()){const e=al(t,"auth");if(e.isInitialized())return e.getImmediate();const n=QA(t,{popupRedirectResolver:uS,persistence:[IR,lR,Bm]}),r=sp("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=mS(i.toString());iR(n,o,()=>o(n.currentUser)),sR(n,a=>o(a))}}const s=np("auth");return s&&YA(n,`http://${s}`),n}function yS(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}zA({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=Lt("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",yS().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});fS("Browser");var vS={VITE_API_KEY:"AIzaSyC1TN6HDaINvqh6zrV4RdkxFoJCI4IBOQc",VITE_AUTH_DOMAIN:"noteballs-570fc.firebaseapp.com",VITE_PROJECT_ID:"noteballs-570fc",VITE_STORAGE_BUCKET:"noteballs-570fc.appspot.com",VITE_MESSAGING_SENDER_ID:"925523006507",VITE_APP_ID:"1:925523006507:web:e858d34027d445dab0466e",BASE_URL:"/vue-componento",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const ES={apiKey:"AIzaSyC1TN6HDaINvqh6zrV4RdkxFoJCI4IBOQc",authDomain:vS.VITE_APP_AUTH_DOMAIN,projectId:"noteballs-570fc",storageBucket:"noteballs-570fc.appspot.com",messagingSenderId:"925523006507",appId:"1:925523006507:web:e858d34027d445dab0466e"},Gm=ap(ES),IS=Z0(Gm);_S(Gm);const wS=Lv("storeComponents",{state:()=>({components:[],componentsLoaded:!1}),actions:{async getComponents(){this.componentsLoaded=!1;const t=hA(Y0(IS,"components"),dA("date","desc"));mA(t,e=>{let n=[];e.forEach(r=>{const s={id:r.id,date:r.data().date,content:r.data().content};n.push(s)}),this.components=n,this.componentsLoaded=!0})}},getters:{getComponentByType:t=>e=>e?t.components.filter(n=>n.content.type===e):t.components}}),TS={__name:"App",setup(t){const e=wS(),n=Dr(!1);return el(async()=>{await e.getComponents()}),Ir(()=>e.componentsLoaded,(r,s)=>{e.componentsLoaded&&(n.value=!0)}),(r,s)=>{const i=Ds("RouterView");return ct(),Bt(mt,null,[ve(qv),n.value?(ct(),Oo(i,{key:0})):zf("",!0)],64)}}},AS="modulepreload",RS=function(t){return"/vue-componento/"+t},Sd={},as=function(e,n,r){let s=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const i=document.querySelector("meta[property=csp-nonce]"),o=(i==null?void 0:i.nonce)||(i==null?void 0:i.getAttribute("nonce"));s=Promise.all(n.map(a=>{if(a=RS(a),a in Sd)return;Sd[a]=!0;const c=a.endsWith(".css"),l=c?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${a}"]${l}`))return;const u=document.createElement("link");if(u.rel=c?"stylesheet":AS,c||(u.as="script",u.crossOrigin=""),u.href=a,o&&u.setAttribute("nonce",o),document.head.appendChild(u),c)return new Promise((h,d)=>{u.addEventListener("load",h),u.addEventListener("error",()=>d(new Error(`Unable to preload CSS for ${a}`)))})}))}return s.then(()=>e()).catch(i=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=i,window.dispatchEvent(o),!o.defaultPrevented)throw i})};/*!
  * vue-router v4.3.2
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const fr=typeof document<"u";function SS(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const pe=Object.assign;function Ua(t,e){const n={};for(const r in e){const s=e[r];n[r]=Rt(s)?s.map(t):t(s)}return n}const Ss=()=>{},Rt=Array.isArray,Wm=/#/g,PS=/&/g,CS=/\//g,bS=/=/g,kS=/\?/g,Qm=/\+/g,OS=/%5B/g,NS=/%5D/g,Jm=/%5E/g,DS=/%60/g,Ym=/%7B/g,VS=/%7C/g,Xm=/%7D/g,xS=/%20/g;function mu(t){return encodeURI(""+t).replace(VS,"|").replace(OS,"[").replace(NS,"]")}function MS(t){return mu(t).replace(Ym,"{").replace(Xm,"}").replace(Jm,"^")}function Mc(t){return mu(t).replace(Qm,"%2B").replace(xS,"+").replace(Wm,"%23").replace(PS,"%26").replace(DS,"`").replace(Ym,"{").replace(Xm,"}").replace(Jm,"^")}function LS(t){return Mc(t).replace(bS,"%3D")}function FS(t){return mu(t).replace(Wm,"%23").replace(kS,"%3F")}function US(t){return t==null?"":FS(t).replace(CS,"%2F")}function Ys(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const BS=/\/$/,$S=t=>t.replace(BS,"");function Ba(t,e,n="/"){let r,s={},i="",o="";const a=e.indexOf("#");let c=e.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(r=e.slice(0,c),i=e.slice(c+1,a>-1?a:e.length),s=t(i)),a>-1&&(r=r||e.slice(0,a),o=e.slice(a,e.length)),r=zS(r??e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:Ys(o)}}function jS(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Pd(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function qS(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&zr(e.matched[r],n.matched[s])&&Zm(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function zr(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Zm(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!HS(t[n],e[n]))return!1;return!0}function HS(t,e){return Rt(t)?Cd(t,e):Rt(e)?Cd(e,t):t===e}function Cd(t,e){return Rt(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function zS(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,o,a;for(o=0;o<r.length;o++)if(a=r[o],a!==".")if(a==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o).join("/")}var Xs;(function(t){t.pop="pop",t.push="push"})(Xs||(Xs={}));var Ps;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Ps||(Ps={}));function KS(t){if(!t)if(fr){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),$S(t)}const GS=/^[^#]+#/;function WS(t,e){return t.replace(GS,"#")+e}function QS(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const ua=()=>({left:window.scrollX,top:window.scrollY});function JS(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=QS(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function bd(t,e){return(history.state?history.state.position-e:-1)+t}const Lc=new Map;function YS(t,e){Lc.set(t,e)}function XS(t){const e=Lc.get(t);return Lc.delete(t),e}let ZS=()=>location.protocol+"//"+location.host;function e_(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let a=s.includes(t.slice(i))?t.slice(i).length:1,c=s.slice(a);return c[0]!=="/"&&(c="/"+c),Pd(c,"")}return Pd(n,t)+r+s}function eP(t,e,n,r){let s=[],i=[],o=null;const a=({state:d})=>{const g=e_(t,location),E=n.value,T=e.value;let P=0;if(d){if(n.value=g,e.value=d,o&&o===E){o=null;return}P=T?d.position-T.position:0}else r(g);s.forEach(b=>{b(n.value,E,{delta:P,type:Xs.pop,direction:P?P>0?Ps.forward:Ps.back:Ps.unknown})})};function c(){o=n.value}function l(d){s.push(d);const g=()=>{const E=s.indexOf(d);E>-1&&s.splice(E,1)};return i.push(g),g}function u(){const{history:d}=window;d.state&&d.replaceState(pe({},d.state,{scroll:ua()}),"")}function h(){for(const d of i)d();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:c,listen:l,destroy:h}}function kd(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?ua():null}}function tP(t){const{history:e,location:n}=window,r={value:e_(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(c,l,u){const h=t.indexOf("#"),d=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+c:ZS()+t+c;try{e[u?"replaceState":"pushState"](l,"",d),s.value=l}catch(g){console.error(g),n[u?"replace":"assign"](d)}}function o(c,l){const u=pe({},e.state,kd(s.value.back,c,s.value.forward,!0),l,{position:s.value.position});i(c,u,!0),r.value=c}function a(c,l){const u=pe({},s.value,e.state,{forward:c,scroll:ua()});i(u.current,u,!0);const h=pe({},kd(r.value,c,null),{position:u.position+1},l);i(c,h,!1),r.value=c}return{location:r,state:s,push:a,replace:o}}function nP(t){t=KS(t);const e=tP(t),n=eP(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=pe({location:"",base:t,go:r,createHref:WS.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function rP(t){return typeof t=="string"||t&&typeof t=="object"}function t_(t){return typeof t=="string"||typeof t=="symbol"}const an={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},n_=Symbol("");var Od;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Od||(Od={}));function Kr(t,e){return pe(new Error,{type:t,[n_]:!0},e)}function Ht(t,e){return t instanceof Error&&n_ in t&&(e==null||!!(t.type&e))}const Nd="[^/]+?",sP={sensitive:!1,strict:!1,start:!0,end:!0},iP=/[.+*?^${}()[\]/\\]/g;function oP(t,e){const n=pe({},sP,e),r=[];let s=n.start?"^":"";const i=[];for(const l of t){const u=l.length?[]:[90];n.strict&&!l.length&&(s+="/");for(let h=0;h<l.length;h++){const d=l[h];let g=40+(n.sensitive?.25:0);if(d.type===0)h||(s+="/"),s+=d.value.replace(iP,"\\$&"),g+=40;else if(d.type===1){const{value:E,repeatable:T,optional:P,regexp:b}=d;i.push({name:E,repeatable:T,optional:P});const D=b||Nd;if(D!==Nd){g+=10;try{new RegExp(`(${D})`)}catch(z){throw new Error(`Invalid custom RegExp for param "${E}" (${D}): `+z.message)}}let F=T?`((?:${D})(?:/(?:${D}))*)`:`(${D})`;h||(F=P&&l.length<2?`(?:/${F})`:"/"+F),P&&(F+="?"),s+=F,g+=20,P&&(g+=-8),T&&(g+=-20),D===".*"&&(g+=-50)}u.push(g)}r.push(u)}if(n.strict&&n.end){const l=r.length-1;r[l][r[l].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function a(l){const u=l.match(o),h={};if(!u)return null;for(let d=1;d<u.length;d++){const g=u[d]||"",E=i[d-1];h[E.name]=g&&E.repeatable?g.split("/"):g}return h}function c(l){let u="",h=!1;for(const d of t){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const g of d)if(g.type===0)u+=g.value;else if(g.type===1){const{value:E,repeatable:T,optional:P}=g,b=E in l?l[E]:"";if(Rt(b)&&!T)throw new Error(`Provided param "${E}" is an array but it is not repeatable (* or + modifiers)`);const D=Rt(b)?b.join("/"):b;if(!D)if(P)d.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${E}"`);u+=D}}return u||"/"}return{re:o,score:r,keys:i,parse:a,stringify:c}}function aP(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function cP(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=aP(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(Dd(r))return 1;if(Dd(s))return-1}return s.length-r.length}function Dd(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const lP={type:0,value:""},uP=/[a-zA-Z0-9_]/;function hP(t){if(!t)return[[]];if(t==="/")return[[lP]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(g){throw new Error(`ERR (${n})/"${l}": ${g}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let a=0,c,l="",u="";function h(){l&&(n===0?i.push({type:0,value:l}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:l,regexp:u,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),l="")}function d(){l+=c}for(;a<t.length;){if(c=t[a++],c==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:c==="/"?(l&&h(),o()):c===":"?(h(),n=1):d();break;case 4:d(),n=r;break;case 1:c==="("?n=2:uP.test(c)?d():(h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+c:n=3:u+=c;break;case 3:h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${l}"`),h(),o(),s}function dP(t,e,n){const r=oP(hP(t.path),n),s=pe(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function fP(t,e){const n=[],r=new Map;e=Md({strict:!1,end:!0,sensitive:!1},e);function s(u){return r.get(u)}function i(u,h,d){const g=!d,E=pP(u);E.aliasOf=d&&d.record;const T=Md(e,u),P=[E];if("alias"in u){const F=typeof u.alias=="string"?[u.alias]:u.alias;for(const z of F)P.push(pe({},E,{components:d?d.record.components:E.components,path:z,aliasOf:d?d.record:E}))}let b,D;for(const F of P){const{path:z}=F;if(h&&z[0]!=="/"){const Z=h.record.path,$=Z[Z.length-1]==="/"?"":"/";F.path=h.record.path+(z&&$+z)}if(b=dP(F,h,T),d?d.alias.push(b):(D=D||b,D!==b&&D.alias.push(b),g&&u.name&&!xd(b)&&o(u.name)),E.children){const Z=E.children;for(let $=0;$<Z.length;$++)i(Z[$],b,d&&d.children[$])}d=d||b,(b.record.components&&Object.keys(b.record.components).length||b.record.name||b.record.redirect)&&c(b)}return D?()=>{o(D)}:Ss}function o(u){if(t_(u)){const h=r.get(u);h&&(r.delete(u),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(u);h>-1&&(n.splice(h,1),u.record.name&&r.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function c(u){let h=0;for(;h<n.length&&cP(u,n[h])>=0&&(u.record.path!==n[h].record.path||!r_(u,n[h]));)h++;n.splice(h,0,u),u.record.name&&!xd(u)&&r.set(u.record.name,u)}function l(u,h){let d,g={},E,T;if("name"in u&&u.name){if(d=r.get(u.name),!d)throw Kr(1,{location:u});T=d.record.name,g=pe(Vd(h.params,d.keys.filter(D=>!D.optional).concat(d.parent?d.parent.keys.filter(D=>D.optional):[]).map(D=>D.name)),u.params&&Vd(u.params,d.keys.map(D=>D.name))),E=d.stringify(g)}else if(u.path!=null)E=u.path,d=n.find(D=>D.re.test(E)),d&&(g=d.parse(E),T=d.record.name);else{if(d=h.name?r.get(h.name):n.find(D=>D.re.test(h.path)),!d)throw Kr(1,{location:u,currentLocation:h});T=d.record.name,g=pe({},h.params,u.params),E=d.stringify(g)}const P=[];let b=d;for(;b;)P.unshift(b.record),b=b.parent;return{name:T,path:E,params:g,matched:P,meta:mP(P)}}return t.forEach(u=>i(u)),{addRoute:i,resolve:l,removeRoute:o,getRoutes:a,getRecordMatcher:s}}function Vd(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function pP(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:gP(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function gP(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function xd(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function mP(t){return t.reduce((e,n)=>pe(e,n.meta),{})}function Md(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function r_(t,e){return e.children.some(n=>n===t||r_(t,n))}function _P(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(Qm," "),o=i.indexOf("="),a=Ys(o<0?i:i.slice(0,o)),c=o<0?null:Ys(i.slice(o+1));if(a in e){let l=e[a];Rt(l)||(l=e[a]=[l]),l.push(c)}else e[a]=c}return e}function Ld(t){let e="";for(let n in t){const r=t[n];if(n=LS(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(Rt(r)?r.map(i=>i&&Mc(i)):[r&&Mc(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function yP(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=Rt(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const vP=Symbol(""),Fd=Symbol(""),_u=Symbol(""),s_=Symbol(""),Fc=Symbol("");function cs(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function dn(t,e,n,r,s,i=o=>o()){const o=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((a,c)=>{const l=d=>{d===!1?c(Kr(4,{from:n,to:e})):d instanceof Error?c(d):rP(d)?c(Kr(2,{from:e,to:d})):(o&&r.enterCallbacks[s]===o&&typeof d=="function"&&o.push(d),a())},u=i(()=>t.call(r&&r.instances[s],e,n,l));let h=Promise.resolve(u);t.length<3&&(h=h.then(l)),h.catch(d=>c(d))})}function $a(t,e,n,r,s=i=>i()){const i=[];for(const o of t)for(const a in o.components){let c=o.components[a];if(!(e!=="beforeRouteEnter"&&!o.instances[a]))if(EP(c)){const u=(c.__vccOpts||c)[e];u&&i.push(dn(u,n,r,o,a,s))}else{let l=c();i.push(()=>l.then(u=>{if(!u)return Promise.reject(new Error(`Couldn't resolve component "${a}" at "${o.path}"`));const h=SS(u)?u.default:u;o.components[a]=h;const g=(h.__vccOpts||h)[e];return g&&dn(g,n,r,o,a,s)()}))}}return i}function EP(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function Ud(t){const e=xt(_u),n=xt(s_),r=dt(()=>{const c=vr(t.to);return e.resolve(c)}),s=dt(()=>{const{matched:c}=r.value,{length:l}=c,u=c[l-1],h=n.matched;if(!u||!h.length)return-1;const d=h.findIndex(zr.bind(null,u));if(d>-1)return d;const g=Bd(c[l-2]);return l>1&&Bd(u)===g&&h[h.length-1].path!==g?h.findIndex(zr.bind(null,c[l-2])):d}),i=dt(()=>s.value>-1&&AP(n.params,r.value.params)),o=dt(()=>s.value>-1&&s.value===n.matched.length-1&&Zm(n.params,r.value.params));function a(c={}){return TP(c)?e[vr(t.replace)?"replace":"push"](vr(t.to)).catch(Ss):Promise.resolve()}return{route:r,href:dt(()=>r.value.href),isActive:i,isExactActive:o,navigate:a}}const IP=Co({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Ud,setup(t,{slots:e}){const n=Zs(Ud(t)),{options:r}=xt(_u),s=dt(()=>({[$d(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[$d(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:Wf("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),wP=IP;function TP(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function AP(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!Rt(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function Bd(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const $d=(t,e,n)=>t??e??n,RP=Co({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=xt(Fc),s=dt(()=>t.route||r.value),i=xt(Fd,0),o=dt(()=>{let l=vr(i);const{matched:u}=s.value;let h;for(;(h=u[l])&&!h.components;)l++;return l}),a=dt(()=>s.value.matched[o.value]);Li(Fd,dt(()=>o.value+1)),Li(vP,a),Li(Fc,s);const c=Dr();return Ir(()=>[c.value,a.value,t.name],([l,u,h],[d,g,E])=>{u&&(u.instances[h]=l,g&&g!==u&&l&&l===d&&(u.leaveGuards.size||(u.leaveGuards=g.leaveGuards),u.updateGuards.size||(u.updateGuards=g.updateGuards))),l&&u&&(!g||!zr(u,g)||!d)&&(u.enterCallbacks[h]||[]).forEach(T=>T(l))},{flush:"post"}),()=>{const l=s.value,u=t.name,h=a.value,d=h&&h.components[u];if(!d)return jd(n.default,{Component:d,route:l});const g=h.props[u],E=g?g===!0?l.params:typeof g=="function"?g(l):g:null,P=Wf(d,pe({},E,e,{onVnodeUnmounted:b=>{b.component.isUnmounted&&(h.instances[u]=null)},ref:c}));return jd(n.default,{Component:P,route:l})||P}}});function jd(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const SP=RP;function PP(t){const e=fP(t.routes,t),n=t.parseQuery||_P,r=t.stringifyQuery||Ld,s=t.history,i=cs(),o=cs(),a=cs(),c=$_(an);let l=an;fr&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Ua.bind(null,y=>""+y),h=Ua.bind(null,US),d=Ua.bind(null,Ys);function g(y,V){let O,U;return t_(y)?(O=e.getRecordMatcher(y),U=V):U=y,e.addRoute(U,O)}function E(y){const V=e.getRecordMatcher(y);V&&e.removeRoute(V)}function T(){return e.getRoutes().map(y=>y.record)}function P(y){return!!e.getRecordMatcher(y)}function b(y,V){if(V=pe({},V||c.value),typeof y=="string"){const p=Ba(n,y,V.path),m=e.resolve({path:p.path},V),v=s.createHref(p.fullPath);return pe(p,m,{params:d(m.params),hash:Ys(p.hash),redirectedFrom:void 0,href:v})}let O;if(y.path!=null)O=pe({},y,{path:Ba(n,y.path,V.path).path});else{const p=pe({},y.params);for(const m in p)p[m]==null&&delete p[m];O=pe({},y,{params:h(p)}),V.params=h(V.params)}const U=e.resolve(O,V),fe=y.hash||"";U.params=u(d(U.params));const Te=jS(r,pe({},y,{hash:MS(fe),path:U.path})),f=s.createHref(Te);return pe({fullPath:Te,hash:fe,query:r===Ld?yP(y.query):y.query||{}},U,{redirectedFrom:void 0,href:f})}function D(y){return typeof y=="string"?Ba(n,y,c.value.path):pe({},y)}function F(y,V){if(l!==y)return Kr(8,{from:V,to:y})}function z(y){return de(y)}function Z(y){return z(pe(D(y),{replace:!0}))}function $(y){const V=y.matched[y.matched.length-1];if(V&&V.redirect){const{redirect:O}=V;let U=typeof O=="function"?O(y):O;return typeof U=="string"&&(U=U.includes("?")||U.includes("#")?U=D(U):{path:U},U.params={}),pe({query:y.query,hash:y.hash,params:U.path!=null?{}:y.params},U)}}function de(y,V){const O=l=b(y),U=c.value,fe=y.state,Te=y.force,f=y.replace===!0,p=$(O);if(p)return de(pe(D(p),{state:typeof p=="object"?pe({},fe,p.state):fe,force:Te,replace:f}),V||O);const m=O;m.redirectedFrom=V;let v;return!Te&&qS(r,U,O)&&(v=Kr(16,{to:m,from:U}),St(U,U,!0,!1)),(v?Promise.resolve(v):ye(m,U)).catch(_=>Ht(_)?Ht(_,2)?_:rn(_):ue(_,m,U)).then(_=>{if(_){if(Ht(_,2))return de(pe({replace:f},D(_.to),{state:typeof _.to=="object"?pe({},fe,_.to.state):fe,force:Te}),V||m)}else _=lt(m,U,!0,f,fe);return Ke(m,U,_),_})}function ee(y,V){const O=F(y,V);return O?Promise.reject(O):Promise.resolve()}function X(y){const V=or.values().next().value;return V&&typeof V.runWithContext=="function"?V.runWithContext(y):y()}function ye(y,V){let O;const[U,fe,Te]=CP(y,V);O=$a(U.reverse(),"beforeRouteLeave",y,V);for(const p of U)p.leaveGuards.forEach(m=>{O.push(dn(m,y,V))});const f=ee.bind(null,y,V);return O.push(f),Ge(O).then(()=>{O=[];for(const p of i.list())O.push(dn(p,y,V));return O.push(f),Ge(O)}).then(()=>{O=$a(fe,"beforeRouteUpdate",y,V);for(const p of fe)p.updateGuards.forEach(m=>{O.push(dn(m,y,V))});return O.push(f),Ge(O)}).then(()=>{O=[];for(const p of Te)if(p.beforeEnter)if(Rt(p.beforeEnter))for(const m of p.beforeEnter)O.push(dn(m,y,V));else O.push(dn(p.beforeEnter,y,V));return O.push(f),Ge(O)}).then(()=>(y.matched.forEach(p=>p.enterCallbacks={}),O=$a(Te,"beforeRouteEnter",y,V,X),O.push(f),Ge(O))).then(()=>{O=[];for(const p of o.list())O.push(dn(p,y,V));return O.push(f),Ge(O)}).catch(p=>Ht(p,8)?p:Promise.reject(p))}function Ke(y,V,O){a.list().forEach(U=>X(()=>U(y,V,O)))}function lt(y,V,O,U,fe){const Te=F(y,V);if(Te)return Te;const f=V===an,p=fr?history.state:{};O&&(U||f?s.replace(y.fullPath,pe({scroll:f&&p&&p.scroll},fe)):s.push(y.fullPath,fe)),c.value=y,St(y,V,O,f),rn()}let pt;function Vn(){pt||(pt=s.listen((y,V,O)=>{if(!Ei.listening)return;const U=b(y),fe=$(U);if(fe){de(pe(fe,{replace:!0}),U).catch(Ss);return}l=U;const Te=c.value;fr&&YS(bd(Te.fullPath,O.delta),ua()),ye(U,Te).catch(f=>Ht(f,12)?f:Ht(f,2)?(de(f.to,U).then(p=>{Ht(p,20)&&!O.delta&&O.type===Xs.pop&&s.go(-1,!1)}).catch(Ss),Promise.reject()):(O.delta&&s.go(-O.delta,!1),ue(f,U,Te))).then(f=>{f=f||lt(U,Te,!1),f&&(O.delta&&!Ht(f,8)?s.go(-O.delta,!1):O.type===Xs.pop&&Ht(f,20)&&s.go(-1,!1)),Ke(U,Te,f)}).catch(Ss)}))}let gt=cs(),le=cs(),me;function ue(y,V,O){rn(y);const U=le.list();return U.length?U.forEach(fe=>fe(y,V,O)):console.error(y),Promise.reject(y)}function qt(){return me&&c.value!==an?Promise.resolve():new Promise((y,V)=>{gt.add([y,V])})}function rn(y){return me||(me=!y,Vn(),gt.list().forEach(([V,O])=>y?O(y):V()),gt.reset()),y}function St(y,V,O,U){const{scrollBehavior:fe}=t;if(!fr||!fe)return Promise.resolve();const Te=!O&&XS(bd(y.fullPath,0))||(U||!O)&&history.state&&history.state.scroll||null;return Xc().then(()=>fe(y,V,Te)).then(f=>f&&JS(f)).catch(f=>ue(f,y,V))}const it=y=>s.go(y);let ir;const or=new Set,Ei={currentRoute:c,listening:!0,addRoute:g,removeRoute:E,hasRoute:P,getRoutes:T,resolve:b,options:t,push:z,replace:Z,go:it,back:()=>it(-1),forward:()=>it(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:le.add,isReady:qt,install(y){const V=this;y.component("RouterLink",wP),y.component("RouterView",SP),y.config.globalProperties.$router=V,Object.defineProperty(y.config.globalProperties,"$route",{enumerable:!0,get:()=>vr(c)}),fr&&!ir&&c.value===an&&(ir=!0,z(s.location).catch(fe=>{}));const O={};for(const fe in an)Object.defineProperty(O,fe,{get:()=>c.value[fe],enumerable:!0});y.provide(_u,V),y.provide(s_,df(O)),y.provide(Fc,c);const U=y.unmount;or.add(y),y.unmount=function(){or.delete(y),or.size<1&&(l=an,pt&&pt(),pt=null,c.value=an,ir=!1,me=!1),U()}}};function Ge(y){return y.reduce((V,O)=>V.then(()=>X(O)),Promise.resolve())}return Ei}function CP(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const a=e.matched[o];a&&(t.matched.find(l=>zr(l,a))?r.push(a):n.push(a));const c=t.matched[o];c&&(e.matched.find(l=>zr(l,c))||s.push(c))}return[n,r,s]}const bP={},kP={class:"index-page-content"},OP={class:"container"},NP=ie("h1",{class:"text-page-title text-center"},"Vue Componento",-1),DP=ie("div",{class:"page-slogan"}," Modern. Convenient. Swift. ",-1),VP=ie("div",{class:"description"},[ie("p",null," Our library is designed to help you easily and swiftly create a wide range of templates for your projects. With an extensive collection of components, you can effortlessly build sleek and responsive user interfaces, saving you time and effort in the development process. Whether you're working on web applications, websites, or other projects, our library provides the building blocks you need to bring your designs to life. Explore our components today and streamline your development workflow! ")],-1),xP={class:"btn-block"};function MP(t,e){const n=Ds("RouterLink");return ct(),Bt("div",kP,[ie("div",OP,[NP,DP,VP,ie("div",xP,[ve(n,{to:{name:"Components"},class:"btn-default"},{default:zt(()=>[Un("To Components List ")]),_:1})])])])}const LP=nr(bP,[["render",MP]]),FP=Co({__name:"ComponentsView",setup(t){return(e,n)=>" components view "}}),UP={},BP={class:"sidebar"};function $P(t,e){return ct(),Bt("aside",BP,[Vs(t.$slots,"default")])}const jP=nr(UP,[["render",$P]]),qP=["xlink:href"],HP={__name:"SvgIcon",props:{icon:{type:String,required:!0},color:{type:String}},setup(t){return(e,n)=>(ct(),Bt("svg",{class:"svg-icons",style:Nr({color:t.color})},[ie("use",{"xlink:href":`#${t.icon}`},null,8,qP)],4))}},i_=nr(HP,[["__scopeId","data-v-2a1d9548"]]),zP={class:"accordion-inner-content"},KP=ie("div",{class:"value"}," default value ",-1),GP={key:0,class:"icon-wrap"},WP={class:"content-item"},QP=Co({__name:"Accordion",props:{height:{type:String,default:"38px"},type:{type:String,default:""},isActiveOnInit:{type:String,default:""},noCaret:{type:String,default:""},align:{type:String,default:""}},setup(t){const e=t,n=Dr(!1),r=Dr(null),s=dt(()=>r.value?r.value.offsetHeight:0),i=o=>{o.stopPropagation(),n.value=!n.value};return el(()=>{e.isActiveOnInit&&(n.value=!0)}),(o,a)=>(ct(),Bt("div",{class:Cs(["accordion",[{active:n.value},t.type]])},[ie("div",zP,[ie("div",{onClick:i,style:Nr({height:e.height}),class:Cs(["header-block",t.align])},[Vs(o.$slots,"header",{},()=>[KP]),t.noCaret?zf("",!0):(ct(),Bt("div",GP,[ve(i_,{icon:"angle-right-solid"})]))],6),ie("div",{style:Nr({maxHeight:n.value?s.value+"px":"0px"}),class:"content-block"},[ie("div",{class:"content-items-list",ref_key:"contentBlock",ref:r},[ie("div",WP,[Vs(o.$slots,"accordion-body",{},()=>[Un("default body")])])],512)],4)])],2))}}),yi=t=>(Z_("data-v-f131ae9b"),t=t(),ey(),t),JP={class:"page-content"},YP=yi(()=>ie("div",{class:"link-text"},"Components",-1)),XP={class:"link-sublist"},ZP=yi(()=>ie("li",{class:"accordion-item"},"Textarea",-1)),eC=yi(()=>ie("li",{class:"accordion-item"},"Button",-1)),tC=yi(()=>ie("li",{class:"accordion-item"},"Progressbar",-1)),nC=yi(()=>ie("li",{class:"accordion-item"},"Forma",-1)),rC={class:"main"},sC={__name:"DefaultLayout",setup(t){return(e,n)=>{const r=Ds("router-link"),s=Ds("router-view");return ct(),Bt("div",JP,[ve(jP,null,{default:zt(()=>[ve(r,{class:"sidebar-link","active-class":"active",to:{name:"ColorPalette"}},{default:zt(()=>[Un("Color Palette ")]),_:1}),ve(QP,{height:"32px","is-active-on-init":"true"},{header:zt(()=>[YP]),"accordion-body":zt(()=>[ie("ul",XP,[ie("li",null,[ve(r,{to:{name:"Accordions"},class:"accordion-item","active-class":"active",tag:"li"},{default:zt(()=>[Un("Accordions ")]),_:1})]),ie("li",null,[ve(r,{to:{name:"Inputs"},class:"accordion-item","active-class":"active",tag:"li"},{default:zt(()=>[Un("Input ")]),_:1})]),ie("li",null,[ve(r,{to:{name:"Skeletons"},class:"accordion-item","active-class":"active",tag:"li"},{default:zt(()=>[Un("Skeleton-boxes ")]),_:1})]),ZP,eC,tC,nC])]),_:1})]),_:1}),ie("main",rC,[ve(s)])])}}},iC=nr(sC,[["__scopeId","data-v-f131ae9b"]]),oC={};function aC(t,e){const n=Ds("router-view");return ct(),Oo(n)}const cC=nr(oC,[["render",aC]]),lC=PP({history:nP("/vue-componento"),routes:[{path:"/",component:cC,children:[{path:"",name:"Home",component:LP}]},{path:"/components",component:iC,children:[{path:"",name:"Components",component:FP},{path:"inputs",name:"Inputs",component:()=>as(()=>import("./InputsView-CMPqr9pa.js"),__vite__mapDeps([0,1,2,3,4]))},{path:"accordions",name:"Accordions",component:()=>as(()=>import("./AccordionsView-xNRPf7-_.js"),__vite__mapDeps([5,1,2,3]))},{path:"color-palette",name:"ColorPalette",component:()=>as(()=>import("./ColorPaletteView-PMUtwOzx.js"),__vite__mapDeps([6,2,3,7]))},{path:"buttons",name:"Buttons",component:()=>as(()=>import("./ButtonsView-DMwHGg45.js"),[])},{path:"skeletons",name:"Skeletons",component:()=>as(()=>import("./SkeletonsView-KafI9Bdc.js"),__vite__mapDeps([8,1,2,3,9]))}]}]}),uC={class:"copy-btn-block"},hC={__name:"CopyButton",props:{parentClass:{type:String}},setup(t){const e=t,n=r=>{const s=r.target,o=r.target.closest("."+e.parentClass).querySelector("pre"),a=document.createRange();a.selectNode(o),window.getSelection().removeAllRanges(),window.getSelection().addRange(a),document.execCommand("copy"),s.classList.add("active"),setTimeout(()=>{window.getSelection().removeAllRanges(),s.classList.remove("active")},2e3)};return(r,s)=>(ct(),Bt("div",uC,[ie("button",{type:"button",class:"copy-btn",onClick:n},"Copy")]))}},dC=nr(hC,[["__scopeId","data-v-24364697"]]),fC={class:"demo-box"},pC={class:"columns"},gC={class:"col w50p"},mC={class:"col-content no-overflow"},_C={class:"col w50p"},yC=ie("div",{class:"col-title code-title"}," HTML ",-1),vC={class:"col-content"},EC={class:"copy-btn-block"},IC={__name:"DemonstrationBox",setup(t){return(e,n)=>(ct(),Bt("div",fC,[ie("div",pC,[ie("div",gC,[ie("div",mC,[Vs(e.$slots,"demo-slot")])]),ie("div",_C,[yC,ie("div",vC,[Vs(e.$slots,"code-slot"),ie("div",EC,[ve(dC,{"parent-class":"demo-box"})])])])])]))}},vi=Pv(TS);vi.use(Ov());vi.use(lC);vi.component("SvgIcon",i_);vi.component("DemonstrationBox",IC);vi.mount("#app");export{dC as C,nr as _,zf as a,ie as b,Bt as c,Zs as d,el as e,Ds as f,ve as g,Un as h,vr as i,QP as j,Vs as k,zy as l,yy as m,Cs as n,ct as o,Z_ as p,ey as q,Dr as r,wC as t,wS as u,zt as w};
