class McdCreatingController < ApplicationController
  
  @@arrCriteriaGlobal = Array.new();
  
  def createProblem
  end

  def createCriteria
    @arrCriteria = @@arrCriteriaGlobal;
  end

  def createAlternatives
    
  end

  def overview
  end
  
  def addCritToArr
    @arrCriteriaGlobal << 6
  end
  
end
