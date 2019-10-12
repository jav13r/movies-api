<template>
  <b-button :class="`${btncolor}`" :to="`/detail/${to}`">View Detail</b-button>
</template>

<script>
export default {
  props: ["to", "btncolor"]
}
</script>
