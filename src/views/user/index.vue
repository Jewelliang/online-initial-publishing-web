<template>
    <div>
        <Card class="card">
            <!-- <i-table border :content="self" :columns="columns" :data="userInfoList"></i-table> -->
            <Table border ref="selection" :columns="columns" :data="userInfoList">
                <!-- <template slot-scope="{ row }">
                    <strong>{{ row.name }}</strong>
                </template> -->
                <template slot-scope="{ row, index }" slot="action">
                    <Button type="primary" size="small" style="margin-right: 5px" @click="modal1 = true">update</Button>
                    <Modal
                        v-model="modal1"
                        title="编辑"
                        :footer-hide="true">
                        <update-user :userInfo="row" @updateSuccess="updateSuccess"></update-user>
                    </Modal>
                    <!-- <Button type="primary" size="small" style="margin-right: 5px" @click="update(index)">View</Button> -->
                    <Button type="error" size="small" @click="remove(index)">Delete</Button>
                </template>
            </Table>
        </Card>
    </div>
</template>

<script>
import updateUser from '@/views/user/updateUser'

export default {

  name: 'user-info',
  components: {
    updateUser
  },
  data () {
    return {
      modal1: false,
      value14: 'hello word',
      userInfoList: [],
      self: this,
      columns: [
        { type: 'selection', width: 60, align: 'center' },
        { key: 'userId', title: '编号', titleAlign: 'center', columnAlign: 'center', isResize: true },
        { key: 'userName', title: '用户名', titleAlign: 'center', columnAlign: 'center', isResize: true },
        // { key: 'phone', title: '手机号',  titleAlign: 'center', columnAlign: 'center',isResize:true },
        // { key: 'email', title: '邮箱',  titleAlign: 'center', columnAlign: 'left',isResize:true },
        { key: 'role', title: '角色', titleAlign: 'center', columnAlign: 'left', isResize: true },
        // { key: 'createDate', title: '创建时间',  titleAlign: 'center', columnAlign: 'left',isResize:true },
        { key: 'action', title: '操作', titleAlign: 'center', slot: 'action', columnAlign: 'left', isResize: true }
      ]
    }
  },
  created () {
    this.getAllUserInfo()
  },
  methods: {
    getAllUserInfo () {
      this.$store.dispatch('getAllUserInfo').then(response => {
        this.userInfoList = JSON.parse(response).data
        console.log(response)
      })
    },
    remove (index) {
      this.userInfoList.splice(index, 1)
    },

    // updata 成功
    updateSuccess () {
      this.modal1 = false
      // TODO
      // this.getAllUserInfo()
    }
  }
}
</script>

<style scoped>
    .card{
        position: absolute;
        top: 40px;
        left: 0;
        width: 100%;
    }
</style>
