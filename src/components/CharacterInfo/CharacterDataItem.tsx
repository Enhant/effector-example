import { Grid } from "@mui/material";
import { Link } from "react-router-dom";
import { isValidURL } from "../../utils/isValidURL";

interface IProps {
  data: string;
}

export const CharacterDataItem = ({ data }: IProps) => {
  
  if (isValidURL(data)) {
    return (
      <Link to={data}>{data}</Link>
    )
  }

  return (
    <Grid item>
      {data}
    </Grid>
  );
}