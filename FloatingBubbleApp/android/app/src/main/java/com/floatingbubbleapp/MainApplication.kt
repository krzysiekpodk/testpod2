package com.floatingbubbleapp

import android.app.Application
import com.facebook.react.ReactApplication
import com.facebook.react.ReactNativeHost
import com.facebook.react.shell.MainReactPackage
import com.facebook.soloader.SoLoader
import java.util.*

class MainApplication : Application(), ReactApplication {
    // Override the ReactNativeHost as a read-only property.
    override val reactNativeHost: ReactNativeHost = object : ReactNativeHost(this) {
        override fun getUseDeveloperSupport(): Boolean {
            return BuildConfig.DEBUG
        }

        override fun getPackages(): List<ReactPackage> {
            // Ensure the list includes all necessary packages.
            return listOf(
                MainReactPackage(),
                FloatingBubblePackage()  // Your custom package
            )
        }

        override fun getJSMainModuleName(): String {
            // Point this to your entry JavaScript file, typically "index"
            return "index"
        }
    }

    override fun onCreate() {
        super.onCreate()
        SoLoader.init(this, /* native exopackage */ false)
    }
}
