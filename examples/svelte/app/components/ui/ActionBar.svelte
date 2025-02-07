<script lang="ts">
  import { Frame } from '@nativescript/core'

  function goBack() {
    Frame.goBack()
  }
</script>

<page>
  <!-- #region example-->

  <actionBar title="ActionBar">
    <actionItem on:tap={goBack}>
      <label text="<< Back" class="font-bold text-lg" />
    </actionItem>
  </actionBar>
  <!-- #endregion example-->

  <gridLayout>
    <contentView horizontalAlignment="center" verticalAlignment="center">
      <label>Main Content</label>
    </contentView>
  </gridLayout>
</page>

<style>
</style>
