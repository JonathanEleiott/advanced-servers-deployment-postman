# Advanced Server Requests, Deployment, and Postman

## More Server Requests

- POST -> add data to a DB
  - POST requests come with a body
  - we can get the body with req.body, BUT we need to run app.use(express.json()) before we try to extract the body

## Error Handler

- takes in all type of HTTP requests and needs to have a function that has a err, req, res, and a next
- app.use((err, req, res, next) => { res.status(400).send(err.message) })

## 404 Handler

- different than error handler
- goes at the bottom of the routes
- will handle any routes that don't match above

## Deployment - process of making your website available on the internet

- Render - one website that allows us to use their servers to make our website live

## Postman - app that allows us to make mock requests to our server
