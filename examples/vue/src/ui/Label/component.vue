<script lang="ts" setup>

  const htmlString = `
    <h1 style="color: black; font-family: ui-sans-serif, system-ui;">
      <span style="color: #65adf1;">Html</span>View
    </h1>
    `
</script>

<template>
  <Page>
    <Frame>
      <GridLayout>
        <ContentView verticalAlignment="center" horizontalAlignment="center">
          <!-- #region example -->
          <Image src="~/assets/logo.png" height="60" />
          <!-- #endregion example -->
        </ContentView>
      </GridLayout>
    </Frame>

  </Page>
</template>
