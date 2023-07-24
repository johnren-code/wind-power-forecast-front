import Mock from 'mockjs'
//延时200-600毫秒请求到数据
Mock.setup({
    timeout: '200-600'
})


const Random = Mock.Random;
// 发电总量
function countUserNum() {
    const a = Mock.mock({
        success: true,
        data: {
            wind_power1:'@float(10, 100)',
            wind_power2:'@float(10, 100)',
            wind_power3:'@float(10, 100)',
            wind_power4:'@float(10, 100)',
            wind_power5:'@float(10, 100)',
            wind_power6:'@float(10, 100)',
            wind_power7:'@float(10, 100)',
            wind_power8:'@float(10, 100)',
            wind_power9:'@float(10, 100)',
            wind_power10:'@float(10, 100)',
            totalPower: '@float(1000, 2000)',
        }
    })
    // a.data.onlineNum=a.data.totalNum-a.data.offlineNum-a.data.lockNum
    return a
}

// 接口，第一个参数url，第二个参数请求类型，第三个参数响应回调
Mock.mock(new RegExp('countUserNum'), 'get', countUserNum)

// /设备总览 

function countDeviceNum() {
    const a = Mock.mock({
        success: true,
        data: {
            alarmNum: '@integer(100, 1000)',
            offlineNum: '@integer(0, 50)',
            totalNum:698
        }
    })
    a.data.onlineNum=a.data.totalNum-a.data.offlineNum


    return a
}

Mock.mock(new RegExp('countDeviceNum'), 'get', countDeviceNum)

// /设备提醒 

function sbtx() {
    const a = Mock.mock({
        success: true,
        data: {
            "list|20": [
                {
                    provinceName: "@province()",
                    cityName: '@city()',
                    countyName: "@county()",
                    createTime: "@datetime('yyyy-MM-dd HH:mm:ss')",
                    deviceId: "6c512d754bbcd6d7cd86abce0e0cac58",
                    "gatewayno|+1": [11,12,13,14,15,16,17,18,19,20],
                    "onlineState|1": [0, 1],

                }
            ]
        }
    })
    return a
}

Mock.mock(new RegExp('sbtx'), 'get', sbtx)



//中间地图

function centermap(options) {
    let params = parameteUrl(options.url)
    if (params.regionCode && params.regionCode != 'china') {
        const a = Mock.mock({
            success: true,
            data: {
                "dataList|30": [
                    {
                        name: "@city()",
                        value: '@integer(1, 1000)'
                    }
                ],
                regionCode: params.regionCode,//-代表中国
            }
        })
        return a
    } else {
        const a = Mock.mock({
            success: true,
            data: {
                "dataList|8": [
                    {
                        name: "@province()",
                        value: '@integer(1, 1000)'
                    }
                ],
                regionCode: 'china',
            }
        })
        return a
    }

}

Mock.mock(new RegExp('centermap'), 'get', centermap)

// 报警次数

function alarmNum() {
    const a = Mock.mock({
        success: true,
        data: {
            dateList:['2021-11', '2021-12', '2022-01', '2022-02', '2022-03',"2022-04","2022-05","2022-06","2022-07","2022-08","2022-09","2022-10"],
            "numList|12":[
                '@integer(0, 1000)'
            ],
            "numList2|12":[
                '@integer(0, 1000)'
            ],
            "numList3|12":[
                '@integer(0, 1000)'
            ]
        }
    })
    return a
}
Mock.mock(new RegExp('alarmNum'), 'get', alarmNum)

// 实时预警

function ssyj() {
    const a = Mock.mock({
        success: true,
        data: {
            "list|40":[{
                // alertdetail: "@csentence(5,10)",
                "alertdetail|+1": [
                    "高风速报警。风速超过设定的安全范围",
                    "低风速报警。风速过低,无法有效发电",
                    "过温报警。部分组件因温度过高出现故障",
                    "超负荷报警。超过设计负荷运行，设备过载",
                    "电网故障报警。无法正常传输电能至电网",
                    "偏航报警。风力发电机出现偏航现象",
                    "设备故障报警。考虑传感器故障、控制系统故障等",
                ],
                alertvalue: "@integer(1, 10)",
                createtime: "2022-04-19 08:38:33",
                deviceid: null,
                "gatewayno|+1": [11,12,13,14,15,16,17,18,19,20],
                phase: "A1",
                sbInfo: "@csentence(10,18)",
                "terminalno|+1": 101,
                provinceName: "@province()",
                cityName: '@city()',
                countyName: "@county()",
                // 转速、温度、电压、功率
                rotationSpeed: "@float(0,5000)",
                temperature: "@float(20,300)",
                voltage: "@float(0,10000)",
                power: "@float(0,10000)",
            }],
            
        }
    })
    return a
}
Mock.mock(new RegExp('ssyj'), 'get', ssyj)
//安装计划 
function installationPlan() {
    let num=  RandomNumBoth(26,32);
    const a = Mock.mock({
        ["category|"+num]:["@city()"],
        ["barData|"+num]:["@integer(10, 100)"],
    })
    let lineData=[],rateData=[];
    for (let index = 0; index < num; index++) {
        let lineNum = Mock.mock('@integer(0, 100)')+a.barData[index]
        lineData.push(lineNum)
        let rate = a.barData[index] / lineNum;
        rateData.push((rate*100).toFixed(0))
    }
    a.lineData=lineData
    a.rateData=rateData
    return {
        success: true,
        data:a
    }
}
Mock.mock(new RegExp('installationPlan'), 'get', installationPlan)




//报警排名 
function ranking() {
   //多生成几个避免重复 重复会报错
  let num =Mock.mock({"list|48":[{ value:"@integer(50,1000)",name:"风场@integer(11,20)"}]}).list
//   console.log(num);
  let newNum =[],numObj={}
  num.map(item=>{
    if(!numObj[item.name] && newNum.length<8){
        numObj[item.name] =true
        newNum.push(item)
    }
  })
  let arr = newNum.sort((a,b)=>{
    return b.value-a.value
  })
  let a ={
      success:true,
      data:arr
  }
  return a
}
Mock.mock(new RegExp('ranking'), 'get', ranking)
/**
 * @description: min ≤ r ≤ max  随机数
 * @param {*} Min
 * @param {*} Max
 * @return {*}
 */
function RandomNumBoth(Min,Max){
    var Range = Max - Min;
    var Rand = Math.random();
    var num = Min + Math.round(Rand * Range); //四舍五入
    return num;
}
/**
 * @description: 获取路径参数
 * @param {*} url
 * @return {*}
 */
function parameteUrl(url) {
    var json = {}
    if (/\?/.test(url)) {
        var urlString = url.substring(url.indexOf("?") + 1);
        var urlArray = urlString.split("&");
        for (var i = 0; i < urlArray.length; i++) {
            var urlItem = urlArray[i];
            var item = urlItem.split("=");
            console.log(item);
            json[item[0]] = item[1];
        }
        return json;
    }
    return {};
}
