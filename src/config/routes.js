import Login from "../pages/login";
import Dashboard from "../pages/dashboard";
import Subscription from "../pages/subscription";
import InDevelopment from "../pages/underConstructor";

export const routes = [
  {
    path: "/",
    Page: Login,
    auth: false,
  },
  {
    path: "/dashboard",
    Page: Dashboard,
    auth: true,
  },
  {
    path: "/subscription",
    Page: Subscription,
    auth: true,
  },
  {
    path: "/profile",
    Page: InDevelopment,
    auth: false,
  },
  {
    path: "/activities",
    Page: InDevelopment,
    auth: true,
  },
  {
    path: "/history",
    Page: InDevelopment,
    auth: true,
  },
  {
    path: "/notifications",
    Page: InDevelopment,
    auth: true,
  },
  {
    path: "/preferences",
    Page: InDevelopment,
    auth: true,
  },
  {
    path: "/help",
    Page: InDevelopment,
    auth: true,
  },
];
