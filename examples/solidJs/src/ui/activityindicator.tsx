import { Frame } from '@nativescript/core'

export const ActivityIndicator = () => {

  function goBack() {
    Frame.goBack();

  }  return (
    <>
      <actionbar title="ActionBar">
        <actionitem on:tap={goBack} text='<<Back'>
        </actionitem>
      </actionbar>
        v
      {/* @ts-ignore */}
        <gridlayout>
            <contentview verticalAlignment="center" horizontalAlignment="center" android:visibility="collapse">
                <activityindicator busy="true" />
            </contentview>

            <gridlayout ios:visibility="collapse" verticalAlignment="center" horizontalAlignment="center">
                <contentview
                    width="40" height="40"
                    borderRadius="50"
                    borderWidth="4" borderColor="#65adf1"
                />
                <contentview
                    width="40" height="40"
                    translateX="-20"
                    translateY="-20"
                    backgroundColor="white" />
            </gridlayout>
        </gridlayout>

    </>
  );
};
