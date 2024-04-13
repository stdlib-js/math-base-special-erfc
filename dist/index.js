"use strict";var n=function(r,i){return function(){return i||r((i={exports:{}}).exports,i),i.exports}};var p=n(function(s0,f){
function z(r){return r===0?-.3250421072470015:-.3250421072470015+r*(-.02848174957559851+r*(-.005770270296489442+r*-23763016656650163e-21))}f.exports=z
});var y=n(function(l0,c){
function E(r){return r===0?.39791722395915535:.39791722395915535+r*(.0650222499887673+r*(.005081306281875766+r*(.00013249473800432164+r*-3960228278775368e-21)))}c.exports=E
});var A=n(function(f0,q){
function M(r){return r===0?.41485611868374833:.41485611868374833+r*(-.3722078760357013+r*(.31834661990116175+r*(-.11089469428239668+r*(.035478304325618236+r*-.002166375594868791))))}q.exports=M
});var P=n(function(p0,C){
function T(r){return r===0?.10642088040084423:.10642088040084423+r*(.540397917702171+r*(.07182865441419627+r*(.12617121980876164+r*(.01363708391202905+r*.011984499846799107))))}C.exports=T
});var Q=n(function(c0,N){
function W(r){return r===0?-.6938585727071818:-.6938585727071818+r*(-10.558626225323291+r*(-62.375332450326006+r*(-162.39666946257347+r*(-184.60509290671104+r*(-81.2874355063066+r*-9.814329344169145)))))}N.exports=W
});var S=n(function(y0,R){
function X(r){return r===0?19.651271667439257:19.651271667439257+r*(137.65775414351904+r*(434.56587747522923+r*(645.3872717332679+r*(429.00814002756783+r*(108.63500554177944+r*(6.570249770319282+r*-.0604244152148581))))))}R.exports=X
});var I=n(function(q0,B){
function Y(r){return r===0?-.799283237680523:-.799283237680523+r*(-17.757954917754752+r*(-160.63638485582192+r*(-637.5664433683896+r*(-1025.0951316110772+r*-483.5191916086514))))}B.exports=Y
});var F=n(function(A0,L){
function b(r){return r===0?30.33806074348246:30.33806074348246+r*(325.7925129965739+r*(1536.729586084437+r*(3199.8582195085955+r*(2553.0504064331644+r*(474.52854120695537+r*-22.44095244658582)))))}L.exports=b
});var w=n(function(C0,m){
var h=require('@stdlib/math-base-assert-is-nan/dist'),d=require('@stdlib/math-base-special-exp/dist'),j=require('@stdlib/number-float64-base-set-low-word/dist'),k=require('@stdlib/constants-float64-pinf/dist'),D=require('@stdlib/constants-float64-ninf/dist'),G=p(),H=y(),J=A(),K=P(),O=Q(),U=S(),V=I(),Z=F(),v=1e-300,_=13877787807814457e-33,g=.8450629115104675,$=.12837916709551256,x=1,r0=-.0023621185607526594,e0=1,t0=-.009864944034847148,u0=1,i0=-.0098649429247001,a0=1;function n0(r){var i,t,a,u,e,o,s,l;if(h(r))return NaN;if(r===k)return 0;if(r===D)return 2;if(r===0)return 1;if(r<0?(i=!0,t=-r):(i=!1,t=r),t<.84375)return t<_?1-r:(a=r*r,u=$+a*G(a),e=x+a*H(a),o=u/e,r<.25?1-(r+r*o):(u=r*o,u+=r-.5,.5-u));if(t<1.25)return e=t-1,s=r0+e*J(e),l=e0+e*K(e),i?1+g+s/l:1-g-s/l;if(t<28){if(e=1/(t*t),t<2.857142857142857)u=t0+e*O(e),e=u0+e*U(e);else{if(r<-6)return 2-v;u=i0+e*V(e),e=a0+e*Z(e)}return a=j(t,0),u=d(-(a*a)-.5625)*d((a-t)*(a+t)+u/e),i?2-u/t:u/t}return i?2-v:v*v}m.exports=n0
});var v0=w();module.exports=v0;
/** @license Apache-2.0 */
/** @license Apache-2.0 */
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
