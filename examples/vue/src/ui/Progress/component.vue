<!-- #region example -->
<script lang="ts" setup>
  import { ref } from 'vue'

  const currentValue = ref(0);
  setInterval( () =>{
    currentValue.value ++;
    if(currentValue.value === 101)
      currentValue.value = 0;
  }, 100);
</script>

<template>
  <Page>
    <GridLayout>
      <Progress :value="currentValue"></Progress>
    </GridLayout>
  </Page>
</template>
<!-- #endregion example -->
