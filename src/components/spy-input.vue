<template>
  <div class="spy-input">
    <input :type="type" class="spy-input__inner" v-bind="$attrs" :value="value" @input="$emit($event.target.value)" :disabled='disabled' :placeholder="placeholder">
  </div>
</template>
<script>
export default {
    data(){
        return {
            userName:''
        }
    },
    props: {
        placeholder: {
            type: String,
            default: ''
        },
        type:{
            type:String,
            default:'text'
        },
        disabled:{
            type:Boolean,
            default:false
        }
    }
}
</script>
<style lang="scss" scoped>
.spy-input {
  width: 180px;
  position: relative;
  font-size: 14px;
  display: inline-block;
  .spy-input__inner {
    -webkit-appearance: none;
    background-color: #fff;
    background-image: none;
    border-radius: 4px;
    border: 1px solid #dcdfe6;
    box-sizing: border-box;
    color: #606266;
    display: inline-block;
    font-size: inherit;
    height: 40px;
    line-height: 40px;
    outline: none;
    padding: 0 15px;
    transition: border-color .2s cubic-bezier(.645,.045,.355,1);
    width: 100%;

    &:focus {
      outline: none;
      border-color: #409eff;
    }
     &.is-disabled {
      background-color: #f5f7fa;
      border-color: #e4e7ed;
      color: #c0c4cc;
      cursor: not-allowed;
    }
  }
}
</style>