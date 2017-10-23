class UpdateInteractions < ActiveRecord::Migration[5.1]
  def up
    change_column_null(:interactions, :friend_id, false)
  end

  def down
    change_column_null(:interactions, :friend_id, true)
  end
end
