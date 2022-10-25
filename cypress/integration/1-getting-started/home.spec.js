describe('home page ', () => {



    it('Visitando meu Currículo ', function () {

        cy.visit('https://curriculojoaoricardosoares.web.app/')
        cy.get('div [id="about"]').click()
        cy.get('div [id="about"]').scrollIntoView({ duration: 2000 })
        cy.get('div [id="about"]').scrollIntoView({ offset: { top: 150, left: 0 } })
    })

    it('Minhas Experiências', function () {

        cy.get('div [id="experience"]').click()
        cy.get('div [id="experience"]').scrollIntoView({ duration: 2000 })
        cy.get('div [id="experience"]').scrollIntoView({ offset: { top: 150, left: 0 } })
    })

    it('Minha Educação', function () {

        cy.get('div [id="education"]').click()
        cy.get('div [id="education"]').scrollIntoView({ duration: 2000 })
        cy.get('div [id="education"]').scrollIntoView({ offset: { top: 150, left: 0 } })
    })

    it('Meus Certificados', function () {

        cy.get('div [id="awards"]').click()
        cy.get('div [id="awards"]').scrollIntoView({ duration: 2000 })
        cy.get('div [id="awards"]').scrollIntoView({ offset: { top: 150, left: 0 } })
    })

    it('Minhas Skills', function () {

        cy.get('div [id="skills"]').click()
        cy.get('div [id="skills"]').scrollIntoView({ duration: 2000 })
        cy.get('div [id="skills"]').scrollIntoView({ offset: { top: 150, left: 0 } })
    })

})