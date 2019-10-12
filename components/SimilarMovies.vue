<template>
    <b-card :title="similarMovie.title"
      :img-src="`https://image.tmdb.org/t/p/original${similarMovie.backdrop_path}`">
      <Button :btncolor="`btn btn-success`" :to="`${similarMovie.id}`"></Button>
    </b-card>
</template>

<script>
import Button from "./Button";
export default {
  components: {
    Button
  },
  props: ["similarMovie"]
}
</script>
