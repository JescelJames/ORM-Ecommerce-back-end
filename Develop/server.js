// REQUIREMENTS / DEPENDENCIES _________________
    const express = require('express');
    const routes = require('./routes');
    // import sequelize connection
    const sequelize = require('./config/connection');

// APP / PORT _______________________________
    const app = express();
    const PORT = process.env.PORT || 3001;

// MIDDLEWARES _______________________
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));

// ROUTES _______________________________________
    app.use(routes);


// START SERVER _______________________________________________    
    // sync sequelize models to the database, then turn on the server
    sequelize.sync({ force: true }).then(() => { 
    app.listen(PORT, () => console.log(`App listening on port ${PORT}!`));
    });