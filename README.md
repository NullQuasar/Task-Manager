# Task Managemet App

Just add your tasks, its time and the app will do the rest for you.


# Database and enviroment variables

This project works with mongodb, you will need to download [MongoDB commnity edition](https://www.mongodb.com/try/download/community)<br/>
This app requires you to configure some enviroment variables with the required data. Follow the process below.

1. Go to the src/ folder
2. Create a new file named `.env`
3. Inside the file type the following data:
```
HOST=127.0.0.1
DATABASE=TaskManager
```
That's all.

# Execute

1. Go into the project folder
2. Open the terminal
3. Install dependencies: `$ npm i`
4. Start database: `$ mongod`
5. Start app: `$ node src/index.js`
6. Open the url in your browser

### Main Technologies:
- Nodejs
- Express
- Mongodb


# Created by: NullQuasar (Andrés M)
