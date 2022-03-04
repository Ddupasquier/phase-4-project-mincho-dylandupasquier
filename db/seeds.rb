User.destroy_all


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

byebug

puts result if res.is_a?(Net::HTTPSuccess)

#API KEY
#JeDMqwE7q57ugacqrZEIMlH7gDH3AJrcRBRuxoYV
