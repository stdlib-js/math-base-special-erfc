// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-exp@esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/number-float64-base-set-low-word@esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-pinf@esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-ninf@esm/index.mjs";var i=.8450629115104675;function f(f){var u,o,m,d,a,c,l,j;if(t(f))return NaN;if(f===e)return 0;if(f===s)return 2;if(0===f)return 1;if(f<0?(u=!0,o=-f):(u=!1,o=f),o<.84375)return o<13877787807814457e-33?1-f:(d=.12837916709551256+(m=f*f)*function(t){return 0===t?-.3250421072470015:t*(t*(-23763016656650163e-21*t-.005770270296489442)-.02848174957559851)-.3250421072470015}(m),a=1+m*function(t){return 0===t?.39791722395915535:.39791722395915535+t*(.0650222499887673+t*(.005081306281875766+t*(.00013249473800432164+-3960228278775368e-21*t)))}(m),c=d/a,f<.25?1-(f+f*c):(d=f*c,.5-(d+=f-.5)));if(o<1.25)return l=(a=o-1)*function(t){return 0===t?.41485611868374833:.41485611868374833+t*(t*(.31834661990116175+t*(t*(.035478304325618236+-.002166375594868791*t)-.11089469428239668))-.3722078760357013)}(a)-.0023621185607526594,j=1+a*function(t){return 0===t?.10642088040084423:.10642088040084423+t*(.540397917702171+t*(.07182865441419627+t*(.12617121980876164+t*(.01363708391202905+.011984499846799107*t))))}(a),u?1+i+l/j:1-i-l/j;if(o<28){if(a=1/(o*o),o<2.857142857142857)d=a*function(t){return 0===t?-.6938585727071818:t*(t*(t*(t*(t*(-9.814329344169145*t-81.2874355063066)-184.60509290671104)-162.39666946257347)-62.375332450326006)-10.558626225323291)-.6938585727071818}(a)-.009864944034847148,a=1+a*function(t){return 0===t?19.651271667439257:19.651271667439257+t*(137.65775414351904+t*(434.56587747522923+t*(645.3872717332679+t*(429.00814002756783+t*(108.63500554177944+t*(6.570249770319282+-.0604244152148581*t))))))}(a);else{if(f<-6)return 2;d=a*function(t){return 0===t?-.799283237680523:t*(t*(t*(t*(-483.5191916086514*t-1025.0951316110772)-637.5664433683896)-160.63638485582192)-17.757954917754752)-.799283237680523}(a)-.0098649429247001,a=1+a*function(t){return 0===t?30.33806074348246:30.33806074348246+t*(325.7925129965739+t*(1536.729586084437+t*(3199.8582195085955+t*(2553.0504064331644+t*(474.52854120695537+-22.44095244658582*t)))))}(a)}return m=r(o,0),d=n(-m*m-.5625)*n((m-o)*(m+o)+d/a),u?2-d/o:d/o}return u?2:0}export{f as default};
//# sourceMappingURL=index.mjs.map