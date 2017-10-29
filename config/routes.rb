Rails.application.routes.draw do
  resources :friends

  root 'static_pages#index'

end
