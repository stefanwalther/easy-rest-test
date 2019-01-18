# easy-rest-test

> Get a basic REST service (for testing purposes) up an running in minutes.

[![CircleCI](https://img.shields.io/circleci/project/github/stefanwalther/easy-rest-test.svg)](https://circleci.com/gh/stefanwalther/easy-rest-test)
[![Codecov](https://img.shields.io/codecov/c/github/stefanwalther/easy-rest-test.svg?logo=codecov)](https://codecov.io/gh/stefanwalther/easy-rest-test)
[![XO code style](https://img.shields.io/badge/code_style-XO--space-5ed9c7.svg)](https://github.com/sindresorhus/eslint-config-xo-space)

---

## Purpose
**_easy-rest-test_** enables you to provide a REST service within minutes based on a few given .csv files.
Extend your REST service by just adding additional .csv files ...

## Usage
There are only a few steps you need to follow:

- Clone the repository (`git clone git@github.com:stefanwalther/easy-rest-test.git`)
- Do an `npm install`
- Place the .csv file you want to expose through REST in the `./data/` folder.
- Start the service by running `npm run start`

Your .csv files are now exposed as a REST endpoint, e.g.:

- The content of the file `./data/sales-data.csv`
- Is now available at `http://localhost:3000/sales-data`

## Endpoints
The following endpoints are available:

### Reserved endpoints

- `<server-url>/health-check` - Health check for the entire service.
- `<server-url>/api-docs` - Swagger / OpenAPI documentation (not implemented, yet).

### Endpoints based on the files your are providing

For each of the datasets (right now only .csv files) you have provided, the following endpoints are exposed:

- `<server-url>/:dataset` - e.g. http://localhost:3000/sales-data for the file `./data/sales-data.csv`.
- `<server-url>/file/:dataset` - to download the entire file.

## Endpoint Options
`<server-url>/:dataset` can be used with the following options:

- `delay` - Serve the response with a delay of `n` milliseconds, e.g `/sales-data?delay=2000`.

## Service Configuration
The service can be configure by defining the following environment variables:

- `PORT` - Set the port being used by the service, defaults to `3000`.
- `NODE_ENV` - Set the environment target, can be one of `test`, `development` or `production`. Defaults to `development`. 

## Deployment
The entire idea of this solution is to deploy a REST service with some basic data (e.g. for testing purposes) within less than a minute:

<details>
<summary><strong>Using Heroku</strong></summary>
Assuming that you have cloned the repository, follow these steps to deploy your basic REST service:

- Make sure you have a Heroku account
- Create a new heroku app
- Give it a name, e.g `my-rest-service`
- Create the app (`Create app`)
- Under your newly created app, `Deploy`, choose `Deployment method` and select `GitHub`
- Enter the name of your GitHub repository and then click `Connect`
- That's it, deploy your service by
  - `Enable Automatic Deploys` or
  - manually using `Deploy Branch`
- Access one of your data-sources by hitting e.g `https://my-rest-service.herokuapp.com/sales-data`

</details>

<details>
<summary><strong>Using docker</strong></summary>

Using `docker run`:

```
$ docker run -it stefanwalther/easy-rest-test
```

Using `docker-compose`:

```
$ docker-compose up
```

</details>

<details>
<summary><strong>Using heroku</strong></summary>
(tbd)
</details>

## File-Types
Right now only `.csv` files are supported and placed into the `./data` folder.

### Conventions for .csv files

- The .csv file contains a header
- The .csv file uses semicolon (`;`) as a delimiter

## About

### Author
**Stefan Walther**

* [twitter/waltherstefan](http://twitter.com/waltherstefan)  
* [github.com/stefanwalther](http://github.com/stefanwalther) 
* [LinkedIn](https://www.linkedin.com/in/stefanwalther/)
* [stefanwalther.io](http://stefanwalther.io) (private blog)

### Contributing
Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue](https://github.com/stefanwalther/csv-to-rest/issues). The process for contributing is outlined below:

1. Create a fork of the project
2. Work on whatever bug or feature you wish
3. Create a pull request (PR)

I cannot guarantee that I will merge all PRs but I will evaluate them all.

### License
MIT

***

_This file was generated by [verb-generate-readme](https://github.com/verbose/verb-generate-readme), v0.6.0, on January 18, 2019._

