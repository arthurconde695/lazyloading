<template>
  <div class="hello">
    <h1>Titulo</h1>
    <h2>subtitulo</h2>
    <div class="central">
        <img src="preto.jpg">
    </div>
    <div class="imagem1">
        <img src="preto.jpg">
    </div>
    <div class="imagem2">
     <img src="preto.jpg">
    </div>
    <br>

    <iframe width="560" height="315" src="https://www.youtube.com/embed/le6to6G-Wkc?si=YEjW7QiHidWrPVpc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

    <br>
    <table border="1">
        <tr>
            <td>texto</td>
            <td>texto</td>
            <td>texto</td>
        </tr>
        <tr>
            <td>texto</td>
            <td>texto</td>
            <td>texto</td>
        </tr>
        <tr>
            <td>texto</td>
            <td>texto</td>
            <td>texto</td>
        </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}

async function sendMessage() {
        const response = await fetch('http://localhost:3000/message', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ text: 'Hello, World!' })
        });

        const result = await response.json();
        console.log(result);
    }

    // Chame a função quando necessário
    sendMessage();

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

h1, h2{
    text-align: center;
}
.central{
    display: table;
    margin: auto;
    border: 2px solid green;
}
.imagem1{
    display: table;
    margin: auto;
    border: 2px solid green;
    max-width: 100%;
}
.imagem2{
    display: table;
    margin: auto;
    border: 2px solid green;
    max-width: 100%;
}
table{
   display: table;
   margin: auto;
}
@media (max-width:550px) {
    .central{
        display: table;
        margin: auto;
        border: 2px solid green;
    }
}
iframe{
    display: block;
    margin: auto;
}

</style>

