import Head from "next/head";
import Image from "next/image";
import { Footer } from "../components/footer/Footer";
import React from "react";
import { Button } from "@chakra-ui/button";
import Dashboard from "../components/dash/Dashboard";
import { useColorMode } from "@chakra-ui/react";
export default function Home() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <div>
      <Dashboard />
    </div>
  );
}
