describe('GET API - Profile', () => {
    
    context('valida a API de perfis', () => {
        it('todos os perfis', () => {
            
            // cy.request('GET','/api/profile')
            cy.request({
                url: '/api/profile',
                method: 'GET'
            }).then(({ status, duration, body }) => {
                // console.log(resposta.status)
                expect(status, 'Status Code').to.eq(200)
                expect(duration, 'Duração').to.be.lessThan(2000)
                expect(body[0].status, 'Cargo usuário 0').to.eq('QA Senior')
                expect(body[0].user.name, 'Nome Usuário').to.eq('Vitor Teste')
                expect(body[0].skills, 'Quantidade de Skills').to.have.lengthOf(1)
                expect(body[0].date, 'Data').to.not.be.null
            })
        })
        
    })

    context('valida um perfil específico', () => {
        
    })
})
