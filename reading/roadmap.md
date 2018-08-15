# Roadmap


## What is a roadmap doc?

Your roadmap document tracks the features and [tech debt](?id=tech_debt) that you intend to tackle, at a high level.

Maintaining your build-out intent at this high level helps you prioritize.  If you only track things as individual tasks / chores then you will soon get lost in a sea of chores and it becomes hard to remember what's really important, what's really going to provide user value and drive your business forward, versus what's just nice-to-have.

## Common formats

You have a choice of common formats. They are all useful for planning. Your team should select the one that you find most logical and practical for your tastes. 

Use a Google Spreadsheet, Google Doc, or Github wiki page. Anything's fine as long as it is shareable online.

### Option #1: Flat list

The simplest way to express your build-out intentions at a high-level is a flat list. 

Priority and therefore time flows _down_ the list:

| **Features / tech-debt, rough priority order** |
|------------------------------------------------|
| Signup / Login / User profile                  |
| User posts: simple richtext                    |
| Activity stream                                |
| User invitations                               |
| At-notifications: email                        |
| User posts: file attachments                   |
| User posts: image upload                       |
| User posts: video upload as attachment         |
| User posts: inline video viewer                |
| At-notifications: in-app                       |
| OOBE (out-of-the-box experience)               |
| Admin: User bulk invite                        |
| Activity digest email (opt-in)                 |
| Responsive (mobile) UI                         |
| Internationalization                           |
| SEO optimization                               |


### Option #2: Bucketing by priority

In the priority-buckets style, you can focus on "must-have" for the next major release, e.g., for your Greenfield/Thesis final release (or in real life, for your startup's soft launch, say):

| **Must-have for soft-launch**          | **Nice-to-have**                 |
|----------------------------------------|----------------------------------|
| Signup / Login / User profile          | At-notifications: in-app         |
| User posts: simple richtext            | SEO optimization                 |
| Activity stream                        | Admin: User bulk invite          |
| User invitations                       | Activity digest email (opt-in)   |
| At-notifications: email                | OOBE (out-of-the-box experience) |
| User posts: file attachments           | User posts: inline video viewer  |
| User posts: image upload               | Internationalization             |
| User posts: video upload as attachment | Responsive (mobile) UI           |


Usually you'd keep the items roughly prioritized within each bucket (i.e., the list of items within each bucket is still in vertical/descending priority order).

### Option #3: Bucketing by broad time period

In this format, your feature and [tech debt](?id=tech_debt) paydown work can be a grid that buckets the work by rough time period, with time flowing from left to right.

In industry, the time periods in question are often quarters (e.g., "Spring 2017") or months (e.g., "March 2017"). 

For your Hack Reactor apps, since the sprints are so short (only 2 days), then the right time bucket size might be "weeks", or "1st half of dev"... or you may prefer the narrower sprint-by-sprint style described in the next section.

| **1st half**                  | **2nd half**                           | **Post-launch followup**               |
|-------------------------------|----------------------------------------|----------------------------------------|
| Signup / Login / User profile | User invitations                       | User posts: video upload as attachment |
| User posts: simple richtext   | At-notifications: email                | User posts: inline video viewer        |
| Activity stream               | User posts: file attachments           | SEO optimization                       |
| User posts: image upload      | At-notifications: in-app               | Admin: User bulk invite                |
|                               | User posts: video upload as attachment | Activity digest email (opt-in)         |
|                               |                                        | OOBE (out-of-the-box experience)       |
|                               |                                        | User posts: inline video viewer        |
|                               |                                        | Internationalization                   |
|                               |                                        | Responsive (mobile) UI                 |


In this format, you often don't worry any more about the order of items within each bucket, because the partitions are small/granular enough now that that is more trouble than it's worth and doesn't help much any more with planning. Up to you.

### Option #4: Bucketing by sprint

You could also choose to be more tightly specific about the time periods, pegging them to specific sprints.

| **Sprint 1**                  | **Sprint 2**                 | **Sprint 3**                           | **Sprint 4**                    |
|-------------------------------|------------------------------|----------------------------------------|---------------------------------|
| Signup / Login / User profile | User invitations             | User posts: image upload               | User posts: inline video viewer |
| User posts: simple richtext   | At-notifications: email      | User posts: video upload as attachment | At-notifications: in-app        |
| Activity stream               | User posts: file attachments |                                        |                                 |


A possible downside of this format is there is more overhead to shuffling items from bucket to bucket as each sprint ends. It also gives a false sense of specificity -- the further out in time, the less certainty there is about estimating the size and nature of the work involved in each feature, and the less certainty about what should go in which sprint, but this format demands that you guess at such decisions prematurely.

## Clarifications

#### Why a separate doc? Why not just do this roadmap thing by tracking "priority" in our backlog?

Because the backlog is too granular -- it will rapidly fill up with a whole bunch of tasks / rows / tickets, and your larger product intent will get lost in the noise.

## Examples from industry

Industry roadmaps tend to look something like the following.

There's no need to study these closely, it's just to give you a feel for what larger-scale software roadmaps tend to look like. **You don't need to make your own Hack Reactor app roadmap look as graphical/colorful/pretty as these examples.**

#### Random example 1
![img](http://i.imgur.com/ElPaZfCl.png)

#### Random example 2
![img](http://i.imgur.com/LF3ckc2h.png)

#### Random example 3
![img](http://i.imgur.com/R2yS49Dl.png)

#### Random example 4
![img](http://i.imgur.com/193ECQBl.png)
