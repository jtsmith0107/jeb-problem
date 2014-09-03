window.onload = function(){  
  
  //file model - holds text data
  
  var fileInput = document.getElementById('fileInput');
  
  
  //constructor for the text file model
  function TextFile(){
    //merely indicating that these values will be filled.
    this.name = null;
    this.text = null;
  };
  
  
  var textFileModel = new TextFile();
  // alternatively a save button could trigger saving a new file as a model
  fileInput.addEventListener('change', function(e) {
    var file = fileInput.files[0];
    var reader = new FileReader();
  
    reader.onload = function(e){
			textFileModel.text = reader.result;
      textFileModel.name = fileInput.files[0].name
    }   
    
    reader.readAsText(file);
  });
  
  

//

//   textArea[0].innerText = text.slice(lineStart, lineStart + 50).join(" \n ");
// }
//controller, links between the view and the modal. 
// should pass data from the model to the view, format??
  function TextFileCtrl(fileModel){
    var lines = fileModel.text.split(' \n ');
    var lineStart = 0;
    var increment = 5;
    var lineCount = 50;
    //pass data down to the view, bind events
    
    var textShow = new TextFileView(lines.slice(lineStart, lineStart + lineCount));
    bindEvents();
    textShow.redrawText();
  };
  
  
  TextFileCtrl.prototype.bindEvents(){
    
    $('.lineviewer-up').bind('click', function(event){
      if(lineStart >= increment){
        lineStart -= increment;
      }
      textShow.redrawText();
    });
  
    $('.lineviewer-down').bind('click', function(event){
      if(lineStart < text.length - increment){
        lineStart += increment;
      }
     textShow.redrawText();
    });
  
    $('.lineviewer-content').bind('wheel', function(event){ 
      var deltaY = Math.round(event.originalEvent.deltaY/100);
      if(deltaY < 0 && lineStart >= -deltaY){
        lineStart += deltaY;
        textShow.redrawText();
      } else if(deltaY > 0 && (lineStart < text.length - deltaY)){
        lineStart += deltaY;
        textShow.redrawText();
      }
    });
    
  };
  // view, bind events, inject lines into page
  
  function TextFileView(lines) {
    for(var i = lineStart; i < )
  }
  
  TextFileView.prototype.redrawText = function(){
    var content = text.slice(lineStart, lineStart + 50); 
    for(var i = lineStart; )     
    textArea[0].innerText = content.join(' \n ');
  };
  
  
  var textArea = document.getElementsByClassName('lineviewer-content');
  
 
}