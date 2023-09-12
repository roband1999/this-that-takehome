# this-that-takehome

Take Home Task: https://thisthat.notion.site/Take-Home-Task-76e1b3af48644dc7983574a6765c2a86

# How To Run the Solutions

## Backend Task
- From the my-turborepo Repo Root we can do
     - `cd super-api && npm install && npm run start:dev`
     - However there is just a DTO and outline of an updateCharacters Controller so nothing should really run here

- For the ERM Diagram , this is a draw.io file you can view this by importing into https://draw.io or run the Desktop draw.io App if you have it.

- The SQL Queries to Implement the Schema design is in mySchema.sql.
    - To run this and create the tables in a DB, you can do this:
        - Run a PostGres Docker Image in a Container (use this guide: https://www.sqlshack.com/getting-started-with-postgresql-on-docker/)
        - You can use the PostGres Command prompt by SSHing in, or use pgAdmin4 (download here: https://www.pgadmin.org/download/)
        - Copy/paste queries for mySchema.sql and run them (I did it in pgAdmin4). This created the tables and setup the DB.

    TODO:
    - Checkout the root/super-api/src/app.controller.js for some details about what I'd do next here.
    - Synthesise of Postgres DB Schema Could be cleaner: Setup from a command in the Monorepo where Docker Spins up a Postgres Container with the Dev Volume and creates the Schema as a startup script
    - We would also grab some useful metadata like Created/Updated TimeStamps.
    - Setup controllers for updating Accomplaces with a pattern where we can update and delete relationships seperately.
    - Unit Testing (although controller isnt in scope)

## Frontend Task
- This can be tested easily with following:
    - `cd super-app && npm install && npm run dev`
    - Visit http://localhost:5173/ in **Chrome** and here you should be able to play with the Marvel Character Address Book™

    TODO:
    - Handle fast typing inputs better, use a Queue so we don't end up losing the last change during quick typing
    - Unit Testing
    - Cross Browser Compatibility
    - Gracefully Handle getCharacters Request Errors
    - Clean Up UI, Add some Drop Down Animation that doesn't look like 2010 Powerpoint
    
## General Todos
- Implement turbo repo monorepo builds
- Docker Configs for Containerising these apps
- Take out the config into a shared package in the MonoRepo
- The Nice to Have: Commit Linting with Husk

