import React from "react";
import Zoom from "@mui/material/Zoom";
import { styled } from "@mui/material/styles";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const LightTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: "#ddd",
    color: "rgba(0, 0, 0)",
    boxShadow: theme.shadows[1],
    fontSize: 12,
    fontWeight: 700,
  },
}));

const DarkTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: "#444",
    color: "#fff",
    boxShadow: theme.shadows[1],
    fontSize: 12,
    fontWeight: 700,
  },
}));

function Navitem({ theme, Icon, title, selected }) {
  let targetPath = title.toLowerCase();
  targetPath = targetPath === "home" ? "" : targetPath;
  return (
    <>
      {theme === "dark" ? (
        <LightTooltip
          TransitionComponent={Zoom}
          title={title}
          placement="bottom"
        >
          <Link className={`nav-link `+(selected && "selected")} to={"/" + targetPath}>
            <FontAwesomeIcon icon={Icon} />
          </Link>
        </LightTooltip>
      ) : (
        <DarkTooltip TransitionComponent={Zoom} title={title} placement="bottom">
          <Link className={`nav-link `+(selected && "selected")} to={"/" + targetPath}>
          <FontAwesomeIcon icon={Icon} />
          </Link>
        </DarkTooltip>
      )}
    </>
  );
}

export default Navitem;
