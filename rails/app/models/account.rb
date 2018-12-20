class Account < ApplicationRecord
  has_many :user_account_accesses
  has_many :users, through: :user_account_accesses
end
