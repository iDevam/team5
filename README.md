
<a href=""><img src="https://www.csuchico.edu/style-guide/visual/_images/CSUCHICO-Seal-Color.png" title="ChicoPantry" width=200 alt="OnlineStudyPortal" style="width:200px; float:right;display:inline;"  align="right"></a>
<br>
# Online Study Portal

> CSCI-620 Web Technology

> Department of Computer Science

> California State University, Chico



## Description

This project implements a single page dynamic educational web application where students can live stream video from youtube and study together. This project allows students to have total control over the video stream control. Everyone present in that streaming session can pause, play and forward the video in real-time; students can see the video control changes made on individual devices simultaneously. We are implementing sockets for this operation. Additionally, this website has the functionality to schedule a stream using a calendar. We also plan to implement live chat to communicate between all the people present in that session together.

## Model

  * User
	  * Login
  * Session
	  * User Login
	  * Video Info
  * Calendar
	  * Calendar Entry
	  * Calendar Comment
	  * User Attending
  * Chat
	  * User Login
	  * Message
	  * Session

## Technology Stack

> Back-End

- MongoDB
- Express JS
- JavaScript
- Web Sockets

> Front-End

- EJS
- CSS
- BootStrap
- jQuery
- AJAX

## Continous Integration 

- **[Travis-CI](https://travis-ci.org)**

## Static Code Analysis Tool 

- JSLint

## Features

> Real-Time Video Control

-  This project implements a web socket-based functionality to control the video stream in real-time by all the students.

> Schedule Management 

- This functionality allows to create a stream event using calendar and invite people to join it.

-  Additionally, Allowing to mark if the student is going to attend or not.

> Live Chat 

-  This application allows the student to chat and discuss what's happening in the video. It will be a handy feature that helps them to get their doubts cleared.



## Contributing

> To get started.

- 🍴 Fork this repo!

- 💻 Clone this repo to your local machine using `https://github.com/csci620/team5.git`

- 🔃 Create a new pull request using <a href="https://github.com/csci620/team5.git" target="_blank">`https://github.com/csci620/team5.git`</a>.


## Team

> Professor

| <a href="https://github.com/wsmckenz" target="_blank">**William McKenzie**</a> 
| :---: |
| <a href="https://github.com/wsmckenz" target="_blank">`github.com/wsmckenz`</a> 


> Contributors

| <a href="http://github.com/subhed" target="_blank">**Subhed Chavan**</a> | <a href="https://github.com/piradeepan" target="_blank">**Piradeepan Nagrajan**</a> | <a href="https://github.com/idevam" target="_blank">**Devam Sharma**</a> |
| :---: |:---:| :---:|
| <a href="http://github.com/subhed" target="_blank">`github.com/subhed`</a> | <a href="http://github.com/piradeepan" target="_blank">`github.com/piradeepan`</a> | <a href="http://github.com/idevam" target="_blank">`github.com/idevam`</a> |


---
