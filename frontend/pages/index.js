import axios from "axios";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import CareerItem from "../component/careerItem";
import styles from "../styles/custom.module.css";

export default function Home() {
  const Router = useRouter();
  const clickHandler = () => {
    Router.push("/career?page=1");
  };
  return (
    <div>
      <h1>This Home page!!!!!!!!!!</h1>
      <button onClick={clickHandler}> Careers</button>
    </div>
  );
}
