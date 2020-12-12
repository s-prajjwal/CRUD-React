# cj-app
React SPA


IMPORTANT NOTES (In case Backend Service API Integration is required):

    1. The backend endpoint host url can be accessed using "process.env.REACT_APP_API_URL" property. An example is shown in index.js.
    2. PLEASE USE THIS PROPERTY ("process.env.REACT_APP_API_URL") WHEN YOU ARE TRYING TO CALL A BACKEND API. ALSO DON'T CHANGE THIS PROPERTY ELSE THE APP WILL NOT BUILD PROPERLY AND YOUR SUBMISSION WILL NOT BE SCORED. 
    3. In order to start the server in your local system, please run one of the below commands based on your Operating system:
        - Windows (cmd.exe): set "REACT_APP_API_URL=<endpoint URL>" && yarn start
        - Windows (Powershell): ($env:REACT_APP_API_URL = "<endpoint URL>") -and (yarn start)
        - Linux, macOS (bash): REACT_APP_API_URL=<endpoint URL> yarn start     
        
PROJECT BUILD AND START STEPS (Make sure that your project is getting built successfully):

    Pre-requisites:
    1. Install http-server module (https://www.npmjs.com/package/http-server).
    2. Install node, npm and yarn

    Steps:
    1. Go to the project root directory.
    2. Run the following commands in the terminal/command line to build the app:
        - yarn
        - yarn run build
    3. Please make sure that your project is built successfully.
    4. Run the following commaand in the terminal/command-line to start the app:
        - yarn start
