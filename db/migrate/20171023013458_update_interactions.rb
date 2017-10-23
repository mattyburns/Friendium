class UpdateInteractions < ActiveRecord::Migration[5.1]
  def up
    change_column_null(:interactions, :friends_id, false)
  end

  def down
    change_column_null(:interactions, :friends_id, true)
  end
end
