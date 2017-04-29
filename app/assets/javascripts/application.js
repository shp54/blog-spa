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
//= require turbolinks
//= require_tree .

$(() => { //Kickstart the backbone application
	let ArticlesCollection = Backbone.Collection.extend({
		url: "/articles"
	})

	let ArticlesView = Backbone.View.extend({
		el: "#articles",
		template: Handlebars.compile($("#article-list-template").text()),
		initialize(opts){
			this.listenTo(this.collection, "change", this.render)
			this.collection.fetch().done(() => { this.render() })
		},
		render(){
			this.$el.html(this.template(this.collection.toJSON()))
			return this
		}
	})
	
	//Attach view to DOM
	let articles = new ArticlesCollection() 
	let articlesTable = new ArticlesView({ collection: articles })
})