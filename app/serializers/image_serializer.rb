class ImageSerializer < ActiveModel::Serializer
  attributes :id, :title, :caption, :url, :altText
end
