<template>
  <div id="app">    
    <h1>{{ msg }}</h1>
    <ul>
      <li v-for="pessoa of pessoas">
        {{ pessoa.nome }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Lista de pessoas',
      pessoas: []
    }
  },

  created() {
    this.$http.get('http://localhost:8080/pessoas')
      .then(res => res.json())
      .then(pessoas => this.pessoas = pessoas, err => console.log(err));
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
  text-align: center;
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
</style>