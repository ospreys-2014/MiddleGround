class Article < ActiveRecord::Base
  # Remember to create a migration!
  belongs_to :category

  def keygen
    self.key = Faker::Lorem.characters(10)
  end
end
