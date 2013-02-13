package com.stefankendall.wendler531;

import android.content.pm.ActivityInfo;
import org.apache.cordova.DroidGap;

public class ScreenLockingInterface {
    private DroidGap droidGap;

    public ScreenLockingInterface(DroidGap droidGap) {
        this.droidGap = droidGap;
    }

    public void lockPortrait(boolean shouldLockPortrait) {
        if (shouldLockPortrait) {
            droidGap.setRequestedOrientation(ActivityInfo.SCREEN_ORIENTATION_PORTRAIT);
        } else {
            droidGap.setRequestedOrientation(ActivityInfo.SCREEN_ORIENTATION_SENSOR);
        }
    }
}
