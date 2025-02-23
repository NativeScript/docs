<script lang="ts" setup>
  // #region example
  const items = [];
  for(let index = 0; index < 100; index++) {
    items.push({
      title: `Item ${index+1}`
    })
  }
  // #endregion example
</script>

<template>
  <Page>
    <ActionBar>
    </ActionBar>
    <GridLayout>
      <!-- #region example -->
        <ListView :items="items">
          <template #default="{ item }">
            <StackLayout orientation="horizontal" >
              <Label :text="item.title" />
            </StackLayout>
          </template>
        </ListView>
      <!-- #endregion example -->
    </GridLayout>
  </Page>
</template>
