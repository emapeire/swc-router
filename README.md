# Open-Source React + SWC Router ⚡️

![swc-router](https://github.com/emapeire/swc-router/assets/63935846/f0d9e4fa-0687-4a2e-aa02-f1cd620ee5fe)


[![NPM Version](https://img.shields.io/npm/v/swc-router.svg)](https://www.npmjs.com/package/swc-router)

Create simple single-page applications (SPA) with ease using `swc-router`. This lightweight routing solution for React applications leverages the speed of SWC.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Demo](#demo)
- [License](#license)
- [Credits](#credits)

## Installation

```bash
npm install swc-router
```

## Usage

### Basic Routing

Import `Router`, `Route`, and `Link` components:

```js
import { Router, Route, Link } from 'swc-router'
```

Define your routes using `<Router>` and `<Route>`:

```js
<Router>
  <Route path='/' Component={() => <h1>Home</h1>} />
  // Other routes...
</Router>
```

Navigate between pages using `<Link>`:

```js
<Link to='/'>Home</Link>
```

### Features

- Parameterized routing
- Default `404` route handling
- Lazy loading support
- Fully tested with Vitest

## Demo

Check out a [live demo](https://swc-router-demo.emapeire.repl.co/)

## License

This project is licensed under the [MIT License](/LICENSE).

## Credits

Special thanks to [@midudev](https://github.com/midudev) for inspiration and guidance.
