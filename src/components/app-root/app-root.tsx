import { Component, h, Host } from '@stencil/core';

@Component({
  tag: 'app-root'
})
export class AppRoot {
  render() {
    return (
      <Host>
        <ion-router>
          <ion-route
            component="app-page-one"
            url="/page-one"
          />
          <ion-route
            component="app-page-two"
            url="/page-two"
          />
          <ion-route component="app-main" url="/" />
        </ion-router>
        <ion-nav />
      </Host>
    );
  }
}
