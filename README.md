# Cashcog-API
> An API to manage expenses for startup company builders like [XCNT](https://xcnt.io)

## Badges
[![Test Coverage](https://api.codeclimate.com/v1/badges/1b1c51864a0e951003d0/test_coverage)](https://codeclimate.com/github/Kasulejoseph/cashcog-be/test_coverage)

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
 

## End Points

|           End Point                      |     Description    |   Method   | Requirements|
|   -------------------------------------- |-----------------------|------------|-------------|
|     /                  | Fetch all expenses   |   GET   |
|     /users/:employee_uuid         | Fetch User Expenses   |   GET |  |
|     /:expense_uuid       | Update expenses[declined, approved].  | PATCH | status

## Documentation
- [Postman](https://documenter.getpostman.com/view/5485878/SWE6ad8w?version=latest)

## License
[MIT](http://opensource.org/licenses/MIT)
Copyright &copy; 2019, [Kasule Joseph](https://github.com/Kasulejoseph). All rights reserved.
