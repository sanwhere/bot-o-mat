# BOT-O-MAT

## Introduction

This is a Remote Robot Control web panel. I wrote it with Javascript, Ajax, little bit JQuery and Bootstrap for HTML and CSS. 

I know little bit Vue.js but not advance, so i decide not to risk it, but i think it would be easier.

I did not uglify, compress or merge any codes on purpose.

## Features

- You can drag and drop tasks.
- You can see countdown timer when job is getting done.
- You can not give another job while the Robot is busy.

## User Guide

- Write Robot Name to the related field, 
- Select Robot Type.
- And create a new Robot.
- Drag and Drop the tasks to on the images of the Robots.
	- When you start to drag the tasks, available Robots are going to glow.
- Wait till tasks are finish, and you can see the count down while you are waiting.
- Then maybe you can get rid of lazy Robots with clicking X button.

# BOT-O-MAT
Use any language to complete this challenge. The implementation is up to you: it can be a command-line application or have a graphical interface.

Your application should collect a name and robot type from the types we list below. For each, it should create a Robot of the type the user chooses, e.g. Larry, Bipedal. 

Given the list of tasks below, your application should then assign the Robot a set of five tasks, all of which complete after a duration that we show in milliseconds. 



- Collect a name and robot type from user.
- Instantiate a Robot of the type provided by the user with the name provided by the user
  - for example: Bipedal, Larry
- Set up methods on Robot to complete tasks from the provided list

## Robot
Robot completes tasks and removes them from the list when they are done (i.e. enough time has passed since starting the task).

## Tasks
Tasks have a description and an estimated time to complete.

```
[
  {
    description: 'do the dishes',
    eta: 1000,
  },{
    description: 'sweep the house',
    eta: 3000,
  },{
    description: 'do the laundry',
    eta: 10000,
  },{
    description: 'take out the recycling',
    eta: 4000,
  },{
    description: 'make a sammich',
    eta: 7000,
  },{
    description: 'mow the lawn',
    eta: 20000,
  },{
    description: 'rake the leaves',
    eta: 18000,
  },{
    description: 'give the dog a bath',
    eta: 14500,
  },{
    description: 'bake some cookies',
    eta: 8000,
  },{
    description: 'wash the car',
    eta: 20000,
  },
]
```

## Types
```
{ 
  UNIPEDAL: 'Unipedal',
  BIPEDAL: 'Bipedal',
  QUADRUPEDAL: 'Quadrupedal',
  ARACHNID: 'Arachnid',
  RADIAL: 'Radial',
  AERONAUTICAL: 'Aeronautical'
}
```

## Features to add once the core functionality is complete
Be creative and have fun! Use this list or create your own features.
- Allow users to create multiple robots at one time
- Create a leaderboard for tasks completed by each Robot
- Create tasks specific for each robot type, this could work in conjunction with the leaderboard. For e.g. robots that are assigned tasks that their type can’t perform won’t get “credit” for finishing the task.
- Add persistance for tasks, bots and leaderboard stats


## Authors
- Scott Hoffman <https://github.com/scottshane>
- Olivia Osby <https://github.com/oosby>
