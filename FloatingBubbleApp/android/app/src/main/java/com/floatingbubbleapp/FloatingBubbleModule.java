package com.floatingbubbleapp;

import android.content.Intent;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

public class FloatingBubbleModule extends ReactContextBaseJavaModule {

    private static ReactApplicationContext reactContext;

        FloatingBubbleModule(ReactApplicationContext context) {
                super(context);
                        reactContext = context;
                            }

                                @Override
                                    public String getName() {
                                            return "FloatingBubble";
                                                }

                                                    @ReactMethod
                                                        public void startService() {
                                                                Intent intent = new Intent(reactContext, FloatingBubbleService.class);
                                                                        reactContext.startService(intent);
                                                                            }

                                                                                @ReactMethod
                                                                                    public void stopService() {
                                                                                            Intent intent = new Intent(reactContext, FloatingBubbleService.class);
                                                                                                    reactContext.stopService(intent);
                                                                                                        }
                                                                                                        }
                                                                                                        