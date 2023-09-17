<template>
  <section>
    <div class="wrapper">
      Email confirmed
    </div>
  </section>
</template>

<script>

export default {
}
</script>

<style lang="scss">
.login {
  font-family: 'Inter', sans-serif !important;
  font-size: 20px;
  position: relative;

  .wrapper {
    padding-left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 100vh;
  }

  .text-after {
    min-height: 217px;
  }

  .theme--light.v-input input {
    box-shadow: 0 0 6px 3px rgba(0, 0, 0, 0.10);
  }

  form {
    width: 400px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
  }
}

@media (max-width: 1024px) {
  .text-after {
    width: 380px;
    margin: auto;
  }
}

@media (max-width: 730px) {
  .login {

    form {
      width: 300px;
    }

    .text-after {
      font-size: 16px;
      width: 260px;
      margin: auto;
    }

    .wrapper {
      padding: 0 10px;
    }

    .v-btn {
      margin: 4px auto 24px !important;
      letter-spacing: 0;
      min-height: 40px;
    }
  }
}

</style>
