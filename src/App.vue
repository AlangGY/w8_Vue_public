<template>
  <h1>App.vue</h1>
  <Hello />
  <RouterView />
</template>

<script>
import Hello from '~/components/Hello';

export default { components : { Hello } };
</script>