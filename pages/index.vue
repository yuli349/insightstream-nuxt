<template>
  <div class="wrapper">
    <Sidebar/>
    <Header @add-information="submitQuestion"></Header>
    <main id="container">
      <transition-group name="list" appear
                        tag="ul">
        <li v-for="(item, index) in arrAnswers" :key="item.id" :data-index="index"
            class="arr-answer">
          <Answer :item="item"></Answer>
        </li>
      </transition-group>
    </main>
  </div>
</template>

<script>
import answers from '../src/answers.json';

export default {
  data() {
    return {
      answersList: [],
      arrAnswers: [],
      count: 0,
      elem: {},
      arr: [],
    }
  },

  components: {
    Sidebar: () => import('../components/sidebar/Sidebar.vue'),
    Header: () => import('../components/header/Header.vue'),
    Answer: () => import('../components/answer/Answer.vue'),
  },

  mounted() {
    this.answersList = answers;
  },

  methods: {
    submitQuestion(text) {
      this.answersList[this.count].text = text;
      this.arrAnswers.splice(0, 0, this.answersList[this.count]);
      this.count++;
    },
   /* beforeEnter(el) {
      el.style.opacity = 0
    },*/
  }
}
</script>

<style lang="scss">
.list-enter-from {
  opacity: 0;
  transform: scale(0.6);
}

.list-enter-to {
  opacity: 1;
  transform: scale(1);
}

.list-enter-active {
  transition: all 0.4s ease;
}

#container {
  padding-top: 30px;
}

@media (max-width: 930px) {
  #container {
    padding-top: 10px;
  }
}


</style>
