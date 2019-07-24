import Vue from 'vue';
import * as VueGoogleMaps from '~/node_modules/vue2-google-maps/src/main';

Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyBMC8hZkeFrA-DeWovBPb_W1qDtRBN4NH8",
    libraries: 'places',
  },
});
