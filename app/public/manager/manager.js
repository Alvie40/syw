$(document).ready(function($) {
  $.ajax({
    url: "manager/manager-templates.hbs",
    async:false,
    cache: true,
	  success: function(data) {
		  $('body').append(data);		
	}});

  
Snatch.Customer.init();
  //Snatch.Employee.render.list();

  $('#ftco-loader').removeClass('show');
  
});