Rails.application.routes.draw do

  root 'static_pages#index'
  get  'auth/:provider/callback', to:'sessions#create'
  get  'logout',                  to:'sessions#destroy'

  resources :friends

  namespace :api do
    namespace :v1 do
        resources :friends, except:[:new]
        resources :interactions, only: [:create, :edit, :update, :destroy]
        scope :user do
          get 'is_signed_in', to: 'user#is_signed_in?'
        end
      end
    end
  end
