# Overview 
This environment uses WebdriverIO testing framework with Mocha framework. Additionally it uses docker images of Selenium Hub, Chrome and Firefox to run the tests. The tests scripts are in *test* folder. When the tests are executed WebdriverIO sends the tests to Selenium-Hub which sends the tests to the browsers.

# Tools used

- node v16.13.0 (*node v12.16.1 is minimum requirement*)
- WebdriverIO
  - Reporter
    - Spec
    - JSON
    - Allure
  - Services
    - Docker
    - Image Comparison
- Docker Desktop
- Kubernetes (enabled in Docker Desktop)
- Java 17.0.2 

# How to use

1. Get the repository to your local machine
2. Run npm install inside the directory
3. Run Docker (Check if you have kubernetes enabled if you are using docker desktop)

    ### To Use With Docker only
1. Docker run `docker compose up`
2. Open `wdio.conf.js` set `port=4444` (By default the port is set to 30007 which is for kubernetes)

    ### To use with Kubernetes
3. To deploy in kubernetes run `kubectl apply -f .\kube\` 
   
4. To start the tests run `npm test`
5. After the test is completed it will show the summary in terminal [*Spec Reporter*]. 
6. It will also generate reports from *JSON* (JsonResults Folder) and *Allure* (allure-results) Reporters
7. To get a better visualization of the reports you can use `npm run generateAllureReports`. This will open the report in a browser.
8.  Lasly you can run `npm run generateVisual` to get a html representation of failed test from Visual Regression Tests located in *visuals folder* 

## Troubleshooting

Depending on the hardware configuration of the host, there could be timeout error. In that case increasing the `connectionRetryTimeout` option in **wdio.conf.js** file will help to get rid of the problem.
