import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const ScrollToTop = () => {
  const routing = useLocation();

  const action = () => {
    //debugger;
    if (
      (routing.pathname == "/e3" && routing.hash == "#tickets") ||
      routing.search.includes("id")
    ) {
      window.scrollTo(0, document.querySelector("#tickets")?.offsetTop);
    } else if (routing.pathname == "/" && routing.hash == "#events") {
      window.scrollTo(0, document.querySelector("#events")?.offsetTop);
    } else {
      window.scrollTo(0, 0);
    }
  };

  useEffect(() => action(), [routing]);
  return null;
};

export default ScrollToTop;
