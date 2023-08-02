<template>
  <div data-app>
    <header class="header d-flex" :class="{'start': startPage}">
      <v-btn
        text
        v-if="startPage"
        color="primary"
        class="mobile-only auth-btn"
        @click=""
      >войти
      </v-btn>
      <div class="wrapper__content">
        <div class="header__form">
          <form class="web-only">
            <v-textarea prepend-inner-icon="mdi-comment"
                        class="header-text"
                        v-on:keyup.enter="onSubmit"
                        v-model="formText"
                        clearable
                        auto-grow
                        ref="inputKeyRef"
                        variant="outlined"
                        rows="2"
                        row-height="25"
                        :no-resize="true"></v-textarea>
          </form>
          <div v-if="startPage" class="logo mobile-only">
            <div class="logo__name">
              <i class="circle"></i>
              <span>Insight</span>
              <span>Stream</span>
            </div>
            <div>все ответы здесь</div>
          </div>
          <form class="mobile-only" :class="{'start': startPage}">
            <v-textarea prepend-inner-icon="mdi-comment"
                        class="header-text"
                        v-on:keyup.enter="onSubmit"
                        v-model="formText"
                        clearable
                        placeholder="задайте вопрос"
                        auto-grow
                        ref="inputKeyRefMob"
                        variant="outlined"
                        rows="1"
                        :no-resize="true"></v-textarea>
          </form>
          <v-btn
            text
            color="primary"
            v-if="!startPage"
            class="mobile-only filters"
            @click="toggleFilters()"
          >
            <i class="icon arrow"></i>
          </v-btn>
          <div class="d-flex filters-blocks">

            <div class="header__date" :class="{'close-block': !openFilters}">
              <v-menu
                  ref="menu"
                  v-model="menu"
                  contentClass="date-menu"
                  :close-on-content-click="false"
                  :return-value.sync="dates"
                  transition="scale-transition"
                  offset-y
                  min-width="auto"
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-text-field
                      v-model="dateRangeText"
                      placeholder="Дата документа"
                      prepend-icon="mdi-calendar"
                      readonly
                      v-bind="attrs"
                      v-on="on"
                  ></v-text-field>
                </template>
                <v-date-picker
                    v-model="dates"
                    :first-day-of-week="1"
                    locale="ru"
                    no-title
                    scrollable
                    range
                >
                  <v-spacer></v-spacer>
                  <v-btn
                      text
                      color="primary"
                      @click="menu = false"
                  >
                    Отмена
                  </v-btn>
                  <v-btn
                      text
                      color="primary"
                      @click="$refs.menu.save(dates)"
                  >
                    Oк
                  </v-btn>
                </v-date-picker>
              </v-menu>
            </div>
            <div class="header__author" :class="{'close-block': !openFilters}">
              <v-select
                  v-model="value"
                  :items="items"
                  chips
                  prepend-icon="map"
                  item-value="value"
                  :menu-props="{ contentClass: 'author-content' }"
                  placeholder="Автор документа"
                  multiple
                  item-text="text"
              >
                <template v-slot:selection="{ item, index }">
                  <v-chip v-if="index < 1">
                    <span>{{ item.text }}</span>
                  </v-chip>
                  <span
                      v-if="index === 1"
                      class="text-grey text-caption align-self-center"
                  >
                      (+{{ value.length - 1 }})
                    </span>
                </template>
                <template v-slot:item="{ item }">
                  <div class="fio">{{ item.text }}</div>
                  <div class="position">{{ item.value }}</div>
                </template>
              </v-select>
            </div>
            <div class="header__doc" :class="{'close-block': !openFilters}">
              <v-select
                  v-model="valueDoc"
                  contentClass="doc-menu"
                  prepend-icon="map"
                  :items="itemsDoc"
                  placeholder="Источник документа"
                  multiple
              >
                <template v-slot:selection="{ item, index }">
                  <v-chip v-if="index < 1">
                    <span>{{ item.text }}</span>
                  </v-chip>
                  <span
                      v-if="index === 1"
                      class="text-grey text-caption align-self-center"
                  >
                      (+{{ valueDoc.length - 1 }})
                    </span>
                </template>
              </v-select>
            </div>
          </div>
        </div>

      </div>
      <div class="header__user d-flex">
        <div>
          <div class="header__user-name">
            {{ userInfo.name }}
          </div>
          <div class="header__user-position">
            {{ userInfo.position }}
          </div>
        </div>
        <div>
          <img class="header__user-photo" src="../../assets/user-icon.png" alt="">
        </div>
      </div>
    </header>
  </div>
</template>

<script>
import moment from 'moment';

export default {
  components: {

  },

  props: {
  },
  data() {
    return {
      formText: '',
      openFilters: false,
      menu: false,
      startPage: true,
      modal: false,
      menu2: false,
      dates: [],
      items: [
        { text: 'HR - отдел', value: '' },
        { text: 'Петров Александр Сергеевич', value: 'HR-директор' },
        { text: 'Сидорова Анна Владимировна', value: 'специалист по подбору персонала' },
        { text: 'Смирнова Ольга Михайловна', value: 'инспектор по кадрам' },
        { text: 'Лебедев Андрей Валерьевич', value: 'юрист по трудовым вопросам' },
        { text: 'Иванова Ирина Андреевна', value: 'специалист по кадровому делопроизводству' },
      ],
      itemsDoc: [
        { text: 'корпоративная почта' },
        { text: 'корпоративный сайт' },
        { text: 'Google Disk' },
        { text: 'личная переписка' },
        { text: 'новостной портал' },
      ],
      value: [],
      valueDoc: [],
      userInfo: {
        name: 'Илья Александрович Бородин',
        position: 'Фронтенд-разработчик',
      }
    }
  },

  mounted() {
    if (this.$refs) {
      this.$nextTick(() => {
        setTimeout(() => {
          this.$refs.inputKeyRef.$refs.input.focus();
        }, 0);
      });
    }
  },

  computed: {
    dateRangeText () {
      const arr = [];
      if (this.dates.length) {
        this.dates.forEach((item) => {
          arr.push(this.formatDate(item));
        });
        return arr.join(' ~ ');
      }
    },
  },
  methods: {
    moment,
    formatDate(date) {
      return this.moment(date)
          .format('DD.MM.YYYY');
    },
    toggleFilters() {
      this.openFilters = !this.openFilters;
    },
    onSubmit(e) {
      e.preventDefault();
      this.startPage = false;
      this.$emit('add-information', this.formText);
      this.formText = '';
    },
    toggleForm() {
      if (this.$refs) {
        this.$nextTick(() => {
          setTimeout(() => {
            this.$refs.inputKeyRefMob.$refs.input.focus();
          }, 0);
        });
      }
    },
  },
}

</script>

<style lang="scss">
@import './Header.scss';
</style>
