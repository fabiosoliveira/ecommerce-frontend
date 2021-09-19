import Head from "next/head";

import styles from "../styles/Home.module.css";
import InputSearch from "./_components/InputSearch/InputSearch";
import Pagination from "./_components/Pagination/Pagination";
import List from "./_components/List/List";
import { useState } from "react";
import { DataResponseProducts } from "../lib/products";
import { useFetch } from "./_hooks/use-fetch";

const Home = () => {
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState('');

  function handleSearch(text: string){
    setPage(1)
    setSearch(text)
  }

  const { data } = useFetch<DataResponseProducts>(search, page)

  return (
    <div className={styles.container}>
      <Head>
        <title>Lista de produtos</title>
      </Head>

      <div className={styles.header}>
        <h1 className={styles.titlePrimary}>mmartan</h1>
        <InputSearch 
        text={search}
        setText={handleSearch}
        />
      </div>

      <div className={styles.titleSecondary}>
        <h2>{search ? search : 'Lista de produtos'}</h2>
      </div>

      <div className={styles.body}>
        <div className={styles.titleTerciary}>
        <h3>{data?.page?.totalElements || 0} PRODUTOS ENCONTRADOS</h3>
        </div>

        <List products={data?._embedded?.products || []} />
        <div className={styles.footer}>
          <span>{data?.page?.size || 0} produtos por página</span>
          <Pagination
          maxVisibleButtons={5}
          setPageIndex={setPage}
          atualPage={data?.page?.number || 0}
          totalPages={data?.page?.totalPages || 0}
           />
        </div>
      </div>
    </div>
  );
};

export default Home;
