<template>
<Sidebar id="mySidebar" class="sidenav">
  <div class="side">
    <div class="user">
      <img :src=this.user_vol_photo alt="">
      <p class="us">{{ this.user_vol_api }}</p>
    </div>
    
    <div class="funcao">
      <p>Voluntário</p>
    </div>
    
    <div class="linha"></div>
    
    <div class="item">
        
      <div class="items">
        <i class='bx bx-user'><span class="usuario">Usuário</span></i>
    
        <i class="bx bx-chevron-down dropw" v-on:click="showMenu"></i>
    
        <div class="dropdown">
          <div class="drop-info">
            <RouterLink  to="/perfil-vol"> Perfil</RouterLink>
            <RouterLink  to="/agenda-vol"> Agenda</RouterLink>
            <RouterLink  to="/badges-vol"> Badges</RouterLink>
          </div>
        </div>
    
      </div>
    
    
    
      <div class="items" to=""><i class="bx bx-heart"><span>Instituição</span></i>
        
        <i class='bx bx-chevron-down drop' v-on:click="showMenu2"></i>
    
        <div class="dropdown2">
          <div class="drop-info2">
            <RouterLink  to="/"> Vagas</RouterLink>
            <RouterLink  to="/"> Ongs Favoritadas</RouterLink>
            <RouterLink  to="/"> Avalie</RouterLink>
          </div>
        </div>
    
      </div>
    
      <RouterLink class="items" to="/carteira-vol"><i class="bx bx-wallet"><span>Carteira</span></i></RouterLink>
    
    
    
      <RouterLink class="items" to="/configuracao-vol"><i class="bx bx-cog"><span>Configuração</span></i></RouterLink>
    
      <div class="exit">
        <Button @click="Sair"><i class='bx bx-log-out' style='color:#ff0000'><span>Sair</span></i></Button>
      </div>
    
    </div>
    
    <div class="linha2"></div>
    
    <div class="redes">
      <div><i class='bx bxl-twitter rede' style='color:#03ffcf'></i></div>
      <div><i class='bx bxl-tiktok rede' undefined ></i></div>
      <div><i class='bx bxl-instagram rede' style='color:#b906c7'></i></div>
    </div>
  </div>
</Sidebar>
 
<div class="botao">
 <Button id="bt" class='seta o' @click="open"><i class="bx bx-menu"></i></Button>
</div>
</template>
 
<script>
import Sidebar from 'primevue/sidebar';
import { getAuth, signOut } from 'firebase/auth'
 
export default {
  name: "MenuVol",
  data(){
    return{
      user_vol_api: "",
      user_vol_photo: []
    }
  },
  methods: {
    Sair: function () {
      const auth = getAuth();

      signOut(auth).then(() => {
          this.$router.push({ name: "Home" })
      }).catch((error) => {
          console.log(error)
      });
    },
    showMenu: function () {
        
        document.querySelector(".dropdown").classList.toggle("show");
        document.querySelector(".dropw").classList.toggle("rotate");
    },
    
    showMenu2: function () {
    
    document.querySelector(".dropdown2").classList.toggle("show2");
    document.querySelector(".drop").classList.toggle("rotate");
    },

    open: function () {
      document.getElementById("sidenav").style.width = "350px" ("o")
      document.getElementById("side").style.marginLeft = "350px"
    }
  },
  component: {
    Sidebar
  },
  mounted(){
    this.user_vol_api = getAuth().currentUser.displayName
    this.user_vol_photo = getAuth().currentUser.photoURL
  }
}
 
 </script>
 
 <style scoped>
   *{
     font-family: 'Inter';
   }
 
   .sidenav{
     position: fixed;
     height: 100vh;
     width: 280px;
     left: 0;
     top: 0;
     box-shadow: 0px 0px 200px rgba(0, 0, 0, 0.219);
     border-right: 2px solid #00000023;
     transition: all .3s ease;
     overflow: auto;
   }  
 
   .user{
     margin-top: 5%;
     color: black;
     display: flex;
     
   }
 
   .us{
     margin-left: 15px;
   }
 
   .funcao{
     margin-top: -35px;
     color: black;
     font-size: 18px;
     margin-right: 45px;
   }
 
   img{
     margin-top: 20px;
     width: 45px;
     height: 45px;
   }
 
   .item {
     display: flex;
     height: 25vh;
     flex-direction: column;
     justify-content: center;
     align-items: flex-start;
   }
 
   .items:first-child {
     margin-top: 130%;
   }
   .items{
     display: flex;
     margin-left: 20px;
     align-items: flex-start;
     justify-content: space-between;
     margin-top: 55px;
     text-align: center;
     color: black;
     font-size: 20px;
     width: 80%;
     height: 60%;
   }
   
   .dropw {
     cursor: pointer;
     right: 0;
     transition: 300ms;
     position: absolute; 
     margin: 0px;
     left: 55px;
 }
   .drop {
     cursor: pointer;
     right: 0;
     transition: 300ms;
     position: absolute; 
     margin: 0px;
     left: 55px;
 }
  
 
 .dropdown {
     display: none;
     width: 100%;
     height: 50%;
     transition: 300ms;
     margin-top: 15px;
 }
 .dropdown2 {
     display: none;
     width: 100%;
     height: 50%;
     transition: 300ms;
     margin-top: 15px;
 }
 
 .drop-info{
     display: flex;
     flex-direction: column;
     text-align: left;
     gap: 20px;
     padding: 12px;
     margin-top: 10px;
     margin-left: -82px;
   }
 
 .drop-info2{
     display: flex;
     flex-direction: column;
     text-align: left;
     gap: 20px;
     padding: 6px;
     margin-top: 10px;
     margin-left: -100px;
   }
 
 .show {
     display: block;
 }
 
 .show2 {
   display: block;
 }
 .rotate {
     transform: rotate(180deg);
 }
 
   .user{
     margin-left: 10px;
     font-size: 20px;
   }
 
 span{
   margin-left: 11px;
 }
 
   .exit{
     display: flex;
     margin-top: 40%;
     margin-left: 80px;
     font-size: 20px;
   }
 
   .linha::after{
     content: '';
     position: absolute;
     left: 0;
     top: 15%;
     display: block;
     height: 1px;
     width: 100%;
     background: rgb(255,255,255);
     background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(0, 0, 0, 0.212) 0%, rgba(255,255,255,0.3897934173669467) 100%);
 }
 
 .linha2::after{
     content: '';
     position: absolute;
     left: 0;
     top: 87%;
     display: block;
     height: 1px;
     width: 100%;
     background: rgb(255,255,255);
     background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(0, 0, 0, 0.212) 0%, rgba(255,255,255,0.3897934173669467) 100%);
 }
 
 .redes{
   display: flex;
 }
 
 .rede{
   font-size: 25px;
   width: 35px;
   margin-top: 23vw ;
   margin-left: 20%;
   padding: 20px;
   position: relative;
 }
 
 .dropdown .dropdown2{
     z-index: 1000;
     position: fixed;
     left: 250px;
     width: 0;
     height: 100%;
     margin-left: -250px;
     overflow-y: auto;
     background: #000;
     -webkit-transition: all 0.5s ease;
     -moz-transition: all 0.5s ease;
     -o-transition: all 0.5s ease;
     transition: all 0.5s ease;
 }
 
 .checkbtn{
   margin-left: 70%;
 }
 .seta{
   display: none;
 }


 @media screen and (max-width: 700px) {
     .sidenav{
      display: none;
     }
     .botao{
       background: linear-gradient( 90deg, rgba(190,2,186,1) 0%, rgba(0,255,231,1) 100%);
       padding: 1px;
       width: 70px;
       border-radius: 10px;
       text-align:center;
       margin-top: -350px;
       margin-left: -80px;
     }
     .seta{
       margin: center;
       display: block;
       font-size: 20px;
       max-width: 250px;
       width:70px;
       background: white;
       margin-right: 100%;
     }

 }
 
 @media screen and (max-width: 480px){
   .sidenav{
     display: none;
   }
   .seta{
     display: block;
   }
 }
 
 
 </style>