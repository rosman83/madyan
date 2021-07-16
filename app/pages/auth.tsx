import Head from "next/head";
import { Footer } from "../components/footer/Footer";
import { Login } from "../components/auth/Login";
export default function Auth() {
  return (
    <div>
      <Login />
    </div>
  );
}
