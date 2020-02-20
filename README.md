## Simple venue and bookings app

## Install and run:

1. `cp .env.example .env` and fill it in with the PostgreSQL DB connection credentials (raw SQL queries used)
2. `yarn install`
3. `sequelize db:migrate && sequelize db:seed:all`
4. `yarn start`
5. Navigate to [http://localhost:3000/](http://localhost:3000/)
