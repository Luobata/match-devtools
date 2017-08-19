<template>
    <div>
        <split-pane>
            <match-filter slot="left"></match-filter>
            <match-obj :stacks="matchArr" slot="right"></match-obj>
        </split-pane>
  </div>
</template>

<script src="./matchContent.js">
</script>
