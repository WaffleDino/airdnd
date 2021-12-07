class UsersController < ApplicationController
    
        # skip_before_action :authorized, only: :create
        def index
            render json: User.all
        end
    
        def create
            new_user = User.create!(new_user_params)
            session[:user_id] = new_user.id
            render json: new_user, status: :created
        end
    
        def show
            current_user = User.find(session[:user_id])
            render json: current_user
        end
    
        private 
    
        def new_user_params
            params.permit(:username, :password, :email, :zipcode, :user)
        end
    
    
    
end
