class CreateInteractions < ActiveRecord::Migration[5.1]
  def change
    create_table :interactions do |t|
      t.belongs_to :friends
      t.string :type, null: false
      t.text :notes
      t.date :date_of_interaction, null: false

      t.timestamps
    end
  end
end
