import { useRouter } from "next/router";
import Link from "next/link";
import styled from "styled-components";

const LanguagePickerContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export default function LanguagePicker() {
  const router = useRouter();
  console.log(router);
  return (
    <>
      <LanguagePickerContainer>
        <Link href={`${router.asPath}`} locale="en">
          English
        </Link>
        <Link href={`${router.asPath}`} locale="fr">
          French
        </Link>
        <Link href={`${router.asPath}`} locale="es">
          Spanish
        </Link>
      </LanguagePickerContainer>
    </>
  );
}
