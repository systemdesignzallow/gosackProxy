# Zallow General Description Service Proxy

> General Description Service Proxy for Zallow.

## Related Projects

<https://github.com/systemdesignzallow>

## Table of Contents

1. [Installing Dependencies](#InstallingDependencies)
1. [Usage](#Usage)

## Installing Dependencies

From within the root directory:

```sh
npm install -g webpack nodemon
npm install
```

## Development

This project adheres to the [AirBnb Style Guide](https://github.com/airbnb/javascript).

## Usage

### Environment variables

Environment variables are set in the `./.env` file. A `.env.example` file is provided as a template.

```JSON
    "test": "echo \"Error: no test specified\" && exit 1",
    "build": "webpack --config ./webpack.config.js",
    "start": "nodemon ./server/index.js"
```
