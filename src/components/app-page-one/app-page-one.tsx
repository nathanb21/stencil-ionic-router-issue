import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'app-page-one'
})
export class AppPageOne {

  render() {
    return (
      <Host>
        <ion-router-link href="/">Go to main</ion-router-link>
        <ion-router-link href="/page-one">Go to page one</ion-router-link>
        <ion-router-link href="/page-two">Go to page two</ion-router-link>
        <h1>Page One</h1>
      </Host>
    );
  }

}
