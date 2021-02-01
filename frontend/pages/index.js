import axios from "axios";
import React, { useState, useEffect } from "react";
import CareerItem from "../component/careerItem";
import styles from '../styles/custom.module.css'

var gpage;

export default function Home({ results: result , gpage}) {
  const [page, setPage] = useState(1);
  const [careers, setCareers] = useState([])
  const [flag, setflag] = useState([])
  gpage=page

  useEffect(async () => {
    // const result = await axios.get(
    //   `http://localhost:5000/career?page=${page}&limit=3`
    // );
    setCareers([...careers, ...result]);
    setflag([...result])
    //result.data>0 ? setflag(1) : setflag(0) ;
  }, [page]);

  const onClickHandler = () => {
    setPage(page + 1);
  };

  return (
    <div className={styles.container}>

      <h1 id={styles.h1}>QuillBot</h1>
      <h2 id={styles.h2}>Careers</h2>

      <br/>
      <br/>

      {careers.map((element) => (
        <CareerItem key={element.id} data={element} />
      ))}
      {/* {console.log(flag)} */}
      {careers.length > 0 && flag.length > 0 && <button onClick={onClickHandler}>View More</button>}
    </div>
  );
}

export async function getServerSideProps(context){
  var x=1
  const result = await axios.get(
    `http://localhost:5000/career?page=${x++}&limit=3`
  );
  
  x=x+1

  return{
    props: {
      results: result.data
    }
  }
}