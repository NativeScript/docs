
<page>
  <actionBar >
    <label>WebView</label>
  </actionBar>

  <gridLayout>
    <!-- keeps the screen busy for Maestro to wait for the WebView... -->
    <activityIndicator busy="true" />
    <webView src="https://nativescript.org/" backgroundColor="transparent" />

    <!-- actual example - not rendered because the above WebView is used for the screenshot instead. -->
    <contentView visibility="collapse">
      <!-- #region example -->
      <webView src="https://nativescript.org/" />
      <!-- #endregion example -->
    </contentView>
  </gridLayout>
</page>

<script lang="ts">
</script>

<style>
</style>
