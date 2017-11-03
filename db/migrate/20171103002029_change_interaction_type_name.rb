class ChangeInteractionTypeName < ActiveRecord::Migration[5.1]
  def change
    rename_column :interactions, :type, :interaction_type
  end
end
