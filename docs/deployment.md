The entire idea of this solution is to deploy a REST service with some basic data (e.g. for testing purposes) within less than a minute:

### Using Heroku

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


### Using docker

(TBD)