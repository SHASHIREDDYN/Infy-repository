({
	firstcomponentEvent : function(component, event, helper) {
		
        var componentEvent=component.getEvent("cmpEvent");
        var msgString=component.get("v.messagestring");
        
        msgString=$A.util.isEmpty(msgString) ? "No Message Passed":msgString;
        
        componentEvent.setParams({
           
            "message" : msgString,
            "label" : "Custom Label"
        });
        
        componentEvent.fire();
	}
})