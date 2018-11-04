[![Build Status](https://travis-ci.com/SFA17SCM16K/graphman.svg?branch=master)](https://travis-ci.com/SFA17SCM16K/graphman)

![GraphMan](https://github.com/SFA17SCM16K/graphman/blob/master/src/logo.png)

<h3>Live Demo of GraphMan !</h3>
https://affectionate-golick-c1c389.netlify.com/

<h4> INSPIRATION </h4>

Currently, the Postman app has the feature of running a collection of APIs non-linearly by allowing the user to create workflows. Although it helps users have control over the sequence of API hits and efficiently run different tests on each API, for a user who wants to create even a simple workflow quickly, has to write repetitive test-scripts for every API. GraphMan eliminates this tedious task through an elegant, easy-to-understand UI where the user can add APIs in the form of a directed graph. GraphMan takes care of the test-scripts and runs all the APIs in the sequence provided by the user. This makes the API testing for any user, quicker and easier.

<h4>WHAT IT DOES</h4>

GraphMan is an intuitive web application that re-envisions your API workflow in the form of directed graphs. All you have to do is create API requests in a sequence using a simple 'Add request' button and the rest of the heavy lifting is done by GraphMan. Apart from creating requests, GraphMan provides a wide range of features such as writing additional test-scripts to each request and also, it enables you to run your individual requests directly from the graph. Once your workflow is ready, you can either export it as a JSON file and use it directly on postman or you can run your workflow directly on our cloud API to get a detailed report instantly. GraphMan solves multiple pain-points in Postman while maintaining Postman's fundamental features.


<h4>HOW WE BUILT IT</h4>


<h4>WHAT CHALLENGES WE RAN INTO</h4>

There were a lot of engineering challenges we had to face, especially when it came to translating the user's workflow into a JSON object when the user dynamically changes the parameters, requests and test-scripts. Another key component of GraphMan is making the UI as simple as possible, while not compromising on features. There are multiple components in our application that made it particularly difficult to deliver all our features. Enabling our cloud API meant our system had to be fault tolerant and free from race-conditions.

<h4>WHAT'S NEXT FOR GRAPHMAN</h4>

Our initial vision of GraphMan was to provide a drag-and-drop feature to allow users to connect and play with as many components as he/she chooses to. This would be one of our key features to implement in future. Our next priority would be to enhance our cloud API to provide more exclusive features such as importing existing workflows, saving workflows to access across multiple devices and allowing the users to run multiple workflows simultaneously, to paying customers.

<h4>BUILT WITH</h4>

