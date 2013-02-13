package com.stefankendall.wendler531;

import android.app.Activity;
import android.content.Context;
import android.media.AudioManager;
import org.apache.cordova.DroidGap;

public class AudioInfo {
    private DroidGap droidGap;

    public AudioInfo(DroidGap droidGap) {
        this.droidGap = droidGap;
    }

    public boolean isMuted() {
        AudioManager audioManager = (AudioManager) droidGap.getSystemService(Activity.AUDIO_SERVICE);
        return audioManager.getRingerMode() == AudioManager.RINGER_MODE_SILENT;
    }

    public int getVolume() {
        AudioManager audioManager = (AudioManager) droidGap.getSystemService(Context.AUDIO_SERVICE);
        return audioManager.getStreamVolume(AudioManager.STREAM_MUSIC);
    }
}
