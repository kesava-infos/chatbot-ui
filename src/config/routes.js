import Login from "../pages/login"
import Dashboard from "../pages/dashboard"
import Subscription from "../pages/subscription"

export const routes = [
    {
        path: "/",
        Page: Login,
        auth: false
    },
    {
        path: "/dashboard",
        Page: Dashboard,
        auth: true
    },
    {
        path: "/subscription",
        Page: Subscription,
        auth: true
    },
]

