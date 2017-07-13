# JS Object Key Information

This is a 0dep JS module/class that provides 'uniqueness' information about the keys within an array of objects.  Particularly useful in searching / sorting / filtering applications or for general object comparison.

## Installation
```sh
user@machine> npm i unique-key-js -S
```

**- or -**

simply include `UniqueKey.js` in your project and src/package/import/require it as necessary.

## Usage

`UniqueKey.js` exports a factory class as a module, `UniqueKey`

```js
const UniqueKey = require('./UniqueKey')
console.log('More Detailed Key Info : ', UniqueKey.getInfoAboutKeys(people))
console.log('Keys with Unique Values : ', UniqueKey.getKeysWithUniqueValues(people))
```

## Example
```js
const UniqueKey = require('./UniqueKey')

const people = [{
  "department":"Content Management",
  "deskphone" : "+1-234-456-7890",
  "displayname" : "Sherell Marcusen",
  "email" : "smarcusen@somedomain.com",
  "employee_id" : "5819",
  "firstname" : "Sherell ",
  "lastname" : "Marcusen",
  "location" : "LAX",
  "mobile" : "+1-123-234-3456",
  "picture" : "http://lorempixel.com/400/400/people/1/",
  "title" : "Content Manager"
},
{
  "department" : "Content Management",
  "deskphone" : "+1-234-456-5678",
  "displayname" : "Dian Chough",
  "email" : "dchough@somedomain.com",
  "employee_id" : "5790",
  "firstname" : "Dian ",
  "lastname" : "Chough",
  "location" : "LAX",
  "mobile" : "+1-123-234-5678",
  "picture" : "http://lorempixel.com/400/400/people/7/",
  "title" : "Content Manager"
},
{
  "department": "Content Management",
  "deskphone" : "+1-234-456-6789",
  "displayname" : "Ernie Dangler",
  "email" : "edangler@somedomain.com",
  "employee_id" : "5979",
  "firstname" : "Ernie ",
  "lastname" : "Dangler",
  "mobile" : "+1-123-234-4567",
  "picture" : "http://lorempixel.com/400/400/people/3/",
  "title" : "Content Management Supervisor"
}]

console.log('More Detailed Key Info : ', UniqueKey.getInfoAboutKeys(people))
console.log('Keys with Unique Values : ', UniqueKey.getKeysWithUniqueValues(people))
```

**Example Output**

Given the array of objects :
```javascript
[{
  "department":"Content Management",
  "deskphone" : "+1-234-456-7890",
  "displayname" : "Sherell Marcusen",
  "email" : "smarcusen@somedomain.com",
  "employee_id" : "5819",
  "firstname" : "Sherell ",
  "lastname" : "Marcusen",
  "location" : "LAX",
  "mobile" : "+1-123-234-3456",
  "picture" : "http://lorempixel.com/400/400/people/1/",
  "title" : "Content Manager"
},
{
  "department" : "Content Management",
  "deskphone" : "+1-234-456-5678",
  "displayname" : "Dian Chough",
  "email" : "dchough@somedomain.com",
  "employee_id" : "5790",
  "firstname" : "Dian ",
  "lastname" : "Chough",
  "location" : "LAX",
  "mobile" : "+1-123-234-5678",
  "picture" : "http://lorempixel.com/400/400/people/7/",
  "title" : "Content Manager"
},
{
  "department": "Content Management",
  "deskphone" : "+1-234-456-6789",
  "displayname" : "Ernie Dangler",
  "email" : "edangler@somedomain.com",
  "employee_id" : "5979",
  "firstname" : "Ernie ",
  "lastname" : "Dangler",
  "mobile" : "+1-123-234-4567",
  "picture" : "http://lorempixel.com/400/400/people/3/",
  "title" : "Content Management Supervisor"
}]
```
a response would look like
```javascript
{ unique_keys:
   [ 'department',
     'deskphone',
     'displayname',
     'email',
     'employee_id',
     'firstname',
     'lastname',
     'mobile',
     'picture',
     'title',
     'location' ],
  department:
   { is_unique: false,
     all_values:
      [ 'Content Management',
        'Content Management',
        'Content Management' ],
     unique_values: [ 'Content Management' ] },
  deskphone:
   { is_unique: true,
     all_values: [ '+1-234-456-6789', '+1-234-456-5678', '+1-234-456-7890' ],
     unique_values: [ '+1-234-456-6789', '+1-234-456-5678', '+1-234-456-7890' ] },
  displayname:
   { is_unique: true,
     all_values: [ 'Ernie Dangler', 'Dian Chough', 'Sherell Marcusen' ],
     unique_values: [ 'Ernie Dangler', 'Dian Chough', 'Sherell Marcusen' ] },
  email:
   { is_unique: true,
     all_values:
      [ 'edangler@somedomain.com',
        'dchough@somedomain.com',
        'smarcusen@somedomain.com' ],
     unique_values:
      [ 'edangler@somedomain.com',
        'dchough@somedomain.com',
        'smarcusen@somedomain.com' ] },
  employee_id:
   { is_unique: true,
     all_values: [ '5979', '5790', '5819' ],
     unique_values: [ '5979', '5790', '5819' ] },
  firstname:
   { is_unique: true,
     all_values: [ 'Ernie ', 'Dian ', 'Sherell ' ],
     unique_values: [ 'Ernie ', 'Dian ', 'Sherell ' ] },
  lastname:
   { is_unique: true,
     all_values: [ 'Dangler', 'Chough', 'Marcusen' ],
     unique_values: [ 'Dangler', 'Chough', 'Marcusen' ] },
  mobile:
   { is_unique: true,
     all_values: [ '+1-123-234-4567', '+1-123-234-5678', '+1-123-234-3456' ],
     unique_values: [ '+1-123-234-4567', '+1-123-234-5678', '+1-123-234-3456' ] },
  picture:
   { is_unique: true,
     all_values:
      [ 'http://lorempixel.com/400/400/people/3/',
        'http://lorempixel.com/400/400/people/7/',
        'http://lorempixel.com/400/400/people/1/' ],
     unique_values:
      [ 'http://lorempixel.com/400/400/people/3/',
        'http://lorempixel.com/400/400/people/7/',
        'http://lorempixel.com/400/400/people/1/' ] },
  title:
   { is_unique: false,
     all_values:
      [ 'Content Management Supervisor',
        'Content Manager',
        'Content Manager' ],
     unique_values: [ 'Content Management Supervisor', 'Content Manager' ] },
  location:
   { is_unique: false,
     all_values: [ 'LAX', 'LAX' ],
     unique_values: [ 'LAX' ] } }
```
