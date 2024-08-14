<script lang="ts" setup>
  const items = [`First`, `Second`, `Third`];
</script>

<template>
    <Page>
      <ActionBar>
      </ActionBar>

      <GridLayout>
        <ContentView verticalAlignment="center" horizontalAlignment="center">
          <!-- #region example -->
          <ListPicker v-bind:items="items" />
          <!-- #endregion example -->
        </ContentView>
      </GridLayout>
    </Page>
</template>
