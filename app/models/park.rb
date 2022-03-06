class Park < ApplicationRecord
    has_many :activities
    has_many :entrance_fees
    has_many :images
    has_many :operatingHours
end
