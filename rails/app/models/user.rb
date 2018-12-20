class User < ApplicationRecord
  has_secure_password
  validates :email, uniqueness: true, presence: true
  validates_email_format_of :email, message: 'is not looking good'

  has_many :user_account_accesses
  has_many :accounts, through: :user_account_accesses
end
