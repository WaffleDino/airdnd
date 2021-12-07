class CampaignSerializer < ActiveModel::Serializer
  attributes :id, :name, :version, :num_of_players, :meetup_day, :meetup_time, :char_level_range, :info
end
