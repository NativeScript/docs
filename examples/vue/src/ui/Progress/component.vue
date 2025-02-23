<script lang="ts" setup>

  import { ref } from 'vue'

  // #region example
  const currentValue = ref(0);
  setInterval( () =>{
    currentValue.value ++;
    if(currentValue.value === 101)
      currentValue.value = 0;
  }, 100);
  // #endregion example
</script>

<template>
  <Page>
    <GridLayout>
      <ContentView verticalAlignment="center">
        <!-- #region example -->
        <StackLayout>
          <Progress :value="currentValue"></Progress>
        </StackLayout>
        <!-- #endregion example -->
      </ContentView>
    </GridLayout>
  </Page>
</template>
