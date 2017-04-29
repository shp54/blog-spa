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

	let ArticleModel = Backbone.Model.extend({ 
		collection: ArticlesCollection 
	})

	let ArticleModelView = Backbone.View.extend({
		tagName: "tr",
		template: Handlebars.compile($("#article-row-template").text()),
		events: {
			"click #delete-article": "deleteArticle"
		},
		initialize(opts){
			this.listenTo(this.model, "change", this.render);
			this.listenTo(this.model, "destroy", this.remove);
		},
		render(){
			this.$el.html(this.template(this.model.toJSON()))
			return this
		},
		deleteArticle(e){
			e.preventDefault()
			this.model.destroy()
		}
	})

	let ArticlesView = Backbone.View.extend({
		el: "#articles",
		initialize(opts){
			this.listenTo(this.collection, "change", this.render)
			this.collection.fetch().done(() => { this.render() })
		},
		render(){
			this.collection.each((model) => {	
				this.$el.append(new ArticleModelView({ model }).render().$el)
			})
			return this
		}
	})
	
	//Attach view to DOM
	let articles = new ArticlesCollection() 
	let articlesTable = new ArticlesView({ collection: articles })
})