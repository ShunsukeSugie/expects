class UsersController < ApplicationController
  before_action :authenticate_user!
  def index
    @user = current_user
    # if Reserve.where(status:2).present?
    
    @products=Product.where(user_id: current_user.id)
    if@products.present?
      @reviews =[]
      @products=Product.where(user_id: current_user.id)
      @products_host=[]
      @purchased =Reserve.where(product_id: @products.ids)
        @purchased.each do |purchase|
          @purchase =Purchase.where(reserve_id:purchase.id)
          @product_host=Product.find(purchase.product_id)
          
          @products_host<<@product_host
          @reviews<<@review
         
        end
        @review =Review.where(product_id:@products.ids)
      end
  
    @products = Product.where(user_id: @user.id).includes(:product_images).page(params[:page]).per(6)
    @purchases =@user.purchases.includes(:reserve)
    @chat_member =@user.chat_members.includes(:user)
    
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
