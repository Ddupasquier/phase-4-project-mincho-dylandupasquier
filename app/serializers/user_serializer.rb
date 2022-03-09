class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :city, :state, :phone, :email, :image
end
