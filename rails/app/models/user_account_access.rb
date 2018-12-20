class UserAccountAccess < ApplicationRecord
  belongs_to :user
  belongs_to :account
  enum access_type: { owner: 0, admin: 1, limited: 2 }
end
