10.times do |c|
  Category.create(title:Faker::Commerce.department)
end

100.times do |a|
  Article.create(title:Faker::Commerce.product_name, price:Faker::Number.number(3), description:Faker::Lorem.sentence(10),email:Faker::Internet.email, key:Faker::Lorem.characters(10),category_id:Category.all.sample.id)
end
