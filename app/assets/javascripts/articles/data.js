let ArticlesCollection = Backbone.Collection.extend({
	url: "/articles"
})

let ArticleModel = Backbone.Model.extend({ 
	collection: ArticlesCollection 
})