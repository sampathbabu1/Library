import { useTheme } from "@emotion/react";
import { Grid, Typography,Box } from "@mui/material";
import { ReactComponent as Logo } from "../../Assets/logo.svg";
import {theme} from "../../index";
export default function Footer(props) {
    let grey=theme.palette.grey.main ?? "#6D787E";
  return (
    <Box bgcolor={'#F1F6F4'} padding={5} position='relative' bottom={0} width={0.95}>
      <Grid container spacing={2} >
        <Grid item xs={5}>
          <Logo />
          <Typography m={2} fontWeight={'bold'} fontSize={24} color={'#0365F2'}>Big ideas in small packages</Typography>
          <Typography m={2} fontWeight ={'bold'} fontSize={24} color={'#0365F2'}>Start learning now</Typography>
        </Grid>
        <Grid item xs={2.5}>
          <Typography fontWeight={"bold"}>Editorial</Typography>
          <Typography marginY={1} sx={{color:grey}}>Book lists</Typography>
          <Typography marginY={1} sx={{color:grey}}>What is Nonfiction?</Typography>
          <Typography marginY={1} sx={{color:grey}}>What to read next?</Typography>
          <Typography marginY={1} sx={{color:grey}}>Benefits of reading</Typography>
        </Grid>
        <Grid item xs={2.5}>
          <Typography fontWeight={"bold"}>Useful links</Typography>
          <Typography marginY={1} sx={{color:grey}}>Pricing</Typography>
          <Typography marginY={1} sx={{color:grey}}>Blinkist business</Typography>
          <Typography marginY={1} sx={{color:grey}}>Gift cards</Typography>
          <Typography marginY={1} sx={{color:grey}}>Blinkist magzine</Typography>
          <Typography marginY={1} sx={{color:grey}}>Contact & help</Typography>
        </Grid>
        <Grid item xs={2}>
          <Typography fontWeight={"bold"}>Company</Typography>
          <Typography marginY={1} sx={{color:grey}}>About</Typography>
          <Typography marginY={1} sx={{color:grey}}>Careers</Typography>
          <Typography marginY={1} sx={{color:grey}}>partners</Typography>
          <Typography marginY={1} sx={{color:grey}}>Code of Conduct</Typography>
        </Grid>
      </Grid>
      <Box sx={{display:'inline-flex',alignItems:'center',textAlign:'center', color:grey}} marginY={1}>
          <Typography display={'inline'} marginX={1} > &copy; Blinkist 2021 Sitemap</Typography> |
          <Typography display={'inline'} marginX={1} >Imprint</Typography> |
          <Typography display={'inline'}marginX={1}>Terms of Service</Typography> |
          <Typography display={'inline'}marginX={1}>Privacy Policies</Typography> 
      </Box>
    </Box>
  );
}
