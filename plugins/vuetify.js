import Vue from 'vue';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';
import moment from 'moment';

Vue.use(Vuetify);
moment.locale('ru');

const opts = {};

export default new Vuetify(opts);
