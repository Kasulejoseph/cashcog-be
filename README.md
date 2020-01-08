# Cashcog-API
> An API to manage expenses for startup company builders like [XCNT](https://xcnt.io)

## Badges
[![Build Status](https://travis-ci.com/Kasulejoseph/cashcog-be.svg?branch=master)](https://travis-ci.com/Kasulejoseph/cashcog-be)
[![Maintainability](https://api.codeclimate.com/v1/badges/1b1c51864a0e951003d0/maintainability)](https://codeclimate.com/github/Kasulejoseph/cashcog-be/maintainability)
[![Coverage Status](https://coveralls.io/repos/github/Kasulejoseph/cashcog-be/badge.svg?branch=master)](https://coveralls.io/github/Kasulejoseph/cashcog-be?branch=master)

https://cashcog.herokuapp.com/
## Prerequisites
``` 
- NPM
- Node/Express
- MongoDB
  ```
 ## Installation
```
Clone the repo
- $ https://github.com/Kasulejoseph/fast-food-fast-db.git
- $ cd cashcog-be
- $ npm install
```
## Run Server
```
- $ npm run start
```

- mongod --config /usr/local/etc/mongod.conf 

## End Points

|           End Point                      |     Description    |   Method   | Requirements|
|   -------------------------------------- |-----------------------|------------|-------------|
|     /                  | Fetch all expenses   |   GET   |
|     /users/:employee_uuid         | Fetch User Expenses   |   GET |  |
|     /:expense_uuid       | Update expenses[declined, approved].  | PATCH | status
|     /?status=approved$amount...      | Query/Filter expenses.  | GET | 
|     /?sort=amount:asc      | sort expenses [amount, created_at]  | GET | 
|     /analysis       | Fetches data used for Quantitative analysis.  | GET |

## Documentation
- [Postman](https://documenter.getpostman.com/view/5485878/SWE6ad8w?version=latest)

## License
[MIT](http://opensource.org/licenses/MIT)
Copyright &copy; 2019, [Kasule Joseph](https://github.com/Kasulejoseph). All rights reserved.
