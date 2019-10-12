<template>
  <b-card-group deck>
      <b-card
        :title="movie.original_title"
        :img-src="`https://image.tmdb.org/t/p/original${movie.backdrop_path}`"
        img-alt="Image"
        img-top
        :sub-title="movie.release_date"
      >
        <score :score="movie.vote_average"></score>
        <TextContent :text="movie.overview"></TextContent>
      </b-card>
  </b-card-group>
</template>

<script>
import TextContent from "./TextContent"
import Score from "./Score"

export default {
   components: {
    TextContent,
    Score
  },
  props: ["movie"]
}
</script>
