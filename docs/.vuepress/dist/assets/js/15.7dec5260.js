(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{402:function(t,n,r){"use strict";r.r(n);r(33),r(34),r(177),r(384),r(179),r(387);var o={props:{github_url:String},mounted:function(){console.log("mounted");var t=r(354);t.get("https://api.github.com/repos/NeneWang/streamlit-fastapi-template").then((function(n){var r=n.data,o=r.description,e=r.languages_url;console.log("Project Description:",o),t.get(e).then((function(t){var n=function(t){var n=Object.values(t).reduce((function(t,n){return t+n}),0),r={};for(var o in t){var e=t[o]/n*100;r[o]=e}return r}(t.data);for(var r in console.log("Languages Used:"),n){var o=n[r];console.log("".concat(r,": ").concat(o.toFixed(2),"%"))}})).catch((function(t){return console.error("Error fetching languages:",t)}))})).catch((function(t){return console.error("Error fetching repository information:",t)}))}},e=r(47),a=Object(e.a)(o,(function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"long-card"},[n("p",[this._v("Link: "+this._s(this.github_url))])])}),[],!1,null,null,null);n.default=a.exports}}]);