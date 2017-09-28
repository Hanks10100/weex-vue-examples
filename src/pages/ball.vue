<template>
  <div class="container" >
    <div ref="my" class="box" @touchstart="ontouchstart"></div>
  </div>
</template>

<style scoped>
  .container {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    padding: 48px;
    background-color:#00B0FF;
  }
  .box {
    width: 300px;
    height: 300px;
    border-radius: 150px;
    background-color: #76FF03;
    align-items:center;
    justify-content:center;

  }
</style>

<script>
  const eb = weex.requireModule('binding')
  export default {
    data () {
      return {
        x: 0,
        y: 0,
        isInAnimation: false,
        gesToken:0
      }
    },
    methods: {

      ontouchstart (event) {
        var self = this;
        if(this.isInAnimation  === true) {
          console.log("we are in animation, drop pan gesture...")
          if(this.gesToken != 0) {
            eb.unbind({
              eventType:'pan',
              token:self.gesToken
            })
            this.gesToken = 0;
          }
          return
        }

        var my = this.$refs.my.ref;
        var expression_x_origin = "x+"+this.x;
        var expression_x_transformed = "{\"type\":\"+\",\"children\":[{\"type\":\"Identifier\",\"value\":\"x\"},{\"type\":\"NumericLiteral\",\"value\":"+this.x+"}]}"

       var expression_y_origin = "y+"+this.y;
       var expression_y_transformed = "{\"type\":\"+\",\"children\":[{\"type\":\"Identifier\",\"value\":\"y\"},{\"type\":\"NumericLiteral\",\"value\":"+this.y+"}]}"

        // 拖拽
       var gesTokenObj = eb.bind({
          anchor:my,
          eventType:'pan',
          props: [
              {element:my, property:'transform.translateX',expression:{
                transformed:expression_x_transformed,
                origin:expression_x_origin
              }},
              {element:my, property:'transform.translateY',expression:{
                transformed:expression_y_transformed,
                origin:expression_y_origin
              }}
            ]
        }, function(e) {
          if(e.state === 'end') {
             self.x += e.deltaX;
             self.y += e.deltaY;

             //anim
             self.bindTiming();
          }
        })

        self.gesToken = gesTokenObj.token;

      },
      bindTiming() {

       this.isInAnimation = true;

	     var my = this.$refs.my.ref;
	     var self = this;

	     //should equal with timing duration
	     var exit_origin = "t>1000";
	     var exit_transformed = "{\"type\":\">\",\"children\":[{\"type\":\"Identifier\",\"value\":\"t\"},{\"type\":\"NumericLiteral\",\"value\":1000}]}";


        var changed_x;
        var final_x;
        var final_y;
        if(self.x > (750-50*2)/2) {//right
          changed_x = 550-self.x;
          final_x = 550;
        } else {
          changed_x = 0-self.x;
          final_x = 0;
        }

        var totalHeight = 1000;
        var changed_y;
        if(self.y > totalHeight/2 ) {
          changed_y = totalHeight-600-self.y;
          final_y = totalHeight-600;
        } else {
          changed_y = 0-self.y;
          final_y = 0;
        }

       var expression_y_origin = "easeOutElastic(t,"+self.y+","+changed_y+"1000)";
       var expression_y_transformed = "{\"type\":\"CallExpression\",\"children\":[{\"type\":\"Identifier\",\"value\":\"easeOutElastic\"},{\"type\":\"Arguments\",\"children\":[{\"type\":\"Identifier\",\"value\":\"t\"},{\"type\":\"NumericLiteral\",\"value\":"+self.y+"},{\"type\":\"NumericLiteral\",\"value\":"+changed_y+"},{\"type\":\"NumericLiteral\",\"value\":1000}]}]}"


       var expression_x_origin = "easeOutElastic(t,"+self.x+","+changed_x+",1000)"
       var expression_x_transformed = "{\"type\":\"CallExpression\",\"children\":[{\"type\":\"Identifier\",\"value\":\"easeOutElastic\"},{\"type\":\"Arguments\",\"children\":[{\"type\":\"Identifier\",\"value\":\"t\"},{\"type\":\"NumericLiteral\",\"value\":"+self.x+"},{\"type\":\"NumericLiteral\",\"value\":"+changed_x+"},{\"type\":\"NumericLiteral\",\"value\":1000}]}]}"

	     var result = eb.bind({
          eventType:'timing',
          exitExpression: {
            transformed: exit_transformed,
            origin: exit_origin
          },
          props: [
              {element:my, property:'transform.translateX',expression:{
                transformed:expression_x_transformed,
                origin:expression_x_origin
              }},
              {element:my, property:'transform.translateY',expression:{
                transformed:expression_y_transformed,
                origin:expression_y_origin
              }}
            ]

        },function(e){
            if(e.state === 'end' ||
                e.state === 'exit') {
              // reset x & y
              self.x = final_x;
              self.y = final_y;
              self.isInAnimation = false;
            }
        })

      }


    }
  }
</script>
