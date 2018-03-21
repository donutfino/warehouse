import Quagga from 'quagga';

export default {
  name: 'OmrCard',
  props:{check_in:{default:true}},
  created () {
    // Add barcode scan listener and pass the callback function
    this.$barcodeScanner.init(this.onBarcodeScanned)
  },
  data(){
    return {
      scanner_running: false,
      code : ""
    }
  },
  destroyed () {
    // Remove listener when component is destroyed
    this.$barcodeScanner.destroy()
  },
  methods: {
    scanBardCode(){
      Quagga.init({
          inputStream : {
              name : "Live",
              type : "LiveStream",
              target: document.querySelector('#barcode') 
          },
          decoder : {
              readers : [
                "code_128_reader",
                "ean_reader",
                "ean_8_reader",
                // "code_39_reader",
                // "code_39_vin_reader",
                // "codabar_reader",
                // "upc_reader",
                // "upc_e_reader",
                // "i2of5_reader"
              ]
          },
           debug: {
                    showCanvas: true,
                    showPatches: true,
                    showFoundPatches: true,
                    showSkeleton: true,
                    showLabels: true,
                    showPatchLabels: true,
                    showRemainingPatchLabels: true,
                    boxFromPatches: {
                        showTransformed: true,
                        showTransformedBox: true,
                        showBB: true
                    }
                }
      }, (err) =>  {
          if (err) {
              console.log(err);
              return
          }
          console.log("Initialization finished. Ready to start");
          Quagga.start();
          this.scanner_running = true;
          Quagga.onProcessed(this.onBarcodeScanned)
          Quagga.onDetected((result)=> {
            console.log(result)
                this.closeScan();
                this.code = result.codeResult.code;
                // console.log("Barcode detected and processed : [" + result.codeResult.code + "]", result);
            });
      });
    },
    closeScan(){
        Quagga.stop();
    },
    // Create callback function to receive barcode when the scanner is already done
      onBarcodeScanned (result) {
         var drawingCtx = Quagga.canvas.ctx.overlay,
          drawingCanvas = Quagga.canvas.dom.overlay;

          if (result) {
              if (result.boxes) {
                  drawingCtx.clearRect(0, 0, parseInt(drawingCanvas.getAttribute("width")), parseInt(drawingCanvas.getAttribute("height")));
                  result.boxes.filter(function (box) {
                      return box !== result.box;
                  }).forEach(function (box) {
                      Quagga.ImageDebug.drawPath(box, { x: 0, y: 1 }, drawingCtx, { color: "green", lineWidth: 2 });
                  });
              }

              if (result.box) {
                  Quagga.ImageDebug.drawPath(result.box, { x: 0, y: 1 }, drawingCtx, { color: "#00F", lineWidth: 2 });
              }

              if (result.codeResult && result.codeResult.code) {
                  Quagga.ImageDebug.drawPath(result.line, { x: 'x', y: 'y' }, drawingCtx, { color: 'red', lineWidth: 3 });
              }
          }
    },
    resetBarcode () {
      let barcode = this.$barcodeScanner.getPreviousCode()
      // do something...
    }
  }
};
