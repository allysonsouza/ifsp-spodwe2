# DOM API

Use a API do DOM para implementar as funcionalidades desta página de blog. Escreva o código em `script.js` e utilize os campos da barra lateral para personalizar a página.

As atividades de 1 a 6 devem responder às alterações feitas nos controles, sem recarregar a página. As atividades 7 e 8 são manipulações feitas uma única vez quando o script é executado. Como o script é carregado no `<head>`, garanta que o HTML já tenha sido interpretado antes de selecionar ou manipular seus elementos.

## 1. Alterar a cor de fundo

- Leia o valor hexadecimal do campo **Cor de fundo** e aplique-o ao fundo da página.
- Se o campo estiver vazio, não aplique um novo valor.

## 2. Trocar o logo

- Leia a URL informada no campo **URL do logo** e atualize os logos do cabeçalho e do rodapé.
- Atualize os logos quando o valor do campo mudar. Se o campo estiver vazio, mantenha as imagens atuais.

## 3. Alterar a família tipográfica

- Use a opção selecionada em **Família Tipográfica** para alterar a tipografia da página.
- A alteração deve incluir os títulos e os textos dos posts.

## 4. Alterar o tamanho da fonte

- Use o valor de **Tamanho da fonte** para atualizar o tamanho-base do texto da página, em pixels.
- Respeite os limites mínimo e máximo definidos no campo.

## 5. Aplicar CSS personalizado

- Leia o conteúdo da área **CSS personalizado** e aplique-o à página por meio de um elemento `<style>` criado pelo JavaScript.
- Atualize os estilos conforme o conteúdo da área for editado. Neste exercício, não é necessário validar se o CSS é válido.

## 6. Filtrar posts pelo título

- Adicione à barra lateral um campo de busca.
- Mostre apenas os posts cujo título contenha o texto buscado, sem diferenciar letras maiúsculas de minúsculas.
- Quando a busca estiver vazia, mostre todos os posts novamente.

## 7. Marcar o post mais recente

- Encontre o elemento `<time>` com a data mais recente, usando seu atributo `datetime` para comparar as datas.
- No `<article>` correspondente, adicione uma etiqueta com o texto **Mais recente**. A tarefa deve funcionar sem adicionar event listeners, pois os posts e suas datas já estão no HTML.
- Evite criar mais de uma etiqueta para o mesmo post caso o código seja executado novamente.

## 8. Inserir um aviso entre os posts

- Crie pelo JavaScript um bloco de aviso com: título, uma breve descrição
- Insira o bloco entre o terceiro e o quarto post, sem editar diretamente o HTML. Ele deve aparecer na sequência da grade junto com os artigos.
- Monte os elementos com métodos da DOM API, como `createElement`, `textContent` e `insertBefore` ou `before`. Evite montar o conteúdo com `innerHTML`.

## Critérios de conclusão

- Os controles funcionam sem recarregar a página.
- A busca vazia restaura todos os posts.
- A etiqueta **Mais recente** aparece no post com a maior data e não altera os demais.
- O aviso ou publicidade aparece entre o terceiro e o quarto post, sem duplicação.
- O código manipula os elementos existentes sempre que possível, sem reconstruir toda a página.