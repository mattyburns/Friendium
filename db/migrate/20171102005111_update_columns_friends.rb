class UpdateColumnsFriends < ActiveRecord::Migration[5.1]

  def up
    rename_column :friends, :first_name, :full_name
    rename_column :friends, :last_name, :preferred_name
    add_column :friends, :preferred_pronouns, :string
  end

  def down
    rename_column :friends, :full_name, :first_name
    rename_column :friends, :preferred_name, :last_name
    remove_column :friends, :preferred_pronouns
  end
end
