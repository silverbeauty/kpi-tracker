module Api::V1
  class ApiController < ApplicationController
    def index
      render text: "API"
    end

    private

    def current_account_user
      @current_account_user ||=
        AccountUser.new(user: current_user, account: current_account)
    end

    def current_account
      @current_account ||=
        current_user.accounts.find_by_id(request.headers['X-accountId']) ||
        current_user.accounts.first
    end

    def current_user
      @current_user ||=
        User.find(doorkeeper_token.resource_owner_id) if doorkeeper_token
    end

  end
end
