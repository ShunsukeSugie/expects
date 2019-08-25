class UserProfilesController < ApplicationController
  before_action :authenticate_user!
  def new
  end
  def edit
    id =current_user.user_profile.id
    @user_profile = UserProfile.find(id)
  end
  def update
    
    current_user.update(user_params)
    current_user.user_profile.update(user_profile_params)
   redirect_to users_path
    
    # redirect_to controller: 'users_profiels', action: 'edit'
  end


  private
  def user_params
    params.require(:user).permit(:nickname,:email,:password)
  end
  def user_profile_params
    params.require(:user).permit(:introduction,:avatar)
    
  end
  # def valid_user
  #   unless (@user && @user.activated? &&
  #           @user.authenticated?(:reset, params[:id]))
  #     redirect_to root_url
  #   end
  # end
end



