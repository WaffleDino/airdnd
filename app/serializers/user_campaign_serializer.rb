class UserCampaignSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :campaign_id
end
