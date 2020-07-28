# tutorial-app
 App that resizes pics as part of a tutorial.

Everything express related is in the api folder, it uses port 5010 and has a get for [/resize](http://localhost:5010/resize) which responds with a hardcoded json.<br />
The react app is in the client folder and it uses port 3010. It has been generated with [create-react-app](https://create-react-app.dev/) and it mainly follows [this](https://reactjs.org/tutorial/tutorial.html) tutorial about tic-tac-toe. It also has an "Images" section with information fetched from the json in [/resize](http://localhost:5010/resize).

The following commands have been created in the tutorial-app folder for ease of access:<br />
npm run dev: runs express and react at the same time.<br />
npm run install_everything: installs node_modules for every package.json there is in the project.
