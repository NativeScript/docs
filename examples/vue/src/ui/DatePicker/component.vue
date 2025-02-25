<script lang="ts" setup>
  import { ref } from 'vue'

  const date = ref(new Date());
</script>

<template>
    <Page>
      <GridLayout>
        <ContentView verticalAlignment="center" horizontalAlignment="center">
          <!-- using a fixed date to simplify screenshot diffs -->
          <StackLayout>
            <DatePicker v-model="date" />
            <TextField>{{date}}</TextField>
          </StackLayout>
        </ContentView>

        <ContentView visibility="collapse">
          <!-- #region example -->
          <DatePicker :date="date" />
          <!-- #endregion example -->
        </ContentView>
      </GridLayout>
    </Page>
</template>
