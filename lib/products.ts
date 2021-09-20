export interface Page {
  size: number;
  totalElements: number;
  totalPages: number;
  number: number;
}

export interface Product {
  _id: string;
  name: string;
  previewPrice: string;
  currentPrice: string;
}

export interface DataResponseProducts {
  page: Page;
  _embedded: {
    products: Product[];
  };
}

export async function getProducts(
  page: number,
  size: number
): Promise<DataResponseProducts> {
  const res = await fetch(
    `https://ecommerce-backend-coteminas.herokuapp.com/api/products?page=${page}&size=${size}`
  );
  return res.json();
}
