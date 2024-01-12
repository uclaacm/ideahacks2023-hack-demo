# ~~2023~~ 2024 Ideahacks x ACM Hack: Webdev Workshop

Hello from ACM Hack! This repo contains the completed demo code for the 2024 Ideahacks Webdev Workshop. This simple web app is based off of [Strava](https://www.strava.com/features), an app to track activity for runners. Our site, **Strovo**, allows users to create new posts, view their own posts, as well as explore all posts made by all users.

## Running Strovo Locally

To run the latest version of Strovo, you'll need a [google account](https://accounts.google.com/signup), [Node](https://nodejs.org/) downloaded, and a [text editor](https://code.visualstudio.com/) of your choice. With the prerequsites out of the way, if you choose to run Strovo as a full stack app (recommended) you'll first need to set up your firestore database to store the ride information with the following steps (see slides for visual aid). Alternatively, you can run the Strovo as a front-end app by using the `frontend_demo` branch and can jump to the second set of steps below.

1. Navigate to the Firebase console: (https://firebase.google.com/)[https://firebase.google.com/]
2. Click **"Go to console"** in the top left
3. Sign in with your google account
4. Click **"Add project"**
5. Enter a project name when prompted. 
6. Proceed with the default settings and click **"Create project"**
7. When project resources have been provisioned, click **"Continue"**
8. Navigate to your project in firebase (if it's not selected)
9. Under the Build menu, select **"Firestore Database"**
10. Click the **"Create database"** button
11. Click **"Next"** to proceed with the default location
12. Select **"test mode"** and click **"Enable"**

We've now created our database! We recommend creating a new collection and document with your first ride both for understanding and to have something to see when running the site (see slides for an example). Now we're ready to move forward with running Strovo locally - to do so, clone this repo locally and take the following steps

1. In firebase, Click the settings (⚙️) icon to the right of the **"Project Overview"** label
2. Click the web icon (</>) at the bottom of the page to add a new app to the project
3. Give your app a name and click **"Register app"**
4. Copy the `firebaseConfig` dictionary from the code and continue 
5. Open your cloned project directory in a text editor of choice.
6. Replace the `firebaseConfig` dictionary in the `src/firebase.js` file with the copied code
7. Navigate to the project directory in a terminal and run `npm install`
8. Run `npm run dev` in the same terminal
9. Open the site in your browser!

## Strovo Next Steps

Looking to test your skills? Below is a short list of additional features you can add building off our app (or your own)!
* User accounts and authentication
* Including pictures in posts
* Deleting and editing posts
* URL Parameter based routing

## Creating Your Own Website
Although we're providing template code here, many of you may want to create your own site from scratch (instead of building off of our site). To do so, again you'll need [Node](https://nodejs.org/) and a [text editor](https://code.visualstudio.com/) of your choice before following the steps below

1. Open a terminal and navigate to your desired project directory
2. Run the command `npm create vite@latest` in your project directory
3. Give your project a name when prompted (ex: ec2-react-demo)
4. Select `React` as the project framework
5. Select `JavaScript` as the framework variant
6. Navigate to your web app directory by running `cd [project_name]`
7. Run `npm install` to install any dependencies
8. Run `npm run dev` to run your site locally

## Resources
* Workshop [slides](https://docs.google.com/presentation/d/1gRKTU0oDLORT1Plmpc9kgcj9LEOV_r4bU_qJWePc_rI/edit?usp=sharing)
* ACM Hack - Hackschool [recordings](https://firebase.google.com/docs/reference/js/firestore_) 
* React Hooks [documentation](https://react.dev/reference/react)
* Firebase Javascript v9 API [reference](https://firebase.google.com/docs/reference/js/firestore_)
