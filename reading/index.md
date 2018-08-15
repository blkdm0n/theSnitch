# Thesis Project

### Table of Contents

- [Overview](#overview)
  - [Duration and Milestones](#duration-and-milestones)
  - [Design of Thesis](#design-of-thesis)
- [How to run your Thesis project](#how-to-run-your-thesis-project)
  - [Questions that Drive Your Work](#questions-that-drive-your-work)
    - [Project/Managerial Driving Questions](#project-managerial-driving questions)
    - [Technical Driving Questions](#technical-driving-questions)
    - [How to Answer These Questions](#how-to-answer-these-questions)
- [The Thesis Project Recipe](#the-thesis-project-recipe)
  - [Bare Minumum Requirements](#bare-minumum-requirements)
  - [Initial Repo Setup](#initial-repo-setup)
    - [Contribution Guide](#contribution-guide)
    - [Style Guide](#style-guide)
    - [Project Readme](#project-readme)
- [Feature Development](#feature-development)
  - [New Code and Features](#new-code-and-features)
  - [Continuous Deployment](#continuous-deployment)
- [Advanced Testing](#advanced-testing)
  - [Other Stuff](#other-stuff)

## Overview

### Design of Thesis

The Thesis Project is your final and largest project as a student. It will probably be the largest code base you share with potential employers. Like the Greenfield, it is meant to mirror industry work, so you can hit the ground running when you start your first job.

The Thesis project learning objectives are:
- Ship as many user-facing features as possible (optimize for "shipping" velocity)
- Build and operationalize a complex web application
- Encounter interesting engineering challenges, solve them as a team
- Learn industry best-practices for software engineering

We've provided a starter repo that contains template files to use as a guide in order to successfully document and structure your project on github. When asked, follow the [Initial Repo Setup](#initial-repo-setup) process described below.

## How to run your Thesis project

How should your team organize itself?

To understand our suggested answer to that, let's consider some timeless driving questions that software development teams must always grapple with, and how modern teams do so.

### Questions that Drive Your Work

#### Project/Managerial Driving Questions

* What should we do next?
* Are these proposed commitments doable?
* What are we really committing to do, by when?
* Are we "on track" for on-time release?
* Is the release of sufficient quality?
* We didn't deliver X. How can we improve next time?

#### Technical Driving Questions

* Will this change slow down the system?
* Will this change destabilize the system?
* Will this change slow down development?
* What [tech debt](?id=tech_debt) paydown should we schedule?

#### How to Answer These Questions

Skim the [artifacts that answer these driving questions](?id=artifacts_for_driving_questions).

(Note: we are NOT going to try to introduce and use all the artifacts in the above link, for Thesis. Let's take it a step at a time.)

Ok, so... cool... but what exactly are we supposed to do for Thesis? Read on.

## The Thesis Project Recipe

Now that you got the backstory via the links above, here's the hands-on recipe:

### Bare Minumum Requirements

* [ ] Create a Slack channel for your team.
* [ ] Create a Google Calendar and schedule all your meetings for the project: sprint planning, daily stand-ups, retrospectives.
* [ ] Ideate! (See *App Design 101* slides)
* [ ] Write user stories (See *App Design 101* slides)
* [ ] Make some wireframes (See *App Design 101* slides)
* [ ] Make a [product roadmap](?id=roadmap).
* [ ] Set up your primary app repo by following steps in [Initial Repo Setup](#initial-repo-setup) below. (when done, continue here.)
* [ ] Every team member should read some backstory on:
  * [Sprints](?id=sprints)
  * [Ticketing](?id=ticketing)
* [ ] [Configure Trello](?id=trello) as your ticket management system, with a sprint-based setup.
* [ ] File your first tickets in Trello as investigative/design tickets.
  * Don't do any work that isn't ticketed. Capture everything that you're doing.
* [ ] Write an overall [app plan](https://docs.google.com/document/d/1lzaucRi8fPXFuhySzhKTs8cYFlcuzhmah1Sc3jxRhkw/edit#heading=h.8rdji6gnjyic) to outline your architecture and schema intentions.
* [ ] Sign up for tech-mentor check-in, get the app plan reviewed. Your deliverable for this meeting is a fully-complete app plan and all the supporting documentation listed above. Set a reminder for your tech mentor check-in in your team's calendar.
* [ ] Set up github with your branch management settings.
* [ ] [Set up Heroku with Pipelines](?id=heroku_pipelines_setup).
* [ ] Begin to flesh out your web app using the technology of your choice (feel free to consult [our recommendations](?id=recommended_tech)).

### Initial Repo Setup

- [ ] Create a new [GitHub Organization account](https://help.github.com/articles/creating-a-new-organization-account) for your team using your codename.
- [ ] Add all your team-mates as members to the new org.
- [ ] Create a new Team Repo (same name as the org) in your new org
  - so you'll have a something like [spacekitten/spacekitten](https://github.com/spacekitten/spacekitten)
- [ ] Clone down the Hack Reactor starter repo, add a 2nd remote to refer to the Team Repo you just made, then push the starter repo into your new Team Repo. As a last step, delete the Hack Reactor starter repo from your computer.
- [ ] Everyone on the team should fork and clone a copy of the Team Repo.
- [ ] Create one [Passport Setup](passport_setup.md) for every environment (development, staging, production, etc). Do not check your keys into GitHub.

#### Contribution Guide

- [ ] The recommended Git workflow is spelled out in `CONTRIBUTING.md` which describes a forking workflow (see also *Git Workflow for Teams* slides). Copy this file into your repo (removing the underscore prefix), or decide on a different workflow. If you decide on a different workflow, you must document it in `CONTRIBUTING.md`.

##### Diagram of Recommended Workflow

![](http://i.imgur.com/p0e4tQK.png)

#### Style Guide

- [ ] Document your team's style guide by copying `STYLE-GUIDE.md` into the root directory of your repo (removing the underscore prefix). `STYLE-GUIDE.md` is provided as a template, you should edit it to reflect your agreed upon setup.
  - [AirBnB's](https://github.com/airbnb/javascript) guide is also excellent example.

#### Project Readme

Your project readme is the very first thing that users will see when they view your github project. It's the portal that must link to the other content files in the root of your repo.
- [ ] Use `_README.md` as a template to create a thorough readme.
  - It must link to the documentation you've created (as described by the items above).

## Feature Development

### New Code / Features

All changes to the master repo should be introduced via pull requests. You should never commit directly to master.

All Pull Requests for features must:
  - [ ] Contain units tests (both client and server)
  - [ ] Perform a [code review](?id=code_reviews) by one person on the team
    - [ ] Receive at least one improvement as a result of the code review
  - [ ] A URL to the ticket being worked on.

### Continuous Deployment

You must have a deployed website setup.
- [ ] Configure automatic deployment of your master branch to staging
- [ ] You may only release to production at the end of your sprint, after some manual acceptance testing. **Production should never be in a broken state.**

With continuous integration, you will benefit even more from a
pull request based workflow because you will always know that you are never
merging breaking code into your master branch.

## Required Testing

Implement two of the following:
  - [ ] Integration testing for your API and database
  - [ ] End-to-end testing for your main workflows
  - [ ] Code coverage reports for unit tests

### Other Stuff
- [ ] Create a screencast demo of the product and share on landing page
- [ ] Write a technical blog post
- [ ] Run usability tests, collect user feedback and simplify UI



