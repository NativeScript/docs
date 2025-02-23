<script lang="ts" setup>
import {Frame} from "@nativescript/core";
// #region example
function goBack() {
  Frame.goBack();
}
// #endregion example
</script>

<template>
  <Page>
    <!-- #region example -->
    <ActionBar title="ActionBar Title">
      <ActionItem @tap="goBack" >
        <Label text="<< Back"></Label>
      </ActionItem>
    </ActionBar>
    <!-- #endregion example -->
    <GridLayout>
      <Label text="Main Content" verticalAlignment="center" horizontalAlignment="center"></Label>
    </GridLayout>
  </Page>
</template>
