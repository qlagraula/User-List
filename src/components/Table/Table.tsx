import { useState } from "react";

import { css } from "@styled-system/css";
import { User } from "@/lib/user";

import Header from "./Header";
import Body, { Column } from "./Body";
import Pagination, { PAGE_SIZE } from "./Pagination";
import { UserX } from "@/assets/UserX";
import { token } from "@styled-system/tokens";

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
        {filteredUsers?.length ? (
          <Body users={filteredUsers} columns={columns} />
        ) : (
          <tbody>
            <tr>
              <td colSpan={4}>
                <div
                  className={css({
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    height: "md",
                    color: "text.primary",
                    fontSize: "md",
                    borderLeftWidth: 1,
                    borderRightWidth: 1,
                    borderBottomWidth: 1,
                    borderBottomRadius: "md",
                    borderColor: "borders.primary",
                  })}
                >
                  <UserX
                    stroke={token("colors.text.secondary")}
                    width={24}
                    height={24}
                  />
                  <div>No result for this research</div>
                  <div
                    className={css({ color: "text.secondary", fontSize: "sm" })}
                  >
                    Please refine your filters to find a matching user
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        )}
      </table>
      {filteredUsers?.length ? (
        <Pagination
          count={filteredUsers.length}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      ) : null}
    </>
  );
}

export default Table;
