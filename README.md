# csv-to-rest

> Serve some .csv files via a REST service in a few minutes.

[![CircleCI](https://img.shields.io/circleci/project/github/stefanwalther/csv-to-rest.svg)](https://circleci.com/gh/stefanwalther/csv-to-rest)

---

## Purpose
**_csv-to-rest_** enables you to provide a REST service within minutes based on a few given .csv files.
Extend your REST service by just adding additional .csv files ...

## Usage
There are only a few steps you need to follow:

- Clone the repository (`git clone git@github.com:stefanwalther/csv-to-rest.git`)
- Do an `npm install`
- Place the .csv file you want to expose through REST in the `./data/` folder.
- Start the service by running `npm run start`

Your .csv files are now exposed as a REST endpoint, e.g.:

- The content of the file `./data/sales-data.csv`
- Is now available at `http://localhost:3000/sales-data`

## Roadmap
This is currently a very early iteration of the basic idea of "exposing .csv files through REST".  
[Any feedback is very appreciated!](https://github.com/stefanwalther/csv-to-rest/issues)  
So far the following additions are planned:  

- [ ] (feat): Error handling in case of invalid .csv files
- [ ] (feat): Expose datasets via OpenApi/Swagger
- [ ] (feat): HATEOAS links
- [ ] (feat): In memory storage of datasets
- [ ] (feat): Support paging
- [ ] (feat): Support different authentication methods
- [ ] (ci): Docker Image
- [x] (ci): CircleCI Tests
- [ ] (test): More integration tests
- [ ] (docs): Instructions how to deploy within minutes to heroku & Co.
- [ ] (test): Coverage report

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

_This file was generated by [verb-generate-readme](https://github.com/verbose/verb-generate-readme), v0.6.0, on January 10, 2019._

