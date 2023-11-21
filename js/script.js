const { createApp } = Vue;

const app = createApp({
  data() {
    return {
      eMails: [],
    };
  },
  methods: {
    getEmail() {
      axios
        .get("https://flynn.boolean.careers/exercises/api/random/mail")
        .then(function (resp) {
          console.log(resp.data.response);
        });
    },
  },
}).mount("#app");
