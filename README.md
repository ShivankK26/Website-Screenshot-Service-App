<!-- ABOUT THE PROJECT -->
# About The Project
![web screenshot service app](https://github.com/ShivankK26/Website-Screenshot-Service-App/assets/115289871/ca3c148c-e4c1-4a95-90f5-18b6487694a4)







In this Project, I've built a WebApp namely Website Screenshot Service App using which one can easily take a quick snap of any website present on internet. This WebApp is extremely beneficial for taking screenshots of various WebPages and incorporating them in your work.


Use the `README.md` to get started.




# Built With

The Tech Stacks use are:

<div align="center">
<a href="https://skillicons.dev">
    <img src="https://skillicons.dev/icons?i=mongodb,expressjs,nodejs,js,ejs,css" />
</a>
</div>




<!-- GETTING STARTED -->
# Getting Started

To get started, create a file called server.js and import all the required modules in it. After that create a folder called views and place the index.ejs file in it. Also, inside public folder create a file called styles.css.


* modules

  ```sh
  const express = require('express');
  const ejs = require('ejs');
  const bodyParser = require('body-parser');
  const puppeteer = require('puppeteer');
  const path = require('path');
  ```

* ejs connectivity

  ```sh
  app.set("view engine","ejs")
  ```
  
* Using Body Parser

  ```sh
  app.use(bodyParser.urlencoded({extended: true}));
  ```

## Prerequisites

To begin with our Project, we'll need to install some npm packages like express, ejs, body-parser, puppeteer, and path using the command given below. 


* npm

  ```sh
  npm install express ejs puppeteer body-parser
  ```
  
  
* To ease the process of development, we'll install nodemon (Make sure you already have nodemon installed in your system, if not then [visit here](https://nodemon.io/)).

  ```sh
  npm i nodemon
  ```


<!-- CONTACT -->
# Contact

Your Name - Shivank Kapur - shivankkapur2004@gmail.com

Project Link: 
