import axios from "axios";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import CareerItem from "../component/careerItem";
import styles from "../styles/custom.module.css";

export default function Home({ results: result, page }) {
  const Router= useRouter()
  const [careers, setCareers] = useState([]);
  const [flag, setflag] = useState([]);

  useEffect(async () => {
    // const result = await axios.get(
    //   `http://localhost:5000/career?page=${page}&limit=3`
    // );
    setCareers([...careers, ...result]);
    setflag([...result]);
    //result.data>0 ? setflag(1) : setflag(0) ;
  }, [page]);

  const onClickHandler = () => {
    //setPage(page + 1);
    Router.push(`career?page=${+page+1}`);
  };

  return (
    <div className={styles.container}>
      <h1 id={styles.h1}>QuillBot</h1>
      <h2 id={styles.h2}>Careers</h2>

      <br />
      <br />

      {careers.map((element) => (
        <CareerItem key={element.id} data={element} />
      ))}
      {/* {console.log(flag)} */}
      {careers.length > 0 && flag.length > 0 && (
        <button onClick={onClickHandler}>View More</button>
      )}
    </div>
  );
}

export async function getServerSideProps(context) {
  const result = await axios.get(
    `http://localhost:5000/career?page=${context.query.page}&limit=3`
  );
    console.log()
  return {
    props: {
      results: result.data,
      page: context.query.page,
    },
  };
}
