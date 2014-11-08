# Does this do anything at all???
get '/articles' do
  # Look in app/views/index.erb
  erb :'articles/articles'
end


# CREATE ARTICLE
post '/articles' do
  p params
  article = Article.new(params[:article])
  article.keygen
  article.save
  p article.keygen

  redirect to("/#{params[:article][:category_id]}")
end

['/articles/:id', '/articles/:id/edit'].each do |route|
  before route do |id|
    p id
    @article = Article.find(id)
  end
end

# SHOW ARTICLE
get '/articles/:id' do |id|
  # @article = Article.find(id)
  erb :'articles/show'
end

# EDIT ARTICLE
get '/articles/:id/edit' do |id|
  @key = params[:key]
  p params
  # @article = Article.find(id)
  if(@article.key == @key)
    erb :'articles/edit'
  else
    redirect to("/articles/#{@article.id}")
  end
end

put '/articles/:id' do |id|
  # @article = Article.find(id)
  @article.update(params[:article])
  redirect to("/articles/#{@article.id}")

end

# DELETE ARTICLE

delete '/articles/:id' do |id|
  Article.find(id).destroy
  redirect to("/#{@article.category_id}")
end
