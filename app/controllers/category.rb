get '/' do
  # Look in app/views/index.erb
  @categories = Category.all
  erb :index
end

get '/:id' do |id|
  @category = Category.find(id)
  @articles = @category.articles
  erb :'articles/articles'
end
