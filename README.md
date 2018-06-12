# Project Title

Xing QA API test

## Getting Started
This project contains a possible solution to test the https://reqres.in/ API.

To build this project it was used **SuperTest** to do the requests to the API, **Mocha** a javascript test framework and **Chai** to do the assertions.

**Test report:** For this enhancement it was implemented the mocha simple html report system where we can see the test report in a html page. 

**Dockerization:** This enhancement was implemented as well using an docker image from node:carbon .

## Running the tests

To run the testing project locally first you need to install the npm packages:
```
npm install
```
then you can run the tests by using:
````
npm run test
````

To run the project on the container first you need to build docker image by using:
````
docker build -t dockerName .
````
And then you can run the project in the docker by using:
````
docker run -p 8080:8081 dockerName
````
### Notes
It wasn't clear to be about what was asked for the test report enhancement. When it cames to coverage ("in order to have the visibility of your coverage"), usually it's reffered to the percentage of the code that is actually covered by tests. In this case, the given API is public and it's in a cloud (i don't have the src code of the API) so it's impossible to me to mesure the code coverage of some code that I don't have. 
The implementation made for the test report is just about generate an html page with the report from mocha. This implementarion (and enhancement ) don't make mutch sence since the goal of the exercise is to think in a way to integrate the project in a pipeline and to do that we can just use some jenkins's plug in or other CI CD tool to generate visual test reports.
