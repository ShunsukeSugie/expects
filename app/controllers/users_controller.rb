class UsersController < ApplicationController
  before_action :authenticate_user!
  def index
    @user = current_user
    @products = Product.where(user_id: @user.id).includes(:product_images).page(params[:page]).per(6)
  end
  def edit
  end
  def update(user_params)
    current_user.update(user_params)
  end

  private
  def user_params
    params.require(:user).permit(:email,:password)
  end
  # def valid_user
  #   unless (@user && @user.activated? &&
  #           @user.authenticated?(:reset, params[:id]))
  #     redirect_to root_url
  #   end
  # end
# end
end
