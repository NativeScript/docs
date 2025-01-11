<script lang="ts" setup>
  const // #region example
      text = `TextView\nWith\nMultiple\nLines!`;
  // #endregion example
</script>

<template>
    <Page>
      <GridLayout>
        <ContentView verticalAlignment="center" horizontalAlignment="center">
          <TimePicker hour="9" minute="41" />
        </ContentView>

        <ContentView visibility="collapsed">
          <!-- #region example -->
          <TimePicker />
          <!-- #endregion example -->
        </ContentView>
      </GridLayout>
  </Page>
</template>
