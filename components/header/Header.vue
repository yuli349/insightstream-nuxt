<template>
  <div data-app class="header__container" :class="{'start': startPage}">
    <header>
      <div class="header d-flex" :class="{'start': startPage}">
        <NuxtLink v-if="startPage" class="mobile-only auth-btn" to="/login">войти</NuxtLink>
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
          </div>

        </div>
        <div class="header__user d-flex web-only">
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
      </div>
      <div class="d-flex filters-blocks">
        <div class="header__date" :class="{'close-block': !openFilters}">
          <VueDatePicker v-model="dates"
                         range
                         auto-apply
                         partial-flow
                         placeholder="Дата документа"
                         locale="ru"
                         :enable-time-picker="false"
                         :flow="['calendar']"
                         :partial-range="false" />
        </div>
        <div class="header__author" :class="{'close-block': !openFilters}">
          <v-select
              v-model="value"
              :items="items"
              :item-props="itemProps"
              outlined
              prepend-icon="map"
              item-value="value"
              placeholder="Автор документа"
              multiple
              item-text="text"
          >
            <template v-slot:selection="{ item, index }">
              <v-chip v-if="index < 1">
                <span>{{ item.title }}</span>
              </v-chip>
              <span
                  v-if="index === 1"
                  class="text-grey text-caption align-self-center"
              >
                      (+{{ value.length - 1 }})
                    </span>
            </template>
          </v-select>
        </div>
        <div class="header__doc" :class="{'close-block': !openFilters}">
          <v-select
              v-model="valueDoc"
              contentClass="doc-menu"
              prepend-icon="map"
              :items="itemsDoc"
              outlined
              placeholder="Источник документа"
              multiple
          >
            <template v-slot:selection="{ item, index }">
              <v-chip v-if="index < 1">
                <span>{{ item.title }}</span>
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
    </header>
  </div>
</template>

<script>
import moment from 'moment';
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'

export default {
  components: {
    VueDatePicker,
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
      dates: null,
      items: [
        { name: 'Петров Александр Сергеевич', department: 'HR-директор' },
        { name: 'Сидорова Анна Владимировна', department: 'специалист по подбору персонала' },
        { name: 'Смирнова Ольга Михайловна', department: 'инспектор по кадрам' },
        { name: 'Лебедев Андрей Валерьевич', department: 'юрист по трудовым вопросам' },
        { name: 'Иванова Ирина Андреевна', department: 'специалист по кадровому делопроизводству' },
      ],
      itemsDoc: [ 'корпоративная почта', 'корпоративный сайт', 'Google Disk', 'личная переписка', 'новостной портал'],
      value: [],
      valueDoc: [],
      userInfo: {
        name: 'Илья Александрович Бородин',
        position: 'Фронтенд-разработчик',
      }
    }
  },

 /* mounted() {
    if (this.$refs) {
      this.$nextTick(() => {
        setTimeout(() => {
          this.$refs.inputKeyRef.$refs.input.focus();
          this.$refs.inputKeyRefMob.$refs.input.focus();
        }, 0);
      });
    }
  },*/

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
    itemProps (item) {
      return {
        title: item.name,
        subtitle: item.department,
      }
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
