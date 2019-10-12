import Vuex from "vuex";
import Vue from "vue"

Vue.use(Vuex);

const store = () => {

  return new Vuex.Store({
    state: {
        movies: [],
        similarMovies: [],
        topRatedMovies: [],
        detailMovie: {}
    },
    mutations: {
      async setMovies(state, movies) {
        //console.info(movies)
        state.movies = movies;
      },
      async detailMovie(state, detailMovie) {
        console.info(detailMovie)
        state.detailMovie = detailMovie;
      },
      async similarMovies(state, similarMovies) {
        //console.info(similarMovies)
        state.similarMovies = similarMovies;
      },
      async topRatedMovies(state, topRatedMovies) {
        //console.info(similarMovies)
        state.topRatedMovies = topRatedMovies;
      },
    },
    actions: {
      async getPopularMovies(context) {
        let result = await this.$axios.get("https://api.themoviedb.org/3/movie/popular?api_key=7bd07233fd51dfaad990724ff1ad1565");
        context.commit('setMovies', result.data.results)
      },
      async getDetailMovie(context, id) {
        let result = await this.$axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=7bd07233fd51dfaad990724ff1ad1565&language=en-US`);
        context.commit('detailMovie', result.data)
      },
      async getSimilarMovies(context, id) {
        console.log(context)
        let result = await this.$axios.get(`https://api.themoviedb.org/3/movie/${id}/similar?api_key=7bd07233fd51dfaad990724ff1ad1565`);
        context.commit('similarMovies', result.data.results)
      },
      async getTopRatedMovies(context) {
        console.log(context)
        let result = await this.$axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=7bd07233fd51dfaad990724ff1ad1565&language=en-US&page=1`);
        context.commit('topRatedMovies', result.data.results)
      },
    }
  })
}
export default store;
