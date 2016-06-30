class McdCreatingController < ApplicationController
  
  @@arrCriteriaGlobal = ["s", "kyp"];
  @@arrAlternativesGlobal = Array.new();
  
  def createProblem
  end

  def createCriteria

  end

  def createAlternatives
    
  end

  def overview
    @@arrCriteriaGlobal << "x"
    @arrCriteria = Array.new(@@arrCriteriaGlobal.length)
    @arrCriteria = @@arrCriteriaGlobal
    @arrCriteria << "xyu"
  end
  
  def postCriteria
    logger.debug "Person attributes hash: #{@person.attributes.inspect}"
logger.info "Processing the request..."
logger.fatal "Terminating application, raised unrecoverable error!!!"
    criteria = JSON.parse(params[:criteriaJSON])
    @@arrCriteriaGlobal = criteria
  end

  
end
