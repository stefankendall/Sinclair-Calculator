(function () {
    function iAdBannerViewDidFailToReceiveAdWithErrorEventHandler(evt) {
        window.plugins.iAdPlugin.showAd(false);
    }

    function iAdBannerViewDidLoadAdEventHandler(evt) {
        window.plugins.iAdPlugin.showAd(true);
    }

    function onDeviceReady() {
        window.addEventListener("orientationchange", window.plugins.iAdPlugin.orientationChanged, false);
        document.addEventListener("iAdBannerViewDidLoadAdEvent", iAdBannerViewDidLoadAdEventHandler, false);
        document.addEventListener("iAdBannerViewDidFailToReceiveAdWithErrorEvent", iAdBannerViewDidFailToReceiveAdWithErrorEventHandler, false);

        var adAtBottom = true;
        setTimeout(function () {
            window.plugins.iAdPlugin.prepare(adAtBottom);
            window.plugins.iAdPlugin.showAd(true);
        }, 1000);
        window.plugins.iAdPlugin.orientationChanged(true);
    }

    document.addEventListener("deviceready", onDeviceReady, false);
})();
