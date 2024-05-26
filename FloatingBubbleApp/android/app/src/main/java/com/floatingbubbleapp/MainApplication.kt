package com.floatingbubbleapp

import android.app.Application
import com.facebook.react.ReactApplication
import com.facebook.react.ReactNativeHost
import com.facebook.react.ReactPackage
import com.facebook.react.shell.MainReactPackage
import com.facebook.soloader.SoLoader
import java.util.*

class MainApplication : Application(), ReactApplication {
    // Implement the required ReactNativeHost as an abstract member.
    private val mReactNativeHost = object : ReactNativeHost(this) {
        override fun getUseDeveloperSupport(): Boolean {
            return BuildConfig.DEBUG
        }

        override fun getPackages(): List<ReactPackage> {
            return listOf(
                MainReactPackage(),
                FloatingBubblePackage() // Assuming this is your custom package
            )
        }

        override fun getJSMainModuleName(): String {
            return "index" // Ensure this matches the entry file name for your React Native JS code
        }
    }

    // Properly override the getter for ReactNativeHost as required by ReactApplication
    override fun getReactNativeHost(): ReactNativeHost {
        return mReactNativeHost
    }

    override fun onCreate() {
        super.onCreate()
        SoLoader.init(this, /* native exopackage */ false)
    }
}
