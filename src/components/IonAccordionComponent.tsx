import {
  IonAccordion,
  IonAccordionGroup,
  IonItem,
  IonLabel,
} from "@ionic/react";

export const IonAccordionComponent = () => {
  return (
    <div>
      <p>Ion Accordion</p>

      <IonAccordionGroup>
        <IonAccordion value="first">
          <IonItem slot="header">
            <IonLabel>Primero</IonLabel>
          </IonItem>
          <div className="ion-padding" slot="content">
            Primer contenido
          </div>
        </IonAccordion>

        <IonAccordion value="second">
          <IonItem slot="header">
            <IonLabel>Segundo</IonLabel>
          </IonItem>
          <div className="ion-padding" slot="content">
            Second content
          </div>
        </IonAccordion>
      </IonAccordionGroup>
    </div>
  );
};
