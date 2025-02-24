<!-- #region example -->
<script lang="ts" setup>
  const items = [];
  for(let i = 0; i < 100; i++) {
    items.push({
      title: `Item ${i+1}`
    })
  }
</script>

<template>
  <Page>
    <ActionBar title="ListView Example">
    </ActionBar>
    <GridLayout>
      <ListView :items="items">
        <template #default="{ item }">
          <StackLayout>
            <Label :text="item.title" />
          </StackLayout>
        </template>
      </ListView>
    </GridLayout>
  </Page>
</template>
<!-- #endregion example -->
