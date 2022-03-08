class UsersController < ApplicationController
    wrap_parameters format: []
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity

    def index
        users = User.all
        render json: users, status: :ok
    end

    def show
        current_user = User.find_by(session[:user])
        render json: current_user
    end

    def create
        user = User.create!(user_params)
        render json:user
    end

    private

    def render_unprocessable_entity(invalid)
        render json:{error: invalid.record.errors}, status: :render_unprocessable_entity
    end

    def user_params
        params.permit(:username, :password)
    end
    
end
