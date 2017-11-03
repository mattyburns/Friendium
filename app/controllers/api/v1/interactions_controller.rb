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
end
