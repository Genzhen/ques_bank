const path = require("path");
const webpack = require("webpack");

module.exports = {
    devtool: '#eval-source-map',
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        // compress: true,
        port: 3000,
        open: true,
        hot: true,
        before(app) {
            app.get("/api/test", (req, res) => {
                console.log(req.query.qid)
                if (req.query.qtype == 'single_choice') {
                    if (req.query.qid == 0) {
                        res.json({
                            "result": {
                                "qtype": "single_choice",
                                "single_choice": {
                                    "qid": 0,
                                    "title": "JavaScript中如何检测一个变量是一个String类型？请写出函数实现?",
                                    "subject": "详细说明",
                                    "choice": [{
                                            "id": 0,
                                            "option": "使用replace正则匹配的方法"
                                        },
                                        {
                                            "id": 1,
                                            "option": "使用str.trim()方法"
                                        },
                                        {
                                            "id": 2,
                                            "option": "使用jquery,$.trim(str)方法"
                                        },
                                        {
                                            "id": 3,
                                            "option": "使用jquery"
                                        }
                                    ],
                                    "answer": 1,
                                    "analysis": "无解析"
                                },
                                'status': 0,
                                'msg': '状态描述'


                            }
                        });
                    } else {
                        res.json({
                            "result": {
                                "qtype": "single_choice",
                                "single_choice": {
                                    "qid": 1,
                                    "title": "问题函数实现?",
                                    "subject": "详细说明",
                                    "choice": [{
                                            "id": 0,
                                            "option": "函数1"
                                        },
                                        {
                                            "id": 1,
                                            "option": "使用()方法"
                                        },
                                        {
                                            "id": 2,
                                            "option": "正则trim(str)方法"
                                        }
                                    ],
                                    "answer": 2,
                                    "analysis": "自行解决"
                                },
                                'status': 0,
                                'msg': '状态描述'


                            }
                        });
                    }
                } else if (req.query.qtype == "multiple_choice") {
                    res.json({
                        "result": {
                            "qtype": "multiple_choice",
                            "multiple_choice": {
                                "qid": 3,
                                "title": "判断题",
                                "subject": "详细说明",
                                "choice": [{
                                        "id": 0,
                                        "option": "函数1"
                                    },
                                    {
                                        "id": 1,
                                        "option": "使用()方法"
                                    },
                                    {
                                        "id": 2,
                                        "option": "正则trim(str)方法"
                                    }
                                ],
                                "answer": [1,3],
                                "analysis": "自行解决2"
                            },
                            'status': 0,
                            'msg': '状态描述'
                        }
                    })
                } 


            });
        }
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
};