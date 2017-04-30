// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
//= require jquery
//= require underscore/underscore
//= require backbone/backbone
//= require handlebars/dist/handlebars
//= require articles/data
//= require articles/model-view
//= require articles/collection-view

$(() => { //Kickstart the backbone application	
	let articles = (window.articles) ? new ArticlesCollection(window.articles) : new ArticlesCollection() //Bootstrap it from server data	
	let articlesTable = new ArticlesView({ collection: articles }) 	//Attach view to DOM
})