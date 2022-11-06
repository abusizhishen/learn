<template>
  <div id='app'>
    <el-form inline :model='data' :rules="rules">
      <el-form-item label='审批人' prop="user">
        <el-input v-model='data.user' placeholder='审批人'></el-input>
      </el-form-item>
      <el-form-item label='活动区域'>
        <el-select v-model='data.area' placeholder='活动区域'>
          <el-option v-for='item in data.areas' :value='item.value'>
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button @click='onSubmit' type='primary'>查询</el-button>
      </el-form-item>
    </el-form>

  </div>
</template>

<script>
/* eslint-disable-line */
export default {
  name: 'app',
  components: {

  },
  data() {
    return {
      data: {
        user: '',
        areas: [
          {
            value: '北京'
          },

          {
            value: '天津'
          },
          {
            value: '上海'
          }, {
            value: '重庆'
          }
        ],
        area: '',
      },

      rules: {
        user: [
          { required: true, message: 'Please input Activity name', trigger: 'change' },
          { min: 3, max: 5, message: 'Length should be 3 to 5', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    onSubmit() {
      console.log(this.data)
    }
  },

}
</script>