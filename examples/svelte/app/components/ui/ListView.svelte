<!-- #region example -->
<script lang="ts">
  import { Template } from 'svelte-native/components'

  const items = []
  for (let i = 0; i < 100; i++) {
    items.push({
      title: `Item ${i + 1}`,
    })
  }
</script>

<page>
  <actionBar title="ListView">
  </actionBar>

  <gridLayout>
    <listView {items}>
      <Template let:item>
        <stackLayout>
          <label>{item.title}</label>
        </stackLayout>
      </Template>
    </listView>
  </gridLayout>
</page>
<!-- #endregion example -->
<style>
</style>
