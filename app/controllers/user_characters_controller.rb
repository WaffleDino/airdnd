class UserCharactersController < ApplicationController
    def index
        render json: UserCharacter.all
    end
end
