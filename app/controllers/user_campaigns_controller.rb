class UserCampaignsController < ApplicationController
    def index
        render json: UserCampaign.all
    end
end
