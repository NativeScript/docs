<!-- #region example -->
<script lang="ts" setup>
import { Frame } from "@nativescript/core";
function goBack() {
  Frame.goBack();
}
</script>

<template>
  <Page>
    <ActionBar title="ActionBar Title">
      <ActionItem @tap="goBack" >
        <Label text="<< Back"></Label>
      </ActionItem>
    </ActionBar>
    <GridLayout>
      <Label text="Main Content" verticalAlignment="center" horizontalAlignment="center"></Label>
    </GridLayout>
  </Page>
</template>
  <!-- #endregion example -->
