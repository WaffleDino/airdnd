class CampaignsController < ApplicationController

    def index
        render json: Campaign.all
    end

end
