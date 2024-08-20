export const Actionbar = () => {
    const buttonClicked = () => {
      console.log("test");
    }
    return (
     <>
       <actionBar title="ActionBar" >
         <actionItem onTap={buttonClicked}>
           <label text="<< Back"
                  class="font-bold text-lg" />
         </actionItem>
       </actionBar>

       <gridLayout>
         <contentView
           horizontalAlignment="center"
           verticalAlignment="center">
           <label>Main Content</label>
         </contentView>
       </gridLayout>
     </>
    );
  };
