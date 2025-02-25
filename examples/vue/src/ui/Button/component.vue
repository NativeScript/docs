<script lang="ts" setup>
  import { alert } from '@nativescript/core'

  function showAlert(){
    alert({
      title: "Alert",
      message:"you've made an alert with a click from a button",
      okButtonText:"OK"
    })
  }
</script>

<template>
    <Page>
      <ActionBar>
      </ActionBar>

      <GridLayout>
        <ContentView verticalAlignment="center" horizontalAlignment="center">
          <!-- #region example -->
          <Button text="This is a button!" @tap="showAlert"></Button>
          <!-- #endregion example -->
        </ContentView>
      </GridLayout>
    </Page>
</template>
