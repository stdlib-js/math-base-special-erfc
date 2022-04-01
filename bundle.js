// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(n,r){"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(n="undefined"!=typeof globalThis?globalThis:n||self).erfc=r()}(this,(function(){"use strict";var n=function(n){return n!=n},r=Math.floor,t=Math.ceil,e=r,o=t;var u=function(n){return n<0?o(n):e(n)},i=Number.NEGATIVE_INFINITY,f=Number.POSITIVE_INFINITY,a=f,c=i;var y=function(n){return n===a||n===c};var l=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}();var v=function(){return l&&"symbol"==typeof Symbol.toStringTag},p=Object.prototype.toString,A=p;var b=function(n){return A.call(n)},w=Object.prototype.hasOwnProperty;var U=function(n,r){return null!=n&&w.call(n,r)},d="function"==typeof Symbol?Symbol.toStringTag:"",m=U,h=d,s=p;var I=b,N=function(n){var r,t,e;if(null==n)return s.call(n);t=n[h],r=m(n,h);try{n[h]=void 0}catch(r){return s.call(n)}return e=s.call(n),r?n[h]=t:delete n[h],e},g=v()?N:I,F=g,S="function"==typeof Uint32Array;var H="function"==typeof Uint32Array?Uint32Array:null,O=function(n){return S&&n instanceof Uint32Array||"[object Uint32Array]"===F(n)},T=H;var j=function(){var n,r;if("function"!=typeof T)return!1;try{r=new T(r=[1,3.14,-3.14,4294967296,4294967297]),n=O(r)&&1===r[0]&&3===r[1]&&4294967293===r[2]&&0===r[3]&&1===r[4]}catch(r){n=!1}return n};var E="function"==typeof Uint32Array?Uint32Array:void 0,G=function(){throw new Error("not implemented")},L=j()?E:G,W=g,M="function"==typeof Float64Array;var x="function"==typeof Float64Array?Float64Array:null,P=function(n){return M&&n instanceof Float64Array||"[object Float64Array]"===W(n)},V=x;var Y=function(){var n,r;if("function"!=typeof V)return!1;try{r=new V([1,3.14,-3.14,NaN]),n=P(r)&&1===r[0]&&3.14===r[1]&&-3.14===r[2]&&r[3]!=r[3]}catch(r){n=!1}return n};var _="function"==typeof Float64Array?Float64Array:void 0,k=function(){throw new Error("not implemented")},q=Y()?_:k,z=g,B="function"==typeof Uint8Array;var C="function"==typeof Uint8Array?Uint8Array:null,D=function(n){return B&&n instanceof Uint8Array||"[object Uint8Array]"===z(n)},J=C;var K=function(){var n,r;if("function"!=typeof J)return!1;try{r=new J(r=[1,3.14,-3.14,256,257]),n=D(r)&&1===r[0]&&3===r[1]&&253===r[2]&&0===r[3]&&1===r[4]}catch(r){n=!1}return n};var Q="function"==typeof Uint8Array?Uint8Array:void 0,R=function(){throw new Error("not implemented")},X=K()?Q:R,Z=g,$="function"==typeof Uint16Array;var nn="function"==typeof Uint16Array?Uint16Array:null,rn=function(n){return $&&n instanceof Uint16Array||"[object Uint16Array]"===Z(n)},tn=nn;var en=function(){var n,r;if("function"!=typeof tn)return!1;try{r=new tn(r=[1,3.14,-3.14,65536,65537]),n=rn(r)&&1===r[0]&&3===r[1]&&65533===r[2]&&0===r[3]&&1===r[4]}catch(r){n=!1}return n};var on,un="function"==typeof Uint16Array?Uint16Array:void 0,fn=function(){throw new Error("not implemented")},an={uint16:en()?un:fn,uint8:X};(on=new an.uint16(1))[0]=4660;var cn,yn,ln=52===new an.uint8(on.buffer)[0];!0===ln?(cn=1,yn=0):(cn=0,yn=1);var vn=L,pn={HIGH:cn,LOW:yn},An=new q(1),bn=new vn(An.buffer),wn=pn.HIGH,Un=pn.LOW;var dn=function(n,r){return An[0]=r,n[0]=bn[wn],n[1]=bn[Un],n};var mn=function(n,r){return 1===arguments.length?dn([0,0],n):dn(n,r)},hn=mn,sn=L,In=!0===ln?1:0,Nn=new q(1),gn=new sn(Nn.buffer);var Fn,Sn,Hn=function(n){return Nn[0]=n,gn[In]};!0===ln?(Fn=1,Sn=0):(Fn=0,Sn=1);var On=L,Tn={HIGH:Fn,LOW:Sn},jn=new q(1),En=new On(jn.buffer),Gn=Tn.HIGH,Ln=Tn.LOW;var Wn=function(n,r){return En[Gn]=n,En[Ln]=r,jn[0]},Mn=hn,xn=Hn,Pn=Wn,Vn=[0,0];var Yn=y,_n=n,kn=function(n){return Math.abs(n)};var qn=function(n,r){return _n(r)||Yn(r)?(n[0]=r,n[1]=0,n):0!==r&&kn(r)<22250738585072014e-324?(n[0]=4503599627370496*r,n[1]=-52,n):(n[0]=r,n[1]=0,n)};var zn=function(n,r){return 1===arguments.length?qn([0,0],n):qn(n,r)},Bn=Hn;var Cn=function(n){var r=Bn(n);return(r=(2146435072&r)>>>20)-1023|0},Dn=f,Jn=i,Kn=n,Qn=y,Rn=function(n,r){var t,e;return Mn(Vn,n),t=Vn[0],t&=2147483647,e=xn(r),Pn(t|=e&=2147483648,Vn[1])},Xn=zn,Zn=Cn,$n=hn,nr=Wn,rr=[0,0],tr=[0,0];var er=function(n,r){var t,e;return 0===r||0===n||Kn(n)||Qn(n)?n:(Xn(rr,n),r+=rr[1],(r+=Zn(n=rr[0]))<-1074?Rn(0,n):r>1023?n<0?Jn:Dn:(r<=-1023?(r+=52,e=2220446049250313e-31):e=1,$n(tr,n),t=tr[0],t&=2148532223,e*nr(t|=r+1023<<20,tr[1])))};var or=er,ur=function(n){return 0===n?.16666666666666602:.16666666666666602+n*(n*(6613756321437934e-20+n*(4.1381367970572385e-8*n-16533902205465252e-22))-.0027777777777015593)};var ir=n,fr=u,ar=i,cr=f,yr=function(n,r,t){var e,o,u;return u=(e=n-r)-(o=e*e)*ur(o),or(1-(r-e*u/(2-u)-n),t)},lr=1.4426950408889634,vr=1/(1<<28);var pr=function(n){var r;return ir(n)||n===cr?n:n===ar?0:n>709.782712893384?cr:n<-745.1332191019411?0:n>-3.725290298461914e-9&&n<vr?1+n:(r=fr(n<0?lr*n-.5:lr*n+.5),yr(n-.6931471803691238*r,1.9082149292705877e-10*r,r))},Ar=L,br=!0===ln?0:1,wr=new q(1),Ur=new Ar(wr.buffer);var dr=function(n,r){return wr[0]=n,Ur[br]=r>>>0,wr[0]};var mr=n,hr=pr,sr=dr,Ir=f,Nr=i,gr=function(n){return 0===n?-.3250421072470015:n*(n*(-23763016656650163e-21*n-.005770270296489442)-.02848174957559851)-.3250421072470015},Fr=function(n){return 0===n?.39791722395915535:.39791722395915535+n*(.0650222499887673+n*(.005081306281875766+n*(.00013249473800432164+-3960228278775368e-21*n)))},Sr=function(n){return 0===n?.41485611868374833:.41485611868374833+n*(n*(.31834661990116175+n*(n*(.035478304325618236+-.002166375594868791*n)-.11089469428239668))-.3722078760357013)},Hr=function(n){return 0===n?.10642088040084423:.10642088040084423+n*(.540397917702171+n*(.07182865441419627+n*(.12617121980876164+n*(.01363708391202905+.011984499846799107*n))))},Or=function(n){return 0===n?-.6938585727071818:n*(n*(n*(n*(n*(-9.814329344169145*n-81.2874355063066)-184.60509290671104)-162.39666946257347)-62.375332450326006)-10.558626225323291)-.6938585727071818},Tr=function(n){return 0===n?19.651271667439257:19.651271667439257+n*(137.65775414351904+n*(434.56587747522923+n*(645.3872717332679+n*(429.00814002756783+n*(108.63500554177944+n*(6.570249770319282+-.0604244152148581*n))))))},jr=function(n){return 0===n?-.799283237680523:n*(n*(n*(n*(-483.5191916086514*n-1025.0951316110772)-637.5664433683896)-160.63638485582192)-17.757954917754752)-.799283237680523},Er=function(n){return 0===n?30.33806074348246:30.33806074348246+n*(325.7925129965739+n*(1536.729586084437+n*(3199.8582195085955+n*(2553.0504064331644+n*(474.52854120695537+-22.44095244658582*n)))))},Gr=.8450629115104675;return function(n){var r,t,e,o,u,i,f,a;if(mr(n))return NaN;if(n===Ir)return 0;if(n===Nr)return 2;if(0===n)return 1;if(n<0?(r=!0,t=-n):(r=!1,t=n),t<.84375)return t<13877787807814457e-33?1-n:(i=(o=.12837916709551256+(e=n*n)*gr(e))/(u=1+e*Fr(e)),n<.25?1-(n+n*i):(o=n*i,.5-(o+=n-.5)));if(t<1.25)return f=(u=t-1)*Sr(u)-.0023621185607526594,a=1+u*Hr(u),r?1+Gr+f/a:1-Gr-f/a;if(t<28){if(u=1/(t*t),t<2.857142857142857)o=u*Or(u)-.009864944034847148,u=1+u*Tr(u);else{if(n<-6)return 2;o=u*jr(u)-.0098649429247001,u=1+u*Er(u)}return e=sr(t,0),o=hr(-e*e-.5625)*hr((e-t)*(e+t)+o/u),r?2-o/t:o/t}return r?2:0}}));
//# sourceMappingURL=bundle.js.map
