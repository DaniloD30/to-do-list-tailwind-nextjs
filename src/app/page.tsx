import { FormLogin } from "./components/FormLogin";
import LayoutContainer from "./components/Layouts";
//TODO: Verificar responsividade com o tailwind
export default function Home() {
  return (
    <LayoutContainer>
      <FormLogin />
    </LayoutContainer>
  );
}
