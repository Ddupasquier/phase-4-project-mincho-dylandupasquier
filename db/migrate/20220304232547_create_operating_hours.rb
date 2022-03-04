class CreateOperatingHours < ActiveRecord::Migration[6.1]
  def change
    create_table :operating_hours do |t|
      t.string :description
      #INCLUDES AN ARRAY OF HASH, ADD ON LATER IF NEEDED
    end
  end
end
