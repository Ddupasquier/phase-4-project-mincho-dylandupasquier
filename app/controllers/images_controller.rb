class ImagesController < ApplicationController

    before_action :find_image, only: [:show]

    def show
        @image
        render json: @image, status: :ok
    end

    def index
        images = Image.all
        render json: images
    end

    private

    def find_image
        @image = Image.find_by(id:params[:id])
    end

end
