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

/* <h2>Comments</h2>
<%= render @article.comments %>

<h2>Add a comment:</h2>
<%= render 'comments/form' %> */