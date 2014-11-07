get '/things' do # get all things
  @things = Thing.all

  erb :"things/all", locals:{things: @things}
end

get '/thing/:id' do |id| # get specific thing by id
  @thing = Thing.find(id)

  erb :"thing/single", locals:{thing: @thing}
end

get '/categories/:id/article/:article_id/edit' do |id, article_id| # get edit
  @category = Category.find(id)
  @article = Article.find(article_id)
  erb :'article/edit'
end

put '/categories/:id/article/:article_id' do |id, article_id| # post edit
  @article.update(params[:article])

  redirect "/categories/#{id}/article/#{article_id}"
end

delete "/categories/:id/article/:article_id" do |id, article_id| # delete post route
  @article.destroy

  redirect "/categories/#{@category.id}>"
end
