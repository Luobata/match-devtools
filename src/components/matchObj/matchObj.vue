<template>
    <div class="data-wraper">
        <div v-for="item in stacks" class="data-fields">
            <div class="data-type">beforeParams</div>
            <template v-if="Array.isArray(item.beforeParams)">
                <data-field
                    v-for="field in item.beforeParams"
                    :key="field"
                    :field="field"
                    :depth="0">
                </data-field>
            </template>
            <template v-else>
                <data-field
                    v-for="(value, key) in item.beforeParams"
                    :key="key"
                    :field="{ value, key }"
                    :depth="0">
                </data-field>
            </template>
            <div class="data-type">afterParams</div>
            <template v-if="Array.isArray(item.afterParams)">
                <data-field
                    v-for="field in item.afterParams"
                    :key="field"
                    :field="field"
                    :depth="0">
                </data-field>
            </template>
            <template v-else>
                <data-field
                    v-for="(value, key) in item.afterParams"
                    :key="key"
                    :field="{ value, key }"
                    :depth="0">
                </data-field>
            </template>
        </div>
    </div>
</template>

<script src="./matchObj.js">
</script>
<style lang="stylus">
.data-wrapper
  display flex
  flex-wrap wrap
  padding-top 20px

.data-fields
  padding 20px 20px 40px

.data-el
  padding 0px 10px
  flex 1 0 33.33%
  font-size 14px

  .data-type
    color #486887
    padding-left 20px
    margin-bottom -10px

    .app.dark &
      color lighten(#486887, 30%)
</style>
