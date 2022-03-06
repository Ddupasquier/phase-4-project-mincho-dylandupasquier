class CreateOperatingHours < ActiveRecord::Migration[6.1]
  def change
    create_table :operatingHours do |t|
      t.string :description
      t.belongs_to :park
      #INCLUDES AN ARRAY OF HASH, ADD ON LATER IF NEEDED
    end
  end
end
