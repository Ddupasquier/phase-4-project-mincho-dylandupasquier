class CreateOperatingHours < ActiveRecord::Migration[6.1]
  def change
    create_table :operatingHours do |t|
      t.string :description
      #INCLUDES AN ARRAY OF HASH, ADD ON LATER IF NEEDED
    end
  end
end
