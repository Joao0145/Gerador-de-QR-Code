<div id="qr-reader"></div>
<script src="https://unpkg.com/html5-qrcode/minifiedhtml5.min.js"></script>
<script>
 function onScanSuccess(decodeText, decodeResult) {
    console.log('Code scanned = ${decodedText}', decodeResult);
 }
 var html5QrCode = new HTML5Qrcode("qr-reader");
 HTML5Qrcode.start({ facingMode: "environment" }, { fps: 10, qrbox: 250 }, onScanSuccess);
</script>

<div id="qrcode"></div>
<script src="https:/cdn.rawgit.comdavidshimjs/qrcodejs/gh-pages/rcode.min.js"></script>
 <script>
 new QRCode(document.getElementById("qrcode"), "Aqui vai o seu texto ou URL para o R Code");  
</script>
