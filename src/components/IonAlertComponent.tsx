import { IonButton, IonAlert } from "@ionic/react";

export const IonAlertComponent = () => {
  return (
    <div>
      <IonButton id="open-alert">Open Alert</IonButton>
      <IonAlert
        trigger="open-alert"
        header="Title"
        subHeader="subtitle"
        message="hello this is a message"
        buttons={["OK", "Cancel"]}
      />
    </div>
  );
};
