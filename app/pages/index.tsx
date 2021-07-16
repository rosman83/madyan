import Head from "next/head";
import Image from "next/image";
import { Footer } from "../components/footer/Footer";
import { Login } from "../components/auth/Login";
import React from "react";
import { Button } from "@chakra-ui/button";
import { useColorMode } from "@chakra-ui/react";
export default function Home() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <div>
      <a>main page</a>
    </div>
  );
}
