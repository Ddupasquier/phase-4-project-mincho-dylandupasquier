class Api::UsersController < ApplicationController
    wrap_parameters format: []
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity

    def index
        users = User.all
        render json: users, status: :ok
    end

    def show
        current_user = User.find_by(id:session[:user_id])
        render json: current_user
    end

    def create
        user = User.create!(user_params)
        render json:user
    end

    def update
        current_user = User.find_by(id:session[:user_id])
        current_user.update!(user_update_params)
        render json: current_user
    end

    private

    def render_unprocessable_entity(invalid)
        render json:{error: invalid.record.errors}, status: :render_unprocessable_entity
    end

    def user_params
        params.permit(:username, :password)
    end

    def user_update_params
        params.permit(:username, :city, :state, :image, :email, :phone)
    end
    
end
