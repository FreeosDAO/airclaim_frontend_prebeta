(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[9],{"9bd8":function(e,t,s){"use strict";s.r(t);var i=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"text-center"},[s("div",[s("b",[e._v("Debug")]),s("div",[e._v("Balance: "+e._s(e.balance))]),s("div",[e._v("Is Registered: "+e._s(e.isRegistered))]),s("div",[e._v("currentIteration: "+e._s(e.currentIteration?e.currentIteration.iteration_number:"N/A"))]),s("div",[e._v("nextIteration: "+e._s(e.nextIteration?e.nextIteration.iteration_number:"N/A"))]),e.user?s("div",[s("h2",[e._v("Registered User")]),s("div",[e._v("Stake "+e._s(e.user.stake))]),s("div",[e._v("account_type "+e._s(e.user.account_type))]),s("div",[e._v("registered_iteration "+e._s(e.user.registered_iteration))]),s("div",[e._v("staked_iteration "+e._s(e.user.staked_iteration))]),s("div",[e._v("votes "+e._s(e.user.votes))])]):e._e(),e.statistics?s("div",[s("h2",[e._v("Statistics")]),s("div",[e._v("claimevents "+e._s(e.statistics.claimevents))]),s("div",[e._v("failsafecounter "+e._s(e.statistics.failsafecounter))]),s("div",[e._v("iteration "+e._s(e.statistics.iteration))]),s("div",[e._v("unvestpercent "+e._s(e.statistics.unvestpercent))]),s("div",[e._v("unvestpercentiteration "+e._s(e.statistics.unvestpercentiteration))]),s("div",[e._v("usercount "+e._s(e.statistics.usercount))])]):e._e(),e.unvests?s("div",[s("h2",[e._v("unvests")]),s("div",[e._v("unvests "+e._s(e.unvests.claimevents))])]):e._e(),e.unvests?e._e():s("div",[s("div",[e._v("USER HAS NEVER UNVESTED")])]),s("div",[e._v("\n        stakeRequirement: "+e._s(e.stakeRequirement)+"\n    ")]),s("div",[e._v("\n        userHasStaked: "+e._s(e.userHasStaked)+"\n        userClaimedAlready: "+e._s(e.userClaimedAlready)+"\n    ")]),e.canUnvest?e._e():s("div"),s("div",[s("button",{on:{click:function(t){return e.register()}}},[e._v("Register")])])])])},n=[],a=s("ded3"),r=s.n(a),u=s("2f62"),v=(s("d030"),s("96d7")),c={name:"Debug",data(){return{currentIteration:null,nextIteration:null,isNotification:!0,balance:12,freeosState:null,isRegistered:!1,user:null,unvests:null,statistics:null,stakeRequirement:null,userHasStaked:null,canUnvest:!1,userClaimedAlready:!1}},computed:r()({},Object(u["c"])("account",["claimInfo"])),methods:{async register(){if(alert(this.freeosState),this.freeosState){var e=await this.freeosState.register();alert(JSON.stringify(e))}}},async created(){const{auth:e}=await v["a"].restoreSession();freeosState.on("change",(e=>{console.log("data is now",e),e&&(this.balance=e.XPRBalance,this.currentIteration=e.currentIteration,this.nextIteration=e.nextIteration,this.isRegistered=e.isRegistered,this.user=e.user,this.statistics=e.statistics,this.unvests=e.unvests,this.stakeRequirement=e.stakeRequirement,this.userHasStaked=e.userHasStaked,this.canUnvest=e.canUnvest,this.userClaimedAlready=e.userClaimedAlready)}))}},d=c,o=s("2877"),_=Object(o["a"])(d,i,n,!1,null,null,null);t["default"]=_.exports}}]);