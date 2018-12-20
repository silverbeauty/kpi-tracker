class AccountUser
  attr_reader :account, :user, :access
   def initialize(account:, user:)
    @account = account
    @user = user
    @access = user.user_account_accesses.where(account_id: account.id).first
  end
end
