User.destroy_all
Park.destroy_all
Activity.destroy_all

puts "Users..."
User.create!(username: "Dylan Dupasquier", password: "flatironschool", city: "Portland", state: "Oregon")

require 'uri'
require 'net/http'
require 'json'

puts "Importing API..."
uri = URI('https://developer.nps.gov/api/v1/parks?limit=10&start=0&api_key=JeDMqwE7q57ugacqrZEIMlH7gDH3AJrcRBRuxoYV')
res = Net::HTTP.get_response(uri)
data = res.body
result = JSON.parse(data)['data']

result.each do |park|
    p = Park.create(name: park['name'], description: park['description'], latitude: park['latitude'], longitude: park['longitude'], states: park['states'], directions: park['directionsInfo'], weatherInfo: park['weatherInfo'])
    park['activities'].each do |activity|
        p.activities.create(name: activity['name'])
    end
end


#API KEY
#JeDMqwE7q57ugacqrZEIMlH7gDH3AJrcRBRuxoYV
