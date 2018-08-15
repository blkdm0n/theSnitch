# Passport Authentication Configuration:

This repo comes pre-built with local authentication and OAuth authentication
for Google, Facebook, and Twitter, using [Passport](http://passportjs.org/).

Steps to configure OAuth authentication:

1. Make an environment-specific config file (ex: `development.json`) in the `config` folder and update the `passport` section. These environment-specific files are in `.gitignore` and should not be committed to your repo. You may share these with your team, however.
1. Create applications, one per-environment, for the platforms that you want to include in your application. Only one person in your group will need to complete this for the services that you'd like to include.
1. Remove any integrations you don't plan to use.

## Google

1. Go to the Credentials section of the [Google Developers Console](https://console.developers.google.com/apis/credentials?project=mentor-toolbox).
1. Click "Create credentials" > "OAuth client ID."
1. Select "Web Application."
1. Name your web application and enter the appropriate paths for "Authorized JavaScript origins" and "Authorized redirect URIs." For local development, use `http://localhost:3000` for "Authorized JavaScript origins" and `http://localhost:3000/auth/google/callback` for Authorized redirect URIs.
1. Click the "Create" button.
1. Google will display the "Client ID" and "Client Secret." Copy these values to `config/ENVIRONMENT.json` for `Google.clientID` and `Google.clientSecret`, respectively. The `Google.callbackURL` property will be the path you entered as "Authorized JavaScript origins" when creating the crendential.
1. After deployment, go back to your app's settings in the Google Developers Console and add the deployed path to "Authorized redirect URIs" and "Authorized JavaScript origins" and update this value in the configuration file.

## Facebook

1. Log in to the [Facebook Developers](https://developers.facebook.com/apps/) portal with your Facebook account.
1. Go to the "My App" dropdown and select "Add a New App."
1. Name your App and click the "Create App ID" button.
1. Click on "Settings" in the left panel.
1. Copy the App ID and App Secret and paste as the `Facebook.clientID` and `Facebook.clientSecret` properties, respectively, in `config/ENVIRONMENT.json`.
1. In the "Products" section in left panel, click on "Facebook Login."
1. Enter the appropriate paths for "Valid OAuth redirect URIs." For local development, use `http://localhost:3000/auth/facebook/callback`.
1. Click the "Save Changes" button.
1. Change the `Facebook.callbackURL` property in `config/ENVIRONMENT.json` to the path you save as "Valid OAuth redirect URIs."
1. After deployment, go back to your app's settings in the Facebook Developers portal and add the deployed path to "Valid OAuth redirect URIs" and update this value in the configuration file.

## Twitter

1. Go to and join the [Twitter Developers](https://dev.twitter.com/) portal.
1. Click on "My Apps" from the top navigation bar.
1. Click the "Create New App" button.
1. Name and describe your application.
1. Twitter requires a website, but you can use a placeholder like `http://www.thesis.com/`.
1. For development, enter the "callback URL" as `http://localhost:3000/auth/twitter/callback`.
1. Agree to the Twitter Development Agreement.
1. Paste the "callback URL" as the value for the `Twitter.callbackURL` property in `config/ENVIRONMENT.json`.
1. On the next page, click on "Keys and Acccess Tokens."
1. Copy the "Consumer Key" and "Consumer Secret" and paste as the `Twiiter.consumerKey` and `Twitter.consumerSecret` properties, respectively, in `config/ENVIRONMENT.json`.
1. After deployment, go back your app's settings in the Twitter Developers portal and add your deployed path to "callback URL" and update this value in the configuration file.
1. **Important Note:** After following these instructions, you will need to apply for additional permissions to access the user's email address from Twitter:
  1. Create a privacy policy and a terms of service (there are boilerplate terms on the internet).
  1. Deploy your application.
  1. In your app's settings, update the "Website" and "Callback URL" with your deployed links.
  1. Add links to your privacy policy and terms of service.
  1. Go to the "Permisisons" tab.
  1. Under "Additional Permissions," check the "Request email addresses from users" checkbox.
  1. Click the "Update Settings" button.
  1. Once approved, you will be able to access the email address of users who authentication via Twitter.
