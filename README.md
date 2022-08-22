This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

---

## [Eslint](https://eslint.org/docs/latest/)

ESLint is an open source project that helps you find and fix problems with your JavaScript code.

- Install ESLint

```bash
yarn add eslint --init
```

[Eslint package](https://yarnpkg.com/package/eslint)

We continue by choosing how we want to use it. The packages will then be installed.

```powershall

- How would you like to use eslint?

  > check syntaxes, find pronouns and force rewrite

- what type of module are you using?

  > import and export

- which framework?

  > react

- do you use typescript?

  > no

- where does the code work?

  > browser and node

- which guide?

  > airbnb from popular ones

- in which format type should the file be kept?

  > json

- install packages?

  > yes

- Which manager to use?

  > yarn

```

# [Install Prettier & config file](https://prettier.io/docs/en/index.html)

- Install prettier

```bash
yarn add prettier -D
```

```bash
yarn add -D eslint-plugin-prettier eslint-config-prettier
```

- eslint-plugin-prettier: to install the prettier plugin
- eslint-config-prettier: to avoid eslint and prettier conflicts and run desired settings

## The code block seen below belongs to the .eslintrc.json file

```json
{
  "env": {
    "browser": true,
    "es2021": true,
    "node": true
  },
  "extends": ["next/core-web-vitals", "airbnb", "prettier"],
  "parserOptions": {
    "ecmaVersion": "latest",
    "sourceType": "module"
  },
  "plugins": ["react", "prettier", "simple-import-sort"],
  "settings": {
    "import/resolver": {
      "alias": {
        "map": [["@", "./src"]],
        "extensions": [".js", ".jsx", ".json"]
      }
    }
  },
  "rules": {
    "react/jsx-handler-names": "warn",
    "react/jsx-pascal-case": "warn",
    "react/react-in-jsx-scope": "off",
    "react/state-in-constructor": "off",
    "react/jsx-filename-extension": [
      1,
      { "extensions": [".js", ".jsx", ".json"] }
    ],
    "react/prop-types": 0,
    "react/jsx-props-no-spreading": "off",
    "default-param-last": "off",
    "import/prefer-default-export": "off",
    "import/extensions": ["error", "always", { "js": "never", "jsx": "never" }],
    "simple-import-sort/imports": "error",
    "simple-import-sort/exports": "error",
    "sort-imports": "off",
    "import/first": "error",
    "import/newline-after-import": "error",
    "import/no-duplicates": "error"
  }
}
```

# The code block seen below belongs to the .eslintigore file

Here we specify the folders that we do not want Eslint to examine.
For example;

```bash
node_modules
.next
public
jsconfig.json
```

# Simple import sort plugin

## Install

```bash
yarn add -D eslint-plugin-simple-import-sort
```

[Simple import sort package](https://yarnpkg.com/package/eslint-plugin-simple-import-sort)

The simple-import-sort plugin is added to the plugins section of the .eslintrc file:

```json
{
  "plugins": ["simple-import-sort"]
}
```

- Next, add the rules to sort the imports and exports:

```json
{
  "rules": {
    "simple-import-sort/imports": "error",
    "simple-import-sort/exports": "error",
    "import/first": "error",
    "import/newline-after-import": "error",
    "import/no-duplicates": "error"
  }
}
```

# The code block seen below belongs to the .prettierrc file

- Arranges and rewrites the code according to the determined rules.

```json
"printWidth":80,
"semi": false,
"tabWidth": 2,
"singleQuote": true,
"trailingComma": "none",
"bracketSpacing": true
```

# .prettierignore

- Create a .prettierignore file for the files to be ignored and write the files that will not be formatted.

```js
.next
node_modules
```

# Absolute Path

- To define absolute path, "jsconfig.json" file is created, this file runs in "vs-code" and shows that a js project has root.

- The code block seen below belongs to the jsconfig file:

```json
"compilerOptions":{
 "baseUrl": ".",
 "paths": {
  "@/*": ["./*"]
 }
},
"exclude": ["node_modules", ".next"]
```

- Sample:
- jsconfig file (using src folder):

```json
"compilerOptions":{
 "baseUrl": ".",
 "paths": {
  "@/*": ["./src/*"]
 }
},
"exclude": ["node_modules", ".next"]
```

typing we define root as "**@**" and exclude some folders to exclude them.

- We install the eslint-import-resolver-alias plugin for development mode so that eslint can resolve this root.
- Then, add the settings section to the .eslintrc file and enter the "map" and "extensions".

```js
"settings": {
    "import/resolver": {
      "alias": {
        "map": [["@", "./src"]],
        "extensions": [".js", ".jsx"]
      }
    }
  }
```

- In order not to get an error while building, we define the path with webpack in the next.config.js file.

```js
const path = require('path')

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  webpack: (config) => {
    const { resolve } = config
    // jsconfig
    resolve.alias['@'] = path.resolve(__dirname, 'src')
    return config
  }
}

module.exports = nextConfig
```

---

# File template

- Each component should have its own folder and sub-files such as styling, test, stories should be in this folder. At the same time, there must be an index file to export this component, so we can use more than one component by importing a single file.
- In addition, the components folder carries an index file and you can export all components from it. In this way, you can import them all in one line while importing in another file.
- Components should not contain fixed text as much as possible so that they can be reused.
- If we are going to create a file containing constant variables, we must create it in the same folder (containers/home/customButton).
- We should create constants folder to collect constant variables in a central place.
- We can create services folder for services.
- Likewise, we can create a utils folder to hold all our classes.

---

**NOTE:** `The reason for adding .module extension to style files is to ensure that the files do not get mixed up while the browser is creating the page.`

---

# [SVG to react component](https://react-svgr.com/docs/getting-started/)

**Important:** We are installing @svgr/cli@5.5.0 version in development mode because there is a problem in new versions.

```bash
yarn add -D @svgr/cli@5.5.0
```

- To set the configs, we create the .svgo.json file and add the following line of code.

```json
{ "plugins": [{ "removeViewBox": false }] }
```

We write a script to package.json to convert svg files to react components.

```json
"svgr": "svgr icons -d components/icons --svgo-config .svgorc.json"
```

- Here, we call our svgr key word, get the svg files in our icons file, create the icons folder in the components folder, and create the react components using the svgo-configs in the .svgorc.json file.

- When we run it by saying `yarn svgr` in the command prop, it will output the svg files as react components, and it will also create an index file in the icons folder and export all the components so that we can call these components in a single line when we want to call them.

- We override the script to change the fill attributes that come with the svg file to the current color.

```json
"svgr": "svgr icons -d components/icons --replace-attr-values \"#fff=currentColor\" --svgo-config .svgorc.json"
```

# Package.json file

```json
"scripts":{
    "lint": "eslint . --ext .js,.jsx",
    "lint:fix": "yarn lint -- --fix",
    "format": "prettier --write ./**/*.{js,jsx}",
    "svgr": "svgr icons -d components/icons --replace-attr-values \"#fff=currentColor\" --svgo-config .svgorc.json"
}
```

`"lint": "eslint . --ext .js,.jsx"` => Checks for errors on specified extensions (shows in terminal).

`"lint:fix": "yarn lint -- --fix"` => It can fix resolvable errors by itself.

`"format": "prettier --write ./**/*.{js,jsx}"` => Edit the code according to the rules given in the .prettierrc file.

---

# [Husky](https://github.com/typicode/husky) & [Lint-Staged](https://github.com/okonet/lint-staged)

- Thanks to husky and lint-staged, it helps to run certain scripts before commit.

- lint-staged is specially designed to work on "Progressive" files. This means files you've modified or created but haven't yet committed to your project. Working on progressive files limits the number of files you have to discard at any one time and speeds up the workflow. The commands you configure will run "pre-commit". While trying to add files to your project, you will see ESLint running in your terminal. Once complete, it's successfully replaced with linting errors that you need to fix before committing the code.

## Lint-Staged

- Download lint-staged in developer mode using yarn.

```bash
yarn add -D lint-staged
```

It is defined in the link-staged package.json file.

- In the code block below, which scripts will run before the files are loaded is defined.

```json
"lint-staged": {
    "**/*.{js,jsx}": [
      "yarn format",
      "yarn lint:fix"
    ]
  },
```

## Husky

- Install husky

```bash
yarn add husky -D
```

- You need to add the following command line to your package.json to enable it automatically after installation.

```json
"prepare": "husky install"
```

- Husky needs a ".git" file to create hooks, for this we run the `git init` code.

- Husky allows us to use git hooks using yarn and npm package.

```bash
yarn prepare
```

```bash
npx husky add .husky/pre-commit "yarn lint-staged"
```

# The code block seen below belongs to the Package.json file after husky and lint-staged installation

```json
"scripts":{
    "lint": "eslint . --ext .js,.jsx",
    "lint:fix": "yarn lint -- --fix",
    "format": "prettier --write ./**/*.{js,jsx}",
    "svgr": "svgr icons -d components/icons --replace-attr-values \"#fff=currentColor\" --svgo-config .svgorc.json",
    "prepare": "husky install"
},
"lint-staged": {
    "**/*.{js,jsx}": [
      "yarn format",
      "yarn lint:fix"
    ]
  },
```

```bash
git add .husky/pre-commit
```

```json
#!/bin/sh.
"$(dirname "$0")/_/husky.sh"
yarn lint-staged
```

- The code block above is the "pre-commit" file created in the ".husky" directory.
- To test after doing everything necessary ->

1. `git .`
2. `git commit -m "Test commit with husky"`
3. `git push -u origin master`

### This is what git hooks look like when running.

![](Screenshot%201.png)

### After running git hooks, it looks like this if there are no errors.

![](Screenshot%202.png)

### After running git hooks, it looks like this if there are errors.

![](Screenshot%203.png)

---
