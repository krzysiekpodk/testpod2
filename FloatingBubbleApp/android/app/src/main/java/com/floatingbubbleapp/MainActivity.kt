package com.floatingbubbleapp

import android.content.Intent
import android.os.Bundle
import com.facebook.react.ReactActivity
import com.facebook.react.ReactInstanceManager
import com.facebook.react.bridge.ReactContext
import com.facebook.react.modules.core.DeviceEventManagerModule

class MainActivity : ReactActivity() {

    override fun getMainComponentName(): String {
        return "FloatingBubbleApp"
    }

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)

        // Check if this intent is started via custom flag from service with screen info
        val intent = intent
        if (intent != null && intent.hasExtra("screen")) {
            val screen = intent.getStringExtra("screen")
            val reactInstanceManager: ReactInstanceManager = reactNativeHost.reactInstanceManager
            val reactContext: ReactContext? = reactInstanceManager.currentReactContext

            // When the react context is initialized, send an event to JavaScript
            if (reactContext != null) {
                reactContext.getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter::class.java)
                    .emit("navigateToScreen", screen)
            } else {
                // Otherwise wait for it to initialize
                reactInstanceManager.addReactInstanceEventListener { context ->
                    context.getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter::class.java)
                        .emit("navigateToScreen", screen)
                }
            }
        }
    }
}
