
<page>
    <actionBar >
      <label>TextView</label>
    </actionBar>

  <gridLayout width="100%">
    <contentView
      width="100%"
      horizontalAlignment="center"
      verticalAlignment="center">
      <!-- #region example -->
      <textView text="{text}" />
      <!-- #endregion example -->
    </contentView>
  </gridLayout>
</page>

<script lang="ts">
  // #region example
  const text = `TextView\nWith\nMultiple\nLines!`;
  // #endregion example
</script>

<style>
</style>
