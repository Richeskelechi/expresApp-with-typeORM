# expressApp-Template
This is a setup to my express App Folder Setup with type ORM and mysql database connection.

# Once you clone this repository
## create a .env file in the root of your application
## set the environment variable inside the .env file.

## check the .env.example for sample env.

### Ensure the Database is existing

## use npm i to install all dependencies
# Now we need to run the migration files if any. to do that we do

# npm run migration:run. The command is sepcified in the script section of the package.json file.

# If you made a change to your entities and you need to create a migration file we run

# npm run migration:generate ./db/migration/nameOfMigrationFile

# Ensure the path you specified above is the same path where your migration file is located in the data-source.js

## use npm run dev to start the application in the dev mode

## use npm start to start the application in the production mode