(function(t){function e(e){for(var a,r,c=e[0],i=e[1],u=e[2],l=0,d=[];l<c.length;l++)r=c[l],Object.prototype.hasOwnProperty.call(s,r)&&s[r]&&d.push(s[r][0]),s[r]=0;for(a in i)Object.prototype.hasOwnProperty.call(i,a)&&(t[a]=i[a]);f&&f(e);while(d.length)d.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],a=!0,r=1;r<n.length;r++){var c=n[r];0!==s[c]&&(a=!1)}a&&(o.splice(e--,1),t=i(i.s=n[0]))}return t}var a={},r={2:0},s={2:0},o=[];function c(t){return i.p+"js/"+({1:"chunk-common"}[t]||t)+"."+{1:"48e6aec8",3:"597256f8",4:"b5aa42bd",5:"69212e0d",6:"3f619807",7:"1b4fdc63",8:"d7f27184",9:"f4c2f151",10:"5061fcbf",11:"3ce9f697",12:"afb01641",13:"810f7cd8"}[t]+".js"}function i(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(t){var e=[],n={3:1,4:1,5:1,6:1,7:1};r[t]?e.push(r[t]):0!==r[t]&&n[t]&&e.push(r[t]=new Promise((function(e,n){for(var a="css/"+({1:"chunk-common"}[t]||t)+"."+{1:"31d6cfe0",3:"3acf9828",4:"26e982e4",5:"fbab1916",6:"0cd6a665",7:"5b8d3348",8:"31d6cfe0",9:"31d6cfe0",10:"31d6cfe0",11:"31d6cfe0",12:"31d6cfe0",13:"31d6cfe0"}[t]+".css",s=i.p+a,o=document.getElementsByTagName("link"),c=0;c<o.length;c++){var u=o[c],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===a||l===s))return e()}var d=document.getElementsByTagName("style");for(c=0;c<d.length;c++){u=d[c],l=u.getAttribute("data-href");if(l===a||l===s)return e()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=e,f.onerror=function(e){var a=e&&e.target&&e.target.src||s,o=new Error("Loading CSS chunk "+t+" failed.\n("+a+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=a,delete r[t],f.parentNode.removeChild(f),n(o)},f.href=s;var m=document.getElementsByTagName("head")[0];m.appendChild(f)})).then((function(){r[t]=0})));var a=s[t];if(0!==a)if(a)e.push(a[2]);else{var o=new Promise((function(e,n){a=s[t]=[e,n]}));e.push(a[2]=o);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=c(t);var d=new Error;u=function(e){l.onerror=l.onload=null,clearTimeout(f);var n=s[t];if(0!==n){if(n){var a=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src;d.message="Loading chunk "+t+" failed.\n("+a+": "+r+")",d.name="ChunkLoadError",d.type=a,d.request=r,n[1](d)}s[t]=void 0}};var f=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(e)},i.m=t,i.c=a,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)i.d(n,a,function(e){return t[e]}.bind(null,a));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="",i.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=e,u=u.slice();for(var d=0;d<u.length;d++)e(u[d]);var f=l;o.push([4,0]),n()})({0:function(t,e){},"0047":function(t,e,n){},"0081":function(t,e){},"092f":function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var a=n("f508"),r=n("2a19");const{JsonRpc:s}=n("0926"),o=new s("https://proton.greymass.com:443",{fetch:fetch});function c(t){return new Promise(((e,n)=>{u(),o.get_table_rows(t).then((t=>{e(l(t))})).catch((t=>{n(d(t))}))}))}let i=0;function u(){0===i&&a["a"].show(),i++}function l(t){return i<=0||(i--,0===i&&a["a"].hide()),t}function d(t){return i=0,a["a"].hide(),(t.message||t.response.data.message)&&r["a"].create({message:t.message||t.response.data.message,color:"negative",timeout:3e3}),t}},1:function(t,e){},10:function(t,e){},11:function(t,e){},12:function(t,e){},"12a1":function(t,e,n){"use strict";var a={currentIteration:null,nextIteration:null,user:null,isRegistered:null,statistics:null,unvests:null,canUnvest:null,bcStateRequirements:null,airkeyBalance:null,XPRBalance:null,bcUnstaking:null,vestedOptions:null,freeosBalance:null,bcAirkeyBalance:null,liquidFreeos:null,liquidOptions:null,totalFreeos:null,stakeRequirement:null,userHasStaked:null,userStake:null,userClaimedAlready:null,userMeetsStakeRequirement:null,totalHolding:null,canClaim:null,isFreeosEnabled:null,reasonCannotClaim:null,accountName:null,isAuthenticated:null,allIterations:null,unstakingIteration:null,currencyName:null,stakeCurrency:null,unvestPercentage:null,airclaimStatus:null,currentPrice:null,targetPrice:null,announceObj:null};e["a"]=a},13:function(t,e){},2:function(t,e){},"2f39":function(t,e,n){"use strict";n.r(e);var a={};n.r(a),n.d(a,"isAuthenticated",(function(){return T})),n.d(a,"connecting",(function(){return j})),n.d(a,"claimInfo",(function(){return U}));var r={};n.r(r),n.d(r,"setAccount",(function(){return q})),n.d(r,"setClaimInfo",(function(){return x})),n.d(r,"setClaimAttributeVal",(function(){return F})),n.d(r,"clearAccount",(function(){return B})),n.d(r,"setConnecting",(function(){return V})),n.d(r,"setPath",(function(){return M}));var s={};n.r(s),n.d(s,"userPreviousBalance",(function(){return z})),n.d(s,"userAfterBalance",(function(){return D})),n.d(s,"isClaimed",(function(){return W}));var o={};n.r(o),n.d(o,"setUserPreviousBalance",(function(){return X})),n.d(o,"setUserAfterBalance",(function(){return K})),n.d(o,"setIsClaimed",(function(){return Y}));var c={};n.r(c),n.d(c,"onRegisterUser",(function(){return at})),n.d(c,"actionStake",(function(){return rt}));var i={};n.r(i),n.d(i,"actionUnstake",(function(){return ut}));var u={};n.r(u),n.d(u,"transferTokens",(function(){return ht}));var l={};n.r(l),n.d(l,"SET_BALANCE",(function(){return yt})),n.d(l,"SET_UNVEST_HISTORY",(function(){return vt})),n.d(l,"SET_UNVEST_PRECENTAGE",(function(){return wt}));var d={};n.r(d),n.d(d,"getVestedRecord",(function(){return It})),n.d(d,"getUnVestHistory",(function(){return Rt})),n.d(d,"getUnvestPercentage",(function(){return At})),n.d(d,"unVest",(function(){return Ct}));var f={};n.r(f),n.d(f,"SET_NEXT_CALENDAR",(function(){return St})),n.d(f,"SET_CURRENT_CALENDAR",(function(){return _t}));var m={};n.r(m),n.d(m,"getClaimCalendar",(function(){return Tt}));var h={};n.r(h),n.d(h,"setcurrentIteration",(function(){return xt})),n.d(h,"setnextIteration",(function(){return Ft})),n.d(h,"setuser",(function(){return Bt})),n.d(h,"setisRegistered",(function(){return Vt})),n.d(h,"setstatistics",(function(){return Mt})),n.d(h,"setunvests",(function(){return $t})),n.d(h,"setcanUnvest",(function(){return Lt})),n.d(h,"setbcStateRequirements",(function(){return Ht})),n.d(h,"setXPRBalance",(function(){return zt})),n.d(h,"setbcUnstaking",(function(){return Dt})),n.d(h,"setvestedOptions",(function(){return Wt})),n.d(h,"setliquidFreeos",(function(){return Xt})),n.d(h,"setairkeyBalance",(function(){return Kt})),n.d(h,"setliquidOptions",(function(){return Yt})),n.d(h,"setstakeRequirement",(function(){return Gt})),n.d(h,"setuserHasStaked",(function(){return Jt})),n.d(h,"setuserClaimedAlready",(function(){return Zt})),n.d(h,"setuserMeetsStakeRequirement",(function(){return Qt})),n.d(h,"settotalFreeos",(function(){return te})),n.d(h,"setcanClaim",(function(){return ee})),n.d(h,"setisFreeosEnabled",(function(){return ne})),n.d(h,"setuserStake",(function(){return ae})),n.d(h,"setreasonCannotClaim",(function(){return re})),n.d(h,"setaccountName",(function(){return se})),n.d(h,"setisAuthenticated",(function(){return oe})),n.d(h,"setallIterations",(function(){return ce})),n.d(h,"setunstakingIteration",(function(){return ie})),n.d(h,"setcurrencyName",(function(){return ue})),n.d(h,"setstakeCurrency",(function(){return le})),n.d(h,"setunvestPercentage",(function(){return de})),n.d(h,"setairclaimStatus",(function(){return fe})),n.d(h,"setcurrentPrice",(function(){return me})),n.d(h,"settargetPrice",(function(){return he})),n.d(h,"setannounceObj",(function(){return pe}));var p={};n.r(p),n.d(p,"monitorBlockChain",(function(){return be})),n.d(p,"fetch",(function(){return ye})),n.d(p,"transfer",(function(){return ve})),n.d(p,"register",(function(){return we})),n.d(p,"reregister",(function(){return ke})),n.d(p,"claim",(function(){return Ie})),n.d(p,"stake",(function(){return Re})),n.d(p,"unstake",(function(){return Ae})),n.d(p,"cancelUnstake",(function(){return Ce})),n.d(p,"convertOptions",(function(){return Oe})),n.d(p,"unvest",(function(){return Pe}));n("5319"),n("e54f"),n("985d"),n("0047"),n("f33e");var g=n("2b0e"),b=n("1f91"),y=n("42d2"),v=n("b05d"),w=n("2a19");g["a"].use(v["a"],{config:{},lang:b["a"],iconSet:y["a"],plugins:{Notify:w["a"]}});var k=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"q-app"}},[n("router-view")],1)},I=[],R={name:"App"},A=R,C=n("2877"),O=Object(C["a"])(A,k,I,!1,null,null,null),P=O.exports,N=n("2f62"),S=()=>({accountName:null,connecting:!1,path:"/claim",claimInfo:{liquidInAccount:{balance:""},stakedInfo:null,freeosInAccount:{balance:""},freeosHoldingRequire:{tokens_required:0},respMasterSwitch:"",respFreeosRecord:"",respStakeRequirement:"",respIsUserAlreadyClaimed:"",respAirKey:""}});const T=({accountName:t})=>null!==t,j=({connecting:t})=>t,U=({claimInfo:t})=>t;var E=n("3939");const q=function(t,{accountName:e,walletId:n}){t.accountName||(localStorage.walletId=n,t.accountName=e,t.connecting=!1,this.$router.currentRoute.fullPath!==t.path&&this.$router.push({path:t.path}))},x=function(t,e){t.claimInfo=e},F=function(t,e){const n=e.key,a=e.value;t.claimInfo[n]=a},B=function(t){localStorage.removeItem("walletId"),t.accountName=null,Object(E["a"])(1,"logout successfully")},V=(t,e)=>{t.connecting=e},M=function(t,e){t.path=e};var $=n("5db4"),L={namespaced:!0,state:S,getters:a,mutations:r,actions:$},H=()=>({userPreviousBalance:"",userAfterBalance:"",isClaimed:!1});const z=({userPreviousBalance:t})=>t,D=({userAfterBalance:t})=>t,W=({isClaimed:t})=>t,X=(t,e)=>{t.userPreviousBalance=e},K=(t,e)=>{t.userAfterBalance=e},Y=(t,e)=>{t.isClaimed=e};var G=n("79e9"),J={namespaced:!0,state:H,getters:s,mutations:o,actions:G},Z={},Q=n("d5d0"),tt=n("849e"),et=n("0926"),nt=n("96d7");async function at({state:t},e){try{const t=[{account:"statsb",name:"reguser",authorization:[{actor:e,permission:"active"}],data:{user:e}}],n=await nt["a"].sendTransaction(t);return n}catch(n){console.log(n)}}async function rt({state:t},e){try{const{amount:t,accountName:n}=e,a=[{account:"eosio.token",name:"transfer",authorization:[{actor:n,permission:"active"}],data:{from:n,to:"statsb",quantity:t,memo:"freeos stake"}}],r=await nt["a"].sendTransaction(a);return"executed"===r.processed.receipt.status?Object(E["a"])("success",r.processed.action_traces[0].console+"success"):Object(E["a"])("err","The action could not be completed. Please try later"),r}catch(n){n.message.startsWith("Cannot read property 'stake_requirement'")?Object(E["a"])("err","You are not yet registered with freeos"):"UnAuthorized"===n.message?Object(E["a"])("err","Please check that your wallet contains the correct keys for the account you are trying to register"):n.message.startsWith("assertion failure with message: ")?Object(E["a"])("err",n.message.split("assertion failure with message: ")[1]):"unrecognized private key type"===n.message?Object(E["a"])("err","There is a problem with your private key. Please check your wallet has the correct key(s)"):n instanceof et["RpcError"]||n instanceof TypeError?Object(E["a"])("err","Connection error. Please try later"):Object(E["a"])("err","The action could not be completed. Please try later")}}var st={namespaced:!0,state:Z,getters:Q,mutations:tt,actions:c},ot={},ct=n("0081"),it=n("a82b");async function ut({state:t},e){try{const t=[{account:"statsb",name:"unstake",authorization:[{actor:e,permission:"active"}],data:{user:e}}],n=await nt["a"].sendTransaction(t);return"executed"===n.processed.receipt.status?Object(E["a"])("success",n.processed.action_traces[0].console):Object(E["a"])("err","The action could not be completed. Please try later"),n}catch(n){"UnAuthorized"===n.message?Object(E["a"])("err","Please check that your wallet contains the correct keys for the account you are trying to register"):n.message.startsWith("assertion failure with message: ")?Object(E["a"])("err",n.message.split("assertion failure with message: ")[1]):"unrecognized private key type"===n.message?Object(E["a"])("err","There is a problem with your private key. Please check your wallet has the correct key(s)"):n instanceof et["RpcError"]||n instanceof TypeError?Object(E["a"])("err","Connection error. Please try later"):Object(E["a"])("err","The action could not be completed. Please try later")}}var lt={namespaced:!0,state:ot,getters:ct,mutations:it,actions:i},dt={},ft=n("3777"),mt=n("f7c0");async function ht({state:t},e){const{fromAccountName:n,toAccountName:a,tokenType:r,sendAmount:s,memo:o}=e,c=[{account:"XPR"===r?"eosio.token":"statsb",name:"transfer",authorization:[{actor:n,permission:"active"}],data:{from:n,to:a,quantity:`${parseFloat(s).toFixed("4")} ${r}`,memo:o}}];try{const t=await nt["a"].sendTransaction(c);let e=t.processed.action_traces[0].console;return e||(e="Transfer successfully"),w["a"].create({message:e,color:"positive"}),t}catch(i){return i}}var pt={namespaced:!0,state:dt,getters:ft,mutations:mt,actions:u},gt={balance:0,unVestHistory:null,unVestPercentage:0},bt=n("d392");function yt(t,e){_.has(e,"balance")?t.balance=e.balance:t.balance=0}function vt(t,e){0===e.length?t.unVestHistory=null:t.unVestHistory=e}function wt(t,e){0===e.length?t.unVestPercentage=0:t.unVestPercentage=e}var kt=n("092f");async function It(t,e){const n={code:"statsb",scope:e,table:"vestaccounts",limit:1},a=await Object(kt["a"])(n);t.commit("SET_BALANCE",a.rows[0])}async function Rt(t,e){const{accountName:n,iterationNumber:a}=e,r=await Object(kt["a"])({json:!0,code:"statsb",scope:n,table:"unvests",limit:1,lower_bound:a});t.commit("SET_UNVEST_HISTORY",r.rows)}async function At(t,e){const n=await Object(kt["a"])({json:!0,code:"statsb",scope:e,table:"counters",limit:1});t.commit("SET_UNVEST_PRECENTAGE",n.rows)}async function Ct(t,e){try{const n=[{account:"statsb",name:"unvest",authorization:[{actor:e,permission:"active"}],data:{user:e}}],a=await nt["a"].sendTransaction(n);if("executed"===a.processed.receipt.status){const n=a.processed.action_traces[0].console;w["a"].create({message:n,color:"positive"}),t.dispatch("getVestedRecord",e),t.dispatch("getUnVestHistory",e)}else w["a"].create({message:"The action could not be completed. Please try later",color:"negative"})}catch(n){console.log(n)}}var Ot={namespaced:!0,state:gt,getters:bt,mutations:l,actions:d},Pt={currentIteration:{end_date:"",iteration_number:null},nextCalendar:""},Nt=n("387f");function St(t,e){t.nextCalender=e}function _t(t,e){t.currentIteration=e}async function Tt(t){const e=await Object(kt["a"])({json:!0,code:"statscfg",scope:"statscfg",table:"iterations",limit:26}),n=Math.floor((new Date).getTime()/1e3);let a={iteration_number:0};e.rows&&e.rows.length&&e.rows.map(((r,s)=>{const o=r.start,c=r.end;n>o&&n<c&&(t.commit("SET_CURRENT_CALENDAR",e.rows[s]),a=e.rows.length===s+1?e.rows[s+1]:null)})),t.commit("SET_NEXT_CALENDAR",a)}var jt={namespaced:!0,state:Pt,getters:Nt,mutations:f,actions:m},Ut=n("12a1"),Et=()=>Ut["a"],qt=n("ee95");const xt=(t,e)=>{t.currentIteration=e},Ft=(t,e)=>{t.nextIteration=e},Bt=(t,e)=>{t.user=e},Vt=(t,e)=>{t.isRegistered=e},Mt=(t,e)=>{t.statistics=e},$t=(t,e)=>{t.unvests=e},Lt=(t,e)=>{t.canUnvest=e},Ht=(t,e)=>{t.bcStateRequirements=e},zt=(t,e)=>{t.XPRBalance=e},Dt=(t,e)=>{t.bcUnstaking=e},Wt=(t,e)=>{t.vestedOptions=e},Xt=(t,e)=>{t.liquidFreeos=e},Kt=(t,e)=>{t.airkeyBalance=e},Yt=(t,e)=>{t.liquidOptions=e},Gt=(t,e)=>{t.stakeRequirement=e},Jt=(t,e)=>{t.userHasStaked=e},Zt=(t,e)=>{t.userClaimedAlready=e},Qt=(t,e)=>{t.userMeetsStakeRequirement=e},te=(t,e)=>{t.totalFreeos=e},ee=(t,e)=>{t.canClaim=e},ne=(t,e)=>{t.isFreeosEnabled=e},ae=(t,e)=>{t.userStake=e},re=(t,e)=>{t.reasonCannotClaim=e},se=(t,e)=>{t.accountName=e},oe=(t,e)=>{t.isAuthenticated=e},ce=(t,e)=>{t.allIterations=e},ie=(t,e)=>{t.unstakingIteration=e},ue=(t,e)=>{t.currencyName=e},le=(t,e)=>{t.currencyName=e},de=(t,e)=>{t.unvestPercentage=e},fe=(t,e)=>{t.airclaimStatus=e},me=(t,e)=>{t.currentPrice=e},he=(t,e)=>{t.targetPrice=e},pe=(t,e)=>{t.announceObj=e};var ge=n("d030");async function be(t){ge["a"].getInstance().on("change",(e=>{if(e)for(const n in e)e.hasOwnProperty(n)&&t.commit("set"+n,e[n])}))}async function ye(t){var e=await ge["a"].getInstance().singleFetch();return e}async function ve({state:t},e){console.log("transfer",e);var n=await ge["a"].getInstance().transfer(e);return console.log("Result of transfer",n),n}async function we(){var t=await ge["a"].getInstance().register();return t}async function ke(){var t=await ge["a"].getInstance().reregister();return t}async function Ie(){var t=await ge["a"].getInstance().claim();return console.log("Result of claim",t),t}async function Re({state:t},e){var n=await ge["a"].getInstance().stake(e);return console.log("Result of stake",n),n}async function Ae(){var t=await ge["a"].getInstance().unstake();return console.log("Result of unstake",t),t}async function Ce(){var t=await ge["a"].getInstance().cancelUnstake();return console.log("Result of cancelUnstake",t),t}async function Oe({state:t},e){var n=await ge["a"].getInstance().convertOptions(e);return console.log("Result of convertOptions",n),n}async function Pe(){var t=await ge["a"].getInstance().unvest();return console.log("Result of unvest",t),t}var Ne={namespaced:!0,state:Et,getters:qt,mutations:h,actions:p};g["a"].use(N["a"]);var Se=function(){const t=new N["a"].Store({modules:{account:L,claim:J,stake:st,unstake:lt,transfer:pt,vest:Ot,calendar:jt,freeos:Ne},strict:!1});return t},_e=n("8c4f");n("ddb0");const Te=[{path:"/",component:()=>Promise.all([n.e(0),n.e(1),n.e(7)]).then(n.bind(null,"9097")),children:[{path:"",component:()=>Promise.all([n.e(0),n.e(4)]).then(n.bind(null,"8b24"))}]},{path:"/",meta:{requiresAuth:!0},component:()=>Promise.all([n.e(0),n.e(1),n.e(6)]).then(n.bind(null,"713b")),children:[{path:"/claim",component:()=>Promise.all([n.e(0),n.e(1),n.e(5)]).then(n.bind(null,"11a0"))},{path:"/stake",component:()=>Promise.all([n.e(0),n.e(1),n.e(12)]).then(n.bind(null,"3468"))},{path:"/re-register",component:()=>Promise.all([n.e(0),n.e(11)]).then(n.bind(null,"9a5e"))},{path:"/transfer",component:()=>Promise.all([n.e(0),n.e(1),n.e(13)]).then(n.bind(null,"46fe"))},{path:"/mint",component:()=>Promise.all([n.e(0),n.e(1),n.e(8)]).then(n.bind(null,"b8c1"))},{path:"/debug",component:()=>n.e(9).then(n.bind(null,"9bd8"))},{path:"/info",component:()=>Promise.all([n.e(0),n.e(3)]).then(n.bind(null,"8a05"))}]},{path:"*",component:()=>Promise.all([n.e(0),n.e(10)]).then(n.bind(null,"e51e"))}];var je=Te,Ue=n("0ec9"),Ee=n.n(Ue);g["a"].use(Ee.a),g["a"].use(_e["a"]);var qe=function({store:t}){const e=new _e["a"]({scrollBehavior:function(t,e,n){return t.hash?{selector:t.hash}:{x:0,y:0}},routes:je,mode:"history",base:""});return e.beforeEach(((e,n,a)=>{e.matched.some((t=>t.meta.RrequiresAuth))?t.getters["freeos/isAuthenticated"]?a():a({path:`/?returnUrl=${e.path}`}):a()})),e},xe=async function(){const t="function"===typeof Se?await Se({Vue:g["a"]}):Se,e="function"===typeof qe?await qe({Vue:g["a"],store:t}):qe;t.$router=e;const n={router:e,store:t,render:t=>t(P),el:"#q-app"};return{app:n,store:t,router:e}},Fe=n("bc3a"),Be=n.n(Fe);const Ve=Be.a.create({baseURL:"",headers:{"Content-Type":"application/json","x-api-key":""}});Ve.interceptors.response.use((t=>t.data||{}));var Me=({Vue:t,store:e})=>{t.prototype.$axios=Ve,e.$axios=Ve},$e=n("0008"),Le=n("b6e4"),He=async({Vue:t,store:e})=>{const n=[Object(Le["a"])()],a=Object($e["a"])({appName:"Freeos",network:{protocol:"https",blockchain:"eos",host:"proton.greymass.com",port:"443",chainId:"384da888112027f0321850a169f737c33e53b388aad48b5adace4bab97f437e0"},walletProviders:n}),r={accessContext:a};t.prototype.$transit=r,e.$transit=r},ze=n("2ef0"),De=n.n(ze),We=({Vue:t})=>{t.prototype.$_=De.a},Xe=({Vue:t})=>{t.filter("capitalize",(function(t){return t.charAt(0).toUpperCase()+t.slice(1).toLowerCase()}))};const Ke="";async function Ye(){const{app:t,store:e,router:n}=await xe();let a=!1;const r=t=>{a=!0;const e=Object(t)===t?n.resolve(t).route.fullPath:t;window.location.href=e},s=window.location.href.replace(window.location.origin,""),o=[Me,He,We,Xe];for(let i=0;!1===a&&i<o.length;i++)if("function"===typeof o[i])try{await o[i]({app:t,router:n,store:e,Vue:g["a"],ssrContext:null,redirect:r,urlPath:s,publicPath:Ke})}catch(c){return c&&c.url?void(window.location.href=c.url):void console.error("[Quasar] boot error:",c)}!0!==a&&new g["a"](t)}Ye()},3:function(t,e){},3777:function(t,e){},"387f":function(t,e){},3939:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var a=n("2a19");function r(t,e){a["a"].create({color:"success"===t||1===t?"positive":"negative",message:e,position:"top",timeout:"success"===t||1===t?2e3:6e4,actions:[{icon:"close",color:"white"}]})}},4:function(t,e,n){t.exports=n("2f39")},5:function(t,e){},"5db4":function(t,e,n){"use strict";n.r(e),function(t){n.d(e,"checkIfLoggedIn",(function(){return o})),n.d(e,"connectWallet",(function(){return c})),n.d(e,"connectScatter",(function(){return i})),n.d(e,"connectProton",(function(){return u})),n.d(e,"logout",(function(){return l})),n.d(e,"getAccountInfo",(function(){return d})),n.d(e,"GetFreeosRecord",(function(){return f})),n.d(e,"getLiquidInAccount",(function(){return m})),n.d(e,"getStakeRequirementInfo",(function(){return h})),n.d(e,"getResAirKey",(function(){return p})),n.d(e,"getUserStakedInfo",(function(){return g})),n.d(e,"getFreeosInfo",(function(){return b})),n.d(e,"getRespMasterSwitch",(function(){return y})),n.d(e,"getClaimDetailInfo",(function(){return v})),n.d(e,"setpath",(function(){return w}));var a=n("3939"),r=n("092f"),s=n("96d7");async function o(t){const{auth:e}=await s["a"].restoreSession();e&&e.actor&&e.permission&&t.commit("setAccount",{accountName:e.actor,walletId:s["a"].link.walletType})}function c(t,e){t.dispatch("connectProton",e)}const i=async function({commit:t},e){t("setConnecting",!0);const n=this.$transit.accessContext.initWallet(this.$transit.accessContext.getWalletProviders().find((t=>t.id===e)));n.subscribe((n=>{let r,s=1;n.connecting?r=`Connecting to ${e}`:n.authenticating?r=`Logging in to ${e}`:n.authenticationError?(r=n.authenticationErrorMessage,s=0):n.connectionError?(r=n.connectionErrorMessage,s=0):n.accountInfo&&(this.$transit.wallet&&this.$transit.wallet.accountInfo||(r="login successfully",t("setAccount",{accountName:n.accountInfo.account_name,walletId:e}))),r&&Object(a["a"])(s,r)})),await n.connect(),await n.login(),this.$transit.wallet=n,this.$transit.eosApi=n.eosApi};async function u(t,e){try{const{auth:e}=await s["a"].login();e&&e.actor&&e.permission&&t.commit("setAccount",{accountName:e.actor,walletId:s["a"].link.walletType})}catch(n){console.error(n)}}const l=async function({commit:t}){await t("clearAccount",null),await s["a"].logout()};function d(t){t.dispatch("GetFreeosRecord"),t.dispatch("getLiquidInAccount"),t.dispatch("getStakeRequirementInfo"),t.dispatch("getResAirKey"),t.dispatch("getUserStakedInfo"),t.dispatch("getFreeosInfo"),t.dispatch("getRespMasterSwitch")}async function f(t){const e=await Object(r["a"])({json:!0,code:"statsb",scope:t.state.accountName,table:"users"}),n={key:"respFreeosRecord",value:e.rows[0]||null};console.log(n),t.commit("setClaimAttributeVal",n)}async function m(t){const e=await Object(r["a"])({json:!0,code:"eosio.token",scope:t.state.accountName,table:"accounts",limit:-1}),n={key:"liquidInAccount",value:e.rows[0]||null};t.commit("setClaimAttributeVal",n)}async function h(t){const e=await Object(r["a"])({json:!0,code:"statsb",scope:"statsb",table:"stakes"}),n={key:"respStakeRequirement",value:e.rows[0]};t.commit("setClaimAttributeVal",n)}async function p(t){const e=await Object(r["a"])({json:!0,code:"statsb",scope:t.state.accountName,table:"accounts",lower_bound:"AIRKEY",limit:1}),n={key:"respAirKey",value:e.rows[0]};t.commit("setClaimAttributeVal",n)}async function g(t){const e=await Object(r["a"])({json:!0,code:"statsb",scope:t.state.accountName,table:"users",limit:1}),n={key:"stakedInfo",value:e.rows[0]||null};t.commit("setClaimAttributeVal",n)}async function b(t){const e=await Object(r["a"])({json:!0,code:"statsb",scope:t.state.accountName,table:"accounts",lower_bound:"FREEOS",limit:1}),n={key:"freeosInAccount",value:e.rows[0]};t.commit("setClaimAttributeVal",n)}async function y(e,n){const a=await Object(r["a"])({json:!0,code:t.env.AIRCLAIM_CONFIGRATION_CONTRACT,scope:t.env.AIRCLAIM_CONFIGRATION_CONTRACT,table:"parameters",lower_bound:"masterswitch",limit:1}),s={key:"respMasterSwitch",value:a.rows[0]};e.commit("setClaimAttributeVal",s)}async function v(t,e){var n;let a=null;e&&(a=await Object(r["a"])({json:!0,code:"statsb",scope:t.state.accountName,table:"claims",lower_bound:e,limit:1}));const s={key:"respIsUserAlreadyClaimed",value:null===(n=a)||void 0===n?void 0:n.rows[0]};t.commit("setClaimAttributeVal",s)}const w=function({commit:t},e){console.log(this.$route.fullPath),console.log("whatever",e),t("setPath",e)}}.call(this,n("4362"))},6:function(t,e){},7:function(t,e){},"79e9":function(t,e,n){"use strict";n.r(e),function(t){n.d(e,"actionClaim",(function(){return o}));var a=n("3939"),r=n("092f"),s=n("96d7");const o=async function({commit:e},n){const o=await Object(r["a"])({json:!0,code:"statsb",scope:n,table:"accounts",lower_bound:"FREEOS",limit:1}),c=o.rows[0]&&parseFloat(o.rows[0].balance)||0;e("setUserPreviousBalance",c);try{const o=await s["a"].sendTransaction({actions:[{account:"statsb",name:"claim",authorization:[{actor:t.accountName,permission:"active"}],data:{user:t.accountName}}]},{blocksBehind:3,expireSeconds:30});if("executed"===o.processed.receipt.status){Object(a["a"])("success",o.processed.action_traces[0].console);const t=Object(r["a"])({json:!0,code:"statsb",scope:n,table:"accounts",lower_bound:"FREEOS",limit:1}),s=t.rows[0]&&parseFloat(t.rows[0].balance)||0;e("setUserAfterBalance",s),e("setIsClaimed",!0)}else Object(a["a"])("err","The action could not be completed. Please try later");return o}catch(i){console.log(i),"UnAuthorized"===i.message?Object(a["a"])("err","Please check that your wallet contains the correct keys for the account you are trying to register"):i.message.startsWith("assertion failure with message: ")?Object(a["a"])("err",i.message.split("assertion failure with message: ")[1]):"unrecognized private key type"===i.message?Object(a["a"])("err","There is a problem with your private key. Please check your wallet has the correct key(s)"):Object(a["a"])("err","The action could not be completed. Please try later")}}}.call(this,n("c8ba"))},8:function(t,e){},"849e":function(t,e){},9:function(t,e){},"96d7":function(t,e,n){"use strict";var a=n("adc8"),r=n.n(a),s=n("cf0c"),o=n("d030");class c{constructor(){r()(this,"connect",(async t=>{try{const{link:e,session:n}=await Object(s["a"])({linkOptions:{chainId:this.chainId,endpoints:this.endpoints,restoreSession:t},transportOptions:{requestAccount:this.requestAccount,backButton:!0},selectorOptions:{appName:this.appName,appLogo:"https://freeos.io/freeos-appLogo.svg?v=3",customStyleOptions:{modalBackgroundColor:"#00a1ed",logoBackgroundColor:"white",isLogoRound:!0,optionBackgroundColor:"#0091dd",optionFontColor:"white",primaryFontColor:"white",secondaryFontColor:"#eee",linkColor:"#eee"}}});this.link=e,this.session=n}catch(e){console.error(e)}})),r()(this,"login",(async()=>{try{return await this.connect(!1),{auth:this.session.auth}}catch(t){return console.error(t),t}})),r()(this,"sendTransaction",(async t=>{try{const e=await this.session.transact({actions:t},{broadcast:!0,blocksBehind:3,expireSeconds:30});return e}catch(e){return console.error(e),e}})),r()(this,"logout",(async()=>{console.log("this.requestAccount",this.requestAccount),this.session&&this.session.auth&&await this.link.removeSession(this.requestAccount,this.session.auth),await o["a"].getInstance().singleFetch()})),r()(this,"restoreSession",(async()=>{try{return await this.connect(!0),this.session?{auth:this.session.auth}:{auth:{actor:"",permission:""}}}catch(t){return console.error(t),t}})),this.chainId="384da888112027f0321850a169f737c33e53b388aad48b5adace4bab97f437e0",this.endpoints="https://proton.greymass.com, https://proton.eosphere.io".split(", "),this.appName="Freeos",this.requestAccount="statsb",this.session=null,this.link=null}}const i=new c;e["a"]=i},a82b:function(t,e){},d030:function(t,e,n){"use strict";n.d(e,"a",(function(){return l}));var a=n("adc8"),r=n.n(a),s=(n("ddb0"),n("faa1")),o=(n("f508"),n("2a19"),n("96d7"));n("12a1");const{JsonRpc:c}=n("0926"),i=new c("https://proton.greymass.com:443",{fetch:fetch});function u(t){return i.get_table_rows(t)}class l extends s["EventEmitter"]{static getInstance(){var t=l.sInstance;return t||(l.sInstance=t=new l),t}constructor(){super(),this.start()}setWalletUser(t){this.walletUser=t}async start(){if(!this.isRunning){this.isRunning=!0;var t=async()=>{const{auth:e}=await o["a"].restoreSession();console.log("Wallet session restored",e),this.setWalletUser({accountName:e?e.actor:null,walletId:o["a"]&&o["a"].link?o["a"].link.walletType:null}),this.actionFetch().then((e=>{this.emit("change",e),this.timer&&clearTimeout(this.timer),this.timer=setTimeout(t,1e4)})).catch((e=>{this.timer&&clearTimeout(this.timer),this.timer=setTimeout(t,1e4)}))};t()}}stop(){this.isRunning=!1,this.timer&&(clearTimeout(this.timer),this.timer=null)}async register(){return this.sendTransaction("statsb","reguser")}async reregister(){return this.sendTransaction("statsb","reverify")}async convertOptions(t){return this.sendTransaction("statsb","convert",t)}async sendTransaction(t,e,n){var a=this.walletUser?this.walletUser.accountName:null,r={};if(n?r=n:r.user=a,a)try{const n=[{account:t,name:e,authorization:[{actor:a,permission:"active"}],data:r}];console.log("Sending transaction with",n);const s=await o["a"].sendTransaction(n);return setTimeout((()=>{this.fetch()}),"750"),s}catch(s){console.log("Problem sendingTransaction "+e,s)}else console.log("No account.....")}async claim(){return this.sendTransaction("statsb","claim")}async transfer(t){var e="statstokens";return"XPR"===t.token&&(e="eosio.token"),delete t.token,this.sendTransaction(e,"transfer",t)}async fetch(){try{this.stop(),this.actionFetch()}finally{this.start()}}async singleFetch(){const{auth:t}=await o["a"].restoreSession();this.setWalletUser({accountName:t?t.actor:null,walletId:o["a"]&&o["a"].link?o["a"].link.walletType:null}),this.actionFetch().then((t=>{this.emit("change",t)})).catch((t=>{console.log("Problem fetching data",t)}))}async unstake(){return this.sendTransaction("statsb","unstake")}async unvest(){return this.sendTransaction("statsb","unvest")}async cancelUnstake(){return this.sendTransaction("statsb","unstakecncl")}async stake(t){var e={};return e.from=this.walletUser?this.walletUser.accountName:null,e.to="statsb",e.memo="freeos stake",e.quantity=`${parseFloat(t).toFixed("4")} XPR`||!1,this.sendTransaction("eosio.token","transfer",e)}async logout(){await this.setWalletUser({}),await this.singleFetch()}async actionFetch(){var t=await this.getRecord("statscfg","parameters",null,{lower_bound:"",upper_bound:"",limit:100});console.log("masterswitch",t);var e=t.filter((function(t){return"masterswitch"==t.paramname}))[0];console.log("masterswitch",e);var n=!(!e||!e.value||"1"!==e.value),a=t.filter((function(t){return"announcetext"==t.paramname}))[0],r=t.filter((function(t){return"announceid"==t.paramname}))[0],s=t.filter((function(t){return"announcelink"==t.paramname}))[0],o={text:a&&a.value?a.value:null,id:r&&r.value?r.value:null,link:s&&s.value?s.value:null},c=await this.getRecord("statscfg","iterations","statscfg",{limit:100});if(c&&!Array.isArray(c)){var i=[];i.push(c),c=i}var u=this.getRecord("statsb","statistics"),l=this.getRecord("statsb","unvests"),d=this.getRecord("statscfg","stakereqs","statscfg",{limit:100}),f=null,m=null,h=null,p=null,g=null,b=null,y=null,v=null,w=null,k="XPR",I="BETA",R=[c,u,d];this.walletUser&&this.walletUser.accountName&&(l=this.getRecord("statsb","unvests",this.walletUser.accountName),f=this.getRecord("eosio.proton","usersinfo","eosio.proton",{limit:1,upper_bound:this.walletUser.accountName,lower_bound:this.walletUser.accountName}),v=this.getUserRecord("statsb","users"),m=this.getUserRecordAsNumber("eosio.token","accounts",{upper_bound:k,lower_bound:k,limit:1},"balance"),h=this.getRecord("statsb","unstakereqs","statsb",{limit:1,upper_bound:this.walletUser.accountName,lower_bound:this.walletUser.accountName}),p=this.getUserRecordAsNumber("statsb","accounts",{upper_bound:"POINT",lower_bound:"POINT",limit:1},"balance"),g=this.getUserRecordAsNumber("statsb","vestaccounts",{upper_bound:"POINT",lower_bound:"POINT",limit:1},"balance"),b=this.getUserRecordAsNumber("statstokens","accounts",{upper_bound:I,lower_bound:I,limit:1},"balance"),y=this.getUserRecordAsNumber("statsb","accounts",{lower_bound:"AIRKEY",upper_bound:"AIRKEY",limit:1},"balance"),w=this.getRecord("statscfg","exchangerate","statscfg",{limit:1}),R=R.concat([l,f,v,m,h,p,g,b,y,w]));var A=await Promise.all(R);let[C,O,P,N,S,_,T,j,U,E,q,x,F]=A;x||(x=0),U||(U=0),E||(E=0),q||(q=0);var B=j&&j.iteration?j.iteration:0;j=!!j;var V=this.getCurrentAndNextIteration(C),M=null!=V&&V.currentIteration?V.currentIteration.iteration_number:-1;0!==M&&-1!==M||(n=!1);var $=null!=N&&N.iteration_number==M,L=O&&O.unvestpercent>0&&!$,H=O&&O.usercount?O.usercount:0,z=null,D=!1,W=!1,X=!1,K=null!=V&&V.currentIteration?V.currentIteration.tokens_required:9999999,Y=!1,G=!1,J=0,Z=0,Q="",tt=V&&V.currentIteration?V.currentIteration:null,et=V.nextIteration,nt=null;nt=et&&et.startStamp?"Pending":tt&&null===tt.iteration_number&&et&&null===et.iteration_number?"Complete":"Running",console.log("stakeRequirement",S);var at=null;if(_)at=_.account_type;else if(S){if(at="100",S.kyc)for(var rt=S.kyc,st=0;st<rt.length+1;++st)for(const t in rt[st])if(console.log(t),rt[st][t].includes("firstname")&&rt[st][t].includes("lastname")){at="118";break}}else at="101";console.log("accountType",at);for(st=P.length-1;st>=0;--st){var ot=P[st];if(H>=ot.threshold){z=ot["requirement_"+String.fromCharCode(at)];break}}console.log("stakeRequirement",z),_&&(Z=U+E+q,J=parseFloat(_.stake),D=_.staked_iteration>0,W=_.last_issuance==M,Y=x>0||Z>=K,G=x>0||D,X=M>0&&Y&&G&&!W,X||("Pending"===nt?Q="<div class='text-h5 text-negative'>Airclaim Not Started</div>":"Complete"===nt?Q="<div class='text-h5 text-negative'>The Airclaim has ended</div>":Y?W?Q='<div class="text-h5 text-primary">You have already claimed</div>':G||(Q="<div class='text-h5 text-negative'>You must <a href='/stake' class='text-primary' style='text-decoration:underline'>stake</a> to claim!</div>"):Q="Oops! In order to Claim you need a minimum "+V.currentIteration.tokens_required+" "+$options.filters.capitalize("POINT")+"s in your Wallet. Please <a style='text-decoration:underline' href='/transfer'>transfer</a> an additional "+(V.currentIteration.tokens_required-Z)+" "+I+" in order to Claim"));var ct={currencyName:I,liquidOptions:U,currentIteration:tt,nextIteration:et,user:_,accountName:this.walletUser.accountName,isAuthenticated:!(!this.walletUser.accountName||""===this.walletUser.accountName),isRegistered:null!==_,statistics:O,unvests:N,unvestPercentage:O&&O.unvestpercent?O.unvestpercent:0,canUnvest:L,bcStateRequirements:P,isFreeosEnabled:n,XPRBalance:T||null,bcUnstaking:j,unstakingIteration:B,vestedOptions:E,liquidFreeos:q,airkeyBalance:x,allIterations:C,airclaimStatus:nt,stakeRequirement:z,userHasStaked:D,userClaimedAlready:W,userStake:J,userMeetsStakeRequirement:G,totalFreeos:Z,canClaim:X,announceObj:o,reasonCannotClaim:Q,currentPrice:F&&F.currentprice?(F.currentprice/1).toFixed(6):0,targetPrice:F&&F.targetprice?(F.targetprice/1).toFixed(6):0};return console.log("output",ct),ct}async getUserRecordAsNumber(t,e,n,a){var r=await this.getUserRecord(t,e,n);if(r&&r[a]){var s=r[a];return parseFloat(s)}return null}async getUserRecord(t,e,n){return this.getRecord(t,e,this.walletUser.accountName,n)}async getRecord(t,e,n,a){n||(n=t);var r={json:!0,code:t,scope:n,table:e};a&&(r.limit=a.limit,r.upper_bound=a.upper_bound,r.lower_bound=a.lower_bound);const s=await u(r);return s&&s.rows?1===s.rows.length?s.rows[0]:s.rows.length>0?s.rows:null:null}getCurrentAndNextIteration(t){const e=Math.floor(Date.parse((new Date).toISOString())/1e3);var n={startStamp:null,iteration_number:null},a={iteration_number:null};if(t&&t.length){const r=Math.floor(Date.parse(t[0].start+"Z")/1e3);if(e<r)return n=t[0],n.startStamp=r,{currentIteration:a,nextIteration:n};t.map(((r,s)=>{const o=Math.floor(Date.parse(r.start+"Z")/1e3),c=Math.floor(Date.parse(r.end+"Z")/1e3);e>o&&e<c&&(a=t[s],t.length!==s+1&&(n=t[s+1]))}))}return{currentIteration:a,nextIteration:n}}}r()(l,"sInstance",null)},d392:function(t,e){},d5d0:function(t,e){},ee95:function(t,e,n){"use strict";n.r(e),n.d(e,"currentIteration",(function(){return a})),n.d(e,"nextIteration",(function(){return r})),n.d(e,"user",(function(){return s})),n.d(e,"isRegistered",(function(){return o})),n.d(e,"statistics",(function(){return c})),n.d(e,"unvests",(function(){return i})),n.d(e,"canUnvest",(function(){return u})),n.d(e,"bcStateRequirements",(function(){return l})),n.d(e,"XPRBalance",(function(){return d})),n.d(e,"bcUnstaking",(function(){return f})),n.d(e,"vestedOptions",(function(){return m})),n.d(e,"liquidFreeos",(function(){return h})),n.d(e,"airkeyBalance",(function(){return p})),n.d(e,"liquidOptions",(function(){return g})),n.d(e,"stakeRequirement",(function(){return b})),n.d(e,"userHasStaked",(function(){return y})),n.d(e,"userClaimedAlready",(function(){return v})),n.d(e,"userMeetsStakeRequirement",(function(){return w})),n.d(e,"totalFreeos",(function(){return k})),n.d(e,"canClaim",(function(){return I})),n.d(e,"isFreeosEnabled",(function(){return R})),n.d(e,"userStake",(function(){return A})),n.d(e,"reasonCannotClaim",(function(){return C})),n.d(e,"isAuthenticated",(function(){return O})),n.d(e,"accountName",(function(){return P})),n.d(e,"allIterations",(function(){return N})),n.d(e,"unstakingIteration",(function(){return S})),n.d(e,"stakeCurrency",(function(){return _})),n.d(e,"currencyName",(function(){return T})),n.d(e,"unvestPercentage",(function(){return j})),n.d(e,"airclaimStatus",(function(){return U})),n.d(e,"currentPrice",(function(){return E})),n.d(e,"targetPrice",(function(){return q})),n.d(e,"announceObj",(function(){return x}));const a=({currentIteration:t})=>t,r=({nextIteration:t})=>t,s=({user:t})=>t,o=({isRegistered:t})=>t,c=({statistics:t})=>t,i=({unvests:t})=>t,u=({canUnvest:t})=>t,l=({bcStateRequirements:t})=>t,d=({XPRBalance:t})=>t,f=({bcUnstaking:t})=>t,m=({vestedOptions:t})=>t,h=({liquidFreeos:t})=>t,p=({airkeyBalance:t})=>t,g=({liquidOptions:t})=>t,b=({stakeRequirement:t})=>t,y=({userHasStaked:t})=>t,v=({userClaimedAlready:t})=>t,w=({userMeetsStakeRequirement:t})=>t,k=({totalFreeos:t})=>t,I=({canClaim:t})=>t,R=({isFreeosEnabled:t})=>t,A=({userStake:t})=>t,C=({reasonCannotClaim:t})=>t,O=({isAuthenticated:t})=>t,P=({accountName:t})=>t,N=({allIterations:t})=>t,S=({unstakingIteration:t})=>t,_=({stakeCurrency:t})=>t,T=({currencyName:t})=>t,j=({unvestPercentage:t})=>t,U=({airclaimStatus:t})=>t,E=({currentPrice:t})=>t,q=({targetPrice:t})=>t,x=({announceObj:t})=>t},f33e:function(t,e,n){},f7c0:function(t,e){}});