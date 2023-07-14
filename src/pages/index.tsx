import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

const inter = Inter({ subsets: ["latin"] });

const Home = () => {
  const router = useRouter();

  useEffect(() => {
    debugger
    var isLogin = localStorage.getItem("loginVal") || "";
    if (!isLogin) {
      router.push("/login");
    }
  }, []);
  return <></>;
};
export default Home;
