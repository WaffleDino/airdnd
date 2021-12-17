class CampaignsController < ApplicationController

    def index
        render json: Campaign.all
    end

    def create
        new_campaign = Campaign.create!(new_campaign_params)
        render json: new_campaign, status: :created
    end

    def show
        current_user = User.find(session[:user_id])
        render json: current_user
    end

    def destroy
        del_campaign = Campaign.find(params[:id])
        del_campaign.destroy
    end

    private 

    def new_campaign_params
        params.permit(:id, :name, :version, :num_of_players, :meetup_day, :meetup_time, :char_level_range, :host_id, :dm_id, :info, :zipcode)
    end

    
end
