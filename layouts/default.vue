<template>
  <div class="wrapper">
    <Sidebar></Sidebar>
    <Header @add-information="submitQuestion"></Header>
    <main id="container">
      <transition-group name="staggered-fade"
                        tag="ul"
                        v-bind:css="false"
                        v-on:before-enter="beforeEnter"
                        v-on:enter="enter"
                        v-on:leave="leave">
        <div v-for="(item, index) in arrAnswers" :key="index"
             class="arr-answer">
          <Answer :item="item"></Answer>
        </div>
      </transition-group>
    </main>
  </div>
</template>

<script>
import answers from '../assets/answers.json';
import Velocity from 'velocity-animate';

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

  computed: {
  },

  updated() {
    let element = document.getElementById("container");
    element.scrollIntoView({ block: "end"});
  },

  methods: {
    submitQuestion(text) {
      this.answersList[this.count].text = text;
      this.arrAnswers.push(this.answersList[this.count]);
      this.count++;
    },
    beforeEnter(el) {
      el.style.opacity = 0
    },
    enter(el, done) {
      const delay = el.dataset.index * 150
      setTimeout(() => {
        Velocity(
          el,
          { opacity: 1 },
          { complete: done }
        )
      }, delay)
    },
    leave(el, done) {
      const delay = el.dataset.index * 150
      setTimeout(() => {
        Velocity(
          el,
          { opacity: 0 },
          { complete: done }
        )
      }, delay)
    }
  }
}
</script>
