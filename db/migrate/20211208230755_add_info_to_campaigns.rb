class AddInfoToCampaigns < ActiveRecord::Migration[6.1]
  def change
    add_column :campaigns, :info, :string
  end
end
