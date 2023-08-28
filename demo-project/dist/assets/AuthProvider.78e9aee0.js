import{r as k,_ as z,C as $,F as M,g as j,a as G,b as K,c as W,L as v,S as q,d as X,i as H,e as P,G as Y,s as w,T as J,f as Z}from"./index-e24386e7.51d7a79b.js";import{o as D,c as b,F as Q,a as ee,p as R,w as te,y as se,cT as N,cU as A}from"./index.7cf7c61e.js";import{u as y}from"./useProjectStore.52ff6a12.js";import{V as oe}from"./VBtn.173f27d7.js";var ne="firebase",ie="10.1.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */k(ne,ie,"app");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}u.UNAUTHENTICATED=new u(null),u.GOOGLE_CREDENTIALS=new u("google-credentials-uid"),u.FIRST_PARTY=new u("first-party-uid"),u.MOCK_USER=new u("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let f="10.1.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const m=new X("@firebase/firestore");function re(t,...e){if(m.logLevel<=v.DEBUG){const s=e.map(S);m.debug(`Firestore (${f}): ${t}`,...s)}}function ae(t,...e){if(m.logLevel<=v.ERROR){const s=e.map(S);m.error(`Firestore (${f}): ${t}`,...s)}}function ce(t,...e){if(m.logLevel<=v.WARN){const s=e.map(S);m.warn(`Firestore (${f}): ${t}`,...s)}}function S(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(s){return JSON.stringify(s)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function O(t="Unexpected state"){const e=`FIRESTORE (${f}) INTERNAL ASSERTION FAILED: `+t;throw ae(e),new Error(e)}function V(t,e){t||O()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const g="invalid-argument",L="failed-precondition";class h extends M{constructor(e,s){super(e,s),this.code=e,this.message=s,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x{constructor(e,s){this.user=s,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class le{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,s){e.enqueueRetryable(()=>s(u.UNAUTHENTICATED))}shutdown(){}}class ue{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,s){this.changeListener=s,e.enqueueRetryable(()=>s(this.token.user))}shutdown(){this.changeListener=null}}class he{constructor(e){this.auth=null,e.onInit(s=>{this.auth=s})}getToken(){return this.auth?this.auth.getToken().then(e=>e?(V(typeof e.accessToken=="string"),new x(e.accessToken,new u(this.auth.getUid()))):null):Promise.resolve(null)}invalidateToken(){}start(e,s){}shutdown(){}}class de{constructor(e,s,o){this.t=e,this.i=s,this.o=o,this.type="FirstParty",this.user=u.FIRST_PARTY,this.u=new Map}l(){return this.o?this.o():null}get headers(){this.u.set("X-Goog-AuthUser",this.t);const e=this.l();return e&&this.u.set("Authorization",e),this.i&&this.u.set("X-Goog-Iam-Authorization-Token",this.i),this.u}}class ge{constructor(e,s,o){this.t=e,this.i=s,this.o=o}getToken(){return Promise.resolve(new de(this.t,this.i,this.o))}start(e,s){e.enqueueRetryable(()=>s(u.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class pe{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class _e{constructor(e){this.h=e,this.appCheck=null,e.onInit(s=>{this.appCheck=s})}getToken(){return this.appCheck?this.appCheck.getToken().then(e=>e?(V(typeof e.token=="string"),new pe(e.token)):null):Promise.resolve(null)}invalidateToken(){}start(e,s){}shutdown(){}}class T{constructor(e,s){this.projectId=e,this.database=s||"(default)"}static empty(){return new T("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof T&&e.projectId===this.projectId&&e.database===this.database}}function me(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(o){return o.constructor?o.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":O()}function fe(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new h(g,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const s=me(t);throw new h(g,`Expected type '${e.name}', but it was: ${s}`)}}return t}/**
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
 */function Ee(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var F,n;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(n=F||(F={}))[n.OK=0]="OK",n[n.CANCELLED=1]="CANCELLED",n[n.UNKNOWN=2]="UNKNOWN",n[n.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",n[n.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",n[n.NOT_FOUND=5]="NOT_FOUND",n[n.ALREADY_EXISTS=6]="ALREADY_EXISTS",n[n.PERMISSION_DENIED=7]="PERMISSION_DENIED",n[n.UNAUTHENTICATED=16]="UNAUTHENTICATED",n[n.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",n[n.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",n[n.ABORTED=10]="ABORTED",n[n.OUT_OF_RANGE=11]="OUT_OF_RANGE",n[n.UNIMPLEMENTED=12]="UNIMPLEMENTED",n[n.INTERNAL=13]="INTERNAL",n[n.UNAVAILABLE=14]="UNAVAILABLE",n[n.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const U=new Map;class C{constructor(e){var s,o;if(e.host===void 0){if(e.ssl!==void 0)throw new h(g,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(s=e.ssl)===null||s===void 0||s;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new h(g,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}(function(i,d,a,c){if(d===!0&&c===!0)throw new h(g,`${i} and ${a} cannot be used together.`)})("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Ee((o=e.experimentalLongPollingOptions)!==null&&o!==void 0?o:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new h(g,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new h(g,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new h(g,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(o,l){return o.timeoutSeconds===l.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class B{constructor(e,s,o,l){this._authCredentials=e,this._appCheckCredentials=s,this._databaseId=o,this._app=l,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new C({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new h(L,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new h(L,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new C(e),e.credentials!==void 0&&(this._authCredentials=function(o){if(!o)return new le;switch(o.type){case"firstParty":return new ge(o.sessionIndex||"0",o.iamToken||null,o.authTokenFactory||null);case"provider":return o.client;default:throw new h(g,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(s){const o=U.get(s);o&&(re("ComponentProvider","Removing Datastore"),U.delete(s),o.terminate())}(this),Promise.resolve()}}function Ae(t,e){const s=typeof t=="object"?t:j(),o=typeof t=="string"?t:e||"(default)",l=G(s,"firestore/lite").getImmediate({identifier:o});if(!l._initialized){const i=K("firestore");i&&Te(l,...i)}return l}function Te(t,e,s,o={}){var l;const i=(t=fe(t,B))._getSettings(),d=`${e}:${s}`;if(i.host!=="firestore.googleapis.com"&&i.host!==d&&ce("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},i),{host:d,ssl:!1})),o.mockUserToken){let a,c;if(typeof o.mockUserToken=="string")a=o.mockUserToken,c=u.MOCK_USER;else{a=W(o.mockUserToken,(l=t._app)===null||l===void 0?void 0:l.options.projectId);const r=o.mockUserToken.sub||o.mockUserToken.user_id;if(!r)throw new h(g,"mockUserToken must contain 'sub' or 'user_id' field!");c=new u(r)}t._authCredentials=new ue(new x(a,c))}}(function(){(function(s){f=s})(`${q}_lite`),z(new $("firestore/lite",(e,{instanceIdentifier:s,options:o})=>{const l=e.getProvider("app").getImmediate(),i=new B(new he(e.getProvider("auth-internal")),new _e(e.getProvider("app-check-internal")),function(a,c){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new h(g,'"projectId" not provided in firebase.initializeApp.');return new T(a.options.projectId,c)}(l,s),l);return o&&i._setSettings(o),i},"PUBLIC").setMultipleInstances(!0)),k("firestore-lite","4.1.0",""),k("firestore-lite","4.1.0","esm2017")})();const Ie={apiKey:"AIzaSyBB0XqApTC2IffhAsZzr43A2qTFkzCRV-A",authDomain:"student-info-37c3d.firebaseapp.com",projectId:"student-info-37c3d",storageBucket:"student-info-37c3d.appspot.com",messagingSenderId:"68896003246",appId:"1:68896003246:web:a7a228cfcb0bc34cbf893f"},Pe=H(Ie);Ae(Pe);const we={class:"d-flex justify-center flex-wrap gap-3"},De={__name:"AuthProvider",setup(t){const l=[{icon:"fa-google",color:"#dd4b39",login:async()=>{const i=y(),d=P(),a=new Y;try{const r=(await w(d,a)).user;i.setUser(r);const E=r.uid,_=r.email,I=r.displayName;try{const p=await N.post("/firebase-callback",{uid:E,userEmail:_,userName:I});console.log("User synced with MongoDB:",p.data)}catch(p){console.error("Error syncing user with MongoDB:",p)}console.log("user:",r),A.push("/dashboards/analytics")}catch(c){console.log("Error logging in with Google",c)}}},{icon:"fa-twitter",color:"#1da1f2",login:async()=>{const i=y(),d=P(),a=new J;try{const r=(await w(d,a)).user;i.setUser(r);const E=r.uid,_=r.email,I=r.displayName;try{const p=await N.post("/firebase-callback",{uid:E,userEmail:_,userName:I,usrePassword:null});console.log("User synced with MongoDB:",p.data)}catch(p){console.error("Error syncing user with MongoDB:",p)}console.log("user:",r),A.push("/dashboards/analytics")}catch(c){console.log("Error in logging with Twitter",c)}}},{icon:"fa-facebook",color:"#4267b2",login:async()=>{const i=y(),d=P(),a=new Z;try{FB.getLoginStatus(function(c){if(c.status==="connected"){console.log("User is already logged in with Facebook");const r=c.authResponse.userID;i.setUser(r),A.push("/dashboards/analytics")}else w(d,a).then(r=>{const _=r.authResponse.userID;i.setUser(_),A.push("/dashboards/analytics"),console.log("User logged in with Facebook:",_)}).catch(r=>{console.log("Error in logging with Facebook",r)})})}catch(c){console.log("Error in checking Facebook login status",c)}}}];return(i,d)=>(D(),b("div",we,[(D(),b(Q,null,ee(l,a=>R(oe,{key:a.icon,icon:"",variant:"tonal",size:"38",color:a.color,class:"rounded",onClick:c=>a.login()},{default:te(()=>[R(se,{size:"18",icon:a.icon},null,8,["icon"])]),_:2},1032,["color","onClick"])),64))]))}};export{De as _};
