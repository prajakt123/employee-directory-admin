define({ 

 //Type your controller code here 
  howSegmentData:function(widget, context){
   
      this.executeOnParent("expandLocationDetail",context);
  },
  
   onEditLocation:function(widget,context){
     //desktop web edit location method
     debugger;
    this.executeOnParent("editLocation",context.widgetInfo.selectedItems[0]);
  },
  onRemoveLocation:function(widget,context){
    debugger;
    this.executeOnParent("removeItem",context.widgetInfo.selectedItems[0]);
  }

 });