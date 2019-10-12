<template>
    <b-card
        :title="movie.title"
        :img-src="`https://image.tmdb.org/t/p/original${movie.backdrop_path}`"
        img-top
      >
        <score :score="movie.vote_average"></score>
        <TextContent :text="movie.overview"></TextContent>
        <Button :btncolor="`btn btn-info`" :to="movie.id"></Button>
    </b-card>
</template>

<script>
import Button from "./Button"
import TextContent from "./TextContent";
import Score from "./Score"

export default {
  components: {
    TextContent,
    Button,
    Score
  },
  props: ["movie"]
}
</script>
