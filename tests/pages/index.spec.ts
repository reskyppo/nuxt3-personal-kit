import { mount } from "@vue/test-utils";
import Home from "pages/index.vue";

describe("Home", () => {
  it("renders correctly", () => {
    const wrapper = mount(Home);

    expect(wrapper.html()).toMatchSnapshot();
  });

  it("displays the correct text", () => {
    const wrapper = mount(Home);

    const alert = wrapper.find("#alert");
    const title = wrapper.find("#title");
    const subtitle = wrapper.find("#subtitle");
    const description = wrapper.find("#description");
    
    expect(alert.text()).toContain("Currently under development");
    expect(title.text()).toContain("Nuxt 3 Personal Kit");
    expect(subtitle.text()).toContain("Facilitate future development");
    expect(description.text()).toContain(
      "Tailwind Css, Pinia, VeeValidate, Yup, Vitest and Storybook"
    );
  });

  it("links to the correct pages", () => {
    const wrapper = mount(Home);

    const getStartedLink = wrapper.get('[href="/get-started"]');
    const learnMoreLink = wrapper.get('[href="/about"]');

    expect(getStartedLink.exists()).toBe(true);
    expect(learnMoreLink.exists()).toBe(true);
  });
});
