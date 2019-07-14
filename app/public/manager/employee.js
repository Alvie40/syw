Snatch.Employee = {

  init: function() {
    this.callbacks();
  }, 

  callbacks: function(){
    $(".btn-employee-add").on("click", Snatch.Employee.render.add);      
    $(".btn-employee-get").on("click", Snatch.Employee.render.get);      
    $(".btn-employee-alt").on("click", Snatch.Employee.render.alt);      
    $(".btn-employee-list").on("click",Snatch.Employee.render.list);
  },

  service: {

    add: function(data){
      var result = false;
      $.ajax({
        url: "/api/employee/add",
        type: "POST",
        async:false,
        dataType : "json",
        data: data,
        success: function( response ) {
          result = response;
        }
      });
      return result;
    },

    get: function(data){
      var result = false;
      $.ajax({
        url: "/api/employee/get",
        type: "POST",
        async:false,
        dataType : "json",
        data: data,
        success: function( response ) {
          
        }
      });
      return result;
    },

    alt: function(data){
      var result = false;
      $.ajax({
        url: "/api/employee/alt",
        type: "POST",
        async:false,
        dataType : "json",
        data: data,
        success: function( response ) {
          console.log( response );
        }
      });
      return result;
    },

    list: function(data){
      var result = false;
      $.ajax({
        url: "/api/employee/list",
        type: "POST",
        async:false,
        dataType : "json",
        data: data,
        success: function( response ) {
          result = response;
        }
      });
      return result;
    }

  },
  
  render: {

    add: function(){
      service.add({
        employeeFirstName:'leonardo',
        employeeLastName: 'torres',
        employeeEmail: 'email@domain.com'
      })
    },

    get: function(){
      result = Snatch.Employee.service.get({
        employeeID: 2
      })
    },

    alt: function(){
      result = Snatch.Employee.service.alt({
        employeeID: 2,
        employeeFirstName: 'leonardo',
        employeeLastName: 'torres',
        employeeEmail: 'email@domain.com'
      })
    },
  
    list: function(){
      result = Snatch.Employee.service.list({
        employeeFirstName: 'leo',
        indexPage: 0,
        rowPerPage: 5
      });
      var tpl = Handlebars.compile($("#tpl_tblEmployee").html());      
      /*
      var html = Handlebars.registerHelper('fullName', function(person) {
        return person.firstName + " " + person.lastName;
      });
      */
      console.log('list customer dataaaa===>>', result.rowss)
      $("#div_tblEmployee").html(tpl({list: result.rows}));
    },

  }
}

Snatch.Employee.init();