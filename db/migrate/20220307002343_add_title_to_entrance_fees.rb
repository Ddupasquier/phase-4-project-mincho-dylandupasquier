class AddTitleToEntranceFees < ActiveRecord::Migration[6.1]
  def change
    add_column :entrance_fees, :title, :string
  end
end
