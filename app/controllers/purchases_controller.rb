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
  # card = current_user.card
  #   Payjp.api_key = ENV["PAYJP_PRIVATE_KEY"]
  #   customer = Payjp::Customer.retrieve(card.customer_id)
  #   @default_card_information = customer.cards.retrieve(card.card_id)
  end
  def create
  @purchase =Purchase.create(purchase_params)

  # logger.debug @purchase.errors.inspect
  @purchase.save
  redirect_to action: 'pay'


  end
  def show
    @reserve =Reserve.find(params[:reserve_id])
    @product=Product.find(@reserve.product_id)
  @purchase =Purchase.last
  @customer = @product.user
  # card = current_user.card


  # @product = @purchase.product
  end
  def destroy
  if Purchase.last.destroy
  redirect_to new_product_purchase_path
  end
  end
  def pay

  @purchase =Purchase.last
  price = Purchase.last.price 
  # card = Purchase.last.user.card
  Payjp.api_key = ENV['PAYJP_PRIVATE_KEY']
  Payjp::Charge.create(
  amount: price,
  card: params['payjp-token'],
  currency: 'jpy',
  ) 
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


