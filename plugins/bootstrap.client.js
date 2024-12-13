// import bootstrap from 'bootstrap/dist/js/bootstrap.bundle';

import { Modal, Offcanvas } from 'bootstrap/dist/js/bootstrap.bundle.min';

export default defineNuxtPlugin((nuxtApp) => {

    // nuxtApp.provide("bootstrap", bootstrap);

    return {

        provide: {

            modal(element, options) { return new Modal(element, options) },
            offcanvas(element, options) { return new Offcanvas(element, options) }

        }

    }

});
