<script lang="ts" setup>
import { ref } from 'vue';
  let switchValue = ref(false)
</script>

<template>
    <Page>
      <GridLayout padding="8">
        <ContentView verticalAlignment="center" horizontalAlignment="center">
         <StackLayout>
           <!-- #region example -->
           <Switch v-model="switchValue" />
           <!-- #endregion example -->
           <Label>{{switchValue}}</Label>
         </StackLayout>
        </ContentView>
      </GridLayout>
  </Page>
</template>
