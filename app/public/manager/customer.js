Snatch.Customer = {


  

  init: function() {
    this.callbacks();    
  }, 

  callbacks: function(){
    $(".btn-customer-add").on("click", Snatch.Customer.render.add);      
    $(".btn-customer-get").on("click", Snatch.Customer.render.get);      
    $(".btn-customer-alt").on("click", Snatch.Customer.render.alt);      
    $(".btn-customer-list").on("click",Snatch.Customer.render.list);
  },

  paginate: {
    
    indexPage: 0,
    rowsPerPage: 3,

    next: function(){
      Snatch.Customer.paginate.indexPage++;
    },

    previous: function(){
      
      Snatch.Customer.paginate.indexPage--;
    }
  },

  service: {

    add: function(data, cb){
      var result = false;
      $.ajax({
        url: "/api/customer/add",
        type: "POST",
        async:false,
        dataType : "json",
        data: data,
        success: cb
      });
      return result;
    },

    get: function(data){
      var result = false;
      $.ajax({
        url: "/api/customer/get",
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
        url: "/api/customer/alt",
        type: "POST",
        async:false,
        dataType : "json",
        data: data,
        success: function( response ) {

        }
      });
      return result;
    },

    list: function(data){
      data.customerFirstName = '';
      var result = false;
      $.ajax({
        url: "/api/customer/list",
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

    clear: function(){
      $("#txt_customerFirstName").val('');
      $("#txt_customerLastName").val('');
      $("#txt_customerEmail").val('');
      $("#txt_customerAddress").val('');
    },

    add: function(){
      result = Snatch.Customer.service.add({
        customerFirstName:$("#txt_customerFirstName").val(),
        customerLastName:$("#txt_customerLastName").val(),
        customerEmail: $("#txt_customerEmail").val(),
        customerAddress: $("#txt_customerAddress").val(),
        customerImage: $("#txt_imgFile").val()
      }, function(res) {
        Snatch.Customer.render.list();
      });
    },

    get: function(){
      result = Snatch.Customer.service.get({
        customerID: 2
      });
    },

    alt: function(){
      result = Snatch.Customer.service.alt({
        customerID: 2,
        customerFirstName: $("#txt_customerFirstName").val(),
        customerLastName: $("#txt_customerLastName").val(),
        customerEmail: $("#txt_customerEmail").val()
      });
    },
  
    list: function(){
      result = Snatch.Customer.service.list({
        customerFirstName: $("#txt_customerFirstName").val(),
        indexPage: 0,
        rowPerPage: 5
      });
      var tpl = Handlebars.compile($("#tpl_tblCustomer").html());
      
      console.info("tpl",tpl({list: result.rows}));
      /*
      var html = Handlebars.registerHelper('fullName', function(person) {
        return person.firstName + " " + person.lastName;
      });
      */
      $("#div_tblCustomer").html(tpl({list: result.rows}));
    },

  }
}
