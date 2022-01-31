package com.connectym_ts;

import android.os.Bundle;
import org.devio.rn.splashscreen.SplashScreen;
import com.facebook.react.ReactActivity;

import org.devio.rn.splashscreen.SplashScreen; 

public class MainActivity extends ReactActivity {

  @Override
  protected void onCreate(Bundle savedInstanceState) {
      // SplashScreen.show(this, R.style.SplashScreenTheme); //원래 코드
      SplashScreen.show(this);
      super.onCreate(savedInstanceState);
  }

  @Override
  protected String getMainComponentName() {
    return "ConnectyM_TS";
  }
}
