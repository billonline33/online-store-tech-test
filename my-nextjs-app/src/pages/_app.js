import "@/styles/globals.css";
import styles from "@/styles/App.module.css";
import Header from "@/components/Header/Header";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

export default function App({ Component, pageProps }) {
  return (
    <div className={styles.container}>
      <Header />
      <Component {...pageProps} />
    </div>
  );
}
