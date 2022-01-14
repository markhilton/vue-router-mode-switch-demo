<template>
  <div id="app">
    <h1 @click="changeRouter()">ROUTER {{ status }}</h1>

    <div id="nav">
      <router-link to="/dashboard">Dashboard</router-link> |
      <router-link to="/about">About</router-link>
    </div>

    <router-view />
  </div>
</template>

<script>
export default {
  computed: {
    status() {
      return this.$store.state.status ? "hash" : "history";
    },
  },

  methods: {
    changeRouter() {
      this.$store.commit("SET_STATUS", !this.$store.state.status);
    },
  },

  mounted() {
    const path = window.location.pathname + window.location.search;

    console.log("CLEAR PATH VUE:", path);

    history.pushState(null, null, path);
  },
};
</script>
