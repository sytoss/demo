# Test RESTful API with Node.js
## Installation

1. Clone this repository
2. `cd` into the cloned copy and run `npm install`
3. Run `npm run build`

## Running

1. Run `npm run start`
2. Try it in a console or in a browser window doing a `GET` to `http://localhost:8080/`

## Documentation

Be sure that apidoc installed, if not simply run `npm install apidoc -g`

1. Run `apidoc -i src/api`
2. Try it in a console or in a browser window doing a `GET` to `./doc/index.html`

## Unit testing

Be sure that jest installed, if not simply run `npm install jest -g`

To run unit tests simply run `npm run test`.
    
### Creating docker image

To create docker image simply run `npm run docker-create-image`.
       
### Starting docker container

This goal depends on `creating docker image` goal.
To run docker image simply run `npm run docker-run`.
