<template>
  <div class="app-header">
    <div class="title">
      <img src="../../assets/cnki-logo-min.png" alt="" width="40">
      <div style="margin-left:10px">
        <p>网络首发系统-后台管理</p>
        <p style="font-size:12px">Network Initial System - Background Management</p>
      </div>
    </div>
    <div class="logout-wrapper">
      <Button type="primary">退出登录</Button>
    </div>
  </div>
</template>

<script>

export default {
  name: 'AppHeader'
}
</script>

<style lang="less" scoped>
.app-header {
  width: 100%;
  height: 68px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #393E46;
  color: #ffffff;

  .title {
    padding-left: 20px;
    padding-top: 10px;
    font-size: 20px;
    font-weight: bold;
    display: flex;
  }

  p{
    margin-top: 0;
    margin-bottom: 0em;
  }
}
</style>
