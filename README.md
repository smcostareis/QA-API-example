# Project Title

REST API QA Project

## Getting Started
This project contains a possible solution to test the https://reqres.in/ API.

To build this project it was used **SuperTest** to do the requests to the REST API, **Mocha** a javascript test framework and **Chai** to do the assertions.

**Test report:** For this it was implemented the mocha simple html report system where we can see the test report in a html page. 

**Dockerization:** Was implemented using an docker image from node:carbon .

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
