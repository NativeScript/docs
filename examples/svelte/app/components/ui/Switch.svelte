<script lang="ts">
  let switchValue = true
</script>

<page>
  <actionBar title="Switch">
  </actionBar>

  <gridLayout>
    <!-- #region example -->
    <switch bind:checked={switchValue}/>
    <!-- #endregion example -->
  </gridLayout>
</page>

<style>
</style>
