new Vue({
    el: '#app',
    data: {
      result: '',
      numbers: [1,2,3,4,5,6,7,8,9,0],
      operations: ['+','-','*','/'],
    },
    methods: {
      input: function(char) {
        this.result = this.result.toString();
        this.result+=char;
      },
      reset: function() {
        this.result = '';
      },
      calc: function() {
        this.result = eval(this.result);
      }
    }
  })

  new Vue({
    el: '#table',
    data: {
        items: []
    },
    created: function() {
        fetch('jsoncalc.json') 
            .then(response => response.json())
            .then(data => {
                this.items = data;
            });
    }
});