<script lang="ts" setup>
  // #region example
  const items = Array.from({ length: 100 }).map((_, i) => ({
    title: `Item ${i}`,
  }));
  // #endregion example
</script>

<template>
  <Page>
    <ActionBar>
    </ActionBar>

    <GridLayout>
      <!-- #region example -->
      <ListView for="item in items" >
        <v-template>
          <!-- Shows the list item label in the default color and style. -->
          <Label :text="item.title" />
        </v-template>
      </ListView>
      <!-- #endregion example -->
    </GridLayout>
  </Page>
</template>
