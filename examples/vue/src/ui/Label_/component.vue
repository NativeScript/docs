<script lang="ts" setup>

  const htmlString = `
    <h1 style="color: black; font-family: ui-sans-serif, system-ui;">
      <span style="color: #65adf1;">Html</span>View
    </h1>
    `
</script>

<template>
  <Page>
    <GridLayout>
      <ContentView verticalAlignment="center" horizontalAlignment="center">
        <!-- #region example -->
        <Label text="Hello NativeScript!"></Label>
        <!-- #endregion example -->
      </ContentView>
    </GridLayout>


  </Page>
</template>
