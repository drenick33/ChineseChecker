(this["webpackJsonpchinese-checker"]=this["webpackJsonpchinese-checker"]||[]).push([[0],{104:function(e,t,a){e.exports=a(154)},109:function(e,t,a){},110:function(e,t,a){},154:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(15),l=a.n(r),o=(a(109),a(110),a(157)),i=a(102),s=a(158),m=a(161),h=a(160),u=a(63),d=s.a.Option,E=function(e){var t=Object(n.useState)(!1),a=Object(i.a)(t,2),r=a[0],l=a[1],o=Object(u.useThemeSwitcher)(),E=o.switcher,f=o.currentTheme;if("loading"===o.status)return c.a.createElement("div",null,"Loading styles...");return c.a.createElement("div",null,c.a.createElement(h.a,{onClick:function(){l(!0)}}),c.a.createElement(m.a,{title:"Settings",placement:"right",closable:!1,onClose:function(){l(!1)},visible:r},c.a.createElement("h4",{className:"center"},"Theme: ",f),c.a.createElement(s.a,{placeholder:"Change Theme",size:"large",onSelect:function(e){return E({theme:t=e}),void localStorage.setItem("curTheme",t);var t}},c.a.createElement(d,{value:"default"},"Default"),c.a.createElement(d,{value:"dark"},"Dark"),c.a.createElement(d,{value:"light"},"Light"),c.a.createElement(d,{value:"dracula"},"Dracula"),c.a.createElement(d,{value:"monokai"},"Monokai"),c.a.createElement(d,{value:"nord"},"Nord"),c.a.createElement(d,{value:"breeze"},"Breeze"))))},f=function(){return c.a.createElement(o.a,{theme:"light",mode:"horizontal"},c.a.createElement(o.a.Item,{key:"2",style:{float:"right"}},c.a.createElement(E,null)),c.a.createElement(o.a.Item,{key:"1"},c.a.createElement("h3",null,"Chinese Checker")))},g=a(60),k=a.n(g),p=a(159),v=function(e){var t=Object(g.useSpeechRecognition)(),a=t.transcript,n=t.resetTranscript;if(!k.a.browserSupportsSpeechRecognition())return console.log("failed"),null;return c.a.createElement("div",{className:"mainContainer container-fluid"},c.a.createElement("div",{className:"col",style:{paddingTop:"250px"}},c.a.createElement("div",{className:"row d-flex justify-content-center"},""===a?c.a.createElement("p",{style:{fontSize:"24px"}},"Please Speak"):c.a.createElement("p",{style:{fontSize:"24px"}},a)),c.a.createElement("div",{className:"row d-flex justify-content-center"},c.a.createElement(p.a,{onClick:function(){console.log("recording"),k.a.startListening({language:"zh-CN"})}},"Start"),c.a.createElement(p.a,{onClick:function(){return k.a.stopListening}},"Stop"),c.a.createElement(p.a,{onClick:function(){return n}},"Reset"))))},C=a(156).a.Header;var w=function(){return c.a.createElement("div",{className:"App"},c.a.createElement(C,null,c.a.createElement(f,null)),c.a.createElement(v,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(153);var S={default:"".concat("/ChineseChecker","/breezePurple-theme.css"),dark:"".concat("/ChineseChecker","/dark-theme.css"),light:"".concat("/ChineseChecker","/light-theme.css"),dracula:"".concat("/ChineseChecker","/dracula-theme.css"),monokai:"".concat("/ChineseChecker","/monokai-theme.css"),nord:"".concat("/ChineseChecker","/nord-theme.css"),breeze:"".concat("/ChineseChecker","/breeze-theme.css")},b=localStorage.getItem("curTheme")||"";""===b&&(window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches&&(b="dracula"),b="default",localStorage.setItem("curTheme",b)),document.title="\u4e2d\u6587 Check",l.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(u.ThemeSwitcherProvider,{themeMap:S,defaultTheme:b},c.a.createElement(w,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[104,1,2]]]);
//# sourceMappingURL=main.e3ce07ca.chunk.js.map