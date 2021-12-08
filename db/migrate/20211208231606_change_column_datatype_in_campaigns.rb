class ChangeColumnDatatypeInCampaigns < ActiveRecord::Migration[6.1]
    def change
      change_column :campaigns, :meetup_time, :string
    end
end
