import styles from "./Pagination.module.css";

interface PaginationProps {
  setPageIndex: (params: number) => void;
  totalPages: number;
  atualPage: number;
  maxVisibleButtons: number;
}

const Pagination = ({
  setPageIndex,
  totalPages,
  atualPage,
  maxVisibleButtons,
}: PaginationProps) => {
  const pages: any = [];

  const { maxLeft, maxRight } = calculateMaxVisible();

  for (let page = maxLeft; page <= maxRight; page++) {
    pages.push({
      label: page + "",
      page: page,
      active: atualPage === page ? styles.active : "",
    });
  }

  const nextButton = { label: ">", page: next(), active: "" };
  const prevButton = { label: "<", page: prev(), active: "" };
  const firstButton = { label: "«", page: 1, active: "" };
  const lastButton = { label: "»", page: totalPages, active: "" };

  const buttos = [firstButton, prevButton, ...pages, nextButton, lastButton];

  function calculateMaxVisible() {
    let maxLeft = atualPage - Math.floor(maxVisibleButtons / 2);

    let maxRight = atualPage + Math.floor(maxVisibleButtons / 2);

    if (maxLeft < 1) {
      maxLeft = 1;
      maxRight = maxVisibleButtons;
    }

    if (maxRight > totalPages) {
      maxLeft = totalPages - (maxVisibleButtons - 1);
      maxRight = totalPages;

      if (maxLeft < 1) {
        maxLeft = 1;
      }
    }

    return { maxLeft, maxRight };
  }

  function next() {
    let page = atualPage + 1;
    if (page > totalPages) {
      page--;
    }
    return page;
  }

  function prev() {
    let page = atualPage - 1;
    if (page < 1) {
      page++;
    }
    return page;
  }

  return (
    <ul className={styles.pagination}>
      {buttos.map(({ page, label, active }) => (
        <li key={label} onClick={() => setPageIndex(page)}>
          <a className={active} href="#">
            {label}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Pagination;
