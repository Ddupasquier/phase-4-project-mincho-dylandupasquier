class Api::EntranceFeesController < ApplicationController
    before_action :find_ent_fee, only: [:show]

    def show
        @ent_fee
        render json: @ent_fee, status: :ok
    end

    def index
        ent_fees = EntranceFee.all
        render json: ent_fees
    end

    private

    def find_ent_fee
        @ent_fee = EntranceFee.find_by(id:params[:id])
    end
end
