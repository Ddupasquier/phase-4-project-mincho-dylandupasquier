class Api::OperatingHoursController < ApplicationController
    before_action :find_op_hours, only: [:show]

    def show
        @op_hour
        render json: @op_hour, status: :ok
    end

    def index
        op_hours = OperatingHour.all
        render json: op_hours
    end

    private

    def find_op_hours
        @op_hour = OperatingHour.find_by(id:params[:id])
    end
end
