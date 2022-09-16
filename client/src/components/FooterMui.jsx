import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Link from "@material-ui/core/Link";
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';

export default function FooterMui() {
  return (
    <footer classname="footer">
      <Box sx={{ justifyContent: 'space-between' }}>
        <Container maxWidth="lg" >  

            <Grid item xs={12} sm={4}  >
              <Box borderBottom={1} >Segueix-nos</Box>
           
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
        </Container>
        </Box>
    </footer>
  );
}
