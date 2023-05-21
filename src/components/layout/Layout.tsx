import { PropsWithChildren } from "react";
import "./layout.css";
function Layout({ children }: PropsWithChildren) {
  return <div id="layout">{children}</div>;
}

export default Layout;
