import { type PageProps } from "$fresh/server.ts";
import Header from "../components/Header.tsx";
import Footer from "../components/Footer.tsx";
export default function App({ Component }: PageProps) {
  return (
    <html class="bg-neutral-800 text-white">
      <head>
        <meta charset="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, user-scalable=no"
        />
        <title>Constant0fps</title>
        <link rel="stylesheet" href="/styles.css" />
      </head>
      <body>
        <Header />
        <Component />
        <Footer />
      </body>
    </html>
  );
}
