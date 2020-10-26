<template>
    <div>
        <Card>
            <i-table border :content="self" :columns="columns" :data="userInfoList"></i-table>
        </Card>
    </div>
</template>
<script>
export default {
    name: "user-info", 
    data() {
        return {
            userInfoList: [], 
            self: this, 
            columns: [
                { key: 'userId', title: '编号',  titleAlign: 'center', columnAlign: 'center',isResize:true },
                { key: 'userName', title: '姓名', titleAlign: 'center', columnAlign: 'center',isResize:true },
                { key: 'phone', title: '手机号',  titleAlign: 'center', columnAlign: 'center',isResize:true },
                { key: 'email', title: '邮箱',  titleAlign: 'center', columnAlign: 'left',isResize:true },
                { key: 'role', title: '角色',  titleAlign: 'center', columnAlign: 'left',isResize:true },
                { key: 'createDate', title: '创建时间',  titleAlign: 'center', columnAlign: 'left',isResize:true }
            ]
        }
    }, 
    created() {
      this.getAllUserInfo();
    },
    methods: {
        getAllUserInfo() {
            this.$store.dispatch("getAllUserInfo").then(response => {
                // debugger
                this.userInfoList = response
                console.log(response)
            }); 
        }, 
    }
}
</script>