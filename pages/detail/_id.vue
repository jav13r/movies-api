<template>
  <div class="container">
    <Details :movie="detailMovie"></Details>

    <hr/>
    <h4>Similar Movies</h4>
    <b-row deck class="mt-3">
      <b-col v-for="similarMovie in limitSimilarMovies" :key="similarMovie.id" cols="3">
        <SimilarMovies :similarMovie="similarMovie"></SimilarMovies>
      </b-col>
    </b-row>
  </div>
</template>


<script>
import Details from "~/components/Detail";
import SimilarMovies from "~/components/SimilarMovies";
import Button from "~/components/Button"
import { mapState } from "vuex";

export default {
  components: {
    Details,
    SimilarMovies
  },
  data() {
    return {
      id: this.$route.params.id,
    }
  },
  computed: {
    ...mapState({
      similarMovies: state => state.similarMovies,
      detailMovie: state => state.detailMovie
    }),
    limitSimilarMovies() {
      return this.similarMovies.slice(0, 4);
    }
  },
  mounted() {
    this.$store.dispatch("getSimilarMovies", this.id);
    this.$store.dispatch("getDetailMovie", this.id);
  },
};
</script>
