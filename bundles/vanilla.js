// { "framework": "Vanilla" }

sendTasks(id,[{module:'dom',method:'createBody',args:[{
  "ref":"_root","type":"list","style":{},
  "attr":{
    "repeatData":[{"templateId":"BBB","label":16}]
  }
}]}],-1)

sendTasks(id,[{module:'dom',method:'addElement',args:["_root",{
  "ref":"4","type":"cell","attr":{"templateId":"AAA","append":"tree"},"style":{},
  "children":[{
    "ref":"5","type":"div","attr":{},
    "style":{"width":650,"height":80,"marginLeft":50,"marginTop":5,"marginBottom":5,"flexDirection":"column","justifyContent":"center","borderWidth":2,"borderStyle":"solid","borderColor":"rgb(162,217,192)","backgroundColor":"rgba(162,217,192,0.2)"},
    "children":[{
      "ref":"6","type":"text",
      "attr":{
        "value": "AAA: @label",
        "value": ["AAA: ", { "binding": "label" }]
      },
      "style":{"fontSize":30,"textAlign":"center","color":"#41B883"}
    }]
  }]},-1]
}],-1)

sendTasks(id,[{module:'dom',method:'addElement',args:["_root",{"ref":"7","type":"cell","attr":{"templateId":"BBB","append":"tree"},"style":{},"children":[{"ref":"8","type":"div","attr":{},"style":{"width":650,"height":120,"marginLeft":50,"marginTop":5,"marginBottom":5,"flexDirection":"column","justifyContent":"center","borderWidth":2,"borderStyle":"solid","borderColor":"rgb(0,180,255)","backgroundColor":"rgba(0,180,255,0.2)"},"children":[{"ref":"9","type":"text","attr":{"value":"BBB: @label"},"style":{"fontSize":30,"textAlign":"center","color":"#00B4FF"}}]}]},-1]}],-1)
sendTasks(id,[{module:'dom',method:'createFinish',args:[]}],-1)
