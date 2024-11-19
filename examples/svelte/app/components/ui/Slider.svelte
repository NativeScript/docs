
<page>
    <actionBar >
      <label>Slider</label>
    </actionBar>

  <gridLayout width="100%">
    <contentView
      width="100%"
      horizontalAlignment="center"
      verticalAlignment="center">
      <stackLayout>
        <!-- #region example -->
        <slider bind:value="{sliderValue}"/>
        <!-- #endregion example -->
        <label width="100%" textAlignment="center">{sliderValue}</label>
      </stackLayout>
    </contentView>
  </gridLayout>
</page>

<script lang="ts">
  let sliderValue = 0;
</script>

<style>
</style>
