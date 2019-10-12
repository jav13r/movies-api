<template>
  <div class="container">
    <div class="mt-4">
      <CardTopRated v-for="topRatedMovie in topRatedMovies" :key="topRatedMovie.id" :topRatedMovie="topRatedMovie"></CardTopRated>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import CardTopRated from "~/components/CardTopRated";

export default {
  components: {
    CardTopRated,
  },
  computed: {
    ...mapState({ topRatedMovies: state => state.topRatedMovies }),
  },
  mounted() {
    this.$store.dispatch("getTopRatedMovies");
  }
};
</script>

<style>

</style>
