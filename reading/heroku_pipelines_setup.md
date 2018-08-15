# Quick start guide for using Heroku for deployment, with "pipelines"

## Basic setup

### Tools setup

* make a Heroku account
* install Homebrew for your Mac if you don't have it already (and if you're using a Mac)
* `brew install heroku`
* `heroku login`

### Make something to deploy

* create a Github repo for your app (forking the starter repo)
* make a starter Node.js HTTP server
    * (e.g., just write "Hello World" as your `text/plain` HTTP response)
* make a simple `package.json` manifest file ([like this](https://devcenter.heroku.com/articles/deploying-nodejs#declare-app-dependencies)) so Heroku can detect that this is a Node app and apply the appropriate [buildpack](https://devcenter.heroku.com/articles/buildpacks).
* git-commit your code locally

### Set up the Heroku app

* in your app directory, `heroku create {YOUR_APP_NAME}`
  * _much like Github repos, it's better to have your own meaningful app name than to let Heroku auto-choose something like "breaky-wind-3737"_
* check your git config (`.git/config`) for the result.

It should look something like this:

```
[remote "heroku"]
        url = https://git.heroku.com/mysterious-castle-72318.git
        fetch = +refs/heads/*:refs/remotes/heroku/*
```

### Deploy

* `git push heroku master`
* Navigate to the app URL and make sure it's working.
* if you have any problems with the deploy, take a look at `heroku logs`
  * you can tail the logs with `heroku logs --tail`
  * for example, in your simple HTTP server code, you probably hardcoded the port number on which listen to HTTP traffic, but when deploying it needs to be bound to the dynamic port in the container that Heroku spins up for you (what they call a [dyno](https://devcenter.heroku.com/articles/dynos)).
  * Bind to `process.env.PORT` in your Node.js code.
  * Test it out locally first with `export PORT=1234` then re-running your app locally, it should be listening on `1234` now.

## Pipeline setup

So far you've created and deployed one app, which is useful and fun to see working, but we want to have multiple environments to be more disciplined about the development process.

Heroku supports a few useful features that help you create different environments along a "pipeline" that leads to production:

* [pipelines](https://devcenter.heroku.com/articles/pipelines)
* [forking](https://devcenter.heroku.com/articles/fork-app)
* [review apps](https://devcenter.heroku.com/articles/github-integration-review-apps)


### Set up a pipeline with your existing app

Issue the following command, making the pipeline name the same as the app name, and the pipeline stage "production":

```
heroku pipelines:create -a {YOUR_APP_NAME}
? Pipeline name {YOUR_PIPELINE_NAME} <-- make this same as {YOUR_APP_NAME}, if you wish
? Stage of paipukatto production
```

E.g., if your app name were `paipukatto`, it would look like:

```
> heroku pipelines:create -a paipukatto
? Pipeline name paipukatto
? Stage of paipukatto production
Creating paipukatto pipeline... done
Adding ⬢ paipukatto to paipukatto pipeline as production... done
```

### Make a staging app from your existing app

```
heroku fork --from {YOUR_APP_NAME} --to {YOUR_APP_NAME}-staging
```

E.g., if your app name were `paipukatto`, it would look like:

```
heroku fork --from paipukatto --to paipukatto-staging
```

#### Add a git remote entry for the staging app

```
git remote add staging https://git.heroku.com/{YOUR_APP_NAME}-staging.git
```

You can inspect this in your `.git/config` file, which will now have this entry added to the bottom:

```
[remote "staging"]
        url = https://git.heroku.com/{YOUR_APP_NAME}-staging.git
        fetch = +refs/heads/*:refs/remotes/staging/*
```

### Add the staging app to the pipeline


```
heroku pipelines:add -a {YOUR_APP_NAME}-staging {YOUR_PIPELINE_NAME}
```

E.g., if your app name were `paipukatto`, it would look like:

```
> heroku pipelines:add -a paipukatto-staging paipukatto
? Stage of paipukatto-staging staging
Adding ⬢ paipukatto-staging to paipukatto pipeline as staging... done
```

### Check the Heroku admin UI for your app(s)

If you drill down into your app pipeline from the App Dashboard in Heroku, it should look something like this:

![img](http://i.imgur.com/ttsA9uWh.png)

You can see each Heroku app tied together in a promotion sequence, aka the "pipeline" for deployment.

### Enable "Review apps" triggered by Github PR's

The "pipeline" is cooler when you integrate this setup with Github.

#### Connect to Github 

Click this button in the same screen:

![img](http://i.imgur.com/YfLrueam.png)

#### Enable the review apps facility and create config file

![img](http://i.imgur.com/376ZXq4l.png)

This will take you through a few steps to create an `app.json` file. Create this in your Staging app.

Set it to automatically create a review app for every PR.

#### Make a test PR to trigger the creation of a Review App

Make some small test change in a topic branch, push it up to your Github remote (to your upstream repo, NOT to Heroku!), and create a pull request there.

Now back in Heroku, it will automatically detect via a webhook that this PR has been created and will begin preparing a Review App:

![img](http://i.imgur.com/2syMA2im.png)

#### Try out the resulting Review App

![img](http://i.imgur.com/7rwPdaCm.png)

#### Merge/close the connected PR

After you approve and merge the PR that's connected to this Review App, the app automatically is torn down.

#### Manually push to the Staging app

By default, you need to _manually_ push your code to the Heroku staging app:

```
# pull down the merged code from the above PR
git checkout master
git pull
# now do the push 
git push staging master 
```

### Promote Staging to Production

Back in the Heroku admin UI:

![img](http://i.imgur.com/wrK0D1Ml.png)

Note that it is blazingly fast to perform the promotion. That's because the "slug" to deploy is precompiled.

### Optional: configure automatic Staging update

You can configure automatic update of Staging upon PR merge, if you wish:

![img](http://i.imgur.com/HreFTJhl.png)

Then, upon merging a PR via the Github UI, a webhook triggers this:

![img](http://i.imgur.com/CAQaWeam.png)
