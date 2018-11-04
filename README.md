[![Build Status](https://travis-ci.com/SFA17SCM16K/graphman.svg?branch=master)](https://travis-ci.com/SFA17SCM16K/graphman)

![GraphMan](https://github.com/SFA17SCM16K/graphman/blob/master/src/logo.png)

<h3>Live Demo of GraphMan !</h3>
https://affectionate-golick-c1c389.netlify.com/

## Inspiration

  Currently, the Postman app has the feature of running a collection of APIs non-linearly by allowing the user to create workflows. Although it helps users have control over the sequence of API hits and efficiently run different tests on each API, for a user who wants to create even a simple workflow quickly, has to write repetitive test-scripts for every API. GraphMan eliminates this tedious task through an elegant, easy-to-understand UI where the user can add APIs in the form of a directed graph. GraphMan takes care of the test-scripts and runs all the APIs in the sequence provided by the user. This makes the API testing for any user, quicker and easier.

## What It Does

  GraphMan is an intuitive web application that re-envisions your API workflow in the form of directed graphs. All you have to do is create API requests in a sequence using a simple 'Add request' button and the rest of the heavy lifting is done by GraphMan. Apart from creating requests, GraphMan provides a wide range of features such as writing additional test-scripts to each request and also, it enables you to run your individual requests directly from the graph. Once your workflow is ready, you can either export it as a JSON file and use it directly on postman or you can run your workflow directly on our cloud API to get a detailed report instantly. The Web Application also allows the user to save his data by using the Browser's LocalStorage. GraphMan solves multiple pain-points in Postman while maintaining Postman's fundamental features. 
  
  
## How We Built It
  
  GraphMan primarily runs on React with Redux for State Management. Under the hood, GraphMan dynamically keeps track of a huge JSON object which changes on user's every input. This JSON object is in the form of a Postman Schema. Once the schema is generated, we wrote a function to export it to a JSON file, which can be imported in Postman. 
  But we realized while doing this, we might have increased the work of the user. So we decided to provide a Cloud API to allow users to run API on our web application. It solves the important problem of context switching. Building our Cloud API meant we had to ensure concurrency and availability. 
  To Ensure availability, our backend servers are split into microservices each of which can be individually scaled on demand. The testingWorker executes our workflow while the other micorservice takes care of the API service.
  We used redis to build a Job Queue System to ensure that there are no race conditions if multiple people access our API. Job Queues allow us to better manage the flow of data between the API service and our Testing service.
  To run the workflow the user submitted, we used a package called Newman which allows us to execute the workflow in the command line. 
  The server is deployed on Google Cloud Platform and you can take a look at our code [here](https://github.com/karthicrajakumar/graphman-server)

## What Challenges We Ran Into

 There were a lot of engineering challenges we had to face, especially when it came to translating the user's workflow into a JSON object when the user dynamically changes the parameters, requests, and test scripts. Another key component of GraphMan is making the UI as simple as possible, while not compromising on features. There are multiple components in our application that made it particularly difficult to deliver all our features. Enabling our cloud API meant our system had to be fault tolerant and free from race conditions.


## What's Next For GraphMan</h4>

  Our initial vision of GraphMan was to provide a drag-and-drop feature to allow users to connect and play with as many components as he/she chooses to. This would be one of our key features to implement in the future. Our next priority would be to enhance our cloud API to provide more exclusive features such as importing existing workflows, saving workflows to access across multiple devices and allowing the users to run multiple workflows simultaneously, to paying customers.


## Built With

  React, Redux, NodeJs, Express, Redis.

## Built By

  Karthic Rajakumar ([mail](mailto:karthic.rajakumar95@gmail.com)) and Shama Kashyap ([mail](mailto:shamakashyap@gmail.com))
