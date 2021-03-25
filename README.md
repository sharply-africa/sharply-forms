# Skylos Forms

Skylos Forms provides a set of reusable forms for skylos web apps.

## Installing Skylos Forms

To use Skylos Forms components, all you need to do is install the skylos-forms package and its peer dependencies:

```
$ npx install-peerdeps https://github.com/skyeops/skylos-forms

```

## Usage

To use the forms, please follow these steps:

1. Import any form you need like so!:

```jsx
import { LoginForm } from "skylos-forms";

function Example() {
  const onSubmit = (data) => {
    console.log("hello data:", data);
  };

  return <LoginForm />;
}
```
