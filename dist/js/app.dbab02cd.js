(function(e){function n(n){for(var r,i,s=n[0],c=n[1],u=n[2],l=0,f=[];l<s.length;l++)i=s[l],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&f.push(a[i][0]),a[i]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);d&&d(n);while(f.length)f.shift()();return o.push.apply(o,u||[]),t()}function t(){for(var e,n=0;n<o.length;n++){for(var t=o[n],r=!0,i=1;i<t.length;i++){var c=t[i];0!==a[c]&&(r=!1)}r&&(o.splice(n--,1),e=s(s.s=t[0]))}return e}var r={},a={app:0},o=[];function i(e){return s.p+"js/"+({about:"about"}[e]||e)+"."+{about:"f1ec0cbb"}[e]+".js"}function s(n){if(r[n])return r[n].exports;var t=r[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,s),t.l=!0,t.exports}s.e=function(e){var n=[],t=a[e];if(0!==t)if(t)n.push(t[2]);else{var r=new Promise((function(n,r){t=a[e]=[n,r]}));n.push(t[2]=r);var o,c=document.createElement("script");c.charset="utf-8",c.timeout=120,s.nc&&c.setAttribute("nonce",s.nc),c.src=i(e);var u=new Error;o=function(n){c.onerror=c.onload=null,clearTimeout(l);var t=a[e];if(0!==t){if(t){var r=n&&("load"===n.type?"missing":n.type),o=n&&n.target&&n.target.src;u.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",u.name="ChunkLoadError",u.type=r,u.request=o,t[1](u)}a[e]=void 0}};var l=setTimeout((function(){o({type:"timeout",target:c})}),12e4);c.onerror=c.onload=o,document.head.appendChild(c)}return Promise.all(n)},s.m=e,s.c=r,s.d=function(e,n,t){s.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,n){if(1&n&&(e=s(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(s.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)s.d(t,r,function(n){return e[n]}.bind(null,r));return t},s.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(n,"a",n),n},s.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},s.p="/anyversary/",s.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=n,c=c.slice();for(var l=0;l<c.length;l++)n(c[l]);var d=u;o.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},"0f0f":function(e,n,t){"use strict";t("eb91")},"56d7":function(e,n,t){"use strict";t.r(n);t("e260"),t("e6cf"),t("cca6"),t("a79d");var r=t("7a23"),a=t("cf05"),o=t.n(a),i=Object(r["h"])("div",{id:"nav",class:"d-flex align-items-center p-3"},[Object(r["h"])("img",{src:o.a,alt:""}),Object(r["h"])("h1",{class:"flex-grow-1"},"AnyVersary"),Object(r["h"])("p",{class:"mb-0"},' Input your Anniversary and find all your other "Versaries" ')],-1);function s(e,n){var t=Object(r["z"])("router-view");return Object(r["r"])(),Object(r["e"])(r["a"],null,[i,Object(r["h"])(t)],64)}t("f20e");const c={};c.render=s;var u=c,l=t("9483");Object(l["a"])("".concat("/anyversary/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});t("d3b7"),t("3ca3"),t("ddb0");var d=t("6c02"),f={class:"container-fluid pt-3"},v={class:"row"},h={class:"col-md-4 col-xl-3 mb-3 mb-md-0 text-center"},b=Object(r["h"])("h2",{class:"mb-3"},"Anniversary",-1),m={class:"col-md-8 col-xl-9"},p=Object(r["h"])("h2",{class:"text-center mb-3"},"AnyVersaries",-1),y={class:"row"};function w(e,n,t,a,o,i){var s=Object(r["z"])("DatePicker"),c=Object(r["z"])("AnyVersary");return Object(r["r"])(),Object(r["e"])("div",f,[Object(r["h"])("div",v,[Object(r["h"])("div",h,[b,Object(r["h"])(s,{modelValue:o.anniversaryDate,"onUpdate:modelValue":n[1]||(n[1]=function(e){return o.anniversaryDate=e}),mode:"dateTime",timezone:o.timezone,"first-day-of-week":2},null,8,["modelValue","timezone"])]),Object(r["h"])("div",m,[p,Object(r["h"])("div",y,[Object(r["h"])(c,{name:"Second",type:"seconds",startInterval:1e7,anniversary:i.anniversaryUnix,now:i.nowUnix},null,8,["anniversary","now"]),Object(r["h"])(c,{name:"Minute",type:"minutes",startInterval:1e5,anniversary:i.anniversaryUnix,now:i.nowUnix},null,8,["anniversary","now"]),Object(r["h"])(c,{name:"Hour",type:"hours",startInterval:1e3,anniversary:i.anniversaryUnix,now:i.nowUnix},null,8,["anniversary","now"]),Object(r["h"])(c,{name:"Day",type:"days",startInterval:100,anniversary:i.anniversaryUnix,now:i.nowUnix},null,8,["anniversary","now"]),Object(r["h"])(c,{name:"Week",type:"weeks",startInterval:25,anniversary:i.anniversaryUnix,now:i.nowUnix},null,8,["anniversary","now"])])])])])}var O=t("7b37"),j=(t("b0c0"),t("99af"),Object(r["J"])("data-v-50606616"));Object(r["u"])("data-v-50606616");var g={class:"col-12 col-xl-6 mb-3"},x={class:"card"},k={class:"card-body"},U={class:"card-title"},S={class:"d-flex align-items-center mb-3"},D=Object(r["h"])("p",{class:"me-3 mb-0"},"Interval:",-1),P={class:"d-flex align-items-center mb-3"},I=Object(r["h"])("p",{class:"ms-3 mb-0"},"Show past (20 max)",-1);Object(r["s"])();var A=j((function(e,n,t,a,o,i){return Object(r["r"])(),Object(r["e"])("div",g,[Object(r["h"])("div",x,[Object(r["h"])("div",k,[Object(r["h"])("h4",U,Object(r["B"])(t.name)+"versary",1),Object(r["h"])("div",S,[D,Object(r["H"])(Object(r["h"])("input",{type:"number",class:"form-control me-3","onUpdate:modelValue":n[1]||(n[1]=function(e){return o.interval=e})},null,512),[[r["E"],o.interval,void 0,{number:!0}]])]),Object(r["h"])("div",P,[Object(r["H"])(Object(r["h"])("input",{type:"checkbox","onUpdate:modelValue":n[2]||(n[2]=function(e){return o.showPast=e})},null,512),[[r["D"],o.showPast]]),I]),(Object(r["r"])(!0),Object(r["e"])(r["a"],null,Object(r["x"])(i.versaries,(function(e){return Object(r["r"])(),Object(r["e"])("p",{key:e,class:{"d-none":e.past&&!o.showPast,"past-versary":e.past}},Object(r["B"])("".concat(e.nth," ").concat(t.name,"versary: ").concat(e.date)),3)})),128))])])])})),T=(t("a9e3"),{name:"AnyVersaries",data:function(){return{interval:this.startInterval,showPast:!1,locale:navigator.language,pastToShow:20,futureToShow:5}},props:{name:String,type:{validator:function(e){return-1!==["seconds","minutes","hours","days","weeks"].indexOf(e)}},startInterval:{type:Number,required:!0},anniversary:Number,now:Number},computed:{intervalSecs:function(){var e={seconds:this.interval,minutes:60*this.interval,hours:60*this.interval*60,days:60*this.interval*60*24,weeks:60*this.interval*60*24*7};return e[this.type]},versaries:function(){for(var e=[],n=Math.ceil((this.now-this.anniversary)/this.intervalSecs),t=Math.max(0,n-this.pastToShow),r=Math.min(t+25,n+this.futureToShow),a=t;a<r;a++){var o=new Date(1e3*(this.anniversary+this.intervalSecs*a));e.push({nth:this.toOrdinal(a),date:this.formatDate(o),past:a<r-5})}return e}},methods:{toOrdinal:function(e){var n=["th","st","nd","rd"],t=e%100;return e+(n[(t-20)%10]||n[t]||n[0])},formatDate:function(e){var n={weekday:"short",year:"numeric",month:"long",day:"numeric",hour:"numeric",minute:"numeric",second:"numeric"},t=new Intl.DateTimeFormat(this.locale,n);return t.format(e)}}});t("0f0f");T.render=A,T.__scopeId="data-v-50606616";var V=T,N={name:"Home",components:{DatePicker:O["a"],AnyVersary:V},data:function(){return{anniversaryDate:new Date,timezone:"",now:new Date,timer:""}},computed:{nowUnix:function(){return parseInt(this.now.getTime()/1e3)},anniversaryUnix:function(){return parseInt(this.anniversaryDate.getTime()/1e3)},secondVersary:function(){return isNaN(this.anniversaryUnix)?null:this.nowUnix-this.anniversaryUnix}},created:function(){},methods:{updateNow:function(){this.now=new Date}}};N.render=w;var M=N,_=[{path:"/",name:"Home",component:M},{path:"/about",name:"About",component:function(){return t.e("about").then(t.bind(null,"f820"))}}],z=Object(d["a"])({history:Object(d["b"])("/anyversary/"),routes:_}),E=z,H=t("5502"),q=Object(H["a"])({state:{},mutations:{},actions:{},modules:{}});t("ab55");Object(r["d"])(u).use(q).use(E).mount("#app")},"88d4":function(e,n,t){},ab55:function(e,n,t){},cf05:function(e,n,t){e.exports=t.p+"img/logo.6c86583a.png"},eb91:function(e,n,t){},f20e:function(e,n,t){"use strict";t("88d4")}});
//# sourceMappingURL=app.dbab02cd.js.map