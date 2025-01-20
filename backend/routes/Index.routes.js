const express = require('express');
const router = express.Router();

const accountRoutes = require('../routes/Account.routes');


const routes = [
    {
        path: '/account',
        route: accountRoutes 
    }
]

routes.forEach((route) => {
    router.use(route.path,route.route)
})

module.exports = router;