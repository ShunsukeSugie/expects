class Users::RegistrationsController < Devise::RegistrationsController
  def new
    @user = User.new
    @user_profile = @user.build_user_profile
      if @user.save 
        redirect_to root_path
      else
        render :new
      end
  end
   
end