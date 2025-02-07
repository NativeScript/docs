<script lang="ts">
  const htmlString = `
    <h1 style="color: black; font-family: ui-sans-serif, system-ui;">
      <span style="color: #65adf1;">Html</span>View
    </h1>
    `
</script>

<page>
  <actionBar>
    <label>HTML View</label>
  </actionBar>

  <gridLayout>
    <contentView horizontalAlignment="center" verticalAlignment="center">
      <!-- #region example -->
      <htmlView html={htmlString}></htmlView>
      <!-- #endregion example -->
    </contentView>
  </gridLayout>
</page>

<style>
</style>
