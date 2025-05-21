import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/Default.tsx"),
  route("en/home", "routes/en/Home/index.tsx"),
  route("en/login", "routes/en/Login/index.tsx"),
] satisfies RouteConfig;
