<template>
  <div class="row">
    <Panel />
    <nuxt />
  </div>
</template>

<script>
import Panel from '@/components/Panel';

export default {
  components: {
    Panel
  }
}
</script>

<style>

.row {
  margin: 0px;
  padding: 0px;
}

</style>
