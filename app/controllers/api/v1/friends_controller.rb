class Api::V1::FriendsController < ApplicationController
  skip_before_action :verify_authenticity_token
  protect_from_forgery except: :destroy, unless: -> { request.format.json? }

  def index
    if current_user
      render :json => {"friends" => current_user.friends}
    else
      render :json => {"signed_in" => false}
    end
  end

  def show
    if current_user
      friend = Friend.find(params[:id])
      interactions_by_date = friend.interactions.by_date

      social_media_post= 0
      text= 0
      letter_card= 0
      package= 0
      phone_call = 0
      in_person= 0
      coffee= 0
      day_visit = 0
      multi_visit = 0

      interactions_by_date.each do |interaction|
        if interaction.interaction_type == "Social media post"
          social_media_post += 1
        elsif interaction.interaction_type == "Text"
          text += 1
        elsif interaction.interaction_type == "Letter/Card"
          letter_card += 1
        elsif interaction.interaction_type == "Package"
          package += 1
        elsif interaction.interaction_type == "Phone call"
          phone_call += 1
        elsif interaction.interaction_type == "In person conversation"
          in_person += 1
        elsif interaction.interaction_type == "Coffee/Meal"
          coffee += 1
        elsif interaction.interaction_type == "Day visit"
          day_visit += 1
        elsif interaction.interaction_type == "Multi-day visit"
          multi_visit += 1
        end
      end

      interaction_type_stats = {socialMedia: social_media_post, text:text, letterCard: letter_card, package: package, phoneCall: phone_call, inPerson: in_person, coffee:coffee, dayVisit:day_visit, multiVisit:multi_visit}


      most_recent_interaction = interactions_by_date.first.date_of_interaction
      days_since_last_interaction = ((most_recent_interaction) - (Date.today)).to_i
      render :json => {"friend" => friend, "interactions" => friend.interactions.by_date, "most_recent_interaction" => most_recent_interaction, "days_since_last_interaction" => days_since_last_interaction, "interactionTypeStats" => interaction_type_stats}
    else
      render :json => {"signed_in" => false}
    end
  end
# need to remeber to add strong params
  def create
      friend = JSON.parse(request.body.read)
      new_friend = Friend.create(
        full_name: friend["fullName"],
        preferred_name: friend["preferredName"],
        preferred_pronouns: friend["preferredPronouns"],
        email: friend["email"],
        phone_number: friend["phoneNumber"],
        street_address: friend["streetAddress"],
        city: friend["city"],
        state: friend["state"],
        zip_code: friend["zipCode"],
        user_id: friend["userId"]
      )
      render json: new_friend
  end

  def edit
    friend = Friend.find(params[:id])
    render :json => {"friend" => friend}
  end

  def update
    friend = Friend.find(params[:id])
    friend_update = JSON.parse(request.body.read)
    friend.update(
      full_name: friend_update["fullName"],
      preferred_name: friend_update["preferredName"],
      preferred_pronouns: friend_update["preferredPronouns"],
      email: friend_update["email"],
      phone_number: friend_update["phoneNumber"],
      street_address: friend_update["streetAddress"],
      city: friend_update["city"],
      state: friend_update["state"],
      zip_code: friend_update["zipCode"],
      user_id: friend_update["userId"]
    )
  end

  def destroy
      friend = Friend.find(params[:id])
      friend.destroy
      render :json => {"friends" => current_user.friends}
  end

end
