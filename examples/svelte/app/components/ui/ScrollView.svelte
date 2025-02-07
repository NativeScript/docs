<script lang="ts">
</script>

<page>
  <actionBar>
    <label>ScrollView </label>
  </actionBar>

  <gridLayout rows="*, 50, 300, *">
    <scrollView orientation="horizontal" row="1">
      <stackLayout orientation="horizontal" padding="12">
        <label text="h1" width="50"></label>
        <label text="h2" width="50"></label>
        <label text="h3" width="50"></label>
        <label text="h4" width="50"></label>
        <label text="h5" width="50"></label>
        <label text="h6" width="50"></label>
        <label text="h7" width="50"></label>
        <label text="h8" width="50"></label>
        <label text="h9" width="50"></label>
      </stackLayout>
    </scrollView>

    <contentView row="2">
      <!-- #region example -->
      <scrollView>
        <stackLayout padding="12">
          <label text="v1" height="50"></label>
          <label text="v2" height="50"></label>
          <label text="v3" height="50"></label>
          <label text="v4" height="50"></label>
          <label text="v5" height="50"></label>
          <label text="v6" height="50"></label>
          <label text="v7" height="50"></label>
          <label text="v8" height="50"></label>
          <label text="v9" height="50"></label>
        </stackLayout>
      </scrollView>
      <!-- #endregion example -->
    </contentView>
  </gridLayout>
</page>

<style>
</style>
