import{S as ng,i as rg,s as ig,k as Qi,q as sg,l as Yi,m as Xi,r as og,h as Sr,n as Bo,b as ag,D as Ji,u as cg,B as Ru}from"./index-25f32507.js";/**
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
 */const kh=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let i=n.charCodeAt(r);i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):(i&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},ug=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const i=n[t++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=n[t++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=n[t++],o=n[t++],a=n[t++],c=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const s=n[t++],o=n[t++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},Ah={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<n.length;i+=3){const s=n[i],o=i+1<n.length,a=o?n[i+1]:0,c=i+2<n.length,u=c?n[i+2]:0,l=s>>2,h=(s&3)<<4|a>>4;let d=(a&15)<<2|u>>6,p=u&63;c||(p=64,o||(d=64)),r.push(t[l],t[h],t[d],t[p])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(kh(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):ug(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<n.length;){const s=t[n.charAt(i++)],a=i<n.length?t[n.charAt(i)]:0;++i;const u=i<n.length?t[n.charAt(i)]:64;++i;const h=i<n.length?t[n.charAt(i)]:64;if(++i,s==null||a==null||u==null||h==null)throw Error();const d=s<<2|a>>4;if(r.push(d),u!==64){const p=a<<4&240|u>>2;if(r.push(p),h!==64){const g=u<<6&192|h;r.push(g)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}},lg=function(n){const e=kh(n);return Ah.encodeByteArray(e,!0)},vs=function(n){return lg(n).replace(/\./g,"")},Ch=function(n){try{return Ah.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};function ws(n,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const t=e;return new Date(t.getTime());case Object:n===void 0&&(n={});break;case Array:n=[];break;default:return e}for(const t in e)!e.hasOwnProperty(t)||!hg(t)||(n[t]=ws(n[t],e[t]));return n}function hg(n){return n!=="__proto__"}/**
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
 */function W(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function dg(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(W())}function Wa(){try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function fg(){return typeof self=="object"&&self.self===self}function Dh(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function za(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Nh(){const n=W();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function mg(){return!Wa()&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Jr(){return typeof indexedDB=="object"}function pg(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},i.onupgradeneeded=()=>{t=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(t){e(t)}})}function gg(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const yg=()=>gg().__FIREBASE_DEFAULTS__,vg=()=>{if(typeof process>"u"||typeof process.env>"u")return;const n=process.env.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},wg=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&Ch(n[1]);return e&&JSON.parse(e)},Ha=()=>{try{return yg()||vg()||wg()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Ig=n=>{var e,t;return(t=(e=Ha())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},_g=()=>{var n;return(n=Ha())===null||n===void 0?void 0:n.config},Rh=n=>{var e;return(e=Ha())===null||e===void 0?void 0:e[`_${n}`]};/**
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
 */class bg{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
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
 */function Eg(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",i=n.iat||0,s=n.sub||n.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},n),a="";return[vs(JSON.stringify(t)),vs(JSON.stringify(o)),a].join(".")}/**
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
 */const Tg="FirebaseError";class Ce extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=Tg,Object.setPrototypeOf(this,Ce.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,kn.prototype.create)}}class kn{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?Sg(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Ce(i,a,r)}}function Sg(n,e){return n.replace(kg,(t,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const kg=/\{\$([^}]+)}/g;/**
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
 */function xu(n,e){return Object.prototype.hasOwnProperty.call(n,e)}function Ag(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function Is(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const i of t){if(!r.includes(i))return!1;const s=n[i],o=e[i];if(Ou(s)&&Ou(o)){if(!Is(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!t.includes(i))return!1;return!0}function Ou(n){return n!==null&&typeof n=="object"}/**
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
 */function lr(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Bn(n){const e={};return n.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function Mr(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function xh(n,e){const t=new Cg(n,e);return t.subscribe.bind(t)}class Cg{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let i;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");Dg(e,["next","error","complete"])?i=e:i={next:e,error:t,complete:r},i.next===void 0&&(i.next=qo),i.error===void 0&&(i.error=qo),i.complete===void 0&&(i.complete=qo);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Dg(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function qo(){}/**
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
 */function k(n){return n&&n._delegate?n._delegate:n}class nt{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Xt="[DEFAULT]";/**
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
 */class Ng{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new bg;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:t});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(xg(e))try{this.getOrInitializeService({instanceIdentifier:Xt})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(t);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Xt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Xt){return this.instances.has(e)}getOptions(e=Xt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,t){var r;const i=this.normalizeInstanceIdentifier(t),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(!!r)for(const i of r)try{i(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Rg(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Xt){return this.component?this.component.multipleInstances?e:Xt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Rg(n){return n===Xt?void 0:n}function xg(n){return n.instantiationMode==="EAGER"}/**
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
 */class Og{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Ng(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */const Qa=[];var P;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(P||(P={}));const Oh={debug:P.DEBUG,verbose:P.VERBOSE,info:P.INFO,warn:P.WARN,error:P.ERROR,silent:P.SILENT},Pg=P.INFO,Lg={[P.DEBUG]:"log",[P.VERBOSE]:"log",[P.INFO]:"info",[P.WARN]:"warn",[P.ERROR]:"error"},Mg=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),i=Lg[e];if(i)console[i](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Ws{constructor(e){this.name=e,this._logLevel=Pg,this._logHandler=Mg,this._userLogHandler=null,Qa.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in P))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Oh[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,P.DEBUG,...e),this._logHandler(this,P.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,P.VERBOSE,...e),this._logHandler(this,P.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,P.INFO,...e),this._logHandler(this,P.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,P.WARN,...e),this._logHandler(this,P.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,P.ERROR,...e),this._logHandler(this,P.ERROR,...e)}}function Fg(n){Qa.forEach(e=>{e.setLogLevel(n)})}function Ug(n,e){for(const t of Qa){let r=null;e&&e.level&&(r=Oh[e.level]),n===null?t.userLogHandler=null:t.userLogHandler=(i,s,...o)=>{const a=o.map(c=>{if(c==null)return null;if(typeof c=="string")return c;if(typeof c=="number"||typeof c=="boolean")return c.toString();if(c instanceof Error)return c.message;try{return JSON.stringify(c)}catch{return null}}).filter(c=>c).join(" ");s>=(r!=null?r:i.logLevel)&&n({level:P[s].toLowerCase(),message:a,args:o,type:i.name})}}}const Vg=(n,e)=>e.some(t=>n instanceof t);let Pu,Lu;function Bg(){return Pu||(Pu=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function qg(){return Lu||(Lu=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Ph=new WeakMap,ua=new WeakMap,Lh=new WeakMap,$o=new WeakMap,Ya=new WeakMap;function $g(n){const e=new Promise((t,r)=>{const i=()=>{n.removeEventListener("success",s),n.removeEventListener("error",o)},s=()=>{t(At(n.result)),i()},o=()=>{r(n.error),i()};n.addEventListener("success",s),n.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&Ph.set(t,n)}).catch(()=>{}),Ya.set(e,n),e}function jg(n){if(ua.has(n))return;const e=new Promise((t,r)=>{const i=()=>{n.removeEventListener("complete",s),n.removeEventListener("error",o),n.removeEventListener("abort",o)},s=()=>{t(),i()},o=()=>{r(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",s),n.addEventListener("error",o),n.addEventListener("abort",o)});ua.set(n,e)}let la={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return ua.get(n);if(e==="objectStoreNames")return n.objectStoreNames||Lh.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return At(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function Gg(n){la=n(la)}function Kg(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(jo(this),e,...t);return Lh.set(r,e.sort?e.sort():[e]),At(r)}:qg().includes(n)?function(...e){return n.apply(jo(this),e),At(Ph.get(this))}:function(...e){return At(n.apply(jo(this),e))}}function Wg(n){return typeof n=="function"?Kg(n):(n instanceof IDBTransaction&&jg(n),Vg(n,Bg())?new Proxy(n,la):n)}function At(n){if(n instanceof IDBRequest)return $g(n);if($o.has(n))return $o.get(n);const e=Wg(n);return e!==n&&($o.set(n,e),Ya.set(e,n)),e}const jo=n=>Ya.get(n);function zg(n,e,{blocked:t,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(n,e),a=At(o);return r&&o.addEventListener("upgradeneeded",c=>{r(At(o.result),c.oldVersion,c.newVersion,At(o.transaction))}),t&&o.addEventListener("blocked",()=>t()),a.then(c=>{s&&c.addEventListener("close",()=>s()),i&&c.addEventListener("versionchange",()=>i())}).catch(()=>{}),a}const Hg=["get","getKey","getAll","getAllKeys","count"],Qg=["put","add","delete","clear"],Go=new Map;function Mu(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Go.get(e))return Go.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,i=Qg.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(i||Hg.includes(t)))return;const s=async function(o,...a){const c=this.transaction(o,i?"readwrite":"readonly");let u=c.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[t](...a),i&&c.done]))[0]};return Go.set(e,s),s}Gg(n=>({...n,get:(e,t,r)=>Mu(e,t)||n.get(e,t,r),has:(e,t)=>!!Mu(e,t)||n.has(e,t)}));/**
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
 */class Yg{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(Xg(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function Xg(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const ha="@firebase/app",Fu="0.8.4";/**
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
 */const mn=new Ws("@firebase/app"),Jg="@firebase/app-compat",Zg="@firebase/analytics-compat",ey="@firebase/analytics",ty="@firebase/app-check-compat",ny="@firebase/app-check",ry="@firebase/auth",iy="@firebase/auth-compat",sy="@firebase/database",oy="@firebase/database-compat",ay="@firebase/functions",cy="@firebase/functions-compat",uy="@firebase/installations",ly="@firebase/installations-compat",hy="@firebase/messaging",dy="@firebase/messaging-compat",fy="@firebase/performance",my="@firebase/performance-compat",py="@firebase/remote-config",gy="@firebase/remote-config-compat",yy="@firebase/storage",vy="@firebase/storage-compat",wy="@firebase/firestore",Iy="@firebase/firestore-compat",_y="firebase",by="9.14.0";/**
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
 */const Dt="[DEFAULT]",Ey={[ha]:"fire-core",[Jg]:"fire-core-compat",[ey]:"fire-analytics",[Zg]:"fire-analytics-compat",[ny]:"fire-app-check",[ty]:"fire-app-check-compat",[ry]:"fire-auth",[iy]:"fire-auth-compat",[sy]:"fire-rtdb",[oy]:"fire-rtdb-compat",[ay]:"fire-fn",[cy]:"fire-fn-compat",[uy]:"fire-iid",[ly]:"fire-iid-compat",[hy]:"fire-fcm",[dy]:"fire-fcm-compat",[fy]:"fire-perf",[my]:"fire-perf-compat",[py]:"fire-rc",[gy]:"fire-rc-compat",[yy]:"fire-gcs",[vy]:"fire-gcs-compat",[wy]:"fire-fst",[Iy]:"fire-fst-compat","fire-js":"fire-js",[_y]:"fire-js-all"};/**
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
 */const Nt=new Map,Zr=new Map;function _s(n,e){try{n.container.addComponent(e)}catch(t){mn.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function Mh(n,e){n.container.addOrOverwriteComponent(e)}function Rt(n){const e=n.name;if(Zr.has(e))return mn.debug(`There were multiple attempts to register component ${e}.`),!1;Zr.set(e,n);for(const t of Nt.values())_s(t,n);return!0}function zs(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function Ty(n,e,t=Dt){zs(n,e).clearInstance(t)}function Sy(){Zr.clear()}/**
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
 */const ky={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},ut=new kn("app","Firebase",ky);/**
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
 */class Ay{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new nt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ut.create("app-deleted",{appName:this._name})}}/**
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
 */const An=by;function Xa(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Dt,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw ut.create("bad-app-name",{appName:String(i)});if(t||(t=_g()),!t)throw ut.create("no-options");const s=Nt.get(i);if(s){if(Is(t,s.options)&&Is(r,s.config))return s;throw ut.create("duplicate-app",{appName:i})}const o=new Og(i);for(const c of Zr.values())o.addComponent(c);const a=new Ay(t,r,o);return Nt.set(i,a),a}function Fh(n=Dt){const e=Nt.get(n);if(!e&&n===Dt)return Xa();if(!e)throw ut.create("no-app",{appName:n});return e}function Cy(){return Array.from(Nt.values())}async function Uh(n){const e=n.name;Nt.has(e)&&(Nt.delete(e),await Promise.all(n.container.getProviders().map(t=>t.delete())),n.isDeleted=!0)}function Ze(n,e,t){var r;let i=(r=Ey[n])!==null&&r!==void 0?r:n;t&&(i+=`-${t}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),mn.warn(a.join(" "));return}Rt(new nt(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}function Vh(n,e){if(n!==null&&typeof n!="function")throw ut.create("invalid-log-argument");Ug(n,e)}function Bh(n){Fg(n)}/**
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
 */const Dy="firebase-heartbeat-database",Ny=1,ei="firebase-heartbeat-store";let Ko=null;function qh(){return Ko||(Ko=zg(Dy,Ny,{upgrade:(n,e)=>{switch(e){case 0:n.createObjectStore(ei)}}}).catch(n=>{throw ut.create("idb-open",{originalErrorMessage:n.message})})),Ko}async function Ry(n){var e;try{return(await qh()).transaction(ei).objectStore(ei).get($h(n))}catch(t){if(t instanceof Ce)mn.warn(t.message);else{const r=ut.create("idb-get",{originalErrorMessage:(e=t)===null||e===void 0?void 0:e.message});mn.warn(r.message)}}}async function Uu(n,e){var t;try{const i=(await qh()).transaction(ei,"readwrite");return await i.objectStore(ei).put(e,$h(n)),i.done}catch(r){if(r instanceof Ce)mn.warn(r.message);else{const i=ut.create("idb-set",{originalErrorMessage:(t=r)===null||t===void 0?void 0:t.message});mn.warn(i.message)}}}function $h(n){return`${n.name}!${n.options.appId}`}/**
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
 */const xy=1024,Oy=30*24*60*60*1e3;class Py{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new My(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const t=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Vu();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:t}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=Oy}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Vu(),{heartbeatsToSend:t,unsentEntries:r}=Ly(this._heartbeatsCache.heartbeats),i=vs(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Vu(){return new Date().toISOString().substring(0,10)}function Ly(n,e=xy){const t=[];let r=n.slice();for(const i of n){const s=t.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Bu(t)>e){s.dates.pop();break}}else if(t.push({agent:i.agent,dates:[i.date]}),Bu(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class My{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Jr()?pg().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await Ry(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return Uu(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return Uu(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Bu(n){return vs(JSON.stringify({version:2,heartbeats:n})).length}/**
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
 */function Fy(n){Rt(new nt("platform-logger",e=>new Yg(e),"PRIVATE")),Rt(new nt("heartbeat",e=>new Py(e),"PRIVATE")),Ze(ha,Fu,n),Ze(ha,Fu,"esm2017"),Ze("fire-js","")}Fy("");const Uy=Object.freeze(Object.defineProperty({__proto__:null,SDK_VERSION:An,_DEFAULT_ENTRY_NAME:Dt,_addComponent:_s,_addOrOverwriteComponent:Mh,_apps:Nt,_clearComponents:Sy,_components:Zr,_getProvider:zs,_registerComponent:Rt,_removeServiceInstance:Ty,deleteApp:Uh,getApp:Fh,getApps:Cy,initializeApp:Xa,onLog:Vh,registerVersion:Ze,setLogLevel:Bh,FirebaseError:Ce},Symbol.toStringTag,{value:"Module"}));/**
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
 */class Vy{constructor(e,t){this._delegate=e,this.firebase=t,_s(e,new nt("app-compat",()=>this,"PUBLIC")),this.container=e.container}get automaticDataCollectionEnabled(){return this._delegate.automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this._delegate.automaticDataCollectionEnabled=e}get name(){return this._delegate.name}get options(){return this._delegate.options}delete(){return new Promise(e=>{this._delegate.checkDestroyed(),e()}).then(()=>(this.firebase.INTERNAL.removeApp(this.name),Uh(this._delegate)))}_getService(e,t=Dt){var r;this._delegate.checkDestroyed();const i=this._delegate.container.getProvider(e);return!i.isInitialized()&&((r=i.getComponent())===null||r===void 0?void 0:r.instantiationMode)==="EXPLICIT"&&i.initialize(),i.getImmediate({identifier:t})}_removeServiceInstance(e,t=Dt){this._delegate.container.getProvider(e).clearInstance(t)}_addComponent(e){_s(this._delegate,e)}_addOrOverwriteComponent(e){Mh(this._delegate,e)}toJSON(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}}}/**
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
 */const By={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance."},qu=new kn("app-compat","Firebase",By);/**
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
 */function qy(n){const e={},t={__esModule:!0,initializeApp:s,app:i,registerVersion:Ze,setLogLevel:Bh,onLog:Vh,apps:null,SDK_VERSION:An,INTERNAL:{registerComponent:a,removeApp:r,useAsService:c,modularAPIs:Uy}};t.default=t,Object.defineProperty(t,"apps",{get:o});function r(u){delete e[u]}function i(u){if(u=u||Dt,!xu(e,u))throw qu.create("no-app",{appName:u});return e[u]}i.App=n;function s(u,l={}){const h=Xa(u,l);if(xu(e,h.name))return e[h.name];const d=new n(h,t);return e[h.name]=d,d}function o(){return Object.keys(e).map(u=>e[u])}function a(u){const l=u.name,h=l.replace("-compat","");if(Rt(u)&&u.type==="PUBLIC"){const d=(p=i())=>{if(typeof p[h]!="function")throw qu.create("invalid-app-argument",{appName:l});return p[h]()};u.serviceProps!==void 0&&ws(d,u.serviceProps),t[h]=d,n.prototype[h]=function(...p){return this._getService.bind(this,l).apply(this,u.multipleInstances?p:[])}}return u.type==="PUBLIC"?t[h]:null}function c(u,l){return l==="serverAuth"?null:l}return t}/**
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
 */function jh(){const n=qy(Vy);n.INTERNAL=Object.assign(Object.assign({},n.INTERNAL),{createFirebaseNamespace:jh,extendNamespace:e,createSubscribe:xh,ErrorFactory:kn,deepExtend:ws});function e(t){ws(n,t)}return n}const $y=jh();/**
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
 */const $u=new Ws("@firebase/app-compat"),jy="@firebase/app-compat",Gy="0.1.39";/**
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
 */function Ky(n){Ze(jy,Gy,n)}/**
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
 */if(fg()&&self.firebase!==void 0){$u.warn(`
    Warning: Firebase is already defined in the global scope. Please make sure
    Firebase library is only loaded once.
  `);const n=self.firebase.SDK_VERSION;n&&n.indexOf("LITE")>=0&&$u.warn(`
    Warning: You are trying to load Firebase while using Firebase Performance standalone script.
    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.
    `)}const mt=$y;Ky();var Wy="firebase",zy="9.14.0";/**
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
 */mt.registerVersion(Wy,zy,"app-compat");var da=function(n,e){return da=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,r){t.__proto__=r}||function(t,r){for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(t[i]=r[i])},da(n,e)};function rk(n,e){if(typeof e!="function"&&e!==null)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");da(n,e);function t(){this.constructor=n}n.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}function Ja(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(n);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(n,r[i])&&(t[r[i]]=n[r[i]]);return t}function ik(n){var e=typeof Symbol=="function"&&Symbol.iterator,t=e&&n[e],r=0;if(t)return t.call(n);if(n&&typeof n.length=="number")return{next:function(){return n&&r>=n.length&&(n=void 0),{value:n&&n[r++],done:!n}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}function sk(n,e){var t=typeof Symbol=="function"&&n[Symbol.iterator];if(!t)return n;var r=t.call(n),i,s=[],o;try{for(;(e===void 0||e-- >0)&&!(i=r.next()).done;)s.push(i.value)}catch(a){o={error:a}}finally{try{i&&!i.done&&(t=r.return)&&t.call(r)}finally{if(o)throw o.error}}return s}function ok(n,e,t){if(t||arguments.length===2)for(var r=0,i=e.length,s;r<i;r++)(s||!(r in e))&&(s||(s=Array.prototype.slice.call(e,0,r)),s[r]=e[r]);return n.concat(s||Array.prototype.slice.call(e))}const kr={FACEBOOK:"facebook.com",GITHUB:"github.com",GOOGLE:"google.com",PASSWORD:"password",PHONE:"phone",TWITTER:"twitter.com"},Ln={EMAIL_SIGNIN:"EMAIL_SIGNIN",PASSWORD_RESET:"PASSWORD_RESET",RECOVER_EMAIL:"RECOVER_EMAIL",REVERT_SECOND_FACTOR_ADDITION:"REVERT_SECOND_FACTOR_ADDITION",VERIFY_AND_CHANGE_EMAIL:"VERIFY_AND_CHANGE_EMAIL",VERIFY_EMAIL:"VERIFY_EMAIL"};/**
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
 */function Hy(){return{["admin-restricted-operation"]:"This operation is restricted to administrators only.",["argument-error"]:"",["app-not-authorized"]:"This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.",["app-not-installed"]:"The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.",["captcha-check-failed"]:"The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.",["code-expired"]:"The SMS code has expired. Please re-send the verification code to try again.",["cordova-not-ready"]:"Cordova framework is not ready.",["cors-unsupported"]:"This browser is not supported.",["credential-already-in-use"]:"This credential is already associated with a different user account.",["custom-token-mismatch"]:"The custom token corresponds to a different audience.",["requires-recent-login"]:"This operation is sensitive and requires recent authentication. Log in again before retrying this request.",["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.",["dynamic-link-not-activated"]:"Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.",["email-change-needs-verification"]:"Multi-factor users must always have a verified email.",["email-already-in-use"]:"The email address is already in use by another account.",["emulator-config-failed"]:'Auth instance has already been used to make a network call. Auth can no longer be configured to use the emulator. Try calling "connectAuthEmulator()" sooner.',["expired-action-code"]:"The action code has expired.",["cancelled-popup-request"]:"This operation has been cancelled due to another conflicting popup being opened.",["internal-error"]:"An internal AuthError has occurred.",["invalid-app-credential"]:"The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.",["invalid-app-id"]:"The mobile app identifier is not registed for the current project.",["invalid-user-token"]:"This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.",["invalid-auth-event"]:"An internal AuthError has occurred.",["invalid-verification-code"]:"The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure to use the verification code provided by the user.",["invalid-continue-uri"]:"The continue URL provided in the request is invalid.",["invalid-cordova-configuration"]:"The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.",["invalid-custom-token"]:"The custom token format is incorrect. Please check the documentation.",["invalid-dynamic-link-domain"]:"The provided dynamic link domain is not configured or authorized for the current project.",["invalid-email"]:"The email address is badly formatted.",["invalid-emulator-scheme"]:"Emulator URL must start with a valid scheme (http:// or https://).",["invalid-api-key"]:"Your API key is invalid, please check you have copied it correctly.",["invalid-cert-hash"]:"The SHA-1 certificate hash provided is invalid.",["invalid-credential"]:"The supplied auth credential is malformed or has expired.",["invalid-message-payload"]:"The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.",["invalid-multi-factor-session"]:"The request does not contain a valid proof of first factor successful sign-in.",["invalid-oauth-provider"]:"EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.",["invalid-oauth-client-id"]:"The OAuth client ID provided is either invalid or does not match the specified API key.",["unauthorized-domain"]:"This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.",["invalid-action-code"]:"The action code is invalid. This can happen if the code is malformed, expired, or has already been used.",["wrong-password"]:"The password is invalid or the user does not have a password.",["invalid-persistence-type"]:"The specified persistence type is invalid. It can only be local, session or none.",["invalid-phone-number"]:"The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].",["invalid-provider-id"]:"The specified provider ID is invalid.",["invalid-recipient-email"]:"The email corresponding to this action failed to send as the provided recipient email address is invalid.",["invalid-sender"]:"The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.",["invalid-verification-id"]:"The verification ID used to create the phone auth credential is invalid.",["invalid-tenant-id"]:"The Auth instance's tenant ID is invalid.",["login-blocked"]:"Login blocked by user-provided method: {$originalMessage}",["missing-android-pkg-name"]:"An Android Package Name must be provided if the Android App is required to be installed.",["auth-domain-config-required"]:"Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.",["missing-app-credential"]:"The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.",["missing-verification-code"]:"The phone auth credential was created with an empty SMS verification code.",["missing-continue-uri"]:"A continue URL must be provided in the request.",["missing-iframe-start"]:"An internal AuthError has occurred.",["missing-ios-bundle-id"]:"An iOS Bundle ID must be provided if an App Store ID is provided.",["missing-or-invalid-nonce"]:"The request does not contain a valid nonce. This can occur if the SHA-256 hash of the provided raw nonce does not match the hashed nonce in the ID token payload.",["missing-multi-factor-info"]:"No second factor identifier is provided.",["missing-multi-factor-session"]:"The request is missing proof of first factor successful sign-in.",["missing-phone-number"]:"To send verification codes, provide a phone number for the recipient.",["missing-verification-id"]:"The phone auth credential was created with an empty verification ID.",["app-deleted"]:"This instance of FirebaseApp has been deleted.",["multi-factor-info-not-found"]:"The user does not have a second factor matching the identifier provided.",["multi-factor-auth-required"]:"Proof of ownership of a second factor is required to complete sign-in.",["account-exists-with-different-credential"]:"An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.",["network-request-failed"]:"A network AuthError (such as timeout, interrupted connection or unreachable host) has occurred.",["no-auth-event"]:"An internal AuthError has occurred.",["no-such-provider"]:"User was not linked to an account with the given provider.",["null-user"]:"A null user object was provided as the argument for an operation which requires a non-null user object.",["operation-not-allowed"]:"The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.",["operation-not-supported-in-this-environment"]:'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',["popup-blocked"]:"Unable to establish a connection with the popup. It may have been blocked by the browser.",["popup-closed-by-user"]:"The popup has been closed by the user before finalizing the operation.",["provider-already-linked"]:"User can only be linked to one identity for the given provider.",["quota-exceeded"]:"The project's quota for this operation has been exceeded.",["redirect-cancelled-by-user"]:"The redirect operation has been cancelled by the user before finalizing.",["redirect-operation-pending"]:"A redirect sign-in operation is already pending.",["rejected-credential"]:"The request contains malformed or mismatching credentials.",["second-factor-already-in-use"]:"The second factor is already enrolled on this account.",["maximum-second-factor-count-exceeded"]:"The maximum allowed number of second factors on a user has been exceeded.",["tenant-id-mismatch"]:"The provided tenant ID does not match the Auth instance's tenant ID",timeout:"The operation has timed out.",["user-token-expired"]:"The user's credential is no longer valid. The user must sign in again.",["too-many-requests"]:"We have blocked all requests from this device due to unusual activity. Try again later.",["unauthorized-continue-uri"]:"The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.",["unsupported-first-factor"]:"Enrolling a second factor or signing in with a multi-factor account requires sign-in with a supported first factor.",["unsupported-persistence-type"]:"The current environment does not support the specified persistence type.",["unsupported-tenant-operation"]:"This operation is not supported in a multi-tenant context.",["unverified-email"]:"The operation requires a verified email.",["user-cancelled"]:"The user did not grant your application the permissions it requested.",["user-not-found"]:"There is no user record corresponding to this identifier. The user may have been deleted.",["user-disabled"]:"The user account has been disabled by an administrator.",["user-mismatch"]:"The supplied credentials do not correspond to the previously signed in user.",["user-signed-out"]:"",["weak-password"]:"The password must be 6 characters long or more.",["web-storage-unsupported"]:"This browser is not supported or 3rd party cookies and data may be disabled.",["already-initialized"]:"initializeAuth() has already been called with different options. To avoid this error, call initializeAuth() with the same options as when it was originally called, or call getAuth() to return the already initialized instance."}}function Gh(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Qy=Hy,Yy=Gh,Kh=new kn("auth","Firebase",Gh());/**
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
 */const ju=new Ws("@firebase/auth");function us(n,...e){ju.logLevel<=P.ERROR&&ju.error(`Auth (${An}): ${n}`,...e)}/**
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
 */function ue(n,...e){throw Za(n,...e)}function we(n,...e){return Za(n,...e)}function Wh(n,e,t){const r=Object.assign(Object.assign({},Yy()),{[e]:t});return new kn("auth","Firebase",r).create(e,{appName:n.name})}function hr(n,e,t){const r=t;if(!(e instanceof r))throw r.name!==e.constructor.name&&ue(n,"argument-error"),Wh(n,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Za(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return Kh.create(n,...e)}function w(n,e,...t){if(!n)throw Za(e,...t)}function Ye(n){const e="INTERNAL ASSERTION FAILED: "+n;throw us(e),new Error(e)}function Ge(n,e){n||Ye(e)}/**
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
 */const Gu=new Map;function Me(n){Ge(n instanceof Function,"Expected a class definition");let e=Gu.get(n);return e?(Ge(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,Gu.set(n,e),e)}/**
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
 */function Xy(n,e){const t=zs(n,"auth");if(t.isInitialized()){const i=t.getImmediate(),s=t.getOptions();if(Is(s,e!=null?e:{}))return i;ue(i,"already-initialized")}return t.initialize({options:e})}function Jy(n,e){const t=(e==null?void 0:e.persistence)||[],r=(Array.isArray(t)?t:[t]).map(Me);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}/**
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
 */function ti(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function ec(){return Ku()==="http:"||Ku()==="https:"}function Ku(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
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
 */function Zy(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(ec()||Dh()||"connection"in navigator)?navigator.onLine:!0}function ev(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
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
 */class Ti{constructor(e,t){this.shortDelay=e,this.longDelay=t,Ge(t>e,"Short delay should be less than long delay!"),this.isMobile=dg()||za()}get(){return Zy()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function tc(n,e){Ge(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class zh{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;Ye("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;Ye("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;Ye("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const tv={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
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
 */const nv=new Ti(3e4,6e4);function ie(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function de(n,e,t,r,i={}){return Hh(n,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=lr(Object.assign({key:n.config.apiKey},o)).slice(1),c=await n._getAdditionalHeaders();return c["Content-Type"]="application/json",n.languageCode&&(c["X-Firebase-Locale"]=n.languageCode),zh.fetch()(Qh(n,n.config.apiHost,t,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},s))})}async function Hh(n,e,t){n._canInitEmulator=!1;const r=Object.assign(Object.assign({},tv),e);try{const i=new rv(n),s=await Promise.race([t(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Fr(n,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[c,u]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw Fr(n,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw Fr(n,"email-already-in-use",o);if(c==="USER_DISABLED")throw Fr(n,"user-disabled",o);const l=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw Wh(n,l,u);ue(n,l)}}catch(i){if(i instanceof Ce)throw i;ue(n,"network-request-failed")}}async function pt(n,e,t,r,i={}){const s=await de(n,e,t,r,i);return"mfaPendingCredential"in s&&ue(n,"multi-factor-auth-required",{_serverResponse:s}),s}function Qh(n,e,t,r){const i=`${e}${t}?${r}`;return n.config.emulator?tc(n.config,i):`${n.config.apiScheme}://${i}`}class rv{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(we(this.auth,"network-request-failed")),nv.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Fr(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const i=we(n,e,r);return i.customData._tokenResponse=t,i}/**
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
 */async function iv(n,e){return de(n,"POST","/v1/accounts:delete",e)}async function sv(n,e){return de(n,"POST","/v1/accounts:update",e)}async function ov(n,e){return de(n,"POST","/v1/accounts:lookup",e)}/**
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
 */function $r(n){if(!!n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function av(n,e=!1){const t=k(n),r=await t.getIdToken(e),i=Hs(r);w(i&&i.exp&&i.auth_time&&i.iat,t.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:$r(Wo(i.auth_time)),issuedAtTime:$r(Wo(i.iat)),expirationTime:$r(Wo(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Wo(n){return Number(n)*1e3}function Hs(n){var e;const[t,r,i]=n.split(".");if(t===void 0||r===void 0||i===void 0)return us("JWT malformed, contained fewer than 3 sections"),null;try{const s=Ch(r);return s?JSON.parse(s):(us("Failed to decode base64 JWT payload"),null)}catch(s){return us("Caught error parsing JWT payload as JSON",(e=s)===null||e===void 0?void 0:e.toString()),null}}function cv(n){const e=Hs(n);return w(e,"internal-error"),w(typeof e.exp<"u","internal-error"),w(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function ht(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof Ce&&uv(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function uv({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
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
 */class lv{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){var e;try{await this.user.getIdToken(!0)}catch(t){((e=t)===null||e===void 0?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Yh{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=$r(this.lastLoginAt),this.creationTime=$r(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function ni(n){var e;const t=n.auth,r=await n.getIdToken(),i=await ht(n,ov(t,{idToken:r}));w(i==null?void 0:i.users.length,t,"internal-error");const s=i.users[0];n._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?fv(s.providerUserInfo):[],a=dv(n.providerData,o),c=n.isAnonymous,u=!(n.email&&s.passwordHash)&&!(a!=null&&a.length),l=c?u:!1,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new Yh(s.createdAt,s.lastLoginAt),isAnonymous:l};Object.assign(n,h)}async function hv(n){const e=k(n);await ni(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function dv(n,e){return[...n.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function fv(n){return n.map(e=>{var{providerId:t}=e,r=Ja(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function mv(n,e){const t=await Hh(n,{},async()=>{const r=lr({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=n.config,o=Qh(n,i,"/v1/token",`key=${s}`),a=await n._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",zh.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}/**
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
 */class ri{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){w(e.idToken,"internal-error"),w(typeof e.idToken<"u","internal-error"),w(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):cv(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return w(!this.accessToken||this.refreshToken,e,"user-token-expired"),!t&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:i,expiresIn:s}=await mv(e,t);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:i,expirationTime:s}=t,o=new ri;return r&&(w(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(w(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(w(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ri,this.toJSON())}_performRefresh(){return Ye("not implemented")}}/**
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
 */function It(n,e){w(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class ln{constructor(e){var{uid:t,auth:r,stsTokenManager:i}=e,s=Ja(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new lv(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Yh(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const t=await ht(this,this.stsTokenManager.getToken(this.auth,e));return w(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return av(this,e)}reload(){return hv(this)}_assign(e){this!==e&&(w(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new ln(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){w(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await ni(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await ht(this,iv(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var r,i,s,o,a,c,u,l;const h=(r=t.displayName)!==null&&r!==void 0?r:void 0,d=(i=t.email)!==null&&i!==void 0?i:void 0,p=(s=t.phoneNumber)!==null&&s!==void 0?s:void 0,g=(o=t.photoURL)!==null&&o!==void 0?o:void 0,b=(a=t.tenantId)!==null&&a!==void 0?a:void 0,S=(c=t._redirectEventId)!==null&&c!==void 0?c:void 0,M=(u=t.createdAt)!==null&&u!==void 0?u:void 0,U=(l=t.lastLoginAt)!==null&&l!==void 0?l:void 0,{uid:V,emailVerified:te,isAnonymous:z,providerData:q,stsTokenManager:pe}=t;w(V&&pe,e,"internal-error");const Ht=ri.fromJSON(this.name,pe);w(typeof V=="string",e,"internal-error"),It(h,e.name),It(d,e.name),w(typeof te=="boolean",e,"internal-error"),w(typeof z=="boolean",e,"internal-error"),It(p,e.name),It(g,e.name),It(b,e.name),It(S,e.name),It(M,e.name),It(U,e.name);const Vo=new ln({uid:V,auth:e,email:d,emailVerified:te,displayName:h,isAnonymous:z,photoURL:g,phoneNumber:p,tenantId:b,stsTokenManager:Ht,createdAt:M,lastLoginAt:U});return q&&Array.isArray(q)&&(Vo.providerData=q.map(tg=>Object.assign({},tg))),S&&(Vo._redirectEventId=S),Vo}static async _fromIdTokenResponse(e,t,r=!1){const i=new ri;i.updateFromServerResponse(t);const s=new ln({uid:t.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await ni(s),s}}/**
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
 */class Xh{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Xh.type="NONE";const Qn=Xh;/**
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
 */function hn(n,e,t){return`firebase:${n}:${e}:${t}`}class jn{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=hn(this.userKey,i.apiKey,s),this.fullPersistenceKey=hn("persistence",i.apiKey,s),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?ln._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new jn(Me(Qn),e,r);const i=(await Promise.all(t.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||Me(Qn);const o=hn(r,e.config.apiKey,e.name);let a=null;for(const u of t)try{const l=await u._get(o);if(l){const h=ln._fromJSON(e,l);u!==s&&(a=h),s=u;break}}catch{}const c=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!c.length?new jn(s,e,r):(s=c[0],a&&await s._set(o,a.toJSON()),await Promise.all(t.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new jn(s,e,r))}}/**
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
 */function Wu(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(ed(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Jh(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(td(e))return"Blackberry";if(nd(e))return"Webos";if(nc(e))return"Safari";if((e.includes("chrome/")||Zh(e))&&!e.includes("edge/"))return"Chrome";if(Si(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Jh(n=W()){return/firefox\//i.test(n)}function nc(n=W()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Zh(n=W()){return/crios\//i.test(n)}function ed(n=W()){return/iemobile/i.test(n)}function Si(n=W()){return/android/i.test(n)}function td(n=W()){return/blackberry/i.test(n)}function nd(n=W()){return/webos/i.test(n)}function dr(n=W()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function pv(n=W()){return/(iPad|iPhone|iPod).*OS 7_\d/i.test(n)||/(iPad|iPhone|iPod).*OS 8_\d/i.test(n)}function gv(n=W()){var e;return dr(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function yv(){return Nh()&&document.documentMode===10}function rd(n=W()){return dr(n)||Si(n)||nd(n)||td(n)||/windows phone/i.test(n)||ed(n)}function vv(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function id(n,e=[]){let t;switch(n){case"Browser":t=Wu(W());break;case"Worker":t=`${Wu(W())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${An}/${r}`}/**
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
 */class wv{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=s=>new Promise((o,a)=>{try{const c=e(s);o(c)}catch(c){a(c)}});r.onAbort=t,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){var t;if(this.auth.currentUser===e)return;const r=[];try{for(const i of this.queue)await i(e),i.onAbort&&r.push(i.onAbort)}catch(i){r.reverse();for(const s of r)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:(t=i)===null||t===void 0?void 0:t.message})}}}/**
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
 */class Iv{constructor(e,t,r){this.app=e,this.heartbeatServiceProvider=t,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new zu(this),this.idTokenSubscription=new zu(this),this.beforeStateQueue=new wv(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Kh,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Me(t)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await jn.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var t;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,a=i==null?void 0:i._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c==null?void 0:c.user)&&(i=c.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return w(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){var t;try{await ni(e)}catch(r){if(((t=r)===null||t===void 0?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=ev()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?k(e):null;return t&&w(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&w(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Me(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new kn("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Me(e)||this._popupRedirectResolver;w(t,this,"argument-error"),this.redirectPersistenceManager=await jn.create(this,[Me(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,i){if(this._deleted)return()=>{};const s=typeof t=="function"?t:t.next.bind(t),o=this._isInitialized?Promise.resolve():this._initializationPromise;return w(o,this,"internal-error"),o.then(()=>s(this.currentUser)),typeof t=="function"?e.addObserver(t,r,i):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return w(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=id(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return r&&(t["X-Firebase-Client"]=r),t}}function le(n){return k(n)}class zu{constructor(e){this.auth=e,this.observer=null,this.addObserver=xh(t=>this.observer=t)}get next(){return w(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function sd(n,e,t){const r=le(n);w(r._canInitEmulator,r,"emulator-config-failed"),w(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(t!=null&&t.disableWarnings),s=od(e),{host:o,port:a}=_v(e),c=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||bv()}function od(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function _v(n){const e=od(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Hu(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:Hu(o)}}}function Hu(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function bv(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
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
 */class fr{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Ye("not implemented")}_getIdTokenResponse(e){return Ye("not implemented")}_linkToIdToken(e,t){return Ye("not implemented")}_getReauthenticationResolver(e){return Ye("not implemented")}}/**
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
 */async function ad(n,e){return de(n,"POST","/v1/accounts:resetPassword",ie(n,e))}async function cd(n,e){return de(n,"POST","/v1/accounts:update",e)}async function Ev(n,e){return de(n,"POST","/v1/accounts:update",ie(n,e))}/**
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
 */async function Tv(n,e){return pt(n,"POST","/v1/accounts:signInWithPassword",ie(n,e))}async function Qs(n,e){return de(n,"POST","/v1/accounts:sendOobCode",ie(n,e))}async function Sv(n,e){return Qs(n,e)}async function kv(n,e){return Qs(n,e)}async function Av(n,e){return Qs(n,e)}async function Cv(n,e){return Qs(n,e)}/**
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
 */async function Dv(n,e){return pt(n,"POST","/v1/accounts:signInWithEmailLink",ie(n,e))}async function Nv(n,e){return pt(n,"POST","/v1/accounts:signInWithEmailLink",ie(n,e))}/**
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
 */class ii extends fr{constructor(e,t,r,i=null){super("password",r),this._email=e,this._password=t,this._tenantId=i}static _fromEmailAndPassword(e,t){return new ii(e,t,"password")}static _fromEmailAndCode(e,t,r=null){return new ii(e,t,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if((t==null?void 0:t.email)&&(t==null?void 0:t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return Tv(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Dv(e,{email:this._email,oobCode:this._password});default:ue(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return cd(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Nv(e,{idToken:t,email:this._email,oobCode:this._password});default:ue(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function lt(n,e){return pt(n,"POST","/v1/accounts:signInWithIdp",ie(n,e))}/**
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
 */const Rv="http://localhost";class rt extends fr{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new rt(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):ue("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=t,s=Ja(t,["providerId","signInMethod"]);if(!r||!i)return null;const o=new rt(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return lt(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,lt(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,lt(e,t)}buildRequest(){const e={requestUri:Rv,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=lr(t)}return e}}/**
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
 */async function xv(n,e){return de(n,"POST","/v1/accounts:sendVerificationCode",ie(n,e))}async function Ov(n,e){return pt(n,"POST","/v1/accounts:signInWithPhoneNumber",ie(n,e))}async function Pv(n,e){const t=await pt(n,"POST","/v1/accounts:signInWithPhoneNumber",ie(n,e));if(t.temporaryProof)throw Fr(n,"account-exists-with-different-credential",t);return t}const Lv={USER_NOT_FOUND:"user-not-found"};async function Mv(n,e){const t=Object.assign(Object.assign({},e),{operation:"REAUTH"});return pt(n,"POST","/v1/accounts:signInWithPhoneNumber",ie(n,t),Lv)}/**
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
 */class dn extends fr{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,t){return new dn({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new dn({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return Ov(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return Pv(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return Mv(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:t,verificationId:r,verificationCode:i}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:r,code:i}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){typeof e=="string"&&(e=JSON.parse(e));const{verificationId:t,verificationCode:r,phoneNumber:i,temporaryProof:s}=e;return!r&&!t&&!i&&!s?null:new dn({verificationId:t,verificationCode:r,phoneNumber:i,temporaryProof:s})}}/**
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
 */function Fv(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Uv(n){const e=Bn(Mr(n)).link,t=e?Bn(Mr(e)).deep_link_id:null,r=Bn(Mr(n)).deep_link_id;return(r?Bn(Mr(r)).link:null)||r||t||e||n}class Ys{constructor(e){var t,r,i,s,o,a;const c=Bn(Mr(e)),u=(t=c.apiKey)!==null&&t!==void 0?t:null,l=(r=c.oobCode)!==null&&r!==void 0?r:null,h=Fv((i=c.mode)!==null&&i!==void 0?i:null);w(u&&l&&h,"argument-error"),this.apiKey=u,this.operation=h,this.code=l,this.continueUrl=(s=c.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const t=Uv(e);try{return new Ys(t)}catch{return null}}}/**
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
 */class qt{constructor(){this.providerId=qt.PROVIDER_ID}static credential(e,t){return ii._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const r=Ys.parseLink(t);return w(r,"argument-error"),ii._fromEmailAndCode(e,r.code,r.tenantId)}}qt.PROVIDER_ID="password";qt.EMAIL_PASSWORD_SIGN_IN_METHOD="password";qt.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class gt{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class mr extends gt{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}class Gn extends mr{static credentialFromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;return w("providerId"in t&&"signInMethod"in t,"argument-error"),rt._fromParams(t)}credential(e){return this._credential(Object.assign(Object.assign({},e),{nonce:e.rawNonce}))}_credential(e){return w(e.idToken||e.accessToken,"argument-error"),rt._fromParams(Object.assign(Object.assign({},e),{providerId:this.providerId,signInMethod:this.providerId}))}static credentialFromResult(e){return Gn.oauthCredentialFromTaggedObject(e)}static credentialFromError(e){return Gn.oauthCredentialFromTaggedObject(e.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r,oauthTokenSecret:i,pendingToken:s,nonce:o,providerId:a}=e;if(!r&&!i&&!t&&!s||!a)return null;try{return new Gn(a)._credential({idToken:t,accessToken:r,nonce:o,pendingToken:s})}catch{return null}}}/**
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
 */class Ke extends mr{constructor(){super("facebook.com")}static credential(e){return rt._fromParams({providerId:Ke.PROVIDER_ID,signInMethod:Ke.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ke.credentialFromTaggedObject(e)}static credentialFromError(e){return Ke.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ke.credential(e.oauthAccessToken)}catch{return null}}}Ke.FACEBOOK_SIGN_IN_METHOD="facebook.com";Ke.PROVIDER_ID="facebook.com";/**
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
 */class We extends mr{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return rt._fromParams({providerId:We.PROVIDER_ID,signInMethod:We.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return We.credentialFromTaggedObject(e)}static credentialFromError(e){return We.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return We.credential(t,r)}catch{return null}}}We.GOOGLE_SIGN_IN_METHOD="google.com";We.PROVIDER_ID="google.com";/**
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
 */class ze extends mr{constructor(){super("github.com")}static credential(e){return rt._fromParams({providerId:ze.PROVIDER_ID,signInMethod:ze.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ze.credentialFromTaggedObject(e)}static credentialFromError(e){return ze.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ze.credential(e.oauthAccessToken)}catch{return null}}}ze.GITHUB_SIGN_IN_METHOD="github.com";ze.PROVIDER_ID="github.com";/**
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
 */const Vv="http://localhost";class Yn extends fr{constructor(e,t){super(e,e),this.pendingToken=t}_getIdTokenResponse(e){const t=this.buildRequest();return lt(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,lt(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,lt(e,t)}toJSON(){return{signInMethod:this.signInMethod,providerId:this.providerId,pendingToken:this.pendingToken}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i,pendingToken:s}=t;return!r||!i||!s||r!==i?null:new Yn(r,s)}static _create(e,t){return new Yn(e,t)}buildRequest(){return{requestUri:Vv,returnSecureToken:!0,pendingToken:this.pendingToken}}}/**
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
 */const Bv="saml.";class bs extends gt{constructor(e){w(e.startsWith(Bv),"argument-error"),super(e)}static credentialFromResult(e){return bs.samlCredentialFromTaggedObject(e)}static credentialFromError(e){return bs.samlCredentialFromTaggedObject(e.customData||{})}static credentialFromJSON(e){const t=Yn.fromJSON(e);return w(t,"argument-error"),t}static samlCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{pendingToken:t,providerId:r}=e;if(!t||!r)return null;try{return Yn._create(r,t)}catch{return null}}}/**
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
 */class He extends mr{constructor(){super("twitter.com")}static credential(e,t){return rt._fromParams({providerId:He.PROVIDER_ID,signInMethod:He.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return He.credentialFromTaggedObject(e)}static credentialFromError(e){return He.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return He.credential(t,r)}catch{return null}}}He.TWITTER_SIGN_IN_METHOD="twitter.com";He.PROVIDER_ID="twitter.com";/**
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
 */async function ud(n,e){return pt(n,"POST","/v1/accounts:signUp",ie(n,e))}/**
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
 */class qe{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,i=!1){const s=await ln._fromIdTokenResponse(e,r,i),o=Qu(r);return new qe({user:s,providerId:o,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const i=Qu(r);return new qe({user:e,providerId:i,_tokenResponse:r,operationType:t})}}function Qu(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
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
 */async function qv(n){var e;const t=le(n);if(await t._initializationPromise,!((e=t.currentUser)===null||e===void 0)&&e.isAnonymous)return new qe({user:t.currentUser,providerId:null,operationType:"signIn"});const r=await ud(t,{returnSecureToken:!0}),i=await qe._fromIdTokenResponse(t,"signIn",r,!0);return await t._updateCurrentUser(i.user),i}/**
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
 */class Es extends Ce{constructor(e,t,r,i){var s;super(t.code,t.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Es.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,i){return new Es(e,t,r,i)}}function ld(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Es._fromErrorAndOperation(n,s,e,r):s})}/**
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
 */function hd(n){return new Set(n.map(({providerId:e})=>e).filter(e=>!!e))}/**
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
 */async function $v(n,e){const t=k(n);await Xs(!0,t,e);const{providerUserInfo:r}=await sv(t.auth,{idToken:await t.getIdToken(),deleteProvider:[e]}),i=hd(r||[]);return t.providerData=t.providerData.filter(s=>i.has(s.providerId)),i.has("phone")||(t.phoneNumber=null),await t.auth._persistUserIfCurrent(t),t}async function rc(n,e,t=!1){const r=await ht(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return qe._forOperation(n,"link",r)}async function Xs(n,e,t){await ni(e);const r=hd(e.providerData),i=n===!1?"provider-already-linked":"no-such-provider";w(r.has(t)===n,e.auth,i)}/**
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
 */async function dd(n,e,t=!1){var r;const{auth:i}=n,s="reauthenticate";try{const o=await ht(n,ld(i,s,e,n),t);w(o.idToken,i,"internal-error");const a=Hs(o.idToken);w(a,i,"internal-error");const{sub:c}=a;return w(n.uid===c,i,"user-mismatch"),qe._forOperation(n,s,o)}catch(o){throw((r=o)===null||r===void 0?void 0:r.code)==="auth/user-not-found"&&ue(i,"user-mismatch"),o}}/**
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
 */async function fd(n,e,t=!1){const r="signIn",i=await ld(n,r,e),s=await qe._fromIdTokenResponse(n,r,i);return t||await n._updateCurrentUser(s.user),s}async function Js(n,e){return fd(le(n),e)}async function md(n,e){const t=k(n);return await Xs(!1,t,e.providerId),rc(t,e)}async function pd(n,e){return dd(k(n),e)}/**
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
 */async function jv(n,e){return pt(n,"POST","/v1/accounts:signInWithCustomToken",ie(n,e))}/**
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
 */async function Gv(n,e){const t=le(n),r=await jv(t,{token:e,returnSecureToken:!0}),i=await qe._fromIdTokenResponse(t,"signIn",r);return await t._updateCurrentUser(i.user),i}/**
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
 */class Zs{constructor(e,t){this.factorId=e,this.uid=t.mfaEnrollmentId,this.enrollmentTime=new Date(t.enrolledAt).toUTCString(),this.displayName=t.displayName}static _fromServerResponse(e,t){return"phoneInfo"in t?ic._fromServerResponse(e,t):ue(e,"internal-error")}}class ic extends Zs{constructor(e){super("phone",e),this.phoneNumber=e.phoneInfo}static _fromServerResponse(e,t){return new ic(t)}}/**
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
 */function eo(n,e,t){var r;w(((r=t.url)===null||r===void 0?void 0:r.length)>0,n,"invalid-continue-uri"),w(typeof t.dynamicLinkDomain>"u"||t.dynamicLinkDomain.length>0,n,"invalid-dynamic-link-domain"),e.continueUrl=t.url,e.dynamicLinkDomain=t.dynamicLinkDomain,e.canHandleCodeInApp=t.handleCodeInApp,t.iOS&&(w(t.iOS.bundleId.length>0,n,"missing-ios-bundle-id"),e.iOSBundleId=t.iOS.bundleId),t.android&&(w(t.android.packageName.length>0,n,"missing-android-pkg-name"),e.androidInstallApp=t.android.installApp,e.androidMinimumVersionCode=t.android.minimumVersion,e.androidPackageName=t.android.packageName)}/**
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
 */async function Kv(n,e,t){const r=k(n),i={requestType:"PASSWORD_RESET",email:e};t&&eo(r,i,t),await kv(r,i)}async function Wv(n,e,t){await ad(k(n),{oobCode:e,newPassword:t})}async function zv(n,e){await Ev(k(n),{oobCode:e})}async function gd(n,e){const t=k(n),r=await ad(t,{oobCode:e}),i=r.requestType;switch(w(i,t,"internal-error"),i){case"EMAIL_SIGNIN":break;case"VERIFY_AND_CHANGE_EMAIL":w(r.newEmail,t,"internal-error");break;case"REVERT_SECOND_FACTOR_ADDITION":w(r.mfaInfo,t,"internal-error");default:w(r.email,t,"internal-error")}let s=null;return r.mfaInfo&&(s=Zs._fromServerResponse(le(t),r.mfaInfo)),{data:{email:(r.requestType==="VERIFY_AND_CHANGE_EMAIL"?r.newEmail:r.email)||null,previousEmail:(r.requestType==="VERIFY_AND_CHANGE_EMAIL"?r.email:r.newEmail)||null,multiFactorInfo:s},operation:i}}async function Hv(n,e){const{data:t}=await gd(k(n),e);return t.email}async function Qv(n,e,t){const r=le(n),i=await ud(r,{returnSecureToken:!0,email:e,password:t}),s=await qe._fromIdTokenResponse(r,"signIn",i);return await r._updateCurrentUser(s.user),s}function Yv(n,e,t){return Js(k(n),qt.credential(e,t))}/**
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
 */async function Xv(n,e,t){const r=k(n),i={requestType:"EMAIL_SIGNIN",email:e};w(t.handleCodeInApp,r,"argument-error"),t&&eo(r,i,t),await Av(r,i)}function Jv(n,e){const t=Ys.parseLink(e);return(t==null?void 0:t.operation)==="EMAIL_SIGNIN"}async function Zv(n,e,t){const r=k(n),i=qt.credentialWithLink(e,t||ti());return w(i._tenantId===(r.tenantId||null),r,"tenant-id-mismatch"),Js(r,i)}/**
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
 */async function ew(n,e){return de(n,"POST","/v1/accounts:createAuthUri",ie(n,e))}/**
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
 */async function tw(n,e){const t=ec()?ti():"http://localhost",r={identifier:e,continueUri:t},{signinMethods:i}=await ew(k(n),r);return i||[]}async function nw(n,e){const t=k(n),i={requestType:"VERIFY_EMAIL",idToken:await n.getIdToken()};e&&eo(t.auth,i,e);const{email:s}=await Sv(t.auth,i);s!==n.email&&await n.reload()}async function rw(n,e,t){const r=k(n),s={requestType:"VERIFY_AND_CHANGE_EMAIL",idToken:await n.getIdToken(),newEmail:e};t&&eo(r.auth,s,t);const{email:o}=await Cv(r.auth,s);o!==n.email&&await n.reload()}/**
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
 */async function iw(n,e){return de(n,"POST","/v1/accounts:update",e)}/**
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
 */async function sw(n,{displayName:e,photoURL:t}){if(e===void 0&&t===void 0)return;const r=k(n),s={idToken:await r.getIdToken(),displayName:e,photoUrl:t,returnSecureToken:!0},o=await ht(r,iw(r.auth,s));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const a=r.providerData.find(({providerId:c})=>c==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function ow(n,e){return yd(k(n),e,null)}function aw(n,e){return yd(k(n),null,e)}async function yd(n,e,t){const{auth:r}=n,s={idToken:await n.getIdToken(),returnSecureToken:!0};e&&(s.email=e),t&&(s.password=t);const o=await ht(n,cd(r,s));await n._updateTokensIfNecessary(o,!0)}/**
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
 */function cw(n){var e,t;if(!n)return null;const{providerId:r}=n,i=n.rawUserInfo?JSON.parse(n.rawUserInfo):{},s=n.isNewUser||n.kind==="identitytoolkit#SignupNewUserResponse";if(!r&&(n==null?void 0:n.idToken)){const o=(t=(e=Hs(n.idToken))===null||e===void 0?void 0:e.firebase)===null||t===void 0?void 0:t.sign_in_provider;if(o){const a=o!=="anonymous"&&o!=="custom"?o:null;return new Kn(s,a)}}if(!r)return null;switch(r){case"facebook.com":return new uw(s,i);case"github.com":return new lw(s,i);case"google.com":return new hw(s,i);case"twitter.com":return new dw(s,i,n.screenName||null);case"custom":case"anonymous":return new Kn(s,null);default:return new Kn(s,r,i)}}class Kn{constructor(e,t,r={}){this.isNewUser=e,this.providerId=t,this.profile=r}}class vd extends Kn{constructor(e,t,r,i){super(e,t,r),this.username=i}}class uw extends Kn{constructor(e,t){super(e,"facebook.com",t)}}class lw extends vd{constructor(e,t){super(e,"github.com",t,typeof(t==null?void 0:t.login)=="string"?t==null?void 0:t.login:null)}}class hw extends Kn{constructor(e,t){super(e,"google.com",t)}}class dw extends vd{constructor(e,t,r){super(e,"twitter.com",t,r)}}function fw(n){const{user:e,_tokenResponse:t}=n;return e.isAnonymous&&!t?{providerId:null,isNewUser:!1,profile:null}:cw(t)}function mw(n,e,t,r){return k(n).onIdTokenChanged(e,t,r)}function pw(n,e,t){return k(n).beforeAuthStateChanged(e,t)}function ak(n,e,t,r){return k(n).onAuthStateChanged(e,t,r)}class sn{constructor(e,t,r){this.type=e,this.credential=t,this.auth=r}static _fromIdtoken(e,t){return new sn("enroll",e,t)}static _fromMfaPendingCredential(e){return new sn("signin",e)}toJSON(){return{multiFactorSession:{[this.type==="enroll"?"idToken":"pendingCredential"]:this.credential}}}static fromJSON(e){var t,r;if(e!=null&&e.multiFactorSession){if(!((t=e.multiFactorSession)===null||t===void 0)&&t.pendingCredential)return sn._fromMfaPendingCredential(e.multiFactorSession.pendingCredential);if(!((r=e.multiFactorSession)===null||r===void 0)&&r.idToken)return sn._fromIdtoken(e.multiFactorSession.idToken)}return null}}/**
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
 */class sc{constructor(e,t,r){this.session=e,this.hints=t,this.signInResolver=r}static _fromError(e,t){const r=le(e),i=t.customData._serverResponse,s=(i.mfaInfo||[]).map(a=>Zs._fromServerResponse(r,a));w(i.mfaPendingCredential,r,"internal-error");const o=sn._fromMfaPendingCredential(i.mfaPendingCredential);return new sc(o,s,async a=>{const c=await a._process(r,o);delete i.mfaInfo,delete i.mfaPendingCredential;const u=Object.assign(Object.assign({},i),{idToken:c.idToken,refreshToken:c.refreshToken});switch(t.operationType){case"signIn":const l=await qe._fromIdTokenResponse(r,t.operationType,u);return await r._updateCurrentUser(l.user),l;case"reauthenticate":return w(t.user,r,"internal-error"),qe._forOperation(t.user,t.operationType,u);default:ue(r,"internal-error")}})}async resolveSignIn(e){const t=e;return this.signInResolver(t)}}function gw(n,e){var t;const r=k(n),i=e;return w(e.customData.operationType,r,"argument-error"),w((t=i.customData._serverResponse)===null||t===void 0?void 0:t.mfaPendingCredential,r,"argument-error"),sc._fromError(r,i)}/**
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
 */function yw(n,e){return de(n,"POST","/v2/accounts/mfaEnrollment:start",ie(n,e))}function vw(n,e){return de(n,"POST","/v2/accounts/mfaEnrollment:finalize",ie(n,e))}function ww(n,e){return de(n,"POST","/v2/accounts/mfaEnrollment:withdraw",ie(n,e))}class oc{constructor(e){this.user=e,this.enrolledFactors=[],e._onReload(t=>{t.mfaInfo&&(this.enrolledFactors=t.mfaInfo.map(r=>Zs._fromServerResponse(e.auth,r)))})}static _fromUser(e){return new oc(e)}async getSession(){return sn._fromIdtoken(await this.user.getIdToken(),this.user.auth)}async enroll(e,t){const r=e,i=await this.getSession(),s=await ht(this.user,r._process(this.user.auth,i,t));return await this.user._updateTokensIfNecessary(s),this.user.reload()}async unenroll(e){var t;const r=typeof e=="string"?e:e.uid,i=await this.user.getIdToken(),s=await ht(this.user,ww(this.user.auth,{idToken:i,mfaEnrollmentId:r}));this.enrolledFactors=this.enrolledFactors.filter(({uid:o})=>o!==r),await this.user._updateTokensIfNecessary(s);try{await this.user.reload()}catch(o){if(((t=o)===null||t===void 0?void 0:t.code)!=="auth/user-token-expired")throw o}}}const zo=new WeakMap;function Iw(n){const e=k(n);return zo.has(e)||zo.set(e,oc._fromUser(e)),zo.get(e)}const Ts="__sak";/**
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
 */class wd{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Ts,"1"),this.storage.removeItem(Ts),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function _w(){const n=W();return nc(n)||dr(n)}const bw=1e3,Ew=10;class Id extends wd{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=_w()&&vv(),this.fallbackToPolling=rd(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),i=this.localCache[t];r!==i&&e(t,i,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const r=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!t)return}const i=()=>{const o=this.storage.getItem(r);!t&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);yv()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,Ew):i()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},bw)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Id.type="LOCAL";const to=Id;/**
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
 */class _d extends wd{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}_d.type="SESSION";const xt=_d;/**
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
 */function Tw(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class no{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(i=>i.isListeningto(e));if(t)return t;const r=new no(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:i,data:s}=t.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async u=>u(t.origin,s)),c=await Tw(a);t.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:c})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}no.receivers=[];/**
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
 */function ki(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class Sw{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,c)=>{const u=ki("",20);i.port1.start();const l=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(h){const d=h;if(d.data.eventId===u)switch(d.data.status){case"ack":clearTimeout(l),s=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(d.data.response);break;default:clearTimeout(l),clearTimeout(s),c(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:t},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function ne(){return window}function kw(n){ne().location.href=n}/**
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
 */function ac(){return typeof ne().WorkerGlobalScope<"u"&&typeof ne().importScripts=="function"}async function Aw(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Cw(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function Dw(){return ac()?self:null}/**
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
 */const bd="firebaseLocalStorageDb",Nw=1,Ss="firebaseLocalStorage",Ed="fbase_key";class Ai{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function ro(n,e){return n.transaction([Ss],e?"readwrite":"readonly").objectStore(Ss)}function Rw(){const n=indexedDB.deleteDatabase(bd);return new Ai(n).toPromise()}function fa(){const n=indexedDB.open(bd,Nw);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(Ss,{keyPath:Ed})}catch(i){t(i)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(Ss)?e(r):(r.close(),await Rw(),e(await fa()))})})}async function Yu(n,e,t){const r=ro(n,!0).put({[Ed]:e,value:t});return new Ai(r).toPromise()}async function xw(n,e){const t=ro(n,!1).get(e),r=await new Ai(t).toPromise();return r===void 0?null:r.value}function Xu(n,e){const t=ro(n,!0).delete(e);return new Ai(t).toPromise()}const Ow=800,Pw=3;class Td{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await fa(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>Pw)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return ac()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=no._getInstance(Dw()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await Aw(),!this.activeServiceWorker)return;this.sender=new Sw(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);!r||((e=r[0])===null||e===void 0?void 0:e.fulfilled)&&((t=r[0])===null||t===void 0?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Cw()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await fa();return await Yu(e,Ts,"1"),await Xu(e,Ts),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>Yu(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>xw(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Xu(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=ro(i,!1).getAll();return new Ai(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),t.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),t.push(i));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Ow)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Td.type="LOCAL";const Xn=Td;/**
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
 */function Lw(n,e){return de(n,"POST","/v2/accounts/mfaSignIn:start",ie(n,e))}function Mw(n,e){return de(n,"POST","/v2/accounts/mfaSignIn:finalize",ie(n,e))}/**
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
 */async function Fw(n){return(await de(n,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""}/**
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
 */function Uw(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}function Sd(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=i=>{const s=we("internal-error");s.customData=i,t(s)},r.type="text/javascript",r.charset="UTF-8",Uw().appendChild(r)})}function kd(n){return`__${n}${Math.floor(Math.random()*1e6)}`}/**
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
 */const Vw=500,Bw=6e4,Zi=1e12;class qw{constructor(e){this.auth=e,this.counter=Zi,this._widgets=new Map}render(e,t){const r=this.counter;return this._widgets.set(r,new $w(e,this.auth.name,t||{})),this.counter++,r}reset(e){var t;const r=e||Zi;(t=this._widgets.get(r))===null||t===void 0||t.delete(),this._widgets.delete(r)}getResponse(e){var t;const r=e||Zi;return((t=this._widgets.get(r))===null||t===void 0?void 0:t.getResponse())||""}async execute(e){var t;const r=e||Zi;return(t=this._widgets.get(r))===null||t===void 0||t.execute(),""}}class $w{constructor(e,t,r){this.params=r,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};const i=typeof e=="string"?document.getElementById(e):e;w(i,"argument-error",{appName:t}),this.container=i,this.isVisible=this.params.size!=="invisible",this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),!this.timerId&&(this.timerId=window.setTimeout(()=>{this.responseToken=jw(50);const{callback:e,"expired-callback":t}=this.params;if(e)try{e(this.responseToken)}catch{}this.timerId=window.setTimeout(()=>{if(this.timerId=null,this.responseToken=null,t)try{t()}catch{}this.isVisible&&this.execute()},Bw)},Vw))}checkIfDeleted(){if(this.deleted)throw new Error("reCAPTCHA mock was already deleted!")}}function jw(n){const e=[],t="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let r=0;r<n;r++)e.push(t.charAt(Math.floor(Math.random()*t.length)));return e.join("")}/**
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
 */const Ho=kd("rcb"),Gw=new Ti(3e4,6e4),Kw="https://www.google.com/recaptcha/api.js?";class Ww{constructor(){var e;this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!(!((e=ne().grecaptcha)===null||e===void 0)&&e.render)}load(e,t=""){return w(zw(t),e,"argument-error"),this.shouldResolveImmediately(t)?Promise.resolve(ne().grecaptcha):new Promise((r,i)=>{const s=ne().setTimeout(()=>{i(we(e,"network-request-failed"))},Gw.get());ne()[Ho]=()=>{ne().clearTimeout(s),delete ne()[Ho];const a=ne().grecaptcha;if(!a){i(we(e,"internal-error"));return}const c=a.render;a.render=(u,l)=>{const h=c(u,l);return this.counter++,h},this.hostLanguage=t,r(a)};const o=`${Kw}?${lr({onload:Ho,render:"explicit",hl:t})}`;Sd(o).catch(()=>{clearTimeout(s),i(we(e,"internal-error"))})})}clearedOneInstance(){this.counter--}shouldResolveImmediately(e){var t;return!!(!((t=ne().grecaptcha)===null||t===void 0)&&t.render)&&(e===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}}function zw(n){return n.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(n)}class Hw{async load(e){return new qw(e)}clearedOneInstance(){}}/**
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
 */const Ad="recaptcha",Qw={theme:"light",type:"image"};class Yw{constructor(e,t=Object.assign({},Qw),r){this.parameters=t,this.type=Ad,this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=le(r),this.isInvisible=this.parameters.size==="invisible",w(typeof document<"u",this.auth,"operation-not-supported-in-this-environment");const i=typeof e=="string"?document.getElementById(e):e;w(i,this.auth,"argument-error"),this.container=i,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new Hw:new Ww,this.validateStartingState()}async verify(){this.assertNotDestroyed();const e=await this.render(),t=this.getAssertedRecaptcha(),r=t.getResponse(e);return r||new Promise(i=>{const s=o=>{!o||(this.tokenChangeListeners.delete(s),i(o))};this.tokenChangeListeners.add(s),this.isInvisible&&t.execute(e)})}render(){try{this.assertNotDestroyed()}catch(e){return Promise.reject(e)}return this.renderPromise?this.renderPromise:(this.renderPromise=this.makeRenderPromise().catch(e=>{throw this.renderPromise=null,e}),this.renderPromise)}_reset(){this.assertNotDestroyed(),this.widgetId!==null&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach(e=>{this.container.removeChild(e)})}validateStartingState(){w(!this.parameters.sitekey,this.auth,"argument-error"),w(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),w(typeof document<"u",this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(e){return t=>{if(this.tokenChangeListeners.forEach(r=>r(t)),typeof e=="function")e(t);else if(typeof e=="string"){const r=ne()[e];typeof r=="function"&&r(t)}}}assertNotDestroyed(){w(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let e=this.container;if(!this.isInvisible){const t=document.createElement("div");e.appendChild(t),e=t}this.widgetId=this.getAssertedRecaptcha().render(e,this.parameters)}return this.widgetId}async init(){w(ec()&&!ac(),this.auth,"internal-error"),await Xw(),this.recaptcha=await this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);const e=await Fw(this.auth);w(e,this.auth,"internal-error"),this.parameters.sitekey=e}getAssertedRecaptcha(){return w(this.recaptcha,this.auth,"internal-error"),this.recaptcha}}function Xw(){let n=null;return new Promise(e=>{if(document.readyState==="complete"){e();return}n=()=>e(),window.addEventListener("load",n)}).catch(e=>{throw n&&window.removeEventListener("load",n),e})}/**
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
 */class cc{constructor(e,t){this.verificationId=e,this.onConfirmation=t}confirm(e){const t=dn._fromVerification(this.verificationId,e);return this.onConfirmation(t)}}async function Jw(n,e,t){const r=le(n),i=await io(r,e,k(t));return new cc(i,s=>Js(r,s))}async function Zw(n,e,t){const r=k(n);await Xs(!1,r,"phone");const i=await io(r.auth,e,k(t));return new cc(i,s=>md(r,s))}async function eI(n,e,t){const r=k(n),i=await io(r.auth,e,k(t));return new cc(i,s=>pd(r,s))}async function io(n,e,t){var r;const i=await t.verify();try{w(typeof i=="string",n,"argument-error"),w(t.type===Ad,n,"argument-error");let s;if(typeof e=="string"?s={phoneNumber:e}:s=e,"session"in s){const o=s.session;if("phoneNumber"in s)return w(o.type==="enroll",n,"internal-error"),(await yw(n,{idToken:o.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,recaptchaToken:i}})).phoneSessionInfo.sessionInfo;{w(o.type==="signin",n,"internal-error");const a=((r=s.multiFactorHint)===null||r===void 0?void 0:r.uid)||s.multiFactorUid;return w(a,n,"missing-multi-factor-info"),(await Lw(n,{mfaPendingCredential:o.credential,mfaEnrollmentId:a,phoneSignInInfo:{recaptchaToken:i}})).phoneResponseInfo.sessionInfo}}else{const{sessionInfo:o}=await xv(n,{phoneNumber:s.phoneNumber,recaptchaToken:i});return o}}finally{t._reset()}}async function tI(n,e){await rc(k(n),e)}/**
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
 */class je{constructor(e){this.providerId=je.PROVIDER_ID,this.auth=le(e)}verifyPhoneNumber(e,t){return io(this.auth,e,k(t))}static credential(e,t){return dn._fromVerification(e,t)}static credentialFromResult(e){const t=e;return je.credentialFromTaggedObject(t)}static credentialFromError(e){return je.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:t,temporaryProof:r}=e;return t&&r?dn._fromTokenResponse(t,r):null}}je.PROVIDER_ID="phone";je.PHONE_SIGN_IN_METHOD="phone";/**
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
 */function Cn(n,e){return e?Me(e):(w(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class uc extends fr{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return lt(e,this._buildIdpRequest())}_linkToIdToken(e,t){return lt(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return lt(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function nI(n){return fd(n.auth,new uc(n),n.bypassAuthState)}function rI(n){const{auth:e,user:t}=n;return w(t,e,"internal-error"),dd(t,new uc(n),n.bypassAuthState)}async function iI(n){const{auth:e,user:t}=n;return w(t,e,"internal-error"),rc(t,new uc(n),n.bypassAuthState)}/**
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
 */class Cd{constructor(e,t,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:t,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return nI;case"linkViaPopup":case"linkViaRedirect":return iI;case"reauthViaPopup":case"reauthViaRedirect":return rI;default:ue(this.auth,"internal-error")}}resolve(e){Ge(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Ge(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const sI=new Ti(2e3,1e4);async function oI(n,e,t){const r=le(n);hr(n,e,gt);const i=Cn(r,t);return new ot(r,"signInViaPopup",e,i).executeNotNull()}async function aI(n,e,t){const r=k(n);hr(r.auth,e,gt);const i=Cn(r.auth,t);return new ot(r.auth,"reauthViaPopup",e,i,r).executeNotNull()}async function cI(n,e,t){const r=k(n);hr(r.auth,e,gt);const i=Cn(r.auth,t);return new ot(r.auth,"linkViaPopup",e,i,r).executeNotNull()}class ot extends Cd{constructor(e,t,r,i,s){super(e,t,i,s),this.provider=r,this.authWindow=null,this.pollId=null,ot.currentPopupAction&&ot.currentPopupAction.cancel(),ot.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return w(e,this.auth,"internal-error"),e}async onExecution(){Ge(this.filter.length===1,"Popup operations only handle one event");const e=ki();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(we(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(we(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ot.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if(!((r=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(we(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,sI.get())};e()}}ot.currentPopupAction=null;/**
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
 */const uI="pendingRedirect",jr=new Map;class lI extends Cd{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=jr.get(this.auth._key());if(!e){try{const r=await hI(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}jr.set(this.auth._key(),e)}return this.bypassAuthState||jr.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function hI(n,e){const t=Nd(e),r=Dd(n);if(!await r._isAvailable())return!1;const i=await r._get(t)==="true";return await r._remove(t),i}async function lc(n,e){return Dd(n)._set(Nd(e),"true")}function dI(){jr.clear()}function hc(n,e){jr.set(n._key(),e)}function Dd(n){return Me(n._redirectPersistence)}function Nd(n){return hn(uI,n.config.apiKey,n.name)}/**
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
 */function fI(n,e,t){return mI(n,e,t)}async function mI(n,e,t){const r=le(n);hr(n,e,gt);const i=Cn(r,t);return await lc(i,r),i._openRedirect(r,e,"signInViaRedirect")}function pI(n,e,t){return gI(n,e,t)}async function gI(n,e,t){const r=k(n);hr(r.auth,e,gt);const i=Cn(r.auth,t);await lc(i,r.auth);const s=await Rd(r);return i._openRedirect(r.auth,e,"reauthViaRedirect",s)}function yI(n,e,t){return vI(n,e,t)}async function vI(n,e,t){const r=k(n);hr(r.auth,e,gt);const i=Cn(r.auth,t);await Xs(!1,r,e.providerId),await lc(i,r.auth);const s=await Rd(r);return i._openRedirect(r.auth,e,"linkViaRedirect",s)}async function wI(n,e){return await le(n)._initializationPromise,so(n,e,!1)}async function so(n,e,t=!1){const r=le(n),i=Cn(r,e),o=await new lI(r,i,t).execute();return o&&!t&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}async function Rd(n){const e=ki(`${n.uid}:::`);return n._redirectEventId=e,await n.auth._setRedirectUser(n),await n.auth._persistUserIfCurrent(n),e}/**
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
 */const II=10*60*1e3;class xd{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!_I(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!Od(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";t.onError(we(this.auth,i))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=II&&this.cachedEventUids.clear(),this.cachedEventUids.has(Ju(e))}saveEventToCache(e){this.cachedEventUids.add(Ju(e)),this.lastProcessedEventTime=Date.now()}}function Ju(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function Od({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function _I(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Od(n);default:return!1}}/**
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
 */async function Pd(n,e={}){return de(n,"GET","/v1/projects",e)}/**
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
 */const bI=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,EI=/^https?/;async function TI(n){if(n.config.emulator)return;const{authorizedDomains:e}=await Pd(n);for(const t of e)try{if(SI(t))return}catch{}ue(n,"unauthorized-domain")}function SI(n){const e=ti(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const o=new URL(n);return o.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&o.hostname===r}if(!EI.test(t))return!1;if(bI.test(n))return r===n;const i=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const kI=new Ti(3e4,6e4);function Zu(){const n=ne().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function AI(n){return new Promise((e,t)=>{var r,i,s;function o(){Zu(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Zu(),t(we(n,"network-request-failed"))},timeout:kI.get()})}if(!((i=(r=ne().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=ne().gapi)===null||s===void 0)&&s.load)o();else{const a=kd("iframefcb");return ne()[a]=()=>{gapi.load?o():t(we(n,"network-request-failed"))},Sd(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>t(c))}}).catch(e=>{throw ls=null,e})}let ls=null;function CI(n){return ls=ls||AI(n),ls}/**
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
 */const DI=new Ti(5e3,15e3),NI="__/auth/iframe",RI="emulator/auth/iframe",xI={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},OI=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function PI(n){const e=n.config;w(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?tc(e,RI):`https://${n.config.authDomain}/${NI}`,r={apiKey:e.apiKey,appName:n.name,v:An},i=OI.get(n.config.apiHost);i&&(r.eid=i);const s=n._getFrameworks();return s.length&&(r.fw=s.join(",")),`${t}?${lr(r).slice(1)}`}async function LI(n){const e=await CI(n),t=ne().gapi;return w(t,n,"internal-error"),e.open({where:document.body,url:PI(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:xI,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=we(n,"network-request-failed"),a=ne().setTimeout(()=>{s(o)},DI.get());function c(){ne().clearTimeout(a),i(r)}r.ping(c).then(c,()=>{s(o)})}))}/**
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
 */const MI={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},FI=500,UI=600,VI="_blank",BI="http://localhost";class el{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function qI(n,e,t,r=FI,i=UI){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},MI),{width:r.toString(),height:i.toString(),top:s,left:o}),u=W().toLowerCase();t&&(a=Zh(u)?VI:t),Jh(u)&&(e=e||BI,c.scrollbars="yes");const l=Object.entries(c).reduce((d,[p,g])=>`${d}${p}=${g},`,"");if(gv(u)&&a!=="_self")return $I(e||"",a),new el(null);const h=window.open(e||"",a,l);w(h,n,"popup-blocked");try{h.focus()}catch{}return new el(h)}function $I(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
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
 */const jI="__/auth/handler",GI="emulator/auth/handler";function ma(n,e,t,r,i,s){w(n.config.authDomain,n,"auth-domain-config-required"),w(n.config.apiKey,n,"invalid-api-key");const o={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:An,eventId:i};if(e instanceof gt){e.setDefaultLanguage(n.languageCode),o.providerId=e.providerId||"",Ag(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,u]of Object.entries(s||{}))o[c]=u}if(e instanceof mr){const c=e.getScopes().filter(u=>u!=="");c.length>0&&(o.scopes=c.join(","))}n.tenantId&&(o.tid=n.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];return`${KI(n)}?${lr(a).slice(1)}`}function KI({config:n}){return n.emulator?tc(n,GI):`https://${n.authDomain}/${jI}`}/**
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
 */const Qo="webStorageSupport";class WI{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=xt,this._completeRedirectFn=so,this._overrideRedirectResult=hc}async _openPopup(e,t,r,i){var s;Ge((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=ma(e,t,r,ti(),i);return qI(e,o,ki())}async _openRedirect(e,t,r,i){return await this._originValidation(e),kw(ma(e,t,r,ti(),i)),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:i,promise:s}=this.eventManagers[t];return i?Promise.resolve(i):(Ge(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await LI(e),r=new xd(e);return t.register("authEvent",i=>(w(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Qo,{type:Qo},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Qo];o!==void 0&&t(!!o),ue(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=TI(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return rd()||nc()||dr()}}const Ld=WI;class zI{constructor(e){this.factorId=e}_process(e,t,r){switch(t.type){case"enroll":return this._finalizeEnroll(e,t.credential,r);case"signin":return this._finalizeSignIn(e,t.credential);default:return Ye("unexpected MultiFactorSessionType")}}}class dc extends zI{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new dc(e)}_finalizeEnroll(e,t,r){return vw(e,{idToken:t,displayName:r,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,t){return Mw(e,{mfaPendingCredential:t,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class Md{constructor(){}static assertion(e){return dc._fromCredential(e)}}Md.FACTOR_ID="phone";var tl="@firebase/auth",nl="0.20.11";/**
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
 */class HI{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{var i;e(((i=r)===null||i===void 0?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);!t||(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){w(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function QI(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function YI(n){Rt(new nt("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),{apiKey:s,authDomain:o}=r.options;return((a,c)=>{w(s&&!s.includes(":"),"invalid-api-key",{appName:a.name}),w(!(o!=null&&o.includes(":")),"argument-error",{appName:a.name});const u={apiKey:s,authDomain:o,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:id(n)},l=new Iv(a,c,u);return Jy(l,t),l})(r,i)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),Rt(new nt("auth-internal",e=>{const t=le(e.getProvider("auth").getImmediate());return(r=>new HI(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Ze(tl,nl,QI(n)),Ze(tl,nl,"esm2017")}/**
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
 */const XI=5*60,JI=Rh("authIdTokenMaxAge")||XI;let rl=null;const ZI=n=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>JI)return;const i=t==null?void 0:t.token;rl!==i&&(rl=i,await fetch(n,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function ck(n=Fh()){const e=zs(n,"auth");if(e.isInitialized())return e.getImmediate();const t=Xy(n,{popupRedirectResolver:Ld,persistence:[Xn,to,xt]}),r=Rh("authTokenSyncURL");if(r){const s=ZI(r);pw(t,s,()=>s(t.currentUser)),mw(t,o=>s(o))}const i=Ig("auth");return i&&sd(t,`http://${i}`),t}YI("Browser");/**
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
 */function pn(){return window}/**
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
 */const e_=2e3;async function t_(n,e,t){var r;const{BuildInfo:i}=pn();Ge(e.sessionId,"AuthEvent did not contain a session ID");const s=await o_(e.sessionId),o={};return dr()?o.ibi=i.packageName:Si()?o.apn=i.packageName:ue(n,"operation-not-supported-in-this-environment"),i.displayName&&(o.appDisplayName=i.displayName),o.sessionId=s,ma(n,t,e.type,void 0,(r=e.eventId)!==null&&r!==void 0?r:void 0,o)}async function n_(n){const{BuildInfo:e}=pn(),t={};dr()?t.iosBundleId=e.packageName:Si()?t.androidPackageName=e.packageName:ue(n,"operation-not-supported-in-this-environment"),await Pd(n,t)}function r_(n){const{cordova:e}=pn();return new Promise(t=>{e.plugins.browsertab.isAvailable(r=>{let i=null;r?e.plugins.browsertab.openUrl(n):i=e.InAppBrowser.open(n,pv()?"_blank":"_system","location=yes"),t(i)})})}async function i_(n,e,t){const{cordova:r}=pn();let i=()=>{};try{await new Promise((s,o)=>{let a=null;function c(){var h;s();const d=(h=r.plugins.browsertab)===null||h===void 0?void 0:h.close;typeof d=="function"&&d(),typeof(t==null?void 0:t.close)=="function"&&t.close()}function u(){a||(a=window.setTimeout(()=>{o(we(n,"redirect-cancelled-by-user"))},e_))}function l(){(document==null?void 0:document.visibilityState)==="visible"&&u()}e.addPassiveListener(c),document.addEventListener("resume",u,!1),Si()&&document.addEventListener("visibilitychange",l,!1),i=()=>{e.removePassiveListener(c),document.removeEventListener("resume",u,!1),document.removeEventListener("visibilitychange",l,!1),a&&window.clearTimeout(a)}})}finally{i()}}function s_(n){var e,t,r,i,s,o,a,c,u,l;const h=pn();w(typeof((e=h==null?void 0:h.universalLinks)===null||e===void 0?void 0:e.subscribe)=="function",n,"invalid-cordova-configuration",{missingPlugin:"cordova-universal-links-plugin-fix"}),w(typeof((t=h==null?void 0:h.BuildInfo)===null||t===void 0?void 0:t.packageName)<"u",n,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-buildInfo"}),w(typeof((s=(i=(r=h==null?void 0:h.cordova)===null||r===void 0?void 0:r.plugins)===null||i===void 0?void 0:i.browsertab)===null||s===void 0?void 0:s.openUrl)=="function",n,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),w(typeof((c=(a=(o=h==null?void 0:h.cordova)===null||o===void 0?void 0:o.plugins)===null||a===void 0?void 0:a.browsertab)===null||c===void 0?void 0:c.isAvailable)=="function",n,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),w(typeof((l=(u=h==null?void 0:h.cordova)===null||u===void 0?void 0:u.InAppBrowser)===null||l===void 0?void 0:l.open)=="function",n,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-inappbrowser"})}async function o_(n){const e=a_(n),t=await crypto.subtle.digest("SHA-256",e);return Array.from(new Uint8Array(t)).map(i=>i.toString(16).padStart(2,"0")).join("")}function a_(n){if(Ge(/[0-9a-zA-Z]+/.test(n),"Can only convert alpha-numeric strings"),typeof TextEncoder<"u")return new TextEncoder().encode(n);const e=new ArrayBuffer(n.length),t=new Uint8Array(e);for(let r=0;r<n.length;r++)t[r]=n.charCodeAt(r);return t}/**
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
 */const c_=20;class u_ extends xd{constructor(){super(...arguments),this.passiveListeners=new Set,this.initPromise=new Promise(e=>{this.resolveInialized=e})}addPassiveListener(e){this.passiveListeners.add(e)}removePassiveListener(e){this.passiveListeners.delete(e)}resetRedirect(){this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1}onEvent(e){return this.resolveInialized(),this.passiveListeners.forEach(t=>t(e)),super.onEvent(e)}async initialized(){await this.initPromise}}function l_(n,e,t=null){return{type:e,eventId:t,urlResponse:null,sessionId:f_(),postBody:null,tenantId:n.tenantId,error:we(n,"no-auth-event")}}function h_(n,e){return pa()._set(ga(n),e)}async function il(n){const e=await pa()._get(ga(n));return e&&await pa()._remove(ga(n)),e}function d_(n,e){var t,r;const i=p_(e);if(i.includes("/__/auth/callback")){const s=hs(i),o=s.firebaseError?m_(decodeURIComponent(s.firebaseError)):null,a=(r=(t=o==null?void 0:o.code)===null||t===void 0?void 0:t.split("auth/"))===null||r===void 0?void 0:r[1],c=a?we(a):null;return c?{type:n.type,eventId:n.eventId,tenantId:n.tenantId,error:c,urlResponse:null,sessionId:null,postBody:null}:{type:n.type,eventId:n.eventId,tenantId:n.tenantId,sessionId:n.sessionId,urlResponse:i,postBody:null}}return null}function f_(){const n=[],e="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let t=0;t<c_;t++){const r=Math.floor(Math.random()*e.length);n.push(e.charAt(r))}return n.join("")}function pa(){return Me(to)}function ga(n){return hn("authEvent",n.config.apiKey,n.name)}function m_(n){try{return JSON.parse(n)}catch{return null}}function p_(n){const e=hs(n),t=e.link?decodeURIComponent(e.link):void 0,r=hs(t).link,i=e.deep_link_id?decodeURIComponent(e.deep_link_id):void 0;return hs(i).link||i||r||t||n}function hs(n){if(!(n!=null&&n.includes("?")))return{};const[e,...t]=n.split("?");return Bn(t.join("?"))}/**
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
 */const g_=500;class y_{constructor(){this._redirectPersistence=xt,this._shouldInitProactively=!0,this.eventManagers=new Map,this.originValidationPromises={},this._completeRedirectFn=so,this._overrideRedirectResult=hc}async _initialize(e){const t=e._key();let r=this.eventManagers.get(t);return r||(r=new u_(e),this.eventManagers.set(t,r),this.attachCallbackListeners(e,r)),r}_openPopup(e){ue(e,"operation-not-supported-in-this-environment")}async _openRedirect(e,t,r,i){s_(e);const s=await this._initialize(e);await s.initialized(),s.resetRedirect(),dI(),await this._originValidation(e);const o=l_(e,r,i);await h_(e,o);const a=await t_(e,o,t),c=await r_(a);return i_(e,s,c)}_isIframeWebStorageSupported(e,t){throw new Error("Method not implemented.")}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=n_(e)),this.originValidationPromises[t]}attachCallbackListeners(e,t){const{universalLinks:r,handleOpenURL:i,BuildInfo:s}=pn(),o=setTimeout(async()=>{await il(e),t.onEvent(sl())},g_),a=async l=>{clearTimeout(o);const h=await il(e);let d=null;h&&(l==null?void 0:l.url)&&(d=d_(h,l.url)),t.onEvent(d||sl())};typeof r<"u"&&typeof r.subscribe=="function"&&r.subscribe(null,a);const c=i,u=`${s.packageName.toLowerCase()}://`;pn().handleOpenURL=async l=>{if(l.toLowerCase().startsWith(u)&&a({url:l}),typeof c=="function")try{c(l)}catch(h){console.error(h)}}}}const v_=y_;function sl(){return{type:"unknown",eventId:null,sessionId:null,urlResponse:null,postBody:null,tenantId:null,error:we("no-auth-event")}}/**
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
 */function w_(n,e){le(n)._logFramework(e)}var I_="@firebase/auth-compat",__="0.2.24";/**
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
 */const b_=1e3;function Gr(){var n;return((n=self==null?void 0:self.location)===null||n===void 0?void 0:n.protocol)||null}function E_(){return Gr()==="http:"||Gr()==="https:"}function Fd(n=W()){return!!((Gr()==="file:"||Gr()==="ionic:"||Gr()==="capacitor:")&&n.toLowerCase().match(/iphone|ipad|ipod|android/))}function T_(){return za()||Wa()}function S_(){return Nh()&&(document==null?void 0:document.documentMode)===11}function k_(n=W()){return/Edge\/\d+/.test(n)}function A_(n=W()){return S_()||k_(n)}function Ud(){try{const n=self.localStorage,e=ki();if(n)return n.setItem(e,"1"),n.removeItem(e),A_()?Jr():!0}catch{return fc()&&Jr()}return!1}function fc(){return typeof global<"u"&&"WorkerGlobalScope"in global&&"importScripts"in global}function Yo(){return(E_()||Dh()||Fd())&&!T_()&&Ud()&&!fc()}function Vd(){return Fd()&&typeof document<"u"}async function C_(){return Vd()?new Promise(n=>{const e=setTimeout(()=>{n(!1)},b_);document.addEventListener("deviceready",()=>{clearTimeout(e),n(!0)})}):!1}function D_(){return typeof window<"u"?window:null}/**
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
 */const Le={LOCAL:"local",NONE:"none",SESSION:"session"},Ar=w,Bd="persistence";function N_(n,e){if(Ar(Object.values(Le).includes(e),n,"invalid-persistence-type"),za()){Ar(e!==Le.SESSION,n,"unsupported-persistence-type");return}if(Wa()){Ar(e===Le.NONE,n,"unsupported-persistence-type");return}if(fc()){Ar(e===Le.NONE||e===Le.LOCAL&&Jr(),n,"unsupported-persistence-type");return}Ar(e===Le.NONE||Ud(),n,"unsupported-persistence-type")}async function ya(n){await n._initializationPromise;const e=qd(),t=hn(Bd,n.config.apiKey,n.name);e&&e.setItem(t,n._getPersistence())}function R_(n,e){const t=qd();if(!t)return[];const r=hn(Bd,n,e);switch(t.getItem(r)){case Le.NONE:return[Qn];case Le.LOCAL:return[Xn,xt];case Le.SESSION:return[xt];default:return[]}}function qd(){var n;try{return((n=D_())===null||n===void 0?void 0:n.sessionStorage)||null}catch{return null}}/**
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
 */const x_=w;class St{constructor(){this.browserResolver=Me(Ld),this.cordovaResolver=Me(v_),this.underlyingResolver=null,this._redirectPersistence=xt,this._completeRedirectFn=so,this._overrideRedirectResult=hc}async _initialize(e){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._initialize(e)}async _openPopup(e,t,r,i){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openPopup(e,t,r,i)}async _openRedirect(e,t,r,i){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openRedirect(e,t,r,i)}_isIframeWebStorageSupported(e,t){this.assertedUnderlyingResolver._isIframeWebStorageSupported(e,t)}_originValidation(e){return this.assertedUnderlyingResolver._originValidation(e)}get _shouldInitProactively(){return Vd()||this.browserResolver._shouldInitProactively}get assertedUnderlyingResolver(){return x_(this.underlyingResolver,"internal-error"),this.underlyingResolver}async selectUnderlyingResolver(){if(this.underlyingResolver)return;const e=await C_();this.underlyingResolver=e?this.cordovaResolver:this.browserResolver}}/**
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
 */function $d(n){return n.unwrap()}function O_(n){return n.wrapped()}/**
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
 */function P_(n){return jd(n)}function L_(n,e){var t,r;const i=(t=e.customData)===null||t===void 0?void 0:t._tokenResponse;if(((r=e)===null||r===void 0?void 0:r.code)==="auth/multi-factor-auth-required"){const s=e;s.resolver=new M_(n,gw(n,e))}else if(i){const s=jd(e),o=e;s&&(o.credential=s,o.tenantId=i.tenantId||void 0,o.email=i.email||void 0,o.phoneNumber=i.phoneNumber||void 0)}}function jd(n){const{_tokenResponse:e}=n instanceof Ce?n.customData:n;if(!e)return null;if(!(n instanceof Ce)&&"temporaryProof"in e&&"phoneNumber"in e)return je.credentialFromResult(n);const t=e.providerId;if(!t||t===kr.PASSWORD)return null;let r;switch(t){case kr.GOOGLE:r=We;break;case kr.FACEBOOK:r=Ke;break;case kr.GITHUB:r=ze;break;case kr.TWITTER:r=He;break;default:const{oauthIdToken:i,oauthAccessToken:s,oauthTokenSecret:o,pendingToken:a,nonce:c}=e;return!s&&!o&&!i&&!a?null:a?t.startsWith("saml.")?Yn._create(t,a):rt._fromParams({providerId:t,signInMethod:t,pendingToken:a,idToken:i,accessToken:s}):new Gn(t).credential({idToken:i,accessToken:s,rawNonce:c})}return n instanceof Ce?r.credentialFromError(n):r.credentialFromResult(n)}function Ne(n,e){return e.catch(t=>{throw t instanceof Ce&&L_(n,t),t}).then(t=>{const r=t.operationType,i=t.user;return{operationType:r,credential:P_(t),additionalUserInfo:fw(t),user:at.getOrCreate(i)}})}async function va(n,e){const t=await e;return{verificationId:t.verificationId,confirm:r=>Ne(n,t.confirm(r))}}class M_{constructor(e,t){this.resolver=t,this.auth=O_(e)}get session(){return this.resolver.session}get hints(){return this.resolver.hints}resolveSignIn(e){return Ne($d(this.auth),this.resolver.resolveSignIn(e))}}/**
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
 */class at{constructor(e){this._delegate=e,this.multiFactor=Iw(e)}static getOrCreate(e){return at.USER_MAP.has(e)||at.USER_MAP.set(e,new at(e)),at.USER_MAP.get(e)}delete(){return this._delegate.delete()}reload(){return this._delegate.reload()}toJSON(){return this._delegate.toJSON()}getIdTokenResult(e){return this._delegate.getIdTokenResult(e)}getIdToken(e){return this._delegate.getIdToken(e)}linkAndRetrieveDataWithCredential(e){return this.linkWithCredential(e)}async linkWithCredential(e){return Ne(this.auth,md(this._delegate,e))}async linkWithPhoneNumber(e,t){return va(this.auth,Zw(this._delegate,e,t))}async linkWithPopup(e){return Ne(this.auth,cI(this._delegate,e,St))}async linkWithRedirect(e){return await ya(le(this.auth)),yI(this._delegate,e,St)}reauthenticateAndRetrieveDataWithCredential(e){return this.reauthenticateWithCredential(e)}async reauthenticateWithCredential(e){return Ne(this.auth,pd(this._delegate,e))}reauthenticateWithPhoneNumber(e,t){return va(this.auth,eI(this._delegate,e,t))}reauthenticateWithPopup(e){return Ne(this.auth,aI(this._delegate,e,St))}async reauthenticateWithRedirect(e){return await ya(le(this.auth)),pI(this._delegate,e,St)}sendEmailVerification(e){return nw(this._delegate,e)}async unlink(e){return await $v(this._delegate,e),this}updateEmail(e){return ow(this._delegate,e)}updatePassword(e){return aw(this._delegate,e)}updatePhoneNumber(e){return tI(this._delegate,e)}updateProfile(e){return sw(this._delegate,e)}verifyBeforeUpdateEmail(e,t){return rw(this._delegate,e,t)}get emailVerified(){return this._delegate.emailVerified}get isAnonymous(){return this._delegate.isAnonymous}get metadata(){return this._delegate.metadata}get phoneNumber(){return this._delegate.phoneNumber}get providerData(){return this._delegate.providerData}get refreshToken(){return this._delegate.refreshToken}get tenantId(){return this._delegate.tenantId}get displayName(){return this._delegate.displayName}get email(){return this._delegate.email}get photoURL(){return this._delegate.photoURL}get providerId(){return this._delegate.providerId}get uid(){return this._delegate.uid}get auth(){return this._delegate.auth}}at.USER_MAP=new WeakMap;/**
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
 */const Cr=w;class wa{constructor(e,t){if(this.app=e,t.isInitialized()){this._delegate=t.getImmediate(),this.linkUnderlyingAuth();return}const{apiKey:r}=e.options;Cr(r,"invalid-api-key",{appName:e.name}),Cr(r,"invalid-api-key",{appName:e.name});const i=typeof window<"u"?St:void 0;this._delegate=t.initialize({options:{persistence:F_(r,e.name),popupRedirectResolver:i}}),this._delegate._updateErrorMap(Qy),this.linkUnderlyingAuth()}get emulatorConfig(){return this._delegate.emulatorConfig}get currentUser(){return this._delegate.currentUser?at.getOrCreate(this._delegate.currentUser):null}get languageCode(){return this._delegate.languageCode}set languageCode(e){this._delegate.languageCode=e}get settings(){return this._delegate.settings}get tenantId(){return this._delegate.tenantId}set tenantId(e){this._delegate.tenantId=e}useDeviceLanguage(){this._delegate.useDeviceLanguage()}signOut(){return this._delegate.signOut()}useEmulator(e,t){sd(this._delegate,e,t)}applyActionCode(e){return zv(this._delegate,e)}checkActionCode(e){return gd(this._delegate,e)}confirmPasswordReset(e,t){return Wv(this._delegate,e,t)}async createUserWithEmailAndPassword(e,t){return Ne(this._delegate,Qv(this._delegate,e,t))}fetchProvidersForEmail(e){return this.fetchSignInMethodsForEmail(e)}fetchSignInMethodsForEmail(e){return tw(this._delegate,e)}isSignInWithEmailLink(e){return Jv(this._delegate,e)}async getRedirectResult(){Cr(Yo(),this._delegate,"operation-not-supported-in-this-environment");const e=await wI(this._delegate,St);return e?Ne(this._delegate,Promise.resolve(e)):{credential:null,user:null}}addFrameworkForLogging(e){w_(this._delegate,e)}onAuthStateChanged(e,t,r){const{next:i,error:s,complete:o}=ol(e,t,r);return this._delegate.onAuthStateChanged(i,s,o)}onIdTokenChanged(e,t,r){const{next:i,error:s,complete:o}=ol(e,t,r);return this._delegate.onIdTokenChanged(i,s,o)}sendSignInLinkToEmail(e,t){return Xv(this._delegate,e,t)}sendPasswordResetEmail(e,t){return Kv(this._delegate,e,t||void 0)}async setPersistence(e){N_(this._delegate,e);let t;switch(e){case Le.SESSION:t=xt;break;case Le.LOCAL:t=await Me(Xn)._isAvailable()?Xn:to;break;case Le.NONE:t=Qn;break;default:return ue("argument-error",{appName:this._delegate.name})}return this._delegate.setPersistence(t)}signInAndRetrieveDataWithCredential(e){return this.signInWithCredential(e)}signInAnonymously(){return Ne(this._delegate,qv(this._delegate))}signInWithCredential(e){return Ne(this._delegate,Js(this._delegate,e))}signInWithCustomToken(e){return Ne(this._delegate,Gv(this._delegate,e))}signInWithEmailAndPassword(e,t){return Ne(this._delegate,Yv(this._delegate,e,t))}signInWithEmailLink(e,t){return Ne(this._delegate,Zv(this._delegate,e,t))}signInWithPhoneNumber(e,t){return va(this._delegate,Jw(this._delegate,e,t))}async signInWithPopup(e){return Cr(Yo(),this._delegate,"operation-not-supported-in-this-environment"),Ne(this._delegate,oI(this._delegate,e,St))}async signInWithRedirect(e){return Cr(Yo(),this._delegate,"operation-not-supported-in-this-environment"),await ya(this._delegate),fI(this._delegate,e,St)}updateCurrentUser(e){return this._delegate.updateCurrentUser(e)}verifyPasswordResetCode(e){return Hv(this._delegate,e)}unwrap(){return this._delegate}_delete(){return this._delegate._delete()}linkUnderlyingAuth(){this._delegate.wrapped=()=>this}}wa.Persistence=Le;function ol(n,e,t){let r=n;typeof n!="function"&&({next:r,error:e,complete:t}=n);const i=r;return{next:o=>i(o&&at.getOrCreate(o)),error:e,complete:t}}function F_(n,e){const t=R_(n,e);if(typeof self<"u"&&!t.includes(Xn)&&t.push(Xn),typeof window<"u")for(const r of[to,xt])t.includes(r)||t.push(r);return t.includes(Qn)||t.push(Qn),t}/**
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
 */class mc{constructor(){this.providerId="phone",this._delegate=new je($d(mt.auth()))}static credential(e,t){return je.credential(e,t)}verifyPhoneNumber(e,t){return this._delegate.verifyPhoneNumber(e,t)}unwrap(){return this._delegate}}mc.PHONE_SIGN_IN_METHOD=je.PHONE_SIGN_IN_METHOD;mc.PROVIDER_ID=je.PROVIDER_ID;/**
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
 */const U_=w;class V_{constructor(e,t,r=mt.app()){var i;U_((i=r.options)===null||i===void 0?void 0:i.apiKey,"invalid-api-key",{appName:r.name}),this._delegate=new Yw(e,t,r.auth()),this.type=this._delegate.type}clear(){this._delegate.clear()}render(){return this._delegate.render()}verify(){return this._delegate.verify()}}/**
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
 */const B_="auth-compat";function q_(n){n.INTERNAL.registerComponent(new nt(B_,e=>{const t=e.getProvider("app-compat").getImmediate(),r=e.getProvider("auth");return new wa(t,r)},"PUBLIC").setServiceProps({ActionCodeInfo:{Operation:{EMAIL_SIGNIN:Ln.EMAIL_SIGNIN,PASSWORD_RESET:Ln.PASSWORD_RESET,RECOVER_EMAIL:Ln.RECOVER_EMAIL,REVERT_SECOND_FACTOR_ADDITION:Ln.REVERT_SECOND_FACTOR_ADDITION,VERIFY_AND_CHANGE_EMAIL:Ln.VERIFY_AND_CHANGE_EMAIL,VERIFY_EMAIL:Ln.VERIFY_EMAIL}},EmailAuthProvider:qt,FacebookAuthProvider:Ke,GithubAuthProvider:ze,GoogleAuthProvider:We,OAuthProvider:Gn,SAMLAuthProvider:bs,PhoneAuthProvider:mc,PhoneMultiFactorGenerator:Md,RecaptchaVerifier:V_,TwitterAuthProvider:He,Auth:wa,AuthCredential:fr,Error:Ce}).setInstantiationMode("LAZY").setMultipleInstances(!1)),n.registerVersion(I_,__)}q_(mt);var $_=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},T,pc=pc||{},D=$_||self;function ks(){}function oo(n){var e=typeof n;return e=e!="object"?e:n?Array.isArray(n)?"array":e:"null",e=="array"||e=="object"&&typeof n.length=="number"}function Ci(n){var e=typeof n;return e=="object"&&n!=null||e=="function"}function j_(n){return Object.prototype.hasOwnProperty.call(n,Xo)&&n[Xo]||(n[Xo]=++G_)}var Xo="closure_uid_"+(1e9*Math.random()>>>0),G_=0;function K_(n,e,t){return n.call.apply(n.bind,arguments)}function W_(n,e,t){if(!n)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),n.apply(e,i)}}return function(){return n.apply(e,arguments)}}function be(n,e,t){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?be=K_:be=W_,be.apply(null,arguments)}function es(n,e){var t=Array.prototype.slice.call(arguments,1);return function(){var r=t.slice();return r.push.apply(r,arguments),n.apply(this,r)}}function _e(n,e){function t(){}t.prototype=e.prototype,n.X=e.prototype,n.prototype=new t,n.prototype.constructor=n,n.Wb=function(r,i,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(r,o)}}function $t(){this.s=this.s,this.o=this.o}var z_=0;$t.prototype.s=!1;$t.prototype.na=function(){!this.s&&(this.s=!0,this.M(),z_!=0)&&j_(this)};$t.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Gd=Array.prototype.indexOf?function(n,e){return Array.prototype.indexOf.call(n,e,void 0)}:function(n,e){if(typeof n=="string")return typeof e!="string"||e.length!=1?-1:n.indexOf(e,0);for(let t=0;t<n.length;t++)if(t in n&&n[t]===e)return t;return-1};function gc(n){const e=n.length;if(0<e){const t=Array(e);for(let r=0;r<e;r++)t[r]=n[r];return t}return[]}function al(n,e){for(let t=1;t<arguments.length;t++){const r=arguments[t];if(oo(r)){const i=n.length||0,s=r.length||0;n.length=i+s;for(let o=0;o<s;o++)n[i+o]=r[o]}else n.push(r)}}function Ee(n,e){this.type=n,this.g=this.target=e,this.defaultPrevented=!1}Ee.prototype.h=function(){this.defaultPrevented=!0};var H_=function(){if(!D.addEventListener||!Object.defineProperty)return!1;var n=!1,e=Object.defineProperty({},"passive",{get:function(){n=!0}});try{D.addEventListener("test",ks,e),D.removeEventListener("test",ks,e)}catch{}return n}();function As(n){return/^[\s\xa0]*$/.test(n)}var cl=String.prototype.trim?function(n){return n.trim()}:function(n){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(n)[1]};function Jo(n,e){return n<e?-1:n>e?1:0}function ao(){var n=D.navigator;return n&&(n=n.userAgent)?n:""}function Qe(n){return ao().indexOf(n)!=-1}function yc(n){return yc[" "](n),n}yc[" "]=ks;function Q_(n){var e=J_;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=n(9)}var Y_=Qe("Opera"),Jn=Qe("Trident")||Qe("MSIE"),Kd=Qe("Edge"),Ia=Kd||Jn,Wd=Qe("Gecko")&&!(ao().toLowerCase().indexOf("webkit")!=-1&&!Qe("Edge"))&&!(Qe("Trident")||Qe("MSIE"))&&!Qe("Edge"),X_=ao().toLowerCase().indexOf("webkit")!=-1&&!Qe("Edge");function zd(){var n=D.document;return n?n.documentMode:void 0}var Cs;e:{var Zo="",ea=function(){var n=ao();if(Wd)return/rv:([^\);]+)(\)|;)/.exec(n);if(Kd)return/Edge\/([\d\.]+)/.exec(n);if(Jn)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(n);if(X_)return/WebKit\/(\S+)/.exec(n);if(Y_)return/(?:Version)[ \/]?(\S+)/.exec(n)}();if(ea&&(Zo=ea?ea[1]:""),Jn){var ta=zd();if(ta!=null&&ta>parseFloat(Zo)){Cs=String(ta);break e}}Cs=Zo}var J_={};function Z_(){return Q_(function(){let n=0;const e=cl(String(Cs)).split("."),t=cl("9").split("."),r=Math.max(e.length,t.length);for(let o=0;n==0&&o<r;o++){var i=e[o]||"",s=t[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],i[0].length==0&&s[0].length==0)break;n=Jo(i[1].length==0?0:parseInt(i[1],10),s[1].length==0?0:parseInt(s[1],10))||Jo(i[2].length==0,s[2].length==0)||Jo(i[2],s[2]),i=i[3],s=s[3]}while(n==0)}return 0<=n})}var _a;if(D.document&&Jn){var ul=zd();_a=ul||parseInt(Cs,10)||void 0}else _a=void 0;var eb=_a;function si(n,e){if(Ee.call(this,n?n.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,n){var t=this.type=n.type,r=n.changedTouches&&n.changedTouches.length?n.changedTouches[0]:null;if(this.target=n.target||n.srcElement,this.g=e,e=n.relatedTarget){if(Wd){e:{try{yc(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else t=="mouseover"?e=n.fromElement:t=="mouseout"&&(e=n.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=n.clientX!==void 0?n.clientX:n.pageX,this.clientY=n.clientY!==void 0?n.clientY:n.pageY,this.screenX=n.screenX||0,this.screenY=n.screenY||0),this.button=n.button,this.key=n.key||"",this.ctrlKey=n.ctrlKey,this.altKey=n.altKey,this.shiftKey=n.shiftKey,this.metaKey=n.metaKey,this.pointerId=n.pointerId||0,this.pointerType=typeof n.pointerType=="string"?n.pointerType:tb[n.pointerType]||"",this.state=n.state,this.i=n,n.defaultPrevented&&si.X.h.call(this)}}_e(si,Ee);var tb={2:"touch",3:"pen",4:"mouse"};si.prototype.h=function(){si.X.h.call(this);var n=this.i;n.preventDefault?n.preventDefault():n.returnValue=!1};var Di="closure_listenable_"+(1e6*Math.random()|0),nb=0;function rb(n,e,t,r,i){this.listener=n,this.proxy=null,this.src=e,this.type=t,this.capture=!!r,this.ha=i,this.key=++nb,this.ba=this.ea=!1}function co(n){n.ba=!0,n.listener=null,n.proxy=null,n.src=null,n.ha=null}function vc(n,e,t){for(const r in n)e.call(t,n[r],r,n)}function Hd(n){const e={};for(const t in n)e[t]=n[t];return e}const ll="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Qd(n,e){let t,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(t in r)n[t]=r[t];for(let s=0;s<ll.length;s++)t=ll[s],Object.prototype.hasOwnProperty.call(r,t)&&(n[t]=r[t])}}function uo(n){this.src=n,this.g={},this.h=0}uo.prototype.add=function(n,e,t,r,i){var s=n.toString();n=this.g[s],n||(n=this.g[s]=[],this.h++);var o=Ea(n,e,r,i);return-1<o?(e=n[o],t||(e.ea=!1)):(e=new rb(e,this.src,s,!!r,i),e.ea=t,n.push(e)),e};function ba(n,e){var t=e.type;if(t in n.g){var r=n.g[t],i=Gd(r,e),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(co(e),n.g[t].length==0&&(delete n.g[t],n.h--))}}function Ea(n,e,t,r){for(var i=0;i<n.length;++i){var s=n[i];if(!s.ba&&s.listener==e&&s.capture==!!t&&s.ha==r)return i}return-1}var wc="closure_lm_"+(1e6*Math.random()|0),na={};function Yd(n,e,t,r,i){if(r&&r.once)return Jd(n,e,t,r,i);if(Array.isArray(e)){for(var s=0;s<e.length;s++)Yd(n,e[s],t,r,i);return null}return t=bc(t),n&&n[Di]?n.N(e,t,Ci(r)?!!r.capture:!!r,i):Xd(n,e,t,!1,r,i)}function Xd(n,e,t,r,i,s){if(!e)throw Error("Invalid event type");var o=Ci(i)?!!i.capture:!!i,a=_c(n);if(a||(n[wc]=a=new uo(n)),t=a.add(e,t,r,o,s),t.proxy)return t;if(r=ib(),t.proxy=r,r.src=n,r.listener=t,n.addEventListener)H_||(i=o),i===void 0&&(i=!1),n.addEventListener(e.toString(),r,i);else if(n.attachEvent)n.attachEvent(ef(e.toString()),r);else if(n.addListener&&n.removeListener)n.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return t}function ib(){function n(t){return e.call(n.src,n.listener,t)}const e=sb;return n}function Jd(n,e,t,r,i){if(Array.isArray(e)){for(var s=0;s<e.length;s++)Jd(n,e[s],t,r,i);return null}return t=bc(t),n&&n[Di]?n.O(e,t,Ci(r)?!!r.capture:!!r,i):Xd(n,e,t,!0,r,i)}function Zd(n,e,t,r,i){if(Array.isArray(e))for(var s=0;s<e.length;s++)Zd(n,e[s],t,r,i);else r=Ci(r)?!!r.capture:!!r,t=bc(t),n&&n[Di]?(n=n.i,e=String(e).toString(),e in n.g&&(s=n.g[e],t=Ea(s,t,r,i),-1<t&&(co(s[t]),Array.prototype.splice.call(s,t,1),s.length==0&&(delete n.g[e],n.h--)))):n&&(n=_c(n))&&(e=n.g[e.toString()],n=-1,e&&(n=Ea(e,t,r,i)),(t=-1<n?e[n]:null)&&Ic(t))}function Ic(n){if(typeof n!="number"&&n&&!n.ba){var e=n.src;if(e&&e[Di])ba(e.i,n);else{var t=n.type,r=n.proxy;e.removeEventListener?e.removeEventListener(t,r,n.capture):e.detachEvent?e.detachEvent(ef(t),r):e.addListener&&e.removeListener&&e.removeListener(r),(t=_c(e))?(ba(t,n),t.h==0&&(t.src=null,e[wc]=null)):co(n)}}}function ef(n){return n in na?na[n]:na[n]="on"+n}function sb(n,e){if(n.ba)n=!0;else{e=new si(e,this);var t=n.listener,r=n.ha||n.src;n.ea&&Ic(n),n=t.call(r,e)}return n}function _c(n){return n=n[wc],n instanceof uo?n:null}var ra="__closure_events_fn_"+(1e9*Math.random()>>>0);function bc(n){return typeof n=="function"?n:(n[ra]||(n[ra]=function(e){return n.handleEvent(e)}),n[ra])}function he(){$t.call(this),this.i=new uo(this),this.P=this,this.I=null}_e(he,$t);he.prototype[Di]=!0;he.prototype.removeEventListener=function(n,e,t,r){Zd(this,n,e,t,r)};function Ie(n,e){var t,r=n.I;if(r)for(t=[];r;r=r.I)t.push(r);if(n=n.P,r=e.type||e,typeof e=="string")e=new Ee(e,n);else if(e instanceof Ee)e.target=e.target||n;else{var i=e;e=new Ee(r,n),Qd(e,i)}if(i=!0,t)for(var s=t.length-1;0<=s;s--){var o=e.g=t[s];i=ts(o,r,!0,e)&&i}if(o=e.g=n,i=ts(o,r,!0,e)&&i,i=ts(o,r,!1,e)&&i,t)for(s=0;s<t.length;s++)o=e.g=t[s],i=ts(o,r,!1,e)&&i}he.prototype.M=function(){if(he.X.M.call(this),this.i){var n=this.i,e;for(e in n.g){for(var t=n.g[e],r=0;r<t.length;r++)co(t[r]);delete n.g[e],n.h--}}this.I=null};he.prototype.N=function(n,e,t,r){return this.i.add(String(n),e,!1,t,r)};he.prototype.O=function(n,e,t,r){return this.i.add(String(n),e,!0,t,r)};function ts(n,e,t,r){if(e=n.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.ba&&o.capture==t){var a=o.listener,c=o.ha||o.src;o.ea&&ba(n.i,o),i=a.call(c,r)!==!1&&i}}return i&&!r.defaultPrevented}var Ec=D.JSON.stringify;function ob(){var n=rf;let e=null;return n.g&&(e=n.g,n.g=n.g.next,n.g||(n.h=null),e.next=null),e}class ab{constructor(){this.h=this.g=null}add(e,t){const r=tf.get();r.set(e,t),this.h?this.h.next=r:this.g=r,this.h=r}}var tf=new class{constructor(n,e){this.i=n,this.j=e,this.h=0,this.g=null}get(){let n;return 0<this.h?(this.h--,n=this.g,this.g=n.next,n.next=null):n=this.i(),n}}(()=>new cb,n=>n.reset());class cb{constructor(){this.next=this.g=this.h=null}set(e,t){this.h=e,this.g=t,this.next=null}reset(){this.next=this.g=this.h=null}}function ub(n){D.setTimeout(()=>{throw n},0)}function nf(n,e){Ta||lb(),Sa||(Ta(),Sa=!0),rf.add(n,e)}var Ta;function lb(){var n=D.Promise.resolve(void 0);Ta=function(){n.then(hb)}}var Sa=!1,rf=new ab;function hb(){for(var n;n=ob();){try{n.h.call(n.g)}catch(t){ub(t)}var e=tf;e.j(n),100>e.h&&(e.h++,n.next=e.g,e.g=n)}Sa=!1}function lo(n,e){he.call(this),this.h=n||1,this.g=e||D,this.j=be(this.lb,this),this.l=Date.now()}_e(lo,he);T=lo.prototype;T.ca=!1;T.R=null;T.lb=function(){if(this.ca){var n=Date.now()-this.l;0<n&&n<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-n):(this.R&&(this.g.clearTimeout(this.R),this.R=null),Ie(this,"tick"),this.ca&&(Tc(this),this.start()))}};T.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Tc(n){n.ca=!1,n.R&&(n.g.clearTimeout(n.R),n.R=null)}T.M=function(){lo.X.M.call(this),Tc(this),delete this.g};function Sc(n,e,t){if(typeof n=="function")t&&(n=be(n,t));else if(n&&typeof n.handleEvent=="function")n=be(n.handleEvent,n);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:D.setTimeout(n,e||0)}function sf(n){n.g=Sc(()=>{n.g=null,n.i&&(n.i=!1,sf(n))},n.j);const e=n.h;n.h=null,n.m.apply(null,e)}class db extends $t{constructor(e,t){super(),this.m=e,this.j=t,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:sf(this)}M(){super.M(),this.g&&(D.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function oi(n){$t.call(this),this.h=n,this.g={}}_e(oi,$t);var hl=[];function of(n,e,t,r){Array.isArray(t)||(t&&(hl[0]=t.toString()),t=hl);for(var i=0;i<t.length;i++){var s=Yd(e,t[i],r||n.handleEvent,!1,n.h||n);if(!s)break;n.g[s.key]=s}}function af(n){vc(n.g,function(e,t){this.g.hasOwnProperty(t)&&Ic(e)},n),n.g={}}oi.prototype.M=function(){oi.X.M.call(this),af(this)};oi.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function ho(){this.g=!0}ho.prototype.Aa=function(){this.g=!1};function fb(n,e,t,r,i,s){n.info(function(){if(n.g)if(s)for(var o="",a=s.split("&"),c=0;c<a.length;c++){var u=a[c].split("=");if(1<u.length){var l=u[0];u=u[1];var h=l.split("_");o=2<=h.length&&h[1]=="type"?o+(l+"="+u+"&"):o+(l+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+`
`+t+`
`+o})}function mb(n,e,t,r,i,s,o){n.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+`
`+t+`
`+s+" "+o})}function qn(n,e,t,r){n.info(function(){return"XMLHTTP TEXT ("+e+"): "+gb(n,t)+(r?" "+r:"")})}function pb(n,e){n.info(function(){return"TIMEOUT: "+e})}ho.prototype.info=function(){};function gb(n,e){if(!n.g)return e;if(!e)return null;try{var t=JSON.parse(e);if(t){for(n=0;n<t.length;n++)if(Array.isArray(t[n])){var r=t[n];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return Ec(t)}catch{return e}}var Dn={},dl=null;function fo(){return dl=dl||new he}Dn.Pa="serverreachability";function cf(n){Ee.call(this,Dn.Pa,n)}_e(cf,Ee);function ai(n){const e=fo();Ie(e,new cf(e))}Dn.STAT_EVENT="statevent";function uf(n,e){Ee.call(this,Dn.STAT_EVENT,n),this.stat=e}_e(uf,Ee);function Ae(n){const e=fo();Ie(e,new uf(e,n))}Dn.Qa="timingevent";function lf(n,e){Ee.call(this,Dn.Qa,n),this.size=e}_e(lf,Ee);function Ni(n,e){if(typeof n!="function")throw Error("Fn must not be null and must be a function");return D.setTimeout(function(){n()},e)}var mo={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},hf={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function kc(){}kc.prototype.h=null;function fl(n){return n.h||(n.h=n.i())}function df(){}var Ri={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function Ac(){Ee.call(this,"d")}_e(Ac,Ee);function Cc(){Ee.call(this,"c")}_e(Cc,Ee);var ka;function po(){}_e(po,kc);po.prototype.g=function(){return new XMLHttpRequest};po.prototype.i=function(){return{}};ka=new po;function xi(n,e,t,r){this.l=n,this.j=e,this.m=t,this.U=r||1,this.S=new oi(this),this.O=yb,n=Ia?125:void 0,this.T=new lo(n),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new ff}function ff(){this.i=null,this.g="",this.h=!1}var yb=45e3,Aa={},Ds={};T=xi.prototype;T.setTimeout=function(n){this.O=n};function Ca(n,e,t){n.K=1,n.v=yo(dt(e)),n.s=t,n.P=!0,mf(n,null)}function mf(n,e){n.F=Date.now(),Oi(n),n.A=dt(n.v);var t=n.A,r=n.U;Array.isArray(r)||(r=[String(r)]),bf(t.i,"t",r),n.C=0,t=n.l.H,n.h=new ff,n.g=jf(n.l,t?e:null,!n.s),0<n.N&&(n.L=new db(be(n.La,n,n.g),n.N)),of(n.S,n.g,"readystatechange",n.ib),e=n.H?Hd(n.H):{},n.s?(n.u||(n.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",n.g.da(n.A,n.u,n.s,e)):(n.u="GET",n.g.da(n.A,n.u,null,e)),ai(),fb(n.j,n.u,n.A,n.m,n.U,n.s)}T.ib=function(n){n=n.target;const e=this.L;e&&ct(n)==3?e.l():this.La(n)};T.La=function(n){try{if(n==this.g)e:{const l=ct(this.g);var e=this.g.Ea();const h=this.g.aa();if(!(3>l)&&(l!=3||Ia||this.g&&(this.h.h||this.g.fa()||yl(this.g)))){this.I||l!=4||e==7||(e==8||0>=h?ai(3):ai(2)),go(this);var t=this.g.aa();this.Y=t;t:if(pf(this)){var r=yl(this.g);n="";var i=r.length,s=ct(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){on(this),Kr(this);var o="";break t}this.h.i=new D.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,n+=this.h.i.decode(r[e],{stream:s&&e==i-1});r.splice(0,i),this.h.g+=n,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=t==200,mb(this.j,this.u,this.A,this.m,this.U,l,t),this.i){if(this.Z&&!this.J){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!As(a)){var u=a;break t}}u=null}if(t=u)qn(this.j,this.m,t,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Da(this,t);else{this.i=!1,this.o=3,Ae(12),on(this),Kr(this);break e}}this.P?(gf(this,l,o),Ia&&this.i&&l==3&&(of(this.S,this.T,"tick",this.hb),this.T.start())):(qn(this.j,this.m,o,null),Da(this,o)),l==4&&on(this),this.i&&!this.I&&(l==4?Vf(this.l,this):(this.i=!1,Oi(this)))}else t==400&&0<o.indexOf("Unknown SID")?(this.o=3,Ae(12)):(this.o=0,Ae(13)),on(this),Kr(this)}}}catch{}finally{}};function pf(n){return n.g?n.u=="GET"&&n.K!=2&&n.l.Da:!1}function gf(n,e,t){let r=!0,i;for(;!n.I&&n.C<t.length;)if(i=vb(n,t),i==Ds){e==4&&(n.o=4,Ae(14),r=!1),qn(n.j,n.m,null,"[Incomplete Response]");break}else if(i==Aa){n.o=4,Ae(15),qn(n.j,n.m,t,"[Invalid Chunk]"),r=!1;break}else qn(n.j,n.m,i,null),Da(n,i);pf(n)&&i!=Ds&&i!=Aa&&(n.h.g="",n.C=0),e!=4||t.length!=0||n.h.h||(n.o=1,Ae(16),r=!1),n.i=n.i&&r,r?0<t.length&&!n.$&&(n.$=!0,e=n.l,e.g==n&&e.$&&!e.K&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+t.length),Lc(e),e.K=!0,Ae(11))):(qn(n.j,n.m,t,"[Invalid Chunked Response]"),on(n),Kr(n))}T.hb=function(){if(this.g){var n=ct(this.g),e=this.g.fa();this.C<e.length&&(go(this),gf(this,n,e),this.i&&n!=4&&Oi(this))}};function vb(n,e){var t=n.C,r=e.indexOf(`
`,t);return r==-1?Ds:(t=Number(e.substring(t,r)),isNaN(t)?Aa:(r+=1,r+t>e.length?Ds:(e=e.substr(r,t),n.C=r+t,e)))}T.cancel=function(){this.I=!0,on(this)};function Oi(n){n.V=Date.now()+n.O,yf(n,n.O)}function yf(n,e){if(n.B!=null)throw Error("WatchDog timer not null");n.B=Ni(be(n.gb,n),e)}function go(n){n.B&&(D.clearTimeout(n.B),n.B=null)}T.gb=function(){this.B=null;const n=Date.now();0<=n-this.V?(pb(this.j,this.A),this.K!=2&&(ai(),Ae(17)),on(this),this.o=2,Kr(this)):yf(this,this.V-n)};function Kr(n){n.l.G==0||n.I||Vf(n.l,n)}function on(n){go(n);var e=n.L;e&&typeof e.na=="function"&&e.na(),n.L=null,Tc(n.T),af(n.S),n.g&&(e=n.g,n.g=null,e.abort(),e.na())}function Da(n,e){try{var t=n.l;if(t.G!=0&&(t.g==n||Na(t.h,n))){if(!n.J&&Na(t.h,n)&&t.G==3){try{var r=t.Fa.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){e:if(!t.u){if(t.g)if(t.g.F+3e3<n.F)xs(t),Io(t);else break e;Pc(t),Ae(18)}}else t.Ba=i[1],0<t.Ba-t.T&&37500>i[2]&&t.L&&t.A==0&&!t.v&&(t.v=Ni(be(t.cb,t),6e3));if(1>=Sf(t.h)&&t.ja){try{t.ja()}catch{}t.ja=void 0}}else an(t,11)}else if((n.J||t.g==n)&&xs(t),!As(e))for(i=t.Fa.g.parse(e),e=0;e<i.length;e++){let u=i[e];if(t.T=u[0],u=u[1],t.G==2)if(u[0]=="c"){t.I=u[1],t.ka=u[2];const l=u[3];l!=null&&(t.ma=l,t.j.info("VER="+t.ma));const h=u[4];h!=null&&(t.Ca=h,t.j.info("SVER="+t.Ca));const d=u[5];d!=null&&typeof d=="number"&&0<d&&(r=1.5*d,t.J=r,t.j.info("backChannelRequestTimeoutMs_="+r)),r=t;const p=n.g;if(p){const g=p.g?p.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(g){var s=r.h;s.g||g.indexOf("spdy")==-1&&g.indexOf("quic")==-1&&g.indexOf("h2")==-1||(s.j=s.l,s.g=new Set,s.h&&(Dc(s,s.h),s.h=null))}if(r.D){const b=p.g?p.g.getResponseHeader("X-HTTP-Session-Id"):null;b&&(r.za=b,j(r.F,r.D,b))}}t.G=3,t.l&&t.l.xa(),t.$&&(t.P=Date.now()-n.F,t.j.info("Handshake RTT: "+t.P+"ms")),r=t;var o=n;if(r.sa=$f(r,r.H?r.ka:null,r.V),o.J){kf(r.h,o);var a=o,c=r.J;c&&a.setTimeout(c),a.B&&(go(a),Oi(a)),r.g=o}else Ff(r);0<t.i.length&&_o(t)}else u[0]!="stop"&&u[0]!="close"||an(t,7);else t.G==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?an(t,7):Oc(t):u[0]!="noop"&&t.l&&t.l.wa(u),t.A=0)}}ai(4)}catch{}}function wb(n){if(n.W&&typeof n.W=="function")return n.W();if(typeof Map<"u"&&n instanceof Map||typeof Set<"u"&&n instanceof Set)return Array.from(n.values());if(typeof n=="string")return n.split("");if(oo(n)){for(var e=[],t=n.length,r=0;r<t;r++)e.push(n[r]);return e}e=[],t=0;for(r in n)e[t++]=n[r];return e}function Ib(n){if(n.oa&&typeof n.oa=="function")return n.oa();if(!n.W||typeof n.W!="function"){if(typeof Map<"u"&&n instanceof Map)return Array.from(n.keys());if(!(typeof Set<"u"&&n instanceof Set)){if(oo(n)||typeof n=="string"){var e=[];n=n.length;for(var t=0;t<n;t++)e.push(t);return e}e=[],t=0;for(const r in n)e[t++]=r;return e}}}function vf(n,e){if(n.forEach&&typeof n.forEach=="function")n.forEach(e,void 0);else if(oo(n)||typeof n=="string")Array.prototype.forEach.call(n,e,void 0);else for(var t=Ib(n),r=wb(n),i=r.length,s=0;s<i;s++)e.call(void 0,r[s],t&&t[s],n)}var wf=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function _b(n,e){if(n){n=n.split("&");for(var t=0;t<n.length;t++){var r=n[t].indexOf("="),i=null;if(0<=r){var s=n[t].substring(0,r);i=n[t].substring(r+1)}else s=n[t];e(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function fn(n,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,n instanceof fn){this.h=e!==void 0?e:n.h,Ns(this,n.j),this.s=n.s,this.g=n.g,Rs(this,n.m),this.l=n.l,e=n.i;var t=new ci;t.i=e.i,e.g&&(t.g=new Map(e.g),t.h=e.h),ml(this,t),this.o=n.o}else n&&(t=String(n).match(wf))?(this.h=!!e,Ns(this,t[1]||"",!0),this.s=Ur(t[2]||""),this.g=Ur(t[3]||"",!0),Rs(this,t[4]),this.l=Ur(t[5]||"",!0),ml(this,t[6]||"",!0),this.o=Ur(t[7]||"")):(this.h=!!e,this.i=new ci(null,this.h))}fn.prototype.toString=function(){var n=[],e=this.j;e&&n.push(Vr(e,pl,!0),":");var t=this.g;return(t||e=="file")&&(n.push("//"),(e=this.s)&&n.push(Vr(e,pl,!0),"@"),n.push(encodeURIComponent(String(t)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t=this.m,t!=null&&n.push(":",String(t))),(t=this.l)&&(this.g&&t.charAt(0)!="/"&&n.push("/"),n.push(Vr(t,t.charAt(0)=="/"?Tb:Eb,!0))),(t=this.i.toString())&&n.push("?",t),(t=this.o)&&n.push("#",Vr(t,kb)),n.join("")};function dt(n){return new fn(n)}function Ns(n,e,t){n.j=t?Ur(e,!0):e,n.j&&(n.j=n.j.replace(/:$/,""))}function Rs(n,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);n.m=e}else n.m=null}function ml(n,e,t){e instanceof ci?(n.i=e,Ab(n.i,n.h)):(t||(e=Vr(e,Sb)),n.i=new ci(e,n.h))}function j(n,e,t){n.i.set(e,t)}function yo(n){return j(n,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),n}function Ur(n,e){return n?e?decodeURI(n.replace(/%25/g,"%2525")):decodeURIComponent(n):""}function Vr(n,e,t){return typeof n=="string"?(n=encodeURI(n).replace(e,bb),t&&(n=n.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n):null}function bb(n){return n=n.charCodeAt(0),"%"+(n>>4&15).toString(16)+(n&15).toString(16)}var pl=/[#\/\?@]/g,Eb=/[#\?:]/g,Tb=/[#\?]/g,Sb=/[#\?@]/g,kb=/#/g;function ci(n,e){this.h=this.g=null,this.i=n||null,this.j=!!e}function jt(n){n.g||(n.g=new Map,n.h=0,n.i&&_b(n.i,function(e,t){n.add(decodeURIComponent(e.replace(/\+/g," ")),t)}))}T=ci.prototype;T.add=function(n,e){jt(this),this.i=null,n=pr(this,n);var t=this.g.get(n);return t||this.g.set(n,t=[]),t.push(e),this.h+=1,this};function If(n,e){jt(n),e=pr(n,e),n.g.has(e)&&(n.i=null,n.h-=n.g.get(e).length,n.g.delete(e))}function _f(n,e){return jt(n),e=pr(n,e),n.g.has(e)}T.forEach=function(n,e){jt(this),this.g.forEach(function(t,r){t.forEach(function(i){n.call(e,i,r,this)},this)},this)};T.oa=function(){jt(this);const n=Array.from(this.g.values()),e=Array.from(this.g.keys()),t=[];for(let r=0;r<e.length;r++){const i=n[r];for(let s=0;s<i.length;s++)t.push(e[r])}return t};T.W=function(n){jt(this);let e=[];if(typeof n=="string")_f(this,n)&&(e=e.concat(this.g.get(pr(this,n))));else{n=Array.from(this.g.values());for(let t=0;t<n.length;t++)e=e.concat(n[t])}return e};T.set=function(n,e){return jt(this),this.i=null,n=pr(this,n),_f(this,n)&&(this.h-=this.g.get(n).length),this.g.set(n,[e]),this.h+=1,this};T.get=function(n,e){return n?(n=this.W(n),0<n.length?String(n[0]):e):e};function bf(n,e,t){If(n,e),0<t.length&&(n.i=null,n.g.set(pr(n,e),gc(t)),n.h+=t.length)}T.toString=function(){if(this.i)return this.i;if(!this.g)return"";const n=[],e=Array.from(this.g.keys());for(var t=0;t<e.length;t++){var r=e[t];const s=encodeURIComponent(String(r)),o=this.W(r);for(r=0;r<o.length;r++){var i=s;o[r]!==""&&(i+="="+encodeURIComponent(String(o[r]))),n.push(i)}}return this.i=n.join("&")};function pr(n,e){return e=String(e),n.j&&(e=e.toLowerCase()),e}function Ab(n,e){e&&!n.j&&(jt(n),n.i=null,n.g.forEach(function(t,r){var i=r.toLowerCase();r!=i&&(If(this,r),bf(this,i,t))},n)),n.j=e}var Cb=class{constructor(n,e){this.h=n,this.g=e}};function Ef(n){this.l=n||Db,D.PerformanceNavigationTiming?(n=D.performance.getEntriesByType("navigation"),n=0<n.length&&(n[0].nextHopProtocol=="hq"||n[0].nextHopProtocol=="h2")):n=!!(D.g&&D.g.Ga&&D.g.Ga()&&D.g.Ga().$b),this.j=n?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var Db=10;function Tf(n){return n.h?!0:n.g?n.g.size>=n.j:!1}function Sf(n){return n.h?1:n.g?n.g.size:0}function Na(n,e){return n.h?n.h==e:n.g?n.g.has(e):!1}function Dc(n,e){n.g?n.g.add(e):n.h=e}function kf(n,e){n.h&&n.h==e?n.h=null:n.g&&n.g.has(e)&&n.g.delete(e)}Ef.prototype.cancel=function(){if(this.i=Af(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const n of this.g.values())n.cancel();this.g.clear()}};function Af(n){if(n.h!=null)return n.i.concat(n.h.D);if(n.g!=null&&n.g.size!==0){let e=n.i;for(const t of n.g.values())e=e.concat(t.D);return e}return gc(n.i)}function Nc(){}Nc.prototype.stringify=function(n){return D.JSON.stringify(n,void 0)};Nc.prototype.parse=function(n){return D.JSON.parse(n,void 0)};function Nb(){this.g=new Nc}function Rb(n,e,t){const r=t||"";try{vf(n,function(i,s){let o=i;Ci(i)&&(o=Ec(i)),e.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function xb(n,e){const t=new ho;if(D.Image){const r=new Image;r.onload=es(ns,t,r,"TestLoadImage: loaded",!0,e),r.onerror=es(ns,t,r,"TestLoadImage: error",!1,e),r.onabort=es(ns,t,r,"TestLoadImage: abort",!1,e),r.ontimeout=es(ns,t,r,"TestLoadImage: timeout",!1,e),D.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=n}else e(!1)}function ns(n,e,t,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch{}}function Pi(n){this.l=n.ac||null,this.j=n.jb||!1}_e(Pi,kc);Pi.prototype.g=function(){return new vo(this.l,this.j)};Pi.prototype.i=function(n){return function(){return n}}({});function vo(n,e){he.call(this),this.D=n,this.u=e,this.m=void 0,this.readyState=Rc,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}_e(vo,he);var Rc=0;T=vo.prototype;T.open=function(n,e){if(this.readyState!=Rc)throw this.abort(),Error("Error reopening a connection");this.C=n,this.B=e,this.readyState=1,ui(this)};T.send=function(n){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};n&&(e.body=n),(this.D||D).fetch(new Request(this.B,e)).then(this.Wa.bind(this),this.ga.bind(this))};T.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Li(this)),this.readyState=Rc};T.Wa=function(n){if(this.g&&(this.l=n,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=n.headers,this.readyState=2,ui(this)),this.g&&(this.readyState=3,ui(this),this.g)))if(this.responseType==="arraybuffer")n.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if(typeof D.ReadableStream<"u"&&"body"in n){if(this.j=n.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Cf(this)}else n.text().then(this.Va.bind(this),this.ga.bind(this))};function Cf(n){n.j.read().then(n.Ta.bind(n)).catch(n.ga.bind(n))}T.Ta=function(n){if(this.g){if(this.u&&n.value)this.response.push(n.value);else if(!this.u){var e=n.value?n.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!n.done}))&&(this.response=this.responseText+=e)}n.done?Li(this):ui(this),this.readyState==3&&Cf(this)}};T.Va=function(n){this.g&&(this.response=this.responseText=n,Li(this))};T.Ua=function(n){this.g&&(this.response=n,Li(this))};T.ga=function(){this.g&&Li(this)};function Li(n){n.readyState=4,n.l=null,n.j=null,n.A=null,ui(n)}T.setRequestHeader=function(n,e){this.v.append(n,e)};T.getResponseHeader=function(n){return this.h&&this.h.get(n.toLowerCase())||""};T.getAllResponseHeaders=function(){if(!this.h)return"";const n=[],e=this.h.entries();for(var t=e.next();!t.done;)t=t.value,n.push(t[0]+": "+t[1]),t=e.next();return n.join(`\r
`)};function ui(n){n.onreadystatechange&&n.onreadystatechange.call(n)}Object.defineProperty(vo.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(n){this.m=n?"include":"same-origin"}});var Ob=D.JSON.parse;function Q(n){he.call(this),this.headers=new Map,this.u=n||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=Df,this.K=this.L=!1}_e(Q,he);var Df="",Pb=/^https?$/i,Lb=["POST","PUT"];T=Q.prototype;T.Ka=function(n){this.L=n};T.da=function(n,e,t,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+n);e=e?e.toUpperCase():"GET",this.H=n,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():ka.g(),this.C=this.u?fl(this.u):fl(ka),this.g.onreadystatechange=be(this.Ha,this);try{this.F=!0,this.g.open(e,String(n),!0),this.F=!1}catch(s){gl(this,s);return}if(n=t||"",t=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)t.set(i,r[i]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const s of r.keys())t.set(s,r.get(s));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(t.keys()).find(s=>s.toLowerCase()=="content-type"),i=D.FormData&&n instanceof D.FormData,!(0<=Gd(Lb,e))||r||i||t.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,o]of t)this.g.setRequestHeader(s,o);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{xf(this),0<this.B&&((this.K=Mb(this.g))?(this.g.timeout=this.B,this.g.ontimeout=be(this.qa,this)):this.A=Sc(this.qa,this.B,this)),this.v=!0,this.g.send(n),this.v=!1}catch(s){gl(this,s)}};function Mb(n){return Jn&&Z_()&&typeof n.timeout=="number"&&n.ontimeout!==void 0}T.qa=function(){typeof pc<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Ie(this,"timeout"),this.abort(8))};function gl(n,e){n.h=!1,n.g&&(n.l=!0,n.g.abort(),n.l=!1),n.j=e,n.m=5,Nf(n),wo(n)}function Nf(n){n.D||(n.D=!0,Ie(n,"complete"),Ie(n,"error"))}T.abort=function(n){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=n||7,Ie(this,"complete"),Ie(this,"abort"),wo(this))};T.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),wo(this,!0)),Q.X.M.call(this)};T.Ha=function(){this.s||(this.F||this.v||this.l?Rf(this):this.fb())};T.fb=function(){Rf(this)};function Rf(n){if(n.h&&typeof pc<"u"&&(!n.C[1]||ct(n)!=4||n.aa()!=2)){if(n.v&&ct(n)==4)Sc(n.Ha,0,n);else if(Ie(n,"readystatechange"),ct(n)==4){n.h=!1;try{const a=n.aa();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var t;if(!(t=e)){var r;if(r=a===0){var i=String(n.H).match(wf)[1]||null;if(!i&&D.self&&D.self.location){var s=D.self.location.protocol;i=s.substr(0,s.length-1)}r=!Pb.test(i?i.toLowerCase():"")}t=r}if(t)Ie(n,"complete"),Ie(n,"success");else{n.m=6;try{var o=2<ct(n)?n.g.statusText:""}catch{o=""}n.j=o+" ["+n.aa()+"]",Nf(n)}}finally{wo(n)}}}}function wo(n,e){if(n.g){xf(n);const t=n.g,r=n.C[0]?ks:null;n.g=null,n.C=null,e||Ie(n,"ready");try{t.onreadystatechange=r}catch{}}}function xf(n){n.g&&n.K&&(n.g.ontimeout=null),n.A&&(D.clearTimeout(n.A),n.A=null)}function ct(n){return n.g?n.g.readyState:0}T.aa=function(){try{return 2<ct(this)?this.g.status:-1}catch{return-1}};T.fa=function(){try{return this.g?this.g.responseText:""}catch{return""}};T.Sa=function(n){if(this.g){var e=this.g.responseText;return n&&e.indexOf(n)==0&&(e=e.substring(n.length)),Ob(e)}};function yl(n){try{if(!n.g)return null;if("response"in n.g)return n.g.response;switch(n.J){case Df:case"text":return n.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in n.g)return n.g.mozResponseArrayBuffer}return null}catch{return null}}T.Ea=function(){return this.m};T.Oa=function(){return typeof this.j=="string"?this.j:String(this.j)};function Of(n){let e="";return vc(n,function(t,r){e+=r,e+=":",e+=t,e+=`\r
`}),e}function xc(n,e,t){e:{for(r in t){var r=!1;break e}r=!0}r||(t=Of(t),typeof n=="string"?t!=null&&encodeURIComponent(String(t)):j(n,e,t))}function Dr(n,e,t){return t&&t.internalChannelParams&&t.internalChannelParams[n]||e}function Pf(n){this.Ca=0,this.i=[],this.j=new ho,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=Dr("failFast",!1,n),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=Dr("baseRetryDelayMs",5e3,n),this.bb=Dr("retryDelaySeedMs",1e4,n),this.$a=Dr("forwardChannelMaxRetries",2,n),this.ta=Dr("forwardChannelRequestTimeoutMs",2e4,n),this.ra=n&&n.xmlHttpFactory||void 0,this.Da=n&&n.Zb||!1,this.J=void 0,this.H=n&&n.supportsCrossDomainXhr||!1,this.I="",this.h=new Ef(n&&n.concurrentRequestLimit),this.Fa=new Nb,this.O=n&&n.fastHandshake||!1,this.N=n&&n.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=n&&n.Xb||!1,n&&n.Aa&&this.j.Aa(),n&&n.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&n&&n.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}T=Pf.prototype;T.ma=8;T.G=1;function Oc(n){if(Lf(n),n.G==3){var e=n.U++,t=dt(n.F);j(t,"SID",n.I),j(t,"RID",e),j(t,"TYPE","terminate"),Mi(n,t),e=new xi(n,n.j,e,void 0),e.K=2,e.v=yo(dt(t)),t=!1,D.navigator&&D.navigator.sendBeacon&&(t=D.navigator.sendBeacon(e.v.toString(),"")),!t&&D.Image&&(new Image().src=e.v,t=!0),t||(e.g=jf(e.l,null),e.g.da(e.v)),e.F=Date.now(),Oi(e)}qf(n)}function Io(n){n.g&&(Lc(n),n.g.cancel(),n.g=null)}function Lf(n){Io(n),n.u&&(D.clearTimeout(n.u),n.u=null),xs(n),n.h.cancel(),n.m&&(typeof n.m=="number"&&D.clearTimeout(n.m),n.m=null)}function _o(n){Tf(n.h)||n.m||(n.m=!0,nf(n.Ja,n),n.C=0)}function Fb(n,e){return Sf(n.h)>=n.h.j-(n.m?1:0)?!1:n.m?(n.i=e.D.concat(n.i),!0):n.G==1||n.G==2||n.C>=(n.Za?0:n.$a)?!1:(n.m=Ni(be(n.Ja,n,e),Bf(n,n.C)),n.C++,!0)}T.Ja=function(n){if(this.m)if(this.m=null,this.G==1){if(!n){this.U=Math.floor(1e5*Math.random()),n=this.U++;const i=new xi(this,this.j,n,void 0);let s=this.s;if(this.S&&(s?(s=Hd(s),Qd(s,this.S)):s=this.S),this.o!==null||this.N||(i.H=s,s=null),this.O)e:{for(var e=0,t=0;t<this.i.length;t++){t:{var r=this.i[t];if("__data__"in r.g&&(r=r.g.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=t;break e}if(e===4096||t===this.i.length-1){e=t+1;break e}}e=1e3}else e=1e3;e=Mf(this,i,e),t=dt(this.F),j(t,"RID",n),j(t,"CVER",22),this.D&&j(t,"X-HTTP-Session-Id",this.D),Mi(this,t),s&&(this.N?e="headers="+encodeURIComponent(String(Of(s)))+"&"+e:this.o&&xc(t,this.o,s)),Dc(this.h,i),this.Ya&&j(t,"TYPE","init"),this.O?(j(t,"$req",e),j(t,"SID","null"),i.Z=!0,Ca(i,t,null)):Ca(i,t,e),this.G=2}}else this.G==3&&(n?vl(this,n):this.i.length==0||Tf(this.h)||vl(this))};function vl(n,e){var t;e?t=e.m:t=n.U++;const r=dt(n.F);j(r,"SID",n.I),j(r,"RID",t),j(r,"AID",n.T),Mi(n,r),n.o&&n.s&&xc(r,n.o,n.s),t=new xi(n,n.j,t,n.C+1),n.o===null&&(t.H=n.s),e&&(n.i=e.D.concat(n.i)),e=Mf(n,t,1e3),t.setTimeout(Math.round(.5*n.ta)+Math.round(.5*n.ta*Math.random())),Dc(n.h,t),Ca(t,r,e)}function Mi(n,e){n.ia&&vc(n.ia,function(t,r){j(e,r,t)}),n.l&&vf({},function(t,r){j(e,r,t)})}function Mf(n,e,t){t=Math.min(n.i.length,t);var r=n.l?be(n.l.Ra,n.l,n):null;e:{var i=n.i;let s=-1;for(;;){const o=["count="+t];s==-1?0<t?(s=i[0].h,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let c=0;c<t;c++){let u=i[c].h;const l=i[c].g;if(u-=s,0>u)s=Math.max(0,i[c].h-100),a=!1;else try{Rb(l,o,"req"+u+"_")}catch{r&&r(l)}}if(a){r=o.join("&");break e}}}return n=n.i.splice(0,t),e.D=n,r}function Ff(n){n.g||n.u||(n.Z=1,nf(n.Ia,n),n.A=0)}function Pc(n){return n.g||n.u||3<=n.A?!1:(n.Z++,n.u=Ni(be(n.Ia,n),Bf(n,n.A)),n.A++,!0)}T.Ia=function(){if(this.u=null,Uf(this),this.$&&!(this.K||this.g==null||0>=this.P)){var n=2*this.P;this.j.info("BP detection timer enabled: "+n),this.B=Ni(be(this.eb,this),n)}};T.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,Ae(10),Io(this),Uf(this))};function Lc(n){n.B!=null&&(D.clearTimeout(n.B),n.B=null)}function Uf(n){n.g=new xi(n,n.j,"rpc",n.Z),n.o===null&&(n.g.H=n.s),n.g.N=0;var e=dt(n.sa);j(e,"RID","rpc"),j(e,"SID",n.I),j(e,"CI",n.L?"0":"1"),j(e,"AID",n.T),j(e,"TYPE","xmlhttp"),Mi(n,e),n.o&&n.s&&xc(e,n.o,n.s),n.J&&n.g.setTimeout(n.J);var t=n.g;n=n.ka,t.K=1,t.v=yo(dt(e)),t.s=null,t.P=!0,mf(t,n)}T.cb=function(){this.v!=null&&(this.v=null,Io(this),Pc(this),Ae(19))};function xs(n){n.v!=null&&(D.clearTimeout(n.v),n.v=null)}function Vf(n,e){var t=null;if(n.g==e){xs(n),Lc(n),n.g=null;var r=2}else if(Na(n.h,e))t=e.D,kf(n.h,e),r=1;else return;if(n.G!=0){if(n.pa=e.Y,e.i)if(r==1){t=e.s?e.s.length:0,e=Date.now()-e.F;var i=n.C;r=fo(),Ie(r,new lf(r,t)),_o(n)}else Ff(n);else if(i=e.o,i==3||i==0&&0<n.pa||!(r==1&&Fb(n,e)||r==2&&Pc(n)))switch(t&&0<t.length&&(e=n.h,e.i=e.i.concat(t)),i){case 1:an(n,5);break;case 4:an(n,10);break;case 3:an(n,6);break;default:an(n,2)}}}function Bf(n,e){let t=n.Xa+Math.floor(Math.random()*n.bb);return n.l||(t*=2),t*e}function an(n,e){if(n.j.info("Error code "+e),e==2){var t=null;n.l&&(t=null);var r=be(n.kb,n);t||(t=new fn("//www.google.com/images/cleardot.gif"),D.location&&D.location.protocol=="http"||Ns(t,"https"),yo(t)),xb(t.toString(),r)}else Ae(2);n.G=0,n.l&&n.l.va(e),qf(n),Lf(n)}T.kb=function(n){n?(this.j.info("Successfully pinged google.com"),Ae(2)):(this.j.info("Failed to ping google.com"),Ae(1))};function qf(n){if(n.G=0,n.la=[],n.l){const e=Af(n.h);(e.length!=0||n.i.length!=0)&&(al(n.la,e),al(n.la,n.i),n.h.i.length=0,gc(n.i),n.i.length=0),n.l.ua()}}function $f(n,e,t){var r=t instanceof fn?dt(t):new fn(t,void 0);if(r.g!="")e&&(r.g=e+"."+r.g),Rs(r,r.m);else{var i=D.location;r=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var s=new fn(null,void 0);r&&Ns(s,r),e&&(s.g=e),i&&Rs(s,i),t&&(s.l=t),r=s}return t=n.D,e=n.za,t&&e&&j(r,t,e),j(r,"VER",n.ma),Mi(n,r),r}function jf(n,e,t){if(e&&!n.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=t&&n.Da&&!n.ra?new Q(new Pi({jb:!0})):new Q(n.ra),e.Ka(n.H),e}function Gf(){}T=Gf.prototype;T.xa=function(){};T.wa=function(){};T.va=function(){};T.ua=function(){};T.Ra=function(){};function Os(){if(Jn&&!(10<=Number(eb)))throw Error("Environmental error: no available transport.")}Os.prototype.g=function(n,e){return new Ue(n,e)};function Ue(n,e){he.call(this),this.g=new Pf(e),this.l=n,this.h=e&&e.messageUrlParams||null,n=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(n?n["X-Client-Protocol"]="webchannel":n={"X-Client-Protocol":"webchannel"}),this.g.s=n,n=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(n?n["X-WebChannel-Content-Type"]=e.messageContentType:n={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(n?n["X-WebChannel-Client-Profile"]=e.ya:n={"X-WebChannel-Client-Profile":e.ya}),this.g.S=n,(n=e&&e.Yb)&&!As(n)&&(this.g.o=n),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!As(e)&&(this.g.D=e,n=this.h,n!==null&&e in n&&(n=this.h,e in n&&delete n[e])),this.j=new gr(this)}_e(Ue,he);Ue.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var n=this.g,e=this.l,t=this.h||void 0;Ae(0),n.V=e,n.ia=t||{},n.L=n.Y,n.F=$f(n,null,n.V),_o(n)};Ue.prototype.close=function(){Oc(this.g)};Ue.prototype.u=function(n){var e=this.g;if(typeof n=="string"){var t={};t.__data__=n,n=t}else this.v&&(t={},t.__data__=Ec(n),n=t);e.i.push(new Cb(e.ab++,n)),e.G==3&&_o(e)};Ue.prototype.M=function(){this.g.l=null,delete this.j,Oc(this.g),delete this.g,Ue.X.M.call(this)};function Kf(n){Ac.call(this);var e=n.__sm__;if(e){e:{for(const t in e){n=t;break e}n=void 0}(this.i=n)&&(n=this.i,e=e!==null&&n in e?e[n]:void 0),this.data=e}else this.data=n}_e(Kf,Ac);function Wf(){Cc.call(this),this.status=1}_e(Wf,Cc);function gr(n){this.g=n}_e(gr,Gf);gr.prototype.xa=function(){Ie(this.g,"a")};gr.prototype.wa=function(n){Ie(this.g,new Kf(n))};gr.prototype.va=function(n){Ie(this.g,new Wf)};gr.prototype.ua=function(){Ie(this.g,"b")};Os.prototype.createWebChannel=Os.prototype.g;Ue.prototype.send=Ue.prototype.u;Ue.prototype.open=Ue.prototype.m;Ue.prototype.close=Ue.prototype.close;mo.NO_ERROR=0;mo.TIMEOUT=8;mo.HTTP_ERROR=6;hf.COMPLETE="complete";df.EventType=Ri;Ri.OPEN="a";Ri.CLOSE="b";Ri.ERROR="c";Ri.MESSAGE="d";he.prototype.listen=he.prototype.N;Q.prototype.listenOnce=Q.prototype.O;Q.prototype.getLastError=Q.prototype.Oa;Q.prototype.getLastErrorCode=Q.prototype.Ea;Q.prototype.getStatus=Q.prototype.aa;Q.prototype.getResponseJson=Q.prototype.Sa;Q.prototype.getResponseText=Q.prototype.fa;Q.prototype.send=Q.prototype.da;Q.prototype.setWithCredentials=Q.prototype.Ka;var Ub=function(){return new Os},Vb=function(){return fo()},ia=mo,Bb=hf,qb=Dn,wl={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},$b=Pi,rs=df,jb=Q;const Il="@firebase/firestore";/**
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
 */class oe{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}oe.UNAUTHENTICATED=new oe(null),oe.GOOGLE_CREDENTIALS=new oe("google-credentials-uid"),oe.FIRST_PARTY=new oe("first-party-uid"),oe.MOCK_USER=new oe("mock-user");/**
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
 */let yr="9.14.0";/**
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
 */const Ot=new Ws("@firebase/firestore");function Ra(){return Ot.logLevel}function Gb(n){Ot.setLogLevel(n)}function v(n,...e){if(Ot.logLevel<=P.DEBUG){const t=e.map(Mc);Ot.debug(`Firestore (${yr}): ${n}`,...t)}}function J(n,...e){if(Ot.logLevel<=P.ERROR){const t=e.map(Mc);Ot.error(`Firestore (${yr}): ${n}`,...t)}}function Zn(n,...e){if(Ot.logLevel<=P.WARN){const t=e.map(Mc);Ot.warn(`Firestore (${yr}): ${n}`,...t)}}function Mc(n){if(typeof n=="string")return n;try{return e=n,JSON.stringify(e)}catch{return n}/**
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
*/var e}/**
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
 */function E(n="Unexpected state"){const e=`FIRESTORE (${yr}) INTERNAL ASSERTION FAILED: `+n;throw J(e),new Error(e)}function C(n,e){n||E()}function Kb(n,e){n||E()}function _(n,e){return n}/**
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
 */const m={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class y extends Ce{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class ae{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
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
 */class zf{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Wb{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(oe.UNAUTHENTICATED))}shutdown(){}}class zb{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class Hb{constructor(e){this.t=e,this.currentUser=oe.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){let r=this.i;const i=c=>this.i!==r?(r=this.i,t(c)):Promise.resolve();let s=new ae;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new ae,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const c=s;e.enqueueRetryable(async()=>{await c.promise,await i(this.currentUser)})},a=c=>{v("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(v("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new ae)}},0),o()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(r=>this.i!==e?(v("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(C(typeof r.accessToken=="string"),new zf(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return C(e===null||typeof e=="string"),new oe(e)}}class Qb{constructor(e,t,r,i){this.h=e,this.l=t,this.m=r,this.g=i,this.type="FirstParty",this.user=oe.FIRST_PARTY,this.p=new Map}I(){return this.g?this.g():(C(!(typeof this.h!="object"||this.h===null||!this.h.auth||!this.h.auth.getAuthHeaderValueForFirstParty)),this.h.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.p.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.p.set("Authorization",e),this.m&&this.p.set("X-Goog-Iam-Authorization-Token",this.m),this.p}}class Yb{constructor(e,t,r,i){this.h=e,this.l=t,this.m=r,this.g=i}getToken(){return Promise.resolve(new Qb(this.h,this.l,this.m,this.g))}start(e,t){e.enqueueRetryable(()=>t(oe.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Xb{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Jb{constructor(e){this.T=e,this.forceRefresh=!1,this.appCheck=null,this.A=null}start(e,t){const r=s=>{s.error!=null&&v("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.A;return this.A=s.token,v("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?t(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{v("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.T.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.T.getImmediate({optional:!0});s?i(s):v("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(C(typeof t.token=="string"),this.A=t.token,new Xb(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function Zb(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
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
 */class Hf{static R(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=Zb(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<t&&(r+=e.charAt(i[s]%e.length))}return r}}function N(n,e){return n<e?-1:n>e?1:0}function er(n,e,t){return n.length===e.length&&n.every((r,i)=>t(r,e[i]))}function Qf(n){return n+"\0"}/**
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
 */class K{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new y(m.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new y(m.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new y(m.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new y(m.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return K.fromMillis(Date.now())}static fromDate(e){return K.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*t));return new K(t,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?N(this.nanoseconds,e.nanoseconds):N(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class A{constructor(e){this.timestamp=e}static fromTimestamp(e){return new A(e)}static min(){return new A(new K(0,0))}static max(){return new A(new K(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class li{constructor(e,t,r){t===void 0?t=0:t>e.length&&E(),r===void 0?r=e.length-t:r>e.length-t&&E(),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return li.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof li?e.forEach(r=>{t.push(r)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let i=0;i<r;i++){const s=e.get(i),o=t.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class O extends li{construct(e,t,r){return new O(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new y(m.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(i=>i.length>0))}return new O(t)}static emptyPath(){return new O([])}}const eE=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Z extends li{construct(e,t,r){return new Z(e,t,r)}static isValidIdentifier(e){return eE.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Z.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Z(["__name__"])}static fromServerFormat(e){const t=[];let r="",i=0;const s=()=>{if(r.length===0)throw new y(m.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new y(m.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[i+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new y(m.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new y(m.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Z(t)}static emptyPath(){return new Z([])}}/**
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
 */class I{constructor(e){this.path=e}static fromPath(e){return new I(O.fromString(e))}static fromName(e){return new I(O.fromString(e).popFirst(5))}static empty(){return new I(O.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&O.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return O.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new I(new O(e.slice()))}}/**
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
 */class Yf{constructor(e,t,r,i){this.indexId=e,this.collectionGroup=t,this.fields=r,this.indexState=i}}function xa(n){return n.fields.find(e=>e.kind===2)}function Jt(n){return n.fields.filter(e=>e.kind!==2)}Yf.UNKNOWN_ID=-1;class tE{constructor(e,t){this.fieldPath=e,this.kind=t}}class Ps{constructor(e,t){this.sequenceNumber=e,this.offset=t}static empty(){return new Ps(0,Ve.min())}}function Xf(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,i=A.fromTimestamp(r===1e9?new K(t+1,0):new K(t,r));return new Ve(i,I.empty(),e)}function Jf(n){return new Ve(n.readTime,n.key,-1)}class Ve{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new Ve(A.min(),I.empty(),-1)}static max(){return new Ve(A.max(),I.empty(),-1)}}function Fc(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=I.comparator(n.documentKey,e.documentKey),t!==0?t:N(n.largestBatchId,e.largestBatchId))}/**
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
 */const Zf="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class em{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function Gt(n){if(n.code!==m.FAILED_PRECONDITION||n.message!==Zf)throw n;v("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class f{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&E(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new f((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(t,s).next(r,i)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof f?t:f.resolve(t)}catch(t){return f.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):f.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):f.reject(t)}static resolve(e){return new f((t,r)=>{t(e)})}static reject(e){return new f((t,r)=>{r(e)})}static waitFor(e){return new f((t,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&t()},c=>r(c))}),o=!0,s===i&&t()})}static or(e){let t=f.resolve(!1);for(const r of e)t=t.next(i=>i?f.resolve(i):r());return t}static forEach(e,t){const r=[];return e.forEach((i,s)=>{r.push(t.call(this,i,s))}),this.waitFor(r)}static mapArray(e,t){return new f((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let c=0;c<s;c++){const u=c;t(e[u]).next(l=>{o[u]=l,++a,a===s&&r(o)},l=>i(l))}})}static doWhile(e,t){return new f((r,i)=>{const s=()=>{e()===!0?t().next(()=>{s()},i):r()};s()})}}/**
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
 */class bo{constructor(e,t){this.action=e,this.transaction=t,this.aborted=!1,this.P=new ae,this.transaction.oncomplete=()=>{this.P.resolve()},this.transaction.onabort=()=>{t.error?this.P.reject(new Wr(e,t.error)):this.P.resolve()},this.transaction.onerror=r=>{const i=Uc(r.target.error);this.P.reject(new Wr(e,i))}}static open(e,t,r,i){try{return new bo(t,e.transaction(i,r))}catch(s){throw new Wr(t,s)}}get v(){return this.P.promise}abort(e){e&&this.P.reject(e),this.aborted||(v("SimpleDb","Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}V(){const e=this.transaction;this.aborted||typeof e.commit!="function"||e.commit()}store(e){const t=this.transaction.objectStore(e);return new rE(t)}}class $e{constructor(e,t,r){this.name=e,this.version=t,this.S=r,$e.D(W())===12.2&&J("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(e){return v("SimpleDb","Removing database:",e),Zt(window.indexedDB.deleteDatabase(e)).toPromise()}static C(){if(!Jr())return!1;if($e.N())return!0;const e=W(),t=$e.D(e),r=0<t&&t<10,i=$e.k(e),s=0<i&&i<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||r||s)}static N(){var e;return typeof process<"u"&&((e=process.env)===null||e===void 0?void 0:e.O)==="YES"}static M(e,t){return e.store(t)}static D(e){const t=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),r=t?t[1].split("_").slice(0,2).join("."):"-1";return Number(r)}static k(e){const t=e.match(/Android ([\d.]+)/i),r=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(r)}async F(e){return this.db||(v("SimpleDb","Opening database:",this.name),this.db=await new Promise((t,r)=>{const i=indexedDB.open(this.name,this.version);i.onsuccess=s=>{const o=s.target.result;t(o)},i.onblocked=()=>{r(new Wr(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},i.onerror=s=>{const o=s.target.error;o.name==="VersionError"?r(new y(m.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):o.name==="InvalidStateError"?r(new y(m.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+o)):r(new Wr(e,o))},i.onupgradeneeded=s=>{v("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',s.oldVersion);const o=s.target.result;this.S.$(o,i.transaction,s.oldVersion,this.version).next(()=>{v("SimpleDb","Database upgrade to version "+this.version+" complete")})}})),this.B&&(this.db.onversionchange=t=>this.B(t)),this.db}L(e){this.B=e,this.db&&(this.db.onversionchange=t=>e(t))}async runTransaction(e,t,r,i){const s=t==="readonly";let o=0;for(;;){++o;try{this.db=await this.F(e);const a=bo.open(this.db,e,s?"readonly":"readwrite",r),c=i(a).next(u=>(a.V(),u)).catch(u=>(a.abort(u),f.reject(u))).toPromise();return c.catch(()=>{}),await a.v,c}catch(a){const c=a,u=c.name!=="FirebaseError"&&o<3;if(v("SimpleDb","Transaction failed with error:",c.message,"Retrying:",u),this.close(),!u)return Promise.reject(c)}}}close(){this.db&&this.db.close(),this.db=void 0}}class nE{constructor(e){this.U=e,this.q=!1,this.K=null}get isDone(){return this.q}get G(){return this.K}set cursor(e){this.U=e}done(){this.q=!0}j(e){this.K=e}delete(){return Zt(this.U.delete())}}class Wr extends y{constructor(e,t){super(m.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${t}`),this.name="IndexedDbTransactionError"}}function Kt(n){return n.name==="IndexedDbTransactionError"}class rE{constructor(e){this.store=e}put(e,t){let r;return t!==void 0?(v("SimpleDb","PUT",this.store.name,e,t),r=this.store.put(t,e)):(v("SimpleDb","PUT",this.store.name,"<auto-key>",e),r=this.store.put(e)),Zt(r)}add(e){return v("SimpleDb","ADD",this.store.name,e,e),Zt(this.store.add(e))}get(e){return Zt(this.store.get(e)).next(t=>(t===void 0&&(t=null),v("SimpleDb","GET",this.store.name,e,t),t))}delete(e){return v("SimpleDb","DELETE",this.store.name,e),Zt(this.store.delete(e))}count(){return v("SimpleDb","COUNT",this.store.name),Zt(this.store.count())}W(e,t){const r=this.options(e,t);if(r.index||typeof this.store.getAll!="function"){const i=this.cursor(r),s=[];return this.H(i,(o,a)=>{s.push(a)}).next(()=>s)}{const i=this.store.getAll(r.range);return new f((s,o)=>{i.onerror=a=>{o(a.target.error)},i.onsuccess=a=>{s(a.target.result)}})}}J(e,t){const r=this.store.getAll(e,t===null?void 0:t);return new f((i,s)=>{r.onerror=o=>{s(o.target.error)},r.onsuccess=o=>{i(o.target.result)}})}Y(e,t){v("SimpleDb","DELETE ALL",this.store.name);const r=this.options(e,t);r.X=!1;const i=this.cursor(r);return this.H(i,(s,o,a)=>a.delete())}Z(e,t){let r;t?r=e:(r={},t=e);const i=this.cursor(r);return this.H(i,t)}tt(e){const t=this.cursor({});return new f((r,i)=>{t.onerror=s=>{const o=Uc(s.target.error);i(o)},t.onsuccess=s=>{const o=s.target.result;o?e(o.primaryKey,o.value).next(a=>{a?o.continue():r()}):r()}})}H(e,t){const r=[];return new f((i,s)=>{e.onerror=o=>{s(o.target.error)},e.onsuccess=o=>{const a=o.target.result;if(!a)return void i();const c=new nE(a),u=t(a.primaryKey,a.value,c);if(u instanceof f){const l=u.catch(h=>(c.done(),f.reject(h)));r.push(l)}c.isDone?i():c.G===null?a.continue():a.continue(c.G)}}).next(()=>f.waitFor(r))}options(e,t){let r;return e!==void 0&&(typeof e=="string"?r=e:t=e),{index:r,range:t}}cursor(e){let t="next";if(e.reverse&&(t="prev"),e.index){const r=this.store.index(e.index);return e.X?r.openKeyCursor(e.range,t):r.openCursor(e.range,t)}return this.store.openCursor(e.range,t)}}function Zt(n){return new f((e,t)=>{n.onsuccess=r=>{const i=r.target.result;e(i)},n.onerror=r=>{const i=Uc(r.target.error);t(i)}})}let _l=!1;function Uc(n){const e=$e.D(W());if(e>=12.2&&e<13){const t="An internal error was encountered in the Indexed Database server";if(n.message.indexOf(t)>=0){const r=new y("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${t}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return _l||(_l=!0,setTimeout(()=>{throw r},0)),r}}return n}class iE{constructor(e,t){this.asyncQueue=e,this.et=t,this.task=null}start(){this.nt(15e3)}stop(){this.task&&(this.task.cancel(),this.task=null)}get started(){return this.task!==null}nt(e){v("IndexBackiller",`Scheduled in ${e}ms`),this.task=this.asyncQueue.enqueueAfterDelay("index_backfill",e,async()=>{this.task=null;try{v("IndexBackiller",`Documents written: ${await this.et.st()}`)}catch(t){Kt(t)?v("IndexBackiller","Ignoring IndexedDB error during index backfill: ",t):await Gt(t)}await this.nt(6e4)})}}class sE{constructor(e,t){this.localStore=e,this.persistence=t}async st(e=50){return this.persistence.runTransaction("Backfill Indexes","readwrite-primary",t=>this.it(t,e))}it(e,t){const r=new Set;let i=t,s=!0;return f.doWhile(()=>s===!0&&i>0,()=>this.localStore.indexManager.getNextCollectionGroupToUpdate(e).next(o=>{if(o!==null&&!r.has(o))return v("IndexBackiller",`Processing collection: ${o}`),this.rt(e,o,i).next(a=>{i-=a,r.add(o)});s=!1})).next(()=>t-i)}rt(e,t,r){return this.localStore.indexManager.getMinOffsetFromCollectionGroup(e,t).next(i=>this.localStore.localDocuments.getNextDocuments(e,t,i,r).next(s=>{const o=s.changes;return this.localStore.indexManager.updateIndexEntries(e,o).next(()=>this.ot(i,s)).next(a=>(v("IndexBackiller",`Updating offset: ${a}`),this.localStore.indexManager.updateCollectionGroup(e,t,a))).next(()=>o.size)}))}ot(e,t){let r=e;return t.changes.forEach((i,s)=>{const o=Jf(s);Fc(o,r)>0&&(r=o)}),new Ve(r.readTime,r.documentKey,Math.max(t.batchId,e.largestBatchId))}}/**
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
 */class xe{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this.ut(r),this.ct=r=>t.writeSequenceNumber(r))}ut(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ct&&this.ct(e),e}}/**
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
 */function bl(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function Nn(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function tm(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
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
 */xe.at=-1;class Y{constructor(e,t){this.comparator=e,this.root=t||ge.EMPTY}insert(e,t){return new Y(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,ge.BLACK,null,null))}remove(e){return new Y(this.comparator,this.root.remove(e,this.comparator).copy(null,null,ge.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return t+r.left.size;i<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){const e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new is(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new is(this.root,e,this.comparator,!1)}getReverseIterator(){return new is(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new is(this.root,e,this.comparator,!0)}}class is{constructor(e,t,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=t?r(e.key,t):1,t&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class ge{constructor(e,t,r,i,s){this.key=e,this.value=t,this.color=r!=null?r:ge.RED,this.left=i!=null?i:ge.EMPTY,this.right=s!=null?s:ge.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,i,s){return new ge(e!=null?e:this.key,t!=null?t:this.value,r!=null?r:this.color,i!=null?i:this.left,s!=null?s:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,t,r),null):s===0?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return ge.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,i=this;if(t(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),t(e,i.key)===0){if(i.right.isEmpty())return ge.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,ge.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,ge.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw E();const e=this.left.check();if(e!==this.right.check())throw E();return e+(this.isRed()?0:1)}}ge.EMPTY=null,ge.RED=!0,ge.BLACK=!1;ge.EMPTY=new class{constructor(){this.size=0}get key(){throw E()}get value(){throw E()}get color(){throw E()}get left(){throw E()}get right(){throw E()}copy(n,e,t,r,i){return this}insert(n,e,t){return new ge(n,e)}remove(n,e){return this}isEmpty(){return!0}inorderTraversal(n){return!1}reverseTraversal(n){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class F{constructor(e){this.comparator=e,this.data=new Y(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;t(i.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new El(this.data.getIterator())}getIteratorFrom(e){return new El(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(r=>{t=t.add(r)}),t}isEqual(e){if(!(e instanceof F)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const i=t.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new F(this.comparator);return t.data=e,t}}class El{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function Mn(n){return n.hasNext()?n.getNext():void 0}/**
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
 */class Fe{constructor(e){this.fields=e,e.sort(Z.comparator)}static empty(){return new Fe([])}unionWith(e){let t=new F(Z.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new Fe(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return er(this.fields,e.fields,(t,r)=>t.isEqual(r))}}/**
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
 */function oE(){return typeof atob<"u"}/**
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
 */class re{constructor(e){this.binaryString=e}static fromBase64String(e){const t=atob(e);return new re(t)}static fromUint8Array(e){const t=function(r){let i="";for(let s=0;s<r.length;++s)i+=String.fromCharCode(r[s]);return i}(e);return new re(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const t=new Uint8Array(e.length);for(let r=0;r<e.length;r++)t[r]=e.charCodeAt(r);return t}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return N(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}re.EMPTY_BYTE_STRING=new re("");const aE=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Pt(n){if(C(!!n),typeof n=="string"){let e=0;const t=aE.exec(n);if(C(!!t),t[1]){let i=t[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:H(n.seconds),nanos:H(n.nanos)}}function H(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function gn(n){return typeof n=="string"?re.fromBase64String(n):re.fromUint8Array(n)}/**
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
 */function Vc(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="server_timestamp"}function nm(n){const e=n.mapValue.fields.__previous_value__;return Vc(e)?nm(e):e}function hi(n){const e=Pt(n.mapValue.fields.__local_write_time__.timestampValue);return new K(e.seconds,e.nanos)}/**
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
 */class cE{constructor(e,t,r,i,s,o,a,c){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=c}}class Lt{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new Lt("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Lt&&e.projectId===this.projectId&&e.database===this.database}}function Fi(n){return n==null}function di(n){return n===0&&1/n==-1/0}function rm(n){return typeof n=="number"&&Number.isInteger(n)&&!di(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
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
 */const kt={mapValue:{fields:{__type__:{stringValue:"__max__"}}}},ds={nullValue:"NULL_VALUE"};function yn(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Vc(n)?4:im(n)?9007199254740991:10:E()}function it(n,e){if(n===e)return!0;const t=yn(n);if(t!==yn(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return hi(n).isEqual(hi(e));case 3:return function(r,i){if(typeof r.timestampValue=="string"&&typeof i.timestampValue=="string"&&r.timestampValue.length===i.timestampValue.length)return r.timestampValue===i.timestampValue;const s=Pt(r.timestampValue),o=Pt(i.timestampValue);return s.seconds===o.seconds&&s.nanos===o.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(r,i){return gn(r.bytesValue).isEqual(gn(i.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(r,i){return H(r.geoPointValue.latitude)===H(i.geoPointValue.latitude)&&H(r.geoPointValue.longitude)===H(i.geoPointValue.longitude)}(n,e);case 2:return function(r,i){if("integerValue"in r&&"integerValue"in i)return H(r.integerValue)===H(i.integerValue);if("doubleValue"in r&&"doubleValue"in i){const s=H(r.doubleValue),o=H(i.doubleValue);return s===o?di(s)===di(o):isNaN(s)&&isNaN(o)}return!1}(n,e);case 9:return er(n.arrayValue.values||[],e.arrayValue.values||[],it);case 10:return function(r,i){const s=r.mapValue.fields||{},o=i.mapValue.fields||{};if(bl(s)!==bl(o))return!1;for(const a in s)if(s.hasOwnProperty(a)&&(o[a]===void 0||!it(s[a],o[a])))return!1;return!0}(n,e);default:return E()}}function fi(n,e){return(n.values||[]).find(t=>it(t,e))!==void 0}function Mt(n,e){if(n===e)return 0;const t=yn(n),r=yn(e);if(t!==r)return N(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return N(n.booleanValue,e.booleanValue);case 2:return function(i,s){const o=H(i.integerValue||i.doubleValue),a=H(s.integerValue||s.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(n,e);case 3:return Tl(n.timestampValue,e.timestampValue);case 4:return Tl(hi(n),hi(e));case 5:return N(n.stringValue,e.stringValue);case 6:return function(i,s){const o=gn(i),a=gn(s);return o.compareTo(a)}(n.bytesValue,e.bytesValue);case 7:return function(i,s){const o=i.split("/"),a=s.split("/");for(let c=0;c<o.length&&c<a.length;c++){const u=N(o[c],a[c]);if(u!==0)return u}return N(o.length,a.length)}(n.referenceValue,e.referenceValue);case 8:return function(i,s){const o=N(H(i.latitude),H(s.latitude));return o!==0?o:N(H(i.longitude),H(s.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return function(i,s){const o=i.values||[],a=s.values||[];for(let c=0;c<o.length&&c<a.length;++c){const u=Mt(o[c],a[c]);if(u)return u}return N(o.length,a.length)}(n.arrayValue,e.arrayValue);case 10:return function(i,s){if(i===kt.mapValue&&s===kt.mapValue)return 0;if(i===kt.mapValue)return 1;if(s===kt.mapValue)return-1;const o=i.fields||{},a=Object.keys(o),c=s.fields||{},u=Object.keys(c);a.sort(),u.sort();for(let l=0;l<a.length&&l<u.length;++l){const h=N(a[l],u[l]);if(h!==0)return h;const d=Mt(o[a[l]],c[u[l]]);if(d!==0)return d}return N(a.length,u.length)}(n.mapValue,e.mapValue);default:throw E()}}function Tl(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return N(n,e);const t=Pt(n),r=Pt(e),i=N(t.seconds,r.seconds);return i!==0?i:N(t.nanos,r.nanos)}function Wn(n){return Oa(n)}function Oa(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(r){const i=Pt(r);return`time(${i.seconds},${i.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?gn(n.bytesValue).toBase64():"referenceValue"in n?(t=n.referenceValue,I.fromName(t).toString()):"geoPointValue"in n?`geo(${(e=n.geoPointValue).latitude},${e.longitude})`:"arrayValue"in n?function(r){let i="[",s=!0;for(const o of r.values||[])s?s=!1:i+=",",i+=Oa(o);return i+"]"}(n.arrayValue):"mapValue"in n?function(r){const i=Object.keys(r.fields||{}).sort();let s="{",o=!0;for(const a of i)o?o=!1:s+=",",s+=`${a}:${Oa(r.fields[a])}`;return s+"}"}(n.mapValue):E();var e,t}function vn(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function Pa(n){return!!n&&"integerValue"in n}function mi(n){return!!n&&"arrayValue"in n}function Sl(n){return!!n&&"nullValue"in n}function kl(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function fs(n){return!!n&&"mapValue"in n}function zr(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return Nn(n.mapValue.fields,(t,r)=>e.mapValue.fields[t]=zr(r)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=zr(n.arrayValue.values[t]);return e}return Object.assign({},n)}function im(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}function uE(n){return"nullValue"in n?ds:"booleanValue"in n?{booleanValue:!1}:"integerValue"in n||"doubleValue"in n?{doubleValue:NaN}:"timestampValue"in n?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in n?{stringValue:""}:"bytesValue"in n?{bytesValue:""}:"referenceValue"in n?vn(Lt.empty(),I.empty()):"geoPointValue"in n?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in n?{arrayValue:{}}:"mapValue"in n?{mapValue:{}}:E()}function lE(n){return"nullValue"in n?{booleanValue:!1}:"booleanValue"in n?{doubleValue:NaN}:"integerValue"in n||"doubleValue"in n?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in n?{stringValue:""}:"stringValue"in n?{bytesValue:""}:"bytesValue"in n?vn(Lt.empty(),I.empty()):"referenceValue"in n?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in n?{arrayValue:{}}:"arrayValue"in n?{mapValue:{}}:"mapValue"in n?kt:E()}function Al(n,e){const t=Mt(n.value,e.value);return t!==0?t:n.inclusive&&!e.inclusive?-1:!n.inclusive&&e.inclusive?1:0}function Cl(n,e){const t=Mt(n.value,e.value);return t!==0?t:n.inclusive&&!e.inclusive?1:!n.inclusive&&e.inclusive?-1:0}/**
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
 */class ye{constructor(e){this.value=e}static empty(){return new ye({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!fs(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=zr(t)}setAll(e){let t=Z.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!t.isImmediateParentOf(a)){const c=this.getFieldsMap(t);this.applyChanges(c,r,i),r={},i=[],t=a.popLast()}o?r[a.lastSegment()]=zr(o):i.push(a.lastSegment())});const s=this.getFieldsMap(t);this.applyChanges(s,r,i)}delete(e){const t=this.field(e.popLast());fs(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return it(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=t.mapValue.fields[e.get(r)];fs(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=i),t=i}return t.mapValue.fields}applyChanges(e,t,r){Nn(t,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new ye(zr(this.value))}}function sm(n){const e=[];return Nn(n.fields,(t,r)=>{const i=new Z([t]);if(fs(r)){const s=sm(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new Fe(e)}/**
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
 */class B{constructor(e,t,r,i,s,o){this.key=e,this.documentType=t,this.version=r,this.readTime=i,this.data=s,this.documentState=o}static newInvalidDocument(e){return new B(e,0,A.min(),A.min(),ye.empty(),0)}static newFoundDocument(e,t,r){return new B(e,1,t,A.min(),r,0)}static newNoDocument(e,t){return new B(e,2,t,A.min(),ye.empty(),0)}static newUnknownDocument(e,t){return new B(e,3,t,A.min(),ye.empty(),2)}convertToFoundDocument(e,t){return this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=ye.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=ye.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=A.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof B&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new B(this.key,this.documentType,this.version,this.readTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class hE{constructor(e,t=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.ht=null}}function Dl(n,e=null,t=[],r=[],i=null,s=null,o=null){return new hE(n,e,t,r,i,s,o)}function wn(n){const e=_(n);if(e.ht===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(r=>{return(i=r).field.canonicalString()+i.op.toString()+Wn(i.value);var i}).join(","),t+="|ob:",t+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),Fi(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(r=>Wn(r)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(r=>Wn(r)).join(",")),e.ht=t}return e.ht}function dE(n){let e=n.path.canonicalString();return n.collectionGroup!==null&&(e+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(e+=`, filters: [${n.filters.map(t=>{return`${(r=t).field.canonicalString()} ${r.op} ${Wn(r.value)}`;var r}).join(", ")}]`),Fi(n.limit)||(e+=", limit: "+n.limit),n.orderBy.length>0&&(e+=`, orderBy: [${n.orderBy.map(t=>function(r){return`${r.field.canonicalString()} (${r.dir})`}(t)).join(", ")}]`),n.startAt&&(e+=", startAt: ",e+=n.startAt.inclusive?"b:":"a:",e+=n.startAt.position.map(t=>Wn(t)).join(",")),n.endAt&&(e+=", endAt: ",e+=n.endAt.inclusive?"a:":"b:",e+=n.endAt.position.map(t=>Wn(t)).join(",")),`Target(${e})`}function Ui(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let i=0;i<n.orderBy.length;i++)if(!IE(n.orderBy[i],e.orderBy[i]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let i=0;i<n.filters.length;i++)if(t=n.filters[i],r=e.filters[i],t.op!==r.op||!t.field.isEqual(r.field)||!it(t.value,r.value))return!1;var t,r;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!Ol(n.startAt,e.startAt)&&Ol(n.endAt,e.endAt)}function Ls(n){return I.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}function Ms(n,e){return n.filters.filter(t=>t instanceof ve&&t.field.isEqual(e))}function Nl(n,e,t){let r=ds,i=!0;for(const s of Ms(n,e)){let o=ds,a=!0;switch(s.op){case"<":case"<=":o=uE(s.value);break;case"==":case"in":case">=":o=s.value;break;case">":o=s.value,a=!1;break;case"!=":case"not-in":o=ds}Al({value:r,inclusive:i},{value:o,inclusive:a})<0&&(r=o,i=a)}if(t!==null){for(let s=0;s<n.orderBy.length;++s)if(n.orderBy[s].field.isEqual(e)){const o=t.position[s];Al({value:r,inclusive:i},{value:o,inclusive:t.inclusive})<0&&(r=o,i=t.inclusive);break}}return{value:r,inclusive:i}}function Rl(n,e,t){let r=kt,i=!0;for(const s of Ms(n,e)){let o=kt,a=!0;switch(s.op){case">=":case">":o=lE(s.value),a=!1;break;case"==":case"in":case"<=":o=s.value;break;case"<":o=s.value,a=!1;break;case"!=":case"not-in":o=kt}Cl({value:r,inclusive:i},{value:o,inclusive:a})>0&&(r=o,i=a)}if(t!==null){for(let s=0;s<n.orderBy.length;++s)if(n.orderBy[s].field.isEqual(e)){const o=t.position[s];Cl({value:r,inclusive:i},{value:o,inclusive:t.inclusive})>0&&(r=o,i=t.inclusive);break}}return{value:r,inclusive:i}}class ve extends class{}{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.lt(e,t,r):new fE(e,t,r):t==="array-contains"?new gE(e,r):t==="in"?new yE(e,r):t==="not-in"?new vE(e,r):t==="array-contains-any"?new wE(e,r):new ve(e,t,r)}static lt(e,t,r){return t==="in"?new mE(e,r):new pE(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.ft(Mt(t,this.value)):t!==null&&yn(this.value)===yn(t)&&this.ft(Mt(t,this.value))}ft(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return E()}}dt(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class fE extends ve{constructor(e,t,r){super(e,t,r),this.key=I.fromName(r.referenceValue)}matches(e){const t=I.comparator(e.key,this.key);return this.ft(t)}}class mE extends ve{constructor(e,t){super(e,"in",t),this.keys=om("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class pE extends ve{constructor(e,t){super(e,"not-in",t),this.keys=om("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function om(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(r=>I.fromName(r.referenceValue))}class gE extends ve{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return mi(t)&&fi(t.arrayValue,this.value)}}class yE extends ve{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&fi(this.value.arrayValue,t)}}class vE extends ve{constructor(e,t){super(e,"not-in",t)}matches(e){if(fi(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!fi(this.value.arrayValue,t)}}class wE extends ve{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!mi(t)||!t.arrayValue.values)&&t.arrayValue.values.some(r=>fi(this.value.arrayValue,r))}}class Ft{constructor(e,t){this.position=e,this.inclusive=t}}class zn{constructor(e,t="asc"){this.field=e,this.dir=t}}function IE(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}function xl(n,e,t){let r=0;for(let i=0;i<n.position.length;i++){const s=e[i],o=n.position[i];if(s.field.isKeyField()?r=I.comparator(I.fromName(o.referenceValue),t.key):r=Mt(o,t.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function Ol(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!it(n.position[t],e.position[t]))return!1;return!0}/**
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
 */class yt{constructor(e,t=null,r=[],i=[],s=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=c,this._t=null,this.wt=null,this.startAt,this.endAt}}function am(n,e,t,r,i,s,o,a){return new yt(n,e,t,r,i,s,o,a)}function vr(n){return new yt(n)}function Pl(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function Bc(n){return n.explicitOrderBy.length>0?n.explicitOrderBy[0].field:null}function qc(n){for(const e of n.filters)if(e.dt())return e.field;return null}function $c(n){return n.collectionGroup!==null}function tr(n){const e=_(n);if(e._t===null){e._t=[];const t=qc(e),r=Bc(e);if(t!==null&&r===null)t.isKeyField()||e._t.push(new zn(t)),e._t.push(new zn(Z.keyField(),"asc"));else{let i=!1;for(const s of e.explicitOrderBy)e._t.push(s),s.field.isKeyField()&&(i=!0);if(!i){const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e._t.push(new zn(Z.keyField(),s))}}}return e._t}function Pe(n){const e=_(n);if(!e.wt)if(e.limitType==="F")e.wt=Dl(e.path,e.collectionGroup,tr(e),e.filters,e.limit,e.startAt,e.endAt);else{const t=[];for(const s of tr(e)){const o=s.dir==="desc"?"asc":"desc";t.push(new zn(s.field,o))}const r=e.endAt?new Ft(e.endAt.position,e.endAt.inclusive):null,i=e.startAt?new Ft(e.startAt.position,e.startAt.inclusive):null;e.wt=Dl(e.path,e.collectionGroup,t,e.filters,e.limit,r,i)}return e.wt}function Fs(n,e,t){return new yt(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function Vi(n,e){return Ui(Pe(n),Pe(e))&&n.limitType===e.limitType}function cm(n){return`${wn(Pe(n))}|lt:${n.limitType}`}function La(n){return`Query(target=${dE(Pe(n))}; limitType=${n.limitType})`}function jc(n,e){return e.isFoundDocument()&&function(t,r){const i=r.key.path;return t.collectionGroup!==null?r.key.hasCollectionId(t.collectionGroup)&&t.path.isPrefixOf(i):I.isDocumentKey(t.path)?t.path.isEqual(i):t.path.isImmediateParentOf(i)}(n,e)&&function(t,r){for(const i of t.explicitOrderBy)if(!i.field.isKeyField()&&r.data.field(i.field)===null)return!1;return!0}(n,e)&&function(t,r){for(const i of t.filters)if(!i.matches(r))return!1;return!0}(n,e)&&function(t,r){return!(t.startAt&&!function(i,s,o){const a=xl(i,s,o);return i.inclusive?a<=0:a<0}(t.startAt,tr(t),r)||t.endAt&&!function(i,s,o){const a=xl(i,s,o);return i.inclusive?a>=0:a>0}(t.endAt,tr(t),r))}(n,e)}function um(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function lm(n){return(e,t)=>{let r=!1;for(const i of tr(n)){const s=_E(i,e,t);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function _E(n,e,t){const r=n.field.isKeyField()?I.comparator(e.key,t.key):function(i,s,o){const a=s.data.field(i),c=o.data.field(i);return a!==null&&c!==null?Mt(a,c):E()}(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return E()}}/**
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
 */function hm(n,e){if(n.gt){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:di(e)?"-0":e}}function dm(n){return{integerValue:""+n}}function fm(n,e){return rm(e)?dm(e):hm(n,e)}/**
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
 */class Eo{constructor(){this._=void 0}}function bE(n,e,t){return n instanceof nr?function(r,i){const s={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return i&&(s.fields.__previous_value__=i),{mapValue:s}}(t,e):n instanceof In?pm(n,e):n instanceof _n?gm(n,e):function(r,i){const s=mm(r,i),o=Ll(s)+Ll(r.yt);return Pa(s)&&Pa(r.yt)?dm(o):hm(r.It,o)}(n,e)}function EE(n,e,t){return n instanceof In?pm(n,e):n instanceof _n?gm(n,e):t}function mm(n,e){return n instanceof rr?Pa(t=e)||function(r){return!!r&&"doubleValue"in r}(t)?e:{integerValue:0}:null;var t}class nr extends Eo{}class In extends Eo{constructor(e){super(),this.elements=e}}function pm(n,e){const t=ym(e);for(const r of n.elements)t.some(i=>it(i,r))||t.push(r);return{arrayValue:{values:t}}}class _n extends Eo{constructor(e){super(),this.elements=e}}function gm(n,e){let t=ym(e);for(const r of n.elements)t=t.filter(i=>!it(i,r));return{arrayValue:{values:t}}}class rr extends Eo{constructor(e,t){super(),this.It=e,this.yt=t}}function Ll(n){return H(n.integerValue||n.doubleValue)}function ym(n){return mi(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
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
 */class Bi{constructor(e,t){this.field=e,this.transform=t}}function TE(n,e){return n.field.isEqual(e.field)&&function(t,r){return t instanceof In&&r instanceof In||t instanceof _n&&r instanceof _n?er(t.elements,r.elements,it):t instanceof rr&&r instanceof rr?it(t.yt,r.yt):t instanceof nr&&r instanceof nr}(n.transform,e.transform)}class SE{constructor(e,t){this.version=e,this.transformResults=t}}class G{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new G}static exists(e){return new G(void 0,e)}static updateTime(e){return new G(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function ms(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class To{}function vm(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new Ir(n.key,G.none()):new wr(n.key,n.data,G.none());{const t=n.data,r=ye.empty();let i=new F(Z.comparator);for(let s of e.fields)if(!i.has(s)){let o=t.field(s);o===null&&s.length>1&&(s=s.popLast(),o=t.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new vt(n.key,r,new Fe(i.toArray()),G.none())}}function kE(n,e,t){n instanceof wr?function(r,i,s){const o=r.value.clone(),a=Fl(r.fieldTransforms,i,s.transformResults);o.setAll(a),i.convertToFoundDocument(s.version,o).setHasCommittedMutations()}(n,e,t):n instanceof vt?function(r,i,s){if(!ms(r.precondition,i))return void i.convertToUnknownDocument(s.version);const o=Fl(r.fieldTransforms,i,s.transformResults),a=i.data;a.setAll(wm(r)),a.setAll(o),i.convertToFoundDocument(s.version,a).setHasCommittedMutations()}(n,e,t):function(r,i,s){i.convertToNoDocument(s.version).setHasCommittedMutations()}(0,e,t)}function Hr(n,e,t,r){return n instanceof wr?function(i,s,o,a){if(!ms(i.precondition,s))return o;const c=i.value.clone(),u=Ul(i.fieldTransforms,a,s);return c.setAll(u),s.convertToFoundDocument(s.version,c).setHasLocalMutations(),null}(n,e,t,r):n instanceof vt?function(i,s,o,a){if(!ms(i.precondition,s))return o;const c=Ul(i.fieldTransforms,a,s),u=s.data;return u.setAll(wm(i)),u.setAll(c),s.convertToFoundDocument(s.version,u).setHasLocalMutations(),o===null?null:o.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(l=>l.field))}(n,e,t,r):function(i,s,o){return ms(i.precondition,s)?(s.convertToNoDocument(s.version).setHasLocalMutations(),null):o}(n,e,t)}function AE(n,e){let t=null;for(const r of n.fieldTransforms){const i=e.data.field(r.field),s=mm(r.transform,i||null);s!=null&&(t===null&&(t=ye.empty()),t.set(r.field,s))}return t||null}function Ml(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(t,r){return t===void 0&&r===void 0||!(!t||!r)&&er(t,r,(i,s)=>TE(i,s))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class wr extends To{constructor(e,t,r,i=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class vt extends To{constructor(e,t,r,i,s=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function wm(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}}),e}function Fl(n,e,t){const r=new Map;C(n.length===t.length);for(let i=0;i<t.length;i++){const s=n[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,EE(o,a,t[i]))}return r}function Ul(n,e,t){const r=new Map;for(const i of n){const s=i.transform,o=t.data.field(i.field);r.set(i.field,bE(s,o,e))}return r}class Ir extends To{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Gc extends To{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class CE{constructor(e){this.count=e}}/**
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
 */var ee,x;function Im(n){switch(n){default:return E();case m.CANCELLED:case m.UNKNOWN:case m.DEADLINE_EXCEEDED:case m.RESOURCE_EXHAUSTED:case m.INTERNAL:case m.UNAVAILABLE:case m.UNAUTHENTICATED:return!1;case m.INVALID_ARGUMENT:case m.NOT_FOUND:case m.ALREADY_EXISTS:case m.PERMISSION_DENIED:case m.FAILED_PRECONDITION:case m.ABORTED:case m.OUT_OF_RANGE:case m.UNIMPLEMENTED:case m.DATA_LOSS:return!0}}function _m(n){if(n===void 0)return J("GRPC error has no .code"),m.UNKNOWN;switch(n){case ee.OK:return m.OK;case ee.CANCELLED:return m.CANCELLED;case ee.UNKNOWN:return m.UNKNOWN;case ee.DEADLINE_EXCEEDED:return m.DEADLINE_EXCEEDED;case ee.RESOURCE_EXHAUSTED:return m.RESOURCE_EXHAUSTED;case ee.INTERNAL:return m.INTERNAL;case ee.UNAVAILABLE:return m.UNAVAILABLE;case ee.UNAUTHENTICATED:return m.UNAUTHENTICATED;case ee.INVALID_ARGUMENT:return m.INVALID_ARGUMENT;case ee.NOT_FOUND:return m.NOT_FOUND;case ee.ALREADY_EXISTS:return m.ALREADY_EXISTS;case ee.PERMISSION_DENIED:return m.PERMISSION_DENIED;case ee.FAILED_PRECONDITION:return m.FAILED_PRECONDITION;case ee.ABORTED:return m.ABORTED;case ee.OUT_OF_RANGE:return m.OUT_OF_RANGE;case ee.UNIMPLEMENTED:return m.UNIMPLEMENTED;case ee.DATA_LOSS:return m.DATA_LOSS;default:return E()}}(x=ee||(ee={}))[x.OK=0]="OK",x[x.CANCELLED=1]="CANCELLED",x[x.UNKNOWN=2]="UNKNOWN",x[x.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",x[x.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",x[x.NOT_FOUND=5]="NOT_FOUND",x[x.ALREADY_EXISTS=6]="ALREADY_EXISTS",x[x.PERMISSION_DENIED=7]="PERMISSION_DENIED",x[x.UNAUTHENTICATED=16]="UNAUTHENTICATED",x[x.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",x[x.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",x[x.ABORTED=10]="ABORTED",x[x.OUT_OF_RANGE=11]="OUT_OF_RANGE",x[x.UNIMPLEMENTED=12]="UNIMPLEMENTED",x[x.INTERNAL=13]="INTERNAL",x[x.UNAVAILABLE=14]="UNAVAILABLE",x[x.DATA_LOSS=15]="DATA_LOSS";/**
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
 */class Wt{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,t]);i.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[t]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Nn(this.inner,(t,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return tm(this.inner)}size(){return this.innerSize}}/**
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
 */const DE=new Y(I.comparator);function Oe(){return DE}const bm=new Y(I.comparator);function Br(...n){let e=bm;for(const t of n)e=e.insert(t.key,t);return e}function Em(n){let e=bm;return n.forEach((t,r)=>e=e.insert(t,r.overlayedDocument)),e}function Xe(){return Qr()}function Tm(){return Qr()}function Qr(){return new Wt(n=>n.toString(),(n,e)=>n.isEqual(e))}const NE=new Y(I.comparator),RE=new F(I.comparator);function R(...n){let e=RE;for(const t of n)e=e.add(t);return e}const xE=new F(N);function So(){return xE}/**
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
 */class qi{constructor(e,t,r,i,s){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const i=new Map;return i.set(e,$i.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new qi(A.min(),i,So(),Oe(),R())}}class $i{constructor(e,t,r,i,s){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new $i(r,t,R(),R(),R())}}/**
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
 */class ps{constructor(e,t,r,i){this.Tt=e,this.removedTargetIds=t,this.key=r,this.Et=i}}class Sm{constructor(e,t){this.targetId=e,this.At=t}}class km{constructor(e,t,r=re.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=i}}class Vl{constructor(){this.Rt=0,this.bt=ql(),this.Pt=re.EMPTY_BYTE_STRING,this.vt=!1,this.Vt=!0}get current(){return this.vt}get resumeToken(){return this.Pt}get St(){return this.Rt!==0}get Dt(){return this.Vt}Ct(e){e.approximateByteSize()>0&&(this.Vt=!0,this.Pt=e)}xt(){let e=R(),t=R(),r=R();return this.bt.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:t=t.add(i);break;case 1:r=r.add(i);break;default:E()}}),new $i(this.Pt,this.vt,e,t,r)}Nt(){this.Vt=!1,this.bt=ql()}kt(e,t){this.Vt=!0,this.bt=this.bt.insert(e,t)}Ot(e){this.Vt=!0,this.bt=this.bt.remove(e)}Mt(){this.Rt+=1}Ft(){this.Rt-=1}$t(){this.Vt=!0,this.vt=!0}}class OE{constructor(e){this.Bt=e,this.Lt=new Map,this.Ut=Oe(),this.qt=Bl(),this.Kt=new F(N)}Gt(e){for(const t of e.Tt)e.Et&&e.Et.isFoundDocument()?this.Qt(t,e.Et):this.jt(t,e.key,e.Et);for(const t of e.removedTargetIds)this.jt(t,e.key,e.Et)}Wt(e){this.forEachTarget(e,t=>{const r=this.zt(t);switch(e.state){case 0:this.Ht(t)&&r.Ct(e.resumeToken);break;case 1:r.Ft(),r.St||r.Nt(),r.Ct(e.resumeToken);break;case 2:r.Ft(),r.St||this.removeTarget(t);break;case 3:this.Ht(t)&&(r.$t(),r.Ct(e.resumeToken));break;case 4:this.Ht(t)&&(this.Jt(t),r.Ct(e.resumeToken));break;default:E()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Lt.forEach((r,i)=>{this.Ht(i)&&t(i)})}Yt(e){const t=e.targetId,r=e.At.count,i=this.Xt(t);if(i){const s=i.target;if(Ls(s))if(r===0){const o=new I(s.path);this.jt(t,o,B.newNoDocument(o,A.min()))}else C(r===1);else this.Zt(t)!==r&&(this.Jt(t),this.Kt=this.Kt.add(t))}}te(e){const t=new Map;this.Lt.forEach((s,o)=>{const a=this.Xt(o);if(a){if(s.current&&Ls(a.target)){const c=new I(a.target.path);this.Ut.get(c)!==null||this.ee(o,c)||this.jt(o,c,B.newNoDocument(c,e))}s.Dt&&(t.set(o,s.xt()),s.Nt())}});let r=R();this.qt.forEach((s,o)=>{let a=!0;o.forEachWhile(c=>{const u=this.Xt(c);return!u||u.purpose===2||(a=!1,!1)}),a&&(r=r.add(s))}),this.Ut.forEach((s,o)=>o.setReadTime(e));const i=new qi(e,t,this.Kt,this.Ut,r);return this.Ut=Oe(),this.qt=Bl(),this.Kt=new F(N),i}Qt(e,t){if(!this.Ht(e))return;const r=this.ee(e,t.key)?2:0;this.zt(e).kt(t.key,r),this.Ut=this.Ut.insert(t.key,t),this.qt=this.qt.insert(t.key,this.ne(t.key).add(e))}jt(e,t,r){if(!this.Ht(e))return;const i=this.zt(e);this.ee(e,t)?i.kt(t,1):i.Ot(t),this.qt=this.qt.insert(t,this.ne(t).delete(e)),r&&(this.Ut=this.Ut.insert(t,r))}removeTarget(e){this.Lt.delete(e)}Zt(e){const t=this.zt(e).xt();return this.Bt.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Mt(e){this.zt(e).Mt()}zt(e){let t=this.Lt.get(e);return t||(t=new Vl,this.Lt.set(e,t)),t}ne(e){let t=this.qt.get(e);return t||(t=new F(N),this.qt=this.qt.insert(e,t)),t}Ht(e){const t=this.Xt(e)!==null;return t||v("WatchChangeAggregator","Detected inactive target",e),t}Xt(e){const t=this.Lt.get(e);return t&&t.St?null:this.Bt.se(e)}Jt(e){this.Lt.set(e,new Vl),this.Bt.getRemoteKeysForTarget(e).forEach(t=>{this.jt(e,t,null)})}ee(e,t){return this.Bt.getRemoteKeysForTarget(e).has(t)}}function Bl(){return new Y(I.comparator)}function ql(){return new Y(I.comparator)}/**
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
 */const PE=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),LE=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))();class ME{constructor(e,t){this.databaseId=e,this.gt=t}}function pi(n,e){return n.gt?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Am(n,e){return n.gt?e.toBase64():e.toUint8Array()}function FE(n,e){return pi(n,e.toTimestamp())}function ce(n){return C(!!n),A.fromTimestamp(function(e){const t=Pt(e);return new K(t.seconds,t.nanos)}(n))}function Kc(n,e){return function(t){return new O(["projects",t.projectId,"databases",t.database])}(n).child("documents").child(e).canonicalString()}function Cm(n){const e=O.fromString(n);return C(Mm(e)),e}function gi(n,e){return Kc(n.databaseId,e.path)}function et(n,e){const t=Cm(e);if(t.get(1)!==n.databaseId.projectId)throw new y(m.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new y(m.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new I(Nm(t))}function Ma(n,e){return Kc(n.databaseId,e)}function Dm(n){const e=Cm(n);return e.length===4?O.emptyPath():Nm(e)}function yi(n){return new O(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Nm(n){return C(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function $l(n,e,t){return{name:gi(n,e),fields:t.value.mapValue.fields}}function Rm(n,e,t){const r=et(n,e.name),i=ce(e.updateTime),s=new ye({mapValue:{fields:e.fields}}),o=B.newFoundDocument(r,i,s);return t&&o.setHasCommittedMutations(),t?o.setHasCommittedMutations():o}function UE(n,e){return"found"in e?function(t,r){C(!!r.found),r.found.name,r.found.updateTime;const i=et(t,r.found.name),s=ce(r.found.updateTime),o=new ye({mapValue:{fields:r.found.fields}});return B.newFoundDocument(i,s,o)}(n,e):"missing"in e?function(t,r){C(!!r.missing),C(!!r.readTime);const i=et(t,r.missing),s=ce(r.readTime);return B.newNoDocument(i,s)}(n,e):E()}function VE(n,e){let t;if("targetChange"in e){e.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:E()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(c,u){return c.gt?(C(u===void 0||typeof u=="string"),re.fromBase64String(u||"")):(C(u===void 0||u instanceof Uint8Array),re.fromUint8Array(u||new Uint8Array))}(n,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const u=c.code===void 0?m.UNKNOWN:_m(c.code);return new y(u,c.message||"")}(o);t=new km(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=et(n,r.document.name),s=ce(r.document.updateTime),o=new ye({mapValue:{fields:r.document.fields}}),a=B.newFoundDocument(i,s,o),c=r.targetIds||[],u=r.removedTargetIds||[];t=new ps(c,u,a.key,a)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=et(n,r.document),s=r.readTime?ce(r.readTime):A.min(),o=B.newNoDocument(i,s),a=r.removedTargetIds||[];t=new ps([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=et(n,r.document),s=r.removedTargetIds||[];t=new ps([],s,i,null)}else{if(!("filter"in e))return E();{e.filter;const r=e.filter;r.targetId;const i=r.count||0,s=new CE(i),o=r.targetId;t=new Sm(o,s)}}return t}function vi(n,e){let t;if(e instanceof wr)t={update:$l(n,e.key,e.value)};else if(e instanceof Ir)t={delete:gi(n,e.key)};else if(e instanceof vt)t={update:$l(n,e.key,e.data),updateMask:WE(e.fieldMask)};else{if(!(e instanceof Gc))return E();t={verify:gi(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(r=>function(i,s){const o=s.transform;if(o instanceof nr)return{fieldPath:s.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof In)return{fieldPath:s.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof _n)return{fieldPath:s.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof rr)return{fieldPath:s.field.canonicalString(),increment:o.yt};throw E()}(0,r))),e.precondition.isNone||(t.currentDocument=function(r,i){return i.updateTime!==void 0?{updateTime:FE(r,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:E()}(n,e.precondition)),t}function Fa(n,e){const t=e.currentDocument?function(i){return i.updateTime!==void 0?G.updateTime(ce(i.updateTime)):i.exists!==void 0?G.exists(i.exists):G.none()}(e.currentDocument):G.none(),r=e.updateTransforms?e.updateTransforms.map(i=>function(s,o){let a=null;if("setToServerValue"in o)C(o.setToServerValue==="REQUEST_TIME"),a=new nr;else if("appendMissingElements"in o){const u=o.appendMissingElements.values||[];a=new In(u)}else if("removeAllFromArray"in o){const u=o.removeAllFromArray.values||[];a=new _n(u)}else"increment"in o?a=new rr(s,o.increment):E();const c=Z.fromServerFormat(o.fieldPath);return new Bi(c,a)}(n,i)):[];if(e.update){e.update.name;const i=et(n,e.update.name),s=new ye({mapValue:{fields:e.update.fields}});if(e.updateMask){const o=function(a){const c=a.fieldPaths||[];return new Fe(c.map(u=>Z.fromServerFormat(u)))}(e.updateMask);return new vt(i,s,o,t,r)}return new wr(i,s,t,r)}if(e.delete){const i=et(n,e.delete);return new Ir(i,t)}if(e.verify){const i=et(n,e.verify);return new Gc(i,t)}return E()}function BE(n,e){return n&&n.length>0?(C(e!==void 0),n.map(t=>function(r,i){let s=r.updateTime?ce(r.updateTime):ce(i);return s.isEqual(A.min())&&(s=ce(i)),new SE(s,r.transformResults||[])}(t,e))):[]}function xm(n,e){return{documents:[Ma(n,e.path)]}}function Om(n,e){const t={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(t.parent=Ma(n,r),t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(t.parent=Ma(n,r.popLast()),t.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(c){if(c.length===0)return;const u=c.map(l=>function(h){if(h.op==="=="){if(kl(h.value))return{unaryFilter:{field:Fn(h.field),op:"IS_NAN"}};if(Sl(h.value))return{unaryFilter:{field:Fn(h.field),op:"IS_NULL"}}}else if(h.op==="!="){if(kl(h.value))return{unaryFilter:{field:Fn(h.field),op:"IS_NOT_NAN"}};if(Sl(h.value))return{unaryFilter:{field:Fn(h.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Fn(h.field),op:jE(h.op),value:h.value}}}(l));return u.length===1?u[0]:{compositeFilter:{op:"AND",filters:u}}}(e.filters);i&&(t.structuredQuery.where=i);const s=function(c){if(c.length!==0)return c.map(u=>function(l){return{field:Fn(l.field),direction:$E(l.dir)}}(u))}(e.orderBy);s&&(t.structuredQuery.orderBy=s);const o=function(c,u){return c.gt||Fi(u)?u:{value:u}}(n,e.limit);var a;return o!==null&&(t.structuredQuery.limit=o),e.startAt&&(t.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(t.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),t}function Pm(n){let e=Dm(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let i=null;if(r>0){C(r===1);const l=t.from[0];l.allDescendants?i=l.collectionId:e=e.child(l.collectionId)}let s=[];t.where&&(s=Lm(t.where));let o=[];t.orderBy&&(o=t.orderBy.map(l=>function(h){return new zn($n(h.field),function(d){switch(d){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(l)));let a=null;t.limit&&(a=function(l){let h;return h=typeof l=="object"?l.value:l,Fi(h)?null:h}(t.limit));let c=null;t.startAt&&(c=function(l){const h=!!l.before,d=l.values||[];return new Ft(d,h)}(t.startAt));let u=null;return t.endAt&&(u=function(l){const h=!l.before,d=l.values||[];return new Ft(d,h)}(t.endAt)),am(e,i,o,s,a,"F",c,u)}function qE(n,e){const t=function(r,i){switch(i){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return E()}}(0,e.purpose);return t==null?null:{"goog-listen-tags":t}}function Lm(n){return n?n.unaryFilter!==void 0?[KE(n)]:n.fieldFilter!==void 0?[GE(n)]:n.compositeFilter!==void 0?n.compositeFilter.filters.map(e=>Lm(e)).reduce((e,t)=>e.concat(t)):E():[]}function $E(n){return PE[n]}function jE(n){return LE[n]}function Fn(n){return{fieldPath:n.canonicalString()}}function $n(n){return Z.fromServerFormat(n.fieldPath)}function GE(n){return ve.create($n(n.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return E()}}(n.fieldFilter.op),n.fieldFilter.value)}function KE(n){switch(n.unaryFilter.op){case"IS_NAN":const e=$n(n.unaryFilter.field);return ve.create(e,"==",{doubleValue:NaN});case"IS_NULL":const t=$n(n.unaryFilter.field);return ve.create(t,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=$n(n.unaryFilter.field);return ve.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=$n(n.unaryFilter.field);return ve.create(i,"!=",{nullValue:"NULL_VALUE"});default:return E()}}function WE(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function Mm(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
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
 */function De(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=jl(e)),e=zE(n.get(t),e);return jl(e)}function zE(n,e){let t=e;const r=n.length;for(let i=0;i<r;i++){const s=n.charAt(i);switch(s){case"\0":t+="";break;case"":t+="";break;default:t+=s}}return t}function jl(n){return n+""}function Je(n){const e=n.length;if(C(e>=2),e===2)return C(n.charAt(0)===""&&n.charAt(1)===""),O.emptyPath();const t=e-2,r=[];let i="";for(let s=0;s<e;){const o=n.indexOf("",s);switch((o<0||o>t)&&E(),n.charAt(o+1)){case"":const a=n.substring(s,o);let c;i.length===0?c=a:(i+=a,c=i,i=""),r.push(c);break;case"":i+=n.substring(s,o),i+="\0";break;case"":i+=n.substring(s,o+1);break;default:E()}s=o+2}return new O(r)}/**
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
 */const Gl=["userId","batchId"];/**
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
 */function gs(n,e){return[n,De(e)]}function Fm(n,e,t){return[n,De(e),t]}const HE={},QE=["prefixPath","collectionGroup","readTime","documentId"],YE=["prefixPath","collectionGroup","documentId"],XE=["collectionGroup","readTime","prefixPath","documentId"],JE=["canonicalId","targetId"],ZE=["targetId","path"],eT=["path","targetId"],tT=["collectionId","parent"],nT=["indexId","uid"],rT=["uid","sequenceNumber"],iT=["indexId","uid","arrayValue","directionalValue","orderedDocumentKey","documentKey"],sT=["indexId","uid","orderedDocumentKey"],oT=["userId","collectionPath","documentId"],aT=["userId","collectionPath","largestBatchId"],cT=["userId","collectionGroup","largestBatchId"],Um=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],uT=[...Um,"documentOverlays"],Vm=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],Bm=Vm,lT=[...Bm,"indexConfiguration","indexState","indexEntries"];/**
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
 */class Ua extends em{constructor(e,t){super(),this.ie=e,this.currentSequenceNumber=t}}function fe(n,e){const t=_(n);return $e.M(t.ie,e)}/**
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
 */class Wc{constructor(e,t,r,i){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&kE(s,e,r[i])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=Hr(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=Hr(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=Tm();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=t.has(i.key)?null:a;const c=vm(o,a);c!==null&&r.set(i.key,c),o.isValidDocument()||o.convertToNoDocument(A.min())}),r}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),R())}isEqual(e){return this.batchId===e.batchId&&er(this.mutations,e.mutations,(t,r)=>Ml(t,r))&&er(this.baseMutations,e.baseMutations,(t,r)=>Ml(t,r))}}class zc{constructor(e,t,r,i){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=i}static from(e,t,r){C(e.mutations.length===r.length);let i=NE;const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new zc(e,t,r,i)}}/**
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
 */class Hc{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class Ct{constructor(e,t,r,i,s=A.min(),o=A.min(),a=re.EMPTY_BYTE_STRING){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new Ct(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,t){return new Ct(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new Ct(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
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
 */class qm{constructor(e){this.re=e}}function hT(n,e){let t;if(e.document)t=Rm(n.re,e.document,!!e.hasCommittedMutations);else if(e.noDocument){const r=I.fromSegments(e.noDocument.path),i=En(e.noDocument.readTime);t=B.newNoDocument(r,i),e.hasCommittedMutations&&t.setHasCommittedMutations()}else{if(!e.unknownDocument)return E();{const r=I.fromSegments(e.unknownDocument.path),i=En(e.unknownDocument.version);t=B.newUnknownDocument(r,i)}}return e.readTime&&t.setReadTime(function(r){const i=new K(r[0],r[1]);return A.fromTimestamp(i)}(e.readTime)),t}function Kl(n,e){const t=e.key,r={prefixPath:t.getCollectionPath().popLast().toArray(),collectionGroup:t.collectionGroup,documentId:t.path.lastSegment(),readTime:Us(e.readTime),hasCommittedMutations:e.hasCommittedMutations};if(e.isFoundDocument())r.document=function(i,s){return{name:gi(i,s.key),fields:s.data.value.mapValue.fields,updateTime:pi(i,s.version.toTimestamp())}}(n.re,e);else if(e.isNoDocument())r.noDocument={path:t.path.toArray(),readTime:bn(e.version)};else{if(!e.isUnknownDocument())return E();r.unknownDocument={path:t.path.toArray(),version:bn(e.version)}}return r}function Us(n){const e=n.toTimestamp();return[e.seconds,e.nanoseconds]}function bn(n){const e=n.toTimestamp();return{seconds:e.seconds,nanoseconds:e.nanoseconds}}function En(n){const e=new K(n.seconds,n.nanoseconds);return A.fromTimestamp(e)}function en(n,e){const t=(e.baseMutations||[]).map(s=>Fa(n.re,s));for(let s=0;s<e.mutations.length-1;++s){const o=e.mutations[s];if(s+1<e.mutations.length&&e.mutations[s+1].transform!==void 0){const a=e.mutations[s+1];o.updateTransforms=a.transform.fieldTransforms,e.mutations.splice(s+1,1),++s}}const r=e.mutations.map(s=>Fa(n.re,s)),i=K.fromMillis(e.localWriteTimeMs);return new Wc(e.batchId,i,t,r)}function qr(n){const e=En(n.readTime),t=n.lastLimboFreeSnapshotVersion!==void 0?En(n.lastLimboFreeSnapshotVersion):A.min();let r;var i;return n.query.documents!==void 0?(C((i=n.query).documents.length===1),r=Pe(vr(Dm(i.documents[0])))):r=function(s){return Pe(Pm(s))}(n.query),new Ct(r,n.targetId,0,n.lastListenSequenceNumber,e,t,re.fromBase64String(n.resumeToken))}function $m(n,e){const t=bn(e.snapshotVersion),r=bn(e.lastLimboFreeSnapshotVersion);let i;i=Ls(e.target)?xm(n.re,e.target):Om(n.re,e.target);const s=e.resumeToken.toBase64();return{targetId:e.targetId,canonicalId:wn(e.target),readTime:t,resumeToken:s,lastListenSequenceNumber:e.sequenceNumber,lastLimboFreeSnapshotVersion:r,query:i}}function Qc(n){const e=Pm({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Fs(e,e.limit,"L"):e}function sa(n,e){return new Hc(e.largestBatchId,Fa(n.re,e.overlayMutation))}function Wl(n,e){const t=e.path.lastSegment();return[n,De(e.path.popLast()),t]}function zl(n,e,t,r){return{indexId:n,uid:e.uid||"",sequenceNumber:t,readTime:bn(r.readTime),documentKey:De(r.documentKey.path),largestBatchId:r.largestBatchId}}/**
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
 */class dT{getBundleMetadata(e,t){return Hl(e).get(t).next(r=>{if(r)return{id:(i=r).bundleId,createTime:En(i.createTime),version:i.version};var i})}saveBundleMetadata(e,t){return Hl(e).put({bundleId:(r=t).id,createTime:bn(ce(r.createTime)),version:r.version});var r}getNamedQuery(e,t){return Ql(e).get(t).next(r=>{if(r)return{name:(i=r).name,query:Qc(i.bundledQuery),readTime:En(i.readTime)};var i})}saveNamedQuery(e,t){return Ql(e).put(function(r){return{name:r.name,readTime:bn(ce(r.readTime)),bundledQuery:r.bundledQuery}}(t))}}function Hl(n){return fe(n,"bundles")}function Ql(n){return fe(n,"namedQueries")}/**
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
 */class ko{constructor(e,t){this.It=e,this.userId=t}static oe(e,t){const r=t.uid||"";return new ko(e,r)}getOverlay(e,t){return Nr(e).get(Wl(this.userId,t)).next(r=>r?sa(this.It,r):null)}getOverlays(e,t){const r=Xe();return f.forEach(t,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,t,r){const i=[];return r.forEach((s,o)=>{const a=new Hc(t,o);i.push(this.ue(e,a))}),f.waitFor(i)}removeOverlaysForBatchId(e,t,r){const i=new Set;t.forEach(o=>i.add(De(o.getCollectionPath())));const s=[];return i.forEach(o=>{const a=IDBKeyRange.bound([this.userId,o,r],[this.userId,o,r+1],!1,!0);s.push(Nr(e).Y("collectionPathOverlayIndex",a))}),f.waitFor(s)}getOverlaysForCollection(e,t,r){const i=Xe(),s=De(t),o=IDBKeyRange.bound([this.userId,s,r],[this.userId,s,Number.POSITIVE_INFINITY],!0);return Nr(e).W("collectionPathOverlayIndex",o).next(a=>{for(const c of a){const u=sa(this.It,c);i.set(u.getKey(),u)}return i})}getOverlaysForCollectionGroup(e,t,r,i){const s=Xe();let o;const a=IDBKeyRange.bound([this.userId,t,r],[this.userId,t,Number.POSITIVE_INFINITY],!0);return Nr(e).Z({index:"collectionGroupOverlayIndex",range:a},(c,u,l)=>{const h=sa(this.It,u);s.size()<i||h.largestBatchId===o?(s.set(h.getKey(),h),o=h.largestBatchId):l.done()}).next(()=>s)}ue(e,t){return Nr(e).put(function(r,i,s){const[o,a,c]=Wl(i,s.mutation.key);return{userId:i,collectionPath:a,documentId:c,collectionGroup:s.mutation.key.getCollectionGroup(),largestBatchId:s.largestBatchId,overlayMutation:vi(r.re,s.mutation)}}(this.It,this.userId,t))}}function Nr(n){return fe(n,"documentOverlays")}/**
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
 */class tn{constructor(){}ce(e,t){this.ae(e,t),t.he()}ae(e,t){if("nullValue"in e)this.le(t,5);else if("booleanValue"in e)this.le(t,10),t.fe(e.booleanValue?1:0);else if("integerValue"in e)this.le(t,15),t.fe(H(e.integerValue));else if("doubleValue"in e){const r=H(e.doubleValue);isNaN(r)?this.le(t,13):(this.le(t,15),di(r)?t.fe(0):t.fe(r))}else if("timestampValue"in e){const r=e.timestampValue;this.le(t,20),typeof r=="string"?t.de(r):(t.de(`${r.seconds||""}`),t.fe(r.nanos||0))}else if("stringValue"in e)this._e(e.stringValue,t),this.we(t);else if("bytesValue"in e)this.le(t,30),t.me(gn(e.bytesValue)),this.we(t);else if("referenceValue"in e)this.ge(e.referenceValue,t);else if("geoPointValue"in e){const r=e.geoPointValue;this.le(t,45),t.fe(r.latitude||0),t.fe(r.longitude||0)}else"mapValue"in e?im(e)?this.le(t,Number.MAX_SAFE_INTEGER):(this.ye(e.mapValue,t),this.we(t)):"arrayValue"in e?(this.pe(e.arrayValue,t),this.we(t)):E()}_e(e,t){this.le(t,25),this.Ie(e,t)}Ie(e,t){t.de(e)}ye(e,t){const r=e.fields||{};this.le(t,55);for(const i of Object.keys(r))this._e(i,t),this.ae(r[i],t)}pe(e,t){const r=e.values||[];this.le(t,50);for(const i of r)this.ae(i,t)}ge(e,t){this.le(t,37),I.fromName(e).path.forEach(r=>{this.le(t,60),this.Ie(r,t)})}le(e,t){e.fe(t)}we(e){e.fe(2)}}tn.Te=new tn;function fT(n){if(n===0)return 8;let e=0;return n>>4==0&&(e+=4,n<<=4),n>>6==0&&(e+=2,n<<=2),n>>7==0&&(e+=1),e}function Yl(n){const e=64-function(t){let r=0;for(let i=0;i<8;++i){const s=fT(255&t[i]);if(r+=s,s!==8)break}return r}(n);return Math.ceil(e/8)}class mT{constructor(){this.buffer=new Uint8Array(1024),this.position=0}Ee(e){const t=e[Symbol.iterator]();let r=t.next();for(;!r.done;)this.Ae(r.value),r=t.next();this.Re()}be(e){const t=e[Symbol.iterator]();let r=t.next();for(;!r.done;)this.Pe(r.value),r=t.next();this.ve()}Ve(e){for(const t of e){const r=t.charCodeAt(0);if(r<128)this.Ae(r);else if(r<2048)this.Ae(960|r>>>6),this.Ae(128|63&r);else if(t<"\uD800"||"\uDBFF"<t)this.Ae(480|r>>>12),this.Ae(128|63&r>>>6),this.Ae(128|63&r);else{const i=t.codePointAt(0);this.Ae(240|i>>>18),this.Ae(128|63&i>>>12),this.Ae(128|63&i>>>6),this.Ae(128|63&i)}}this.Re()}Se(e){for(const t of e){const r=t.charCodeAt(0);if(r<128)this.Pe(r);else if(r<2048)this.Pe(960|r>>>6),this.Pe(128|63&r);else if(t<"\uD800"||"\uDBFF"<t)this.Pe(480|r>>>12),this.Pe(128|63&r>>>6),this.Pe(128|63&r);else{const i=t.codePointAt(0);this.Pe(240|i>>>18),this.Pe(128|63&i>>>12),this.Pe(128|63&i>>>6),this.Pe(128|63&i)}}this.ve()}De(e){const t=this.Ce(e),r=Yl(t);this.xe(1+r),this.buffer[this.position++]=255&r;for(let i=t.length-r;i<t.length;++i)this.buffer[this.position++]=255&t[i]}Ne(e){const t=this.Ce(e),r=Yl(t);this.xe(1+r),this.buffer[this.position++]=~(255&r);for(let i=t.length-r;i<t.length;++i)this.buffer[this.position++]=~(255&t[i])}ke(){this.Oe(255),this.Oe(255)}Me(){this.Fe(255),this.Fe(255)}reset(){this.position=0}seed(e){this.xe(e.length),this.buffer.set(e,this.position),this.position+=e.length}$e(){return this.buffer.slice(0,this.position)}Ce(e){const t=function(i){const s=new DataView(new ArrayBuffer(8));return s.setFloat64(0,i,!1),new Uint8Array(s.buffer)}(e),r=(128&t[0])!=0;t[0]^=r?255:128;for(let i=1;i<t.length;++i)t[i]^=r?255:0;return t}Ae(e){const t=255&e;t===0?(this.Oe(0),this.Oe(255)):t===255?(this.Oe(255),this.Oe(0)):this.Oe(t)}Pe(e){const t=255&e;t===0?(this.Fe(0),this.Fe(255)):t===255?(this.Fe(255),this.Fe(0)):this.Fe(e)}Re(){this.Oe(0),this.Oe(1)}ve(){this.Fe(0),this.Fe(1)}Oe(e){this.xe(1),this.buffer[this.position++]=e}Fe(e){this.xe(1),this.buffer[this.position++]=~e}xe(e){const t=e+this.position;if(t<=this.buffer.length)return;let r=2*this.buffer.length;r<t&&(r=t);const i=new Uint8Array(r);i.set(this.buffer),this.buffer=i}}class pT{constructor(e){this.Be=e}me(e){this.Be.Ee(e)}de(e){this.Be.Ve(e)}fe(e){this.Be.De(e)}he(){this.Be.ke()}}class gT{constructor(e){this.Be=e}me(e){this.Be.be(e)}de(e){this.Be.Se(e)}fe(e){this.Be.Ne(e)}he(){this.Be.Me()}}class Rr{constructor(){this.Be=new mT,this.Le=new pT(this.Be),this.Ue=new gT(this.Be)}seed(e){this.Be.seed(e)}qe(e){return e===0?this.Le:this.Ue}$e(){return this.Be.$e()}reset(){this.Be.reset()}}/**
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
 */class nn{constructor(e,t,r,i){this.indexId=e,this.documentKey=t,this.arrayValue=r,this.directionalValue=i}Ke(){const e=this.directionalValue.length,t=e===0||this.directionalValue[e-1]===255?e+1:e,r=new Uint8Array(t);return r.set(this.directionalValue,0),t!==e?r.set([0],this.directionalValue.length):++r[r.length-1],new nn(this.indexId,this.documentKey,this.arrayValue,r)}}function Qt(n,e){let t=n.indexId-e.indexId;return t!==0?t:(t=Xl(n.arrayValue,e.arrayValue),t!==0?t:(t=Xl(n.directionalValue,e.directionalValue),t!==0?t:I.comparator(n.documentKey,e.documentKey)))}function Xl(n,e){for(let t=0;t<n.length&&t<e.length;++t){const r=n[t]-e[t];if(r!==0)return r}return n.length-e.length}/**
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
 */class yT{constructor(e){this.collectionId=e.collectionGroup!=null?e.collectionGroup:e.path.lastSegment(),this.Ge=e.orderBy,this.Qe=[];for(const t of e.filters){const r=t;r.dt()?this.je=r:this.Qe.push(r)}}We(e){const t=xa(e);if(t!==void 0&&!this.ze(t))return!1;const r=Jt(e);let i=0,s=0;for(;i<r.length&&this.ze(r[i]);++i);if(i===r.length)return!0;if(this.je!==void 0){const o=r[i];if(!this.He(this.je,o)||!this.Je(this.Ge[s++],o))return!1;++i}for(;i<r.length;++i){const o=r[i];if(s>=this.Ge.length||!this.Je(this.Ge[s++],o))return!1}return!0}ze(e){for(const t of this.Qe)if(this.He(t,e))return!0;return!1}He(e,t){if(e===void 0||!e.field.isEqual(t.fieldPath))return!1;const r=e.op==="array-contains"||e.op==="array-contains-any";return t.kind===2===r}Je(e,t){return!!e.field.isEqual(t.fieldPath)&&(t.kind===0&&e.dir==="asc"||t.kind===1&&e.dir==="desc")}}/**
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
 */class vT{constructor(){this.Ye=new Yc}addToCollectionParentIndex(e,t){return this.Ye.add(t),f.resolve()}getCollectionParents(e,t){return f.resolve(this.Ye.getEntries(t))}addFieldIndex(e,t){return f.resolve()}deleteFieldIndex(e,t){return f.resolve()}getDocumentsMatchingTarget(e,t){return f.resolve(null)}getIndexType(e,t){return f.resolve(0)}getFieldIndexes(e,t){return f.resolve([])}getNextCollectionGroupToUpdate(e){return f.resolve(null)}getMinOffset(e,t){return f.resolve(Ve.min())}getMinOffsetFromCollectionGroup(e,t){return f.resolve(Ve.min())}updateCollectionGroup(e,t,r){return f.resolve()}updateIndexEntries(e,t){return f.resolve()}}class Yc{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),i=this.index[t]||new F(O.comparator),s=!i.has(r);return this.index[t]=i.add(r),s}has(e){const t=e.lastSegment(),r=e.popLast(),i=this.index[t];return i&&i.has(r)}getEntries(e){return(this.index[e]||new F(O.comparator)).toArray()}}/**
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
 */const ss=new Uint8Array(0);class wT{constructor(e,t){this.user=e,this.databaseId=t,this.Xe=new Yc,this.Ze=new Wt(r=>wn(r),(r,i)=>Ui(r,i)),this.uid=e.uid||""}addToCollectionParentIndex(e,t){if(!this.Xe.has(t)){const r=t.lastSegment(),i=t.popLast();e.addOnCommittedListener(()=>{this.Xe.add(t)});const s={collectionId:r,parent:De(i)};return Jl(e).put(s)}return f.resolve()}getCollectionParents(e,t){const r=[],i=IDBKeyRange.bound([t,""],[Qf(t),""],!1,!0);return Jl(e).W(i).next(s=>{for(const o of s){if(o.collectionId!==t)break;r.push(Je(o.parent))}return r})}addFieldIndex(e,t){const r=os(e),i=function(o){return{indexId:o.indexId,collectionGroup:o.collectionGroup,fields:o.fields.map(a=>[a.fieldPath.canonicalString(),a.kind])}}(t);delete i.indexId;const s=r.add(i);if(t.indexState){const o=Or(e);return s.next(a=>{o.put(zl(a,this.user,t.indexState.sequenceNumber,t.indexState.offset))})}return s.next()}deleteFieldIndex(e,t){const r=os(e),i=Or(e),s=xr(e);return r.delete(t.indexId).next(()=>i.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0))).next(()=>s.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0)))}getDocumentsMatchingTarget(e,t){const r=xr(e);let i=!0;const s=new Map;return f.forEach(this.tn(t),o=>this.en(e,o).next(a=>{i&&(i=!!a),s.set(o,a)})).next(()=>{if(i){let o=R();const a=[];return f.forEach(s,(c,u)=>{var l;v("IndexedDbIndexManager",`Using index ${l=c,`id=${l.indexId}|cg=${l.collectionGroup}|f=${l.fields.map(V=>`${V.fieldPath}:${V.kind}`).join(",")}`} to execute ${wn(t)}`);const h=function(V,te){const z=xa(te);if(z===void 0)return null;for(const q of Ms(V,z.fieldPath))switch(q.op){case"array-contains-any":return q.value.arrayValue.values||[];case"array-contains":return[q.value]}return null}(u,c),d=function(V,te){const z=new Map;for(const q of Jt(te))for(const pe of Ms(V,q.fieldPath))switch(pe.op){case"==":case"in":z.set(q.fieldPath.canonicalString(),pe.value);break;case"not-in":case"!=":return z.set(q.fieldPath.canonicalString(),pe.value),Array.from(z.values())}return null}(u,c),p=function(V,te){const z=[];let q=!0;for(const pe of Jt(te)){const Ht=pe.kind===0?Nl(V,pe.fieldPath,V.startAt):Rl(V,pe.fieldPath,V.startAt);z.push(Ht.value),q&&(q=Ht.inclusive)}return new Ft(z,q)}(u,c),g=function(V,te){const z=[];let q=!0;for(const pe of Jt(te)){const Ht=pe.kind===0?Rl(V,pe.fieldPath,V.endAt):Nl(V,pe.fieldPath,V.endAt);z.push(Ht.value),q&&(q=Ht.inclusive)}return new Ft(z,q)}(u,c),b=this.nn(c,u,p),S=this.nn(c,u,g),M=this.sn(c,u,d),U=this.rn(c.indexId,h,b,p.inclusive,S,g.inclusive,M);return f.forEach(U,V=>r.J(V,t.limit).next(te=>{te.forEach(z=>{const q=I.fromSegments(z.documentKey);o.has(q)||(o=o.add(q),a.push(q))})}))}).next(()=>a)}return f.resolve(null)})}tn(e){let t=this.Ze.get(e);return t||(t=[e],this.Ze.set(e,t),t)}rn(e,t,r,i,s,o,a){const c=(t!=null?t.length:1)*Math.max(r.length,s.length),u=c/(t!=null?t.length:1),l=[];for(let h=0;h<c;++h){const d=t?this.on(t[h/u]):ss,p=this.un(e,d,r[h%u],i),g=this.cn(e,d,s[h%u],o),b=a.map(S=>this.un(e,d,S,!0));l.push(...this.createRange(p,g,b))}return l}un(e,t,r,i){const s=new nn(e,I.empty(),t,r);return i?s:s.Ke()}cn(e,t,r,i){const s=new nn(e,I.empty(),t,r);return i?s.Ke():s}en(e,t){const r=new yT(t),i=t.collectionGroup!=null?t.collectionGroup:t.path.lastSegment();return this.getFieldIndexes(e,i).next(s=>{let o=null;for(const a of s)r.We(a)&&(!o||a.fields.length>o.fields.length)&&(o=a);return o})}getIndexType(e,t){let r=2;return f.forEach(this.tn(t),i=>this.en(e,i).next(s=>{s?r!==0&&s.fields.length<function(o){let a=new F(Z.comparator),c=!1;for(const u of o.filters){const l=u;l.field.isKeyField()||(l.op==="array-contains"||l.op==="array-contains-any"?c=!0:a=a.add(l.field))}for(const u of o.orderBy)u.field.isKeyField()||(a=a.add(u.field));return a.size+(c?1:0)}(i)&&(r=1):r=0})).next(()=>r)}an(e,t){const r=new Rr;for(const i of Jt(e)){const s=t.data.field(i.fieldPath);if(s==null)return null;const o=r.qe(i.kind);tn.Te.ce(s,o)}return r.$e()}on(e){const t=new Rr;return tn.Te.ce(e,t.qe(0)),t.$e()}hn(e,t){const r=new Rr;return tn.Te.ce(vn(this.databaseId,t),r.qe(function(i){const s=Jt(i);return s.length===0?0:s[s.length-1].kind}(e))),r.$e()}sn(e,t,r){if(r===null)return[];let i=[];i.push(new Rr);let s=0;for(const o of Jt(e)){const a=r[s++];for(const c of i)if(this.ln(t,o.fieldPath)&&mi(a))i=this.fn(i,o,a);else{const u=c.qe(o.kind);tn.Te.ce(a,u)}}return this.dn(i)}nn(e,t,r){return this.sn(e,t,r.position)}dn(e){const t=[];for(let r=0;r<e.length;++r)t[r]=e[r].$e();return t}fn(e,t,r){const i=[...e],s=[];for(const o of r.arrayValue.values||[])for(const a of i){const c=new Rr;c.seed(a.$e()),tn.Te.ce(o,c.qe(t.kind)),s.push(c)}return s}ln(e,t){return!!e.filters.find(r=>r instanceof ve&&r.field.isEqual(t)&&(r.op==="in"||r.op==="not-in"))}getFieldIndexes(e,t){const r=os(e),i=Or(e);return(t?r.W("collectionGroupIndex",IDBKeyRange.bound(t,t)):r.W()).next(s=>{const o=[];return f.forEach(s,a=>i.get([a.indexId,this.uid]).next(c=>{o.push(function(u,l){const h=l?new Ps(l.sequenceNumber,new Ve(En(l.readTime),new I(Je(l.documentKey)),l.largestBatchId)):Ps.empty(),d=u.fields.map(([p,g])=>new tE(Z.fromServerFormat(p),g));return new Yf(u.indexId,u.collectionGroup,d,h)}(a,c))})).next(()=>o)})}getNextCollectionGroupToUpdate(e){return this.getFieldIndexes(e).next(t=>t.length===0?null:(t.sort((r,i)=>{const s=r.indexState.sequenceNumber-i.indexState.sequenceNumber;return s!==0?s:N(r.collectionGroup,i.collectionGroup)}),t[0].collectionGroup))}updateCollectionGroup(e,t,r){const i=os(e),s=Or(e);return this._n(e).next(o=>i.W("collectionGroupIndex",IDBKeyRange.bound(t,t)).next(a=>f.forEach(a,c=>s.put(zl(c.indexId,this.user,o,r)))))}updateIndexEntries(e,t){const r=new Map;return f.forEach(t,(i,s)=>{const o=r.get(i.collectionGroup);return(o?f.resolve(o):this.getFieldIndexes(e,i.collectionGroup)).next(a=>(r.set(i.collectionGroup,a),f.forEach(a,c=>this.wn(e,i,c).next(u=>{const l=this.mn(s,c);return u.isEqual(l)?f.resolve():this.gn(e,s,c,u,l)}))))})}yn(e,t,r,i){return xr(e).put({indexId:i.indexId,uid:this.uid,arrayValue:i.arrayValue,directionalValue:i.directionalValue,orderedDocumentKey:this.hn(r,t.key),documentKey:t.key.path.toArray()})}pn(e,t,r,i){return xr(e).delete([i.indexId,this.uid,i.arrayValue,i.directionalValue,this.hn(r,t.key),t.key.path.toArray()])}wn(e,t,r){const i=xr(e);let s=new F(Qt);return i.Z({index:"documentKeyIndex",range:IDBKeyRange.only([r.indexId,this.uid,this.hn(r,t)])},(o,a)=>{s=s.add(new nn(r.indexId,t,a.arrayValue,a.directionalValue))}).next(()=>s)}mn(e,t){let r=new F(Qt);const i=this.an(t,e);if(i==null)return r;const s=xa(t);if(s!=null){const o=e.data.field(s.fieldPath);if(mi(o))for(const a of o.arrayValue.values||[])r=r.add(new nn(t.indexId,e.key,this.on(a),i))}else r=r.add(new nn(t.indexId,e.key,ss,i));return r}gn(e,t,r,i,s){v("IndexedDbIndexManager","Updating index entries for document '%s'",t.key);const o=[];return function(a,c,u,l,h){const d=a.getIterator(),p=c.getIterator();let g=Mn(d),b=Mn(p);for(;g||b;){let S=!1,M=!1;if(g&&b){const U=u(g,b);U<0?M=!0:U>0&&(S=!0)}else g!=null?M=!0:S=!0;S?(l(b),b=Mn(p)):M?(h(g),g=Mn(d)):(g=Mn(d),b=Mn(p))}}(i,s,Qt,a=>{o.push(this.yn(e,t,r,a))},a=>{o.push(this.pn(e,t,r,a))}),f.waitFor(o)}_n(e){let t=1;return Or(e).Z({index:"sequenceNumberIndex",reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},(r,i,s)=>{s.done(),t=i.sequenceNumber+1}).next(()=>t)}createRange(e,t,r){r=r.sort((o,a)=>Qt(o,a)).filter((o,a,c)=>!a||Qt(o,c[a-1])!==0);const i=[];i.push(e);for(const o of r){const a=Qt(o,e),c=Qt(o,t);if(a===0)i[0]=e.Ke();else if(a>0&&c<0)i.push(o),i.push(o.Ke());else if(c>0)break}i.push(t);const s=[];for(let o=0;o<i.length;o+=2)s.push(IDBKeyRange.bound([i[o].indexId,this.uid,i[o].arrayValue,i[o].directionalValue,ss,[]],[i[o+1].indexId,this.uid,i[o+1].arrayValue,i[o+1].directionalValue,ss,[]]));return s}getMinOffsetFromCollectionGroup(e,t){return this.getFieldIndexes(e,t).next(Zl)}getMinOffset(e,t){return f.mapArray(this.tn(t),r=>this.en(e,r).next(i=>i||E())).next(Zl)}}function Jl(n){return fe(n,"collectionParents")}function xr(n){return fe(n,"indexEntries")}function os(n){return fe(n,"indexConfiguration")}function Or(n){return fe(n,"indexState")}function Zl(n){C(n.length!==0);let e=n[0].indexState.offset,t=e.largestBatchId;for(let r=1;r<n.length;r++){const i=n[r].indexState.offset;Fc(i,e)<0&&(e=i),t<i.largestBatchId&&(t=i.largestBatchId)}return new Ve(e.readTime,e.documentKey,t)}/**
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
 */const eh={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class Re{constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}static withCacheSize(e){return new Re(e,Re.DEFAULT_COLLECTION_PERCENTILE,Re.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}/**
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
 */function jm(n,e,t){const r=n.store("mutations"),i=n.store("documentMutations"),s=[],o=IDBKeyRange.only(t.batchId);let a=0;const c=r.Z({range:o},(l,h,d)=>(a++,d.delete()));s.push(c.next(()=>{C(a===1)}));const u=[];for(const l of t.mutations){const h=Fm(e,l.key.path,t.batchId);s.push(i.delete(h)),u.push(l.key)}return f.waitFor(s).next(()=>u)}function Vs(n){if(!n)return 0;let e;if(n.document)e=n.document;else if(n.unknownDocument)e=n.unknownDocument;else{if(!n.noDocument)throw E();e=n.noDocument}return JSON.stringify(e).length}/**
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
 */Re.DEFAULT_COLLECTION_PERCENTILE=10,Re.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Re.DEFAULT=new Re(41943040,Re.DEFAULT_COLLECTION_PERCENTILE,Re.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Re.DISABLED=new Re(-1,0,0);class Ao{constructor(e,t,r,i){this.userId=e,this.It=t,this.indexManager=r,this.referenceDelegate=i,this.In={}}static oe(e,t,r,i){C(e.uid!=="");const s=e.isAuthenticated()?e.uid:"";return new Ao(s,t,r,i)}checkEmpty(e){let t=!0;const r=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return _t(e).Z({index:"userMutationsIndex",range:r},(i,s,o)=>{t=!1,o.done()}).next(()=>t)}addMutationBatch(e,t,r,i){const s=Vn(e),o=_t(e);return o.add({}).next(a=>{C(typeof a=="number");const c=new Wc(a,t,r,i),u=function(d,p,g){const b=g.baseMutations.map(M=>vi(d.re,M)),S=g.mutations.map(M=>vi(d.re,M));return{userId:p,batchId:g.batchId,localWriteTimeMs:g.localWriteTime.toMillis(),baseMutations:b,mutations:S}}(this.It,this.userId,c),l=[];let h=new F((d,p)=>N(d.canonicalString(),p.canonicalString()));for(const d of i){const p=Fm(this.userId,d.key.path,a);h=h.add(d.key.path.popLast()),l.push(o.put(u)),l.push(s.put(p,HE))}return h.forEach(d=>{l.push(this.indexManager.addToCollectionParentIndex(e,d))}),e.addOnCommittedListener(()=>{this.In[a]=c.keys()}),f.waitFor(l).next(()=>c)})}lookupMutationBatch(e,t){return _t(e).get(t).next(r=>r?(C(r.userId===this.userId),en(this.It,r)):null)}Tn(e,t){return this.In[t]?f.resolve(this.In[t]):this.lookupMutationBatch(e,t).next(r=>{if(r){const i=r.keys();return this.In[t]=i,i}return null})}getNextMutationBatchAfterBatchId(e,t){const r=t+1,i=IDBKeyRange.lowerBound([this.userId,r]);let s=null;return _t(e).Z({index:"userMutationsIndex",range:i},(o,a,c)=>{a.userId===this.userId&&(C(a.batchId>=r),s=en(this.It,a)),c.done()}).next(()=>s)}getHighestUnacknowledgedBatchId(e){const t=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let r=-1;return _t(e).Z({index:"userMutationsIndex",range:t,reverse:!0},(i,s,o)=>{r=s.batchId,o.done()}).next(()=>r)}getAllMutationBatches(e){const t=IDBKeyRange.bound([this.userId,-1],[this.userId,Number.POSITIVE_INFINITY]);return _t(e).W("userMutationsIndex",t).next(r=>r.map(i=>en(this.It,i)))}getAllMutationBatchesAffectingDocumentKey(e,t){const r=gs(this.userId,t.path),i=IDBKeyRange.lowerBound(r),s=[];return Vn(e).Z({range:i},(o,a,c)=>{const[u,l,h]=o,d=Je(l);if(u===this.userId&&t.path.isEqual(d))return _t(e).get(h).next(p=>{if(!p)throw E();C(p.userId===this.userId),s.push(en(this.It,p))});c.done()}).next(()=>s)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new F(N);const i=[];return t.forEach(s=>{const o=gs(this.userId,s.path),a=IDBKeyRange.lowerBound(o),c=Vn(e).Z({range:a},(u,l,h)=>{const[d,p,g]=u,b=Je(p);d===this.userId&&s.path.isEqual(b)?r=r.add(g):h.done()});i.push(c)}),f.waitFor(i).next(()=>this.En(e,r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,i=r.length+1,s=gs(this.userId,r),o=IDBKeyRange.lowerBound(s);let a=new F(N);return Vn(e).Z({range:o},(c,u,l)=>{const[h,d,p]=c,g=Je(d);h===this.userId&&r.isPrefixOf(g)?g.length===i&&(a=a.add(p)):l.done()}).next(()=>this.En(e,a))}En(e,t){const r=[],i=[];return t.forEach(s=>{i.push(_t(e).get(s).next(o=>{if(o===null)throw E();C(o.userId===this.userId),r.push(en(this.It,o))}))}),f.waitFor(i).next(()=>r)}removeMutationBatch(e,t){return jm(e.ie,this.userId,t).next(r=>(e.addOnCommittedListener(()=>{this.An(t.batchId)}),f.forEach(r,i=>this.referenceDelegate.markPotentiallyOrphaned(e,i))))}An(e){delete this.In[e]}performConsistencyCheck(e){return this.checkEmpty(e).next(t=>{if(!t)return f.resolve();const r=IDBKeyRange.lowerBound([this.userId]),i=[];return Vn(e).Z({range:r},(s,o,a)=>{if(s[0]===this.userId){const c=Je(s[1]);i.push(c)}else a.done()}).next(()=>{C(i.length===0)})})}containsKey(e,t){return Gm(e,this.userId,t)}Rn(e){return Km(e).get(this.userId).next(t=>t||{userId:this.userId,lastAcknowledgedBatchId:-1,lastStreamToken:""})}}function Gm(n,e,t){const r=gs(e,t.path),i=r[1],s=IDBKeyRange.lowerBound(r);let o=!1;return Vn(n).Z({range:s,X:!0},(a,c,u)=>{const[l,h,d]=a;l===e&&h===i&&(o=!0),u.done()}).next(()=>o)}function _t(n){return fe(n,"mutations")}function Vn(n){return fe(n,"documentMutations")}function Km(n){return fe(n,"mutationQueues")}/**
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
 */class Tn{constructor(e){this.bn=e}next(){return this.bn+=2,this.bn}static Pn(){return new Tn(0)}static vn(){return new Tn(-1)}}/**
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
 */class IT{constructor(e,t){this.referenceDelegate=e,this.It=t}allocateTargetId(e){return this.Vn(e).next(t=>{const r=new Tn(t.highestTargetId);return t.highestTargetId=r.next(),this.Sn(e,t).next(()=>t.highestTargetId)})}getLastRemoteSnapshotVersion(e){return this.Vn(e).next(t=>A.fromTimestamp(new K(t.lastRemoteSnapshotVersion.seconds,t.lastRemoteSnapshotVersion.nanoseconds)))}getHighestSequenceNumber(e){return this.Vn(e).next(t=>t.highestListenSequenceNumber)}setTargetsMetadata(e,t,r){return this.Vn(e).next(i=>(i.highestListenSequenceNumber=t,r&&(i.lastRemoteSnapshotVersion=r.toTimestamp()),t>i.highestListenSequenceNumber&&(i.highestListenSequenceNumber=t),this.Sn(e,i)))}addTargetData(e,t){return this.Dn(e,t).next(()=>this.Vn(e).next(r=>(r.targetCount+=1,this.Cn(t,r),this.Sn(e,r))))}updateTargetData(e,t){return this.Dn(e,t)}removeTargetData(e,t){return this.removeMatchingKeysForTargetId(e,t.targetId).next(()=>Un(e).delete(t.targetId)).next(()=>this.Vn(e)).next(r=>(C(r.targetCount>0),r.targetCount-=1,this.Sn(e,r)))}removeTargets(e,t,r){let i=0;const s=[];return Un(e).Z((o,a)=>{const c=qr(a);c.sequenceNumber<=t&&r.get(c.targetId)===null&&(i++,s.push(this.removeTargetData(e,c)))}).next(()=>f.waitFor(s)).next(()=>i)}forEachTarget(e,t){return Un(e).Z((r,i)=>{const s=qr(i);t(s)})}Vn(e){return th(e).get("targetGlobalKey").next(t=>(C(t!==null),t))}Sn(e,t){return th(e).put("targetGlobalKey",t)}Dn(e,t){return Un(e).put($m(this.It,t))}Cn(e,t){let r=!1;return e.targetId>t.highestTargetId&&(t.highestTargetId=e.targetId,r=!0),e.sequenceNumber>t.highestListenSequenceNumber&&(t.highestListenSequenceNumber=e.sequenceNumber,r=!0),r}getTargetCount(e){return this.Vn(e).next(t=>t.targetCount)}getTargetData(e,t){const r=wn(t),i=IDBKeyRange.bound([r,Number.NEGATIVE_INFINITY],[r,Number.POSITIVE_INFINITY]);let s=null;return Un(e).Z({range:i,index:"queryTargetsIndex"},(o,a,c)=>{const u=qr(a);Ui(t,u.target)&&(s=u,c.done())}).next(()=>s)}addMatchingKeys(e,t,r){const i=[],s=Et(e);return t.forEach(o=>{const a=De(o.path);i.push(s.put({targetId:r,path:a})),i.push(this.referenceDelegate.addReference(e,r,o))}),f.waitFor(i)}removeMatchingKeys(e,t,r){const i=Et(e);return f.forEach(t,s=>{const o=De(s.path);return f.waitFor([i.delete([r,o]),this.referenceDelegate.removeReference(e,r,s)])})}removeMatchingKeysForTargetId(e,t){const r=Et(e),i=IDBKeyRange.bound([t],[t+1],!1,!0);return r.delete(i)}getMatchingKeysForTargetId(e,t){const r=IDBKeyRange.bound([t],[t+1],!1,!0),i=Et(e);let s=R();return i.Z({range:r,X:!0},(o,a,c)=>{const u=Je(o[1]),l=new I(u);s=s.add(l)}).next(()=>s)}containsKey(e,t){const r=De(t.path),i=IDBKeyRange.bound([r],[Qf(r)],!1,!0);let s=0;return Et(e).Z({index:"documentTargetsIndex",X:!0,range:i},([o,a],c,u)=>{o!==0&&(s++,u.done())}).next(()=>s>0)}se(e,t){return Un(e).get(t).next(r=>r?qr(r):null)}}function Un(n){return fe(n,"targets")}function th(n){return fe(n,"targetGlobal")}function Et(n){return fe(n,"targetDocuments")}/**
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
 */function nh([n,e],[t,r]){const i=N(n,t);return i===0?N(e,r):i}class _T{constructor(e){this.xn=e,this.buffer=new F(nh),this.Nn=0}kn(){return++this.Nn}On(e){const t=[e,this.kn()];if(this.buffer.size<this.xn)this.buffer=this.buffer.add(t);else{const r=this.buffer.last();nh(t,r)<0&&(this.buffer=this.buffer.delete(r).add(t))}}get maxValue(){return this.buffer.last()[0]}}class bT{constructor(e,t,r){this.garbageCollector=e,this.asyncQueue=t,this.localStore=r,this.Mn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Fn(6e4)}stop(){this.Mn&&(this.Mn.cancel(),this.Mn=null)}get started(){return this.Mn!==null}Fn(e){v("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.Mn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Mn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){Kt(t)?v("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",t):await Gt(t)}await this.Fn(3e5)})}}class ET{constructor(e,t){this.$n=e,this.params=t}calculateTargetCount(e,t){return this.$n.Bn(e).next(r=>Math.floor(t/100*r))}nthSequenceNumber(e,t){if(t===0)return f.resolve(xe.at);const r=new _T(t);return this.$n.forEachTarget(e,i=>r.On(i.sequenceNumber)).next(()=>this.$n.Ln(e,i=>r.On(i))).next(()=>r.maxValue)}removeTargets(e,t,r){return this.$n.removeTargets(e,t,r)}removeOrphanedDocuments(e,t){return this.$n.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(v("LruGarbageCollector","Garbage collection skipped; disabled"),f.resolve(eh)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(v("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),eh):this.Un(e,t))}getCacheSize(e){return this.$n.getCacheSize(e)}Un(e,t){let r,i,s,o,a,c,u;const l=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(h=>(h>this.params.maximumSequenceNumbersToCollect?(v("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${h}`),i=this.params.maximumSequenceNumbersToCollect):i=h,o=Date.now(),this.nthSequenceNumber(e,i))).next(h=>(r=h,a=Date.now(),this.removeTargets(e,r,t))).next(h=>(s=h,c=Date.now(),this.removeOrphanedDocuments(e,r))).next(h=>(u=Date.now(),Ra()<=P.DEBUG&&v("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-l}ms
	Determined least recently used ${i} in `+(a-o)+`ms
	Removed ${s} targets in `+(c-a)+`ms
	Removed ${h} documents in `+(u-c)+`ms
Total Duration: ${u-l}ms`),f.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:s,documentsRemoved:h})))}}/**
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
 */class TT{constructor(e,t){this.db=e,this.garbageCollector=function(r,i){return new ET(r,i)}(this,t)}Bn(e){const t=this.qn(e);return this.db.getTargetCache().getTargetCount(e).next(r=>t.next(i=>r+i))}qn(e){let t=0;return this.Ln(e,r=>{t++}).next(()=>t)}forEachTarget(e,t){return this.db.getTargetCache().forEachTarget(e,t)}Ln(e,t){return this.Kn(e,(r,i)=>t(i))}addReference(e,t,r){return as(e,r)}removeReference(e,t,r){return as(e,r)}removeTargets(e,t,r){return this.db.getTargetCache().removeTargets(e,t,r)}markPotentiallyOrphaned(e,t){return as(e,t)}Gn(e,t){return function(r,i){let s=!1;return Km(r).tt(o=>Gm(r,o,i).next(a=>(a&&(s=!0),f.resolve(!a)))).next(()=>s)}(e,t)}removeOrphanedDocuments(e,t){const r=this.db.getRemoteDocumentCache().newChangeBuffer(),i=[];let s=0;return this.Kn(e,(o,a)=>{if(a<=t){const c=this.Gn(e,o).next(u=>{if(!u)return s++,r.getEntry(e,o).next(()=>(r.removeEntry(o,A.min()),Et(e).delete([0,De(o.path)])))});i.push(c)}}).next(()=>f.waitFor(i)).next(()=>r.apply(e)).next(()=>s)}removeTarget(e,t){const r=t.withSequenceNumber(e.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(e,r)}updateLimboDocument(e,t){return as(e,t)}Kn(e,t){const r=Et(e);let i,s=xe.at;return r.Z({index:"documentTargetsIndex"},([o,a],{path:c,sequenceNumber:u})=>{o===0?(s!==xe.at&&t(new I(Je(i)),s),s=u,i=c):s=xe.at}).next(()=>{s!==xe.at&&t(new I(Je(i)),s)})}getCacheSize(e){return this.db.getRemoteDocumentCache().getSize(e)}}function as(n,e){return Et(n).put(function(t,r){return{targetId:0,path:De(t.path),sequenceNumber:r}}(e,n.currentSequenceNumber))}/**
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
 */class Wm{constructor(){this.changes=new Wt(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,B.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?f.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class ST{constructor(e){this.It=e}setIndexManager(e){this.indexManager=e}addEntry(e,t,r){return Yt(e).put(r)}removeEntry(e,t,r){return Yt(e).delete(function(i,s){const o=i.path.toArray();return[o.slice(0,o.length-2),o[o.length-2],Us(s),o[o.length-1]]}(t,r))}updateMetadata(e,t){return this.getMetadata(e).next(r=>(r.byteSize+=t,this.Qn(e,r)))}getEntry(e,t){let r=B.newInvalidDocument(t);return Yt(e).Z({index:"documentKeyIndex",range:IDBKeyRange.only(Pr(t))},(i,s)=>{r=this.jn(t,s)}).next(()=>r)}Wn(e,t){let r={size:0,document:B.newInvalidDocument(t)};return Yt(e).Z({index:"documentKeyIndex",range:IDBKeyRange.only(Pr(t))},(i,s)=>{r={document:this.jn(t,s),size:Vs(s)}}).next(()=>r)}getEntries(e,t){let r=Oe();return this.zn(e,t,(i,s)=>{const o=this.jn(i,s);r=r.insert(i,o)}).next(()=>r)}Hn(e,t){let r=Oe(),i=new Y(I.comparator);return this.zn(e,t,(s,o)=>{const a=this.jn(s,o);r=r.insert(s,a),i=i.insert(s,Vs(o))}).next(()=>({documents:r,Jn:i}))}zn(e,t,r){if(t.isEmpty())return f.resolve();let i=new F(sh);t.forEach(c=>i=i.add(c));const s=IDBKeyRange.bound(Pr(i.first()),Pr(i.last())),o=i.getIterator();let a=o.getNext();return Yt(e).Z({index:"documentKeyIndex",range:s},(c,u,l)=>{const h=I.fromSegments([...u.prefixPath,u.collectionGroup,u.documentId]);for(;a&&sh(a,h)<0;)r(a,null),a=o.getNext();a&&a.isEqual(h)&&(r(a,u),a=o.hasNext()?o.getNext():null),a?l.j(Pr(a)):l.done()}).next(()=>{for(;a;)r(a,null),a=o.hasNext()?o.getNext():null})}getAllFromCollection(e,t,r){const i=[t.popLast().toArray(),t.lastSegment(),Us(r.readTime),r.documentKey.path.isEmpty()?"":r.documentKey.path.lastSegment()],s=[t.popLast().toArray(),t.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return Yt(e).W(IDBKeyRange.bound(i,s,!0)).next(o=>{let a=Oe();for(const c of o){const u=this.jn(I.fromSegments(c.prefixPath.concat(c.collectionGroup,c.documentId)),c);a=a.insert(u.key,u)}return a})}getAllFromCollectionGroup(e,t,r,i){let s=Oe();const o=ih(t,r),a=ih(t,Ve.max());return Yt(e).Z({index:"collectionGroupIndex",range:IDBKeyRange.bound(o,a,!0)},(c,u,l)=>{const h=this.jn(I.fromSegments(u.prefixPath.concat(u.collectionGroup,u.documentId)),u);s=s.insert(h.key,h),s.size===i&&l.done()}).next(()=>s)}newChangeBuffer(e){return new kT(this,!!e&&e.trackRemovals)}getSize(e){return this.getMetadata(e).next(t=>t.byteSize)}getMetadata(e){return rh(e).get("remoteDocumentGlobalKey").next(t=>(C(!!t),t))}Qn(e,t){return rh(e).put("remoteDocumentGlobalKey",t)}jn(e,t){if(t){const r=hT(this.It,t);if(!(r.isNoDocument()&&r.version.isEqual(A.min())))return r}return B.newInvalidDocument(e)}}function zm(n){return new ST(n)}class kT extends Wm{constructor(e,t){super(),this.Yn=e,this.trackRemovals=t,this.Xn=new Wt(r=>r.toString(),(r,i)=>r.isEqual(i))}applyChanges(e){const t=[];let r=0,i=new F((s,o)=>N(s.canonicalString(),o.canonicalString()));return this.changes.forEach((s,o)=>{const a=this.Xn.get(s);if(t.push(this.Yn.removeEntry(e,s,a.readTime)),o.isValidDocument()){const c=Kl(this.Yn.It,o);i=i.add(s.path.popLast());const u=Vs(c);r+=u-a.size,t.push(this.Yn.addEntry(e,s,c))}else if(r-=a.size,this.trackRemovals){const c=Kl(this.Yn.It,o.convertToNoDocument(A.min()));t.push(this.Yn.addEntry(e,s,c))}}),i.forEach(s=>{t.push(this.Yn.indexManager.addToCollectionParentIndex(e,s))}),t.push(this.Yn.updateMetadata(e,r)),f.waitFor(t)}getFromCache(e,t){return this.Yn.Wn(e,t).next(r=>(this.Xn.set(t,{size:r.size,readTime:r.document.readTime}),r.document))}getAllFromCache(e,t){return this.Yn.Hn(e,t).next(({documents:r,Jn:i})=>(i.forEach((s,o)=>{this.Xn.set(s,{size:o,readTime:r.get(s).readTime})}),r))}}function rh(n){return fe(n,"remoteDocumentGlobal")}function Yt(n){return fe(n,"remoteDocumentsV14")}function Pr(n){const e=n.path.toArray();return[e.slice(0,e.length-2),e[e.length-2],e[e.length-1]]}function ih(n,e){const t=e.documentKey.path.toArray();return[n,Us(e.readTime),t.slice(0,t.length-2),t.length>0?t[t.length-1]:""]}function sh(n,e){const t=n.path.toArray(),r=e.path.toArray();let i=0;for(let s=0;s<t.length-2&&s<r.length-2;++s)if(i=N(t[s],r[s]),i)return i;return i=N(t.length,r.length),i||(i=N(t[t.length-2],r[r.length-2]),i||N(t[t.length-1],r[r.length-1]))}/**
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
 */class AT{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
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
 */class Hm{constructor(e,t,r,i){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next(i=>(r=i,this.getBaseDocument(e,t,r))).next(i=>(r!==null&&Hr(r.mutation,i,Fe.empty(),K.now()),i))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.getLocalViewOfDocuments(e,r,R()).next(()=>r))}getLocalViewOfDocuments(e,t,r=R()){const i=Xe();return this.populateOverlays(e,i,t).next(()=>this.computeViews(e,t,i,r).next(s=>{let o=Br();return s.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,t){const r=Xe();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,R()))}populateOverlays(e,t,r){const i=[];return r.forEach(s=>{t.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{t.set(o,a)})})}computeViews(e,t,r,i){let s=Oe();const o=Qr(),a=Qr();return t.forEach((c,u)=>{const l=r.get(u.key);i.has(u.key)&&(l===void 0||l.mutation instanceof vt)?s=s.insert(u.key,u):l!==void 0&&(o.set(u.key,l.mutation.getFieldMask()),Hr(l.mutation,u,l.mutation.getFieldMask(),K.now()))}),this.recalculateAndSaveOverlays(e,s).next(c=>(c.forEach((u,l)=>o.set(u,l)),t.forEach((u,l)=>{var h;return a.set(u,new AT(l,(h=o.get(u))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,t){const r=Qr();let i=new Y((o,a)=>o-a),s=R();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(o=>{for(const a of o)a.keys().forEach(c=>{const u=t.get(c);if(u===null)return;let l=r.get(c)||Fe.empty();l=a.applyToLocalView(u,l),r.set(c,l);const h=(i.get(a.batchId)||R()).add(c);i=i.insert(a.batchId,h)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),u=c.key,l=c.value,h=Tm();l.forEach(d=>{if(!s.has(d)){const p=vm(t.get(d),r.get(d));p!==null&&h.set(d,p),s=s.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,h))}return f.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,t,r){return function(i){return I.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):$c(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r):this.getDocumentsMatchingCollectionQuery(e,t,r)}getNextDocuments(e,t,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,i-s.size):f.resolve(Xe());let a=-1,c=s;return o.next(u=>f.forEach(u,(l,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),s.get(l)?f.resolve():this.getBaseDocument(e,l,h).next(d=>{c=c.insert(l,d)}))).next(()=>this.populateOverlays(e,u,s)).next(()=>this.computeViews(e,c,u,R())).next(l=>({batchId:a,changes:Em(l)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new I(t)).next(r=>{let i=Br();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,t,r){const i=t.collectionGroup;let s=Br();return this.indexManager.getCollectionParents(e,i).next(o=>f.forEach(o,a=>{const c=function(u,l){return new yt(l,null,u.explicitOrderBy.slice(),u.filters.slice(),u.limit,u.limitType,u.startAt,u.endAt)}(t,a.child(i));return this.getDocumentsMatchingCollectionQuery(e,c,r).next(u=>{u.forEach((l,h)=>{s=s.insert(l,h)})})}).next(()=>s))}getDocumentsMatchingCollectionQuery(e,t,r){let i;return this.remoteDocumentCache.getAllFromCollection(e,t.path,r).next(s=>(i=s,this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId))).next(s=>{s.forEach((a,c)=>{const u=c.getKey();i.get(u)===null&&(i=i.insert(u,B.newInvalidDocument(u)))});let o=Br();return i.forEach((a,c)=>{const u=s.get(a);u!==void 0&&Hr(u.mutation,c,Fe.empty(),K.now()),jc(t,c)&&(o=o.insert(a,c))}),o})}getBaseDocument(e,t,r){return r===null||r.mutation.type===1?this.remoteDocumentCache.getEntry(e,t):f.resolve(B.newInvalidDocument(t))}}/**
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
 */class CT{constructor(e){this.It=e,this.Zn=new Map,this.ts=new Map}getBundleMetadata(e,t){return f.resolve(this.Zn.get(t))}saveBundleMetadata(e,t){var r;return this.Zn.set(t.id,{id:(r=t).id,version:r.version,createTime:ce(r.createTime)}),f.resolve()}getNamedQuery(e,t){return f.resolve(this.ts.get(t))}saveNamedQuery(e,t){return this.ts.set(t.name,function(r){return{name:r.name,query:Qc(r.bundledQuery),readTime:ce(r.readTime)}}(t)),f.resolve()}}/**
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
 */class DT{constructor(){this.overlays=new Y(I.comparator),this.es=new Map}getOverlay(e,t){return f.resolve(this.overlays.get(t))}getOverlays(e,t){const r=Xe();return f.forEach(t,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,t,r){return r.forEach((i,s)=>{this.ue(e,t,s)}),f.resolve()}removeOverlaysForBatchId(e,t,r){const i=this.es.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.es.delete(r)),f.resolve()}getOverlaysForCollection(e,t,r){const i=Xe(),s=t.length+1,o=new I(t.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,u=c.getKey();if(!t.isPrefixOf(u.path))break;u.path.length===s&&c.largestBatchId>r&&i.set(c.getKey(),c)}return f.resolve(i)}getOverlaysForCollectionGroup(e,t,r,i){let s=new Y((u,l)=>u-l);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===t&&u.largestBatchId>r){let l=s.get(u.largestBatchId);l===null&&(l=Xe(),s=s.insert(u.largestBatchId,l)),l.set(u.getKey(),u)}}const a=Xe(),c=s.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((u,l)=>a.set(u,l)),!(a.size()>=i)););return f.resolve(a)}ue(e,t,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.es.get(i.largestBatchId).delete(r.key);this.es.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new Hc(t,r));let s=this.es.get(t);s===void 0&&(s=R(),this.es.set(t,s)),this.es.set(t,s.add(r.key))}}/**
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
 */class Xc{constructor(){this.ns=new F(se.ss),this.rs=new F(se.os)}isEmpty(){return this.ns.isEmpty()}addReference(e,t){const r=new se(e,t);this.ns=this.ns.add(r),this.rs=this.rs.add(r)}us(e,t){e.forEach(r=>this.addReference(r,t))}removeReference(e,t){this.cs(new se(e,t))}hs(e,t){e.forEach(r=>this.removeReference(r,t))}ls(e){const t=new I(new O([])),r=new se(t,e),i=new se(t,e+1),s=[];return this.rs.forEachInRange([r,i],o=>{this.cs(o),s.push(o.key)}),s}fs(){this.ns.forEach(e=>this.cs(e))}cs(e){this.ns=this.ns.delete(e),this.rs=this.rs.delete(e)}ds(e){const t=new I(new O([])),r=new se(t,e),i=new se(t,e+1);let s=R();return this.rs.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const t=new se(e,0),r=this.ns.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class se{constructor(e,t){this.key=e,this._s=t}static ss(e,t){return I.comparator(e.key,t.key)||N(e._s,t._s)}static os(e,t){return N(e._s,t._s)||I.comparator(e.key,t.key)}}/**
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
 */class NT{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.ws=1,this.gs=new F(se.ss)}checkEmpty(e){return f.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,i){const s=this.ws;this.ws++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new Wc(s,t,r,i);this.mutationQueue.push(o);for(const a of i)this.gs=this.gs.add(new se(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return f.resolve(o)}lookupMutationBatch(e,t){return f.resolve(this.ys(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,i=this.ps(r),s=i<0?0:i;return f.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return f.resolve(this.mutationQueue.length===0?-1:this.ws-1)}getAllMutationBatches(e){return f.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new se(t,0),i=new se(t,Number.POSITIVE_INFINITY),s=[];return this.gs.forEachInRange([r,i],o=>{const a=this.ys(o._s);s.push(a)}),f.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new F(N);return t.forEach(i=>{const s=new se(i,0),o=new se(i,Number.POSITIVE_INFINITY);this.gs.forEachInRange([s,o],a=>{r=r.add(a._s)})}),f.resolve(this.Is(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,i=r.length+1;let s=r;I.isDocumentKey(s)||(s=s.child(""));const o=new se(new I(s),0);let a=new F(N);return this.gs.forEachWhile(c=>{const u=c.key.path;return!!r.isPrefixOf(u)&&(u.length===i&&(a=a.add(c._s)),!0)},o),f.resolve(this.Is(a))}Is(e){const t=[];return e.forEach(r=>{const i=this.ys(r);i!==null&&t.push(i)}),t}removeMutationBatch(e,t){C(this.Ts(t.batchId,"removed")===0),this.mutationQueue.shift();let r=this.gs;return f.forEach(t.mutations,i=>{const s=new se(i.key,t.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.gs=r})}An(e){}containsKey(e,t){const r=new se(t,0),i=this.gs.firstAfterOrEqual(r);return f.resolve(t.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,f.resolve()}Ts(e,t){return this.ps(e)}ps(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}ys(e){const t=this.ps(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class RT{constructor(e){this.Es=e,this.docs=new Y(I.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,i=this.docs.get(r),s=i?i.size:0,o=this.Es(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return f.resolve(r?r.document.mutableCopy():B.newInvalidDocument(t))}getEntries(e,t){let r=Oe();return t.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():B.newInvalidDocument(i))}),f.resolve(r)}getAllFromCollection(e,t,r){let i=Oe();const s=new I(t.child("")),o=this.docs.getIteratorFrom(s);for(;o.hasNext();){const{key:a,value:{document:c}}=o.getNext();if(!t.isPrefixOf(a.path))break;a.path.length>t.length+1||Fc(Jf(c),r)<=0||(i=i.insert(c.key,c.mutableCopy()))}return f.resolve(i)}getAllFromCollectionGroup(e,t,r,i){E()}As(e,t){return f.forEach(this.docs,r=>t(r))}newChangeBuffer(e){return new xT(this)}getSize(e){return f.resolve(this.size)}}class xT extends Wm{constructor(e){super(),this.Yn=e}applyChanges(e){const t=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?t.push(this.Yn.addEntry(e,i)):this.Yn.removeEntry(r)}),f.waitFor(t)}getFromCache(e,t){return this.Yn.getEntry(e,t)}getAllFromCache(e,t){return this.Yn.getEntries(e,t)}}/**
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
 */class OT{constructor(e){this.persistence=e,this.Rs=new Wt(t=>wn(t),Ui),this.lastRemoteSnapshotVersion=A.min(),this.highestTargetId=0,this.bs=0,this.Ps=new Xc,this.targetCount=0,this.vs=Tn.Pn()}forEachTarget(e,t){return this.Rs.forEach((r,i)=>t(i)),f.resolve()}getLastRemoteSnapshotVersion(e){return f.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return f.resolve(this.bs)}allocateTargetId(e){return this.highestTargetId=this.vs.next(),f.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.bs&&(this.bs=t),f.resolve()}Dn(e){this.Rs.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.vs=new Tn(t),this.highestTargetId=t),e.sequenceNumber>this.bs&&(this.bs=e.sequenceNumber)}addTargetData(e,t){return this.Dn(t),this.targetCount+=1,f.resolve()}updateTargetData(e,t){return this.Dn(t),f.resolve()}removeTargetData(e,t){return this.Rs.delete(t.target),this.Ps.ls(t.targetId),this.targetCount-=1,f.resolve()}removeTargets(e,t,r){let i=0;const s=[];return this.Rs.forEach((o,a)=>{a.sequenceNumber<=t&&r.get(a.targetId)===null&&(this.Rs.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),f.waitFor(s).next(()=>i)}getTargetCount(e){return f.resolve(this.targetCount)}getTargetData(e,t){const r=this.Rs.get(t)||null;return f.resolve(r)}addMatchingKeys(e,t,r){return this.Ps.us(t,r),f.resolve()}removeMatchingKeys(e,t,r){this.Ps.hs(t,r);const i=this.persistence.referenceDelegate,s=[];return i&&t.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),f.waitFor(s)}removeMatchingKeysForTargetId(e,t){return this.Ps.ls(t),f.resolve()}getMatchingKeysForTargetId(e,t){const r=this.Ps.ds(t);return f.resolve(r)}containsKey(e,t){return f.resolve(this.Ps.containsKey(t))}}/**
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
 */class Qm{constructor(e,t){this.Vs={},this.overlays={},this.Ss=new xe(0),this.Ds=!1,this.Ds=!0,this.referenceDelegate=e(this),this.Cs=new OT(this),this.indexManager=new vT,this.remoteDocumentCache=function(r){return new RT(r)}(r=>this.referenceDelegate.xs(r)),this.It=new qm(t),this.Ns=new CT(this.It)}start(){return Promise.resolve()}shutdown(){return this.Ds=!1,Promise.resolve()}get started(){return this.Ds}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new DT,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.Vs[e.toKey()];return r||(r=new NT(t,this.referenceDelegate),this.Vs[e.toKey()]=r),r}getTargetCache(){return this.Cs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ns}runTransaction(e,t,r){v("MemoryPersistence","Starting transaction:",e);const i=new PT(this.Ss.next());return this.referenceDelegate.ks(),r(i).next(s=>this.referenceDelegate.Os(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Ms(e,t){return f.or(Object.values(this.Vs).map(r=>()=>r.containsKey(e,t)))}}class PT extends em{constructor(e){super(),this.currentSequenceNumber=e}}class Co{constructor(e){this.persistence=e,this.Fs=new Xc,this.$s=null}static Bs(e){return new Co(e)}get Ls(){if(this.$s)return this.$s;throw E()}addReference(e,t,r){return this.Fs.addReference(r,t),this.Ls.delete(r.toString()),f.resolve()}removeReference(e,t,r){return this.Fs.removeReference(r,t),this.Ls.add(r.toString()),f.resolve()}markPotentiallyOrphaned(e,t){return this.Ls.add(t.toString()),f.resolve()}removeTarget(e,t){this.Fs.ls(t.targetId).forEach(i=>this.Ls.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next(i=>{i.forEach(s=>this.Ls.add(s.toString()))}).next(()=>r.removeTargetData(e,t))}ks(){this.$s=new Set}Os(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return f.forEach(this.Ls,r=>{const i=I.fromPath(r);return this.Us(e,i).next(s=>{s||t.removeEntry(i,A.min())})}).next(()=>(this.$s=null,t.apply(e)))}updateLimboDocument(e,t){return this.Us(e,t).next(r=>{r?this.Ls.delete(t.toString()):this.Ls.add(t.toString())})}xs(e){return 0}Us(e,t){return f.or([()=>f.resolve(this.Fs.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ms(e,t)])}}/**
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
 */class LT{constructor(e){this.It=e}$(e,t,r,i){const s=new bo("createOrUpgrade",t);r<1&&i>=1&&(function(a){a.createObjectStore("owner")}(e),function(a){a.createObjectStore("mutationQueues",{keyPath:"userId"}),a.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",Gl,{unique:!0}),a.createObjectStore("documentMutations")}(e),oh(e),function(a){a.createObjectStore("remoteDocuments")}(e));let o=f.resolve();return r<3&&i>=3&&(r!==0&&(function(a){a.deleteObjectStore("targetDocuments"),a.deleteObjectStore("targets"),a.deleteObjectStore("targetGlobal")}(e),oh(e)),o=o.next(()=>function(a){const c=a.store("targetGlobal"),u={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:A.min().toTimestamp(),targetCount:0};return c.put("targetGlobalKey",u)}(s))),r<4&&i>=4&&(r!==0&&(o=o.next(()=>function(a,c){return c.store("mutations").W().next(u=>{a.deleteObjectStore("mutations"),a.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",Gl,{unique:!0});const l=c.store("mutations"),h=u.map(d=>l.put(d));return f.waitFor(h)})}(e,s))),o=o.next(()=>{(function(a){a.createObjectStore("clientMetadata",{keyPath:"clientId"})})(e)})),r<5&&i>=5&&(o=o.next(()=>this.qs(s))),r<6&&i>=6&&(o=o.next(()=>(function(a){a.createObjectStore("remoteDocumentGlobal")}(e),this.Ks(s)))),r<7&&i>=7&&(o=o.next(()=>this.Gs(s))),r<8&&i>=8&&(o=o.next(()=>this.Qs(e,s))),r<9&&i>=9&&(o=o.next(()=>{(function(a){a.objectStoreNames.contains("remoteDocumentChanges")&&a.deleteObjectStore("remoteDocumentChanges")})(e)})),r<10&&i>=10&&(o=o.next(()=>this.js(s))),r<11&&i>=11&&(o=o.next(()=>{(function(a){a.createObjectStore("bundles",{keyPath:"bundleId"})})(e),function(a){a.createObjectStore("namedQueries",{keyPath:"name"})}(e)})),r<12&&i>=12&&(o=o.next(()=>{(function(a){const c=a.createObjectStore("documentOverlays",{keyPath:oT});c.createIndex("collectionPathOverlayIndex",aT,{unique:!1}),c.createIndex("collectionGroupOverlayIndex",cT,{unique:!1})})(e)})),r<13&&i>=13&&(o=o.next(()=>function(a){const c=a.createObjectStore("remoteDocumentsV14",{keyPath:QE});c.createIndex("documentKeyIndex",YE),c.createIndex("collectionGroupIndex",XE)}(e)).next(()=>this.Ws(e,s)).next(()=>e.deleteObjectStore("remoteDocuments"))),r<14&&i>=14&&(o=o.next(()=>this.zs(e,s))),r<15&&i>=15&&(o=o.next(()=>function(a){a.createObjectStore("indexConfiguration",{keyPath:"indexId",autoIncrement:!0}).createIndex("collectionGroupIndex","collectionGroup",{unique:!1}),a.createObjectStore("indexState",{keyPath:nT}).createIndex("sequenceNumberIndex",rT,{unique:!1}),a.createObjectStore("indexEntries",{keyPath:iT}).createIndex("documentKeyIndex",sT,{unique:!1})}(e))),o}Ks(e){let t=0;return e.store("remoteDocuments").Z((r,i)=>{t+=Vs(i)}).next(()=>{const r={byteSize:t};return e.store("remoteDocumentGlobal").put("remoteDocumentGlobalKey",r)})}qs(e){const t=e.store("mutationQueues"),r=e.store("mutations");return t.W().next(i=>f.forEach(i,s=>{const o=IDBKeyRange.bound([s.userId,-1],[s.userId,s.lastAcknowledgedBatchId]);return r.W("userMutationsIndex",o).next(a=>f.forEach(a,c=>{C(c.userId===s.userId);const u=en(this.It,c);return jm(e,s.userId,u).next(()=>{})}))}))}Gs(e){const t=e.store("targetDocuments"),r=e.store("remoteDocuments");return e.store("targetGlobal").get("targetGlobalKey").next(i=>{const s=[];return r.Z((o,a)=>{const c=new O(o),u=function(l){return[0,De(l)]}(c);s.push(t.get(u).next(l=>l?f.resolve():(h=>t.put({targetId:0,path:De(h),sequenceNumber:i.highestListenSequenceNumber}))(c)))}).next(()=>f.waitFor(s))})}Qs(e,t){e.createObjectStore("collectionParents",{keyPath:tT});const r=t.store("collectionParents"),i=new Yc,s=o=>{if(i.add(o)){const a=o.lastSegment(),c=o.popLast();return r.put({collectionId:a,parent:De(c)})}};return t.store("remoteDocuments").Z({X:!0},(o,a)=>{const c=new O(o);return s(c.popLast())}).next(()=>t.store("documentMutations").Z({X:!0},([o,a,c],u)=>{const l=Je(a);return s(l.popLast())}))}js(e){const t=e.store("targets");return t.Z((r,i)=>{const s=qr(i),o=$m(this.It,s);return t.put(o)})}Ws(e,t){const r=t.store("remoteDocuments"),i=[];return r.Z((s,o)=>{const a=t.store("remoteDocumentsV14"),c=(u=o,u.document?new I(O.fromString(u.document.name).popFirst(5)):u.noDocument?I.fromSegments(u.noDocument.path):u.unknownDocument?I.fromSegments(u.unknownDocument.path):E()).path.toArray();var u;/**
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
*/const l={prefixPath:c.slice(0,c.length-2),collectionGroup:c[c.length-2],documentId:c[c.length-1],readTime:o.readTime||[0,0],unknownDocument:o.unknownDocument,noDocument:o.noDocument,document:o.document,hasCommittedMutations:!!o.hasCommittedMutations};i.push(a.put(l))}).next(()=>f.waitFor(i))}zs(e,t){const r=t.store("mutations"),i=zm(this.It),s=new Qm(Co.Bs,this.It.re);return r.W().next(o=>{const a=new Map;return o.forEach(c=>{var u;let l=(u=a.get(c.userId))!==null&&u!==void 0?u:R();en(this.It,c).keys().forEach(h=>l=l.add(h)),a.set(c.userId,l)}),f.forEach(a,(c,u)=>{const l=new oe(u),h=ko.oe(this.It,l),d=s.getIndexManager(l),p=Ao.oe(l,this.It,d,s.referenceDelegate);return new Hm(i,p,h,d).recalculateAndSaveOverlaysForDocumentKeys(new Ua(t,xe.at),c).next()})})}}function oh(n){n.createObjectStore("targetDocuments",{keyPath:ZE}).createIndex("documentTargetsIndex",eT,{unique:!0}),n.createObjectStore("targets",{keyPath:"targetId"}).createIndex("queryTargetsIndex",JE,{unique:!0}),n.createObjectStore("targetGlobal")}const oa="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.";class Jc{constructor(e,t,r,i,s,o,a,c,u,l,h=15){if(this.allowTabSynchronization=e,this.persistenceKey=t,this.clientId=r,this.Hs=s,this.window=o,this.document=a,this.Js=u,this.Ys=l,this.Xs=h,this.Ss=null,this.Ds=!1,this.isPrimary=!1,this.networkEnabled=!0,this.Zs=null,this.inForeground=!1,this.ti=null,this.ei=null,this.ni=Number.NEGATIVE_INFINITY,this.si=d=>Promise.resolve(),!Jc.C())throw new y(m.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new TT(this,i),this.ii=t+"main",this.It=new qm(c),this.ri=new $e(this.ii,this.Xs,new LT(this.It)),this.Cs=new IT(this.referenceDelegate,this.It),this.remoteDocumentCache=zm(this.It),this.Ns=new dT,this.window&&this.window.localStorage?this.oi=this.window.localStorage:(this.oi=null,l===!1&&J("IndexedDbPersistence","LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.ui().then(()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new y(m.FAILED_PRECONDITION,oa);return this.ci(),this.ai(),this.hi(),this.runTransaction("getHighestListenSequenceNumber","readonly",e=>this.Cs.getHighestSequenceNumber(e))}).then(e=>{this.Ss=new xe(e,this.Js)}).then(()=>{this.Ds=!0}).catch(e=>(this.ri&&this.ri.close(),Promise.reject(e)))}li(e){return this.si=async t=>{if(this.started)return e(t)},e(this.isPrimary)}setDatabaseDeletedListener(e){this.ri.L(async t=>{t.newVersion===null&&await e()})}setNetworkEnabled(e){this.networkEnabled!==e&&(this.networkEnabled=e,this.Hs.enqueueAndForget(async()=>{this.started&&await this.ui()}))}ui(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",e=>cs(e).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next(()=>{if(this.isPrimary)return this.fi(e).next(t=>{t||(this.isPrimary=!1,this.Hs.enqueueRetryable(()=>this.si(!1)))})}).next(()=>this.di(e)).next(t=>this.isPrimary&&!t?this._i(e).next(()=>!1):!!t&&this.wi(e).next(()=>!0))).catch(e=>{if(Kt(e))return v("IndexedDbPersistence","Failed to extend owner lease: ",e),this.isPrimary;if(!this.allowTabSynchronization)throw e;return v("IndexedDbPersistence","Releasing owner lease after error during lease refresh",e),!1}).then(e=>{this.isPrimary!==e&&this.Hs.enqueueRetryable(()=>this.si(e)),this.isPrimary=e})}fi(e){return Lr(e).get("owner").next(t=>f.resolve(this.mi(t)))}gi(e){return cs(e).delete(this.clientId)}async yi(){if(this.isPrimary&&!this.pi(this.ni,18e5)){this.ni=Date.now();const e=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",t=>{const r=fe(t,"clientMetadata");return r.W().next(i=>{const s=this.Ii(i,18e5),o=i.filter(a=>s.indexOf(a)===-1);return f.forEach(o,a=>r.delete(a.clientId)).next(()=>o)})}).catch(()=>[]);if(this.oi)for(const t of e)this.oi.removeItem(this.Ti(t.clientId))}}hi(){this.ei=this.Hs.enqueueAfterDelay("client_metadata_refresh",4e3,()=>this.ui().then(()=>this.yi()).then(()=>this.hi()))}mi(e){return!!e&&e.ownerId===this.clientId}di(e){return this.Ys?f.resolve(!0):Lr(e).get("owner").next(t=>{if(t!==null&&this.pi(t.leaseTimestampMs,5e3)&&!this.Ei(t.ownerId)){if(this.mi(t)&&this.networkEnabled)return!0;if(!this.mi(t)){if(!t.allowTabSynchronization)throw new y(m.FAILED_PRECONDITION,oa);return!1}}return!(!this.networkEnabled||!this.inForeground)||cs(e).W().next(r=>this.Ii(r,5e3).find(i=>{if(this.clientId!==i.clientId){const s=!this.networkEnabled&&i.networkEnabled,o=!this.inForeground&&i.inForeground,a=this.networkEnabled===i.networkEnabled;if(s||o&&a)return!0}return!1})===void 0)}).next(t=>(this.isPrimary!==t&&v("IndexedDbPersistence",`Client ${t?"is":"is not"} eligible for a primary lease.`),t))}async shutdown(){this.Ds=!1,this.Ai(),this.ei&&(this.ei.cancel(),this.ei=null),this.Ri(),this.bi(),await this.ri.runTransaction("shutdown","readwrite",["owner","clientMetadata"],e=>{const t=new Ua(e,xe.at);return this._i(t).next(()=>this.gi(t))}),this.ri.close(),this.Pi()}Ii(e,t){return e.filter(r=>this.pi(r.updateTimeMs,t)&&!this.Ei(r.clientId))}vi(){return this.runTransaction("getActiveClients","readonly",e=>cs(e).W().next(t=>this.Ii(t,18e5).map(r=>r.clientId)))}get started(){return this.Ds}getMutationQueue(e,t){return Ao.oe(e,this.It,t,this.referenceDelegate)}getTargetCache(){return this.Cs}getRemoteDocumentCache(){return this.remoteDocumentCache}getIndexManager(e){return new wT(e,this.It.re.databaseId)}getDocumentOverlayCache(e){return ko.oe(this.It,e)}getBundleCache(){return this.Ns}runTransaction(e,t,r){v("IndexedDbPersistence","Starting transaction:",e);const i=t==="readonly"?"readonly":"readwrite",s=(o=this.Xs)===15?lT:o===14?Bm:o===13?Vm:o===12?uT:o===11?Um:void E();var o;let a;return this.ri.runTransaction(e,i,s,c=>(a=new Ua(c,this.Ss?this.Ss.next():xe.at),t==="readwrite-primary"?this.fi(a).next(u=>!!u||this.di(a)).next(u=>{if(!u)throw J(`Failed to obtain primary lease for action '${e}'.`),this.isPrimary=!1,this.Hs.enqueueRetryable(()=>this.si(!1)),new y(m.FAILED_PRECONDITION,Zf);return r(a)}).next(u=>this.wi(a).next(()=>u)):this.Vi(a).next(()=>r(a)))).then(c=>(a.raiseOnCommittedEvent(),c))}Vi(e){return Lr(e).get("owner").next(t=>{if(t!==null&&this.pi(t.leaseTimestampMs,5e3)&&!this.Ei(t.ownerId)&&!this.mi(t)&&!(this.Ys||this.allowTabSynchronization&&t.allowTabSynchronization))throw new y(m.FAILED_PRECONDITION,oa)})}wi(e){const t={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return Lr(e).put("owner",t)}static C(){return $e.C()}_i(e){const t=Lr(e);return t.get("owner").next(r=>this.mi(r)?(v("IndexedDbPersistence","Releasing primary lease."),t.delete("owner")):f.resolve())}pi(e,t){const r=Date.now();return!(e<r-t)&&(!(e>r)||(J(`Detected an update time that is in the future: ${e} > ${r}`),!1))}ci(){this.document!==null&&typeof this.document.addEventListener=="function"&&(this.ti=()=>{this.Hs.enqueueAndForget(()=>(this.inForeground=this.document.visibilityState==="visible",this.ui()))},this.document.addEventListener("visibilitychange",this.ti),this.inForeground=this.document.visibilityState==="visible")}Ri(){this.ti&&(this.document.removeEventListener("visibilitychange",this.ti),this.ti=null)}ai(){var e;typeof((e=this.window)===null||e===void 0?void 0:e.addEventListener)=="function"&&(this.Zs=()=>{this.Ai(),mg()&&navigator.appVersion.match(/Version\/1[45]/)&&this.Hs.enterRestrictedMode(!0),this.Hs.enqueueAndForget(()=>this.shutdown())},this.window.addEventListener("pagehide",this.Zs))}bi(){this.Zs&&(this.window.removeEventListener("pagehide",this.Zs),this.Zs=null)}Ei(e){var t;try{const r=((t=this.oi)===null||t===void 0?void 0:t.getItem(this.Ti(e)))!==null;return v("IndexedDbPersistence",`Client '${e}' ${r?"is":"is not"} zombied in LocalStorage`),r}catch(r){return J("IndexedDbPersistence","Failed to get zombied client id.",r),!1}}Ai(){if(this.oi)try{this.oi.setItem(this.Ti(this.clientId),String(Date.now()))}catch(e){J("Failed to set zombie client id.",e)}}Pi(){if(this.oi)try{this.oi.removeItem(this.Ti(this.clientId))}catch{}}Ti(e){return`firestore_zombie_${this.persistenceKey}_${e}`}}function Lr(n){return fe(n,"owner")}function cs(n){return fe(n,"clientMetadata")}function Zc(n,e){let t=n.projectId;return n.isDefaultDatabase||(t+="."+n.database),"firestore/"+e+"/"+t+"/"}/**
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
 */class eu{constructor(e,t,r,i){this.targetId=e,this.fromCache=t,this.Si=r,this.Di=i}static Ci(e,t){let r=R(),i=R();for(const s of t.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new eu(e,t.fromCache,r,i)}}/**
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
 */class Ym{constructor(){this.xi=!1}initialize(e,t){this.Ni=e,this.indexManager=t,this.xi=!0}getDocumentsMatchingQuery(e,t,r,i){return this.ki(e,t).next(s=>s||this.Oi(e,t,i,r)).next(s=>s||this.Mi(e,t))}ki(e,t){if(Pl(t))return f.resolve(null);let r=Pe(t);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(t.limit!==null&&i===1&&(t=Fs(t,null,"F"),r=Pe(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=R(...s);return this.Ni.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(c=>{const u=this.Fi(t,a);return this.$i(t,u,o,c.readTime)?this.ki(e,Fs(t,null,"F")):this.Bi(e,u,t,c)}))})))}Oi(e,t,r,i){return Pl(t)||i.isEqual(A.min())?this.Mi(e,t):this.Ni.getDocuments(e,r).next(s=>{const o=this.Fi(t,s);return this.$i(t,o,r,i)?this.Mi(e,t):(Ra()<=P.DEBUG&&v("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),La(t)),this.Bi(e,o,t,Xf(i,-1)))})}Fi(e,t){let r=new F(lm(e));return t.forEach((i,s)=>{jc(e,s)&&(r=r.add(s))}),r}$i(e,t,r,i){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const s=e.limitType==="F"?t.last():t.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Mi(e,t){return Ra()<=P.DEBUG&&v("QueryEngine","Using full collection scan to execute query:",La(t)),this.Ni.getDocumentsMatchingQuery(e,t,Ve.min())}Bi(e,t,r,i){return this.Ni.getDocumentsMatchingQuery(e,r,i).next(s=>(t.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
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
 */class MT{constructor(e,t,r,i){this.persistence=e,this.Li=t,this.It=i,this.Ui=new Y(N),this.qi=new Wt(s=>wn(s),Ui),this.Ki=new Map,this.Gi=e.getRemoteDocumentCache(),this.Cs=e.getTargetCache(),this.Ns=e.getBundleCache(),this.Qi(r)}Qi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Hm(this.Gi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Gi.setIndexManager(this.indexManager),this.Li.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.Ui))}}function Xm(n,e,t,r){return new MT(n,e,t,r)}async function Jm(n,e){const t=_(n);return await t.persistence.runTransaction("Handle user change","readonly",r=>{let i;return t.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,t.Qi(e),t.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let c=R();for(const u of i){o.push(u.batchId);for(const l of u.mutations)c=c.add(l.key)}for(const u of s){a.push(u.batchId);for(const l of u.mutations)c=c.add(l.key)}return t.localDocuments.getDocuments(r,c).next(u=>({ji:u,removedBatchIds:o,addedBatchIds:a}))})})}function FT(n,e){const t=_(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=t.Gi.newChangeBuffer({trackRemovals:!0});return function(o,a,c,u){const l=c.batch,h=l.keys();let d=f.resolve();return h.forEach(p=>{d=d.next(()=>u.getEntry(a,p)).next(g=>{const b=c.docVersions.get(p);C(b!==null),g.version.compareTo(b)<0&&(l.applyToRemoteDocument(g,c),g.isValidDocument()&&(g.setReadTime(c.commitVersion),u.addEntry(g)))})}),d.next(()=>o.mutationQueue.removeMutationBatch(a,l))}(t,r,e,s).next(()=>s.apply(r)).next(()=>t.mutationQueue.performConsistencyCheck(r)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(o){let a=R();for(let c=0;c<o.mutationResults.length;++c)o.mutationResults[c].transformResults.length>0&&(a=a.add(o.batch.mutations[c].key));return a}(e))).next(()=>t.localDocuments.getDocuments(r,i))})}function Zm(n){const e=_(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Cs.getLastRemoteSnapshotVersion(t))}function UT(n,e){const t=_(n),r=e.snapshotVersion;let i=t.Ui;return t.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=t.Gi.newChangeBuffer({trackRemovals:!0});i=t.Ui;const a=[];e.targetChanges.forEach((l,h)=>{const d=i.get(h);if(!d)return;a.push(t.Cs.removeMatchingKeys(s,l.removedDocuments,h).next(()=>t.Cs.addMatchingKeys(s,l.addedDocuments,h)));let p=d.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.has(h)?p=p.withResumeToken(re.EMPTY_BYTE_STRING,A.min()).withLastLimboFreeSnapshotVersion(A.min()):l.resumeToken.approximateByteSize()>0&&(p=p.withResumeToken(l.resumeToken,r)),i=i.insert(h,p),function(g,b,S){return g.resumeToken.approximateByteSize()===0||b.snapshotVersion.toMicroseconds()-g.snapshotVersion.toMicroseconds()>=3e8?!0:S.addedDocuments.size+S.modifiedDocuments.size+S.removedDocuments.size>0}(d,p,l)&&a.push(t.Cs.updateTargetData(s,p))});let c=Oe(),u=R();if(e.documentUpdates.forEach(l=>{e.resolvedLimboDocuments.has(l)&&a.push(t.persistence.referenceDelegate.updateLimboDocument(s,l))}),a.push(ep(s,o,e.documentUpdates).next(l=>{c=l.Wi,u=l.zi})),!r.isEqual(A.min())){const l=t.Cs.getLastRemoteSnapshotVersion(s).next(h=>t.Cs.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(l)}return f.waitFor(a).next(()=>o.apply(s)).next(()=>t.localDocuments.getLocalViewOfDocuments(s,c,u)).next(()=>c)}).then(s=>(t.Ui=i,s))}function ep(n,e,t){let r=R(),i=R();return t.forEach(s=>r=r.add(s)),e.getEntries(n,r).next(s=>{let o=Oe();return t.forEach((a,c)=>{const u=s.get(a);c.isFoundDocument()!==u.isFoundDocument()&&(i=i.add(a)),c.isNoDocument()&&c.version.isEqual(A.min())?(e.removeEntry(a,c.readTime),o=o.insert(a,c)):!u.isValidDocument()||c.version.compareTo(u.version)>0||c.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(c),o=o.insert(a,c)):v("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",c.version)}),{Wi:o,zi:i}})}function VT(n,e){const t=_(n);return t.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function ir(n,e){const t=_(n);return t.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return t.Cs.getTargetData(r,e).next(s=>s?(i=s,f.resolve(i)):t.Cs.allocateTargetId(r).next(o=>(i=new Ct(e,o,0,r.currentSequenceNumber),t.Cs.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=t.Ui.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(t.Ui=t.Ui.insert(r.targetId,r),t.qi.set(e,r.targetId)),r})}async function sr(n,e,t){const r=_(n),i=r.Ui.get(e),s=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Kt(o))throw o;v("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.Ui=r.Ui.remove(e),r.qi.delete(i.target)}function Bs(n,e,t){const r=_(n);let i=A.min(),s=R();return r.persistence.runTransaction("Execute query","readonly",o=>function(a,c,u){const l=_(a),h=l.qi.get(u);return h!==void 0?f.resolve(l.Ui.get(h)):l.Cs.getTargetData(c,u)}(r,o,Pe(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.Cs.getMatchingKeysForTargetId(o,a.targetId).next(c=>{s=c})}).next(()=>r.Li.getDocumentsMatchingQuery(o,e,t?i:A.min(),t?s:R())).next(a=>(rp(r,um(e),a),{documents:a,Hi:s})))}function tp(n,e){const t=_(n),r=_(t.Cs),i=t.Ui.get(e);return i?Promise.resolve(i.target):t.persistence.runTransaction("Get target data","readonly",s=>r.se(s,e).next(o=>o?o.target:null))}function np(n,e){const t=_(n),r=t.Ki.get(e)||A.min();return t.persistence.runTransaction("Get new document changes","readonly",i=>t.Gi.getAllFromCollectionGroup(i,e,Xf(r,-1),Number.MAX_SAFE_INTEGER)).then(i=>(rp(t,e,i),i))}function rp(n,e,t){let r=n.Ki.get(e)||A.min();t.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),n.Ki.set(e,r)}async function BT(n,e,t,r){const i=_(n);let s=R(),o=Oe();for(const u of t){const l=e.Ji(u.metadata.name);u.document&&(s=s.add(l));const h=e.Yi(u);h.setReadTime(e.Xi(u.metadata.readTime)),o=o.insert(l,h)}const a=i.Gi.newChangeBuffer({trackRemovals:!0}),c=await ir(i,function(u){return Pe(vr(O.fromString(`__bundle__/docs/${u}`)))}(r));return i.persistence.runTransaction("Apply bundle documents","readwrite",u=>ep(u,a,o).next(l=>(a.apply(u),l)).next(l=>i.Cs.removeMatchingKeysForTargetId(u,c.targetId).next(()=>i.Cs.addMatchingKeys(u,s,c.targetId)).next(()=>i.localDocuments.getLocalViewOfDocuments(u,l.Wi,l.zi)).next(()=>l.Wi)))}async function qT(n,e,t=R()){const r=await ir(n,Pe(Qc(e.bundledQuery))),i=_(n);return i.persistence.runTransaction("Save named query","readwrite",s=>{const o=ce(e.readTime);if(r.snapshotVersion.compareTo(o)>=0)return i.Ns.saveNamedQuery(s,e);const a=r.withResumeToken(re.EMPTY_BYTE_STRING,o);return i.Ui=i.Ui.insert(a.targetId,a),i.Cs.updateTargetData(s,a).next(()=>i.Cs.removeMatchingKeysForTargetId(s,r.targetId)).next(()=>i.Cs.addMatchingKeys(s,t,r.targetId)).next(()=>i.Ns.saveNamedQuery(s,e))})}function ah(n,e){return`firestore_clients_${n}_${e}`}function ch(n,e,t){let r=`firestore_mutations_${n}_${t}`;return e.isAuthenticated()&&(r+=`_${e.uid}`),r}function aa(n,e){return`firestore_targets_${n}_${e}`}class qs{constructor(e,t,r,i){this.user=e,this.batchId=t,this.state=r,this.error=i}static Zi(e,t,r){const i=JSON.parse(r);let s,o=typeof i=="object"&&["pending","acknowledged","rejected"].indexOf(i.state)!==-1&&(i.error===void 0||typeof i.error=="object");return o&&i.error&&(o=typeof i.error.message=="string"&&typeof i.error.code=="string",o&&(s=new y(i.error.code,i.error.message))),o?new qs(e,t,i.state,s):(J("SharedClientState",`Failed to parse mutation state for ID '${t}': ${r}`),null)}tr(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class Yr{constructor(e,t,r){this.targetId=e,this.state=t,this.error=r}static Zi(e,t){const r=JSON.parse(t);let i,s=typeof r=="object"&&["not-current","current","rejected"].indexOf(r.state)!==-1&&(r.error===void 0||typeof r.error=="object");return s&&r.error&&(s=typeof r.error.message=="string"&&typeof r.error.code=="string",s&&(i=new y(r.error.code,r.error.message))),s?new Yr(e,r.state,i):(J("SharedClientState",`Failed to parse target state for ID '${e}': ${t}`),null)}tr(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class $s{constructor(e,t){this.clientId=e,this.activeTargetIds=t}static Zi(e,t){const r=JSON.parse(t);let i=typeof r=="object"&&r.activeTargetIds instanceof Array,s=So();for(let o=0;i&&o<r.activeTargetIds.length;++o)i=rm(r.activeTargetIds[o]),s=s.add(r.activeTargetIds[o]);return i?new $s(e,s):(J("SharedClientState",`Failed to parse client data for instance '${e}': ${t}`),null)}}class tu{constructor(e,t){this.clientId=e,this.onlineState=t}static Zi(e){const t=JSON.parse(e);return typeof t=="object"&&["Unknown","Online","Offline"].indexOf(t.onlineState)!==-1&&typeof t.clientId=="string"?new tu(t.clientId,t.onlineState):(J("SharedClientState",`Failed to parse online state: ${e}`),null)}}class Va{constructor(){this.activeTargetIds=So()}er(e){this.activeTargetIds=this.activeTargetIds.add(e)}nr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}tr(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class ca{constructor(e,t,r,i,s){this.window=e,this.Hs=t,this.persistenceKey=r,this.sr=i,this.syncEngine=null,this.onlineStateHandler=null,this.sequenceNumberHandler=null,this.ir=this.rr.bind(this),this.ur=new Y(N),this.started=!1,this.cr=[];const o=r.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");this.storage=this.window.localStorage,this.currentUser=s,this.ar=ah(this.persistenceKey,this.sr),this.hr=function(a){return`firestore_sequence_number_${a}`}(this.persistenceKey),this.ur=this.ur.insert(this.sr,new Va),this.lr=new RegExp(`^firestore_clients_${o}_([^_]*)$`),this.dr=new RegExp(`^firestore_mutations_${o}_(\\d+)(?:_(.*))?$`),this._r=new RegExp(`^firestore_targets_${o}_(\\d+)$`),this.wr=function(a){return`firestore_online_state_${a}`}(this.persistenceKey),this.mr=function(a){return`firestore_bundle_loaded_v2_${a}`}(this.persistenceKey),this.window.addEventListener("storage",this.ir)}static C(e){return!(!e||!e.localStorage)}async start(){const e=await this.syncEngine.vi();for(const r of e){if(r===this.sr)continue;const i=this.getItem(ah(this.persistenceKey,r));if(i){const s=$s.Zi(r,i);s&&(this.ur=this.ur.insert(s.clientId,s))}}this.gr();const t=this.storage.getItem(this.wr);if(t){const r=this.yr(t);r&&this.pr(r)}for(const r of this.cr)this.rr(r);this.cr=[],this.window.addEventListener("pagehide",()=>this.shutdown()),this.started=!0}writeSequenceNumber(e){this.setItem(this.hr,JSON.stringify(e))}getAllActiveQueryTargets(){return this.Ir(this.ur)}isActiveQueryTarget(e){let t=!1;return this.ur.forEach((r,i)=>{i.activeTargetIds.has(e)&&(t=!0)}),t}addPendingMutation(e){this.Tr(e,"pending")}updateMutationState(e,t,r){this.Tr(e,t,r),this.Er(e)}addLocalQueryTarget(e){let t="not-current";if(this.isActiveQueryTarget(e)){const r=this.storage.getItem(aa(this.persistenceKey,e));if(r){const i=Yr.Zi(e,r);i&&(t=i.state)}}return this.Ar.er(e),this.gr(),t}removeLocalQueryTarget(e){this.Ar.nr(e),this.gr()}isLocalQueryTarget(e){return this.Ar.activeTargetIds.has(e)}clearQueryState(e){this.removeItem(aa(this.persistenceKey,e))}updateQueryState(e,t,r){this.Rr(e,t,r)}handleUserChange(e,t,r){t.forEach(i=>{this.Er(i)}),this.currentUser=e,r.forEach(i=>{this.addPendingMutation(i)})}setOnlineState(e){this.br(e)}notifyBundleLoaded(e){this.Pr(e)}shutdown(){this.started&&(this.window.removeEventListener("storage",this.ir),this.removeItem(this.ar),this.started=!1)}getItem(e){const t=this.storage.getItem(e);return v("SharedClientState","READ",e,t),t}setItem(e,t){v("SharedClientState","SET",e,t),this.storage.setItem(e,t)}removeItem(e){v("SharedClientState","REMOVE",e),this.storage.removeItem(e)}rr(e){const t=e;if(t.storageArea===this.storage){if(v("SharedClientState","EVENT",t.key,t.newValue),t.key===this.ar)return void J("Received WebStorage notification for local change. Another client might have garbage-collected our state");this.Hs.enqueueRetryable(async()=>{if(this.started){if(t.key!==null){if(this.lr.test(t.key)){if(t.newValue==null){const r=this.vr(t.key);return this.Vr(r,null)}{const r=this.Sr(t.key,t.newValue);if(r)return this.Vr(r.clientId,r)}}else if(this.dr.test(t.key)){if(t.newValue!==null){const r=this.Dr(t.key,t.newValue);if(r)return this.Cr(r)}}else if(this._r.test(t.key)){if(t.newValue!==null){const r=this.Nr(t.key,t.newValue);if(r)return this.kr(r)}}else if(t.key===this.wr){if(t.newValue!==null){const r=this.yr(t.newValue);if(r)return this.pr(r)}}else if(t.key===this.hr){const r=function(i){let s=xe.at;if(i!=null)try{const o=JSON.parse(i);C(typeof o=="number"),s=o}catch(o){J("SharedClientState","Failed to read sequence number from WebStorage",o)}return s}(t.newValue);r!==xe.at&&this.sequenceNumberHandler(r)}else if(t.key===this.mr){const r=this.Or(t.newValue);await Promise.all(r.map(i=>this.syncEngine.Mr(i)))}}}else this.cr.push(t)})}}get Ar(){return this.ur.get(this.sr)}gr(){this.setItem(this.ar,this.Ar.tr())}Tr(e,t,r){const i=new qs(this.currentUser,e,t,r),s=ch(this.persistenceKey,this.currentUser,e);this.setItem(s,i.tr())}Er(e){const t=ch(this.persistenceKey,this.currentUser,e);this.removeItem(t)}br(e){const t={clientId:this.sr,onlineState:e};this.storage.setItem(this.wr,JSON.stringify(t))}Rr(e,t,r){const i=aa(this.persistenceKey,e),s=new Yr(e,t,r);this.setItem(i,s.tr())}Pr(e){const t=JSON.stringify(Array.from(e));this.setItem(this.mr,t)}vr(e){const t=this.lr.exec(e);return t?t[1]:null}Sr(e,t){const r=this.vr(e);return $s.Zi(r,t)}Dr(e,t){const r=this.dr.exec(e),i=Number(r[1]),s=r[2]!==void 0?r[2]:null;return qs.Zi(new oe(s),i,t)}Nr(e,t){const r=this._r.exec(e),i=Number(r[1]);return Yr.Zi(i,t)}yr(e){return tu.Zi(e)}Or(e){return JSON.parse(e)}async Cr(e){if(e.user.uid===this.currentUser.uid)return this.syncEngine.Fr(e.batchId,e.state,e.error);v("SharedClientState",`Ignoring mutation for non-active user ${e.user.uid}`)}kr(e){return this.syncEngine.$r(e.targetId,e.state,e.error)}Vr(e,t){const r=t?this.ur.insert(e,t):this.ur.remove(e),i=this.Ir(this.ur),s=this.Ir(r),o=[],a=[];return s.forEach(c=>{i.has(c)||o.push(c)}),i.forEach(c=>{s.has(c)||a.push(c)}),this.syncEngine.Br(o,a).then(()=>{this.ur=r})}pr(e){this.ur.get(e.clientId)&&this.onlineStateHandler(e.onlineState)}Ir(e){let t=So();return e.forEach((r,i)=>{t=t.unionWith(i.activeTargetIds)}),t}}class ip{constructor(){this.Lr=new Va,this.Ur={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e){return this.Lr.er(e),this.Ur[e]||"not-current"}updateQueryState(e,t,r){this.Ur[e]=t}removeLocalQueryTarget(e){this.Lr.nr(e)}isLocalQueryTarget(e){return this.Lr.activeTargetIds.has(e)}clearQueryState(e){delete this.Ur[e]}getAllActiveQueryTargets(){return this.Lr.activeTargetIds}isActiveQueryTarget(e){return this.Lr.activeTargetIds.has(e)}start(){return this.Lr=new Va,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class $T{qr(e){}shutdown(){}}/**
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
 */class uh{constructor(){this.Kr=()=>this.Gr(),this.Qr=()=>this.jr(),this.Wr=[],this.zr()}qr(e){this.Wr.push(e)}shutdown(){window.removeEventListener("online",this.Kr),window.removeEventListener("offline",this.Qr)}zr(){window.addEventListener("online",this.Kr),window.addEventListener("offline",this.Qr)}Gr(){v("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.Wr)e(0)}jr(){v("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.Wr)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */const jT={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class GT{constructor(e){this.Hr=e.Hr,this.Jr=e.Jr}Yr(e){this.Xr=e}Zr(e){this.eo=e}onMessage(e){this.no=e}close(){this.Jr()}send(e){this.Hr(e)}so(){this.Xr()}io(e){this.eo(e)}ro(e){this.no(e)}}/**
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
 */class KT extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http";this.oo=t+"://"+e.host,this.uo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get co(){return!1}ao(e,t,r,i,s){const o=this.ho(e,t);v("RestConnection","Sending: ",o,r);const a={};return this.lo(a,i,s),this.fo(e,o,a,r).then(c=>(v("RestConnection","Received: ",c),c),c=>{throw Zn("RestConnection",`${e} failed with error: `,c,"url: ",o,"request:",r),c})}_o(e,t,r,i,s,o){return this.ao(e,t,r,i,s)}lo(e,t,r){e["X-Goog-Api-Client"]="gl-js/ fire/"+yr,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((i,s)=>e[s]=i),r&&r.headers.forEach((i,s)=>e[s]=i)}ho(e,t){const r=jT[e];return`${this.oo}/v1/${t}:${r}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}fo(e,t,r,i){return new Promise((s,o)=>{const a=new jb;a.setWithCredentials(!0),a.listenOnce(Bb.COMPLETE,()=>{var u;try{switch(a.getLastErrorCode()){case ia.NO_ERROR:const l=a.getResponseJson();v("Connection","XHR received:",JSON.stringify(l)),s(l);break;case ia.TIMEOUT:v("Connection",'RPC "'+e+'" timed out'),o(new y(m.DEADLINE_EXCEEDED,"Request time out"));break;case ia.HTTP_ERROR:const h=a.getStatus();if(v("Connection",'RPC "'+e+'" failed with status:',h,"response text:",a.getResponseText()),h>0){let d=a.getResponseJson();Array.isArray(d)&&(d=d[0]);const p=(u=d)===null||u===void 0?void 0:u.error;if(p&&p.status&&p.message){const g=function(b){const S=b.toLowerCase().replace(/_/g,"-");return Object.values(m).indexOf(S)>=0?S:m.UNKNOWN}(p.status);o(new y(g,p.message))}else o(new y(m.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new y(m.UNAVAILABLE,"Connection failed."));break;default:E()}}finally{v("Connection",'RPC "'+e+'" completed.')}});const c=JSON.stringify(i);a.send(t,"POST",c,r,15)})}wo(e,t,r){const i=[this.oo,"/","google.firestore.v1.Firestore","/",e,"/channel"],s=Ub(),o=Vb(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new $b({})),this.lo(a.initMessageHeaders,t,r),a.encodeInitMessageHeaders=!0;const c=i.join("");v("Connection","Creating WebChannel: "+c,a);const u=s.createWebChannel(c,a);let l=!1,h=!1;const d=new GT({Hr:g=>{h?v("Connection","Not sending because WebChannel is closed:",g):(l||(v("Connection","Opening WebChannel transport."),u.open(),l=!0),v("Connection","WebChannel sending:",g),u.send(g))},Jr:()=>u.close()}),p=(g,b,S)=>{g.listen(b,M=>{try{S(M)}catch(U){setTimeout(()=>{throw U},0)}})};return p(u,rs.EventType.OPEN,()=>{h||v("Connection","WebChannel transport opened.")}),p(u,rs.EventType.CLOSE,()=>{h||(h=!0,v("Connection","WebChannel transport closed"),d.io())}),p(u,rs.EventType.ERROR,g=>{h||(h=!0,Zn("Connection","WebChannel transport errored:",g),d.io(new y(m.UNAVAILABLE,"The operation could not be completed")))}),p(u,rs.EventType.MESSAGE,g=>{var b;if(!h){const S=g.data[0];C(!!S);const M=S,U=M.error||((b=M[0])===null||b===void 0?void 0:b.error);if(U){v("Connection","WebChannel received error:",U);const V=U.status;let te=function(q){const pe=ee[q];if(pe!==void 0)return _m(pe)}(V),z=U.message;te===void 0&&(te=m.INTERNAL,z="Unknown error status: "+V+" with message "+U.message),h=!0,d.io(new y(te,z)),u.close()}else v("Connection","WebChannel received:",S),d.ro(S)}}),p(o,qb.STAT_EVENT,g=>{g.stat===wl.PROXY?v("Connection","Detected buffering proxy"):g.stat===wl.NOPROXY&&v("Connection","Detected no buffering proxy")}),setTimeout(()=>{d.so()},0),d}}/**
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
 */function sp(){return typeof window<"u"?window:null}function ys(){return typeof document<"u"?document:null}/**
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
 */function ji(n){return new ME(n,!0)}class nu{constructor(e,t,r=1e3,i=1.5,s=6e4){this.Hs=e,this.timerId=t,this.mo=r,this.yo=i,this.po=s,this.Io=0,this.To=null,this.Eo=Date.now(),this.reset()}reset(){this.Io=0}Ao(){this.Io=this.po}Ro(e){this.cancel();const t=Math.floor(this.Io+this.bo()),r=Math.max(0,Date.now()-this.Eo),i=Math.max(0,t-r);i>0&&v("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Io} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.To=this.Hs.enqueueAfterDelay(this.timerId,i,()=>(this.Eo=Date.now(),e())),this.Io*=this.yo,this.Io<this.mo&&(this.Io=this.mo),this.Io>this.po&&(this.Io=this.po)}Po(){this.To!==null&&(this.To.skipDelay(),this.To=null)}cancel(){this.To!==null&&(this.To.cancel(),this.To=null)}bo(){return(Math.random()-.5)*this.Io}}/**
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
 */class op{constructor(e,t,r,i,s,o,a,c){this.Hs=e,this.vo=r,this.Vo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.So=0,this.Do=null,this.Co=null,this.stream=null,this.xo=new nu(e,t)}No(){return this.state===1||this.state===5||this.ko()}ko(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Oo()}async stop(){this.No()&&await this.close(0)}Mo(){this.state=0,this.xo.reset()}Fo(){this.ko()&&this.Do===null&&(this.Do=this.Hs.enqueueAfterDelay(this.vo,6e4,()=>this.$o()))}Bo(e){this.Lo(),this.stream.send(e)}async $o(){if(this.ko())return this.close(0)}Lo(){this.Do&&(this.Do.cancel(),this.Do=null)}Uo(){this.Co&&(this.Co.cancel(),this.Co=null)}async close(e,t){this.Lo(),this.Uo(),this.xo.cancel(),this.So++,e!==4?this.xo.reset():t&&t.code===m.RESOURCE_EXHAUSTED?(J(t.toString()),J("Using maximum backoff delay to prevent overloading the backend."),this.xo.Ao()):t&&t.code===m.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.qo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Zr(t)}qo(){}auth(){this.state=1;const e=this.Ko(this.So),t=this.So;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.So===t&&this.Go(r,i)},r=>{e(()=>{const i=new y(m.UNKNOWN,"Fetching auth token failed: "+r.message);return this.Qo(i)})})}Go(e,t){const r=this.Ko(this.So);this.stream=this.jo(e,t),this.stream.Yr(()=>{r(()=>(this.state=2,this.Co=this.Hs.enqueueAfterDelay(this.Vo,1e4,()=>(this.ko()&&(this.state=3),Promise.resolve())),this.listener.Yr()))}),this.stream.Zr(i=>{r(()=>this.Qo(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}Oo(){this.state=5,this.xo.Ro(async()=>{this.state=0,this.start()})}Qo(e){return v("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Ko(e){return t=>{this.Hs.enqueueAndForget(()=>this.So===e?t():(v("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class WT extends op{constructor(e,t,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,i,o),this.It=s}jo(e,t){return this.connection.wo("Listen",e,t)}onMessage(e){this.xo.reset();const t=VE(this.It,e),r=function(i){if(!("targetChange"in i))return A.min();const s=i.targetChange;return s.targetIds&&s.targetIds.length?A.min():s.readTime?ce(s.readTime):A.min()}(e);return this.listener.Wo(t,r)}zo(e){const t={};t.database=yi(this.It),t.addTarget=function(i,s){let o;const a=s.target;return o=Ls(a)?{documents:xm(i,a)}:{query:Om(i,a)},o.targetId=s.targetId,s.resumeToken.approximateByteSize()>0?o.resumeToken=Am(i,s.resumeToken):s.snapshotVersion.compareTo(A.min())>0&&(o.readTime=pi(i,s.snapshotVersion.toTimestamp())),o}(this.It,e);const r=qE(this.It,e);r&&(t.labels=r),this.Bo(t)}Ho(e){const t={};t.database=yi(this.It),t.removeTarget=e,this.Bo(t)}}class zT extends op{constructor(e,t,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,i,o),this.It=s,this.Jo=!1}get Yo(){return this.Jo}start(){this.Jo=!1,this.lastStreamToken=void 0,super.start()}qo(){this.Jo&&this.Xo([])}jo(e,t){return this.connection.wo("Write",e,t)}onMessage(e){if(C(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Jo){this.xo.reset();const t=BE(e.writeResults,e.commitTime),r=ce(e.commitTime);return this.listener.Zo(r,t)}return C(!e.writeResults||e.writeResults.length===0),this.Jo=!0,this.listener.tu()}eu(){const e={};e.database=yi(this.It),this.Bo(e)}Xo(e){const t={streamToken:this.lastStreamToken,writes:e.map(r=>vi(this.It,r))};this.Bo(t)}}/**
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
 */class HT extends class{}{constructor(e,t,r,i){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.It=i,this.nu=!1}su(){if(this.nu)throw new y(m.FAILED_PRECONDITION,"The client has already been terminated.")}ao(e,t,r){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.connection.ao(e,t,r,i,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===m.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new y(m.UNKNOWN,i.toString())})}_o(e,t,r,i){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection._o(e,t,r,s,o,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===m.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new y(m.UNKNOWN,s.toString())})}terminate(){this.nu=!0}}class QT{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.iu=0,this.ru=null,this.ou=!0}uu(){this.iu===0&&(this.cu("Unknown"),this.ru=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.ru=null,this.au("Backend didn't respond within 10 seconds."),this.cu("Offline"),Promise.resolve())))}hu(e){this.state==="Online"?this.cu("Unknown"):(this.iu++,this.iu>=1&&(this.lu(),this.au(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.cu("Offline")))}set(e){this.lu(),this.iu=0,e==="Online"&&(this.ou=!1),this.cu(e)}cu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}au(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ou?(J(t),this.ou=!1):v("OnlineStateTracker",t)}lu(){this.ru!==null&&(this.ru.cancel(),this.ru=null)}}/**
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
 */class YT{constructor(e,t,r,i,s){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.fu=[],this.du=new Map,this._u=new Set,this.wu=[],this.mu=s,this.mu.qr(o=>{r.enqueueAndForget(async()=>{zt(this)&&(v("RemoteStore","Restarting streams for network reachability change."),await async function(a){const c=_(a);c._u.add(4),await _r(c),c.gu.set("Unknown"),c._u.delete(4),await Gi(c)}(this))})}),this.gu=new QT(r,i)}}async function Gi(n){if(zt(n))for(const e of n.wu)await e(!0)}async function _r(n){for(const e of n.wu)await e(!1)}function Do(n,e){const t=_(n);t.du.has(e.targetId)||(t.du.set(e.targetId,e),su(t)?iu(t):Er(t).ko()&&ru(t,e))}function wi(n,e){const t=_(n),r=Er(t);t.du.delete(e),r.ko()&&ap(t,e),t.du.size===0&&(r.ko()?r.Fo():zt(t)&&t.gu.set("Unknown"))}function ru(n,e){n.yu.Mt(e.targetId),Er(n).zo(e)}function ap(n,e){n.yu.Mt(e),Er(n).Ho(e)}function iu(n){n.yu=new OE({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),se:e=>n.du.get(e)||null}),Er(n).start(),n.gu.uu()}function su(n){return zt(n)&&!Er(n).No()&&n.du.size>0}function zt(n){return _(n)._u.size===0}function cp(n){n.yu=void 0}async function XT(n){n.du.forEach((e,t)=>{ru(n,e)})}async function JT(n,e){cp(n),su(n)?(n.gu.hu(e),iu(n)):n.gu.set("Unknown")}async function ZT(n,e,t){if(n.gu.set("Online"),e instanceof km&&e.state===2&&e.cause)try{await async function(r,i){const s=i.cause;for(const o of i.targetIds)r.du.has(o)&&(await r.remoteSyncer.rejectListen(o,s),r.du.delete(o),r.yu.removeTarget(o))}(n,e)}catch(r){v("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await js(n,r)}else if(e instanceof ps?n.yu.Gt(e):e instanceof Sm?n.yu.Yt(e):n.yu.Wt(e),!t.isEqual(A.min()))try{const r=await Zm(n.localStore);t.compareTo(r)>=0&&await function(i,s){const o=i.yu.te(s);return o.targetChanges.forEach((a,c)=>{if(a.resumeToken.approximateByteSize()>0){const u=i.du.get(c);u&&i.du.set(c,u.withResumeToken(a.resumeToken,s))}}),o.targetMismatches.forEach(a=>{const c=i.du.get(a);if(!c)return;i.du.set(a,c.withResumeToken(re.EMPTY_BYTE_STRING,c.snapshotVersion)),ap(i,a);const u=new Ct(c.target,a,1,c.sequenceNumber);ru(i,u)}),i.remoteSyncer.applyRemoteEvent(o)}(n,t)}catch(r){v("RemoteStore","Failed to raise snapshot:",r),await js(n,r)}}async function js(n,e,t){if(!Kt(e))throw e;n._u.add(1),await _r(n),n.gu.set("Offline"),t||(t=()=>Zm(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{v("RemoteStore","Retrying IndexedDB access"),await t(),n._u.delete(1),await Gi(n)})}function up(n,e){return e().catch(t=>js(n,t,e))}async function br(n){const e=_(n),t=Ut(e);let r=e.fu.length>0?e.fu[e.fu.length-1].batchId:-1;for(;e0(e);)try{const i=await VT(e.localStore,r);if(i===null){e.fu.length===0&&t.Fo();break}r=i.batchId,t0(e,i)}catch(i){await js(e,i)}lp(e)&&hp(e)}function e0(n){return zt(n)&&n.fu.length<10}function t0(n,e){n.fu.push(e);const t=Ut(n);t.ko()&&t.Yo&&t.Xo(e.mutations)}function lp(n){return zt(n)&&!Ut(n).No()&&n.fu.length>0}function hp(n){Ut(n).start()}async function n0(n){Ut(n).eu()}async function r0(n){const e=Ut(n);for(const t of n.fu)e.Xo(t.mutations)}async function i0(n,e,t){const r=n.fu.shift(),i=zc.from(r,e,t);await up(n,()=>n.remoteSyncer.applySuccessfulWrite(i)),await br(n)}async function s0(n,e){e&&Ut(n).Yo&&await async function(t,r){if(i=r.code,Im(i)&&i!==m.ABORTED){const s=t.fu.shift();Ut(t).Mo(),await up(t,()=>t.remoteSyncer.rejectFailedWrite(s.batchId,r)),await br(t)}var i}(n,e),lp(n)&&hp(n)}async function lh(n,e){const t=_(n);t.asyncQueue.verifyOperationInProgress(),v("RemoteStore","RemoteStore received new credentials");const r=zt(t);t._u.add(3),await _r(t),r&&t.gu.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t._u.delete(3),await Gi(t)}async function Ba(n,e){const t=_(n);e?(t._u.delete(2),await Gi(t)):e||(t._u.add(2),await _r(t),t.gu.set("Unknown"))}function Er(n){return n.pu||(n.pu=function(e,t,r){const i=_(e);return i.su(),new WT(t,i.connection,i.authCredentials,i.appCheckCredentials,i.It,r)}(n.datastore,n.asyncQueue,{Yr:XT.bind(null,n),Zr:JT.bind(null,n),Wo:ZT.bind(null,n)}),n.wu.push(async e=>{e?(n.pu.Mo(),su(n)?iu(n):n.gu.set("Unknown")):(await n.pu.stop(),cp(n))})),n.pu}function Ut(n){return n.Iu||(n.Iu=function(e,t,r){const i=_(e);return i.su(),new zT(t,i.connection,i.authCredentials,i.appCheckCredentials,i.It,r)}(n.datastore,n.asyncQueue,{Yr:n0.bind(null,n),Zr:s0.bind(null,n),tu:r0.bind(null,n),Zo:i0.bind(null,n)}),n.wu.push(async e=>{e?(n.Iu.Mo(),await br(n)):(await n.Iu.stop(),n.fu.length>0&&(v("RemoteStore",`Stopping write stream with ${n.fu.length} pending writes`),n.fu=[]))})),n.Iu}/**
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
 */class ou{constructor(e,t,r,i,s){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new ae,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,t,r,i,s){const o=Date.now()+r,a=new ou(e,t,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new y(m.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Tr(n,e){if(J("AsyncQueue",`${e}: ${n}`),Kt(n))return new y(m.UNAVAILABLE,`${e}: ${n}`);throw n}/**
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
 */class Hn{constructor(e){this.comparator=e?(t,r)=>e(t,r)||I.comparator(t.key,r.key):(t,r)=>I.comparator(t.key,r.key),this.keyedMap=Br(),this.sortedSet=new Y(this.comparator)}static emptySet(e){return new Hn(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,r)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Hn)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const i=t.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new Hn;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
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
 */class hh{constructor(){this.Tu=new Y(I.comparator)}track(e){const t=e.doc.key,r=this.Tu.get(t);r?e.type!==0&&r.type===3?this.Tu=this.Tu.insert(t,e):e.type===3&&r.type!==1?this.Tu=this.Tu.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.Tu=this.Tu.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.Tu=this.Tu.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.Tu=this.Tu.remove(t):e.type===1&&r.type===2?this.Tu=this.Tu.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.Tu=this.Tu.insert(t,{type:2,doc:e.doc}):E():this.Tu=this.Tu.insert(t,e)}Eu(){const e=[];return this.Tu.inorderTraversal((t,r)=>{e.push(r)}),e}}class or{constructor(e,t,r,i,s,o,a,c,u){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=u}static fromInitialDocuments(e,t,r,i,s){const o=[];return t.forEach(a=>{o.push({type:0,doc:a})}),new or(e,t,Hn.emptySet(t),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Vi(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let i=0;i<t.length;i++)if(t[i].type!==r[i].type||!t[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
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
 */class o0{constructor(){this.Au=void 0,this.listeners=[]}}class a0{constructor(){this.queries=new Wt(e=>cm(e),Vi),this.onlineState="Unknown",this.Ru=new Set}}async function au(n,e){const t=_(n),r=e.query;let i=!1,s=t.queries.get(r);if(s||(i=!0,s=new o0),i)try{s.Au=await t.onListen(r)}catch(o){const a=Tr(o,`Initialization of query '${La(e.query)}' failed`);return void e.onError(a)}t.queries.set(r,s),s.listeners.push(e),e.bu(t.onlineState),s.Au&&e.Pu(s.Au)&&uu(t)}async function cu(n,e){const t=_(n),r=e.query;let i=!1;const s=t.queries.get(r);if(s){const o=s.listeners.indexOf(e);o>=0&&(s.listeners.splice(o,1),i=s.listeners.length===0)}if(i)return t.queries.delete(r),t.onUnlisten(r)}function c0(n,e){const t=_(n);let r=!1;for(const i of e){const s=i.query,o=t.queries.get(s);if(o){for(const a of o.listeners)a.Pu(i)&&(r=!0);o.Au=i}}r&&uu(t)}function u0(n,e,t){const r=_(n),i=r.queries.get(e);if(i)for(const s of i.listeners)s.onError(t);r.queries.delete(e)}function uu(n){n.Ru.forEach(e=>{e.next()})}class lu{constructor(e,t,r){this.query=e,this.vu=t,this.Vu=!1,this.Su=null,this.onlineState="Unknown",this.options=r||{}}Pu(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new or(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Vu?this.Du(e)&&(this.vu.next(e),t=!0):this.Cu(e,this.onlineState)&&(this.xu(e),t=!0),this.Su=e,t}onError(e){this.vu.error(e)}bu(e){this.onlineState=e;let t=!1;return this.Su&&!this.Vu&&this.Cu(this.Su,e)&&(this.xu(this.Su),t=!0),t}Cu(e,t){if(!e.fromCache)return!0;const r=t!=="Offline";return(!this.options.Nu||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Du(e){if(e.docChanges.length>0)return!0;const t=this.Su&&this.Su.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}xu(e){e=or.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Vu=!0,this.vu.next(e)}}/**
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
 */class l0{constructor(e,t){this.ku=e,this.byteLength=t}Ou(){return"metadata"in this.ku}}/**
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
 */class dh{constructor(e){this.It=e}Ji(e){return et(this.It,e)}Yi(e){return e.metadata.exists?Rm(this.It,e.document,!1):B.newNoDocument(this.Ji(e.metadata.name),this.Xi(e.metadata.readTime))}Xi(e){return ce(e)}}class h0{constructor(e,t,r){this.Mu=e,this.localStore=t,this.It=r,this.queries=[],this.documents=[],this.collectionGroups=new Set,this.progress=dp(e)}Fu(e){this.progress.bytesLoaded+=e.byteLength;let t=this.progress.documentsLoaded;if(e.ku.namedQuery)this.queries.push(e.ku.namedQuery);else if(e.ku.documentMetadata){this.documents.push({metadata:e.ku.documentMetadata}),e.ku.documentMetadata.exists||++t;const r=O.fromString(e.ku.documentMetadata.name);this.collectionGroups.add(r.get(r.length-2))}else e.ku.document&&(this.documents[this.documents.length-1].document=e.ku.document,++t);return t!==this.progress.documentsLoaded?(this.progress.documentsLoaded=t,Object.assign({},this.progress)):null}$u(e){const t=new Map,r=new dh(this.It);for(const i of e)if(i.metadata.queries){const s=r.Ji(i.metadata.name);for(const o of i.metadata.queries){const a=(t.get(o)||R()).add(s);t.set(o,a)}}return t}async complete(){const e=await BT(this.localStore,new dh(this.It),this.documents,this.Mu.id),t=this.$u(this.documents);for(const r of this.queries)await qT(this.localStore,r,t.get(r.name));return this.progress.taskState="Success",{progress:this.progress,Bu:this.collectionGroups,Lu:e}}}function dp(n){return{taskState:"Running",documentsLoaded:0,bytesLoaded:0,totalDocuments:n.totalDocuments,totalBytes:n.totalBytes}}/**
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
 */class fp{constructor(e){this.key=e}}class mp{constructor(e){this.key=e}}class pp{constructor(e,t){this.query=e,this.Uu=t,this.qu=null,this.hasCachedResults=!1,this.current=!1,this.Ku=R(),this.mutatedKeys=R(),this.Gu=lm(e),this.Qu=new Hn(this.Gu)}get ju(){return this.Uu}Wu(e,t){const r=t?t.zu:new hh,i=t?t.Qu:this.Qu;let s=t?t.mutatedKeys:this.mutatedKeys,o=i,a=!1;const c=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,u=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((l,h)=>{const d=i.get(l),p=jc(this.query,h)?h:null,g=!!d&&this.mutatedKeys.has(d.key),b=!!p&&(p.hasLocalMutations||this.mutatedKeys.has(p.key)&&p.hasCommittedMutations);let S=!1;d&&p?d.data.isEqual(p.data)?g!==b&&(r.track({type:3,doc:p}),S=!0):this.Hu(d,p)||(r.track({type:2,doc:p}),S=!0,(c&&this.Gu(p,c)>0||u&&this.Gu(p,u)<0)&&(a=!0)):!d&&p?(r.track({type:0,doc:p}),S=!0):d&&!p&&(r.track({type:1,doc:d}),S=!0,(c||u)&&(a=!0)),S&&(p?(o=o.add(p),s=b?s.add(l):s.delete(l)):(o=o.delete(l),s=s.delete(l)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const l=this.query.limitType==="F"?o.last():o.first();o=o.delete(l.key),s=s.delete(l.key),r.track({type:1,doc:l})}return{Qu:o,zu:r,$i:a,mutatedKeys:s}}Hu(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r){const i=this.Qu;this.Qu=e.Qu,this.mutatedKeys=e.mutatedKeys;const s=e.zu.Eu();s.sort((u,l)=>function(h,d){const p=g=>{switch(g){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return E()}};return p(h)-p(d)}(u.type,l.type)||this.Gu(u.doc,l.doc)),this.Ju(r);const o=t?this.Yu():[],a=this.Ku.size===0&&this.current?1:0,c=a!==this.qu;return this.qu=a,s.length!==0||c?{snapshot:new or(this.query,e.Qu,i,s,e.mutatedKeys,a===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),Xu:o}:{Xu:o}}bu(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Qu:this.Qu,zu:new hh,mutatedKeys:this.mutatedKeys,$i:!1},!1)):{Xu:[]}}Zu(e){return!this.Uu.has(e)&&!!this.Qu.has(e)&&!this.Qu.get(e).hasLocalMutations}Ju(e){e&&(e.addedDocuments.forEach(t=>this.Uu=this.Uu.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Uu=this.Uu.delete(t)),this.current=e.current)}Yu(){if(!this.current)return[];const e=this.Ku;this.Ku=R(),this.Qu.forEach(r=>{this.Zu(r.key)&&(this.Ku=this.Ku.add(r.key))});const t=[];return e.forEach(r=>{this.Ku.has(r)||t.push(new mp(r))}),this.Ku.forEach(r=>{e.has(r)||t.push(new fp(r))}),t}tc(e){this.Uu=e.Hi,this.Ku=R();const t=this.Wu(e.documents);return this.applyChanges(t,!0)}ec(){return or.fromInitialDocuments(this.query,this.Qu,this.mutatedKeys,this.qu===0,this.hasCachedResults)}}class d0{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class f0{constructor(e){this.key=e,this.nc=!1}}class m0{constructor(e,t,r,i,s,o){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.sc={},this.ic=new Wt(a=>cm(a),Vi),this.rc=new Map,this.oc=new Set,this.uc=new Y(I.comparator),this.cc=new Map,this.ac=new Xc,this.hc={},this.lc=new Map,this.fc=Tn.vn(),this.onlineState="Unknown",this.dc=void 0}get isPrimaryClient(){return this.dc===!0}}async function p0(n,e){const t=pu(n);let r,i;const s=t.ic.get(e);if(s)r=s.targetId,t.sharedClientState.addLocalQueryTarget(r),i=s.view.ec();else{const o=await ir(t.localStore,Pe(e));t.isPrimaryClient&&Do(t.remoteStore,o);const a=t.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,i=await hu(t,e,r,a==="current",o.resumeToken)}return i}async function hu(n,e,t,r,i){n._c=(h,d,p)=>async function(g,b,S,M){let U=b.view.Wu(S);U.$i&&(U=await Bs(g.localStore,b.query,!1).then(({documents:z})=>b.view.Wu(z,U)));const V=M&&M.targetChanges.get(b.targetId),te=b.view.applyChanges(U,g.isPrimaryClient,V);return qa(g,b.targetId,te.Xu),te.snapshot}(n,h,d,p);const s=await Bs(n.localStore,e,!0),o=new pp(e,s.Hi),a=o.Wu(s.documents),c=$i.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",i),u=o.applyChanges(a,n.isPrimaryClient,c);qa(n,t,u.Xu);const l=new d0(e,t,o);return n.ic.set(e,l),n.rc.has(t)?n.rc.get(t).push(e):n.rc.set(t,[e]),u.snapshot}async function g0(n,e){const t=_(n),r=t.ic.get(e),i=t.rc.get(r.targetId);if(i.length>1)return t.rc.set(r.targetId,i.filter(s=>!Vi(s,e))),void t.ic.delete(e);t.isPrimaryClient?(t.sharedClientState.removeLocalQueryTarget(r.targetId),t.sharedClientState.isActiveQueryTarget(r.targetId)||await sr(t.localStore,r.targetId,!1).then(()=>{t.sharedClientState.clearQueryState(r.targetId),wi(t.remoteStore,r.targetId),ar(t,r.targetId)}).catch(Gt)):(ar(t,r.targetId),await sr(t.localStore,r.targetId,!0))}async function y0(n,e,t){const r=gu(n);try{const i=await function(s,o){const a=_(s),c=K.now(),u=o.reduce((d,p)=>d.add(p.key),R());let l,h;return a.persistence.runTransaction("Locally write mutations","readwrite",d=>{let p=Oe(),g=R();return a.Gi.getEntries(d,u).next(b=>{p=b,p.forEach((S,M)=>{M.isValidDocument()||(g=g.add(S))})}).next(()=>a.localDocuments.getOverlayedDocuments(d,p)).next(b=>{l=b;const S=[];for(const M of o){const U=AE(M,l.get(M.key).overlayedDocument);U!=null&&S.push(new vt(M.key,U,sm(U.value.mapValue),G.exists(!0)))}return a.mutationQueue.addMutationBatch(d,c,S,o)}).next(b=>{h=b;const S=b.applyToLocalDocumentSet(l,g);return a.documentOverlayCache.saveOverlays(d,b.batchId,S)})}).then(()=>({batchId:h.batchId,changes:Em(l)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(s,o,a){let c=s.hc[s.currentUser.toKey()];c||(c=new Y(N)),c=c.insert(o,a),s.hc[s.currentUser.toKey()]=c}(r,i.batchId,t),await wt(r,i.changes),await br(r.remoteStore)}catch(i){const s=Tr(i,"Failed to persist write");t.reject(s)}}async function gp(n,e){const t=_(n);try{const r=await UT(t.localStore,e);e.targetChanges.forEach((i,s)=>{const o=t.cc.get(s);o&&(C(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.nc=!0:i.modifiedDocuments.size>0?C(o.nc):i.removedDocuments.size>0&&(C(o.nc),o.nc=!1))}),await wt(t,r,e)}catch(r){await Gt(r)}}function fh(n,e,t){const r=_(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const i=[];r.ic.forEach((s,o)=>{const a=o.view.bu(e);a.snapshot&&i.push(a.snapshot)}),function(s,o){const a=_(s);a.onlineState=o;let c=!1;a.queries.forEach((u,l)=>{for(const h of l.listeners)h.bu(o)&&(c=!0)}),c&&uu(a)}(r.eventManager,e),i.length&&r.sc.Wo(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function v0(n,e,t){const r=_(n);r.sharedClientState.updateQueryState(e,"rejected",t);const i=r.cc.get(e),s=i&&i.key;if(s){let o=new Y(I.comparator);o=o.insert(s,B.newNoDocument(s,A.min()));const a=R().add(s),c=new qi(A.min(),new Map,new F(N),o,a);await gp(r,c),r.uc=r.uc.remove(s),r.cc.delete(e),mu(r)}else await sr(r.localStore,e,!1).then(()=>ar(r,e,t)).catch(Gt)}async function w0(n,e){const t=_(n),r=e.batch.batchId;try{const i=await FT(t.localStore,e);fu(t,r,null),du(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await wt(t,i)}catch(i){await Gt(i)}}async function I0(n,e,t){const r=_(n);try{const i=await function(s,o){const a=_(s);return a.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let u;return a.mutationQueue.lookupMutationBatch(c,o).next(l=>(C(l!==null),u=l.keys(),a.mutationQueue.removeMutationBatch(c,l))).next(()=>a.mutationQueue.performConsistencyCheck(c)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(c,u,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,u)).next(()=>a.localDocuments.getDocuments(c,u))})}(r.localStore,e);fu(r,e,t),du(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await wt(r,i)}catch(i){await Gt(i)}}async function _0(n,e){const t=_(n);zt(t.remoteStore)||v("SyncEngine","The network is disabled. The task returned by 'awaitPendingWrites()' will not complete until the network is enabled.");try{const r=await function(s){const o=_(s);return o.persistence.runTransaction("Get highest unacknowledged batch id","readonly",a=>o.mutationQueue.getHighestUnacknowledgedBatchId(a))}(t.localStore);if(r===-1)return void e.resolve();const i=t.lc.get(r)||[];i.push(e),t.lc.set(r,i)}catch(r){const i=Tr(r,"Initialization of waitForPendingWrites() operation failed");e.reject(i)}}function du(n,e){(n.lc.get(e)||[]).forEach(t=>{t.resolve()}),n.lc.delete(e)}function fu(n,e,t){const r=_(n);let i=r.hc[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(t?s.reject(t):s.resolve(),i=i.remove(e)),r.hc[r.currentUser.toKey()]=i}}function ar(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.rc.get(e))n.ic.delete(r),t&&n.sc.wc(r,t);n.rc.delete(e),n.isPrimaryClient&&n.ac.ls(e).forEach(r=>{n.ac.containsKey(r)||yp(n,r)})}function yp(n,e){n.oc.delete(e.path.canonicalString());const t=n.uc.get(e);t!==null&&(wi(n.remoteStore,t),n.uc=n.uc.remove(e),n.cc.delete(t),mu(n))}function qa(n,e,t){for(const r of t)r instanceof fp?(n.ac.addReference(r.key,e),b0(n,r)):r instanceof mp?(v("SyncEngine","Document no longer in limbo: "+r.key),n.ac.removeReference(r.key,e),n.ac.containsKey(r.key)||yp(n,r.key)):E()}function b0(n,e){const t=e.key,r=t.path.canonicalString();n.uc.get(t)||n.oc.has(r)||(v("SyncEngine","New document in limbo: "+t),n.oc.add(r),mu(n))}function mu(n){for(;n.oc.size>0&&n.uc.size<n.maxConcurrentLimboResolutions;){const e=n.oc.values().next().value;n.oc.delete(e);const t=new I(O.fromString(e)),r=n.fc.next();n.cc.set(r,new f0(t)),n.uc=n.uc.insert(t,r),Do(n.remoteStore,new Ct(Pe(vr(t.path)),r,2,xe.at))}}async function wt(n,e,t){const r=_(n),i=[],s=[],o=[];r.ic.isEmpty()||(r.ic.forEach((a,c)=>{o.push(r._c(c,e,t).then(u=>{if((u||t)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(c.targetId,u!=null&&u.fromCache?"not-current":"current"),u){i.push(u);const l=eu.Ci(c.targetId,u);s.push(l)}}))}),await Promise.all(o),r.sc.Wo(i),await async function(a,c){const u=_(a);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",l=>f.forEach(c,h=>f.forEach(h.Si,d=>u.persistence.referenceDelegate.addReference(l,h.targetId,d)).next(()=>f.forEach(h.Di,d=>u.persistence.referenceDelegate.removeReference(l,h.targetId,d)))))}catch(l){if(!Kt(l))throw l;v("LocalStore","Failed to update sequence numbers: "+l)}for(const l of c){const h=l.targetId;if(!l.fromCache){const d=u.Ui.get(h),p=d.snapshotVersion,g=d.withLastLimboFreeSnapshotVersion(p);u.Ui=u.Ui.insert(h,g)}}}(r.localStore,s))}async function E0(n,e){const t=_(n);if(!t.currentUser.isEqual(e)){v("SyncEngine","User change. New user:",e.toKey());const r=await Jm(t.localStore,e);t.currentUser=e,function(i,s){i.lc.forEach(o=>{o.forEach(a=>{a.reject(new y(m.CANCELLED,s))})}),i.lc.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await wt(t,r.ji)}}function T0(n,e){const t=_(n),r=t.cc.get(e);if(r&&r.nc)return R().add(r.key);{let i=R();const s=t.rc.get(e);if(!s)return i;for(const o of s){const a=t.ic.get(o);i=i.unionWith(a.view.ju)}return i}}async function S0(n,e){const t=_(n),r=await Bs(t.localStore,e.query,!0),i=e.view.tc(r);return t.isPrimaryClient&&qa(t,e.targetId,i.Xu),i}async function k0(n,e){const t=_(n);return np(t.localStore,e).then(r=>wt(t,r))}async function A0(n,e,t,r){const i=_(n),s=await function(o,a){const c=_(o),u=_(c.mutationQueue);return c.persistence.runTransaction("Lookup mutation documents","readonly",l=>u.Tn(l,a).next(h=>h?c.localDocuments.getDocuments(l,h):f.resolve(null)))}(i.localStore,e);s!==null?(t==="pending"?await br(i.remoteStore):t==="acknowledged"||t==="rejected"?(fu(i,e,r||null),du(i,e),function(o,a){_(_(o).mutationQueue).An(a)}(i.localStore,e)):E(),await wt(i,s)):v("SyncEngine","Cannot apply mutation batch with id: "+e)}async function C0(n,e){const t=_(n);if(pu(t),gu(t),e===!0&&t.dc!==!0){const r=t.sharedClientState.getAllActiveQueryTargets(),i=await mh(t,r.toArray());t.dc=!0,await Ba(t.remoteStore,!0);for(const s of i)Do(t.remoteStore,s)}else if(e===!1&&t.dc!==!1){const r=[];let i=Promise.resolve();t.rc.forEach((s,o)=>{t.sharedClientState.isLocalQueryTarget(o)?r.push(o):i=i.then(()=>(ar(t,o),sr(t.localStore,o,!0))),wi(t.remoteStore,o)}),await i,await mh(t,r),function(s){const o=_(s);o.cc.forEach((a,c)=>{wi(o.remoteStore,c)}),o.ac.fs(),o.cc=new Map,o.uc=new Y(I.comparator)}(t),t.dc=!1,await Ba(t.remoteStore,!1)}}async function mh(n,e,t){const r=_(n),i=[],s=[];for(const o of e){let a;const c=r.rc.get(o);if(c&&c.length!==0){a=await ir(r.localStore,Pe(c[0]));for(const u of c){const l=r.ic.get(u),h=await S0(r,l);h.snapshot&&s.push(h.snapshot)}}else{const u=await tp(r.localStore,o);a=await ir(r.localStore,u),await hu(r,vp(u),o,!1,a.resumeToken)}i.push(a)}return r.sc.Wo(s),i}function vp(n){return am(n.path,n.collectionGroup,n.orderBy,n.filters,n.limit,"F",n.startAt,n.endAt)}function D0(n){const e=_(n);return _(_(e.localStore).persistence).vi()}async function N0(n,e,t,r){const i=_(n);if(i.dc)return void v("SyncEngine","Ignoring unexpected query state notification.");const s=i.rc.get(e);if(s&&s.length>0)switch(t){case"current":case"not-current":{const o=await np(i.localStore,um(s[0])),a=qi.createSynthesizedRemoteEventForCurrentChange(e,t==="current",re.EMPTY_BYTE_STRING);await wt(i,o,a);break}case"rejected":await sr(i.localStore,e,!0),ar(i,e,r);break;default:E()}}async function R0(n,e,t){const r=pu(n);if(r.dc){for(const i of e){if(r.rc.has(i)){v("SyncEngine","Adding an already active target "+i);continue}const s=await tp(r.localStore,i),o=await ir(r.localStore,s);await hu(r,vp(s),o.targetId,!1,o.resumeToken),Do(r.remoteStore,o)}for(const i of t)r.rc.has(i)&&await sr(r.localStore,i,!1).then(()=>{wi(r.remoteStore,i),ar(r,i)}).catch(Gt)}}function pu(n){const e=_(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=gp.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=T0.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=v0.bind(null,e),e.sc.Wo=c0.bind(null,e.eventManager),e.sc.wc=u0.bind(null,e.eventManager),e}function gu(n){const e=_(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=w0.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=I0.bind(null,e),e}function x0(n,e,t){const r=_(n);(async function(i,s,o){try{const a=await s.getMetadata();if(await function(h,d){const p=_(h),g=ce(d.createTime);return p.persistence.runTransaction("hasNewerBundle","readonly",b=>p.Ns.getBundleMetadata(b,d.id)).then(b=>!!b&&b.createTime.compareTo(g)>=0)}(i.localStore,a))return await s.close(),o._completeWith(function(h){return{taskState:"Success",documentsLoaded:h.totalDocuments,bytesLoaded:h.totalBytes,totalDocuments:h.totalDocuments,totalBytes:h.totalBytes}}(a)),Promise.resolve(new Set);o._updateProgress(dp(a));const c=new h0(a,i.localStore,s.It);let u=await s.mc();for(;u;){const h=await c.Fu(u);h&&o._updateProgress(h),u=await s.mc()}const l=await c.complete();return await wt(i,l.Lu,void 0),await function(h,d){const p=_(h);return p.persistence.runTransaction("Save bundle","readwrite",g=>p.Ns.saveBundleMetadata(g,d))}(i.localStore,a),o._completeWith(l.progress),Promise.resolve(l.Bu)}catch(a){return Zn("SyncEngine",`Loading bundle failed with ${a}`),o._failWith(a),Promise.resolve(new Set)}})(r,e,t).then(i=>{r.sharedClientState.notifyBundleLoaded(i)})}class wp{constructor(){this.synchronizeTabs=!1}async initialize(e){this.It=ji(e.databaseInfo.databaseId),this.sharedClientState=this.gc(e),this.persistence=this.yc(e),await this.persistence.start(),this.localStore=this.Ic(e),this.gcScheduler=this.Tc(e,this.localStore),this.indexBackfillerScheduler=this.Ec(e,this.localStore)}Tc(e,t){return null}Ec(e,t){return null}Ic(e){return Xm(this.persistence,new Ym,e.initialUser,this.It)}yc(e){return new Qm(Co.Bs,this.It)}gc(e){return new ip}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class Ip extends wp{constructor(e,t,r){super(),this.Ac=e,this.cacheSizeBytes=t,this.forceOwnership=r,this.synchronizeTabs=!1}async initialize(e){await super.initialize(e),await this.Ac.initialize(this,e),await gu(this.Ac.syncEngine),await br(this.Ac.remoteStore),await this.persistence.li(()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(),this.indexBackfillerScheduler&&!this.indexBackfillerScheduler.started&&this.indexBackfillerScheduler.start(),Promise.resolve()))}Ic(e){return Xm(this.persistence,new Ym,e.initialUser,this.It)}Tc(e,t){const r=this.persistence.referenceDelegate.garbageCollector;return new bT(r,e.asyncQueue,t)}Ec(e,t){const r=new sE(t,this.persistence);return new iE(e.asyncQueue,r)}yc(e){const t=Zc(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey),r=this.cacheSizeBytes!==void 0?Re.withCacheSize(this.cacheSizeBytes):Re.DEFAULT;return new Jc(this.synchronizeTabs,t,e.clientId,r,e.asyncQueue,sp(),ys(),this.It,this.sharedClientState,!!this.forceOwnership)}gc(e){return new ip}}class O0 extends Ip{constructor(e,t){super(e,t,!1),this.Ac=e,this.cacheSizeBytes=t,this.synchronizeTabs=!0}async initialize(e){await super.initialize(e);const t=this.Ac.syncEngine;this.sharedClientState instanceof ca&&(this.sharedClientState.syncEngine={Fr:A0.bind(null,t),$r:N0.bind(null,t),Br:R0.bind(null,t),vi:D0.bind(null,t),Mr:k0.bind(null,t)},await this.sharedClientState.start()),await this.persistence.li(async r=>{await C0(this.Ac.syncEngine,r),this.gcScheduler&&(r&&!this.gcScheduler.started?this.gcScheduler.start():r||this.gcScheduler.stop()),this.indexBackfillerScheduler&&(r&&!this.indexBackfillerScheduler.started?this.indexBackfillerScheduler.start():r||this.indexBackfillerScheduler.stop())})}gc(e){const t=sp();if(!ca.C(t))throw new y(m.UNIMPLEMENTED,"IndexedDB persistence is only available on platforms that support LocalStorage.");const r=Zc(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey);return new ca(t,e.asyncQueue,r,e.clientId,e.initialUser)}}class yu{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>fh(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=E0.bind(null,this.syncEngine),await Ba(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new a0}createDatastore(e){const t=ji(e.databaseInfo.databaseId),r=(i=e.databaseInfo,new KT(i));var i;return function(s,o,a,c){return new HT(s,o,a,c)}(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return t=this.localStore,r=this.datastore,i=e.asyncQueue,s=a=>fh(this.syncEngine,a,0),o=uh.C()?new uh:new $T,new YT(t,r,i,s,o);var t,r,i,s,o}createSyncEngine(e,t){return function(r,i,s,o,a,c,u){const l=new m0(r,i,s,o,a,c);return u&&(l.dc=!0),l}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}terminate(){return async function(e){const t=_(e);v("RemoteStore","RemoteStore shutting down."),t._u.add(5),await _r(t),t.mu.shutdown(),t.gu.set("Unknown")}(this.remoteStore)}}/**
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
 */function vu(n,e,t){if(!t)throw new y(m.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function _p(n,e,t,r){if(e===!0&&r===!0)throw new y(m.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function ph(n){if(!I.isDocumentKey(n))throw new y(m.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function gh(n){if(I.isDocumentKey(n))throw new y(m.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function No(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(t){return t.constructor?t.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":E()}function L(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new y(m.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=No(n);throw new y(m.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}function bp(n,e){if(e<=0)throw new y(m.INVALID_ARGUMENT,`Function ${n}() requires a positive number, but it was: ${e}.`)}/**
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
 */const yh=new Map;class vh{constructor(e){var t;if(e.host===void 0){if(e.ssl!==void 0)throw new y(m.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(t=e.ssl)===null||t===void 0||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new y(m.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,_p("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
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
 */class Ki{constructor(e,t,r,i){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new vh({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new y(m.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new y(m.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new vh(e),e.credentials!==void 0&&(this._authCredentials=function(t){if(!t)return new Wb;switch(t.type){case"gapi":const r=t.client;return new Yb(r,t.sessionIndex||"0",t.iamToken||null,t.authTokenFactory||null);case"provider":return t.client;default:throw new y(m.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const t=yh.get(e);t&&(v("ComponentProvider","Removing Datastore"),yh.delete(e),t.terminate())}(this),Promise.resolve()}}function P0(n,e,t,r={}){var i;const s=(n=L(n,Ki))._getSettings();if(s.host!=="firestore.googleapis.com"&&s.host!==e&&Zn("Host has been set in both settings() and useEmulator(), emulator host will be used"),n._setSettings(Object.assign(Object.assign({},s),{host:`${e}:${t}`,ssl:!1})),r.mockUserToken){let o,a;if(typeof r.mockUserToken=="string")o=r.mockUserToken,a=oe.MOCK_USER;else{o=Eg(r.mockUserToken,(i=n._app)===null||i===void 0?void 0:i.options.projectId);const c=r.mockUserToken.sub||r.mockUserToken.user_id;if(!c)throw new y(m.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new oe(c)}n._authCredentials=new zb(new zf(o,a))}}/**
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
 */class ${constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new tt(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new $(this.firestore,e,this._key)}}class Te{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Te(this.firestore,e,this._query)}}class tt extends Te{constructor(e,t,r){super(e,t,vr(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new $(this.firestore,null,new I(e))}withConverter(e){return new tt(this.firestore,e,this._path)}}function Ep(n,e,...t){if(n=k(n),vu("collection","path",e),n instanceof Ki){const r=O.fromString(e,...t);return gh(r),new tt(n,null,r)}{if(!(n instanceof $||n instanceof tt))throw new y(m.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(O.fromString(e,...t));return gh(r),new tt(n.firestore,null,r)}}function L0(n,e){if(n=L(n,Ki),vu("collectionGroup","collection id",e),e.indexOf("/")>=0)throw new y(m.INVALID_ARGUMENT,`Invalid collection ID '${e}' passed to function collectionGroup(). Collection IDs must not contain '/'.`);return new Te(n,null,function(t){return new yt(O.emptyPath(),t)}(e))}function Gs(n,e,...t){if(n=k(n),arguments.length===1&&(e=Hf.R()),vu("doc","path",e),n instanceof Ki){const r=O.fromString(e,...t);return ph(r),new $(n,null,new I(r))}{if(!(n instanceof $||n instanceof tt))throw new y(m.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(O.fromString(e,...t));return ph(r),new $(n.firestore,n instanceof tt?n.converter:null,new I(r))}}function Tp(n,e){return n=k(n),e=k(e),(n instanceof $||n instanceof tt)&&(e instanceof $||e instanceof tt)&&n.firestore===e.firestore&&n.path===e.path&&n.converter===e.converter}function Sp(n,e){return n=k(n),e=k(e),n instanceof Te&&e instanceof Te&&n.firestore===e.firestore&&Vi(n._query,e._query)&&n.converter===e.converter}/**
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
 */function wh(n,e=10240){let t=0;return{async read(){if(t<n.byteLength){const r={value:n.slice(t,t+e),done:!1};return t+=e,r}return{done:!0}},async cancel(){},releaseLock(){},closed:Promise.reject("unimplemented")}}/**
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
 */class Ro{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Rc(this.observer.next,e)}error(e){this.observer.error?this.Rc(this.observer.error,e):J("Uncaught Error in snapshot listener:",e.toString())}bc(){this.muted=!0}Rc(e,t){this.muted||setTimeout(()=>{this.muted||e(t)},0)}}/**
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
 */class M0{constructor(e,t){this.Pc=e,this.It=t,this.metadata=new ae,this.buffer=new Uint8Array,this.vc=new TextDecoder("utf-8"),this.Vc().then(r=>{r&&r.Ou()?this.metadata.resolve(r.ku.metadata):this.metadata.reject(new Error(`The first element of the bundle is not a metadata, it is
             ${JSON.stringify(r==null?void 0:r.ku)}`))},r=>this.metadata.reject(r))}close(){return this.Pc.cancel()}async getMetadata(){return this.metadata.promise}async mc(){return await this.getMetadata(),this.Vc()}async Vc(){const e=await this.Sc();if(e===null)return null;const t=this.vc.decode(e),r=Number(t);isNaN(r)&&this.Dc(`length string (${t}) is not valid number`);const i=await this.Cc(r);return new l0(JSON.parse(i),e.length+r)}xc(){return this.buffer.findIndex(e=>e==="{".charCodeAt(0))}async Sc(){for(;this.xc()<0&&!await this.Nc(););if(this.buffer.length===0)return null;const e=this.xc();e<0&&this.Dc("Reached the end of bundle when a length string is expected.");const t=this.buffer.slice(0,e);return this.buffer=this.buffer.slice(e),t}async Cc(e){for(;this.buffer.length<e;)await this.Nc()&&this.Dc("Reached the end of bundle when more is expected.");const t=this.vc.decode(this.buffer.slice(0,e));return this.buffer=this.buffer.slice(e),t}Dc(e){throw this.Pc.cancel(),new Error(`Invalid bundle format: ${e}`)}async Nc(){const e=await this.Pc.read();if(!e.done){const t=new Uint8Array(this.buffer.length+e.value.length);t.set(this.buffer),t.set(e.value,this.buffer.length),this.buffer=t}return e.done}}/**
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
 */class F0{constructor(e){this.datastore=e,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastWriteError=null,this.writtenDocs=new Set}async lookup(e){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw new y(m.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes.");const t=await async function(r,i){const s=_(r),o=yi(s.It)+"/documents",a={documents:i.map(h=>gi(s.It,h))},c=await s._o("BatchGetDocuments",o,a,i.length),u=new Map;c.forEach(h=>{const d=UE(s.It,h);u.set(d.key.toString(),d)});const l=[];return i.forEach(h=>{const d=u.get(h.toString());C(!!d),l.push(d)}),l}(this.datastore,e);return t.forEach(r=>this.recordVersion(r)),t}set(e,t){this.write(t.toMutation(e,this.precondition(e))),this.writtenDocs.add(e.toString())}update(e,t){try{this.write(t.toMutation(e,this.preconditionForUpdate(e)))}catch(r){this.lastWriteError=r}this.writtenDocs.add(e.toString())}delete(e){this.write(new Ir(e,this.precondition(e))),this.writtenDocs.add(e.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastWriteError)throw this.lastWriteError;const e=this.readVersions;this.mutations.forEach(t=>{e.delete(t.key.toString())}),e.forEach((t,r)=>{const i=I.fromPath(r);this.mutations.push(new Gc(i,this.precondition(i)))}),await async function(t,r){const i=_(t),s=yi(i.It)+"/documents",o={writes:r.map(a=>vi(i.It,a))};await i.ao("Commit",s,o)}(this.datastore,this.mutations),this.committed=!0}recordVersion(e){let t;if(e.isFoundDocument())t=e.version;else{if(!e.isNoDocument())throw E();t=A.min()}const r=this.readVersions.get(e.key.toString());if(r){if(!t.isEqual(r))throw new y(m.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(e.key.toString(),t)}precondition(e){const t=this.readVersions.get(e.toString());return!this.writtenDocs.has(e.toString())&&t?t.isEqual(A.min())?G.exists(!1):G.updateTime(t):G.none()}preconditionForUpdate(e){const t=this.readVersions.get(e.toString());if(!this.writtenDocs.has(e.toString())&&t){if(t.isEqual(A.min()))throw new y(m.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return G.updateTime(t)}return G.exists(!0)}write(e){this.ensureCommitNotCalled(),this.mutations.push(e)}ensureCommitNotCalled(){}}/**
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
 */class U0{constructor(e,t,r,i,s){this.asyncQueue=e,this.datastore=t,this.options=r,this.updateFunction=i,this.deferred=s,this.kc=r.maxAttempts,this.xo=new nu(this.asyncQueue,"transaction_retry")}run(){this.kc-=1,this.Oc()}Oc(){this.xo.Ro(async()=>{const e=new F0(this.datastore),t=this.Mc(e);t&&t.then(r=>{this.asyncQueue.enqueueAndForget(()=>e.commit().then(()=>{this.deferred.resolve(r)}).catch(i=>{this.Fc(i)}))}).catch(r=>{this.Fc(r)})})}Mc(e){try{const t=this.updateFunction(e);return!Fi(t)&&t.catch&&t.then?t:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(t){return this.deferred.reject(t),null}}Fc(e){this.kc>0&&this.$c(e)?(this.kc-=1,this.asyncQueue.enqueueAndForget(()=>(this.Oc(),Promise.resolve()))):this.deferred.reject(e)}$c(e){if(e.name==="FirebaseError"){const t=e.code;return t==="aborted"||t==="failed-precondition"||t==="already-exists"||!Im(t)}return!1}}/**
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
 */class V0{constructor(e,t,r,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=i,this.user=oe.UNAUTHENTICATED,this.clientId=Hf.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{v("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(v("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new y(m.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new ae;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=Tr(t,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function kp(n,e){n.asyncQueue.verifyOperationInProgress(),v("FirestoreClient","Initializing OfflineComponentProvider");const t=await n.getConfiguration();await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener(async i=>{r.isEqual(i)||(await Jm(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n.offlineComponents=e}async function Ap(n,e){n.asyncQueue.verifyOperationInProgress();const t=await wu(n);v("FirestoreClient","Initializing OnlineComponentProvider");const r=await n.getConfiguration();await e.initialize(t,r),n.setCredentialChangeListener(i=>lh(e.remoteStore,i)),n.setAppCheckTokenChangeListener((i,s)=>lh(e.remoteStore,s)),n.onlineComponents=e}async function wu(n){return n.offlineComponents||(v("FirestoreClient","Using default OfflineComponentProvider"),await kp(n,new wp)),n.offlineComponents}async function xo(n){return n.onlineComponents||(v("FirestoreClient","Using default OnlineComponentProvider"),await Ap(n,new yu)),n.onlineComponents}function Cp(n){return wu(n).then(e=>e.persistence)}function Iu(n){return wu(n).then(e=>e.localStore)}function Dp(n){return xo(n).then(e=>e.remoteStore)}function _u(n){return xo(n).then(e=>e.syncEngine)}function B0(n){return xo(n).then(e=>e.datastore)}async function cr(n){const e=await xo(n),t=e.eventManager;return t.onListen=p0.bind(null,e.syncEngine),t.onUnlisten=g0.bind(null,e.syncEngine),t}function q0(n){return n.asyncQueue.enqueue(async()=>{const e=await Cp(n),t=await Dp(n);return e.setNetworkEnabled(!0),function(r){const i=_(r);return i._u.delete(0),Gi(i)}(t)})}function $0(n){return n.asyncQueue.enqueue(async()=>{const e=await Cp(n),t=await Dp(n);return e.setNetworkEnabled(!1),async function(r){const i=_(r);i._u.add(0),await _r(i),i.gu.set("Offline")}(t)})}function j0(n,e){const t=new ae;return n.asyncQueue.enqueueAndForget(async()=>async function(r,i,s){try{const o=await function(a,c){const u=_(a);return u.persistence.runTransaction("read document","readonly",l=>u.localDocuments.getDocument(l,c))}(r,i);o.isFoundDocument()?s.resolve(o):o.isNoDocument()?s.resolve(null):s.reject(new y(m.UNAVAILABLE,"Failed to get document from cache. (However, this document may exist on the server. Run again without setting 'source' in the GetOptions to attempt to retrieve the document from the server.)"))}catch(o){const a=Tr(o,`Failed to get document '${i} from cache`);s.reject(a)}}(await Iu(n),e,t)),t.promise}function Np(n,e,t={}){const r=new ae;return n.asyncQueue.enqueueAndForget(async()=>function(i,s,o,a,c){const u=new Ro({next:h=>{s.enqueueAndForget(()=>cu(i,l));const d=h.docs.has(o);!d&&h.fromCache?c.reject(new y(m.UNAVAILABLE,"Failed to get document because the client is offline.")):d&&h.fromCache&&a&&a.source==="server"?c.reject(new y(m.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(h)},error:h=>c.reject(h)}),l=new lu(vr(o.path),u,{includeMetadataChanges:!0,Nu:!0});return au(i,l)}(await cr(n),n.asyncQueue,e,t,r)),r.promise}function G0(n,e){const t=new ae;return n.asyncQueue.enqueueAndForget(async()=>async function(r,i,s){try{const o=await Bs(r,i,!0),a=new pp(i,o.Hi),c=a.Wu(o.documents),u=a.applyChanges(c,!1);s.resolve(u.snapshot)}catch(o){const a=Tr(o,`Failed to execute query '${i} against cache`);s.reject(a)}}(await Iu(n),e,t)),t.promise}function Rp(n,e,t={}){const r=new ae;return n.asyncQueue.enqueueAndForget(async()=>function(i,s,o,a,c){const u=new Ro({next:h=>{s.enqueueAndForget(()=>cu(i,l)),h.fromCache&&a.source==="server"?c.reject(new y(m.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(h)},error:h=>c.reject(h)}),l=new lu(o,u,{includeMetadataChanges:!0,Nu:!0});return au(i,l)}(await cr(n),n.asyncQueue,e,t,r)),r.promise}function K0(n,e){const t=new Ro(e);return n.asyncQueue.enqueueAndForget(async()=>function(r,i){_(r).Ru.add(i),i.next()}(await cr(n),t)),()=>{t.bc(),n.asyncQueue.enqueueAndForget(async()=>function(r,i){_(r).Ru.delete(i)}(await cr(n),t))}}function W0(n,e,t,r){const i=function(s,o){let a;return a=typeof s=="string"?new TextEncoder().encode(s):s,function(c,u){return new M0(c,u)}(function(c,u){if(c instanceof Uint8Array)return wh(c,u);if(c instanceof ArrayBuffer)return wh(new Uint8Array(c),u);if(c instanceof ReadableStream)return c.getReader();throw new Error("Source of `toByteStreamReader` has to be a ArrayBuffer or ReadableStream")}(a),o)}(t,ji(e));n.asyncQueue.enqueueAndForget(async()=>{x0(await _u(n),i,r)})}function z0(n,e){return n.asyncQueue.enqueue(async()=>function(t,r){const i=_(t);return i.persistence.runTransaction("Get named query","readonly",s=>i.Ns.getNamedQuery(s,r))}(await Iu(n),e))}class H0{constructor(){this.Bc=Promise.resolve(),this.Lc=[],this.Uc=!1,this.qc=[],this.Kc=null,this.Gc=!1,this.Qc=!1,this.jc=[],this.xo=new nu(this,"async_queue_retry"),this.Wc=()=>{const t=ys();t&&v("AsyncQueue","Visibility state changed to "+t.visibilityState),this.xo.Po()};const e=ys();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Wc)}get isShuttingDown(){return this.Uc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.zc(),this.Hc(e)}enterRestrictedMode(e){if(!this.Uc){this.Uc=!0,this.Qc=e||!1;const t=ys();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.Wc)}}enqueue(e){if(this.zc(),this.Uc)return new Promise(()=>{});const t=new ae;return this.Hc(()=>this.Uc&&this.Qc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Lc.push(e),this.Jc()))}async Jc(){if(this.Lc.length!==0){try{await this.Lc[0](),this.Lc.shift(),this.xo.reset()}catch(e){if(!Kt(e))throw e;v("AsyncQueue","Operation failed with retryable error: "+e)}this.Lc.length>0&&this.xo.Ro(()=>this.Jc())}}Hc(e){const t=this.Bc.then(()=>(this.Gc=!0,e().catch(r=>{this.Kc=r,this.Gc=!1;const i=function(s){let o=s.message||"";return s.stack&&(o=s.stack.includes(s.message)?s.stack:s.message+`
`+s.stack),o}(r);throw J("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.Gc=!1,r))));return this.Bc=t,t}enqueueAfterDelay(e,t,r){this.zc(),this.jc.indexOf(e)>-1&&(t=0);const i=ou.createAndSchedule(this,e,t,r,s=>this.Yc(s));return this.qc.push(i),i}zc(){this.Kc&&E()}verifyOperationInProgress(){}async Xc(){let e;do e=this.Bc,await e;while(e!==this.Bc)}Zc(e){for(const t of this.qc)if(t.timerId===e)return!0;return!1}ta(e){return this.Xc().then(()=>{this.qc.sort((t,r)=>t.targetTimeMs-r.targetTimeMs);for(const t of this.qc)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Xc()})}ea(e){this.jc.push(e)}Yc(e){const t=this.qc.indexOf(e);this.qc.splice(t,1)}}function $a(n){return function(e,t){if(typeof e!="object"||e===null)return!1;const r=e;for(const i of t)if(i in r&&typeof r[i]=="function")return!0;return!1}(n,["next","error","complete"])}class Q0{constructor(){this._progressObserver={},this._taskCompletionResolver=new ae,this._lastProgress={taskState:"Running",totalBytes:0,totalDocuments:0,bytesLoaded:0,documentsLoaded:0}}onProgress(e,t,r){this._progressObserver={next:e,error:t,complete:r}}catch(e){return this._taskCompletionResolver.promise.catch(e)}then(e,t){return this._taskCompletionResolver.promise.then(e,t)}_completeWith(e){this._updateProgress(e),this._progressObserver.complete&&this._progressObserver.complete(),this._taskCompletionResolver.resolve(e)}_failWith(e){this._lastProgress.taskState="Error",this._progressObserver.next&&this._progressObserver.next(this._lastProgress),this._progressObserver.error&&this._progressObserver.error(e),this._taskCompletionResolver.reject(e)}_updateProgress(e){this._lastProgress=e,this._progressObserver.next&&this._progressObserver.next(e)}}/**
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
 */const Y0=-1;class X extends Ki{constructor(e,t,r,i){super(e,t,r,i),this.type="firestore",this._queue=new H0,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||xp(this),this._firestoreClient.terminate()}}function me(n){return n._firestoreClient||xp(n),n._firestoreClient.verifyNotTerminated(),n._firestoreClient}function xp(n){var e;const t=n._freezeSettings(),r=function(i,s,o,a){return new cE(i,s,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,t);n._firestoreClient=new V0(n._authCredentials,n._appCheckCredentials,n._queue,r)}function X0(n,e){Pp(n=L(n,X));const t=me(n),r=n._freezeSettings(),i=new yu;return Op(t,i,new Ip(i,r.cacheSizeBytes,e==null?void 0:e.forceOwnership))}function J0(n){Pp(n=L(n,X));const e=me(n),t=n._freezeSettings(),r=new yu;return Op(e,r,new O0(r,t.cacheSizeBytes))}function Op(n,e,t){const r=new ae;return n.asyncQueue.enqueue(async()=>{try{await kp(n,t),await Ap(n,e),r.resolve()}catch(i){const s=i;if(!function(o){return o.name==="FirebaseError"?o.code===m.FAILED_PRECONDITION||o.code===m.UNIMPLEMENTED:typeof DOMException<"u"&&o instanceof DOMException?o.code===22||o.code===20||o.code===11:!0}(s))throw s;Zn("Error enabling offline persistence. Falling back to persistence disabled: "+s),r.reject(s)}}).then(()=>r.promise)}function Z0(n){if(n._initialized&&!n._terminated)throw new y(m.FAILED_PRECONDITION,"Persistence can only be cleared before a Firestore instance is initialized or after it is terminated.");const e=new ae;return n._queue.enqueueAndForgetEvenWhileRestricted(async()=>{try{await async function(t){if(!$e.C())return Promise.resolve();const r=t+"main";await $e.delete(r)}(Zc(n._databaseId,n._persistenceKey)),e.resolve()}catch(t){e.reject(t)}}),e.promise}function eS(n){return function(e){const t=new ae;return e.asyncQueue.enqueueAndForget(async()=>_0(await _u(e),t)),t.promise}(me(n=L(n,X)))}function tS(n){return q0(me(n=L(n,X)))}function nS(n){return $0(me(n=L(n,X)))}function rS(n,e){const t=me(n=L(n,X)),r=new Q0;return W0(t,n._databaseId,e,r),r}function iS(n,e){return z0(me(n=L(n,X)),e).then(t=>t?new Te(n,null,t.query):null)}function Pp(n){if(n._initialized||n._terminated)throw new y(m.FAILED_PRECONDITION,"Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object.")}/**
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
 */class st{constructor(e){this._byteString=e}static fromBase64String(e){try{return new st(re.fromBase64String(e))}catch(t){throw new y(m.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new st(re.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class Vt{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new y(m.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Z(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Rn{constructor(e){this._methodName=e}}/**
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
 */class Oo{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new y(m.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new y(m.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return N(this._lat,e._lat)||N(this._long,e._long)}}/**
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
 */const sS=/^__.*__$/;class oS{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new vt(e,this.data,this.fieldMask,t,this.fieldTransforms):new wr(e,this.data,t,this.fieldTransforms)}}class Lp{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return new vt(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function Mp(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw E()}}class Po{constructor(e,t,r,i,s,o){this.settings=e,this.databaseId=t,this.It=r,this.ignoreUndefinedProperties=i,s===void 0&&this.na(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get sa(){return this.settings.sa}ia(e){return new Po(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.It,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ra(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),i=this.ia({path:r,oa:!1});return i.ua(e),i}ca(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),i=this.ia({path:r,oa:!1});return i.na(),i}aa(e){return this.ia({path:void 0,oa:!0})}ha(e){return Ks(e,this.settings.methodName,this.settings.la||!1,this.path,this.settings.fa)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}na(){if(this.path)for(let e=0;e<this.path.length;e++)this.ua(this.path.get(e))}ua(e){if(e.length===0)throw this.ha("Document fields must not be empty");if(Mp(this.sa)&&sS.test(e))throw this.ha('Document fields cannot begin and end with "__"')}}class aS{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.It=r||ji(e)}da(e,t,r,i=!1){return new Po({sa:e,methodName:t,fa:r,path:Z.emptyPath(),oa:!1,la:i},this.databaseId,this.It,this.ignoreUndefinedProperties)}}function xn(n){const e=n._freezeSettings(),t=ji(n._databaseId);return new aS(n._databaseId,!!e.ignoreUndefinedProperties,t)}function Lo(n,e,t,r,i,s={}){const o=n.da(s.merge||s.mergeFields?2:0,e,t,i);Su("Data must be an object, but it was:",o,r);const a=Vp(r,o);let c,u;if(s.merge)c=new Fe(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const l=[];for(const h of s.mergeFields){const d=ja(e,h,t);if(!o.contains(d))throw new y(m.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);qp(l,d)||l.push(d)}c=new Fe(l),u=o.fieldTransforms.filter(h=>c.covers(h.field))}else c=null,u=o.fieldTransforms;return new oS(new ye(a),c,u)}class Wi extends Rn{_toFieldTransform(e){if(e.sa!==2)throw e.sa===1?e.ha(`${this._methodName}() can only appear at the top level of your update data`):e.ha(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Wi}}function Fp(n,e,t){return new Po({sa:3,fa:e.settings.fa,methodName:n._methodName,oa:t},e.databaseId,e.It,e.ignoreUndefinedProperties)}class bu extends Rn{_toFieldTransform(e){return new Bi(e.path,new nr)}isEqual(e){return e instanceof bu}}class cS extends Rn{constructor(e,t){super(e),this._a=t}_toFieldTransform(e){const t=Fp(this,e,!0),r=this._a.map(s=>On(s,t)),i=new In(r);return new Bi(e.path,i)}isEqual(e){return this===e}}class uS extends Rn{constructor(e,t){super(e),this._a=t}_toFieldTransform(e){const t=Fp(this,e,!0),r=this._a.map(s=>On(s,t)),i=new _n(r);return new Bi(e.path,i)}isEqual(e){return this===e}}class lS extends Rn{constructor(e,t){super(e),this.wa=t}_toFieldTransform(e){const t=new rr(e.It,fm(e.It,this.wa));return new Bi(e.path,t)}isEqual(e){return this===e}}function Eu(n,e,t,r){const i=n.da(1,e,t);Su("Data must be an object, but it was:",i,r);const s=[],o=ye.empty();Nn(r,(c,u)=>{const l=ku(e,c,t);u=k(u);const h=i.ca(l);if(u instanceof Wi)s.push(l);else{const d=On(u,h);d!=null&&(s.push(l),o.set(l,d))}});const a=new Fe(s);return new Lp(o,a,i.fieldTransforms)}function Tu(n,e,t,r,i,s){const o=n.da(1,e,t),a=[ja(e,r,t)],c=[i];if(s.length%2!=0)throw new y(m.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<s.length;d+=2)a.push(ja(e,s[d])),c.push(s[d+1]);const u=[],l=ye.empty();for(let d=a.length-1;d>=0;--d)if(!qp(u,a[d])){const p=a[d];let g=c[d];g=k(g);const b=o.ca(p);if(g instanceof Wi)u.push(p);else{const S=On(g,b);S!=null&&(u.push(p),l.set(p,S))}}const h=new Fe(u);return new Lp(l,h,o.fieldTransforms)}function Up(n,e,t,r=!1){return On(t,n.da(r?4:3,e))}function On(n,e){if(Bp(n=k(n)))return Su("Unsupported field value:",e,n),Vp(n,e);if(n instanceof Rn)return function(t,r){if(!Mp(r.sa))throw r.ha(`${t._methodName}() can only be used with update() and set()`);if(!r.path)throw r.ha(`${t._methodName}() is not currently supported inside arrays`);const i=t._toFieldTransform(r);i&&r.fieldTransforms.push(i)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.oa&&e.sa!==4)throw e.ha("Nested arrays are not supported");return function(t,r){const i=[];let s=0;for(const o of t){let a=On(o,r.aa(s));a==null&&(a={nullValue:"NULL_VALUE"}),i.push(a),s++}return{arrayValue:{values:i}}}(n,e)}return function(t,r){if((t=k(t))===null)return{nullValue:"NULL_VALUE"};if(typeof t=="number")return fm(r.It,t);if(typeof t=="boolean")return{booleanValue:t};if(typeof t=="string")return{stringValue:t};if(t instanceof Date){const i=K.fromDate(t);return{timestampValue:pi(r.It,i)}}if(t instanceof K){const i=new K(t.seconds,1e3*Math.floor(t.nanoseconds/1e3));return{timestampValue:pi(r.It,i)}}if(t instanceof Oo)return{geoPointValue:{latitude:t.latitude,longitude:t.longitude}};if(t instanceof st)return{bytesValue:Am(r.It,t._byteString)};if(t instanceof $){const i=r.databaseId,s=t.firestore._databaseId;if(!s.isEqual(i))throw r.ha(`Document reference is for database ${s.projectId}/${s.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Kc(t.firestore._databaseId||r.databaseId,t._key.path)}}throw r.ha(`Unsupported field value: ${No(t)}`)}(n,e)}function Vp(n,e){const t={};return tm(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Nn(n,(r,i)=>{const s=On(i,e.ra(r));s!=null&&(t[r]=s)}),{mapValue:{fields:t}}}function Bp(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof K||n instanceof Oo||n instanceof st||n instanceof $||n instanceof Rn)}function Su(n,e,t){if(!Bp(t)||!function(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}(t)){const r=No(t);throw r==="an object"?e.ha(n+" a custom object"):e.ha(n+" "+r)}}function ja(n,e,t){if((e=k(e))instanceof Vt)return e._internalPath;if(typeof e=="string")return ku(n,e);throw Ks("Field path arguments must be of type string or ",n,!1,void 0,t)}const hS=new RegExp("[~\\*/\\[\\]]");function ku(n,e,t){if(e.search(hS)>=0)throw Ks(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new Vt(...e.split("."))._internalPath}catch{throw Ks(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function Ks(n,e,t,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;t&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(s||o)&&(c+=" (found",s&&(c+=` in field ${r}`),o&&(c+=` in document ${i}`),c+=")"),new y(m.INVALID_ARGUMENT,a+n+c)}function qp(n,e){return n.some(t=>t.isEqual(e))}/**
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
 */class Ii{constructor(e,t,r,i,s){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new $(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new dS(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Mo("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class dS extends Ii{data(){return super.data()}}function Mo(n,e){return typeof e=="string"?ku(n,e):e instanceof Vt?e._internalPath:e._delegate._internalPath}/**
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
 */function $p(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new y(m.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class zi{}function bt(n,...e){for(const t of e)n=t._apply(n);return n}class fS extends zi{constructor(e,t,r){super(),this.ma=e,this.ga=t,this.ya=r,this.type="where"}_apply(e){const t=xn(e.firestore),r=function(i,s,o,a,c,u,l){let h;if(c.isKeyField()){if(u==="array-contains"||u==="array-contains-any")throw new y(m.INVALID_ARGUMENT,`Invalid Query. You can't perform '${u}' queries on documentId().`);if(u==="in"||u==="not-in"){_h(l,u);const p=[];for(const g of l)p.push(Ih(a,i,g));h={arrayValue:{values:p}}}else h=Ih(a,i,l)}else u!=="in"&&u!=="not-in"&&u!=="array-contains-any"||_h(l,u),h=Up(o,s,l,u==="in"||u==="not-in");const d=ve.create(c,u,h);return function(p,g){if(g.dt()){const S=qc(p);if(S!==null&&!S.isEqual(g.field))throw new y(m.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${S.toString()}' and '${g.field.toString()}'`);const M=Bc(p);M!==null&&zp(p,g.field,M)}const b=function(S,M){for(const U of S.filters)if(M.indexOf(U.op)>=0)return U.op;return null}(p,function(S){switch(S){case"!=":return["!=","not-in"];case"array-contains":return["array-contains","array-contains-any","not-in"];case"in":return["array-contains-any","in","not-in"];case"array-contains-any":return["array-contains","array-contains-any","in","not-in"];case"not-in":return["array-contains","array-contains-any","in","not-in","!="];default:return[]}}(g.op));if(b!==null)throw b===g.op?new y(m.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${g.op.toString()}' filter.`):new y(m.INVALID_ARGUMENT,`Invalid query. You cannot use '${g.op.toString()}' filters with '${b.toString()}' filters.`)}(i,d),d}(e._query,"where",t,e.firestore._databaseId,this.ma,this.ga,this.ya);return new Te(e.firestore,e.converter,function(i,s){const o=i.filters.concat([s]);return new yt(i.path,i.collectionGroup,i.explicitOrderBy.slice(),o,i.limit,i.limitType,i.startAt,i.endAt)}(e._query,r))}}function mS(n,e,t){const r=e,i=Mo("where",n);return new fS(i,r,t)}class pS extends zi{constructor(e,t){super(),this.ma=e,this.pa=t,this.type="orderBy"}_apply(e){const t=function(r,i,s){if(r.startAt!==null)throw new y(m.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(r.endAt!==null)throw new y(m.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const o=new zn(i,s);return function(a,c){if(Bc(a)===null){const u=qc(a);u!==null&&zp(a,u,c.field)}}(r,o),o}(e._query,this.ma,this.pa);return new Te(e.firestore,e.converter,function(r,i){const s=r.explicitOrderBy.concat([i]);return new yt(r.path,r.collectionGroup,s,r.filters.slice(),r.limit,r.limitType,r.startAt,r.endAt)}(e._query,t))}}function gS(n,e="asc"){const t=e,r=Mo("orderBy",n);return new pS(r,t)}class jp extends zi{constructor(e,t,r){super(),this.type=e,this.Ia=t,this.Ta=r}_apply(e){return new Te(e.firestore,e.converter,Fs(e._query,this.Ia,this.Ta))}}function yS(n){return bp("limit",n),new jp("limit",n,"F")}function vS(n){return bp("limitToLast",n),new jp("limitToLast",n,"L")}class Gp extends zi{constructor(e,t,r){super(),this.type=e,this.Ea=t,this.Aa=r}_apply(e){const t=Wp(e,this.type,this.Ea,this.Aa);return new Te(e.firestore,e.converter,function(r,i){return new yt(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),r.limit,r.limitType,i,r.endAt)}(e._query,t))}}function wS(...n){return new Gp("startAt",n,!0)}function IS(...n){return new Gp("startAfter",n,!1)}class Kp extends zi{constructor(e,t,r){super(),this.type=e,this.Ea=t,this.Aa=r}_apply(e){const t=Wp(e,this.type,this.Ea,this.Aa);return new Te(e.firestore,e.converter,function(r,i){return new yt(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),r.limit,r.limitType,r.startAt,i)}(e._query,t))}}function _S(...n){return new Kp("endBefore",n,!1)}function bS(...n){return new Kp("endAt",n,!0)}function Wp(n,e,t,r){if(t[0]=k(t[0]),t[0]instanceof Ii)return function(i,s,o,a,c){if(!a)throw new y(m.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${o}().`);const u=[];for(const l of tr(i))if(l.field.isKeyField())u.push(vn(s,a.key));else{const h=a.data.field(l.field);if(Vc(h))throw new y(m.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+l.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(h===null){const d=l.field.canonicalString();throw new y(m.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${d}' (used as the orderBy) does not exist.`)}u.push(h)}return new Ft(u,c)}(n._query,n.firestore._databaseId,e,t[0]._document,r);{const i=xn(n.firestore);return function(s,o,a,c,u,l){const h=s.explicitOrderBy;if(u.length>h.length)throw new y(m.INVALID_ARGUMENT,`Too many arguments provided to ${c}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const d=[];for(let p=0;p<u.length;p++){const g=u[p];if(h[p].field.isKeyField()){if(typeof g!="string")throw new y(m.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${c}(), but got a ${typeof g}`);if(!$c(s)&&g.indexOf("/")!==-1)throw new y(m.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${c}() must be a plain document ID, but '${g}' contains a slash.`);const b=s.path.child(O.fromString(g));if(!I.isDocumentKey(b))throw new y(m.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${c}() must result in a valid document path, but '${b}' is not because it contains an odd number of segments.`);const S=new I(b);d.push(vn(o,S))}else{const b=Up(a,c,g);d.push(b)}}return new Ft(d,l)}(n._query,n.firestore._databaseId,i,e,t,r)}}function Ih(n,e,t){if(typeof(t=k(t))=="string"){if(t==="")throw new y(m.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!$c(e)&&t.indexOf("/")!==-1)throw new y(m.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const r=e.path.child(O.fromString(t));if(!I.isDocumentKey(r))throw new y(m.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return vn(n,new I(r))}if(t instanceof $)return vn(n,t._key);throw new y(m.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${No(t)}.`)}function _h(n,e){if(!Array.isArray(n)||n.length===0)throw new y(m.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`);if(n.length>10)throw new y(m.INVALID_ARGUMENT,`Invalid Query. '${e.toString()}' filters support a maximum of 10 elements in the value array.`)}function zp(n,e,t){if(!t.isEqual(e))throw new y(m.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${t.toString()}' instead.`)}/**
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
 */class Au{convertValue(e,t="none"){switch(yn(e)){case 0:return null;case 1:return e.booleanValue;case 2:return H(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(gn(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 10:return this.convertObject(e.mapValue,t);default:throw E()}}convertObject(e,t){const r={};return Nn(e.fields,(i,s)=>{r[i]=this.convertValue(s,t)}),r}convertGeoPoint(e){return new Oo(H(e.latitude),H(e.longitude))}convertArray(e,t){return(e.values||[]).map(r=>this.convertValue(r,t))}convertServerTimestamp(e,t){switch(t){case"previous":const r=nm(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(hi(e));default:return null}}convertTimestamp(e){const t=Pt(e);return new K(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=O.fromString(e);C(Mm(r));const i=new Lt(r.get(1),r.get(3)),s=new I(r.popFirst(5));return i.isEqual(t)||J(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),s}}/**
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
 */function Fo(n,e,t){let r;return r=n?t&&(t.merge||t.mergeFields)?n.toFirestore(e,t):n.toFirestore(e):e,r}class ES extends Au{constructor(e){super(),this.firestore=e}convertBytes(e){return new st(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new $(this.firestore,null,t)}}/**
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
 */class cn{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class ft extends Ii{constructor(e,t,r,i,s,o){super(e,t,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Xr(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(Mo("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}}class Xr extends ft{data(e={}){return super.data(e)}}class Bt{constructor(e,t,r,i){this._firestore=e,this._userDataWriter=t,this._snapshot=i,this.metadata=new cn(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(r=>{e.call(t,new Xr(this._firestore,this._userDataWriter,r.key,r,new cn(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new y(m.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(r,i){if(r._snapshot.oldDocs.isEmpty()){let s=0;return r._snapshot.docChanges.map(o=>{const a=new Xr(r._firestore,r._userDataWriter,o.doc.key,o.doc,new cn(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);return o.doc,{type:"added",doc:a,oldIndex:-1,newIndex:s++}})}{let s=r._snapshot.oldDocs;return r._snapshot.docChanges.filter(o=>i||o.type!==3).map(o=>{const a=new Xr(r._firestore,r._userDataWriter,o.doc.key,o.doc,new cn(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);let c=-1,u=-1;return o.type!==0&&(c=s.indexOf(o.doc.key),s=s.delete(o.doc.key)),o.type!==1&&(s=s.add(o.doc),u=s.indexOf(o.doc.key)),{type:TS(o.type),doc:a,oldIndex:c,newIndex:u}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function TS(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return E()}}function Hp(n,e){return n instanceof ft&&e instanceof ft?n._firestore===e._firestore&&n._key.isEqual(e._key)&&(n._document===null?e._document===null:n._document.isEqual(e._document))&&n._converter===e._converter:n instanceof Bt&&e instanceof Bt&&n._firestore===e._firestore&&Sp(n.query,e.query)&&n.metadata.isEqual(e.metadata)&&n._snapshot.isEqual(e._snapshot)}/**
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
 */function SS(n){n=L(n,$);const e=L(n.firestore,X);return Np(me(e),n._key).then(t=>Cu(e,n,t))}class Pn extends Au{constructor(e){super(),this.firestore=e}convertBytes(e){return new st(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new $(this.firestore,null,t)}}function kS(n){n=L(n,$);const e=L(n.firestore,X),t=me(e),r=new Pn(e);return j0(t,n._key).then(i=>new ft(e,r,n._key,i,new cn(i!==null&&i.hasLocalMutations,!0),n.converter))}function AS(n){n=L(n,$);const e=L(n.firestore,X);return Np(me(e),n._key,{source:"server"}).then(t=>Cu(e,n,t))}function CS(n){n=L(n,Te);const e=L(n.firestore,X),t=me(e),r=new Pn(e);return $p(n._query),Rp(t,n._query).then(i=>new Bt(e,r,n,i))}function DS(n){n=L(n,Te);const e=L(n.firestore,X),t=me(e),r=new Pn(e);return G0(t,n._query).then(i=>new Bt(e,r,n,i))}function NS(n){n=L(n,Te);const e=L(n.firestore,X),t=me(e),r=new Pn(e);return Rp(t,n._query,{source:"server"}).then(i=>new Bt(e,r,n,i))}function bh(n,e,t){n=L(n,$);const r=L(n.firestore,X),i=Fo(n.converter,e,t);return Hi(r,[Lo(xn(r),"setDoc",n._key,i,n.converter!==null,t).toMutation(n._key,G.none())])}function Eh(n,e,t,...r){n=L(n,$);const i=L(n.firestore,X),s=xn(i);let o;return o=typeof(e=k(e))=="string"||e instanceof Vt?Tu(s,"updateDoc",n._key,e,t,r):Eu(s,"updateDoc",n._key,e),Hi(i,[o.toMutation(n._key,G.exists(!0))])}function RS(n){return Hi(L(n.firestore,X),[new Ir(n._key,G.none())])}function xS(n,e){const t=L(n.firestore,X),r=Gs(n),i=Fo(n.converter,e);return Hi(t,[Lo(xn(n.firestore),"addDoc",r._key,i,n.converter!==null,{}).toMutation(r._key,G.exists(!1))]).then(()=>r)}function Qp(n,...e){var t,r,i;n=k(n);let s={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||$a(e[o])||(s=e[o],o++);const a={includeMetadataChanges:s.includeMetadataChanges};if($a(e[o])){const h=e[o];e[o]=(t=h.next)===null||t===void 0?void 0:t.bind(h),e[o+1]=(r=h.error)===null||r===void 0?void 0:r.bind(h),e[o+2]=(i=h.complete)===null||i===void 0?void 0:i.bind(h)}let c,u,l;if(n instanceof $)u=L(n.firestore,X),l=vr(n._key.path),c={next:h=>{e[o]&&e[o](Cu(u,n,h))},error:e[o+1],complete:e[o+2]};else{const h=L(n,Te);u=L(h.firestore,X),l=h._query;const d=new Pn(u);c={next:p=>{e[o]&&e[o](new Bt(u,d,h,p))},error:e[o+1],complete:e[o+2]},$p(n._query)}return function(h,d,p,g){const b=new Ro(g),S=new lu(d,b,p);return h.asyncQueue.enqueueAndForget(async()=>au(await cr(h),S)),()=>{b.bc(),h.asyncQueue.enqueueAndForget(async()=>cu(await cr(h),S))}}(me(u),l,a,c)}function OS(n,e){return K0(me(n=L(n,X)),$a(e)?e:{next:e})}function Hi(n,e){return function(t,r){const i=new ae;return t.asyncQueue.enqueueAndForget(async()=>y0(await _u(t),r,i)),i.promise}(me(n),e)}function Cu(n,e,t){const r=t.docs.get(e._key),i=new Pn(n);return new ft(n,i,e._key,r,new cn(t.hasPendingWrites,t.fromCache),e.converter)}/**
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
 */const PS={maxAttempts:5};/**
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
 */class LS{constructor(e,t){this._firestore=e,this._commitHandler=t,this._mutations=[],this._committed=!1,this._dataReader=xn(e)}set(e,t,r){this._verifyNotCommitted();const i=Tt(e,this._firestore),s=Fo(i.converter,t,r),o=Lo(this._dataReader,"WriteBatch.set",i._key,s,i.converter!==null,r);return this._mutations.push(o.toMutation(i._key,G.none())),this}update(e,t,r,...i){this._verifyNotCommitted();const s=Tt(e,this._firestore);let o;return o=typeof(t=k(t))=="string"||t instanceof Vt?Tu(this._dataReader,"WriteBatch.update",s._key,t,r,i):Eu(this._dataReader,"WriteBatch.update",s._key,t),this._mutations.push(o.toMutation(s._key,G.exists(!0))),this}delete(e){this._verifyNotCommitted();const t=Tt(e,this._firestore);return this._mutations=this._mutations.concat(new Ir(t._key,G.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new y(m.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function Tt(n,e){if((n=k(n)).firestore!==e)throw new y(m.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return n}/**
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
 */class MS extends class{constructor(e,t){this._firestore=e,this._transaction=t,this._dataReader=xn(e)}get(e){const t=Tt(e,this._firestore),r=new ES(this._firestore);return this._transaction.lookup([t._key]).then(i=>{if(!i||i.length!==1)return E();const s=i[0];if(s.isFoundDocument())return new Ii(this._firestore,r,s.key,s,t.converter);if(s.isNoDocument())return new Ii(this._firestore,r,t._key,null,t.converter);throw E()})}set(e,t,r){const i=Tt(e,this._firestore),s=Fo(i.converter,t,r),o=Lo(this._dataReader,"Transaction.set",i._key,s,i.converter!==null,r);return this._transaction.set(i._key,o),this}update(e,t,r,...i){const s=Tt(e,this._firestore);let o;return o=typeof(t=k(t))=="string"||t instanceof Vt?Tu(this._dataReader,"Transaction.update",s._key,t,r,i):Eu(this._dataReader,"Transaction.update",s._key,t),this._transaction.update(s._key,o),this}delete(e){const t=Tt(e,this._firestore);return this._transaction.delete(t._key),this}}{constructor(e,t){super(e,t),this._firestore=e}get(e){const t=Tt(e,this._firestore),r=new Pn(this._firestore);return super.get(e).then(i=>new ft(this._firestore,r,t._key,i._document,new cn(!1,!1),t.converter))}}function FS(n,e,t){n=L(n,X);const r=Object.assign(Object.assign({},PS),t);return function(i){if(i.maxAttempts<1)throw new y(m.INVALID_ARGUMENT,"Max attempts must be at least 1")}(r),function(i,s,o){const a=new ae;return i.asyncQueue.enqueueAndForget(async()=>{const c=await B0(i);new U0(i.asyncQueue,c,o,s,a).run()}),a.promise}(me(n),i=>e(new MS(n,i)),r)}/**
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
 */function US(){return new Wi("deleteField")}function VS(){return new bu("serverTimestamp")}function BS(...n){return new cS("arrayUnion",n)}function qS(...n){return new uS("arrayRemove",n)}function $S(n){return new lS("increment",n)}(function(n,e=!0){(function(t){yr=t})(An),Rt(new nt("firestore",(t,{instanceIdentifier:r,options:i})=>{const s=t.getProvider("app").getImmediate(),o=new X(new Hb(t.getProvider("auth-internal")),new Jb(t.getProvider("app-check-internal")),function(a,c){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new y(m.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Lt(a.options.projectId,c)}(s,r),s);return i=Object.assign({useFetchStreams:e},i),o._setSettings(i),o},"PUBLIC").setMultipleInstances(!0)),Ze(Il,"3.7.3",n),Ze(Il,"3.7.3","esm2017")})();const jS="@firebase/firestore-compat",GS="0.2.3";/**
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
 */function Du(n,e){if(e===void 0)return{merge:!1};if(e.mergeFields!==void 0&&e.merge!==void 0)throw new y("invalid-argument",`Invalid options passed to function ${n}(): You cannot specify both "merge" and "mergeFields".`);return e}/**
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
 */function Th(){if(typeof Uint8Array>"u")throw new y("unimplemented","Uint8Arrays are not available in this environment.")}function Sh(){if(!oE())throw new y("unimplemented","Blobs are unavailable in Firestore in this environment.")}class _i{constructor(e){this._delegate=e}static fromBase64String(e){return Sh(),new _i(st.fromBase64String(e))}static fromUint8Array(e){return Th(),new _i(st.fromUint8Array(e))}toBase64(){return Sh(),this._delegate.toBase64()}toUint8Array(){return Th(),this._delegate.toUint8Array()}isEqual(e){return this._delegate.isEqual(e._delegate)}toString(){return"Blob(base64: "+this.toBase64()+")"}}/**
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
 */function Ga(n){return KS(n,["next","error","complete"])}function KS(n,e){if(typeof n!="object"||n===null)return!1;const t=n;for(const r of e)if(r in t&&typeof t[r]=="function")return!0;return!1}/**
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
 */class WS{enableIndexedDbPersistence(e,t){return X0(e._delegate,{forceOwnership:t})}enableMultiTabIndexedDbPersistence(e){return J0(e._delegate)}clearIndexedDbPersistence(e){return Z0(e._delegate)}}class Yp{constructor(e,t,r){this._delegate=t,this._persistenceProvider=r,this.INTERNAL={delete:()=>this.terminate()},e instanceof Lt||(this._appCompat=e)}get _databaseId(){return this._delegate._databaseId}settings(e){const t=this._delegate._getSettings();!e.merge&&t.host!==e.host&&Zn("You are overriding the original host. If you did not intend to override your settings, use {merge: true}."),e.merge&&(e=Object.assign(Object.assign({},t),e),delete e.merge),this._delegate._setSettings(e)}useEmulator(e,t,r={}){P0(this._delegate,e,t,r)}enableNetwork(){return tS(this._delegate)}disableNetwork(){return nS(this._delegate)}enablePersistence(e){let t=!1,r=!1;return e&&(t=!!e.synchronizeTabs,r=!!e.experimentalForceOwningTab,_p("synchronizeTabs",t,"experimentalForceOwningTab",r)),t?this._persistenceProvider.enableMultiTabIndexedDbPersistence(this):this._persistenceProvider.enableIndexedDbPersistence(this,r)}clearPersistence(){return this._persistenceProvider.clearIndexedDbPersistence(this)}terminate(){return this._appCompat&&(this._appCompat._removeServiceInstance("firestore-compat"),this._appCompat._removeServiceInstance("firestore")),this._delegate._delete()}waitForPendingWrites(){return eS(this._delegate)}onSnapshotsInSync(e){return OS(this._delegate,e)}get app(){if(!this._appCompat)throw new y("failed-precondition","Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._appCompat}collection(e){try{return new ur(this,Ep(this._delegate,e))}catch(t){throw ke(t,"collection()","Firestore.collection()")}}doc(e){try{return new Be(this,Gs(this._delegate,e))}catch(t){throw ke(t,"doc()","Firestore.doc()")}}collectionGroup(e){try{return new Se(this,L0(this._delegate,e))}catch(t){throw ke(t,"collectionGroup()","Firestore.collectionGroup()")}}runTransaction(e){return FS(this._delegate,t=>e(new Xp(this,t)))}batch(){return me(this._delegate),new Jp(new LS(this._delegate,e=>Hi(this._delegate,e)))}loadBundle(e){return rS(this._delegate,e)}namedQuery(e){return iS(this._delegate,e).then(t=>t?new Se(this,t):null)}}class Uo extends Au{constructor(e){super(),this.firestore=e}convertBytes(e){return new _i(new st(e))}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return Be.forKey(t,this.firestore,null)}}function zS(n){Gb(n)}class Xp{constructor(e,t){this._firestore=e,this._delegate=t,this._userDataWriter=new Uo(e)}get(e){const t=un(e);return this._delegate.get(t).then(r=>new bi(this._firestore,new ft(this._firestore._delegate,this._userDataWriter,r._key,r._document,r.metadata,t.converter)))}set(e,t,r){const i=un(e);return r?(Du("Transaction.set",r),this._delegate.set(i,t,r)):this._delegate.set(i,t),this}update(e,t,r,...i){const s=un(e);return arguments.length===2?this._delegate.update(s,t):this._delegate.update(s,t,r,...i),this}delete(e){const t=un(e);return this._delegate.delete(t),this}}class Jp{constructor(e){this._delegate=e}set(e,t,r){const i=un(e);return r?(Du("WriteBatch.set",r),this._delegate.set(i,t,r)):this._delegate.set(i,t),this}update(e,t,r,...i){const s=un(e);return arguments.length===2?this._delegate.update(s,t):this._delegate.update(s,t,r,...i),this}delete(e){const t=un(e);return this._delegate.delete(t),this}commit(){return this._delegate.commit()}}class Sn{constructor(e,t,r){this._firestore=e,this._userDataWriter=t,this._delegate=r}fromFirestore(e,t){const r=new Xr(this._firestore._delegate,this._userDataWriter,e._key,e._document,e.metadata,null);return this._delegate.fromFirestore(new Ei(this._firestore,r),t!=null?t:{})}toFirestore(e,t){return t?this._delegate.toFirestore(e,t):this._delegate.toFirestore(e)}static getInstance(e,t){const r=Sn.INSTANCES;let i=r.get(e);i||(i=new WeakMap,r.set(e,i));let s=i.get(t);return s||(s=new Sn(e,new Uo(e),t),i.set(t,s)),s}}Sn.INSTANCES=new WeakMap;class Be{constructor(e,t){this.firestore=e,this._delegate=t,this._userDataWriter=new Uo(e)}static forPath(e,t,r){if(e.length%2!==0)throw new y("invalid-argument",`Invalid document reference. Document references must have an even number of segments, but ${e.canonicalString()} has ${e.length}`);return new Be(t,new $(t._delegate,r,new I(e)))}static forKey(e,t,r){return new Be(t,new $(t._delegate,r,e))}get id(){return this._delegate.id}get parent(){return new ur(this.firestore,this._delegate.parent)}get path(){return this._delegate.path}collection(e){try{return new ur(this.firestore,Ep(this._delegate,e))}catch(t){throw ke(t,"collection()","DocumentReference.collection()")}}isEqual(e){return e=k(e),e instanceof $?Tp(this._delegate,e):!1}set(e,t){t=Du("DocumentReference.set",t);try{return t?bh(this._delegate,e,t):bh(this._delegate,e)}catch(r){throw ke(r,"setDoc()","DocumentReference.set()")}}update(e,t,...r){try{return arguments.length===1?Eh(this._delegate,e):Eh(this._delegate,e,t,...r)}catch(i){throw ke(i,"updateDoc()","DocumentReference.update()")}}delete(){return RS(this._delegate)}onSnapshot(...e){const t=Zp(e),r=eg(e,i=>new bi(this.firestore,new ft(this.firestore._delegate,this._userDataWriter,i._key,i._document,i.metadata,this._delegate.converter)));return Qp(this._delegate,t,r)}get(e){let t;return(e==null?void 0:e.source)==="cache"?t=kS(this._delegate):(e==null?void 0:e.source)==="server"?t=AS(this._delegate):t=SS(this._delegate),t.then(r=>new bi(this.firestore,new ft(this.firestore._delegate,this._userDataWriter,r._key,r._document,r.metadata,this._delegate.converter)))}withConverter(e){return new Be(this.firestore,e?this._delegate.withConverter(Sn.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function ke(n,e,t){return n.message=n.message.replace(e,t),n}function Zp(n){for(const e of n)if(typeof e=="object"&&!Ga(e))return e;return{}}function eg(n,e){var t,r;let i;return Ga(n[0])?i=n[0]:Ga(n[1])?i=n[1]:typeof n[0]=="function"?i={next:n[0],error:n[1],complete:n[2]}:i={next:n[1],error:n[2],complete:n[3]},{next:s=>{i.next&&i.next(e(s))},error:(t=i.error)===null||t===void 0?void 0:t.bind(i),complete:(r=i.complete)===null||r===void 0?void 0:r.bind(i)}}class bi{constructor(e,t){this._firestore=e,this._delegate=t}get ref(){return new Be(this._firestore,this._delegate.ref)}get id(){return this._delegate.id}get metadata(){return this._delegate.metadata}get exists(){return this._delegate.exists()}data(e){return this._delegate.data(e)}get(e,t){return this._delegate.get(e,t)}isEqual(e){return Hp(this._delegate,e._delegate)}}class Ei extends bi{data(e){const t=this._delegate.data(e);return Kb(t!==void 0),t}}class Se{constructor(e,t){this.firestore=e,this._delegate=t,this._userDataWriter=new Uo(e)}where(e,t,r){try{return new Se(this.firestore,bt(this._delegate,mS(e,t,r)))}catch(i){throw ke(i,/(orderBy|where)\(\)/,"Query.$1()")}}orderBy(e,t){try{return new Se(this.firestore,bt(this._delegate,gS(e,t)))}catch(r){throw ke(r,/(orderBy|where)\(\)/,"Query.$1()")}}limit(e){try{return new Se(this.firestore,bt(this._delegate,yS(e)))}catch(t){throw ke(t,"limit()","Query.limit()")}}limitToLast(e){try{return new Se(this.firestore,bt(this._delegate,vS(e)))}catch(t){throw ke(t,"limitToLast()","Query.limitToLast()")}}startAt(...e){try{return new Se(this.firestore,bt(this._delegate,wS(...e)))}catch(t){throw ke(t,"startAt()","Query.startAt()")}}startAfter(...e){try{return new Se(this.firestore,bt(this._delegate,IS(...e)))}catch(t){throw ke(t,"startAfter()","Query.startAfter()")}}endBefore(...e){try{return new Se(this.firestore,bt(this._delegate,_S(...e)))}catch(t){throw ke(t,"endBefore()","Query.endBefore()")}}endAt(...e){try{return new Se(this.firestore,bt(this._delegate,bS(...e)))}catch(t){throw ke(t,"endAt()","Query.endAt()")}}isEqual(e){return Sp(this._delegate,e._delegate)}get(e){let t;return(e==null?void 0:e.source)==="cache"?t=DS(this._delegate):(e==null?void 0:e.source)==="server"?t=NS(this._delegate):t=CS(this._delegate),t.then(r=>new Ka(this.firestore,new Bt(this.firestore._delegate,this._userDataWriter,this._delegate,r._snapshot)))}onSnapshot(...e){const t=Zp(e),r=eg(e,i=>new Ka(this.firestore,new Bt(this.firestore._delegate,this._userDataWriter,this._delegate,i._snapshot)));return Qp(this._delegate,t,r)}withConverter(e){return new Se(this.firestore,e?this._delegate.withConverter(Sn.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}class HS{constructor(e,t){this._firestore=e,this._delegate=t}get type(){return this._delegate.type}get doc(){return new Ei(this._firestore,this._delegate.doc)}get oldIndex(){return this._delegate.oldIndex}get newIndex(){return this._delegate.newIndex}}class Ka{constructor(e,t){this._firestore=e,this._delegate=t}get query(){return new Se(this._firestore,this._delegate.query)}get metadata(){return this._delegate.metadata}get size(){return this._delegate.size}get empty(){return this._delegate.empty}get docs(){return this._delegate.docs.map(e=>new Ei(this._firestore,e))}docChanges(e){return this._delegate.docChanges(e).map(t=>new HS(this._firestore,t))}forEach(e,t){this._delegate.forEach(r=>{e.call(t,new Ei(this._firestore,r))})}isEqual(e){return Hp(this._delegate,e._delegate)}}class ur extends Se{constructor(e,t){super(e,t),this.firestore=e,this._delegate=t}get id(){return this._delegate.id}get path(){return this._delegate.path}get parent(){const e=this._delegate.parent;return e?new Be(this.firestore,e):null}doc(e){try{return e===void 0?new Be(this.firestore,Gs(this._delegate)):new Be(this.firestore,Gs(this._delegate,e))}catch(t){throw ke(t,"doc()","CollectionReference.doc()")}}add(e){return xS(this._delegate,e).then(t=>new Be(this.firestore,t))}isEqual(e){return Tp(this._delegate,e._delegate)}withConverter(e){return new ur(this.firestore,e?this._delegate.withConverter(Sn.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function un(n){return L(n,$)}/**
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
 */class Nu{constructor(...e){this._delegate=new Vt(...e)}static documentId(){return new Nu(Z.keyField().canonicalString())}isEqual(e){return e=k(e),e instanceof Vt?this._delegate._internalPath.isEqual(e._internalPath):!1}}/**
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
 */class rn{constructor(e){this._delegate=e}static serverTimestamp(){const e=VS();return e._methodName="FieldValue.serverTimestamp",new rn(e)}static delete(){const e=US();return e._methodName="FieldValue.delete",new rn(e)}static arrayUnion(...e){const t=BS(...e);return t._methodName="FieldValue.arrayUnion",new rn(t)}static arrayRemove(...e){const t=qS(...e);return t._methodName="FieldValue.arrayRemove",new rn(t)}static increment(e){const t=$S(e);return t._methodName="FieldValue.increment",new rn(t)}isEqual(e){return this._delegate.isEqual(e._delegate)}}/**
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
 */const QS={Firestore:Yp,GeoPoint:Oo,Timestamp:K,Blob:_i,Transaction:Xp,WriteBatch:Jp,DocumentReference:Be,DocumentSnapshot:bi,Query:Se,QueryDocumentSnapshot:Ei,QuerySnapshot:Ka,CollectionReference:ur,FieldPath:Nu,FieldValue:rn,setLogLevel:zS,CACHE_SIZE_UNLIMITED:Y0};function YS(n,e){n.INTERNAL.registerComponent(new nt("firestore-compat",t=>{const r=t.getProvider("app-compat").getImmediate(),i=t.getProvider("firestore").getImmediate();return e(r,i)},"PUBLIC").setServiceProps(Object.assign({},QS)))}/**
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
 */function XS(n){YS(n,(e,t)=>new Yp(e,t,new WS)),n.registerVersion(jS,GS)}XS(mt);const JS={apiKey:"AIzaSyCqXJHKw-oD2ONSQC9pwaM34Qchbxz3aBE",authDomain:"screen-text-4d525.firebaseapp.com",projectId:"screen-text-4d525",storageBucket:"screen-text-4d525.appspot.com",messagingSenderId:"837973930161",appId:"1:837973930161:web:ccd9a4c091553d187fb290",measurementId:"G-6RK05JHM57"};mt.initializeApp(JS);const uk=mt.auth(),lk=new mt.auth.GoogleAuthProvider,ZS=mt.firestore();function ek(n){let e,t,r,i,s;return{c(){e=Qi("main"),t=Qi("div"),r=Qi("div"),i=Qi("h1"),s=sg(n[0]),this.h()},l(o){e=Yi(o,"MAIN",{});var a=Xi(e);t=Yi(a,"DIV",{class:!0});var c=Xi(t);r=Yi(c,"DIV",{class:!0});var u=Xi(r);i=Yi(u,"H1",{class:!0});var l=Xi(i);s=og(l,n[0]),l.forEach(Sr),u.forEach(Sr),c.forEach(Sr),a.forEach(Sr),this.h()},h(){Bo(i,"class","text-zinc-100 text-center text-6xl whitespace-pre-wrap"),Bo(r,"class","absolute bottom-2/4 w-full"),Bo(t,"class","absolute text-center content-center h-screen w-screen")},m(o,a){ag(o,e,a),Ji(e,t),Ji(t,r),Ji(r,i),Ji(i,s)},p(o,[a]){a&1&&cg(s,o[0])},i:Ru,o:Ru,d(o){o&&Sr(e)}}}function tk(n,e,t){ZS.collection("screen").doc("text").onSnapshot(s=>{t(0,i=s.data().message)});let{message:i=""}=e;return n.$$set=s=>{"message"in s&&t(0,i=s.message)},[i]}class hk extends ng{constructor(e){super(),rg(this,e,tk,ek,ig,{message:0})}}export{hk as S,ik as _,ok as a,sk as b,rk as c,uk as d,lk as e,ZS as f,ck as g,ak as o};
