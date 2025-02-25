<!-- #region example -->
<script lang="ts">
  import { Frame } from '@nativescript/core'

  function goBack() {
    Frame.goBack()
  }
</script>

<page>
  <actionBar title="ActionBar">
    <actionItem on:tap={goBack}>
      <label text="<< Back" class="font-bold text-lg" />
    </actionItem>
  </actionBar>
  
  <gridLayout>
    <contentView horizontalAlignment="center" verticalAlignment="center">
      <label>Main Content</label>
    </contentView>
  </gridLayout>
</page>
<!-- #endregion example -->

<style>
</style>
