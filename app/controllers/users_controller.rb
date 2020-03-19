class UsersController < ApplicationController

  # GET for /users/:id
  def show
    @user = User.find(params[:id])
  end

end
