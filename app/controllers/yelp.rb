post '/results' do

  response = yelp_api_search({ latitude: 37.7577, longitude: -122.4376 })

  if request.xhr?
    response.to_json
  else
    p "test failed"
    "test failed".to_json
  end

end