var models = require('../db');
var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var $sql = require('../sqlMap');

// 连接数据库
var conn = mysql.createConnection(models.mysql);

conn.connect();
var jsonWrite = function (res, ret) {
  if (typeof ret === 'undefined') {
    res.json({
      code: '1',
      msg: '操作失败'
    });
  } else {
    res.json(ret);
  }
};

// 增加用户接口
router.post('/addUser', (req, res) => {
  var sql = $sql.user.add;
  var params = req.body;
  console.log(params);
  conn.query(sql, [params.username, params.password], function (err, result) {
    if (err) {
      console.log(err);
    }
    if (result) {
      jsonWrite(res, result);
    }
  })
});

// 删除用户接口
router.post('/delUser', (req, res) => {
  var sql = $sql.user.del;
  var params = req.body;
  console.log(params);
  conn.query(sql, [params.username], function (err, result) {
    if (err) {
      console.log(err);
    }
    if (result) {
      jsonWrite(res, result);
    }
  })
});

// 查询用户接口
router.post('/selectUser', (req, res) => {
  var sql = $sql.user.select;
  var params = req.body;
  console.log(params);
  conn.query(sql, [params.username], function (err, result) {
    if (err) {
      console.log(err);
    }
    if (result) {
      jsonWrite(res, result);
    }

  })
});

// 修改用户接口
router.post('/updateUser', (req, res) => {
  var sql = $sql.user.update;
  var params = req.body;
  console.log(params);
  conn.query(sql, [params.password, params.username], function (err, result) {
    if (err) {
      console.log(err);
    }
    if (result) {
      jsonWrite(res, result);
    }

  })
});


// 验证用户登陆接口
router.post('/selectUserLogin', (req, res) => {
  var sql = $sql.user.select;
  var params = req.body;
  console.log(params);
  conn.query(sql, [params.username], function (err, result) {
    if (err) {
      console.log(err);
    } else if (result && result[0]) {
      if (params.password == result[0].password) {
        jsonWrite(res, result);
      } else {
        jsonWrite(res, "err");
      }
    } else {
      jsonWrite(res, "err1");
    }

  })
});

module.exports = router;
