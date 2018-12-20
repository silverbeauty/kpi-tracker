class CreateUserAccountAccesses < ActiveRecord::Migration[5.2]
  def change
    create_table :user_account_accesses do |t|
      t.references :user, index: true, foreign_key: true
      t.references :account, index: true, foreign_key: true
      t.integer :access_type, default: 0, null: false
      t.timestamps
    end
  end
end
