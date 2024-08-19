
<page>
  <!--        #region example-->
    <actionBar >
      <actionItem on:tap={goBack()}>
        <label text="<< Back"></label>
      </actionItem>
    </actionBar>
  <!--        #endregion example-->

    <gridLayout>
      <contentView verticalAlignment="center">

        <label text="Main Content"
        verticalAlignment="center"
        horizontalAlignment="center"></label>
      </contentView>
    </gridLayout>
</page>

<script lang="ts">
  import { Frame } from '@nativescript/core'

  function goBack() {
    Frame.goBack();

  }
</script>

<style>
</style>
