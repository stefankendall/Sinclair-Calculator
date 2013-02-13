package com.stefankendall.wendler531premium;

import android.media.AudioManager;
import android.os.Bundle;
import android.view.WindowManager;
import com.stefankendall.wendler531.*;
import org.apache.cordova.DroidGap;

public class App extends DroidGap {
    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        super.init();

        super.setIntegerProperty("splashscreen", R.drawable.splash);
        super.setIntegerProperty("loadUrlTimeoutValue", 70000);
        appView.addJavascriptInterface(new ScreenLockingInterface(this), "ScreenLock");
        appView.addJavascriptInterface(new AudioInfo(this), "AudioInfo");
        appView.addJavascriptInterface(new Alert(this.getContext()), "Alert");
        appView.addJavascriptInterface(new DateFormatFinder(this.getContext()), "DateFormatFinder");

        super.setVolumeControlStream(AudioManager.STREAM_MUSIC);
        super.loadUrl("file:///android_asset/www/index.html");
        getWindow().addFlags(WindowManager.LayoutParams.FLAG_KEEP_SCREEN_ON);
    }
}

