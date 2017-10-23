class UpdateFriends < ActiveRecord::Migration[5.1]
  def up
    change_column_null(:friends, :user_id, false)
  end

  def down
    change_column_null(:friends, :user_id, true)
  end
end
