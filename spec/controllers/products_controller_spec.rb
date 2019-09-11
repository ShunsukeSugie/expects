require 'rails_helper'

describe ProductsController do
  describe 'GET #new' do
    it "renders the :new template" do
      get :new
      expect(response).to render_template :new
    end
  end
  describe 'GET #edit' do
    it "assigns the requested product to @products" do
      product = create(:product)
      get :edit, params: { id: product }
      expect(assigns(:product)).to eq product
    end

    it "renders the :edit template" do
      product = create(:product)
      get :edit, params: { id: product }
      expect(response).to render_template :edit
    end
    
  end
  describe 'GET #index' do
    it "populates an array of tweets ordered by created_at DESC" do
      products = create_list(:product, 3) 
      get :index
      expect(assigns(:products)).to match(products.sort{|a, b| b.created_at <=> a.created_at })
    end

    it "renders the :index template" do
      get :index
      expect(response).to render_template :index
    end
  end
end