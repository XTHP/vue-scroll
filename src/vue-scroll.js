!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.VueScroll=t():e.VueScroll=t()}("undefined"!=typeof self?self:this,function(){return function(e){function t(n){if(r[n])return r[n].exports;var i=r[n]={i:n,l:!1,exports:{}};return e[n].call(i.exports,i,i.exports,t),i.l=!0,i.exports}var r={};return t.m=e,t.c=r,t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/dist/",t(t.s=1)}([function(e,t,r){"use strict";var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e};t.a={data:function(){return{x:0,y:0,sliderSize:null,wrapperHeight:null,contentHeight:null,maxScrollY:null,mouse:!1,isTime:!1,time:null}},props:{data:{type:[Array,Number,Object]},width:{type:String,required:!0},height:{type:String,required:!0},isTrackY:{type:Boolean,default:!0},isTrackX:{type:Boolean,default:!1},TrackSize:{type:Number,default:7},TrackColor:{type:String,default:"#eee"},TrackYstyle:{type:Object},WrapperTrack:{type:Object}},computed:{WrapperTracks:function(){return n({},this.WrapperTrack,{width:this.TrackSize+"px",backgroundColor:this.TrackColor})},TrackYstyles:function(){return n({},this.TrackYstyle,{height:this.sliderSize+"px",transform:"translateY("+this.y+"px)"})}},mounted:function(){this.init()},methods:{init:function(){this.comSlider()},scroll:function(e){var t=this;this.moveSlider(e.target.scrollTop),this.$emit("scroll",e),this.isTime||this.$emit("scrollStart",e),this.isTime&&clearTimeout(this.time),this.time=setTimeout(function(){t.$emit("scrollEnd",e),t.isTime=!1},300),this.isTime=!0,e.target.scrollTop===this.maxScrollY&&this.$emit("scrollBottom",e),0===e.target.scrollTop&&this.$emit("scrollTop",e)},comSlider:function(){this.wrapperHeight=this.$refs.wrapper.offsetHeight,this.contentHeight=this.$refs.content.offsetHeight,this.maxScrollY=this.contentHeight-this.wrapperHeight,this.sliderSize=this.wrapperHeight*this.wrapperHeight/this.contentHeight},moveSlider:function(e){this.y=(this.wrapperHeight-this.sliderSize)*e/this.maxScrollY},mouseDown:function(e){var t=this,r=e.clientY,n=this.y,i=e.clientY-e.offsetY;document.onmousemove=function(e){var e=e||window.event;e.preventDefault?e.preventDefault():window.event.returnValue=!1;var o=e.clientY-r+n;e.clientY-r<-i&&(o=0),e.clientY-r>t.wrapperHeight-t.sliderSize-i&&(o=t.wrapperHeight-t.sliderSize),t.moveSlider(o),t.y=o,t.$refs.wrapper.scrollTop=t.y*t.maxScrollY/(t.wrapperHeight-t.sliderSize)},document.onmouseup=function(e){document.onmousemove=null,document.onmouseup=null}},scrollTo:function(e){this.moveSlider(e),this.$refs.wrapper.scrollTop=e}},beforeDestroy:function(){},watch:{data:{handler:function(e,t){var r=this;this.$nextTick(function(){r.init(),r.moveSlider(r.$refs.wrapper.scrollTop)})}}}}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(2);t.default={install:function(e,t){e.component("vue-scroll",n.a)}}},function(e,t,r){"use strict";function n(e){r(3)}var i=r(0),o=r(9),s=r(8),a=n,l=s(i.a,o.a,!1,a,null,null);t.a=l.exports},function(e,t,r){var n=r(4);"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);r(6)("b8981466",n,!0,{})},function(e,t,r){t=e.exports=r(5)(!1),t.push([e.i,".scroll-wrapper{position:relative;box-sizing:border-box;overflow:hidden;display:block}.scroll-wrapper .scroll{overflow-y:scroll;height:100%;margin:0;margin-right:-17px}.scroll-wrapper .scroll-track-y{height:100%;position:absolute;top:0;right:0;z-index:1000}",""])},function(e,t){function r(e,t){var r=e[1]||"",i=e[3];if(!i)return r;if(t&&"function"==typeof btoa){var o=n(i);return[r].concat(i.sources.map(function(e){return"/*# sourceURL="+i.sourceRoot+e+" */"})).concat([o]).join("\n")}return[r].join("\n")}function n(e){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(e))))+" */"}e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var n=r(t,e);return t[2]?"@media "+t[2]+"{"+n+"}":n}).join("")},t.i=function(e,r){"string"==typeof e&&(e=[[null,e,""]]);for(var n={},i=0;i<this.length;i++){var o=this[i][0];"number"==typeof o&&(n[o]=!0)}for(i=0;i<e.length;i++){var s=e[i];"number"==typeof s[0]&&n[s[0]]||(r&&!s[2]?s[2]=r:r&&(s[2]="("+s[2]+") and ("+r+")"),t.push(s))}},t}},function(e,t,r){function n(e){for(var t=0;t<e.length;t++){var r=e[t],n=u[r.id];if(n){n.refs++;for(var i=0;i<n.parts.length;i++)n.parts[i](r.parts[i]);for(;i<r.parts.length;i++)n.parts.push(o(r.parts[i]));n.parts.length>r.parts.length&&(n.parts.length=r.parts.length)}else{for(var s=[],i=0;i<r.parts.length;i++)s.push(o(r.parts[i]));u[r.id]={id:r.id,refs:1,parts:s}}}}function i(){var e=document.createElement("style");return e.type="text/css",p.appendChild(e),e}function o(e){var t,r,n=document.querySelector("style["+g+'~="'+e.id+'"]');if(n){if(h)return m;n.parentNode.removeChild(n)}if(y){var o=d++;n=f||(f=i()),t=s.bind(null,n,o,!1),r=s.bind(null,n,o,!0)}else n=i(),t=a.bind(null,n),r=function(){n.parentNode.removeChild(n)};return t(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;t(e=n)}else r()}}function s(e,t,r,n){var i=r?"":n.css;if(e.styleSheet)e.styleSheet.cssText=b(t,i);else{var o=document.createTextNode(i),s=e.childNodes;s[t]&&e.removeChild(s[t]),s.length?e.insertBefore(o,s[t]):e.appendChild(o)}}function a(e,t){var r=t.css,n=t.media,i=t.sourceMap;if(n&&e.setAttribute("media",n),v.ssrId&&e.setAttribute(g,t.id),i&&(r+="\n/*# sourceURL="+i.sources[0]+" */",r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */"),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var l="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!l)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var c=r(7),u={},p=l&&(document.head||document.getElementsByTagName("head")[0]),f=null,d=0,h=!1,m=function(){},v=null,g="data-vue-ssr-id",y="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());e.exports=function(e,t,r,i){h=r,v=i||{};var o=c(e,t);return n(o),function(t){for(var r=[],i=0;i<o.length;i++){var s=o[i],a=u[s.id];a.refs--,r.push(a)}t?(o=c(e,t),n(o)):o=[];for(var i=0;i<r.length;i++){var a=r[i];if(0===a.refs){for(var l=0;l<a.parts.length;l++)a.parts[l]();delete u[a.id]}}}};var b=function(){var e=[];return function(t,r){return e[t]=r,e.filter(Boolean).join("\n")}}()},function(e,t){e.exports=function(e,t){for(var r=[],n={},i=0;i<t.length;i++){var o=t[i],s=o[0],a=o[1],l=o[2],c=o[3],u={id:e+":"+i,css:a,media:l,sourceMap:c};n[s]?n[s].parts.push(u):r.push(n[s]={id:s,parts:[u]})}return r}},function(e,t){e.exports=function(e,t,r,n,i,o){var s,a=e=e||{},l=typeof e.default;"object"!==l&&"function"!==l||(s=e,a=e.default);var c="function"==typeof a?a.options:a;t&&(c.render=t.render,c.staticRenderFns=t.staticRenderFns,c._compiled=!0),r&&(c.functional=!0),i&&(c._scopeId=i);var u;if(o?(u=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),n&&n.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(o)},c._ssrRegister=u):n&&(u=n),u){var p=c.functional,f=p?c.render:c.beforeCreate;p?(c._injectStyles=u,c.render=function(e,t){return u.call(t),f(e,t)}):c.beforeCreate=f?[].concat(f,u):[u]}return{esModule:s,exports:a,options:c}}},function(e,t,r){"use strict";var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"scroll-wrapper",style:{width:e.width,height:e.height}},[e.isTrackY?r("div",{staticClass:"scroll-track-y",style:e.WrapperTracks},[r("div",{staticStyle:{width:"100%","background-color":"rgba(0,0,0,.2)",borderRadius:"5px"},style:e.TrackYstyles,on:{mousedown:e.mouseDown}})]):e._e(),e._v(" "),r("div",{ref:"wrapper",staticClass:"scroll",on:{scroll:e.scroll}},[r("div",{ref:"content",style:{marginRight:e.isTrackY?e.TrackSize+"px":0,marginBottom:e.isTrackX?e.TrackSize+"px":0}},[e._t("default")],2)])])},i=[],o={render:n,staticRenderFns:i};t.a=o}])});
//# sourceMappingURL=vue-scroll.js.map