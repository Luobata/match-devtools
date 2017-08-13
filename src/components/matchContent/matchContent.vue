<template>
    <div>
        <split-pane>
            <component-tree slot="left"></component-tree>
            <match-obj :stacks="matchArr" slot="right"></match-obj>
        </split-pane>
  </div>
</template>

<script src="./matchContent.js">
</script>
