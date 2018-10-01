define({ 

  showSegmentData:function(widget, context){

    this.executeOnParent("expandLocationDetail",context);
  },

  onEditLocation:function(widget,context){
    debugger;
    this.executeOnParent("editLocation",context.widgetInfo.selectedItems[0]);
  },
  onRemoveLocation:function(widget,context){
    debugger;
    this.executeOnParent("removeItem",context.widgetInfo.selectedItems[0]);
  }

});
