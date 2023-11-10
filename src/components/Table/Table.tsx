import { useState } from "react";

import { css } from "@styled-system/css";
import { User } from "@/lib/user";

import Header from "./Header";
import Body, { Column } from "./Body";
import Pagination, { PAGE_SIZE } from "./Pagination";

type TableProps = {
  users?: User[];
  columns: Column[];
  headers: string[];
};

function Table({ users, columns, headers }: TableProps) {
  const [currentPage, setCurrentPage] = useState(1);

  const filteredUsers = users?.length
    ? users.slice((currentPage - 1) * PAGE_SIZE, currentPage * PAGE_SIZE)
    : [];
  return (
    <>
      <table
        className={css({
          width: "full",
          borderSpacing: "0",
          borderCollapse: "separate",
        })}
      >
        <Header columns={headers} />
        {users ? <Body users={filteredUsers} columns={columns} /> : null}
      </table>
      {users ? (
        <Pagination
          count={users.length}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      ) : null}
    </>
  );
}

export default Table;
