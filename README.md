# ORM-Ecommerce-back-end
## My Challenge: Build the back end for an e-commerce site

## Description
This challenge helps view and make changes to the current database for e-commerce database.


### This is a back-end for e-commerce site challenge

- My motivation:  To have a solid understanding of the relationships between MySQL, Sequelize, and Express
- Why I took this challege: To understand the basic of back-end application with database.
- What the challenge solved:  The back-end of the e-commerce site can query and manipulate the database.

### Video Demonstration
[ORM-Ecommerce-back-end.webm](https://github.com/JescelJames/ORM-Ecommerce-back-end/assets/105643185/a2e709b3-dd55-469d-a0ca-4eef5d8d4ba9)




### Links to the application.

- Repository Link:  https://github.com/JescelJames/ORM-Ecommerce-back-end

- Video Link: https://drive.google.com/file/d/145W-h7eP7akSE1swg_Ibr-NS1z0wWNdt/view





### What I learned:  

1. Sequelize queries such as findAll, findOne, create, update, and destroy
2. async, await makes it so much easier to read promises. 
3. If statement for validation with res.json requires return.
4. How routes index.js and api index.js talks to each other. 
5. That even after I ran mysql, seed, and server, my database is blank unless I changed the sequelize sync force to false! sequelize.sync({ force: false}).  start with true, to start fresh, then change to false.
6. Ctrl + d helps change string with the same name faster! and ../ moves up a folder. Thanks Max!
7. .belongsTo, .hasMany, .belongsToMany is confusing at first, but it becomes easy to understand after seeing examples.
8. Separated models in database make it easy to define.  Confusing at first, but once learned, its much easier to manipulate than MySQL commands.
9. That long exposure to codes make it easier to understand and grasp the concept.





## Code Description
- Change Directory to db, THEN type in terminal: mysql -u root -p THEN type in password
- This code can be accessed in terminal by typing in terminal: node index


## Installation Instructions

Prerequisites:  

 - Nodejs: Download at: https://nodejs.org/en
 - Express: https://expressjs.com/
 - Sequelize: https://sequelize.org/
 - MySQL: Download at: https://www.mysql.com/
 - MySQL2: https://www.npmjs.com/package/mysql2
 - Insomnia:  https://insomnia.rest/products/insomnia
 
 




 ## Usage
1. Develop folder -> db folder -> right-click schema.sql -> click Open in Integrated Terminal
      ```console
        mysql -u root -p
        (type in your password)
        source schema.sql


2. right-click server.js -> click Open in Integrated Terminal
      ```console
        npm run seed
        npm start 
        // or instead of npm start, use nodemon:
          npm i -D nodemon
          add this in package.json scripts>> "dev": "nodemon server.js"
          npm run dev


## Credits

#### My Instructors:
- Ben Wright 
- Max Ohsawa (Such a big help!)

#### My Academic Advisor
- Mike Sweeney

#### My Classmates
- Who are smarter than me, and willing to help at all times.

#### MySQL docs

- https://dev.mysql.com/doc/refman/8.0/en/tutorial.html

#### Insomnia docs

- https://docs.insomnia.rest/insomnia/scratchpad





## Contact
For any additional questions about this project, contact me at:
- Email: jesceljames@gmail.com
- Github: https://github.com/jesceljames




