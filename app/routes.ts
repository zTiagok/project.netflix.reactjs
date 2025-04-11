import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/default.tsx"), 
  route("en/home", "routes/en/home.tsx"),
  route("en/login", "routes/en/login.tsx"),
] satisfies RouteConfig;
