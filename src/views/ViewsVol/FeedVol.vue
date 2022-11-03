<template>
    <MenuVol/>
    <h1>Feed Voluntário</h1>
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
                        <button class="btn btn-success" @click="inscreverPublicao(publicacao_api.id)" v-if="verificacaoInscritoPublicacao(publicacao_api?.inscritos)">Inscrever-se</button>
                        <button class="btn btn-danger" v-else>Cancelar inscricao</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { getDatabase, get, ref, child, set} from '@firebase/database';
import { getAuth } from '@firebase/auth';
import MenuVol from '../../components/MenuVol.vue';

export default {
    name: 'FeedVol',
    components: {
        MenuVol
    },
    data() {
        return {
            publicacoes_api: [],
            user_id: ""
        }
    },
    methods: {
        inscreverPublicao: function(publicacao_id) {
            const user = getAuth().currentUser;
            set(ref(getDatabase(), 'publicacao_ong/' + publicacao_id + '/inscritos/' + user.uid), {
                nome: user.displayName,
                email: user.email,
                image: user.photoURL,
                user_id: user.uid,
            });
            this.user_id = user.uid;
            let publicacoes = [];
            const dbRef = ref(getDatabase());
            get(child(dbRef, `publicacao_ong`)).then((snapshot) => {
                snapshot.forEach((child_snapshot) => {
                    publicacoes.push({ ...child_snapshot.val(), id: child_snapshot.key })
                })
                this.publicacoes_api = publicacoes
            }).catch((error) => {
                console.error(error);
            });
        },
        verificacaoInscritoPublicacao: function(inscritos_publicacao) {
            if (inscritos_publicacao && inscritos_publicacao[this.user_id]) {
                // console.log('')
                return false;
            }
            return true;
        }
    },
    mounted() {
        const user = getAuth().currentUser;
        this.user_id = user.uid;
        let publicacoes = [];
        const dbRef = ref(getDatabase());
        get(child(dbRef, `publicacao_ong`)).then((snapshot) => {
            snapshot.forEach((child_snapshot) => {
                publicacoes.push({ ...child_snapshot.val(), id: child_snapshot.key })
            })
            this.publicacoes_api = publicacoes
        }).catch((error) => {
            console.error(error);
        });
    }
}
</script>

<style scoped>
.publicacao{
    display: flex;
    justify-content: center;
    flex-direction: column;
    
}
</style>
