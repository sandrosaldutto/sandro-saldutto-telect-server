#Telect

Telecet is a web responsive application that makes tracking your shows easy and straight to the point.
I created this app because I found it difficult to track all of my shows in all of the different streaming platforms.
Telect allows you to do quick searches on TV Shows and also add them to your list so you can track each episode.

This application is also my capstone project for BrainStation's full-stack bootcamp.
The project task was to create a fullstack application with react in 2 weeks.

##Tools used for Telect Back-End:
Node/Express backend API with JWT for auth, and Knex to query a MySQL database.

#Installation:

You will need npm, node and MySQL.

1. Clone or download Telect from https://github.com/sandrosaldutto/sandro-saldutto-telect-server.

2. Create a new database called telect.

3. Run npm i from inside the server directory.

   ```bash
   $ cd telect-server.
   $ npm i.
   ```

4. Run Migrations:

   ```bash
   $ npm run migrate.
   ```

5. Start the server:

   ```bash
   $ npm start
   ```
