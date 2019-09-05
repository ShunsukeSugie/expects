class UsersController < ApplicationController
  before_action :authenticate_user!
  def index
    @user = current_user
    if Reserve.where(status:2).present?
      @products_host=[]
      @purchased =Reserve.where(status:2)
        @purchased.each do |purchase|
          @product_host=Product.find(purchase.product_id)
          @products_host<<@product_host
        end
    end
    @products = Product.where(user_id: @user.id).includes(:product_images).page(params[:page]).per(6)
    @purchases =@user.purchases
    @chat_member =@user.chat_members
    # chat_room
    # @chat_rooms =@user.chat_member
    
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
