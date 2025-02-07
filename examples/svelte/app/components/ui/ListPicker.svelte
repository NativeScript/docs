<script lang="ts">
  const items = ['First', 'Second', 'Third']
</script>

<page>
  <actionBar>
    <label>ListPicker</label>
  </actionBar>

  <gridLayout>
    <contentView horizontalAlignment="center" verticalAlignment="center">
      <!-- #region example -->
      <listPicker {items}></listPicker>
      <!-- #endregion example -->
    </contentView>
  </gridLayout>
</page>

<style>
</style>
