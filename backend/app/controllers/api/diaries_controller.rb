class Api::DiariesController < ApplicationController
  before_action :set_diary, only: %i[ show update destroy ]

  def show
    today = Date.current
    diary = Diary.find_or_initialize_by(date: today)
    render json: diary
  end

  def update
    if diary.update(diary_params)
      render json: diary
    else
      render json: diary.errors, status: :unprocessable_entity
    end
  end

  # DELETE /diaries/1
  def destroy
    diary.destroy!
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_diary
      diary = Diary.find(params.expect(:id))
    end

    # Only allow a list of trusted parameters through.
    def diary_params
      params.expect(diary: [ :date, :content ])
    end
end
