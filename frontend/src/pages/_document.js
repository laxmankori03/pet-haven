import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script"; 

export default function Document() {
  return (
    <Html lang="en">
      <Head >

      </Head>
      <body className="antialiased" style={{backgroundColor:"#1E1E2F",color:"#F5F5F5"}}>
        <Main />
        <NextScript />
         </body>
    </Html>
  );
}
