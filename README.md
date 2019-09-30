# Simple Electron-React

A minimal electron & react starter project

By Carter Adams, 2019

## Features

* Just the normal `create react-app` project. No redux or typescript or whatever.

* import from `electron`, `fs`, etc. as normal, no need to use `window.require()`

* Chrome's React devtools installed in electron when running dev

* start, build, and dist tested on Linux so far, still need someone to try it out on Window or Mac

For real, it's just create-react-app set up to work as an electron project.

## Inspiration

Inspired by this guide:

<https://www.codementor.io/randyfindley/how-to-build-an-electron-app-using-create-react-app-and-electron-builder-ss1k0sfer>

With some things reverse-engineered from this:

<https://github.com/wwlib/cra-craco-electron-example>

And the React devtools setup from this rolled into my `electron.js`

<https://ourcodeworld.com/articles/read/523/how-to-use-the-react-dev-tools-in-electron-framework>

## Usage

`yarn start` launches the project in dev mode

To build for distribution:

```
yarn build
yarn dist
```

TODO: this is only tested on Linux so far

FIXME: On my Gnome, the app doesn't use the icon in assets

## Dependencies

I tried to keep dependencies minimal for this project.

Beyond the normal dependencies installed by `yarn create react-app`, this project depends on:

* `electron` - obviously
* `electron-builder` - for packaging your app for distribution
* `electron-is-dev` - for turning on some features in development mode
* `electron-builder-devtools-installer` - for setting up Chrome's React devtools in Electron
* `craco` - for overriding some webpack config without ejecting
* `concurrently`, `wait-on` - launch dev server & electron with single command
* `env-cmd` - sets environment variables prior to build, I think this helps with Windows, maybe.
* `typescript` - because something needs it, I forget

## Icon

There's an icon in the assets folder, it's by alecive87@gmail.com. Look at `icon-README.txt` for info. It's free for non-commercial use.

## Thanks

Contributions & tests very welcome.
