class UserCampaign < ApplicationRecord
    belongs_to :users
    belongs_to :campaigns
end
