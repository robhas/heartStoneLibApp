import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardDeckPage } From './card-deck/card-deck.page';

@NgModule({
	imports: [
		IonicModule,
		CommonModule
	],
	declarations: [
		cardDeckpage
	]
})
export class CardPageModule {}