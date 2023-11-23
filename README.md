# Open-Source React + SWC Router ⚡️

### You can create a simple SPA with this package!

- Simple import to your custom components:

```
import { Router, Route, Link } from 'swc-router'
```

- `<Router />` and `<Route />` component to generate custom routes:

```
<Router>
  <Route path="/" Component={() => { <h1> Home </h1> }} />
</Router>
```

- `<Link />` component to navigate between pages:

```
<Link to='/'> Home </Link>
```

- Supported routes with params.
- Supported `404` route by default.
- Lazy Loading of routes.
- Tested package with Vitest.

---

### Watch a demo

[Run the code in replit](https://replit.com/@emapeire/swc-router-demo)

---

#### Credits to [@midudev](https://github.com/midudev)

Thanks a lot 🖤
