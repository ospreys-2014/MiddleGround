post '/results' do

  response = yelp_api_search(params)

  if request.xhr?
    p params
    response.to_json
  else
    p "test failed"
    "test failed".to_json
  end

end