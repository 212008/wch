
// 引入模块
var http = require('http');
var url = require('url');
var querystring = require('querystring');
var mysql = require('mysql');

var key = {
    'host': 'localhost',
    'user': 'root',
    'password': '990314',
    'database': 'participants',
}

http.createServer(function (req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.writeHead(200, { "Content-Type": "text/plain;charset=UTF-8" });
    if (req.method == 'POST') {
        var urlstr = '';
        req.on('data', function (data) {
            urlstr += data
        });
        req.on('end', function () {
            var postUrlJson = querystring.parse(urlstr);
            var pool = mysql.createPool(key);
            pool.getConnection(function (err, conn) {
                if (err) {
                    console.log('连接失败');
                } else {
                    if (postUrlJson.a == '0') {
                        conn.query('select a_student_num from basic where a_student_num="' + postUrlJson.a_student_num + '";', function (err, data) {
                            if (err) {
                                console.log('查找时发生错误' + err);
                            } else {
                                res.end(JSON.stringify(data));
                                conn.release();
                            }
                        })
                    } else if (postUrlJson.a == '1') {
                        conn.query('select * from basic where a_student_num="' + postUrlJson.a_student_num + '";', function (err, data) {
                            if (err) {
                                console.log('查找时发生错误' + err);
                            } else {
                                res.end(JSON.stringify(data));
                                conn.release();
                            }
                        })
                    } else if (postUrlJson.a == 2) {
                        conn.query('select * from basic where a_student_num="' + postUrlJson.a_student_num + '";', function (err, data) {
                            if (err) {
                                console.log('查询时报错' + err)
                            } else {
                                if (data.length > 0) {
                                    res.end('该用户已注册');
                                    conn.release();
                                } else {
                                    var sql = 'insert into basic set?';
                                    var values = {
                                        a_id: 000,
                                        a_student_num: postUrlJson.a_student_num,
                                        a_uname: postUrlJson.a_uname,
                                        a_gander: postUrlJson.a_gander,
                                        a_class: postUrlJson.a_class,
                                        a_qq: postUrlJson.a_qq,
                                        a_phone: postUrlJson.a_phone,
                                        a_birthday: postUrlJson.a_birthday,
                                        a_nation: postUrlJson.a_nation,
                                        a_status: postUrlJson.a_status,
                                        a_position: postUrlJson.a_position,
                                        a_award: postUrlJson.a_award,
                                        a_merit: postUrlJson.a_merit,
                                        a_defect: postUrlJson.a_defect
                                    }
                                    conn.query(sql, [values], function (err, data) {
                                        if (err) {
                                            console.log('注册时发生错误' + err);
                                        } else {
                                            res.end('注册成功');
                                            conn.release();
                                        }
                                    })
                                }
                            }
                        })
                    } else if (postUrlJson.a == 3) {
                        conn.query('select * from sheet1 where b_num="' + postUrlJson.a_student_num + '";', function (err, data) {
                            if (err) {
                                console.log('查找时发生错误' + err);
                            } else {
                                res.end(JSON.stringify(data));
                                conn.release();
                            }
                        })
                    } else if (postUrlJson.a == 4) {
                        var sql = 'update basic set ? where a_student_num=?';
                        var values = [];
                        for (var i in postUrlJson) {
                            if (i != 'a' && i != 'a_student_num') {
                                values.push(i + '=' + '"' + postUrlJson[i] + '"')
                            }
                        }
                        conn.query('update basic set ' + values + ' where a_student_num="' + postUrlJson.a_student_num + '";', function (err, data) {
                            if (err) {
                                console.log('修改时发生错误' + err);
                            } else {
                                res.end('修改成功');
                                conn.release();
                            }
                        })
                    } else if (postUrlJson.a == 5) {
                        conn.query('select * from basic', function (err, data) {
                            if (err) {
                                console.log('修改时发生错误' + err);
                            } else {
                                res.end(JSON.stringify(data));
                                conn.release();
                            }
                        })
                    }else if (postUrlJson.a == 6) {
                        conn.query('delete from basic where a_student_num="'+postUrlJson.a_student_num+'"', function (err, data) {
                            if (err) {
                                console.log('修改时发生错误' + err);
                            } else {
                                res.end('删除成功');
                                conn.release();
                            }
                        })
                    }
                }
            })
        });
    }
}).listen(4010);
