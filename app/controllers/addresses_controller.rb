class AddressesController < ApplicationController
  def show
    @addresses = Address.where(params[:prefecture_id])
    @address =@addresses.first
    @products = []
    @addresses.each do |address|
      @product = Product.find(address.product_id)
      @products <<@product
    end
  end
end
