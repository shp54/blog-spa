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