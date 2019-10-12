<template>
  <span class="text-right">
    <b-button variant="primary">
      Score <b-badge variant="light">{{score}}</b-badge>
    </b-button>
  </span>
</template>

<script>
export default {
  props: ["score"]
}
</script>
