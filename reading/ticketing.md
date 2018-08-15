## Ticketing system

Your task tickets are:

* your concrete expression of your commitments
* the primary way to understand where things are at
* the most efficient way to stay coordinated, especially across roles
	* in our case, in the laboratory / incubator context of Hack Reactor, the roles in question include your tech mentors

## Ticket types

### Feature (user story) tickets

Feature tickets link to the feature specification. 
Feature tickets are decomposed into suitably-small implementation tasks. 

### Implementation task tickets
Individual implementation tasks have to amply do-able, including dev-testing, in a single day.

### Investigation task tickets
E.g, how to do socket stuff etc

### Bug tickets
Bug tickets always explain exactly how to reproduce the bug. If it doesn't do that, a bug ticket is, at best, annoying (causing avoidable extra work) and at worst, useless.

### Tech debt tickets

[Tech debt](?id=tech_debt) tasks have to be justified. It is very easy to spend a lot of time on "refactoring" in the name of engineering tidiness, and lose momentum in actually shipping things with user-facing value.

Of course, that's not an excuse for shipping sloppy, broken things, by any means. But it's important to carefully track, review, and control how many tech debt tickets are being made, and why.

## How to write tickets

### One-line tickets are not good enough

Task tickets should NOT just be one-liners with empty bodies.

### How much explanation is required? 

Someone else should be able to grab your tickets and do something with them. That means either having some explanation in the ticket body or linking to something that explains the intent and context.

### Linking items together

In industry, tickets often point out to product spec, or a user story ticket. Then they point to the PR. (And conversely the PR mentions the ticket.)

### Review each other's tickets

Don't start a sprint blithely assuming that everyone's tickets make sense. Take a hard look at each other's tickets and make sure that they're all comprehensible, sufficiently-contextualized, and doable.
