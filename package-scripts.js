module.exports = {
  scripts: {
    default: "nps build",
    build: {
      default: "nps clean & tsc --sourceMap --declaration",
      production: "nps clean & tsc --declaration"
    },
    clean: "if exist .\\dist (rmdir /s /q .\\dist)",
    publish: "nps build.production & npm publish"
  }
}