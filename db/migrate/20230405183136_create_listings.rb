class CreateListings < ActiveRecord::Migration[7.0]
  def change
    create_table :listings do |t|
      t.string :title, null: false
      t.text :description, null: false
      t.string :address, null: false
      t.string :city, null: false
      t.string :country, null: false
      t.float :longitude, null: false
      t.float :latitude, null: false
      t.float :price, null: false
      t.integer :num_beds, null: false
      t.integer :num_rooms, null: false
      t.integer :num_bathrooms, null: false
      t.references :host, null: false, foreign_key: {to_table: :users}

      t.timestamps
    end
  end
end
