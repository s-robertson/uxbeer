<template>
  <div class="people-list">
    <el-table v-if="users" :data="users" stripe>
      <el-table-column prop="name" label="Name"></el-table-column>
      <el-table-column prop="tokens" label="Tokens"></el-table-column>
    </el-table>
  </div>
</template>

<script>
  import { Table, TableColumn } from 'element-ui';

  export default {
    components: {
      ElTable: Table,
      ElTableColumn: TableColumn,
    },
    props: {
      users: {
        type: Array,
        default() {
          return [];
        },
      },
    },
  };
</script>
