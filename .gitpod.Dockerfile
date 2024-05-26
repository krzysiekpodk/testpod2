FROM gitpod/workspace-full

#SHELL ["/bin/bash", "-c"]

# Install Java 17
RUN sudo apt-get update && sudo apt-get install -y openjdk-17-jdk

# Set JAVA_HOME environment variable
ENV JAVA_HOME=/usr/lib/jvm/java-17-openjdk-amd64


ENV ANDROID_HOME=/home/gitpod/androidsdk 


# Install Open JDK
#USER root
#RUN apt update \
#    && apt install openjdk-8-jdk -y \
#    && update-java-alternatives --set java-1.8.0-openjdk-amd64

# Install SDK Manager
USER gitpod
RUN  wget https://dl.google.com/android/repository/commandlinetools-linux-7583922_latest.zip \
    && mkdir -p $ANDROID_HOME/cmdline-tools/latest \
    && unzip commandlinetools-linux-*.zip -d $ANDROID_HOME \
    && rm -f commandlinetools-linux-*.zip \
    && mv $ANDROID_HOME/cmdline-tools/bin $ANDROID_HOME/cmdline-tools/latest \
    && mv $ANDROID_HOME/cmdline-tools/lib $ANDROID_HOME/cmdline-tools/latest

RUN echo "export ANDROID_HOME=$ANDROID_HOME" >> /home/gitpod/.bashrc \
    && echo 'export PATH=$ANDROID_HOME/emulator:$ANDROID_HOME/tools:$ANDROID_HOME/cmdline-tools/bin:$ANDROID_HOME/platform-tools:$PATH' >> /home/gitpod/.bashrc

# Install Android Image version 30
#USER gitpod
#RUN yes | $ANDROID_HOME/cmdline-tools/latest/bin/sdkmanager "platform-tools" "platforms;android-30" "emulator"
#RUN yes | $ANDROID_HOME/cmdline-tools/latest/bin/sdkmanager "system-images;android-30;google_apis;x86_64"
#RUN echo no | $ANDROID_HOME/cmdline-tools/latest/bin/avdmanager create avd -n avd28 -k "system-images;android-30;google_apis;x86_64"



# Create the Android SDK directories with appropriate permissions
#RUN sudo mkdir -p /opt/android-sdk/cmdline-tools && \
#    sudo chown -R gitpod:gitpod /opt/android-sdk

# Download and unpack Android SDK command line tools
#RUN sudo wget -q -O cmdline-tools.zip "https://dl.google.com/android/repository/commandlinetools-linux-7302050_latest.zip" && \
#    sudo unzip cmdline-tools.zip -d /opt/android-sdk/cmdline-tools && \
#    sudo rm cmdline-tools.zip

# Set ANDROID_HOME environment variable
#ENV ANDROID_HOME=/opt/android-sdk
#ENV PATH=$ANDROID_HOME/cmdline-tools/latest/bin:$PATH

# Accept Android SDK licenses
RUN yes | $ANDROID_HOME/cmdline-tools/latest/bin/sdkmanager --licenses
