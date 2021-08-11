new Vue({
    el: "#app",
    data: {
        title: "Gerador QRCode",
        text: "",
        qrcode: new QRious({ size: 300 }),
        qrcode2: new QRious({ size: 200 }),
    },
    computed: {
        newQRCode() {
            this.qrcode.value = this.text;
            return this.qrcode.toDataURL();
        },
        newQRCode2() {
            this.qrcode2.value = this.text;
            return this.qrcode2.toDataURL();
        },
    },
});