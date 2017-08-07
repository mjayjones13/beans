# Beans

## Dev
### Getting started
Install dependencies: `npm install`

Build the webpack bundle: `npm run build` (build once) or `npm run build:dev` (watch source files)

Run the server: `npm start`

View Beans on [localhost:3000](http://localhost:3000), or whichever port you specified in the environment variables.

### Seeding the database
To seed the database, ensure that a mongod instance is running.

Then run: `npm run seed`

### Running Tests
```
npm run test:client
```

OR

```
karma start
```