
def yelp_api_search(coordinates)
  client = Yelp::Client.new({ consumer_key: ENV['YELP_CONSUMER_KEY'],
    consumer_secret: ENV['YELP_CONSUMER_SECRET'],
    token: ENV['YELP_ACCESS_TOKEN'],
    token_secret: ENV['YELP_ACCESS_SECRET']
    })
  params = { term: 'restaurant', limit: 5, sort: 2, radius_filter: 1800 }
  client.search_by_coordinates(coordinates, params)
end