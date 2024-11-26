import { useState } from "react";

import { IonButton, IonActionSheet } from "@ionic/react";

export const IonActionSheetComponent = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <p>IonActionSheet</p>

      <IonButton onClick={() => setIsOpen(true)}>Open IonActionSheet</IonButton>

      <IonActionSheet
        isOpen={isOpen}
        header="Header"
        buttons={[
          {
            text: "Button1",
            role: "selected",
          },
          {
            text: "cancel",
            role: "cancel",
          },
          {
            text: "Button1",
            role: "destructive",
          },
        ]}
        onDidDismiss={() => setIsOpen(false)}
        mode="ios"
        translucent
      ></IonActionSheet>
    </div>
  );
};

// el action sheet tiene varias maneras de activarse
// 1. con un boton el  conla propiedad id y u trigger en el actionsheet
// 2. con un hook useIonActionSheet
// 3. con  el tipico isOpen
