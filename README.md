Automatic Test Evaluation
======================

Web application to evaluate student tests automatically.

# How to start developing

First run the backend as shown below and then the frontend.

Install frontend dependencies
-----------------------------
1. Go to *automatic-test-evaluation* directory
2. Install npm dependencies (this is one time step)

    `$ npm install`

How to run backend
------------------
1. Build the project

    `mvn clean install`
2. Run following command in command prompt

    `$ heroku local web`

**Note:** If you change something in backend then you have to build and run it again

How to run frontend
-------------------
1. Go to *automatic-test-evaluation* directory
2. Start the frontend
   
    `$ npm start`
3. Open your browser and type following URL in the address bar

    `http://localhost:3000`

**Note:** If you change something in frontend is enough to refresh the page to see the changes


# Making release build

1. Go to project root directory
2. Run the following command:

    `$ mvn clean install`

# How to deploy on heroku
1. Push to heroku repository

    `$ git push heroku master`
2. Then build and start the application

    `$ heroku open`
3. Open your browser and paste the URL that heroku provided to you

Database relations
------------------
    *User login information*
    ` email, password, first name, last name, relation one to many with |Classes database| `
    
    *Classes*
    ` relation one to many with |Students database|, class name, relation one to one with |Class information database|, relation one to many with |Blanks database| `
    
    *Students*
    ` first name, last name, number in class, average marks, ... `
    
    *Class information*
    ` number of done tests, average marks, tests in common with other classes (used to calculate diagrams) `
    
    *Blanks*
    ` number of answer fields, relation one to many with |Answers database| `
    
    *Answers*
    `group of answers, number of options, number of answer, right answer, ... `
    
    *Survey information*
    ` scoring value of the user given, optional - ide for improovment of the web app `
