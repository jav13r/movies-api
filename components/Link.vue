<template>
  <b-link :href="`/detail/${to}`" class="card-link">{{ text }}</b-link>
</template>

<script>
export default {
  props: ["to", "text"]
}
</script>
