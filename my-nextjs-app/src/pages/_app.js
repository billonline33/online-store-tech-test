import "@/styles/globals.css";
import styles from "@/styles/App.module.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import Footer from "@/components/Footer/Footer";

export default function App({ Component, pageProps }) {
  return (
    <div className={styles.container}>
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}
