class CreateImages < ActiveRecord::Migration[6.1]
  def change
    create_table :images do |t|
      t.string :title
      t.string :altText
      t.string :caption
      t.string :url
      t.belongs_to :park
    end
  end
end
