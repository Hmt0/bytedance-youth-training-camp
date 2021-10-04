import Button from "../../src/components/Button.vue";
// vtu
import { mount } from "@cypress/vue";

describe("Button", () => {
    it("should show app", () => {
        mount(Button);
        cy.contains("button");
    })
})