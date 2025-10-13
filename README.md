# NestJS GraphQL Prisma Boilerplate

This is a boilerplate project for building a NestJS application with GraphQL, Prisma, and PostgreSQL.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Database

To set up the database, you will need to have PostgreSQL installed and running.

1.  Create a `.env` file from the `.env.example` file and update the `DATABASE_URL` with your database connection string.
2.  Run the following command to create and apply the initial migration:

    ```bash
    $ npx prisma migrate dev
    ```

3.  Run the following command to seed the database with initial data:

    ```bash
    $ npm run seed
    ```