let ArticleDisplayView = Backbone.View.extend({
	template: Handlebars.compile(`<p>
			<strong>Title:</strong>
			{{title}}
		</p>

		<p>
			<strong>Text:</strong>
			{{text}}
		</p>`),
	render(){
		this.$el.html(this.template(this.model.toJSON()))
		return this
	}
})