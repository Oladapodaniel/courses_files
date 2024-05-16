let navBarText = Cypress.env('NavBarText')

context('My First Test', () => {
    // beforeEach(() => {
    //     cy.visit('/')
    // })




    // it ('renders a paragraph under the h1', () => {
    //     cy.get('.container').eq(1).find('p').should('exist')
    // })

    // // Target multiple elements within a scope
    // it ('renders the section with the correct element', () => {
    //     cy.get('.container').eq(2).within(() => {
    //         cy.get('h4').should('exist')
    //         cy.get('p').should('exist')
    //     })
    // })
    // it ('renders cypress website link correctly', () => {
    //     cy.findByText(navBarText).should('exist')
    // })

    // it ('types into an email field', () => {
    //     cy.visit('/commands/actions')
    //     cy.findByPlaceholderText('Email').type('test@gmail.com')
    //     cy.wait(2000).then(() => {
    //         console.log('test is finished!')
    //         fetch('https://api.spacexdata.com/v3/missions')
    //             .then(res => res.json())
    //             .then(data => {
    //                 console.log(data)
    //             })
    //     })
    // })

    // it ('it should have class', () => {
    //     cy.visit('/commands/actions')
    //     cy.get('.dropdown-menu').find('li').eq(2).should('have.class', 'active')
    // })

    // it ('should not have class', () => {
    //     cy.visit('commands/actions')
    //     cy.get('.dropdown-menu').find('li').last().should('not.have.class', 'active').find('a').should('have.attr', 'href', '/commands/spies-stubs-clocks')
    // })

    // it ('all be 17 in length', () => {
    //     cy.visit('/commands/actions')
    //     cy.get('.dropdown-menu').find('li').should('have.length', 17)
    // })


    // let DESC = 'Test description'

    // it ('routes to the correct page', () => {
    //     cy.visit('/')
    //     // cy.findAllByText('Actions').first().click({ force: true });
    //     cy.findAllByText('Commands').first().click()
    //     cy.findAllByText('Actions').first().click();
    //     cy.url().should('include', '/commands/actions')
    // })

    // it ('lets you type in an input field', () => {
    //     cy.visit('/commands/actions')
    //     cy.findByPlaceholderText("Email").type('Test').should('have.value', 'Test')
    // })

    // it ('lets you clear an input field', () => {
    //     cy.visit('/commands/actions')
    //     cy.findByLabelText('Describe:').type(DESC).should('have.value', DESC).clear().should('have.value', '')
    // })

    // it ('lets you check a checkbox', () => {
    //     cy.visit('/commands/actions')
    //     cy.get('.action-checkboxes [type=checkbox]').eq(1).check({force: true}).should('be.checked')
    // })

    // Hooks in Cypress

    // before(() => {
    //     cy.request('https://api.spacexdata.com/v3/missions').its('body').should('have.length.above', 0)
    // })

    // beforeEach(() => {
    //     cy.visit('/')
    // })

    // afterEach (() => {
    //     cy.log('after hook is here')
    // })

    // after(() => {
    //     cy.log('the last hook run once all test are completed')
    // })

    // it('has an h1 on the page', () => {
    //     cy.get('h1').should('exist')
    // })

    // it('renders the h1 text correctly', () => {
    //     cy.get('h1').should('contain.text', 'Kitchen Sink')
    // })

    // Fixtures
    beforeEach(() => {
        cy.fixture('example').then(function (data) {
            this.data = data
            cy.log(this.data, 'THIS');
        })
    })   

    it ('pulls data from fixtures', () => {
        cy.fixture('example').then(data => {
            console.log(data)
        })
    })

    it ('updates a fixture data', () => {
        cy.fixture('example').then(data => {
            data.email = 'updated@gmail.com'
            cy.log(data)
        })
    })
})