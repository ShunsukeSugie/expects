Rails.application.routes.draw do
  root 'products#index'
  resources :products do
    get 'select_category' , to: 'products#select_category', on: :collection
  end
    
end