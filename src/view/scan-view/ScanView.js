import OmrCard from "../../components/omr-card/OmrCard.vue";
import Quagga from 'quagga';

export default {
  name: 'ScanView',
  components: {OmrCard},
  data() {
    return{
      active_tab:true,
    }

  },
  methods: {
    activeTab(value) {
      if (value == 'in') {
        this.active_tab = true
      } else {
        this.active_tab = false;
      }
    }

  }
};
