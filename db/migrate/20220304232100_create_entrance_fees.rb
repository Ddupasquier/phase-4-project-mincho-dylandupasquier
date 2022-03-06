class CreateEntranceFees < ActiveRecord::Migration[6.1]
  def change
    create_table :entrance_fees do |t|
      t.string :cost
      t.string :description
      t.string :title
      t.belongs_to :park
    end
  end
end
