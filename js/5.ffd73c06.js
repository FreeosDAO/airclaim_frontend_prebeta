(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[5],{"11a0":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"text-center relative"},[s("q-dialog",{model:{value:t.registerModalTrigger,callback:function(e){t.registerModalTrigger=e},expression:"registerModalTrigger"}},[s("q-card",{staticClass:"q-pa-lg",staticStyle:{"max-width":"440px"}},[s("q-card-actions",{staticClass:"q-pa-none",attrs:{align:"right"}},[s("q-icon",{directives:[{name:"close-popup",rawName:"v-close-popup"}],staticClass:"q-ma-none cursor-pointer",staticStyle:{"font-size":"2rem"},attrs:{name:"close"}})],1),s("div",{staticClass:"flex justify-center text-center q-mt-md",staticStyle:{width:"80px",height:"80px",margin:"-25px auto 0"}},[s("svg",{staticClass:"freeos-logo-icon inline-block fill-current text-primary header-logoicon",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 84 84"}},[s("path",{attrs:{fill:"#00a1ed",d:"M41.7 0C18.7 0 0 18.7 0 41.7c0 23 18.7 41.7 41.7 41.7 23 0 41.7-18.7 41.7-41.7C83.4 18.7 64.8 0 41.7 0zM26.9 68.6c-2.7 0-5.3-1-7.3-2.8-13.3-12.2-14.2-32.9-2-46.3C23.8 12.8 32.6 9 41.7 9c1.7 0 3.4.1 5.1.4h.2c-5.6 2.3-9.7 7.5-10.6 13.5-.1.6-.2 1.3-.2 1.9V26c-.1 4.1.1 8.2.6 12.3l-10.6 3.9c-.7.3-1.1 1.1-.8 1.8l.5 1.2c1.4 4 5.8 6 9.8 4.6.4-.2.9-.4 1.3-.6l1-.6.3-.2v.4c.2 3 .1 6-.2 9H38c0 .3 0 .6-.1 1-.1.6-.2 1.2-.4 1.8-1.4 4.8-5.7 8-10.6 8zm14.8 5.9c-1.8 0-3.7-.2-5.5-.5 6-2.5 10.1-8 10.8-14.5.7-5.4.7-10.9-.1-16.3l10.8-6.4c1.2-.7 1.7-2.2 1.2-3.5l-.1-.3c-.5-1.4-2-2.1-3.4-1.6L45.9 35l-.2.1V35c-.4-2.8-.5-5.7-.4-8.5.4-8.3 5.3-11.7 11.3-11.6 2.5.1 4.8.9 6.8 2.4.5.4.9.8 1.4 1.3 12.8 12.6 12.9 33.3.2 46.2-6.2 6.2-14.5 9.7-23.3 9.7z"}})])]),s("q-card-section",{staticClass:"q-mt-none text-center"},[s("div",{staticClass:"text-h4"},[t._v("Register Your Interest")])]),s("q-card-section",{staticClass:"q-pt-none text-center"},[s("p",{staticClass:"text-body1"},[t._v("Before you start, we need to register your\n                    interest in the Freeos AirClaim.\n                    It’s just a press of a button.")]),s("q-checkbox",{attrs:{id:"termsCheckbox"},model:{value:t.termsCheckbox,callback:function(e){t.termsCheckbox=e},expression:"termsCheckbox"}}),s("label",{attrs:{for:"termsCheckbox"}},[t._v("I accept Freeos's "),s("a",{staticClass:"cursor-pointer",staticStyle:{"text-decoration":"underline"},on:{click:function(e){t.showTerms=!t.showTerms}}},[t._v("Terms of Service")])]),s("div",{directives:[{name:"show",rawName:"v-show",value:t.showTerms,expression:"showTerms"}],staticClass:"text-left",staticStyle:{width:"100%","max-height":"120px","overflow-y":"auto"},attrs:{class:"text-left"}},[s("a",{staticClass:"text-body2",attrs:{href:"https://www.freedao.io/t-cs",target:"_blank"}},[t._v("Freeos Terms of Use")])])],1),s("q-card-actions",{attrs:{align:"center"}},[s("q-btn",{staticClass:"q-mb-m",attrs:{disabled:!t.termsCheckbox,unelevated:"",size:"lg",outline:"",color:"primary"},on:{click:function(e){return t.registerUser()}}},[t._v("Register")])],1)],1)],1),s("CompleteDialog",{ref:"complete"}),s("div",{staticClass:"add-bg q-px-md"},[t.airkeyBalance>0&&t.showAirkey?s("svg",{staticStyle:{height:"36px",width:"36px"},attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 100 100"}},[s("path",{attrs:{d:"M86.776 33.97l-7.106-6.611 4.926-5.294a7.101 7.101 0 001.876-4.6c.043-1.796-.61-3.413-1.84-4.554-2.465-2.288-6.641-1.974-9.12.689L41.613 50.008c-7.916-3.722-17.394-1.937-23.437 4.547-7.612 8.179-7.153 21.027 1.023 28.642 3.784 3.521 8.658 5.436 13.797 5.436a20.11 20.11 0 0014.843-6.457 20.251 20.251 0 002.863-23.705l14.529-15.606 7.104 6.616c.291.271.677.406 1.076.401a1.502 1.502 0 001.045-.478l4.109-4.422a1.501 1.501 0 00-.076-2.119l-7.104-6.615 2.126-2.279 7.102 6.62a1.502 1.502 0 002.12-.075l4.117-4.422c.271-.291.416-.678.401-1.076a1.487 1.487 0 00-.475-1.046zm-5.214 3.4l-7.101-6.619a1.5 1.5 0 00-2.119.074l-4.173 4.474a1.502 1.502 0 00.075 2.121l7.105 6.617-2.066 2.224-7.104-6.615a1.455 1.455 0 00-1.076-.401 1.5 1.5 0 00-1.044.477L47.986 56.985l-.015.01a1.5 1.5 0 00-.42 2.051 17.252 17.252 0 01-1.907 21.085 17.133 17.133 0 01-12.015 5.49c-4.592.152-9.007-1.478-12.385-4.62-6.966-6.487-7.357-17.435-.873-24.402a17.283 17.283 0 0112.651-5.51c2.812 0 5.647.688 8.245 2.106a1.5 1.5 0 002.038-.604l34.4-36.948c1.35-1.448 3.63-1.698 4.884-.535.591.548.903 1.359.882 2.284a4.056 4.056 0 01-1.074 2.628l-5.947 6.392a1.499 1.499 0 00.078 2.12l7.106 6.611-2.072 2.227z"}}),s("path",{attrs:{d:"M32.999 61.242a6.964 6.964 0 00-4.923 2.135 6.964 6.964 0 00-1.973 4.989c.063 3.826 3.196 6.896 7.009 6.896l.116-.001a6.967 6.967 0 004.923-2.134 6.97 6.97 0 001.972-4.99c-.031-1.872-.789-3.621-2.135-4.923s-3.117-1.962-4.989-1.972zm2.997 9.798a3.985 3.985 0 01-2.816 1.221l-.067.001a4.016 4.016 0 01-4.01-3.944 3.981 3.981 0 011.128-2.854 3.987 3.987 0 012.817-1.221l.067-.001c1.046 0 2.034.399 2.788 1.129a3.979 3.979 0 011.221 2.815 3.98 3.98 0 01-1.128 2.854z"}})]):t._e(),s("p",{staticClass:"text-body3 q-mb-xs"},[t._v("FREEOS price xUSDC $"+t._s(t.currentPrice)+" "),t.currentPrice>=t.targetPrice?s("q-icon",{attrs:{size:"xs",name:"arrow_upward"}}):t._e(),t.currentPrice<t.targetPrice?s("q-icon",{attrs:{size:"xs",name:"arrow_downward"}}):t._e()],1),t.isFreeosEnabled?t._e():s("div",[s("b",[t._v("Freeos system is not currently operational. Please check back later.")])]),t.isFreeosEnabled?s("div",{staticClass:"panel-wrap panel-top-total q-pt-lg"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col"},[s("p",{staticClass:"text-subtitle1 q-mb-xs",staticStyle:{"line-height":"1"}},[s("strong",[t._v(t._s(t.tokenCurrencyName)+"s")])]),s("p",{staticClass:"text-bold text-h4",staticStyle:{"line-height":"1","letter-spacing":"-2px"}},[t._v(t._s(t.liquidOptions))])]),s("div",{staticClass:"col",staticStyle:{"max-width":"40px"}},[t.liquidOptions>0?s("router-link",{staticClass:"convert-btn",attrs:{to:"/mint"}},[s("small",[t._v("Mint")]),s("svg",{staticStyle:{"enable-background":"new 0 0 24 24"},attrs:{version:"1.1",id:"Layer_1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 24 24","xml:space":"preserve"}},[s("path",{attrs:{d:"M14,12.6H1.5c-0.4,0-0.7-0.3-0.7-0.7c0-0.4,0.3-0.7,0.7-0.7H14c0.4,0,0.7,0.3,0.7,0.7C14.7,12.3,14.4,12.6,14,12.6z"}}),s("path",{attrs:{d:"M10.6,16c-0.2,0-0.3-0.1-0.5-0.2c-0.3-0.3-0.3-0.7,0-0.9l3-3l-3-3c-0.3-0.3-0.3-0.7,0-0.9c0.3-0.3,0.7-0.3,0.9,0l3.5,3.5\n                                    c0.3,0.3,0.3,0.7,0,0.9L11,15.9C10.9,16,10.7,16,10.6,16z"}}),s("path",{attrs:{d:"M13.2,21.5c-4,0-7.4-2.4-8.9-6.1c-0.1-0.3,0-0.7,0.4-0.8c0.3-0.1,0.7,0,0.8,0.4c1.3,3.2,4.3,5.2,7.7,5.2\n                                    c4.5,0,8.3-3.7,8.3-8.3s-3.7-8.3-8.3-8.3c-3.4,0-6.4,2.1-7.7,5.2C5.4,9.2,5,9.4,4.7,9.3C4.3,9.1,4.2,8.8,4.3,8.4\n                                    c1.4-3.7,4.9-6.1,8.9-6.1c5.3,0,9.6,4.3,9.6,9.6S18.5,21.5,13.2,21.5z"}})])]):t._e()],1),s("div",{staticClass:"col"},[s("p",{staticClass:"text-subtitle1 q-mb-xs",staticStyle:{"line-height":"1"}},[s("strong",[t._v(t._s(t.currencyName))])]),s("p",{staticClass:"text-bold text-h4",staticStyle:{"line-height":"1","letter-spacing":"-2px"}},[t._v(t._s(t.liquidFreeos))])])])]):t._e(),t.isFreeosEnabled?s("div",{staticClass:"add-bg-white"},[s("div",{staticClass:"flex justify-between add-custome-width"},[s("div",{staticClass:"flex column text-left",staticStyle:{flex:"1"}},["Complete"!==t.airclaimStatus?s("div",{staticClass:"text-subtitle1 q-mt-xs q-mb-xs"},[t._v("Iteration")]):t._e(),s("div",{staticClass:"q-mt-xs q-mb-xs text-subtitle1 text-capitalize",staticStyle:{background:"none",border:"none",outline:"none","padding-right":"0","text-align":"left","line-height":"1"}},[s("strong",[t._v(t._s(t.notes))])])]),s("div",{staticClass:"wrap-avatar",class:{"enable-btn":t.canClaim}},[s("div",{staticClass:"avatar claim-btn",on:{click:function(e){return t.startClaim()}}},[s("q-icon",{class:{hide:t.canClaim},staticStyle:{"margin-top":"-0px","margin-bottom":"2px"},attrs:{size:"md"}},[s("svg",{staticStyle:{"enable-background":"new 0 0 512 512"},attrs:{version:"1.1",id:"Layer_1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 512 512","xml:space":"preserve"}},[s("path",{attrs:{fill:"#ffffff",d:"M501.362,383.95L320.497,51.474c-29.059-48.921-99.896-48.986-128.994,0L10.647,383.95\n                      c-29.706,49.989,6.259,113.291,64.482,113.291h361.736C495.039,497.241,531.068,433.99,501.362,383.95z M256,437.241\n                      c-16.538,0-30-13.462-30-30c0-16.538,13.462-30,30-30c16.538,0,30,13.462,30,30C286,423.779,272.538,437.241,256,437.241z\n                      M286,317.241c0,16.538-13.462,30-30,30c-16.538,0-30-13.462-30-30v-150c0-16.538,13.462-30,30-30c16.538,0,30,13.462,30,30\n                      V317.241z"}})])]),s("div",{staticClass:"claim-text"},[s("h4",{staticStyle:{"line-height":"1",margin:"0"}},[t._v("CLAIM")]),s("p",{staticStyle:{"line-height":"1",margin:"0"}},[s("small",{staticStyle:{"font-size":"90%"}},[t._v("Your Freeos"),s("br"),t._v(t._s(t.tokenCurrencyName)+"s")])])]),s("svg",{staticClass:"claim-btn-logo",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 84 84"}},[s("path",{attrs:{d:"M42.1.4C19.1.4.4 19.1.4 42.1s18.7 41.7 41.7 41.7 41.7-18.7 41.7-41.7S65.2.4 42.1.4zM27.3 69c-2.7 0-5.3-1-7.3-2.8C6.7 54 5.8 33.3 18 19.9c6.2-6.7 15-10.5 24.1-10.5 1.7 0 3.4.1 5.1.4h.2c-5.6 2.3-9.7 7.5-10.6 13.5-.1.6-.2 1.3-.2 1.9v1.2c-.1 4.1.1 8.2.6 12.3l-10.6 3.9c-.7.3-1.1 1.1-.8 1.8l.5 1.2c1.4 4 5.8 6 9.8 4.6.4-.2.9-.4 1.3-.6l1-.6.3-.2v.4c.2 3 .1 6-.2 9h-.1c0 .3 0 .6-.1 1-.1.6-.2 1.2-.4 1.8-1.4 4.8-5.7 8-10.6 8zm14.8 5.9c-1.8 0-3.7-.2-5.5-.5 6-2.5 10.1-8 10.8-14.5.7-5.4.7-10.9-.1-16.3l10.8-6.4c1.2-.7 1.7-2.2 1.2-3.5l-.1-.3c-.5-1.4-2-2.1-3.4-1.6l-9.5 3.6-.2.1v-.1c-.4-2.8-.5-5.7-.4-8.5.4-8.3 5.3-11.7 11.3-11.6 2.5.1 4.8.9 6.8 2.4.5.4.9.8 1.4 1.3 12.8 12.6 12.9 33.3.2 46.2-6.2 6.2-14.5 9.7-23.3 9.7z",fill:"#ffffff"}})])],1)]),s("div",{staticClass:"flex column text-right",staticStyle:{flex:"1"}},["Complete"!==t.airclaimStatus&&t.nextIteration&&null!==t.nextIteration.iteration_number&&t.nextIteration.iteration_number>=0?s("div",{staticClass:"text-subtitle1  q-mt-xs q-mb-xs"},[t._v("Next Claim")]):t._e(),"Complete"!==t.airclaimStatus&&t.nextIteration&&null===t.nextIteration.iteration_number?s("div",{staticClass:"text-subtitle1"},[t._v("Final Claim"),s("br"),t._v("ends in")]):t._e(),s("div",{staticClass:"text-subtitle1  q-mt-xs q-mb-xs",staticStyle:{background:"none",border:"none",outline:"none","padding-right":"0","text-align":"right","line-height":"1"}},[s("strong",[t._v(t._s(t.nextClaimDescription))])])])]),s("div",{staticClass:"flex justify-center text-center",staticStyle:{"align-items":"center",height:"80px","margin-top":"-4px"}},[t.canClaim?s("div",{staticClass:"text-h6",staticStyle:{"line-height":"1.25"}},[t.canClaim?s("a",{staticClass:"text-primary",staticStyle:{cursor:"pointer","text-decoration":"underline"},on:{click:function(e){return t.startClaim()}}},[t._v("Claim now")]):t._e(),t._v(" to get your weekly "+t._s(t.tokenCurrencyName)+"s\n                ")]):t._e(),t.canClaim?t._e():s("div",{domProps:{innerHTML:t._s(t.reasonCannotClaim)}}),s("div",{staticClass:"flex"},[s("small",{staticClass:"q-mr-auto"},[t._v("For more info on Claiming "),s("router-link",{attrs:{to:"/info#claiming"}},[t._v("click here")])],1)])])]):t._e()]),t.isFreeosEnabled?s("div",{staticClass:"q-px-md"},[s("balance")],1):t._e(),t._e(),t._e()],1)},i=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"q-mb-lg q-mt-lg"},[t._v("\n                Hi Jerome, we’ve noticed you "),s("br"),t._v(" haven’t signed up for "),s("br"),t._v(" notifcations. Signup to "),s("br"),t._v(" get notified of claims.\n            ")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"add-input flex justify-between",staticStyle:{width:"200px","margin-right":"20px",height:"35px"}},[s("input",{attrs:{placeholder:"Email"}})])}],r=s("7619"),n=s.n(r),l=s("2f62"),c=(s("d030"),function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"balance q-pt-lg q-pl-md q-pr-md q-pb-xs"},[!this.userHasStaked&&!this.airkeyBalance||this.userStake>0?s("div",{staticClass:"flex justify-between q-mb-md",staticStyle:{width:"100%"}},[s("div",{staticClass:"flex items-center text-h6"},[t._v("\n                Liquid "+t._s(t.stakeCurrency)+":\n                "),s("q-btn",{staticClass:"small-icon q-mt-sm q-ml-sm"},[s("q-tooltip",{attrs:{anchor:"top middle",self:"bottom middle",offset:[10,10]}},[t._v("\n                        This is your freely transferable "+t._s(t.stakeCurrency)+"\n                    ")])],1)],1),s("div",{staticClass:" text-h6"},[t._v(t._s(t.XPRBalance||"0"))])]):t._e(),!this.userHasStaked&&!this.airkeyBalance||this.userStake>0?s("div",{staticClass:"flex justify-between q-mb-md"},[s("div",{staticClass:"flex items-center text-h6"},[t._v("\n                Staked "+t._s(t.stakeCurrency)+":                 \n                "),s("q-btn",{staticClass:"small-icon q-mt-sm q-ml-sm"},[s("q-tooltip",{attrs:{anchor:"top middle",self:"bottom middle",offset:[10,10]}},[t._v("\n                         This "+t._s(t.stakeCurrency)+" is held for collateral to allow for claiming\n                    ")])],1)],1),s("div",{staticClass:"text-h6"},[t._v(t._s(t.userStake||"0"))])]):t._e(),s("div",{staticClass:"flex justify-between q-mb-md"},[s("div",{staticClass:"flex items-center  text-h6"},[t._v("\n               Locked "+t._s(t.tokenCurrencyName)+"s:\n            ")]),s("div",{staticClass:"col-5 text-h6"},[t._v(t._s(t.vestedOptions||"0"))]),s("div",{staticClass:"flex"},[s("small",{staticClass:"q-mr-auto"},[t._v("For more info on Locked "+t._s(t.tokenCurrencyName)+"s "),s("router-link",{attrs:{to:"/info#vested-options"}},[t._v("click here")])],1)]),s("q-btn",{staticClass:"q-mt-lg",attrs:{disable:!t.canUnvest||!t.vestedOptions,unelevated:"","no-caps":"",size:"lg",outline:"",color:"primary"},on:{click:function(e){return t.submit()}}},[s("span",[t._v("Unlock"),t.unvestPercentage&&t.canUnvest&&t.vestedOptions?s("span",[t._v(" "+t._s(t.unvestPercentage)+"%")]):t._e()])])],1)]),s("CompleteDialog",{ref:"complete"})],1)}),o=[],d=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"row"},[s("div",{staticClass:"col-5 text-grey"},[t._v("Vested FREEOS: ")]),s("div",{staticClass:"col-5 text-grey text-weight-bold"},[t._v(t._s(t.vestedOptions))]),t.canUnvest?s("div",{staticClass:"col-2"},[s("q-btn",{attrs:{size:"sm",label:"Unvest",color:"primary","no-caps":""}})],1):t._e()])},m=[],u={computed:n()({},Object(l["d"])("freeos",["vestedOptions","canUnvest"])),methods:n()({},Object(l["b"])({})),mounted(){}},v=u,h=s("2877"),p=s("9c40"),x=s("eebe"),g=s.n(x),C=Object(h["a"])(v,d,m,!1,null,null,null),f=C.exports;g()(C,"components",{QBtn:p["a"]});var b=s("37ca"),_={data(){return{stakeCurrency:"XPR",currencyName:"BETA",tokenCurrencyName:this.$options.filters.capitalize("POINT")}},computed:n()(n()({},Object(l["c"])("freeos",["XPRBalance","liquidOptions","userStake","liquidFreeos","totalFreeos","canUnvest","vestedOptions","stakeRequirement","unvestPercentage","userHasStaked","userStake","airkeyBalance"])),{},{unvestedAmount:function(){var t=this.vestedOptions&&this.unvestPercentage?Math.ceil(this.unvestPercentage/100*this.vestedOptions):0;return t}}),methods:n()(n()({},Object(l["b"])("freeos",["unvest"])),{},{async submit(){var t=await this.unvest();t instanceof Error||this.$refs.complete.openDialog({title:"Unlocked",subtitle:"You Unlocked",value:this.unvestedAmount,currency:this.tokenCurrencyName+"s"})}}),components:{BalanceVest:f,CompleteDialog:b["a"]}},y=_,w=(s("d6a0"),s("05c0")),k=Object(h["a"])(y,c,o,!1,null,"0ed16343",null),q=k.exports;g()(k,"components",{QBtn:p["a"],QTooltip:w["a"]});var S={name:"Claim",data(){return{showCompleteDialog:!1,termsCheckbox:!1,dialogTitle:"",dialogSubtitle:null,dialogValue:null,tokenCurrencyName:this.$options.filters.capitalize("POINT"),dialogCurrency:"BETA "+this.$options.filters.capitalize("POINT"),stakeCurrency:"XPR",currencyName:"BETA",registerModalOverride:!0,showTerms:!1,claimWatch:null,showAirkey:"1"}},components:{Balance:q,CompleteDialog:b["a"]},computed:n()(n()({},Object(l["c"])("freeos",["isRegistered","isFreeosEnabled","totalFreeos","liquidFreeos","liquidOptions","canClaim","reasonCannotClaim","currentIteration","nextIteration","airkeyBalance","airclaimStatus","currentPrice","targetPrice"])),{},{nextClaimDescription:function(){var t="";if(this.currentIteration&&this.currentIteration.end){const e=Math.floor(Date.parse(this.currentIteration.end+"Z")/1e3),s=Math.floor(Date.parse((new Date).toISOString())/1e3);t=this.secondsToDhms(e-s)}return t},notes:function(){return this.currentIteration&&this.currentIteration.iteration_number?"Week "+this.currentIteration.iteration_number:""},registerModalTrigger:{get(){return!1===this.isRegistered&&!0===this.registerModalOverride},async set(t){this.registerModalOverride=t,!1===this.isRegistered&&(console.log("LOGOUT"),await this.logout())}}}),methods:n()(n()(n()({},Object(l["b"])("freeos",["fetch","register","claim"])),Object(l["b"])("account",["logout"])),{},{async registerUser(){await this.register()},async startClaim(){if(this.canClaim){const e=this;var t=await e.claim();t instanceof Error||this.$refs.complete.openDialog({title:"Woohoo",subtitle:"You earned",value:this.currentIteration.claim_amount})}},secondsToDhms(t){t=Number(t);var e=Math.floor(t/86400),s=Math.floor(t%86400/3600),a=Math.floor(t%3600/60),i=(Math.floor(t%60),e>0?e+(1==e?"day":"days"):""),r=s>0?s+(1==s?"hr":"hrs"):"",n=a>0?a+(1==a?"min":"mins"):"";return i&&r?i+", "+r:r?r+", "+n:i||"0hrs, "+n}}),async created(){},async mounted(){document.body.classList.add("claim-page");var t=await this.fetch();console.log("awaitresult",t)},destroyed(){document.body.classList.remove("claim-page")}},O=S,M=(s("e794"),s("24e8")),z=s("f09f"),T=s("4b7e"),I=s("0016"),P=s("a370"),B=s("8f8e"),E=s("b498"),F=s("7f67"),j=Object(h["a"])(O,a,i,!1,null,null,null);e["default"]=j.exports;g()(j,"components",{QDialog:M["a"],QCard:z["a"],QCardActions:T["a"],QIcon:I["a"],QCardSection:P["a"],QCheckbox:B["a"],QBtn:p["a"],QColor:E["a"]}),g()(j,"directives",{ClosePopup:F["a"]})},"48f0":function(t,e,s){},"57c1":function(t,e,s){},d6a0:function(t,e,s){"use strict";s("48f0")},e794:function(t,e,s){"use strict";s("57c1")}}]);