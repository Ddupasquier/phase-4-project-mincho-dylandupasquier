class ParksController < ApplicationController

    rescue_from ActiveRecord::RecordInvalid, with: :invalid_park
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response  

    def show
        park = find_park
        render json: park
    end

    def index
        page = params[:page]
        if params[:limit]
            parks = Park.all.limit(params[:limit]).offset((page.to_i - 1) * params[:limit].to_i)
            if parks.empty?
                parks = Park.all.limit(params[:limit])
                page = 1
            end
        else
            parks = Park.all
        end
        render json: {parks: parks, page: page }, include: :images
    end

    # def create
    #     park = Park.create!(park_params)
    #     render json: park, status: :created
    # end

    # def show
    #     park = find_park
    #     render json: park
    # end

    # def destroy
    #     park = Park.find(params[:id])
    #     #I NEED TO KEEP TRACK OF ANY CONTINGENT INSTANCES?
    #     park.destroy
    #     head :no_content
    # end

    private

    def find_park
        Park.find(params[:id])
    end

    def render_not_found_response
        render json: {"error": "Park not found"}, status: :not_found
    end

    def invalid_appearance(exception)
        render json: {"errors": exception.record.errors.full_messages}, status: :unprocessable_entity
    end

    #PERMITTED PARAMETERS WHEN CREATING A NEW PARK
    # def appearance_params
    #     params.permit(:rating, :episode_id, :guest_id)
    # end


end
