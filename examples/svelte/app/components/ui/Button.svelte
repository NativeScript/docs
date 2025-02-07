<script lang="ts">
  import { alert } from '@nativescript/core'
  function showAlert() {
    alert({
      title: 'alert',
      message: "you've made an alert with a click from a button",
      okButtonText: 'OK',
    })
  }
</script>

<page>
  <actionBar>
    <label text="Button" class="font-bold text-lg" />
  </actionBar>
  <gridLayout>
    <contentView verticalAlignment="center">
      <!-- #region example -->
      <button text="this is a button" on:tap={showAlert}></button>
      <!-- #endregion example -->
    </contentView>
  </gridLayout>
</page>

<style>
</style>
