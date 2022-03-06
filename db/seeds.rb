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
    park['entranceFees'].each do |fee|
        p.entrance_fees.create(cost: fee['cost'], description: fee['description'], title: fee['title'])
    end
    park['images'].each do |image|
        p.images.create(title: image['title'], caption: image['caption'], url: image['url'], altText: image['altText'])
    end
   
end

#i need to create the other instances based on associations but running into error
#then finalize the routes
#establish controllers based on the routes
#SHOULD I USE SERIALIZERS TO RESTRICT API IMPORTS


#API KEY
#JeDMqwE7q57ugacqrZEIMlH7gDH3AJrcRBRuxoYV
