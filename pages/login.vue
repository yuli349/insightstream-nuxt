<template>
  <section class="login">
    <div class="wrapper">
      <Logo></Logo>
      <form @submit.prevent="onSubmit" v-if="!afterSubmit">
        <div class="ui-input">
          <v-text-field v-on:keyup.enter="onSubmit"
                        v-model="loginText"
                        type="email"
                        placeholder="введите электронную почту"
                        ref="inputKeyRefMob"
                        variant="outlined">
          </v-text-field>
        </div>
        <v-btn
            text
            type="submit"
            class="login__btn"
        >
          войти
        </v-btn>
        <v-checkbox label="запомнить меня" class="login__checkbox"></v-checkbox>
      </form>
      <div v-else class="text-after">
        На вашу электронную почту отправлено письмо со ссылкой для входа в приложение
      </div>
      <Footer></Footer>
    </div>
  </section>
</template>

<script>

export default {
  data() {
    return {
      loginText: '',
      afterSubmit: false,
      emailTemplateString: '<p>Hello world!</p>',
    }
  },

  components: {
    Logo: () => import('../components/logo/Logo.vue'),
    Footer: () => import('../components/footer/Footer.vue'),
  },

  methods: {
    async onSubmit() {
      this.afterSubmit = true;
      const response = await fetch("http://localhost:3000/api/login", {
        body: JSON.stringify(this.createEmailBody()),
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
      });

      console.log(response);

      /* if (response.status === 200) {
         alert("Mail sent successfully!!!!");
       }*/
    },
    createEmailBody() {
      return {
        email:  this.loginText
      };
    },
  }
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
