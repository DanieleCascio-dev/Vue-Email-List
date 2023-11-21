const { createApp } = Vue;

const app = createApp({
  data() {
    return {
      eMails: [],
      // print: false,
    };
  },
  created() {
    this.getEmail();
  },
  methods: {
    getEmail() {
      for (let i = 0; i < 10; i++) {
        axios
          .get("https://flynn.boolean.careers/exercises/api/random/mail")
          .then((resp) => {
            console.log(resp.data.response);
            this.eMails.push(resp.data.response);
            console.log(this.eMails);
          });
      }
    },
    resetEmails() {
      this.eMails = [];
    },
    PrintEmail() {
      this.print = !this.print;
    },
  },
}).mount("#app");
