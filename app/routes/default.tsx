import { useEffect } from "react";
import { useNavigate } from "react-router";

export default function Default() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/en/home");
  }, [navigate]);

  return <div></div>;
}
