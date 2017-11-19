<!--导航-->
<template>
  <div class="todolistTab">
    <div>
      <router-link tag='div' to="/today">今天</router-link>
    </div>
    <div>
     <router-link tag='div' to="/collectionbox">收集箱</router-link>
    </div>
    <div>
	  <router-link tag='div' to="/calendar">日历</router-link>
    </div>
    <div>
	  <router-link tag='div' to="/addlistitem">添加清单</router-link>
    </div>
    <div>
	  <router-link tag='div' to="/managelistitem">管理清单</router-link>
    </div>
  </div>
</template>

<style scoped>
.todolistTab{
	background: #00BFFF;
	width:30%;
	font-size:10px;
}
</style>