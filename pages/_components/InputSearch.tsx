import { ChangeEvent, useEffect } from "react";
import type { NextPage } from "next";
import { useState } from "react";
import { BsSearch, BsXCircleFill } from "react-icons/bs";

import styles from "./InputSearch.module.css";

const InputSearch: NextPage = () => {
  const [text, setText] = useState("");
  const [colorIcon, setColorIcon] = useState("#9CA3AF");

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => setText(e.target.value);

  const clearSearch = () => setText("")

  useEffect(()=>{
      text !== "" ? setColorIcon("#F87171") : setColorIcon("#9CA3AF")
  }, [text])

  return (
    <div className={styles.divBusca}>
      <BsSearch className={styles.icon} />
      <input
        value={text}
        onChange={handleSearch}
        type="text"
        className={styles.txtBusca}
        placeholder="Buscar..."
      />
      <BsXCircleFill
        onClick={clearSearch}
        className={styles.icon}
        color={colorIcon}
      />
    </div>
  );
};

export default InputSearch;
