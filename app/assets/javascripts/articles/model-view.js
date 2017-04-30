
let ArticleModelView = Backbone.View.extend({
	tagName: "tr",
	template: Handlebars.compile(`		
		<td>{{title}}</td>
		<td>{{text}}</td>
		<td><a href="/articles/{{id}}" id="show-article">Show</a></td>
		<td><a href="/articles/{{id}}/edit" id="edit-article">Edit</a></td>
		<td><a href="" id="delete-article">Delete</a></td>
	`.trim()),
	events: {
		"click #delete-article": "deleteArticle",
		"click #edit-article": "editArticle",
		"click #show-article": "showArticle"
	},
	initialize(opts){
		this.listenTo(this.model, "destroy", this.remove);
	},
	render(){
		this.$el.html(this.template(this.model.toJSON()))
		return this
	},
	deleteArticle(e){
		e.preventDefault()
		this.model.destroy()
	},
	editArticle(e){
		e.preventDefault()
		Backbone.trigger("showArticleForm", this.model)
	},
	showArticle(e){
		e.preventDefault()
		Backbone.trigger("showArticle", this.model)
	}
})
