import { FormLogin } from "./components/FormLogin";
import LayoutContainer from "./components/Layouts";
/*/ 
TODO: Login, salvando o e-mail no contexto
TODO: Rota to-do-list privada caso não tenha e-mail no contexto
TODO: Salvar a task em um array de tasks no contexto
TODO: Utilizar o Reduce no contexto da task para as ações
*/
export default function Home() {
  return (
    <LayoutContainer>
      <FormLogin />
    </LayoutContainer>
  );
}
