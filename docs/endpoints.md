The following endpoints are available:

### Reserved endpoints

- `<server-url>/health-check` - Health check for the entire service.
- `<server-url>/api-docs` - Swagger / OpenAPI documentation (not implemented, yet).

### Endpoints based on the files your are providing

For each of the datasets (right now only .csv files) you have provided, the following endpoints are exposed:

- `<server-url>/:dataset` - e.g. http://localhost:3000/sales-data for the file `./data/sales-data.csv`.
- `<server-url>/file/:dataset` - to download the entire file.
