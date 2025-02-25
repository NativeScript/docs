<script lang="ts">
  const text = `TextView\nWith\nMultiple\nLines!`
</script>

<page>
  <actionBar>
    <label>TextView</label>
  </actionBar>

  <gridLayout width="100%">
    <contentView
      width="100%"
      horizontalAlignment="center"
      verticalAlignment="center"
    >
      <!-- #region example -->
      <textView {text} />
      <!-- #endregion example -->
    </contentView>
  </gridLayout>
</page>

<style>
</style>
