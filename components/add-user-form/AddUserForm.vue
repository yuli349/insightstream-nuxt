<template>
  <div data-app class="form__add">
    <div class="form__add-text">Заполните форму для регистрации в приложении нового пользователя</div>
    <form>
      <div class="ui-input">
        <v-text-field v-model="fio"
                      placeholder="Фамилия Имя Отчество"
                      ref="inputKeyRef"
                      required
                      variant="outlined">
        </v-text-field>
      </div>
      <div class="ui-input">
        <v-text-field v-model="company"
                      placeholder="компания"
                      variant="outlined">
        </v-text-field>
      </div>
      <div class="ui-input">
        <v-text-field v-model="position"
                      placeholder="должность"
                      variant="outlined">
        </v-text-field>
      </div>
      <div class="ui-input">
        <v-text-field v-model="email"
                      placeholder="электронная почта"
                      variant="outlined">
        </v-text-field>
      </div>
      <div class="ui-select">
        <v-select
          v-model="worker"
          placeholder="добавить сотрудника"
          :items="workers"
          variant="outlined"
        ></v-select>
      </div>

      <v-btn
        type="Submit"
        class="auth-btn"
      >зарегистрировать
      </v-btn>
    </form>
  </div>
</template>

<script>

export default {
  components: {

  },

  props: {
  },
  data() {
    return {
      fio: '',
      company: '',
      position: '',
      email: '',
      add: '',
      worker: '',
      workers: ['User1', 'User2', 'User3', 'User4'],
    }
  },

  mounted() {
    if (this.$refs) {
      this.$nextTick(() => {
        setTimeout(() => {
          this.$refs.inputKeyRef.$refs.input.focus();
          this.$refs.inputKeyRefMob.$refs.input.focus();
        }, 0);
      });
    }
  },

  computed: {
  },
  methods: {
  },
}

</script>

<style lang="scss">
@import './AddUserForm.scss';
</style>
