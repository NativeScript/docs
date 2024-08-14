<script lang="ts" setup>

</script>

<template>
    <Page>
      <GridLayout>
        <ContentView verticalAlignment="center" horizontalAlignment="center">
          <!-- using a fixed date to simplify screenshot diffs -->
          <DatePicker day="28" month="8" year="2023" />
        </ContentView>

        <ContentView visibility="collapse">
          <!-- #region example -->
          <DatePicker />
          <!-- #endregion example -->
        </ContentView>
      </GridLayout>
    </Page>
</template>
