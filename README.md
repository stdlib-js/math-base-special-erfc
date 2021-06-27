<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# erfc

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] [![dependencies][dependencies-image]][dependencies-url]

> [Complementary error function][complementary-error-function].

<section class="intro">

The [complementary error function][complementary-error-function] is defined as

<!-- <equation class="equation" label="eq:complementary_error_function" align="center" raw="\operatorname{erfc}(x) = 1 - \operatorname{erf}(x) = \frac{2}{\sqrt\pi} \int_x^{\infty} e^{-t^2}\, dt" alt="Complementary error function."> -->

<div class="equation" align="center" data-raw-text="\operatorname{erfc}(x) = 1 - \operatorname{erf}(x) = \frac{2}{\sqrt\pi} \int_x^{\infty} e^{-t^2}\, dt" data-equation="eq:complementary_error_function">
    <img src="https://cdn.rawgit.com/stdlib-js/stdlib/7e0a95722efd9c771b129597380c63dc6715508b/lib/node_modules/@stdlib/math/base/special/erfc/docs/img/equation_complementary_error_function.svg" alt="Complementary error function.">
    <br>
</div>

<!-- </equation> -->

The [complementary error function][complementary-error-function] can also be expressed using Craig's formula

<!-- <equation class="equation" label="eq:craigs_formula" align="center" raw="\operatorname{erfc}(x) = \frac{2}{\pi} \int_0^{\frac{\pi}{2}} \exp \left( - \frac{x^2}{\sin^2 \theta} \right) d\theta" alt="Craig's formula of the complementary error function."> -->

<div class="equation" align="center" data-raw-text="\operatorname{erfc}(x) = \frac{2}{\pi} \int_0^{\frac{\pi}{2}} \exp \left( - \frac{x^2}{\sin^2 \theta} \right) d\theta" data-equation="eq:craigs_formula">
    <img src="https://cdn.rawgit.com/stdlib-js/stdlib/7e0a95722efd9c771b129597380c63dc6715508b/lib/node_modules/@stdlib/math/base/special/erfc/docs/img/equation_craigs_formula.svg" alt="Craig's formula of the complementary error function.">
    <br>
</div>

<!-- </equation> -->

</section>

<!-- /.intro -->

<section class="installation">

## Installation

```bash
npm install @stdlib/math-base-special-erfc
```

</section>

<section class="usage">

## Usage

```javascript
var erfc = require( '@stdlib/math-base-special-erfc' );
```

#### erfc( x )

Evaluates the [complementary error function][complementary-error-function].

```javascript
var y = erfc( 2.0 );
// returns ~0.0047

y = erfc( -1.0 );
// returns ~1.8427

y = erfc( Infinity );
// returns 0.0

y = erfc( -Infinity );
// returns 2.0
```

If provided `NaN`, the function returns `NaN`.

```javascript
var y = erfc( NaN );
// returns NaN
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var linspace = require( '@stdlib/array-linspace' );
var erfc = require( '@stdlib/math-base-special-erfc' );

var x = linspace( -10.0, 10.0, 100 );
var y;
var i;

for ( i = 0; i < x.length; i++ ) {
    y = erfc( x[ i ] );
    console.log( 'x: %d, erfc(x): %d', x[ i ], y );
}
```

</section>

<!-- /.examples -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2021. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/math-base-special-erfc.svg
[npm-url]: https://npmjs.org/package/@stdlib/math-base-special-erfc

[test-image]: https://github.com/stdlib-js/math-base-special-erfc/actions/workflows/test.yml/badge.svg
[test-url]: https://github.com/stdlib-js/math-base-special-erfc/actions/workflows/test.yml

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/math-base-special-erfc/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/math-base-special-erfc?branch=main

[dependencies-image]: https://img.shields.io/david/stdlib-js/math-base-special-erfc.svg
[dependencies-url]: https://david-dm.org/stdlib-js/math-base-special-erfc/main

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/math-base-special-erfc/main/LICENSE

[complementary-error-function]: https://en.wikipedia.org/wiki/Error_function

</section>

<!-- /.links -->
