<script lang="ts">
  let switchValue = true
</script>

<page>
  <actionBar>
    <label>Switch</label>
  </actionBar>

  <gridLayout width="100%">
    <contentView
      width="100%"
      horizontalAlignment="center"
      verticalAlignment="center"
    >
      <!-- #region example -->
      <stackLayout>
        <switch horizontalAlignment="center" bind:checked={switchValue}
        ></switch>
        <label textAlignment="center" width="100%">{switchValue}</label>
      </stackLayout>
      <!-- #endregion example -->
    </contentView>
  </gridLayout>
</page>

<style>
</style>
