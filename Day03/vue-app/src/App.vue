<template>
  <div id="container">
    <div id="sidebar">
      <span @mousedown="dragRow">Row</span>
      <span @mousedown="dragCol">Col</span>
      <span @mousedown="dragBtn">Button</span>
    </div>
    <div id="editPanel">
      <div class="row" v-for="row of rows" v-bind:key="row">row
        <div class="col" v-for="col of row.cols" v-bind:key="col">col
          <button>123</button>
        </div>
        <div class="col">col
          <button>123</button>
        </div>
      </div>
    </div>
    <div id="dragable" :style="{left: drag.x + 'px', top: drag.y + 'px'}" v-if="drag.isDragging">dragable</div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data: () => ({
    drag: {
      x0: 0,
      y0: 0,
      dx: 0,
      dy: 0,
      x: 0,
      y: 0,
      type: 'none',
      isDragging: false
    },
    rows: {
      type: 'row',
      height: 300,
      cols: [
        {
          type: 'col',
          width: 300,
          children: [
            {
              type: 'btn',
              content: '按钮'
            }
          ]
        }
      ]
    }
  }),
  components: {

  },
  methods: {
    dragStart (type) {
      this.drag.type = type
      this.drag.isDragging = true
      let move = e => {
        this.drag.x = e.clientX
        this.drag.y = e.clientY
        let [dx, dy] = [e.clientX - this.drag.x0, e.clientY - this.drag.y0]
        console.log(dx, dy)
      }
      let up = () => {
        document.removeEventListener('mousemove', move)
        document.removeEventListener('mouseup', up)
        this.drag.isDragging = false
      }
      document.addEventListener('mousemove', move)
      document.addEventListener('mouseup', up)
    },
    dragRow () {
      this.dragStart('row')
    },
    dragCol () {
      this.dragStart('col')
    },
    dragBtn () {
      this.dragStart('btn')
    }
  }
}
</script>

<style>
#container {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0;
  display: flex;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
}
#sidebar {
  width: 180px;
  background-color: #eee;
}
#sidebar>* {
  width: 60px;
  height: 60px;
  display: inline-block;
  margin: 10px;
  box-sizing: border-box;
  border: solid 1px black;
  user-select: none;
}
#editPanel {
  flex: 1;
}
.row {
  width: 100%;
  min-height: 300px;
  background-color: #e9e9aa;
  display: flex;
  padding: 20px;
  box-sizing: border-box;
  margin-top: 10px
}
.col {
  height: 200px;
  background-color: lightblue;
  min-width: 200px;
  margin: 10px;
}
#dragable {
  width: 60px;
  height: 60px;
  box-sizing: border-box;
  border: solid 1px black;
  position: absolute;
}
</style>
