class CreateParks < ActiveRecord::Migration[6.1]
  def change
    create_table :parks do |t|
      t.string :name
      t.string :description
      t.string :latitude
      t.string :longitude
      t.string :states 
      t.string :directions
      t.string :weatherInfo
    end
  end
end
