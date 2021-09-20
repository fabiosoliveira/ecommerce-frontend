import Image from "next/image";
import { Product } from "../../lib/products";

import styles from "./List.module.css";

interface ItemProps {
  description: string;
  previewPrice: string;
  currentPrice: string;
}

const Item = ({ description, previewPrice, currentPrice }: ItemProps) => {
  return (
    <li>
      <div>
        <div className={styles.image}>
          <Image src="/toalha01.png" alt="Toalha 01" width={60} height={60} />
        </div>
        <div className={styles.image}>
          <Image
            className={styles.image}
            src="/toalha02.jpg"
            alt="Toalha 02"
            width={60}
            height={60}
          />
        </div>
        <div className={styles.image}>
          <Image
            className={styles.image}
            src="/toalha03.jpg"
            alt="Toalha 03"
            width={60}
            height={60}
          />
        </div>
        <div className={styles.description}>
          <p className={styles.descriptionProduct}>{description}</p>
          <p className={styles.typeProduct}>Classic I - Solteiro Extra</p>
        </div>
      </div>
      <div className={styles.price}>
        <p>
          <span className={styles.previewPrice}>{previewPrice} </span>
          por
          <span className={styles.currentPrice}> {currentPrice}</span>
        </p>
      </div>
    </li>
  );
};

interface ListProps {
  products: Product[];
}

const List = ({ products }: ListProps) => {
  return (
    <ul className={styles.list}>
      {products?.map((product) => (
        <Item
          key={product._id}
          description={product.name}
          previewPrice={product.previewPrice}
          currentPrice={product.currentPrice}
        />
      ))}
    </ul>
  );
};

export default List;
