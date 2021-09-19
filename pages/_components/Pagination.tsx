import { NextPage } from "next";

import styles from "./Pagination.module.css";

const Pagination: NextPage = () => {
 
  return (
    <ul className={styles.pagination}>
  <li><a href="#">«</a></li>
  <li><a href="#">1</a></li>
  <li><a className={styles.active} href="#">2</a></li>
  <li><a href="#">3</a></li>
  <li><a href="#">4</a></li>
  <li><a href="#">5</a></li>
  <li><a href="#">6</a></li>
  <li><a href="#">7</a></li>
  <li><a href="#">»</a></li>
</ul>
  );
};

export default Pagination;