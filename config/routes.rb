Rails.application.routes.draw do
  
  resources :characters
  resources :user_characters
  resources :user_campaigns
  resources :campaigns
  resources :users
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
  get "/auth", to: "users#show"
  post "/login", to: "sessions#create"
  post "/users", to: "users#create"
  delete "/logout", to: "sessions#destroy"
  post "/campaigns", to: "campaigns#create"
  delete "/campaigns/:id", to: "campaigns#destroy"

end
