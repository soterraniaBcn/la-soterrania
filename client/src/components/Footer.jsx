import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Link from "@material-ui/core/Link";
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';

export default function Footer() {
  return (
    <footer>
      <Box
        px={{ xs: 3, sm: 10 }}
        py={{ xs: 5, sm: 10 }}
        bgcolor="text.secondary"
        color="white"
      >
        <Container maxWidth="lg">
          <Grid container spacing={5}  justifyContent="space-between">

            <Grid item xs={12} sm={4}>
              <Box borderBottom={1} >Segueix-nos</Box>
            </Grid>

            <Grid item xs={12} sm={4} container direction="row"   justifyContent="space-between" >
              <Box> 
              <Link href="https://www.instagram.com/lasoterrania/" target="_blank" color="inherit">
                  <InstagramIcon/>
                </Link>
              </Box>

              <Box>
                <Link href="https://www.facebook.com/La-soterr%C3%A0nia-101259562713131" target="_blank" color="inherit">
                  <FacebookIcon/>
                </Link>
              </Box>

              <Box>
                <Link href="https://www.youtube.com/c/lasoterr%C3%A0nia" target="_blank" color="inherit">
                  <YouTubeIcon/>
                </Link>
              </Box>

            </Grid>
            </Grid>
        </Container>
      </Box>
    </footer>
  );
}
