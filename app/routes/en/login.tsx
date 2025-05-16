import type { Route } from "../../+types/root";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Netflix - Login" },
    { name: "description", content: "https://github.com/zTiagok" },
  ];
}

export default function Login() {
  return <div></div>;
}
