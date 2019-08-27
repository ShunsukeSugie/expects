class PurchasesController < ApplicationController

  before_action :authenticate_user!
  before_action :set_product, only: [:new, :pay]
 

  def new
    user =current_user
    @reserve =Reserve.find(params[:reserve_id])
    @product=Product.find(@reserve.product_id)

    @reserves = @product.reserves
  
    reserves =[]
    @reserves.each do |reserve|
      @date =reserve.date
      reserves<<@date
    end
    gon.reserves =reserves
    @purchase =Purchase.new
    reserve_ids =[]
    @reserves.each do |reserve|
      @id =reserve.id
      reserve_ids<<@id
    end

    gon.reserve_ids=reserve_ids
    statuses =[]
    @reserves.each do |reserve|
      @status =reserve.status
      statuses<<@status
    end
    gon.status = statuses
  end
  def create
    @purchase =Purchase.create(purchase_params)
    redirect_to pay_reserve_purchases_path

  end
  def show
    @purchase=Purchase.last
    @reserve =Reserve.find(params[:reserve_id])
    @product=Product.find(@reserve.product_id)
    @customer = @product.user
  end
  def destroy
    @purchase= Purchase.last
    redirect_to reserve_purchases_path
  end
  def confirm
    @purchse = Purchase.new(purchase_params)
    @reserve =Reserve.find(params[:reserve_id])
    @product=Product.find(@reserve.product_id)
    @purchase =Purchase.last
    @customer = @product.user
    redirect_to pay_reserve_purchases_path
  end
  def pay
    @purchase =Purchase.last
    price =@purchase.price
    Payjp.api_key = ENV['PAYJP_PRIVATE_KEY']
    Payjp::Charge.create(
    amount: price,
    card: params['payjp-token'],
    currency: 'jpy',
    ) 
    ChatRoom.create(purchase_id:@purchase.id)
    @chat_room =ChatRoom.last
    @user =current_user
    ChatMember.create(user_id:@product.id,chat_room_id:@chat_room.id)
    ChatMember.create(user_id:@user.id,chat_room_id:@chat_room.id)
    @reserve.update(status:2)
    redirect_to root_path
  end
  private
  def purchase_params
  params.require(:purchase).permit(:member,:price,:reserve_id).merge(user_id: current_user.id).merge(reserve_id:params[:reserve_id])
  
  end
  def set_product
    @reserve =Reserve.find(params[:reserve_id])
    @product=Product.find(@reserve.product_id)
  end

end

