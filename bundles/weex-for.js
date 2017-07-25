// { "framework": "Vanilla" }

// reference: http://dotwe.org/vue/e9a4fcde47339263a8bc547a3c765278

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

// render list
sendTasks(id, [{module: 'dom',method: 'createBody', args:[{
  "ref":"_root",
  "type":"list",
  "attr":{
    "repeatData": generateLabels(30)
  }
}]}], -1)

// render cell
sendTasks(id, [{module: 'dom',method: 'addElement', args:["_root", {
  "ref":"4","type":"cell","style":{},
  "attr":{
    "append":"tree",
    "templateId": "AAA"
  },
  "children":[{
    "ref":"5","type":"div","attr":{},
    "style":{"width":650,"height":80,"marginLeft":50,"marginTop":5,"marginBottom":5,"flexDirection":"column","justifyContent":"center","borderWidth":2,"borderStyle":"solid","borderColor":"rgb(162, 217, 192)","backgroundColor":"rgba(162, 217, 192,0.2)"},
    "children":[{
      "ref":"6","type":"text","style":{"fontSize":30,"textAlign":"center","color":"#41B883"},
      "attr":{
        "value": ["AAA: ", { "@binding": "label" }]
      }
    }]
  }]
}, -1]}], -1)

// render cell
sendTasks(id, [{module: 'dom',method: 'addElement', args:["_root", {
  "ref":"7","type":"cell","style":{},
  "attr":{
    "append":"tree",
    "templateId": "BBB"
  },
  "children":[{
    "ref":"8","type":"div","attr":{},
    "style":{"width":650,"height":120,"marginLeft":50,"marginTop":5,"marginBottom":5,"flexDirection":"column","justifyContent":"center","borderWidth":2,"borderStyle":"solid","borderColor":"rgb(0,180,255)","backgroundColor":"rgba(0,180,255,0.2)"},
    "children":[{
      "ref":"9","type":"text","style":{"fontSize":30,"textAlign":"center","color":"#00B4FF"},
      "attr":{
        "value": ["BBB: ", { "@binding": "label" }]
      }
    }]
  }]
}, -1]}], -1)

sendTasks(id, [{module: 'dom',method: 'createFinish', args:[]}], -1)
