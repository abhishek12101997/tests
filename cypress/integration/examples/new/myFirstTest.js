describe('Test Suite',function()
{
    it('Lido_Learning_Initial_Page',function()
    { 
        //using css selector are harmfull to use.
        //getting to the intial page and clearing off the local storage 
        cy.clearLocalStorage()
        cy.visit('/')
        cy.url().should('include','lidolearning.com')
    })

    it('login_Page',function()
    {
        //going to the login page
        cy.get('.navbar-toggler').click()
        cy.get('div.container-fluid.nopadding:nth-child(1) nav.navbar.navbar-expand-xl.bg-white.navbar-light.fixed-top.px-xl-5.shadow-sm.paddingnav:nth-child(1) div.collapse.navbar-collapse.justify-content-between div.navbar-nav:nth-child(2) a.nav-link.btn-navlink:nth-child(2) > button.btn.btn-nav2').should('be.visible').should('not.be.disabled').click()
    })

    it('login',function()
    {
        cy.url().should('include','login/mobile')
        //dicussion of the test suite for the login page.
        //import the test cases from json data files.
        
        // check if the size oif the test case is less than 10 then continue button is diabled.
        cy.get('#mobile').should('be.visible').should('not.be.disabled').should('be.empty').type(28888888)
        cy.get('.bottom > .btn').should('be.disabled')
        //clear it for anew test case:
        cy.get('#mobile').clear().should('be.empty')

        cy.get('#mobile').should('be.visible').should('not.be.disabled').should('be.empty')
        cy.get('.bottom > .btn').should('be.disabled')
        //clear it for anew test case:
        cy.get('#mobile').clear().should('be.empty')

        // check if the size oif the test case is more than 10 then continue button is diabled.()it can open as well. but no case of that 
        
        //check if the size of test case is only 10 but wrong no. or unregistered number.
        cy.get('#mobile').should('be.visible').should('not.be.disabled').should('be.empty').type(3333333333)
        cy.get('.bottom > .btn').click()
        cy.get('.invalid-feedback').should('have.text','Please provide a valid phone number.')

        //clear it for anew test case:
        cy.get('#mobile').clear().should('be.empty')
        cy.get('#mobile').should('be.visible').should('not.be.disabled').should('be.empty').type('HJKHKJHKJHKJHKHJKH')
        cy.get('.bottom > .btn').should('be.disabled')
        
        //clear it for anew test case:
        cy.get('#mobile').clear().should('be.empty')

        cy.get('#mobile').should('be.visible').should('not.be.disabled').should('be.empty').type(2888888888)
        cy.get('.bottom > .btn').click()

        //some edge test case need to addressed
    })

    it('otp_page',function()
    {
        cy.url().should('include','login/otp')
        //dicussion of the test suite for the login page.
        //import the test cases from json data files.
        //in order to fully test need the otp which generated from the backend(important)
        // check if the size oif the test case is less than 6 then continue button is diabled.
        cy.get('#mobile').should('be.visible').should('not.be.disabled').should('be.empty').type(23455)
        cy.get(':nth-child(3) > .btn').should('be.disabled')
        //clear it for anew test case:
        cy.get('#mobile').clear().should('be.empty')

        cy.get('#mobile').should('be.visible').should('not.be.disabled').should('be.empty')
        cy.get(':nth-child(3) > .btn').should('be.disabled')
        //clear it for anew test case:
        cy.get('#mobile').clear().should('be.empty')

        // check if the size oif the test case is more than 10 then continue button is diabled.()it can open as well. but no case of that 
        //check if the size of test case is only 6 but wrong no. or wrong otp.
        cy.get('#mobile').should('be.visible').should('not.be.disabled').should('be.empty').type(676765)
        cy.get(':nth-child(3) > .btn').click()
        cy.get('.invalid-feedback').should('have.text','Please provide a valid OTP.')
        //clear it for anew test case:
        cy.get('#mobile').clear().should('be.empty')

        //take a charecter or not.
        cy.get('#mobile').should('be.visible').should('not.be.disabled').should('be.empty').type('HJKHKJHKJHKJHKHJKH')
        cy.get(':nth-child(3) > .btn').should('be.disabled')

        //clear it for anew test case:
        cy.get('#mobile').clear().should('be.empty')
        cy.get('#mobile').should('be.visible').should('not.be.disabled').should('be.empty').type(130012)
        cy.get(':nth-child(3) > .btn').should('be.not.be.disabled').click()

        //resend otp functionality need sto be added
    })

    //it('Student_Dashboard',function()
    //{
      //  cy.url().should('include','student.lidolearning.com')
        //cy.get(':nth-child(1) > .addRadio > label').should('be.visible').should('not.be.disabled')
        //skiping the popups and getting started.
        //cy.get(':nth-child(1) > .card-body > .pb-4 > .btn').click({force:true}).then(video =>{
          //  const videoElement = video.get(0);
           // return new Promise((resolve) => {
           // videoElement.oncanplay = () => {
           // videoElement.play()
          //} 
          //videoElement.onended = () => {
          //resolve(true)
          //}
        //})
    //})
    //cy.get('span').click()           
    //}) 
})