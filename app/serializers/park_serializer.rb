class ParkSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :latitude, :longitude, :states, :weatherInfo
  has_many :images
end
