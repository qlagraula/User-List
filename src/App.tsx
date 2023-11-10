import Topbar from "@/components/Topbar";
import Table from "@/components/Table/Table";
import { container } from "@styled-system/patterns";
import { useQuery } from "@tanstack/react-query";
import { fetchUsers } from "@/lib/user";

import User from "@/components/Table/cells/User";
import Groups from "@/components/Table/cells/Groups";
import Access from "@/components/Table/cells/Access";
import LastLogin from "@/components/Table/cells/LastLogin";
import Title from "./components/Title";

function App() {
  const { data } = useQuery({
    queryKey: ["users"],
    queryFn: fetchUsers,
  });

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
        <Table
          users={data}
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
