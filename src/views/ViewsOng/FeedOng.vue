<template>
    <MenuOng/>
    <PublicacaoOng/>
    <div class="publicacao" v-for="publicacao_api in publicacoes_api" :key="publicacao_api.id">
        <div class="card mb-5" style="max-width: 640px;">
            <div class="row g-0">
                <div class="col-md-5">
                    <img class="img-fluid rounded-start" style="height: 100%" :src=publicacao_api.publicacao.imagem />
                </div>
                <div class="col-md-7">
                    <div class="card-body">
                        <h5 class="card-title">{{ publicacao_api.publicacao.titulo }}</h5>
                        <p class="card-text">{{ publicacao_api.publicacao.texto }}</p>
                        <p class="card-text"><small class="text-muted">{{ publicacao_api.publicacao.dataEvento }} - {{ publicacao_api.publicacao.horaEvento }}</small></p>
                    </div>
                </div>
            </div>
            <div @click="atualPublicacao(publicacao_api)" type="button" class="bttn btn btn-primary" data-toggle="modal" data-target="#modalInscritos">
                Lista de Chamada
            </div>
            
            <div class="modal fade" id="modalInscritos" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h4 class="modal-title" id="exampleModalCenterTitle">Lista de Chamada</h4>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <div class="table">
                                <table class="table table-bordered rounded-2">
                                    <thead>
                                        <tr>
                                            <th>NOME</th>
                                            <th>E-MAIL</th>
                                            <th>PRESENÇA</th>
                                        </tr>
                                    </thead>
                                    <tbody v-if="publicacao_atual">
                                            <tr v-for="inscrito in publicacao_atual.inscritos" :key="inscrito.user_id">
                                                <td>{{ inscrito.nome }}</td>
                                                <td>{{ inscrito.email }}</td>
                                                <td>
                                                    <label class="switch">
                                                        <input type="checkbox">
                                                        <span class="slider round"></span>
                                                    </label>
                                                </td>
                                            </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Fechar</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { getDatabase, get, ref, child} from '@firebase/database';
import { getAuth } from '@firebase/auth';
import PublicacaoOng from "../../components/PublicacaoOng.vue";
import MenuOng from "../../components/MenuOng.vue";

export default {
    name: "FeedOng",
    data() {
        return {
            publicacoes_api: [],
            publicacao_atual: null
        }
    },
    methods: {
        atualPublicacao: function (publicacao) {
            this.publicacao_atual = publicacao
        }
    },
    mounted() {
        const user = getAuth().currentUser;
        let publicacoes = [];
        const dbRef = ref(getDatabase());
        get(child(dbRef, `publicacao_ong`)).then((snapshot) => {
            snapshot.forEach((child_snapshot) => {
                publicacoes.push({ ...child_snapshot.val(), id: child_snapshot.key })
            })
            const user_publicacoes = publicacoes.filter((publicacao) => publicacao.autor.email === user.email);
            console.log("Todas as publicacoes: ", user_publicacoes)
            for (let publicacao of user_publicacoes) {
                const inscritos_formatados = [];
                if (publicacao.inscritos) {
                    console.log("todos os incritos: ", publicacao.inscritos)
                    Object.keys(publicacao.inscritos).forEach((inscrito) => {
                        inscritos_formatados.push(publicacao.inscritos[inscrito])
                    })
                    console.log("formatado: ", inscritos_formatados)
                    publicacao.inscritos = inscritos_formatados;
                    console.log(publicacao)
                } else {
                    publicacao.inscritos = [];
                }
                this.publicacoes_api.push(publicacao)
                console.log(this.publicacoes_api)
            }
        }).catch((error) => {
            console.error(error);
        });
        // const publicacoesId = ref(getDatabase(), 'publicação_ong' + postId + '/inscritos');
        // console.log(publicacoesId);
    },
    components: {
        MenuOng,
        PublicacaoOng
    }
}
</script>

<style scoped>
.modal-header{
display: flex;
justify-content: space-between;
}

.modal-title{
color: rgba(0, 0, 0, 0.637);
font-weight: 600;
font-size: large;
}
.modal-body{
display: flex;
align-items: center;
justify-content: center;
gap: 5%;
color: rgba(0, 0, 0, 0.637);
}

.modal-footer{
display: flex;
justify-content: space-between;
}

th {
    font-size: small;
}

td {
    font-size: x-small;
}

th,
td {
    border: 2px solid #24222050;
    padding: 8px;
    color: #242220af;
    font-weight: 600;
    letter-spacing: 2px;
    max-width: 200px;
    word-wrap: break-word;
}

.switch {
    position: relative;
    display: inline-block;
    width: 60px;
    height: 34px;
}

.switch input {
    opacity: 0;
    width: 0;
    height: 0;
}

.slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(61, 61, 61, 0.678);
    transition: 400ms;
}

.slider::before {
    position: absolute; 
    content: "";
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    transition: .4s;
}

input:checked + .slider {
  background-color: #38C735;
}

input:focus + .slider {
  box-shadow: 0 0 1px #38C735;
}

input:checked + .slider:before {
  transform: translateX(26px);
}

.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}
</style>