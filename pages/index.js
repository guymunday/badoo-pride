import { useRouter } from "next/router";
import ShadowText from "../components/ShadowText";

export default function Home() {
  const router = useRouter();
  const { locale, locales, defaultLocale } = router;

  console.log(locale);

  return (
    <>
      <ShadowText />
    </>
  );
}
