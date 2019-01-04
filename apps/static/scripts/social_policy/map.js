new Vue({
  el: '#map-ukraine',
  delimiters: ['[[', ']]'],
  data: {
    selectedDistrictId: '',
    districtData: {},

    searchValue: '',
    selectedSocialService: {},
    searchedSocialServices: []
  },
  created() {
  },
  methods: {
    showInfo(districtId) {
      console.log(districtId);
    },
    handleStateClick() {
      $.get(`?district_id=${this.selectedDistrictId}`, (res) => {
        this.districtData = res;
      })
    },
    handleStateHover(e) {
      if (e.target.tagName === 'path' && e.target.dataset.id) {
        this.selectedDistrictId = e.target.dataset.id;
      }
    },
    selectSocialService(socService) {
      this.selectedSocialService=socService;
      this.searchedSocialServices=[];
      this.searchValue = this.selectedSocialService.name;

      $.get(`?social_service_id=${this.selectedSocialService.pk}`, (res) => {
        this.districtData = res;
      });
    }
  },
  watch: {
    searchValue: function (newVal) {
      if (newVal && this.selectedSocialService.name !== this.searchValue) {
        $.get(`?search_value=${newVal}&district_id=${this.selectedDistrictId}`, (res) => {
          this.searchedSocialServices = res;
        });
      } else {
        this.searchedSocialServices = [];
        this.handleStateClick();
      }
    }
  }
});