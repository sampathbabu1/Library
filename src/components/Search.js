import { IconButton } from "@mui/material";
import { Search } from "@mui/icons-material";
function SearchIcon() {
  return (
    <IconButton aria-label="delete" color="secondary" sx={{ flexGrow: 0.2 }} >
      <Search></Search>
    </IconButton>
  );
}

export default SearchIcon;
