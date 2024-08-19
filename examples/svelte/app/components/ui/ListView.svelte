
<page>
    <actionBar >
      <label>ListView</label>
    </actionBar>

    <gridLayout>
      <contentView
        horizontalAlignment="center"
        verticalAlignment="center">
        <!--      region example -->
        <listView items="{items}">
          <Template let:item>
            <stackLayout>
              <label>{item.title}</label>
            </stackLayout>
          </Template>
        </listView>
        <!--      endregion example-->
      </contentView>
    </gridLayout>
</page>

<script lang="ts">
  // #region example
  import { Template } from 'svelte-native/components'

  const items = [];
  for(let index = 0; index < 100; index++) {
    items.push({
      title: `Item ${index+1}`
    })
  }
  // #endregion example
</script>

<style>
</style>
