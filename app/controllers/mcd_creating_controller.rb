class McdCreatingController < ApplicationController
  
  require 'json'
  @@arrCriteriaGlobal = Array.new();
  @@arrAlternativesGlobal = Array.new();
  
  def createProblem
  end

  def createCriteria

  end

  def createAlternatives
    
  end

  def overview
#    crit = Criterion.new("kon","kobila")
    cust1=Criterion.new("1", "John", "Homo")
    cust2=Criterion.new("2", "Poul", "Hetero")
#    @@arrCriteriaGlobal.push(cust1)
    @@arrCriteriaGlobal.push(cust2)
    @arrCriteria = Array.new(@@arrCriteriaGlobal.length)
    @arrCriteria = @@arrCriteriaGlobal
  end
  
  def postCriteria
    
    criteria = (params[:root])
    @@arrCriteriaGlobal = JSON.parse(criteria)
    head :ok
  end

   #def postCriteria
   # 
  #  criteria = (params[:root])
 #   objArray = JSON.parse(criteria)
#    objArray.each do |object|
      # This is a hash object so now create a new one.
     # newMyObject = Criterion.new(object)
    #  newMyObject.save # You can do validation or any other processing around here.
   #   @@arrAlternativesGlobal.push(newMyObject)
  #  end
 #   head :ok
#  end
  
end
