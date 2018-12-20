# README

This repository is a Rails 5.2. application, configured as a pure API. It supports users, user accounts, signups and logins via the users endpoint. Authentication is set up with Doorkeeper. Database is Postgres.

This API is specially designed to work with Ember on the front-end: requests and responses are conformed to JSON:API.

To run the application, use the following commands:

```
bundle
rake db:create db:migrate db:seed
rails s
```

