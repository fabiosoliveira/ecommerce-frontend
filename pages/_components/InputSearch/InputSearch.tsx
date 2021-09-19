import { ChangeEvent, useEffect } from "react";
import { useState } from "react";
import { BsSearch, BsXCircleFill } from "react-icons/bs";

import styles from "./InputSearch.module.css";

enum Color {
  GRAY = "#9CA3AF",
  RED = "#F87171",
}

const InputSearch = ({ text, setText }: any) => {
  const [colorIcon, setColorIcon] = useState(Color.GRAY);

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) =>
    setText(e.target.value);

  const clearSearch = () => setText("");

  useEffect(() => {
    text !== "" ? setColorIcon(Color.RED) : setColorIcon(Color.GRAY);
  }, [text]);

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
