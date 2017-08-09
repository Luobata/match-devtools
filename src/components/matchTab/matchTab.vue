<template>
    <div class="match">
        <action-header slot="header">
          <div class="search">
            <i class="material-icons">search</i>
            <input placeholder="Filter components" @input="filterStacks">
          </div>
        </action-header>
        <div v-for="item in matchArr">1</div>
    </div>
</template>

<style scoped src="./match.css"></style>

<script src="./match.js"></script>
