import { Typography } from "@material-ui/core";
import { Link } from "react-router-dom";

export function Copyright(props) {
    return (
      <Typography variant="body2" align="center" {...props}>
        {'Copyright © '}
        <Link color="inherit" href={props.to}>
          {props.title}
        </Link>{' '}
        {new Date().getFullYear()}
      </Typography>
    );
  }
