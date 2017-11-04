class Api::V1::InteractionsController < ApplicationController
  skip_before_action :verify_authenticity_token
  protect_from_forgery unless: -> { request.format.json? }

  def create
    interaction = JSON.parse(request.body.read)
    new_interaction = Interaction.create(
      interaction_type: interaction["interactionType"],
      notes: interaction["notes"],
      date_of_interaction: interaction["dateOfInteraction"],
      friend_id: interaction["friendId"],
    )
    render json: new_interaction
  end


  def edit
    interaction = Interaction.find(params[:id])
    render :json => {"interaction" => interaction}
  end

  def update
    interaction = Interaction.find(params[:id])
    interaction_update = JSON.parse(request.body.read)
    interaction.update(
      interaction_type: interaction_update["interactionType"],
      notes: interaction_update["notes"],
      date_of_interaction: interaction_update["dateOfInteraction"]
    )

  end

  def destroy
    friend = Friend.find(params[:friend_id])
    interaction = Interaction.find(params[:id])
    interaction.destroy
    render :json => {"interactions" => friend.interactions}
  end

end
