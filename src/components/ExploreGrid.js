import {
  AccountBalance,
  AccountBalanceWalletOutlined,
  BusinessCenterOutlined,
  SchoolOutlined,
  ScienceOutlined,
  SignalCellularAltOutlined,
} from "@mui/icons-material";
import { Grid, Box, Typography, SvgIcon } from "@mui/material";
export default function ExploreGrid() {
  const temp = () => console.log("hi");
  return (
    <Typography variant="body1">
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <Box onClick={temp}>
            <AccountBalance sx={{ marginRight: 1 }} />
            Entrepreneurship
          </Box>
        </Grid>
        <Grid item xs={4}>
          <Box onClick={temp}>
            <AccountBalance sx={{ marginRight: 1 }} />
            Politics
          </Box>
        </Grid>
        <Grid item xs={4}>
          <Box onClick={temp}>
            <SvgIcon sx={{ marginRight: 1 }}>
              <path d="M2 0V16H18V18H0V0H2ZM17.293 3.293L18.707 4.707L13 10.414L10 7.415L5.707 11.707L4.293 10.293L10 4.586L13 7.585L17.293 3.293Z" />
            </SvgIcon>
            Marketing & Sales
          </Box>
        </Grid>
        <Grid item xs={4}>
          <Box onClick={temp}>
            <ScienceOutlined sx={{ marginRight: 1 }} />
            Science
          </Box>
        </Grid>
        <Grid item xs={4}>
          <Box onClick={temp}>
            <SvgIcon sx={{ marginRight: 1 }}>
              <path d="M7 18V12H15V18H18V2H4V18H7ZM9 18H13V14H9V18ZM20 18H22V20H0V18H2V1C2 0.734784 2.10536 0.48043 2.29289 0.292893C2.48043 0.105357 2.73478 0 3 0H19C19.2652 0 19.5196 0.105357 19.7071 0.292893C19.8946 0.48043 20 0.734784 20 1V18ZM10 6V4H12V6H14V8H12V10H10V8H8V6H10Z" />
            </SvgIcon>
            Health & Nutrition
          </Box>
        </Grid>
        <Grid item xs={4}>
          <Box onClick={temp}>
            <SignalCellularAltOutlined sx={{ marginRight: 1 }} />
            Personal Development
          </Box>
        </Grid>
        <Grid item xs={4}>
          <Box onClick={temp}>
            <AccountBalance sx={{ marginRight: 1 }} />
            Economics
          </Box>
        </Grid>
        <Grid item xs={4}>
          <Box onClick={temp}>
            <AccountBalance sx={{ marginRight: 1 }} />
            History
          </Box>
        </Grid>
        <Grid item xs={4}>
          <Box onClick={temp}>
            <AccountBalance sx={{ marginRight: 1 }} />
            Communication Skills
          </Box>
        </Grid>
        <Grid item xs={4}>
          <Box onClick={temp}>
            <BusinessCenterOutlined sx={{ marginRight: 1 }} />
            Corporate Culture
          </Box>
        </Grid>
        <Grid item xs={4}>
          <Box onClick={temp}>
            <SvgIcon sx={{ marginRight: 1 }}>
              <path d="M5.97296 16H10.027C10.159 14.798 10.772 13.806 11.767 12.723C11.88 12.601 12.599 11.856 12.684 11.75C13.3902 10.8676 13.8329 9.80369 13.9611 8.68075C14.0892 7.55781 13.8976 6.42151 13.4082 5.40271C12.9189 4.38392 12.1517 3.52406 11.1951 2.92215C10.2384 2.32025 9.13127 2.00078 8.00104 2.00054C6.87081 2.0003 5.7635 2.31929 4.80662 2.92079C3.84974 3.52228 3.08221 4.38182 2.59242 5.4004C2.10263 6.41899 1.9105 7.55521 2.03815 8.6782C2.1658 9.8012 2.60805 10.8653 3.31396 11.748C3.39996 11.855 4.12096 12.601 4.23196 12.722C5.22796 13.806 5.84096 14.798 5.97296 16ZM9.99996 18H5.99996V19H9.99996V18ZM1.75396 13C0.812151 11.8233 0.221908 10.4044 0.0512242 8.90694C-0.119459 7.40944 0.13636 5.89418 0.789214 4.53572C1.44207 3.17725 2.46539 2.03085 3.74132 1.22856C5.01724 0.426269 6.49384 0.00073532 8.00104 0.000976665C9.50824 0.00121801 10.9847 0.427224 12.2604 1.22992C13.536 2.03262 14.559 3.17935 15.2114 4.53803C15.8638 5.8967 16.1192 7.41204 15.948 8.90949C15.7768 10.4069 15.1861 11.8256 14.244 13.002C13.624 13.774 12 15 12 16.5V19C12 19.5304 11.7892 20.0391 11.4142 20.4142C11.0391 20.7893 10.5304 21 9.99996 21H5.99996C5.46953 21 4.96082 20.7893 4.58575 20.4142C4.21067 20.0391 3.99996 19.5304 3.99996 19V16.5C3.99996 15 2.37496 13.774 1.75396 13ZM8.99996 8.00397H11.5L6.99996 14.004V10.004H4.49996L8.99996 3.99997V8.00497V8.00397Z" />
            </SvgIcon>
            Motivation & Inspiration
          </Box>
        </Grid>
        <Grid item xs={4}>
          <Box onClick={temp}>
            <AccountBalanceWalletOutlined sx={{ marginRight: 1 }} />
            Money & Investments
          </Box>
        </Grid>
        <Grid item xs={4}>
          <Box onClick={temp}>
            <AccountBalance sx={{ marginRight: 1 }} />
            Psychology
          </Box>
        </Grid>
        <Grid item xs={4}>
          <Box onClick={temp}>
            <SvgIcon sx={{ marginRight: 1 }}>
              <path d="M12 20L11.99 14L8 10L11.99 5.99L12 0H0V6L4 10L0 13.99V20H12ZM2 5.5V2H10V5.5L6 9.5L2 5.5Z" />
            </SvgIcon>
            Productivity
          </Box>
        </Grid>
        <Grid item xs={4}>
          <Box onClick={temp}>
            <AccountBalance sx={{ marginRight: 1 }} />
            Sex & Relationship
          </Box>
        </Grid>
        <Grid item xs={4}>
          <Box onClick={temp}>
            <AccountBalance sx={{ marginRight: 1 }} />
            Nature & Environment
          </Box>
        </Grid>
        <Grid item xs={4}>
          <Box onClick={temp}>
            <AccountBalance sx={{ marginRight: 1 }} />
            Career & Success
          </Box>
        </Grid>
        <Grid item xs={4}>
          <Box onClick={temp}>
            <SchoolOutlined sx={{ marginRight: 1 }} />
            Education
          </Box>
        </Grid>
      </Grid>
    </Typography>
  );
}
