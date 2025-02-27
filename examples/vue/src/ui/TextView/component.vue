<script lang="ts" setup>
  const // #region example
      text = `TextView\nWith\nMultiple\nLines!`;
  // #endregion example
</script>

<template>
    <Page>
      <GridLayout padding="8">
        <ContentView verticalAlignment="center">
          <!-- #region example -->
          <TextView :text="text" />
          <!-- #endregion example -->
        </ContentView>
      </GridLayout>
  </Page>
</template>
