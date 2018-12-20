module Api
    module V1
        class CategoriesController < Api::V1::ApiController
            before_action :doorkeeper_authorize!

            def index
                categories = Category.all  
                render json: categories
            end
        end
    end
end