class ActivitiesController < ApplicationController
    before_action :find_activity, only: [:show]

    def show
        @activity
        render json: @activity, status: :ok
    end

    def index
        activities = Activity.all
        render json: activities
    end

    private

    def find_activity
        @activity = Activity.find_by(id:params[:id])
    end
end
