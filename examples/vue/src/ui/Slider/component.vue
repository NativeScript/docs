<script lang="ts" setup>
import { ref } from 'vue';
  let sliderValue = ref(1)
</script>

<template>
    <Page>
      <GridLayout padding="8">
        <StackLayout>
          <!-- #region example -->
          <Slider v-model="sliderValue"/>
          <!-- #endregion example -->
          <Label>{{sliderValue}}</Label>
        </StackLayout>
    </GridLayout>
  </Page>
</template>
