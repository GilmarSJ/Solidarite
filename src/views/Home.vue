<template>
  <div class="home">
    <Logo/>

    <div class="logins">

      <div class="ong">
          <button @click="ong">INSTITUIÇÃO</button>
      </div>
      
      <div class="voluntario">
          <button @click="voluntario">VOLUNTÁRIO</button>
      </div>

    </div>
    
    <LinkRedeSociais/>
  </div>
</template>


<script>
import LinkRedeSociais from '../components/LinkRedeSociais.vue';
import Logo from '../components/Logo.vue';
export default{
  name: "home",
  components: {
    LinkRedeSociais,
    Logo
  },
  methods: {
    voluntario: function(){
      this.$router.push({name:"LoginVol"})
    },
    ong: function(){
      this.$router.push({name:"LoginOng"})
    }
  }
}
</script>

<style scoped>

.home{
  width: 30vw;
  height: 50vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border: 3px solid #686460;
  border-radius: 10px;
}

.logins{
  display: flex;
  justify-content: center;
  align-items: center;
  height: 10vh;
  background: #FFFFFF;
  border: 3px solid #686460;
  color: #686460;
  border-radius: 10px;
  font-size: smaller;
  font-weight: 600; 
  margin-top: 5%;
  margin-left: 10%;
  margin-right: 10%;
}

.ong > button{
  background-color: transparent;
  color: #686460;
  font-weight: 600;
}

.voluntario {
  border: 3px solid #686460;;
  border-width: 0px 0px 0px 3px;
}

.voluntario > button{
  background-color: transparent;
  color: #686460;
  font-weight: 600;
}

button {
  display: flex;
  justify-content: center;
  align-items: center ;
}

@media only screen and (max-width: 900px) {
  .home{
    width: 110%;
    height: 50%;
    font-size: small
  }
}

</style>
