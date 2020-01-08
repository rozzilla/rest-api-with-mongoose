# rest-api-with-mongoose
## Example of RESTful API with MongoDB using Mongoose and Node.js

To run it:

`git clone https://github.com/rozzilla/rest-api-with-mongoose.git && cd rest-api-with-mongoose && npm install && npm start`

To try it, use an HTTP agent or tester (like CURL).

Request examples:
### Posts post data
`curl -H "Content-Type: application/json" -X POST -d '{"balance": "1000", "name": "savings"}' "http://localhost:3000/accounts"`

### Updates post data at specific id (change the last URL parameter `id` with a real identifier)
`curl -H "Content-Type: application/json" -X PUT -d '{"balance": "1500"}' "http://localhost:3000/accounts/id"`

### Gets post data
`curl "http://localhost:3000/accounts"`

### Deletes post data at specific id (change the last URL parameter `id` with a real identifier)
`curl -X DELETE "http://localhost:3000/accounts/id"`


Then you can see the collection on MongoDB through the CLI:
```
mongo
use mongoose-rest-api
db.accounts.find().pretty()

```

If you don't yet have it, please install MongoDB from here: https://docs.mongodb.com/manual/installation/
