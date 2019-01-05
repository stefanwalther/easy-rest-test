There are only a few steps you need to follow:

- Clone the repository (`git clone git@github.com:stefanwalther/csv-to-rest.git`)
- Do an `npm install`
- Place the .csv file you want to expose through REST in the `./data/` folder.
- Start the service by running `npm run start`

Your .csv files are now exposed as a REST endpoint, e.g.:

- The file `./data/sales-data.csv`
- Is now available at `http://localhost:3000/sales-data`

