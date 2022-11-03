<template>

</template>

<script>

export default {
    name: "Filtro"
}

</script>

<style scoped>

  .sidenav{
    position: fixed;
    height: 100vh;
    width: 240px;
    left: 0;
    top: 0;
    border-right: 1px solid #ececec;
    transition: all .3s ease;
    overflow: auto;
  }  

  .user{
    margin-top: 35%;
    color: #686460;
    font-weight: 600;
  }

  .item {
    display: flex;
    height: 20vh;
    flex-direction: column;
    justify-content:center;
    align-items: flex-start;
  }

  .items:first-child {
    margin-top: 150%;
  }

  .items{
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    width: 80%;
    height: 60%;
    margin: 20px;
    padding: 5%;
    padding-left: 5%;
    margin-top: 30px;
    border: 2px solid transparent;
    border-radius: 15px;
    color: #686460;
  }

  .items:hover{
    border: 2px solid #686460;
  }

  .items > i{
    margin-right: 25px;
  }

</style>