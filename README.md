Deployed: https://evening-ocean-19840.herokuapp.com/

# MTG Trade Hub
# Project 2 - Interactive Full-Stack Application

## Description
MTG Trade Hub is an application used to track and maintain a user's collection for Magic: The Gathering cards. It also allows the user to interact with other users to set up trades for their cards through a posting system. Ideally the user can post a card or cards they are looking for and other users will then respond to that post with their own comments. By clicking on either the poster's username or one of the commenter's, the user can view the cards that the other users have added to their trade inventory.

## Requirements
To run locally you will need:

    Node.js
    MySQL
    
    bcrypt: ^4.0.1
    connect-session-sequelize: ^6.1.1
    dotenv: ^8.2.0
    express: ^4.18.1
    express-handlebars: ^3.1.0
    express-session: ^1.17.3
    handlebars: ^4.7.3
    mtgsdk: ^1.0.0
    mysql2: ^2.3.3
    sequelize: ^5.22.5
    

## How To Use
To use, simply create an account by inputing your desired username, email, and password. You can then start posting, commenting, and creating your own card inventory.

To run locally, first change the .env file to your own systems mysql password and username. Then, install all dependencies using npm install, then create the database in MySQL by running the schema.sql. After, seed the database by using the command "npm run seeds" in the CLI. You should then be able to run the program locally.

![project2_ss1](https://user-images.githubusercontent.com/101528994/178386151-bb6bd15a-1e88-42eb-8fdd-beaef7c097c7.png)
![project2_ss2](https://user-images.githubusercontent.com/101528994/178386167-73423f05-d6fb-48f1-bc10-5d0a6e55b8c2.png)
![project2_ss3](https://user-images.githubusercontent.com/101528994/178386173-6be70729-cba4-4620-a25f-e773ddc86a32.png)
![project2_ss4](https://user-images.githubusercontent.com/101528994/178386183-c8c6c64e-ec63-4897-8c62-73fd74571ed3.png)
