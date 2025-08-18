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
      </body>
    </Html>
  );
}
