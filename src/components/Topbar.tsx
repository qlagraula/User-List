import logo from "@assets/logo.svg";
import { css } from "@styled-system/css";

function Topbar() {
  return (
    <div
      className={css({
        backgroundColor: "main",
        height: "topBar",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      })}
    >
      <img src={logo} className="logo" alt="Logo" />
    </div>
  );
}

export default Topbar;
