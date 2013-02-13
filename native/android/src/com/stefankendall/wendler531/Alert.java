package com.stefankendall.wendler531;

import android.content.Context;
import android.media.AudioManager;
import android.media.SoundPool;
import com.stefankendall.wendler531premium.R;

public class Alert {
    private SoundPool soundPool;
    private AudioManager audioManager;
    private int alertId;

    public Alert(Context context) {
        soundPool = new SoundPool(1, AudioManager.STREAM_ALARM, 100);
        alertId = soundPool.load(context, R.raw.alert, 1);
        audioManager = (AudioManager) context.getSystemService(Context.AUDIO_SERVICE);
    }

    public void playAlert() {
        float volumeIndex = (float) audioManager.getStreamVolume(AudioManager.STREAM_MUSIC);
        float maxVolumeIndex = (float) audioManager.getStreamMaxVolume(AudioManager.STREAM_MUSIC);
        float volume = volumeIndex / maxVolumeIndex;
        soundPool.play(alertId, volume, volume, 1, 0, 1f);
    }
}
