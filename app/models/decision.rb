class Decision < ActiveRecord::Base
  belongs_to:criterion
  belongs_to:alternative
end
