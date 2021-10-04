import { mount } from "@cypress/vue";
import App from "../../src/App.vue";

describe("App", () => {
    it("should show app", () => {
        mount(App);

        cy.contains("App");
    })
})