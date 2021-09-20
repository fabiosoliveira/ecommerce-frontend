import { useRef } from "react";
import useSWR from "swr";
import useDebounce from "./use-debounce";

const fetcher = (args: RequestInfo) => fetch(args).then((res) => res.json());

export default function useFetch<T>(search: string, page: number) {
  const size = 10;
  const debouncedSearch = useDebounce(search, 500);
  const productsRef = useRef<T>();

  const URL_API = process.env.NEXT_PUBLIC_URL_API;

  const { data } = useSWR<T>(
    () =>
      debouncedSearch
        ? `${URL_API}/api/products?q=${debouncedSearch}&page=${page}&size=${size}`
        : `${URL_API}/api/products?page=${page}&size=${size}`,
    fetcher,
    {
      shouldRetryOnError: true,
      errorRetryCount: 5,
      errorRetryInterval: 500,
    }
  );

  if (data) productsRef.current = data;

  return { data: productsRef.current };
}
