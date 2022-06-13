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

- public/private properties

  - public can be accessed outside of the class
  - private _cannot_ be accessed from outside of the class, can be accessed w/in class using the **this** keyword
  - what's the point?
    - security, preventing engineers from calling certain methods "whenever" they want, it could break the code
  - can also add public/private within the constructor argument (instead of assigning in constructor)
    <img src="../Diagrams/Picture 36 - TS arguments shortcut.png">
    - may appear as though constructor is taking in arguments and not doing anything with them, but it's just shorthand for assigning

- Decorators

  - have to enable them in TS with a ts.config file
  - **npx tsc --init** creates a tsconfig.json file
  - **strict - very important whether set true VS false**
  - for Decorators, need to uncomment out experimentalDecorators AND emitDecoratorMetadata
  - what's a decorator
    - a plain function that runs whenever is class is executed by TypeScript (javascript)
      <img src="../Diagrams/Picture 37 - TS Decorators Diagram.png">
  - Decorator factory - when decorator has () after
    - if it's a factory it **must return a function**

- Module System
  - How we share code between different files
  - in file of class you want to export, remember to write "export" in front of class
  - e.g., import {NewCar} from "./Car" to import one file to another
- Strict Mode

  - usually false for angular even though technically "less stable" bc strict typing is off

- implements keyword - explicitely enforces that a class meets a particular contract

- Generics
