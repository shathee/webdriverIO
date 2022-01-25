# Overview 
This environment uses WebdriverIO testing framework with Mocha framework. Additionally it uses docker images of Selenium Hub, Chrome and Firefox to run the tests. The tests scripts are in *test* folder. When the tests are executed WebdriverIO sends the tests to Selenium-Hub which sends the tests to the browsers.

# Environment & Tools used

- Windows
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
4. To use with only Docker run `docker compose up`  [*Skip this step if you want to deploy in kubernetes directly*]
5. To deploy in kubernetes run `kubectl apply -f .\kube\` 
6. To start the tests run `npm test`
7. After the test is completed it will show the summary in terminal [*Spec Reporter*]. 
8. It will also generate reports from *JSON* (JsonResults Folder) and *Allure* (allure-results) Reporters
9. To get a better visualization of the reports you can use `npm run generateAllureReports`. This will open the report in a browser.
10. Lasly you can run `npm run generateVisual` to get a html representation of failed test from Visual Regression Tests located in *visuals folder* 

