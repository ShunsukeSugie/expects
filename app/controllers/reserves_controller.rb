class ReservesController < ApplicationController
  before_action :authenticate_user!
  def index
    @product = Product.find(params[:product_id])
   
  if @product.reserves.present?
    @reserves = @product.reserves
    reserves =[]
      @reserves.each do |reserve|
         @date =reserve.date
         reserves<<@date
       end
    @reserve =Reserve.new
    gon.reserves =reserves
   
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
else
  flash.now[:error] = 'ただいま受付できません'
  redirect_to product_path(@product.id),flash: {error:'ただいま受付できません' }
end
  end
  
  def new
    @product = Product.find(params[:product_id])
    if @product.user_id == current_user.id
    @reserves= Reserve.where(product_id:params[:product_id])
    reserves =[]
    @reserves.each do |reserve|
       @reserve =reserve.date
       reserves<<@reserve
    end
    gon.reserves =reserves
    @product = Product.find(params[:product_id])
    @reserve = Reserve.new
    statuses =[]
    @reserves.each do |reserve|
       @status =reserve.status
       statuses<<@status
    end
    gon.status = statuses

  else
  redirect_to root_path,flash: {ban:'不正なアクセスです' }
  end
  end
  def create
   
     
  
    reserve_params.each do |reserve|
      @confirm = Reserve.where(product_id:params[:product_id]).find_by(date: reserve)
      
      unless @confirm.present?
        Reserve.create(date:reserve,status:1,product_id: params[:product_id])
      else
        @confirm.update(date:reserve,status:1,product_id: params[:product_id])
      end
    end
    
  
    redirect_to users_path
  end
  private
    def reserve_params
      params[:reserves][:date].each do |date|
       params.require(:reserve).permit(:date).merge(product_id:params[:product_id])
    
      end
    end
end

