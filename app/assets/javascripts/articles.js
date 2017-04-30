let ArticlesCollection = Backbone.Collection.extend({
	url: "/articles"
})

let ArticleModel = Backbone.Model.extend({ 
	collection: ArticlesCollection 
})

let ArticleModelView = Backbone.View.extend({
	tagName: "tr",
	template: Handlebars.compile(`		
		<td>{{title}}</td>
		<td>{{text}}</td>
		<td><a href="/articles/{{id}}">Show</a></td>
		<td><a href="/articles/{{id}}/edit">Edit</a></td>
		<td><a href="" id="delete-article">Delete</a></td>
	`.trim()),
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
		if(this.collection.length > 0){
			this.render()
		} else {
			this.collection.fetch().done(() => { this.render() })
		}
	},
	render(){
		this.collection.each((model) => {	
			this.$el.append(new ArticleModelView({ model }).render().$el)
		})
		return this
	}
})
