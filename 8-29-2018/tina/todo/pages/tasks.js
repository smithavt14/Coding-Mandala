const { Page } = require('../libraries/tina.min.js')
let page = null

Page.define({
  data: {
    tasks: [
    {
      id: 1,
      name: 'Eat',
      done: false,
    },
    {
      id: 2,
      name: 'Sleep',
      done: false,
    },
    {
      id: 3,
      name: 'Pray',
      done: true,
    }
    ]
  },
  compute ({ tasks }) {
    return {
      tasks_list: tasks.map( t => `${t.name} [${t.done ? 'x' : ''}]`)
    }
  },
  onLoad () {
    page = this
  },
  methods: {
    newTask (e) {
      let task = { id: page.data.tasks.length+1, name: e.detail.value, done: false }
      console.log(task)
      page.data.tasks.push(task)

      page.setData({tasks: page.data.tasks })

    }
  }
})
