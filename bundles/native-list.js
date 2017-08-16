// { "framework": "Vanilla" }

// http://dotwe.org/vue/f06d1c9c5c90aea3271b3dabb2888ab1

function generateLabels (N) {
  var array = []
  for (let i = 1; i <= N; i++) {
    array.push({
      templateId: ['AAA', 'BBB'][Math.floor(Math.random() * 2)],
      label: i
    })
  }
  return array
}

// <list>
sendTasks(id,[{module:'dom',method:'createBody',args:[{"ref":"_root","type":"list","attr":{
  "listData":generateLabels(20),

  // switchKey 指定数组中哪个属性用于区别不同的 cell 类型
  "switchKey":"templateId"

},"style":{}}]}],-1)

// <cell> A
sendTasks(id,[{module:'dom',method:'addElement',args:["_root",{"ref":"4","type":"cell",
  "attr":{

    // case 属性指定了当前 cell 的类型
    "case":"AAA",

    "append":"tree"
  },"style":{},"children":[{"ref":"5","type":"div","attr":{

    // 凡是遇到 @binding 的属性，都从数组中取值
    "tid":{"@binding":"templateId"}

  },"style":{"width":650,"marginLeft":50,"marginTop":5,"marginBottom":5,"flexDirection":"column","justifyContent":"center","borderWidth":2,"borderStyle":"solid","height":80,"borderColor":"rgb(162,217,192)","backgroundColor":"rgba(162,217,192,0.2)"},
  "children":[{"ref":"6","type":"text",
  "attr":{

    // text 节点内的 @binding 格式
    "value": ["AAA: ", { "@binding": "label" }]
  },
  "style":{"fontSize":30,"textAlign":"center","color":"#41B883"}}]}]},-1]}],-1
)

// <cell> B
sendTasks(id,[{module:'dom',method:'addElement',args:["_root",{"ref":"7","type":"cell","attr":{"case":"BBB","append":"tree"},"style":{},"children":[{"ref":"8","type":"div","attr":{},"style":{"width":650,"marginLeft":50,"marginTop":5,"marginBottom":5,"flexDirection":"column","justifyContent":"center","borderWidth":2,"borderStyle":"solid"},"children":[{"ref":"9","type":"text","attr":{"value":"BBB: [[label]]"},"style":{"fontSize":30,"textAlign":"center","color":"#00B4FF"}}]}]},-1]}],-1)
sendTasks(id,[{module:'dom',method:'createFinish',args:[]}],-1)
