"use strict";var i=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var q=i(function(z,n){
var j=require('@stdlib/strided-base-smap/dist'),x=require('@stdlib/math-base-special-rsqrtf/dist');function l(e,r,a,s,t){return j(e,r,a,s,t,x)}n.exports=l
});var o=i(function(A,v){
var R=require('@stdlib/strided-base-smap/dist').ndarray,_=require('@stdlib/math-base-special-rsqrtf/dist');function E(e,r,a,s,t,m,y){return R(e,r,a,s,t,m,y,_)}v.exports=E
});var f=i(function(B,p){
var O=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),c=q(),b=o();O(c,"ndarray",b);p.exports=c
});var g=require("path").join,h=require('@stdlib/utils-try-require/dist'),k=f(),u,d=h(g(__dirname,"./native.js"));d instanceof Error?u=k:u=d;module.exports=u;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
