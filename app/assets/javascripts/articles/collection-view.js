let ArticlesView = Backbone.View.extend({
	el: "#articles",
	events: {
		"click #new-article": "newArticle"
	},	
	initialize(opts){
		this.listenTo(this.collection, "change", this.render)
		if(this.collection.length > 0){
			this.render()
		} else {
			this.collection.fetch().done(() => { this.render() })
		}
		this.listenTo(Backbone, "showArticleForm", this.createArticleForm)
	},
	render(){
		this.collection.each((model) => {	
			this.$("table").append(new ArticleModelView({ model }).render().$el)
		})
		return this
	},
	newArticle(e){
		e.preventDefault()
		Backbone.trigger("showArticleForm")
	},
	createArticleForm(model){
		console.log("Showing", model)
		this.$("#article-form").html(new ArticlesFormView({ model }).render().$el)
	}
})