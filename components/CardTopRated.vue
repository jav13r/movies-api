<template>
    <b-card :img-src="`https://image.tmdb.org/t/p/original${topRatedMovie.backdrop_path}`"
      img-alt="Card image"
      img-left
      :title="topRatedMovie.title"
      class="listRated"
      :sub-title="topRatedMovie.release_date">
      <TextContent :text="topRatedMovie.overview"></TextContent>
      <Link :to="topRatedMovie.id" :text="textLink"></Link>
    </b-card>
</template>

<script>
import { mapState } from "vuex";
import Link from "./Link";
import TextContent from "./TextContent";

export default {
  components: {
    TextContent,
    Link,
  },
  data() {
    return {
      textLink: "View Detail"
    }
  },
  props: ["topRatedMovie"]
};
</script>

<style>
img {
  width: 20rem;
  height: vh;
}
.listRated {
  margin: 2rem 0;
}
</style>
