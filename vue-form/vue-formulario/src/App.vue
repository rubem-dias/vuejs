<template>
  <div id="app">
    <div class="jumbotron jumbotron-fluid">
      <div class="container">
        <h1 class="display-4">Formulários no Vue</h1>
        <p class="lead">Treinando a manipulação de formulários</p>
      </div>
    </div>

    <div class="container">
      <div class="row">
        <!-- formulario -->
        <div class="col-sm-6">
          <h3>Preencha abaixo</h3>

          <form>
            <div class="form-group">
              <label>Nome:</label>
              <input
                type="text"
                class="form-control"
                placeholder="Seu nome"
                v-model.lazy.trim="desenvolvedor.nome"
              />
            </div>

            <div class="form-group">
              <label>Endereço de email:</label>
              <input
                type="email"
                class="form-control"
                placeholder="Seu email"
                v-model="desenvolvedor.email"
              />
            </div>

            <div class="form-group">
              <label>Idade:</label>
              <input
                type="number"
                class="form-control"
                placeholder="Sua idade"
                v-model.number="desenvolvedor.idade"
              />
            </div>

            <div class="form-group">
              <p>Gênero:</p>

              <div class="form-check form-check-inline">
                <input
                  type="radio"
                  class="form-check-input"
                  value="Masculino"
                  v-model="desenvolvedor.genero"
                />
                <label class="form-check-label">Masculino</label>
              </div>

              <div class="form-check form-check-inline">
                <input
                  type="radio"
                  class="form-check-input"
                  value="Feminino"
                  v-model="desenvolvedor.genero"
                />
                <label class="form-check-label">Feminino</label>
              </div>
            </div>

            <div class="form-group">
              <label>Ocupação:</label>
              <select class="form-control" v-model="desenvolvedor.ocupacao">
                <option v-for="(ocupacao, i) in ocupacoes" :key="i" :value="ocupacao">
                  {{ ocupacao }}
                </option>
              </select>
            </div>

            <div class="form-group">
              <p>Tecnologias:</p>

              <div class="form-check form-check-inline">
                <input
                  type="checkbox"
                  class="form-check-input"
                  value="JavaScript"
                  v-model="desenvolvedor.tecnologias"
                />
                <label class="form-check-label">JavaScript</label>
              </div>

              <div class="form-check form-check-inline">
                <input
                  type="checkbox"
                  class="form-check-input"
                  v-model="desenvolvedor.tecnologias"
                  value="Vue JS"
                />
                <label class="form-check-label">Vue JS</label>
              </div>

              <div class="form-check form-check-inline">
                <input
                  type="checkbox"
                  class="form-check-input"
                  value="Vuex"
                  v-model="desenvolvedor.tecnologias"
                />
                <label class="form-check-label">Vuex</label>
              </div>

              <div class="form-check form-check-inline">
                <input
                  type="checkbox"
                  class="form-check-input"
                  value="Vue Router"
                  v-model="desenvolvedor.tecnologias"
                />
                <label class="form-check-label">Vue Router</label>
              </div>
            </div>

            <div class="form-group">
              <label>Resumo de perfil:</label>
              <textarea
                class="form-control"
                placeholder="Conte-nos um pouco sobre você..."
                v-model="desenvolvedor.biografia"
              ></textarea>
            </div>

            <div class="form-group">
              <div class="form-check form-check-inline">
                <input
                  type="checkbox"
                  class="form-check-input"
                  v-model="desenvolvedor.notificacaoes"
                />
                <label class="form-check-label">Receber notificações por email</label>
              </div>
            </div>

            <button class="btn btn-secondary">Resetar</button>
            <button class="btn btn-success" type="button" @click="enviar">Enviar</button>
          </form>
        </div>

        <!-- saida -->
        <div class="col-sm-6">
          <h3>Saída</h3>

          <div class="card">
            <div class="card-header">Dados</div>

            <ul class="list-group list-group-flush">
              <li class="list-group-item">
                <strong>Nome:</strong> {{ desenvolvedor.nome }}
              </li>
              <li class="list-group-item">
                <strong>Email:</strong> {{ desenvolvedor.email }}
              </li>
              <li class="list-group-item">
                <strong>Idade:</strong> {{ desenvolvedor.idade }}
              </li>
              <li class="list-group-item"><strong>Gênero:</strong></li>
              <li class="list-group-item"><strong>Ocupação:</strong></li>
              <li class="list-group-item">
                <strong>Tecnologias:</strong>
                <ul>
                  <li v-for="(tecnologia, i) in desenvolvedor.tecnologias" :key="i">
                    {{ tecnologia }}
                  </li>
                </ul>
              </li>
              <li class="list-group-item">
                <strong>Biografia:</strong>
                <pre>{{ desenvolvedor.biografia }}</pre>
              </li>
              <li class="list-group-item">
                <strong
                  >Receber notificações?
                  {{ desenvolvedor.notificacaoes ? "Sim" : "Nao" }}</strong
                >
              </li>
            </ul>

            <div class="card-header">Model</div>

            <div class="card-body">
              <pre><code>{{ desenvolvedor }}</code></pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      desenvolvedor: {
        nome: "",
        email: "",
        idade: 21,
        biografia: "Dev 2019",
        genero: "Masculino",
        notificacaoes: false,
        tecnologias: [],
        ocupacao: "Dev back mobile",
      },
      ocupacoes: [
        "Dev front",
        "Dev end",
        "Dev fullstack",
        "Dev front mobile",
        "Dev back mobile",
      ],
    };
  },
  methods: {
    enviar(e) {
      const formularioEnviado = Object.assign({}, this.desenvolvedor);
      console.log(formularioEnviado);
    },
  },
};
</script>

<style scoped>
.btn {
  margin-right: 5px;
}
</style>
