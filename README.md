# Holistic Website
A portfolio site to show off the things we've built and advertise our capabilities. It it written in Vue.js. The site can be accessed from either of these links:
- https://holistic-website.web.app/
- https://holistic-website.firebaseapp.com/

The site is hosted at: https://holistic-website.web.app

## Running Locally
1. Install required dependencies
	```
	npm install
	```

2. Run the development server (with hot reloading)
	```
	npm run serve
	```

## Deploying
This app automatically deploys when changes are merged into the master branch. Deployments can been seen in firebase here: https://console.firebase.google.com/u/0/project/holistic-website/hosting/main

### Build Environment
The following environment variables are required for building the app:
- `BASE_URL`: the root url the site is being served under
- `FIREBASE_TOKEN`: the token to authorize CI deployments