import "./style.css";
import "./component/Hooks/style.css";
import "./component/todoreact/style.css";
import "./component/weather/style.css";

export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
