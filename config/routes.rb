Rails.application.routes.draw do

  namespace :api do
      resources :menus do
        resources :items do
        end
      end
    end

end
