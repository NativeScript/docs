<script lang="ts" setup>
  import { ref } from 'vue'

  const selectedDate = ref(new Date());
</script>

<template>
    <Page>
      <GridLayout>
        <ContentView verticalAlignment="center" horizontalAlignment="center">
          <!-- using a fixed date to simplify screenshot diffs -->
          <StackLayout>
            <DatePicker v-model="selectedDate" />
            <TextField>{{selectedDate}}</TextField>
          </StackLayout>
        </ContentView>

        <ContentView visibility="collapse">
          <!-- #region example -->
          <DatePicker />
          <!-- #endregion example -->
        </ContentView>
      </GridLayout>
    </Page>
</template>
