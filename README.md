If you've always wanted to have a dev blog of your own, this repository is a blog template that I built with Next.js and MDX.

You can fork or clone the repository and use it and use it as you want.

## Overview of the folders and files

- articles: this directory is where you'll be putting your articles. In it currently are some dummy files `post-one.mdx`, `post-two.mdx`, `post-three.mdx`.

- src: Is where the magic happens. In it, there are two folders, `components` and `utils`.

  - In the `components` directory, general components like the `BlogCard` component can sit in the root directory of this folder. But,

  - The custom components that are meant for the articles should go into the `mdx-components` directory. This pattern is just so you can keep track of components that can be used without mixing them up.

  You can have components like the custom `codeblock` that holds your code snippets

  ```jsx
  import React from "react";
  import propTypes from "prop-types";
  import { Block } from "./style/codeblock.styled.js";

  const CodeBlock = ({ children, ...props }) => {
    return <Block {...props}>{children}</Block>;
  };

  export default CodeBlock;
  ```

  You can add as many custom components that you want in the `src/components/mdx-components` directory.

  The custom MDX components can be imported in `[slug].js` which would eventaully make it available for use in all the `.mdx` files you create in the "articles" directory.

- utils: this folder houses the main logic behind this blog template

- jsconfig.json: gives you the flexibility that doesn't come with traversing the directories in your codebase. With this config file I've been able to create file mappings based on the `baseUrl` of this project.

So instead of doing something like the snippet below

```jsx
import SomeComponent from "./../../path/to/directory/";
```

You can simply do this.

```jsx
import SomeComponent from "@componentDir/component-name";
```

You can also tweak the config file to your taste.

```json
{
  "compilerOptions": {
    "baseUrl": "./",
    "paths": {
      "@components/*": ["src/components/*"],
      "@mdx-components/*": ["src/components/mdx-components/*"],
      "@styles/*": ["/styles/*"],
      "@utils/*": ["src/utils/*"]
      // you can add your file path mappings here
    }
  }
}
```
