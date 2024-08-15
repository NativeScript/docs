<script lang="ts" setup>
import {Frame} from "@nativescript/core";

function goBack() {
  Frame.goBack();
}
</script>

<template>
  <Page>
    <!-- #region example -->
    <ActionBar title="ActionBar Title">
      <ActionItem @tap="goBack" >
        <Label text="<< Back      "></Label>
      </ActionItem>
    </ActionBar>
    <!-- #endregion example -->
    <GridLayout>
      <Label text="Main Content" verticalAlignment="center" horizontalAlignment="center"></Label>
    </GridLayout>
  </Page>
</template>
