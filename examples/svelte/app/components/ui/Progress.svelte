<!-- #region example -->
<script lang="ts">
  let currentValue = 0
  setInterval(() => {
    currentValue++
    if (currentValue === 101) currentValue = 0
  }, 100)
</script>

<page>
  <actionBar title="Progress">
  </actionBar>

  <gridLayout width="100%">
    <progress bind:value={currentValue}></progress>
  </gridLayout>
</page>
<!-- #endregion example -->

<style>
</style>
