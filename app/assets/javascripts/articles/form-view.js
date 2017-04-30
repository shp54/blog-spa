let ArticlesFormView = Backbone.View.extend({
	template: Handlebars.compile(`<form action="">
		{{#if errors}}
			<div id="error_explanation">
				<h2>
					{{errors.count}} errors prohibited this article from being saved
				</h2>
				<ul>
					{{#each errors.full_messages as |msg|}}
					<li>{{msg}}</li>
					{{/each}}
				</ul>
			</div>
		{{/if}}
		<p>
			<label for="article_title">Title</label>
			<input type="text" name="article[title]" id="article_title" value="{{title}}" />
		</p>
		<p>
			<label for="article_text">Text</label><br>
			<textarea name="article[text]" id="article_text">{{text}}</textarea>
		</p>
		<p>
			<input type="submit" name="Create Article">
		</p>
	</form>`),
	events: {
		"click input[type='submit']": "submitForm"
	},
	render(){
		if(this.model){
			this.$el.html(this.template(this.model.toJSON()))
		} else {
			this.$el.html(this.template())
		}
		return this
	},
	submitForm(e){
		e.preventDefault()
		this.model = this.model || new ArticleModel();
		this.model.save({
			title: this.$("#article_title").val(),
			text: this.$("#article_text").val()
		})
	}
})