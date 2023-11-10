import Topbar from "@/components/Topbar";
import Table from "@/components/Table/Table";
import { container } from "@styled-system/patterns";
import { useQuery } from "@tanstack/react-query";
import { fetchUsers } from "@/lib/user";
import { useState } from "react";
import { css } from "@styled-system/css";

import User from "@/components/Table/cells/User";
import Groups from "@/components/Table/cells/Groups";
import Access from "@/components/Table/cells/Access";
import LastLogin from "@/components/Table/cells/LastLogin";
import Title from "./components/Title";
import SearchBar from "./components/SearchBar";
import Dropdown from "./components/Dropdown";
import { filterUserList } from "./lib/utils";

function App() {
  const { data } = useQuery({
    queryKey: ["users"],
    queryFn: fetchUsers,
  });

  const teams = [...new Set(data?.flatMap((item) => item.groups))];
  const [selectedTeams, setSelectedTeams] = useState<string[]>([]);

  const [search, setSearch] = useState("");

  const filteredData = data ? filterUserList(data, selectedTeams, search) : [];

  return (
    <>
      <Topbar />
      <div
        className={container({
          paddingY: "5",
          display: "flex",
          flexDirection: "column",
          gap: "5",
        })}
      >
        <Title count={data?.length} />
        <div className={css({ display: "flex", gap: "2" })}>
          <SearchBar value={search} onChange={setSearch} />
          <Dropdown
            items={teams.map((team) => ({ label: team, value: team }))}
            selectedItems={selectedTeams}
            onChange={setSelectedTeams}
          />
        </div>

        <Table
          users={filteredData}
          headers={["User", "Teams", "Access", "Last Login"]}
          columns={[
            {
              key: "name",
              Renderer: User,
            },
            {
              key: "groups",
              Renderer: Groups,
            },
            {
              key: "access",
              Renderer: Access,
            },
            {
              key: "last_login",
              Renderer: LastLogin,
            },
          ]}
        />
      </div>
    </>
  );
}

export default App;
