
const jsonServer = require('json-server')

const expenseTrackerServer = jsonServer.create()

const router = jsonServer.router('db.json')

const middleware = jsonServer.defaults()

expenseTrackerServer.use(middleware)
expenseTrackerServer.use(router)


const PORT = 4000 || process.env

expenseTrackerServer.listen(PORT,()=>{
    console.log(`server running successfully at port ${PORT}`);
})