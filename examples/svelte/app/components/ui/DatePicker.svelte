<script lang="ts">
  import { Frame } from '@nativescript/core'

  let value = new Date()
  function goBack() {
    Frame.goBack()
  }
</script>

<page>
  <actionBar>
    <label>DatePicker</label>
  </actionBar>

  <gridLayout>
    <contentView horizontalAlignment="center" verticalAlignment="center">
      <stackLayout>
        <!-- #region example -->
        <datepicker bind:date={value}></datepicker>
        <!-- #endregion example -->
        <label>{value}</label>
      </stackLayout>
    </contentView>
  </gridLayout>
</page>

<style>
</style>
