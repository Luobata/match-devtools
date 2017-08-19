<template>
    <div class="match">
        <action-header slot="header">
            <div class="search">
                <i class="material-icons">search</i>
                <input placeholder="Filter components" @input="filterStacks">
            </div>
        </action-header>
        <div class="match-arr-content">
        <div class="matchArrs">
            <ul class="arr-content">
                <li :class="['arr-items', {'active': activeItem === item}]" v-for="item in matchArr" @click="chooseItem(item)">
                    {{item.url}}
                </li>
            </ul>
        </div>
        </div>
    </div>
</template>

<style scoped src="./match.styl" lang="stylus"></style>

<script src="./match.js"></script>
