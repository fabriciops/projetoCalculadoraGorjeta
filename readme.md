## Instruções necessárias e anotações de estudo

Entra na pasta:
cd android_studio/android-studio/bin

executar sh studio.sh

Startar um emulador.

  sudo expo start

parametro a após start do sistema


## CASO ESTEJA COM O CELULAR CONECTADO
  sudo expo start -c --android

  # Se de erro ao abrir clica "w" e "a"

## styled-components
    sudo npm install styled-components --save

Essa lib auxilia na criação dos componentes de forma mais ampla e idependente.
É um objeto que quando instaciado podemos acessar métodos de tags já utilizadas normalmente.
Possibilitando a edição das tegs diretamente.

const Input = styled.TextInput`
  width:90%;
  height:40px;
  font-size:18px;
  background-color:#00BFFF;
  margin-top:20px;
  border-radius:10px;
  padding:10px;
`;

Exemplo acima a criação de um input que podemos atribuir propriedades específicas.

<Input
        placeholder="Valor deu Conta"
        placeholderTextColor="#FFF"
        keyboardType="numeric"
/>

# const [bill, setBill] = useState('');

**useSate**
  Cria uma variável com um valor fixo inicial e no decorrer do script possibilita a mudança do mesmo;

*set* vem do conceito sett e gett da orientação objeto, então provavelmente é um atributo que deixa que esse método receba um valor.

