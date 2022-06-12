### TypeScript Notes

- npm init -y => Create a package.json file
- npm i typescript ts-node-dev => installs typescript and compiler
- add to scripts in package.json :

  - "start": "ts-node-dev --no-notify --respawn index.ts"

- interfaces to annotate objects
  - describe structure of an object
  - use to create new types within application
  - once created, use in place of writing out a type annotation
  - interfaces are very specific to TypeScript, they don't exist in javascript. When code is compliled, interface will not exist within the JS. Purpose is for dev not production.
