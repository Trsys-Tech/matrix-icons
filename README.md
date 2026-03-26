# Matrix Icons

Matrix Icons is a React component library that provides a collection of SVG icons for use in your projects.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Development](#development)
- [Icons](#Icons)
- [Contributing](#contributing)
- [License](#license)

## Installation

To install the Matrix Icons, use npm or yarn:

```sh
npm install @trsys-tech/matrix-icons
```

or

```sh
yarn add @trsys-tech/matrix-icons
```

## Usage

```jsx
import React from "react";
import { Star } from "@trsys-tech/matrix-icons";

const App = () => (
  <div>
    <Star />
  </div>
);

export default App;
```

For a full list of components and their usage, please refer to the [Storybook](https://trsys-tech.github.io/matrix-icons/) documentation.

## Development

To set up the development environment, clone the repository and install the dependencies:

```sh
git clone https://github.com/Trsys-Tech/matrix-icons.git
cd matrix-icons
npm install
```

### React Version Support

This library supports both React 18 (`^18.3.1`) and React 19 (`^19.2.4`) as peer dependencies. The library is built as ESM with React externalized, meaning it does not bundle React and relies on the consumer's installed React version.

**Known Limitation:** During development and testing, we use React 18 type definitions even when testing against React 19 runtime. This is due to a transitive dependency type incompatibility in the Storybook ecosystem:

```
@storybook/addon-essentials
  → @storybook/addon-docs
    → @mdx-js/mdx
      → @types/mdx (does not support React 19 types)
```

Since Storybook is dev-only, this limitation does not affect the shipped library. Runtime compatibility with React 19 is fully validated during the build process.

## Icons

The library includes a variety of icons. Here are some examples:

- Star

- StarFilled

- Save

- Export...

For the full list of icons, please refer to the [Storybook](https://trsys-tech.github.io/matrix-icons/) documentation.

## Contributing

We welcome contributions to the Matrix Icons! If you have any ideas, suggestions, or bug reports, please open an issue or submit a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for more details. Matrix Icons
