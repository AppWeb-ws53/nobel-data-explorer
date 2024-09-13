# Nobel Data Explorer
Nobel Data Explorer is a platform designed to explore historical and current data on Nobel Prize winners across various categories, including Peace, Physics, Chemistry, Medicine, Literature, and Economics. This project is led by the fictional researcher Alex Johansson, with the goal of facilitating access to this valuable information through an open API.

## Key Features
* Display a list of laureates with information such as first name, last name, birth date, gender, and number of prizes.
* Multilingual support: English (default) and Spanish.
* Modern user interface based on Material Design using the PrimeVue component library.
* Integration with the Nobel Prize API: http://api.nobelprize.org/v1/laureate.json?bornDate=1900
* Cards for each laureate, displaying key information.
* Toolbar with the title "Nobel Data Explorer" at the top of the home view.
* Footer displaying copyright information and developer details.

## Technical Stack
* Frontend Framework: Vue 3
* Build Tool: Vite
* UI Components: PrimeVue (Material Design)
* HTTP Client: Axios
* Internationalization: vue-i18n
* Accessibility: ARIA attributes applied to views
* Architecture: Domain-driven and layered, with separate subdomains for public (general UI components) and laureates (components related to laureate information).

# Author
