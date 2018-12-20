class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :email, null: false, index: true
      t.string :password_digest, null: false
      t.timestamps
    end

    add_foreign_key :oauth_access_grants, :users, column: :resource_owner_id
  end
end
