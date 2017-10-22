class CreateFriends < ActiveRecord::Migration[5.1]
  def change
    create_table :friends do |t|
      t.belongs_to :user
      t.string :first_name, null: false
      t.string :last_name
      t.string :email
      t.string :phone_number
      t.string :street_address
      t.string :city
      t.string :state
      t.string :zip_code

      t.timestamps
    end
  end
end
