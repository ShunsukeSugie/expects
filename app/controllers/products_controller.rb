class ProductsController < ApplicationController
  before_action :authenticate_user!, only: [:new, :create,:edit,:destroy]
  def index
    @products = Product.all.includes(:product_images).order("created_at DESC").limit(3)
    @categories =Category.where(parent_id:nil)
  end
  def new
    @product = Product.new
    @product.product_images.build
    @product.build_address
    # @image = @product.product_images.build
  end
  def create
    @product =Product.new(product_params)
    @product.save
      if @product.save
        @address =  "#{@product.address.name+ @product.address.town + @product.address.town_number}"

        params[:product_images][:image].each do |i|
          @image = @product.product_images.create(image: i.tempfile, product_id: @product.id)
        end
        Map.create(address: @address,product_id:@product.id)
        # Reserve.create(product_id: @product.id,user_id: current_user.id,status:1)
        redirect_to new_product_reserve_path(@product)
  end
end
def edit

  @product = Product.find(params[:id])
  @product_image =@product.product_images[0].image
  gon.image =@product_image
  
end
def update
  @product =Product.find(params[:id])
  if@product.update(product_paramater)
  @address =  "#{@product.address.name+ @product.address.town + @product.address.town_number}"
      if params[:product_images] != nil
            params[:product_images][:image].each do |i|
              @image = @product.product_images.update(image: i.tempfile, product_id: @product.id)
            end
          end
    @map = Map.where(product_id:@product.id)
    Map.update(address: @address,product_id:@product.id)
    redirect_to root_path
  end
end
  def show
    
      @product = Product.find(params[:id])
      @images = @product.product_images
      @user = User.find(@product.user_id)
      @user_profile = @user.user_profile
      @map = Map.where(product_id: @product.id)
    # gon.name  =@map.name
    # gon.latitude =@map.latitude
    # gon.longitude=@map.longitude
    # gon.all_variables
  end
  

  def select_category
    @category = Category.find(params[:parent_id])
    @children =@category.children
    puts params[:parent_id]
    respond_to do |format|
      format.html
      format.json
   end
  end
  def destroy
    @product = Product.find(params[:id])
    @product.destroy
    redirect_to root_path
  end
  def find_product
    @product = Product.find(params[:id])
  end
  private
  def product_params
  
    params.require(:product).permit(:name, :description, :category_id, :amount_of_time, :maximum_occupancy, :price, address_attributes:[:prefecture_id,:town,:town_number,:product_id,:address,:latitude,:longitude],product_images_attributes:[:image]).merge(user_id: current_user.id)
  end
  def product_paramater
    params.require(:product).permit(:name, :description, :category_id, :amount_of_time, :maximum_occupancy, :price, address_attributes:[:prefecture_id,:town,:town_number,:product_id],product_images_attributes:[:image]).merge(user_id: current_user.id)
  end
end
