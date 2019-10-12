<template>
  <div class="container">
    <b-card-group columns>
      <Card v-for="movie in orderMovies" :key="movie.id" :movie="movie"></Card>
    </b-card-group>
  </div>
</template>

<script>
import Card from "~/components/Card.vue";
import { mapState } from "vuex";

export default {
  layout: 'layouts/default',
  components: {
    Card
  },
  computed: {
    ...mapState({ movies: state => state.movies }),
    orderMovies() {
      return this.movies.sort((x, y) => y.vote_average - x.vote_average);
    }
  },
  mounted() {
    this.$store.dispatch("getPopularMovies");
  }
};
</script>

<style>

</style>
