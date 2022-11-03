
<template>
  <div class="app">
    <RouterLink to="/"></RouterLink>
    <RouterLink to="/login-ong"></RouterLink>
    <RouterLink to="/cadastro-ong"></RouterLink>
    <RouterLink to="/recuperar-senha-ong"></RouterLink>
    <RouterLink to="/carteira-ong"></RouterLink>
    <RouterLink to="/login-vol"></RouterLink>
    <RouterLink to="/cadastro-vol"></RouterLink>
    <RouterView/>
  </div>

</template>


<script>
export default{
  name: "app"
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap');
</style>
