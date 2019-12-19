# Another Pluggable Discord Bot API

The API layer for the 'Another Pluggable Discord Bot' project.

## Developing APDB plugins

The APDB API should be installed for all plugins developed for Another Pluggable Discord Bot.

Further information for developing plugins will be detailed in the project wiki (coming soon).

### Installing as a dependency

APDB-API requires the following peer dependencies when installed:

- [@types/node](https://www.npmjs.com/package/@types/node) (^12.12.21)
- [discord.js](https://www.npmjs.com/package/discord.js) (^11.5.1)
- [inversify](https://www.npmjs.com/package/inversify) (^5.0.1)
- [inversify-inject-decorators](https://www.npmjs.com/package/inversify-inject-decorators) (^3.1.0)
- [typeorm](https://www.npmjs.com/package/typeorm) (^0.2.21)
- [xmlhttprequest](https://www.npmjs.com/package/xmlhttprequest) (^1.8.0)
- [yargs-parser](https://www.npmjs.com/package/yargs-parser) (^13.1.1)

These dependencies are provided by the Another Pluggable Discord Bot core application, so you need only install them as dev dependencies in your plugin.

## Developing the API

### Pre-Requisites

- Node.js v10.15 or higher
  - Current LTS release is preferable
- TypeScript 3.7.5+
- Recommended editor is Visual Studio Code, but this is not a hard requirement

### Setting Up

To set up the development environment:

- Clone the repository via git
- Run `npm i` in your preferred command interpreter to install all dependencies
- Open the folder in Visual Studio Code (if desired)

You should now be all set!  Build with `tsc` to transpile to JavaScript.  Tests can be run via `npm test`.
