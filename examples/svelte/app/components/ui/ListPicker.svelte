
<page>
    <actionBar >
      <label>ListPicker</label>
    </actionBar>

    <gridLayout>
      <contentView
        horizontalAlignment="center"
        verticalAlignment="center">
        <!--      region example -->
        <listPicker items="{items}"></listPicker>
        <!--      endregion example-->
      </contentView>
    </gridLayout>
</page>

<script lang="ts">
  const items = ['First','Second','Third']
</script>

<style>
</style>
