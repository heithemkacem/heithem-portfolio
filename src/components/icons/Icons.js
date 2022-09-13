import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import clsx from "clsx";
import { useStyles } from "./Icons-style";

const Icons = (props) => {
  const classes = useStyles();
  return (
    <div className={clsx(classes.icons, props.iconsClassName)}>
      <a
        href="https://github.com/heithemkacem"
        target="_blank"
        rel="noopener noreferrer"
      >
        <GitHubIcon fontSize="large" />
      </a>
      <a
        href="https://www.linkedin.com/in/heithemkacem/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <LinkedInIcon fontSize="large" />
      </a>
    </div>
  );
};

export default Icons;
