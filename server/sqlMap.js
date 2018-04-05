// sql语句
var sqlMap = {
  // 用户
  user: {
    // 增加
    add: 'insert into user(id, username, password) values (0, ?, ?)',
    // 删除
    del: 'delete from user where username = ?',
    // 查询
    select: 'select * from user where username = ?',
    // 修改
    update: 'update user set password = ? where username = ?'
  },
  userLogin: {
    // 查询账号密码是否正确
    select: 'select * from user where username = ? && password = ?',
  }
}

module.exports = sqlMap;
