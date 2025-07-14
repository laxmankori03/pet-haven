// Footer.jsx
import { Box, Typography, Link, Stack } from '@mui/material';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        py: 4,
        mt: 5,
        textAlign: 'center',
        borderTop: '1px solid'
      }}
      style={{backgroundColor:"var(--background)",color:"var(--text)"}}
    >
      <Typography variant="h6" gutterBottom>
        Pet Haven
      </Typography>

      <Stack
        direction="row"
        spacing={3}
        justifyContent="center"
        sx={{ mb: 2 }}
      >
        <Link href="/" underline="hover" color="inherit">
          Home
        </Link>
        <Link href="/about" underline="hover" color="inherit">
          About
        </Link>
        <Link href="/services" underline="hover" color="inherit">
          Services
        </Link>
        <Link href="/contact" underline="hover" color="inherit">
          Contact
        </Link>
      </Stack>

      <Typography variant="body2" style={{color:"var(--text)"}}>
        © {new Date().getFullYear()} Pet Hotel & Care. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
