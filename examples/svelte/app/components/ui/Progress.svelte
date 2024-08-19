
<page>
    <actionBar >
      <label>Progress </label>
    </actionBar>

    <gridLayout width="100%">
      <contentView
         width="100%"
        horizontalAlignment="center"
        verticalAlignment="center">
        <!--      region example -->
        <stackLayout>
          <progress bind:value={currentValue}></progress>
          <label textAlignment="center">{currentValue}</label>

        </stackLayout>
        <!--      endregion example-->
      </contentView>
    </gridLayout>
</page>

<script lang="ts">
  // #region example
  let currentValue = 0;
  setInterval( () =>{
    currentValue ++;
    if(currentValue === 101)
      currentValue = 0;
  }, 100);
  // #endregion example
</script>

<style>
</style>
