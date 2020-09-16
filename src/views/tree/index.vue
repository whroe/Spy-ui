<template>
    <div>
        <!-- <Spy-input v-model='value' /> -->
        <Spy-tree ref="bigTree" :tree="tree" :defaultExpand="true"  :filter-node-method="filterNode">
          <template v-slot="{ item }">
            <div>{{ item.label }}</div>
          </template>
        </Spy-tree>
    </div>
</template>
<script>
export default {
    data() {
        return {
            tree:[],
            value:''
        }
    },
    created() {
        for (let index = 0; index < 50000; index++) {
          this.tree.push({
                label: `${this.number_chinese(index)}级 ${this.number_chinese(index)}`,
                children: [{
                    label: `${this.number_chinese(index + 1)}级 ${this.number_chinese(index + 1)}-${this.number_chinese(index + 1)}`,
                    children: [{
                    label: `${this.number_chinese(index + 2)}级${this.number_chinese(index + 2)}-${this.number_chinese(index + 2)}-${this.number_chinese(index + 2)}`
                    }]
                }]
          })
      }
    },
    // watch: {
    //     value(val) {
    //         console.log(this.$refs.bigTree);
    //         this.$refs.bigTree.filter(val);
    //     }
    // },
    methods:{
        filterNode(value, data) {
            if (!value) return true;
            return data.label.indexOf(value) !== -1;
        },
        number_chinese(str) {
            var num = parseFloat(str);
            var strOutput = "";
            num += "";
            var intPos = num.indexOf('.');  
            if (intPos >= 0){
                num = num.substring(0, intPos) + num.substr(intPos + 1, 2);
            }
            for (var i=0; i < num.length; i++){
                strOutput += '零壹贰叁肆伍陆柒捌玖'.substr(num.substr(i,1),1)
            }
            return strOutput

        },
    }
}
</script>