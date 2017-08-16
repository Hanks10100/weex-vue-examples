// { "framework": "Vanilla" }

// http://dotwe.org/vue/2a8ffdc4ca2931f3cc306993179f9f49

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

sendTasks(id,[{module:'dom',method:'createBody',args:[{
  "ref":"_root","type":"list",
  "attr":{
    "listData": generateLabels(30),
    "switchKey":"templateId"
  },
  "style":{}}]}], -1
)


sendTasks(id,[{module:'dom',method:'addElement',args:["_root",{"ref":"4","type":"cell",
  "attr":{
    "case":"AAA",
    "append":"tree"
  },
  "style":{},"children":[{"ref":"5","type":"div","attr":{},
  "style":{"width":650,"height":80,"marginLeft":50,"marginTop":5,"marginBottom":5,"flexDirection":"column","justifyContent":"center","borderWidth":2,"borderStyle":"solid","borderColor":"rgb(162,217,192)","backgroundColor":"rgba(162,217,192,0.2)"},
  "children":[{"ref":"6","type":"text",
  "attr":{
    "value": ["AAA: ", { "@binding": "label" }]
  },
  "style":{"fontSize":30,"textAlign":"center","color":"#41B883"}}]}]},-1]}], -1
)

sendTasks(id,[{module:'dom',method:'addElement',args:["_root",{"ref":"7","type":"cell",
  "attr":{
    "case":"BBB",
    "append":"tree"
  },
  "style":{},"children":[{"ref":"8","type":"div","attr":{},
  "style":{"width":650,"height":120,"marginLeft":50,"marginTop":5,"marginBottom":5,"flexDirection":"column","justifyContent":"center","borderWidth":2,"borderStyle":"solid","borderColor":"rgb(0,180,255)","backgroundColor":"rgba(0,180,255,0.2)"},
  "children":[{"ref":"9","type":"text",
  "attr":{
    "value": ["BBB: ", { "@binding": "label" }]
  },
  "style":{"fontSize":30,"textAlign":"center","color":"#00B4FF"}}]}]},-1]}], -1
)


sendTasks(id,[{module:'dom',method:'createFinish',args:[]}],-1)
