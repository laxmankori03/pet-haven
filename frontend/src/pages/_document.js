import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script"; 

export default function Document() {
  return (
    <Html lang="en">
      <Head >
         {/* <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous"/> */}
      </Head>
      <body className="antialiased" style={{backgroundColor:"#1E1E2F",color:"#F5F5F5"}}>
        <Main />
        <NextScript />
<<<<<<< HEAD
            {/* <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4" crossorigin="anonymous"></script> */}
=======
            <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4" crossorigin="anonymous" />
>>>>>>> b79d513daf728b6f2d6db58f898c0ac1a8901a6e
      </body>
    </Html>
  );
}
