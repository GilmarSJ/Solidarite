import { createWebHistory, createRouter } from 'vue-router'
import AtualizarPerfilOng from '../views/ViewsOng/AtualizarPerfilOng.vue'
import CadastroOng from '../views/ViewsOng/CadastroOng.vue'
import CarteiraOng from '../views/ViewsOng/CarteiraOng.vue'
import ConfiguracaoOng from '../views/ViewsOng/ConfiguracaoOng.vue'
import FeedOng from '../views/ViewsOng/FeedOng.vue'
import LoginOng from '../views/ViewsOng/LoginOng.vue'
import PerfilOng from '../views/ViewsOng/PerfilOng.vue'
import RecuperarSenhaOng from '../views/ViewsOng/RecuperarSenhaOng.vue'
import Home from '../views/Home.vue'
import MensagemEmail from '../views/MensagemEmail.vue'
import AtualizarPerfilVol from '../views/ViewsVol/AtualizarPerfilVol.vue'
import BadgesVol from '../views/ViewsVol/BadgesVol.vue'
import CadastroVol from '../views/ViewsVol/CadastroVol.vue'
import CarteiraVol from '../views/ViewsVol/CarteiraVol.vue'
import ConfiguracaoVol from '../views/ViewsVol/ConfiguracaoVol.vue'
import FeedVol from '../views/ViewsVol/FeedVol.vue'
import LoginVol from '../views/ViewsVol/LoginVol.vue'
import PerfilVol from '../views/ViewsVol/PerfilVol.vue'
import RecuperarSenhaVol from '../views/ViewsVol/RecuperarSenhaVol.vue'

const router =  createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/atualizar-perfil-ong',
            name: 'AtualizarPerfilOng',
            component: AtualizarPerfilOng
        },
        {
            path: '/cadastro-ong',
            name: 'CadastroOng',
            component: CadastroOng
        },
        {
            path: '/carteira-ong',
            name: 'CarteiraOng',
            component: CarteiraOng
        },
        {
            path: '/configuracao-ong',
            name: 'ConfiguracaoOng',
            component: ConfiguracaoOng
        },
        {
            path: '/feed-ong',
            name: 'FeedOng',
            component: FeedOng,
            // meta: {
            //     requiresAuth: true
            // }
        },
        {
            path: '/login-ong',
            name: 'LoginOng',
            component: LoginOng
        },
        {
            path: '/perfil-ong',
            name: 'PerfilOng',
            component: PerfilOng
        },
        {
            path: '/recuperar-senha-ong',
            name: 'RecuperarSenhaOng',
            component: RecuperarSenhaOng
        },
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/mensagem-email',
            name: 'MensagemEmail',
            component: MensagemEmail
        },
        {
            path: '/atualizar-perfil-vol',
            name: 'AtualizarPerfilVol',
            component: AtualizarPerfilVol
        },
        {
            path: '/badges-vol',
            name: 'BadgesVol',
            component: BadgesVol,
            // meta: {
            //     requiresAuth: true
            // }
        },
        {
            path: '/cadastro-vol',
            name: 'CadastroVol',
            component: CadastroVol
        },
        {
            path: '/carteira-vol',
            name: 'CarteiraVol',
            component: CarteiraVol
        },
        {
            path: '/configuracao-vol',
            name: 'ConfiguracaoVol',
            component: ConfiguracaoVol
        },
        {
            path: '/feed-vol',
            name: 'FeedVol',
            component: FeedVol,
            // meta: {
            //     requiresAuth: true
            // }
        },
        {
            path: '/login-vol',
            name: 'LoginVol',
            component: LoginVol
        },
        {
            path: '/perfil-vol',
            name: 'PerfilVol',
            component: PerfilVol
        },
        {
            path: '/recuperar-senha-vol',
            name: 'RecuperarSenhaVol',
            component: RecuperarSenhaVol
        },
    ]
})

export default router
