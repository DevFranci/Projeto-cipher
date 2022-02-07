Cifra de César
Índice

    1. Prefácio
    2. Projeto e funcionalidades
    3. Considerações finais

1. Prefácio

Cifra de César – Criptografia Monoalfabética


Hoje irei falar um pouco sobre criptografia monoalfabética, algo que atrai muitos dos entusiastas da tecnologia, uma das mais simples e conhecidas técnicas de criptografia.

Tem sua origem do grego:

    Kryptos = escondido                      
    Gráphein = escrita

Desenvolvida com o intuito de possibilitar à dois indivíduos se comunicar de forma segura, ou seja, consiste em cifrar uma informação que será enviada pelo remetente de forma que, caso esta informação seja interceptada por algum intruso, ele não seja capaz de entende-la.
Código de César

Conta a história que Júlio César utilizava um código nas mensagens enviadas a seus generais, um sistema simples de substituição, no qual cada letra da mensagem original era trocada pela letra que se situa três posições à sua frente. Ficando da seguinte forma:

Cada letra “A” era substituída pela Letra “D”, “B” por “E” e assim sucessivamente.

Qualquer código que tenha esse padrão é considerado um código de César.

O alfabéto possui 26 letras, dessa forma pode-se cifrar o texto de 26 formas diferente
Vejamos um Exemplo:

Texto original:
	

clube dos geeks

Texto cifrado:
	

foxeh#grv#jhhnv

Obs. “#” representa o espaço quando substituído.

Podemos reparar que a letra “c” será sempre substituída pela letra “f”, assim como a letra “e” sempre pela letra “h”, ou seja à um padrão.
Decifrando:

Imaginando que essa mensagem foi interceptada, para decifra seria utilizado o método de força bruta, escrever repetidas vezes a palavra deslocando uma letra de cada vez.
Vejamos:

Deslocamento
	

Mensagem

0
	

foxeh#grv#jhhnv

1
	

enwdg#fqu#iggmu

2
	

dmvcf#ept#hfflt

3
	


Mas os inimigos de César eram analfabetos! Assim ficou conhecido como o código de César “O cara que contribuiu para TI”.
Cifra Monoalfabética

É uma melhoria do código de César, ao invés de trocar as letras seguindo um padrão de deslocamento fixo, troca qualquer letra por qualquer outra. Dessa forma existe 26! combinações “permutações de 26 letras” possíveis. Inviabiliza força bruta “manual”.
Decifrando

Para decifrar teria que utilizar técnicas mais avançadas, uma delas é a análise da linguagem.

2. Projeto

O projeto tem como objetivo ser uma página web que ajuda os usuários que precisam de sigilo em suas mensagens, o usuário escolhe uma chave de deslocamento de sua preferência e digita sua mensagem. 
Assim que a mensagem for criptografada ele pode copiar e enviar para qualquer pessoa em uma ou mais redes de comunicação de sua escolha.
O usuário deve guardar a chave de deslocamento para que a pessoa que ele enviou a mensangem criptografada possa descriptografar.
Além de ser um jeito seguro de enviar mensagens é também muito fácil de entender a lógica da cifra lendo o texto breve que deixei nos containers de informação.

 3. Considerações finais

 Este é meu primeiro projeto na Laboratória, em que pude praticar os principios da lógica de programação ultilizando:

 1.HTML 
 2.javascript
 3.CSS
 4.TRELLO Para meu planejamento do projeto
 5.GIT
 6.GITHUB

 Além do apoio e ajuda da equipe Lab durante a semana, nos trazendo sempre conteúdos de qualidade para que alcancemos juntas os objetivos de aprendizagem.

 Muito obrigada Laboratória e alunas da nossa querida geração SAP007, juntas somos mais fortes.
