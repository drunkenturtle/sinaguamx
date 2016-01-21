"use strict";

var FunUtils = {
  b64toBlob: function (b64Data, contentType, sliceSize) {
    contentType = contentType || '';
    sliceSize = sliceSize || 512;

    var byteCharacters = atob(b64Data);
    var byteArrays = [];
    var blob = undefined;

    try {
      for (var offset = 0; offset < byteCharacters.length; offset += sliceSize) {
        var slice = byteCharacters.slice(offset, offset + sliceSize);
        var byteNumbers = new Array(slice.length);

        for (var i = 0; i < slice.length; i++) {
          byteNumbers[i] = slice.charCodeAt(i);
        }

        var byteArray = new Uint8Array(byteNumbers);
        byteArrays.push(byteArray);
      }

      blob = new Blob(byteArrays, {type: contentType});

    } catch(err) {
      // TypeError old chrome and FF
      window.BlobBuilder = window.BlobBuilder || window.WebKitBlobBuilder || window.MozBlobBuilder || window.MSBlobBuilder;
      if(err.name == 'TypeError' && window.BlobBuilder){
        var bb = new BlobBuilder();
        bb.append(byteArrays);
        blob = bb.getBlob(contentType);
      } else if(err.name == 'InvalidStateError'){
        // InvalidStateError (FF13 WinXP)
        blob = new Blob(byteArrays, {type : contentType});
      } else{
      }
    }

    return blob;
  },
  exportToFile: function(fileBase64, fileName, fileContent) {
    var blob = this.b64toBlob(fileBase64, fileContent);
    var URL = window.URL || window.webkitURL || window.mozURL || window.msURL;
    var blobUrl = URL.createObjectURL(blob);
    var ventana = window.open(undefined, '_blank', 'titlebar=no, width=320, height=240');

    if(ventana != undefined) {
      //otra forma de descargar archivos
      //ventana.document.write('Su descarga iniciar&aacute; en un instante... <a id=descarga href=' + blobUrl + 
      //                        ' download='' + fileName + ''>fileName</a>');
      //ventana.document.getElementById('descarga').click();

      //otra forma de descargar archivos
      var pom = document.createElement('a');
      pom.setAttribute('id', 'descarga');
      pom.setAttribute('href', blobUrl);
      pom.setAttribute('download', fileName);
      pom.click();
      ventana.close();
      
    } else {
      console.log('Error - Ventanas emergentes no permitidas.');
    }
  }
};

module.exports = FunUtils;