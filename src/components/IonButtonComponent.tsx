import { IonButton, IonIcon } from "@ionic/react";
import { heart } from "ionicons/icons";

export const IonButtonComponent = () => {
  return (
    <div>
      <p>Button</p>
      <IonButton>click</IonButton>
      <IonButton disabled={true}>click</IonButton>
      <p>Expand</p>
      <IonButton expand="full">full</IonButton>
      <IonButton expand="block">block</IonButton>

      <p>Shape</p>
      <IonButton shape="round"> text</IonButton>

      <p>fill</p>
      <IonButton>Default</IonButton>

      <IonButton fill="clear">clear</IonButton>
      <IonButton fill="default">default</IonButton>
      <IonButton fill="outline">outline</IonButton>
      <IonButton fill="solid">solid</IonButton>

      <p>Size</p>
      <IonButton size="default">defualt</IonButton>
      <IonButton size="large">large</IonButton>
      <IonButton size="small">small</IonButton>

      <p>icon</p>
      <IonButton size="default">iconleft </IonButton>
      <IonButton size="large">iconRight</IonButton>
      <IonButton size="small">
        <IonIcon slot="start" icon={heart} />
        text
      </IonButton>
    </div>
  );
};
