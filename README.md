# React JSX Boilerplate

## Introduction

This repository is similar to my [latest-inferno-boilerplate](https://github.com/yottaawesome/latest-inferno-boilerplate), but for React, WebPack and JavaScript. It comes with `react-router-dom` and modular SCSS support set up, but does not come with Redux. Redux is a great tool, but I chose not to add it here because this is a minimal boilerplate repo, and I think there's a lot of confusion around Redux's use case, which is mainly apps with [complex workflows and state management](https://dev.to/polluterofminds/why-you-probably-don-t-need-redux-399o). Simple React apps receive a lot of added complexity for little tangible benefit from Redux, which I think is the origin of a lot of "excessive Redux boilerplate" complaints.

## Using the code

The `src` folder contains a basic example app to get started.

* Clone this repo.
* Run `npm install` to install dependencies.
* Run one of the following commands:
    1. `npm run dev` to build the app in `development` mode.
    2. `npm run prod` to build in `production` mode. Note that the prod build extracts the transpiled CSS into `dist/main.css` using `mini-css-extract-plugin`, whereas the dev build bundles it into the JS file.
    3. `npm run start` to start the dev-server.
* Make whatever additional changes you need for your project.
